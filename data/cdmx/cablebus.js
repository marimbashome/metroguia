export const cablebusLineas = {
  "1": {
    id: "1",
    nombre: "Línea 1",
    nombreCorto: "L1",
    color: "#7B1FA2",
    colorNombre: "Morado",
    inicio: "Indios Verdes",
    fin: "Cuautepec",
    total: 6,
    km: 9.2,
    tiempo_recorrido: "33 min",
    horario: "Lun-Vie 5:00-23:00 · Sáb 6:00-23:00 · Dom 7:00-23:00",
    tarifa: "$7 MXN (Tarjeta MB)",
    alcaldia: "Gustavo A. Madero",
    descripcion: "La Línea 1 del Cablebús conecta la estación Indios Verdes con Cuautepec, atravesando zonas de alta densidad poblacional en Gustavo A. Madero. Abierta en julio de 2021, esta línea revolucionó la conectividad en el norte de la ciudad.",
    estaciones: [
      { slug: "cb-indios-verdes", nombre: "Indios Verdes" },
      { slug: "cb-ticoman", nombre: "Ticomán" },
      { slug: "cb-la-pastora", nombre: "La Pastora" },
      { slug: "cb-campos-revolucion", nombre: "Campos Revolución" },
      { slug: "cb-cuautepec", nombre: "Cuautepec" },
      { slug: "cb-tlalpexco", nombre: "Tlalpexco" }
    ],
    conexiones_intermodales: [
      "Metro Línea 3 (Indios Verdes)",
      "Metrobús Línea 1, 3, 7 (Indios Verdes)",
      "Mexicable Línea Verde (Indios Verdes)"
    ],
    seo_title: "Cablebús Línea 1: Indios Verdes a Cuautepec - MetroGuía CDMX",
    meta_description: "Información completa de la Línea 1 del Cablebús (9.2 km). Estaciones, horarios, tarifas y conexiones intermodales en la CDMX.",
    h1: "Cablebús Línea 1: Indios Verdes - Cuautepec"
  },
  "2": {
    id: "2",
    nombre: "Línea 2",
    nombreCorto: "L2",
    color: "#00838F",
    colorNombre: "Azul Marino",
    inicio: "Constitución de 1917",
    fin: "Santa Marta",
    total: 7,
    km: 10.6,
    tiempo_recorrido: "37 min",
    horario: "Lun-Vie 5:30-23:30 · Sáb 6:00-23:30 · Dom 7:00-23:00",
    tarifa: "$7 MXN (Tarjeta MB)",
    alcaldia: "Iztapalapa",
    descripcion: "La Línea 2 del Cablebús es la línea de cable más larga del mundo según el Récord Guinness, con 10.6 km de extensión. Conecta Constitución de 1917 con Santa Marta, proporcionando acceso rápido a zonas vulnerables del oriente de la ciudad. Inaugurada en agosto de 2021.",
    estaciones: [
      { slug: "cb-constitucion-1917", nombre: "Constitución de 1917" },
      { slug: "cb-quetzalcoatl", nombre: "Quetzalcóatl" },
      { slug: "cb-torres-buenavista", nombre: "Las Torres Buenavista" },
      { slug: "cb-xalpa", nombre: "Xalpa" },
      { slug: "cb-lomas-estancia", nombre: "Lomas de la Estancia" },
      { slug: "cb-miguel-teotongo", nombre: "San Miguel Teotongo" },
      { slug: "cb-santa-marta", nombre: "Santa Marta" }
    ],
    conexiones_intermodales: [
      "Metro Línea 8 (Constitución de 1917)",
      "Metro Línea A (Santa Marta)"
    ],
    seo_title: "Cablebús Línea 2: Constitución de 1917 a Santa Marta - Récord Guinness",
    meta_description: "La línea de cable más larga del mundo. Cablebús L2: 10.6 km de Constitución de 1917 a Santa Marta con 7 estaciones.",
    h1: "Cablebús Línea 2: Constitución de 1917 - Santa Marta (Récord Guinness)"
  },
  "3": {
    id: "3",
    nombre: "Línea 3",
    nombreCorto: "L3",
    color: "#2E7D32",
    colorNombre: "Verde",
    inicio: "Vasco de Quiroga",
    fin: "Los Pinos/Constituyentes",
    total: 6,
    km: 5.4,
    tiempo_recorrido: "19 min",
    horario: "Lun-Vie 6:00-22:00 · Sáb-Dom 8:00-22:00",
    tarifa: "$7 MXN (Tarjeta MB)",
    alcaldia: "Cuauhtémoc",
    descripcion: "La Línea 3 del Cablebús, inaugurada en septiembre de 2024, atraviesa el Bosque de Chapultepec desde Vasco de Quiroga hasta Los Pinos/Constituyentes. Ofrece vistas panorámicas del pulmón verde de la ciudad mientras conecta importantes sitios culturales e históricos.",
    estaciones: [
      { slug: "cb-vasco-quiroga", nombre: "Vasco de Quiroga" },
      { slug: "cb-cineteca-bodega", nombre: "Cineteca/Bodega de Arte" },
      { slug: "cb-parcur", nombre: "PARCUR/Colegio de Arquitectos" },
      { slug: "cb-charreria", nombre: "Charrería" },
      { slug: "cb-panteon-dolores", nombre: "Panteón de Dolores" },
      { slug: "cb-los-pinos", nombre: "Los Pinos/Constituyentes" }
    ],
    conexiones_intermodales: [
      "Metro Línea 7 (Constituyentes)"
    ],
    seo_title: "Cablebús Línea 3: Vasco de Quiroga a Los Pinos - Bosque de Chapultepec",
    meta_description: "Cablebús L3: Recorre el Bosque de Chapultepec desde Vasco de Quiroga hasta Los Pinos/Constituyentes. 6 estaciones culturales e históricas.",
    h1: "Cablebús Línea 3: Vasco de Quiroga - Los Pinos/Constituyentes"
  }
};

export const cablebusEstaciones = [
  {
    slug: "cb-indios-verdes",
    nombre: "Indios Verdes",
    linea: "Cablebús L1",
    lineaId: "1",
    sistema: "Cablebús",
    alcaldia: "Gustavo A. Madero",
    tipo_zona: "transporte",
    lat: 19.4932,
    lng: -99.1186,
    pois: [
      "Central de Abastos (10 min caminata)",
      "Mercado de Flores Xochimilco (8 min caminata)",
      "Auditorio Nacional (12 min en autobús)"
    ],
    transferencias: [
      "Metro Línea 3",
      "Metrobús Línea 1, 3, 7",
      "Mexicable Línea Verde",
      "Cablebús Línea 1"
    ],
    seo_title: "Estación Indios Verdes - Cablebús L1 MetroGuía",
    meta_description: "Estación de transferencia multimodal Indios Verdes. Acceso a Metro L3, Metrobús y Cablebús L1 en Gustavo A. Madero.",
    h1: "Estación Indios Verdes",
    intro: "La estación Indios Verdes es un nodo fundamental de conectividad en el norte de la CDMX. Ofrece transferencia directa a Metro Línea 3, múltiples líneas de Metrobús y Cablebús Línea 1. Ideal para comerciantes y turistas que visitan la Central de Abastos.",
    tips: [
      "Llega con 10 minutos de anticipación en horas pico",
      "Usa la Tarjeta MB para todas las transferencias (sin pago adicional)",
      "La zona es muy congestionada de 7-9 AM y 5-7 PM",
      "Hay acceso a cajeros automáticos en la estación"
    ]
  },
  {
    slug: "cb-ticoman",
    nombre: "Ticomán",
    linea: "Cablebús L1",
    lineaId: "1",
    sistema: "Cablebús",
    alcaldia: "Gustavo A. Madero",
    tipo_zona: "residencial",
    lat: 19.5020,
    lng: -99.1290,
    pois: [
      "Mercado Ticomán",
      "Clínica Familiar Ticomán (ISSTE)",
      "Plaza Comercial Ticomán"
    ],
    transferencias: [
      "Metrobús Línea 6, 8",
      "Cablebús Línea 1"
    ],
    seo_title: "Estación Ticomán - Cablebús L1 CDMX",
    meta_description: "Estación Ticomán del Cablebús L1. Acceso a zonas residenciales y comerciales en Gustavo A. Madero.",
    h1: "Estación Ticomán",
    intro: "Ticomán es una estación intermedia que sirve a comunidades residenciales del norte de la ciudad. Ofrece acceso a mercados locales y servicios de salud, conectando poblaciones de medianos ingresos con el centro de la ciudad.",
    tips: [
      "Estación menos congestionada que Indios Verdes",
      "Mercado Ticomán es ideal para compras de abarrotes",
      "Buena conexión con Metrobús para ampliar cobertura",
      "Horario más tranquilo en las mañanas (6-7 AM)"
    ]
  },
  {
    slug: "cb-la-pastora",
    nombre: "La Pastora",
    linea: "Cablebús L1",
    lineaId: "1",
    sistema: "Cablebús",
    alcaldia: "Gustavo A. Madero",
    tipo_zona: "residencial",
    lat: 19.5110,
    lng: -99.1330,
    pois: [
      "Unidad Habitacional La Pastora",
      "Parque La Pastora",
      "Escuela Secundaria Federal La Pastora"
    ],
    transferencias: [
      "Metrobús Línea 5, 9",
      "Cablebús Línea 1"
    ],
    seo_title: "Estación La Pastora - Cablebús L1",
    meta_description: "Estación La Pastora del Cablebús. Acceso a unidades habitacionales y zonas verdes en Gustavo A. Madero.",
    h1: "Estación La Pastora",
    intro: "La Pastora conecta amplias zonas residenciales con unidades habitacionales consolidadas. La estación sirve como punto de acceso para estudiantes y residentes de esta comunidad del norte de la ciudad.",
    tips: [
      "Zona familiar con buenos espacios verdes",
      "Horarios pico: 7-8 AM (estudiantes) y 3-4 PM (salida de escuela)",
      "Conexión efectiva con Metrobús para llegar a hospitales",
      "Estacionamiento informal disponible cerca"
    ]
  },
  {
    slug: "cb-campos-revolucion",
    nombre: "Campos Revolución",
    linea: "Cablebús L1",
    lineaId: "1",
    sistema: "Cablebús",
    alcaldia: "Gustavo A. Madero",
    tipo_zona: "residencial",
    lat: 19.5200,
    lng: -99.1350,
    pois: [
      "Unidad Habitacional Campos Revolución",
      "Centro Comunitario",
      "Instalaciones Deportivas Municipales"
    ],
    transferencias: [
      "Metrobús Línea 4, 7",
      "Cablebús Línea 1",
      "Cablebús Línea 1 (Rama a Tlalpexco)"
    ],
    seo_title: "Estación Campos Revolución - Cablebús L1",
    meta_description: "Estación Campos Revolución del Cablebús. Punto de conexión hacia Tlalpexco y acceso a unidades habitacionales.",
    h1: "Estación Campos Revolución",
    intro: "Campos Revolución es una estación estratégica que además de servir a su comunidad residencial, funciona como punto de conexión hacia la rama de Tlalpexco, ampliando las opciones de transporte en la zona norte.",
    tips: [
      "Punto de bifurcación hacia Tlalpexco",
      "Centro comunitario ofrece servicios básicos",
      "Zona deportiva cerca para actividades recreativas",
      "Buena conexión con Metrobús para expandir rutas"
    ]
  },
  {
    slug: "cb-cuautepec",
    nombre: "Cuautepec",
    linea: "Cablebús L1",
    lineaId: "1",
    sistema: "Cablebús",
    alcaldia: "Gustavo A. Madero",
    tipo_zona: "terminal",
    lat: 19.5290,
    lng: -99.1400,
    pois: [
      "Centro de Transferencia Cuautepec",
      "Mercado Popular Cuautepec",
      "Complejo Deportivo Municipal"
    ],
    transferencias: [
      "Metrobús Línea 2, 10, 12",
      "Cablebús Línea 1 (Terminal)"
    ],
    seo_title: "Estación Terminal Cuautepec - Cablebús L1",
    meta_description: "Terminal Cuautepec del Cablebús L1. Punto final de línea con conexiones a Metrobús y servicios integrales.",
    h1: "Estación Terminal Cuautepec",
    intro: "Cuautepec es la estación terminal de la Línea 1, funcionando como un nodo de transferencia importante hacia zonas más alejadas del norte. Centro comercial activo con servicios variados para usuarios.",
    tips: [
      "Terminal de línea con amplias instalaciones",
      "Múltiples opciones de Metrobús para conectar hacia otros rumbos",
      "Mercado popular con comida económica y de calidad",
      "Complejo deportivo para actividades recreativas"
    ]
  },
  {
    slug: "cb-tlalpexco",
    nombre: "Tlalpexco",
    linea: "Cablebús L1",
    lineaId: "1",
    sistema: "Cablebús",
    alcaldia: "Gustavo A. Madero",
    tipo_zona: "residencial",
    lat: 19.5220,
    lng: -99.1250,
    pois: [
      "Unidad Habitacional Tlalpexco",
      "Parque Tlalpexco",
      "Servicios Médicos Comunitarios"
    ],
    transferencias: [
      "Metrobús Línea 3, 8",
      "Cablebús Línea 1 (Rama desde Campos Revolución)"
    ],
    seo_title: "Estación Tlalpexco - Cablebús L1 Rama",
    meta_description: "Estación Tlalpexco de la rama del Cablebús L1. Acceso a zona residencial en Gustavo A. Madero.",
    h1: "Estación Tlalpexco",
    intro: "Tlalpexco es una estación de la rama de la Línea 1 que se desprende de Campos Revolución, ofreciendo acceso a comunidades residenciales específicas. Estratégica para usuarios que viven en esta zona.",
    tips: [
      "Rama menos congestionada que línea principal",
      "Parque con espacios para familias",
      "Servicios médicos accesibles en la zona",
      "Buena conexión con Metrobús para itinerarios complejos"
    ]
  },
  {
    slug: "cb-constitucion-1917",
    nombre: "Constitución de 1917",
    linea: "Cablebús L2",
    lineaId: "2",
    sistema: "Cablebús",
    alcaldia: "Iztapalapa",
    tipo_zona: "transporte",
    lat: 19.3590,
    lng: -99.0735,
    pois: [
      "Hospital General la Mujer Iztapalapa",
      "Instituto de Oftalmología Iztapalapa",
      "Centro Comercial Constitución"
    ],
    transferencias: [
      "Metro Línea 8",
      "Metrobús Línea 11, 14, 17",
      "Cablebús Línea 2"
    ],
    seo_title: "Estación Constitución de 1917 - Cablebús L2 CDMX",
    meta_description: "Estación Constitución de 1917 del Cablebús L2. Transferencia con Metro L8 y acceso a servicios médicos e comerciales.",
    h1: "Estación Constitución de 1917",
    intro: "Constitución de 1917 es el punto de inicio de la Línea 2, la línea de cable más larga del mundo. Ofrece transferencia directa con Metro Línea 8 y conexiones a múltiples líneas de Metrobús, sirviendo a la población de Iztapalapa.",
    tips: [
      "Transferencia directa con Metro L8 hacia Garibaldi",
      "Hospitales especializados cercanos en la zona",
      "Centro comercial con servicios y comida variada",
      "Zona de alta afluencia en horas pico (6:30-8:00 AM)"
    ]
  },
  {
    slug: "cb-quetzalcoatl",
    nombre: "Quetzalcóatl",
    linea: "Cablebús L2",
    lineaId: "2",
    sistema: "Cablebús",
    alcaldia: "Iztapalapa",
    tipo_zona: "residencial",
    lat: 19.3530,
    lng: -99.0580,
    pois: [
      "Mercado Quetzalcóatl",
      "Biblioteca Pública Municipal",
      "Clínica de Salud Comunitaria"
    ],
    transferencias: [
      "Metrobús Línea 13, 16",
      "Cablebús Línea 2"
    ],
    seo_title: "Estación Quetzalcóatl - Cablebús L2",
    meta_description: "Estación Quetzalcóatl del Cablebús L2. Acceso a servicios educativos, comerciales y de salud en Iztapalapa.",
    h1: "Estación Quetzalcóatl",
    intro: "Quetzalcóatl es una estación intermedia en la Línea 2 que sirve a comunidades residenciales de Iztapalapa. Ofrece acceso a mercados locales, servicios educativos y de salud para la población.",
    tips: [
      "Mercado local con productos frescos a precios económicos",
      "Biblioteca pública con servicios gratuitos de internet",
      "Clínica comunitaria para emergencias básicas",
      "Estación más tranquila que Constitución de 1917"
    ]
  },
  {
    slug: "cb-torres-buenavista",
    nombre: "Las Torres Buenavista",
    linea: "Cablebús L2",
    lineaId: "2",
    sistema: "Cablebús",
    alcaldia: "Iztapalapa",
    tipo_zona: "residencial",
    lat: 19.3480,
    lng: -99.0480,
    pois: [
      "Unidad Habitacional Las Torres Buenavista",
      "Parque Buenavista",
      "Centro Comunitario"
    ],
    transferencias: [
      "Metrobús Línea 12, 15",
      "Cablebús Línea 2"
    ],
    seo_title: "Estación Las Torres Buenavista - Cablebús L2",
    meta_description: "Estación Las Torres Buenavista del Cablebús. Acceso a grandes unidades habitacionales en Iztapalapa.",
    h1: "Estación Las Torres Buenavista",
    intro: "Las Torres Buenavista conecta amplias zonas residenciales consolidadas. La estación sirve a miles de residentes de las unidades habitacionales de mayor densidad poblacional en Iztapalapa.",
    tips: [
      "Zona residencial densa con buen pie de transporte",
      "Parque comunitario para actividades familiares",
      "Acceso a servicios básicos en centros comunitarios",
      "Horarios pico: mañanas (7-8:30 AM) y tardes (5-6:30 PM)"
    ]
  },
  {
    slug: "cb-xalpa",
    nombre: "Xalpa",
    linea: "Cablebús L2",
    lineaId: "2",
    sistema: "Cablebús",
    alcaldia: "Iztapalapa",
    tipo_zona: "residencial",
    lat: 19.3420,
    lng: -99.0400,
    pois: [
      "Mercado de Xalpa",
      "Campos deportivos Xalpa",
      "Escuela Primaria Federal"
    ],
    transferencias: [
      "Metrobús Línea 9, 18",
      "Cablebús Línea 2"
    ],
    seo_title: "Estación Xalpa - Cablebús L2",
    meta_description: "Estación Xalpa del Cablebús L2. Acceso a zona residencial y servicios comunitarios en Iztapalapa.",
    h1: "Estación Xalpa",
    intro: "Xalpa es una estación que sirve a comunidades de clase media y media-baja en Iztapalapa. Ofrece acceso a servicios comunitarios y es importante nodo de conectividad para residentes locales.",
    tips: [
      "Mercado local con variedades de producto",
      "Instalaciones deportivas para la comunidad",
      "Zona familiar con buena presencia de escuelas",
      "Estación con afluencia moderada"
    ]
  },
  {
    slug: "cb-lomas-estancia",
    nombre: "Lomas de la Estancia",
    linea: "Cablebús L2",
    lineaId: "2",
    sistema: "Cablebús",
    alcaldia: "Iztapalapa",
    tipo_zona: "residencial",
    lat: 19.3370,
    lng: -99.0320,
    pois: [
      "Unidad Habitacional Lomas de la Estancia",
      "Parque Lomas de la Estancia",
      "Centro de Salud Avanzado"
    ],
    transferencias: [
      "Metrobús Línea 10, 19",
      "Cablebús Línea 2"
    ],
    seo_title: "Estación Lomas de la Estancia - Cablebús L2",
    meta_description: "Estación Lomas de la Estancia del Cablebús L2. Acceso a unidades habitacionales grandes en Iztapalapa.",
    h1: "Estación Lomas de la Estancia",
    intro: "Lomas de la Estancia es una estación que accede a amplias unidades habitacionales. Centro de Salud Avanzado proporciona servicios médicos a la comunidad cercana.",
    tips: [
      "Centro de Salud con servicios médicos completos",
      "Parque amplio para actividades recreativas",
      "Unidades habitacionales con amplia población",
      "Buena cobertura de Metrobús para conectar otras zonas"
    ]
  },
  {
    slug: "cb-miguel-teotongo",
    nombre: "San Miguel Teotongo",
    linea: "Cablebús L2",
    lineaId: "2",
    sistema: "Cablebús",
    alcaldia: "Iztapalapa",
    tipo_zona: "residencial",
    lat: 19.3310,
    lng: -99.0250,
    pois: [
      "Mercado San Miguel Teotongo",
      "Iglesia de San Miguel Teotongo",
      "Escuelas Técnicas"
    ],
    transferencias: [
      "Metrobús Línea 7, 14",
      "Cablebús Línea 2"
    ],
    seo_title: "Estación San Miguel Teotongo - Cablebús L2",
    meta_description: "Estación San Miguel Teotongo del Cablebús L2. Acceso a zona residencial y servicios educativos.",
    h1: "Estación San Miguel Teotongo",
    intro: "San Miguel Teotongo es una estación que sirve a la comunidad local con servicios comerciales y educativos. Zona con fuerte identidad comunitaria y arraigo cultural.",
    tips: [
      "Mercado tradicional con buena variedad",
      "Iglesia histórica centro de la comunidad",
      "Escuelas técnicas para formación profesional",
      "Comunidad con fuerte sentido de identidad"
    ]
  },
  {
    slug: "cb-santa-marta",
    nombre: "Santa Marta",
    linea: "Cablebús L2",
    lineaId: "2",
    sistema: "Cablebús",
    alcaldia: "Iztapalapa",
    tipo_zona: "terminal",
    lat: 19.3260,
    lng: -99.0160,
    pois: [
      "Centro de Transferencia Santa Marta",
      "Hospital Materno-Infantil",
      "Mercado Popular Santa Marta",
      "Parque Santa Marta"
    ],
    transferencias: [
      "Metro Línea A",
      "Metrobús Línea 6, 11, 20",
      "Cablebús Línea 2 (Terminal)"
    ],
    seo_title: "Estación Terminal Santa Marta - Cablebús L2 CDMX",
    meta_description: "Terminal Santa Marta del Cablebús L2, con transferencia directa a Metro Línea A. Fin de la línea cable más larga del mundo.",
    h1: "Estación Terminal Santa Marta",
    intro: "Santa Marta es la terminal de la Línea 2, la línea de cable más larga del mundo. Ofrece transferencia directa a Metro Línea A, ampliando significativamente las opciones de conectividad hacia el oriente y sur de la ciudad.",
    tips: [
      "Transferencia directa con Metro L A hacia La Paz",
      "Hospital materno-infantil especializado",
      "Mercado popular con oferta gastronómica variada",
      "Parque comunitario para descanso entre transferencias",
      "Centro de información turística disponible"
    ]
  },
  {
    slug: "cb-vasco-quiroga",
    nombre: "Vasco de Quiroga",
    linea: "Cablebús L3",
    lineaId: "3",
    sistema: "Cablebús",
    alcaldia: "Cuauhtémoc",
    tipo_zona: "cultural",
    lat: 19.4060,
    lng: -99.2170,
    pois: [
      "Centro Cultural Vasco de Quiroga",
      "Paseo de las Constituciones",
      "Cafeterías y Restaurantes"
    ],
    transferencias: [
      "Metrobús Línea 21, 24",
      "Cablebús Línea 3"
    ],
    seo_title: "Estación Vasco de Quiroga - Cablebús L3 Bosque de Chapultepec",
    meta_description: "Estación Vasco de Quiroga del Cablebús L3. Acceso al Bosque de Chapultepec y zonas culturales.",
    h1: "Estación Vasco de Quiroga",
    intro: "Vasco de Quiroga es el punto de inicio de la Línea 3, puerta de entrada al Bosque de Chapultepec. La estación ofrece acceso a zonas culturales y espacios de recreación en el pulmón verde de la ciudad.",
    tips: [
      "Inicio de recorrido panorámico por Chapultepec",
      "Centro cultural con exposiciones y actividades",
      "Múltiples cafeterías para descansar",
      "Paseo peatonal bien mantenido",
      "Ideal para iniciar tours culturales"
    ]
  },
  {
    slug: "cb-cineteca-bodega",
    nombre: "Cineteca/Bodega de Arte",
    linea: "Cablebús L3",
    lineaId: "3",
    sistema: "Cablebús",
    alcaldia: "Cuauhtémoc",
    tipo_zona: "cultural",
    lat: 19.4100,
    lng: -99.2120,
    pois: [
      "Cineteca Nacional",
      "Bodega de Arte",
      "Biblioteca Especializada de Cine",
      "Salas de Proyección",
      "Tienda de Arte"
    ],
    transferencias: [
      "Metrobús Línea 21, 24",
      "Cablebús Línea 3"
    ],
    seo_title: "Estación Cineteca/Bodega de Arte - Cablebús L3",
    meta_description: "Estación Cineteca Nacional y Bodega de Arte del Cablebús L3. Centro cultural dedicado al cine y las artes en Chapultepec.",
    h1: "Estación Cineteca/Bodega de Arte",
    intro: "La Cineteca Nacional, ubicada en esta estación, es la institución más importante de México dedicada al cine. La Bodega de Arte complementa la oferta cultural con exposiciones de artes plásticas. Esta es una parada esencial para amantes de la cultura.",
    tips: [
      "Cineteca Nacional abierta al público con entrada gratuita",
      "Cartelera de cine mexicano e internacional",
      "Biblioteca especializada en cine con acceso público",
      "Exposiciones de arte moderno y contemporáneo",
      "Tienda de libros y materiales de cine",
      "Restaurante con vista al Bosque"
    ]
  },
  {
    slug: "cb-parcur",
    nombre: "PARCUR/Colegio de Arquitectos",
    linea: "Cablebús L3",
    lineaId: "3",
    sistema: "Cablebús",
    alcaldia: "Cuauhtémoc",
    tipo_zona: "cultural",
    lat: 19.4150,
    lng: -99.2060,
    pois: [
      "PARCUR (Parque del Conocimiento Urbano)",
      "Colegio de Arquitectos de México",
      "Biblioteca de Arquitectura",
      "Salas de Exposición"
    ],
    transferencias: [
      "Metrobús Línea 21, 24",
      "Cablebús Línea 3"
    ],
    seo_title: "Estación PARCUR/Colegio de Arquitectos - Cablebús L3",
    meta_description: "Estación PARCUR del Cablebús L3. Centro dedicado a arquitectura, urbanismo y conocimiento urbano en Chapultepec.",
    h1: "Estación PARCUR/Colegio de Arquitectos",
    intro: "PARCUR es un espacio innovador dedicado a la educación y reflexión sobre la ciudad. El Colegio de Arquitectos de México ofrece exposiciones sobre diseño urbano y arquitectura contemporánea.",
    tips: [
      "Exposiciones sobre urbanismo y arquitectura",
      "Centro educativo abierto para visitas guiadas",
      "Biblioteca especializada en arquitectura",
      "Salas de proyección y conferencias",
      "Eventos regulares sobre ciudades sostenibles",
      "Vistas panorámicas del Bosque desde las terrazas"
    ]
  },
  {
    slug: "cb-charreria",
    nombre: "Charrería",
    linea: "Cablebús L3",
    lineaId: "3",
    sistema: "Cablebús",
    alcaldia: "Cuauhtémoc",
    tipo_zona: "cultural",
    lat: 19.4200,
    lng: -99.2000,
    pois: [
      "Escuela de Charrería",
      "Campos Ecuestres",
      "Museo de la Charrería",
      "Restaurante Tradicional"
    ],
    transferencias: [
      "Metrobús Línea 21, 24",
      "Cablebús Línea 3"
    ],
    seo_title: "Estación Charrería - Cablebús L3 Bosque de Chapultepec",
    meta_description: "Estación Charrería del Cablebús L3. Centro cultural dedicado a la tradición de la charrería mexicana.",
    h1: "Estación Charrería",
    intro: "La estación Charrería ofrece acceso a la Escuela de Charrería, donde se preserva la tradición ecuestre mexicana. Espacio único para experimentar la cultura vaquera y la destreza ecuestre.",
    tips: [
      "Espectáculos de charrería durante fines de semana",
      "Escuela activa con entrenamientos diarios",
      "Museo con trajes típicos y equipamiento histórico",
      "Restaurante especializado en cocina mexicana tradicional",
      "Tienda de artesanías y equipamiento charrero",
      "Fotografías en los campos con caballos y jinetes"
    ]
  },
  {
    slug: "cb-panteon-dolores",
    nombre: "Panteón de Dolores",
    linea: "Cablebús L3",
    lineaId: "3",
    sistema: "Cablebús",
    alcaldia: "Cuauhtémoc",
    tipo_zona: "cultural",
    lat: 19.4260,
    lng: -99.1930,
    pois: [
      "Panteón Civil de Dolores",
      "Mausoleos Históricos",
      "Capilla de los Monumentos",
      "Museo de Cerámica Funeraria"
    ],
    transferencias: [
      "Metrobús Línea 21, 24",
      "Cablebús Línea 3"
    ],
    seo_title: "Estación Panteón de Dolores - Cablebús L3 CDMX",
    meta_description: "Estación Panteón de Dolores del Cablebús L3. Acceso al cementerio histórico de México más importante.",
    h1: "Estación Panteón de Dolores",
    intro: "El Panteón Civil de Dolores es un espacio histórico y cultural de gran importancia en México. Alberga mausoleos de personajes destacados de la historia nacional y es un sitio de reflexión y memoria.",
    tips: [
      "Panteón con arquitectura funeraria única",
      "Mausoleos de personajes históricos importantes",
      "Capilla de los Monumentos con acervo histórico",
      "Museo especializado en cerámica funeraria",
      "Visitas guiadas disponibles de martes a domingo",
      "Calma y serenidad en la zona más tranquila de Chapultepec"
    ]
  },
  {
    slug: "cb-los-pinos",
    nombre: "Los Pinos/Constituyentes",
    linea: "Cablebús L3",
    lineaId: "3",
    sistema: "Cablebús",
    alcaldia: "Cuauhtémoc",
    tipo_zona: "terminal",
    lat: 19.4310,
    lng: -99.1860,
    pois: [
      "Antigua Residencia Presidencial (Los Pinos)",
      "Centro Cultural Los Pinos",
      "Bosque de Chapultepec",
      "Museo Tamayo",
      "Museo de Arte Moderno",
      "Museo de Historia Natural"
    ],
    transferencias: [
      "Metro Línea 7 (Constituyentes)",
      "Metrobús Línea 21, 24",
      "Cablebús Línea 3 (Terminal)"
    ],
    seo_title: "Estación Terminal Los Pinos - Cablebús L3 Centro Cultural Presidencial",
    meta_description: "Terminal Los Pinos del Cablebús L3. Centro Cultural de la antigua residencia presidencial con transferencia a Metro L7.",
    h1: "Estación Terminal Los Pinos/Constituyentes",
    intro: "Los Pinos, la antigua residencia presidencial, se ha transformado en un centro cultural abierto al público. Terminal de la Línea 3 con acceso directo a Metro Línea 7 y a los principales museos de Chapultepec.",
    tips: [
      "Centro Cultural Los Pinos con entrada gratuita",
      "Tours históricos disponibles de la antigua residencia",
      "Transferencia directa a Metro L7 hacia Tacubaya",
      "Acceso a Bosque de Chapultepec y sus museos",
      "Museo Tamayo especializado en arte contemporáneo",
      "Museo de Arte Moderno con acervo mexicano importante",
      "Museo de Historia Natural con colecciones completas",
      "Restaurantes y cafeterías en la zona",
      "Zona de descanso con vistas panorámicas del Bosque"
    ]
  }
];

export const cablebusSistema = {
  nombre: "Cablebús",
  tipo: "Teleférico urbano",
  operador: "STE - Servicio de Transportes Eléctricos",
  inauguracion: 2021,
  lineas: 3,
  estaciones: 19,
  km_totales: 25.2,
  tarifa: "$7 MXN",
  metodo_pago: "Tarjeta MB (misma del Metrobús/Metro)",
  gratuito: "Adultos mayores 60+ (INAPAM), niños menores de 5, personas con discapacidad",
  color_sistema: "#7B1FA2",
  descripcion_seo: "Cablebús: Sistema de teleféricos urbanos de la CDMX con 3 líneas que conectan zonas de difícil acceso. Línea 2 es la línea de cable más larga del mundo. Tarifas integradas con Metrobús y Metro.",
  descripcion_completa: "El Cablebús es el sistema de teleféricos urbanos de la Ciudad de México, operado por STE (Servicio de Transportes Eléctricos). Con 3 líneas, 19 estaciones y 25.2 km de extensión, conecta zonas de difícil acceso topográfico con el resto de la ciudad. La Línea 2 ostenta el récord Guinness como la línea de cable más larga del mundo. El sistema integra su tarifa con Metrobús y Metro, permitiendo transferencias sin costo adicional con la Tarjeta MB. Inaugurado progresivamente entre 2021 y 2024, el Cablebús es fundamental para la movilidad equitativa en la CDMX.",
  historia: "El proyecto Cablebús comenzó en 2017 como una solución de transporte de bajo costo para zonas de alta pendiente en el norte y oriente de la ciudad. La Línea 1 (Indios Verdes-Cuautepec) fue inaugurada en julio de 2021, seguida de la Línea 2 (Constitución de 1917-Santa Marta) en agosto de 2021, que estableció el récord Guinness por ser la línea de cable más larga del mundo. La Línea 3 (Vasco de Quiroga-Los Pinos), que recorre el emblemático Bosque de Chapultepec, fue inaugurada en septiembre de 2024.",
  capacidad_diaria: "500,000 pasajeros",
  velocidad_maxima: "8 m/s",
  tipo_cabinas: "Cabinas de 10 personas con temperatura controlada",
  seguridad: "Sistema de frenado automático, supervisión GPS continua, certificación ISO 9001"
};