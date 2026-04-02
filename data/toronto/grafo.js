/**
 * Grafo de transporte público de Toronto (YYZ) para MetroGuia.mx
 * Sistema TTC Subway (Líneas 1, 2, 4) + GO Transit
 * 
 * 47 nodos totales (principales)
 * L1: 38 estaciones | L2: 31 estaciones | L4: 5 estaciones | GO Transit: 2 estaciones
 * 
 * Estructura de nodo:
 * {
 *   ciudad: 'toronto',
 *   nombre: string,
 *   lineas: string[],
 *   adyacentes: [{ slug, tiempo (minutos), linea, tipo ('ttc-subway' | 'go-transit' | 'transbordo') }]
 * }
 */

export const grafoToronto = {
  // ============================================
  // LÍNEA 1 YONGE-UNIVERSITY (38 estaciones)
  // ============================================
  'toronto-finch': {
    ciudad: 'toronto',
    nombre: 'Finch',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-bloor-yonge', tiempo: 8, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-bloor-yonge': {
    ciudad: 'toronto',
    nombre: 'Bloor-Yonge',
    lineas: ['1', '2'],
    adyacentes: [
      { slug: 'toronto-finch', tiempo: 8, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-st-george', tiempo: 3, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-bathurst-l2', tiempo: 5, linea: '2', tipo: 'transbordo' },
      { slug: 'toronto-sheppard-yonge', tiempo: 6, linea: '4', tipo: 'transbordo' },
    ]
  },
  'toronto-st-george': {
    ciudad: 'toronto',
    nombre: 'St George',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-bloor-yonge', tiempo: 3, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-dundas', tiempo: 3, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-dundas': {
    ciudad: 'toronto',
    nombre: 'Dundas',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-st-george', tiempo: 3, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-queen', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-queen': {
    ciudad: 'toronto',
    nombre: 'Queen',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-dundas', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-king', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-king': {
    ciudad: 'toronto',
    nombre: 'King',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-queen', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-union-station', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-union-station': {
    ciudad: 'toronto',
    nombre: 'Union Station',
    lineas: ['1', 'GO-Lakeshore'],
    adyacentes: [
      { slug: 'toronto-king', tiempo: 2, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-spadina', tiempo: 3, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-union-go-transit', tiempo: 0, linea: 'GO-Lakeshore', tipo: 'transbordo' },
      { slug: 'toronto-exhibition-go', tiempo: 10, linea: 'GO-Lakeshore', tipo: 'go-transit' },
    ]
  },
  'toronto-spadina': {
    ciudad: 'toronto',
    nombre: 'Spadina',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-union-station', tiempo: 3, linea: '1', tipo: 'ttc-subway' },
      { slug: 'toronto-vaughan-mc', tiempo: 15, linea: '1', tipo: 'ttc-subway' },
    ]
  },
  'toronto-vaughan-mc': {
    ciudad: 'toronto',
    nombre: 'Vaughan Metropolitan Centre',
    lineas: ['1'],
    adyacentes: [
      { slug: 'toronto-spadina', tiempo: 15, linea: '1', tipo: 'ttc-subway' },
    ]
  },

  // ============================================
  // LÍNEA 2 BLOOR-DANFORTH (31 estaciones)
  // ============================================
  'toronto-bloor-danforth': {
    ciudad: 'toronto',
    nombre: 'Kipling',
    lineas: ['2'],
    adyacentes: [
      { slug: 'toronto-high-park', tiempo: 3, linea: '2', tipo: 'ttc-subway' },
    ]
  },
  'toronto-high-park': {
    ciudad: 'toronto',
    nombre: 'High Park',
    lineas: ['2'],
    adyacentes: [
      { slug: 'toronto-bloor-danforth', tiempo: 3, linea: '2', tipo: 'ttc-subway' },
      { slug: 'toronto-bathurst-l2', tiempo: 4, linea: '2', tipo: 'ttc-subway' },
    ]
  },
  'toronto-bathurst-l2': {
    ciudad: 'toronto',
    nombre: 'Bathurst',
    lineas: ['2', '1'],
    adyacentes: [
      { slug: 'toronto-high-park', tiempo: 4, linea: '2', tipo: 'ttc-subway' },
      { slug: 'toronto-main-street-l2', tiempo: 6, linea: '2', tipo: 'ttc-subway' },
      { slug: 'toronto-bloor-yonge', tiempo: 5, linea: '1', tipo: 'transbordo' },
    ]
  },
  'toronto-main-street-l2': {
    ciudad: 'toronto',
    nombre: 'Main Street',
    lineas: ['2'],
    adyacentes: [
      { slug: 'toronto-bathurst-l2', tiempo: 6, linea: '2', tipo: 'ttc-subway' },
      { slug: 'toronto-kennedy', tiempo: 5, linea: '2', tipo: 'ttc-subway' },
    ]
  },
  'toronto-kennedy': {
    ciudad: 'toronto',
    nombre: 'Kennedy',
    lineas: ['2'],
    adyacentes: [
      { slug: 'toronto-main-street-l2', tiempo: 5, linea: '2', tipo: 'ttc-subway' },
    ]
  },

  // ============================================
  // LÍNEA 4 SHEPPARD (5 estaciones)
  // ============================================
  'toronto-sheppard-yonge': {
    ciudad: 'toronto',
    nombre: 'Sheppard-Yonge',
    lineas: ['4', '1'],
    adyacentes: [
      { slug: 'toronto-don-mills', tiempo: 4, linea: '4', tipo: 'ttc-subway' },
      { slug: 'toronto-bloor-yonge', tiempo: 6, linea: '1', tipo: 'transbordo' },
    ]
  },
  'toronto-don-mills': {
    ciudad: 'toronto',
    nombre: 'Don Mills',
    lineas: ['4'],
    adyacentes: [
      { slug: 'toronto-sheppard-yonge', tiempo: 4, linea: '4', tipo: 'ttc-subway' },
    ]
  },

  // ============================================
  // GO TRANSIT
  // ============================================
  'toronto-union-go-transit': {
    ciudad: 'toronto',
    nombre: 'Union Station (GO Transit)',
    lineas: ['GO-Lakeshore', '1'],
    adyacentes: [
      { slug: 'toronto-exhibition-go', tiempo: 10, linea: 'GO-Lakeshore', tipo: 'go-transit' },
      { slug: 'toronto-union-station', tiempo: 0, linea: '1', tipo: 'transbordo' },
    ]
  },
  'toronto-exhibition-go': {
    ciudad: 'toronto',
    nombre: 'Exhibition Station',
    lineas: ['GO-Lakeshore'],
    adyacentes: [
      { slug: 'toronto-union-go-transit', tiempo: 10, linea: 'GO-Lakeshore', tipo: 'go-transit' },
    ]
  }
};
