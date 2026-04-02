export const lineasBoston = [
  {
    id: "Red",
    color: "#CC0000",
    colorNombre: "Rojo",
    inicio: "Alewife",
    fin: "Braintree/Ashmont",
    total: 22,
    municipios: ["Cambridge", "Boston", "Quincy", "Braintree"],
    descripcion: "La línea Red es la línea más importante del MBTA. Conecta Alewife en Cambridge con Braintree y Ashmont. 22 estaciones atravesando Cambridge, Boston y South Shore. Pasa por Harvard Square, MIT, Downtown Crossing y South Station.",
    estaciones_turisticas: ["boston-park-street", "boston-downtown-crossing", "boston-harvard", "boston-mit-kendall", "boston-south-station"],
    estaciones: [
      "boston-alewife",
      "davis",
      "porter",
      "harvard",
      "central",
      "boston-mit-kendall",
      "charles-mgh",
      "park-street",
      "downtown-crossing",
      "State Street",
      "aquarium",
      "maverick",
      "airport",
      "wood-island",
      "orient-heights",
      "suffolk-downs",
      "boston-south-station",
      "broadway",
      "andrew",
      "columbia-rd",
      "savin-hill",
      "fields-corner",
      "shawmut",
      "ashmont"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por Red Line: Cambridge a Boston Centro",
      paradas: [
        {
          estacion: "boston-alewife",
          actividad: "Inicio en Alewife Terminal (8:00 AM)"
        },
        {
          estacion: "boston-harvard",
          actividad: "Harvard University y Harvard Square (9:00 AM)"
        },
        {
          estacion: "boston-mit-kendall",
          actividad: "MIT Campus (10:30 AM)"
        },
        {
          estacion: "boston-park-street",
          actividad: "Boston Common y centro (11:30 AM)"
        },
        {
          estacion: "boston-south-station",
          actividad: "Almuerzo y exploración de Waterfront (1:00 PM)"
        }
      ],
      notas: "La mejor ruta de Red Line cubre Cambridge académico y Boston histórico."
    }
  },
  {
    id: "Orange",
    color: "#FF8C00",
    colorNombre: "Naranja",
    inicio: "Oak Grove",
    fin: "Forest Hills",
    total: 20,
    municipios: ["Malden", "Boston", "Stoughton"],
    descripcion: "La línea Orange es la segunda línea más importante. Conecta Oak Grove en el norte con Forest Hills en el sur. 20 estaciones atravesando Boston y South Shore. Pasa por Downtown Crossing, Back Bay, y zona residencial de Boston.",
    estaciones_turisticas: ["boston-back-bay", "boston-downtown-crossing"],
    estaciones: [
      "oak-grove",
      "sullivan-square",
      "community-college",
      "wellington",
      "malden-center",
      "orange-line-terminus",
      "downtown-crossing",
      "chinatown",
      "back-bay",
      "massachusetts-avenue",
      "ruggles",
      "stony-brook",
      "forest-hills"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por Orange Line: Shopping y Cultural",
      paradas: [
        {
          estacion: "boston-downtown-crossing",
          actividad: "Compras en Washington Street (10:00 AM)"
        },
        {
          estacion: "boston-back-bay",
          actividad: "Prudential Center y Copley Square (11:30 AM)"
        },
        {
          estacion: "ruggles",
          actividad: "Zona cultural de Boston (1:00 PM)"
        }
      ],
      notas: "Línea clave para compras y zonas culturales de Boston."
    }
  },
  {
    id: "Blue",
    color: "#003DA5",
    colorNombre: "Azul",
    inicio: "Wonderland",
    fin: "Bowdoin",
    total: 11,
    municipios: ["Revere", "Boston", "Winthrop"],
    descripcion: "La línea Blue es la línea más corta del MBTA. Conecta Wonderland en el norte (Revere) con Bowdoin en Boston. 11 estaciones. Acceso a Logan Airport (T conexión).",
    estaciones_turisticas: [],
    estaciones: [
      "wonderland",
      "revere-beach",
      "beachmont",
      "suffolk-downs",
      "orient-heights",
      "wood-island",
      "airport",
      "maverick",
      "aquarium",
      "state-street",
      "downtown-crossing",
      "bowdoin"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por Blue Line: Playa y Centro",
      paradas: [
        {
          estacion: "wonderland",
          actividad: "Revere Beach (9:00 AM)"
        },
        {
          estacion: "airport",
          actividad: "Logan Airport area (11:00 AM)"
        },
        {
          estacion: "aquarium",
          actividad: "New England Aquarium (1:00 PM)"
        },
        {
          estacion: "bowdoin",
          actividad: "Downtown Boston (3:00 PM)"
        }
      ],
      notas: "Línea corta pero importante para Revere Beach y Downtown."
    }
  },
  {
    id: "Green",
    color: "#00933C",
    colorNombre: "Verde",
    inicio: "Lechmere",
    fin: "Ramas B/C/D/E",
    total: 30,
    municipios: ["Cambridge", "Boston", "Brookline", "Newton"],
    descripcion: "La línea Green es una red de ramas de tranvía histórico. Conecta Lechmere con 4 ramas (B, C, D, E) hacia diferentes direcciones. 30 estaciones totales. Primera línea de transporte de Boston.",
    estaciones_turisticas: ["boston-government-center", "boston-park-street"],
    estaciones: [
      "lechmere",
      "science-park",
      "north-station",
      "haymarket",
      "government-center",
      "park-street",
      "boylston",
      "arlington",
      "copley",
      "hynes-convention-center",
      "auditorium-rama-b",
      "blandford-rama-b",
      "pleasant-street-rama-b",
      "kenmore",
      "rama-c-rama-d",
      "rama-e"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día por Green Line: Histórico de Boston",
      paradas: [
        {
          estacion: "boston-government-center",
          actividad: "City Hall y Faneuil Hall histórico (10:00 AM)"
        },
        {
          estacion: "boston-park-street",
          actividad: "Boston Common (11:00 AM)"
        },
        {
          estacion: "copley",
          actividad: "Copley Square y Trinity Church (1:00 PM)"
        }
      ],
      notas: "Primera línea de transporte de Boston. Experiencia histórica en tranvía."
    }
  },
  {
    id: "Silver",
    color: "#999999",
    colorNombre: "Plateado",
    inicio: "Terminal",
    fin: "Logan Airport",
    total: 1,
    municipios: ["Boston"],
    descripcion: "SL1 Silver Line Waterfront. Autobús rápido de tránsito (BRT) que conecta Downtown y Logan Airport. Moderna conexión a aeropuerto.",
    estaciones_turisticas: [],
    estaciones: [
      "south-station",
      "world-trade-center",
      "court-street",
      "silver-line-way",
      "airport-terminal",
      "logan-airport"
    ],
    ruta_1_dia: {
      titulo: "Ruta de transporte a Logan Airport",
      paradas: [
        {
          estacion: "south-station",
          actividad: "Inicio desde South Station (3 horas antes de vuelo)"
        },
        {
          estacion: "logan-airport",
          actividad: "Logan Airport (30 min desde South Station)"
        }
      ],
      notas: "Conexión rápida y directa a Logan Airport International de Boston."
    }
  },
  {
    id: "Commuter-Rail",
    color: "#7030A0",
    colorNombre: "Morado",
    inicio: "South Station",
    fin: "Foxboro",
    total: 1,
    municipios: ["Boston", "Foxboro"],
    descripcion: "Línea de Commuter Rail MBTA que conecta South Station con Foxboro. Servicio especial para eventos en Gillette Stadium (Patriots NFL, Revolution MLS).",
    estaciones_turisticas: ["boston-foxboro"],
    estaciones: [
      "south-station",
      "attleboro",
      "northeast-regional",
      "foxboro"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día: Gillette Stadium (Foxboro)",
      paradas: [
        {
          estacion: "boston-south-station",
          actividad: "Inicio en South Station (3 horas antes de partido)"
        },
        {
          estacion: "boston-foxboro",
          actividad: "Gillette Stadium New England Patriots (45 min desde South Station)"
        }
      ],
      notas: "Servicio operativo solo en días de evento en Gillette Stadium. Reserva anticipada recomendada."
    }
  }
];
