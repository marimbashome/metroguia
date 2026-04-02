export const lineasMiami = [
  {
    id: "Green",
    color: "#00AA44",
    colorNombre: "Verde",
    inicio: "Palmetto",
    fin: "Dadeland South",
    total: 23,
    municipios: ["Miami", "Kendall"],
    descripcion: "La Línea Verde es la línea más larga del Miami Metrorail. Conecta Palmetto en el norte con Dadeland South en el sur. 23 estaciones atravesando North Miami, Downtown Miami, Brickell, y South Miami. Pasa por Government Center, Brickell, Coconut Grove, y Dadeland.",
    estaciones_turisticas: ["miami-government-center", "miami-brickell", "miami-coconut-grove", "miami-dadeland-north"],
    estaciones: [
      "palmetto",
      "okeechobee",
      "hialeah",
      "tri-rail",
      "northside",
      "mlk-plaza",
      "brownsville",
      "earlington-heights",
      "allapattah",
      "santa-clara",
      "miami-civic-center",
      "culmer",
      "historic-overtown",
      "miami-government-center",
      "miami-brickell",
      "vizcaya",
      "miami-coconut-grove",
      "douglas-road",
      "miami-university",
      "south-miami",
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
      "earlington-heights",
      "allapattah",
      "santa-clara",
      "miami-civic-center",
      "culmer",
      "historic-overtown",
      "miami-government-center",
      "miami-brickell",
      "vizcaya",
      "miami-coconut-grove",
      "douglas-road",
      "miami-university",
      "south-miami",
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
    total: 3,
    municipios: ["Miami"],
    descripcion: "Circuito Omni del Miami Metromover. Servicio COMPLETAMENTE GRATIS. 3 estaciones en el circuito: Omni, Government Center, Adrienne Arsht Center. Viajes cortos y rápidos entre North Miami y Downtown.",
    estaciones_turisticas: ["miami-metromover-omni"],
    estaciones: [
      "miami-metromover-omni",
      "miami-government-center",
      "adrienne-arsht"
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
          estacion: "adrienne-arsht",
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
    inicio: "Financial District",
    fin: "Financial District",
    total: 6,
    municipios: ["Miami"],
    descripcion: "Circuito Inner Loop del Miami Metromover. Servicio COMPLETAMENTE GRATIS. Conecta Financial District, Brickell, Museum Park, Adrienne Arsht Center, y Freedom Tower. 6 estaciones en circuito. Transporte rápido entre Downtown Miami.",
    estaciones_turisticas: ["miami-metromover-brickell", "miami-metromover-museum-park"],
    estaciones: [
      "financial-district",
      "miami-metromover-brickell",
      "miami-metromover-museum-park",
      "adrienne-arsht",
      "freedom-tower",
      "financial-district"
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
          estacion: "adrienne-arsht",
          actividad: "Adrienne Arsht Center (2:00 PM)"
        },
        {
          estacion: "freedom-tower",
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
      "financial-district",
      "miami-metromover-brickell",
      "college-north",
      "financial-district"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por Brickell Loop: Financial District GRATIS",
      paradas: [
        {
          estacion: "miami-metromover-brickell",
          actividad: "Brickell Avenue Financial District (9:00 AM)"
        },
        {
          estacion: "financial-district",
          actividad: "Mary Brickell Village (10:00 AM)"
        },
        {
          estacion: "college-north",
          actividad: "Restaurantes y bares de Brickell (12:00 PM)"
        }
      ],
      notas: "Brickell Loop es GRATIS. Perfecto para explorar el Financial District sin costo."
    }
  }
];
