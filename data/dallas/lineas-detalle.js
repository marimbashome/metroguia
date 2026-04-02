export const lineasDallas = [
  {
    id: "red",
    color: "#E63946",
    colorNombre: "Rojo",
    inicio: "Parker Road",
    fin: "Westmoreland",
    total: 20,
    municipios: ["Arlington", "Dallas"],
    descripcion: "Línea Red de DART conecta Arlington (Parker Road) con Westmoreland en el sur de Dallas. 20 estaciones, 25.6 km. Paso por Union Station y downtown Dallas.",
    sistema: "dart-light-rail",
    estaciones_turisticas: ["dallas-union-station", "dallas-victory-park", "dallas-cityplace-uptown"],
    estaciones: [
      "dallas-parker-road",
      "dalworthington-gardens",
      "vitruvian-park",
      "addison",
      "valley-view",
      "dallas-cityplace-uptown",
      "mckinney",
      "pearl-arts-district",
      "downtown-dallas",
      "dallas-union-station",
      "east-12th",
      "oak-cliff",
      "12th-corinth",
      "continental",
      "marsalis",
      "buckner",
      "forest-lane",
      "lake-june",
      "westmoreland-station",
      "westmoreland"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día Línea Red: Downtown + Arts + FIFA",
      paradas: [
        {
          estacion: "dallas-union-station",
          actividad: "Inicio. Amtrak Hub. Info FIFA shuttles. (8:00 AM)"
        },
        {
          estacion: "pearl-arts-district",
          actividad: "Dallas Arts District, museos (9:00 AM - 12:00 PM)"
        },
        {
          estacion: "dallas-cityplace-uptown",
          actividad: "Uptown shopping, restaurantes (12:30 PM - 2:00 PM)"
        },
        {
          estacion: "dallas-victory-park",
          actividad: "Victory Park commercial, almuerzo (2:30 PM)"
        },
        {
          estacion: "dallas-union-station",
          actividad: "Retorno. Cena downtown (6:00 PM). Información para AT&T Stadium (7:00 PM)"
        }
      ]
    },
    horarios_pico: "Lunes-Viernes 7-9 AM, 4-6 PM",
    horarios_frecuencia: "Cada 15 min horas pico, cada 30 min fuera de pico",
    tarifas: "USD 2.50 sencillo, USD 6 Visitor Day Pass",
    notas_mundial: "Línea central para FIFA 2026. Union Station es hub de TRE a CentrePort para buses a AT&T Stadium. Plazo total: 1.5 horas desde Union Station."
  },
  {
    id: "blue",
    color: "#2E86DE",
    colorNombre: "Azul",
    inicio: "Downtown Rowlett",
    fin: "UNT Dallas",
    total: 18,
    municipios: ["Rowlett", "Dallas"],
    descripcion: "Línea Blue conecta Rowlett con UNT Dallas al norte. 18 estaciones, 24.3 km. Paso por Union Station y West End.",
    sistema: "dart-light-rail",
    estaciones_turisticas: ["dallas-union-station", "dallas-west-end", "pearl-arts-district"],
    estaciones: [
      "downtown-rowlett",
      "rowlett-lakepoint",
      "rowlett-lake",
      "eastfield-college",
      "lakewood",
      "white-rock",
      "deep-ellum",
      "fair-park",
      "pearl-arts-district",
      "st-paul",
      "akard",
      "dallas-west-end",
      "ebj-union-station",
      "high-school",
      "plaza",
      "unt-dallas",
      "market-center",
      "lamar-street"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día Línea Blue: Centro + Turismo",
      paradas: [
        {
          estacion: "dallas-union-station",
          actividad: "Inicio. Información FIFA (8:00 AM)"
        },
        {
          estacion: "dallas-west-end",
          actividad: "West End Historic District, museos (9:00 AM - 12:00 PM)"
        },
        {
          estacion: "pearl-arts-district",
          actividad: "Nasher Sculpture Center (1:00 PM - 3:00 PM)"
        },
        {
          estacion: "deep-ellum",
          actividad: "East End cultural, gastronomía (3:30 PM - 5:30 PM)"
        },
        {
          estacion: "dallas-union-station",
          actividad: "Retorno. Cena y planificación FIFA (6:30 PM)"
        }
      ]
    },
    horarios_pico: "Lunes-Viernes 7-9 AM, 4-6 PM",
    horarios_frecuencia: "Cada 15 min horas pico, cada 30 min fuera de pico",
    tarifas: "USD 2.50 sencillo, USD 6 Visitor Day Pass",
    notas_mundial: "Línea turística. Union Station conexión a TRE/shuttles FIFA. West End es zona de hospedaje."
  },
  {
    id: "green",
    color: "#26C485",
    colorNombre: "Verde",
    inicio: "North Carrollton/Frankford",
    fin: "Buckner",
    total: 18,
    municipios: ["Carrollton", "Dallas"],
    descripcion: "Línea Green conecta Carrollton con Buckner al sureste. 18 estaciones, 19.8 km. Línea norte-sur con transferencias en downtown.",
    sistema: "dart-light-rail",
    estaciones_turisticas: ["dallas-cityplace-uptown"],
    estaciones: [
      "north-carrollton-frankford",
      "frankford",
      "forest-lane",
      "farmers-branch",
      "carrollton",
      "downtown-carrollton",
      "inwood",
      "bachman",
      "park-lane",
      "ledbetter",
      "dallas-cityplace-uptown",
      "gowan",
      "abrams",
      "pleasant-grove",
      "south-hines",
      "buckner",
      "lake-june",
      "forest-lane-south"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día Línea Green: Carrollton y Uptown",
      paradas: [
        {
          estacion: "north-carrollton-frankford",
          actividad: "Inicio en Carrollton (8:00 AM)"
        },
        {
          estacion: "downtown-carrollton",
          actividad: "Centro de Carrollton (9:00 AM - 10:30 AM)"
        },
        {
          estacion: "dallas-cityplace-uptown",
          actividad: "Uptown compras y gastronomía (11:00 AM - 3:00 PM)"
        },
        {
          estacion: "pleasant-grove",
          actividad: "Barrio residencial (3:30 PM - 4:30 PM)"
        }
      ]
    },
    horarios_pico: "Lunes-Viernes 7-9 AM, 4-6 PM",
    horarios_frecuencia: "Cada 15 min horas pico, cada 30 min fuera de pico",
    tarifas: "USD 2.50 sencillo, USD 6 Visitor Day Pass",
    notas_mundial: "Línea secundaria. Cityplace/Uptown es punto de conexión para FIFA."
  },
  {
    id: "orange",
    color: "#FF9500",
    colorNombre: "Naranja",
    inicio: "DFW Airport",
    fin: "Parker Road",
    total: 16,
    municipios: ["Irving", "Arlington"],
    descripcion: "Línea Orange conecta DFW Airport con Parker Road en Arlington. 16 estaciones, 20.9 km. Crucial para viajeros aeroportuarios.",
    sistema: "dart-light-rail",
    estaciones_turisticas: ["dallas-centreport-dfw", "dallas-dfw-airport", "dallas-parker-road"],
    estaciones: [
      "dallas-dfw-airport",
      "dfw-airport-terminal-c",
      "dfw-airport-terminal-e",
      "irving-convention-center",
      "irving-beltline",
      "beltline",
      "coppell",
      "farmers-branch",
      "las-colinas",
      "irving-mall",
      "centreport-dfw",
      "irving-downtown",
      "irving-heritage",
      "irving-walnut-hill",
      "arlington-center",
      "dallas-parker-road"
    ],
    ruta_1_dia: {
      titulo: "Ruta Aeropuerto a AT&T Stadium - Orange Line",
      paradas: [
        {
          estacion: "dallas-dfw-airport",
          actividad: "Llegada terminal (cualquier hora)"
        },
        {
          estacion: "centreport-dfw",
          actividad: "Bus charter FIFA a AT&T Stadium, conexión 30 min"
        },
        {
          estacion: "dallas-parker-road",
          actividad: "Alternativa: Rideshare a AT&T Stadium (15 min)"
        }
      ]
    },
    horarios_pico: "Operativo 24/7",
    horarios_frecuencia: "Cada 15 min todo el día",
    tarifas: "USD 2.50 sencillo, USD 6 Visitor Day Pass",
    notas_mundial: "CRÍTICA PARA FIFA 2026. Puerta de entrada principal. DFW→CentrePort→Bus FIFA a AT&T Stadium. Total 1-1.5 horas."
  },
  {
    id: "tre",
    color: "#8E44AD",
    colorNombre: "Púrpura",
    inicio: "Fort Worth Central Station",
    fin: "Victory Park",
    total: 6,
    municipios: ["Fort Worth", "Dallas"],
    descripcion: "Trinity Railway Express (TRE) conecta Fort Worth con Dallas downtown. 6 paradas, 32 km de carril compartido. Servicio histórico desde 1996.",
    sistema: "trinity-railway-express",
    estaciones_turisticas: ["dallas-union-station", "dallas-victory-park", "dallas-centreport-dfw"],
    estaciones: [
      "fort-worth-central-station",
      "centreport-dfw",
      "irving-industrial",
      "irving-convention-center",
      "irving-mall",
      "dallas-victory-park",
      "ebj-union-station"
    ],
    ruta_1_dia: {
      titulo: "Ruta TRE: Fort Worth - Dallas Centro - FIFA",
      paradas: [
        {
          estacion: "fort-worth-central-station",
          actividad: "Inicio desde Fort Worth (8:00 AM)"
        },
        {
          estacion: "centreport-dfw",
          actividad: "Conexión a shuttles FIFA a AT&T Stadium (30 min viaje)"
        },
        {
          estacion: "ebj-union-station",
          actividad: "Llegada Dallas (8:45 AM total)"
        }
      ]
    },
    horarios_pico: "Lunes-Viernes 6-10 AM (A FW), 3-7 PM (A Dallas)",
    horarios_frecuencia: "Cada 30-60 min",
    tarifas: "USD 2.50-3.50 según zona, +bus FIFA USD 15-25",
    notas_mundial: "ESSENTIAL PARA FIFA 2026. CentrePort es punto clave para shuttles a AT&T Stadium. Total: 30 min TRE + 15-20 min shuttle = ~50 min a estadio."
  }
];