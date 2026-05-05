/*
 * SINGAPORE MRT GRAPH — BFS Adjacency Network
 * ============================================
 * Coverage: NSL (North-South), EWL (East-West), NEL (North-East),
 *           CCL (Circle), DTL (Downtown), TEL (Thomson-East Coast)
 * Total tourist stations: 22
 * Fares: SGD $1.41-$2.75 (EZ-Link card)
 * Graph structure: flat slugs with full adjacency for BFS pathfinding
 * Key interchanges: City Hall (NSL/EWL), Raffles Place (NSL/EWL),
 *   Bayfront (DTL/CCL), Outram Park (EWL/NEL/TEL), HarbourFront (NEL/CCL)
 * Note: Singapore MRT is world-class — all stations accessible, A/C throughout
 */

export const grafoSingapore = {

  // ===== NORTH-SOUTH LINE (NSL) — Red =====
  'singapore-orchard': {
    ciudad: 'singapore',
    nombre: 'Orchard',
    lineas: ['NSL', 'TEL'],
    adyacentes: [
      { slug: 'singapore-dhoby-ghaut', tiempo: 3, linea: 'NSL', tipo: 'mrt' },
      { slug: 'singapore-newton', tiempo: 3, linea: 'NSL', tipo: 'mrt' },
    ],
  },

  'singapore-newton': {
    ciudad: 'singapore',
    nombre: 'Newton',
    lineas: ['NSL', 'DTL'],
    adyacentes: [
      { slug: 'singapore-orchard', tiempo: 3, linea: 'NSL', tipo: 'mrt' },
      { slug: 'singapore-dhoby-ghaut', tiempo: 4, linea: 'NSL', tipo: 'mrt' },
    ],
  },

  'singapore-dhoby-ghaut': {
    ciudad: 'singapore',
    nombre: 'Dhoby Ghaut',
    lineas: ['NSL', 'NEL', 'CCL'],
    adyacentes: [
      { slug: 'singapore-newton', tiempo: 4, linea: 'NSL', tipo: 'mrt' },
      { slug: 'singapore-city-hall', tiempo: 3, linea: 'NSL', tipo: 'mrt' },
      { slug: 'singapore-little-india', tiempo: 4, linea: 'NEL', tipo: 'mrt' },
      { slug: 'singapore-chinatown', tiempo: 6, linea: 'NEL', tipo: 'mrt' },
    ],
  },

  'singapore-toa-payoh': {
    ciudad: 'singapore',
    nombre: 'Toa Payoh',
    lineas: ['NSL'],
    adyacentes: [
      { slug: 'singapore-orchard', tiempo: 8, linea: 'NSL', tipo: 'mrt' },
      { slug: 'singapore-city-hall', tiempo: 10, linea: 'NSL', tipo: 'mrt' },
    ],
  },

  'singapore-city-hall': {
    ciudad: 'singapore',
    nombre: 'City Hall',
    lineas: ['NSL', 'EWL'],
    adyacentes: [
      { slug: 'singapore-dhoby-ghaut', tiempo: 3, linea: 'NSL', tipo: 'mrt' },
      { slug: 'singapore-raffles-place', tiempo: 2, linea: 'NSL', tipo: 'mrt' },
      { slug: 'singapore-bugis', tiempo: 3, linea: 'EWL', tipo: 'mrt' },
      { slug: 'singapore-esplanade', tiempo: 5, linea: 'walk', tipo: 'walk' },
    ],
  },

  'singapore-raffles-place': {
    ciudad: 'singapore',
    nombre: 'Raffles Place',
    lineas: ['NSL', 'EWL'],
    adyacentes: [
      { slug: 'singapore-city-hall', tiempo: 2, linea: 'NSL', tipo: 'mrt' },
      { slug: 'singapore-marina-bay', tiempo: 3, linea: 'NSL', tipo: 'mrt' },
      { slug: 'singapore-outram-park', tiempo: 4, linea: 'EWL', tipo: 'mrt' },
      { slug: 'singapore-bugis', tiempo: 5, linea: 'EWL', tipo: 'mrt' },
    ],
  },

  'singapore-marina-bay': {
    ciudad: 'singapore',
    nombre: 'Marina Bay',
    lineas: ['NSL', 'TEL', 'CCL'],
    adyacentes: [
      { slug: 'singapore-raffles-place', tiempo: 3, linea: 'NSL', tipo: 'mrt' },
      { slug: 'singapore-bayfront', tiempo: 2, linea: 'CCL', tipo: 'mrt' },
      { slug: 'singapore-esplanade', tiempo: 3, linea: 'CCL', tipo: 'mrt' },
    ],
  },

  // ===== EAST-WEST LINE (EWL) — Green =====
  'singapore-changi-airport': {
    ciudad: 'singapore',
    nombre: 'Changi Airport',
    lineas: ['EWL'],
    adyacentes: [
      { slug: 'singapore-tanah-merah', tiempo: 6, linea: 'EWL', tipo: 'mrt' },
    ],
  },

  'singapore-tanah-merah': {
    ciudad: 'singapore',
    nombre: 'Tanah Merah',
    lineas: ['EWL'],
    adyacentes: [
      { slug: 'singapore-changi-airport', tiempo: 6, linea: 'EWL', tipo: 'mrt' },
      { slug: 'singapore-bedok', tiempo: 4, linea: 'EWL', tipo: 'mrt' },
    ],
  },

  'singapore-bedok': {
    ciudad: 'singapore',
    nombre: 'Bedok',
    lineas: ['EWL'],
    adyacentes: [
      { slug: 'singapore-tanah-merah', tiempo: 4, linea: 'EWL', tipo: 'mrt' },
      { slug: 'singapore-bugis', tiempo: 15, linea: 'EWL', tipo: 'mrt' },
    ],
  },

  'singapore-bugis': {
    ciudad: 'singapore',
    nombre: 'Bugis',
    lineas: ['EWL', 'DTL'],
    adyacentes: [
      { slug: 'singapore-city-hall', tiempo: 3, linea: 'EWL', tipo: 'mrt' },
      { slug: 'singapore-raffles-place', tiempo: 5, linea: 'EWL', tipo: 'mrt' },
      { slug: 'singapore-little-india', tiempo: 4, linea: 'DTL', tipo: 'mrt' },
      { slug: 'singapore-bayfront', tiempo: 8, linea: 'DTL', tipo: 'mrt' },
    ],
  },

  'singapore-outram-park': {
    ciudad: 'singapore',
    nombre: 'Outram Park',
    lineas: ['EWL', 'NEL', 'TEL'],
    adyacentes: [
      { slug: 'singapore-raffles-place', tiempo: 4, linea: 'EWL', tipo: 'mrt' },
      { slug: 'singapore-chinatown', tiempo: 2, linea: 'NEL', tipo: 'mrt' },
      { slug: 'singapore-harbourfront', tiempo: 6, linea: 'NEL', tipo: 'mrt' },
    ],
  },

  // ===== NORTH-EAST LINE (NEL) — Purple =====
  'singapore-chinatown': {
    ciudad: 'singapore',
    nombre: 'Chinatown',
    lineas: ['NEL', 'DTL'],
    adyacentes: [
      { slug: 'singapore-outram-park', tiempo: 2, linea: 'NEL', tipo: 'mrt' },
      { slug: 'singapore-little-india', tiempo: 6, linea: 'NEL', tipo: 'mrt' },
      { slug: 'singapore-dhoby-ghaut', tiempo: 6, linea: 'NEL', tipo: 'mrt' },
      { slug: 'singapore-bayfront', tiempo: 6, linea: 'DTL', tipo: 'mrt' },
    ],
  },

  'singapore-little-india': {
    ciudad: 'singapore',
    nombre: 'Little India',
    lineas: ['NEL', 'DTL'],
    adyacentes: [
      { slug: 'singapore-dhoby-ghaut', tiempo: 4, linea: 'NEL', tipo: 'mrt' },
      { slug: 'singapore-chinatown', tiempo: 6, linea: 'NEL', tipo: 'mrt' },
      { slug: 'singapore-bugis', tiempo: 4, linea: 'DTL', tipo: 'mrt' },
    ],
  },

  'singapore-harbourfront': {
    ciudad: 'singapore',
    nombre: 'HarbourFront',
    lineas: ['NEL', 'CCL'],
    adyacentes: [
      { slug: 'singapore-outram-park', tiempo: 6, linea: 'NEL', tipo: 'mrt' },
      { slug: 'singapore-esplanade', tiempo: 15, linea: 'CCL', tipo: 'mrt' },
      { slug: 'singapore-bayfront', tiempo: 12, linea: 'CCL', tipo: 'mrt' },
    ],
  },

  // ===== CIRCLE LINE (CCL) — Orange =====
  'singapore-bayfront': {
    ciudad: 'singapore',
    nombre: 'Bayfront',
    lineas: ['DTL', 'CCL'],
    adyacentes: [
      { slug: 'singapore-marina-bay', tiempo: 2, linea: 'CCL', tipo: 'mrt' },
      { slug: 'singapore-esplanade', tiempo: 3, linea: 'CCL', tipo: 'mrt' },
      { slug: 'singapore-chinatown', tiempo: 6, linea: 'DTL', tipo: 'mrt' },
      { slug: 'singapore-bugis', tiempo: 8, linea: 'DTL', tipo: 'mrt' },
    ],
  },

  'singapore-esplanade': {
    ciudad: 'singapore',
    nombre: 'Esplanade',
    lineas: ['CCL'],
    adyacentes: [
      { slug: 'singapore-bayfront', tiempo: 3, linea: 'CCL', tipo: 'mrt' },
      { slug: 'singapore-marina-bay', tiempo: 3, linea: 'CCL', tipo: 'mrt' },
      { slug: 'singapore-city-hall', tiempo: 5, linea: 'walk', tipo: 'walk' },
    ],
  },

  // ===== THOMSON-EAST COAST LINE (TEL) — Brown =====
  'singapore-springleaf': {
    ciudad: 'singapore',
    nombre: 'Springleaf',
    lineas: ['TEL'],
    adyacentes: [
      { slug: 'singapore-woodlands-north', tiempo: 10, linea: 'TEL', tipo: 'mrt' },
      { slug: 'singapore-orchard', tiempo: 20, linea: 'TEL', tipo: 'mrt' },
    ],
  },

  'singapore-woodlands-north': {
    ciudad: 'singapore',
    nombre: 'Woodlands North',
    lineas: ['TEL'],
    adyacentes: [
      { slug: 'singapore-springleaf', tiempo: 10, linea: 'TEL', tipo: 'mrt' },
      { slug: 'singapore-orchard', tiempo: 30, linea: 'TEL', tipo: 'mrt' },
    ],
  },

  // ===== DOWNTOWN LINE (DTL) — Dark Blue =====
  'singapore-bugis-dt': {
    ciudad: 'singapore',
    nombre: 'Bugis (DTL)',
    lineas: ['DTL'],
    adyacentes: [
      { slug: 'singapore-bugis', tiempo: 0, linea: 'transfer', tipo: 'transfer' },
      { slug: 'singapore-little-india', tiempo: 4, linea: 'DTL', tipo: 'mrt' },
      { slug: 'singapore-bayfront', tiempo: 8, linea: 'DTL', tipo: 'mrt' },
    ],
  },

}
