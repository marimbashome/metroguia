export const estacionesLA = [
  // ============================================
  // LÍNEA A (BLUE LINE)
  // ============================================
  {
    slug: "la-union-station",
    nombre: "Union Station",
    linea: "A",
    sistema: "metro-rail",
    municipio: "Los Angeles",
    tipo_zona: "transporte-central",
    pois: [
      {
        nombre: "Union Station (Historic)",
        tipo: "historico",
        distancia: "0 min en estación"
      },
      {
        nombre: "Civic Center",
        tipo: "administrativo",
        distancia: "5 min caminando"
      }
    ],
    transferencias: ["B", "D", "E"],
    seo_title: "Union Station Metro Los Angeles — Hub Central | MetroGuia",
    meta_description: "Union Station, hub central del Metro de Los Angeles. Línea A (Azul). Conexiones B, D, E. Guía de acceso y transporte.",
    h1: "Union Station — Línea A (Azul) | Los Angeles Metro",
    intro: "Union Station es el principal hub de transporte del Metro de Los Angeles, ubicado en el centro histórico. Conexiones intermodales con Amtrak y autobús.",
    tips: [
      "Hub central con todas las líneas principales",
      "Acceso a Amtrak y autobús regional",
      "Abierta 24 horas los días de semana",
      "Zona de seguridad reforzada"
    ],
    mejor_horario: "Mañana (6-8 AM) o tarde (4-6 PM) para evitar multitudes",
    mundial_relevancia: "Centro histórico de transporte de LA, importante para acceso a DTLA",
    descripcion_turistica: "Union Station es una estación histórica y hub central del Metro de Los Angeles. Ofrece acceso a Civic Center (5 min) y sitios históricos de DTLA.",
    accesibilidad: {
      elevador: true,
      rampa: true,
      piso_tactil: true,
      notas: "Acceso completo a silla de ruedas. Servicios de accesibilidad completos."
    },
    horarios: {
      apertura: "04:30",
      cierre: "24:00",
      notas: "Abierto 24 horas. Línea A: 4:30 AM - 12:30 AM."
    },
    lugares_cercanos: [
      {
        nombre: "Union Station (Historic Building)",
        tipo: "Histórico",
        distancia: "0 metros",
        descripcion: "Estación histórica de 1939, obra maestra de arquitectura Beaux-Arts."
      },
      {
        nombre: "Civic Center",
        tipo: "Administrativo",
        distancia: "500 metros",
        descripcion: "Centro administrativo de LA con museos y espacios culturales."
      },
      {
        nombre: "El Pueblo de Nuestra Señora",
        tipo: "Histórico",
        distancia: "800 metros",
        descripcion: "Primer asentamiento de Los Angeles, área histórica protegida."
      }
    ]
  },
  {
    slug: "la-7th-st-metro-center",
    nombre: "7th St/Metro Center",
    linea: "A",
    sistema: "metro-rail",
    municipio: "Los Angeles",
    tipo_zona: "comercial-central",
    pois: [
      {
        nombre: "Downtown LA Shopping",
        tipo: "comercio",
        distancia: "2 min caminando"
      }
    ],
    transferencias: ["B"],
    seo_title: "7th St/Metro Center — DTLA | MetroGuia",
    meta_description: "7th St/Metro Center, estación en el corazón de DTLA. Línea A (Azul), conexión Línea B (Roja).",
    h1: "7th St/Metro Center — Línea A | Los Angeles",
    intro: "Estación central en el corazón de Downtown Los Angeles, con acceso a zonas comerciales principales.",
    tips: [
      "Centro de downtown shopping",
      "Múltiples salidas a diferentes cuadras",
      "Acceso a Staples Center (ahora Crypto.com Arena)"
    ],
    mejor_horario: "Martes-jueves para evitar fines de semana",
    mundial_relevancia: "Acceso a arena deportiva para eventos y conciertos",
    descripcion_turistica: "7th St/Metro Center conecta el centro histórico con zonas comerciales modernas de DTLA.",
    accesibilidad: {
      elevador: true,
      rampa: true,
      piso_tactil: true,
      notas: "Acceso completo a silla de ruedas."
    },
    horarios: {
      apertura: "04:30",
      cierre: "24:00",
      notas: "Servicio Línea A: 4:30 AM - 12:30 AM."
    },
    lugares_cercanos: [
      {
        nombre: "Crypto.com Arena",
        tipo: "Deportes",
        distancia: "600 metros",
        descripcion: "Estadio principal de Lakers, Kings, Clippers."
      },
      {
        nombre: "Downtown LA Shopping District",
        tipo: "Comercio",
        distancia: "300 metros",
        descripcion: "Tiendas departamentales y comercios variados."
      }
    ]
  },
  {
    slug: "la-hollywood-highland",
    nombre: "Hollywood/Highland",
    linea: "B",
    sistema: "metro-rail",
    municipio: "Los Angeles",
    tipo_zona: "cultural-turistico",
    pois: [
      {
        nombre: "Hollywood Sign",
        tipo: "emblematico",
        distancia: "15 min auto"
      },
      {
        nombre: "Walk of Fame",
        tipo: "turistico",
        distancia: "5 min caminando"
      }
    ],
    transferencias: [],
    seo_title: "Hollywood/Highland — Paseo de la Fama | MetroGuia",
    meta_description: "Hollywood/Highland, estación de Línea B (Roja). Acceso a Walk of Fame, teatros históricos y zona turística de Hollywood.",
    h1: "Hollywood/Highland — Línea B (Roja) | Los Angeles",
    intro: "Estación icónica en el corazón de Hollywood. Acceso al Paseo de la Fama, teatros y tiendas de la zona turística más famosa de Los Angeles.",
    tips: [
      "Centro turístico de Hollywood",
      "Acceso fácil a Walk of Fame (5 min)",
      "Múltiples teatros históricos cercanos",
      "Compras y entretenimiento"
    ],
    mejor_horario: "Tarde (después 4 PM) para disfrutar tiendas y entretenimiento",
    mundial_relevancia: "Centro cultural de Hollywood, zona turística icónica de Los Angeles",
    descripcion_turistica: "Hollywood/Highland es el acceso principal a la zona turística más famosa de Hollywood. Ofrece acceso al Paseo de la Fama (5 min) y teatros históricos como el TCL Chinese Theatre.",
    accesibilidad: {
      elevador: true,
      rampa: true,
      piso_tactil: true,
      notas: "Acceso completo a silla de ruedas. Centro comercial integrado."
    },
    horarios: {
      apertura: "04:30",
      cierre: "24:00",
      notas: "Línea B: 4:30 AM - 12:30 AM, frecuencia cada 5-6 min en horas pico."
    },
    lugares_cercanos: [
      {
        nombre: "Walk of Fame",
        tipo: "Turístico",
        distancia: "500 metros",
        descripcion: "Paseo de la Fama con 2,700+ nombres de celebridades."
      },
      {
        nombre: "TCL Chinese Theatre",
        tipo: "Cultural",
        distancia: "400 metros",
        descripcion: "Teatro histórico con huella de celebridades."
      },
      {
        nombre: "Hollywood & Highland Center",
        tipo: "Comercio",
        distancia: "0 metros",
        descripcion: "Centro comercial integrado a la estación."
      }
    ]
  },
  {
    slug: "la-universal-city",
    nombre: "Universal City",
    linea: "B",
    sistema: "metro-rail",
    municipio: "Los Angeles",
    tipo_zona: "entretenimiento-turistico",
    pois: [
      {
        nombre: "Universal Studios Hollywood",
        tipo: "entretenimiento",
        distancia: "10 min en shuttle"
      }
    ],
    transferencias: [],
    seo_title: "Universal City — Universal Studios | MetroGuia",
    meta_description: "Universal City, estación Línea B. Acceso a Universal Studios Hollywood mediante shuttle gratuito.",
    h1: "Universal City — Línea B (Roja) | Los Angeles",
    intro: "Estación con acceso directo a Universal Studios Hollywood. Shuttle gratuito disponible desde la estación.",
    tips: [
      "Acceso a Universal Studios Hollywood",
      "Shuttle gratuito cada 15 min",
      "Estacionamiento disponible",
      "Mejor alternativa a manejo"
    ],
    mejor_horario: "Mañana temprano (8 AM) para evitar filas en parque",
    mundial_relevancia: "Acceso a principal parque temático de Los Angeles",
    descripcion_turistica: "Universal City es la puerta de entrada al legendario parque temático Universal Studios Hollywood. Shuttle gratuito disponible cada 15 minutos.",
    accesibilidad: {
      elevador: true,
      rampa: true,
      piso_tactil: true,
      notas: "Acceso completo. Shuttle accesible disponible."
    },
    horarios: {
      apertura: "04:30",
      cierre: "24:00",
      notas: "Línea B: 4:30 AM - 12:30 AM. Shuttle: 8 AM - 10 PM."
    },
    lugares_cercanos: [
      {
        nombre: "Universal Studios Hollywood",
        tipo: "Entretenimiento",
        distancia: "1.5 km",
        descripcion: "Parque temático con atracciones, cines y tiendas."
      },
      {
        nombre: "CityWalk",
        tipo: "Entretenimiento",
        distancia: "1.5 km",
        descripcion: "Centro de entretenimiento con cines, tiendas y restaurantes."
      }
    ]
  },
  {
    slug: "la-willowbrook",
    nombre: "Willowbrook/Rosa Parks",
    linea: "C",
    sistema: "metro-rail",
    municipio: "Compton",
    tipo_zona: "transporte-regional",
    pois: [
      {
        nombre: "Rosa Parks Transit Center",
        tipo: "transporte",
        distancia: "0 min en estación"
      }
    ],
    transferencias: [],
    seo_title: "Willowbrook/Rosa Parks — Hub Regional | MetroGuia",
    meta_description: "Willowbrook/Rosa Parks, estación Línea C (Verde). Centro de transporte regional de Compton.",
    h1: "Willowbrook/Rosa Parks — Línea C (Verde) | Los Angeles",
    intro: "Centro de transporte regional en Compton con conexiones a rutas locales.",
    tips: [
      "Hub de transporte regional",
      "Conexiones a líneas de autobús locales",
      "Zona residencial importante"
    ],
    mejor_horario: "Mañana para evitar filas",
    mundial_relevancia: "Hub regional de transporte público",
    descripcion_turistica: "Willowbrook/Rosa Parks es un importante centro de transporte regional.",
    accesibilidad: {
      elevador: true,
      rampa: true,
      piso_tactil: true,
      notas: "Acceso completo."
    },
    horarios: {
      apertura: "04:30",
      cierre: "24:00",
      notas: "Línea C: 4:30 AM - 12:30 AM."
    },
    lugares_cercanos: [
      {
        nombre: "Rosa Parks Transit Center",
        tipo: "Transporte",
        distancia: "0 metros",
        descripcion: "Centro multimodal de transporte."
      }
    ]
  },
  {
    slug: "la-lax-metro-transit-center",
    nombre: "LAX/Metro Transit Center",
    linea: "K",
    sistema: "metro-rail",
    municipio: "Los Angeles",
    tipo_zona: "transporte-aeropuerto",
    pois: [
      {
        nombre: "Los Angeles International Airport",
        tipo: "aeropuerto",
        distancia: "5 min en shuttle"
      }
    ],
    transferencias: [],
    seo_title: "LAX/Metro Transit Center — Acceso a Aeropuerto | MetroGuia",
    meta_description: "LAX/Metro Transit Center, estación Línea K (Crenshaw). Acceso rápido al aeropuerto LAX.",
    h1: "LAX/Metro Transit Center — Línea K | Los Angeles",
    intro: "Hub de transporte que conecta el Metro de Los Angeles con el Aeropuerto Internacional de Los Angeles (LAX).",
    tips: [
      "Acceso directo a LAX",
      "Aeroexprés a terminales del aeropuerto",
      "Estacionamiento de larga estancia disponible",
      "Alternativa económica a taxi/Uber"
    ],
    mejor_horario: "Según horario de vuelo",
    mundial_relevancia: "Acceso a principal aeropuerto de Los Angeles",
    descripcion_turistica: "LAX/Metro Transit Center es la puerta de entrada al Aeropuerto Internacional de Los Angeles, inaugurado en junio 2025.",
    accesibilidad: {
      elevador: true,
      rampa: true,
      piso_tactil: true,
      notas: "Acceso completo al aeropuerto."
    },
    horarios: {
      apertura: "04:00",
      cierre: "24:00",
      notas: "Línea K: 4 AM - 12 AM. Aeroexprés operativo."
    },
    lugares_cercanos: [
      {
        nombre: "Los Angeles International Airport (LAX)",
        tipo: "Aeropuerto",
        distancia: "1.2 km",
        descripcion: "Principal aeropuerto de Los Angeles."
      }
    ]
  },
  {
    slug: "la-inglewood-transit-center",
    nombre: "Inglewood Transit Center",
    linea: "K",
    sistema: "metro-rail",
    municipio: "Inglewood",
    tipo_zona: "transporte-deportivo",
    pois: [
      {
        nombre: "SoFi Stadium",
        tipo: "deportes",
        distancia: "10 min caminando"
      }
    ],
    transferencias: [],
    seo_title: "Inglewood Transit Center — SoFi Stadium | MetroGuia",
    meta_description: "Inglewood Transit Center, estación Línea K (Crenshaw). Acceso a SoFi Stadium, sede de Rams y Chargers.",
    h1: "Inglewood Transit Center — Línea K (Crenshaw) | Los Angeles",
    intro: "Centro de transporte en Inglewood con acceso directo a SoFi Stadium, hogar de Los Angeles Rams y Los Angeles Chargers.",
    tips: [
      "Acceso a SoFi Stadium (10 min caminando)",
      "Centro de transporte moderno",
      "Perfecto para eventos deportivos",
      "Abre nuevas opciones de movilidad para Inglewood"
    ],
    mejor_horario: "Depende de eventos deportivos. Llega temprano en días de juego.",
    mundial_relevancia: "Acceso a SoFi Stadium para eventos deportivos y entretenimiento",
    descripcion_turistica: "Inglewood Transit Center es la puerta de entrada a SoFi Stadium, moderno estadio de $5 mil millones hogar de dos franquicias NFL.",
    accesibilidad: {
      elevador: true,
      rampa: true,
      piso_tactil: true,
      notas: "Acceso completo. Servicios para discapacitados disponibles en eventos."
    },
    horarios: {
      apertura: "04:30",
      cierre: "24:00",
      notas: "Línea K: 4:30 AM - 12:30 AM. Horarios extendidos en días de evento."
    },
    lugares_cercanos: [
      {
        nombre: "SoFi Stadium",
        tipo: "Deportes",
        distancia: "800 metros",
        descripcion: "Estadio moderno, hogar de Rams, Chargers y eventos especiales."
      },
      {
        nombre: "Hollywood Park",
        tipo: "Entretenimiento",
        distancia: "1 km",
        descripcion: "Complejo de entretenimiento con casino, tiendas y restaurantes."
      }
    ]
  },
  {
    slug: "la-expo-crenshaw",
    nombre: "Expo/Crenshaw",
    linea: "K",
    sistema: "metro-rail",
    municipio: "Los Angeles",
    tipo_zona: "transporte-conexion",
    pois: [
      {
        nombre: "Conexión Línea E",
        tipo: "transporte",
        distancia: "0 min en estación"
      }
    ],
    transferencias: ["E"],
    seo_title: "Expo/Crenshaw — Estación de Conexión | MetroGuia",
    meta_description: "Expo/Crenshaw, estación Línea K (Crenshaw). Conexión con Línea E (Expo).",
    h1: "Expo/Crenshaw — Línea K | Los Angeles",
    intro: "Estación de conexión entre Línea K (Crenshaw) y Línea E (Expo).",
    tips: [
      "Conexión Línea K-E",
      "Acceso a zona de Crenshaw",
      "Transbordo rápido"
    ],
    mejor_horario: "Cualquier hora",
    mundial_relevancia: "Hub de conexión importante",
    descripcion_turistica: "Expo/Crenshaw conecta la Línea K (Crenshaw) con la Línea E (Expo).",
    accesibilidad: {
      elevador: true,
      rampa: true,
      piso_tactil: true,
      notas: "Acceso completo."
    },
    horarios: {
      apertura: "04:30",
      cierre: "24:00",
      notas: "Línea K: 4:30 AM - 12:30 AM."
    },
    lugares_cercanos: [
      {
        nombre: "Crenshaw District",
        tipo: "Comercio",
        distancia: "500 metros",
        descripcion: "Barrio comercial histórico de Los Angeles."
      }
    ]
  },
  {
    slug: "la-santa-monica",
    nombre: "Santa Monica",
    linea: "E",
    sistema: "metro-rail",
    municipio: "Santa Monica",
    tipo_zona: "playa-turistico",
    pois: [
      {
        nombre: "Santa Monica Beach",
        tipo: "playa",
        distancia: "10 min caminando"
      },
      {
        nombre: "Santa Monica Pier",
        tipo: "turistico",
        distancia: "12 min caminando"
      }
    ],
    transferencias: [],
    seo_title: "Santa Monica — Línea E (Expo) | MetroGuia",
    meta_description: "Santa Monica, estación terminal de Línea E (Expo). Acceso a playa y Santa Monica Pier.",
    h1: "Santa Monica — Línea E (Expo) | Los Angeles",
    intro: "Estación terminal de la Línea E en la playa de Santa Monica. Acceso directo a la playa y al famoso Santa Monica Pier.",
    tips: [
      "Acceso a Santa Monica Beach (10 min)",
      "Acceso a Santa Monica Pier (12 min)",
      "Paseo marítimo y entretenimiento",
      "Mejor opción que estacionamiento"
    ],
    mejor_horario: "Fines de semana y tardes para playa",
    mundial_relevancia: "Acceso a playa y atracción turística de Santa Monica",
    descripcion_turistica: "Santa Monica es la terminal occidental de la Línea E (Expo), con acceso directo a la famosa playa de Santa Monica y al Santa Monica Pier.",
    accesibilidad: {
      elevador: true,
      rampa: true,
      piso_tactil: true,
      notas: "Acceso completo a playa accesible."
    },
    horarios: {
      apertura: "04:30",
      cierre: "24:00",
      notas: "Línea E: 4:30 AM - 12:30 AM, frecuencia cada 8-10 min."
    },
    lugares_cercanos: [
      {
        nombre: "Santa Monica Beach",
        tipo: "Playa",
        distancia: "600 metros",
        descripcion: "Playa popular de Santa Monica."
      },
      {
        nombre: "Santa Monica Pier",
        tipo: "Turístico",
        distancia: "700 metros",
        descripcion: "Pier histórico con parque de diversiones y tiendas."
      },
      {
        nombre: "Third Street Promenade",
        tipo: "Comercio",
        distancia: "500 metros",
        descripcion: "Centro comercial al aire libre con tiendas y restaurantes."
      }
    ]
  },
  {
    slug: "la-civic-center",
    nombre: "Civic Center",
    linea: "D",
    sistema: "metro-rail",
    municipio: "Los Angeles",
    tipo_zona: "cultural-administrativo",
    pois: [
      {
        nombre: "Grand Central Market",
        tipo: "comercio-gastronomico",
        distancia: "5 min caminando"
      }
    ],
    transferencias: [],
    seo_title: "Civic Center — Línea D (Púrpura) | MetroGuia",
    meta_description: "Civic Center, estación Línea D (Púrpura). Acceso a zonas administrativas y culturales de DTLA.",
    h1: "Civic Center — Línea D (Púrpura) | Los Angeles",
    intro: "Estación en el corazón del Civic Center de Los Angeles, zona administrativa y cultural.",
    tips: [
      "Acceso a edificios administrativos",
      "Zona cultural importante",
      "Acceso a Grand Central Market (5 min)",
      "Cerca de Pershing Square"
    ],
    mejor_horario: "Mañana a mediodía para transacciones administrativas",
    mundial_relevancia: "Centro administrativo de Los Angeles",
    descripcion_turistica: "Civic Center es el corazón administrativo de Los Angeles, con acceso a instituciones públicas y zona cultural.",
    accesibilidad: {
      elevador: true,
      rampa: true,
      piso_tactil: true,
      notas: "Acceso completo."
    },
    horarios: {
      apertura: "04:30",
      cierre: "24:00",
      notas: "Línea D: 4:30 AM - 12:30 AM."
    },
    lugares_cercanos: [
      {
        nombre: "Grand Central Market",
        tipo: "Gastronomía",
        distancia: "400 metros",
        descripcion: "Mercado histórico con múltiples opciones gastronómicas."
      }
    ]
  }
]
