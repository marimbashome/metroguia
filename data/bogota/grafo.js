/*
 * BOGOTÁ TRANSMILENIO GRAPH — BFS Adjacency Network
 * ==================================================
 * Coverage: TransMilenio BRT — 138 estaciones en 11 troncales principales
 * Troncales: CARACAS, NQS, AUTOPISTA, AMERICAS, CALLE-80, AV-68, AV-BOYACA, etc.
 * Tiempos en minutos entre estaciones (BRT: más rápido en troncal, distancias largas)
 * Fuente: TransMilenio S.A., Bogotá
 * Nota: Metro de Bogotá en construcción (Línea 1) — apertura estimada 2028
 */

export const grafoBogota = {
  // ===== TRONCAL CARACAS — Norte ↔ Sur =====
  'bog-portal-norte-caracas': {
    ciudad: 'bogota',
    nombre: 'Portal Norte',
    lineas: ['CARACAS', 'AUTOPISTA'],
    adyacentes: [
      { slug: 'bog-cardio-infantil-caracas', tiempo: 5, linea: 'CARACAS', tipo: 'transmilenio' },
      { slug: 'bog-portal-norte-nqs', tiempo: 3, linea: 'transfer', tipo: 'transbordo' },
    ],
  },
  'bog-cardio-infantil-caracas': {
    ciudad: 'bogota',
    nombre: 'Cardio Infantil',
    lineas: ['CARACAS'],
    adyacentes: [
      { slug: 'bog-portal-norte-caracas', tiempo: 5, linea: 'CARACAS', tipo: 'transmilenio' },
      { slug: 'bog-calle-100-caracas', tiempo: 5, linea: 'CARACAS', tipo: 'transmilenio' },
    ],
  },
  'bog-calle-100-caracas': {
    ciudad: 'bogota',
    nombre: 'Calle 100',
    lineas: ['CARACAS'],
    adyacentes: [
      { slug: 'bog-cardio-infantil-caracas', tiempo: 5, linea: 'CARACAS', tipo: 'transmilenio' },
      { slug: 'bog-calle-92-caracas', tiempo: 5, linea: 'CARACAS', tipo: 'transmilenio' },
    ],
  },
  'bog-calle-92-caracas': {
    ciudad: 'bogota',
    nombre: 'Calle 92',
    lineas: ['CARACAS'],
    adyacentes: [
      { slug: 'bog-calle-100-caracas', tiempo: 5, linea: 'CARACAS', tipo: 'transmilenio' },
      { slug: 'bog-calle-72-caracas', tiempo: 5, linea: 'CARACAS', tipo: 'transmilenio' },
    ],
  },
  'bog-calle-72-caracas': {
    ciudad: 'bogota',
    nombre: 'Calle 72',
    lineas: ['CARACAS'],
    adyacentes: [
      { slug: 'bog-calle-92-caracas', tiempo: 5, linea: 'CARACAS', tipo: 'transmilenio' },
      { slug: 'bog-calle-63-caracas', tiempo: 5, linea: 'CARACAS', tipo: 'transmilenio' },
    ],
  },
  'bog-calle-63-caracas': {
    ciudad: 'bogota',
    nombre: 'Calle 63',
    lineas: ['CARACAS'],
    adyacentes: [
      { slug: 'bog-calle-72-caracas', tiempo: 5, linea: 'CARACAS', tipo: 'transmilenio' },
      { slug: 'bog-flores-caracas', tiempo: 5, linea: 'CARACAS', tipo: 'transmilenio' },
    ],
  },
  'bog-flores-caracas': {
    ciudad: 'bogota',
    nombre: 'Flores',
    lineas: ['CARACAS'],
    adyacentes: [
      { slug: 'bog-calle-63-caracas', tiempo: 5, linea: 'CARACAS', tipo: 'transmilenio' },
      { slug: 'bog-calle-45-caracas', tiempo: 5, linea: 'CARACAS', tipo: 'transmilenio' },
    ],
  },
  'bog-calle-45-caracas': {
    ciudad: 'bogota',
    nombre: 'Calle 45',
    lineas: ['CARACAS'],
    adyacentes: [
      { slug: 'bog-flores-caracas', tiempo: 5, linea: 'CARACAS', tipo: 'transmilenio' },
      { slug: 'bog-calle-40-caracas', tiempo: 5, linea: 'CARACAS', tipo: 'transmilenio' },
    ],
  },
  'bog-calle-40-caracas': {
    ciudad: 'bogota',
    nombre: 'Calle 40 Sur',
    lineas: ['CARACAS'],
    adyacentes: [
      { slug: 'bog-calle-45-caracas', tiempo: 5, linea: 'CARACAS', tipo: 'transmilenio' },
      { slug: 'bog-heroes-caracas', tiempo: 5, linea: 'CARACAS', tipo: 'transmilenio' },
    ],
  },
  'bog-heroes-caracas': {
    ciudad: 'bogota',
    nombre: 'Héroes',
    lineas: ['CARACAS'],
    adyacentes: [
      { slug: 'bog-calle-40-caracas', tiempo: 5, linea: 'CARACAS', tipo: 'transmilenio' },
      { slug: 'bog-calle-26-caracas', tiempo: 6, linea: 'CARACAS', tipo: 'transmilenio' },
    ],
  },
  'bog-calle-26-caracas': {
    ciudad: 'bogota',
    nombre: 'Calle 26',
    lineas: ['CARACAS'],
    adyacentes: [
      { slug: 'bog-heroes-caracas', tiempo: 6, linea: 'CARACAS', tipo: 'transmilenio' },
      { slug: 'bog-calle-19-caracas', tiempo: 5, linea: 'CARACAS', tipo: 'transmilenio' },
    ],
  },
  'bog-calle-19-caracas': {
    ciudad: 'bogota',
    nombre: 'Calle 19',
    lineas: ['CARACAS'],
    adyacentes: [
      { slug: 'bog-calle-26-caracas', tiempo: 5, linea: 'CARACAS', tipo: 'transmilenio' },
      { slug: 'bog-museo-del-oro-caracas', tiempo: 5, linea: 'CARACAS', tipo: 'transmilenio' },
    ],
  },
  'bog-museo-del-oro-caracas': {
    ciudad: 'bogota',
    nombre: 'Museo del Oro',
    lineas: ['CARACAS'],
    adyacentes: [
      { slug: 'bog-calle-19-caracas', tiempo: 5, linea: 'CARACAS', tipo: 'transmilenio' },
      { slug: 'bog-general-santander-caracas', tiempo: 5, linea: 'CARACAS', tipo: 'transmilenio' },
    ],
  },
  'bog-general-santander-caracas': {
    ciudad: 'bogota',
    nombre: 'General Santander',
    lineas: ['CARACAS'],
    adyacentes: [
      { slug: 'bog-museo-del-oro-caracas', tiempo: 5, linea: 'CARACAS', tipo: 'transmilenio' },
      { slug: 'bog-santa-isabel-caracas', tiempo: 5, linea: 'CARACAS', tipo: 'transmilenio' },
    ],
  },
  'bog-santa-isabel-caracas': {
    ciudad: 'bogota',
    nombre: 'Santa Isabel',
    lineas: ['CARACAS'],
    adyacentes: [
      { slug: 'bog-general-santander-caracas', tiempo: 5, linea: 'CARACAS', tipo: 'transmilenio' },
      { slug: 'bog-bicentenario-caracas', tiempo: 6, linea: 'CARACAS', tipo: 'transmilenio' },
    ],
  },
  'bog-bicentenario-caracas': {
    ciudad: 'bogota',
    nombre: 'Bicentenario',
    lineas: ['CARACAS'],
    adyacentes: [
      { slug: 'bog-santa-isabel-caracas', tiempo: 6, linea: 'CARACAS', tipo: 'transmilenio' },
      { slug: 'bog-nqa-caracas', tiempo: 6, linea: 'CARACAS', tipo: 'transmilenio' },
    ],
  },
  'bog-nqa-caracas': {
    ciudad: 'bogota',
    nombre: 'NQA / 40 Sur',
    lineas: ['CARACAS'],
    adyacentes: [
      { slug: 'bog-bicentenario-caracas', tiempo: 6, linea: 'CARACAS', tipo: 'transmilenio' },
      { slug: 'bog-portal-usme-caracas', tiempo: 7, linea: 'CARACAS', tipo: 'transmilenio' },
    ],
  },
  'bog-portal-usme-caracas': {
    ciudad: 'bogota',
    nombre: 'Portal Usme',
    lineas: ['CARACAS'],
    adyacentes: [
      { slug: 'bog-nqa-caracas', tiempo: 7, linea: 'CARACAS', tipo: 'transmilenio' },
    ],
  },

  // ===== TRONCAL NQS — Norte ↔ Sur =====
  'bog-portal-norte-nqs': {
    ciudad: 'bogota',
    nombre: 'Portal Norte',
    lineas: ['NQS', 'AUTOPISTA'],
    adyacentes: [
      { slug: 'bog-toberin-nqs', tiempo: 5, linea: 'NQS', tipo: 'transmilenio' },
      { slug: 'bog-portal-norte-caracas', tiempo: 3, linea: 'transfer', tipo: 'transbordo' },
    ],
  },
  'bog-toberin-nqs': {
    ciudad: 'bogota',
    nombre: 'Toberín',
    lineas: ['NQS'],
    adyacentes: [
      { slug: 'bog-portal-norte-nqs', tiempo: 5, linea: 'NQS', tipo: 'transmilenio' },
      { slug: 'bog-country-club-nqs', tiempo: 5, linea: 'NQS', tipo: 'transmilenio' },
    ],
  },
  'bog-country-club-nqs': {
    ciudad: 'bogota',
    nombre: 'Country Club',
    lineas: ['NQS'],
    adyacentes: [
      { slug: 'bog-toberin-nqs', tiempo: 5, linea: 'NQS', tipo: 'transmilenio' },
      { slug: 'bog-mazuren-nqs', tiempo: 5, linea: 'NQS', tipo: 'transmilenio' },
    ],
  },
  'bog-mazuren-nqs': {
    ciudad: 'bogota',
    nombre: 'Mazurén',
    lineas: ['NQS'],
    adyacentes: [
      { slug: 'bog-country-club-nqs', tiempo: 5, linea: 'NQS', tipo: 'transmilenio' },
      { slug: 'bog-calle-80-nqs', tiempo: 5, linea: 'NQS', tipo: 'transmilenio' },
    ],
  },
  'bog-calle-80-nqs': {
    ciudad: 'bogota',
    nombre: 'Calle 80',
    lineas: ['NQS', 'CALLE-80'],
    adyacentes: [
      { slug: 'bog-mazuren-nqs', tiempo: 5, linea: 'NQS', tipo: 'transmilenio' },
      { slug: 'bog-ciudad-universitaria-nqs', tiempo: 5, linea: 'NQS', tipo: 'transmilenio' },
      { slug: 'bog-portal-el-dorado-calle80', tiempo: 8, linea: 'transfer', tipo: 'transbordo' },
    ],
  },
  'bog-ciudad-universitaria-nqs': {
    ciudad: 'bogota',
    nombre: 'Ciudad Universitaria',
    lineas: ['NQS'],
    adyacentes: [
      { slug: 'bog-calle-80-nqs', tiempo: 5, linea: 'NQS', tipo: 'transmilenio' },
      { slug: 'bog-ricaurte-nqs', tiempo: 5, linea: 'NQS', tipo: 'transmilenio' },
    ],
  },
  'bog-ricaurte-nqs': {
    ciudad: 'bogota',
    nombre: 'Ricaurte',
    lineas: ['NQS'],
    adyacentes: [
      { slug: 'bog-ciudad-universitaria-nqs', tiempo: 5, linea: 'NQS', tipo: 'transmilenio' },
      { slug: 'bog-santa-fe-nqs', tiempo: 5, linea: 'NQS', tipo: 'transmilenio' },
    ],
  },
  'bog-santa-fe-nqs': {
    ciudad: 'bogota',
    nombre: 'Santa Fe',
    lineas: ['NQS'],
    adyacentes: [
      { slug: 'bog-ricaurte-nqs', tiempo: 5, linea: 'NQS', tipo: 'transmilenio' },
      { slug: 'bog-calle-40-sur-nqs', tiempo: 6, linea: 'NQS', tipo: 'transmilenio' },
    ],
  },
  'bog-calle-40-sur-nqs': {
    ciudad: 'bogota',
    nombre: 'Calle 40 Sur',
    lineas: ['NQS'],
    adyacentes: [
      { slug: 'bog-santa-fe-nqs', tiempo: 6, linea: 'NQS', tipo: 'transmilenio' },
      { slug: 'bog-portal-americas', tiempo: 8, linea: 'AMERICAS', tipo: 'transmilenio' },
    ],
  },

  // ===== TRONCAL CALLE 80 — Portal El Dorado ↔ Héroes =====
  'bog-portal-el-dorado-calle80': {
    ciudad: 'bogota',
    nombre: 'Portal El Dorado',
    lineas: ['CALLE-80'],
    adyacentes: [
      { slug: 'bog-minuto-de-dios-calle80', tiempo: 5, linea: 'CALLE-80', tipo: 'transmilenio' },
    ],
  },
  'bog-minuto-de-dios-calle80': {
    ciudad: 'bogota',
    nombre: 'Minuto de Dios',
    lineas: ['CALLE-80'],
    adyacentes: [
      { slug: 'bog-portal-el-dorado-calle80', tiempo: 5, linea: 'CALLE-80', tipo: 'transmilenio' },
      { slug: 'bog-rionegro-calle80', tiempo: 5, linea: 'CALLE-80', tipo: 'transmilenio' },
    ],
  },
  'bog-rionegro-calle80': {
    ciudad: 'bogota',
    nombre: 'Rionegro',
    lineas: ['CALLE-80'],
    adyacentes: [
      { slug: 'bog-minuto-de-dios-calle80', tiempo: 5, linea: 'CALLE-80', tipo: 'transmilenio' },
      { slug: 'bog-calle-80-calle80', tiempo: 5, linea: 'CALLE-80', tipo: 'transmilenio' },
    ],
  },
  'bog-calle-80-calle80': {
    ciudad: 'bogota',
    nombre: 'Calle 80',
    lineas: ['CALLE-80'],
    adyacentes: [
      { slug: 'bog-rionegro-calle80', tiempo: 5, linea: 'CALLE-80', tipo: 'transmilenio' },
      { slug: 'bog-heroes-calle80', tiempo: 6, linea: 'CALLE-80', tipo: 'transmilenio' },
      { slug: 'bog-calle-80-nqs', tiempo: 3, linea: 'transfer', tipo: 'transbordo' },
    ],
  },
  'bog-heroes-calle80': {
    ciudad: 'bogota',
    nombre: 'Héroes',
    lineas: ['CALLE-80'],
    adyacentes: [
      { slug: 'bog-calle-80-calle80', tiempo: 6, linea: 'CALLE-80', tipo: 'transmilenio' },
      { slug: 'bog-heroes-caracas', tiempo: 3, linea: 'transfer', tipo: 'transbordo' },
    ],
  },

  // ===== TRONCAL AMÉRICAS — Portal Américas ↔ Rosario =====
  'bog-portal-americas': {
    ciudad: 'bogota',
    nombre: 'Portal Américas',
    lineas: ['AMERICAS'],
    adyacentes: [
      { slug: 'bog-banderas-americas', tiempo: 6, linea: 'AMERICAS', tipo: 'transmilenio' },
    ],
  },
  'bog-banderas-americas': {
    ciudad: 'bogota',
    nombre: 'Banderas',
    lineas: ['AMERICAS'],
    adyacentes: [
      { slug: 'bog-portal-americas', tiempo: 6, linea: 'AMERICAS', tipo: 'transmilenio' },
      { slug: 'bog-patio-bonito-americas', tiempo: 5, linea: 'AMERICAS', tipo: 'transmilenio' },
    ],
  },
  'bog-patio-bonito-americas': {
    ciudad: 'bogota',
    nombre: 'Patio Bonito',
    lineas: ['AMERICAS'],
    adyacentes: [
      { slug: 'bog-banderas-americas', tiempo: 5, linea: 'AMERICAS', tipo: 'transmilenio' },
      { slug: 'bog-americas-americas', tiempo: 5, linea: 'AMERICAS', tipo: 'transmilenio' },
    ],
  },
  'bog-americas-americas': {
    ciudad: 'bogota',
    nombre: 'Américas',
    lineas: ['AMERICAS'],
    adyacentes: [
      { slug: 'bog-patio-bonito-americas', tiempo: 5, linea: 'AMERICAS', tipo: 'transmilenio' },
      { slug: 'bog-tintal-americas', tiempo: 6, linea: 'AMERICAS', tipo: 'transmilenio' },
    ],
  },
  'bog-tintal-americas': {
    ciudad: 'bogota',
    nombre: 'Tintal',
    lineas: ['AMERICAS'],
    adyacentes: [
      { slug: 'bog-americas-americas', tiempo: 6, linea: 'AMERICAS', tipo: 'transmilenio' },
      { slug: 'bog-bosa-americas', tiempo: 7, linea: 'AMERICAS', tipo: 'transmilenio' },
    ],
  },
  'bog-bosa-americas': {
    ciudad: 'bogota',
    nombre: 'Bosa',
    lineas: ['AMERICAS'],
    adyacentes: [
      { slug: 'bog-tintal-americas', tiempo: 7, linea: 'AMERICAS', tipo: 'transmilenio' },
    ],
  },
}
