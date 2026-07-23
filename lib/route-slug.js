/**
 * route-slug.js — parseo de slugs "origen-a-destino" / "origen_destino" a
 * pares de estaciones reales del grafo CDMX.
 *
 * `/ruta/[slug]/` usa el conector "-a-" (ej. "zocalo-a-tasquena").
 * `/rutas/[ruta]/` usa el patrón legacy con guión bajo (ej.
 * "zocalo_tasquena") — ver REBUILD_SPEC.md §Rutas.
 *
 * parseCdmxRouteSlug NO asume que el primer "-a-" es el separador: al
 * menos una estación real del grafo (`u-a-m-i`, UAM Iztapalapa) contiene
 * "-a-" como substring, así que un split ingenuo rompe cuando esa estación
 * es el ORIGEN (ej. "u-a-m-i-a-bellas-artes" → split()[0] da "u", no
 * "u-a-m-i"). En vez de eso, prueba cada punto de corte posible y se queda
 * con el primero donde AMBOS lados resuelven a estaciones reales del grafo.
 */

export function parseCdmxRouteSlug(slug, grafo) {
  if (!slug || typeof slug !== 'string' || !grafo) return null
  const tokens = slug.split('-a-')
  if (tokens.length < 2) return null

  for (let i = 1; i < tokens.length; i++) {
    const origen = tokens.slice(0, i).join('-a-')
    const destino = tokens.slice(i).join('-a-')
    if (origen !== destino && grafo[origen] && grafo[destino]) {
      return { origen, destino }
    }
  }

  // Ninguna combinación resolvió contra el grafo — el slug no corresponde
  // a una ruta válida. No inventamos un fallback "mejor esfuerzo": null
  // señala explícitamente "ruta no encontrada" al caller.
  return null
}

export function parseUnderscoreRouteSlug(slug, grafo) {
  if (!slug || typeof slug !== 'string' || !grafo) return null
  const parts = slug.split('_')
  if (parts.length !== 2) return null
  const [origen, destino] = parts
  if (origen === destino || !grafo[origen] || !grafo[destino]) return null
  return { origen, destino }
}
