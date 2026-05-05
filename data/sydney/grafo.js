/*
 * SYDNEY METRO GRAPH — BFS Adjacency Network
 * ===========================================
 * Coverage: Metro City & Southwest (Tallawong–Sydenham/Airport) +
 *           Metro Northwest (Tallawong–Epping)
 * Total tourist stations: 22
 * Fares: A$2.24-A$4.50 Opal card (airport surcharge ~A$19.97)
 * Graph structure: flat slugs with full adjacency for BFS pathfinding
 * Key interchange: Epping (Northwest ↔ City & Southwest), Central (Metro + Sydney Trains + Light Rail)
 * Note: Fully automated driverless metro — 100% accessible throughout
 */

export const grafoSydney = {

  // ===== METRO NORTHWEST (Tallawong → Epping) =====
  'sydney-tallawong': {
    ciudad: 'sydney',
    nombre: 'Tallawong',
    lineas: ['NorthwestMetro'],
    adyacentes: [
      { slug: 'sydney-rouse-hill', tiempo: 6, linea: 'NorthwestMetro', tipo: 'metro' },
    ],
  },

  'sydney-rouse-hill': {
    ciudad: 'sydney',
    nombre: 'Rouse Hill',
    lineas: ['NorthwestMetro'],
    adyacentes: [
      { slug: 'sydney-tallawong', tiempo: 6, linea: 'NorthwestMetro', tipo: 'metro' },
      { slug: 'sydney-macquarie-university', tiempo: 15, linea: 'NorthwestMetro', tipo: 'metro' },
    ],
  },

  'sydney-macquarie-university': {
    ciudad: 'sydney',
    nombre: 'Macquarie University',
    lineas: ['NorthwestMetro'],
    adyacentes: [
      { slug: 'sydney-rouse-hill', tiempo: 15, linea: 'NorthwestMetro', tipo: 'metro' },
      { slug: 'sydney-epping', tiempo: 6, linea: 'NorthwestMetro', tipo: 'metro' },
    ],
  },

  'sydney-epping': {
    ciudad: 'sydney',
    nombre: 'Epping',
    lineas: ['NorthwestMetro', 'CityMetro'],
    adyacentes: [
      { slug: 'sydney-macquarie-university', tiempo: 6, linea: 'NorthwestMetro', tipo: 'metro' },
      { slug: 'sydney-tallawong', tiempo: 22, linea: 'NorthwestMetro', tipo: 'metro' },
      { slug: 'sydney-chatswood', tiempo: 8, linea: 'CityMetro', tipo: 'metro' },
    ],
  },

  // ===== METRO CITY & SOUTHWEST — North Section =====
  'sydney-chatswood': {
    ciudad: 'sydney',
    nombre: 'Chatswood',
    lineas: ['CityMetro'],
    adyacentes: [
      { slug: 'sydney-epping', tiempo: 8, linea: 'CityMetro', tipo: 'metro' },
      { slug: 'sydney-north-sydney', tiempo: 7, linea: 'CityMetro', tipo: 'metro' },
    ],
  },

  'sydney-north-sydney': {
    ciudad: 'sydney',
    nombre: 'North Sydney / Victoria Cross',
    lineas: ['CityMetro'],
    adyacentes: [
      { slug: 'sydney-chatswood', tiempo: 7, linea: 'CityMetro', tipo: 'metro' },
      { slug: 'sydney-barangaroo', tiempo: 4, linea: 'CityMetro', tipo: 'metro' },
    ],
  },

  // ===== METRO CITY & SOUTHWEST — CBD =====
  'sydney-barangaroo': {
    ciudad: 'sydney',
    nombre: 'Barangaroo',
    lineas: ['CityMetro'],
    adyacentes: [
      { slug: 'sydney-north-sydney', tiempo: 4, linea: 'CityMetro', tipo: 'metro' },
      { slug: 'sydney-martin-place', tiempo: 3, linea: 'CityMetro', tipo: 'metro' },
    ],
  },

  'sydney-martin-place': {
    ciudad: 'sydney',
    nombre: 'Martin Place',
    lineas: ['CityMetro'],
    adyacentes: [
      { slug: 'sydney-barangaroo', tiempo: 3, linea: 'CityMetro', tipo: 'metro' },
      { slug: 'sydney-gadigal', tiempo: 2, linea: 'CityMetro', tipo: 'metro' },
    ],
  },

  'sydney-gadigal': {
    ciudad: 'sydney',
    nombre: 'Gadigal',
    lineas: ['CityMetro'],
    adyacentes: [
      { slug: 'sydney-martin-place', tiempo: 2, linea: 'CityMetro', tipo: 'metro' },
      { slug: 'sydney-central', tiempo: 3, linea: 'CityMetro', tipo: 'metro' },
    ],
  },

  'sydney-central': {
    ciudad: 'sydney',
    nombre: 'Central',
    lineas: ['CityMetro'],
    adyacentes: [
      { slug: 'sydney-gadigal', tiempo: 3, linea: 'CityMetro', tipo: 'metro' },
      { slug: 'sydney-waterloo', tiempo: 4, linea: 'CityMetro', tipo: 'metro' },
    ],
  },

  // ===== METRO CITY & SOUTHWEST — South Section =====
  'sydney-waterloo': {
    ciudad: 'sydney',
    nombre: 'Waterloo',
    lineas: ['CityMetro'],
    adyacentes: [
      { slug: 'sydney-central', tiempo: 4, linea: 'CityMetro', tipo: 'metro' },
      { slug: 'sydney-green-square', tiempo: 3, linea: 'CityMetro', tipo: 'metro' },
    ],
  },

  'sydney-green-square': {
    ciudad: 'sydney',
    nombre: 'Green Square',
    lineas: ['CityMetro'],
    adyacentes: [
      { slug: 'sydney-waterloo', tiempo: 3, linea: 'CityMetro', tipo: 'metro' },
      { slug: 'sydney-mascot', tiempo: 3, linea: 'CityMetro', tipo: 'metro' },
    ],
  },

  'sydney-mascot': {
    ciudad: 'sydney',
    nombre: 'Mascot',
    lineas: ['CityMetro'],
    adyacentes: [
      { slug: 'sydney-green-square', tiempo: 3, linea: 'CityMetro', tipo: 'metro' },
      { slug: 'sydney-sydney-airport-domestic', tiempo: 3, linea: 'CityMetro', tipo: 'metro' },
    ],
  },

  // ===== AIRPORT STATIONS =====
  'sydney-sydney-airport-domestic': {
    ciudad: 'sydney',
    nombre: 'Sydney Airport (Domestic T2/T3)',
    lineas: ['CityMetro'],
    adyacentes: [
      { slug: 'sydney-mascot', tiempo: 3, linea: 'CityMetro', tipo: 'metro' },
      { slug: 'sydney-sydney-airport-international', tiempo: 3, linea: 'CityMetro', tipo: 'metro' },
    ],
  },

  'sydney-sydney-airport-international': {
    ciudad: 'sydney',
    nombre: 'Sydney Airport (International T1)',
    lineas: ['CityMetro'],
    adyacentes: [
      { slug: 'sydney-sydney-airport-domestic', tiempo: 3, linea: 'CityMetro', tipo: 'metro' },
      { slug: 'sydney-sydenham', tiempo: 6, linea: 'CityMetro', tipo: 'metro' },
    ],
  },

  'sydney-sydenham': {
    ciudad: 'sydney',
    nombre: 'Sydenham',
    lineas: ['CityMetro'],
    adyacentes: [
      { slug: 'sydney-sydney-airport-international', tiempo: 6, linea: 'CityMetro', tipo: 'metro' },
      { slug: 'sydney-central', tiempo: 12, linea: 'CityMetro', tipo: 'metro' },
    ],
  },

}
