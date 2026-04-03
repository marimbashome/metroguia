export const lineasDetalleCharlotte = [
  {
    id: "blue",
    color: "#0055A4",
    colorNombre: "Azul",
    inicio: "UNC Charlotte Main",
    fin: "South Boulevard",
    total: 14,
    municipios: ["Charlotte"],
    descripcion: "Línea azul del CATS LYNX que conecta UNC Charlotte (norte) con South Boulevard (sur), pasando por el corazón del centro de Charlotte. Pasa por el campus universitario, los barrios históricos del North Davidson, y la vibrante escena del South End con sus restaurantes y entretenimiento. Operativa de lunes a domingo, 5 AM a 11 PM, con trenes cada 10 minutos en horas pico. Es la columna vertebral del transporte de Charlotte.",
    estaciones_turisticas: ["charlotte-north-davidson", "charlotte-9th-street", "charlotte-3rd-street", "charlotte-bankhead"],
    estaciones: [
      "charlotte-unc-charlotte-main",
      "charlotte-mccullough-drive",
      "charlotte-liberty-lane",
      "charlotte-north-davidson",
      "charlotte-36th-street",
      "charlotte-9th-street",
      "charlotte-7th-street",
      "charlotte-3rd-street",
      "charlotte-bankhead",
      "charlotte-carson-boulevard",
      "charlotte-woodlawn",
      "charlotte-south-boulevard"
    ],
    ruta_1_dia: {
      titulo: "Blue Line norte-sur: Tour completo de Charlotte",
      paradas: [
        { estacion: "charlotte-unc-charlotte-main", duracion: "1.5 horas", actividades: "University campus, campus life" },
        { estacion: "charlotte-north-davidson", duracion: "2 horas", actividades: "Arts district, galleries, street art" },
        { estacion: "charlotte-3rd-street", duracion: "2 horas", actividades: "Downtown, business district, shopping" },
        { estacion: "charlotte-bankhead", duracion: "2 horas", actividades: "South End restaurants, entertainment" }
      ]
    },
    tarifa: "$2.20 USD",
    frecuencia: "10 minutos (horas pico)",
    sistema: "CATS LYNX",
    ciudad: "charlotte"
  },
  {
    id: "gold",
    color: "#FFB81C",
    colorNombre: "Dorado",
    inicio: "Rosa Parks Place",
    fin: "Sunnyside Avenue",
    total: 5,
    municipios: ["Charlotte"],
    descripcion: "Línea dorada del CityLYNX - streetcar de tránsito rápido que conecta Rosa Parks Place (oeste) con Sunnyside Avenue (este). Esta línea de tranvía histórico recorre el centro de Charlotte, incluyendo el Centro de Convenciones y el Centro de Viajes. Operativa de lunes a domingo, 6 AM a 10 PM, con tranvías cada 15 minutos. Ideal para exploración del centro sin vehículo.",
    estaciones_turisticas: ["charlotte-rosa-parks-place", "charlotte-convention-center", "charlotte-sunnyside-avenue"],
    estaciones: [
      "charlotte-rosa-parks-place",
      "charlotte-travelcenter",
      "charlotte-convention-center",
      "charlotte-sunnyside-avenue"
    ],
    ruta_1_dia: {
      titulo: "Gold Line streetcar: Downtown Charlotte experience",
      paradas: [
        { estacion: "charlotte-rosa-parks-place", duracion: "1 hora", actividades: "Transit center, hub exploration" },
        { estacion: "charlotte-convention-center", duracion: "1.5 horas", actividades: "Convention center tours (if events)" },
        { estacion: "charlotte-sunnyside-avenue", duracion: "1 hora", actividades: "Community exploration" }
      ]
    },
    tarifa: "$2.20 USD",
    frecuencia: "15 minutos",
    sistema: "CATS LYNX",
    ciudad: "charlotte"
  }
];
