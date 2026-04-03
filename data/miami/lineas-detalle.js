export const lineasMiami = [
  {
    id: "Green",
    color: "#00AA44",
    colorNombre: "Verde",
    inicio: "Palmetto",
    fin: "Dadeland South",
    total: 22,
    municipios: ["Miami", "Kendall"],
    descripcion: "La Línea Verde es la línea más larga del Miami Metrorail. Conecta Palmetto en el norte con Dadeland South en el sur. 22 estaciones atravesando North Miami, Downtown Miami, Brickell, y South Miami. Pasa por Government Center, Brickell, Coconut Grove, y Dadeland.",
    estaciones_turisticas: ["miami-government-center", "miami-brickell", "miami-coconut-grove", "miami-dadeland-north"],
    estaciones: [
      "miami-palmetto",
      "miami-okeechobee",
      "miami-hialeah",
      "miami-tri-rail-transfer",
      "miami-northside",
      "miami-mlk-plaza",
      "miami-brownsville",
      "miami-earlington-heights",
      "miami-allapattah",
      "miami-santa-clara",
      "miami-civic-center",
      "miami-culmer",
      "miami-historic-overtown",
      "miami-government-center",
      "miami-brickell",
      "miami-vizcaya",
      "miami-coconut-grove",
      "miami-douglas-road",
      "miami-university",
      "miami-south-miami",
      "miami-dadeland-north",
      "miami-dadeland-south"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por Green Line: Miami de norte a sur",
      paradas: [
        {
          estacion: "miami-government-center",
          actividad: "Inicio en Government Center y City Hall (9:00 AM)"
        },
        {
          estacion: "miami-brickell",
          actividad: "Financial District y Mary Brickell Village (10:30 AM)"
        },
        {
          estacion: "miami-coconut-grove",
          actividad: "Almuerzo en Coconut Grove (12:30 PM)"
        },
        {
          estacion: "miami-university",
          actividad: "Universidad de Miami campus (2:00 PM)"
        },
        {
          estacion: "miami-dadeland-north",
          actividad: "Shopping en Dadeland Mall (4:00 PM)"
        }
      ],
      notas: "Ruta completa que cubre lo mejor de Miami de norte a sur."
    }
  },
  {
    id: "Orange",
    color: "#FF8C00",
    colorNombre: "Naranja",
    inicio: "Miami Airport",
    fin: "Dadeland South",
    total: 16,
    municipios: ["Miami", "Kendall"],
    descripcion: "La Línea Naranja conecta Miami International Airport en el oeste con Dadeland South en el sureste. 16 estaciones. Acceso directo a aeropuerto. Comparte varias estaciones con Green Line en Downtown Miami.",
    estaciones_turisticas: ["miami-miami-airport", "miami-government-center", "miami-brickell", "miami-dadeland-south"],
    estaciones: [
      "miami-miami-airport",
      "miami-earlington-heights",
      "miami-allapattah",
      "miami-santa-clara",
      "miami-civic-center",
      "miami-culmer",
      "miami-historic-overtown",
      "miami-government-center",
      "miami-brickell",
      "miami-vizcaya",
      "miami-coconut-grove",
      "miami-douglas-road",
      "miami-university",
      "miami-south-miami",
      "miami-dadeland-north",
      "miami-dadeland-south"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por Orange Line: Aeropuerto a Dadeland",
      paradas: [
        {
          estacion: "miami-miami-airport",
          actividad: "Llegada al Aeropuerto (entrada/salida)"
        },
        {
          estacion: "miami-government-center",
          actividad: "Downtown Miami Centro (1 hora después de llegada)"
        },
        {
          estacion: "miami-brickell",
          actividad: "Almuerzo en Brickell (1:00 PM)"
        },
        {
          estacion: "miami-dadeland-north",
          actividad: "Compras en Dadeland Mall (3:00 PM)"
        }
      ],
      notas: "Línea ideal para viajeros que llegan al Aeropuerto. Conexión directa a Downtown y Brickell."
    }
  },
  {
    id: "Omni-Loop",
    color: "#FF0000",
    colorNombre: "Rojo",
    inicio: "Omni",
    fin: "Omni",
    total: 4,
    municipios: ["Miami"],
    descripcion: "Circuito Omni del Miami Metromover. Servicio COMPLETAMENTE GRATIS. 4 estaciones en el circuito: Omni, School Board, Adrienne Arsht Center, y Government Center. Viajes cortos y rápidos entre North Miami y Downtown.",
    estaciones_turisticas: ["miami-metromover-omni"],
    estaciones: [
      "miami-metromover-omni",
      "miami-metromover-school-board",
      "miami-metromover-adrienne-arsht",
      "miami-government-center"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por Omni Loop: GRATIS Metromover",
      paradas: [
        {
          estacion: "miami-metromover-omni",
          actividad: "Omni International Mall compras (10:00 AM)"
        },
        {
          estacion: "miami-government-center",
          actividad: "Circuito completo y transbordo a Metrorail (11:30 AM)"
        },
        {
          estacion: "miami-metromover-adrienne-arsht",
          actividad: "Adrienne Arsht Center artes (2:00 PM)"
        }
      ],
      notas: "Metromover es completamente GRATIS. Ideal para viajes cortos en el circuito Omni."
    }
  },
  {
    id: "Inner-Loop",
    color: "#0066FF",
    colorNombre: "Azul",
    inicio: "Freedom Tower",
    fin: "Brickell",
    total: 9,
    municipios: ["Miami"],
    descripcion: "Circuito Inner Loop del Miami Metromover. Servicio COMPLETAMENTE GRATIS. Conecta Freedom Tower, Adrienne Arsht Center, Government Center, College/Bayside, Bayfront Park, Knight Center, Financial District, Museum Park, y Brickell. 9 estaciones en circuito. Transporte rápido entre Downtown Miami.",
    estaciones_turisticas: ["miami-metromover-brickell", "miami-metromover-museum-park"],
    estaciones: [
      "miami-metromover-freedom-tower",
      "miami-metromover-adrienne-arsht",
      "miami-government-center",
      "miami-metromover-college-bayside",
      "miami-metromover-bayfront-park",
      "miami-metromover-knight-center",
      "miami-metromover-financial-district",
      "miami-metromover-museum-park",
      "miami-metromover-brickell"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por Inner Loop: Downtown GRATIS",
      paradas: [
        {
          estacion: "miami-metromover-brickell",
          actividad: "Brickell Financial District (10:00 AM)"
        },
        {
          estacion: "miami-metromover-museum-park",
          actividad: "Museum Park y Vizcaya (12:00 PM)"
        },
        {
          estacion: "miami-metromover-adrienne-arsht",
          actividad: "Adrienne Arsht Center (2:00 PM)"
        },
        {
          estacion: "miami-metromover-freedom-tower",
          actividad: "Freedom Tower cultural (3:00 PM)"
        }
      ],
      notas: "Inner Loop es GRATIS. Circuito rápido que conecta lo mejor del Downtown Miami."
    }
  },
  {
    id: "Brickell-Loop",
    color: "#FFD700",
    colorNombre: "Dorado",
    inicio: "Brickell",
    fin: "Brickell",
    total: 4,
    municipios: ["Miami"],
    descripcion: "Circuito Brickell Loop del Miami Metromover. Servicio COMPLETAMENTE GRATIS. 4 estaciones dedicadas a Brickell Financial District. Viajes rápidos entre bancos, oficinas, y restaurantes de Brickell Avenue.",
    estaciones_turisticas: ["miami-metromover-brickell"],
    estaciones: [
      "miami-metromover-financial-district",
      "miami-metromover-brickell-city-centre",
      "miami-metromover-fifth-street",
      "miami-metromover-brickell"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por Brickell Loop: Financial District GRATIS",
      paradas: [
        {
          estacion: "miami-metromover-brickell",
          actividad: "Brickell Avenue Financial District (9:00 AM)"
        },
        {
          estacion: "miami-metromover-financial-district",
          actividad: "Mary Brickell Village (10:00 AM)"
        },
        {
          estacion: "miami-metromover-brickell-city-centre",
          actividad: "Restaurantes y bares de Brickell (12:00 PM)"
        }
      ],
      notas: "Brickell Loop es GRATIS. Perfecto para explorar el Financial District sin costo."
    }
  },
  {
    id: "Tri-Rail",
    color: "#006B3F",
    colorNombre: "Verde Oscuro",
    inicio: "Miami Airport",
    fin: "West Palm Beach",
    total: 6,
    municipios: ["Miami", "Hollywood", "Fort Lauderdale", "Boca Raton", "Delray Beach", "West Palm Beach"],
    descripcion: "Tri-Rail es el tren de cercanías del sur de Florida. Conecta Miami International Airport con West Palm Beach, pasando por Hollywood, Fort Lauderdale, Boca Raton y Delray Beach. Tarifa $2.50-$8.75 USD según distancia. Frecuencia cada 20-60 minutos.",
    estaciones_turisticas: ["miami-tri-rail-mia", "miami-tri-rail-fort-lauderdale", "miami-tri-rail-west-palm-beach"],
    estaciones: [
      "miami-tri-rail-mia",
      "miami-tri-rail-hollywood",
      "miami-tri-rail-fort-lauderdale",
      "miami-tri-rail-boca-raton",
      "miami-tri-rail-delray-beach",
      "miami-tri-rail-west-palm-beach"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por Tri-Rail: Miami a Fort Lauderdale",
      paradas: [
        {
          estacion: "miami-tri-rail-mia",
          actividad: "Salida desde Miami Airport (8:00 AM)"
        },
        {
          estacion: "miami-tri-rail-hollywood",
          actividad: "Hollywood Beach paseo (10:00 AM)"
        },
        {
          estacion: "miami-tri-rail-fort-lauderdale",
          actividad: "Las Olas Blvd y riverwalk (12:00 PM)"
        },
        {
          estacion: "miami-tri-rail-boca-raton",
          actividad: "Mizner Park shopping (3:00 PM)"
        }
      ],
      notas: "Tri-Rail es ideal para explorar South Florida fuera de Miami. Tarifa económica por zonas."
    }
  },
  {
    id: "Brightline",
    color: "#FFD100",
    colorNombre: "Amarillo Brightline",
    inicio: "Miami",
    fin: "Orlando",
    total: 4,
    municipios: ["Miami", "Fort Lauderdale", "West Palm Beach", "Orlando"],
    descripcion: "Brightline (Virgin Trains USA) es el tren de alta velocidad privado de Florida. Conecta MiamiCentral con Orlando International Airport en ~3.5 horas, con paradas en Fort Lauderdale y West Palm Beach. Velocidad hasta 200 km/h. Tarifa $20-$79 USD. Servicio premium con WiFi, enchufes y snack bar.",
    estaciones_turisticas: ["brightline-miami", "brightline-fort-lauderdale", "brightline-orlando"],
    estaciones: [
      "brightline-miami",
      "brightline-fort-lauderdale",
      "brightline-west-palm-beach",
      "brightline-orlando"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por Brightline: Miami a Orlando",
      paradas: [
        {
          estacion: "brightline-miami",
          actividad: "Salida desde MiamiCentral downtown (7:00 AM)"
        },
        {
          estacion: "brightline-fort-lauderdale",
          actividad: "Fort Lauderdale Beach (9:00 AM — parada opcional)"
        },
        {
          estacion: "brightline-west-palm-beach",
          actividad: "Worth Avenue y Norton Museum (11:00 AM — parada opcional)"
        },
        {
          estacion: "brightline-orlando",
          actividad: "Orlando/Disney connection (12:30 PM)"
        }
      ],
      notas: "Brightline es la forma más rápida de viajar entre Miami y Orlando sin auto. Reservar con anticipación para mejores precios. WiFi y enchufes en todos los asientos."
    }
  }
];
