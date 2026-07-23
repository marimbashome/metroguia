#!/usr/bin/env node
// scripts/checks/sitemap-mx-only.mjs
//
// Guardrail check:sitemap-mx-only (REBUILD_SPEC.md §Guardrails).
// El sitemap generado (app/sitemap.js -> out/sitemap*.xml) NO debe contener
// rutas fuera de los patrones MX del rebuild: dominio correcto, y cada
// segmento inicial de cada URL corresponde a una carpeta de ruta real en
// app/ — nada de residuos de la versión anterior (i18n multi-idioma,
// ciudades de EEUU/Canadá en scripts/generate-us-ca-cities.js, páginas de
// Mundial/FIFA en _legacy-app/mundial-2026/). Corre postbuild.
//
// Busca TODOS los *.xml con "sitemap" en el nombre bajo out/ (no solo
// out/sitemap.xml) a propósito: public/ trae archivos estáticos legacy
// (public/sitemap.xml, public/sitemap-images.xml) que 'next export' copia
// tal cual a out/ si nadie los borró antes del build — y esos SÍ traen
// contenido no-MX (ver detalle abajo). Ese es justo el caso que este check
// existe para cachar.

import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const OUT_DIR = path.join(ROOT, 'out')
const APP_DIR = path.join(ROOT, 'app')
const DOMAIN_PREFIX = 'https://metroguia.mx/'

// Segmentos de ruta que NUNCA deben aparecer en una URL MX: prefijos de
// locale de la versión i18n anterior (translations/*.json), y palabras del
// torneo que el rebuild excluye a propósito (REBUILD_SPEC.md §Objetivo:
// "SIN ... Mundial"). Independiente de lo que haya hoy en app/ — actúa como
// red de seguridad aunque alguien reintroduzca una carpeta con ese nombre.
const DENYLIST_RE = new RegExp(
  '(^|/)(en|fr|de|ja|ko|pt|us|ca|usa|canada)(/|$)|mundial|fifa|world-cup',
  'i'
)

function walkXmlFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walkXmlFiles(full, files)
    } else if (entry.isFile() && /sitemap.*\.xml$/i.test(entry.name)) {
      files.push(full)
    }
  }
  return files
}

// Segmentos de primer nivel que SÍ son rutas reales: toda carpeta de app/
// que no sea una carpeta privada (prefijo '_', convención Next.js que la
// excluye del ruteo) ni 'components' (carpeta de componentes compartidos,
// sin page.jsx propio). Se deriva en vivo de app/ en vez de copiar la lista
// de ciudades a mano (Disciplina #2 CLAUDE.md: derivar, no hardcodear) —
// así el check nunca queda desincronizado cuando se agrega/quita una ciudad.
function getAllowedRootSegments() {
  const entries = fs.readdirSync(APP_DIR, { withFileTypes: true })
  return new Set(
    entries
      .filter((e) => e.isDirectory() && !e.name.startsWith('_') && e.name !== 'components')
      .map((e) => e.name)
  )
}

function extractLocs(xml) {
  const matches = xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/gi)
  return Array.from(matches, (m) => m[1])
}

function main() {
  if (!fs.existsSync(OUT_DIR)) {
    console.error(
      `[check:sitemap-mx-only] FALLÓ: no existe out/ — este check corre postbuild (next build con output:'export').`
    )
    process.exit(1)
  }

  const xmlFiles = walkXmlFiles(OUT_DIR)
  if (xmlFiles.length === 0) {
    console.error(`[check:sitemap-mx-only] FALLÓ: no se encontró ningún sitemap*.xml en out/.`)
    process.exit(1)
  }

  const allowedRootSegments = getAllowedRootSegments()
  const problems = []

  for (const file of xmlFiles) {
    const rel = path.relative(ROOT, file)
    const xml = fs.readFileSync(file, 'utf-8')

    // Un <sitemapindex> apuntando a sub-sitemaps (/sitemap/0.xml, 1.xml…)
    // es la huella del sitemap legacy chunked de la versión i18n anterior
    // (public/sitemap.xml estático) — no el sitemap.xml que genera
    // app/sitemap.js para este rebuild (ese es un <urlset> plano). Si
    // aparece, lo más probable es que el archivo estático en public/ ganó
    // el conflicto con la ruta dinámica y nunca se borró antes del build.
    if (/<sitemapindex\b/i.test(xml)) {
      problems.push({
        file: rel,
        detail:
          'es un <sitemapindex> (apunta a sub-sitemaps /sitemap/N.xml) — huella del sitemap legacy estático de public/, no el generado por app/sitemap.js. Revisar/borrar public/sitemap.xml antes del build.',
      })
      continue
    }

    const locs = extractLocs(xml)
    if (locs.length === 0) {
      problems.push({ file: rel, detail: 'no tiene ninguna entrada <loc> — sitemap vacío.' })
      continue
    }

    for (const loc of locs) {
      if (!loc.startsWith(DOMAIN_PREFIX)) {
        problems.push({ file: rel, detail: `dominio incorrecto: ${loc} (debe empezar con ${DOMAIN_PREFIX})` })
        continue
      }

      const pathname = loc.slice(DOMAIN_PREFIX.length - 1) // conserva el '/' inicial

      if (DENYLIST_RE.test(pathname)) {
        problems.push({ file: rel, detail: `patrón no-MX detectado: ${loc}` })
        continue
      }

      if (pathname === '/') continue

      const firstSegment = pathname.replace(/^\/+/, '').split('/')[0]
      if (!allowedRootSegments.has(firstSegment)) {
        problems.push({
          file: rel,
          detail: `${loc} — segmento inicial "${firstSegment}" no corresponde a ninguna carpeta de ruta en app/`,
        })
      }
    }
  }

  if (problems.length > 0) {
    console.error(`[check:sitemap-mx-only] FALLÓ: ${problems.length} problema(s) en ${xmlFiles.length} sitemap(s):\n`)
    for (const p of problems) console.error(`  ${p.file}: ${p.detail}`)
    console.error(
      `\nEl sitemap final solo debe traer URLs MX del patrón definido en REBUILD_SPEC.md (dominio metroguia.mx + segmento inicial = carpeta real de app/). Nada de locale prefixes, ciudades EEUU/Canadá, ni Mundial/FIFA.`
    )
    process.exit(1)
  }

  const totalLocs = xmlFiles.reduce((sum, f) => sum + extractLocs(fs.readFileSync(f, 'utf-8')).length, 0)
  console.log(
    `[check:sitemap-mx-only] OK — ${xmlFiles.length} archivo(s) sitemap*.xml, ${totalLocs} URLs, todas MX (dominio + patrón de ruta válidos).`
  )
}

main()
