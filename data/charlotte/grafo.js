export const grafoCharlotte = {
  'charlotte-unc-charlotte-main': {
    ciudad: 'charlotte',
    nombre: 'UNC Charlotte Main',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-north-tryon', tiempo: 3, linea: 'blue', tipo: 'lynx' }
    ]
  },
  'charlotte-north-tryon': {
    ciudad: 'charlotte',
    nombre: 'North Tryon',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-unc-charlotte-main', tiempo: 3, linea: 'blue', tipo: 'lynx' },
      { slug: 'charlotte-36th-street', tiempo: 3, linea: 'blue', tipo: 'lynx' }
    ]
  },
  'charlotte-36th-street': {
    ciudad: 'charlotte',
    nombre: '36th Street',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-north-tryon', tiempo: 3, linea: 'blue', tipo: 'lynx' },
      { slug: 'charlotte-subway', tiempo: 3, linea: 'blue', tipo: 'lynx' }
    ]
  },
  'charlotte-subway': {
    ciudad: 'charlotte',
    nombre: 'Subway',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-36th-street', tiempo: 3, linea: 'blue', tipo: 'lynx' },
      { slug: 'charlotte-25th-street', tiempo: 3, linea: 'blue', tipo: 'lynx' }
    ]
  },
  'charlotte-25th-street': {
    ciudad: 'charlotte',
    nombre: '25th Street',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-subway', tiempo: 3, linea: 'blue', tipo: 'lynx' },
      { slug: 'charlotte-16th-street', tiempo: 3, linea: 'blue', tipo: 'lynx' }
    ]
  },
  'charlotte-16th-street': {
    ciudad: 'charlotte',
    nombre: '16th Street',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-25th-street', tiempo: 3, linea: 'blue', tipo: 'lynx' },
      { slug: 'charlotte-7th-street', tiempo: 3, linea: 'blue', tipo: 'lynx' }
    ]
  },
  'charlotte-7th-street': {
    ciudad: 'charlotte',
    nombre: '7th Street',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-16th-street', tiempo: 3, linea: 'blue', tipo: 'lynx' },
      { slug: 'charlotte-trade-street', tiempo: 3, linea: 'blue', tipo: 'lynx' }
    ]
  },
  'charlotte-trade-street': {
    ciudad: 'charlotte',
    nombre: 'Trade Street',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-7th-street', tiempo: 3, linea: 'blue', tipo: 'lynx' },
      { slug: 'charlotte-stonewall', tiempo: 3, linea: 'blue', tipo: 'lynx' }
    ]
  },
  'charlotte-stonewall': {
    ciudad: 'charlotte',
    nombre: 'Stonewall',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-trade-street', tiempo: 3, linea: 'blue', tipo: 'lynx' },
      { slug: 'charlotte-cvg-arena', tiempo: 3, linea: 'blue', tipo: 'lynx' }
    ]
  },
  'charlotte-cvg-arena': {
    ciudad: 'charlotte',
    nombre: 'CVG Arena',
    lineas: ['blue', 'gold'],
    adyacentes: [
      { slug: 'charlotte-stonewall', tiempo: 3, linea: 'blue', tipo: 'lynx' },
      { slug: 'charlotte-3rd-street', tiempo: 3, linea: 'blue', tipo: 'lynx' },
      { slug: 'charlotte-rosa-parks-place', tiempo: 3, linea: 'gold', tipo: 'citylynx' }
    ]
  },
  'charlotte-3rd-street': {
    ciudad: 'charlotte',
    nombre: '3rd Street',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-cvg-arena', tiempo: 3, linea: 'blue', tipo: 'lynx' },
      { slug: 'charlotte-5th-street', tiempo: 3, linea: 'blue', tipo: 'lynx' }
    ]
  },
  'charlotte-5th-street': {
    ciudad: 'charlotte',
    nombre: '5th Street',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-3rd-street', tiempo: 3, linea: 'blue', tipo: 'lynx' },
      { slug: 'charlotte-9th-street', tiempo: 3, linea: 'blue', tipo: 'lynx' }
    ]
  },
  'charlotte-9th-street': {
    ciudad: 'charlotte',
    nombre: '9th Street',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-5th-street', tiempo: 3, linea: 'blue', tipo: 'lynx' },
      { slug: 'charlotte-10th-street', tiempo: 3, linea: 'blue', tipo: 'lynx' }
    ]
  },
  'charlotte-10th-street': {
    ciudad: 'charlotte',
    nombre: '10th Street',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-9th-street', tiempo: 3, linea: 'blue', tipo: 'lynx' },
      { slug: 'charlotte-12th-street', tiempo: 3, linea: 'blue', tipo: 'lynx' }
    ]
  },
  'charlotte-12th-street': {
    ciudad: 'charlotte',
    nombre: '12th Street',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-10th-street', tiempo: 3, linea: 'blue', tipo: 'lynx' },
      { slug: 'charlotte-15th-street', tiempo: 3, linea: 'blue', tipo: 'lynx' }
    ]
  },
  'charlotte-15th-street': {
    ciudad: 'charlotte',
    nombre: '15th Street',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-12th-street', tiempo: 3, linea: 'blue', tipo: 'lynx' },
      { slug: 'charlotte-18th-street', tiempo: 3, linea: 'blue', tipo: 'lynx' }
    ]
  },
  'charlotte-18th-street': {
    ciudad: 'charlotte',
    nombre: '18th Street',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-15th-street', tiempo: 3, linea: 'blue', tipo: 'lynx' },
      { slug: 'charlotte-21st-street', tiempo: 3, linea: 'blue', tipo: 'lynx' }
    ]
  },
  'charlotte-21st-street': {
    ciudad: 'charlotte',
    nombre: '21st Street',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-18th-street', tiempo: 3, linea: 'blue', tipo: 'lynx' },
      { slug: 'charlotte-25th-street-south', tiempo: 3, linea: 'blue', tipo: 'lynx' }
    ]
  },
  'charlotte-25th-street-south': {
    ciudad: 'charlotte',
    nombre: '25th Street South',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-21st-street', tiempo: 3, linea: 'blue', tipo: 'lynx' },
      { slug: 'charlotte-28th-street', tiempo: 3, linea: 'blue', tipo: 'lynx' }
    ]
  },
  'charlotte-28th-street': {
    ciudad: 'charlotte',
    nombre: '28th Street',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-25th-street-south', tiempo: 3, linea: 'blue', tipo: 'lynx' },
      { slug: 'charlotte-tyvola', tiempo: 3, linea: 'blue', tipo: 'lynx' }
    ]
  },
  'charlotte-tyvola': {
    ciudad: 'charlotte',
    nombre: 'Tyvola',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-28th-street', tiempo: 3, linea: 'blue', tipo: 'lynx' },
      { slug: 'charlotte-bronx-avenue', tiempo: 3, linea: 'blue', tipo: 'lynx' }
    ]
  },
  'charlotte-bronx-avenue': {
    ciudad: 'charlotte',
    nombre: 'Bronx Avenue',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-tyvola', tiempo: 3, linea: 'blue', tipo: 'lynx' },
      { slug: 'charlotte-i485-south-blvd', tiempo: 3, linea: 'blue', tipo: 'lynx' }
    ]
  },
  'charlotte-i485-south-blvd': {
    ciudad: 'charlotte',
    nombre: 'I-485/South Blvd',
    lineas: ['blue'],
    adyacentes: [
      { slug: 'charlotte-bronx-avenue', tiempo: 3, linea: 'blue', tipo: 'lynx' }
    ]
  },
  'charlotte-rosa-parks-place': {
    ciudad: 'charlotte',
    nombre: 'Rosa Parks Place',
    lineas: ['gold'],
    adyacentes: [
      { slug: 'charlotte-cvg-arena', tiempo: 3, linea: 'gold', tipo: 'citylynx' },
      { slug: 'charlotte-mint-tryon', tiempo: 3, linea: 'gold', tipo: 'citylynx' }
    ]
  },
  'charlotte-mint-tryon': {
    ciudad: 'charlotte',
    nombre: 'Mint/Tryon',
    lineas: ['gold'],
    adyacentes: [
      { slug: 'charlotte-rosa-parks-place', tiempo: 3, linea: 'gold', tipo: 'citylynx' },
      { slug: 'charlotte-7th-tryon', tiempo: 3, linea: 'gold', tipo: 'citylynx' }
    ]
  },
  'charlotte-7th-tryon': {
    ciudad: 'charlotte',
    nombre: '7th/Tryon',
    lineas: ['gold'],
    adyacentes: [
      { slug: 'charlotte-mint-tryon', tiempo: 3, linea: 'gold', tipo: 'citylynx' },
      { slug: 'charlotte-11th-tryon', tiempo: 3, linea: 'gold', tipo: 'citylynx' }
    ]
  },
  'charlotte-11th-tryon': {
    ciudad: 'charlotte',
    nombre: '11th/Tryon',
    lineas: ['gold'],
    adyacentes: [
      { slug: 'charlotte-7th-tryon', tiempo: 3, linea: 'gold', tipo: 'citylynx' },
      { slug: 'charlotte-15th-tryon', tiempo: 3, linea: 'gold', tipo: 'citylynx' }
    ]
  },
  'charlotte-15th-tryon': {
    ciudad: 'charlotte',
    nombre: '15th/Tryon',
    lineas: ['gold'],
    adyacentes: [
      { slug: 'charlotte-11th-tryon', tiempo: 3, linea: 'gold', tipo: 'citylynx' },
      { slug: 'charlotte-20th-tryon', tiempo: 3, linea: 'gold', tipo: 'citylynx' }
    ]
  },
  'charlotte-20th-tryon': {
    ciudad: 'charlotte',
    nombre: '20th/Tryon',
    lineas: ['gold'],
    adyacentes: [
      { slug: 'charlotte-15th-tryon', tiempo: 3, linea: 'gold', tipo: 'citylynx' },
      { slug: 'charlotte-25th-tryon', tiempo: 3, linea: 'gold', tipo: 'citylynx' }
    ]
  },
  'charlotte-25th-tryon': {
    ciudad: 'charlotte',
    nombre: '25th/Tryon',
    lineas: ['gold'],
    adyacentes: [
      { slug: 'charlotte-20th-tryon', tiempo: 3, linea: 'gold', tipo: 'citylynx' },
      { slug: 'charlotte-30th-tryon', tiempo: 3, linea: 'gold', tipo: 'citylynx' }
    ]
  },
  'charlotte-30th-tryon': {
    ciudad: 'charlotte',
    nombre: '30th/Tryon',
    lineas: ['gold'],
    adyacentes: [
      { slug: 'charlotte-25th-tryon', tiempo: 3, linea: 'gold', tipo: 'citylynx' },
      { slug: 'charlotte-sunnyside-avenue', tiempo: 3, linea: 'gold', tipo: 'citylynx' }
    ]
  },
  'charlotte-sunnyside-avenue': {
    ciudad: 'charlotte',
    nombre: 'Sunnyside Avenue',
    lineas: ['gold'],
    adyacentes: [
      { slug: 'charlotte-30th-tryon', tiempo: 3, linea: 'gold', tipo: 'citylynx' }
    ]
  }
};
