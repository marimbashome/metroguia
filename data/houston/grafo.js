/**
 * Grafo de transporte público de Houston (HOU) para MetroGuia.mx
 * Sistema METRORail de Houston: 3 líneas (Roja/Verde/Púrpura)
 *
 * Total de estaciones: 39 nodos
 * Red Line: 23 estaciones | Green Line: 11 estaciones | Purple Line: 9 estaciones
 * Estaciones compartidas: 6 (conectadas con transbordo)
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
  // LÍNEA ROJA (RED LINE) - 23 estaciones
  // ============================================
  'houston-northline-transit-center': {
    ciudad: 'houston',
    nombre: 'Northline Transit Center',
    lineas: ['Roja'],
    adyacentes: [
      { slug: 'houston-burnett-transit-center', tiempo: 3, linea: 'Roja', tipo: 'metrorail-light' }
    ]
  },
  'houston-burnett-transit-center': {
    ciudad: 'houston',
    nombre: 'Burnett Transit Center',
    lineas: ['Roja'],
    adyacentes: [
      { slug: 'houston-northline-transit-center', tiempo: 3, linea: 'Roja', tipo: 'metrorail-light' },
      { slug: 'houston-moody-park', tiempo: 3, linea: 'Roja', tipo: 'metrorail-light' }
    ]
  },
  'houston-moody-park': {
    ciudad: 'houston',
    nombre: 'Moody Park',
    lineas: ['Roja'],
    adyacentes: [
      { slug: 'houston-burnett-transit-center', tiempo: 3, linea: 'Roja', tipo: 'metrorail-light' },
      { slug: 'houston-cavalcade', tiempo: 3, linea: 'Roja', tipo: 'metrorail-light' }
    ]
  },
  'houston-cavalcade': {
    ciudad: 'houston',
    nombre: 'Cavalcade',
    lineas: ['Roja'],
    adyacentes: [
      { slug: 'houston-moody-park', tiempo: 3, linea: 'Roja', tipo: 'metrorail-light' },
      { slug: 'houston-lindale-park', tiempo: 3, linea: 'Roja', tipo: 'metrorail-light' }
    ]
  },
  'houston-lindale-park': {
    ciudad: 'houston',
    nombre: 'Lindale Park',
    lineas: ['Roja'],
    adyacentes: [
      { slug: 'houston-cavalcade', tiempo: 3, linea: 'Roja', tipo: 'metrorail-light' },
      { slug: 'houston-melbourne', tiempo: 3, linea: 'Roja', tipo: 'metrorail-light' }
    ]
  },
  'houston-melbourne': {
    ciudad: 'houston',
    nombre: 'Melbourne/N. Lindale',
    lineas: ['Roja'],
    adyacentes: [
      { slug: 'houston-lindale-park', tiempo: 3, linea: 'Roja', tipo: 'metrorail-light' },
      { slug: 'houston-uh-downtown', tiempo: 3, linea: 'Roja', tipo: 'metrorail-light' }
    ]
  },
  'houston-uh-downtown': {
    ciudad: 'houston',
    nombre: 'University of Houston-Downtown',
    lineas: ['Roja'],
    adyacentes: [
      { slug: 'houston-melbourne', tiempo: 3, linea: 'Roja', tipo: 'metrorail-light' },
      { slug: 'houston-preston', tiempo: 3, linea: 'Roja', tipo: 'metrorail-light' }
    ]
  },
  'houston-preston': {
    ciudad: 'houston',
    nombre: 'Preston',
    lineas: ['Roja', 'Verde', 'Púrpura'],
    adyacentes: [
      { slug: 'houston-uh-downtown', tiempo: 3, linea: 'Roja', tipo: 'metrorail-light' },
      { slug: 'houston-main-street-square', tiempo: 2, linea: 'Roja', tipo: 'metrorail-light' },
      { slug: 'houston-leeland-third-ward', tiempo: 5, linea: 'Verde', tipo: 'transbordo' },
      { slug: 'houston-tsu', tiempo: 6, linea: 'Púrpura', tipo: 'transbordo' }
    ]
  },
  'houston-main-street-square': {
    ciudad: 'houston',
    nombre: 'Main Street Square',
    lineas: ['Roja', 'Verde', 'Púrpura'],
    adyacentes: [
      { slug: 'houston-preston', tiempo: 2, linea: 'Roja', tipo: 'metrorail-light' },
      { slug: 'houston-bell', tiempo: 2, linea: 'Roja', tipo: 'metrorail-light' },
      { slug: 'houston-convention-district', tiempo: 4, linea: 'Verde', tipo: 'transbordo' },
      { slug: 'houston-eado-stadium', tiempo: 5, linea: 'Púrpura', tipo: 'transbordo' },
      { slug: 'houston-theater-district', tiempo: 4, linea: 'Verde', tipo: 'metrorail-light' }
    ]
  },
  'houston-bell': {
    ciudad: 'houston',
    nombre: 'Bell',
    lineas: ['Roja'],
    adyacentes: [
      { slug: 'houston-main-street-square', tiempo: 2, linea: 'Roja', tipo: 'metrorail-light' },
      { slug: 'houston-downtown-transit-center', tiempo: 2, linea: 'Roja', tipo: 'metrorail-light' }
    ]
  },
  'houston-downtown-transit-center': {
    ciudad: 'houston',
    nombre: 'Downtown Transit Center',
    lineas: ['Roja'],
    adyacentes: [
      { slug: 'houston-bell', tiempo: 2, linea: 'Roja', tipo: 'metrorail-light' },
      { slug: 'houston-mcgowen', tiempo: 2, linea: 'Roja', tipo: 'metrorail-light' }
    ]
  },
  'houston-mcgowen': {
    ciudad: 'houston',
    nombre: 'McGowen',
    lineas: ['Roja'],
    adyacentes: [
      { slug: 'houston-downtown-transit-center', tiempo: 2, linea: 'Roja', tipo: 'metrorail-light' },
      { slug: 'houston-ensemble-hcc', tiempo: 2, linea: 'Roja', tipo: 'metrorail-light' }
    ]
  },
  'houston-ensemble-hcc': {
    ciudad: 'houston',
    nombre: 'Ensemble/HCC',
    lineas: ['Roja'],
    adyacentes: [
      { slug: 'houston-mcgowen', tiempo: 2, linea: 'Roja', tipo: 'metrorail-light' },
      { slug: 'houston-wheeler', tiempo: 3, linea: 'Roja', tipo: 'metrorail-light' }
    ]
  },
  'houston-wheeler': {
    ciudad: 'houston',
    nombre: 'Wheeler Transit Center',
    lineas: ['Roja', 'Púrpura'],
    adyacentes: [
      { slug: 'houston-ensemble-hcc', tiempo: 3, linea: 'Roja', tipo: 'metrorail-light' },
      { slug: 'houston-museum-district', tiempo: 3, linea: 'Roja', tipo: 'metrorail-light' },
      { slug: 'houston-elgin', tiempo: 4, linea: 'Púrpura', tipo: 'transbordo' }
    ]
  },
  'houston-museum-district': {
    ciudad: 'houston',
    nombre: 'Museum District',
    lineas: ['Roja'],
    adyacentes: [
      { slug: 'houston-wheeler', tiempo: 3, linea: 'Roja', tipo: 'metrorail-light' },
      { slug: 'houston-herman-park', tiempo: 2, linea: 'Roja', tipo: 'metrorail-light' }
    ]
  },
  'houston-herman-park': {
    ciudad: 'houston',
    nombre: 'Hermann Park/Rice University',
    lineas: ['Roja'],
    adyacentes: [
      { slug: 'houston-museum-district', tiempo: 2, linea: 'Roja', tipo: 'metrorail-light' },
      { slug: 'houston-memorial-hermann', tiempo: 2, linea: 'Roja', tipo: 'metrorail-light' }
    ]
  },
  'houston-memorial-hermann': {
    ciudad: 'houston',
    nombre: 'Memorial Hermann Hospital',
    lineas: ['Roja'],
    adyacentes: [
      { slug: 'houston-herman-park', tiempo: 2, linea: 'Roja', tipo: 'metrorail-light' },
      { slug: 'houston-dryden-tmc', tiempo: 2, linea: 'Roja', tipo: 'metrorail-light' }
    ]
  },
  'houston-dryden-tmc': {
    ciudad: 'houston',
    nombre: 'Dryden/TMC',
    lineas: ['Roja'],
    adyacentes: [
      { slug: 'houston-memorial-hermann', tiempo: 2, linea: 'Roja', tipo: 'metrorail-light' },
      { slug: 'houston-texas-medical-center', tiempo: 2, linea: 'Roja', tipo: 'metrorail-light' }
    ]
  },
  'houston-texas-medical-center': {
    ciudad: 'houston',
    nombre: 'TMC Transit Center',
    lineas: ['Roja'],
    adyacentes: [
      { slug: 'houston-dryden-tmc', tiempo: 2, linea: 'Roja', tipo: 'metrorail-light' },
      { slug: 'houston-smith-lands', tiempo: 3, linea: 'Roja', tipo: 'metrorail-light' }
    ]
  },
  'houston-smith-lands': {
    ciudad: 'houston',
    nombre: 'Smith Lands',
    lineas: ['Roja'],
    adyacentes: [
      { slug: 'houston-texas-medical-center', tiempo: 3, linea: 'Roja', tipo: 'metrorail-light' },
      { slug: 'houston-stadium-park', tiempo: 3, linea: 'Roja', tipo: 'metrorail-light' }
    ]
  },
  'houston-stadium-park': {
    ciudad: 'houston',
    nombre: 'Stadium Park/Astrodome',
    lineas: ['Roja'],
    adyacentes: [
      { slug: 'houston-smith-lands', tiempo: 3, linea: 'Roja', tipo: 'metrorail-light' },
      { slug: 'houston-nrg-park', tiempo: 2, linea: 'Roja', tipo: 'metrorail-light' }
    ]
  },
  'houston-nrg-park': {
    ciudad: 'houston',
    nombre: 'NRG Park',
    lineas: ['Roja'],
    adyacentes: [
      { slug: 'houston-stadium-park', tiempo: 2, linea: 'Roja', tipo: 'metrorail-light' },
      { slug: 'houston-fannin-south', tiempo: 3, linea: 'Roja', tipo: 'metrorail-light' }
    ]
  },
  'houston-fannin-south': {
    ciudad: 'houston',
    nombre: 'Fannin South',
    lineas: ['Roja'],
    adyacentes: [
      { slug: 'houston-nrg-park', tiempo: 3, linea: 'Roja', tipo: 'metrorail-light' }
    ]
  },

  // ============================================
  // LÍNEA VERDE (GREEN LINE) - 11 estaciones
  // ============================================
  'houston-magnolia-park-transit-center': {
    ciudad: 'houston',
    nombre: 'Magnolia Park Transit Center',
    lineas: ['Verde'],
    adyacentes: [
      { slug: 'houston-altic', tiempo: 3, linea: 'Verde', tipo: 'metrorail-light' }
    ]
  },
  'houston-altic': {
    ciudad: 'houston',
    nombre: 'Altic',
    lineas: ['Verde'],
    adyacentes: [
      { slug: 'houston-magnolia-park-transit-center', tiempo: 3, linea: 'Verde', tipo: 'metrorail-light' },
      { slug: 'houston-harrisburg', tiempo: 3, linea: 'Verde', tipo: 'metrorail-light' }
    ]
  },
  'houston-harrisburg': {
    ciudad: 'houston',
    nombre: 'Harrisburg/Navigation Boulevard',
    lineas: ['Verde'],
    adyacentes: [
      { slug: 'houston-altic', tiempo: 3, linea: 'Verde', tipo: 'metrorail-light' },
      { slug: 'houston-east-end', tiempo: 3, linea: 'Verde', tipo: 'metrorail-light' }
    ]
  },
  'houston-east-end': {
    ciudad: 'houston',
    nombre: 'East End',
    lineas: ['Verde'],
    adyacentes: [
      { slug: 'houston-harrisburg', tiempo: 3, linea: 'Verde', tipo: 'metrorail-light' },
      { slug: 'houston-bbva-stadium', tiempo: 2, linea: 'Verde', tipo: 'metrorail-light' }
    ]
  },
  'houston-bbva-stadium': {
    ciudad: 'houston',
    nombre: 'BBVA Stadium',
    lineas: ['Verde'],
    adyacentes: [
      { slug: 'houston-east-end', tiempo: 2, linea: 'Verde', tipo: 'metrorail-light' },
      { slug: 'houston-leeland-third-ward', tiempo: 3, linea: 'Verde', tipo: 'metrorail-light' }
    ]
  },
  'houston-leeland-third-ward': {
    ciudad: 'houston',
    nombre: 'Leeland/Third Ward',
    lineas: ['Verde'],
    adyacentes: [
      { slug: 'houston-bbva-stadium', tiempo: 3, linea: 'Verde', tipo: 'metrorail-light' },
      { slug: 'houston-convention-district', tiempo: 3, linea: 'Verde', tipo: 'metrorail-light' },
      { slug: 'houston-preston', tiempo: 5, linea: 'Verde', tipo: 'transbordo' }
    ]
  },
  'houston-convention-district': {
    ciudad: 'houston',
    nombre: 'Convention District',
    lineas: ['Verde'],
    adyacentes: [
      { slug: 'houston-leeland-third-ward', tiempo: 3, linea: 'Verde', tipo: 'metrorail-light' },
      { slug: 'houston-eado-stadium', tiempo: 2, linea: 'Verde', tipo: 'metrorail-light' },
      { slug: 'houston-main-street-square', tiempo: 4, linea: 'Verde', tipo: 'transbordo' }
    ]
  },
  'houston-eado-stadium': {
    ciudad: 'houston',
    nombre: 'EaDo/Stadium',
    lineas: ['Verde', 'Púrpura'],
    adyacentes: [
      { slug: 'houston-convention-district', tiempo: 2, linea: 'Verde', tipo: 'metrorail-light' },
      { slug: 'houston-theater-district', tiempo: 2, linea: 'Verde', tipo: 'metrorail-light' },
      { slug: 'houston-main-street-square', tiempo: 5, linea: 'Púrpura', tipo: 'transbordo' },
      { slug: 'houston-university-of-houston', tiempo: 4, linea: 'Púrpura', tipo: 'transbordo' }
    ]
  },
  'houston-theater-district': {
    ciudad: 'houston',
    nombre: 'Theater District',
    lineas: ['Verde', 'Púrpura'],
    adyacentes: [
      { slug: 'houston-eado-stadium', tiempo: 2, linea: 'Verde', tipo: 'metrorail-light' },
      { slug: 'houston-main-street-square', tiempo: 4, linea: 'Verde', tipo: 'metrorail-light' },
      { slug: 'houston-eado-stadium', tiempo: 3, linea: 'Púrpura', tipo: 'transbordo' },
      { slug: 'houston-university-of-houston', tiempo: 3, linea: 'Púrpura', tipo: 'transbordo' }
    ]
  },

  // ============================================
  // LÍNEA PÚRPURA (PURPLE LINE) - 9 estaciones
  // ============================================
  'houston-palm-center': {
    ciudad: 'houston',
    nombre: 'Palm Center Transit Center',
    lineas: ['Púrpura'],
    adyacentes: [
      { slug: 'houston-macgregor-park', tiempo: 3, linea: 'Púrpura', tipo: 'metrorail-light' }
    ]
  },
  'houston-macgregor-park': {
    ciudad: 'houston',
    nombre: 'MacGregor Park',
    lineas: ['Púrpura'],
    adyacentes: [
      { slug: 'houston-palm-center', tiempo: 3, linea: 'Púrpura', tipo: 'metrorail-light' },
      { slug: 'houston-elgin', tiempo: 3, linea: 'Púrpura', tipo: 'metrorail-light' }
    ]
  },
  'houston-elgin': {
    ciudad: 'houston',
    nombre: 'Elgin',
    lineas: ['Púrpura'],
    adyacentes: [
      { slug: 'houston-macgregor-park', tiempo: 3, linea: 'Púrpura', tipo: 'metrorail-light' },
      { slug: 'houston-tsu', tiempo: 3, linea: 'Púrpura', tipo: 'metrorail-light' },
      { slug: 'houston-wheeler', tiempo: 4, linea: 'Púrpura', tipo: 'transbordo' }
    ]
  },
  'houston-tsu': {
    ciudad: 'houston',
    nombre: 'Texas Southern University',
    lineas: ['Púrpura'],
    adyacentes: [
      { slug: 'houston-elgin', tiempo: 3, linea: 'Púrpura', tipo: 'metrorail-light' },
      { slug: 'houston-university-of-houston', tiempo: 3, linea: 'Púrpura', tipo: 'metrorail-light' },
      { slug: 'houston-preston', tiempo: 6, linea: 'Púrpura', tipo: 'transbordo' }
    ]
  },
  'houston-university-of-houston': {
    ciudad: 'houston',
    nombre: 'University of Houston',
    lineas: ['Púrpura'],
    adyacentes: [
      { slug: 'houston-tsu', tiempo: 3, linea: 'Púrpura', tipo: 'metrorail-light' },
      { slug: 'houston-eado-stadium', tiempo: 4, linea: 'Púrpura', tipo: 'metrorail-light' },
      { slug: 'houston-theater-district', tiempo: 3, linea: 'Púrpura', tipo: 'transbordo' }
    ]
  }
}
