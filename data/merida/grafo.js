export const grafoMerida = {
  'terminal-came': {
    ciudad: 'terminal',
    nombre: 'Terminal CAME',
    lineas: ['D1'],
    adyacentes: [
      { slug: 'la-plancha', tiempo: 3, linea: 'D1', tipo: 'linea' }
    ],
  },
  'la-plancha': {
    ciudad: 'la',
    nombre: 'La Plancha',
    lineas: ['D1'],
    adyacentes: [
      { slug: 'terminal-came', tiempo: 3, linea: 'D1', tipo: 'linea' },
      { slug: 'gran-museo-mundo-maya', tiempo: 3, linea: 'D1', tipo: 'linea' }
    ],
  },
  'gran-museo-mundo-maya': {
    ciudad: 'gran',
    nombre: 'Gran Museo del Mundo Maya',
    lineas: ['D1'],
    adyacentes: [
      { slug: 'la-plancha', tiempo: 3, linea: 'D1', tipo: 'linea' },
      { slug: 'paseo-montejo', tiempo: 3, linea: 'D1', tipo: 'linea' }
    ],
  },
  'paseo-montejo': {
    ciudad: 'paseo',
    nombre: 'Paseo de Montejo',
    lineas: ['D1'],
    adyacentes: [
      { slug: 'gran-museo-mundo-maya', tiempo: 3, linea: 'D1', tipo: 'linea' },
      { slug: 'centro-historico', tiempo: 3, linea: 'D1', tipo: 'linea' }
    ],
  },
  'centro-historico': {
    ciudad: 'centro',
    nombre: 'Centro Histórico',
    lineas: ['D1', 'A4'],
    adyacentes: [
      { slug: 'paseo-montejo', tiempo: 3, linea: 'D1', tipo: 'linea' },
      { slug: 'mercado-lucas-galez', tiempo: 3, linea: 'D1', tipo: 'linea' },
      { slug: 'ciudad-caucel', tiempo: 3, linea: 'A4', tipo: 'linea' }
    ],
  },
  'mercado-lucas-galez': {
    ciudad: 'mercado',
    nombre: 'Mercado Lucas de Gálvez',
    lineas: ['D1'],
    adyacentes: [
      { slug: 'centro-historico', tiempo: 3, linea: 'D1', tipo: 'linea' },
      { slug: 'uady', tiempo: 3, linea: 'D1', tipo: 'linea' }
    ],
  },
  'uady': {
    ciudad: 'uady',
    nombre: 'UADY Campus Central',
    lineas: ['D1'],
    adyacentes: [
      { slug: 'mercado-lucas-galez', tiempo: 3, linea: 'D1', tipo: 'linea' }
    ],
  },
  'terminal-noreste': {
    ciudad: 'terminal',
    nombre: 'Terminal Noreste',
    lineas: ['R2'],
    adyacentes: [
      { slug: 'plaza-las-americas', tiempo: 3, linea: 'R2', tipo: 'linea' }
    ],
  },
  'plaza-las-americas': {
    ciudad: 'plaza',
    nombre: 'Plaza Las Américas',
    lineas: ['R2'],
    adyacentes: [
      { slug: 'terminal-noreste', tiempo: 3, linea: 'R2', tipo: 'linea' },
      { slug: 'altabrisa', tiempo: 3, linea: 'R2', tipo: 'linea' }
    ],
  },
  'altabrisa': {
    ciudad: 'altabrisa',
    nombre: 'Altabrisa',
    lineas: ['R2'],
    adyacentes: [
      { slug: 'plaza-las-americas', tiempo: 3, linea: 'R2', tipo: 'linea' },
      { slug: 'hospital-general', tiempo: 3, linea: 'R2', tipo: 'linea' }
    ],
  },
  'hospital-general': {
    ciudad: 'hospital',
    nombre: 'Hospital General',
    lineas: ['R2'],
    adyacentes: [
      { slug: 'altabrisa', tiempo: 3, linea: 'R2', tipo: 'linea' },
      { slug: 'itzimna', tiempo: 3, linea: 'R2', tipo: 'linea' }
    ],
  },
  'itzimna': {
    ciudad: 'itzimna',
    nombre: 'Itzimná',
    lineas: ['R2'],
    adyacentes: [
      { slug: 'hospital-general', tiempo: 3, linea: 'R2', tipo: 'linea' },
      { slug: 'parque-centenario', tiempo: 3, linea: 'R2', tipo: 'linea' }
    ],
  },
  'parque-centenario': {
    ciudad: 'parque',
    nombre: 'Parque del Centenario',
    lineas: ['R2'],
    adyacentes: [
      { slug: 'itzimna', tiempo: 3, linea: 'R2', tipo: 'linea' }
    ],
  },
  'aeropuerto-manuel-crescencio-rejon': {
    ciudad: 'aeropuerto',
    nombre: 'Aeropuerto Internacional Manuel Crescencio Rejón',
    lineas: ['A4'],
    adyacentes: [
      { slug: 'ciudad-caucel', tiempo: 3, linea: 'A4', tipo: 'linea' }
    ],
  },
  'ciudad-caucel': {
    ciudad: 'ciudad',
    nombre: 'Ciudad Caucel',
    lineas: ['V3', 'A4'],
    adyacentes: [
      { slug: 'aeropuerto-manuel-crescencio-rejon', tiempo: 3, linea: 'A4', tipo: 'linea' },
      { slug: 'centro-historico', tiempo: 3, linea: 'A4', tipo: 'linea' }
    ],
  },
  'plaza-grande-ie-tram': {
    ciudad: 'plaza',
    nombre: 'Plaza Grande (Ie-Tram)',
    lineas: ['Ie-Tram'],
    adyacentes: [
      { slug: 'paseo-montejo-ie-tram', tiempo: 20, linea: 'Ie-Tram', tipo: 'linea' }
    ],
  },
  'paseo-montejo-ie-tram': {
    ciudad: 'paseo',
    nombre: 'Paseo de Montejo (Ie-Tram)',
    lineas: ['Ie-Tram'],
    adyacentes: [
      { slug: 'plaza-grande-ie-tram', tiempo: 20, linea: 'Ie-Tram', tipo: 'linea' },
      { slug: 'gran-museo-mundo-maya-ie-tram', tiempo: 20, linea: 'Ie-Tram', tipo: 'linea' }
    ],
  },
  'gran-museo-mundo-maya-ie-tram': {
    ciudad: 'gran',
    nombre: 'Gran Museo del Mundo Maya (Ie-Tram)',
    lineas: ['Ie-Tram'],
    adyacentes: [
      { slug: 'paseo-montejo-ie-tram', tiempo: 20, linea: 'Ie-Tram', tipo: 'linea' },
      { slug: 'xcanatun', tiempo: 20, linea: 'Ie-Tram', tipo: 'linea' }
    ],
  },
  'xcanatun': {
    ciudad: 'xcanatun',
    nombre: 'Xcanatún',
    lineas: ['Ie-Tram'],
    adyacentes: [
      { slug: 'gran-museo-mundo-maya-ie-tram', tiempo: 20, linea: 'Ie-Tram', tipo: 'linea' },
      { slug: 'teya-tren-maya', tiempo: 20, linea: 'Ie-Tram', tipo: 'linea' }
    ],
  },
  'teya-tren-maya': {
    ciudad: 'teya',
    nombre: 'Teya - Estación Tren Maya',
    lineas: ['Ie-Tram'],
    adyacentes: [
      { slug: 'xcanatun', tiempo: 20, linea: 'Ie-Tram', tipo: 'linea' }
    ],
  }
};
