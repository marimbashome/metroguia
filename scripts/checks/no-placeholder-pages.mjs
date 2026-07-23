#!/usr/bin/env node
// scripts/checks/no-placeholder-pages.mjs
//
// Guardrail check:no-placeholder-pages (REBUILD_SPEC.md §Guardrails).
// Grep de out/ por señales de página renderizada sin datos: "undefined" o
// "null" visibles en el HTML, "[object Object]" (bug clásico de render), o
// un <title> vacío. Corre postbuild. Exit 1 con la lista de archivos +
// señal encontrada si hay alguna.
//
// Las señales se buscan SOLO en el HTML visible: se quitan <script> y
// <style> antes de grepear, porque ahí "null"/"undefined" aparecen legítimos
// (JSON-LD con campos opcionales en null, RSC payload serializado, etc.) y
// grepear el documento completo daría falsos positivos.

import fs from 'node:fs'
import path from 'node:path'

const ROOT = process.cwd()
const OUT_DIR = path.join(ROOT, 'out')

function walkHtmlFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      walkHtmlFiles(full, files)
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      files.push(full)
    }
  }
  return files
}

function stripScriptsAndStyles(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
}

const SIGNALS = [
  { name: 'texto "undefined" visible', re: /\bundefined\b/ },
  { name: 'texto "null" visible', re: /\bnull\b/ },
  { name: '"[object Object]" visible (bug de render)', re: /\[object Object\]/ },
  { name: '<title> vacío', re: /<title>\s*<\/title>/i },
]

function main() {
  if (!fs.existsSync(OUT_DIR)) {
    console.error(
      `[check:no-placeholder-pages] FALLÓ: no existe out/ — este check corre postbuild (next build con output:'export').`
    )
    process.exit(1)
  }

  const files = walkHtmlFiles(OUT_DIR)
  if (files.length === 0) {
    console.error(`[check:no-placeholder-pages] FALLÓ: out/ existe pero no tiene ningún .html.`)
    process.exit(1)
  }

  const offenders = []

  for (const file of files) {
    const raw = fs.readFileSync(file, 'utf-8')
    const visible = stripScriptsAndStyles(raw)
    for (const signal of SIGNALS) {
      if (signal.re.test(visible)) {
        offenders.push({ file: path.relative(ROOT, file), signal: signal.name })
      }
    }
  }

  if (offenders.length > 0) {
    console.error(
      `[check:no-placeholder-pages] FALLÓ: ${offenders.length} señal(es) de página vacía en ${files.length} páginas HTML revisadas:\n`
    )
    for (const o of offenders) console.error(`  ${o.file} — ${o.signal}`)
    console.error(
      `\nUna página real no debería mostrar "undefined"/"null"/"[object Object]" ni tener <title> vacío. Si el dato de verdad falta, la regla es mostrar "Por confirmarse" (REBUILD_SPEC.md), nunca dejar pasar el valor crudo al render.`
    )
    process.exit(1)
  }

  console.log(`[check:no-placeholder-pages] OK — ${files.length} páginas HTML revisadas, sin señales de vacío.`)
}

main()
