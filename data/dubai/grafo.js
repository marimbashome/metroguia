/*
 * DUBAI METRO GRAPH — BFS Adjacency Network
 * ==========================================
 * Coverage: Red Line (Rashidiya to UAE Exchange) + Green Line (Creek to Etisalat)
 * Total tourist stations: 20
 * Fares: AED 2-7.5 (Nol card, Silver or Gold class)
 * Graph structure: flat slugs with full adjacency for BFS pathfinding
 * Key interchanges: BurJuman (Red/Green), Union (Red/Green)
 * Note: Driverless, fully automated, 100% A/C — Gold Class for premium experience
 */

export const grafoDubai = {

  // ===== RED LINE — Rashidiya to UAE Exchange =====
  'dubai-airport-terminal-3': {
    ciudad: 'dubai',
    nombre: 'Airport Terminal 3',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dubai-airport-terminal-1', tiempo: 3, linea: 'Red', tipo: 'metro' },
      { slug: 'dubai-union', tiempo: 14, linea: 'Red', tipo: 'metro' },
    ],
  },

  'dubai-airport-terminal-1': {
    ciudad: 'dubai',
    nombre: 'Airport Terminal 1',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dubai-airport-terminal-3', tiempo: 3, linea: 'Red', tipo: 'metro' },
      { slug: 'dubai-deira-city-centre-red', tiempo: 4, linea: 'Red', tipo: 'metro' },
    ],
  },

  'dubai-deira-city-centre-red': {
    ciudad: 'dubai',
    nombre: 'Deira City Centre (Red)',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dubai-airport-terminal-1', tiempo: 4, linea: 'Red', tipo: 'metro' },
      { slug: 'dubai-union', tiempo: 8, linea: 'Red', tipo: 'metro' },
    ],
  },

  'dubai-union': {
    ciudad: 'dubai',
    nombre: 'Union',
    lineas: ['Red', 'Green'],
    adyacentes: [
      { slug: 'dubai-deira-city-centre-red', tiempo: 8, linea: 'Red', tipo: 'metro' },
      { slug: 'dubai-burjuman', tiempo: 6, linea: 'Red', tipo: 'metro' },
      { slug: 'dubai-al-ghubaiba', tiempo: 5, linea: 'Green', tipo: 'metro' },
      { slug: 'dubai-baniyas-square', tiempo: 3, linea: 'Green', tipo: 'metro' },
    ],
  },

  'dubai-burjuman': {
    ciudad: 'dubai',
    nombre: 'BurJuman',
    lineas: ['Red', 'Green'],
    adyacentes: [
      { slug: 'dubai-union', tiempo: 6, linea: 'Red', tipo: 'metro' },
      { slug: 'dubai-world-trade-centre', tiempo: 4, linea: 'Red', tipo: 'metro' },
      { slug: 'dubai-al-fahidi', tiempo: 3, linea: 'Green', tipo: 'metro' },
    ],
  },

  'dubai-world-trade-centre': {
    ciudad: 'dubai',
    nombre: 'World Trade Centre',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dubai-burjuman', tiempo: 4, linea: 'Red', tipo: 'metro' },
      { slug: 'dubai-emirates-towers', tiempo: 3, linea: 'Red', tipo: 'metro' },
    ],
  },

  'dubai-emirates-towers': {
    ciudad: 'dubai',
    nombre: 'Emirates Towers',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dubai-world-trade-centre', tiempo: 3, linea: 'Red', tipo: 'metro' },
      { slug: 'dubai-financial-centre', tiempo: 2, linea: 'Red', tipo: 'metro' },
    ],
  },

  'dubai-financial-centre': {
    ciudad: 'dubai',
    nombre: 'Financial Centre (DIFC)',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dubai-emirates-towers', tiempo: 2, linea: 'Red', tipo: 'metro' },
      { slug: 'dubai-burj-khalifa-dubai-mall', tiempo: 2, linea: 'Red', tipo: 'metro' },
    ],
  },

  'dubai-burj-khalifa-dubai-mall': {
    ciudad: 'dubai',
    nombre: 'Burj Khalifa / Dubai Mall',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dubai-financial-centre', tiempo: 2, linea: 'Red', tipo: 'metro' },
      { slug: 'dubai-business-bay', tiempo: 2, linea: 'Red', tipo: 'metro' },
    ],
  },

  'dubai-business-bay': {
    ciudad: 'dubai',
    nombre: 'Business Bay',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dubai-burj-khalifa-dubai-mall', tiempo: 2, linea: 'Red', tipo: 'metro' },
      { slug: 'dubai-mall-of-the-emirates', tiempo: 8, linea: 'Red', tipo: 'metro' },
    ],
  },

  'dubai-mall-of-the-emirates': {
    ciudad: 'dubai',
    nombre: 'Mall of the Emirates',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dubai-business-bay', tiempo: 8, linea: 'Red', tipo: 'metro' },
      { slug: 'dubai-dubai-marina', tiempo: 6, linea: 'Red', tipo: 'metro' },
    ],
  },

  'dubai-dubai-marina': {
    ciudad: 'dubai',
    nombre: 'Dubai Marina',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dubai-mall-of-the-emirates', tiempo: 6, linea: 'Red', tipo: 'metro' },
      { slug: 'dubai-dmcc', tiempo: 3, linea: 'Red', tipo: 'metro' },
    ],
  },

  'dubai-dmcc': {
    ciudad: 'dubai',
    nombre: 'DMCC (JLT)',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dubai-dubai-marina', tiempo: 3, linea: 'Red', tipo: 'metro' },
      { slug: 'dubai-ibn-battuta', tiempo: 4, linea: 'Red', tipo: 'metro' },
    ],
  },

  'dubai-ibn-battuta': {
    ciudad: 'dubai',
    nombre: 'Ibn Battuta',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dubai-dmcc', tiempo: 4, linea: 'Red', tipo: 'metro' },
      { slug: 'dubai-jebel-ali', tiempo: 6, linea: 'Red', tipo: 'metro' },
    ],
  },

  'dubai-jebel-ali': {
    ciudad: 'dubai',
    nombre: 'Jebel Ali',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'dubai-ibn-battuta', tiempo: 6, linea: 'Red', tipo: 'metro' },
    ],
  },

  // ===== GREEN LINE — Creek to Etisalat =====
  'dubai-al-ghubaiba': {
    ciudad: 'dubai',
    nombre: 'Al Ghubaiba',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'dubai-union', tiempo: 5, linea: 'Green', tipo: 'metro' },
      { slug: 'dubai-al-fahidi', tiempo: 4, linea: 'Green', tipo: 'metro' },
    ],
  },

  'dubai-al-fahidi': {
    ciudad: 'dubai',
    nombre: 'Al Fahidi',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'dubai-al-ghubaiba', tiempo: 4, linea: 'Green', tipo: 'metro' },
      { slug: 'dubai-burjuman', tiempo: 3, linea: 'Green', tipo: 'metro' },
    ],
  },

  'dubai-baniyas-square': {
    ciudad: 'dubai',
    nombre: 'Baniyas Square',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'dubai-union', tiempo: 3, linea: 'Green', tipo: 'metro' },
      { slug: 'dubai-deira-city-centre', tiempo: 3, linea: 'Green', tipo: 'metro' },
    ],
  },

  'dubai-deira-city-centre': {
    ciudad: 'dubai',
    nombre: 'Deira City Centre',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'dubai-baniyas-square', tiempo: 3, linea: 'Green', tipo: 'metro' },
      { slug: 'dubai-al-qiyadah', tiempo: 4, linea: 'Green', tipo: 'metro' },
    ],
  },

  'dubai-al-qiyadah': {
    ciudad: 'dubai',
    nombre: 'Al Qiyadah',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'dubai-deira-city-centre', tiempo: 4, linea: 'Green', tipo: 'metro' },
    ],
  },

}
