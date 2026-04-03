export const grafoCincinnati = {
  "cincinnati-findlay-market": {
    linea: ["connector"],
    ciudad: "cincinnati",
    adyacentes: [
      { estacion: "cincinnati-government-square", linea: "connector", tiempo: 2 }
    ]
  },
  "cincinnati-government-square": {
    linea: ["connector"],
    ciudad: "cincinnati",
    adyacentes: [
      { estacion: "cincinnati-findlay-market", linea: "connector", tiempo: 2 },
      { estacion: "cincinnati-5th-walnut", linea: "connector", tiempo: 2 }
    ]
  },
  "cincinnati-5th-walnut": {
    linea: ["connector"],
    ciudad: "cincinnati",
    adyacentes: [
      { estacion: "cincinnati-government-square", linea: "connector", tiempo: 2 },
      { estacion: "cincinnati-fountain-square", linea: "connector", tiempo: 2 }
    ]
  },
  "cincinnati-fountain-square": {
    linea: ["connector"],
    ciudad: "cincinnati",
    adyacentes: [
      { estacion: "cincinnati-5th-walnut", linea: "connector", tiempo: 2 },
      { estacion: "cincinnati-4th-race", linea: "connector", tiempo: 2 }
    ]
  },
  "cincinnati-4th-race": {
    linea: ["connector"],
    ciudad: "cincinnati",
    adyacentes: [
      { estacion: "cincinnati-fountain-square", linea: "connector", tiempo: 2 },
      { estacion: "cincinnati-the-banks", linea: "connector", tiempo: 2 }
    ]
  },
  "cincinnati-the-banks": {
    linea: ["connector"],
    ciudad: "cincinnati",
    adyacentes: [
      { estacion: "cincinnati-4th-race", linea: "connector", tiempo: 2 },
      { estacion: "cincinnati-freedom-way-rosa-parks", linea: "connector", tiempo: 2 }
    ]
  },
  "cincinnati-freedom-way-rosa-parks": {
    linea: ["connector"],
    ciudad: "cincinnati",
    adyacentes: [
      { estacion: "cincinnati-the-banks", linea: "connector", tiempo: 2 },
      { estacion: "cincinnati-duke-energy-convention-center", linea: "connector", tiempo: 2 }
    ]
  },
  "cincinnati-duke-energy-convention-center": {
    linea: ["connector"],
    ciudad: "cincinnati",
    adyacentes: [
      { estacion: "cincinnati-freedom-way-rosa-parks", linea: "connector", tiempo: 2 }
    ]
  }
};
