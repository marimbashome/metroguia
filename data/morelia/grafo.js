export const grafoMorelia = {
  'morelia-plaza-morelos': {
    ciudad: 'morelia',
    nombre: 'Plaza Morelos',
    lineas: ['1'],
    adyacentes: [
      { slug: 'morelia-cerro-garnica', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'morelia-cerro-garnica': {
    ciudad: 'morelia',
    nombre: 'Cerro Garnica',
    lineas: ['1'],
    adyacentes: [
      { slug: 'morelia-plaza-morelos', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'morelia-zona-residencial', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'morelia-zona-residencial': {
    ciudad: 'morelia',
    nombre: 'Zona Residencial',
    lineas: ['1'],
    adyacentes: [
      { slug: 'morelia-cerro-garnica', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'morelia-acueducto', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'morelia-parque-enrique-ramirez': {
    ciudad: 'morelia',
    nombre: 'Parque Enrique Ramírez',
    lineas: ['1'],
    adyacentes: [
      { slug: 'morelia-acueducto', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'morelia-acueducto': {
    ciudad: 'morelia',
    nombre: 'Acueducto',
    lineas: ['1'],
    adyacentes: [
      { slug: 'morelia-zona-residencial', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'morelia-parque-enrique-ramirez', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  }
};
