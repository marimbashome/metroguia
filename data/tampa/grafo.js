export const grafoTampa = {
  'tampa-ybor-city': {
    ciudad: 'tampa',
    nombre: 'Ybor City',
    lineas: ['teco-blue'],
    adyacentes: [
      { slug: 'tampa-centro-ybor', tiempo: 2, linea: 'teco-blue', tipo: 'streetcar' },
    ],
  },
  'tampa-centro-ybor': {
    ciudad: 'tampa',
    nombre: 'Centro Ybor',
    lineas: ['teco-blue'],
    adyacentes: [
      { slug: 'tampa-ybor-city', tiempo: 2, linea: 'teco-blue', tipo: 'streetcar' },
      { slug: 'tampa-8th-ave', tiempo: 2, linea: 'teco-blue', tipo: 'streetcar' },
    ],
  },
  'tampa-8th-ave': {
    ciudad: 'tampa',
    nombre: '8th Ave',
    lineas: ['teco-blue'],
    adyacentes: [
      { slug: 'tampa-centro-ybor', tiempo: 2, linea: 'teco-blue', tipo: 'streetcar' },
      { slug: 'tampa-dick-greco-plaza', tiempo: 2, linea: 'teco-blue', tipo: 'streetcar' },
    ],
  },
  'tampa-dick-greco-plaza': {
    ciudad: 'tampa',
    nombre: 'Dick Greco Plaza',
    lineas: ['teco-blue'],
    adyacentes: [
      { slug: 'tampa-8th-ave', tiempo: 2, linea: 'teco-blue', tipo: 'streetcar' },
      { slug: 'tampa-whiting', tiempo: 2, linea: 'teco-blue', tipo: 'streetcar' },
    ],
  },
  'tampa-whiting': {
    ciudad: 'tampa',
    nombre: 'Whiting',
    lineas: ['teco-blue'],
    adyacentes: [
      { slug: 'tampa-dick-greco-plaza', tiempo: 2, linea: 'teco-blue', tipo: 'streetcar' },
      { slug: 'tampa-cumberland', tiempo: 2, linea: 'teco-blue', tipo: 'streetcar' },
    ],
  },
  'tampa-cumberland': {
    ciudad: 'tampa',
    nombre: 'Cumberland',
    lineas: ['teco-blue'],
    adyacentes: [
      { slug: 'tampa-whiting', tiempo: 2, linea: 'teco-blue', tipo: 'streetcar' },
      { slug: 'tampa-streetcar-society', tiempo: 2, linea: 'teco-blue', tipo: 'streetcar' },
    ],
  },
  'tampa-streetcar-society': {
    ciudad: 'tampa',
    nombre: 'Streetcar Society',
    lineas: ['teco-blue'],
    adyacentes: [
      { slug: 'tampa-cumberland', tiempo: 2, linea: 'teco-blue', tipo: 'streetcar' },
      { slug: 'tampa-harbour-island', tiempo: 2, linea: 'teco-blue', tipo: 'streetcar' },
    ],
  },
  'tampa-harbour-island': {
    ciudad: 'tampa',
    nombre: 'Harbour Island',
    lineas: ['teco-blue'],
    adyacentes: [
      { slug: 'tampa-streetcar-society', tiempo: 2, linea: 'teco-blue', tipo: 'streetcar' },
      { slug: 'tampa-convention-center', tiempo: 2, linea: 'teco-blue', tipo: 'streetcar' },
    ],
  },
  'tampa-convention-center': {
    ciudad: 'tampa',
    nombre: 'Convention Center',
    lineas: ['teco-blue'],
    adyacentes: [
      { slug: 'tampa-harbour-island', tiempo: 2, linea: 'teco-blue', tipo: 'streetcar' },
      { slug: 'tampa-fort-brooke', tiempo: 2, linea: 'teco-blue', tipo: 'streetcar' },
    ],
  },
  'tampa-fort-brooke': {
    ciudad: 'tampa',
    nombre: 'Fort Brooke',
    lineas: ['teco-blue'],
    adyacentes: [
      { slug: 'tampa-convention-center', tiempo: 2, linea: 'teco-blue', tipo: 'streetcar' },
      { slug: 'tampa-channelside', tiempo: 2, linea: 'teco-blue', tipo: 'streetcar' },
    ],
  },
  'tampa-channelside': {
    ciudad: 'tampa',
    nombre: 'Channelside',
    lineas: ['teco-blue'],
    adyacentes: [
      { slug: 'tampa-fort-brooke', tiempo: 2, linea: 'teco-blue', tipo: 'streetcar' },
    ],
  },
};
