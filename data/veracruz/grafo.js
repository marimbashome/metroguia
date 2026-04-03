export const grafoVeracruz = {
  'veracruz-puerto-bello': {
    ciudad: 'veracruz',
    nombre: 'Puerto Bello',
    lineas: ['1'],
    adyacentes: [
      { slug: 'veracruz-la-caleta', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'veracruz-baluarte-san-carlos', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'veracruz-centro-historico': {
    ciudad: 'veracruz',
    nombre: 'Centro Histórico',
    lineas: ['1'],
    adyacentes: [
      { slug: 'veracruz-mandinga', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'veracruz-baluarte-san-carlos': {
    ciudad: 'veracruz',
    nombre: 'Baluarte San Carlos',
    lineas: ['1'],
    adyacentes: [
      { slug: 'veracruz-puerto-bello', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'veracruz-playa-hornos', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'veracruz-playa-hornos': {
    ciudad: 'veracruz',
    nombre: 'Playa Hornos',
    lineas: ['1'],
    adyacentes: [
      { slug: 'veracruz-baluarte-san-carlos', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'veracruz-acuario', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'veracruz-acuario': {
    ciudad: 'veracruz',
    nombre: 'Acuario',
    lineas: ['1'],
    adyacentes: [
      { slug: 'veracruz-playa-hornos', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'veracruz-playa-mocambo', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'veracruz-playa-mocambo': {
    ciudad: 'veracruz',
    nombre: 'Playa Mocambo',
    lineas: ['1'],
    adyacentes: [
      { slug: 'veracruz-acuario', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'veracruz-boca-del-rio', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'veracruz-boca-del-rio': {
    ciudad: 'veracruz',
    nombre: 'Boca del Río',
    lineas: ['1'],
    adyacentes: [
      { slug: 'veracruz-playa-mocambo', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'veracruz-mandinga', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'veracruz-mandinga': {
    ciudad: 'veracruz',
    nombre: 'Mandinga',
    lineas: ['1'],
    adyacentes: [
      { slug: 'veracruz-boca-del-rio', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'veracruz-centro-historico', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'veracruz-loma-de-lara': {
    ciudad: 'veracruz',
    nombre: 'Loma de Lara',
    lineas: ['1'],
    adyacentes: [
      { slug: 'veracruz-terminal-autobuses', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'veracruz-museo-antropologia', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'veracruz-museo-antropologia': {
    ciudad: 'veracruz',
    nombre: 'Museo de Antropología',
    lineas: ['1'],
    adyacentes: [
      { slug: 'veracruz-loma-de-lara', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'veracruz-la-caleta', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'veracruz-la-caleta': {
    ciudad: 'veracruz',
    nombre: 'La Caleta',
    lineas: ['1'],
    adyacentes: [
      { slug: 'veracruz-museo-antropologia', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'veracruz-puerto-bello', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'veracruz-terminal-autobuses': {
    ciudad: 'veracruz',
    nombre: 'Terminal de Autobuses',
    lineas: ['1'],
    adyacentes: [
      { slug: 'veracruz-loma-de-lara', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  }
};
