export const grafoStLouis = {
  'st-louis-lambert-airport': {
    ciudad: 'st-louis',
    nombre: 'Lambert Airport',
    lineas: ['red-line'],
    adyacentes: [
      { slug: 'st-louis-normandy', tiempo: 4, linea: 'red-line', tipo: 'metrolink' },
    ],
  },
  'st-louis-normandy': {
    ciudad: 'st-louis',
    nombre: 'Normandy',
    lineas: ['red-line'],
    adyacentes: [
      { slug: 'st-louis-lambert-airport', tiempo: 4, linea: 'red-line', tipo: 'metrolink' },
      { slug: 'st-louis-north-hanley', tiempo: 4, linea: 'red-line', tipo: 'metrolink' },
    ],
  },
  'st-louis-north-hanley': {
    ciudad: 'st-louis',
    nombre: 'North Hanley',
    lineas: ['red-line'],
    adyacentes: [
      { slug: 'st-louis-normandy', tiempo: 4, linea: 'red-line', tipo: 'metrolink' },
      { slug: 'st-louis-rockford', tiempo: 3, linea: 'red-line', tipo: 'metrolink' },
    ],
  },
  'st-louis-rockford': {
    ciudad: 'st-louis',
    nombre: 'Rockford',
    lineas: ['red-line'],
    adyacentes: [
      { slug: 'st-louis-north-hanley', tiempo: 3, linea: 'red-line', tipo: 'metrolink' },
      { slug: 'st-louis-brentwood', tiempo: 3, linea: 'red-line', tipo: 'metrolink' },
    ],
  },
  'st-louis-brentwood': {
    ciudad: 'brentwood',
    nombre: 'Brentwood',
    lineas: ['red-line'],
    adyacentes: [
      { slug: 'st-louis-rockford', tiempo: 3, linea: 'red-line', tipo: 'metrolink' },
      { slug: 'st-louis-lake-forest', tiempo: 3, linea: 'red-line', tipo: 'metrolink' },
    ],
  },
  'st-louis-lake-forest': {
    ciudad: 'st-louis',
    nombre: 'Lake Forest',
    lineas: ['red-line'],
    adyacentes: [
      { slug: 'st-louis-brentwood', tiempo: 3, linea: 'red-line', tipo: 'metrolink' },
      { slug: 'st-louis-wellston', tiempo: 3, linea: 'red-line', tipo: 'metrolink' },
    ],
  },
  'st-louis-wellston': {
    ciudad: 'wellston',
    nombre: 'Wellston',
    lineas: ['red-line'],
    adyacentes: [
      { slug: 'st-louis-lake-forest', tiempo: 3, linea: 'red-line', tipo: 'metrolink' },
      { slug: 'st-louis-delmar', tiempo: 4, linea: 'red-line', tipo: 'metrolink' },
    ],
  },
  'st-louis-delmar': {
    ciudad: 'st-louis',
    nombre: 'Delmar',
    lineas: ['red-line'],
    adyacentes: [
      { slug: 'st-louis-wellston', tiempo: 4, linea: 'red-line', tipo: 'metrolink' },
      { slug: 'st-louis-skinker', tiempo: 3, linea: 'red-line', tipo: 'metrolink' },
    ],
  },
  'st-louis-skinker': {
    ciudad: 'st-louis',
    nombre: 'Skinker',
    lineas: ['red-line'],
    adyacentes: [
      { slug: 'st-louis-delmar', tiempo: 3, linea: 'red-line', tipo: 'metrolink' },
      { slug: 'st-louis-forest-park-southeast', tiempo: 3, linea: 'red-line', tipo: 'metrolink' },
    ],
  },
  'st-louis-forest-park-southeast': {
    ciudad: 'st-louis',
    nombre: 'Forest Park Southeast',
    lineas: ['red-line'],
    adyacentes: [
      { slug: 'st-louis-skinker', tiempo: 3, linea: 'red-line', tipo: 'metrolink' },
      { slug: 'st-louis-central-west-end', tiempo: 3, linea: 'red-line', tipo: 'metrolink' },
    ],
  },
  'st-louis-central-west-end': {
    ciudad: 'st-louis',
    nombre: 'Central West End',
    lineas: ['red-line'],
    adyacentes: [
      { slug: 'st-louis-forest-park-southeast', tiempo: 3, linea: 'red-line', tipo: 'metrolink' },
      { slug: 'st-louis-civic-center', tiempo: 4, linea: 'red-line', tipo: 'metrolink' },
    ],
  },
  'st-louis-civic-center': {
    ciudad: 'st-louis',
    nombre: 'Civic Center',
    lineas: ['red-line', 'blue-line'],
    adyacentes: [
      { slug: 'st-louis-central-west-end', tiempo: 4, linea: 'red-line', tipo: 'metrolink' },
      { slug: 'st-louis-convention-center', tiempo: 3, linea: 'red-line', tipo: 'metrolink' },
      { slug: 'st-louis-barret-station', tiempo: 2, linea: 'blue-line', tipo: 'metrolink' },
    ],
  },
  'st-louis-convention-center': {
    ciudad: 'st-louis',
    nombre: 'Convention Center',
    lineas: ['red-line', 'blue-line'],
    adyacentes: [
      { slug: 'st-louis-civic-center', tiempo: 3, linea: 'red-line', tipo: 'metrolink' },
      { slug: 'st-louis-8th-pine', tiempo: 3, linea: 'red-line', tipo: 'metrolink' },
    ],
  },
  'st-louis-8th-pine': {
    ciudad: 'st-louis',
    nombre: '8th & Pine',
    lineas: ['red-line', 'blue-line'],
    adyacentes: [
      { slug: 'st-louis-convention-center', tiempo: 3, linea: 'red-line', tipo: 'metrolink' },
      { slug: 'st-louis-5th-5th', tiempo: 2, linea: 'red-line', tipo: 'metrolink' },
    ],
  },
  'st-louis-5th-5th': {
    ciudad: 'st-louis',
    nombre: '5th & 5th',
    lineas: ['red-line'],
    adyacentes: [
      { slug: 'st-louis-8th-pine', tiempo: 2, linea: 'red-line', tipo: 'metrolink' },
      { slug: 'st-louis-gateway-arch', tiempo: 3, linea: 'red-line', tipo: 'metrolink' },
    ],
  },
  'st-louis-gateway-arch': {
    ciudad: 'st-louis',
    nombre: 'Gateway Arch',
    lineas: ['red-line'],
    adyacentes: [
      { slug: 'st-louis-5th-5th', tiempo: 3, linea: 'red-line', tipo: 'metrolink' },
      { slug: 'st-louis-emerson-park', tiempo: 4, linea: 'red-line', tipo: 'metrolink' },
    ],
  },
  'st-louis-emerson-park': {
    ciudad: 'st-louis',
    nombre: 'Emerson Park',
    lineas: ['red-line'],
    adyacentes: [
      { slug: 'st-louis-gateway-arch', tiempo: 4, linea: 'red-line', tipo: 'metrolink' },
      { slug: 'st-louis-laclede-station', tiempo: 3, linea: 'red-line', tipo: 'metrolink' },
    ],
  },
  'st-louis-laclede-station': {
    ciudad: 'st-louis',
    nombre: 'Laclede Station',
    lineas: ['red-line'],
    adyacentes: [
      { slug: 'st-louis-emerson-park', tiempo: 3, linea: 'red-line', tipo: 'metrolink' },
      { slug: 'st-louis-shiloh-scott', tiempo: 4, linea: 'red-line', tipo: 'metrolink' },
    ],
  },
  'st-louis-shiloh-scott': {
    ciudad: 'st-louis',
    nombre: 'Shiloh/Scott',
    lineas: ['red-line'],
    adyacentes: [
      { slug: 'st-louis-laclede-station', tiempo: 4, linea: 'red-line', tipo: 'metrolink' },
    ],
  },
  'st-louis-shrewsbury': {
    ciudad: 'shrewsbury',
    nombre: 'Shrewsbury',
    lineas: ['blue-line'],
    adyacentes: [
      { slug: 'st-louis-sunnybrook-hanley', tiempo: 4, linea: 'blue-line', tipo: 'metrolink' },
    ],
  },
  'st-louis-sunnybrook-hanley': {
    ciudad: 'overland',
    nombre: 'Sunnybrook Hanley',
    lineas: ['blue-line'],
    adyacentes: [
      { slug: 'st-louis-shrewsbury', tiempo: 4, linea: 'blue-line', tipo: 'metrolink' },
      { slug: 'st-louis-forbes-hanley', tiempo: 3, linea: 'blue-line', tipo: 'metrolink' },
    ],
  },
  'st-louis-forbes-hanley': {
    ciudad: 'st-louis',
    nombre: 'Forbes/Hanley',
    lineas: ['blue-line'],
    adyacentes: [
      { slug: 'st-louis-sunnybrook-hanley', tiempo: 3, linea: 'blue-line', tipo: 'metrolink' },
      { slug: 'st-louis-bluebird', tiempo: 3, linea: 'blue-line', tipo: 'metrolink' },
    ],
  },
  'st-louis-bluebird': {
    ciudad: 'st-louis',
    nombre: 'Bluebird',
    lineas: ['blue-line'],
    adyacentes: [
      { slug: 'st-louis-forbes-hanley', tiempo: 3, linea: 'blue-line', tipo: 'metrolink' },
      { slug: 'st-louis-parking-garage', tiempo: 4, linea: 'blue-line', tipo: 'metrolink' },
    ],
  },
  'st-louis-parking-garage': {
    ciudad: 'st-louis',
    nombre: 'Parking Garage',
    lineas: ['blue-line'],
    adyacentes: [
      { slug: 'st-louis-bluebird', tiempo: 4, linea: 'blue-line', tipo: 'metrolink' },
      { slug: 'st-louis-washington-park', tiempo: 3, linea: 'blue-line', tipo: 'metrolink' },
    ],
  },
  'st-louis-washington-park': {
    ciudad: 'st-louis',
    nombre: 'Washington Park',
    lineas: ['blue-line'],
    adyacentes: [
      { slug: 'st-louis-parking-garage', tiempo: 3, linea: 'blue-line', tipo: 'metrolink' },
      { slug: 'st-louis-barret-station', tiempo: 3, linea: 'blue-line', tipo: 'metrolink' },
    ],
  },
  'st-louis-barret-station': {
    ciudad: 'st-louis',
    nombre: 'Barret Station',
    lineas: ['blue-line'],
    adyacentes: [
      { slug: 'st-louis-washington-park', tiempo: 3, linea: 'blue-line', tipo: 'metrolink' },
      { slug: 'st-louis-civic-center', tiempo: 2, linea: 'blue-line', tipo: 'metrolink' },
    ],
  },
  'st-louis-fairview-heights': {
    ciudad: 'fairview-heights',
    nombre: 'Fairview Heights',
    lineas: ['blue-line'],
    adyacentes: [
      { slug: 'st-louis-barret-station', tiempo: 5, linea: 'blue-line', tipo: 'metrolink' },
    ],
  },
};
