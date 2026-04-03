export const grafoOrlando = {
  "orlando-debary": {
    linea: ["sunrail"],
    ciudad: "orlando",
    adyacentes: [
      { estacion: "orlando-sanford", linea: "sunrail", tiempo: 6 }
    ]
  },
  "orlando-sanford": {
    linea: ["sunrail"],
    ciudad: "orlando",
    adyacentes: [
      { estacion: "orlando-debary", linea: "sunrail", tiempo: 6 },
      { estacion: "orlando-lake-mary", linea: "sunrail", tiempo: 5 }
    ]
  },
  "orlando-lake-mary": {
    linea: ["sunrail"],
    ciudad: "orlando",
    adyacentes: [
      { estacion: "orlando-sanford", linea: "sunrail", tiempo: 5 },
      { estacion: "orlando-longwood", linea: "sunrail", tiempo: 5 }
    ]
  },
  "orlando-longwood": {
    linea: ["sunrail"],
    ciudad: "orlando",
    adyacentes: [
      { estacion: "orlando-lake-mary", linea: "sunrail", tiempo: 5 },
      { estacion: "orlando-altamonte-springs", linea: "sunrail", tiempo: 5 }
    ]
  },
  "orlando-altamonte-springs": {
    linea: ["sunrail"],
    ciudad: "orlando",
    adyacentes: [
      { estacion: "orlando-longwood", linea: "sunrail", tiempo: 5 },
      { estacion: "orlando-maitland", linea: "sunrail", tiempo: 5 }
    ]
  },
  "orlando-maitland": {
    linea: ["sunrail"],
    ciudad: "orlando",
    adyacentes: [
      { estacion: "orlando-altamonte-springs", linea: "sunrail", tiempo: 5 },
      { estacion: "orlando-winter-park", linea: "sunrail", tiempo: 5 }
    ]
  },
  "orlando-winter-park": {
    linea: ["sunrail"],
    ciudad: "orlando",
    adyacentes: [
      { estacion: "orlando-maitland", linea: "sunrail", tiempo: 5 },
      { estacion: "orlando-adventhealth", linea: "sunrail", tiempo: 5 }
    ]
  },
  "orlando-adventhealth": {
    linea: ["sunrail"],
    ciudad: "orlando",
    adyacentes: [
      { estacion: "orlando-winter-park", linea: "sunrail", tiempo: 5 },
      { estacion: "orlando-lynx-central", linea: "sunrail", tiempo: 5 }
    ]
  },
  "orlando-lynx-central": {
    linea: ["sunrail"],
    ciudad: "orlando",
    adyacentes: [
      { estacion: "orlando-adventhealth", linea: "sunrail", tiempo: 5 },
      { estacion: "orlando-church-street", linea: "sunrail", tiempo: 5 }
    ]
  },
  "orlando-church-street": {
    linea: ["sunrail"],
    ciudad: "orlando",
    adyacentes: [
      { estacion: "orlando-lynx-central", linea: "sunrail", tiempo: 5 },
      { estacion: "orlando-orlando-health", linea: "sunrail", tiempo: 5 }
    ]
  },
  "orlando-orlando-health": {
    linea: ["sunrail"],
    ciudad: "orlando",
    adyacentes: [
      { estacion: "orlando-church-street", linea: "sunrail", tiempo: 5 },
      { estacion: "orlando-sand-lake-road", linea: "sunrail", tiempo: 5 }
    ]
  },
  "orlando-sand-lake-road": {
    linea: ["sunrail"],
    ciudad: "orlando",
    adyacentes: [
      { estacion: "orlando-orlando-health", linea: "sunrail", tiempo: 5 },
      { estacion: "orlando-meadow-woods", linea: "sunrail", tiempo: 5 }
    ]
  },
  "orlando-meadow-woods": {
    linea: ["sunrail"],
    ciudad: "orlando",
    adyacentes: [
      { estacion: "orlando-sand-lake-road", linea: "sunrail", tiempo: 5 },
      { estacion: "orlando-tupperware", linea: "sunrail", tiempo: 6 }
    ]
  },
  "orlando-tupperware": {
    linea: ["sunrail"],
    ciudad: "orlando",
    adyacentes: [
      { estacion: "orlando-meadow-woods", linea: "sunrail", tiempo: 6 },
      { estacion: "orlando-kissimmee", linea: "sunrail", tiempo: 6 }
    ]
  },
  "orlando-kissimmee": {
    linea: ["sunrail"],
    ciudad: "orlando",
    adyacentes: [
      { estacion: "orlando-tupperware", linea: "sunrail", tiempo: 6 },
      { estacion: "orlando-poinciana", linea: "sunrail", tiempo: 6 }
    ]
  },
  "orlando-poinciana": {
    linea: ["sunrail"],
    ciudad: "orlando",
    adyacentes: [
      { estacion: "orlando-kissimmee", linea: "sunrail", tiempo: 6 }
    ]
  }
};
