export const grafoCalgary = {
  'tuscany': {
    ciudad: 'calgary',
    nombre: 'Tuscany',
    lineas: ["red"],
    adyacentes: [
      { slug: 'crowfoot', tiempo: 3, linea: 'red', tipo: 'ctrain' },
    ],
  },
  'crowfoot': {
    ciudad: 'calgary',
    nombre: 'Crowfoot',
    lineas: ["red"],
    adyacentes: [
      { slug: 'tuscany', tiempo: 3, linea: 'red', tipo: 'ctrain' },
      { slug: 'dalhousie', tiempo: 3, linea: 'red', tipo: 'ctrain' },
    ],
  },
  'dalhousie': {
    ciudad: 'calgary',
    nombre: 'Dalhousie',
    lineas: ["red"],
    adyacentes: [
      { slug: 'crowfoot', tiempo: 3, linea: 'red', tipo: 'ctrain' },
      { slug: 'brentwood', tiempo: 3, linea: 'red', tipo: 'ctrain' },
    ],
  },
  'brentwood': {
    ciudad: 'calgary',
    nombre: 'Brentwood',
    lineas: ["red"],
    adyacentes: [
      { slug: 'dalhousie', tiempo: 3, linea: 'red', tipo: 'ctrain' },
      { slug: 'university', tiempo: 3, linea: 'red', tipo: 'ctrain' },
    ],
  },
  'university': {
    ciudad: 'calgary',
    nombre: 'University',
    lineas: ["red"],
    adyacentes: [
      { slug: 'brentwood', tiempo: 3, linea: 'red', tipo: 'ctrain' },
      { slug: 'banff-trail', tiempo: 3, linea: 'red', tipo: 'ctrain' },
    ],
  },
  'banff-trail': {
    ciudad: 'calgary',
    nombre: 'Banff Trail',
    lineas: ["red"],
    adyacentes: [
      { slug: 'university', tiempo: 3, linea: 'red', tipo: 'ctrain' },
      { slug: 'lions-park', tiempo: 3, linea: 'red', tipo: 'ctrain' },
    ],
  },
  'lions-park': {
    ciudad: 'calgary',
    nombre: 'Lions Park',
    lineas: ["red"],
    adyacentes: [
      { slug: 'banff-trail', tiempo: 3, linea: 'red', tipo: 'ctrain' },
      { slug: 'sait-acad-jubilee', tiempo: 3, linea: 'red', tipo: 'ctrain' },
    ],
  },
  'sait-acad-jubilee': {
    ciudad: 'calgary',
    nombre: 'Sait Acad Jubilee',
    lineas: ["red"],
    adyacentes: [
      { slug: 'lions-park', tiempo: 3, linea: 'red', tipo: 'ctrain' },
      { slug: 'sunnyside', tiempo: 3, linea: 'red', tipo: 'ctrain' },
    ],
  },
  'sunnyside': {
    ciudad: 'calgary',
    nombre: 'Sunnyside',
    lineas: ["red"],
    adyacentes: [
      { slug: 'sait-acad-jubilee', tiempo: 3, linea: 'red', tipo: 'ctrain' },
      { slug: 'calgary-city-hall', tiempo: 3, linea: 'red', tipo: 'ctrain' },
    ],
  },
  'calgary-city-hall': {
    ciudad: 'calgary',
    nombre: 'City Hall',
    lineas: ["red"],
    adyacentes: [
      { slug: 'sunnyside', tiempo: 3, linea: 'red', tipo: 'ctrain' },
      { slug: 'erlton-stampede', tiempo: 3, linea: 'red', tipo: 'ctrain' },
      { slug: 'ctrain-olympic-plaza', tiempo: 5, linea: 'blue', tipo: 'transbordo' },
    ],
  },
  'erlton-stampede': {
    ciudad: 'calgary',
    nombre: 'Erlton Stampede',
    lineas: ["red"],
    adyacentes: [
      { slug: 'calgary-city-hall', tiempo: 3, linea: 'red', tipo: 'ctrain' },
      { slug: '39-avenue', tiempo: 3, linea: 'red', tipo: 'ctrain' },
    ],
  },
  '39-avenue': {
    ciudad: 'calgary',
    nombre: '39 Avenue',
    lineas: ["red"],
    adyacentes: [
      { slug: 'erlton-stampede', tiempo: 3, linea: 'red', tipo: 'ctrain' },
      { slug: 'chinook', tiempo: 3, linea: 'red', tipo: 'ctrain' },
    ],
  },
  'chinook': {
    ciudad: 'calgary',
    nombre: 'Chinook',
    lineas: ["red"],
    adyacentes: [
      { slug: '39-avenue', tiempo: 3, linea: 'red', tipo: 'ctrain' },
      { slug: 'heritage', tiempo: 3, linea: 'red', tipo: 'ctrain' },
    ],
  },
  'heritage': {
    ciudad: 'calgary',
    nombre: 'Heritage',
    lineas: ["red"],
    adyacentes: [
      { slug: 'chinook', tiempo: 3, linea: 'red', tipo: 'ctrain' },
      { slug: 'southland', tiempo: 3, linea: 'red', tipo: 'ctrain' },
    ],
  },
  'southland': {
    ciudad: 'calgary',
    nombre: 'Southland',
    lineas: ["red"],
    adyacentes: [
      { slug: 'heritage', tiempo: 3, linea: 'red', tipo: 'ctrain' },
      { slug: 'anderson', tiempo: 3, linea: 'red', tipo: 'ctrain' },
    ],
  },
  'anderson': {
    ciudad: 'calgary',
    nombre: 'Anderson',
    lineas: ["red"],
    adyacentes: [
      { slug: 'southland', tiempo: 3, linea: 'red', tipo: 'ctrain' },
      { slug: 'canyon-meadows', tiempo: 3, linea: 'red', tipo: 'ctrain' },
    ],
  },
  'canyon-meadows': {
    ciudad: 'calgary',
    nombre: 'Canyon Meadows',
    lineas: ["red"],
    adyacentes: [
      { slug: 'anderson', tiempo: 3, linea: 'red', tipo: 'ctrain' },
      { slug: 'fish-creek-lacombe', tiempo: 3, linea: 'red', tipo: 'ctrain' },
    ],
  },
  'fish-creek-lacombe': {
    ciudad: 'calgary',
    nombre: 'Fish Creek Lacombe',
    lineas: ["red"],
    adyacentes: [
      { slug: 'canyon-meadows', tiempo: 3, linea: 'red', tipo: 'ctrain' },
      { slug: 'shawnessy', tiempo: 3, linea: 'red', tipo: 'ctrain' },
    ],
  },
  'shawnessy': {
    ciudad: 'calgary',
    nombre: 'Shawnessy',
    lineas: ["red"],
    adyacentes: [
      { slug: 'fish-creek-lacombe', tiempo: 3, linea: 'red', tipo: 'ctrain' },
      { slug: 'somerset-bridlewood', tiempo: 3, linea: 'red', tipo: 'ctrain' },
    ],
  },
  'somerset-bridlewood': {
    ciudad: 'calgary',
    nombre: 'Somerset Bridlewood',
    lineas: ["red"],
    adyacentes: [
      { slug: 'shawnessy', tiempo: 3, linea: 'red', tipo: 'ctrain' },
      { slug: 'ctrain-downtown-west', tiempo: 3, linea: 'red', tipo: 'ctrain' },
    ],
  },
  'ctrain-downtown-west': {
    ciudad: 'calgary',
    nombre: 'Ctrain Downtown West',
    lineas: ["red"],
    adyacentes: [
      { slug: 'somerset-bridlewood', tiempo: 3, linea: 'red', tipo: 'ctrain' },
      { slug: 'ctrain-1st-street-sw', tiempo: 3, linea: 'red', tipo: 'ctrain' },
    ],
  },
  'ctrain-1st-street-sw': {
    ciudad: 'calgary',
    nombre: 'Ctrain 1st Street Sw',
    lineas: ["red"],
    adyacentes: [
      { slug: 'ctrain-downtown-west', tiempo: 3, linea: 'red', tipo: 'ctrain' },
      { slug: 'ctrain-centre-street', tiempo: 3, linea: 'red', tipo: 'ctrain' },
    ],
  },
  'ctrain-centre-street': {
    ciudad: 'calgary',
    nombre: 'Ctrain Centre Street',
    lineas: ["red"],
    adyacentes: [
      { slug: 'ctrain-1st-street-sw', tiempo: 3, linea: 'red', tipo: 'ctrain' },
      { slug: 'ctrain-city-hall', tiempo: 3, linea: 'red', tipo: 'ctrain' },
    ],
  },
  'ctrain-city-hall': {
    ciudad: 'calgary',
    nombre: 'Ctrain City Hall',
    lineas: ["red"],
    adyacentes: [
      { slug: 'ctrain-centre-street', tiempo: 3, linea: 'red', tipo: 'ctrain' },
    ],
  },
  '69-street': {
    ciudad: 'calgary',
    nombre: '69 Street',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'sirocco', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
    ],
  },
  'sirocco': {
    ciudad: 'calgary',
    nombre: 'Sirocco',
    lineas: ["blue"],
    adyacentes: [
      { slug: '69-street', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
      { slug: 'westbrook', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
    ],
  },
  'westbrook': {
    ciudad: 'calgary',
    nombre: 'Westbrook',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'sirocco', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
      { slug: 'shaganappi-point', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
    ],
  },
  'shaganappi-point': {
    ciudad: 'calgary',
    nombre: 'Shaganappi Point',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'westbrook', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
      { slug: 'sunalta', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
    ],
  },
  'sunalta': {
    ciudad: 'calgary',
    nombre: 'Sunalta',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'shaganappi-point', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
      { slug: 'downtown-west-kerby', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
    ],
  },
  'downtown-west-kerby': {
    ciudad: 'calgary',
    nombre: 'Downtown West Kerby',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'sunalta', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
      { slug: 'ctrain-3rd-street-sw', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
    ],
  },
  'ctrain-3rd-street-sw': {
    ciudad: 'calgary',
    nombre: 'Ctrain 3rd Street Sw',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'downtown-west-kerby', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
      { slug: 'ctrain-olympic-plaza', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
    ],
  },
  'ctrain-olympic-plaza': {
    ciudad: 'calgary',
    nombre: 'Ctrain Olympic Plaza',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'ctrain-3rd-street-sw', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
      { slug: 'bridgeland-memorial', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
      { slug: 'calgary-city-hall', tiempo: 5, linea: 'red', tipo: 'transbordo' },
    ],
  },
  'bridgeland-memorial': {
    ciudad: 'calgary',
    nombre: 'Bridgeland Memorial',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'ctrain-olympic-plaza', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
      { slug: 'zoo', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
    ],
  },
  'zoo': {
    ciudad: 'calgary',
    nombre: 'Zoo',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'bridgeland-memorial', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
      { slug: 'barlow-max-bell', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
    ],
  },
  'barlow-max-bell': {
    ciudad: 'calgary',
    nombre: 'Barlow Max Bell',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'zoo', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
      { slug: 'franklin', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
    ],
  },
  'franklin': {
    ciudad: 'calgary',
    nombre: 'Franklin',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'barlow-max-bell', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
      { slug: 'marlborough', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
    ],
  },
  'marlborough': {
    ciudad: 'calgary',
    nombre: 'Marlborough',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'franklin', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
      { slug: 'marlborough-park', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
    ],
  },
  'marlborough-park': {
    ciudad: 'calgary',
    nombre: 'Marlborough Park',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'marlborough', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
      { slug: 'rundle', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
    ],
  },
  'rundle': {
    ciudad: 'calgary',
    nombre: 'Rundle',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'marlborough-park', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
      { slug: 'whitehorn', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
    ],
  },
  'whitehorn': {
    ciudad: 'calgary',
    nombre: 'Whitehorn',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'rundle', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
      { slug: 'mcknight-westwinds', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
    ],
  },
  'mcknight-westwinds': {
    ciudad: 'calgary',
    nombre: 'Mcknight Westwinds',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'whitehorn', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
      { slug: 'martindale', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
    ],
  },
  'martindale': {
    ciudad: 'calgary',
    nombre: 'Martindale',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'mcknight-westwinds', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
      { slug: 'saddletowne', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
    ],
  },
  'saddletowne': {
    ciudad: 'calgary',
    nombre: 'Saddletowne',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'martindale', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
      { slug: 'blue-victoria-park', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
    ],
  },
  'blue-victoria-park': {
    ciudad: 'calgary',
    nombre: 'Blue Victoria Park',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'saddletowne', tiempo: 3, linea: 'blue', tipo: 'ctrain' },
    ],
  },
};
