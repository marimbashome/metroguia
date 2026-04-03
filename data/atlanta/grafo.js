/**
 * Grafo de transporte público de Atlanta (ATL) para MetroGuia.mx
 * Sistema MARTA: 4 líneas (Red, Gold, Blue, Green)
 *
 * 38 nodos totales
 * Red: 19 estaciones | Gold: 18 estaciones | Blue: 15 estaciones | Green: 9 estaciones
 * Hub central: Five Points (todas las líneas se conectan aquí)
 *
 * Estructura de nodo:
 * {
 *   ciudad: 'atlanta',
 *   nombre: string,
 *   lineas: string[],
 *   adyacentes: [{ slug, tiempo (minutos), linea, tipo ('marta-rail' | 'transbordo') }]
 * }
 */

export const grafoAtlanta = {
  // ============================================
  // LÍNEA RED - 19 estaciones
  // ============================================
  'atlanta-north-springs': {
    ciudad: 'atlanta',
    nombre: 'North Springs',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'atlanta-sandy-springs', tiempo: 3, linea: 'Red', tipo: 'marta-rail' },
    ]
  },
  'atlanta-sandy-springs': {
    ciudad: 'atlanta',
    nombre: 'Sandy Springs',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'atlanta-north-springs', tiempo: 3, linea: 'Red', tipo: 'marta-rail' },
      { slug: 'atlanta-dunwoody', tiempo: 2, linea: 'Red', tipo: 'marta-rail' },
    ]
  },
  'atlanta-dunwoody': {
    ciudad: 'atlanta',
    nombre: 'Dunwoody',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'atlanta-sandy-springs', tiempo: 2, linea: 'Red', tipo: 'marta-rail' },
      { slug: 'atlanta-medical-center', tiempo: 3, linea: 'Red', tipo: 'marta-rail' },
    ]
  },
  'atlanta-medical-center': {
    ciudad: 'atlanta',
    nombre: 'Medical Center',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'atlanta-dunwoody', tiempo: 3, linea: 'Red', tipo: 'marta-rail' },
      { slug: 'atlanta-buckhead', tiempo: 4, linea: 'Red', tipo: 'marta-rail' },
    ]
  },
  'atlanta-buckhead': {
    ciudad: 'atlanta',
    nombre: 'Buckhead',
    lineas: ['Red'],
    adyacentes: [
      { slug: 'atlanta-medical-center', tiempo: 4, linea: 'Red', tipo: 'marta-rail' },
      { slug: 'atlanta-lindbergh', tiempo: 2, linea: 'Red', tipo: 'marta-rail' },
    ]
  },
  'atlanta-lindbergh': {
    ciudad: 'atlanta',
    nombre: 'Lindbergh Center',
    lineas: ['Red', 'Gold'],
    adyacentes: [
      { slug: 'atlanta-buckhead', tiempo: 2, linea: 'Red', tipo: 'marta-rail' },
      { slug: 'atlanta-arts-center', tiempo: 2, linea: 'Red', tipo: 'marta-rail' },
      { slug: 'atlanta-lenox', tiempo: 3, linea: 'Gold', tipo: 'transbordo' },
    ]
  },
  'atlanta-arts-center': {
    ciudad: 'atlanta',
    nombre: 'Arts Center',
    lineas: ['Red', 'Gold'],
    adyacentes: [
      { slug: 'atlanta-lindbergh', tiempo: 2, linea: 'Red', tipo: 'marta-rail' },
      { slug: 'atlanta-midtown', tiempo: 1, linea: 'Red', tipo: 'marta-rail' },
      { slug: 'atlanta-midtown', tiempo: 2, linea: 'Gold', tipo: 'transbordo' },
    ]
  },
  'atlanta-midtown': {
    ciudad: 'atlanta',
    nombre: 'Midtown',
    lineas: ['Red', 'Gold'],
    adyacentes: [
      { slug: 'atlanta-arts-center', tiempo: 1, linea: 'Red', tipo: 'marta-rail' },
      { slug: 'atlanta-north-avenue', tiempo: 2, linea: 'Red', tipo: 'marta-rail' },
    ]
  },
  'atlanta-north-avenue': {
    ciudad: 'atlanta',
    nombre: 'North Avenue',
    lineas: ['Red', 'Gold'],
    adyacentes: [
      { slug: 'atlanta-midtown', tiempo: 2, linea: 'Red', tipo: 'marta-rail' },
      { slug: 'atlanta-civic-center', tiempo: 1, linea: 'Red', tipo: 'marta-rail' },
    ]
  },
  'atlanta-civic-center': {
    ciudad: 'atlanta',
    nombre: 'Civic Center',
    lineas: ['Red', 'Gold'],
    adyacentes: [
      { slug: 'atlanta-north-avenue', tiempo: 1, linea: 'Red', tipo: 'marta-rail' },
      { slug: 'atlanta-peachtree-center', tiempo: 2, linea: 'Red', tipo: 'marta-rail' },
    ]
  },
  'atlanta-peachtree-center': {
    ciudad: 'atlanta',
    nombre: 'Peachtree Center',
    lineas: ['Red', 'Gold'],
    adyacentes: [
      { slug: 'atlanta-civic-center', tiempo: 2, linea: 'Red', tipo: 'marta-rail' },
      { slug: 'atlanta-five-points', tiempo: 2, linea: 'Red', tipo: 'marta-rail' },
      { slug: 'atlanta-dome-gwcc-phillips-cnn', tiempo: 5, linea: 'Green', tipo: 'transbordo' }]
  },
  'atlanta-five-points': {
    ciudad: 'atlanta',
    nombre: 'Five Points',
    lineas: ['Red', 'Gold', 'Blue', 'Green'],
    adyacentes: [
      { slug: 'atlanta-peachtree-center', tiempo: 2, linea: 'Red', tipo: 'marta-rail' },
      { slug: 'atlanta-garnett', tiempo: 2, linea: 'Red', tipo: 'marta-rail' },
      { slug: 'atlanta-garnett', tiempo: 2, linea: 'Gold', tipo: 'transbordo' },
      { slug: 'atlanta-georgia-state', tiempo: 2, linea: 'Blue', tipo: 'transbordo' },
      { slug: 'atlanta-georgia-state', tiempo: 2, linea: 'Green', tipo: 'transbordo' },
    ]
  },
  'atlanta-garnett': {
    ciudad: 'atlanta',
    nombre: 'Garnett',
    lineas: ['Red', 'Gold'],
    adyacentes: [
      { slug: 'atlanta-five-points', tiempo: 2, linea: 'Red', tipo: 'marta-rail' },
      { slug: 'atlanta-west-end', tiempo: 2, linea: 'Red', tipo: 'marta-rail' },
    ]
  },
  'atlanta-west-end': {
    ciudad: 'atlanta',
    nombre: 'West End',
    lineas: ['Red', 'Gold'],
    adyacentes: [
      { slug: 'atlanta-garnett', tiempo: 2, linea: 'Red', tipo: 'marta-rail' },
      { slug: 'atlanta-oakland-city', tiempo: 2, linea: 'Red', tipo: 'marta-rail' },
      { slug: 'atlanta-west-lake', tiempo: 5, linea: 'Red', tipo: 'transbordo' }]
  },
  'atlanta-oakland-city': {
    ciudad: 'atlanta',
    nombre: 'Oakland City',
    lineas: ['Red', 'Gold'],
    adyacentes: [
      { slug: 'atlanta-west-end', tiempo: 2, linea: 'Red', tipo: 'marta-rail' },
      { slug: 'atlanta-lakewood-fort-mcpherson', tiempo: 2, linea: 'Red', tipo: 'marta-rail' },
    ]
  },
  'atlanta-lakewood-fort-mcpherson': {
    ciudad: 'atlanta',
    nombre: 'Lakewood/Fort McPherson',
    lineas: ['Red', 'Gold'],
    adyacentes: [
      { slug: 'atlanta-oakland-city', tiempo: 2, linea: 'Red', tipo: 'marta-rail' },
      { slug: 'atlanta-east-point', tiempo: 3, linea: 'Red', tipo: 'marta-rail' },
    ]
  },
  'atlanta-east-point': {
    ciudad: 'atlanta',
    nombre: 'East Point',
    lineas: ['Red', 'Gold'],
    adyacentes: [
      { slug: 'atlanta-lakewood-fort-mcpherson', tiempo: 3, linea: 'Red', tipo: 'marta-rail' },
      { slug: 'atlanta-college-park', tiempo: 2, linea: 'Red', tipo: 'marta-rail' },
    ]
  },
  'atlanta-college-park': {
    ciudad: 'atlanta',
    nombre: 'College Park',
    lineas: ['Red', 'Gold'],
    adyacentes: [
      { slug: 'atlanta-east-point', tiempo: 2, linea: 'Red', tipo: 'marta-rail' },
      { slug: 'atlanta-airport', tiempo: 3, linea: 'Red', tipo: 'marta-rail' },
    ]
  },
  'atlanta-airport': {
    ciudad: 'atlanta',
    nombre: 'Hartsfield-Jackson Airport',
    lineas: ['Red', 'Gold'],
    adyacentes: [
      { slug: 'atlanta-college-park', tiempo: 3, linea: 'Red', tipo: 'marta-rail' },
    ]
  },

  // ============================================
  // LÍNEA GOLD - 18 estaciones
  // ============================================
  'atlanta-doraville': {
    ciudad: 'atlanta',
    nombre: 'Doraville',
    lineas: ['Gold'],
    adyacentes: [
      { slug: 'atlanta-chamblee', tiempo: 3, linea: 'Gold', tipo: 'marta-rail' },
    ]
  },
  'atlanta-chamblee': {
    ciudad: 'atlanta',
    nombre: 'Chamblee',
    lineas: ['Gold'],
    adyacentes: [
      { slug: 'atlanta-doraville', tiempo: 3, linea: 'Gold', tipo: 'marta-rail' },
      { slug: 'atlanta-brookhaven-oglethorpe', tiempo: 2, linea: 'Gold', tipo: 'marta-rail' },
    ]
  },
  'atlanta-brookhaven-oglethorpe': {
    ciudad: 'atlanta',
    nombre: 'Brookhaven/Oglethorpe',
    lineas: ['Gold'],
    adyacentes: [
      { slug: 'atlanta-chamblee', tiempo: 2, linea: 'Gold', tipo: 'marta-rail' },
      { slug: 'atlanta-lenox', tiempo: 3, linea: 'Gold', tipo: 'marta-rail' },
    ]
  },
  'atlanta-lenox': {
    ciudad: 'atlanta',
    nombre: 'Lenox',
    lineas: ['Gold'],
    adyacentes: [
      { slug: 'atlanta-brookhaven-oglethorpe', tiempo: 3, linea: 'Gold', tipo: 'marta-rail' },
      { slug: 'atlanta-lindbergh', tiempo: 3, linea: 'Gold', tipo: 'marta-rail' },
    ]
  },

  // ============================================
  // LÍNEA AZUL - 15 estaciones
  // ============================================
  'atlanta-hamilton-holmes': {
    ciudad: 'atlanta',
    nombre: 'Hamilton E. Holmes',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'atlanta-west-lake', tiempo: 3, linea: 'Blue', tipo: 'marta-rail' },
    ]
  },
  'atlanta-west-lake': {
    ciudad: 'atlanta',
    nombre: 'Westlake',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'atlanta-hamilton-holmes', tiempo: 3, linea: 'Blue', tipo: 'marta-rail' },
      { slug: 'atlanta-ashby', tiempo: 2, linea: 'Blue', tipo: 'marta-rail' },
      { slug: 'atlanta-west-end', tiempo: 5, linea: 'Red', tipo: 'transbordo' }]
  },
  'atlanta-ashby': {
    ciudad: 'atlanta',
    nombre: 'Ashby',
    lineas: ['Blue', 'Green'],
    adyacentes: [
      { slug: 'atlanta-west-lake', tiempo: 2, linea: 'Blue', tipo: 'marta-rail' },
      { slug: 'atlanta-vine-city', tiempo: 2, linea: 'Blue', tipo: 'marta-rail' },
      { slug: 'atlanta-vine-city', tiempo: 2, linea: 'Green', tipo: 'transbordo' },
    ]
  },
  'atlanta-vine-city': {
    ciudad: 'atlanta',
    nombre: 'Vine City',
    lineas: ['Blue', 'Green'],
    adyacentes: [
      { slug: 'atlanta-ashby', tiempo: 2, linea: 'Blue', tipo: 'marta-rail' },
      { slug: 'atlanta-dome-gwcc-phillips-cnn', tiempo: 2, linea: 'Blue', tipo: 'marta-rail' },
      { slug: 'atlanta-dome-gwcc-phillips-cnn', tiempo: 2, linea: 'Green', tipo: 'transbordo' },
    ]
  },
  'atlanta-dome-gwcc-phillips-cnn': {
    ciudad: 'atlanta',
    nombre: 'Dome/GWCC/Phillips Arena/CNN Center',
    lineas: ['Blue', 'Green'],
    adyacentes: [
      { slug: 'atlanta-vine-city', tiempo: 2, linea: 'Blue', tipo: 'marta-rail' },
      { slug: 'atlanta-five-points', tiempo: 3, linea: 'Blue', tipo: 'marta-rail' },
      { slug: 'atlanta-five-points', tiempo: 3, linea: 'Green', tipo: 'transbordo' },
      { slug: 'atlanta-peachtree-center', tiempo: 5, linea: 'Red', tipo: 'transbordo' }]
  },
  'atlanta-georgia-state': {
    ciudad: 'atlanta',
    nombre: 'Georgia State',
    lineas: ['Blue', 'Green'],
    adyacentes: [
      { slug: 'atlanta-five-points', tiempo: 2, linea: 'Blue', tipo: 'marta-rail' },
      { slug: 'atlanta-king-memorial', tiempo: 2, linea: 'Blue', tipo: 'marta-rail' },
      { slug: 'atlanta-king-memorial', tiempo: 2, linea: 'Green', tipo: 'transbordo' },
      { slug: 'atlanta-bankhead', tiempo: 5, linea: 'Green', tipo: 'transbordo' }]
  },
  'atlanta-king-memorial': {
    ciudad: 'atlanta',
    nombre: 'King Memorial',
    lineas: ['Blue', 'Green'],
    adyacentes: [
      { slug: 'atlanta-georgia-state', tiempo: 2, linea: 'Blue', tipo: 'marta-rail' },
      { slug: 'atlanta-inman-park-reynoldstown', tiempo: 2, linea: 'Blue', tipo: 'marta-rail' },
      { slug: 'atlanta-inman-park-reynoldstown', tiempo: 2, linea: 'Green', tipo: 'transbordo' },
    ]
  },
  'atlanta-inman-park-reynoldstown': {
    ciudad: 'atlanta',
    nombre: 'Inman Park/Reynoldstown',
    lineas: ['Blue', 'Green'],
    adyacentes: [
      { slug: 'atlanta-king-memorial', tiempo: 2, linea: 'Blue', tipo: 'marta-rail' },
      { slug: 'atlanta-edgewood-candler-park', tiempo: 2, linea: 'Blue', tipo: 'marta-rail' },
      { slug: 'atlanta-edgewood-candler-park', tiempo: 2, linea: 'Green', tipo: 'transbordo' },
    ]
  },
  'atlanta-edgewood-candler-park': {
    ciudad: 'atlanta',
    nombre: 'Edgewood/Candler Park',
    lineas: ['Blue', 'Green'],
    adyacentes: [
      { slug: 'atlanta-inman-park-reynoldstown', tiempo: 2, linea: 'Blue', tipo: 'marta-rail' },
      { slug: 'atlanta-east-lake', tiempo: 2, linea: 'Blue', tipo: 'marta-rail' },
    ]
  },
  'atlanta-east-lake': {
    ciudad: 'atlanta',
    nombre: 'East Lake',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'atlanta-edgewood-candler-park', tiempo: 2, linea: 'Blue', tipo: 'marta-rail' },
      { slug: 'atlanta-decatur', tiempo: 2, linea: 'Blue', tipo: 'marta-rail' },
    ]
  },
  'atlanta-decatur': {
    ciudad: 'atlanta',
    nombre: 'Decatur',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'atlanta-east-lake', tiempo: 2, linea: 'Blue', tipo: 'marta-rail' },
      { slug: 'atlanta-avondale', tiempo: 3, linea: 'Blue', tipo: 'marta-rail' },
    ]
  },
  'atlanta-avondale': {
    ciudad: 'atlanta',
    nombre: 'Avondale',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'atlanta-decatur', tiempo: 3, linea: 'Blue', tipo: 'marta-rail' },
      { slug: 'atlanta-kensington', tiempo: 2, linea: 'Blue', tipo: 'marta-rail' },
    ]
  },
  'atlanta-kensington': {
    ciudad: 'atlanta',
    nombre: 'Kensington',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'atlanta-avondale', tiempo: 2, linea: 'Blue', tipo: 'marta-rail' },
      { slug: 'atlanta-indian-creek', tiempo: 2, linea: 'Blue', tipo: 'marta-rail' },
    ]
  },
  'atlanta-indian-creek': {
    ciudad: 'atlanta',
    nombre: 'Indian Creek',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'atlanta-kensington', tiempo: 2, linea: 'Blue', tipo: 'marta-rail' },
    ]
  },

  // ============================================
  // LÍNEA GREEN - 9 estaciones
  // ============================================
  'atlanta-bankhead': {
    ciudad: 'atlanta',
    nombre: 'Bankhead',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'atlanta-ashby', tiempo: 3, linea: 'Green', tipo: 'marta-rail' },
      { slug: 'atlanta-georgia-state', tiempo: 5, linea: 'Red', tipo: 'transbordo' }]
  },
};
