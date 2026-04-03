export const grafoSanJose = {
  'san-jose-baypointe': {
    ciudad: 'san-jose',
    nombre: 'Baypointe',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'san-jose-cisco-way', tiempo: 3, linea: 'blue', tipo: 'vta' },
    ],
  },
  'san-jose-cisco-way': {
    ciudad: 'san-jose',
    nombre: 'Cisco Way',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'san-jose-baypointe', tiempo: 3, linea: 'blue', tipo: 'vta' },
      { slug: 'san-jose-milpitas', tiempo: 3, linea: 'blue', tipo: 'vta' },
    ],
  },
  'san-jose-milpitas': {
    ciudad: 'san-jose',
    nombre: 'Milpitas',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'san-jose-cisco-way', tiempo: 3, linea: 'blue', tipo: 'vta' },
      { slug: 'san-jose-great-mall', tiempo: 3, linea: 'blue', tipo: 'vta' },
    ],
  },
  'san-jose-great-mall': {
    ciudad: 'san-jose',
    nombre: 'Great Mall',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'san-jose-milpitas', tiempo: 3, linea: 'blue', tipo: 'vta' },
      { slug: 'san-jose-montague', tiempo: 3, linea: 'blue', tipo: 'vta' },
    ],
  },
  'san-jose-montague': {
    ciudad: 'san-jose',
    nombre: 'Montague',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'san-jose-great-mall', tiempo: 3, linea: 'blue', tipo: 'vta' },
      { slug: 'san-jose-component', tiempo: 3, linea: 'blue', tipo: 'vta' },
    ],
  },
  'san-jose-component': {
    ciudad: 'san-jose',
    nombre: 'Component',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'san-jose-montague', tiempo: 3, linea: 'blue', tipo: 'vta' },
      { slug: 'san-jose-karina', tiempo: 3, linea: 'blue', tipo: 'vta' },
    ],
  },
  'san-jose-karina': {
    ciudad: 'san-jose',
    nombre: 'Karina',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'san-jose-component', tiempo: 3, linea: 'blue', tipo: 'vta' },
      { slug: 'san-jose-metro-airport', tiempo: 3, linea: 'blue', tipo: 'vta' },
    ],
  },
  'san-jose-metro-airport': {
    ciudad: 'san-jose',
    nombre: 'Metro Airport',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'san-jose-karina', tiempo: 3, linea: 'blue', tipo: 'vta' },
      { slug: 'san-jose-gish', tiempo: 3, linea: 'blue', tipo: 'vta' },
    ],
  },
  'san-jose-gish': {
    ciudad: 'san-jose',
    nombre: 'Gish',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'san-jose-metro-airport', tiempo: 3, linea: 'blue', tipo: 'vta' },
      { slug: 'san-jose-civic-center', tiempo: 3, linea: 'blue', tipo: 'vta' },
    ],
  },
  'san-jose-civic-center': {
    ciudad: 'san-jose',
    nombre: 'Civic Center',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'san-jose-gish', tiempo: 3, linea: 'blue', tipo: 'vta' },
      { slug: 'san-jose-japantown', tiempo: 3, linea: 'blue', tipo: 'vta' },
    ],
  },
  'san-jose-japantown': {
    ciudad: 'san-jose',
    nombre: 'Japantown',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'san-jose-civic-center', tiempo: 3, linea: 'blue', tipo: 'vta' },
      { slug: 'san-jose-st-james', tiempo: 3, linea: 'blue', tipo: 'vta' },
    ],
  },
  'san-jose-st-james': {
    ciudad: 'san-jose',
    nombre: 'St James',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'san-jose-japantown', tiempo: 3, linea: 'blue', tipo: 'vta' },
      { slug: 'san-jose-santa-clara', tiempo: 3, linea: 'blue', tipo: 'vta' },
    ],
  },
  'san-jose-santa-clara': {
    ciudad: 'san-jose',
    nombre: 'Santa Clara',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'san-jose-st-james', tiempo: 3, linea: 'blue', tipo: 'vta' },
      { slug: 'san-jose-san-fernando', tiempo: 3, linea: 'blue', tipo: 'vta' },
    ],
  },
  'san-jose-san-fernando': {
    ciudad: 'san-jose',
    nombre: 'San Fernando',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'san-jose-santa-clara', tiempo: 3, linea: 'blue', tipo: 'vta' },
      { slug: 'san-jose-convention-center', tiempo: 3, linea: 'blue', tipo: 'vta' },
    ],
  },
  'san-jose-convention-center': {
    ciudad: 'san-jose',
    nombre: 'Convention Center',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'san-jose-san-fernando', tiempo: 3, linea: 'blue', tipo: 'vta' },
      { slug: 'san-jose-paseo-de-san-antonio', tiempo: 3, linea: 'blue', tipo: 'vta' },
    ],
  },
  'san-jose-paseo-de-san-antonio': {
    ciudad: 'san-jose',
    nombre: 'Paseo De San Antonio',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'san-jose-convention-center', tiempo: 3, linea: 'blue', tipo: 'vta' },
      { slug: 'san-jose-virginia', tiempo: 3, linea: 'blue', tipo: 'vta' },
    ],
  },
  'san-jose-virginia': {
    ciudad: 'san-jose',
    nombre: 'Virginia',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'san-jose-paseo-de-san-antonio', tiempo: 3, linea: 'blue', tipo: 'vta' },
      { slug: 'san-jose-tamien', tiempo: 3, linea: 'blue', tipo: 'vta' },
    ],
  },
  'san-jose-tamien': {
    ciudad: 'san-jose',
    nombre: 'Tamien',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'san-jose-virginia', tiempo: 3, linea: 'blue', tipo: 'vta' },
      { slug: 'san-jose-curtner', tiempo: 3, linea: 'blue', tipo: 'vta' },
    ],
  },
  'san-jose-curtner': {
    ciudad: 'san-jose',
    nombre: 'Curtner',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'san-jose-tamien', tiempo: 3, linea: 'blue', tipo: 'vta' },
      { slug: 'san-jose-santa-teresa', tiempo: 3, linea: 'blue', tipo: 'vta' },
    ],
  },
  'san-jose-santa-teresa': {
    ciudad: 'san-jose',
    nombre: 'Santa Teresa',
    lineas: ["blue"],
    adyacentes: [
      { slug: 'san-jose-curtner', tiempo: 3, linea: 'blue', tipo: 'vta' },
    ],
  },
  'san-jose-old-ironsides': {
    ciudad: 'san-jose',
    nombre: 'Old Ironsides',
    lineas: ["green"],
    adyacentes: [
      { slug: 'san-jose-great-america', tiempo: 3, linea: 'green', tipo: 'vta' },
    ],
  },
  'san-jose-great-america': {
    ciudad: 'san-jose',
    nombre: 'Great America',
    lineas: ["green"],
    adyacentes: [
      { slug: 'san-jose-old-ironsides', tiempo: 3, linea: 'green', tipo: 'vta' },
      { slug: 'san-jose-lick-mill', tiempo: 3, linea: 'green', tipo: 'vta' },
    ],
  },
  'san-jose-lick-mill': {
    ciudad: 'san-jose',
    nombre: 'Lick Mill',
    lineas: ["green"],
    adyacentes: [
      { slug: 'san-jose-great-america', tiempo: 3, linea: 'green', tipo: 'vta' },
      { slug: 'san-jose-champion', tiempo: 3, linea: 'green', tipo: 'vta' },
    ],
  },
  'san-jose-champion': {
    ciudad: 'san-jose',
    nombre: 'Champion',
    lineas: ["green"],
    adyacentes: [
      { slug: 'san-jose-lick-mill', tiempo: 3, linea: 'green', tipo: 'vta' },
      { slug: 'san-jose-bonaventura', tiempo: 3, linea: 'green', tipo: 'vta' },
    ],
  },
  'san-jose-bonaventura': {
    ciudad: 'san-jose',
    nombre: 'Bonaventura',
    lineas: ["green"],
    adyacentes: [
      { slug: 'san-jose-champion', tiempo: 3, linea: 'green', tipo: 'vta' },
      { slug: 'san-jose-orchard', tiempo: 3, linea: 'green', tipo: 'vta' },
    ],
  },
  'san-jose-orchard': {
    ciudad: 'san-jose',
    nombre: 'Orchard',
    lineas: ["green"],
    adyacentes: [
      { slug: 'san-jose-bonaventura', tiempo: 3, linea: 'green', tipo: 'vta' },
      { slug: 'san-jose-river-oaks', tiempo: 3, linea: 'green', tipo: 'vta' },
    ],
  },
  'san-jose-river-oaks': {
    ciudad: 'san-jose',
    nombre: 'River Oaks',
    lineas: ["green"],
    adyacentes: [
      { slug: 'san-jose-orchard', tiempo: 3, linea: 'green', tipo: 'vta' },
      { slug: 'san-jose-tasman', tiempo: 3, linea: 'green', tipo: 'vta' },
    ],
  },
  'san-jose-tasman': {
    ciudad: 'san-jose',
    nombre: 'Tasman',
    lineas: ["green"],
    adyacentes: [
      { slug: 'san-jose-river-oaks', tiempo: 3, linea: 'green', tipo: 'vta' },
      { slug: 'san-jose-bayshore-nasa', tiempo: 3, linea: 'green', tipo: 'vta' },
    ],
  },
  'san-jose-bayshore-nasa': {
    ciudad: 'san-jose',
    nombre: 'Bayshore Nasa',
    lineas: ["green"],
    adyacentes: [
      { slug: 'san-jose-tasman', tiempo: 3, linea: 'green', tipo: 'vta' },
      { slug: 'san-jose-moffett-park', tiempo: 3, linea: 'green', tipo: 'vta' },
    ],
  },
  'san-jose-moffett-park': {
    ciudad: 'san-jose',
    nombre: 'Moffett Park',
    lineas: ["green"],
    adyacentes: [
      { slug: 'san-jose-bayshore-nasa', tiempo: 3, linea: 'green', tipo: 'vta' },
      { slug: 'san-jose-lockheed-martin', tiempo: 3, linea: 'green', tipo: 'vta' },
    ],
  },
  'san-jose-lockheed-martin': {
    ciudad: 'san-jose',
    nombre: 'Lockheed Martin',
    lineas: ["green"],
    adyacentes: [
      { slug: 'san-jose-moffett-park', tiempo: 3, linea: 'green', tipo: 'vta' },
      { slug: 'san-jose-borregas', tiempo: 3, linea: 'green', tipo: 'vta' },
    ],
  },
  'san-jose-borregas': {
    ciudad: 'san-jose',
    nombre: 'Borregas',
    lineas: ["green"],
    adyacentes: [
      { slug: 'san-jose-lockheed-martin', tiempo: 3, linea: 'green', tipo: 'vta' },
      { slug: 'san-jose-crossman', tiempo: 3, linea: 'green', tipo: 'vta' },
    ],
  },
  'san-jose-crossman': {
    ciudad: 'san-jose',
    nombre: 'Crossman',
    lineas: ["green"],
    adyacentes: [
      { slug: 'san-jose-borregas', tiempo: 3, linea: 'green', tipo: 'vta' },
      { slug: 'san-jose-fair-oaks', tiempo: 3, linea: 'green', tipo: 'vta' },
    ],
  },
  'san-jose-fair-oaks': {
    ciudad: 'san-jose',
    nombre: 'Fair Oaks',
    lineas: ["green"],
    adyacentes: [
      { slug: 'san-jose-crossman', tiempo: 3, linea: 'green', tipo: 'vta' },
      { slug: 'san-jose-winchester', tiempo: 3, linea: 'green', tipo: 'vta' },
    ],
  },
  'san-jose-winchester': {
    ciudad: 'san-jose',
    nombre: 'Winchester',
    lineas: ["green"],
    adyacentes: [
      { slug: 'san-jose-fair-oaks', tiempo: 3, linea: 'green', tipo: 'vta' },
    ],
  },
  'san-jose-mountain-view': {
    ciudad: 'san-jose',
    nombre: 'Mountain View',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'san-jose-whisman', tiempo: 3, linea: 'orange', tipo: 'vta' },
    ],
  },
  'san-jose-whisman': {
    ciudad: 'san-jose',
    nombre: 'Whisman',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'san-jose-mountain-view', tiempo: 3, linea: 'orange', tipo: 'vta' },
      { slug: 'san-jose-middlefield', tiempo: 3, linea: 'orange', tipo: 'vta' },
    ],
  },
  'san-jose-middlefield': {
    ciudad: 'san-jose',
    nombre: 'Middlefield',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'san-jose-whisman', tiempo: 3, linea: 'orange', tipo: 'vta' },
      { slug: 'san-jose-bayshore', tiempo: 3, linea: 'orange', tipo: 'vta' },
    ],
  },
  'san-jose-bayshore': {
    ciudad: 'san-jose',
    nombre: 'Bayshore',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'san-jose-middlefield', tiempo: 3, linea: 'orange', tipo: 'vta' },
      { slug: 'san-jose-reamwood', tiempo: 3, linea: 'orange', tipo: 'vta' },
    ],
  },
  'san-jose-reamwood': {
    ciudad: 'san-jose',
    nombre: 'Reamwood',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'san-jose-bayshore', tiempo: 3, linea: 'orange', tipo: 'vta' },
      { slug: 'san-jose-old-ironsides-o', tiempo: 3, linea: 'orange', tipo: 'vta' },
    ],
  },
  'san-jose-old-ironsides-o': {
    ciudad: 'san-jose',
    nombre: 'Old Ironsides O',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'san-jose-reamwood', tiempo: 3, linea: 'orange', tipo: 'vta' },
      { slug: 'san-jose-river-oaks-o', tiempo: 3, linea: 'orange', tipo: 'vta' },
    ],
  },
  'san-jose-river-oaks-o': {
    ciudad: 'san-jose',
    nombre: 'River Oaks O',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'san-jose-old-ironsides-o', tiempo: 3, linea: 'orange', tipo: 'vta' },
      { slug: 'san-jose-i880', tiempo: 3, linea: 'orange', tipo: 'vta' },
    ],
  },
  'san-jose-i880': {
    ciudad: 'san-jose',
    nombre: 'I880',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'san-jose-river-oaks-o', tiempo: 3, linea: 'orange', tipo: 'vta' },
      { slug: 'san-jose-milpitas-o', tiempo: 3, linea: 'orange', tipo: 'vta' },
    ],
  },
  'san-jose-milpitas-o': {
    ciudad: 'san-jose',
    nombre: 'Milpitas O',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'san-jose-i880', tiempo: 3, linea: 'orange', tipo: 'vta' },
      { slug: 'san-jose-cropley', tiempo: 3, linea: 'orange', tipo: 'vta' },
    ],
  },
  'san-jose-cropley': {
    ciudad: 'san-jose',
    nombre: 'Cropley',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'san-jose-milpitas-o', tiempo: 3, linea: 'orange', tipo: 'vta' },
      { slug: 'san-jose-hostetter', tiempo: 3, linea: 'orange', tipo: 'vta' },
    ],
  },
  'san-jose-hostetter': {
    ciudad: 'san-jose',
    nombre: 'Hostetter',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'san-jose-cropley', tiempo: 3, linea: 'orange', tipo: 'vta' },
      { slug: 'san-jose-alum-rock', tiempo: 3, linea: 'orange', tipo: 'vta' },
    ],
  },
  'san-jose-alum-rock': {
    ciudad: 'san-jose',
    nombre: 'Alum Rock',
    lineas: ["orange"],
    adyacentes: [
      { slug: 'san-jose-hostetter', tiempo: 3, linea: 'orange', tipo: 'vta' },
    ],
  },
};
