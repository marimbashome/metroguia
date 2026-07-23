#!/usr/bin/env node
// scripts/checks/keep-urls.mjs
//
// Guardrail check:keep-urls (REBUILD_SPEC.md §Lo intocable #1).
// Las 909 URLs de keep-urls-gsc-2026-07-22.txt (raíz del repo) DEBEN existir
// exactas en el build final — son las URLs que ya tienen ranking/tráfico en
// GSC (/estacion = 59% de impresiones, /ruta = 56% de los clics). Este
// script corre postbuild y verifica que cada una exista como
// out/<path>/index.html. Exit 1 con la lista de faltantes si alguna no está.
//
// Lee el .txt directamente (no vía lib/keep-urls.js) para poder correr como
// script Node plano en postbuild, sin pasar por el bundler/transpiler de
// Next — lib/keep-urls.js usa sintaxis ESM dentro de un .js en un paquete
// sin "type":"module" y solo es importable desde código que Next transpila.

import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const KEEP_URLS_FILE = path.join(ROOT, 'keep-urls-gsc-2026-07-22.txt')
const OUT_DIR = path.join(ROOT, 'out')

function readKeepUrls() {
  if (!fs.existsSync(KEEP_URLS_FILE)) {
    console.error(`[check:keep-urls] FALLÓ: no se encontró ${path.relative(ROOT, KEEP_URLS_FILE)}`)
    process.exit(1)
  }
  return fs
    .readFileSync(KEEP_URLS_FILE, 'utf-8')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
}

// '/'                    -> out/index.html
// '/cdmx/cablebus/'      -> out/cdmx/cablebus/index.html
// '/ruta/calc' (sin '/') -> misma ruta que '/ruta/calc/' (el .txt trae
//                           un puñado de URLs duplicadas con y sin slash
//                           final, ej. /ruta/calc y /estacion/polanco —
//                           normalizar las colapsa al mismo archivo, que
//                           es justo el comportamiento correcto con
//                           trailingSlash:true en next.config.js).
function urlToOutFile(url) {
  const trimmed = url.replace(/^\/+/, '').replace(/\/+$/, '')
  if (trimmed === '') return path.join(OUT_DIR, 'index.html')
  return path.join(OUT_DIR, trimmed, 'index.html')
}

function main() {
  if (!fs.existsSync(OUT_DIR)) {
    console.error(
      `[check:keep-urls] FALLÓ: no existe out/ — este check corre postbuild (next build con output:'export').`
    )
    process.exit(1)
  }

  const urls = readKeepUrls()
  const checked = new Set()
  const missing = []

  for (const url of urls) {
    const file = urlToOutFile(url)
    if (checked.has(file)) continue
    checked.add(file)
    if (!fs.existsSync(file)) missing.push(url)
  }

  if (missing.length > 0) {
    console.error(
      `[check:keep-urls] FALLÓ: ${missing.length} de ${checked.size} URLs únicas de keep-urls-gsc-2026-07-22.txt no existen en out/ tras el build:\n`
    )
    for (const url of missing) console.error(`  ${url}`)
    console.error(
      `\nCada URL debe existir exacta como out/<path>/index.html (REBUILD_SPEC.md §Lo intocable #1). Estas URLs ya tienen ranking/tráfico real en Search Console — perderlas es el riesgo #1 del rebuild.`
    )
    process.exit(1)
  }

  console.log(
    `[check:keep-urls] OK — ${checked.size} URLs únicas (${urls.length} líneas en el .txt) verificadas en out/.`
  )
}

main()
