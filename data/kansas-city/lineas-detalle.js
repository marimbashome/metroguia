export const lineasKansasCity = [
  {
    id: "main",
    color: "#C60C30",
    colorNombre: "Rojo",
    inicio: "UMKC (51st & Brookside)",
    fin: "River Market",
    total: 15,
    municipios: ["Kansas City"],
    descripcion: "KC Streetcar Main Line conecta UMKC en el sur con River Market en el norte a través de downtown Kansas City. 15 estaciones, 5.7 km. Operativa desde 2016, expandida a UMKC en octubre 2025. GRATIS para todos.",
    sistema: "kc-streetcar",
    estaciones_turisticas: ["kc-union-station", "kc-power-light", "kc-river-market"],
    estaciones: [
      "kc-umkc",
      "kc-southmoreland",
      "kc-westport",
      "kc-armour",
      "kc-union-hill",
      "kc-union-station",
      "kc-crossroads",
      "kc-kauffman-center",
      "kc-power-light",
      "kc-crown-center",
      "kc-city-market",
      "kc-river-market",
      "kc-union-hill-north",
      "kc-5th-broadway",
      "kc-historic-rbv"
    ],
    ruta_1_dia: {
      titulo: "Ruta de 1 día Main Line: Centro + Historias",
      paradas: [
        {
          estacion: "kc-union-station",
          actividad: "Inicio en Union Station histórica (8:00 AM). Información FIFA shuttles."
        },
        {
          estacion: "kc-power-light",
          actividad: "Power & Light District, gastronomía y entretenimiento (9:00 AM - 12:00 PM)"
        },
        {
          estacion: "kc-river-market",
          actividad: "River Market mercado histórico, productos locales (12:30 PM - 2:00 PM)"
        },
        {
          estacion: "kc-crossroads",
          actividad: "Crossroads Arts District, galerías (3:00 PM - 5:00 PM)"
        },
        {
          estacion: "kc-westport",
          actividad: "Westport música en vivo, bares legendarios (6:00 PM). Cena y planificación FIFA (7:00 PM)"
        }
      ]
    },
    horarios_pico: "Martes-Viernes 7-9 AM, 4-6 PM",
    horarios_frecuencia: "Cada 10 min todo el día",
    tarifas: "GRATIS para todos",
    notas_mundial: "CRUCIAL PARA FIFA 2026. Main Line conecta todos los hubs de transporte FIFA. Union Station es punto de convergencia para ConnectKC26 Stadium Direct a Arrowhead Stadium. Plazo: 20-30 min a estadio."
  },
  {
    id: "riverfront",
    color: "#0078D2",
    colorNombre: "Azul",
    inicio: "River Market",
    fin: "CPKC Stadium",
    total: 3,
    municipios: ["Kansas City"],
    descripcion: "KC Streetcar Riverfront Extension conecta River Market con CPKC Stadium a lo largo del río Missouri. 3 paradas, 0.7 km. ABRE MAYO 2026, diseñada específicamente para FIFA 2026. GRATIS.",
    sistema: "kc-streetcar",
    estaciones_turisticas: ["kc-river-market", "kc-cpkc-stadium"],
    estaciones: [
      "kc-river-market",
      "kc-riverfront-central",
      "kc-cpkc-stadium"
    ],
    ruta_1_dia: {
      titulo: "Ruta Riverfront Extension: River Market a Estadio (ABRE MAYO 2026)",
      paradas: [
        {
          estacion: "kc-river-market",
          actividad: "Salida desde River Market (cualquier hora)"
        },
        {
          estacion: "kc-cpkc-stadium",
          actividad: "Llegada a CPKC Stadium (10 min directo para partidos FIFA)"
        }
      ]
    },
    horarios_pico: "Según horarios de partidos FIFA",
    horarios_frecuencia: "Cada 15 min",
    tarifas: "GRATIS para todos",
    notas_mundial: "ESENCIAL PARA FIFA 2026. Abre especialmente para el torneo en mayo 2026. Conexión directa sin auto desde downtown KC a CPKC Stadium. 10 min desde River Market."
  },
  {
    id: "connect-kc26-stadium-direct",
    color: "#FF6B35",
    colorNombre: "Naranja",
    inicio: "Múltiples puntos de partida",
    fin: "Arrowhead Stadium",
    total: 0,
    municipios: ["Kansas City"],
    descripcion: "ConnectKC26 Stadium Direct es el sistema de buses FIFA 2026 para Arrowhead Stadium. Múltiples rutas desde Fan Festivals, park & ride, y downtown KC. 200+ buses operacionales durante torneo. Incluido con boleto FIFA.",
    sistema: "bus",
    estaciones_turisticas: ["kc-union-station", "kc-power-light", "kc-arrowhead-stadium"],
    estaciones: [
      "kc-fan-festival-crown-center",
      "kc-fan-festival-union-station",
      "kc-fan-festival-power-light",
      "kc-park-ride-west",
      "kc-park-ride-south",
      "kc-park-ride-east",
      "kc-arrowhead-stadium-entrance"
    ],
    ruta_1_dia: {
      titulo: "Ruta ConnectKC26: Fan Festival a Arrowhead Stadium",
      paradas: [
        {
          estacion: "kc-fan-festival-crown-center",
          actividad: "Salida desde Fan Festival (cualquier hora)"
        },
        {
          estacion: "kc-arrowhead-stadium-entrance",
          actividad: "Llegada a Arrowhead Stadium (20-30 min según ruta)"
        }
      ]
    },
    horarios_pico: "Según horarios de partidos FIFA",
    horarios_frecuencia: "Cada 20 min desde múltiples ubicaciones",
    tarifas: "INCLUIDO CON BOLETO FIFA",
    notas_mundial: "200+ buses operativos. 3 rutas principales: Fan Festivals → Arrowhead, Park & Ride → Arrowhead, Downtown Union Station → Arrowhead. Único acceso a Arrowhead sin auto."
  },
  {
    id: "bus-47",
    color: "#A4AC86",
    colorNombre: "Verde",
    inicio": "Downtown KC",
    fin: "Arrowhead Stadium",
    total: 0,
    municipios: ["Kansas City"],
    descripcion": "Ruta 47 de RideKC bus local (KCATA). Conecta downtown con zona de Arrowhead. Servicio regular de transporte público pre-FIFA.",
    sistema: "bus-local",
    estaciones_turisticas: ["kc-union-station", "kc-power-light"],
    estaciones: [
      "kc-union-station",
      "kc-downtown-route-47",
      "kc-arrowhead-approach"
    ],
    ruta_1_dia: {
      titulo: "Ruta 47: Alternativa local pre-FIFA",
      paradas: [
        {
          estacion: "kc-union-station",
          actividad: "Salida desde Union Station"
        },
        {
          estacion: "kc-arrowhead-approach",
          actividad: "Llegada a Arrowhead (variables según horario)"
        }
      ]
    },
    horarios_pico: "Variable según servicio",
    horarios_frecuencia: "Variable (pre-FIFA service)",
    tarifas: "USD 1.50-2.00",
    notas_mundial: "Ruta local alternativa. ConnectKC26 recomendado para FIFA 2026. Ruta 47 es opción presupuesto después del torneo."
  }
];