export const grafoSanJuan = {
  "san-juan-sagrado-corazon": {
    linea: ["tren-urbano"],
    ciudad: "san-juan",
    adyacentes: [
      { slug: "san-juan-hato-rey-centro", linea: "tren-urbano", tiempo: 2, tipo: 'linea' }
    ]
  },
  "san-juan-hato-rey-centro": {
    linea: ["tren-urbano"],
    ciudad: "san-juan",
    adyacentes: [
      { slug: "san-juan-sagrado-corazon", linea: "tren-urbano", tiempo: 2, tipo: 'linea' },
      { slug: "san-juan-roosevelt", linea: "tren-urbano", tiempo: 2, tipo: 'linea' }
    ]
  },
  "san-juan-roosevelt": {
    linea: ["tren-urbano"],
    ciudad: "san-juan",
    adyacentes: [
      { slug: "san-juan-hato-rey-centro", linea: "tren-urbano", tiempo: 2, tipo: 'linea' },
      { slug: "san-juan-domenech", linea: "tren-urbano", tiempo: 2, tipo: 'linea' }
    ]
  },
  "san-juan-domenech": {
    linea: ["tren-urbano"],
    ciudad: "san-juan",
    adyacentes: [
      { slug: "san-juan-roosevelt", linea: "tren-urbano", tiempo: 2, tipo: 'linea' },
      { slug: "san-juan-rio-piedras", linea: "tren-urbano", tiempo: 2, tipo: 'linea' }
    ]
  },
  "san-juan-rio-piedras": {
    linea: ["tren-urbano"],
    ciudad: "san-juan",
    adyacentes: [
      { slug: "san-juan-domenech", linea: "tren-urbano", tiempo: 2, tipo: 'linea' },
      { slug: "san-juan-universidad", linea: "tren-urbano", tiempo: 2, tipo: 'linea' }
    ]
  },
  "san-juan-universidad": {
    linea: ["tren-urbano"],
    ciudad: "san-juan",
    adyacentes: [
      { slug: "san-juan-rio-piedras", linea: "tren-urbano", tiempo: 2, tipo: 'linea' },
      { slug: "san-juan-pinero", linea: "tren-urbano", tiempo: 2, tipo: 'linea' }
    ]
  },
  "san-juan-pinero": {
    linea: ["tren-urbano"],
    ciudad: "san-juan",
    adyacentes: [
      { slug: "san-juan-universidad", linea: "tren-urbano", tiempo: 2, tipo: 'linea' },
      { slug: "san-juan-martinez-nadal", linea: "tren-urbano", tiempo: 2, tipo: 'linea' }
    ]
  },
  "san-juan-martinez-nadal": {
    linea: ["tren-urbano"],
    ciudad: "san-juan",
    adyacentes: [
      { slug: "san-juan-pinero", linea: "tren-urbano", tiempo: 2, tipo: 'linea' },
      { slug: "san-juan-las-lomas", linea: "tren-urbano", tiempo: 2, tipo: 'linea' }
    ]
  },
  "san-juan-las-lomas": {
    linea: ["tren-urbano"],
    ciudad: "san-juan",
    adyacentes: [
      { slug: "san-juan-martinez-nadal", linea: "tren-urbano", tiempo: 2, tipo: 'linea' },
      { slug: "san-juan-san-francisco", linea: "tren-urbano", tiempo: 2, tipo: 'linea' }
    ]
  },
  "san-juan-san-francisco": {
    linea: ["tren-urbano"],
    ciudad: "san-juan",
    adyacentes: [
      { slug: "san-juan-las-lomas", linea: "tren-urbano", tiempo: 2, tipo: 'linea' },
      { slug: "san-juan-centro-medico", linea: "tren-urbano", tiempo: 2, tipo: 'linea' }
    ]
  },
  "san-juan-centro-medico": {
    linea: ["tren-urbano"],
    ciudad: "san-juan",
    adyacentes: [
      { slug: "san-juan-san-francisco", linea: "tren-urbano", tiempo: 2, tipo: 'linea' },
      { slug: "san-juan-cupey", linea: "tren-urbano", tiempo: 2, tipo: 'linea' }
    ]
  },
  "san-juan-cupey": {
    linea: ["tren-urbano"],
    ciudad: "san-juan",
    adyacentes: [
      { slug: "san-juan-centro-medico", linea: "tren-urbano", tiempo: 2, tipo: 'linea' },
      { slug: "san-juan-villa-nevarez", linea: "tren-urbano", tiempo: 2, tipo: 'linea' }
    ]
  },
  "san-juan-villa-nevarez": {
    linea: ["tren-urbano"],
    ciudad: "san-juan",
    adyacentes: [
      { slug: "san-juan-cupey", linea: "tren-urbano", tiempo: 2, tipo: 'linea' },
      { slug: "san-juan-torrimar", linea: "tren-urbano", tiempo: 2, tipo: 'linea' }
    ]
  },
  "san-juan-torrimar": {
    linea: ["tren-urbano"],
    ciudad: "san-juan",
    adyacentes: [
      { slug: "san-juan-villa-nevarez", linea: "tren-urbano", tiempo: 2, tipo: 'linea' },
      { slug: "san-juan-jardines", linea: "tren-urbano", tiempo: 2, tipo: 'linea' }
    ]
  },
  "san-juan-jardines": {
    linea: ["tren-urbano"],
    ciudad: "san-juan",
    adyacentes: [
      { slug: "san-juan-torrimar", linea: "tren-urbano", tiempo: 2, tipo: 'linea' },
      { slug: "san-juan-bayamon", linea: "tren-urbano", tiempo: 2, tipo: 'linea' }
    ]
  },
  "san-juan-bayamon": {
    linea: ["tren-urbano"],
    ciudad: "san-juan",
    adyacentes: [
      { slug: "san-juan-jardines", linea: "tren-urbano", tiempo: 2, tipo: 'linea' }
    ]
  }
};
