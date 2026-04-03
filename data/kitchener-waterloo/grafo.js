export const grafoKitchenerWaterloo = {
  'kitchener-waterloo-conestoga': {
    ciudad: 'kitchener-waterloo',
    nombre: 'Conestoga Station',
    lineas: ['ion-red'],
    adyacentes: [
      { slug: 'kitchener-waterloo-conestoga-mall', tiempo: 3, linea: 'ion-red', tipo: 'lrt' }
    ]
  },
  'kitchener-waterloo-conestoga-mall': {
    ciudad: 'kitchener-waterloo',
    nombre: 'Conestoga Mall Station',
    lineas: ['ion-red'],
    adyacentes: [
      { slug: 'kitchener-waterloo-conestoga', tiempo: 3, linea: 'ion-red', tipo: 'lrt' },
      { slug: 'kitchener-waterloo-ottawa', tiempo: 3, linea: 'ion-red', tipo: 'lrt' }
    ]
  },
  'kitchener-waterloo-ottawa': {
    ciudad: 'kitchener-waterloo',
    nombre: 'Ottawa Station',
    lineas: ['ion-red'],
    adyacentes: [
      { slug: 'kitchener-waterloo-conestoga-mall', tiempo: 3, linea: 'ion-red', tipo: 'lrt' },
      { slug: 'kitchener-waterloo-fischer-hallman', tiempo: 3, linea: 'ion-red', tipo: 'lrt' }
    ]
  },
  'kitchener-waterloo-fischer-hallman': {
    ciudad: 'kitchener-waterloo',
    nombre: 'Fischer-Hallman Station',
    lineas: ['ion-red'],
    adyacentes: [
      { slug: 'kitchener-waterloo-ottawa', tiempo: 3, linea: 'ion-red', tipo: 'lrt' },
      { slug: 'kitchener-waterloo-chandler', tiempo: 3, linea: 'ion-red', tipo: 'lrt' }
    ]
  },
  'kitchener-waterloo-chandler': {
    ciudad: 'kitchener-waterloo',
    nombre: 'Chandler Station',
    lineas: ['ion-red'],
    adyacentes: [
      { slug: 'kitchener-waterloo-fischer-hallman', tiempo: 3, linea: 'ion-red', tipo: 'lrt' },
      { slug: 'kitchener-waterloo-kitchener', tiempo: 3, linea: 'ion-red', tipo: 'lrt' }
    ]
  },
  'kitchener-waterloo-kitchener': {
    ciudad: 'kitchener-waterloo',
    nombre: 'Kitchener Station',
    lineas: ['ion-red'],
    adyacentes: [
      { slug: 'kitchener-waterloo-chandler', tiempo: 3, linea: 'ion-red', tipo: 'lrt' },
      { slug: 'kitchener-waterloo-king-centre', tiempo: 3, linea: 'ion-red', tipo: 'lrt' }
    ]
  },
  'kitchener-waterloo-king-centre': {
    ciudad: 'kitchener-waterloo',
    nombre: 'King Centre',
    lineas: ['ion-red'],
    adyacentes: [
      { slug: 'kitchener-waterloo-kitchener', tiempo: 3, linea: 'ion-red', tipo: 'lrt' },
      { slug: 'kitchener-waterloo-market-hall', tiempo: 3, linea: 'ion-red', tipo: 'lrt' }
    ]
  },
  'kitchener-waterloo-market-hall': {
    ciudad: 'kitchener-waterloo',
    nombre: 'Kitchener Market Hall',
    lineas: ['ion-red'],
    adyacentes: [
      { slug: 'kitchener-waterloo-king-centre', tiempo: 3, linea: 'ion-red', tipo: 'lrt' },
      { slug: 'kitchener-waterloo-victoria-park', tiempo: 3, linea: 'ion-red', tipo: 'lrt' }
    ]
  },
  'kitchener-waterloo-victoria-park': {
    ciudad: 'kitchener-waterloo',
    nombre: 'Victoria Park Station',
    lineas: ['ion-red'],
    adyacentes: [
      { slug: 'kitchener-waterloo-market-hall', tiempo: 3, linea: 'ion-red', tipo: 'lrt' },
      { slug: 'kitchener-waterloo-university-waterloo', tiempo: 3, linea: 'ion-red', tipo: 'lrt' }
    ]
  },
  'kitchener-waterloo-university-waterloo': {
    ciudad: 'kitchener-waterloo',
    nombre: 'University of Waterloo',
    lineas: ['ion-red'],
    adyacentes: [
      { slug: 'kitchener-waterloo-victoria-park', tiempo: 3, linea: 'ion-red', tipo: 'lrt' },
      { slug: 'kitchener-waterloo-columbia', tiempo: 3, linea: 'ion-red', tipo: 'lrt' }
    ]
  },
  'kitchener-waterloo-columbia': {
    ciudad: 'kitchener-waterloo',
    nombre: 'Columbia Station',
    lineas: ['ion-red'],
    adyacentes: [
      { slug: 'kitchener-waterloo-university-waterloo', tiempo: 3, linea: 'ion-red', tipo: 'lrt' },
      { slug: 'kitchener-waterloo-ainslie-street', tiempo: 3, linea: 'ion-red', tipo: 'lrt' }
    ]
  },
  'kitchener-waterloo-ainslie-street': {
    ciudad: 'kitchener-waterloo',
    nombre: 'Ainslie Street Terminal',
    lineas: ['ion-red'],
    adyacentes: [
      { slug: 'kitchener-waterloo-columbia', tiempo: 3, linea: 'ion-red', tipo: 'lrt' }
    ]
  }
};
