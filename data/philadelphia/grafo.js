/**
 * Grafo de transporte público de Filadelfia (PHL) para MetroGuia.mx
 * Sistema SEPTA: 2 líneas principales (BSL, MFL)
 *
 * 25 nodos totales (mostrando principales)
 * Broad Street Line (BSL): 18 estaciones
 * Market-Frankford Line (MFL): 20+ estaciones (mostrando principales)
 * Transferencias: City Hall, Spring Garden
 *
 * Estructura de nodo:
 * {
 *   ciudad: 'philadelphia',
 *   nombre: string,
 *   lineas: string[],
 *   adyacentes: [{ slug, tiempo (minutos), linea, tipo ('septa-rail' | 'transbordo') }]
 * }
 */

export const grafoPhiladelphia = {
  // ============================================
  // BROAD STREET LINE (BSL) - Línea Naranja
  // ============================================
  'philly-fern-rock': {
    ciudad: 'philadelphia',
    nombre: 'Fern Rock Transit Center',
    lineas: ['BSL'],
    adyacentes: [
      { slug: 'philly-logan', tiempo: 3, linea: 'BSL', tipo: 'septa-rail' },
    ]
  },
  'philly-logan': {
    ciudad: 'philadelphia',
    nombre: 'Logan',
    lineas: ['BSL'],
    adyacentes: [
      { slug: 'philly-fern-rock', tiempo: 3, linea: 'BSL', tipo: 'septa-rail' },
      { slug: 'philly-wyoming', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
    ]
  },
  'philly-wyoming': {
    ciudad: 'philadelphia',
    nombre: 'Wyoming',
    lineas: ['BSL'],
    adyacentes: [
      { slug: 'philly-logan', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
      { slug: 'philly-hunting-park', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
    ]
  },
  'philly-hunting-park': {
    ciudad: 'philadelphia',
    nombre: 'Hunting Park',
    lineas: ['BSL'],
    adyacentes: [
      { slug: 'philly-wyoming', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
      { slug: 'philly-allegheny', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
    ]
  },
  'philly-allegheny': {
    ciudad: 'philadelphia',
    nombre: 'Allegheny',
    lineas: ['BSL'],
    adyacentes: [
      { slug: 'philly-hunting-park', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
      { slug: 'philly-susquehanna-dauphin', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
    ]
  },
  'philly-susquehanna-dauphin': {
    ciudad: 'philadelphia',
    nombre: 'Susquehanna-Dauphin',
    lineas: ['BSL'],
    adyacentes: [
      { slug: 'philly-allegheny', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
      { slug: 'philly-cecil-b-moore', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
    ]
  },
  'philly-cecil-b-moore': {
    ciudad: 'philadelphia',
    nombre: 'Cecil B. Moore/Temple University',
    lineas: ['BSL'],
    adyacentes: [
      { slug: 'philly-susquehanna-dauphin', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
      { slug: 'philly-girard', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
    ]
  },
  'philly-girard': {
    ciudad: 'philadelphia',
    nombre: 'Girard',
    lineas: ['BSL'],
    adyacentes: [
      { slug: 'philly-cecil-b-moore', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
      { slug: 'philly-fairmount', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
    ]
  },
  'philly-fairmount': {
    ciudad: 'philadelphia',
    nombre: 'Fairmount',
    lineas: ['BSL'],
    adyacentes: [
      { slug: 'philly-girard', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
      { slug: 'philly-spring-garden', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
    ]
  },
  'philly-spring-garden': {
    ciudad: 'philadelphia',
    nombre: 'Spring Garden',
    lineas: ['BSL', 'MFL'],
    adyacentes: [
      { slug: 'philly-fairmount', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
      { slug: 'philly-race-vine', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
      { slug: 'philly-8th-street', tiempo: 5, linea: 'MFL', tipo: 'transbordo' },
    ]
  },
  'philly-race-vine': {
    ciudad: 'philadelphia',
    nombre: 'Race-Vine/Convention Center',
    lineas: ['BSL'],
    adyacentes: [
      { slug: 'philly-spring-garden', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
      { slug: 'philly-city-hall', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
    ]
  },
  'philly-city-hall': {
    ciudad: 'philadelphia',
    nombre: 'City Hall',
    lineas: ['BSL', 'MFL'],
    adyacentes: [
      { slug: 'philly-race-vine', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
      { slug: 'philly-walnut-locust', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
      { slug: 'philly-15th-street', tiempo: 3, linea: 'MFL', tipo: 'transbordo' },
    ]
  },
  'philly-walnut-locust': {
    ciudad: 'philadelphia',
    nombre: 'Walnut-Locust',
    lineas: ['BSL'],
    adyacentes: [
      { slug: 'philly-city-hall', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
      { slug: 'philly-lombard-south', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
    ]
  },
  'philly-lombard-south': {
    ciudad: 'philadelphia',
    nombre: 'Lombard-South',
    lineas: ['BSL'],
    adyacentes: [
      { slug: 'philly-walnut-locust', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
      { slug: 'philly-ellsworth-federal', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
    ]
  },
  'philly-ellsworth-federal': {
    ciudad: 'philadelphia',
    nombre: 'Ellsworth-Federal',
    lineas: ['BSL'],
    adyacentes: [
      { slug: 'philly-lombard-south', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
      { slug: 'philly-tasker-morris', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
    ]
  },
  'philly-tasker-morris': {
    ciudad: 'philadelphia',
    nombre: 'Tasker-Morris',
    lineas: ['BSL'],
    adyacentes: [
      { slug: 'philly-ellsworth-federal', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
      { slug: 'philly-snyder', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
    ]
  },
  'philly-snyder': {
    ciudad: 'philadelphia',
    nombre: 'Snyder',
    lineas: ['BSL'],
    adyacentes: [
      { slug: 'philly-tasker-morris', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
      { slug: 'philly-oregon', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
    ]
  },
  'philly-oregon': {
    ciudad: 'philadelphia',
    nombre: 'Oregon',
    lineas: ['BSL'],
    adyacentes: [
      { slug: 'philly-snyder', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
      { slug: 'philly-nrg-station', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
    ]
  },
  'philly-nrg-station': {
    ciudad: 'philadelphia',
    nombre: 'NRG/AT&T Station',
    lineas: ['BSL'],
    adyacentes: [
      { slug: 'philly-oregon', tiempo: 2, linea: 'BSL', tipo: 'septa-rail' },
    ]
  },

  // ============================================
  // MARKET-FRANKFORD LINE (MFL) - Línea Azul
  // ============================================
  'philly-69th-transit-center': {
    ciudad: 'philadelphia',
    nombre: '69th Street Transit Center',
    lineas: ['MFL'],
    adyacentes: [
      { slug: 'philly-30th-street', tiempo: 5, linea: 'MFL', tipo: 'septa-rail' },
    ]
  },
  'philly-30th-street': {
    ciudad: 'philadelphia',
    nombre: '30th Street Station',
    lineas: ['MFL'],
    adyacentes: [
      { slug: 'philly-69th-transit-center', tiempo: 5, linea: 'MFL', tipo: 'septa-rail' },
      { slug: 'philly-15th-street', tiempo: 3, linea: 'MFL', tipo: 'septa-rail' },
    ]
  },
  'philly-15th-street': {
    ciudad: 'philadelphia',
    nombre: '15th Street',
    lineas: ['MFL'],
    adyacentes: [
      { slug: 'philly-30th-street', tiempo: 3, linea: 'MFL', tipo: 'septa-rail' },
      { slug: 'philly-city-hall', tiempo: 3, linea: 'MFL', tipo: 'septa-rail' },
    ]
  },
  'philly-8th-street': {
    ciudad: 'philadelphia',
    nombre: '8th Street',
    lineas: ['MFL'],
    adyacentes: [
      { slug: 'philly-spring-garden', tiempo: 5, linea: 'MFL', tipo: 'septa-rail' },
      { slug: 'philly-frankford-transit-center', tiempo: 6, linea: 'MFL', tipo: 'septa-rail' },
    ]
  },
  'philly-frankford-transit-center': {
    ciudad: 'philadelphia',
    nombre: 'Frankford Transit Center',
    lineas: ['MFL'],
    adyacentes: [
      { slug: 'philly-8th-street', tiempo: 6, linea: 'MFL', tipo: 'septa-rail' },
    ]
  },
};
