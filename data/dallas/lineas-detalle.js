export const lineasDallas = [
  {
    id: "red",
    color: "#E63946",
    colorNombre: "Rojo",
    inicio: "Parker Road",
    fin: "Westmoreland",
    total: 26,
    municipios: ["Plano", "Richardson", "Dallas", "Arlington"],
    descripcion: "Línea Red de DART. Línea troncal norte-sur que conecta Parker Road en Plano con Westmoreland en el sur de Dallas. 26 estaciones, 28 millas. Pasa por Downtown, Arts District, CityPlace/Uptown, y Union Station. Hub central para conexiones con TRE y Red Line.",
    sistema: "dart-light-rail",
    estaciones_turisticas: ["dallas-union-station", "dallas-pearl-arts-district", "dallas-cityplace-uptown", "dallas-smu-mockingbird"],
    estaciones: [
      "dallas-parker-road",
      "dallas-downtown-plano",
      "dallas-12th-street",
      "dallas-cityline-bush",
      "dallas-galatyn-park",
      "dallas-arapaho-center",
      "dallas-spring-valley",
      "dallas-lbj-central",
      "dallas-forest-lane",
      "dallas-walnut-hill",
      "dallas-park-lane",
      "dallas-lovers-lane",
      "dallas-smu-mockingbird",
      "dallas-cityplace-uptown",
      "dallas-pearl-arts-district",
      "dallas-st-paul",
      "dallas-akard",
      "dallas-west-end",
      "dallas-union-station",
      "dallas-convention-center",
      "dallas-cedars",
      "dallas-8th-corinth",
      "dallas-dallas-zoo",
      "dallas-tyler-vernon",
      "dallas-hampton",
      "dallas-westmoreland"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día Línea Roja: Plano a Westmoreland",
      paradas: [
        {
          estacion: "dallas-union-station",
          actividad: "Hub central. Información FIFA y TRE a AT&T Stadium (9:00 AM)"
        },
        {
          estacion: "dallas-pearl-arts-district",
          actividad: "Nasher Sculpture Center y galerías (10:00 AM - 12:00 PM)"
        },
        {
          estacion: "dallas-cityplace-uptown",
          actividad: "Compras y gastronomía premium (1:00 PM - 3:00 PM)"
        },
        {
          estacion: "dallas-dallas-zoo",
          actividad: "Dallas Zoo (3:30 PM - 5:30 PM)"
        }
      ]
    },
    horarios_pico: "Lunes-Viernes 7-9 AM, 4-6 PM",
    horarios_frecuencia: "Cada 15 min horas pico, cada 30 min fuera de pico",
    tarifas: "USD 2.50 sencillo, USD 6 Visitor Day Pass (GoPass Tap card)",
    notas_mundial: "Línea troncal para FIFA 2026. Union Station es hub de TRE a CentrePort para buses a AT&T Stadium. Conexión directa a Pearl Arts District y Uptown shopping."
  },
  {
    id: "blue",
    color: "#2E86DE",
    colorNombre: "Azul",
    inicio: "Downtown Rowlett",
    fin: "UNT Dallas",
    total: 23,
    municipios: ["Rowlett", "Garland", "Dallas"],
    descripcion: "Línea Blue de DART. Línea este-oeste que conecta Downtown Rowlett con UNT Dallas. 23 estaciones, 29 millas. Pasa por White Rock, SMU/Mockingbird, Arts District, y Union Station. Importante conexión turística y educativa.",
    sistema: "dart-light-rail",
    estaciones_turisticas: ["dallas-white-rock", "dallas-smu-mockingbird", "dallas-pearl-arts-district", "dallas-union-station"],
    estaciones: [
      "dallas-downtown-rowlett",
      "dallas-downtown-garland",
      "dallas-forest-jupiter",
      "dallas-lbj-skillman",
      "dallas-lake-highlands",
      "dallas-white-rock",
      "dallas-smu-mockingbird",
      "dallas-cityplace-uptown",
      "dallas-pearl-arts-district",
      "dallas-st-paul",
      "dallas-akard",
      "dallas-west-end",
      "dallas-union-station",
      "dallas-convention-center",
      "dallas-cedars",
      "dallas-8th-corinth",
      "dallas-morrell",
      "dallas-illinois",
      "dallas-kiest",
      "dallas-va-medical-center",
      "dallas-ledbetter",
      "dallas-camp-wisdom",
      "dallas-unt-dallas"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día Línea Azul: White Rock a Arts District",
      paradas: [
        {
          estacion: "dallas-white-rock",
          actividad: "White Rock Lake. Parque y vistas naturales (9:00 AM - 11:00 AM)"
        },
        {
          estacion: "dallas-smu-mockingbird",
          actividad: "SMU Campus y Mockingbird Lane histórica (11:30 AM - 12:30 PM)"
        },
        {
          estacion: "dallas-pearl-arts-district",
          actividad: "Arts District, museos y galerías (1:00 PM - 4:00 PM)"
        },
        {
          estacion: "dallas-union-station",
          actividad: "Cena y información FIFA (5:00 PM)"
        }
      ]
    },
    horarios_pico: "Lunes-Viernes 7-9 AM, 4-6 PM",
    horarios_frecuencia: "Cada 15 min horas pico, cada 30 min fuera de pico",
    tarifas: "USD 2.50 sencillo, USD 6 Visitor Day Pass (GoPass Tap card)",
    notas_mundial: "Línea turística con White Rock como destacado. Conexión a Union Station para TRE y shuttles FIFA."
  },
  {
    id: "green",
    color: "#26C485",
    colorNombre: "Verde",
    inicio: "North Carrollton/Frankford",
    fin: "Buckner",
    total: 24,
    municipios: ["Carrollton", "Farmers Branch", "Dallas"],
    descripcion: "Línea Green de DART. Línea norte-sur que conecta North Carrollton/Frankford con Buckner. 24 estaciones, 26 millas. Pasa por centros comerciales, universidades, y districts residenciales. Importante para acceso a Uptown y Downtown.",
    sistema: "dart-light-rail",
    estaciones_turisticas: ["dallas-inwood-love-field", "dallas-cityplace-uptown", "dallas-fair-park"],
    estaciones: [
      "dallas-buckner",
      "dallas-lake-june",
      "dallas-lawnview",
      "dallas-hatcher",
      "dallas-mlk-jr",
      "dallas-fair-park",
      "dallas-baylor-university-medical",
      "dallas-deep-ellum",
      "dallas-pearl-arts-district",
      "dallas-st-paul",
      "dallas-akard",
      "dallas-west-end",
      "dallas-victory",
      "dallas-market-center",
      "dallas-southwestern-medical",
      "dallas-inwood-love-field",
      "dallas-burbank",
      "dallas-bachman",
      "dallas-walnut-hill-denton",
      "dallas-royal-lane",
      "dallas-farmers-branch",
      "dallas-downtown-carrollton",
      "dallas-trinity-mills",
      "dallas-north-carrollton-frankford"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día Línea Verde: Fair Park a Love Field",
      paradas: [
        {
          estacion: "dallas-fair-park",
          actividad: "Fair Park Museum y Cotton Bowl (10:00 AM - 12:00 PM)"
        },
        {
          estacion: "dallas-deep-ellum",
          actividad: "Historic Deep Ellum, gastronomía y arte (12:30 PM - 2:00 PM)"
        },
        {
          estacion: "dallas-pearl-arts-district",
          actividad: "Arts District y museos (2:30 PM - 4:30 PM)"
        },
        {
          estacion: "dallas-inwood-love-field",
          actividad: "Love Field Airport, tiendas y servicios (5:00 PM)"
        }
      ]
    },
    horarios_pico: "Lunes-Viernes 7-9 AM, 4-6 PM",
    horarios_frecuencia: "Cada 15 min horas pico, cada 30 min fuera de pico",
    tarifas: "USD 2.50 sencillo, USD 6 Visitor Day Pass (GoPass Tap card)",
    notas_mundial: "Línea secundaria con acceso a Fair Park (atracciones culturales). Inwood/Love Field es aeropuerto alternativo y conexión de shopping."
  },
  {
    id: "orange",
    color: "#FF9500",
    colorNombre: "Naranja",
    inicio: "DFW Airport Terminal A",
    fin: "Parker Road",
    total: 31,
    municipios: ["Irving", "Las Colinas", "Arlington", "Plano"],
    descripcion: "Línea Orange de DART. Línea expresa de aeropuerto que conecta DFW Airport Terminal A con Parker Road en Plano. 31 estaciones, 34 millas. Crucial para viajeros internacionales. Acceso directo a CentrePort para shuttles FIFA a AT&T Stadium.",
    sistema: "dart-light-rail",
    estaciones_turisticas: ["dallas-dfw-airport-terminal-a", "dallas-centreport-dfw", "dallas-irving-convention-center"],
    estaciones: [
      "dallas-dfw-airport-terminal-a",
      "dallas-belt-line",
      "dallas-dallas-college-north-lake",
      "dallas-hidden-ridge",
      "dallas-las-colinas-urban-center",
      "dallas-irving-convention-center",
      "dallas-university-of-dallas",
      "dallas-bachman",
      "dallas-burbank",
      "dallas-inwood-love-field",
      "dallas-southwestern-medical",
      "dallas-market-center",
      "dallas-victory",
      "dallas-west-end",
      "dallas-akard",
      "dallas-st-paul",
      "dallas-pearl-arts-district",
      "dallas-cityplace-uptown",
      "dallas-smu-mockingbird",
      "dallas-lovers-lane",
      "dallas-park-lane",
      "dallas-walnut-hill",
      "dallas-forest-lane",
      "dallas-lbj-central",
      "dallas-spring-valley",
      "dallas-arapaho-center",
      "dallas-galatyn-park",
      "dallas-cityline-bush",
      "dallas-12th-street",
      "dallas-downtown-plano",
      "dallas-parker-road"
    ],
    ruta_1_dia: {
      titulo: "Ruta Aeropuerto FIFA: DFW a AT&T Stadium",
      paradas: [
        {
          estacion: "dallas-dfw-airport-terminal-a",
          actividad: "Llegada internacional (cualquier hora)"
        },
        {
          estacion: "dallas-centreport-dfw",
          actividad: "Bus charter FIFA a AT&T Stadium (30 min total)"
        },
        {
          estacion: "dallas-parker-road",
          actividad: "Alternativa norte: Rideshare a Plano (15 min)"
        }
      ]
    },
    horarios_pico: "Operativo 4 AM - 1 AM",
    horarios_frecuencia: "Cada 10 min horas pico, cada 30 min madrugada",
    tarifas: "USD 2.50 sencillo, USD 6 Visitor Day Pass (GoPass Tap card)",
    notas_mundial: "CRÍTICA PARA FIFA 2026. Puerta de entrada principal desde DFW. CentrePort→Bus FIFA→AT&T Stadium. Total 1-1.5 horas. Incluye paradas en Terminals B, C, E."
  },
  {
    id: "tre",
    color: "#8E44AD",
    colorNombre: "Púrpura",
    inicio: "Union Station",
    fin: "T&P Station",
    total: 10,
    municipios: ["Dallas", "Irving", "Fort Worth"],
    descripcion: "Trinity Railway Express (TRE). Servicio de tren regional que conecta Dallas (Union Station) con Fort Worth (T&P Station). 10 paradas, 34 millas. Operativo desde 1996. Crucial para conexión inter-ciudad y acceso a CentrePort para shuttles FIFA.",
    sistema: "trinity-railway-express",
    estaciones_turisticas: ["dallas-union-station", "dallas-centreport-dfw", "dallas-victory-park", "dallas-tre-medical-market-center"],
    estaciones: [
      "dallas-union-station",
      "dallas-victory",
      "dallas-tre-medical-market-center",
      "dallas-downtown-irving-heritage",
      "dallas-west-irving",
      "dallas-centreport-dfw",
      "dallas-bell-station",
      "dallas-trinity-lakes",
      "dallas-fort-worth-central-station",
      "dallas-tp-station"
    ],
    ruta_1_dia: {
      titulo: "Ruta TRE: Dallas a Fort Worth + FIFA",
      paradas: [
        {
          estacion: "dallas-union-station",
          actividad: "Hub central Dallas. Info FIFA (8:00 AM)"
        },
        {
          estacion: "dallas-centreport-dfw",
          actividad: "Conexión a shuttles FIFA a AT&T Stadium (8:30 AM)"
        },
        {
          estacion: "dallas-fort-worth-central-station",
          actividad: "Llegada Fort Worth para exploración cultural (9:30 AM)"
        },
        {
          estacion: "dallas-tp-station",
          actividad: "Retorno a Dallas (3:00 PM)"
        }
      ]
    },
    horarios_pico: "Lunes-Viernes 6-10 AM (hacia FW), 3-7 PM (hacia Dallas)",
    horarios_frecuencia: "Cada 30-60 min (menos durante madrugada)",
    tarifas: "USD 2.50-3.50 según zona, +bus FIFA USD 15-25",
    notas_mundial: "ESSENTIAL PARA FIFA 2026. CentrePort es punto clave para shuttles a AT&T Stadium. Total: 30 min TRE + 15-20 min shuttle = ~50 min a estadio desde Union Station."
  },
  {
    id: "streetcar",
    color: "#E74C3C",
    colorNombre: "Rojo",
    inicio: "Union Station",
    fin: "Bishop Arts",
    total: 6,
    municipios: ["Dallas"],
    descripcion: "Dallas Streetcar. Sistema de tranvía histórico en el Arts District de Dallas. 6 paradas, 2.4 millas. Servicio gratuito que conecta Union Station con Bishop Arts District. Operativo desde 2015, símbolo de revitalización del downtown.",
    sistema: "dallas-streetcar",
    estaciones_turisticas: ["dallas-union-station", "dallas-bishop-arts", "dallas-6th-street"],
    estaciones: [
      "dallas-union-station",
      "dallas-greenbriar",
      "dallas-oakenwald",
      "dallas-beckley",
      "dallas-6th-street",
      "dallas-bishop-arts"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día Dallas Streetcar: Arts District a Bishop",
      paradas: [
        {
          estacion: "dallas-union-station",
          actividad: "Inicio. Hub central (10:00 AM)"
        },
        {
          estacion: "dallas-6th-street",
          actividad: "Deep Ellum y galerías de arte (10:30 AM - 12:00 PM)"
        },
        {
          estacion: "dallas-bishop-arts",
          actividad: "Bishop Arts District. Murales, boutiques, taquerías (12:30 PM - 4:00 PM)"
        }
      ]
    },
    horarios_pico: "Lunes-Viernes 6 AM - 10 PM",
    horarios_frecuencia: "Cada 15 min todo el día",
    tarifas: "GRATUITO",
    notas_mundial: "Transporte cultural gratuito. Ideal para turistas que exploran Arts District y Bishop Arts. Conexión directa desde Union Station. Atmosférico y fotogénico para redes sociales."
  }
];

export const lineasDAL = lineasDallas;
