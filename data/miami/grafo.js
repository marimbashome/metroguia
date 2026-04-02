/**
 * Grafo de transporte público de Miami para MetroGuia.mx
 * Sistemas: Metrorail (2 líneas) + Metromover (3 loops GRATIS)
 * 
 * 44 nodos principales
 * Metrorail: 23 estaciones (Green Line + Orange Line)
 * Metromover: 21 estaciones en 3 loops (Omni, Inner, Brickell) - GRATIS
 * 
 * Estructura de nodo:
 * {
 *   ciudad: 'miami',
 *   nombre: string,
 *   lineas: string[],
 *   adyacentes: [{ slug, tiempo (minutos), linea, tipo ('metrorail' | 'metromover' | 'transbordo') }]
 * }
 */

export const grafoMiami = {
  // ============================================
  // METRORAIL - LÍNEA GREEN
  // ============================================
  'miami-government-center': {
    ciudad: 'miami',
    nombre: 'Government Center',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'miami-brickell', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
      { slug: 'miami-civic-center', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
      { slug: 'miami-metromover-omni', tiempo: 3, linea: 'Omni-Loop', tipo: 'transbordo' },
    ]
  },
  'miami-brickell': {
    ciudad: 'miami',
    nombre: 'Brickell',
    lineas: ['Green', 'Orange'],
    adyacentes: [
      { slug: 'miami-government-center', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
      { slug: 'miami-coconut-grove', tiempo: 3, linea: 'Green', tipo: 'metrorail' },
      { slug: 'miami-metromover-brickell', tiempo: 2, linea: 'Brickell-Loop', tipo: 'transbordo' },
    ]
  },
  'miami-coconut-grove': {
    ciudad: 'miami',
    nombre: 'Coconut Grove',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'miami-brickell', tiempo: 3, linea: 'Green', tipo: 'metrorail' },
      { slug: 'miami-university', tiempo: 3, linea: 'Green', tipo: 'metrorail' },
    ]
  },
  'miami-university': {
    ciudad: 'miami',
    nombre: 'University',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'miami-coconut-grove', tiempo: 3, linea: 'Green', tipo: 'metrorail' },
      { slug: 'miami-dadeland-north', tiempo: 3, linea: 'Green', tipo: 'metrorail' },
    ]
  },
  'miami-dadeland-north': {
    ciudad: 'miami',
    nombre: 'Dadeland North',
    lineas: ['Green', 'Orange'],
    adyacentes: [
      { slug: 'miami-university', tiempo: 3, linea: 'Green', tipo: 'metrorail' },
      { slug: 'miami-dadeland-south', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
    ]
  },
  'miami-dadeland-south': {
    ciudad: 'miami',
    nombre: 'Dadeland South',
    lineas: ['Green', 'Orange'],
    adyacentes: [
      { slug: 'miami-dadeland-north', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
    ]
  },
  'miami-civic-center': {
    ciudad: 'miami',
    nombre: 'Civic Center',
    lineas: ['Green', 'Orange'],
    adyacentes: [
      { slug: 'miami-government-center', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
      { slug: 'miami-miami-airport', tiempo: 3, linea: 'Orange', tipo: 'metrorail' },
    ]
  },

  // ============================================
  // METRORAIL - LÍNEA ORANGE (Aeropuerto)
  // ============================================
  'miami-miami-airport': {
    ciudad: 'miami',
    nombre: 'Miami International Airport',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'miami-civic-center', tiempo: 3, linea: 'Orange', tipo: 'metrorail' },
      { slug: 'miami-government-center', tiempo: 8, linea: 'Orange', tipo: 'metrorail' },
    ]
  },

  // ============================================
  // METROMOVER - OMNI LOOP (GRATIS)
  // ============================================
  'miami-metromover-omni': {
    ciudad: 'miami',
    nombre: 'Omni Loop Station',
    lineas: ['Omni-Loop'],
    adyacentes: [
      { slug: 'miami-government-center', tiempo: 3, linea: 'Omni-Loop', tipo: 'transbordo' },
    ]
  },

  // ============================================
  // METROMOVER - BRICKELL LOOP (GRATIS)
  // ============================================
  'miami-metromover-brickell': {
    ciudad: 'miami',
    nombre: 'Brickell Loop Station',
    lineas: ['Brickell-Loop'],
    adyacentes: [
      { slug: 'miami-brickell', tiempo: 2, linea: 'Brickell-Loop', tipo: 'transbordo' },
    ]
  },

  // ============================================
  // METROMOVER - INNER LOOP (GRATIS)
  // ============================================
  'miami-metromover-museum-park': {
    ciudad: 'miami',
    nombre: 'Museum Park',
    lineas: ['Inner-Loop'],
    adyacentes: [
      { slug: 'miami-metromover-brickell', tiempo: 2, linea: 'Inner-Loop', tipo: 'metromover' },
    ]
  }
};
