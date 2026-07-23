/**
 * lib/cdmx-systems.js — Registro normalizado de los 6 sistemas de transporte
 * de CDMX que viven bajo `/cdmx/[sistema]/` (todo lo que NO es el Metro:
 * Metro tiene su propio hogar en data/estaciones.js + data/lineas-detalle.js
 * y se consume directo en app/estacion/ + app/linea/).
 *
 * Cada archivo fuente en `data/cdmx/*.js` tiene una forma ligeramente
 * distinta (ver comentarios inline) — este módulo normaliza sin inventar
 * ningún dato: todo lo que expone viene de los archivos fuente, tal cual.
 *
 * Forma normalizada por sistema:
 *   {
 *     slug, nombre, nombreCorto, icono, colorSistema, operador, inauguracion,
 *     tarifa, horario, descripcion, historia,
 *     totalLineasReal, totalEstacionesReal,   // cifras oficiales del sistema completo
 *     lineas: { [id]: { id, nombre, nombreCorto, color, colorNombre, inicio, fin,
 *                        total, km, tiempo_recorrido, horario, tarifa, zona,
 *                        descripcion, seo_title, meta_description, h1,
 *                        estaciones: [{slug, nombre}] } },  // orden real, TODAS
 *     estacionesRicas: [ {..raw, lineaId} ],   // solo las que tienen contenido propio
 *     estacionesPorSlug: Map(slug -> estacionRica),
 *   }
 */

import { metrobusLineas, metrobusEstaciones, metrobusSistema } from '@/data/cdmx/metrobus'
import { cablebusLineas, cablebusEstaciones, cablebusSistema } from '@/data/cdmx/cablebus'
import { mexicableLineas, mexicableEstaciones, mexicableSistema } from '@/data/cdmx/mexicable'
import { trolebusData } from '@/data/cdmx/trolebus'
import { trenLigeroData } from '@/data/cdmx/tren-ligero'
import { trenSuburbanoData } from '@/data/cdmx/tren-suburbano'
import { estaciones as metroEstaciones } from '@/data/estaciones'

// Cuenta paradas ÚNICAS sumando `linea.estaciones` (la lista completa y real
// de cada línea, no solo las que tienen ficha propia) de TODAS las líneas
// del sistema. Coincide con las cifras oficiales publicadas (ej. Metrobús:
// 151 aquí vs "150+ estaciones" en metrobusSistema.meta_description) y evita
// subcontar sistemas como Trolebús, donde solo 20 de sus ~54 paradas reales
// tienen ficha rica — el número que se muestra en el sitio debe ser el real,
// no el de "cuántas fichas escribimos".
function countUniqueStops(lineasNorm) {
  const s = new Set()
  for (const l of Object.values(lineasNorm)) {
    for (const e of l.estaciones || []) s.add(e.slug)
  }
  return s.size
}

function buildFromLineasShape({ slug, nombre, nombreCorto, icono, lineas, estaciones, sistemaInfo }) {
  const estacionesPorSlug = new Map(estaciones.map((e) => [e.slug, e]))
  const lineasNorm = {}
  for (const id of Object.keys(lineas)) {
    const l = lineas[id]
    lineasNorm[id] = { ...l, id }
  }
  return {
    slug,
    nombre,
    nombreCorto,
    icono: icono || null,
    colorSistema: sistemaInfo?.color_sistema || sistemaInfo?.colorSistema || Object.values(lineasNorm)[0]?.color || '#5A5A6A',
    operador: sistemaInfo?.operador || null,
    inauguracion: sistemaInfo?.inauguracion || sistemaInfo?.inicio_operaciones || null,
    tarifa: sistemaInfo?.tarifa || sistemaInfo?.tarifa_general || null,
    horario: sistemaInfo?.horario_general || null,
    descripcion: sistemaInfo?.descripcion_completa || sistemaInfo?.descripcion || null,
    historia: sistemaInfo?.historia || null,
    totalLineasReal: Object.keys(lineasNorm).length,
    totalEstacionesReal: countUniqueStops(lineasNorm),
    lineas: lineasNorm,
    estacionesRicas: estaciones,
    estacionesPorSlug,
  }
}

function buildFromDataShape({ slug, data }) {
  // Forma trolebus/tren-ligero/tren-suburbano: { sistema, lineas:{...}, estaciones:[...] }
  // donde estaciones[].linea === la key en `lineas` (no `lineaId`).
  const estaciones = data.estaciones.map((e) => ({ ...e, lineaId: e.linea }))
  const estacionesPorSlug = new Map(estaciones.map((e) => [e.slug, e]))
  const lineasNorm = {}
  for (const id of Object.keys(data.lineas)) {
    lineasNorm[id] = { ...data.lineas[id], id }
  }
  return {
    slug,
    nombre: data.sistema,
    nombreCorto: data.sistema,
    icono: data.icono || null,
    colorSistema: data.color || Object.values(lineasNorm)[0]?.color || '#5A5A6A',
    operador: null,
    inauguracion: null,
    tarifa: data.costo ? `$${data.costo.min}${data.costo.max !== data.costo.min ? `–$${data.costo.max}` : ''} ${data.costo.moneda}` : null,
    horario: data.horario ? `${data.horario.apertura}–${data.horario.cierre}` : null,
    descripcion: data.descripcion || null,
    historia: null,
    totalLineasReal: Object.keys(lineasNorm).length,
    totalEstacionesReal: countUniqueStops(lineasNorm),
    lineas: lineasNorm,
    estacionesRicas: estaciones,
    estacionesPorSlug,
  }
}

export const CDMX_SYSTEMS = {
  metrobus: buildFromLineasShape({
    slug: 'metrobus',
    nombre: 'Metrobús',
    nombreCorto: 'Metrobús',
    icono: '🚌',
    lineas: metrobusLineas,
    estaciones: metrobusEstaciones,
    sistemaInfo: metrobusSistema,
  }),
  cablebus: buildFromLineasShape({
    slug: 'cablebus',
    nombre: 'Cablebús',
    nombreCorto: 'Cablebús',
    icono: '🚡',
    lineas: cablebusLineas,
    estaciones: cablebusEstaciones,
    sistemaInfo: cablebusSistema,
  }),
  mexicable: buildFromLineasShape({
    slug: 'mexicable',
    nombre: 'Mexicable',
    nombreCorto: 'Mexicable',
    icono: '🚡',
    lineas: mexicableLineas,
    estaciones: mexicableEstaciones,
    sistemaInfo: mexicableSistema,
  }),
  trolebus: buildFromDataShape({ slug: 'trolebus', data: trolebusData }),
  'tren-ligero': buildFromDataShape({ slug: 'tren-ligero', data: trenLigeroData }),
  'tren-suburbano': buildFromDataShape({ slug: 'tren-suburbano', data: trenSuburbanoData }),
}

export const CDMX_SYSTEM_SLUGS = Object.keys(CDMX_SYSTEMS)

export function getCdmxSystem(slug) {
  return CDMX_SYSTEMS[slug] || null
}

export function getCdmxSystemLine(sistemaSlug, lineaId) {
  const sistema = CDMX_SYSTEMS[sistemaSlug]
  if (!sistema) return null
  return sistema.lineas[lineaId] || null
}

export function getCdmxSystemStation(sistemaSlug, estacionSlug) {
  const sistema = CDMX_SYSTEMS[sistemaSlug]
  if (!sistema) return null
  return sistema.estacionesPorSlug.get(estacionSlug) || null
}

/**
 * Resuelve la lista ORDENADA y COMPLETA de paradas reales de una línea
 * (`linea.estaciones`, que siempre coincide con `linea.total`), enriquecida
 * con la ficha completa cuando existe página propia. Nunca inventa una
 * estación ni un link — si no hay ficha rica, `pagina: false` y el
 * consumidor debe renderizar texto plano, no un <a>.
 */
export function resolveLineStops(sistemaSlug, linea) {
  const sistema = CDMX_SYSTEMS[sistemaSlug]
  if (!sistema || !linea) return []
  return (linea.estaciones || []).map((stop) => {
    const rica = sistema.estacionesPorSlug.get(stop.slug)
    return {
      slug: stop.slug,
      nombre: stop.nombre,
      pagina: !!rica,
      rica: rica || null,
    }
  })
}

/**
 * Intenta resolver un label de transferencia en texto libre (ej. "Metro
 * Línea A", "Metrobús Línea 1", "Cablebús Línea 1", "Tren Suburbano",
 * "Ramal AIFA") a un href real DENTRO del sitio, validando que la línea
 * exista de verdad. Si no está seguro, regresa href:null — nunca adivina.
 *
 * @param {string} label
 * @param {Object} lineasDetalleMetro - lineasDetalle de data/lineas-detalle.js
 */
export function resolveTransferLink(label, lineasDetalleMetro) {
  if (!label) return { href: null, text: label }
  const text = label.trim()

  let m = text.match(/^Metro\s+L[ií]nea\s+([0-9A-Z]+)$/i)
  if (m && lineasDetalleMetro?.[m[1].toUpperCase()]) {
    return { href: `/linea/${m[1].toUpperCase()}/`, text }
  }

  m = text.match(/^Metrob[uú]s\s+L[ií]nea\s+(\d+)/i)
  if (m) {
    const id = `linea${m[1]}`
    if (CDMX_SYSTEMS.metrobus.lineas[id]) return { href: `/cdmx/metrobus/linea/${id}/`, text }
  }

  m = text.match(/^Cableb[uú]s\s+L[ií]nea\s+(\d+)/i)
  if (m && CDMX_SYSTEMS.cablebus.lineas[m[1]]) {
    return { href: `/cdmx/cablebus/linea/${m[1]}/`, text }
  }

  m = text.match(/^Trolebus\s+L[ií]nea\s+(\d+)/i) || text.match(/^Troleb[uú]s\s+L[ií]nea\s+(\d+)/i)
  if (m) {
    const id = `TB-${m[1]}`
    if (CDMX_SYSTEMS.trolebus.lineas[id]) return { href: `/cdmx/trolebus/linea/${id}/`, text }
  }

  if (/^Mexicable/i.test(text)) {
    const id = /verde/i.test(text) ? 'verde' : /roja/i.test(text) ? 'roja' : null
    if (id && CDMX_SYSTEMS.mexicable.lineas[id]) return { href: `/cdmx/mexicable/linea/${id}/`, text }
    // Mención genérica sin línea específica → manda al hub del sistema.
    return { href: '/cdmx/mexicable/', text }
  }

  if (/^Tren\s+Ligero/i.test(text)) {
    return { href: '/cdmx/tren-ligero/linea/TL/', text }
  }

  if (/AIFA/i.test(text)) {
    return { href: '/cdmx/tren-suburbano/linea/TS-AIFA/', text }
  }

  if (/^Tren\s+Suburbano/i.test(text)) {
    return { href: '/cdmx/tren-suburbano/linea/TS/', text }
  }

  return { href: null, text }
}

// Índice slug -> href para CUALQUIER estación que este lote sabe renderizar
// (Metro en la raíz + los 6 sistemas bajo /cdmx/[sistema]/). Se usa para
// resolver adyacencias/transbordos de `data/grafo.js`, que mezcla slugs de
// todos los sistemas (y de otras ciudades) en el mismo objeto plano.
const metroEstacionesPorSlug = new Map(metroEstaciones.map((e) => [e.slug, e]))

/**
 * @param {string} slug - slug crudo de data/grafo.js (puede ser de Metro,
 *   de otro sistema CDMX, de otra ciudad, o un nodo sin página propia como
 *   una terminal de autobuses).
 * @returns {string|null} href dentro del sitio, o null si no hay página
 *   (nunca se inventa una ruta — el llamador debe renderizar texto plano).
 */
export function resolveAnyCdmxStationHref(slug) {
  if (!slug) return null
  if (metroEstacionesPorSlug.has(slug)) return `/estacion/${slug}/`
  for (const sysSlug of CDMX_SYSTEM_SLUGS) {
    if (CDMX_SYSTEMS[sysSlug].estacionesPorSlug.has(slug)) return `/cdmx/${sysSlug}/estacion/${slug}/`
  }
  return null
}
