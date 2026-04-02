/**
 * Grafo de transporte público de Kansas City (KC) para MetroGuia.mx
 * Sistema KC Streetcar: Main Line (15 est) + Riverfront Extension (3 est)
 * + ConnectKC26 Stadium Direct (bus FIFA 2026)
 *
 * 18 nodos totales
 * Main Line: 15 estaciones | Riverfront: 3 estaciones (abre mayo 2026)
 * ConnectKC26: 6 puntos de partida convergentes
 *
 * Estructura de nodo:
 * {
 *   ciudad: 'kansas-city',
 *   nombre: string,
 *   lineas: string[],
 *   adyacentes: [{ slug, tiempo (minutos), linea, tipo ('kc-streetcar' | 'bus' | 'transbordo') }]
 * }
 */

export const grafoKansasCity = {
  // ============================================
  // MAIN LINE (Roja) - 15 estaciones
  // ============================================
  'kc-umkc': {
    ciudad: 'kansas-city',
    nombre: 'UMKC (51st & Brookside)',
    lineas: ['main'],
    adyacentes: [
      { slug: 'kc-southmoreland', tiempo: 4, linea: 'main', tipo: 'kc-streetcar' },
    ]
  },
  'kc-southmoreland': {
    ciudad: 'kansas-city',
    nombre: 'Southmoreland (43rd & Main)',
    lineas: ['main'],
    adyacentes: [
      { slug: 'kc-umkc', tiempo: 4, linea: 'main', tipo: 'kc-streetcar' },
      { slug: 'kc-westport', tiempo: 3, linea: 'main', tipo: 'kc-streetcar' },
    ]
  },
  'kc-westport': {
    ciudad: 'kansas-city',
    nombre: 'Westport (39th & Main)',
    lineas: ['main'],
    adyacentes: [
      { slug: 'kc-southmoreland', tiempo: 3, linea: 'main', tipo: 'kc-streetcar' },
      { slug: 'kc-armour', tiempo: 2, linea: 'main', tipo: 'kc-streetcar' },
    ]
  },
  'kc-armour': {
    ciudad: 'kansas-city',
    nombre: 'Armour (35th & Main)',
    lineas: ['main'],
    adyacentes: [
      { slug: 'kc-westport', tiempo: 2, linea: 'main', tipo: 'kc-streetcar' },
      { slug: 'kc-union-hill', tiempo: 2, linea: 'main', tipo: 'kc-streetcar' },
    ]
  },
  'kc-union-hill': {
    ciudad: 'kansas-city',
    nombre: 'Union Hill (31st & Main)',
    lineas: ['main'],
    adyacentes: [
      { slug: 'kc-armour', tiempo: 2, linea: 'main', tipo: 'kc-streetcar' },
      { slug: 'kc-union-station', tiempo: 3, linea: 'main', tipo: 'kc-streetcar' },
    ]
  },
  'kc-union-station': {
    ciudad: 'kansas-city',
    nombre: 'Union Station (Pershing & Main)',
    lineas: ['main'],
    adyacentes: [
      { slug: 'kc-union-hill', tiempo: 3, linea: 'main', tipo: 'kc-streetcar' },
      { slug: 'kc-crossroads', tiempo: 2, linea: 'main', tipo: 'kc-streetcar' },
      { slug: 'kc-arrowhead-stadium', tiempo: 25, linea: 'fifa-stadium-direct', tipo: 'bus' },
    ]
  },
  'kc-crossroads': {
    ciudad: 'kansas-city',
    nombre: 'Crossroads (19th & Main)',
    lineas: ['main'],
    adyacentes: [
      { slug: 'kc-union-station', tiempo: 2, linea: 'main', tipo: 'kc-streetcar' },
      { slug: 'kc-kauffman-center', tiempo: 2, linea: 'main', tipo: 'kc-streetcar' },
    ]
  },
  'kc-kauffman-center': {
    ciudad: 'kansas-city',
    nombre: 'Kauffman Center (16th & Main)',
    lineas: ['main'],
    adyacentes: [
      { slug: 'kc-crossroads', tiempo: 2, linea: 'main', tipo: 'kc-streetcar' },
      { slug: 'kc-power-light', tiempo: 2, linea: 'main', tipo: 'kc-streetcar' },
    ]
  },
  'kc-power-light': {
    ciudad: 'kansas-city',
    nombre: 'Power & Light (13th & Main)',
    lineas: ['main'],
    adyacentes: [
      { slug: 'kc-kauffman-center', tiempo: 2, linea: 'main', tipo: 'kc-streetcar' },
      { slug: 'kc-crown-center', tiempo: 2, linea: 'main', tipo: 'kc-streetcar' },
      { slug: 'kc-arrowhead-stadium', tiempo: 20, linea: 'fifa-stadium-direct', tipo: 'bus' },
    ]
  },
  'kc-crown-center': {
    ciudad: 'kansas-city',
    nombre: 'Crown Center (11th & Main)',
    lineas: ['main'],
    adyacentes: [
      { slug: 'kc-power-light', tiempo: 2, linea: 'main', tipo: 'kc-streetcar' },
      { slug: 'kc-city-market', tiempo: 1, linea: 'main', tipo: 'kc-streetcar' },
    ]
  },
  'kc-city-market': {
    ciudad: 'kansas-city',
    nombre: 'City Market (8th & Main)',
    lineas: ['main'],
    adyacentes: [
      { slug: 'kc-crown-center', tiempo: 1, linea: 'main', tipo: 'kc-streetcar' },
      { slug: 'kc-river-market', tiempo: 1, linea: 'main', tipo: 'kc-streetcar' },
    ]
  },
  'kc-river-market': {
    ciudad: 'kansas-city',
    nombre: 'River Market (3rd & Grand)',
    lineas: ['main', 'riverfront'],
    adyacentes: [
      { slug: 'kc-city-market', tiempo: 1, linea: 'main', tipo: 'kc-streetcar' },
      { slug: 'kc-union-hill-north', tiempo: 1, linea: 'main', tipo: 'kc-streetcar' },
      { slug: 'kc-riverfront-central', tiempo: 5, linea: 'riverfront', tipo: 'transbordo' },
      { slug: 'kc-cpkc-stadium', tiempo: 10, linea: 'riverfront', tipo: 'kc-streetcar' },
      { slug: 'kc-arrowhead-stadium', tiempo: 15, linea: 'fifa-stadium-direct', tipo: 'bus' },
    ]
  },
  'kc-union-hill-north': {
    ciudad: 'kansas-city',
    nombre: 'Union Hill North (5th & Main)',
    lineas: ['main'],
    adyacentes: [
      { slug: 'kc-river-market', tiempo: 1, linea: 'main', tipo: 'kc-streetcar' },
      { slug: 'kc-5th-broadway', tiempo: 1, linea: 'main', tipo: 'kc-streetcar' },
    ]
  },
  'kc-5th-broadway': {
    ciudad: 'kansas-city',
    nombre: '5th & Broadway',
    lineas: ['main'],
    adyacentes: [
      { slug: 'kc-union-hill-north', tiempo: 1, linea: 'main', tipo: 'kc-streetcar' },
      { slug: 'kc-historic-rbv', tiempo: 1, linea: 'main', tipo: 'kc-streetcar' },
    ]
  },
  'kc-historic-rbv': {
    ciudad: 'kansas-city',
    nombre: 'Historic River Boulevard',
    lineas: ['main'],
    adyacentes: [
      { slug: 'kc-5th-broadway', tiempo: 1, linea: 'main', tipo: 'kc-streetcar' },
    ]
  },

  // ============================================
  // RIVERFRONT EXTENSION (Azul) - 3 estaciones
  // Abre mayo 2026 para FIFA 2026
  // ============================================
  'kc-riverfront-central': {
    ciudad: 'kansas-city',
    nombre: 'Riverfront Central',
    lineas: ['riverfront'],
    adyacentes: [
      { slug: 'kc-river-market', tiempo: 5, linea: 'riverfront', tipo: 'transbordo' },
      { slug: 'kc-cpkc-stadium', tiempo: 5, linea: 'riverfront', tipo: 'kc-streetcar' },
    ]
  },
  'kc-cpkc-stadium': {
    ciudad: 'kansas-city',
    nombre: 'CPKC Stadium (Berkley Riverfront)',
    lineas: ['riverfront'],
    adyacentes: [
      { slug: 'kc-riverfront-central', tiempo: 5, linea: 'riverfront', tipo: 'kc-streetcar' },
      { slug: 'kc-river-market', tiempo: 10, linea: 'riverfront', tipo: 'transbordo' },
    ]
  },

  // ============================================
  // CONNECTKC26 STADIUM DIRECT (Naranja) - Bus FIFA
  // Múltiples puntos convergentes a Arrowhead
  // ============================================
  'kc-arrowhead-stadium': {
    ciudad: 'kansas-city',
    nombre: 'Arrowhead Stadium',
    lineas: ['fifa-stadium-direct'],
    adyacentes: [
      { slug: 'kc-union-station', tiempo: 25, linea: 'fifa-stadium-direct', tipo: 'bus' },
      { slug: 'kc-power-light', tiempo: 20, linea: 'fifa-stadium-direct', tipo: 'bus' },
      { slug: 'kc-river-market', tiempo: 15, linea: 'fifa-stadium-direct', tipo: 'bus' },
    ]
  }
};