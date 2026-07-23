/**
 * Single source of truth for routes that are actually pre-built at build time.
 * Both sitemap.js AND each /<city>/ruta/[slug]/page.jsx should import from here
 * so the sitemap never lists URLs that would 404.
 *
 * With `output: 'export'` + `dynamicParams = false`, any slug NOT returned by
 * generateStaticParams() is a 404 in production. Google Search Console was
 * flagging 6,746 such 404s — that was sitemap/page mismatch.
 */

import fs from 'node:fs'
import path from 'node:path'
import { rutasPopulares } from '@/data/rutas-populares'
import {
  gdlStations,
  mtyStations,
  pueblaStations,
  meridaStations,
  leonStations,
  chihuahuaStations,
  tijuanaStations,
  queretaroStations,
  tolucaStations,
  trenmayaStations,
  oaxacaStations,
  moreliaStations,
  veracruzStations,
  campecheStations,
  villahermosaStations,
} from '@/data/rutas-engine'

// ─────────────────────────────────────────────────────────────────────────
// keep-urls-gsc-2026-07-22.txt es "el guardrail" (REBUILD_SPEC.md §Lo
// intocable #1): las URLs que ya rankean en GSC y DEBEN seguir existiendo
// exactas. Este módulo lee ese mismo archivo (fs, solo corre en build time /
// Node — nunca se importa desde un componente 'use client') para que
// getCdmxRouteSlugs()/getRutasLegacySlugs() sean, por construcción, un
// superset de lo que exige el guardrail. Si el archivo no está disponible
// (entorno raro), se degrada a solo la lista curada — nunca lanza.
// ─────────────────────────────────────────────────────────────────────────
function readKeepUrls() {
  try {
    const filePath = path.join(process.cwd(), 'keep-urls-gsc-2026-07-22.txt')
    return fs.readFileSync(filePath, 'utf8').split('\n')
  } catch {
    return []
  }
}

function readKeepUrlSlugsFor(prefix) {
  const re = new RegExp(`^${prefix}([^/]+)/?$`)
  const slugs = new Set()
  for (const line of readKeepUrls()) {
    const m = line.trim().match(re)
    if (m) slugs.add(m[1])
  }
  return slugs
}

// CDMX: top N curada (rutasPopulares, connector-aware — trae `titulo` listo
// para metadata) UNIDA con las ~588 URLs /ruta/* de keep-urls (excluyendo la
// página estática /ruta/calc/, que no es un patrón origen-a-destino).
// Unión, no reemplazo: preserva las rutas de mayor valor SEO (hub Zócalo,
// Estadio Azteca) aunque no estén en keep-urls, y garantiza el 100% de
// keep-urls aunque no estén en el top curado.
export const CDMX_MAX = 200
export function getCdmxRouteSlugs() {
  const curated = rutasPopulares.slice(0, CDMX_MAX).map(r => {
    const connector = r.connector || 'a'
    return `${r.origen}-${connector}-${r.destino}`
  })
  const keepUrlSlugs = [...readKeepUrlSlugsFor('/ruta/')].filter(s => s !== 'calc')
  return [...new Set([...curated, ...keepUrlSlugs])]
}

// /rutas/[o]_[d]/ — patrón legacy con guión bajo. Exactamente las URLs de
// keep-urls (13 al momento de escribir esto) — ver REBUILD_SPEC.md §Rutas.
export function getRutasLegacySlugs() {
  return [...readKeepUrlSlugsFor('/rutas/')]
}

// Generic hub × stations generator (matches the per-city page.jsx logic)
function hubRoutes(hubs, stations, max) {
  const out = []
  for (const hub of hubs) {
    for (const st of stations) {
      if (st !== hub) out.push(`${st}-a-${hub}`)
    }
  }
  return out.slice(0, max)
}

// Union helper — mismo patrón que getCdmxRouteSlugs()/getRutasLegacySlugs():
// generado (hub × estaciones) UNIDO con lo que keep-urls exige para ese
// prefijo, para que ninguna URL indexada en GSC pueda faltar aunque el
// generador hub-based no la produzca (ej. slugs con el hub COMO PRIMER
// segmento en vez de último — ocurre en varios de los 909 keep-urls).
function withKeepUrls(generated, prefix) {
  const keepUrlSlugs = [...readKeepUrlSlugsFor(prefix)]
  return [...new Set([...generated, ...keepUrlSlugs])]
}

// Must match app/gdl/ruta/[slug]/page.jsx
export function getGdlRouteSlugs() {
  const hubs = ['guadalajara-centro', 'estadio-chivas', 'central-de-autobuses', 'gdl-auditorio', 'san-juan-de-dios']
  return withKeepUrls(hubRoutes(hubs, gdlStations, 200), '/gdl/ruta/')
}

// Must match app/mty/ruta/[slug]/page.jsx (hubs + FIFA extras, capped at 500)
export function getMtyRouteSlugs() {
  const hubs = [
    'exposicion', 'parque-fundidora', 'mty-cuauhtemoc', 'fundadores', 'regina',
    'mty-universidad', 'central', 'hospital-metropolitano', 'general-i-zaragoza-l3',
    'mitras-ecovia', 'regina-ecovia', 'lincoln', 'valle-soleado',
  ]
  const params = []
  for (const hub of hubs) {
    for (const st of mtyStations) {
      if (st !== hub) params.push(`${st}-a-${hub}`)
    }
  }
  const fifaRoutes = [
    'sendero-a-exposicion', 'fundadores-a-exposicion', 'regina-a-exposicion',
    'parque-fundidora-a-exposicion', 'hospital-metropolitano-a-exposicion',
    'lincoln-a-exposicion', 'valle-soleado-a-exposicion',
    'general-i-zaragoza-l3-a-exposicion', 'alameda-a-parque-fundidora',
    'regina-a-fundadores', 'mty-cuauhtemoc-a-parque-fundidora',
    'sendero-a-parque-fundidora', 'talleres-a-exposicion',
    'lincoln-a-parque-fundidora', 'valle-soleado-a-parque-fundidora',
  ]
  const set = new Set(params)
  for (const s of fifaRoutes) if (!set.has(s)) params.push(s)
  return withKeepUrls(params.slice(0, 500), '/mty/ruta/')
}

// Simple hub-based cities (must match app/<city>/ruta/[slug]/page.jsx, cap 100)
// Cada una unida con keep-urls (ver withKeepUrls) — algunas ciudades chicas
// tienen 1-3 slugs indexados que el generador hub-based no produce.
export function getPueblaRouteSlugs()   { return withKeepUrls(hubRoutes(['capu', 'zocalo-centro', 'cholula'], pueblaStations, 100), '/puebla/ruta/') }
export function getMeridaRouteSlugs()   { return withKeepUrls(hubRoutes(['centro-historico', 'aeropuerto-manuel-crescencio-rejon', 'terminal-came', 'paseo-montejo'], meridaStations, 100), '/merida/ruta/') }
export function getLeonRouteSlugs()     { return withKeepUrls(hubRoutes(['catedral-basilica', 'capu-leon', 'estadio-leon', 'aeropuerto-bajio-acceso'], leonStations, 100), '/leon/ruta/') }
export function getChihuahuaRouteSlugs(){ return withKeepUrls(hubRoutes(['los-mochis', 'creel', 'divisadero', 'el-fuerte'], chihuahuaStations, 100), '/chihuahua/ruta/') }
export function getTijuanaRouteSlugs()  { return withKeepUrls(hubRoutes(['san-ysidro-frontera', 'zona-centro', 'aeropuerto-tj', 'playas-tj'], tijuanaStations, 100), '/tijuana/ruta/') }
export function getQueretaroRouteSlugs(){ return withKeepUrls(hubRoutes(['centro-historico-qro', 'terminal-5-febrero', 'estadio-corregidora-qro', 'tec-monterrey-qro'], queretaroStations, 100), '/queretaro/ruta/') }
export function getTolucaRouteSlugs()   { return withKeepUrls(hubRoutes(['zinacantepec-terminal', 'toluca-centro-bus', 'observatorio-cdmx', 'metepec'], tolucaStations, 100), '/toluca/ruta/') }
export function getTrenMayaRouteSlugs() { return withKeepUrls(hubRoutes(['cancun', 'tulum', 'chichen-itza', 'merida-oriente', 'palenque'], trenmayaStations, 100), '/tren-maya/ruta/') }
export function getOaxacaRouteSlugs()      { return withKeepUrls(hubRoutes(['oaxaca-centro-historico', 'oaxaca-monte-alban', 'oaxaca-terminal-ado'], oaxacaStations, 100), '/oaxaca/ruta/') }
export function getMoreliaRouteSlugs()     { return withKeepUrls(hubRoutes(['morelia-plaza-morelos', 'morelia-acueducto', 'morelia-cerro-garnica'], moreliaStations, 100), '/morelia/ruta/') }
export function getVeracruzRouteSlugs()    { return withKeepUrls(hubRoutes(['veracruz-centro-historico', 'veracruz-acuario', 'veracruz-terminal-autobuses'], veracruzStations, 100), '/veracruz/ruta/') }
export function getCampecheRouteSlugs()    { return withKeepUrls(hubRoutes(['campeche-centro-historico', 'campeche-tren-maya', 'campeche-edzna'], campecheStations, 100), '/campeche/ruta/') }
export function getVillahermosaRouteSlugs(){ return withKeepUrls(hubRoutes(['villahermosa-centro-historico', 'villahermosa-tren-maya-palenque', 'villahermosa-yumka'], villahermosaStations, 100), '/villahermosa/ruta/') }

// Aggregate helper by city key (matches sitemap prefix mapping)
export function getBuiltRouteSlugs(city) {
  switch (city) {
    case 'cdmx':      return getCdmxRouteSlugs()
    case 'gdl':       return getGdlRouteSlugs()
    case 'mty':       return getMtyRouteSlugs()
    case 'puebla':    return getPueblaRouteSlugs()
    case 'merida':    return getMeridaRouteSlugs()
    case 'leon':      return getLeonRouteSlugs()
    case 'chihuahua': return getChihuahuaRouteSlugs()
    case 'tijuana':   return getTijuanaRouteSlugs()
    case 'queretaro': return getQueretaroRouteSlugs()
    case 'toluca':    return getTolucaRouteSlugs()
    case 'tren-maya':     return getTrenMayaRouteSlugs()
    case 'oaxaca':        return getOaxacaRouteSlugs()
    case 'morelia':       return getMoreliaRouteSlugs()
    case 'veracruz':      return getVeracruzRouteSlugs()
    case 'campeche':      return getCampecheRouteSlugs()
    case 'villahermosa':  return getVillahermosaRouteSlugs()
    default:              return []
  }
}
