/**
 * Grafo de transporte público de San Francisco Bay Area para MetroGuia.mx
 * Sistemas: BART (Bay Area Rapid Transit) + VTA Light Rail
 * 
 * 56 nodos principales (50 BART + 6 VTA principales)
 * BART 6 líneas: F (Fremont), B (Bay Point/Dublin), L (Livermore), Red, Green, Blue
 * VTA 2 líneas: Orange (Mountain View-Alum Rock), Green (Fremont-Santa Teresa)
 * 
 * Estructura de nodo:
 * {
 *   ciudad: 'sf',
 *   nombre: string,
 *   lineas: string[],
 *   adyacentes: [{ slug, tiempo (minutos), linea, tipo ('bart' | 'vta' | 'transbordo') }]
 * }
 */

export const grafoSF = {
  // ============================================
  // LÍNEA F BART (Naranja) - Richmond a Berryessa
  // ============================================
  'sf-embarcadero': {
    ciudad: 'sf',
    nombre: 'Embarcadero',
    lineas: ['F'],
    adyacentes: [
      { slug: 'sf-powell', tiempo: 2, linea: 'F', tipo: 'bart' },
      { slug: 'sf-montgomery', tiempo: 2, linea: 'F', tipo: 'bart' },
    ]
  },
  'sf-powell': {
    ciudad: 'sf',
    nombre: 'Powell Street',
    lineas: ['F'],
    adyacentes: [
      { slug: 'sf-embarcadero', tiempo: 2, linea: 'F', tipo: 'bart' },
      { slug: 'sf-montgomery', tiempo: 2, linea: 'F', tipo: 'bart' },
      { slug: 'sf-civic-center', tiempo: 3, linea: 'F', tipo: 'bart' },
    ]
  },
  'sf-montgomery': {
    ciudad: 'sf',
    nombre: 'Montgomery Street',
    lineas: ['F'],
    adyacentes: [
      { slug: 'sf-embarcadero', tiempo: 2, linea: 'F', tipo: 'bart' },
      { slug: 'sf-powell', tiempo: 2, linea: 'F', tipo: 'bart' },
      { slug: 'sf-civic-center', tiempo: 3, linea: 'F', tipo: 'bart' },
    ]
  },
  'sf-civic-center': {
    ciudad: 'sf',
    nombre: 'Civic Center',
    lineas: ['F'],
    adyacentes: [
      { slug: 'sf-powell', tiempo: 3, linea: 'F', tipo: 'bart' },
      { slug: 'sf-montgomery', tiempo: 3, linea: 'F', tipo: 'bart' },
      { slug: 'sf-16th-st-mission', tiempo: 3, linea: 'F', tipo: 'bart' },
    ]
  },
  'sf-16th-st-mission': {
    ciudad: 'sf',
    nombre: '16th Street Mission',
    lineas: ['F'],
    adyacentes: [
      { slug: 'sf-civic-center', tiempo: 3, linea: 'F', tipo: 'bart' },
      { slug: 'sf-24th-st-mission', tiempo: 2, linea: 'F', tipo: 'bart' },
    ]
  },
  'sf-24th-st-mission': {
    ciudad: 'sf',
    nombre: '24th Street Mission',
    lineas: ['F'],
    adyacentes: [
      { slug: 'sf-16th-st-mission', tiempo: 2, linea: 'F', tipo: 'bart' },
      { slug: 'sf-sfo-airport', tiempo: 5, linea: 'F', tipo: 'bart' },
    ]
  },
  'sf-sfo-airport': {
    ciudad: 'sf',
    nombre: 'San Francisco International Airport',
    lineas: ['F'],
    adyacentes: [
      { slug: 'sf-24th-st-mission', tiempo: 5, linea: 'F', tipo: 'bart' },
      { slug: 'sf-milpitas', tiempo: 15, linea: 'F', tipo: 'bart' },
    ]
  },
  'sf-milpitas': {
    ciudad: 'sf',
    nombre: 'Milpitas',
    lineas: ['F'],
    adyacentes: [
      { slug: 'sf-sfo-airport', tiempo: 15, linea: 'F', tipo: 'bart' },
      { slug: 'sf-berryessa', tiempo: 3, linea: 'F', tipo: 'bart' },
      { slug: 'sf-great-america-vta', tiempo: 5, linea: 'F', tipo: 'transbordo' },
    ]
  },
  'sf-berryessa': {
    ciudad: 'sf',
    nombre: 'Berryessa / North San Jose',
    lineas: ['F'],
    adyacentes: [
      { slug: 'sf-milpitas', tiempo: 3, linea: 'F', tipo: 'bart' },
    ]
  },
  'sf-macarthur': {
    ciudad: 'sf',
    nombre: 'MacArthur',
    lineas: ['F'],
    adyacentes: [
      { slug: 'sf-oakland-city-center', tiempo: 2, linea: 'F', tipo: 'bart' },
      { slug: 'sf-powell', tiempo: 8, linea: 'F', tipo: 'bart' },
    ]
  },
  'sf-oakland-city-center': {
    ciudad: 'sf',
    nombre: 'Oakland City Center',
    lineas: ['F'],
    adyacentes: [
      { slug: 'sf-macarthur', tiempo: 2, linea: 'F', tipo: 'bart' },
      { slug: 'sf-civic-center', tiempo: 8, linea: 'F', tipo: 'bart' },
    ]
  },

  // ============================================
  // VTA LIGHT RAIL
  // ============================================
  'sf-great-america-vta': {
    ciudad: 'sf',
    nombre: 'Great America / Levi\'s Stadium',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'sf-mountain-view', tiempo: 8, linea: 'Orange', tipo: 'vta' },
      { slug: 'sf-milpitas', tiempo: 5, linea: 'Orange', tipo: 'transbordo' },
    ]
  },
  'sf-mountain-view': {
    ciudad: 'sf',
    nombre: 'Mountain View',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'sf-great-america-vta', tiempo: 8, linea: 'Orange', tipo: 'vta' },
    ]
  }
};
