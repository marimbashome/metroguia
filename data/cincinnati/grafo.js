export const grafoCincinnati = {
  "cincinnati-findlay-market": {
    linea: ["connector"],
    ciudad: "cincinnati",
    adyacentes: [
      { slug: "cincinnati-government-square", linea: "connector", tiempo: 2, tipo: 'linea' }
    ]
  },
  "cincinnati-government-square": {
    linea: ["connector"],
    ciudad: "cincinnati",
    adyacentes: [
      { slug: "cincinnati-findlay-market", linea: "connector", tiempo: 2, tipo: 'linea' },
      { slug: "cincinnati-5th-walnut", linea: "connector", tiempo: 2, tipo: 'linea' }
    ]
  },
  "cincinnati-5th-walnut": {
    linea: ["connector"],
    ciudad: "cincinnati",
    adyacentes: [
      { slug: "cincinnati-government-square", linea: "connector", tiempo: 2, tipo: 'linea' },
      { slug: "cincinnati-fountain-square", linea: "connector", tiempo: 2, tipo: 'linea' }
    ]
  },
  "cincinnati-fountain-square": {
    linea: ["connector"],
    ciudad: "cincinnati",
    adyacentes: [
      { slug: "cincinnati-5th-walnut", linea: "connector", tiempo: 2, tipo: 'linea' },
      { slug: "cincinnati-4th-race", linea: "connector", tiempo: 2, tipo: 'linea' }
    ]
  },
  "cincinnati-4th-race": {
    linea: ["connector"],
    ciudad: "cincinnati",
    adyacentes: [
      { slug: "cincinnati-fountain-square", linea: "connector", tiempo: 2, tipo: 'linea' },
      { slug: "cincinnati-the-banks", linea: "connector", tiempo: 2, tipo: 'linea' }
    ]
  },
  "cincinnati-the-banks": {
    linea: ["connector"],
    ciudad: "cincinnati",
    adyacentes: [
      { slug: "cincinnati-4th-race", linea: "connector", tiempo: 2, tipo: 'linea' },
      { slug: "cincinnati-freedom-way-rosa-parks", linea: "connector", tiempo: 2, tipo: 'linea' }
    ]
  },
  "cincinnati-freedom-way-rosa-parks": {
    linea: ["connector"],
    ciudad: "cincinnati",
    adyacentes: [
      { slug: "cincinnati-the-banks", linea: "connector", tiempo: 2, tipo: 'linea' },
      { slug: "cincinnati-duke-energy-convention-center", linea: "connector", tiempo: 2, tipo: 'linea' }
    ]
  },
  "cincinnati-duke-energy-convention-center": {
    linea: ["connector"],
    ciudad: "cincinnati",
    adyacentes: [
      { slug: "cincinnati-freedom-way-rosa-parks", linea: "connector", tiempo: 2, tipo: 'linea' }
    ]
  }
};
