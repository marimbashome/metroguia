export const grafoPhoenix = {
  'phoenix-19th-ave-montebello': {
    ciudad: 'phoenix',
    nombre: '19th Ave/Montebello',
    lineas: ['light-rail'],
    adyacentes: [
      { slug: 'phoenix-24th-ave-thomas', tiempo: 4, linea: 'light-rail', tipo: 'valley-metro' },
    ],
  },
  'phoenix-24th-ave-thomas': {
    ciudad: 'phoenix',
    nombre: '24th Ave/Thomas',
    lineas: ['light-rail'],
    adyacentes: [
      { slug: 'phoenix-19th-ave-montebello', tiempo: 4, linea: 'light-rail', tipo: 'valley-metro' },
      { slug: 'phoenix-32nd-ave-washington', tiempo: 4, linea: 'light-rail', tipo: 'valley-metro' },
    ],
  },
  'phoenix-32nd-ave-washington': {
    ciudad: 'phoenix',
    nombre: '32nd Ave/Washington',
    lineas: ['light-rail'],
    adyacentes: [
      { slug: 'phoenix-24th-ave-thomas', tiempo: 4, linea: 'light-rail', tipo: 'valley-metro' },
      { slug: 'phoenix-40th-ave-washington', tiempo: 4, linea: 'light-rail', tipo: 'valley-metro' },
    ],
  },
  'phoenix-40th-ave-washington': {
    ciudad: 'phoenix',
    nombre: '40th Ave/Washington',
    lineas: ['light-rail'],
    adyacentes: [
      { slug: 'phoenix-32nd-ave-washington', tiempo: 4, linea: 'light-rail', tipo: 'valley-metro' },
      { slug: 'phoenix-48th-ave-washington', tiempo: 3, linea: 'light-rail', tipo: 'valley-metro' },
    ],
  },
  'phoenix-48th-ave-washington': {
    ciudad: 'phoenix',
    nombre: '48th Ave/Washington',
    lineas: ['light-rail'],
    adyacentes: [
      { slug: 'phoenix-40th-ave-washington', tiempo: 3, linea: 'light-rail', tipo: 'valley-metro' },
      { slug: 'phoenix-56th-ave-washington', tiempo: 3, linea: 'light-rail', tipo: 'valley-metro' },
    ],
  },
  'phoenix-56th-ave-washington': {
    ciudad: 'phoenix',
    nombre: '56th Ave/Washington',
    lineas: ['light-rail'],
    adyacentes: [
      { slug: 'phoenix-48th-ave-washington', tiempo: 3, linea: 'light-rail', tipo: 'valley-metro' },
      { slug: 'phoenix-central-avenue', tiempo: 5, linea: 'light-rail', tipo: 'valley-metro' },
    ],
  },
  'phoenix-central-avenue': {
    ciudad: 'phoenix',
    nombre: 'Central Avenue',
    lineas: ['light-rail'],
    adyacentes: [
      { slug: 'phoenix-56th-ave-washington', tiempo: 5, linea: 'light-rail', tipo: 'valley-metro' },
      { slug: 'phoenix-metro-center-drive', tiempo: 3, linea: 'light-rail', tipo: 'valley-metro' },
    ],
  },
  'phoenix-metro-center-drive': {
    ciudad: 'phoenix',
    nombre: 'Metro Center Drive',
    lineas: ['light-rail'],
    adyacentes: [
      { slug: 'phoenix-central-avenue', tiempo: 3, linea: 'light-rail', tipo: 'valley-metro' },
      { slug: 'phoenix-jefferson-street', tiempo: 3, linea: 'light-rail', tipo: 'valley-metro' },
    ],
  },
  'phoenix-jefferson-street': {
    ciudad: 'phoenix',
    nombre: 'Jefferson Street',
    lineas: ['light-rail'],
    adyacentes: [
      { slug: 'phoenix-metro-center-drive', tiempo: 3, linea: 'light-rail', tipo: 'valley-metro' },
      { slug: 'phoenix-washington-street', tiempo: 3, linea: 'light-rail', tipo: 'valley-metro' },
    ],
  },
  'phoenix-washington-street': {
    ciudad: 'phoenix',
    nombre: 'Washington Street',
    lineas: ['light-rail'],
    adyacentes: [
      { slug: 'phoenix-jefferson-street', tiempo: 3, linea: 'light-rail', tipo: 'valley-metro' },
      { slug: 'phoenix-camelback-road', tiempo: 4, linea: 'light-rail', tipo: 'valley-metro' },
    ],
  },
  'phoenix-camelback-road': {
    ciudad: 'phoenix',
    nombre: 'Camelback Road',
    lineas: ['light-rail'],
    adyacentes: [
      { slug: 'phoenix-washington-street', tiempo: 4, linea: 'light-rail', tipo: 'valley-metro' },
      { slug: 'phoenix-highland-avenue', tiempo: 3, linea: 'light-rail', tipo: 'valley-metro' },
    ],
  },
  'phoenix-highland-avenue': {
    ciudad: 'phoenix',
    nombre: 'Highland Avenue',
    lineas: ['light-rail'],
    adyacentes: [
      { slug: 'phoenix-camelback-road', tiempo: 3, linea: 'light-rail', tipo: 'valley-metro' },
      { slug: 'phoenix-thomas-road', tiempo: 3, linea: 'light-rail', tipo: 'valley-metro' },
    ],
  },
  'phoenix-thomas-road': {
    ciudad: 'phoenix',
    nombre: 'Thomas Road',
    lineas: ['light-rail'],
    adyacentes: [
      { slug: 'phoenix-highland-avenue', tiempo: 3, linea: 'light-rail', tipo: 'valley-metro' },
      { slug: 'phoenix-bethany-home-road', tiempo: 3, linea: 'light-rail', tipo: 'valley-metro' },
    ],
  },
  'phoenix-bethany-home-road': {
    ciudad: 'phoenix',
    nombre: 'Bethany Home Road',
    lineas: ['light-rail'],
    adyacentes: [
      { slug: 'phoenix-thomas-road', tiempo: 3, linea: 'light-rail', tipo: 'valley-metro' },
      { slug: 'phoenix-arizona-avenue', tiempo: 3, linea: 'light-rail', tipo: 'valley-metro' },
    ],
  },
  'phoenix-arizona-avenue': {
    ciudad: 'phoenix',
    nombre: 'Arizona Avenue',
    lineas: ['light-rail'],
    adyacentes: [
      { slug: 'phoenix-bethany-home-road', tiempo: 3, linea: 'light-rail', tipo: 'valley-metro' },
      { slug: 'phoenix-maryland-avenue', tiempo: 3, linea: 'light-rail', tipo: 'valley-metro' },
    ],
  },
  'phoenix-maryland-avenue': {
    ciudad: 'phoenix',
    nombre: 'Maryland Avenue',
    lineas: ['light-rail'],
    adyacentes: [
      { slug: 'phoenix-arizona-avenue', tiempo: 3, linea: 'light-rail', tipo: 'valley-metro' },
      { slug: 'phoenix-dunlap-avenue', tiempo: 3, linea: 'light-rail', tipo: 'valley-metro' },
    ],
  },
  'phoenix-dunlap-avenue': {
    ciudad: 'phoenix',
    nombre: 'Dunlap Avenue',
    lineas: ['light-rail'],
    adyacentes: [
      { slug: 'phoenix-maryland-avenue', tiempo: 3, linea: 'light-rail', tipo: 'valley-metro' },
      { slug: 'phoenix-city-coliseum', tiempo: 3, linea: 'light-rail', tipo: 'valley-metro' },
    ],
  },
  'phoenix-city-coliseum': {
    ciudad: 'phoenix',
    nombre: 'City Coliseum',
    lineas: ['light-rail'],
    adyacentes: [
      { slug: 'phoenix-dunlap-avenue', tiempo: 3, linea: 'light-rail', tipo: 'valley-metro' },
      { slug: 'phoenix-tempe-main-street', tiempo: 5, linea: 'light-rail', tipo: 'valley-metro' },
    ],
  },
  'phoenix-tempe-main-street': {
    ciudad: 'tempe',
    nombre: 'Tempe Main Street',
    lineas: ['light-rail'],
    adyacentes: [
      { slug: 'phoenix-city-coliseum', tiempo: 5, linea: 'light-rail', tipo: 'valley-metro' },
      { slug: 'phoenix-tempe-university', tiempo: 3, linea: 'light-rail', tipo: 'valley-metro' },
    ],
  },
  'phoenix-tempe-university': {
    ciudad: 'tempe',
    nombre: 'Tempe University',
    lineas: ['light-rail'],
    adyacentes: [
      { slug: 'phoenix-tempe-main-street', tiempo: 3, linea: 'light-rail', tipo: 'valley-metro' },
      { slug: 'phoenix-tempe-tech', tiempo: 3, linea: 'light-rail', tipo: 'valley-metro' },
    ],
  },
  'phoenix-tempe-tech': {
    ciudad: 'tempe',
    nombre: 'Tempe Tech',
    lineas: ['light-rail'],
    adyacentes: [
      { slug: 'phoenix-tempe-university', tiempo: 3, linea: 'light-rail', tipo: 'valley-metro' },
      { slug: 'phoenix-gilbert-signal-butte', tiempo: 4, linea: 'light-rail', tipo: 'valley-metro' },
    ],
  },
  'phoenix-gilbert-signal-butte': {
    ciudad: 'gilbert',
    nombre: 'Signal Butte',
    lineas: ['light-rail'],
    adyacentes: [
      { slug: 'phoenix-tempe-tech', tiempo: 4, linea: 'light-rail', tipo: 'valley-metro' },
      { slug: 'phoenix-gilbert-main-street', tiempo: 4, linea: 'light-rail', tipo: 'valley-metro' },
    ],
  },
  'phoenix-gilbert-main-street': {
    ciudad: 'gilbert',
    nombre: 'Gilbert Downtown',
    lineas: ['light-rail'],
    adyacentes: [
      { slug: 'phoenix-gilbert-signal-butte', tiempo: 4, linea: 'light-rail', tipo: 'valley-metro' },
      { slug: 'phoenix-mesa-main-street', tiempo: 4, linea: 'light-rail', tipo: 'valley-metro' },
    ],
  },
  'phoenix-mesa-main-street': {
    ciudad: 'mesa',
    nombre: 'Mesa Main Street',
    lineas: ['light-rail'],
    adyacentes: [
      { slug: 'phoenix-gilbert-main-street', tiempo: 4, linea: 'light-rail', tipo: 'valley-metro' },
      { slug: 'phoenix-mesa-dr-main-st', tiempo: 3, linea: 'light-rail', tipo: 'valley-metro' },
    ],
  },
  'phoenix-mesa-dr-main-st': {
    ciudad: 'mesa',
    nombre: 'Mesa Dr/Main St',
    lineas: ['light-rail'],
    adyacentes: [
      { slug: 'phoenix-mesa-main-street', tiempo: 3, linea: 'light-rail', tipo: 'valley-metro' },
    ],
  },
};
