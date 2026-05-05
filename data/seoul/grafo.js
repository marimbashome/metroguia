/*
 * SEOUL METROPOLITAN SUBWAY GRAPH — BFS Adjacency Network
 * =========================================================
 * Coverage: Lines 1-9 + AREX (Airport Railroad Express) + Sinbundang
 * Total tourist stations: 25
 * Fares: ₩1,400-₩1,650 basic (T-Money card)
 * Graph structure: flat slugs with full adjacency for BFS pathfinding
 * Key hubs: Seoul Station (L1/L4/AREX/KTX), Dongdaemun (L1/L4)
 *           City Hall (L1/L2), Express Bus Terminal (L3/L7/L9)
 * Note: Line 2 is a loop — connections shown for major tourist stations
 */

export const grafoSeoul = {

  // ===== LINE 1 (DARK BLUE) =====
  'seoul-seoul-station': {
    ciudad: 'seoul',
    nombre: 'Seoul Station',
    lineas: ['L1', 'L4', 'AREX', 'KTX'],
    adyacentes: [
      { slug: 'seoul-city-hall', tiempo: 2, linea: 'L1', tipo: 'metro' },
      { slug: 'seoul-dongdaemun', tiempo: 6, linea: 'L4', tipo: 'metro' },
      { slug: 'seoul-myeongdong', tiempo: 3, linea: 'L4', tipo: 'metro' },
      { slug: 'seoul-incheon-airport', tiempo: 43, linea: 'AREX-Direct', tipo: 'arex' },
      { slug: 'seoul-gimpo-airport', tiempo: 30, linea: 'AREX', tipo: 'arex' },
    ],
  },

  'seoul-city-hall': {
    ciudad: 'seoul',
    nombre: 'City Hall',
    lineas: ['L1', 'L2'],
    adyacentes: [
      { slug: 'seoul-seoul-station', tiempo: 2, linea: 'L1', tipo: 'metro' },
      { slug: 'seoul-dongdaemun', tiempo: 5, linea: 'L1', tipo: 'metro' },
      { slug: 'seoul-hongik-univ', tiempo: 8, linea: 'L2', tipo: 'metro' },
      { slug: 'seoul-sinchon', tiempo: 6, linea: 'L2', tipo: 'metro' },
      { slug: 'seoul-gangnam', tiempo: 18, linea: 'L2', tipo: 'metro' },
    ],
  },

  'seoul-dongdaemun': {
    ciudad: 'seoul',
    nombre: 'Dongdaemun',
    lineas: ['L1', 'L4'],
    adyacentes: [
      { slug: 'seoul-city-hall', tiempo: 5, linea: 'L1', tipo: 'metro' },
      { slug: 'seoul-seoul-station', tiempo: 6, linea: 'L4', tipo: 'metro' },
      { slug: 'seoul-myeongdong', tiempo: 4, linea: 'L4', tipo: 'metro' },
      { slug: 'seoul-dongdaemun-history', tiempo: 2, linea: 'L4', tipo: 'metro' },
    ],
  },

  // ===== LINE 2 (GREEN LOOP) =====
  'seoul-hongik-univ': {
    ciudad: 'seoul',
    nombre: 'Hongik University',
    lineas: ['L2', 'AREX'],
    adyacentes: [
      { slug: 'seoul-sinchon', tiempo: 3, linea: 'L2', tipo: 'metro' },
      { slug: 'seoul-city-hall', tiempo: 8, linea: 'L2', tipo: 'metro' },
      { slug: 'seoul-gimpo-airport', tiempo: 25, linea: 'AREX', tipo: 'arex' },
      { slug: 'seoul-incheon-airport', tiempo: 55, linea: 'AREX', tipo: 'arex' },
    ],
  },

  'seoul-sinchon': {
    ciudad: 'seoul',
    nombre: 'Sinchon',
    lineas: ['L2'],
    adyacentes: [
      { slug: 'seoul-hongik-univ', tiempo: 3, linea: 'L2', tipo: 'metro' },
      { slug: 'seoul-ewha-univ', tiempo: 2, linea: 'L2', tipo: 'metro' },
      { slug: 'seoul-city-hall', tiempo: 6, linea: 'L2', tipo: 'metro' },
    ],
  },

  'seoul-ewha-univ': {
    ciudad: 'seoul',
    nombre: 'Ewha Womans University',
    lineas: ['L2'],
    adyacentes: [
      { slug: 'seoul-sinchon', tiempo: 2, linea: 'L2', tipo: 'metro' },
      { slug: 'seoul-city-hall', tiempo: 8, linea: 'L2', tipo: 'metro' },
    ],
  },

  'seoul-gangnam': {
    ciudad: 'seoul',
    nombre: 'Gangnam',
    lineas: ['L2', 'Sinbundang'],
    adyacentes: [
      { slug: 'seoul-samsung', tiempo: 3, linea: 'L2', tipo: 'metro' },
      { slug: 'seoul-city-hall', tiempo: 18, linea: 'L2', tipo: 'metro' },
      { slug: 'seoul-express-bus-terminal', tiempo: 8, linea: 'L2', tipo: 'metro' },
    ],
  },

  'seoul-samsung': {
    ciudad: 'seoul',
    nombre: 'Samsung',
    lineas: ['L2'],
    adyacentes: [
      { slug: 'seoul-gangnam', tiempo: 3, linea: 'L2', tipo: 'metro' },
      { slug: 'seoul-jamsil', tiempo: 6, linea: 'L2', tipo: 'metro' },
    ],
  },

  'seoul-jamsil': {
    ciudad: 'seoul',
    nombre: 'Jamsil',
    lineas: ['L2', 'L8'],
    adyacentes: [
      { slug: 'seoul-samsung', tiempo: 6, linea: 'L2', tipo: 'metro' },
      { slug: 'seoul-olympic-park', tiempo: 3, linea: 'L2', tipo: 'metro' },
    ],
  },

  'seoul-olympic-park': {
    ciudad: 'seoul',
    nombre: 'Sports Complex',
    lineas: ['L2'],
    adyacentes: [
      { slug: 'seoul-jamsil', tiempo: 3, linea: 'L2', tipo: 'metro' },
      { slug: 'seoul-gangnam', tiempo: 12, linea: 'L2', tipo: 'metro' },
    ],
  },

  'seoul-sinseol-dong': {
    ciudad: 'seoul',
    nombre: 'Sinseol-dong',
    lineas: ['L1', 'L2'],
    adyacentes: [
      { slug: 'seoul-dongdaemun', tiempo: 5, linea: 'L1', tipo: 'metro' },
      { slug: 'seoul-city-hall', tiempo: 10, linea: 'L2', tipo: 'metro' },
    ],
  },

  // ===== LINE 3 (ORANGE) =====
  'seoul-gyeongbokgung': {
    ciudad: 'seoul',
    nombre: 'Gyeongbokgung',
    lineas: ['L3'],
    adyacentes: [
      { slug: 'seoul-anguk', tiempo: 2, linea: 'L3', tipo: 'metro' },
      { slug: 'seoul-gwanghwamun', tiempo: 5, linea: 'walk', tipo: 'walk' },
    ],
  },

  'seoul-anguk': {
    ciudad: 'seoul',
    nombre: 'Anguk',
    lineas: ['L3'],
    adyacentes: [
      { slug: 'seoul-gyeongbokgung', tiempo: 2, linea: 'L3', tipo: 'metro' },
      { slug: 'seoul-express-bus-terminal', tiempo: 15, linea: 'L3', tipo: 'metro' },
    ],
  },

  'seoul-express-bus-terminal': {
    ciudad: 'seoul',
    nombre: 'Express Bus Terminal',
    lineas: ['L3', 'L7', 'L9'],
    adyacentes: [
      { slug: 'seoul-anguk', tiempo: 15, linea: 'L3', tipo: 'metro' },
      { slug: 'seoul-gangnam', tiempo: 8, linea: 'L2', tipo: 'metro' },
      { slug: 'seoul-gimpo-airport', tiempo: 20, linea: 'L9', tipo: 'metro' },
    ],
  },

  // ===== LINE 4 (SKY BLUE) =====
  'seoul-myeongdong': {
    ciudad: 'seoul',
    nombre: 'Myeongdong',
    lineas: ['L4'],
    adyacentes: [
      { slug: 'seoul-seoul-station', tiempo: 3, linea: 'L4', tipo: 'metro' },
      { slug: 'seoul-dongdaemun', tiempo: 4, linea: 'L4', tipo: 'metro' },
      { slug: 'seoul-namdaemun-market', tiempo: 2, linea: 'L4', tipo: 'metro' },
    ],
  },

  'seoul-namdaemun-market': {
    ciudad: 'seoul',
    nombre: 'Namdaemun Market',
    lineas: ['L4'],
    adyacentes: [
      { slug: 'seoul-myeongdong', tiempo: 2, linea: 'L4', tipo: 'metro' },
      { slug: 'seoul-seoul-station', tiempo: 2, linea: 'L4', tipo: 'metro' },
    ],
  },

  'seoul-dongdaemun-history': {
    ciudad: 'seoul',
    nombre: 'Dongdaemun History & Culture Park',
    lineas: ['L2', 'L4', 'L5'],
    adyacentes: [
      { slug: 'seoul-dongdaemun', tiempo: 2, linea: 'L4', tipo: 'metro' },
      { slug: 'seoul-myeongdong', tiempo: 5, linea: 'L4', tipo: 'metro' },
    ],
  },

  // ===== LINE 5 (PURPLE) =====
  'seoul-gwanghwamun': {
    ciudad: 'seoul',
    nombre: 'Gwanghwamun',
    lineas: ['L5'],
    adyacentes: [
      { slug: 'seoul-gyeongbokgung', tiempo: 5, linea: 'walk', tipo: 'walk' },
      { slug: 'seoul-seoul-station', tiempo: 8, linea: 'L5', tipo: 'metro' },
    ],
  },

  'seoul-yeouinaru': {
    ciudad: 'seoul',
    nombre: 'Yeouinaru',
    lineas: ['L5'],
    adyacentes: [
      { slug: 'seoul-seoul-station', tiempo: 8, linea: 'L5', tipo: 'metro' },
      { slug: 'seoul-gimpo-airport', tiempo: 15, linea: 'L5', tipo: 'metro' },
    ],
  },

  // ===== LINE 6 (BROWN) =====
  'seoul-itaewon': {
    ciudad: 'seoul',
    nombre: 'Itaewon',
    lineas: ['L6'],
    adyacentes: [
      { slug: 'seoul-seoul-station', tiempo: 8, linea: 'L6', tipo: 'metro' },
      { slug: 'seoul-express-bus-terminal', tiempo: 10, linea: 'L6', tipo: 'metro' },
    ],
  },

  // ===== INSADONG (bus connection) =====
  'seoul-insadong': {
    ciudad: 'seoul',
    nombre: 'Insadong',
    lineas: ['L3'],
    adyacentes: [
      { slug: 'seoul-anguk', tiempo: 5, linea: 'walk', tipo: 'walk' },
      { slug: 'seoul-gyeongbokgung', tiempo: 8, linea: 'walk', tipo: 'walk' },
    ],
  },

  // ===== AIRPORTS (AREX) =====
  'seoul-gimpo-airport': {
    ciudad: 'seoul',
    nombre: 'Gimpo Airport',
    lineas: ['L9', 'AREX'],
    adyacentes: [
      { slug: 'seoul-hongik-univ', tiempo: 25, linea: 'AREX', tipo: 'arex' },
      { slug: 'seoul-seoul-station', tiempo: 30, linea: 'AREX', tipo: 'arex' },
      { slug: 'seoul-incheon-airport', tiempo: 30, linea: 'AREX', tipo: 'arex' },
    ],
  },

  'seoul-incheon-airport': {
    ciudad: 'seoul',
    nombre: 'Incheon International Airport',
    lineas: ['AREX'],
    adyacentes: [
      { slug: 'seoul-gimpo-airport', tiempo: 30, linea: 'AREX', tipo: 'arex' },
      { slug: 'seoul-seoul-station', tiempo: 43, linea: 'AREX-Direct', tipo: 'arex' },
      { slug: 'seoul-hongik-univ', tiempo: 55, linea: 'AREX', tipo: 'arex' },
    ],
  },

}
