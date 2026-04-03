export const grafoElPaso = {
  "el-paso-downtown-transfer-center": {
    linea: ["streetcar"],
    ciudad: "el-paso",
    adyacentes: [
      { slug: "el-paso-oregon-father-rahm", linea: "streetcar", tiempo: 3, tipo: 'linea' }
    ]
  },
  "el-paso-oregon-father-rahm": {
    linea: ["streetcar"],
    ciudad: "el-paso",
    adyacentes: [
      { slug: "el-paso-downtown-transfer-center", linea: "streetcar", tiempo: 3, tipo: 'linea' },
      { slug: "el-paso-oregon-2nd", linea: "streetcar", tiempo: 3, tipo: 'linea' }
    ]
  },
  "el-paso-oregon-2nd": {
    linea: ["streetcar"],
    ciudad: "el-paso",
    adyacentes: [
      { slug: "el-paso-oregon-father-rahm", linea: "streetcar", tiempo: 3, tipo: 'linea' },
      { slug: "el-paso-oregon-san-antonio", linea: "streetcar", tiempo: 3, tipo: 'linea' }
    ]
  },
  "el-paso-oregon-san-antonio": {
    linea: ["streetcar"],
    ciudad: "el-paso",
    adyacentes: [
      { slug: "el-paso-oregon-2nd", linea: "streetcar", tiempo: 3, tipo: 'linea' },
      { slug: "el-paso-stanton-mills", linea: "streetcar", tiempo: 3, tipo: 'linea' }
    ]
  },
  "el-paso-stanton-mills": {
    linea: ["streetcar"],
    ciudad: "el-paso",
    adyacentes: [
      { slug: "el-paso-oregon-san-antonio", linea: "streetcar", tiempo: 3, tipo: 'linea' },
      { slug: "el-paso-stanton-franklin", linea: "streetcar", tiempo: 3, tipo: 'linea' }
    ]
  },
  "el-paso-stanton-franklin": {
    linea: ["streetcar"],
    ciudad: "el-paso",
    adyacentes: [
      { slug: "el-paso-stanton-mills", linea: "streetcar", tiempo: 3, tipo: 'linea' },
      { slug: "el-paso-oregon-mesa", linea: "streetcar", tiempo: 3, tipo: 'linea' }
    ]
  },
  "el-paso-oregon-mesa": {
    linea: ["streetcar"],
    ciudad: "el-paso",
    adyacentes: [
      { slug: "el-paso-stanton-franklin", linea: "streetcar", tiempo: 3, tipo: 'linea' },
      { slug: "el-paso-oregon-glory", linea: "streetcar", tiempo: 3, tipo: 'linea' }
    ]
  },
  "el-paso-oregon-glory": {
    linea: ["streetcar"],
    ciudad: "el-paso",
    adyacentes: [
      { slug: "el-paso-oregon-mesa", linea: "streetcar", tiempo: 3, tipo: 'linea' },
      { slug: "el-paso-oregon-baltimore", linea: "streetcar", tiempo: 3, tipo: 'linea' }
    ]
  },
  "el-paso-oregon-baltimore": {
    linea: ["streetcar"],
    ciudad: "el-paso",
    adyacentes: [
      { slug: "el-paso-oregon-glory", linea: "streetcar", tiempo: 3, tipo: 'linea' },
      { slug: "el-paso-paisano-santa-fe", linea: "streetcar", tiempo: 3, tipo: 'linea' }
    ]
  },
  "el-paso-paisano-santa-fe": {
    linea: ["streetcar"],
    ciudad: "el-paso",
    adyacentes: [
      { slug: "el-paso-oregon-baltimore", linea: "streetcar", tiempo: 3, tipo: 'linea' }
    ]
  }
};
