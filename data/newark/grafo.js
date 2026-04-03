export const grafoNewark = {
  "newark-penn-station": {
    linea: ["newark-light-rail", "hudson-bergen-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { slug: "newark-broad-street", linea: "newark-light-rail", tiempo: 2, tipo: 'linea' },
      { slug: "newark-grove-street", linea: "hudson-bergen-light-rail", tiempo: 3, tipo: 'linea' }
    ]
  },
  "newark-broad-street": {
    linea: ["newark-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { slug: "newark-penn-station", linea: "newark-light-rail", tiempo: 2, tipo: 'linea' },
      { slug: "newark-market-street", linea: "newark-light-rail", tiempo: 2, tipo: 'linea' }
    ]
  },
  "newark-market-street": {
    linea: ["newark-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { slug: "newark-broad-street", linea: "newark-light-rail", tiempo: 2, tipo: 'linea' },
      { slug: "newark-washington-park", linea: "newark-light-rail", tiempo: 2, tipo: 'linea' }
    ]
  },
  "newark-washington-park": {
    linea: ["newark-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { slug: "newark-market-street", linea: "newark-light-rail", tiempo: 2, tipo: 'linea' },
      { slug: "newark-lincoln-park", linea: "newark-light-rail", tiempo: 2, tipo: 'linea' }
    ]
  },
  "newark-lincoln-park": {
    linea: ["newark-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { slug: "newark-washington-park", linea: "newark-light-rail", tiempo: 2, tipo: 'linea' },
      { slug: "newark-forest", linea: "newark-light-rail", tiempo: 2, tipo: 'linea' }
    ]
  },
  "newark-forest": {
    linea: ["newark-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { slug: "newark-lincoln-park", linea: "newark-light-rail", tiempo: 2, tipo: 'linea' },
      { slug: "newark-valley-street", linea: "newark-light-rail", tiempo: 2, tipo: 'linea' }
    ]
  },
  "newark-valley-street": {
    linea: ["newark-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { slug: "newark-forest", linea: "newark-light-rail", tiempo: 2, tipo: 'linea' },
      { slug: "newark-convention-center", linea: "newark-light-rail", tiempo: 2, tipo: 'linea' }
    ]
  },
  "newark-convention-center": {
    linea: ["newark-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { slug: "newark-valley-street", linea: "newark-light-rail", tiempo: 2, tipo: 'linea' },
      { slug: "newark-branch-brook-park", linea: "newark-light-rail", tiempo: 2, tipo: 'linea' }
    ]
  },
  "newark-branch-brook-park": {
    linea: ["newark-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { slug: "newark-convention-center", linea: "newark-light-rail", tiempo: 2, tipo: 'linea' },
      { slug: "newark-city-subway", linea: "newark-light-rail", tiempo: 2, tipo: 'linea' }
    ]
  },
  "newark-city-subway": {
    linea: ["newark-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { slug: "newark-branch-brook-park", linea: "newark-light-rail", tiempo: 2, tipo: 'linea' },
      { slug: "newark-university-hospital", linea: "newark-light-rail", tiempo: 2, tipo: 'linea' }
    ]
  },
  "newark-university-hospital": {
    linea: ["newark-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { slug: "newark-city-subway", linea: "newark-light-rail", tiempo: 2, tipo: 'linea' },
      { slug: "newark-grove-street", linea: "newark-light-rail", tiempo: 2, tipo: 'linea' }
    ]
  },
  "newark-grove-street": {
    linea: ["newark-light-rail", "hudson-bergen-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { slug: "newark-university-hospital", linea: "newark-light-rail", tiempo: 2, tipo: 'linea' },
      { slug: "newark-harrison", linea: "newark-light-rail", tiempo: 3, tipo: 'linea' },
      { slug: "newark-jersey-avenue", linea: "hudson-bergen-light-rail", tiempo: 2, tipo: 'linea' }
    ]
  },
  "newark-harrison": {
    linea: ["newark-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { slug: "newark-grove-street", linea: "newark-light-rail", tiempo: 3, tipo: 'linea' }
    ]
  },
  "newark-jersey-avenue": {
    linea: ["hudson-bergen-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { slug: "newark-grove-street", linea: "hudson-bergen-light-rail", tiempo: 2, tipo: 'linea' },
      { slug: "newark-hoboken-terminal-station", linea: "hudson-bergen-light-rail", tiempo: 2, tipo: 'linea' }
    ]
  },
  "newark-hoboken-terminal-station": {
    linea: ["hudson-bergen-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { slug: "newark-jersey-avenue", linea: "hudson-bergen-light-rail", tiempo: 2, tipo: 'linea' },
      { slug: "newark-observer-highway-station", linea: "hudson-bergen-light-rail", tiempo: 2, tipo: 'linea' }
    ]
  },
  "newark-observer-highway-station": {
    linea: ["hudson-bergen-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { slug: "newark-hoboken-terminal-station", linea: "hudson-bergen-light-rail", tiempo: 2, tipo: 'linea' },
      { slug: "newark-33rd-street-station", linea: "hudson-bergen-light-rail", tiempo: 2, tipo: 'linea' }
    ]
  },
  "newark-33rd-street-station": {
    linea: ["hudson-bergen-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { slug: "newark-observer-highway-station", linea: "hudson-bergen-light-rail", tiempo: 2, tipo: 'linea' },
      { slug: "newark-bergenline-avenue-station", linea: "hudson-bergen-light-rail", tiempo: 2, tipo: 'linea' }
    ]
  },
  "newark-bergenline-avenue-station": {
    linea: ["hudson-bergen-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { slug: "newark-33rd-street-station", linea: "hudson-bergen-light-rail", tiempo: 2, tipo: 'linea' },
      { slug: "newark-tonnele-avenue-station", linea: "hudson-bergen-light-rail", tiempo: 2, tipo: 'linea' }
    ]
  },
  "newark-tonnele-avenue-station": {
    linea: ["hudson-bergen-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { slug: "newark-bergenline-avenue-station", linea: "hudson-bergen-light-rail", tiempo: 2, tipo: 'linea' },
      { slug: "newark-palisades-park-station", linea: "hudson-bergen-light-rail", tiempo: 2, tipo: 'linea' }
    ]
  },
  "newark-palisades-park-station": {
    linea: ["hudson-bergen-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { slug: "newark-tonnele-avenue-station", linea: "hudson-bergen-light-rail", tiempo: 2, tipo: 'linea' },
      { slug: "newark-secaucus-junction-station", linea: "hudson-bergen-light-rail", tiempo: 2, tipo: 'linea' }
    ]
  },
  "newark-secaucus-junction-station": {
    linea: ["hudson-bergen-light-rail"],
    ciudad: "newark",
    adyacentes: [
      { slug: "newark-palisades-park-station", linea: "hudson-bergen-light-rail", tiempo: 2, tipo: 'linea' }
    ]
  }
};
