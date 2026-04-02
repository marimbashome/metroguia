export const lineasSF = [
  {
    id: "F",
    color: "#FF6B35",
    colorNombre: "Naranja",
    inicio: "Richmond",
    fin: "Berryessa",
    total: 50,
    municipios: ["San Francisco", "Oakland", "Milpitas", "San Jose"],
    descripcion: "La línea F (Fremont) es la línea principal del BART que conecta Richmond en el norte con Berryessa/North San Jose en el sur. Atraviesa San Francisco, Oakland y Santa Clara Valley. 131 km de longitud con 50 estaciones.",
    estaciones_turisticas: ["sf-embarcadero", "sf-powell", "sf-16th-st-mission", "sf-sfo-airport"],
    estaciones: [
      "richmond",
      "el-cerrito-del-norte",
      "el-cerrito-plaza",
      "downtown-berkeley",
      "ashby",
      "macarthur",
      "sf-oakland-city-center",
      "civic-center",
      "sf-powell",
      "sf-montgomery",
      "sf-embarcadero",
      "balboa-park",
      "glen-park",
      "24th-st-mission",
      "16th-st-mission",
      "daly-city",
      "colma",
      "south-san-francisco",
      "san-bruno",
      "sf-sfo-airport",
      "union-city",
      "south-hayward",
      "hayward",
      "bay-fair",
      "san-leandro",
      "coliseum",
      "fruitvale",
      "lake-merritt",
      "sf-oakland-city-center",
      "pleasant-hill-contra-costa",
      "walnut-creek",
      "lafayette",
      "orinda",
      "rockridge",
      "north-berkeley",
      "ashby",
      "downtown-berkeley",
      "west-dublin-pleasanton",
      "dublin-pleasanton",
      "pleasanton",
      "fremont",
      "south-fremont",
      "union-city",
      "sf-milpitas",
      "sf-berryessa"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por la Línea F: San Francisco Essentials",
      paradas: [
        {
          estacion: "sf-embarcadero",
          actividad: "Inicio en Ferry Building y Waterfront de SF (9:00 AM)"
        },
        {
          estacion: "sf-powell",
          actividad: "Cable Cars y Union Square (10:00 AM)"
        },
        {
          estacion: "sf-civic-center",
          actividad: "San Francisco City Hall (11:00 AM)"
        },
        {
          estacion: "sf-16th-st-mission",
          actividad: "Almuerzo en Mission District (12:30 PM)"
        },
        {
          estacion: "sf-24th-st-mission",
          actividad: "Explorar tiendas y bares de Mission (2:00 PM)"
        },
        {
          estacion: "sf-sfo-airport",
          actividad: "Salida al aeropuerto si es necesario (5:00 PM)"
        }
      ],
      notas: "Esta ruta cubre lo más turístico de San Francisco. Ideal para primer viaje."
    }
  },
  {
    id: "B",
    color: "#0066CC",
    colorNombre: "Azul",
    inicio: "Pittsburg",
    fin: "Dublin",
    total: 20,
    municipios: ["Pittsburg", "Contra Costa", "Walnut Creek", "Lafayette"],
    descripcion: "La línea B (Bay Point/Dublin) conecta Pittsburg/Bay Point al norte con Dublin/Pleasanton al sur. 45 km recorriendo East Bay y Contra Costa County. 20 estaciones.",
    estaciones_turisticas: ["walnut-creek", "lafayette"],
    estaciones: [
      "pittsburg-bay-point",
      "pittsburg-center",
      "concord",
      "pleasant-hill-contra-costa",
      "walnut-creek",
      "lafayette",
      "orinda",
      "rockridge",
      "north-berkeley",
      "macarthur",
      "sf-oakland-city-center",
      "civic-center",
      "sf-powell",
      "sf-powell",
      "downtown-berkeley",
      "ashby",
      "north-concord-martinez"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por la Línea B: East Bay Hills",
      paradas: [
        {
          estacion: "walnut-creek",
          actividad: "Explorar Walnut Creek downtown (10:00 AM)"
        },
        {
          estacion: "lafayette",
          actividad: "Park del pueblo y shops (11:30 AM)"
        },
        {
          estacion: "rockridge",
          actividad: "Almuerzo en Rockridge neighborhood (1:00 PM)"
        },
        {
          estacion: "macarthur",
          actividad: "Lake Merritt Oakland (3:00 PM)"
        }
      ],
      notas: "Línea principalmente para residentes, pero ofrece acceso a pueblos bonitos de East Bay."
    }
  },
  {
    id: "L",
    color: "#22B14C",
    colorNombre: "Verde",
    inicio: "Antioch",
    fin: "Warm Springs",
    total: 16,
    municipios: ["Antioch", "Pittsburg", "Concord", "Hayward"],
    descripcion: "La línea L (Livermore/Antioch) conecta Antioch en el este con Warm Springs/South Fremont en el sur. 55 km con 16 estaciones, principalmente en zonas residenciales de East Bay.",
    estaciones_turisticas: [],
    estaciones: [
      "antioch",
      "pittsburg-center",
      "concord",
      "pleasant-hill-contra-costa",
      "walnut-creek",
      "macarthur",
      "sf-oakland-city-center",
      "civic-center",
      "sf-powell",
      "sf-powell",
      "downtown-berkeley",
      "hayward",
      "south-hayward",
      "bay-fair",
      "san-leandro",
      "warm-springs-south-fremont"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por la Línea L: East Bay Exploration",
      paradas: [
        {
          estacion: "antioch",
          actividad: "Inicio en Antioch (8:00 AM)"
        },
        {
          estacion: "concord",
          actividad: "Explorar Concord downtown (9:30 AM)"
        },
        {
          estacion: "walnut-creek",
          actividad: "Almuerzo en Walnut Creek (11:30 AM)"
        },
        {
          estacion: "macarthur",
          actividad: "Lake Merritt Oakland (2:00 PM)"
        }
      ],
      notas: "Línea rural-urbana. Principalmente para commuters de East Bay."
    }
  },
  {
    id: "Orange",
    color: "#FF8C00",
    colorNombre: "Naranja",
    inicio: "Mountain View",
    fin: "Alum Rock",
    total: 26,
    municipios: ["Mountain View", "Sunnyvale", "Santa Clara", "San Jose"],
    descripcion: "Línea Orange del VTA Light Rail. Conecta Mountain View al norte con Alum Rock al sur. 26 estaciones atravesando Silicon Valley. Paradas en Great America/Levi's Stadium.",
    estaciones_turisticas: ["sf-great-america-vta", "sf-mountain-view"],
    estaciones: [
      "sf-mountain-view",
      "ames-research-center",
      "sunnyvale",
      "sf-great-america-vta",
      "santa-clara",
      "convention-center",
      "san-jose-diridon",
      "arena",
      "downtown-san-jose",
      "almaden",
      "branham",
      "capitol-expressway",
      "quimby-oak",
      "story",
      "senter",
      "alum-rock"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por VTA Orange: Silicon Valley y Deportes",
      paradas: [
        {
          estacion: "sf-mountain-view",
          actividad: "Google Campus y Mountain View downtown (9:00 AM)"
        },
        {
          estacion: "sf-great-america-vta",
          actividad: "Levi's Stadium o Great America Theme Park (11:00 AM)"
        },
        {
          estacion: "downtown-san-jose",
          actividad: "Almuerzo en Downtown San Jose (1:00 PM)"
        }
      ],
      notas: "Línea ideal para eventos en Levi's Stadium (49ers) y acceso a empresas de tech."
    }
  },
  {
    id: "Green",
    color: "#00AA44",
    colorNombre: "Verde",
    inicio: "Fremont",
    fin: "Santa Teresa",
    total: 18,
    municipios: ["Fremont", "Sunnyvale", "San Jose"],
    descripcion: "Línea Verde del VTA Light Rail. Conecta Fremont con Santa Teresa al sur. 18 estaciones en South Bay. Principalmente para commuters.",
    estaciones_turisticas: [],
    estaciones: [
      "fremont-station",
      "union-city",
      "south-fremont",
      "milpitas-vta",
      "sunnyvale",
      "lawrence-station",
      "santa-clara",
      "downtown-san-jose",
      "olmstead",
      "senter",
      "capitol-expressway",
      "branham",
      "almaden",
      "story",
      "senter-south",
      "santa-teresa"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por VTA Green: South Bay Tech",
      paradas: [
        {
          estacion: "fremont-station",
          actividad: "Inicio en Fremont (8:00 AM)"
        },
        {
          estacion: "santa-clara",
          actividad: "Explorar Santa Clara (10:00 AM)"
        },
        {
          estacion: "downtown-san-jose",
          actividad: "Almuerzo en Downtown San Jose (12:00 PM)"
        }
      ],
      notas: "Línea principalmente para residentes y commuters de South Bay."
    }
  },
  {
    id: "Red",
    color: "#CC0000",
    colorNombre: "Rojo",
    inicio: "Richmond",
    fin: "Millbrae",
    total: 32,
    municipios: ["Richmond", "San Francisco", "Millbrae"],
    descripcion: "Línea Roja del BART. Conecta Richmond en el norte con Millbrae (aeropuerto) en el sur. 32 estaciones. Una de las líneas más importantes del sistema.",
    estaciones_turisticas: ["sf-embarcadero", "sf-powell"],
    estaciones: [
      "richmond",
      "el-cerrito-del-norte",
      "el-cerrito-plaza",
      "downtown-berkeley",
      "ashby",
      "macarthur",
      "sf-oakland-city-center",
      "civic-center",
      "sf-powell",
      "sf-montgomery",
      "sf-embarcadero",
      "balboa-park",
      "glen-park",
      "daly-city",
      "colma",
      "south-san-francisco",
      "san-bruno",
      "millbrae"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por la Línea Red: San Francisco Centro",
      paradas: [
        {
          estacion: "sf-embarcadero",
          actividad: "Ferry Building y Waterfront (9:00 AM)"
        },
        {
          estacion: "sf-powell",
          actividad: "Cable Cars y Union Square (10:00 AM)"
        },
        {
          estacion: "sf-civic-center",
          actividad: "City Hall y Biblioteca (11:00 AM)"
        }
      ],
      notas: "Línea roja conecta lo mejor de San Francisco."
    }
  }
];
