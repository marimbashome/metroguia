export const lineasVANCOUVER = [
  {
    id: "Expo",
    color: "#FF6B35",
    colorNombre: "Naranja",
    inicio: "Waterfront",
    fin: "King George",
    total: 20,
    municipios: ["Vancouver", "Burnaby", "Surrey"],
    descripcion: "Línea Expo de TransLink SkyTrain Vancouver. Línea original del sistema, operando desde 1986. Recorrido de 20.5 km con 20 estaciones. Conecta el centro turístico de Vancouver (Waterfront) con ciudades surenas (Burnaby, Surrey). Paso por Stadium-Chinatown, Science World y Metrotown.",
    estaciones_turisticas: ["vancouver-waterfront", "vancouver-stadium-chinatown", "vancouver-main-street-science-world", "vancouver-metrotown"],
    estaciones: [
      "vancouver-waterfront",
      "vancouver-burrard",
      "vancouver-granville",
      "vancouver-stadium-chinatown",
      "vancouver-main-street-science-world",
      "vancouver-commercial-broadway",
      "vancouver-metrotown",
      "vancouver-king-george"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por la Línea Expo: Centro cultural y comercial de Vancouver",
      paradas: [
        {
          estacion: "vancouver-waterfront",
          actividad: "Inicio en Waterfront. Hub multimodal (8:00 AM)"
        },
        {
          estacion: "vancouver-granville",
          actividad: "Granville Street entretenimiento (9:30 AM)"
        },
        {
          estacion: "vancouver-stadium-chinatown",
          actividad: "BC Place y Chinatown (11:00 AM)"
        },
        {
          estacion: "vancouver-main-street-science-world",
          actividad: "Science World (1:00 PM)"
        },
        {
          estacion: "vancouver-commercial-broadway",
          actividad: "Commercial Drive tiendas locales (3:00 PM)"
        },
        {
          estacion: "vancouver-metrotown",
          actividad: "Metropolis shopping (4:30 PM)"
        }
      ]
    }
  },

  {
    id: "Millennium",
    color: "#238D5B",
    colorNombre: "Verde",
    inicio: "VCC-Clark",
    fin: "Lafarge Lake-Douglas",
    total: 17,
    municipios: ["Vancouver", "Burnaby", "Port Moody", "Coquitlam"],
    descripcion: "Línea Millennium de TransLink SkyTrain Vancouver. Operando desde 2002. Recorrido de 19.3 km con 17 estaciones. Conecta este de Vancouver (VCC-Clark) hacia Port Moody y Coquitlam. Comparte transbordo con Expo Line en Commercial-Broadway. Pasa por zonas residenciales y educativas.",
    estaciones_turisticas: ["vancouver-vcc-clark", "vancouver-commercial-broadway", "vancouver-lafarge-lake-douglas"],
    estaciones: [
      "vancouver-vcc-clark",
      "vancouver-commercial-broadway",
      "vancouver-lafarge-lake-douglas"
    ],
    ruta_1_dia: {
      titulo: "Ruta por la Línea Millennium: Este de Vancouver y suburbios",
      paradas: [
        {
          estacion: "vancouver-vcc-clark",
          actividad: "Inicio en VCC-Clark (9:00 AM) - Vancouver Community College"
        },
        {
          estacion: "vancouver-commercial-broadway",
          actividad: "Commercial-Broadway transbordo (10:30 AM) - tiendas locales"
        },
        {
          estacion: "vancouver-lafarge-lake-douglas",
          actividad: "Lafarge Lake-Douglas (12:00 PM) - terminal este"
        }
      ]
    }
  },

  {
    id: "Canada",
    color: "#1E90FF",
    colorNombre: "Azul",
    inicio: "Waterfront",
    fin: "YVR-Airport / Richmond-Brighouse",
    total: 16,
    municipios: ["Vancouver", "Richmond"],
    descripcion: "Línea Canada de TransLink SkyTrain Vancouver. Operando desde 2009. Recorrido de 19.2 km con 16 estaciones. Conecta Downtown Vancouver con Aeropuerto Internacional de Vancouver (YVR) y Richmond. Línea moderna con acceso directo al aeropuerto, cumpliendo función crítica para turismo y viajeros.",
    estaciones_turisticas: ["vancouver-waterfront", "vancouver-yvr-airport", "vancouver-richmond-brighouse"],
    estaciones: [
      "vancouver-waterfront",
      "vancouver-yvr-airport",
      "vancouver-richmond-brighouse"
    ],
    ruta_1_dia: {
      titulo: "Ruta por la Línea Canada: Aeropuerto y Richmond",
      paradas: [
        {
          estacion: "vancouver-waterfront",
          actividad: "Inicio en Waterfront (8:00 AM)"
        },
        {
          estacion: "vancouver-yvr-airport",
          actividad: "YVR-Airport (9:00 AM) - Aeropuerto Internacional"
        },
        {
          estacion: "vancouver-richmond-brighouse",
          actividad: "Richmond-Brighouse (10:00 AM) - Richmond Centre"
        }
      ]
    }
  },

  {
    id: "SeaBus",
    color: "#50C878",
    colorNombre: "Verde mar",
    inicio: "Waterfront",
    fin: "Lonsdale Quay",
    total: 2,
    municipios: ["Vancouver", "North Vancouver"],
    descripcion: "SeaBus de TransLink. Sistema de ferry que complementa el SkyTrain. Conecta Downtown Vancouver (Waterfront) con North Vancouver (Lonsdale Quay). 17 minutos de travesía. Acceso opcional para turismo marino.",
    estaciones_turisticas: ["vancouver-waterfront"],
    estaciones: [
      "vancouver-waterfront"
    ],
    ruta_1_dia: {
      titulo: "Ruta opcional: SeaBus a North Vancouver",
      paradas: [
        {
          estacion: "vancouver-waterfront",
          actividad: "Waterfront SeaBus Terminal (4:00 PM) - 17 min travesía a Lonsdale Quay"
        }
      ]
    }
  }
];

export { lineasVANCOUVER as lineasVancouver };
