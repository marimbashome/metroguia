export const lineasPhoenix = [
  {
    id: "light-rail",
    color: "#8B2131",
    colorNombre: "Rojo",
    inicio: "19th Ave/Montebello",
    fin: "Mesa Dr/Main St",
    total: 28,
    municipios: ["Phoenix", "Tempe", "Gilbert", "Mesa"],
    sistema: "Valley Metro",
    tarifa: "$2.00 USD",
    frecuencia: "10-15 minutos en horas pico",
    horario: "04:00 AM - 11:00 PM",
    descripcion: "Línea principal del Sistema Valley Metro Light Rail. Conecta el occidente de Phoenix (19th Ave/Montebello) con Mesa en el oriente, pasando por Tempe y Gilbert. Recorre aproximadamente 35 estaciones, atravesando tanto áreas residenciales como comerciales y de entretenimiento. Esta línea es la espina dorsal del transporte de tránsito de la región metropolitana del valle de Phoenix. Inaugurada en fases desde 2008, ha crecido significativamente para servir millones de pasajeros anuales. Operativa todos los días con acceso ADA completo en todas las estaciones.",
    estaciones_turisticas: ["phoenix-central-avenue", "phoenix-tempe-main-street", "phoenix-tempe-university", "phoenix-city-coliseum"],
    estaciones: [
      "phoenix-19th-ave-montebello",
      "phoenix-24th-ave-thomas",
      "phoenix-32nd-ave-washington",
      "phoenix-40th-ave-washington",
      "phoenix-48th-ave-washington",
      "phoenix-56th-ave-washington",
      "phoenix-central-avenue",
      "phoenix-metro-center-drive",
      "phoenix-jefferson-street",
      "phoenix-washington-street",
      "phoenix-camelback-road",
      "phoenix-highland-avenue",
      "phoenix-thomas-road",
      "phoenix-bethany-home-road",
      "phoenix-arizona-avenue",
      "phoenix-maryland-avenue",
      "phoenix-dunlap-avenue",
      "phoenix-city-coliseum",
      "phoenix-tempe-main-street",
      "phoenix-tempe-university",
      "phoenix-tempe-tech",
      "phoenix-gilbert-signal-butte",
      "phoenix-gilbert-main-street",
      "phoenix-mesa-main-street",
      "phoenix-mesa-dr-main-st"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por Valley Metro: De occidente a oriente",
      paradas: [
        {
          estacion: "phoenix-19th-ave-montebello",
          actividad: "Inicio en terminal occidental. Estacionamiento y cafeterías. (09:00 AM)"
        },
        {
          estacion: "phoenix-central-avenue",
          actividad: "Centro de Phoenix. Tiendas, restaurantes, arquitectura histórica. (10:30 AM)"
        },
        {
          estacion: "phoenix-city-coliseum",
          actividad: "Estadio de Phoenix. Instalaciones deportivas y eventos. (12:00 PM)"
        },
        {
          estacion: "phoenix-tempe-main-street",
          actividad: "Tempe centro. Mill Avenue, restaurantes, vida nocturna. (2:00 PM)"
        },
        {
          estacion: "phoenix-tempe-university",
          actividad: "Campus de Arizona State University. Museos y bibliotecas. (3:30 PM)"
        },
        {
          estacion: "phoenix-gilbert-main-street",
          actividad: "Gilbert centro. Tiendas y gastronomía. (5:00 PM)"
        },
        {
          estacion: "phoenix-mesa-main-street",
          actividad: "Mesa centro. Arts district y museos. Regresar. (6:30 PM)"
        }
      ]
    },
    transferencias_conectadas: [],
    accesibilidad_completa: true,
    notas: "La línea cuenta con vagones modernos con aire acondicionado, asientos para discapacitados y elevadores en todas las estaciones. Aceptan tarjeta PRONTO y cash."
  }
];
