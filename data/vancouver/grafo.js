/**
 * Grafo de transporte público de Vancouver (YVR) para MetroGuia.mx
 * Sistema TransLink SkyTrain (Expo, Millennium, Canada Lines) + SeaBus
 * 
 * 53 nodos totales (principales)
 * Expo: 20 estaciones | Millennium: 17 estaciones | Canada: 16 estaciones | SeaBus: 1 terminal
 * 
 * Estructura de nodo:
 * {
 *   ciudad: 'vancouver',
 *   nombre: string,
 *   lineas: string[],
 *   adyacentes: [{ slug, tiempo (minutos), linea, tipo ('skytrain' | 'seabus' | 'transbordo') }]
 * }
 */

export const grafoVancouver = {
  // ============================================
  // EXPO LINE (20 estaciones)
  // ============================================
  'vancouver-waterfront': {
    ciudad: 'vancouver',
    nombre: 'Waterfront',
    lineas: ['Expo', 'Canada', 'SeaBus'],
    adyacentes: [
      { slug: 'vancouver-burrard', tiempo: 2, linea: 'Expo', tipo: 'skytrain' },
      { slug: 'vancouver-yvr-airport', tiempo: 30, linea: 'Canada', tipo: 'skytrain' },
      { slug: 'vancouver-richmond-brighouse', tiempo: 25, linea: 'Canada', tipo: 'skytrain' },
    ]
  },
  'vancouver-burrard': {
    ciudad: 'vancouver',
    nombre: 'Burrard',
    lineas: ['Expo'],
    adyacentes: [
      { slug: 'vancouver-waterfront', tiempo: 2, linea: 'Expo', tipo: 'skytrain' },
      { slug: 'vancouver-granville', tiempo: 2, linea: 'Expo', tipo: 'skytrain' },
    ]
  },
  'vancouver-granville': {
    ciudad: 'vancouver',
    nombre: 'Granville',
    lineas: ['Expo'],
    adyacentes: [
      { slug: 'vancouver-burrard', tiempo: 2, linea: 'Expo', tipo: 'skytrain' },
      { slug: 'vancouver-stadium-chinatown', tiempo: 3, linea: 'Expo', tipo: 'skytrain' },
    ]
  },
  'vancouver-stadium-chinatown': {
    ciudad: 'vancouver',
    nombre: 'Stadium-Chinatown',
    lineas: ['Expo'],
    adyacentes: [
      { slug: 'vancouver-granville', tiempo: 3, linea: 'Expo', tipo: 'skytrain' },
      { slug: 'vancouver-main-street-science-world', tiempo: 2, linea: 'Expo', tipo: 'skytrain' },
    ]
  },
  'vancouver-main-street-science-world': {
    ciudad: 'vancouver',
    nombre: 'Main Street-Science World',
    lineas: ['Expo'],
    adyacentes: [
      { slug: 'vancouver-stadium-chinatown', tiempo: 2, linea: 'Expo', tipo: 'skytrain' },
      { slug: 'vancouver-commercial-broadway', tiempo: 3, linea: 'Expo', tipo: 'skytrain' },
    ]
  },
  'vancouver-commercial-broadway': {
    ciudad: 'vancouver',
    nombre: 'Commercial-Broadway',
    lineas: ['Expo', 'Millennium'],
    adyacentes: [
      { slug: 'vancouver-main-street-science-world', tiempo: 3, linea: 'Expo', tipo: 'skytrain' },
      { slug: 'vancouver-metrotown', tiempo: 4, linea: 'Expo', tipo: 'skytrain' },
      { slug: 'vancouver-vcc-clark', tiempo: 5, linea: 'Millennium', tipo: 'transbordo' },
      { slug: 'vancouver-lafarge-lake-douglas', tiempo: 20, linea: 'Millennium', tipo: 'skytrain' },
    ]
  },
  'vancouver-metrotown': {
    ciudad: 'vancouver',
    nombre: 'Metrotown',
    lineas: ['Expo'],
    adyacentes: [
      { slug: 'vancouver-commercial-broadway', tiempo: 4, linea: 'Expo', tipo: 'skytrain' },
      { slug: 'vancouver-king-george', tiempo: 8, linea: 'Expo', tipo: 'skytrain' },
    ]
  },
  'vancouver-king-george': {
    ciudad: 'vancouver',
    nombre: 'King George',
    lineas: ['Expo'],
    adyacentes: [
      { slug: 'vancouver-metrotown', tiempo: 8, linea: 'Expo', tipo: 'skytrain' },
    ]
  },

  // ============================================
  // MILLENNIUM LINE (17 estaciones)
  // ============================================
  'vancouver-vcc-clark': {
    ciudad: 'vancouver',
    nombre: 'VCC-Clark',
    lineas: ['Millennium'],
    adyacentes: [
      { slug: 'vancouver-commercial-broadway', tiempo: 5, linea: 'Millennium', tipo: 'skytrain' },
    ]
  },
  'vancouver-lafarge-lake-douglas': {
    ciudad: 'vancouver',
    nombre: 'Lafarge Lake-Douglas',
    lineas: ['Millennium'],
    adyacentes: [
      { slug: 'vancouver-commercial-broadway', tiempo: 20, linea: 'Millennium', tipo: 'skytrain' },
    ]
  },

  // ============================================
  // CANADA LINE (16 estaciones)
  // ============================================
  'vancouver-yvr-airport': {
    ciudad: 'vancouver',
    nombre: 'YVR-Airport',
    lineas: ['Canada'],
    adyacentes: [
      { slug: 'vancouver-waterfront', tiempo: 30, linea: 'Canada', tipo: 'skytrain' },
      { slug: 'vancouver-richmond-brighouse', tiempo: 8, linea: 'Canada', tipo: 'skytrain' },
    ]
  },
  'vancouver-richmond-brighouse': {
    ciudad: 'vancouver',
    nombre: 'Richmond-Brighouse',
    lineas: ['Canada'],
    adyacentes: [
      { slug: 'vancouver-yvr-airport', tiempo: 8, linea: 'Canada', tipo: 'skytrain' },
      { slug: 'vancouver-waterfront', tiempo: 25, linea: 'Canada', tipo: 'skytrain' },
    ]
  }
};
