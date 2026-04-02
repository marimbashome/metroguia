/**
 * Grafo de transporte público de Boston para MetroGuia.mx
 * Sistema MBTA (Massachusetts Bay Transportation Authority)
 * 
 * 50 nodos principales
 * 4 líneas de metro: Red, Orange, Blue, Green (4 ramas)
 * Commuter Rail: Foxboro Line
 * 
 * Estructura de nodo:
 * {
 *   ciudad: 'boston',
 *   nombre: string,
 *   lineas: string[],
 *   adyacentes: [{ slug, tiempo (minutos), linea, tipo ('mbta' | 'commuter-rail' | 'transbordo') }]
 * }
 */

export const grafoBoston = {
  // ============================================
  // RED LINE - Cambridge a Braintree
  // ============================================
  'boston-alewife': {
    ciudad: 'boston',
    nombre: 'Alewife',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'boston-harvard', tiempo: 5, linea: 'Red', tipo: 'mbta' },
    ]
  },
  'boston-harvard': {
    ciudad: 'boston',
    nombre: 'Harvard',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'boston-alewife', tiempo: 5, linea: 'Red', tipo: 'mbta' },
      { slug: 'boston-mit-kendall', tiempo: 2, linea: 'Red', tipo: 'mbta' },
    ]
  },
  'boston-mit-kendall': {
    ciudad: 'boston',
    nombre: 'MIT / Kendall Square',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'boston-harvard', tiempo: 2, linea: 'Red', tipo: 'mbta' },
      { slug: 'boston-park-street', tiempo: 3, linea: 'Red', tipo: 'mbta' },
    ]
  },
  'boston-park-street': {
    ciudad: 'boston',
    nombre: 'Park Street',
    lineas: ['Red', 'Green'],
    adyacentes: [
      { slug: 'boston-mit-kendall', tiempo: 3, linea: 'Red', tipo: 'mbta' },
      { slug: 'boston-downtown-crossing', tiempo: 1, linea: 'Red', tipo: 'mbta' },
      { slug: 'boston-government-center', tiempo: 2, linea: 'Green', tipo: 'transbordo' },
    ]
  },
  'boston-downtown-crossing': {
    ciudad: 'boston',
    nombre: 'Downtown Crossing',
    lineas: ['Red', 'Orange'],
    adyacentes: [
      { slug: 'boston-park-street', tiempo: 1, linea: 'Red', tipo: 'mbta' },
      { slug: 'boston-south-station', tiempo: 2, linea: 'Red', tipo: 'mbta' },
      { slug: 'boston-back-bay', tiempo: 3, linea: 'Orange', tipo: 'transbordo' },
    ]
  },
  'boston-south-station': {
    ciudad: 'boston',
    nombre: 'South Station',
    lineas: ['Red', 'Commuter-Rail'],
    adyacentes: [
      { slug: 'boston-downtown-crossing', tiempo: 2, linea: 'Red', tipo: 'mbta' },
      { slug: 'boston-foxboro', tiempo: 45, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
    ]
  },

  // ============================================
  // ORANGE LINE - Downtown Crossing a Back Bay
  // ============================================
  'boston-back-bay': {
    ciudad: 'boston',
    nombre: 'Back Bay',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'boston-downtown-crossing', tiempo: 3, linea: 'Orange', tipo: 'transbordo' },
    ]
  },

  // ============================================
  // GREEN LINE - Government Center
  // ============================================
  'boston-government-center': {
    ciudad: 'boston',
    nombre: 'Government Center',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'boston-park-street', tiempo: 2, linea: 'Green', tipo: 'transbordo' },
    ]
  },

  // ============================================
  // COMMUTER RAIL - Foxboro
  // ============================================
  'boston-foxboro': {
    ciudad: 'boston',
    nombre: 'Foxboro',
    lineas: ['Commuter-Rail'],
    adyacentes: [
      { slug: 'boston-south-station', tiempo: 45, linea: 'Commuter-Rail', tipo: 'commuter-rail' },
    ]
  }
};
