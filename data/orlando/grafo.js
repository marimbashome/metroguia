export const grafoOrlando = {
  "orlando-debary": {
    linea: ["sunrail"],
    ciudad: "orlando",
    adyacentes: [
      { slug: "orlando-sanford", linea: "sunrail", tiempo: 6, tipo: 'linea' }
    ]
  },
  "orlando-sanford": {
    linea: ["sunrail"],
    ciudad: "orlando",
    adyacentes: [
      { slug: "orlando-debary", linea: "sunrail", tiempo: 6, tipo: 'linea' },
      { slug: "orlando-lake-mary", linea: "sunrail", tiempo: 5, tipo: 'linea' }
    ]
  },
  "orlando-lake-mary": {
    linea: ["sunrail"],
    ciudad: "orlando",
    adyacentes: [
      { slug: "orlando-sanford", linea: "sunrail", tiempo: 5, tipo: 'linea' },
      { slug: "orlando-longwood", linea: "sunrail", tiempo: 5, tipo: 'linea' }
    ]
  },
  "orlando-longwood": {
    linea: ["sunrail"],
    ciudad: "orlando",
    adyacentes: [
      { slug: "orlando-lake-mary", linea: "sunrail", tiempo: 5, tipo: 'linea' },
      { slug: "orlando-altamonte-springs", linea: "sunrail", tiempo: 5, tipo: 'linea' }
    ]
  },
  "orlando-altamonte-springs": {
    linea: ["sunrail"],
    ciudad: "orlando",
    adyacentes: [
      { slug: "orlando-longwood", linea: "sunrail", tiempo: 5, tipo: 'linea' },
      { slug: "orlando-maitland", linea: "sunrail", tiempo: 5, tipo: 'linea' }
    ]
  },
  "orlando-maitland": {
    linea: ["sunrail"],
    ciudad: "orlando",
    adyacentes: [
      { slug: "orlando-altamonte-springs", linea: "sunrail", tiempo: 5, tipo: 'linea' },
      { slug: "orlando-winter-park", linea: "sunrail", tiempo: 5, tipo: 'linea' }
    ]
  },
  "orlando-winter-park": {
    linea: ["sunrail"],
    ciudad: "orlando",
    adyacentes: [
      { slug: "orlando-maitland", linea: "sunrail", tiempo: 5, tipo: 'linea' },
      { slug: "orlando-adventhealth", linea: "sunrail", tiempo: 5, tipo: 'linea' }
    ]
  },
  "orlando-adventhealth": {
    linea: ["sunrail"],
    ciudad: "orlando",
    adyacentes: [
      { slug: "orlando-winter-park", linea: "sunrail", tiempo: 5, tipo: 'linea' },
      { slug: "orlando-lynx-central", linea: "sunrail", tiempo: 5, tipo: 'linea' }
    ]
  },
  "orlando-lynx-central": {
    linea: ["sunrail"],
    ciudad: "orlando",
    adyacentes: [
      { slug: "orlando-adventhealth", linea: "sunrail", tiempo: 5, tipo: 'linea' },
      { slug: "orlando-church-street", linea: "sunrail", tiempo: 5, tipo: 'linea' }
    ]
  },
  "orlando-church-street": {
    linea: ["sunrail"],
    ciudad: "orlando",
    adyacentes: [
      { slug: "orlando-lynx-central", linea: "sunrail", tiempo: 5, tipo: 'linea' },
      { slug: "orlando-orlando-health", linea: "sunrail", tiempo: 5, tipo: 'linea' }
    ]
  },
  "orlando-orlando-health": {
    linea: ["sunrail"],
    ciudad: "orlando",
    adyacentes: [
      { slug: "orlando-church-street", linea: "sunrail", tiempo: 5, tipo: 'linea' },
      { slug: "orlando-sand-lake-road", linea: "sunrail", tiempo: 5, tipo: 'linea' }
    ]
  },
  "orlando-sand-lake-road": {
    linea: ["sunrail"],
    ciudad: "orlando",
    adyacentes: [
      { slug: "orlando-orlando-health", linea: "sunrail", tiempo: 5, tipo: 'linea' },
      { slug: "orlando-meadow-woods", linea: "sunrail", tiempo: 5, tipo: 'linea' }
    ]
  },
  "orlando-meadow-woods": {
    linea: ["sunrail"],
    ciudad: "orlando",
    adyacentes: [
      { slug: "orlando-sand-lake-road", linea: "sunrail", tiempo: 5, tipo: 'linea' },
      { slug: "orlando-tupperware", linea: "sunrail", tiempo: 6, tipo: 'linea' }
    ]
  },
  "orlando-tupperware": {
    linea: ["sunrail"],
    ciudad: "orlando",
    adyacentes: [
      { slug: "orlando-meadow-woods", linea: "sunrail", tiempo: 6, tipo: 'linea' },
      { slug: "orlando-kissimmee", linea: "sunrail", tiempo: 6, tipo: 'linea' }
    ]
  },
  "orlando-kissimmee": {
    linea: ["sunrail"],
    ciudad: "orlando",
    adyacentes: [
      { slug: "orlando-tupperware", linea: "sunrail", tiempo: 6, tipo: 'linea' },
      { slug: "orlando-poinciana", linea: "sunrail", tiempo: 6, tipo: 'linea' }
    ]
  },
  "orlando-poinciana": {
    linea: ["sunrail"],
    ciudad: "orlando",
    adyacentes: [
      { slug: "orlando-kissimmee", linea: "sunrail", tiempo: 6, tipo: 'linea' }
    ]
  }
};
