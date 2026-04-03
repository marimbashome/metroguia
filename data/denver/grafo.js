export const grafoDenver = {
  // A LINE (Airport)
  'denver-union-station': {
    ciudad: 'denver',
    nombre: 'Union Station',
    lineas: ['A', 'B', 'E', 'G', 'W'],
    adyacentes: [
      { slug: 'denver-38th-blake', tiempo: 4, linea: 'A', tipo: 'rtd-rail' },
      { slug: 'denver-westminster-41st-fox', tiempo: 15, linea: 'B', tipo: 'rtd-rail' },
      { slug: 'denver-10th-osage', tiempo: 4, linea: 'E', tipo: 'rtd-rail' },
      { slug: 'denver-41st-fox', tiempo: 8, linea: 'G', tipo: 'rtd-rail' },
      { slug: 'denver-auraria-west', tiempo: 3, linea: 'W', tipo: 'rtd-rail' },
    ]
  },
  'denver-38th-blake': {
    ciudad: 'denver',
    nombre: '38th & Blake',
    lineas: ['A'],
    adyacentes: [
      { slug: 'denver-union-station', tiempo: 4, linea: 'A', tipo: 'rtd-rail' },
      { slug: 'denver-40th-colorado', tiempo: 3, linea: 'A', tipo: 'rtd-rail' },
    ]
  },
  'denver-40th-colorado': {
    ciudad: 'denver',
    nombre: '40th & Colorado',
    lineas: ['A'],
    adyacentes: [
      { slug: 'denver-38th-blake', tiempo: 3, linea: 'A', tipo: 'rtd-rail' },
      { slug: 'denver-central-park', tiempo: 3, linea: 'A', tipo: 'rtd-rail' },
    ]
  },
  'denver-central-park': {
    ciudad: 'denver',
    nombre: 'Central Park',
    lineas: ['A'],
    adyacentes: [
      { slug: 'denver-40th-colorado', tiempo: 3, linea: 'A', tipo: 'rtd-rail' },
      { slug: 'denver-peoria', tiempo: 3, linea: 'A', tipo: 'rtd-rail' },
    ]
  },
  'denver-peoria': {
    ciudad: 'denver',
    nombre: 'Peoria',
    lineas: ['A'],
    adyacentes: [
      { slug: 'denver-central-park', tiempo: 3, linea: 'A', tipo: 'rtd-rail' },
      { slug: 'denver-gateway-park', tiempo: 4, linea: 'A', tipo: 'rtd-rail' },
    ]
  },
  'denver-gateway-park': {
    ciudad: 'denver',
    nombre: 'Gateway Park',
    lineas: ['A'],
    adyacentes: [
      { slug: 'denver-peoria', tiempo: 4, linea: 'A', tipo: 'rtd-rail' },
      { slug: 'denver-61st-pena', tiempo: 5, linea: 'A', tipo: 'rtd-rail' },
    ]
  },
  'denver-61st-pena': {
    ciudad: 'denver',
    nombre: '61st & Peña',
    lineas: ['A'],
    adyacentes: [
      { slug: 'denver-gateway-park', tiempo: 5, linea: 'A', tipo: 'rtd-rail' },
      { slug: 'denver-airport', tiempo: 5, linea: 'A', tipo: 'rtd-rail' },
    ]
  },
  'denver-airport': {
    ciudad: 'denver',
    nombre: 'Denver International Airport',
    lineas: ['A'],
    adyacentes: [
      { slug: 'denver-61st-pena', tiempo: 5, linea: 'A', tipo: 'rtd-rail' },
    ]
  },

  // B LINE
  'denver-westminster-41st-fox': {
    ciudad: 'denver',
    nombre: 'Westminster 41st & Fox',
    lineas: ['B', 'G'],
    adyacentes: [
      { slug: 'denver-union-station', tiempo: 15, linea: 'B', tipo: 'rtd-rail' },
      { slug: 'denver-41st-fox', tiempo: 2, linea: 'G', tipo: 'rtd-rail' },
    ]
  },

  // D LINE
  'denver-18th-california': {
    ciudad: 'denver',
    nombre: '18th & California',
    lineas: ['D'],
    adyacentes: [
      { slug: 'denver-theatre-district', tiempo: 3, linea: 'D', tipo: 'rtd-rail' },
    ]
  },
  'denver-theatre-district': {
    ciudad: 'denver',
    nombre: 'Theatre District/Convention Center',
    lineas: ['D', 'H'],
    adyacentes: [
      { slug: 'denver-18th-california', tiempo: 3, linea: 'D', tipo: 'rtd-rail' },
      { slug: 'denver-10th-osage', tiempo: 2, linea: 'D', tipo: 'rtd-rail' },
      { slug: 'denver-decatur-federal', tiempo: 4, linea: 'H', tipo: 'rtd-rail' },
    ]
  },
  'denver-10th-osage': {
    ciudad: 'denver',
    nombre: '10th & Osage',
    lineas: ['D', 'E', 'H'],
    adyacentes: [
      { slug: 'denver-theatre-district', tiempo: 2, linea: 'D', tipo: 'rtd-rail' },
      { slug: 'denver-alameda', tiempo: 3, linea: 'D', tipo: 'rtd-rail' },
      { slug: 'denver-union-station', tiempo: 4, linea: 'E', tipo: 'rtd-rail' },
      { slug: 'denver-i25-broadway', tiempo: 3, linea: 'E', tipo: 'rtd-rail' },
      { slug: 'denver-decatur-federal', tiempo: 3, linea: 'H', tipo: 'rtd-rail' },
    ]
  },
  'denver-alameda': {
    ciudad: 'denver',
    nombre: 'Alameda',
    lineas: ['D'],
    adyacentes: [
      { slug: 'denver-10th-osage', tiempo: 3, linea: 'D', tipo: 'rtd-rail' },
      { slug: 'denver-evans', tiempo: 3, linea: 'D', tipo: 'rtd-rail' },
    ]
  },
  'denver-evans': {
    ciudad: 'denver',
    nombre: 'Evans',
    lineas: ['D'],
    adyacentes: [
      { slug: 'denver-alameda', tiempo: 3, linea: 'D', tipo: 'rtd-rail' },
      { slug: 'denver-englewood', tiempo: 4, linea: 'D', tipo: 'rtd-rail' },
    ]
  },
  'denver-englewood': {
    ciudad: 'denver',
    nombre: 'Englewood',
    lineas: ['D'],
    adyacentes: [
      { slug: 'denver-evans', tiempo: 4, linea: 'D', tipo: 'rtd-rail' },
      { slug: 'denver-littleton-mineral', tiempo: 4, linea: 'D', tipo: 'rtd-rail' },
    ]
  },
  'denver-littleton-mineral': {
    ciudad: 'denver',
    nombre: 'Littleton/Mineral',
    lineas: ['D'],
    adyacentes: [
      { slug: 'denver-englewood', tiempo: 4, linea: 'D', tipo: 'rtd-rail' },
    ]
  },

  // E LINE
  'denver-i25-broadway': {
    ciudad: 'denver',
    nombre: 'I-25 & Broadway',
    lineas: ['E'],
    adyacentes: [
      { slug: 'denver-10th-osage', tiempo: 3, linea: 'E', tipo: 'rtd-rail' },
      { slug: 'denver-louisiana-pearl', tiempo: 4, linea: 'E', tipo: 'rtd-rail' },
    ]
  },
  'denver-louisiana-pearl': {
    ciudad: 'denver',
    nombre: 'Louisiana/Pearl',
    lineas: ['E'],
    adyacentes: [
      { slug: 'denver-i25-broadway', tiempo: 4, linea: 'E', tipo: 'rtd-rail' },
      { slug: 'denver-university-of-denver', tiempo: 2, linea: 'E', tipo: 'rtd-rail' },
    ]
  },
  'denver-university-of-denver': {
    ciudad: 'denver',
    nombre: 'University of Denver',
    lineas: ['E'],
    adyacentes: [
      { slug: 'denver-louisiana-pearl', tiempo: 2, linea: 'E', tipo: 'rtd-rail' },
      { slug: 'denver-colorado', tiempo: 3, linea: 'E', tipo: 'rtd-rail' },
    ]
  },
  'denver-colorado': {
    ciudad: 'denver',
    nombre: 'Colorado',
    lineas: ['E'],
    adyacentes: [
      { slug: 'denver-university-of-denver', tiempo: 3, linea: 'E', tipo: 'rtd-rail' },
      { slug: 'denver-yale', tiempo: 3, linea: 'E', tipo: 'rtd-rail' },
    ]
  },
  'denver-yale': {
    ciudad: 'denver',
    nombre: 'Yale',
    lineas: ['E'],
    adyacentes: [
      { slug: 'denver-colorado', tiempo: 3, linea: 'E', tipo: 'rtd-rail' },
      { slug: 'denver-southmoor', tiempo: 3, linea: 'E', tipo: 'rtd-rail' },
    ]
  },
  'denver-southmoor': {
    ciudad: 'denver',
    nombre: 'Southmoor',
    lineas: ['E'],
    adyacentes: [
      { slug: 'denver-yale', tiempo: 3, linea: 'E', tipo: 'rtd-rail' },
      { slug: 'denver-belleview', tiempo: 3, linea: 'E', tipo: 'rtd-rail' },
    ]
  },
  'denver-belleview': {
    ciudad: 'denver',
    nombre: 'Belleview',
    lineas: ['E'],
    adyacentes: [
      { slug: 'denver-southmoor', tiempo: 3, linea: 'E', tipo: 'rtd-rail' },
      { slug: 'denver-orchard', tiempo: 3, linea: 'E', tipo: 'rtd-rail' },
    ]
  },
  'denver-orchard': {
    ciudad: 'denver',
    nombre: 'Orchard',
    lineas: ['E'],
    adyacentes: [
      { slug: 'denver-belleview', tiempo: 3, linea: 'E', tipo: 'rtd-rail' },
      { slug: 'denver-arapahoe-village', tiempo: 3, linea: 'E', tipo: 'rtd-rail' },
    ]
  },
  'denver-arapahoe-village': {
    ciudad: 'denver',
    nombre: 'Arapahoe at Village Center',
    lineas: ['E'],
    adyacentes: [
      { slug: 'denver-orchard', tiempo: 3, linea: 'E', tipo: 'rtd-rail' },
      { slug: 'denver-dry-creek', tiempo: 3, linea: 'E', tipo: 'rtd-rail' },
    ]
  },
  'denver-dry-creek': {
    ciudad: 'denver',
    nombre: 'Dry Creek',
    lineas: ['E'],
    adyacentes: [
      { slug: 'denver-arapahoe-village', tiempo: 3, linea: 'E', tipo: 'rtd-rail' },
      { slug: 'denver-county-line', tiempo: 3, linea: 'E', tipo: 'rtd-rail' },
    ]
  },
  'denver-county-line': {
    ciudad: 'denver',
    nombre: 'County Line',
    lineas: ['E'],
    adyacentes: [
      { slug: 'denver-dry-creek', tiempo: 3, linea: 'E', tipo: 'rtd-rail' },
      { slug: 'denver-lincoln', tiempo: 3, linea: 'E', tipo: 'rtd-rail' },
    ]
  },
  'denver-lincoln': {
    ciudad: 'denver',
    nombre: 'Lincoln',
    lineas: ['E'],
    adyacentes: [
      { slug: 'denver-county-line', tiempo: 3, linea: 'E', tipo: 'rtd-rail' },
      { slug: 'denver-ridgegate', tiempo: 3, linea: 'E', tipo: 'rtd-rail' },
    ]
  },
  'denver-ridgegate': {
    ciudad: 'denver',
    nombre: 'RidgeGate Parkway',
    lineas: ['E'],
    adyacentes: [
      { slug: 'denver-lincoln', tiempo: 3, linea: 'E', tipo: 'rtd-rail' },
    ]
  },

  // G LINE
  'denver-41st-fox': {
    ciudad: 'denver',
    nombre: '41st & Fox',
    lineas: ['G', 'B'],
    adyacentes: [
      { slug: 'denver-union-station', tiempo: 8, linea: 'G', tipo: 'rtd-rail' },
      { slug: 'denver-westminster-41st-fox', tiempo: 2, linea: 'B', tipo: 'rtd-rail' },
      { slug: 'denver-pecos-junction', tiempo: 4, linea: 'G', tipo: 'rtd-rail' },
    ]
  },
  'denver-pecos-junction': {
    ciudad: 'denver',
    nombre: 'Pecos Junction',
    lineas: ['G'],
    adyacentes: [
      { slug: 'denver-41st-fox', tiempo: 4, linea: 'G', tipo: 'rtd-rail' },
      { slug: 'denver-clear-creek-federal', tiempo: 4, linea: 'G', tipo: 'rtd-rail' },
    ]
  },
  'denver-clear-creek-federal': {
    ciudad: 'denver',
    nombre: 'Clear Creek/Federal',
    lineas: ['G', 'H'],
    adyacentes: [
      { slug: 'denver-pecos-junction', tiempo: 4, linea: 'G', tipo: 'rtd-rail' },
      { slug: 'denver-arvada-gold-strike', tiempo: 4, linea: 'G', tipo: 'rtd-rail' },
      { slug: 'denver-decatur-federal', tiempo: 3, linea: 'H', tipo: 'rtd-rail' },
    ]
  },
  'denver-arvada-gold-strike': {
    ciudad: 'denver',
    nombre: 'Arvada Gold Strike',
    lineas: ['G'],
    adyacentes: [
      { slug: 'denver-clear-creek-federal', tiempo: 4, linea: 'G', tipo: 'rtd-rail' },
      { slug: 'denver-olde-town-arvada', tiempo: 4, linea: 'G', tipo: 'rtd-rail' },
    ]
  },
  'denver-olde-town-arvada': {
    ciudad: 'denver',
    nombre: 'Olde Town Arvada',
    lineas: ['G'],
    adyacentes: [
      { slug: 'denver-arvada-gold-strike', tiempo: 4, linea: 'G', tipo: 'rtd-rail' },
      { slug: 'denver-arvada-ridge', tiempo: 3, linea: 'G', tipo: 'rtd-rail' },
    ]
  },
  'denver-arvada-ridge': {
    ciudad: 'denver',
    nombre: 'Arvada Ridge',
    lineas: ['G'],
    adyacentes: [
      { slug: 'denver-olde-town-arvada', tiempo: 3, linea: 'G', tipo: 'rtd-rail' },
      { slug: 'denver-wheat-ridge-ward', tiempo: 4, linea: 'G', tipo: 'rtd-rail' },
    ]
  },
  'denver-wheat-ridge-ward': {
    ciudad: 'denver',
    nombre: 'Wheat Ridge/Ward',
    lineas: ['G'],
    adyacentes: [
      { slug: 'denver-arvada-ridge', tiempo: 4, linea: 'G', tipo: 'rtd-rail' },
    ]
  },

  // W LINE
  'denver-auraria-west': {
    ciudad: 'denver',
    nombre: 'Auraria West',
    lineas: ['W'],
    adyacentes: [
      { slug: 'denver-union-station', tiempo: 3, linea: 'W', tipo: 'rtd-rail' },
      { slug: 'denver-decatur-federal', tiempo: 3, linea: 'W', tipo: 'rtd-rail' },
    ]
  },
  'denver-decatur-federal': {
    ciudad: 'denver',
    nombre: 'Decatur/Federal',
    lineas: ['W', 'H'],
    adyacentes: [
      { slug: 'denver-auraria-west', tiempo: 3, linea: 'W', tipo: 'rtd-rail' },
      { slug: 'denver-knox', tiempo: 3, linea: 'W', tipo: 'rtd-rail' },
      { slug: 'denver-theatre-district', tiempo: 4, linea: 'H', tipo: 'rtd-rail' },
      { slug: 'denver-clear-creek-federal', tiempo: 3, linea: 'H', tipo: 'rtd-rail' },
    ]
  },
  'denver-knox': {
    ciudad: 'denver',
    nombre: 'Knox',
    lineas: ['W'],
    adyacentes: [
      { slug: 'denver-decatur-federal', tiempo: 3, linea: 'W', tipo: 'rtd-rail' },
      { slug: 'denver-perry', tiempo: 3, linea: 'W', tipo: 'rtd-rail' },
    ]
  },
  'denver-perry': {
    ciudad: 'denver',
    nombre: 'Perry',
    lineas: ['W'],
    adyacentes: [
      { slug: 'denver-knox', tiempo: 3, linea: 'W', tipo: 'rtd-rail' },
      { slug: 'denver-lamar', tiempo: 3, linea: 'W', tipo: 'rtd-rail' },
    ]
  },
  'denver-lamar': {
    ciudad: 'denver',
    nombre: 'Lamar',
    lineas: ['W'],
    adyacentes: [
      { slug: 'denver-perry', tiempo: 3, linea: 'W', tipo: 'rtd-rail' },
      { slug: 'denver-wadsworth-lakewood', tiempo: 4, linea: 'W', tipo: 'rtd-rail' },
    ]
  },
  'denver-wadsworth-lakewood': {
    ciudad: 'denver',
    nombre: 'Wadsworth/Lakewood',
    lineas: ['W'],
    adyacentes: [
      { slug: 'denver-lamar', tiempo: 4, linea: 'W', tipo: 'rtd-rail' },
      { slug: 'denver-garrison', tiempo: 3, linea: 'W', tipo: 'rtd-rail' },
    ]
  },
  'denver-garrison': {
    ciudad: 'denver',
    nombre: 'Garrison',
    lineas: ['W'],
    adyacentes: [
      { slug: 'denver-wadsworth-lakewood', tiempo: 3, linea: 'W', tipo: 'rtd-rail' },
      { slug: 'denver-oak', tiempo: 3, linea: 'W', tipo: 'rtd-rail' },
    ]
  },
  'denver-oak': {
    ciudad: 'denver',
    nombre: 'Oak',
    lineas: ['W'],
    adyacentes: [
      { slug: 'denver-garrison', tiempo: 3, linea: 'W', tipo: 'rtd-rail' },
      { slug: 'denver-federal-center', tiempo: 3, linea: 'W', tipo: 'rtd-rail' },
    ]
  },
  'denver-federal-center': {
    ciudad: 'denver',
    nombre: 'Federal Center',
    lineas: ['W'],
    adyacentes: [
      { slug: 'denver-oak', tiempo: 3, linea: 'W', tipo: 'rtd-rail' },
      { slug: 'denver-jefferson-county-golden', tiempo: 4, linea: 'W', tipo: 'rtd-rail' },
    ]
  },
  'denver-jefferson-county-golden': {
    ciudad: 'denver',
    nombre: 'Jefferson County/Golden',
    lineas: ['W'],
    adyacentes: [
      { slug: 'denver-federal-center', tiempo: 4, linea: 'W', tipo: 'rtd-rail' },
    ]
  },
};
