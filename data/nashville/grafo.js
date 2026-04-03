export const grafoNashville = {
  'nashville-riverfront': {
    ciudad: 'nashville',
    nombre: 'Riverfront Station',
    lineas: ['wego-star-blue'],
    adyacentes: [
      { slug: 'nashville-metrocenter', tiempo: 8, linea: 'wego-star-blue', tipo: 'commuter-rail' }
    ]
  },
  'nashville-metrocenter': {
    ciudad: 'nashville',
    nombre: 'MetroCenter',
    lineas: ['wego-star-blue'],
    adyacentes: [
      { slug: 'nashville-riverfront', tiempo: 8, linea: 'wego-star-blue', tipo: 'commuter-rail' },
      { slug: 'nashville-mcgavock', tiempo: 8, linea: 'wego-star-blue', tipo: 'commuter-rail' }
    ]
  },
  'nashville-mcgavock': {
    ciudad: 'nashville',
    nombre: 'McGavock',
    lineas: ['wego-star-blue'],
    adyacentes: [
      { slug: 'nashville-metrocenter', tiempo: 8, linea: 'wego-star-blue', tipo: 'commuter-rail' },
      { slug: 'nashville-donelson', tiempo: 8, linea: 'wego-star-blue', tipo: 'commuter-rail' }
    ]
  },
  'nashville-donelson': {
    ciudad: 'nashville',
    nombre: 'Donelson',
    lineas: ['wego-star-blue'],
    adyacentes: [
      { slug: 'nashville-mcgavock', tiempo: 8, linea: 'wego-star-blue', tipo: 'commuter-rail' },
      { slug: 'nashville-briley', tiempo: 8, linea: 'wego-star-blue', tipo: 'commuter-rail' }
    ]
  },
  'nashville-briley': {
    ciudad: 'nashville',
    nombre: 'Briley',
    lineas: ['wego-star-blue'],
    adyacentes: [
      { slug: 'nashville-donelson', tiempo: 8, linea: 'wego-star-blue', tipo: 'commuter-rail' },
      { slug: 'nashville-airport', tiempo: 8, linea: 'wego-star-blue', tipo: 'commuter-rail' }
    ]
  },
  'nashville-airport': {
    ciudad: 'nashville',
    nombre: 'Nashville International Airport',
    lineas: ['wego-star-blue'],
    adyacentes: [
      { slug: 'nashville-briley', tiempo: 8, linea: 'wego-star-blue', tipo: 'commuter-rail' },
      { slug: 'nashville-antioch', tiempo: 8, linea: 'wego-star-blue', tipo: 'commuter-rail' }
    ]
  },
  'nashville-antioch': {
    ciudad: 'nashville',
    nombre: 'Antioch',
    lineas: ['wego-star-blue'],
    adyacentes: [
      { slug: 'nashville-airport', tiempo: 8, linea: 'wego-star-blue', tipo: 'commuter-rail' }
    ]
  }
};
