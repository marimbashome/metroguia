/**
 * Grafo de transporte público de Houston (HOU) para MetroGuia.mx
 * Sistema METRORail de Houston: 3 líneas (Roja/Verde/Púrpura)
 * 
 * Total de estaciones: ~39 nodos
 * Red Line: 13 | Green Line: 7 | Purple Line: 11
 * 
 * Estructura de nodo:
 * {
 *   ciudad: 'houston',
 *   nombre: string,
 *   lineas: string[],
 *   adyacentes: [{ slug, tiempo (minutos), linea, tipo ('metrorail-light' | 'transbordo') }]
 * }
 */

export const grafoHOU = {
  // ============================================
  // LÍNEA ROJA (RED LINE) - 13 estaciones
  // ============================================
  'houston-northline-transit-center': {
    ciudad: 'houston',
    nombre: 'Northline Transit Center',
    lineas: ['Roja'],
    adyacentes: [
      { slug: 'houston-uh-downtown', tiempo: 12, linea: 'Roja', tipo: 'metrorail-light' }
    ]
  },
  'houston-uh-downtown': {
    ciudad: 'houston',
    nombre: 'University of Houston-Downtown',
    lineas: ['Roja'],
    adyacentes: [
      { slug: 'houston-northline-transit-center', tiempo: 12, linea: 'Roja', tipo: 'metrorail-light' },
      { slug: 'houston-downtown-transit-center', tiempo: 4, linea: 'Roja', tipo: 'metrorail-light' }
    ]
  },
  'houston-downtown-transit-center': {
    ciudad: 'houston',
    nombre: 'Downtown Transit Center',
    lineas: ['Roja', 'Verde', 'Púrpura'],
    adyacentes: [
      { slug: 'houston-uh-downtown', tiempo: 4, linea: 'Roja', tipo: 'metrorail-light' },
      { slug: 'houston-museum-district', tiempo: 3, linea: 'Roja', tipo: 'metrorail-light' },
      { slug: 'houston-theater-district', tiempo: 6, linea: 'Verde', tipo: 'transbordo' }
    ]
  },
  'houston-museum-district': {
    ciudad: 'houston',
    nombre: 'Museum District',
    lineas: ['Roja'],
    adyacentes: [
      { slug: 'houston-downtown-transit-center', tiempo: 3, linea: 'Roja', tipo: 'metrorail-light' },
      { slug: 'houston-herman-park', tiempo: 4, linea: 'Roja', tipo: 'metrorail-light' }
    ]
  },
  'houston-herman-park': {
    ciudad: 'houston',
    nombre: 'Herman Park/Zoo',
    lineas: ['Roja'],
    adyacentes: [
      { slug: 'houston-museum-district', tiempo: 4, linea: 'Roja', tipo: 'metrorail-light' },
      { slug: 'houston-texas-medical-center', tiempo: 5, linea: 'Roja', tipo: 'metrorail-light' }
    ]
  },
  'houston-texas-medical-center': {
    ciudad: 'houston',
    nombre: 'Texas Medical Center',
    lineas: ['Roja'],
    adyacentes: [
      { slug: 'houston-herman-park', tiempo: 5, linea: 'Roja', tipo: 'metrorail-light' },
      { slug: 'houston-nrg-park', tiempo: 4, linea: 'Roja', tipo: 'metrorail-light' }
    ]
  },
  'houston-nrg-park': {
    ciudad: 'houston',
    nombre: 'NRG Park',
    lineas: ['Roja'],
    adyacentes: [
      { slug: 'houston-texas-medical-center', tiempo: 4, linea: 'Roja', tipo: 'metrorail-light' },
      { slug: 'houston-fannin-south', tiempo: 5, linea: 'Roja', tipo: 'metrorail-light' }
    ]
  },
  'houston-fannin-south': {
    ciudad: 'houston',
    nombre: 'Fannin South',
    lineas: ['Roja'],
    adyacentes: [
      { slug: 'houston-nrg-park', tiempo: 5, linea: 'Roja', tipo: 'metrorail-light' }
    ]
  },
  // ============================================
  // LÍNEA VERDE (GREEN LINE) - 7 estaciones
  // ============================================
  'houston-magnolia-park-transit-center': {
    ciudad: 'houston',
    nombre: 'Magnolia Park Transit Center',
    lineas: ['Verde'],
    adyacentes: [
      { slug: 'houston-bbva-stadium', tiempo: 8, linea: 'Verde', tipo: 'metrorail-light' }
    ]
  },
  'houston-bbva-stadium': {
    ciudad: 'houston',
    nombre: 'BBVA Stadium',
    lineas: ['Verde'],
    adyacentes: [
      { slug: 'houston-magnolia-park-transit-center', tiempo: 8, linea: 'Verde', tipo: 'metrorail-light' },
      { slug: 'houston-theater-district', tiempo: 5, linea: 'Verde', tipo: 'metrorail-light' }
    ]
  },
  'houston-theater-district': {
    ciudad: 'houston',
    nombre: 'Theater District',
    lineas: ['Verde', 'Púrpura'],
    adyacentes: [
      { slug: 'houston-bbva-stadium', tiempo: 5, linea: 'Verde', tipo: 'metrorail-light' },
      { slug: 'houston-downtown-transit-center', tiempo: 6, linea: 'Verde', tipo: 'transbordo' },
      { slug: 'houston-university-of-houston', tiempo: 8, linea: 'Púrpura', tipo: 'transbordo' }
    ]
  },
  // ============================================
  // LÍNEA PÚRPURA (PURPLE LINE) - 11 estaciones
  // ============================================
  'houston-palm-center': {
    ciudad: 'houston',
    nombre: 'Palm Center',
    lineas: ['Púrpura'],
    adyacentes: [
      { slug: 'houston-university-of-houston', tiempo: 8, linea: 'Púrpura', tipo: 'metrorail-light' }
    ]
  },
  'houston-university-of-houston': {
    ciudad: 'houston',
    nombre: 'University of Houston',
    lineas: ['Púrpura'],
    adyacentes: [
      { slug: 'houston-palm-center', tiempo: 8, linea: 'Púrpura', tipo: 'metrorail-light' },
      { slug: 'houston-theater-district', tiempo: 8, linea: 'Púrpura', tipo: 'metrorail-light' }
    ]
  }
}
