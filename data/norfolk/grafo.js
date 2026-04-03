export const grafoNorfolk = {
  'norfolk-eastern-virginia-medical': {
    ciudad: 'norfolk',
    nombre: 'Eastern Virginia Medical',
    lineas: ["tide"],
    adyacentes: [
      { slug: 'norfolk-ft-norfolk', tiempo: 3, linea: 'tide', tipo: 'tide' },
    ],
  },
  'norfolk-ft-norfolk': {
    ciudad: 'norfolk',
    nombre: 'Ft Norfolk',
    lineas: ["tide"],
    adyacentes: [
      { slug: 'norfolk-eastern-virginia-medical', tiempo: 3, linea: 'tide', tipo: 'tide' },
      { slug: 'norfolk-harbor-park', tiempo: 3, linea: 'tide', tipo: 'tide' },
    ],
  },
  'norfolk-harbor-park': {
    ciudad: 'norfolk',
    nombre: 'Harbor Park',
    lineas: ["tide"],
    adyacentes: [
      { slug: 'norfolk-ft-norfolk', tiempo: 3, linea: 'tide', tipo: 'tide' },
      { slug: 'norfolk-civic-plaza', tiempo: 3, linea: 'tide', tipo: 'tide' },
    ],
  },
  'norfolk-civic-plaza': {
    ciudad: 'norfolk',
    nombre: 'Civic Plaza',
    lineas: ["tide"],
    adyacentes: [
      { slug: 'norfolk-harbor-park', tiempo: 3, linea: 'tide', tipo: 'tide' },
      { slug: 'norfolk-macarthur-square', tiempo: 3, linea: 'tide', tipo: 'tide' },
    ],
  },
  'norfolk-macarthur-square': {
    ciudad: 'norfolk',
    nombre: 'Macarthur Square',
    lineas: ["tide"],
    adyacentes: [
      { slug: 'norfolk-civic-plaza', tiempo: 3, linea: 'tide', tipo: 'tide' },
      { slug: 'norfolk-monticello', tiempo: 3, linea: 'tide', tipo: 'tide' },
    ],
  },
  'norfolk-monticello': {
    ciudad: 'norfolk',
    nombre: 'Monticello',
    lineas: ["tide"],
    adyacentes: [
      { slug: 'norfolk-macarthur-square', tiempo: 3, linea: 'tide', tipo: 'tide' },
      { slug: 'norfolk-nsu', tiempo: 3, linea: 'tide', tipo: 'tide' },
    ],
  },
  'norfolk-nsu': {
    ciudad: 'norfolk',
    nombre: 'Nsu',
    lineas: ["tide"],
    adyacentes: [
      { slug: 'norfolk-monticello', tiempo: 3, linea: 'tide', tipo: 'tide' },
      { slug: 'norfolk-ballentine-blvd', tiempo: 3, linea: 'tide', tipo: 'tide' },
    ],
  },
  'norfolk-ballentine-blvd': {
    ciudad: 'norfolk',
    nombre: 'Ballentine Blvd',
    lineas: ["tide"],
    adyacentes: [
      { slug: 'norfolk-nsu', tiempo: 3, linea: 'tide', tipo: 'tide' },
      { slug: 'norfolk-military-hwy', tiempo: 3, linea: 'tide', tipo: 'tide' },
    ],
  },
  'norfolk-military-hwy': {
    ciudad: 'norfolk',
    nombre: 'Military Hwy',
    lineas: ["tide"],
    adyacentes: [
      { slug: 'norfolk-ballentine-blvd', tiempo: 3, linea: 'tide', tipo: 'tide' },
      { slug: 'norfolk-odu', tiempo: 3, linea: 'tide', tipo: 'tide' },
    ],
  },
  'norfolk-odu': {
    ciudad: 'norfolk',
    nombre: 'Odu',
    lineas: ["tide"],
    adyacentes: [
      { slug: 'norfolk-military-hwy', tiempo: 3, linea: 'tide', tipo: 'tide' },
      { slug: 'norfolk-newtown-road', tiempo: 3, linea: 'tide', tipo: 'tide' },
    ],
  },
  'norfolk-newtown-road': {
    ciudad: 'norfolk',
    nombre: 'Newtown Road',
    lineas: ["tide"],
    adyacentes: [
      { slug: 'norfolk-odu', tiempo: 3, linea: 'tide', tipo: 'tide' },
    ],
  },
};
