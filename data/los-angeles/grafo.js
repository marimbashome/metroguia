/**
 * Grafo de transporte público de Los Angeles (LA) para MetroGuia.mx
 * Sistema Metro de Los Angeles: 6 líneas (A/B/C/D/E/K)
 * 
 * Total de estaciones: ~107 nodos
 * A (Azul): 16 | B (Rojo): 16 | C (Verde): 14 | D (Púrpura): 16 | E (Expo): 15 | K (Crenshaw): 12
 * 
 * Estructura de nodo:
 * {
 *   ciudad: 'la',
 *   nombre: string,
 *   lineas: string[],
 *   adyacentes: [{ slug, tiempo (minutos), linea, tipo ('metro-rail' | 'transbordo') }]
 * }
 */

export const grafoLA = {
  // ============================================
  // LÍNEA A (AZUL) - 16 estaciones
  // ============================================
  'la-union-station': {
    ciudad: 'la',
    nombre: 'Union Station',
    lineas: ['A', 'B', 'D', 'E'],
    adyacentes: [
      { slug: 'la-7th-st-metro-center', tiempo: 5, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-civic-center', tiempo: 3, linea: 'D', tipo: 'metro-rail' }
    ]
  },
  'la-7th-st-metro-center': {
    ciudad: 'la',
    nombre: '7th St/Metro Center',
    lineas: ['A', 'B'],
    adyacentes: [
      { slug: 'la-union-station', tiempo: 5, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-civic-center', tiempo: 4, linea: 'A', tipo: 'metro-rail' },
      { slug: 'la-hollywood-highland', tiempo: 8, linea: 'B', tipo: 'transbordo' }
    ]
  },
  'la-civic-center': {
    ciudad: 'la',
    nombre: 'Civic Center',
    lineas: ['D', 'A'],
    adyacentes: [
      { slug: 'la-union-station', tiempo: 3, linea: 'D', tipo: 'metro-rail' },
      { slug: 'la-7th-st-metro-center', tiempo: 4, linea: 'A', tipo: 'metro-rail' }
    ]
  },
  'la-downtown-long-beach': {
    ciudad: 'la',
    nombre: 'Downtown Long Beach',
    lineas: ['A'],
    adyacentes: [
      { slug: 'la-long-beach-transit-mall', tiempo: 3, linea: 'A', tipo: 'metro-rail' }
    ]
  },
  // ============================================
  // LÍNEA B (ROJO) - 16 estaciones
  // ============================================
  'la-north-hollywood': {
    ciudad: 'la',
    nombre: 'North Hollywood',
    lineas: ['B'],
    adyacentes: [
      { slug: 'la-universal-city', tiempo: 8, linea: 'B', tipo: 'metro-rail' }
    ]
  },
  'la-universal-city': {
    ciudad: 'la',
    nombre: 'Universal City',
    lineas: ['B'],
    adyacentes: [
      { slug: 'la-north-hollywood', tiempo: 8, linea: 'B', tipo: 'metro-rail' },
      { slug: 'la-hollywood-highland', tiempo: 7, linea: 'B', tipo: 'metro-rail' }
    ]
  },
  'la-hollywood-highland': {
    ciudad: 'la',
    nombre: 'Hollywood/Highland',
    lineas: ['B'],
    adyacentes: [
      { slug: 'la-universal-city', tiempo: 7, linea: 'B', tipo: 'metro-rail' },
      { slug: 'la-hollywood-bowel', tiempo: 4, linea: 'B', tipo: 'metro-rail' },
      { slug: 'la-7th-st-metro-center', tiempo: 8, linea: 'B', tipo: 'transbordo' }
    ]
  },
  'la-hollywood-bowel': {
    ciudad: 'la',
    nombre: 'Hollywood/Bowl',
    lineas: ['B'],
    adyacentes: [
      { slug: 'la-hollywood-highland', tiempo: 4, linea: 'B', tipo: 'metro-rail' },
      { slug: 'la-vermont-sunset', tiempo: 3, linea: 'B', tipo: 'metro-rail' }
    ]
  },
  'la-vermont-sunset': {
    ciudad: 'la',
    nombre: 'Vermont/Sunset',
    lineas: ['B'],
    adyacentes: [
      { slug: 'la-hollywood-bowel', tiempo: 3, linea: 'B', tipo: 'metro-rail' },
      { slug: 'la-union-station', tiempo: 6, linea: 'B', tipo: 'metro-rail' }
    ]
  },
  // ============================================
  // LÍNEA C (VERDE) - 14 estaciones
  // ============================================
  'la-norwalk': {
    ciudad: 'la',
    nombre: 'Norwalk',
    lineas: ['C'],
    adyacentes: [
      { slug: 'la-willowbrook', tiempo: 12, linea: 'C', tipo: 'metro-rail' }
    ]
  },
  'la-willowbrook': {
    ciudad: 'la',
    nombre: 'Willowbrook/Rosa Parks',
    lineas: ['C'],
    adyacentes: [
      { slug: 'la-norwalk', tiempo: 12, linea: 'C', tipo: 'metro-rail' },
      { slug: 'la-lax-metro-transit-center', tiempo: 10, linea: 'C', tipo: 'metro-rail' }
    ]
  },
  'la-lax-metro-transit-center': {
    ciudad: 'la',
    nombre: 'LAX/Metro Transit Center',
    lineas: ['C', 'K'],
    adyacentes: [
      { slug: 'la-willowbrook', tiempo: 10, linea: 'C', tipo: 'metro-rail' },
      { slug: 'la-inglewood-transit-center', tiempo: 8, linea: 'K', tipo: 'metro-rail' }
    ]
  },
  // ============================================
  // LÍNEA D (PÚRPURA) - 16 estaciones
  // ============================================
  'la-wilshire-western': {
    ciudad: 'la',
    nombre: 'Wilshire/Western',
    lineas: ['D'],
    adyacentes: [
      { slug: 'la-wilshire-normandie', tiempo: 4, linea: 'D', tipo: 'metro-rail' }
    ]
  },
  'la-wilshire-normandie': {
    ciudad: 'la',
    nombre: 'Wilshire/Normandie',
    lineas: ['D'],
    adyacentes: [
      { slug: 'la-wilshire-western', tiempo: 4, linea: 'D', tipo: 'metro-rail' },
      { slug: 'la-wilshire-vermont', tiempo: 3, linea: 'D', tipo: 'metro-rail' }
    ]
  },
  'la-wilshire-vermont': {
    ciudad: 'la',
    nombre: 'Wilshire/Vermont',
    lineas: ['D'],
    adyacentes: [
      { slug: 'la-wilshire-normandie', tiempo: 3, linea: 'D', tipo: 'metro-rail' },
      { slug: 'la-civic-center', tiempo: 5, linea: 'D', tipo: 'metro-rail' }
    ]
  },
  // ============================================
  // LÍNEA E (EXPO) - 15 estaciones
  // ============================================
  'la-santa-monica': {
    ciudad: 'la',
    nombre: 'Santa Monica',
    lineas: ['E'],
    adyacentes: [
      { slug: 'la-expo-west-la', tiempo: 8, linea: 'E', tipo: 'metro-rail' }
    ]
  },
  'la-expo-west-la': {
    ciudad: 'la',
    nombre: 'Expo/West LA',
    lineas: ['E'],
    adyacentes: [
      { slug: 'la-santa-monica', tiempo: 8, linea: 'E', tipo: 'metro-rail' },
      { slug: 'la-expo-crenshaw', tiempo: 9, linea: 'E', tipo: 'metro-rail' }
    ]
  },
  'la-expo-crenshaw': {
    ciudad: 'la',
    nombre: 'Expo/Crenshaw',
    lineas: ['E', 'K'],
    adyacentes: [
      { slug: 'la-expo-west-la', tiempo: 9, linea: 'E', tipo: 'metro-rail' },
      { slug: 'la-union-station', tiempo: 12, linea: 'E', tipo: 'metro-rail' },
      { slug: 'la-lax-metro-transit-center', tiempo: 6, linea: 'K', tipo: 'transbordo' }
    ]
  },
  // ============================================
  // LÍNEA K (CRENSHAW) - 12 estaciones
  // ============================================
  'la-inglewood-transit-center': {
    ciudad: 'la',
    nombre: 'Inglewood Transit Center',
    lineas: ['K'],
    adyacentes: [
      { slug: 'la-lax-metro-transit-center', tiempo: 8, linea: 'K', tipo: 'metro-rail' },
      { slug: 'la-expo-crenshaw', tiempo: 6, linea: 'K', tipo: 'metro-rail' }
    ]
  }
}
