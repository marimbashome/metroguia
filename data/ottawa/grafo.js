export const grafoOttawa = {
  'blair': {
    ciudad: 'ottawa',
    nombre: 'Blair',
    lineas: ["confederation"],
    adyacentes: [
      { slug: 'cyrville', tiempo: 3, linea: 'confederation', tipo: 'o-train' },
    ],
  },
  'cyrville': {
    ciudad: 'ottawa',
    nombre: 'Cyrville',
    lineas: ["confederation"],
    adyacentes: [
      { slug: 'blair', tiempo: 3, linea: 'confederation', tipo: 'o-train' },
      { slug: 'st-laurent', tiempo: 3, linea: 'confederation', tipo: 'o-train' },
    ],
  },
  'st-laurent': {
    ciudad: 'ottawa',
    nombre: 'St Laurent',
    lineas: ["confederation"],
    adyacentes: [
      { slug: 'cyrville', tiempo: 3, linea: 'confederation', tipo: 'o-train' },
      { slug: 'tremblay', tiempo: 3, linea: 'confederation', tipo: 'o-train' },
    ],
  },
  'tremblay': {
    ciudad: 'ottawa',
    nombre: 'Tremblay',
    lineas: ["confederation"],
    adyacentes: [
      { slug: 'st-laurent', tiempo: 3, linea: 'confederation', tipo: 'o-train' },
      { slug: 'hurdman', tiempo: 3, linea: 'confederation', tipo: 'o-train' },
    ],
  },
  'hurdman': {
    ciudad: 'ottawa',
    nombre: 'Hurdman',
    lineas: ["confederation"],
    adyacentes: [
      { slug: 'tremblay', tiempo: 3, linea: 'confederation', tipo: 'o-train' },
      { slug: 'lees', tiempo: 3, linea: 'confederation', tipo: 'o-train' },
    ],
  },
  'lees': {
    ciudad: 'ottawa',
    nombre: 'Lees',
    lineas: ["confederation"],
    adyacentes: [
      { slug: 'hurdman', tiempo: 3, linea: 'confederation', tipo: 'o-train' },
      { slug: 'uottawa', tiempo: 3, linea: 'confederation', tipo: 'o-train' },
    ],
  },
  'uottawa': {
    ciudad: 'ottawa',
    nombre: 'Uottawa',
    lineas: ["confederation"],
    adyacentes: [
      { slug: 'lees', tiempo: 3, linea: 'confederation', tipo: 'o-train' },
      { slug: 'rideau', tiempo: 3, linea: 'confederation', tipo: 'o-train' },
    ],
  },
  'rideau': {
    ciudad: 'ottawa',
    nombre: 'Rideau',
    lineas: ["confederation"],
    adyacentes: [
      { slug: 'uottawa', tiempo: 3, linea: 'confederation', tipo: 'o-train' },
      { slug: 'parliament', tiempo: 3, linea: 'confederation', tipo: 'o-train' },
    ],
  },
  'parliament': {
    ciudad: 'ottawa',
    nombre: 'Parliament',
    lineas: ["confederation"],
    adyacentes: [
      { slug: 'rideau', tiempo: 3, linea: 'confederation', tipo: 'o-train' },
      { slug: 'lyon', tiempo: 3, linea: 'confederation', tipo: 'o-train' },
    ],
  },
  'lyon': {
    ciudad: 'ottawa',
    nombre: 'Lyon',
    lineas: ["confederation"],
    adyacentes: [
      { slug: 'parliament', tiempo: 3, linea: 'confederation', tipo: 'o-train' },
      { slug: 'pimisi', tiempo: 3, linea: 'confederation', tipo: 'o-train' },
    ],
  },
  'pimisi': {
    ciudad: 'ottawa',
    nombre: 'Pimisi',
    lineas: ["confederation"],
    adyacentes: [
      { slug: 'lyon', tiempo: 3, linea: 'confederation', tipo: 'o-train' },
      { slug: 'bayview', tiempo: 3, linea: 'confederation', tipo: 'o-train' },
    ],
  },
  'bayview': {
    ciudad: 'ottawa',
    nombre: 'Bayview',
    lineas: ["confederation"],
    adyacentes: [
      { slug: 'pimisi', tiempo: 3, linea: 'confederation', tipo: 'o-train' },
      { slug: 'tunneys-pasture', tiempo: 3, linea: 'confederation', tipo: 'o-train' },
    ],
  },
  'tunneys-pasture': {
    ciudad: 'ottawa',
    nombre: 'Tunneys Pasture',
    lineas: ["confederation"],
    adyacentes: [
      { slug: 'bayview', tiempo: 3, linea: 'confederation', tipo: 'o-train' },
    ],
  },
  'bayview-trillium': {
    ciudad: 'ottawa',
    nombre: 'Bayview Trillium',
    lineas: ["trillium"],
    adyacentes: [
      { slug: 'mooney-s-bay', tiempo: 3, linea: 'trillium', tipo: 'o-train' },
    ],
  },
  'mooney-s-bay': {
    ciudad: 'ottawa',
    nombre: 'Mooney S Bay',
    lineas: ["trillium"],
    adyacentes: [
      { slug: 'bayview-trillium', tiempo: 3, linea: 'trillium', tipo: 'o-train' },
      { slug: 'greenboro', tiempo: 3, linea: 'trillium', tipo: 'o-train' },
    ],
  },
  'greenboro': {
    ciudad: 'ottawa',
    nombre: 'Greenboro',
    lineas: ["trillium"],
    adyacentes: [
      { slug: 'mooney-s-bay', tiempo: 3, linea: 'trillium', tipo: 'o-train' },
      { slug: 'south-keys', tiempo: 3, linea: 'trillium', tipo: 'o-train' },
    ],
  },
  'south-keys': {
    ciudad: 'ottawa',
    nombre: 'South Keys',
    lineas: ["trillium"],
    adyacentes: [
      { slug: 'greenboro', tiempo: 3, linea: 'trillium', tipo: 'o-train' },
      { slug: 'confederation-heights', tiempo: 3, linea: 'trillium', tipo: 'o-train' },
    ],
  },
  'confederation-heights': {
    ciudad: 'ottawa',
    nombre: 'Confederation Heights',
    lineas: ["trillium"],
    adyacentes: [
      { slug: 'south-keys', tiempo: 3, linea: 'trillium', tipo: 'o-train' },
      { slug: 'walkley', tiempo: 3, linea: 'trillium', tipo: 'o-train' },
    ],
  },
  'walkley': {
    ciudad: 'ottawa',
    nombre: 'Walkley',
    lineas: ["trillium"],
    adyacentes: [
      { slug: 'confederation-heights', tiempo: 3, linea: 'trillium', tipo: 'o-train' },
      { slug: 'pleasant-park', tiempo: 3, linea: 'trillium', tipo: 'o-train' },
    ],
  },
  'pleasant-park': {
    ciudad: 'ottawa',
    nombre: 'Pleasant Park',
    lineas: ["trillium"],
    adyacentes: [
      { slug: 'walkley', tiempo: 3, linea: 'trillium', tipo: 'o-train' },
      { slug: 'carleton', tiempo: 3, linea: 'trillium', tipo: 'o-train' },
    ],
  },
  'carleton': {
    ciudad: 'ottawa',
    nombre: 'Carleton',
    lineas: ["trillium"],
    adyacentes: [
      { slug: 'pleasant-park', tiempo: 3, linea: 'trillium', tipo: 'o-train' },
      { slug: 'carling', tiempo: 3, linea: 'trillium', tipo: 'o-train' },
    ],
  },
  'carling': {
    ciudad: 'ottawa',
    nombre: 'Carling',
    lineas: ["trillium"],
    adyacentes: [
      { slug: 'carleton', tiempo: 3, linea: 'trillium', tipo: 'o-train' },
      { slug: 'limebank', tiempo: 3, linea: 'trillium', tipo: 'o-train' },
    ],
  },
  'limebank': {
    ciudad: 'ottawa',
    nombre: 'Limebank',
    lineas: ["trillium"],
    adyacentes: [
      { slug: 'carling', tiempo: 3, linea: 'trillium', tipo: 'o-train' },
      { slug: 'bowesville', tiempo: 3, linea: 'trillium', tipo: 'o-train' },
    ],
  },
  'bowesville': {
    ciudad: 'ottawa',
    nombre: 'Bowesville',
    lineas: ["trillium"],
    adyacentes: [
      { slug: 'limebank', tiempo: 3, linea: 'trillium', tipo: 'o-train' },
    ],
  },
};
