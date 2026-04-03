export const grafoMilwaukee = {
  "milwaukee-intermodal-station": {
    linea: ["lakefront", "omni"],
    ciudad: "milwaukee",
    adyacentes: [
      { slug: "milwaukee-3rd-street-market-hall", linea: "lakefront", tiempo: 2, tipo: 'linea' },
      { slug: "milwaukee-vel-phillips", linea: "omni", tiempo: 2, tipo: 'linea' }
    ]
  },
  "milwaukee-3rd-street-market-hall": {
    linea: ["lakefront"],
    ciudad: "milwaukee",
    adyacentes: [
      { slug: "milwaukee-intermodal-station", linea: "lakefront", tiempo: 2, tipo: 'linea' },
      { slug: "milwaukee-cathedral-square", linea: "lakefront", tiempo: 2, tipo: 'linea' }
    ]
  },
  "milwaukee-cathedral-square": {
    linea: ["lakefront"],
    ciudad: "milwaukee",
    adyacentes: [
      { slug: "milwaukee-3rd-street-market-hall", linea: "lakefront", tiempo: 2, tipo: 'linea' },
      { slug: "milwaukee-burns-commons", linea: "lakefront", tiempo: 2, tipo: 'linea' }
    ]
  },
  "milwaukee-burns-commons": {
    linea: ["lakefront"],
    ciudad: "milwaukee",
    adyacentes: [
      { slug: "milwaukee-cathedral-square", linea: "lakefront", tiempo: 2, tipo: 'linea' },
      { slug: "milwaukee-brady-farwell", linea: "lakefront", tiempo: 2, tipo: 'linea' }
    ]
  },
  "milwaukee-brady-farwell": {
    linea: ["lakefront"],
    ciudad: "milwaukee",
    adyacentes: [
      { slug: "milwaukee-burns-commons", linea: "lakefront", tiempo: 2, tipo: 'linea' },
      { slug: "milwaukee-lakefront", linea: "lakefront", tiempo: 2, tipo: 'linea' }
    ]
  },
  "milwaukee-lakefront": {
    linea: ["lakefront"],
    ciudad: "milwaukee",
    adyacentes: [
      { slug: "milwaukee-brady-farwell", linea: "lakefront", tiempo: 2, tipo: 'linea' }
    ]
  },
  "milwaukee-vel-phillips": {
    linea: ["omni"],
    ciudad: "milwaukee",
    adyacentes: [
      { slug: "milwaukee-intermodal-station", linea: "omni", tiempo: 2, tipo: 'linea' },
      { slug: "milwaukee-4th-wisconsin", linea: "omni", tiempo: 2, tipo: 'linea' }
    ]
  },
  "milwaukee-4th-wisconsin": {
    linea: ["omni"],
    ciudad: "milwaukee",
    adyacentes: [
      { slug: "milwaukee-vel-phillips", linea: "omni", tiempo: 2, tipo: 'linea' }
    ]
  }
};
