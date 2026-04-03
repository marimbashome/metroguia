export const lineasDetallePittsburgh = [
  {
    id: "red",
    color: "#DA291C",
    colorNombre: "Rojo",
    inicio: "Library",
    fin: "Station Square",
    total: 6,
    municipios: ["Pittsburgh"],
    descripcion: "Línea roja del PRT T que conecta la zona cultural de Library hasta Station Square. Pasa por el corazón del centro de Pittsburgh, conectando el Benedum Center, Market Square y los principales puntos de interés turístico. Operativa de lunes a domingo, 4 AM a 11 PM, con trenes cada 5-10 minutos en horas pico. Es la línea más transitada del sistema.",
    estaciones_turisticas: ["pittsburgh-library", "pittsburgh-smithfield-street", "pittsburgh-steel-plaza", "pittsburgh-station-square"],
    estaciones: [
      "pittsburgh-library",
      "pittsburgh-fifth-ave",
      "pittsburgh-wood-street",
      "pittsburgh-smithfield-street",
      "pittsburgh-steel-plaza",
      "pittsburgh-station-square"
    ],
    ruta_1_dia: {
      titulo: "Tour cultural de 1 día: Red Line de Library a Station Square",
      paradas: [
        { estacion: "pittsburgh-library", duracion: "2 horas", actividades: "Carnegie Library, Benedum Center" },
        { estacion: "pittsburgh-smithfield-street", duracion: "1 hora", actividades: "Market Square, historic district" },
        { estacion: "pittsburgh-station-square", duracion: "2 horas", actividades: "Shopping, dining, riverside" }
      ]
    },
    tarifa: "$2.75 USD",
    frecuencia: "5-10 minutos (horas pico)",
    sistema: "PRT T",
    ciudad: "pittsburgh"
  },
  {
    id: "blue",
    color: "#0033A0",
    colorNombre: "Azul",
    inicio: "South Hills Village",
    fin: "Gateway",
    total: 10,
    municipios: ["Pittsburgh"],
    descripcion: "Línea azul del PRT T que conecta South Hills Village (sur) con Gateway (centro). Sirve los barrios residenciales del sur y tiene dos puntos de transferencia: Overbrook Junction (con Silver Line) y Steel Plaza (con Red y Silver Lines). Operativa de lunes a domingo, 4:30 AM a 10:30 PM, con trenes cada 10 minutos. Importante conexión hacia downtown.",
    estaciones_turisticas: ["pittsburgh-gateway-center", "pittsburgh-gateway", "pittsburgh-steel-plaza"],
    estaciones: [
      "pittsburgh-south-hills-village",
      "pittsburgh-castle-shannon",
      "pittsburgh-bank-street",
      "pittsburgh-overbrook",
      "pittsburgh-gateway-center",
      "pittsburgh-gateway"
    ],
    ruta_1_dia: {
      titulo: "South Hills a Downtown: Blue Line complete",
      paradas: [
        { estacion: "pittsburgh-south-hills-village", duracion: "1.5 horas", actividades: "South Hills Village Mall, retail" },
        { estacion: "pittsburgh-overbrook", duracion: "0.5 horas", actividades: "Transfer to Silver Line" },
        { estacion: "pittsburgh-gateway", duracion: "3 horas", actividades: "Point State Park, downtown" }
      ]
    },
    tarifa: "$2.75 USD",
    frecuencia: "10 minutos",
    sistema: "PRT T",
    ciudad: "pittsburgh"
  },
  {
    id: "silver",
    color: "#A7A8AA",
    colorNombre: "Plata",
    inicio: "Overbrook Junction",
    fin: "Station Square",
    total: 4,
    municipios: ["Pittsburgh"],
    descripcion: "Línea plata del PRT T que conecta Overbrook Junction (sur) con Station Square (downtown). Pasa por el barrio residencial de Dormont y tiene transferencia en Overbrook Junction con la Blue Line. Ruta más corta del sistema, ideal para acceso rápido al centro desde el sur. Operativa de lunes a domingo, 4:30 AM a 10:30 PM, con trenes cada 15 minutos.",
    estaciones_turisticas: ["pittsburgh-station-square"],
    estaciones: [
      "pittsburgh-overbrook",
      "pittsburgh-dormont",
      "pittsburgh-station-square"
    ],
    ruta_1_dia: {
      titulo: "Silver Line express: Dormont a Station Square",
      paradas: [
        { estacion: "pittsburgh-overbrook", duracion: "0.5 horas", actividades: "Transfer to/from Blue Line" },
        { estacion: "pittsburgh-dormont", duracion: "1 hora", actividades: "Residential exploration" },
        { estacion: "pittsburgh-station-square", duracion: "2 horas", actividades: "Shopping, dining" }
      ]
    },
    tarifa: "$2.75 USD",
    frecuencia: "15 minutos",
    sistema: "PRT T",
    ciudad: "pittsburgh"
  }
];
