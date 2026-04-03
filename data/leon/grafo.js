export const grafoLeon = {
  'capu-leon': {
    ciudad: 'capu',
    nombre: 'CAPÚ León',
    lineas: ['Verde'],
    adyacentes: [
      { slug: 'plaza-mayor', tiempo: 4, linea: 'Verde', tipo: 'linea' }
    ],
  },
  'plaza-mayor': {
    ciudad: 'plaza',
    nombre: 'Plaza Mayor',
    lineas: ['Verde'],
    adyacentes: [
      { slug: 'capu-leon', tiempo: 4, linea: 'Verde', tipo: 'linea' },
      { slug: 'zona-centro-leon', tiempo: 4, linea: 'Verde', tipo: 'linea' }
    ],
  },
  'zona-centro-leon': {
    ciudad: 'zona',
    nombre: 'Centro Histórico',
    lineas: ['Verde'],
    adyacentes: [
      { slug: 'plaza-mayor', tiempo: 4, linea: 'Verde', tipo: 'linea' },
      { slug: 'plaza-de-los-martires', tiempo: 4, linea: 'Verde', tipo: 'linea' }
    ],
  },
  'plaza-de-los-martires': {
    ciudad: 'plaza',
    nombre: 'Plaza de los Mártires',
    lineas: ['Verde'],
    adyacentes: [
      { slug: 'zona-centro-leon', tiempo: 4, linea: 'Verde', tipo: 'linea' },
      { slug: 'catedral-basilica', tiempo: 4, linea: 'Verde', tipo: 'linea' }
    ],
  },
  'catedral-basilica': {
    ciudad: 'catedral',
    nombre: 'Catedral Basílica',
    lineas: ['Verde'],
    adyacentes: [
      { slug: 'plaza-de-los-martires', tiempo: 4, linea: 'Verde', tipo: 'linea' },
      { slug: 'la-calzada', tiempo: 4, linea: 'Verde', tipo: 'linea' }
    ],
  },
  'la-calzada': {
    ciudad: 'la',
    nombre: 'La Calzada',
    lineas: ['Verde'],
    adyacentes: [
      { slug: 'catedral-basilica', tiempo: 4, linea: 'Verde', tipo: 'linea' },
      { slug: 'estadio-leon', tiempo: 4, linea: 'Verde', tipo: 'linea' }
    ],
  },
  'estadio-leon': {
    ciudad: 'estadio',
    nombre: 'Estadio León',
    lineas: ['Verde'],
    adyacentes: [
      { slug: 'la-calzada', tiempo: 4, linea: 'Verde', tipo: 'linea' },
      { slug: 'blvd-adolfo-lopez-mateos', tiempo: 4, linea: 'Verde', tipo: 'linea' }
    ],
  },
  'blvd-adolfo-lopez-mateos': {
    ciudad: 'blvd',
    nombre: 'Blvd. A.L.M.',
    lineas: ['Verde'],
    adyacentes: [
      { slug: 'estadio-leon', tiempo: 4, linea: 'Verde', tipo: 'linea' }
    ],
  },
  'terminal-central-leon': {
    ciudad: 'terminal',
    nombre: 'Terminal Central',
    lineas: ['Azul'],
    adyacentes: [
      { slug: 'delta-leon', tiempo: 3, linea: 'Azul', tipo: 'linea' }
    ],
  },
  'delta-leon': {
    ciudad: 'delta',
    nombre: 'Delta León',
    lineas: ['Azul'],
    adyacentes: [
      { slug: 'terminal-central-leon', tiempo: 3, linea: 'Azul', tipo: 'linea' },
      { slug: 'gran-plaza-leon', tiempo: 3, linea: 'Azul', tipo: 'linea' }
    ],
  },
  'gran-plaza-leon': {
    ciudad: 'gran',
    nombre: 'Gran Plaza León',
    lineas: ['Azul'],
    adyacentes: [
      { slug: 'delta-leon', tiempo: 3, linea: 'Azul', tipo: 'linea' },
      { slug: 'plaza-toros-leon', tiempo: 3, linea: 'Azul', tipo: 'linea' }
    ],
  },
  'plaza-toros-leon': {
    ciudad: 'plaza',
    nombre: 'Plaza de Toros',
    lineas: ['Azul'],
    adyacentes: [
      { slug: 'gran-plaza-leon', tiempo: 3, linea: 'Azul', tipo: 'linea' },
      { slug: 'hospital-imss-bajio', tiempo: 3, linea: 'Azul', tipo: 'linea' }
    ],
  },
  'hospital-imss-bajio': {
    ciudad: 'hospital',
    nombre: 'Hospital IMSS Bajío',
    lineas: ['Azul'],
    adyacentes: [
      { slug: 'plaza-toros-leon', tiempo: 3, linea: 'Azul', tipo: 'linea' },
      { slug: 'universidad-campus-leon', tiempo: 3, linea: 'Azul', tipo: 'linea' }
    ],
  },
  'universidad-campus-leon': {
    ciudad: 'universidad',
    nombre: 'Universidad Campus',
    lineas: ['Azul'],
    adyacentes: [
      { slug: 'hospital-imss-bajio', tiempo: 3, linea: 'Azul', tipo: 'linea' }
    ],
  },
  'expo-leon': {
    ciudad: 'expo',
    nombre: 'Expo León',
    lineas: ['Naranja'],
    adyacentes: [
      { slug: 'poliforum-leon', tiempo: 3, linea: 'Naranja', tipo: 'linea' }
    ],
  },
  'poliforum-leon': {
    ciudad: 'poliforum',
    nombre: 'Polifórum',
    lineas: ['Naranja'],
    adyacentes: [
      { slug: 'expo-leon', tiempo: 3, linea: 'Naranja', tipo: 'linea' },
      { slug: 'industrial-norte-leon', tiempo: 3, linea: 'Naranja', tipo: 'linea' }
    ],
  },
  'industrial-norte-leon': {
    ciudad: 'industrial',
    nombre: 'Industrial Norte',
    lineas: ['Naranja'],
    adyacentes: [
      { slug: 'poliforum-leon', tiempo: 3, linea: 'Naranja', tipo: 'linea' },
      { slug: 'aeropuerto-bajio-acceso', tiempo: 3, linea: 'Naranja', tipo: 'linea' }
    ],
  },
  'zona-piel-leon': {
    ciudad: 'zona',
    nombre: 'Zona Piel',
    lineas: ['Morado'],
    adyacentes: [
      { slug: 'forum-metropolitano-leon', tiempo: 3, linea: 'Morado', tipo: 'linea' }
    ],
  },
  'forum-metropolitano-leon': {
    ciudad: 'forum',
    nombre: 'Forum Metropolitano',
    lineas: ['Morado'],
    adyacentes: [
      { slug: 'zona-piel-leon', tiempo: 3, linea: 'Morado', tipo: 'linea' }
    ],
  },
  'aeropuerto-bajio-acceso': {
    ciudad: 'aeropuerto',
    nombre: 'Acceso Aeropuerto',
    lineas: ['Naranja'],
    adyacentes: [
      { slug: 'industrial-norte-leon', tiempo: 3, linea: 'Naranja', tipo: 'linea' }
    ],
  }
};
