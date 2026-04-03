export const grafoSanDiego = {
  // BLUE LINE
  'sd-12th-imperial': {
    ciudad: 'san-diego',
    nombre: '12th & Imperial',
    lineas: ['Blue', 'Green'],
    adyacentes: [
      { slug: 'sd-convention-center', tiempo: 2, linea: 'Blue', tipo: 'mts' },
      { slug: 'sd-park-de-la-cruz', tiempo: 2, linea: 'Green', tipo: 'mts' },
      { slug: 'sd-courthouse', tiempo: 3, linea: 'Orange', tipo: 'transbordo' },
    ]
  },
  'sd-convention-center': {
    ciudad: 'san-diego',
    nombre: 'Convention Center',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'sd-12th-imperial', tiempo: 2, linea: 'Blue', tipo: 'mts' },
      { slug: 'sd-gaslamp-quarter', tiempo: 2, linea: 'Blue', tipo: 'mts' },
    ]
  },
  'sd-gaslamp-quarter': {
    ciudad: 'san-diego',
    nombre: 'Gaslamp Quarter',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'sd-convention-center', tiempo: 2, linea: 'Blue', tipo: 'mts' },
      { slug: 'sd-5th-ave', tiempo: 2, linea: 'Blue', tipo: 'mts' },
    ]
  },
  'sd-5th-ave': {
    ciudad: 'san-diego',
    nombre: '5th Ave',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'sd-gaslamp-quarter', tiempo: 2, linea: 'Blue', tipo: 'mts' },
      { slug: 'sd-middle-town', tiempo: 2, linea: 'Blue', tipo: 'mts' },
    ]
  },
  'sd-middle-town': {
    ciudad: 'san-diego',
    nombre: 'Middletown',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'sd-5th-ave', tiempo: 2, linea: 'Blue', tipo: 'mts' },
      { slug: 'sd-washington', tiempo: 2, linea: 'Blue', tipo: 'mts' },
    ]
  },
  'sd-washington': {
    ciudad: 'san-diego',
    nombre: 'Washington',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'sd-middle-town', tiempo: 2, linea: 'Blue', tipo: 'mts' },
      { slug: 'sd-ucsd', tiempo: 2, linea: 'Blue', tipo: 'mts' },
    ]
  },
  'sd-ucsd': {
    ciudad: 'san-diego',
    nombre: 'UC San Diego',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'sd-washington', tiempo: 2, linea: 'Blue', tipo: 'mts' },
    ]
  },

  // ORANGE LINE
  'sd-courthouse': {
    ciudad: 'san-diego',
    nombre: 'Courthouse',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'sd-king-merritt', tiempo: 2, linea: 'Orange', tipo: 'mts' },
      { slug: 'sd-12th-imperial', tiempo: 3, linea: 'Blue', tipo: 'transbordo' },
    ]
  },
  'sd-king-merritt': {
    ciudad: 'san-diego',
    nombre: 'King Merritt',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'sd-courthouse', tiempo: 2, linea: 'Orange', tipo: 'mts' },
      { slug: 'sd-kettner-blvd', tiempo: 2, linea: 'Orange', tipo: 'mts' },
    ]
  },
  'sd-kettner-blvd': {
    ciudad: 'san-diego',
    nombre: 'Kettner Blvd',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'sd-king-merritt', tiempo: 2, linea: 'Orange', tipo: 'mts' },
      { slug: 'sd-oak-park', tiempo: 2, linea: 'Orange', tipo: 'mts' },
    ]
  },
  'sd-oak-park': {
    ciudad: 'san-diego',
    nombre: 'Oak Park',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'sd-kettner-blvd', tiempo: 2, linea: 'Orange', tipo: 'mts' },
      { slug: 'sd-nemo', tiempo: 2, linea: 'Orange', tipo: 'mts' },
    ]
  },
  'sd-nemo': {
    ciudad: 'san-diego',
    nombre: 'Nemo',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'sd-oak-park', tiempo: 2, linea: 'Orange', tipo: 'mts' },
      { slug: 'sd-normal', tiempo: 2, linea: 'Orange', tipo: 'mts' },
    ]
  },
  'sd-normal': {
    ciudad: 'san-diego',
    nombre: 'Normal',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'sd-nemo', tiempo: 2, linea: 'Orange', tipo: 'mts' },
      { slug: 'sd-el-cajon-transit', tiempo: 2, linea: 'Orange', tipo: 'mts' },
    ]
  },
  'sd-el-cajon-transit': {
    ciudad: 'san-diego',
    nombre: 'El Cajon Transit Center',
    lineas: ['Orange'],
    adyacentes: [
      { slug: 'sd-normal', tiempo: 2, linea: 'Orange', tipo: 'mts' },
    ]
  },

  // GREEN LINE
  'sd-12th-imperial-green': {
    ciudad: 'san-diego',
    nombre: '12th & Imperial',
    lineas: ['Blue', 'Green'],
    adyacentes: [
      { slug: 'sd-park-de-la-cruz', tiempo: 2, linea: 'Green', tipo: 'mts' },
      { slug: 'sd-convention-center', tiempo: 2, linea: 'Blue', tipo: 'mts' },
    ]
  },
  'sd-park-de-la-cruz': {
    ciudad: 'san-diego',
    nombre: 'Park de la Cruz',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'sd-12th-imperial-green', tiempo: 2, linea: 'Green', tipo: 'mts' },
      { slug: 'sd-south-bay', tiempo: 2, linea: 'Green', tipo: 'mts' },
    ]
  },
  'sd-south-bay': {
    ciudad: 'san-diego',
    nombre: 'South Bay',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'sd-park-de-la-cruz', tiempo: 2, linea: 'Green', tipo: 'mts' },
      { slug: 'sd-palm-ave', tiempo: 2, linea: 'Green', tipo: 'mts' },
    ]
  },
  'sd-palm-ave': {
    ciudad: 'san-diego',
    nombre: 'Palm Ave',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'sd-south-bay', tiempo: 2, linea: 'Green', tipo: 'mts' },
      { slug: 'sd-iris-ave', tiempo: 2, linea: 'Green', tipo: 'mts' },
    ]
  },
  'sd-iris-ave': {
    ciudad: 'san-diego',
    nombre: 'Iris Ave',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'sd-palm-ave', tiempo: 2, linea: 'Green', tipo: 'mts' },
      { slug: 'sd-santee-town-center', tiempo: 2, linea: 'Green', tipo: 'mts' },
    ]
  },
  'sd-santee-town-center': {
    ciudad: 'san-diego',
    nombre: 'Santee Town Center',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'sd-iris-ave', tiempo: 2, linea: 'Green', tipo: 'mts' },
    ]
  },
};
