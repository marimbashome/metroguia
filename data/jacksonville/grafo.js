export const grafoJacksonville = {
  'jax-convention-center': {
    ciudad: 'jacksonville',
    nombre: 'Convention Center',
    lineas: ['skyway'],
    adyacentes: [
      { slug: 'jax-jefferson', tiempo: 2, linea: 'skyway', tipo: 'skyway' },
    ],
  },
  'jax-jefferson': {
    ciudad: 'jacksonville',
    nombre: 'Jefferson',
    lineas: ['skyway'],
    adyacentes: [
      { slug: 'jax-convention-center', tiempo: 2, linea: 'skyway', tipo: 'skyway' },
      { slug: 'jax-central', tiempo: 2, linea: 'skyway', tipo: 'skyway' },
    ],
  },
  'jax-central': {
    ciudad: 'jacksonville',
    nombre: 'Central',
    lineas: ['skyway'],
    adyacentes: [
      { slug: 'jax-jefferson', tiempo: 2, linea: 'skyway', tipo: 'skyway' },
      { slug: 'jax-hemming-plaza', tiempo: 2, linea: 'skyway', tipo: 'skyway' },
    ],
  },
  'jax-hemming-plaza': {
    ciudad: 'jacksonville',
    nombre: 'Hemming Plaza',
    lineas: ['skyway'],
    adyacentes: [
      { slug: 'jax-central', tiempo: 2, linea: 'skyway', tipo: 'skyway' },
      { slug: 'jax-bay-street', tiempo: 2, linea: 'skyway', tipo: 'skyway' },
    ],
  },
  'jax-bay-street': {
    ciudad: 'jacksonville',
    nombre: 'Bay Street',
    lineas: ['skyway'],
    adyacentes: [
      { slug: 'jax-hemming-plaza', tiempo: 2, linea: 'skyway', tipo: 'skyway' },
      { slug: 'jax-san-marco', tiempo: 3, linea: 'skyway', tipo: 'skyway' },
    ],
  },
  'jax-san-marco': {
    ciudad: 'jacksonville',
    nombre: 'San Marco',
    lineas: ['skyway'],
    adyacentes: [
      { slug: 'jax-bay-street', tiempo: 3, linea: 'skyway', tipo: 'skyway' },
      { slug: 'jax-kings-avenue', tiempo: 2, linea: 'skyway', tipo: 'skyway' },
    ],
  },
  'jax-kings-avenue': {
    ciudad: 'jacksonville',
    nombre: 'Kings Avenue',
    lineas: ['skyway'],
    adyacentes: [
      { slug: 'jax-san-marco', tiempo: 2, linea: 'skyway', tipo: 'skyway' },
      { slug: 'jax-riverplace', tiempo: 2, linea: 'skyway', tipo: 'skyway' },
    ],
  },
  'jax-riverplace': {
    ciudad: 'jacksonville',
    nombre: 'Riverplace',
    lineas: ['skyway'],
    adyacentes: [
      { slug: 'jax-kings-avenue', tiempo: 2, linea: 'skyway', tipo: 'skyway' },
    ],
  },
};
