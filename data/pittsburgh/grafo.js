export const grafoPittsburgh = {
  'pittsburgh-library': {
    ciudad: 'pittsburgh',
    nombre: 'Library',
    lineas: ['red'],
    adyacentes: [
      { slug: 'pittsburgh-fifth-ave', tiempo: 2, linea: 'red', tipo: 'prt-t' },
    ],
  },
  'pittsburgh-fifth-ave': {
    ciudad: 'pittsburgh',
    nombre: 'Fifth Avenue',
    lineas: ['red'],
    adyacentes: [
      { slug: 'pittsburgh-library', tiempo: 2, linea: 'red', tipo: 'prt-t' },
      { slug: 'pittsburgh-wood-street', tiempo: 2, linea: 'red', tipo: 'prt-t' },
    ],
  },
  'pittsburgh-wood-street': {
    ciudad: 'pittsburgh',
    nombre: 'Wood Street',
    lineas: ['red'],
    adyacentes: [
      { slug: 'pittsburgh-fifth-ave', tiempo: 2, linea: 'red', tipo: 'prt-t' },
      { slug: 'pittsburgh-smithfield-street', tiempo: 2, linea: 'red', tipo: 'prt-t' },
    ],
  },
  'pittsburgh-smithfield-street': {
    ciudad: 'pittsburgh',
    nombre: 'Smithfield Street',
    lineas: ['red'],
    adyacentes: [
      { slug: 'pittsburgh-wood-street', tiempo: 2, linea: 'red', tipo: 'prt-t' },
      { slug: 'pittsburgh-steel-plaza', tiempo: 2, linea: 'red', tipo: 'prt-t' },
    ],
  },
  'pittsburgh-steel-plaza': {
    ciudad: 'pittsburgh',
    nombre: 'Steel Plaza',
    lineas: ['red', 'blue', 'silver'],
    adyacentes: [
      { slug: 'pittsburgh-smithfield-street', tiempo: 2, linea: 'red', tipo: 'prt-t' },
      { slug: 'pittsburgh-station-square', tiempo: 2, linea: 'red', tipo: 'prt-t' },
      { slug: 'pittsburgh-gateway-center', tiempo: 3, linea: 'blue', tipo: 'prt-t' },
      { slug: 'pittsburgh-station-square', tiempo: 3, linea: 'silver', tipo: 'prt-t' },
    ],
  },
  'pittsburgh-station-square': {
    ciudad: 'pittsburgh',
    nombre: 'Station Square',
    lineas: ['red', 'silver'],
    adyacentes: [
      { slug: 'pittsburgh-steel-plaza', tiempo: 2, linea: 'red', tipo: 'prt-t' },
      { slug: 'pittsburgh-dormont', tiempo: 3, linea: 'silver', tipo: 'prt-t' },
    ],
  },
  'pittsburgh-south-hills-village': {
    ciudad: 'pittsburgh',
    nombre: 'South Hills Village',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'pittsburgh-castle-shannon', tiempo: 3, linea: 'blue', tipo: 'prt-t' },
    ],
  },
  'pittsburgh-castle-shannon': {
    ciudad: 'pittsburgh',
    nombre: 'Castle Shannon',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'pittsburgh-south-hills-village', tiempo: 3, linea: 'blue', tipo: 'prt-t' },
      { slug: 'pittsburgh-bank-street', tiempo: 3, linea: 'blue', tipo: 'prt-t' },
    ],
  },
  'pittsburgh-bank-street': {
    ciudad: 'pittsburgh',
    nombre: 'Bank Street',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'pittsburgh-castle-shannon', tiempo: 3, linea: 'blue', tipo: 'prt-t' },
      { slug: 'pittsburgh-overbrook', tiempo: 3, linea: 'blue', tipo: 'prt-t' },
    ],
  },
  'pittsburgh-overbrook': {
    ciudad: 'pittsburgh',
    nombre: 'Overbrook Junction',
    lineas: ['blue', 'silver'],
    adyacentes: [
      { slug: 'pittsburgh-bank-street', tiempo: 3, linea: 'blue', tipo: 'prt-t' },
      { slug: 'pittsburgh-gateway-center', tiempo: 4, linea: 'blue', tipo: 'prt-t' },
      { slug: 'pittsburgh-dormont', tiempo: 3, linea: 'silver', tipo: 'prt-t' },
    ],
  },
  'pittsburgh-gateway-center': {
    ciudad: 'pittsburgh',
    nombre: 'Gateway Center',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'pittsburgh-overbrook', tiempo: 4, linea: 'blue', tipo: 'prt-t' },
      { slug: 'pittsburgh-gateway', tiempo: 2, linea: 'blue', tipo: 'prt-t' },
    ],
  },
  'pittsburgh-gateway': {
    ciudad: 'pittsburgh',
    nombre: 'Gateway',
    lineas: ['red', 'blue'],
    adyacentes: [
      { slug: 'pittsburgh-gateway-center', tiempo: 2, linea: 'blue', tipo: 'prt-t' },
      { slug: 'pittsburgh-steel-plaza', tiempo: 2, linea: 'red', tipo: 'prt-t' },
    ],
  },
  'pittsburgh-dormont': {
    ciudad: 'pittsburgh',
    nombre: 'Dormont',
    lineas: ['silver'],
    adyacentes: [
      { slug: 'pittsburgh-overbrook', tiempo: 3, linea: 'silver', tipo: 'prt-t' },
      { slug: 'pittsburgh-station-square', tiempo: 3, linea: 'silver', tipo: 'prt-t' },
    ],
  },
};
