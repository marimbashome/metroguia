/*
 * METRO DE LIMA GRAPH — BFS Adjacency Network
 * ============================================
 * Coverage: Línea 1 (26 estaciones, Villa El Salvador → Bayóvar)
 *           + Línea 2 (en construcción, apertura estimada 2026-2027)
 * Tiempos en minutos entre estaciones adyacentes
 * Fuente: Autoridad de Transporte Urbano (ATU), Lima
 * Nota: La Línea 2 conectará Ate con Callao (35 km, 35 estaciones)
 *       Estaciones L2 marcadas como 'en-construccion' donde aplica
 */

export const grafoLima = {
  // ===== LÍNEA 1 — Villa El Salvador → Bayóvar =====

  'lima-villa-el-salvador-l1': {
    ciudad: 'lima',
    nombre: 'Villa El Salvador',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'lima-parque-industrial-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
    ],
  },
  'lima-parque-industrial-l1': {
    ciudad: 'lima',
    nombre: 'Parque Industrial',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'lima-villa-el-salvador-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
      { slug: 'lima-villa-maria-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
    ],
  },
  'lima-villa-maria-l1': {
    ciudad: 'lima',
    nombre: 'Villa María del Triunfo',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'lima-parque-industrial-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
      { slug: 'lima-pumacahua-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
    ],
  },
  'lima-pumacahua-l1': {
    ciudad: 'lima',
    nombre: 'Pumacahua',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'lima-villa-maria-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
      { slug: 'lima-los-cabitos-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
    ],
  },
  'lima-los-cabitos-l1': {
    ciudad: 'lima',
    nombre: 'Los Cabitos',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'lima-pumacahua-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
      { slug: 'lima-san-borja-sur-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
    ],
  },
  'lima-san-borja-sur-l1': {
    ciudad: 'lima',
    nombre: 'San Borja Sur',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'lima-los-cabitos-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
      { slug: 'lima-san-borja-norte-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
    ],
  },
  'lima-san-borja-norte-l1': {
    ciudad: 'lima',
    nombre: 'San Borja Norte',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'lima-san-borja-sur-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
      { slug: 'lima-angamos-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
    ],
  },
  'lima-angamos-l1': {
    ciudad: 'lima',
    nombre: 'Angamos',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'lima-san-borja-norte-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
      { slug: 'lima-arriola-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
    ],
  },
  'lima-arriola-l1': {
    ciudad: 'lima',
    nombre: 'Arriola',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'lima-angamos-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
      { slug: 'lima-la-cultura-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
    ],
  },
  'lima-la-cultura-l1': {
    ciudad: 'lima',
    nombre: 'La Cultura',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'lima-arriola-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
      { slug: 'lima-gamarra-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
      { slug: 'lima-dos-de-mayo-l2', tiempo: 5, linea: 'transfer', tipo: 'transbordo' },
    ],
  },
  'lima-gamarra-l1': {
    ciudad: 'lima',
    nombre: 'Gamarra',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'lima-la-cultura-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
      { slug: 'lima-mexico-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
    ],
  },
  'lima-mexico-l1': {
    ciudad: 'lima',
    nombre: 'México',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'lima-gamarra-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
      { slug: 'lima-san-carlos-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
    ],
  },
  'lima-san-carlos-l1': {
    ciudad: 'lima',
    nombre: 'San Carlos',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'lima-mexico-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
      { slug: 'lima-grau-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
    ],
  },
  'lima-grau-l1': {
    ciudad: 'lima',
    nombre: 'Grau',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'lima-san-carlos-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
      { slug: 'lima-miguel-grau-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
    ],
  },
  'lima-miguel-grau-l1': {
    ciudad: 'lima',
    nombre: 'Miguel Grau',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'lima-grau-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
      { slug: 'lima-piraque-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
    ],
  },
  'lima-piraque-l1': {
    ciudad: 'lima',
    nombre: 'Pirámide del Sol',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'lima-miguel-grau-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
      { slug: 'lima-los-jardines-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
    ],
  },
  'lima-los-jardines-l1': {
    ciudad: 'lima',
    nombre: 'Los Jardines',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'lima-piraque-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
      { slug: 'lima-los-postes-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
    ],
  },
  'lima-los-postes-l1': {
    ciudad: 'lima',
    nombre: 'Los Postes',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'lima-los-jardines-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
      { slug: 'lima-caja-de-agua-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
    ],
  },
  'lima-caja-de-agua-l1': {
    ciudad: 'lima',
    nombre: 'Caja de Agua',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'lima-los-postes-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
      { slug: 'lima-santa-rosa-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
    ],
  },
  'lima-santa-rosa-l1': {
    ciudad: 'lima',
    nombre: 'Santa Rosa',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'lima-caja-de-agua-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
      { slug: 'lima-bayovar-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
    ],
  },
  'lima-bayovar-l1': {
    ciudad: 'lima',
    nombre: 'Bayóvar',
    lineas: ['L1'],
    adyacentes: [
      { slug: 'lima-santa-rosa-l1', tiempo: 3, linea: 'L1', tipo: 'metro' },
    ],
  },

  // ===== LÍNEA 2 — En Construcción (apertura estimada 2026-2027) =====
  // Estaciones principales con conexiones futuras documentadas

  'lima-dos-de-mayo-l2': {
    ciudad: 'lima',
    nombre: 'Dos de Mayo',
    lineas: ['L2'],
    adyacentes: [
      { slug: 'lima-plaza-bolognesi-l2', tiempo: 4, linea: 'L2', tipo: 'metro' },
      { slug: 'lima-la-cultura-l1', tiempo: 5, linea: 'transfer', tipo: 'transbordo' },
    ],
  },
  'lima-plaza-bolognesi-l2': {
    ciudad: 'lima',
    nombre: 'Plaza Bolognesi',
    lineas: ['L2'],
    adyacentes: [
      { slug: 'lima-dos-de-mayo-l2', tiempo: 4, linea: 'L2', tipo: 'metro' },
      { slug: 'lima-argentina-l2', tiempo: 4, linea: 'L2', tipo: 'metro' },
    ],
  },
  'lima-argentina-l2': {
    ciudad: 'lima',
    nombre: 'Argentina',
    lineas: ['L2'],
    adyacentes: [
      { slug: 'lima-plaza-bolognesi-l2', tiempo: 4, linea: 'L2', tipo: 'metro' },
      { slug: 'lima-chavez-l2', tiempo: 4, linea: 'L2', tipo: 'metro' },
    ],
  },
  'lima-chavez-l2': {
    ciudad: 'lima',
    nombre: 'José Chávez',
    lineas: ['L2'],
    adyacentes: [
      { slug: 'lima-argentina-l2', tiempo: 4, linea: 'L2', tipo: 'metro' },
      { slug: 'lima-faucett-l2', tiempo: 4, linea: 'L2', tipo: 'metro' },
    ],
  },
  'lima-faucett-l2': {
    ciudad: 'lima',
    nombre: 'Faucett',
    lineas: ['L2'],
    adyacentes: [
      { slug: 'lima-chavez-l2', tiempo: 4, linea: 'L2', tipo: 'metro' },
      { slug: 'lima-aeropuerto-l2', tiempo: 3, linea: 'L2', tipo: 'metro' },
    ],
  },
  'lima-aeropuerto-l2': {
    ciudad: 'lima',
    nombre: 'Aeropuerto Internacional',
    lineas: ['L2'],
    adyacentes: [
      { slug: 'lima-faucett-l2', tiempo: 3, linea: 'L2', tipo: 'metro' },
    ],
  },
}
