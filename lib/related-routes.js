import { getRelatedRoutes } from '@/data/rutas-populares'
import { getCdmxRouteSlugs } from '@/data/built-routes'

// Cacheado a nivel de módulo — es la misma lista estática (748 slugs) para
// las ~750 páginas /ruta/[slug]/ que la consultan durante `next build`.
let builtSetCache = null
function getBuiltSet() {
  if (!builtSetCache) builtSetCache = new Set(getCdmxRouteSlugs())
  return builtSetCache
}

/**
 * getRelatedBuiltRoutes — sugerencias "rutas relacionadas" que SIEMPRE
 * apuntan a una página que existe.
 *
 * Con `dynamicParams = false` (output: 'export'), cualquier slug fuera de
 * generateStaticParams() es un 404 duro. data/rutas-populares.js tiene
 * ~4,770 combos CDMX curados, pero solo ~748 están pre-construidos (ver
 * data/built-routes.js#getCdmxRouteSlugs) — así que las sugerencias deben
 * filtrarse contra ese set antes de convertirse en <a href>.
 *
 * 1) Prioriza los combos curados (traen `titulo` editorial listo).
 * 2) Si no alcanzan el límite, completa con cualquier ruta construida que
 *    toque la misma estación (origen o destino), con título sintetizado
 *    desde el nombre real de la estación (grafo) — nunca un título vacío
 *    ni inventado.
 *
 * @param {string} origen
 * @param {string} destino
 * @param {Object} grafo - data/grafo.js, para resolver nombres reales
 * @param {number} [limit=6]
 * @returns {{origen:string, destino:string, slug:string, titulo:string}[]}
 */
export function getRelatedBuiltRoutes(origen, destino, grafo, limit = 6) {
  const builtSet = getBuiltSet()
  const selfSlug = `${origen}-a-${destino}`
  const seen = new Set([selfSlug])
  const out = []

  for (const r of getRelatedRoutes(origen, destino, 80)) {
    if (out.length >= limit) break
    const slug = `${r.origen}-a-${r.destino}`
    if (seen.has(slug) || !builtSet.has(slug)) continue
    seen.add(slug)
    out.push({ origen: r.origen, destino: r.destino, slug, titulo: r.titulo })
  }

  if (out.length < limit) {
    for (const slug of builtSet) {
      if (out.length >= limit) break
      if (seen.has(slug)) continue
      const i = slug.indexOf('-a-')
      if (i === -1) continue
      const o = slug.slice(0, i)
      const d = slug.slice(i + 3)
      if (o === origen || d === destino || o === destino || d === origen) {
        seen.add(slug)
        out.push({
          origen: o,
          destino: d,
          slug,
          titulo: `${grafo[o]?.nombre || o} a ${grafo[d]?.nombre || d}`,
        })
      }
    }
  }

  return out
}

/**
 * getBuiltRoutesForStation — rutas pre-construidas que salen o llegan a una
 * estación (para directorios/hubs, ej. /rutas/). Usa el mismo builtSet
 * cacheado que getRelatedBuiltRoutes, así que los links siempre existen.
 *
 * @param {string} stationSlug
 * @param {Object} grafo
 * @param {number} [limit=6]
 */
export function getBuiltRoutesForStation(stationSlug, grafo, limit = 6) {
  const builtSet = getBuiltSet()
  const out = []
  for (const slug of builtSet) {
    if (out.length >= limit) break
    const i = slug.indexOf('-a-')
    if (i === -1) continue
    const o = slug.slice(0, i)
    const d = slug.slice(i + 3)
    if (o !== stationSlug && d !== stationSlug) continue
    out.push({
      origen: o,
      destino: d,
      slug,
      titulo: `${grafo[o]?.nombre || o} → ${grafo[d]?.nombre || d}`,
    })
  }
  return out
}
