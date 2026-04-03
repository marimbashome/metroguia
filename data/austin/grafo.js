export const grafoAustin = {
  "austin-downtown-austin": {
    linea: ["red-line"],
    ciudad: "austin",
    adyacentes: [
      { estacion: "austin-plaza-saltillo", linea: "red-line", tiempo: 2 }
    ]
  },
  "austin-plaza-saltillo": {
    linea: ["red-line"],
    ciudad: "austin",
    adyacentes: [
      { estacion: "austin-downtown-austin", linea: "red-line", tiempo: 2 },
      { estacion: "austin-highland", linea: "red-line", tiempo: 2 }
    ]
  },
  "austin-highland": {
    linea: ["red-line"],
    ciudad: "austin",
    adyacentes: [
      { estacion: "austin-plaza-saltillo", linea: "red-line", tiempo: 2 },
      { estacion: "austin-crestview", linea: "red-line", tiempo: 2 }
    ]
  },
  "austin-crestview": {
    linea: ["red-line"],
    ciudad: "austin",
    adyacentes: [
      { estacion: "austin-highland", linea: "red-line", tiempo: 2 },
      { estacion: "austin-kramer", linea: "red-line", tiempo: 2 }
    ]
  },
  "austin-kramer": {
    linea: ["red-line"],
    ciudad: "austin",
    adyacentes: [
      { estacion: "austin-crestview", linea: "red-line", tiempo: 2 },
      { estacion: "austin-howard", linea: "red-line", tiempo: 2 }
    ]
  },
  "austin-howard": {
    linea: ["red-line"],
    ciudad: "austin",
    adyacentes: [
      { estacion: "austin-kramer", linea: "red-line", tiempo: 2 },
      { estacion: "austin-lakeline", linea: "red-line", tiempo: 2 }
    ]
  },
  "austin-lakeline": {
    linea: ["red-line"],
    ciudad: "austin",
    adyacentes: [
      { estacion: "austin-howard", linea: "red-line", tiempo: 2 },
      { estacion: "austin-leander", linea: "red-line", tiempo: 2 }
    ]
  },
  "austin-leander": {
    linea: ["red-line"],
    ciudad: "austin",
    adyacentes: [
      { estacion: "austin-lakeline", linea: "red-line", tiempo: 2 },
      { estacion: "austin-mlk-jr", linea: "red-line", tiempo: 2 }
    ]
  },
  "austin-mlk-jr": {
    linea: ["red-line"],
    ciudad: "austin",
    adyacentes: [
      { estacion: "austin-leander", linea: "red-line", tiempo: 2 }
    ]
  }
};
