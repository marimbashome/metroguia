export const grafoNewark = {
  "newark-penn-station": {
    linea: ["newark-light-rail", "hudson-bergen-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { estacion: "newark-broad-street", linea: "newark-light-rail", tiempo: 2 },
      { estacion: "newark-grove-street", linea: "hudson-bergen-light-rail", tiempo: 3 }
    ]
  },
  "newark-broad-street": {
    linea: ["newark-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { estacion: "newark-penn-station", linea: "newark-light-rail", tiempo: 2 },
      { estacion: "newark-market-street", linea: "newark-light-rail", tiempo: 2 }
    ]
  },
  "newark-market-street": {
    linea: ["newark-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { estacion: "newark-broad-street", linea: "newark-light-rail", tiempo: 2 },
      { estacion: "newark-washington-park", linea: "newark-light-rail", tiempo: 2 }
    ]
  },
  "newark-washington-park": {
    linea: ["newark-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { estacion: "newark-market-street", linea: "newark-light-rail", tiempo: 2 },
      { estacion: "newark-lincoln-park", linea: "newark-light-rail", tiempo: 2 }
    ]
  },
  "newark-lincoln-park": {
    linea: ["newark-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { estacion: "newark-washington-park", linea: "newark-light-rail", tiempo: 2 },
      { estacion: "newark-forest", linea: "newark-light-rail", tiempo: 2 }
    ]
  },
  "newark-forest": {
    linea: ["newark-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { estacion: "newark-lincoln-park", linea: "newark-light-rail", tiempo: 2 },
      { estacion: "newark-valley-street", linea: "newark-light-rail", tiempo: 2 }
    ]
  },
  "newark-valley-street": {
    linea: ["newark-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { estacion: "newark-forest", linea: "newark-light-rail", tiempo: 2 },
      { estacion: "newark-convention-center", linea: "newark-light-rail", tiempo: 2 }
    ]
  },
  "newark-convention-center": {
    linea: ["newark-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { estacion: "newark-valley-street", linea: "newark-light-rail", tiempo: 2 },
      { estacion: "newark-branch-brook-park", linea: "newark-light-rail", tiempo: 2 }
    ]
  },
  "newark-branch-brook-park": {
    linea: ["newark-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { estacion: "newark-convention-center", linea: "newark-light-rail", tiempo: 2 },
      { estacion: "newark-city-subway", linea: "newark-light-rail", tiempo: 2 }
    ]
  },
  "newark-city-subway": {
    linea: ["newark-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { estacion: "newark-branch-brook-park", linea: "newark-light-rail", tiempo: 2 },
      { estacion: "newark-university-hospital", linea: "newark-light-rail", tiempo: 2 }
    ]
  },
  "newark-university-hospital": {
    linea: ["newark-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { estacion: "newark-city-subway", linea: "newark-light-rail", tiempo: 2 },
      { estacion: "newark-grove-street", linea: "newark-light-rail", tiempo: 2 }
    ]
  },
  "newark-grove-street": {
    linea: ["newark-light-rail", "hudson-bergen-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { estacion: "newark-university-hospital", linea: "newark-light-rail", tiempo: 2 },
      { estacion: "newark-harrison", linea: "newark-light-rail", tiempo: 3 },
      { estacion: "newark-jersey-avenue", linea: "hudson-bergen-light-rail", tiempo: 2 }
    ]
  },
  "newark-harrison": {
    linea: ["newark-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { estacion: "newark-grove-street", linea: "newark-light-rail", tiempo: 3 }
    ]
  },
  "newark-jersey-avenue": {
    linea: ["hudson-bergen-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { estacion: "newark-grove-street", linea: "hudson-bergen-light-rail", tiempo: 2 },
      { estacion: "newark-hoboken-terminal-station", linea: "hudson-bergen-light-rail", tiempo: 2 }
    ]
  },
  "newark-hoboken-terminal-station": {
    linea: ["hudson-bergen-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { estacion: "newark-jersey-avenue", linea: "hudson-bergen-light-rail", tiempo: 2 },
      { estacion: "newark-observer-highway-station", linea: "hudson-bergen-light-rail", tiempo: 2 }
    ]
  },
  "newark-observer-highway-station": {
    linea: ["hudson-bergen-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { estacion: "newark-hoboken-terminal-station", linea: "hudson-bergen-light-rail", tiempo: 2 },
      { estacion: "newark-33rd-street-station", linea: "hudson-bergen-light-rail", tiempo: 2 }
    ]
  },
  "newark-33rd-street-station": {
    linea: ["hudson-bergen-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { estacion: "newark-observer-highway-station", linea: "hudson-bergen-light-rail", tiempo: 2 },
      { estacion: "newark-bergenline-avenue-station", linea: "hudson-bergen-light-rail", tiempo: 2 }
    ]
  },
  "newark-bergenline-avenue-station": {
    linea: ["hudson-bergen-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { estacion: "newark-33rd-street-station", linea: "hudson-bergen-light-rail", tiempo: 2 },
      { estacion: "newark-tonnele-avenue-station", linea: "hudson-bergen-light-rail", tiempo: 2 }
    ]
  },
  "newark-tonnele-avenue-station": {
    linea: ["hudson-bergen-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { estacion: "newark-bergenline-avenue-station", linea: "hudson-bergen-light-rail", tiempo: 2 },
      { estacion: "newark-palisades-park-station", linea: "hudson-bergen-light-rail", tiempo: 2 }
    ]
  },
  "newark-palisades-park-station": {
    linea: ["hudson-bergen-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { estacion: "newark-tonnele-avenue-station", linea: "hudson-bergen-light-rail", tiempo: 2 },
      { estacion: "newark-secaucus-junction-station", linea: "hudson-bergen-light-rail", tiempo: 2 }
    ]
  },
  "newark-secaucus-junction-station": {
    linea: ["hudson-bergen-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { estacion: "newark-palisades-park-station", linea: "hudson-bergen-light-rail", tiempo: 2 }
    ]
  }
};
