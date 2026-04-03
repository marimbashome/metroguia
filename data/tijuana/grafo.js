export const grafoTijuana = {
  'san-ysidro-frontera': {
    ciudad: 'san',
    nombre: 'San Ysidro (Cruce Fronterizo)',
    lineas: ['1'],
    adyacentes: [
      { slug: 'chaparral', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'chaparral': {
    ciudad: 'chaparral',
    nombre: 'Chaparral (Terminal Migratoria)',
    lineas: ['1'],
    adyacentes: [
      { slug: 'san-ysidro-frontera', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'plaza-rio', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'plaza-rio': {
    ciudad: 'plaza',
    nombre: 'Zona Río (Plaza Río)',
    lineas: ['1'],
    adyacentes: [
      { slug: 'chaparral', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'zona-centro', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'zona-centro': {
    ciudad: 'zona',
    nombre: 'Zona Centro (Avenida Revolución)',
    lineas: ['1'],
    adyacentes: [
      { slug: 'plaza-rio', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'catedral-tijuana', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'catedral-tijuana': {
    ciudad: 'catedral',
    nombre: 'Catedral Metropolitana',
    lineas: ['1'],
    adyacentes: [
      { slug: 'zona-centro', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'mercado-hidalgo', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'mercado-hidalgo': {
    ciudad: 'mercado',
    nombre: 'Mercado Hidalgo',
    lineas: ['1'],
    adyacentes: [
      { slug: 'catedral-tijuana', tiempo: 3, linea: '1', tipo: 'linea' },
      { slug: 'playas-tj', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'plaza-santa-cecilia': {
    ciudad: 'plaza',
    nombre: 'Plaza Santa Cecilia (Mariachis)',
    lineas: ['3'],
    adyacentes: [
      { slug: 'hospital-general-tj', tiempo: 3, linea: '3', tipo: 'linea' }
    ],
  },
  'hospital-general-tj': {
    ciudad: 'hospital',
    nombre: 'Hospital General de Tijuana',
    lineas: ['3'],
    adyacentes: [
      { slug: 'plaza-santa-cecilia', tiempo: 3, linea: '3', tipo: 'linea' },
      { slug: 'aeropuerto-tj', tiempo: 3, linea: '3', tipo: 'linea' }
    ],
  },
  'aeropuerto-tj': {
    ciudad: 'aeropuerto',
    nombre: 'Aeropuerto Internacional (ABX)',
    lineas: ['3'],
    adyacentes: [
      { slug: 'hospital-general-tj', tiempo: 3, linea: '3', tipo: 'linea' },
      { slug: 'puente-cross-border', tiempo: 3, linea: '3', tipo: 'linea' }
    ],
  },
  'puente-cross-border': {
    ciudad: 'puente',
    nombre: 'Cross Border Xpress (CBX)',
    lineas: ['3'],
    adyacentes: [
      { slug: 'aeropuerto-tj', tiempo: 3, linea: '3', tipo: 'linea' },
      { slug: 'buena-vista', tiempo: 3, linea: '3', tipo: 'linea' }
    ],
  },
  'playas-tj': {
    ciudad: 'playas',
    nombre: 'Playas de Tijuana',
    lineas: ['1'],
    adyacentes: [
      { slug: 'mercado-hidalgo', tiempo: 3, linea: '1', tipo: 'linea' }
    ],
  },
  'buena-vista': {
    ciudad: 'buena',
    nombre: 'Buena Vista (Cañada)',
    lineas: ['3'],
    adyacentes: [
      { slug: 'puente-cross-border', tiempo: 3, linea: '3', tipo: 'linea' },
      { slug: 'la-mesa-tj', tiempo: 3, linea: '3', tipo: 'linea' }
    ],
  },
  'la-mesa-tj': {
    ciudad: 'la',
    nombre: 'La Mesa',
    lineas: ['3'],
    adyacentes: [
      { slug: 'buena-vista', tiempo: 3, linea: '3', tipo: 'linea' },
      { slug: 'valle-guadalupe-acceso', tiempo: 3, linea: '3', tipo: 'linea' }
    ],
  },
  'valle-guadalupe-acceso': {
    ciudad: 'valle',
    nombre: 'Valle de Guadalupe (Acceso/Ruta del Vino)',
    lineas: ['3'],
    adyacentes: [
      { slug: 'la-mesa-tj', tiempo: 3, linea: '3', tipo: 'linea' }
    ],
  },
  'garita-san-ysidro-sitt': {
    ciudad: 'garita',
    nombre: 'Garita San Ysidro (SITT)',
    lineas: ['2'],
    adyacentes: [
      { slug: 'puerta-mexico-sitt', tiempo: 4, linea: '2', tipo: 'linea' }
    ],
  },
  'puerta-mexico-sitt': {
    ciudad: 'puerta',
    nombre: 'Puerta México',
    lineas: ['2'],
    adyacentes: [
      { slug: 'garita-san-ysidro-sitt', tiempo: 4, linea: '2', tipo: 'linea' },
      { slug: 'revolucion-brt', tiempo: 4, linea: '2', tipo: 'linea' }
    ],
  },
  'revolucion-brt': {
    ciudad: 'revolucion',
    nombre: 'Avenida Revolución (BRT)',
    lineas: ['2'],
    adyacentes: [
      { slug: 'puerta-mexico-sitt', tiempo: 4, linea: '2', tipo: 'linea' },
      { slug: 'cinco-y-diez-sitt', tiempo: 4, linea: '2', tipo: 'linea' }
    ],
  },
  'cinco-y-diez-sitt': {
    ciudad: 'cinco',
    nombre: 'Cinco y Diez',
    lineas: ['2'],
    adyacentes: [
      { slug: 'revolucion-brt', tiempo: 4, linea: '2', tipo: 'linea' },
      { slug: 'rio-tijuana-brt', tiempo: 4, linea: '2', tipo: 'linea' }
    ],
  },
  'rio-tijuana-brt': {
    ciudad: 'rio',
    nombre: 'Zona Río (BRT)',
    lineas: ['2'],
    adyacentes: [
      { slug: 'cinco-y-diez-sitt', tiempo: 4, linea: '2', tipo: 'linea' },
      { slug: 'otay-brt', tiempo: 4, linea: '2', tipo: 'linea' }
    ],
  },
  'otay-brt': {
    ciudad: 'otay',
    nombre: 'Otay',
    lineas: ['2'],
    adyacentes: [
      { slug: 'rio-tijuana-brt', tiempo: 4, linea: '2', tipo: 'linea' },
      { slug: 'presa-rodriguez-sitt', tiempo: 4, linea: '2', tipo: 'linea' }
    ],
  },
  'presa-rodriguez-sitt': {
    ciudad: 'presa',
    nombre: 'Presa Rodríguez',
    lineas: ['2'],
    adyacentes: [
      { slug: 'otay-brt', tiempo: 4, linea: '2', tipo: 'linea' },
      { slug: 'via-rapida-oriente-sitt', tiempo: 4, linea: '2', tipo: 'linea' }
    ],
  },
  'via-rapida-oriente-sitt': {
    ciudad: 'via',
    nombre: 'Vía Rápida Oriente',
    lineas: ['2'],
    adyacentes: [
      { slug: 'presa-rodriguez-sitt', tiempo: 4, linea: '2', tipo: 'linea' },
      { slug: 'plaza-monarca-sitt', tiempo: 4, linea: '2', tipo: 'linea' }
    ],
  },
  'plaza-monarca-sitt': {
    ciudad: 'plaza',
    nombre: 'Plaza Monarca',
    lineas: ['2'],
    adyacentes: [
      { slug: 'via-rapida-oriente-sitt', tiempo: 4, linea: '2', tipo: 'linea' },
      { slug: 'la-mesa-tj-sitt', tiempo: 4, linea: '2', tipo: 'linea' }
    ],
  },
  'la-mesa-tj-sitt': {
    ciudad: 'la',
    nombre: 'La Mesa (SITT)',
    lineas: ['2'],
    adyacentes: [
      { slug: 'plaza-monarca-sitt', tiempo: 4, linea: '2', tipo: 'linea' },
      { slug: 'mariano-matamoros-sitt', tiempo: 4, linea: '2', tipo: 'linea' }
    ],
  },
  'mariano-matamoros-sitt': {
    ciudad: 'mariano',
    nombre: 'Mariano Matamoros',
    lineas: ['2'],
    adyacentes: [
      { slug: 'la-mesa-tj-sitt', tiempo: 4, linea: '2', tipo: 'linea' },
      { slug: 'terminal-sur-sitt', tiempo: 4, linea: '2', tipo: 'linea' }
    ],
  },
  'terminal-sur-sitt': {
    ciudad: 'terminal',
    nombre: 'Terminal Sur (SITT)',
    lineas: ['2'],
    adyacentes: [
      { slug: 'mariano-matamoros-sitt', tiempo: 4, linea: '2', tipo: 'linea' }
    ],
  }
};
