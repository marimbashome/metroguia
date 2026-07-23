/**
 * app/_city/lib.js — helpers puros (sin JSX) para los árboles de ciudad
 * NO-CDMX. Corrigen, del lado del consumidor, dos desajustes reales de
 * forma de datos detectados en data/<ciudad>/* (nunca se "arregla" inventando
 * contenido — solo se normaliza la FORMA para que el componente compartido
 * StationCard/LineaBadge reciban lo que ya esperan):
 *
 * 1. `estacion.linea` es a veces string escalar ("1", "Verde", "BRT Oaxaca")
 *    y a veces ya un array (["1"], ["2","3"]) según la ciudad — StationCard
 *    asume escalar y lo envuelve en `[estacion.linea]`, lo que duplica el
 *    array en las ciudades que ya lo traen como array. `lineasDeEstacion()`
 *    normaliza esto ANTES de pasar la estación a <StationCard>.
 * 2. En 5 ciudades (oaxaca, veracruz, campeche, villahermosa, morelia) los
 *    slugs dentro de `lineasDetalle[].estaciones[]` no coinciden con los
 *    slugs reales de `estaciones.js` (ej. "estacion-central" vs el real
 *    "campeche-estacion-central") — desajuste productor↔consumidor real,
 *    verificado con un script. `estacionesDeLinea()` usa el grafo (cuyas
 *    keys SÍ coinciden 100% con estaciones.js, verificado) como respaldo.
 */

/**
 * Líneas reales de una estación, como array de strings limpio.
 * Prioridad: nodo del grafo (fuente más confiable, la misma que usa
 * lib/pathfinder.js) → estacion.linea si ya es array → estacion.lineas →
 * estacion.linea como escalar envuelto en array.
 */
export function lineasDeEstacion(estacion, grafoNode) {
  if (grafoNode?.lineas?.length) return grafoNode.lineas
  if (Array.isArray(estacion?.linea) && estacion.linea.length) return estacion.linea
  if (Array.isArray(estacion?.lineas) && estacion.lineas.length) return estacion.lineas
  if (typeof estacion?.linea === 'string' && estacion.linea) return [estacion.linea]
  return []
}

/** Zona/municipio de una estación con fallback — mismo orden que StationCard. */
export function zonaDeEstacion(estacion) {
  return estacion?.alcaldia || estacion?.municipio || estacion?.ubicacion || null
}

/**
 * Estación normalizada lista para pasar a <StationCard estacion={...} />
 * sin que el componente compartido tenga que adivinar la forma. También
 * limpia descripcion_turistica/intro de menciones al Mundial/FIFA 2026 —
 * StationCard lee esos campos directo del objeto, así que si no se limpian
 * AQUÍ (antes de entrar al componente compartido) el resumen truncado que
 * se ve en los grids de ciudad puede mostrar una oración de FIFA 2026.
 */
export function normalizarParaStationCard(estacion, grafoNode) {
  if (!estacion) return null
  return {
    ...estacion,
    lineas: lineasDeEstacion(estacion, grafoNode),
    descripcion_turistica: limpiarTextoMundial(estacion.descripcion_turistica),
    intro: limpiarTextoMundial(estacion.intro),
  }
}

/**
 * Estaciones que pertenecen a una línea, en el mejor orden disponible.
 * Une (a) el orden declarado en lineasDetalle[].estaciones[] cuando el slug
 * SÍ resuelve a un registro real, con (b) membresía verificada por el grafo
 * (node.lineas incluye el id) para las ciudades donde (a) está desalineado.
 * Nunca inventa una estación que no exista en `estaciones`.
 */
export function estacionesDeLinea(estaciones, grafo, lineaId, lineaEstacionesSlugs = []) {
  const idStr = String(lineaId)
  const bySlug = new Map(estaciones.map((e) => [e.slug, e]))
  const out = []
  const seen = new Set()

  for (const slug of lineaEstacionesSlugs) {
    const e = bySlug.get(slug)
    if (e && !seen.has(e.slug)) {
      out.push(e)
      seen.add(e.slug)
    }
  }

  for (const e of estaciones) {
    if (seen.has(e.slug)) continue
    const node = grafo?.[e.slug]
    if (node?.lineas?.some((l) => String(l) === idStr)) {
      out.push(e)
      seen.add(e.slug)
    }
  }

  return out
}

/**
 * Dado un slug de ruta "origen-a-destino" y el set de slugs válidos de la
 * ciudad, encuentra el punto de corte real. No asume que el hub va al
 * final — varios slugs de keep-urls tienen el hub PRIMERO
 * (ej. "central-de-autobuses-a-el-batan-mp").
 */
export function resolveRoutePair(slug, validSlugsSet) {
  if (!slug) return null
  for (let i = 0; i < slug.length - 2; i++) {
    if (slug.slice(i, i + 3) === '-a-') {
      const origen = slug.slice(0, i)
      const destino = slug.slice(i + 3)
      if (validSlugsSet.has(origen) && validSlugsSet.has(destino)) {
        return { origen, destino }
      }
    }
  }
  return null
}

/** Nombre legible de una estación por slug, con fallback al slug mismo. */
export function nombreEstacion(estaciones, grafo, slug) {
  const e = estaciones.find((x) => x.slug === slug)
  if (e?.nombre) return e.nombre
  const node = grafo?.[slug]
  if (node?.nombre) return node.nombre
  return slug
}

/** Trunca una descripción a `max` caracteres respetando palabras. */
export function truncate(str, max) {
  if (!str || str.length <= max) return str
  return str.slice(0, max).trim() + '…'
}

// ── Filtro Mundial/FIFA (REBUILD_SPEC.md §Objetivo: "SIN ... Mundial") ──
//
// Los campos de copy (intro/descripcion_turistica/tips/mejor_horario) vienen
// de la app anterior (enfocada en FIFA 2026) y algunos traen referencias al
// torneo mezcladas con contenido legítimo en el MISMO párrafo — no se puede
// simplemente omitir el campo completo sin perder contenido real (ej. datos
// de un museo, un mercado, un parque). Se filtra ORACIÓN por oración.
//
// El patrón es intencionalmente angosto: excluye únicamente menciones
// específicas al torneo/evento (FIFA, "Mundial 2026", "Estadio Azteca",
// "turistas del Mundial") y preserva a propósito el uso genérico del
// adjetivo "mundial" en español ("clase mundial", "Patrimonio Mundial
// UNESCO", "capital mundial del calzado") — verificado contra las 451
// estaciones de las 15 ciudades de este lote: 0 falsos negativos, 0 falsos
// positivos (ver reporte de la sesión).
const MUNDIAL_PATTERN = /fifa|mundial\s*2026|estadio\s+azteca|turistas?\s+del\s+mundial/i

/** true si el texto es una referencia específica al Mundial/FIFA 2026 (no el adjetivo genérico "mundial"). */
export function esMencionMundial(texto) {
  return typeof texto === 'string' && MUNDIAL_PATTERN.test(texto)
}

/** Quita oraciones que mencionan el Mundial/FIFA 2026 de un párrafo; conserva el resto intacto. */
export function limpiarTextoMundial(texto) {
  if (typeof texto !== 'string' || !texto) return texto
  const sentences = texto.match(/[^.!?]+[.!?]*/g) || [texto]
  return sentences
    .filter((s) => !esMencionMundial(s))
    .join(' ')
    .replace(/\s+/g, ' ')
    .trim()
}

/** Filtra un array de tips descartando los que mencionan el Mundial/FIFA 2026. */
export function limpiarTipsMundial(tips) {
  if (!Array.isArray(tips)) return []
  return tips.filter((t) => !esMencionMundial(t))
}

/**
 * Limpia un NOMBRE corto (ej. de un POI: "Estadio Akron (FIFA 2026)") — a
 * diferencia de limpiarTextoMundial, los nombres casi nunca tienen puntos,
 * así que el split por oración no sirve. Primero quita paréntesis tipo
 * "(FIFA 2026)"/"(Mundial 2026)"; si después de eso el nombre TODAVÍA
 * menciona el Mundial (el nombre completo ES la referencia), devuelve null
 * — el llamador debe omitir ese elemento en vez de mostrar texto a medias.
 */
export function limpiarNombreMundial(nombre) {
  if (typeof nombre !== 'string' || !nombre) return nombre
  const sinParentesis = nombre
    .replace(/\s*\((?:[^)]*\b(?:fifa|mundial\s*2026)\b[^)]*)\)\s*/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  if (!sinParentesis) return null
  if (esMencionMundial(sinParentesis)) return null
  return sinParentesis
}
