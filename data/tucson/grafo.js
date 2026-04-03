export const grafoTucson = {
  'tucson-mercado-district': {
    ciudad: 'tucson',
    nombre: 'Mercado District',
    lineas: ['sun-link-blue'],
    adyacentes: [
      { slug: 'tucson-congress-avenida-del-convento', tiempo: 2, linea: 'sun-link-blue', tipo: 'streetcar' },
    ],
  },
  'tucson-congress-avenida-del-convento': {
    ciudad: 'tucson',
    nombre: 'Congress/Avenida del Convento',
    lineas: ['sun-link-blue'],
    adyacentes: [
      { slug: 'tucson-mercado-district', tiempo: 2, linea: 'sun-link-blue', tipo: 'streetcar' },
      { slug: 'tucson-congress-granada', tiempo: 2, linea: 'sun-link-blue', tipo: 'streetcar' },
    ],
  },
  'tucson-congress-granada': {
    ciudad: 'tucson',
    nombre: 'Congress/Granada',
    lineas: ['sun-link-blue'],
    adyacentes: [
      { slug: 'tucson-congress-avenida-del-convento', tiempo: 2, linea: 'sun-link-blue', tipo: 'streetcar' },
      { slug: 'tucson-stone-congress', tiempo: 2, linea: 'sun-link-blue', tipo: 'streetcar' },
    ],
  },
  'tucson-stone-congress': {
    ciudad: 'tucson',
    nombre: 'Stone/Congress',
    lineas: ['sun-link-blue'],
    adyacentes: [
      { slug: 'tucson-congress-granada', tiempo: 2, linea: 'sun-link-blue', tipo: 'streetcar' },
      { slug: 'tucson-broadway-stone', tiempo: 2, linea: 'sun-link-blue', tipo: 'streetcar' },
    ],
  },
  'tucson-broadway-stone': {
    ciudad: 'tucson',
    nombre: 'Broadway/Stone',
    lineas: ['sun-link-blue'],
    adyacentes: [
      { slug: 'tucson-stone-congress', tiempo: 2, linea: 'sun-link-blue', tipo: 'streetcar' },
      { slug: 'tucson-university-tyndall', tiempo: 2, linea: 'sun-link-blue', tipo: 'streetcar' },
    ],
  },
  'tucson-university-tyndall': {
    ciudad: 'tucson',
    nombre: 'University/Tyndall',
    lineas: ['sun-link-blue'],
    adyacentes: [
      { slug: 'tucson-broadway-stone', tiempo: 2, linea: 'sun-link-blue', tipo: 'streetcar' },
      { slug: 'tucson-university-park', tiempo: 2, linea: 'sun-link-blue', tipo: 'streetcar' },
    ],
  },
  'tucson-university-park': {
    ciudad: 'tucson',
    nombre: 'University/Park',
    lineas: ['sun-link-blue'],
    adyacentes: [
      { slug: 'tucson-university-tyndall', tiempo: 2, linea: 'sun-link-blue', tipo: 'streetcar' },
      { slug: 'tucson-university-highland', tiempo: 2, linea: 'sun-link-blue', tipo: 'streetcar' },
    ],
  },
  'tucson-university-highland': {
    ciudad: 'tucson',
    nombre: 'University/Highland',
    lineas: ['sun-link-blue'],
    adyacentes: [
      { slug: 'tucson-university-park', tiempo: 2, linea: 'sun-link-blue', tipo: 'streetcar' },
      { slug: 'tucson-university-campbell', tiempo: 2, linea: 'sun-link-blue', tipo: 'streetcar' },
    ],
  },
  'tucson-university-campbell': {
    ciudad: 'tucson',
    nombre: 'University/Campbell',
    lineas: ['sun-link-blue'],
    adyacentes: [
      { slug: 'tucson-university-highland', tiempo: 2, linea: 'sun-link-blue', tipo: 'streetcar' },
      { slug: 'tucson-helen-park', tiempo: 2, linea: 'sun-link-blue', tipo: 'streetcar' },
    ],
  },
  'tucson-helen-park': {
    ciudad: 'tucson',
    nombre: 'Helen/Park',
    lineas: ['sun-link-blue'],
    adyacentes: [
      { slug: 'tucson-university-campbell', tiempo: 2, linea: 'sun-link-blue', tipo: 'streetcar' },
      { slug: 'tucson-speedway-park', tiempo: 2, linea: 'sun-link-blue', tipo: 'streetcar' },
    ],
  },
  'tucson-speedway-park': {
    ciudad: 'tucson',
    nombre: 'Speedway/Park',
    lineas: ['sun-link-blue'],
    adyacentes: [
      { slug: 'tucson-helen-park', tiempo: 2, linea: 'sun-link-blue', tipo: 'streetcar' },
      { slug: 'tucson-2nd-st-park', tiempo: 2, linea: 'sun-link-blue', tipo: 'streetcar' },
    ],
  },
  'tucson-2nd-st-park': {
    ciudad: 'tucson',
    nombre: '2nd St/Park',
    lineas: ['sun-link-blue'],
    adyacentes: [
      { slug: 'tucson-speedway-park', tiempo: 2, linea: 'sun-link-blue', tipo: 'streetcar' },
      { slug: 'tucson-6th-st-park', tiempo: 2, linea: 'sun-link-blue', tipo: 'streetcar' },
    ],
  },
  'tucson-6th-st-park': {
    ciudad: 'tucson',
    nombre: '6th St/Park',
    lineas: ['sun-link-blue'],
    adyacentes: [
      { slug: 'tucson-2nd-st-park', tiempo: 2, linea: 'sun-link-blue', tipo: 'streetcar' },
      { slug: 'tucson-ronstadt-transit-center', tiempo: 2, linea: 'sun-link-blue', tipo: 'streetcar' },
    ],
  },
  'tucson-ronstadt-transit-center': {
    ciudad: 'tucson',
    nombre: 'Ronstadt Transit Center',
    lineas: ['sun-link-blue'],
    adyacentes: [
      { slug: 'tucson-6th-st-park', tiempo: 2, linea: 'sun-link-blue', tipo: 'streetcar' },
    ],
  },
};
