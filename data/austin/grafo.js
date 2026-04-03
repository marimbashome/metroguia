export const grafoAustin = {
  "austin-downtown-austin": {
    linea: ["red-line"],
    ciudad: "austin",
    adyacentes: [
      { slug: "austin-plaza-saltillo", linea: "red-line", tiempo: 2, tipo: 'linea' }
    ]
  },
  "austin-plaza-saltillo": {
    linea: ["red-line"],
    ciudad: "austin",
    adyacentes: [
      { slug: "austin-downtown-austin", linea: "red-line", tiempo: 2, tipo: 'linea' },
      { slug: "austin-highland", linea: "red-line", tiempo: 2, tipo: 'linea' }
    ]
  },
  "austin-highland": {
    linea: ["red-line"],
    ciudad: "austin",
    adyacentes: [
      { slug: "austin-plaza-saltillo", linea: "red-line", tiempo: 2, tipo: 'linea' },
      { slug: "austin-crestview", linea: "red-line", tiempo: 2, tipo: 'linea' }
    ]
  },
  "austin-crestview": {
    linea: ["red-line"],
    ciudad: "austin",
    adyacentes: [
      { slug: "austin-highland", linea: "red-line", tiempo: 2, tipo: 'linea' },
      { slug: "austin-kramer", linea: "red-line", tiempo: 2, tipo: 'linea' }
    ]
  },
  "austin-kramer": {
    linea: ["red-line"],
    ciudad: "austin",
    adyacentes: [
      { slug: "austin-crestview", linea: "red-line", tiempo: 2, tipo: 'linea' },
      { slug: "austin-howard", linea: "red-line", tiempo: 2, tipo: 'linea' }
    ]
  },
  "austin-howard": {
    linea: ["red-line"],
    ciudad: "austin",
    adyacentes: [
      { slug: "austin-kramer", linea: "red-line", tiempo: 2, tipo: 'linea' },
      { slug: "austin-lakeline", linea: "red-line", tiempo: 2, tipo: 'linea' }
    ]
  },
  "austin-lakeline": {
    linea: ["red-line"],
    ciudad: "austin",
    adyacentes: [
      { slug: "austin-howard", linea: "red-line", tiempo: 2, tipo: 'linea' },
      { slug: "austin-leander", linea: "red-line", tiempo: 2, tipo: 'linea' }
    ]
  },
  "austin-leander": {
    linea: ["red-line"],
    ciudad: "austin",
    adyacentes: [
      { slug: "austin-lakeline", linea: "red-line", tiempo: 2, tipo: 'linea' },
      { slug: "austin-mlk-jr", linea: "red-line", tiempo: 2, tipo: 'linea' }
    ]
  },
  "austin-mlk-jr": {
    linea: ["red-line"],
    ciudad: "austin",
    adyacentes: [
      { slug: "austin-leander", linea: "red-line", tiempo: 2, tipo: 'linea' }
    ]
  }
};
