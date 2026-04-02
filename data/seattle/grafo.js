/**
 * Grafo de transporte público de Seattle (SEA) para MetroGuia.mx
 * Sistema Sound Transit: Light Rail (Línea 1, T Line)
 *
 * 25 nodos totales (mostrando Línea 1 principalmente)
 * Línea 1: 25 estaciones de Angle Lake (sur) a Lynnwood City Center (norte)
 * T Line: Tacoma (línea separada, no incluida en análisis principal)
 *
 * Estructura de nodo:
 * {
 *   ciudad: 'seattle',
 *   nombre: string,
 *   lineas: string[],
 *   adyacentes: [{ slug, tiempo (minutos), linea, tipo ('link-light-rail' | 'transbordo') }]
 * }
 */

export const grafoSeattle = {
  // ============================================
  // LÍNEA 1 - 25 estaciones (sur a norte)
  // ============================================
  'seattle-angle-lake': {
    ciudad: 'seattle',
    nombre: 'Angle Lake',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-federal-way', tiempo: 4, linea: '1', tipo: 'link-light-rail' },
    ]
  },
  'seattle-federal-way': {
    ciudad: 'seattle',
    nombre: 'Federal Way',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-angle-lake', tiempo: 4, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-kent', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
    ]
  },
  'seattle-kent': {
    ciudad: 'seattle',
    nombre: 'Kent',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-federal-way', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-seatac-airport', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
    ]
  },
  'seattle-seatac-airport': {
    ciudad: 'seattle',
    nombre: 'SeaTac/Airport',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-kent', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-columbia-city', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
    ]
  },
  'seattle-columbia-city': {
    ciudad: 'seattle',
    nombre: 'Columbia City',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-seatac-airport', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-beacon-hill', tiempo: 2, linea: '1', tipo: 'link-light-rail' },
    ]
  },
  'seattle-beacon-hill': {
    ciudad: 'seattle',
    nombre: 'Beacon Hill',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-columbia-city', tiempo: 2, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-rainier-square', tiempo: 2, linea: '1', tipo: 'link-light-rail' },
    ]
  },
  'seattle-rainier-square': {
    ciudad: 'seattle',
    nombre: 'Rainier Square',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-beacon-hill', tiempo: 2, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-stadion', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
    ]
  },
  'seattle-stadion': {
    ciudad: 'seattle',
    nombre: 'Stadium',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-rainier-square', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-international-district', tiempo: 2, linea: '1', tipo: 'link-light-rail' },
    ]
  },
  'seattle-international-district': {
    ciudad: 'seattle',
    nombre: 'International District',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-stadion', tiempo: 2, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-pioneer-square', tiempo: 2, linea: '1', tipo: 'link-light-rail' },
    ]
  },
  'seattle-pioneer-square': {
    ciudad: 'seattle',
    nombre: 'Pioneer Square',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-international-district', tiempo: 2, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-westlake', tiempo: 2, linea: '1', tipo: 'link-light-rail' },
    ]
  },
  'seattle-westlake': {
    ciudad: 'seattle',
    nombre: 'Westlake',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-pioneer-square', tiempo: 2, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-capitol-hill', tiempo: 2, linea: '1', tipo: 'link-light-rail' },
    ]
  },
  'seattle-capitol-hill': {
    ciudad: 'seattle',
    nombre: 'Capitol Hill',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-westlake', tiempo: 2, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-university-of-washington', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
    ]
  },
  'seattle-university-of-washington': {
    ciudad: 'seattle',
    nombre: 'University of Washington',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-capitol-hill', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-roosevelt', tiempo: 2, linea: '1', tipo: 'link-light-rail' },
    ]
  },
  'seattle-roosevelt': {
    ciudad: 'seattle',
    nombre: 'Roosevelt',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-university-of-washington', tiempo: 2, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-northgate', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
    ]
  },
  'seattle-northgate': {
    ciudad: 'seattle',
    nombre: 'Northgate',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-roosevelt', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-mountlake-terrace', tiempo: 4, linea: '1', tipo: 'link-light-rail' },
    ]
  },
  'seattle-mountlake-terrace': {
    ciudad: 'seattle',
    nombre: 'Mountlake Terrace',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-northgate', tiempo: 4, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-shoreline', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
    ]
  },
  'seattle-shoreline': {
    ciudad: 'seattle',
    nombre: 'Shoreline',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-mountlake-terrace', tiempo: 3, linea: '1', tipo: 'link-light-rail' },
      { slug: 'seattle-lynnwood-city-center', tiempo: 4, linea: '1', tipo: 'link-light-rail' },
    ]
  },
  'seattle-lynnwood-city-center': {
    ciudad: 'seattle',
    nombre: 'Lynnwood City Center',
    lineas: ['1'],
    adyacentes: [
      { slug: 'seattle-shoreline', tiempo: 4, linea: '1', tipo: 'link-light-rail' },
    ]
  },
};
