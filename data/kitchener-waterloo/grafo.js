export const grafoKitchenerWaterloo = [
  {
    ciudad: "Kitchener-Waterloo",
    nombre: "Conestoga Station",
    lineas: ["ion-red"],
    adyacentes: [
      { slug: "kitchener-waterloo-conestoga-mall", tiempo: 3, linea: "ion-red", tipo: "lrt" }
    ]
  },
  {
    ciudad: "Kitchener-Waterloo",
    nombre: "Conestoga Mall Station",
    lineas: ["ion-red"],
    adyacentes: [
      { slug: "kitchener-waterloo-conestoga", tiempo: 3, linea: "ion-red", tipo: "lrt" },
      { slug: "kitchener-waterloo-ottawa", tiempo: 3, linea: "ion-red", tipo: "lrt" }
    ]
  },
  {
    ciudad: "Kitchener-Waterloo",
    nombre: "Ottawa Station",
    lineas: ["ion-red"],
    adyacentes: [
      { slug: "kitchener-waterloo-conestoga-mall", tiempo: 3, linea: "ion-red", tipo: "lrt" },
      { slug: "kitchener-waterloo-fischer-hallman", tiempo: 3, linea: "ion-red", tipo: "lrt" }
    ]
  },
  {
    ciudad: "Kitchener-Waterloo",
    nombre: "Fischer-Hallman Station",
    lineas: ["ion-red"],
    adyacentes: [
      { slug: "kitchener-waterloo-ottawa", tiempo: 3, linea: "ion-red", tipo: "lrt" },
      { slug: "kitchener-waterloo-chandler", tiempo: 3, linea: "ion-red", tipo: "lrt" }
    ]
  },
  {
    ciudad: "Kitchener-Waterloo",
    nombre: "Chandler Station",
    lineas: ["ion-red"],
    adyacentes: [
      { slug: "kitchener-waterloo-fischer-hallman", tiempo: 3, linea: "ion-red", tipo: "lrt" },
      { slug: "kitchener-waterloo-kitchener", tiempo: 3, linea: "ion-red", tipo: "lrt" }
    ]
  },
  {
    ciudad: "Kitchener-Waterloo",
    nombre: "Kitchener Station",
    lineas: ["ion-red"],
    adyacentes: [
      { slug: "kitchener-waterloo-chandler", tiempo: 3, linea: "ion-red", tipo: "lrt" },
      { slug: "kitchener-waterloo-king-centre", tiempo: 3, linea: "ion-red", tipo: "lrt" }
    ]
  },
  {
    ciudad: "Kitchener-Waterloo",
    nombre: "King Centre",
    lineas: ["ion-red"],
    adyacentes: [
      { slug: "kitchener-waterloo-kitchener", tiempo: 3, linea: "ion-red", tipo: "lrt" },
      { slug: "kitchener-waterloo-market-hall", tiempo: 3, linea: "ion-red", tipo: "lrt" }
    ]
  },
  {
    ciudad: "Kitchener-Waterloo",
    nombre: "Kitchener Market Hall",
    lineas: ["ion-red"],
    adyacentes: [
      { slug: "kitchener-waterloo-king-centre", tiempo: 3, linea: "ion-red", tipo: "lrt" },
      { slug: "kitchener-waterloo-victoria-park", tiempo: 3, linea: "ion-red", tipo: "lrt" }
    ]
  },
  {
    ciudad: "Kitchener-Waterloo",
    nombre: "Victoria Park Station",
    lineas: ["ion-red"],
    adyacentes: [
      { slug: "kitchener-waterloo-market-hall", tiempo: 3, linea: "ion-red", tipo: "lrt" },
      { slug: "kitchener-waterloo-university-waterloo", tiempo: 3, linea: "ion-red", tipo: "lrt" }
    ]
  },
  {
    ciudad: "Kitchener-Waterloo",
    nombre: "University of Waterloo",
    lineas: ["ion-red"],
    adyacentes: [
      { slug: "kitchener-waterloo-victoria-park", tiempo: 3, linea: "ion-red", tipo: "lrt" },
      { slug: "kitchener-waterloo-columbia", tiempo: 3, linea: "ion-red", tipo: "lrt" }
    ]
  },
  {
    ciudad: "Kitchener-Waterloo",
    nombre: "Columbia Station",
    lineas: ["ion-red"],
    adyacentes: [
      { slug: "kitchener-waterloo-university-waterloo", tiempo: 3, linea: "ion-red", tipo: "lrt" },
      { slug: "kitchener-waterloo-ainslie-street", tiempo: 3, linea: "ion-red", tipo: "lrt" }
    ]
  },
  {
    ciudad: "Kitchener-Waterloo",
    nombre: "Ainslie Street Terminal",
    lineas: ["ion-red"],
    adyacentes: [
      { slug: "kitchener-waterloo-columbia", tiempo: 3, linea: "ion-red", tipo: "lrt" }
    ]
  }
];
