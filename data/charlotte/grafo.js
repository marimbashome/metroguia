export const grafoCharlotte = {
  'charlotte-unc-charlotte-main': {
    ciudad: 'charlotte',
    nombre: 'UNC Charlotte Main',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-mccullough-drive', tiempo: 4, linea: 'blue', tipo: 'cats-lynx' },
    ],
  },
  'charlotte-mccullough-drive': {
    ciudad: 'charlotte',
    nombre: 'McCullough Drive',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-unc-charlotte-main', tiempo: 4, linea: 'blue', tipo: 'cats-lynx' },
      { slug: 'charlotte-liberty-lane', tiempo: 3, linea: 'blue', tipo: 'cats-lynx' },
    ],
  },
  'charlotte-liberty-lane': {
    ciudad: 'charlotte',
    nombre: 'Liberty Lane',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-mccullough-drive', tiempo: 3, linea: 'blue', tipo: 'cats-lynx' },
      { slug: 'charlotte-north-davidson', tiempo: 3, linea: 'blue', tipo: 'cats-lynx' },
    ],
  },
  'charlotte-north-davidson': {
    ciudad: 'charlotte',
    nombre: 'North Davidson',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-liberty-lane', tiempo: 3, linea: 'blue', tipo: 'cats-lynx' },
      { slug: 'charlotte-36th-street', tiempo: 3, linea: 'blue', tipo: 'cats-lynx' },
    ],
  },
  'charlotte-36th-street': {
    ciudad: 'charlotte',
    nombre: '36th Street',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-north-davidson', tiempo: 3, linea: 'blue', tipo: 'cats-lynx' },
      { slug: 'charlotte-9th-street', tiempo: 3, linea: 'blue', tipo: 'cats-lynx' },
    ],
  },
  'charlotte-9th-street': {
    ciudad: 'charlotte',
    nombre: '9th Street',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-36th-street', tiempo: 3, linea: 'blue', tipo: 'cats-lynx' },
      { slug: 'charlotte-7th-street', tiempo: 2, linea: 'blue', tipo: 'cats-lynx' },
    ],
  },
  'charlotte-7th-street': {
    ciudad: 'charlotte',
    nombre: '7th Street',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-9th-street', tiempo: 2, linea: 'blue', tipo: 'cats-lynx' },
      { slug: 'charlotte-3rd-street', tiempo: 2, linea: 'blue', tipo: 'cats-lynx' },
    ],
  },
  'charlotte-3rd-street': {
    ciudad: 'charlotte',
    nombre: '3rd Street',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-7th-street', tiempo: 2, linea: 'blue', tipo: 'cats-lynx' },
      { slug: 'charlotte-bankhead', tiempo: 2, linea: 'blue', tipo: 'cats-lynx' },
    ],
  },
  'charlotte-bankhead': {
    ciudad: 'charlotte',
    nombre: 'Bankhead',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-3rd-street', tiempo: 2, linea: 'blue', tipo: 'cats-lynx' },
      { slug: 'charlotte-carson-boulevard', tiempo: 3, linea: 'blue', tipo: 'cats-lynx' },
    ],
  },
  'charlotte-carson-boulevard': {
    ciudad: 'charlotte',
    nombre: 'Carson Boulevard',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-bankhead', tiempo: 3, linea: 'blue', tipo: 'cats-lynx' },
      { slug: 'charlotte-woodlawn', tiempo: 3, linea: 'blue', tipo: 'cats-lynx' },
    ],
  },
  'charlotte-woodlawn': {
    ciudad: 'charlotte',
    nombre: 'Woodlawn',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-carson-boulevard', tiempo: 3, linea: 'blue', tipo: 'cats-lynx' },
      { slug: 'charlotte-south-boulevard', tiempo: 3, linea: 'blue', tipo: 'cats-lynx' },
    ],
  },
  'charlotte-south-boulevard': {
    ciudad: 'charlotte',
    nombre: 'South Boulevard',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-woodlawn', tiempo: 3, linea: 'blue', tipo: 'cats-lynx' },
    ],
  },
  'charlotte-rosa-parks-place': {
    ciudad: 'charlotte',
    nombre: 'Rosa Parks Place',
    lineas: ['gold'],
    adyacentes: [
      { slug: 'charlotte-travelcenter', tiempo: 2, linea: 'gold', tipo: 'cats-lynx' },
    ],
  },
  'charlotte-travelcenter': {
    ciudad: 'charlotte',
    nombre: 'Travel Center',
    lineas: ['gold'],
    adyacentes: [
      { slug: 'charlotte-rosa-parks-place', tiempo: 2, linea: 'gold', tipo: 'cats-lynx' },
      { slug: 'charlotte-convention-center', tiempo: 2, linea: 'gold', tipo: 'cats-lynx' },
    ],
  },
  'charlotte-convention-center': {
    ciudad: 'charlotte',
    nombre: 'Convention Center',
    lineas: ['gold'],
    adyacentes: [
      { slug: 'charlotte-travelcenter', tiempo: 2, linea: 'gold', tipo: 'cats-lynx' },
      { slug: 'charlotte-sunnyside-avenue', tiempo: 2, linea: 'gold', tipo: 'cats-lynx' },
    ],
  },
  'charlotte-sunnyside-avenue': {
    ciudad: 'charlotte',
    nombre: 'Sunnyside Avenue',
    lineas: ['gold'],
    adyacentes: [
      { slug: 'charlotte-convention-center', tiempo: 2, linea: 'gold', tipo: 'cats-lynx' },
    ],
  },
};
