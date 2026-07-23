// lib/keep-urls.js
//
// Lee `keep-urls-gsc-2026-07-22.txt` (raíz del repo) — las 909 URLs que el
// build final DEBE preservar exactas (REBUILD_SPEC.md §Lo intocable #1,
// guardrail `check:keep-urls`). Fuente única para cualquier página o script
// que necesite ese listado — nadie debe copiar/pegar slugs a mano desde el
// .txt (Disciplina #2 del CLAUDE.md del workspace: derivar, no hardcodear).
//
// Se ejecuta en build time (Node, `output: 'export'`), nunca en el cliente.

import fs from 'node:fs'
import path from 'node:path'

let _urls = null

/** @returns {string[]} las 909 URLs de keep-urls-gsc-2026-07-22.txt, tal cual. */
export function getKeepUrls() {
  if (_urls) return _urls
  const file = path.join(process.cwd(), 'keep-urls-gsc-2026-07-22.txt')
  const raw = fs.readFileSync(file, 'utf-8')
  _urls = raw
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean)
  return _urls
}

/**
 * Todas las URLs que empiezan con `prefix` (ej. '/cdmx/').
 * @param {string} prefix
 * @returns {string[]}
 */
export function getKeepUrlsByPrefix(prefix) {
  return getKeepUrls().filter((u) => u.startsWith(prefix))
}

/**
 * Slugs de un solo segmento directamente bajo `prefix`, ej.
 * getKeepUrlSlugs('/aeropuertos/') → ['zacatecas-zcl', 'chihuahua-cuu', ...]
 * Ignora URLs con más segmentos después del slug (ej. '/aeropuertos/x/y/').
 * @param {string} prefix - debe terminar en '/'
 * @returns {string[]}
 */
export function getKeepUrlSlugs(prefix) {
  const slugs = []
  for (const url of getKeepUrls()) {
    if (!url.startsWith(prefix)) continue
    const rest = url.slice(prefix.length).replace(/\/$/, '')
    if (rest && !rest.includes('/')) slugs.push(rest)
  }
  return slugs
}
