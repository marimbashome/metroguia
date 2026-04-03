export const grafoSacramento = {
  'sacramento-watt-i80': {
    ciudad: 'sacramento',
    nombre: 'Watt/I-80',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'sacramento-watt-manlove', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
    ],
  },
  'sacramento-watt-manlove': {
    ciudad: 'sacramento',
    nombre: 'Watt/Manlove',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'sacramento-watt-i80', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-marconi-arcade', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
    ],
  },
  'sacramento-marconi-arcade': {
    ciudad: 'sacramento',
    nombre: 'Marconi/Arcade',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'sacramento-watt-manlove', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-swanston', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
    ],
  },
  'sacramento-swanston': {
    ciudad: 'sacramento',
    nombre: 'Swanston',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'sacramento-marconi-arcade', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-arden-del-paso', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
    ],
  },
  'sacramento-arden-del-paso': {
    ciudad: 'sacramento',
    nombre: 'Arden/Del Paso',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'sacramento-swanston', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-royal-oaks', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
    ],
  },
  'sacramento-royal-oaks': {
    ciudad: 'sacramento',
    nombre: 'Royal Oaks',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'sacramento-arden-del-paso', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-globe', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
    ],
  },
  'sacramento-globe': {
    ciudad: 'sacramento',
    nombre: 'Globe',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'sacramento-royal-oaks', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-4th-ave-wayne-hultgren', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
    ],
  },
  'sacramento-4th-ave-wayne-hultgren': {
    ciudad: 'sacramento',
    nombre: '4th Ave/Wayne Hultgren',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'sacramento-globe', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-power-inn', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
    ],
  },
  'sacramento-power-inn': {
    ciudad: 'sacramento',
    nombre: 'Power Inn',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'sacramento-4th-ave-wayne-hultgren', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-university-65th', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
    ],
  },
  'sacramento-university-65th': {
    ciudad: 'sacramento',
    nombre: 'University/65th St',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'sacramento-power-inn', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-59th-st', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
    ],
  },
  'sacramento-59th-st': {
    ciudad: 'sacramento',
    nombre: '59th St',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'sacramento-university-65th', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-48th-st', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
    ],
  },
  'sacramento-48th-st': {
    ciudad: 'sacramento',
    nombre: '48th St',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'sacramento-59th-st', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-39th-st', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
    ],
  },
  'sacramento-39th-st': {
    ciudad: 'sacramento',
    nombre: '39th St',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'sacramento-48th-st', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-29th-st', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
    ],
  },
  'sacramento-29th-st': {
    ciudad: 'sacramento',
    nombre: '29th St',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'sacramento-39th-st', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-23rd-st', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
    ],
  },
  'sacramento-23rd-st': {
    ciudad: 'sacramento',
    nombre: '23rd St',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'sacramento-29th-st', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-16th-st', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
    ],
  },
  'sacramento-16th-st': {
    ciudad: 'sacramento',
    nombre: '16th St',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'sacramento-23rd-st', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-cathedral-square-13th', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
    ],
  },
  'sacramento-cathedral-square-13th': {
    ciudad: 'sacramento',
    nombre: 'Cathedral Square/13th St',
    lineas: ['blue', 'gold', 'green'],
    adyacentes: [
      { slug: 'sacramento-16th-st', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-8th-o-capitol', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-8th-o-capitol', tiempo: 2, linea: 'gold', tipo: 'transbordo' },
      { slug: 'sacramento-dos-rios', tiempo: 5, linea: 'green', tipo: 'transbordo' },
    ],
  },
  'sacramento-8th-o-capitol': {
    ciudad: 'sacramento',
    nombre: '8th & O/Capitol',
    lineas: ['blue', 'gold', 'green'],
    adyacentes: [
      { slug: 'sacramento-cathedral-square-13th', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-7th-i-capitol', tiempo: 2, linea: 'blue', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-7th-i-capitol', tiempo: 2, linea: 'gold', tipo: 'transbordo' },
      { slug: 'sacramento-dos-rios', tiempo: 4, linea: 'green', tipo: 'transbordo' },
    ],
  },
  'sacramento-7th-i-capitol': {
    ciudad: 'sacramento',
    nombre: '7th & I/Capitol',
    lineas: ['blue', 'gold', 'green'],
    adyacentes: [
      { slug: 'sacramento-8th-o-capitol', tiempo: 2, linea: 'blue', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-archives-plaza', tiempo: 2, linea: 'blue', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-archives-plaza', tiempo: 2, linea: 'gold', tipo: 'transbordo' },
      { slug: 'sacramento-sacramento-valley-station', tiempo: 3, linea: 'green', tipo: 'transbordo' },
    ],
  },
  'sacramento-archives-plaza': {
    ciudad: 'sacramento',
    nombre: 'Archives Plaza',
    lineas: ['blue', 'gold', 'green'],
    adyacentes: [
      { slug: 'sacramento-7th-i-capitol', tiempo: 2, linea: 'blue', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-st-rose-of-lima', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-sunrise', tiempo: 3, linea: 'gold', tipo: 'transbordo' },
      { slug: 'sacramento-sacramento-valley-station', tiempo: 2, linea: 'green', tipo: 'transbordo' },
    ],
  },
  'sacramento-st-rose-of-lima': {
    ciudad: 'sacramento',
    nombre: 'St Rose of Lima Park',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'sacramento-archives-plaza', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-meadowview', tiempo: 4, linea: 'blue', tipo: 'sacrt-light-rail' },
    ],
  },
  'sacramento-meadowview': {
    ciudad: 'sacramento',
    nombre: 'Meadowview',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'sacramento-st-rose-of-lima', tiempo: 4, linea: 'blue', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-center-pkwy', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
    ],
  },
  'sacramento-center-pkwy': {
    ciudad: 'sacramento',
    nombre: 'Center Pkwy',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'sacramento-meadowview', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-cosumnes-river-college', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
    ],
  },
  'sacramento-cosumnes-river-college': {
    ciudad: 'sacramento',
    nombre: 'Cosumnes River College',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'sacramento-center-pkwy', tiempo: 3, linea: 'blue', tipo: 'sacrt-light-rail' },
    ],
  },
  'sacramento-sacramento-valley-station': {
    ciudad: 'sacramento',
    nombre: 'Sacramento Valley Station',
    lineas: ['gold', 'green'],
    adyacentes: [
      { slug: 'sacramento-7th-i-capitol', tiempo: 3, linea: 'gold', tipo: 'transbordo' },
      { slug: 'sacramento-sunrise', tiempo: 3, linea: 'gold', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-dos-rios', tiempo: 2, linea: 'green', tipo: 'transbordo' },
      { slug: 'sacramento-cathedral-square-13th', tiempo: 5, linea: 'gold', tipo: 'transbordo' },
    ],
  },
  'sacramento-sunrise': {
    ciudad: 'sacramento',
    nombre: 'Sunrise',
    lineas: ['gold'],
    adyacentes: [
      { slug: 'sacramento-sacramento-valley-station', tiempo: 3, linea: 'gold', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-hazel', tiempo: 3, linea: 'gold', tipo: 'sacrt-light-rail' },
    ],
  },
  'sacramento-hazel': {
    ciudad: 'sacramento',
    nombre: 'Hazel',
    lineas: ['gold'],
    adyacentes: [
      { slug: 'sacramento-sunrise', tiempo: 3, linea: 'gold', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-folsom', tiempo: 3, linea: 'gold', tipo: 'sacrt-light-rail' },
    ],
  },
  'sacramento-folsom': {
    ciudad: 'sacramento',
    nombre: 'Folsom',
    lineas: ['gold'],
    adyacentes: [
      { slug: 'sacramento-hazel', tiempo: 3, linea: 'gold', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-historic-folsom', tiempo: 3, linea: 'gold', tipo: 'sacrt-light-rail' },
    ],
  },
  'sacramento-historic-folsom': {
    ciudad: 'sacramento',
    nombre: 'Historic Folsom',
    lineas: ['gold'],
    adyacentes: [
      { slug: 'sacramento-folsom', tiempo: 3, linea: 'gold', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-iron-point', tiempo: 3, linea: 'gold', tipo: 'sacrt-light-rail' },
    ],
  },
  'sacramento-iron-point': {
    ciudad: 'sacramento',
    nombre: 'Iron Point',
    lineas: ['gold'],
    adyacentes: [
      { slug: 'sacramento-historic-folsom', tiempo: 3, linea: 'gold', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-gold-strike', tiempo: 3, linea: 'gold', tipo: 'sacrt-light-rail' },
    ],
  },
  'sacramento-gold-strike': {
    ciudad: 'sacramento',
    nombre: 'Gold Strike',
    lineas: ['gold'],
    adyacentes: [
      { slug: 'sacramento-iron-point', tiempo: 3, linea: 'gold', tipo: 'sacrt-light-rail' },
    ],
  },
  'sacramento-township-9': {
    ciudad: 'sacramento',
    nombre: 'Township 9',
    lineas: ['green'],
    adyacentes: [
      { slug: 'sacramento-richards-blvd', tiempo: 4, linea: 'green', tipo: 'sacrt-light-rail' },
    ],
  },
  'sacramento-richards-blvd': {
    ciudad: 'sacramento',
    nombre: 'Richards Blvd',
    lineas: ['green'],
    adyacentes: [
      { slug: 'sacramento-township-9', tiempo: 4, linea: 'green', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-dos-rios', tiempo: 3, linea: 'green', tipo: 'sacrt-light-rail' },
    ],
  },
  'sacramento-dos-rios': {
    ciudad: 'sacramento',
    nombre: 'Dos Rios',
    lineas: ['green'],
    adyacentes: [
      { slug: 'sacramento-richards-blvd', tiempo: 3, linea: 'green', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-sacramento-valley-station', tiempo: 2, linea: 'green', tipo: 'sacrt-light-rail' },
      { slug: 'sacramento-cathedral-square-13th', tiempo: 5, linea: 'green', tipo: 'transbordo' },
    ],
  },
};
