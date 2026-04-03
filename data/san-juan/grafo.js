export const grafoSanJuan = {
  "san-juan-sagrado-corazon": {
    linea: ["tren-urbano"],
    ciudad: "san-juan",
    adyacentes: [
      { estacion: "san-juan-hato-rey-centro", linea: "tren-urbano", tiempo: 2 }
    ]
  },
  "san-juan-hato-rey-centro": {
    linea: ["tren-urbano"],
    ciudad: "san-juan",
    adyacentes: [
      { estacion: "san-juan-sagrado-corazon", linea: "tren-urbano", tiempo: 2 },
      { estacion: "san-juan-roosevelt", linea: "tren-urbano", tiempo: 2 }
    ]
  },
  "san-juan-roosevelt": {
    linea: ["tren-urbano"],
    ciudad: "san-juan",
    adyacentes: [
      { estacion: "san-juan-hato-rey-centro", linea: "tren-urbano", tiempo: 2 },
      { estacion: "san-juan-domenech", linea: "tren-urbano", tiempo: 2 }
    ]
  },
  "san-juan-domenech": {
    linea: ["tren-urbano"],
    ciudad: "san-juan",
    adyacentes: [
      { estacion: "san-juan-roosevelt", linea: "tren-urbano", tiempo: 2 },
      { estacion: "san-juan-rio-piedras", linea: "tren-urbano", tiempo: 2 }
    ]
  },
  "san-juan-rio-piedras": {
    linea: ["tren-urbano"],
    ciudad: "san-juan",
    adyacentes: [
      { estacion: "san-juan-domenech", linea: "tren-urbano", tiempo: 2 },
      { estacion: "san-juan-universidad", linea: "tren-urbano", tiempo: 2 }
    ]
  },
  "san-juan-universidad": {
    linea: ["tren-urbano"],
    ciudad: "san-juan",
    adyacentes: [
      { estacion: "san-juan-rio-piedras", linea: "tren-urbano", tiempo: 2 },
      { estacion: "san-juan-pinero", linea: "tren-urbano", tiempo: 2 }
    ]
  },
  "san-juan-pinero": {
    linea: ["tren-urbano"],
    ciudad: "san-juan",
    adyacentes: [
      { estacion: "san-juan-universidad", linea: "tren-urbano", tiempo: 2 },
      { estacion: "san-juan-martinez-nadal", linea: "tren-urbano", tiempo: 2 }
    ]
  },
  "san-juan-martinez-nadal": {
    linea: ["tren-urbano"],
    ciudad: "san-juan",
    adyacentes: [
      { estacion: "san-juan-pinero", linea: "tren-urbano", tiempo: 2 },
      { estacion: "san-juan-las-lomas", linea: "tren-urbano", tiempo: 2 }
    ]
  },
  "san-juan-las-lomas": {
    linea: ["tren-urbano"],
    ciudad: "san-juan",
    adyacentes: [
      { estacion: "san-juan-martinez-nadal", linea: "tren-urbano", tiempo: 2 },
      { estacion: "san-juan-san-francisco", linea: "tren-urbano", tiempo: 2 }
    ]
  },
  "san-juan-san-francisco": {
    linea: ["tren-urbano"],
    ciudad: "san-juan",
    adyacentes: [
      { estacion: "san-juan-las-lomas", linea: "tren-urbano", tiempo: 2 },
      { estacion: "san-juan-centro-medico", linea: "tren-urbano", tiempo: 2 }
    ]
  },
  "san-juan-centro-medico": {
    linea: ["tren-urbano"],
    ciudad: "san-juan",
    adyacentes: [
      { estacion: "san-juan-san-francisco", linea: "tren-urbano", tiempo: 2 },
      { estacion: "san-juan-cupey", linea: "tren-urbano", tiempo: 2 }
    ]
  },
  "san-juan-cupey": {
    linea: ["tren-urbano"],
    ciudad: "san-juan",
    adyacentes: [
      { estacion: "san-juan-centro-medico", linea: "tren-urbano", tiempo: 2 },
      { estacion: "san-juan-villa-nevarez", linea: "tren-urbano", tiempo: 2 }
    ]
  },
  "san-juan-villa-nevarez": {
    linea: ["tren-urbano"],
    ciudad: "san-juan",
    adyacentes: [
      { estacion: "san-juan-cupey", linea: "tren-urbano", tiempo: 2 },
      { estacion: "san-juan-torrimar", linea: "tren-urbano", tiempo: 2 }
    ]
  },
  "san-juan-torrimar": {
    linea: ["tren-urbano"],
    ciudad: "san-juan",
    adyacentes: [
      { estacion: "san-juan-villa-nevarez", linea: "tren-urbano", tiempo: 2 },
      { estacion: "san-juan-jardines", linea: "tren-urbano", tiempo: 2 }
    ]
  },
  "san-juan-jardines": {
    linea: ["tren-urbano"],
    ciudad: "san-juan",
    adyacentes: [
      { estacion: "san-juan-torrimar", linea: "tren-urbano", tiempo: 2 },
      { estacion: "san-juan-bayamon", linea: "tren-urbano", tiempo: 2 }
    ]
  },
  "san-juan-bayamon": {
    linea: ["tren-urbano"],
    ciudad: "san-juan",
    adyacentes: [
      { estacion: "san-juan-jardines", linea: "tren-urbano", tiempo: 2 }
    ]
  }
};
