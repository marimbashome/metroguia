export const estacionesDallas = [
  {
    "slug": "dallas-union-station",
    "nombre": "Union Station",
    "linea": "Red/Blue",
    "sistema": "dart-light-rail",
    "ciudad": "Dallas",
    "municipio": "Dallas",
    "tipo_zona": "transporte-central",
    "pois": [
      {
        "nombre": "Amtrak Station",
        "tipo": "transporte",
        "distancia": "Mismo edificio"
      },
      {
        "nombre": "Downtown Dallas",
        "tipo": "comercial-turistico",
        "distancia": "1 min caminando"
      }
    ],
    "transferencias": [
      { "linea": "Red", "destino": "Parker Road", "tiempo": "32 min" },
      { "linea": "Blue", "destino": "Downtown Rowlett", "tiempo": "24 min" }
    ],
    "alternativas_estadio": [
      {
        "tipo": "tren-shuttle",
        "descripcion": "Trinity Railway Express (TRE) a CentrePort, luego bus FIFA a AT&T Stadium",
        "tiempo": "75 min total",
        "costo": "Incluido con boleto FIFA"
      },
      {
        "tipo": "bus-charter",
        "descripcion": "Charter buses directos desde Victory Park",
        "tiempo": "45 min",
        "costo": "USD 15-25"
      }
    ],
    "seo_title": "Union Station Dallas DART — Centro de transporte de Dallas",
    "meta_description": "Estación Union Station de DART en Dallas. Hub de transporte central con Amtrak. Acceso a FIFA shuttles hacia AT&T Stadium.",
    "h1": "Union Station — Hub de Transporte Central | Dallas",
    "intro": "Union Station es el principal hub de transporte de Dallas, integrando DART Light Rail, Amtrak, y conexiones FIFA a AT&T Stadium. Centro histórico de transporte.",
    "tips": [
      "Principal punto de conexión para AT&T Stadium vía TRE + shuttle FIFA",
      "Integración Amtrak-DART",
      "Horarios frecuentes (15 min en horas pico)",
      "Estación completamente accesible"
    ],
    "mundial_relevancia": "CRUCIAL para FIFA 2026. Hub FIFA con TRE a CentrePort y buses chartered a AT&T Stadium. Plazo total 1.5 horas.",
    "descripcion_turistica": "Union Station es el corazón de la movilidad de Dallas. Centro histórico de 1916, ahora hub multimodal con DART, Amtrak y shuttles FIFA.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Completamente accesible. Información en taquillas."
    },
    "horarios": {
      "apertura": "04:30 AM",
      "cierre": "00:45 AM",
      "frecuencia": "15 min pico, 30 min fuera de pico"
    }
  },
  {
    "slug": "dallas-victory-park",
    "nombre": "Victory Park",
    "linea": "Red",
    "sistema": "dart-light-rail",
    "ciudad": "Dallas",
    "municipio": "Dallas",
    "tipo_zona": "comercial-turistico",
    "pois": [
      {
        "nombre": "Victory Park Development",
        "tipo": "comercial",
        "distancia": "Adyacente"
      },
      {
        "nombre": "American Airlines Center",
        "tipo": "deportes",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [
      { "linea": "Red", "destino": "Union Station", "tiempo": "10 min" },
      { "linea": "Red", "destino": "Parker Road", "tiempo": "22 min" }
    ],
    "alternativas_estadio": [
      {
        "tipo": "bus-charter",
        "descripcion": "Buses charter directos I-30 a AT&T Stadium",
        "tiempo": "50 min",
        "costo": "USD 15-25"
      }
    ],
    "seo_title": "Victory Park Station DART — Zona comercial Dallas",
    "meta_description": "Victory Park, estación DART en Dallas. Centro de negocios y entretenimiento. Acceso a buses FIFA hacia AT&T Stadium.",
    "h1": "Victory Park — Estación Red Line | Dallas",
    "intro": "Victory Park es una estación moderna en la línea roja, ubicada en el corazón del desarrollo comercial de Dallas.",
    "tips": [
      "Punto de partida para buses charter a AT&T Stadium",
      "Centro comercial adyacente",
      "Conexión fácil a Union Station (10 min)"
    ],
    "mundial_relevancia": "Alternativa a Union Station para buses FIFA. Charter directos a AT&T Stadium en 50 min.",
    "descripcion_turistica": "Victory Park es una zona de lujo con tiendas, restaurantes y entretenimiento.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Estación completamente accesible"
    },
    "horarios": {
      "apertura": "05:00 AM",
      "cierre": "00:30 AM",
      "frecuencia": "15 min pico"
    }
  },
  {
    "slug": "dallas-west-end",
    "nombre": "West End",
    "linea": "Blue",
    "sistema": "dart-light-rail",
    "ciudad": "Dallas",
    "municipio": "Dallas",
    "tipo_zona": "cultural-turistico",
    "pois": [
      {
        "nombre": "West End Historic District",
        "tipo": "cultural",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "The Sixth Floor Museum",
        "tipo": "museo",
        "distancia": "8 min caminando"
      }
    ],
    "transferencias": [
      { "linea": "Blue", "destino": "Union Station", "tiempo": "5 min" },
      { "linea": "Blue", "destino": "Downtown Rowlett", "tiempo": "28 min" }
    ],
    "alternativas_estadio": [
      {
        "tipo": "rideshare",
        "descripcion": "Uber/Lyft a AT&T Stadium",
        "tiempo": "40 min",
        "costo": "USD 25-35"
      }
    ],
    "seo_title": "West End Station — Distrito histórico de Dallas",
    "meta_description": "West End, estación Blue Line DART. Centro histórico con museos y restaurantes. Acceso a transporte hacia AT&T Stadium.",
    "h1": "West End — Blue Line | Dallas",
    "intro": "West End es la puerta al histórico West End District de Dallas, con museos, bares y restaurantes.",
    "tips": [
      "Distrito histórico con mucha gastronomía",
      "The Sixth Floor Museum (6 cuadras)",
      "Conexión rápida a Union Station"
    ],
    "mundial_relevancia": "Alternativa para turistas. Rideshare o conexión a Union Station para buses FIFA.",
    "descripcion_turistica": "West End es el corazón cultural e histórico de Dallas, famoso por sus restaurantes y vida nocturna.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Rampa de acceso disponible"
    },
    "horarios": {
      "apertura": "05:00 AM",
      "cierre": "00:15 AM",
      "frecuencia": "15 min"
    }
  },
  {
    "slug": "dallas-pearl-arts-district",
    "nombre": "Pearl/Arts District",
    "linea": "Blue",
    "sistema": "dart-light-rail",
    "ciudad": "Dallas",
    "municipio": "Dallas",
    "tipo_zona": "cultural-artistico",
    "pois": [
      {
        "nombre": "Dallas Arts District",
        "tipo": "cultural",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "Nasher Sculpture Center",
        "tipo": "museo",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [
      { "linea": "Blue", "destino": "Union Station", "tiempo": "8 min" }
    ],
    "alternativas_estadio": [
      {
        "tipo": "rideshare",
        "descripcion": "Uber/Lyft a AT&T Stadium desde Arts District",
        "tiempo": "40 min",
        "costo": "USD 25-35"
      }
    ],
    "seo_title": "Pearl/Arts District — Centro artístico de Dallas",
    "meta_description": "Pearl/Arts District, estación Blue Line DART. Centro de museos y galerías. Acceso a ATT Stadium.",
    "h1": "Pearl/Arts District — Blue Line | Dallas",
    "intro": "Pearl/Arts District es el epicentro cultural de Dallas con museos de clase mundial.",
    "tips": [
      "Acceso a 19 museos dentro de 10 min caminando",
      "Nasher Sculpture Center es imprescindible",
      "Restaurantes artísticos y galerías"
    ],
    "mundial_relevancia": "Zona turística. Conexión a Union Station o rideshare para AT&T Stadium.",
    "descripcion_turistica": "Dallas Arts District es el tercer distrito de artes más grande de EE.UU., con museos, teatros y galerías.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Zona con buena accesibilidad general"
    },
    "horarios": {
      "apertura": "05:15 AM",
      "cierre": "00:00 AM",
      "frecuencia": "15 min"
    }
  },
  {
    "slug": "dallas-cityplace-uptown",
    "nombre": "Cityplace/Uptown",
    "linea": "Red/Green",
    "sistema": "dart-light-rail",
    "ciudad": "Dallas",
    "municipio": "Dallas",
    "tipo_zona": "comercial-residencial",
    "pois": [
      {
        "nombre": "Uptown Dallas",
        "tipo": "comercial",
        "distancia": "Adyacente"
      },
      {
        "nombre": "Klyde Warren Park",
        "tipo": "parque",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [
      { "linea": "Red", "destino": "Union Station", "tiempo": "7 min" },
      { "linea": "Green", "destino": "North Carrollton", "tiempo": "22 min" }
    ],
    "alternativas_estadio": [
      {
        "tipo": "rideshare",
        "descripcion": "Uber/Lyft a AT&T Stadium",
        "tiempo": "45 min",
        "costo": "USD 25-35"
      }
    ],
    "seo_title": "Cityplace/Uptown Station — Centro comercial de Dallas",
    "meta_description": "Cityplace/Uptown, estación subterránea DART. Centro de compras y gastronomía. Acceso a FIFA transport.",
    "h1": "Cityplace/Uptown — Red/Green Line | Dallas",
    "intro": "Cityplace/Uptown es la única estación subterránea de DART, ubicada en el corazón del Uptown de Dallas.",
    "tips": [
      "Única estación subterránea de DART",
      "Centro comercial integrado",
      "Klyde Warren Park a 5 min",
      "Gastronomía de clase mundial"
    ],
    "mundial_relevancia": "Zona residencial y comercial. Acceso a FIFA transport vía Union Station o rideshare.",
    "descripcion_turistica": "Uptown es el barrio más exclusivo de Dallas con restaurantes Michelin, tiendas y vida nocturna premium.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Completamente accesible, estación moderna subterránea"
    },
    "horarios": {
      "apertura": "05:00 AM",
      "cierre": "00:30 AM",
      "frecuencia": "15 min"
    }
  },
  {
    "slug": "dallas-centreport-dfw",
    "nombre": "CentrePort/DFW Airport",
    "linea": "Orange",
    "sistema": "dart-light-rail",
    "ciudad": "Irving",
    "municipio": "Irving",
    "tipo_zona": "transporte-aeropuerto",
    "pois": [
      {
        "nombre": "DFW International Airport",
        "tipo": "aeropuerto",
        "distancia": "10 min automóvil"
      },
      {
        "nombre": "CentrePort Business District",
        "tipo": "comercial",
        "distancia": "Adyacente"
      }
    ],
    "transferencias": [
      { "linea": "Orange", "destino": "Parker Road", "tiempo": "35 min" },
      { "linea": "Orange", "destino": "DFW Airport", "tiempo": "10 min" }
    ],
    "alternativas_estadio": [
      {
        "tipo": "bus-charter-fifa",
        "descripcion": "Bus charter FIFA a AT&T Stadium (conexión TRE desde Union Station recomendada)",
        "tiempo": "50 min desde CentrePort",
        "costo": "Incluido con boleto FIFA"
      },
      {
        "tipo": "rideshare",
        "descripcion": "Uber/Lyft a AT&T Stadium",
        "tiempo": "25 min",
        "costo": "USD 20-30"
      }
    ],
    "seo_title": "CentrePort/DFW Station — Conexión aeropuerto-estadio",
    "meta_description": "CentrePort/DFW, estación Orange Line DART. Punto clave para viajeros FIFA con conexión a AT&T Stadium.",
    "h1": "CentrePort/DFW — Orange Line | Dallas",
    "intro": "CentrePort/DFW es la estación más cercana a AT&T Stadium accesible por DART Light Rail, con conexión a buses FIFA.",
    "tips": [
      "MÁS CERCANA a AT&T Stadium (25 min rideshare)",
      "Conexión a DFW Airport (10 min)",
      "Bus charter FIFA desde aquí",
      "Hub de transporte corporativo"
    ],
    "mundial_relevancia": "CRÍTICA para FIFA 2026. Estación DART más cercana a AT&T Stadium. Bus charter directo o rideshare a estadio.",
    "descripcion_turistica": "CentrePort es un hub de transporte corporativo y puerta de entrada a Dallas.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Completamente accesible"
    },
    "horarios": {
      "apertura": "04:00 AM",
      "cierre": "01:00 AM",
      "frecuencia": "15 min"
    }
  },
  {
    "slug": "dallas-parker-road",
    "nombre": "Parker Road",
    "linea": "Red/Orange",
    "sistema": "dart-light-rail",
    "ciudad": "Arlington",
    "municipio": "Arlington",
    "tipo_zona": "residencial-comercial",
    "pois": [
      {
        "nombre": "Arlington Commercial District",
        "tipo": "comercial",
        "distancia": "5 min automóvil"
      }
    ],
    "transferencias": [
      { "linea": "Red", "destino": "Union Station", "tiempo": "32 min" },
      { "linea": "Orange", "destino": "DFW Airport", "tiempo": "35 min" }
    ],
    "alternativas_estadio": [
      {
        "tipo": "rideshare",
        "descripcion": "Uber/Lyft a AT&T Stadium",
        "tiempo": "15 min",
        "costo": "USD 10-15"
      }
    ],
    "seo_title": "Parker Road Station — Acceso a Arlington y estadio",
    "meta_description": "Parker Road, estación Red/Orange Line DART. Punto más cercano a AT&T Stadium por rideshare. Acceso FIFA.",
    "h1": "Parker Road — Red/Orange Line | Arlington",
    "intro": "Parker Road es la estación DART más cercana a AT&T Stadium en Arlington.",
    "tips": [
      "Más cercana a AT&T Stadium (15 min rideshare)",
      "Rideshare es opción más rápida que TRE+shuttle",
      "Buena conexión a Dallas centro"
    ],
    "mundial_relevancia": "Opción rideshare más cercana a AT&T Stadium. 15 min a estadio, USD 10-15.",
    "descripcion_turistica": "Parker Road sirve a Arlington, hogar del AT&T Stadium.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Completamente accesible"
    },
    "horarios": {
      "apertura": "04:00 AM",
      "cierre": "01:00 AM",
      "frecuencia": "15 min"
    }
  },
  {
    "slug": "dallas-dfw-airport",
    "nombre": "DFW Airport",
    "linea": "Orange",
    "sistema": "dart-light-rail",
    "ciudad": "Irving",
    "municipio": "Irving",
    "tipo_zona": "aeropuerto",
    "pois": [
      {
        "nombre": "Dallas/Fort Worth International Airport",
        "tipo": "aeropuerto",
        "distancia": "Terminal conectada"
      }
    ],
    "transferencias": [
      { "linea": "Orange", "destino": "Parker Road", "tiempo": "45 min" },
      { "linea": "Orange", "destino": "CentrePort", "tiempo": "10 min" }
    ],
    "alternativas_estadio": [
      {
        "tipo": "rideshare",
        "descripcion": "Uber/Lyft desde terminal a AT&T Stadium",
        "tiempo": "35 min",
        "costo": "USD 25-35"
      }
    ],
    "seo_title": "DFW Airport Station — Terminal de llegada FIFA",
    "meta_description": "DFW Airport, estación Orange Line DART. Terminal integrada. Acceso directo a shuttles FIFA y AT&T Stadium.",
    "h1": "DFW Airport — Orange Line | Dallas",
    "intro": "DFW Airport es la puerta de entrada a Dallas, integrada con DART Light Rail.",
    "tips": [
      "Terminal integrada con DART",
      "Acceso directo a shuttles FIFA",
      "Rideshare desde terminal a AT&T Stadium (35 min)",
      "Horarios 24/7"
    ],
    "mundial_relevancia": "Puerta de entrada FIFA. Acceso directo a shuttles/rideshare hacia AT&T Stadium.",
    "descripcion_turistica": "DFW Airport es el principal hub de entrada para los viajeros FIFA.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Completamente accesible, estación integrada con terminal"
    },
    "horarios": {
      "apertura": "00:00",
      "cierre": "23:59",
      "frecuencia": "15 min todo el día"
    }
  }
];