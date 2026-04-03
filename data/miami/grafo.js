/**
 * Grafo de transporte público de Miami para MetroGuia.mx
 * Sistemas: Metrorail (23) + Metromover (12) + Tri-Rail (6) + Brightline (4)
 * 
 * 45 nodos principales:
 * Metrorail: 23 estaciones (Green Line + Orange Line)
 * Metromover: 12 estaciones en 3 loops (Omni, Inner, Brickell) - GRATIS
 * Tri-Rail: 6 estaciones (norte a sur)
 * Brightline: 4 estaciones (express)
 * 
 * Estructura de nodo:
 * {
 *   ciudad: 'miami',
 *   nombre: string,
 *   lineas: string[],
 *   adyacentes: [{ slug, tiempo (minutos), linea, tipo ('metrorail' | 'metromover' | 'transbordo' | 'tri-rail' | 'brightline') }]
 * }
 */

export const grafoMiami = {
  // ============================================
  // METRORAIL - LÍNEA GREEN (norte a sur)
  // ============================================
  'miami-palmetto': {
    ciudad: 'miami',
    nombre: 'Palmetto',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'miami-okeechobee', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
    ]
  },
  'miami-okeechobee': {
    ciudad: 'miami',
    nombre: 'Okeechobee',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'miami-palmetto', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
      { slug: 'miami-hialeah', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
    ]
  },
  'miami-hialeah': {
    ciudad: 'miami',
    nombre: 'Hialeah',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'miami-okeechobee', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
      { slug: 'miami-tri-rail-transfer', tiempo: 3, linea: 'Green', tipo: 'metrorail' },
    ]
  },
  'miami-tri-rail-transfer': {
    ciudad: 'miami',
    nombre: 'Tri-Rail Transfer',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'miami-hialeah', tiempo: 3, linea: 'Green', tipo: 'metrorail' },
      { slug: 'miami-northside', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
      { slug: 'miami-tri-rail-mia', tiempo: 5, linea: 'Tri-Rail', tipo: 'transbordo' },
    ]
  },
  'miami-northside': {
    ciudad: 'miami',
    nombre: 'Northside',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'miami-tri-rail-transfer', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
      { slug: 'miami-mlk-plaza', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
    ]
  },
  'miami-mlk-plaza': {
    ciudad: 'miami',
    nombre: 'MLK Plaza',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'miami-northside', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
      { slug: 'miami-brownsville', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
    ]
  },
  'miami-brownsville': {
    ciudad: 'miami',
    nombre: 'Brownsville',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'miami-mlk-plaza', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
      { slug: 'miami-earlington-heights', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
    ]
  },
  'miami-earlington-heights': {
    ciudad: 'miami',
    nombre: 'Earlington Heights',
    lineas: ['Green', 'Orange'],
    adyacentes: [
      { slug: 'miami-brownsville', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
      { slug: 'miami-allapattah', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
      { slug: 'miami-miami-airport', tiempo: 5, linea: 'Orange', tipo: 'metrorail' },
    ]
  },
  'miami-allapattah': {
    ciudad: 'miami',
    nombre: 'Allapattah',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'miami-earlington-heights', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
      { slug: 'miami-santa-clara', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
    ]
  },
  'miami-santa-clara': {
    ciudad: 'miami',
    nombre: 'Santa Clara',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'miami-allapattah', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
      { slug: 'miami-civic-center', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
    ]
  },
  'miami-civic-center': {
    ciudad: 'miami',
    nombre: 'Civic Center',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'miami-santa-clara', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
      { slug: 'miami-culmer', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
    ]
  },
  'miami-culmer': {
    ciudad: 'miami',
    nombre: 'Culmer',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'miami-civic-center', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
      { slug: 'miami-historic-overtown', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
    ]
  },
  'miami-historic-overtown': {
    ciudad: 'miami',
    nombre: 'Historic Overtown',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'miami-culmer', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
      { slug: 'miami-government-center', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
    ]
  },
  'miami-government-center': {
    ciudad: 'miami',
    nombre: 'Government Center',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'miami-historic-overtown', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
      { slug: 'miami-brickell', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
      { slug: 'miami-metromover-omni', tiempo: 3, linea: 'Omni-Loop', tipo: 'transbordo' },
      { slug: 'miami-metromover-adrienne-arsht', tiempo: 3, linea: 'Inner-Loop', tipo: 'transbordo' },
      { slug: 'brightline-miami', tiempo: 10, linea: 'Brightline', tipo: 'transbordo' },
    ]
  },
  'miami-brickell': {
    ciudad: 'miami',
    nombre: 'Brickell',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'miami-government-center', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
      { slug: 'miami-vizcaya', tiempo: 3, linea: 'Green', tipo: 'metrorail' },
      { slug: 'miami-metromover-brickell', tiempo: 3, linea: 'Brickell-Loop', tipo: 'transbordo' },
    ]
  },
  'miami-vizcaya': {
    ciudad: 'miami',
    nombre: 'Vizcaya',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'miami-brickell', tiempo: 3, linea: 'Green', tipo: 'metrorail' },
      { slug: 'miami-coconut-grove', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
    ]
  },
  'miami-coconut-grove': {
    ciudad: 'miami',
    nombre: 'Coconut Grove',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'miami-vizcaya', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
      { slug: 'miami-douglas-road', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
    ]
  },
  'miami-douglas-road': {
    ciudad: 'miami',
    nombre: 'Douglas Road',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'miami-coconut-grove', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
      { slug: 'miami-university', tiempo: 3, linea: 'Green', tipo: 'metrorail' },
    ]
  },
  'miami-university': {
    ciudad: 'miami',
    nombre: 'University',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'miami-douglas-road', tiempo: 3, linea: 'Green', tipo: 'metrorail' },
      { slug: 'miami-south-miami', tiempo: 3, linea: 'Green', tipo: 'metrorail' },
    ]
  },
  'miami-south-miami': {
    ciudad: 'miami',
    nombre: 'South Miami',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'miami-university', tiempo: 3, linea: 'Green', tipo: 'metrorail' },
      { slug: 'miami-dadeland-north', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
    ]
  },
  'miami-dadeland-north': {
    ciudad: 'miami',
    nombre: 'Dadeland North',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'miami-south-miami', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
      { slug: 'miami-dadeland-south', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
    ]
  },
  'miami-dadeland-south': {
    ciudad: 'miami',
    nombre: 'Dadeland South',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'miami-dadeland-north', tiempo: 2, linea: 'Green', tipo: 'metrorail' },
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
      { slug: 'miami-earlington-heights', tiempo: 5, linea: 'Orange', tipo: 'metrorail' },
      { slug: 'miami-tri-rail-mia', tiempo: 5, linea: 'Tri-Rail', tipo: 'transbordo' },
    ]
  },

  // ============================================
  // METROMOVER - OMNI LOOP (GRATIS, clockwise)
  // ============================================
  'miami-metromover-omni': {
    ciudad: 'miami',
    nombre: 'Omni Loop',
    lineas: ['Omni-Loop'],
    adyacentes: [
      { slug: 'miami-metromover-school-board', tiempo: 2, linea: 'Omni-Loop', tipo: 'metromover' },
      { slug: 'miami-government-center', tiempo: 3, linea: 'Omni-Loop', tipo: 'transbordo' },
    ]
  },
  'miami-metromover-school-board': {
    ciudad: 'miami',
    nombre: 'School Board',
    lineas: ['Omni-Loop'],
    adyacentes: [
      { slug: 'miami-metromover-adrienne-arsht', tiempo: 2, linea: 'Omni-Loop', tipo: 'metromover' },
      { slug: 'miami-metromover-omni', tiempo: 2, linea: 'Omni-Loop', tipo: 'metromover' },
    ]
  },
  'miami-metromover-adrienne-arsht': {
    ciudad: 'miami',
    nombre: 'Adrienne Arsht Center',
    lineas: ['Omni-Loop', 'Inner-Loop'],
    adyacentes: [
      { slug: 'miami-metromover-school-board', tiempo: 2, linea: 'Omni-Loop', tipo: 'metromover' },
      { slug: 'miami-government-center', tiempo: 2, linea: 'Omni-Loop', tipo: 'transbordo' },
      { slug: 'miami-metromover-freedom-tower', tiempo: 2, linea: 'Inner-Loop', tipo: 'metromover' },
      { slug: 'miami-metromover-college-bayside', tiempo: 2, linea: 'Inner-Loop', tipo: 'metromover' },
    ]
  },

  // ============================================
  // METROMOVER - INNER LOOP (GRATIS, clockwise)
  // ============================================
  'miami-metromover-freedom-tower': {
    ciudad: 'miami',
    nombre: 'Freedom Tower',
    lineas: ['Inner-Loop'],
    adyacentes: [
      { slug: 'miami-metromover-museum-park', tiempo: 2, linea: 'Inner-Loop', tipo: 'metromover' },
      { slug: 'miami-metromover-adrienne-arsht', tiempo: 2, linea: 'Inner-Loop', tipo: 'metromover' },
    ]
  },
  'miami-metromover-college-bayside': {
    ciudad: 'miami',
    nombre: 'College/Bayside',
    lineas: ['Inner-Loop'],
    adyacentes: [
      { slug: 'miami-metromover-adrienne-arsht', tiempo: 2, linea: 'Inner-Loop', tipo: 'metromover' },
      { slug: 'miami-metromover-bayfront-park', tiempo: 2, linea: 'Inner-Loop', tipo: 'metromover' },
    ]
  },
  'miami-metromover-bayfront-park': {
    ciudad: 'miami',
    nombre: 'Bayfront Park',
    lineas: ['Inner-Loop'],
    adyacentes: [
      { slug: 'miami-metromover-college-bayside', tiempo: 2, linea: 'Inner-Loop', tipo: 'metromover' },
      { slug: 'miami-metromover-knight-center', tiempo: 2, linea: 'Inner-Loop', tipo: 'metromover' },
    ]
  },
  'miami-metromover-knight-center': {
    ciudad: 'miami',
    nombre: 'Knight Center',
    lineas: ['Inner-Loop'],
    adyacentes: [
      { slug: 'miami-metromover-bayfront-park', tiempo: 2, linea: 'Inner-Loop', tipo: 'metromover' },
      { slug: 'miami-metromover-financial-district', tiempo: 2, linea: 'Inner-Loop', tipo: 'metromover' },
    ]
  },
  'miami-metromover-financial-district': {
    ciudad: 'miami',
    nombre: 'Financial District',
    lineas: ['Inner-Loop', 'Brickell-Loop'],
    adyacentes: [
      { slug: 'miami-metromover-knight-center', tiempo: 2, linea: 'Inner-Loop', tipo: 'metromover' },
      { slug: 'miami-metromover-museum-park', tiempo: 2, linea: 'Inner-Loop', tipo: 'metromover' },
      { slug: 'miami-metromover-brickell-city-centre', tiempo: 2, linea: 'Brickell-Loop', tipo: 'metromover' },
    ]
  },
  'miami-metromover-museum-park': {
    ciudad: 'miami',
    nombre: 'Museum Park',
    lineas: ['Inner-Loop'],
    adyacentes: [
      { slug: 'miami-metromover-financial-district', tiempo: 2, linea: 'Inner-Loop', tipo: 'metromover' },
      { slug: 'miami-metromover-freedom-tower', tiempo: 2, linea: 'Inner-Loop', tipo: 'metromover' },
    ]
  },

  // ============================================
  // METROMOVER - BRICKELL LOOP (GRATIS, clockwise)
  // ============================================
  'miami-metromover-brickell-city-centre': {
    ciudad: 'miami',
    nombre: 'Brickell City Centre',
    lineas: ['Brickell-Loop'],
    adyacentes: [
      { slug: 'miami-metromover-financial-district', tiempo: 2, linea: 'Brickell-Loop', tipo: 'metromover' },
      { slug: 'miami-metromover-fifth-street', tiempo: 2, linea: 'Brickell-Loop', tipo: 'metromover' },
    ]
  },
  'miami-metromover-fifth-street': {
    ciudad: 'miami',
    nombre: 'Fifth Street',
    lineas: ['Brickell-Loop'],
    adyacentes: [
      { slug: 'miami-metromover-brickell-city-centre', tiempo: 2, linea: 'Brickell-Loop', tipo: 'metromover' },
      { slug: 'miami-metromover-brickell', tiempo: 2, linea: 'Brickell-Loop', tipo: 'metromover' },
    ]
  },
  'miami-metromover-brickell': {
    ciudad: 'miami',
    nombre: 'Brickell',
    lineas: ['Brickell-Loop'],
    adyacentes: [
      { slug: 'miami-metromover-fifth-street', tiempo: 2, linea: 'Brickell-Loop', tipo: 'metromover' },
      { slug: 'miami-metromover-financial-district', tiempo: 2, linea: 'Brickell-Loop', tipo: 'metromover' },
      { slug: 'miami-brickell', tiempo: 3, linea: 'Brickell-Loop', tipo: 'transbordo' },
    ]
  },

  // ============================================
  // TRI-RAIL (norte a sur)
  // ============================================
  'miami-tri-rail-mia': {
    ciudad: 'miami',
    nombre: 'Tri-Rail Miami Station',
    lineas: ['Tri-Rail'],
    adyacentes: [
      { slug: 'miami-tri-rail-hollywood', tiempo: 15, linea: 'Tri-Rail', tipo: 'tri-rail' },
      { slug: 'miami-tri-rail-transfer', tiempo: 5, linea: 'Tri-Rail', tipo: 'transbordo' },
      { slug: 'miami-miami-airport', tiempo: 5, linea: 'Tri-Rail', tipo: 'transbordo' },
    ]
  },
  'miami-tri-rail-hollywood': {
    ciudad: 'miami',
    nombre: 'Tri-Rail Hollywood',
    lineas: ['Tri-Rail'],
    adyacentes: [
      { slug: 'miami-tri-rail-mia', tiempo: 15, linea: 'Tri-Rail', tipo: 'tri-rail' },
      { slug: 'miami-tri-rail-fort-lauderdale', tiempo: 12, linea: 'Tri-Rail', tipo: 'tri-rail' },
    ]
  },
  'miami-tri-rail-fort-lauderdale': {
    ciudad: 'miami',
    nombre: 'Tri-Rail Fort Lauderdale',
    lineas: ['Tri-Rail'],
    adyacentes: [
      { slug: 'miami-tri-rail-hollywood', tiempo: 12, linea: 'Tri-Rail', tipo: 'tri-rail' },
      { slug: 'miami-tri-rail-boca-raton', tiempo: 15, linea: 'Tri-Rail', tipo: 'tri-rail' },
      { slug: 'brightline-fort-lauderdale', tiempo: 5, linea: 'Brightline', tipo: 'transbordo' },
    ]
  },
  'miami-tri-rail-boca-raton': {
    ciudad: 'miami',
    nombre: 'Tri-Rail Boca Raton',
    lineas: ['Tri-Rail'],
    adyacentes: [
      { slug: 'miami-tri-rail-fort-lauderdale', tiempo: 15, linea: 'Tri-Rail', tipo: 'tri-rail' },
      { slug: 'miami-tri-rail-delray-beach', tiempo: 10, linea: 'Tri-Rail', tipo: 'tri-rail' },
    ]
  },
  'miami-tri-rail-delray-beach': {
    ciudad: 'miami',
    nombre: 'Tri-Rail Delray Beach',
    lineas: ['Tri-Rail'],
    adyacentes: [
      { slug: 'miami-tri-rail-boca-raton', tiempo: 10, linea: 'Tri-Rail', tipo: 'tri-rail' },
      { slug: 'miami-tri-rail-west-palm-beach', tiempo: 12, linea: 'Tri-Rail', tipo: 'tri-rail' },
    ]
  },
  'miami-tri-rail-west-palm-beach': {
    ciudad: 'miami',
    nombre: 'Tri-Rail West Palm Beach',
    lineas: ['Tri-Rail'],
    adyacentes: [
      { slug: 'miami-tri-rail-delray-beach', tiempo: 12, linea: 'Tri-Rail', tipo: 'tri-rail' },
      { slug: 'brightline-west-palm-beach', tiempo: 3, linea: 'Brightline', tipo: 'transbordo' },
    ]
  },

  // ============================================
  // BRIGHTLINE (express train)
  // ============================================
  'brightline-miami': {
    ciudad: 'miami',
    nombre: 'Brightline Miami Central',
    lineas: ['Brightline'],
    adyacentes: [
      { slug: 'brightline-fort-lauderdale', tiempo: 30, linea: 'Brightline', tipo: 'brightline' },
      { slug: 'miami-government-center', tiempo: 10, linea: 'Brightline', tipo: 'transbordo' },
    ]
  },
  'brightline-fort-lauderdale': {
    ciudad: 'miami',
    nombre: 'Brightline Fort Lauderdale',
    lineas: ['Brightline'],
    adyacentes: [
      { slug: 'brightline-miami', tiempo: 30, linea: 'Brightline', tipo: 'brightline' },
      { slug: 'brightline-west-palm-beach', tiempo: 30, linea: 'Brightline', tipo: 'brightline' },
      { slug: 'miami-tri-rail-fort-lauderdale', tiempo: 5, linea: 'Brightline', tipo: 'transbordo' },
    ]
  },
  'brightline-west-palm-beach': {
    ciudad: 'miami',
    nombre: 'Brightline West Palm Beach',
    lineas: ['Brightline'],
    adyacentes: [
      { slug: 'brightline-fort-lauderdale', tiempo: 30, linea: 'Brightline', tipo: 'brightline' },
      { slug: 'brightline-orlando', tiempo: 150, linea: 'Brightline', tipo: 'brightline' },
      { slug: 'miami-tri-rail-west-palm-beach', tiempo: 3, linea: 'Brightline', tipo: 'transbordo' },
    ]
  },
  'brightline-orlando': {
    ciudad: 'miami',
    nombre: 'Brightline Orlando',
    lineas: ['Brightline'],
    adyacentes: [
      { slug: 'brightline-west-palm-beach', tiempo: 150, linea: 'Brightline', tipo: 'brightline' },
    ]
  }
};
