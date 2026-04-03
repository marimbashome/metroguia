export const grafoBaltimore = {
  'baltimore-owings-mills': {
    ciudad: 'baltimore',
    nombre: 'Owings Mills',
    lineas: ['subway'],
    adyacentes: [
      { slug: 'baltimore-gwynn-oak', tiempo: 3, linea: 'subway', tipo: 'mta-maryland' },
    ],
  },
  'baltimore-gwynn-oak': {
    ciudad: 'baltimore',
    nombre: 'Gwynn Oak',
    lineas: ['subway'],
    adyacentes: [
      { slug: 'baltimore-owings-mills', tiempo: 3, linea: 'subway', tipo: 'mta-maryland' },
      { slug: 'baltimore-roger-bacon', tiempo: 3, linea: 'subway', tipo: 'mta-maryland' },
    ],
  },
  'baltimore-roger-bacon': {
    ciudad: 'baltimore',
    nombre: 'Roger Bacon',
    lineas: ['subway'],
    adyacentes: [
      { slug: 'baltimore-gwynn-oak', tiempo: 3, linea: 'subway', tipo: 'mta-maryland' },
      { slug: 'baltimore-liberty-heights', tiempo: 3, linea: 'subway', tipo: 'mta-maryland' },
    ],
  },
  'baltimore-liberty-heights': {
    ciudad: 'baltimore',
    nombre: 'Liberty Heights',
    lineas: ['subway'],
    adyacentes: [
      { slug: 'baltimore-roger-bacon', tiempo: 3, linea: 'subway', tipo: 'mta-maryland' },
      { slug: 'baltimore-fulton-avenue', tiempo: 3, linea: 'subway', tipo: 'mta-maryland' },
    ],
  },
  'baltimore-fulton-avenue': {
    ciudad: 'baltimore',
    nombre: 'Fulton Avenue',
    lineas: ['subway'],
    adyacentes: [
      { slug: 'baltimore-liberty-heights', tiempo: 3, linea: 'subway', tipo: 'mta-maryland' },
      { slug: 'baltimore-umd-maryland', tiempo: 3, linea: 'subway', tipo: 'mta-maryland' },
    ],
  },
  'baltimore-umd-maryland': {
    ciudad: 'baltimore',
    nombre: 'UMD/Maryland',
    lineas: ['subway'],
    adyacentes: [
      { slug: 'baltimore-fulton-avenue', tiempo: 3, linea: 'subway', tipo: 'mta-maryland' },
      { slug: 'baltimore-cultural-center', tiempo: 2, linea: 'subway', tipo: 'mta-maryland' },
    ],
  },
  'baltimore-cultural-center': {
    ciudad: 'baltimore',
    nombre: 'Cultural Center',
    lineas: ['subway'],
    adyacentes: [
      { slug: 'baltimore-umd-maryland', tiempo: 2, linea: 'subway', tipo: 'mta-maryland' },
      { slug: 'baltimore-charles-center', tiempo: 2, linea: 'subway', tipo: 'mta-maryland' },
    ],
  },
  'baltimore-charles-center': {
    ciudad: 'baltimore',
    nombre: 'Charles Center',
    lineas: ['subway'],
    adyacentes: [
      { slug: 'baltimore-cultural-center', tiempo: 2, linea: 'subway', tipo: 'mta-maryland' },
      { slug: 'baltimore-hopkins-hospital', tiempo: 3, linea: 'subway', tipo: 'mta-maryland' },
    ],
  },
  'baltimore-hopkins-hospital': {
    ciudad: 'baltimore',
    nombre: 'Hopkins Hospital',
    lineas: ['subway'],
    adyacentes: [
      { slug: 'baltimore-charles-center', tiempo: 3, linea: 'subway', tipo: 'mta-maryland' },
    ],
  },
  'baltimore-hunt-valley': {
    ciudad: 'baltimore',
    nombre: 'Hunt Valley',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-mccormick-road', tiempo: 4, linea: 'lightrail', tipo: 'mta-maryland' },
    ],
  },
  'baltimore-mccormick-road': {
    ciudad: 'baltimore',
    nombre: 'McCormick Road',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-hunt-valley', tiempo: 4, linea: 'lightrail', tipo: 'mta-maryland' },
      { slug: 'baltimore-lutherville', tiempo: 3, linea: 'lightrail', tipo: 'mta-maryland' },
    ],
  },
  'baltimore-lutherville': {
    ciudad: 'baltimore',
    nombre: 'Lutherville',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-mccormick-road', tiempo: 3, linea: 'lightrail', tipo: 'mta-maryland' },
      { slug: 'baltimore-timonium', tiempo: 3, linea: 'lightrail', tipo: 'mta-maryland' },
    ],
  },
  'baltimore-timonium': {
    ciudad: 'baltimore',
    nombre: 'Timonium',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-lutherville', tiempo: 3, linea: 'lightrail', tipo: 'mta-maryland' },
      { slug: 'baltimore-linthicum', tiempo: 4, linea: 'lightrail', tipo: 'mta-maryland' },
    ],
  },
  'baltimore-linthicum': {
    ciudad: 'baltimore',
    nombre: 'Linthicum',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-timonium', tiempo: 4, linea: 'lightrail', tipo: 'mta-maryland' },
      { slug: 'baltimore-bwi-airport', tiempo: 5, linea: 'lightrail', tipo: 'mta-maryland' },
    ],
  },
  'baltimore-bwi-airport': {
    ciudad: 'baltimore',
    nombre: 'BWI Airport',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-linthicum', tiempo: 5, linea: 'lightrail', tipo: 'mta-maryland' },
      { slug: 'baltimore-cromwell', tiempo: 4, linea: 'lightrail', tipo: 'mta-maryland' },
    ],
  },
  'baltimore-cromwell': {
    ciudad: 'baltimore',
    nombre: 'Cromwell',
    lineas: ['lightrail'],
    adyacentes: [
      { slug: 'baltimore-bwi-airport', tiempo: 4, linea: 'lightrail', tipo: 'mta-maryland' },
    ],
  },
};
