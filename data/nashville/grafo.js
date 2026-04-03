export const grafoNashville = [
  {
    ciudad: "Nashville",
    nombre: "Riverfront Station",
    lineas: ["wego-star-blue"],
    adyacentes: [
      { slug: "nashville-metrocenter", tiempo: 8, linea: "wego-star-blue", tipo: "commuter-rail" }
    ]
  },
  {
    ciudad: "Nashville",
    nombre: "MetroCenter",
    lineas: ["wego-star-blue"],
    adyacentes: [
      { slug: "nashville-riverfront", tiempo: 8, linea: "wego-star-blue", tipo: "commuter-rail" },
      { slug: "nashville-mcgavock", tiempo: 8, linea: "wego-star-blue", tipo: "commuter-rail" }
    ]
  },
  {
    ciudad: "Nashville",
    nombre: "McGavock",
    lineas: ["wego-star-blue"],
    adyacentes: [
      { slug: "nashville-metrocenter", tiempo: 8, linea: "wego-star-blue", tipo: "commuter-rail" },
      { slug: "nashville-donelson", tiempo: 8, linea: "wego-star-blue", tipo: "commuter-rail" }
    ]
  },
  {
    ciudad: "Nashville",
    nombre: "Donelson",
    lineas: ["wego-star-blue"],
    adyacentes: [
      { slug: "nashville-mcgavock", tiempo: 8, linea: "wego-star-blue", tipo: "commuter-rail" },
      { slug: "nashville-briley", tiempo: 8, linea: "wego-star-blue", tipo: "commuter-rail" }
    ]
  },
  {
    ciudad: "Nashville",
    nombre: "Briley",
    lineas: ["wego-star-blue"],
    adyacentes: [
      { slug: "nashville-donelson", tiempo: 8, linea: "wego-star-blue", tipo: "commuter-rail" },
      { slug: "nashville-airport", tiempo: 8, linea: "wego-star-blue", tipo: "commuter-rail" }
    ]
  },
  {
    ciudad: "Nashville",
    nombre: "Nashville International Airport",
    lineas: ["wego-star-blue"],
    adyacentes: [
      { slug: "nashville-briley", tiempo: 8, linea: "wego-star-blue", tipo: "commuter-rail" },
      { slug: "nashville-antioch", tiempo: 8, linea: "wego-star-blue", tipo: "commuter-rail" }
    ]
  },
  {
    ciudad: "Nashville",
    nombre: "Antioch",
    lineas: ["wego-star-blue"],
    adyacentes: [
      { slug: "nashville-airport", tiempo: 8, linea: "wego-star-blue", tipo: "commuter-rail" }
    ]
  }
];
