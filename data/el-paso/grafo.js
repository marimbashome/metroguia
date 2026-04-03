export const grafoElPaso = {
  "el-paso-downtown-transfer-center": {
    linea: ["streetcar"],
    ciudad: "el-paso",
    adyacentes: [
      { estacion: "el-paso-oregon-father-rahm", linea: "streetcar", tiempo: 3 }
    ]
  },
  "el-paso-oregon-father-rahm": {
    linea: ["streetcar"],
    ciudad: "el-paso",
    adyacentes: [
      { estacion: "el-paso-downtown-transfer-center", linea: "streetcar", tiempo: 3 },
      { estacion: "el-paso-oregon-2nd", linea: "streetcar", tiempo: 3 }
    ]
  },
  "el-paso-oregon-2nd": {
    linea: ["streetcar"],
    ciudad: "el-paso",
    adyacentes: [
      { estacion: "el-paso-oregon-father-rahm", linea: "streetcar", tiempo: 3 },
      { estacion: "el-paso-oregon-san-antonio", linea: "streetcar", tiempo: 3 }
    ]
  },
  "el-paso-oregon-san-antonio": {
    linea: ["streetcar"],
    ciudad: "el-paso",
    adyacentes: [
      { estacion: "el-paso-oregon-2nd", linea: "streetcar", tiempo: 3 },
      { estacion: "el-paso-stanton-mills", linea: "streetcar", tiempo: 3 }
    ]
  },
  "el-paso-stanton-mills": {
    linea: ["streetcar"],
    ciudad: "el-paso",
    adyacentes: [
      { estacion: "el-paso-oregon-san-antonio", linea: "streetcar", tiempo: 3 },
      { estacion: "el-paso-stanton-franklin", linea: "streetcar", tiempo: 3 }
    ]
  },
  "el-paso-stanton-franklin": {
    linea: ["streetcar"],
    ciudad: "el-paso",
    adyacentes: [
      { estacion: "el-paso-stanton-mills", linea: "streetcar", tiempo: 3 },
      { estacion: "el-paso-oregon-mesa", linea: "streetcar", tiempo: 3 }
    ]
  },
  "el-paso-oregon-mesa": {
    linea: ["streetcar"],
    ciudad: "el-paso",
    adyacentes: [
      { estacion: "el-paso-stanton-franklin", linea: "streetcar", tiempo: 3 },
      { estacion: "el-paso-oregon-glory", linea: "streetcar", tiempo: 3 }
    ]
  },
  "el-paso-oregon-glory": {
    linea: ["streetcar"],
    ciudad: "el-paso",
    adyacentes: [
      { estacion: "el-paso-oregon-mesa", linea: "streetcar", tiempo: 3 },
      { estacion: "el-paso-oregon-baltimore", linea: "streetcar", tiempo: 3 }
    ]
  },
  "el-paso-oregon-baltimore": {
    linea: ["streetcar"],
    ciudad: "el-paso",
    adyacentes: [
      { estacion: "el-paso-oregon-glory", linea: "streetcar", tiempo: 3 },
      { estacion: "el-paso-paisano-santa-fe", linea: "streetcar", tiempo: 3 }
    ]
  },
  "el-paso-paisano-santa-fe": {
    linea: ["streetcar"],
    ciudad: "el-paso",
    adyacentes: [
      { estacion: "el-paso-oregon-baltimore", linea: "streetcar", tiempo: 3 }
    ]
  }
};
