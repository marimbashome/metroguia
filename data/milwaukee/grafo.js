export const grafoMilwaukee = {
  "milwaukee-intermodal-station": {
    linea: ["lakefront", "omni"],
    ciudad: "milwaukee",
    adyacentes: [
      { estacion: "milwaukee-3rd-street-market-hall", linea: "lakefront", tiempo: 2 },
      { estacion: "milwaukee-vel-phillips", linea: "omni", tiempo: 2 }
    ]
  },
  "milwaukee-3rd-street-market-hall": {
    linea: ["lakefront"],
    ciudad: "milwaukee",
    adyacentes: [
      { estacion: "milwaukee-intermodal-station", linea: "lakefront", tiempo: 2 },
      { estacion: "milwaukee-cathedral-square", linea: "lakefront", tiempo: 2 }
    ]
  },
  "milwaukee-cathedral-square": {
    linea: ["lakefront"],
    ciudad: "milwaukee",
    adyacentes: [
      { estacion: "milwaukee-3rd-street-market-hall", linea: "lakefront", tiempo: 2 },
      { estacion: "milwaukee-burns-commons", linea: "lakefront", tiempo: 2 }
    ]
  },
  "milwaukee-burns-commons": {
    linea: ["lakefront"],
    ciudad: "milwaukee",
    adyacentes: [
      { estacion: "milwaukee-cathedral-square", linea: "lakefront", tiempo: 2 },
      { estacion: "milwaukee-brady-farwell", linea: "lakefront", tiempo: 2 }
    ]
  },
  "milwaukee-brady-farwell": {
    linea: ["lakefront"],
    ciudad: "milwaukee",
    adyacentes: [
      { estacion: "milwaukee-burns-commons", linea: "lakefront", tiempo: 2 },
      { estacion: "milwaukee-lakefront", linea: "lakefront", tiempo: 2 }
    ]
  },
  "milwaukee-lakefront": {
    linea: ["lakefront"],
    ciudad: "milwaukee",
    adyacentes: [
      { estacion: "milwaukee-brady-farwell", linea: "lakefront", tiempo: 2 }
    ]
  },
  "milwaukee-vel-phillips": {
    linea: ["omni"],
    ciudad: "milwaukee",
    adyacentes: [
      { estacion: "milwaukee-intermodal-station", linea: "omni", tiempo: 2 },
      { estacion: "milwaukee-4th-wisconsin", linea: "omni", tiempo: 2 }
    ]
  },
  "milwaukee-4th-wisconsin": {
    linea: ["omni"],
    ciudad: "milwaukee",
    adyacentes: [
      { estacion: "milwaukee-vel-phillips", linea: "omni", tiempo: 2 }
    ]
  }
};
