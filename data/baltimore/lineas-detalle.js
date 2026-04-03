export const lineasDetalleBaltimore = [
  {
    id: "subway",
    color: "#00529B",
    colorNombre: "Azul oscuro",
    inicio: "Owings Mills",
    fin: "Hopkins Hospital",
    total: 14,
    municipios: ["Baltimore"],
    descripcion: "Metro SubwayLink de MTA Maryland - línea principal subterránea que conecta Owings Mills (oeste) con Johns Hopkins Hospital (este). Pasa por el corazón de Baltimore incluyendo Cultural Center, Charles Center y University of Maryland. Operativa de lunes a domingo, 5 AM a 11 PM, con trenes cada 5-10 minutos en horas pico. Es la columna vertebral del transporte público de Baltimore.",
    estaciones_turisticas: ["baltimore-cultural-center", "baltimore-charles-center", "baltimore-umd-maryland", "baltimore-hopkins-hospital"],
    estaciones: [
      "baltimore-owings-mills",
      "baltimore-gwynn-oak",
      "baltimore-roger-bacon",
      "baltimore-liberty-heights",
      "baltimore-fulton-avenue",
      "baltimore-umd-maryland",
      "baltimore-cultural-center",
      "baltimore-charles-center",
      "baltimore-hopkins-hospital"
    ],
    ruta_1_dia: {
      titulo: "Tour subterráneo de Baltimore: Owings Mills a Johns Hopkins",
      paradas: [
        { estacion: "baltimore-owings-mills", duracion: "1 hora", actividades: "Owings Mills Mall, suburban exploration" },
        { estacion: "baltimore-cultural-center", duracion: "2 horas", actividades: "Museums, cultural district" },
        { estacion: "baltimore-charles-center", duracion: "2 horas", actividades: "Downtown shopping, dining" },
        { estacion: "baltimore-hopkins-hospital", duracion: "1 hora", actividades: "Medical campus tour" }
      ]
    },
    tarifa: "$2.00 USD",
    frecuencia: "5-10 minutos (horas pico)",
    sistema: "MTA Maryland",
    ciudad: "baltimore"
  },
  {
    id: "lightrail",
    color: "#FFB81C",
    colorNombre: "Dorado",
    inicio: "Hunt Valley",
    fin: "Cromwell",
    total: 18,
    municipios: ["Baltimore"],
    descripcion: "Light RailLink de MTA Maryland - línea de tránsito rápido que conecta Hunt Valley (norte) con Cromwell (sur), pasando por el aeropuerto BWI. Sirve áreas residenciales y proporciona acceso crucial al aeropuerto. Operativa de lunes a domingo, 4:30 AM a 11:30 PM, con trenes cada 15 minutos. Importante conexión regional norte-sur.",
    estaciones_turisticas: ["baltimore-hunt-valley", "baltimore-bwi-airport", "baltimore-cromwell"],
    estaciones: [
      "baltimore-hunt-valley",
      "baltimore-mccormick-road",
      "baltimore-lutherville",
      "baltimore-timonium",
      "baltimore-linthicum",
      "baltimore-bwi-airport",
      "baltimore-cromwell"
    ],
    ruta_1_dia: {
      titulo: "Light Rail norte-sur: Hunt Valley a Cromwell",
      paradas: [
        { estacion: "baltimore-hunt-valley", duracion: "1.5 horas", actividades: "Hunt Valley Mall, shopping" },
        { estacion: "baltimore-bwi-airport", duracion: "2 horas", actividades: "Airport exploration, restaurants" },
        { estacion: "baltimore-cromwell", duracion: "1 hora", actividades: "Terminal area" }
      ]
    },
    tarifa: "$2.00 USD",
    frecuencia: "15 minutos",
    sistema: "MTA Maryland",
    ciudad: "baltimore"
  }
];
