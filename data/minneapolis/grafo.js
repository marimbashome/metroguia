export const grafoMinneapolis = {
  // BLUE LINE
  'mpls-target-field': {
    ciudad: 'minneapolis',
    nombre: 'Target Field',
    lineas: ['Blue', 'Green'],
    adyacentes: [
      { slug: 'mpls-nicollet-mall', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
      { slug: 'mpls-nicollet-mall', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
    ]
  },
  'mpls-nicollet-mall': {
    ciudad: 'minneapolis',
    nombre: 'Nicollet Mall',
    lineas: ['Blue', 'Green'],
    adyacentes: [
      { slug: 'mpls-target-field', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
      { slug: 'mpls-government-plaza', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
      { slug: 'mpls-union-depot', tiempo: 3, linea: 'Green', tipo: 'transbordo' },
    ]
  },
  'mpls-government-plaza': {
    ciudad: 'minneapolis',
    nombre: 'Government Plaza',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'mpls-nicollet-mall', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
      { slug: 'mpls-lake-street', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
    ]
  },
  'mpls-lake-street': {
    ciudad: 'minneapolis',
    nombre: 'Lake Street',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'mpls-government-plaza', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
      { slug: 'mpls-hiawatha-ave', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
    ]
  },
  'mpls-hiawatha-ave': {
    ciudad: 'minneapolis',
    nombre: 'Hiawatha Ave',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'mpls-lake-street', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
      { slug: 'mpls-ft-snelling', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
    ]
  },
  'mpls-ft-snelling': {
    ciudad: 'minneapolis',
    nombre: 'Ft. Snelling',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'mpls-hiawatha-ave', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
      { slug: 'mpls-mall-of-america', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
    ]
  },
  'mpls-mall-of-america': {
    ciudad: 'minneapolis',
    nombre: 'Mall of America',
    lineas: ['Blue'],
    adyacentes: [
      { slug: 'mpls-ft-snelling', tiempo: 2, linea: 'Blue', tipo: 'metro-transit' },
    ]
  },

  // GREEN LINE
  'mpls-union-depot': {
    ciudad: 'minneapolis',
    nombre: 'Union Depot',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'mpls-central-station', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
      { slug: 'mpls-nicollet-mall', tiempo: 3, linea: 'Blue', tipo: 'transbordo' },
    ]
  },
  'mpls-central-station': {
    ciudad: 'minneapolis',
    nombre: 'Central Station',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'mpls-union-depot', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
      { slug: 'mpls-capitol', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
    ]
  },
  'mpls-capitol': {
    ciudad: 'minneapolis',
    nombre: 'Capitol',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'mpls-central-station', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
      { slug: 'mpls-lexington-hamline', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
    ]
  },
  'mpls-lexington-hamline': {
    ciudad: 'minneapolis',
    nombre: 'Lexington-Hamline',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'mpls-capitol', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
      { slug: 'mpls-dale-university', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
    ]
  },
  'mpls-dale-university': {
    ciudad: 'minneapolis',
    nombre: 'Dale-University',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'mpls-lexington-hamline', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
      { slug: 'mpls-fairview', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
    ]
  },
  'mpls-fairview': {
    ciudad: 'minneapolis',
    nombre: 'Fairview',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'mpls-dale-university', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
      { slug: 'mpls-st-paul-college', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
    ]
  },
  'mpls-st-paul-college': {
    ciudad: 'minneapolis',
    nombre: 'St. Paul College',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'mpls-fairview', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
      { slug: 'mpls-rosedale', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
    ]
  },
  'mpls-rosedale': {
    ciudad: 'minneapolis',
    nombre: 'Rosedale',
    lineas: ['Green'],
    adyacentes: [
      { slug: 'mpls-st-paul-college', tiempo: 2, linea: 'Green', tipo: 'metro-transit' },
    ]
  },
};
