export const lineasVANCOUVER = [
  {
    id: "Expo",
    color: "#1A5BA4",
    colorNombre: "Azul",
    inicio: "Waterfront",
    fin: "King George",
    total: 20,
    municipios: ["Vancouver", "Burnaby", "New Westminster", "Surrey"],
    descripcion: "Expo Line — línea original del SkyTrain de Vancouver, inaugurada en 1985 para la Expo 86. 29.2 km con 20 estaciones desde Waterfront (Downtown) hasta King George (Surrey). Recorre el centro, Burnaby, New Westminster y Surrey. Automated light metro sin conductor.",
    estaciones_turisticas: [
      "vancouver-waterfront",
      "vancouver-stadium-chinatown",
      "vancouver-main-street-science-world",
      "vancouver-commercial-broadway",
      "vancouver-metrotown",
      "vancouver-new-westminster"
    ],
    estaciones: [
      "vancouver-waterfront",
      "vancouver-burrard",
      "vancouver-granville",
      "vancouver-stadium-chinatown",
      "vancouver-main-street-science-world",
      "vancouver-commercial-broadway",
      "vancouver-nanaimo",
      "vancouver-29th-avenue",
      "vancouver-joyce-collingwood",
      "vancouver-patterson",
      "vancouver-metrotown",
      "vancouver-royal-oak",
      "vancouver-edmonds",
      "vancouver-22nd-street",
      "vancouver-new-westminster",
      "vancouver-columbia",
      "vancouver-scott-road",
      "vancouver-gateway",
      "vancouver-surrey-central",
      "vancouver-king-george"
    ],
    ruta_1_dia: {
      titulo: "Expo Line: Downtown to Surrey — Historic Metro Tour",
      paradas: [
        { estacion: "vancouver-waterfront", actividad: "Inicio en Waterfront Station, centro de transporte de Vancouver" },
        { estacion: "vancouver-stadium-chinatown", actividad: "Explora Chinatown, BC Place Stadium y barrio histórico" },
        { estacion: "vancouver-main-street-science-world", actividad: "Visita Science World, museos, parques alrededor de Concord Plaza" },
        { estacion: "vancouver-commercial-broadway", actividad: "Transbordo a Millennium Line, cafeterías y tiendas locales" },
        { estacion: "vancouver-metrotown", actividad: "Brentwood Town Centre, centro comercial de Burnaby" },
        { estacion: "vancouver-king-george", actividad: "Llega a Surrey, fin de línea, exploración de South Surrey" }
      ]
    }
  },
  {
    id: "Millennium",
    color: "#FFD520",
    colorNombre: "Amarillo",
    inicio: "VCC-Clark",
    fin: "Lafarge Lake-Douglas",
    total: 17,
    municipios: ["Vancouver", "Burnaby", "Port Moody", "Coquitlam"],
    descripcion: "Millennium Line — segunda línea SkyTrain inaugurada en 2002, extendida con Evergreen Extension (2016) hasta Coquitlam. 25.3 km con 17 estaciones. Conecta East Vancouver con Burnaby, Port Moody y Coquitlam. Transbordo con Expo Line en Commercial-Broadway.",
    estaciones_turisticas: [
      "vancouver-vcc-clark",
      "vancouver-commercial-broadway",
      "vancouver-brentwood-town-centre",
      "vancouver-lougheed-town-centre",
      "vancouver-moody-centre",
      "vancouver-lafarge-lake-douglas"
    ],
    estaciones: [
      "vancouver-vcc-clark",
      "vancouver-commercial-broadway",
      "vancouver-renfrew",
      "vancouver-rupert",
      "vancouver-gilmore",
      "vancouver-brentwood-town-centre",
      "vancouver-holdom",
      "vancouver-sperling-burnaby-lake",
      "vancouver-lake-city-way",
      "vancouver-production-way-university",
      "vancouver-lougheed-town-centre",
      "vancouver-burquitlam",
      "vancouver-moody-centre",
      "vancouver-inlet-centre",
      "vancouver-coquitlam-central",
      "vancouver-lincoln",
      "vancouver-lafarge-lake-douglas"
    ],
    ruta_1_dia: {
      titulo: "Millennium Line: East Vancouver to Coquitlam — Craft Breweries & Tech Parks",
      paradas: [
        { estacion: "vancouver-vcc-clark", actividad: "Inicio en VCC-Clark, Vancouver Community College, barrio artístico" },
        { estacion: "vancouver-commercial-broadway", actividad: "Transbordo Expo Line, tiendas, cafeterías de Commercial Drive" },
        { estacion: "vancouver-brentwood-town-centre", actividad: "Brentwood Shopping Centre, parques, restoranes variados" },
        { estacion: "vancouver-lougheed-town-centre", actividad: "Lougheed Town Centre, breweries cercanas (Steamworks, R&B Brewing)" },
        { estacion: "vancouver-moody-centre", actividad: "Moody Centre, exploración de Port Moody waterfront y breweries" },
        { estacion: "vancouver-lafarge-lake-douglas", actividad: "Lafarge Lake, parques naturales, fin de Evergreen Extension en Coquitlam" }
      ]
    }
  },
  {
    id: "Canada",
    color: "#00B5AD",
    colorNombre: "Turquesa",
    inicio: "Waterfront",
    fin: "YVR-Airport / Richmond-Brighouse",
    total: 16,
    municipios: ["Vancouver", "Richmond"],
    descripcion: "Canada Line — inaugurada en 2009 para los Juegos Olímpicos de Invierno 2010. 19.2 km con 16 estaciones. Conecta Downtown con Aeropuerto YVR y Richmond. Se bifurca en Bridgeport: ramal al aeropuerto y ramal a Richmond. Línea más moderna del sistema.",
    estaciones_turisticas: [
      "vancouver-waterfront",
      "vancouver-vancouver-city-centre",
      "vancouver-yaletown-roundhouse",
      "vancouver-olympic-village",
      "vancouver-yvr-airport",
      "vancouver-richmond-brighouse"
    ],
    estaciones: [
      "vancouver-waterfront",
      "vancouver-vancouver-city-centre",
      "vancouver-yaletown-roundhouse",
      "vancouver-olympic-village",
      "vancouver-broadway-city-hall",
      "vancouver-king-edward",
      "vancouver-oakridge-41st-avenue",
      "vancouver-langara-49th-avenue",
      "vancouver-marine-drive",
      "vancouver-bridgeport",
      "vancouver-templeton",
      "vancouver-sea-island-centre",
      "vancouver-yvr-airport",
      "vancouver-aberdeen",
      "vancouver-lansdowne",
      "vancouver-richmond-brighouse"
    ],
    ruta_1_dia: {
      titulo: "Canada Line: Downtown to Richmond — Olympic Legacy & Beach Culture",
      paradas: [
        { estacion: "vancouver-waterfront", actividad: "Inicio en Waterfront Station, vistas a la bahía y Burrard Inlet" },
        { estacion: "vancouver-yaletown-roundhouse", actividad: "Yaletown, olímpico Roundhouse, arquitectura reutilizada de 2010" },
        { estacion: "vancouver-olympic-village", actividad: "Olympic Village, residencias olímpicas, parque de 2010" },
        { estacion: "vancouver-broadway-city-hall", actividad: "Broadway-City Hall, cultura alternativa, tiendas locales" },
        { estacion: "vancouver-yvr-airport", actividad: "YVR Airport Terminal, conexión aeroportuaria principal de BC" },
        { estacion: "vancouver-richmond-brighouse", actividad: "Richmond-Brighouse, barrio chino de Richmond, gastronomía asiática" }
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
    descripcion: "SeaBus — servicio de ferry de TransLink que cruza Burrard Inlet entre Downtown Vancouver y North Vancouver. 12 minutos de travesía con vistas panorámicas. 2 terminales. Acepta Compass Card (misma tarifa que SkyTrain). Sale cada 15 min en hora pico.",
    estaciones_turisticas: [
      "vancouver-waterfront",
      "vancouver-lonsdale-quay"
    ],
    estaciones: [
      "vancouver-waterfront",
      "vancouver-lonsdale-quay"
    ],
    ruta_1_dia: {
      titulo: "SeaBus: Scenic Waterfront Crossing to North Vancouver",
      paradas: [
        { estacion: "vancouver-waterfront", actividad: "Salida desde Waterfront Station, vistas de Downtown y puerto" },
        { estacion: "vancouver-lonsdale-quay", actividad: "Travesía de 12 minutos con vistas panorámicas de Burrard Inlet y North Shore Mountains, desembarque en Lonsdale Quay" }
      ]
    }
  },
  {
    id: "WCE",
    color: "#8B2293",
    colorNombre: "Púrpura",
    inicio: "Waterfront",
    fin: "Mission City",
    total: 8,
    municipios: ["Vancouver", "Port Moody", "Coquitlam", "Port Coquitlam", "Pitt Meadows", "Maple Ridge", "Mission"],
    descripcion: "West Coast Express — tren de cercanías operado por TransLink. 67 km con 8 estaciones desde Waterfront hasta Mission City. Solo opera en horas pico (L-V mañana hacia Vancouver, tarde hacia Mission). Requiere zona 3 Compass Card. Alternativa para turismo rural al este de Vancouver.",
    estaciones_turisticas: [
      "vancouver-waterfront",
      "vancouver-port-moody-wce",
      "vancouver-mission-city"
    ],
    estaciones: [
      "vancouver-waterfront",
      "vancouver-port-moody-wce",
      "vancouver-coquitlam-central",
      "vancouver-port-coquitlam",
      "vancouver-pitt-meadows",
      "vancouver-maple-meadows",
      "vancouver-port-haney",
      "vancouver-mission-city"
    ],
    ruta_1_dia: {
      titulo: "West Coast Express: Commuter Rail to Rural Mission City",
      paradas: [
        { estacion: "vancouver-waterfront", actividad: "Salida desde Waterfront Station, tren de cercanías de largo alcance" },
        { estacion: "vancouver-port-moody-wce", actividad: "Port Moody, puerta de entrada a las montañas, vistas de Inlet" },
        { estacion: "vancouver-coquitlam-central", actividad: "Coquitlam Central, hub de transporte en el este de Metro Vancouver" },
        { estacion: "vancouver-port-coquitlam", actividad: "Port Coquitlam, transición hacia zonas rurales y agrícolas" },
        { estacion: "vancouver-pitt-meadows", actividad: "Pitt Meadows, paisaje rural, acceso a Fraser River Delta" },
        { estacion: "vancouver-mission-city", actividad: "Mission City, fin de línea, exploración de comunidades rurales de BC interior" }
      ]
    }
  }
];

export { lineasVANCOUVER as lineasVancouver };
