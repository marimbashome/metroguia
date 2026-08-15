#!/usr/bin/env node
/**
 * enrich-estaciones.mjs v2 — MetroGuia Station Content Enrichment Pipeline
 * -----------------------------------------------------------------------
 * Detects sparse station descriptions across all ~64 cities and regenerates
 * them using a multi-provider LLM chain:
 *   1. OpenRouter (openai/gpt-oss-120b:free) — primary, best quality
 *   2. Groq (openai/gpt-oss-120b) — fast fallback (llama-3.3 la apaga Groq el 2026-08-16)
 *   3. Ollama local (qwen2.5:7b) — last resort
 *
 * Usage:
 *   node scripts/enrich-estaciones.mjs              # Process all cities
 *   node scripts/enrich-estaciones.mjs --city=charlotte   # Single city
 *   node scripts/enrich-estaciones.mjs --dry-run    # Preview only, no writes
 *   node scripts/enrich-estaciones.mjs --force      # Re-enrich already-rich stations
 *   node scripts/enrich-estaciones.mjs --reset      # Clear progress and restart
 *   node scripts/enrich-estaciones.mjs --concurrency=3  # Parallel workers (default: 1)
 *
 * Env vars (optional — falls back to Ollama if not set):
 *   OPENROUTER_API_KEY=sk-or-v1-...
 *   GROQ_API_KEY=gsk_...
 *   OLLAMA_HOST=http://192.168.50.241:11434  (or second Mac IP)
 *
 * Estimated time: ~15-20 min for all cities with cloud providers
 * -----------------------------------------------------------------------
 */

import { readFileSync, writeFileSync, existsSync } from 'fs'
import { fileURLToPath } from 'url'
import path from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname  = path.dirname(__filename)
const REPO_ROOT  = path.join(__dirname, '..')
const DATA_DIR   = path.join(REPO_ROOT, 'data')
const PROGRESS_FILE = process.env.ENRICH_PROGRESS_FILE || path.join(__dirname, '.enrich-progress.json')

// ─── Config ──────────────────────────────────────────────────────────────────
const OLLAMA_HOST    = process.env.OLLAMA_HOST || 'http://localhost:11434'
const OLLAMA_URL     = `${OLLAMA_HOST}/api/generate`
const OLLAMA_MODEL   = 'qwen2.5:7b'
const BATCH_SIZE     = 1            // stations per concurrent slot (keep 1 for reliability)
const CONCURRENCY    = parseInt(process.env.CONCURRENCY || '3', 10)  // parallel slots = keys in flight simultaneously
const SPARSE_THRESHOLD = 150        // chars; below this = sparse
const DELAY_MS       = 100          // ms between chunks (cloud is fast)

// ─── Multi-key round-robin pools ─────────────────────────────────────────────
// Load all API keys per provider — env vars: OPENROUTER_API_KEY, OPENROUTER_API_KEY_2, etc.
// Round-robins across keys so when one hits rate limit, next key takes over.
function loadKeyPool(baseName) {
  const keys = []
  for (let i = 1; i <= 10; i++) {
    const envName = i === 1 ? baseName : `${baseName}_${i}`
    const val = process.env[envName]
    if (val) keys.push(val)
  }
  return keys
}

const OPENROUTER_KEYS = loadKeyPool('OPENROUTER_API_KEY')
const GROQ_KEYS       = loadKeyPool('GROQ_API_KEY')
const CEREBRAS_KEYS   = loadKeyPool('CEREBRAS_API_KEY')

// Round-robin counters per provider
const _rrIdx = { openrouter: 0, groq: 0, cerebras: 0 }
function nextKey(pool, provider) {
  if (!pool.length) return null
  const key = pool[_rrIdx[provider] % pool.length]
  _rrIdx[provider]++
  return key
}

// Backward compat
const OPENROUTER_KEY = OPENROUTER_KEYS[0] || ''
const GROQ_KEY       = GROQ_KEYS[0]       || ''

const ARGS = process.argv.slice(2)
const DRY_RUN    = ARGS.includes('--dry-run')
const FORCE      = ARGS.includes('--force')
const RESET      = ARGS.includes('--reset')
const CITY_FILTER = (ARGS.find(a => a.startsWith('--city=')) || '').replace('--city=', '')

// ─── City map ─────────────────────────────────────────────────────────────────
// Maps data folder → { exportName, lang }
const CITIES = [
  // US — FIFA 2026 host cities (highest priority)
  { folder: 'nyc',            exportName: 'estacionesNYC',           lang: 'en', country: 'USA', system: 'MTA Subway' },
  { folder: 'los-angeles',    exportName: 'estacionesLA',            lang: 'en', country: 'USA', system: 'LA Metro' },
  { folder: 'seattle',        exportName: 'estacionesSeattle',       lang: 'en', country: 'USA', system: 'Link Light Rail', skip: true }, // reference city
  { folder: 'kansas-city',    exportName: 'estacionesKansasCity',    lang: 'en', country: 'USA', system: 'KC Streetcar' },
  { folder: 'dallas',         exportName: 'estacionesDallas',        lang: 'en', country: 'USA', system: 'DART Light Rail' },
  { folder: 'san-francisco',  exportName: 'estacionesSF',            lang: 'en', country: 'USA', system: 'BART & Muni' },
  { folder: 'houston',        exportName: 'estacionesHOU',           lang: 'en', country: 'USA', system: 'Metro Houston' },
  { folder: 'philadelphia',   exportName: 'estacionesPhiladelphia',  lang: 'en', country: 'USA', system: 'SEPTA' },
  { folder: 'atlanta',        exportName: 'estacionesAtlanta',       lang: 'en', country: 'USA', system: 'MARTA' },
  // US — Other cities
  { folder: 'chicago',        exportName: 'estacionesChicago',       lang: 'en', country: 'USA', system: 'CTA L' },
  { folder: 'boston',         exportName: 'estacionesBoston',        lang: 'en', country: 'USA', system: 'MBTA' },
  { folder: 'miami',          exportName: 'estacionesMiami',         lang: 'en', country: 'USA', system: 'Metrorail' },
  { folder: 'washington-dc',  exportName: 'estacionesDC',            lang: 'en', country: 'USA', system: 'WMATA Metro' },
  { folder: 'denver',         exportName: 'estacionesDenver',        lang: 'en', country: 'USA', system: 'RTD Light Rail' },
  { folder: 'phoenix',        exportName: 'estacionesPhoenix',       lang: 'en', country: 'USA', system: 'Valley Metro Light Rail' },
  { folder: 'charlotte',      exportName: 'estacionesCharlotte',     lang: 'en', country: 'USA', system: 'CATS LYNX' },
  { folder: 'portland',       exportName: 'estacionesPortland',      lang: 'en', country: 'USA', system: 'TriMet MAX' },
  { folder: 'san-diego',      exportName: 'estacionesSanDiego',      lang: 'en', country: 'USA', system: 'MTS Trolley' },
  { folder: 'salt-lake-city', exportName: 'estacionesSaltLakeCity',  lang: 'en', country: 'USA', system: 'UTA TRAX' },
  { folder: 'minneapolis',    exportName: 'estacionesMinneapolis',   lang: 'en', country: 'USA', system: 'Metro Transit Light Rail' },
  { folder: 'baltimore',      exportName: 'estacionesBaltimore',     lang: 'en', country: 'USA', system: 'MTA Maryland Rail' },
  { folder: 'cleveland',      exportName: 'estacionesCleveland',     lang: 'en', country: 'USA', system: 'RTA Rapid' },
  { folder: 'pittsburgh',     exportName: 'estacionesPittsburgh',    lang: 'en', country: 'USA', system: 'PRT T Red Line' },
  { folder: 'st-louis',       exportName: 'estacionesStLouis',       lang: 'en', country: 'USA', system: 'MetroLink' },
  { folder: 'las-vegas',      exportName: 'estacionesLasVegas',      lang: 'en', country: 'USA', system: 'Las Vegas Monorail' },
  { folder: 'sacramento',     exportName: 'estacionesSacramento',    lang: 'en', country: 'USA', system: 'SacRT Light Rail' },
  { folder: 'orlando',        exportName: 'estacionesOrlando',       lang: 'en', country: 'USA', system: 'SunRail' },
  { folder: 'tampa',          exportName: 'estacionesTampa',         lang: 'en', country: 'USA', system: 'TECO Streetcar' },
  { folder: 'buffalo',        exportName: 'estacionesBuffalo',       lang: 'en', country: 'USA', system: 'NFTA Metro' },
  { folder: 'norfolk',        exportName: 'estacionesNorfolk',       lang: 'en', country: 'USA', system: 'The Tide Light Rail' },
  { folder: 'new-orleans',    exportName: 'estacionesNewOrleans',    lang: 'en', country: 'USA', system: 'RTA Streetcar' },
  { folder: 'honolulu',       exportName: 'estacionesHonolulu',      lang: 'en', country: 'USA', system: 'Honolulu Rail Transit' },
  { folder: 'nashville',      exportName: 'estacionesNashville',     lang: 'en', country: 'USA', system: 'WeGo Bus' },
  { folder: 'austin',         exportName: 'estacionesAustin',        lang: 'en', country: 'USA', system: 'Capital MetroRail' },
  { folder: 'oklahoma-city',  exportName: 'estacionesOklahomaCity',  lang: 'en', country: 'USA', system: 'OKC Streetcar' },
  { folder: 'milwaukee',      exportName: 'estacionesMilwaukee',     lang: 'en', country: 'USA', system: 'The Hop Lakefront' },
  { folder: 'jacksonville',   exportName: 'estacionesJacksonville',  lang: 'en', country: 'USA', system: 'Jacksonville Skyway' },
  { folder: 'el-paso',        exportName: 'estacionesElPaso',        lang: 'en', country: 'USA', system: 'El Paso Streetcar' },
  { folder: 'cincinnati',     exportName: 'estacionesCincinnati',    lang: 'en', country: 'USA', system: 'Cincinnati Bell Connector' },
  { folder: 'newark',         exportName: 'estacionesNewark',        lang: 'en', country: 'USA', system: 'NJ Transit Light Rail' },
  { folder: 'san-jose',       exportName: 'estacionesSanJose',       lang: 'en', country: 'USA', system: 'VTA Light Rail' },
  { folder: 'detroit',        exportName: 'estacionesDetroit',       lang: 'en', country: 'USA', system: 'QLine (M-1 Rail)' },
  { folder: 'tucson',         exportName: 'estacionesTucson',        lang: 'en', country: 'USA', system: 'Sun Link' },
  // Canada
  { folder: 'toronto',        exportName: 'estacionesTORONTO',       lang: 'en', country: 'Canada', system: 'TTC Subway' },
  { folder: 'vancouver',      exportName: 'estacionesVANCOUVER',     lang: 'en', country: 'Canada', system: 'TransLink SkyTrain' },
  { folder: 'montreal',       exportName: 'estacionesMontreal',      lang: 'en', country: 'Canada', system: 'STM Métro' },
  { folder: 'calgary',        exportName: 'estacionesCalgary',       lang: 'en', country: 'Canada', system: 'Calgary CTrain' },
  { folder: 'edmonton',       exportName: 'estacionesEdmonton',      lang: 'en', country: 'Canada', system: 'Edmonton LRT' },
  { folder: 'ottawa',         exportName: 'estacionesOttawa',        lang: 'en', country: 'Canada', system: 'O-Train Confederation Line' },
  { folder: 'mississauga',    exportName: 'estacionesMississauga',   lang: 'en', country: 'Canada', system: 'Hazel McCallion Light Rail Transit' },
  { folder: 'kitchener-waterloo', exportName: 'estacionesKitchenerWaterloo', lang: 'en', country: 'Canada', system: 'ION Light Rail Transit' },
  { folder: 'san-juan',       exportName: 'estacionesSanJuan',       lang: 'en', country: 'Puerto Rico', system: 'Tren Urbano' },
  // Mexico — FIFA 2026
  { folder: 'gdl',            exportName: 'estacionesGDL',           lang: 'es', country: 'México', system: 'Tren Ligero GDL' },
  { folder: 'mty',            exportName: 'estacionesMTY',           lang: 'es', country: 'México', system: 'Metrorrey' },
  // Mexico — Other
  { folder: 'chihuahua',      exportName: 'estacionesChihuahua',     lang: 'es', country: 'México', system: 'ViveBus Chihuahua' },
  { folder: 'leon',           exportName: 'estacionesLeon',          lang: 'es', country: 'México', system: 'Optibus León' },
  { folder: 'puebla',         exportName: 'estacionesPuebla',        lang: 'es', country: 'México', system: 'RUTA Puebla' },
  { folder: 'merida',         exportName: 'estacionesMerida',        lang: 'es', country: 'México', system: 'Ti Ho Mérida' },
  { folder: 'queretaro',      exportName: 'estacionesQueretaro',     lang: 'es', country: 'México', system: 'Q Bus Querétaro' },
  { folder: 'tren-maya',      exportName: 'estacionesTrenMaya',      lang: 'es', country: 'México', system: 'Tren Maya' },
  { folder: 'tijuana',        exportName: 'estacionesTijuana',       lang: 'es', country: 'México', system: 'Tijuana Trolley' },
  { folder: 'toluca',         exportName: 'estacionesToluca',        lang: 'es', country: 'México', system: 'Tren Interurbano Toluca' },
  { folder: 'villahermosa',   exportName: 'estacionesVillahermosa',  lang: 'es', country: 'México', system: 'BRT Villahermosa' },
  { folder: 'oaxaca',         exportName: 'estacionesOaxaca',        lang: 'es', country: 'México', system: 'BRT Oaxaca' },
  { folder: 'morelia',        exportName: 'estacionesMorelia',       lang: 'es', country: 'México', system: 'BRT Morelia' },
  { folder: 'campeche',       exportName: 'estacionesCampeche',      lang: 'es', country: 'México', system: 'BRT Campeche' },
  { folder: 'veracruz',       exportName: 'estacionesVeracruz',      lang: 'es', country: 'México', system: 'BRT Veracruz' },
  // World — Europe
  { folder: 'london',         exportName: 'estacionesLondon',        lang: 'en', country: 'UK',     system: 'London Underground (Tube)' },
  { folder: 'paris',          exportName: 'estacionesParis',         lang: 'fr', country: 'France', system: 'Paris Métro' },
  { folder: 'madrid',         exportName: 'estacionesMadrid',        lang: 'es', country: 'España', system: 'Metro de Madrid' },
  { folder: 'berlin',         exportName: 'estacionesBerlin',        lang: 'de', country: 'Germany', system: 'U-Bahn Berlin' },
  { folder: 'barcelona',      exportName: 'estacionesBarcelona',     lang: 'es', country: 'España', system: 'Metro de Barcelona' },
  // World — Latin America
  { folder: 'buenos-aires',   exportName: 'estacionesBuenosAires',   lang: 'es', country: 'Argentina', system: 'Subte Buenos Aires' },
  { folder: 'sao-paulo',      exportName: 'estacionesSaoPaulo',      lang: 'pt', country: 'Brasil',    system: 'Metrô São Paulo' },
  { folder: 'santiago',       exportName: 'estacionesSantiago',      lang: 'es', country: 'Chile',     system: 'Metro de Santiago' },
  { folder: 'bogota',         exportName: 'estacionesBogota',        lang: 'es', country: 'Colombia',  system: 'TransMilenio BRT' },
  { folder: 'lima',           exportName: 'estacionesLima',          lang: 'es', country: 'Perú',      system: 'Metro de Lima' },
  // World — Asia/Oceania
  { folder: 'tokyo',          exportName: 'estacionesTokyo',         lang: 'ja', country: 'Japan',    system: 'Tokyo Metro' },
  { folder: 'seoul',          exportName: 'estacionesSeoul',         lang: 'ko', country: 'Korea',    system: 'Seoul Metro' },
  { folder: 'singapore',      exportName: 'estacionesSingapore',     lang: 'en', country: 'Singapore', system: 'MRT Singapore' },
  { folder: 'dubai',          exportName: 'estacionesDubai',         lang: 'en', country: 'UAE',      system: 'Dubai Metro' },
  { folder: 'sydney',         exportName: 'estacionesSydney',        lang: 'en', country: 'Australia', system: 'Sydney Metro' },
]

// ─── Few-shot examples (Seattle — high quality reference) ────────────────────
const FEW_SHOT_EN = [
  {
    input: {
      slug: "seattle-angle-lake",
      nombre: "Angle Lake",
      tipo_zona: "recreational",
      municipio: "SeaTac",
      pois: [{ nombre: "Angle Lake Park", tipo: "parks", distancia: "walking distance" }],
      sistema: "Link Light Rail"
    },
    output: {
      intro: "A gateway to one of the Puget Sound region's finest recreational parks, ideal for families and outdoor enthusiasts.",
      descripcion_turistica: "Angle Lake station is a gateway to one of the Puget Sound region's finest recreational parks. The lake offers swimming, picnicking, and beautiful natural scenery. In summer, the beach is a popular destination for families. The station makes it easy to access this regional treasure without a car.",
      tips: [
        "Angle Lake Park is free to enter — bring a picnic for the beach",
        "Summer weekends are popular; arrive early for parking and seating",
        "The station connects directly to Sea-Tac Airport via the same line"
      ],
      mejor_horario: "Early summer mornings for the lake, evenings for a quiet stroll"
    }
  },
  {
    input: {
      slug: "seattle-tukwila-intl-blvd",
      nombre: "Tukwila International Boulevard",
      tipo_zona: "commercial",
      municipio: "Tukwila",
      pois: [{ nombre: "Southcenter Mall", tipo: "shopping", distancia: "adjacent" }],
      sistema: "Link Light Rail"
    },
    output: {
      intro: "A major commercial hub serving Southcenter Mall, one of the Pacific Northwest's largest shopping centers.",
      descripcion_turistica: "Tukwila International Blvd station serves as a major commercial hub, with Southcenter Mall being one of the Pacific Northwest's largest shopping centers. The station provides easy access to hundreds of retail stores, restaurants, and entertainment venues. It's an ideal destination for shopping enthusiasts without needing a car.",
      tips: [
        "Southcenter Mall has over 200 stores — allow a half-day for a full visit",
        "Free trolley service connects the station to the mall entrance",
        "Less crowded on weekday mornings; avoid Saturday afternoons"
      ],
      mejor_horario: "Weekday mornings for relaxed shopping, or weekends if you enjoy the bustle"
    }
  }
]

const FEW_SHOT_ES = [
  {
    input: {
      slug: "gdl-juarez",
      nombre: "Juárez",
      tipo_zona: "histórico",
      municipio: "Guadalajara",
      pois: [{ nombre: "Centro Histórico Guadalajara", tipo: "histórico", distancia: "cercano" }],
      sistema: "Tren Ligero GDL"
    },
    output: {
      intro: "Estación en el corazón histórico de Guadalajara, con acceso a mercados tradicionales y la zona colonial.",
      descripcion_turistica: "La estación Juárez conecta al visitante con lo mejor del centro histórico tapatío. A pocos pasos se encuentra el Mercado Libertad (San Juan de Dios), el más grande de América Latina, y la Catedral Metropolitana de Guadalajara. Es el punto de partida ideal para recorrer la arquitectura colonial y probar la auténtica birria y tortas ahogadas.",
      tips: [
        "El Mercado San Juan de Dios abre desde las 6 AM — ideal para desayuno tradicional",
        "Evita el trayecto en hora pico (7–9 AM y 5–7 PM) para mayor comodidad",
        "Las noches del viernes y sábado hay música en vivo en las plazas cercanas"
      ],
      mejor_horario: "Mañanas entre semana para el mercado; tardes del fin de semana para la zona peatonal"
    }
  }
]

// ─── Quality detection ────────────────────────────────────────────────────────
const GENERIC_PHRASES = [
  'Access to', 'Gateway to', 'residential neighborhoods', 'community access',
  'residential area', 'local access', 'commercial services', 'Fully accessible station',
  'terminus of', 'government and civic', 'residential corridors',
  'acceso al', 'zona residencial', 'servicios locales', 'acceso a zonas'
]

function isSparse(station) {
  const desc = station.descripcion_turistica || ''
  const intro = station.intro || ''
  if (desc.length < SPARSE_THRESHOLD) return true
  if (GENERIC_PHRASES.some(p => desc.toLowerCase().includes(p.toLowerCase()) && desc.length < 200)) return true
  if (intro.length < 30) return true
  return false
}

// ─── File I/O ─────────────────────────────────────────────────────────────────
function loadStationsRaw(filePath, exportName) {
  if (!existsSync(filePath)) return null
  const content = readFileSync(filePath, 'utf8')
  // Match the main export array — handles multiline
  const regex = new RegExp(`export const ${exportName}\\s*=\\s*(\\[)`, 's')
  const match = content.match(regex)
  if (!match) {
    // Try alternate pattern (e.g., export const X = [ with whitespace)
    console.warn(`  ⚠ Could not find export "${exportName}" in ${filePath}`)
    return null
  }
  // Find matching bracket to extract the full array
  const startIdx = content.indexOf('[', match.index)
  let depth = 0
  let endIdx = startIdx
  for (let i = startIdx; i < content.length; i++) {
    if (content[i] === '[') depth++
    else if (content[i] === ']') {
      depth--
      if (depth === 0) { endIdx = i; break }
    }
  }
  const arrayStr = content.slice(startIdx, endIdx + 1)
  try {
    // Use Function constructor to safely eval JS object literals
    // eslint-disable-next-line no-new-func
    return new Function(`return ${arrayStr}`)()
  } catch (e) {
    console.warn(`  ⚠ Parse error in ${filePath}: ${e.message}`)
    return null
  }
}

function writeStations(filePath, exportName, stations, extraExports = []) {
  const json = JSON.stringify(stations, null, 2)
  let content = `export const ${exportName} = ${json};\n`
  for (const alias of extraExports) {
    content += `\nexport const ${alias} = ${exportName};\n`
  }
  writeFileSync(filePath, content, 'utf8')
}

function getExtraExports(filePath, exportName) {
  // Detect alias exports like: export const estacionesSEA = estacionesSeattle;
  const content = readFileSync(filePath, 'utf8')
  const aliases = []
  const regex = /export const (\w+)\s*=\s*(\w+)\s*;/g
  let m
  while ((m = regex.exec(content)) !== null) {
    if (m[2] === exportName && m[1] !== exportName) {
      aliases.push(m[1])
    }
  }
  return aliases
}

// ─── Progress tracking ────────────────────────────────────────────────────────
function loadProgress() {
  if (RESET && existsSync(PROGRESS_FILE)) {
    writeFileSync(PROGRESS_FILE, '{}', 'utf8')
    console.log('🔄 Progress reset.\n')
    return {}
  }
  if (!existsSync(PROGRESS_FILE)) return {}
  try {
    return JSON.parse(readFileSync(PROGRESS_FILE, 'utf8'))
  } catch {
    return {}
  }
}

function saveProgress(progress) {
  if (!DRY_RUN) writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2), 'utf8')
}

// ─── LLM Multi-Provider ───────────────────────────────────────────────────────
// Intenta proveedores en orden: OpenRouter → Groq → Ollama local
// Devuelve { text, provider }

async function callOpenAICompat(baseUrl, apiKey, model, prompt, timeoutMs = 60_000) {
  const res = await fetch(`${baseUrl}/chat/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`,
      'HTTP-Referer': 'https://metroguia.mx',
      'X-Title': 'MetroGuia Enrichment',
    },
    body: JSON.stringify({
      model,
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1024,
      temperature: 0.75,
    }),
    signal: AbortSignal.timeout(timeoutMs),
  })
  if (!res.ok) {
    const err = await res.text().catch(() => res.statusText)
    throw new Error(`HTTP ${res.status}: ${err.slice(0, 200)}`)
  }
  const data = await res.json()
  const text = data?.choices?.[0]?.message?.content?.trim() || ''
  if (!text) throw new Error('Empty response')
  return text
}

async function callOllamaLocal(prompt) {
  const res = await fetch(OLLAMA_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: OLLAMA_MODEL,
      prompt,
      stream: false,
      options: { temperature: 0.75, top_p: 0.9, num_predict: 2048 }
    }),
    signal: AbortSignal.timeout(600_000)
  })
  if (!res.ok) throw new Error(`Ollama HTTP ${res.status}`)
  const data = await res.json()
  return data.response || ''
}

async function callLLM(prompt) {
  // 1. OpenRouter — round-robin across all keys (gpt-oss-120b:free)
  if (OPENROUTER_KEYS.length) {
    const key = nextKey(OPENROUTER_KEYS, 'openrouter')
    const keyLabel = `key${((_rrIdx.openrouter) % OPENROUTER_KEYS.length) + 1}`
    try {
      const text = await callOpenAICompat(
        'https://openrouter.ai/api/v1', key,
        'openai/gpt-oss-120b:free', prompt, 45_000
      )
      return { text, provider: `openrouter/gpt-oss-120b:free[${keyLabel}]` }
    } catch (e) {
      console.warn(`  ↩ OpenRouter ${keyLabel} failed (${e.message.slice(0, 80)}), trying Groq…`)
    }
  }

  // 2. Groq — round-robin across all keys (openai/gpt-oss-120b: reemplazo oficial de llama-3.3, apagada por Groq el 2026-08-16)
  if (GROQ_KEYS.length) {
    const key = nextKey(GROQ_KEYS, 'groq')
    const keyLabel = `key${((_rrIdx.groq) % GROQ_KEYS.length) + 1}`
    try {
      const text = await callOpenAICompat(
        'https://api.groq.com/openai/v1', key,
        'openai/gpt-oss-120b', prompt, 30_000
      )
      return { text, provider: `groq/openai/gpt-oss-120b[${keyLabel}]` }
    } catch (e) {
      console.warn(`  ↩ Groq ${keyLabel} failed (${e.message.slice(0, 80)}), trying Cerebras…`)
    }
  }

  // 3. Cerebras — round-robin across all keys (llama3.3-70b, extremely fast)
  if (CEREBRAS_KEYS.length) {
    const key = nextKey(CEREBRAS_KEYS, 'cerebras')
    const keyLabel = `key${((_rrIdx.cerebras) % CEREBRAS_KEYS.length) + 1}`
    try {
      const text = await callOpenAICompat(
        'https://api.cerebras.ai/v1', key,
        'llama3.3-70b', prompt, 20_000
      )
      return { text, provider: `cerebras/llama3.3-70b[${keyLabel}]` }
    } catch (e) {
      console.warn(`  ↩ Cerebras ${keyLabel} failed (${e.message.slice(0, 80)}), falling back to Ollama…`)
    }
  }

  // 4. Ollama local (última opción)
  const text = await callOllamaLocal(prompt)
  return { text, provider: `ollama/${OLLAMA_MODEL}@${OLLAMA_HOST}` }
}

// Alias para compatibilidad con código existente
async function callOllama(prompt) {
  const { text } = await callLLM(prompt)
  return text
}

function buildPrompt(stations, cityInfo) {
  const { country, system, lang } = cityInfo
  const isES = lang === 'es'
  const s = stations[0] // batch size = 1

  const nearbyStr = (s.pois || []).slice(0, 4).map(p =>
    typeof p === 'string' ? p : p.nombre
  ).filter(Boolean).join(', ')

  if (isES) {
    return `Eres guía turístico experto en ${country}. Escribe contenido para la estación de metro/tren "${s.nombre}" del sistema ${system}${nearbyStr ? `, cerca de: ${nearbyStr}` : ''}.

Responde SOLO con este JSON (sin markdown, sin explicaciones):
{"slug":"${s.slug}","intro":"<1 oración vibrante que capture la esencia para turistas, 15-25 palabras>","descripcion_turistica":"<2-3 oraciones con lugares reales, nombres específicos, qué hacer y ver, 80-150 palabras>","tips":["<consejo específico y práctico 1>","<consejo específico y práctico 2>","<consejo específico y práctico 3>"],"mejor_horario":"<ej: Mañanas entre semana para evitar multitudes>"}
`
  } else {
    return `You are an expert tourist guide for ${country}. Write content for the transit station "${s.nombre}" on the ${system}${nearbyStr ? `, near: ${nearbyStr}` : ''}.

Reply ONLY with this JSON (no markdown, no explanation):
{"slug":"${s.slug}","intro":"<1 vivid sentence capturing the station's essence for tourists, 15-25 words>","descripcion_turistica":"<2-3 sentences with real place names, specific details, what to see and do, 80-150 words>","tips":["<specific practical tip 1>","<specific practical tip 2>","<specific practical tip 3>"],"mejor_horario":"<e.g. Weekday mornings to avoid rush hour crowds>"}
`
  }
}

function parseOllamaResponse(responseText, expectedSlugs) {
  let raw = responseText.trim()
  // Strip markdown fences
  raw = raw.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim()

  // Try direct parse (object or array)
  try {
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed)) return parsed
    if (parsed && parsed.slug) return [parsed]
  } catch {}

  // Extract first JSON object with "slug"
  const objStart = raw.indexOf('{')
  if (objStart >= 0) {
    let depth = 0, i = objStart
    for (; i < raw.length; i++) {
      if (raw[i] === '{') depth++
      if (raw[i] === '}') { depth--; if (depth === 0) { i++; break } }
    }
    try {
      const obj = JSON.parse(raw.slice(objStart, i))
      if (obj.slug) return [obj]
    } catch {}
  }

  throw new Error(`JSON parse failed. Raw: ${raw.slice(0, 300)}`)
}

// ─── Enrichment logic ─────────────────────────────────────────────────────────
async function enrichBatch(sparseStations, cityInfo) {
  const prompt = buildPrompt(sparseStations, cityInfo)
  const { text, provider } = await callLLM(prompt)
  const enriched = parseOllamaResponse(text, sparseStations.map(s => s.slug))
  return { enriched, provider }
}

function mergeEnrichedData(original, enriched) {
  const enrichedMap = {}
  for (const item of enriched) {
    if (item.slug) enrichedMap[item.slug] = item
  }
  return original.map(station => {
    const e = enrichedMap[station.slug]
    if (!e) return station
    return {
      ...station,
      intro: e.intro || station.intro,
      descripcion_turistica: e.descripcion_turistica || station.descripcion_turistica,
      tips: Array.isArray(e.tips) && e.tips.length >= 2 ? e.tips : station.tips,
      mejor_horario: e.mejor_horario || station.mejor_horario
    }
  })
}

// ─── Main per-city processor ──────────────────────────────────────────────────
async function processCity(cityInfo, progress) {
  const { folder, exportName, lang } = cityInfo
  if (cityInfo.skip) {
    console.log(`⏭  ${folder.padEnd(22)} [SKIP — reference city]`)
    return 0
  }

  const filePath = path.join(DATA_DIR, folder, 'estaciones.js')
  if (!existsSync(filePath)) {
    console.log(`⚠  ${folder.padEnd(22)} [NO estaciones.js — skipping]`)
    return 0
  }

  const stations = loadStationsRaw(filePath, exportName)
  if (!stations || stations.length === 0) {
    console.log(`⚠  ${folder.padEnd(22)} [empty or parse error]`)
    return 0
  }

  const doneSlug = new Set(progress[folder] || [])
  const sparseStations = stations.filter(s => {
    if (doneSlug.has(s.slug)) return false
    return FORCE ? true : isSparse(s)
  })

  if (sparseStations.length === 0) {
    console.log(`✅ ${folder.padEnd(22)} ${stations.length} stations — all rich`)
    return 0
  }

  console.log(`\n🏙  ${folder.toUpperCase()} — ${stations.length} total, ${sparseStations.length} sparse`)
  if (DRY_RUN) {
    console.log(`   [DRY RUN] Would enrich ${sparseStations.length} stations`)
    sparseStations.slice(0, 3).forEach(s => {
      console.log(`   • ${s.slug}: "${(s.descripcion_turistica || '').slice(0, 60)}…"`)
    })
    return sparseStations.length
  }

  let workingStations = [...stations]
  let enrichedCount = 0
  const extraExports = getExtraExports(filePath, exportName)
  const startTime = Date.now()

  // Process in concurrent chunks — each slot fires a different key simultaneously
  for (let i = 0; i < sparseStations.length; i += CONCURRENCY) {
    const chunk = sparseStations.slice(i, i + CONCURRENCY)
    const chunkNum = Math.floor(i / CONCURRENCY) + 1
    const totalChunks = Math.ceil(sparseStations.length / CONCURRENCY)
    const elapsed = ((Date.now() - startTime) / 1000).toFixed(0)
    const rate = enrichedCount > 0 ? (enrichedCount / ((Date.now() - startTime) / 60000)).toFixed(1) : '?'
    process.stdout.write(`   [${elapsed}s ${rate}/min] Chunk ${chunkNum}/${totalChunks} (×${chunk.length})… `)

    // Fire all slots simultaneously — round-robin counter auto-distributes keys
    const results = await Promise.allSettled(
      chunk.map(station => enrichBatch([station], cityInfo))
    )

    // Merge results
    let chunkOk = 0
    const providers = []
    for (let j = 0; j < results.length; j++) {
      const res = results[j]
      if (res.status === 'fulfilled') {
        const { enriched, provider } = res.value
        workingStations = mergeEnrichedData(workingStations, enriched)
        enrichedCount += enriched.filter(e => e.slug).length
        doneSlug.add(chunk[j].slug)
        chunkOk++
        const pShort = provider.replace('openrouter/gpt-oss-120b:free', 'OR').replace('groq/llama-3.3-70b-versatile', 'Groq').replace('cerebras/llama3.3-70b', 'CB')
        providers.push(pShort)
      } else {
        console.log(`\n   ✗ slot ${j+1} failed: ${results[j].reason?.message?.slice(0,60)}`)
      }
    }

    // Save progress + write file once per chunk
    progress[folder] = [...doneSlug]
    saveProgress(progress)
    writeStations(filePath, exportName, workingStations, extraExports)
    console.log(`✓ ${chunkOk}/${chunk.length} [${providers.join(' | ')}]`)

    if (i + CONCURRENCY < sparseStations.length) {
      await new Promise(r => setTimeout(r, DELAY_MS))
    }
  }

  const totalSecs = ((Date.now() - startTime) / 1000).toFixed(0)
  const avgRate = (enrichedCount / ((Date.now() - startTime) / 60000)).toFixed(1)
  console.log(`   ✅ Done: ${enrichedCount}/${sparseStations.length} enriched in ${totalSecs}s (${avgRate}/min)`)
  return enrichedCount
}

// ─── Entry point ─────────────────────────────────────────────────────────────
async function main() {
  console.log('═══════════════════════════════════════════════════')
  console.log('  MetroGuia Station Enrichment Pipeline v3 — CONCURRENT')
  console.log('  Providers: OpenRouter → Groq → Cerebras → Ollama')
  console.log(`  Keys loaded: OR×${OPENROUTER_KEYS.length} | Groq×${GROQ_KEYS.length} | Cerebras×${CEREBRAS_KEYS.length}`)
  console.log(`  Concurrency: ${CONCURRENCY} slots/worker (${CONCURRENCY} simultaneous calls)`)
  if (DRY_RUN) console.log('  ⚠  DRY RUN — no files will be modified')
  if (CITY_FILTER) console.log(`  🎯 City filter: ${CITY_FILTER}`)
  console.log('═══════════════════════════════════════════════════\n')

  // Discover available providers
  if (!DRY_RUN) {
    const providerStatus = []

    if (OPENROUTER_KEYS.length) {
      try {
        const r = await fetch('https://openrouter.ai/api/v1/models', {
          headers: { 'Authorization': `Bearer ${OPENROUTER_KEYS[0]}` },
          signal: AbortSignal.timeout(5000)
        })
        providerStatus.push(r.ok ? `✅ OpenRouter ×${OPENROUTER_KEYS.length} keys (gpt-oss-120b:free)` : '❌ OpenRouter (HTTP '+r.status+')')
      } catch (e) { providerStatus.push('❌ OpenRouter ('+e.message.slice(0,40)+')') }
    } else {
      providerStatus.push('⚪ OpenRouter (no key — set OPENROUTER_API_KEY)')
    }

    if (GROQ_KEYS.length) {
      try {
        const r = await fetch('https://api.groq.com/openai/v1/models', {
          headers: { 'Authorization': `Bearer ${GROQ_KEYS[0]}` },
          signal: AbortSignal.timeout(5000)
        })
        providerStatus.push(r.ok ? `✅ Groq ×${GROQ_KEYS.length} keys (llama-3.3-70b-versatile)` : '❌ Groq (HTTP '+r.status+')')
      } catch (e) { providerStatus.push('❌ Groq ('+e.message.slice(0,40)+')') }
    } else {
      providerStatus.push('⚪ Groq (no key — set GROQ_API_KEY)')
    }

    if (CEREBRAS_KEYS.length) {
      try {
        const r = await fetch('https://api.cerebras.ai/v1/models', {
          headers: { 'Authorization': `Bearer ${CEREBRAS_KEYS[0]}` },
          signal: AbortSignal.timeout(5000)
        })
        providerStatus.push(r.ok ? `✅ Cerebras ×${CEREBRAS_KEYS.length} keys (llama3.3-70b)` : '❌ Cerebras (HTTP '+r.status+')')
      } catch (e) { providerStatus.push('❌ Cerebras ('+e.message.slice(0,40)+')') }
    } else {
      providerStatus.push('⚪ Cerebras (no key — set CEREBRAS_API_KEY)')
    }

    try {
      const ping = await fetch(`${OLLAMA_HOST}/api/tags`, { signal: AbortSignal.timeout(3000) })
      providerStatus.push(ping.ok ? `✅ Ollama local (${OLLAMA_MODEL} @ ${OLLAMA_HOST})` : `❌ Ollama (HTTP ${ping.status})`)
    } catch {
      providerStatus.push(`⚪ Ollama (not reachable at ${OLLAMA_HOST})`)
    }

    providerStatus.forEach(s => console.log(' ', s))
    console.log()

    const hasAnyProvider = OPENROUTER_KEYS.length || GROQ_KEYS.length || CEREBRAS_KEYS.length
    if (!hasAnyProvider) {
      // Only Ollama — verify it's up
      const ollamaLine = providerStatus.find(s => s.includes('Ollama'))
      if (!ollamaLine?.startsWith('✅')) {
        console.error('❌ No LLM provider available. Set OPENROUTER_API_KEY or GROQ_API_KEY, or start Ollama.')
        process.exit(1)
      }
    }
  }

  const progress = loadProgress()
  const citiesToProcess = CITY_FILTER
    ? CITIES.filter(c => c.folder === CITY_FILTER)
    : CITIES

  if (CITY_FILTER && citiesToProcess.length === 0) {
    console.error(`❌ City "${CITY_FILTER}" not found in CITIES list`)
    process.exit(1)
  }

  let totalEnriched = 0
  const startTime = Date.now()

  for (const cityInfo of citiesToProcess) {
    const count = await processCity(cityInfo, progress)
    totalEnriched += count
  }

  const elapsed = Math.round((Date.now() - startTime) / 1000)
  const mins = Math.floor(elapsed / 60)
  const secs = elapsed % 60

  console.log('\n═══════════════════════════════════════════════════')
  console.log(`  ✅ Pipeline complete!`)
  console.log(`  Stations enriched: ${totalEnriched}`)
  console.log(`  Time: ${mins}m ${secs}s`)
  if (!DRY_RUN) console.log(`  Progress saved: ${PROGRESS_FILE}`)
  console.log('═══════════════════════════════════════════════════')
}

main().catch(err => {
  console.error('\n💥 Fatal error:', err)
  process.exit(1)
})
