export const lineasQueretaro = [
  {
    id: "Rojo",
    color: "#EF4444",
    colorNombre: "Rojo",
    inicio: "Terminal 5 de Febrero",
    fin: "Barrio La Cruz",
    total: 7,
    municipios: ["Querétaro"],
    descripcion: "Corredor principal norte-sur del Q-BUS que conecta la Terminal 5 de Febrero con el histórico Barrio La Cruz. Pasa por el Centro Histórico de Querétaro, declarado Patrimonio de la Humanidad, y accede a atracciones culturales como la Catedral Metropolitana y el Jardín Zenea.",
    estaciones_turisticas: ["terminal-5-febrero", "centro-historico-qro", "jardin-zenea-qro", "santa-rosa-viterbo-qro", "barrio-la-cruz-qro"],
    estaciones: ["terminal-5-febrero", "centro-historico-qro", "jardin-zenea-qro", "santa-rosa-viterbo-qro", "uaq-campus-qro", "estadio-corregidora-qro", "barrio-la-cruz-qro"],
    ruta_1_dia: {
      titulo: "Ruta de 1 día: Patrimonio Mundial y Centro Histórico",
      paradas: [
        { estacion: "terminal-5-febrero", actividad: "Terminal 5 de Febrero - Información y desayuno (8:00 AM)" },
        { estacion: "centro-historico-qro", actividad: "Centro Histórico - Casco antiguo Patrimonio UNESCO (9:30 AM)" },
        { estacion: "jardin-zenea-qro", actividad: "Jardín Zenea - Relajación y tiendas (11:00 AM)" },
        { estacion: "santa-rosa-viterbo-qro", actividad: "Templo de Santa Rosa de Viterbo - Arquitectura barroca (12:30 PM)" },
        { estacion: "estadio-corregidora-qro", actividad: "Estadio La Corregidora - Tour deportivo (2:00 PM)" },
        { estacion: "uaq-campus-qro", actividad: "Campus UAQ - Paseo universitario (3:30 PM)" },
        { estacion: "barrio-la-cruz-qro", actividad: "Barrio La Cruz - Cena y artesanías (5:00 PM)" }
      ]
    },
    seo_title: "Corredor Rojo Q-BUS Querétaro — Centro Histórico Patrimonio UNESCO | MetroGuia",
    meta_description: "Corredor Rojo del Q-BUS. De Terminal 5 de Febrero a Barrio La Cruz pasando por el Centro Histórico Patrimonio de la Humanidad.",
    h1: "Corredor Rojo — Q-BUS Querétaro"
  },
  {
    id: "Azul",
    color: "#3B82F6",
    colorNombre: "Azul",
    inicio: "Alameda",
    fin: "Campus Aeroespacial",
    total: 6,
    municipios: ["Querétaro"],
    descripcion: "Corredor este-oeste que conecta la Alameda con el Campus Aeroespacial, pasando por zonas comerciales como Plaza Dorada y servicios de salud en el Hospital General. Acceso a equipamiento educativo y tecnológico de clase mundial.",
    estaciones_turisticas: ["alameda-qro", "plaza-dorada-qro", "hospital-general-qro", "campus-aeroespacial-qro"],
    estaciones: ["alameda-qro", "cimatario-qro", "plaza-dorada-qro", "hospital-general-qro", "constituyentes-qro", "campus-aeroespacial-qro"],
    ruta_1_dia: {
      titulo: "Ruta de 1 día: Comercio, Salud y Tecnología Aeroespacial",
      paradas: [
        { estacion: "alameda-qro", actividad: "Alameda - Parque central y desayuno (8:30 AM)" },
        { estacion: "cimatario-qro", actividad: "Cimatario - Montaña y vista panorámica (10:00 AM)" },
        { estacion: "plaza-dorada-qro", actividad: "Plaza Dorada - Centro comercial (12:00 PM)" },
        { estacion: "hospital-general-qro", actividad: "Hospital General - Servicios de salud (1:30 PM)" },
        { estacion: "constituyentes-qro", actividad: "Constituyentes - Zona residencial (3:00 PM)" },
        { estacion: "campus-aeroespacial-qro", actividad: "Campus Aeroespacial - Tecnología e innovación (4:30 PM)" }
      ]
    },
    seo_title: "Corredor Azul Q-BUS Querétaro — Comercio y Tecnología | MetroGuia",
    meta_description: "Corredor Azul del Q-BUS. De Alameda a Campus Aeroespacial pasando por zonas comerciales.",
    h1: "Corredor Azul — Q-BUS Querétaro"
  },
  {
    id: "Verde",
    color: "#10B981",
    colorNombre: "Verde Esmeralda",
    inicio: "TEC Monterrey",
    fin: "Acueducto",
    total: 5,
    municipios: ["Querétaro"],
    descripcion: "Corredor norte que conecta el TEC Monterrey Campus Querétaro con el emblemático Acueducto. Pasa por Juriquilla y zonas residenciales premium, además del Parque Industrial. Ideal para estudiantes, profesionales y turismo de patrimonio.",
    estaciones_turisticas: ["tec-monterrey-qro", "juriquilla-qro", "acueducto-qro"],
    estaciones: ["tec-monterrey-qro", "juriquilla-qro", "parque-industrial-qro", "constituyentes-qro", "acueducto-qro"],
    ruta_1_dia: {
      titulo: "Ruta de 1 día: Educación, Industria y Patrimonio Arquitectónico",
      paradas: [
        { estacion: "tec-monterrey-qro", actividad: "TEC Monterrey - Campus y educación (9:00 AM)" },
        { estacion: "juriquilla-qro", actividad: "Juriquilla - Zona residencial de lujo (10:30 AM)" },
        { estacion: "parque-industrial-qro", actividad: "Parque Industrial - Manufactura y negocios (12:00 PM)" },
        { estacion: "constituyentes-qro", actividad: "Constituyentes - Almuerzo y compras (1:30 PM)" },
        { estacion: "acueducto-qro", actividad: "Acueducto - Patrimonio y fotografía (3:30 PM)" }
      ]
    },
    seo_title: "Corredor Verde Q-BUS Querétaro — Educación y Acueducto | MetroGuia",
    meta_description: "Corredor Verde del Q-BUS. De TEC Monterrey a Acueducto pasando por Juriquilla.",
    h1: "Corredor Verde — Q-BUS Querétaro"
  },
  {
    id: "L154",
    color: "#EC4899",
    colorNombre: "Rosa Juriquilla",
    inicio: "Centro Histórico",
    fin: "Juriquilla Ampliación",
    total: 9,
    municipios: ["Querétaro"],
    descripcion: "Línea L154 conecta el Centro Histórico con la zona de expansión residencial de Juriquilla. Pasa por Constituyentes, Cimatario y zonas residenciales premium. Inaugurada en marzo 2026.",
    estaciones_turisticas: ["centro-historico-qro", "juriquilla-ampliacion-qro"],
    estaciones: ["centro-historico-qro", "constituyentes-l154", "cimatario-l154", "santa-barbara-qro", "juriquilla-qro", "juriquilla-premium-qro", "campus-bicentenario-qro", "carretera-tequisquiapan", "juriquilla-ampliacion-qro"],
    ruta_1_dia: {
      titulo: "Ruta de 1 día: Centro Histórico a Juriquilla Residencial",
      paradas: [
        { estacion: "centro-historico-qro", actividad: "Centro Histórico - Patrimonio UNESCO (8:00 AM)" },
        { estacion: "constituyentes-l154", actividad: "Avenida Constituyentes - Comercio y servicios (9:15 AM)" },
        { estacion: "cimatario-l154", actividad: "Cimatario - Montaña y vista panorámica (10:30 AM)" },
        { estacion: "santa-barbara-qro", actividad: "Santa Bárbara - Zona residencial (11:45 AM)" },
        { estacion: "juriquilla-qro", actividad: "Juriquilla - Comercio y gastronomía (1:00 PM)" },
        { estacion: "juriquilla-premium-qro", actividad: "Juriquilla Premium - Residencias de lujo (2:15 PM)" },
        { estacion: "campus-bicentenario-qro", actividad: "Campus Bicentenario - Educación (3:30 PM)" }
      ]
    },
    seo_title: "Línea L154 Q-BUS Querétaro — Centro Histórico a Juriquilla | MetroGuia",
    meta_description: "Línea L154 del Q-BUS. Conecta Centro Histórico con Juriquilla Ampliación. Nueva línea inaugurada marzo 2026.",
    h1: "Línea L154 Rosa Juriquilla — Q-BUS Querétaro"
  },
  {
    id: "L119",
    color: "#F97316",
    colorNombre: "Naranja Industrial",
    inicio: "Terminal 5 de Febrero",
    fin: "Parque Industrial Querétaro",
    total: 8,
    municipios: ["Querétaro"],
    descripcion: "Línea L119 conecta la Terminal 5 de Febrero con el Parque Industrial de Querétaro a través del Periférico norte. Acceso directo a zona de manufactura, distribución y empresas. Inaugurada en marzo 2026.",
    estaciones_turisticas: ["terminal-5-febrero", "parque-industrial-qro"],
    estaciones: ["terminal-5-febrero", "periferico-norte-qro", "santa-rosa-industria-qro", "el-marques-acceso-qro", "parque-logistico-qro", "distribucion-qro", "fabrica-autos-qro", "parque-industrial-qro"],
    ruta_1_dia: {
      titulo: "Ruta de 1 día: Manufactura y Zona Industrial",
      paradas: [
        { estacion: "terminal-5-febrero", actividad: "Terminal 5 de Febrero - Punto de partida (7:00 AM)" },
        { estacion: "periferico-norte-qro", actividad: "Periférico norte - Comercio regional (8:15 AM)" },
        { estacion: "santa-rosa-industria-qro", actividad: "Santa Rosa - Zona industrial (9:30 AM)" },
        { estacion: "el-marques-acceso-qro", actividad: "El Marqués - Acceso a manufactura (10:45 AM)" },
        { estacion: "parque-logistico-qro", actividad: "Parque Logístico - Distribución (12:00 PM)" },
        { estacion: "fabrica-autos-qro", actividad: "Fábrica Autos - Sector automotriz (1:30 PM)" },
        { estacion: "parque-industrial-qro", actividad: "Parque Industrial - Negocios y empresas (3:00 PM)" }
      ]
    },
    seo_title: "Línea L119 Q-BUS Querétaro — Terminal a Parque Industrial | MetroGuia",
    meta_description: "Línea L119 del Q-BUS. Conecta Terminal 5 de Febrero con Parque Industrial. Nueva línea inaugurada marzo 2026.",
    h1: "Línea L119 Naranja Industrial — Q-BUS Querétaro"
  },
  {
    id: "Eléctrico",
    color: "#06B6D4",
    colorNombre: "Cián Eléctrico",
    inicio: "Plaza Independencia",
    fin: "Templo de Santa Clara",
    total: 19,
    municipios: ["Querétaro"],
    descripcion: "Sistema de transporte eléctrico (Eco-Tram) dedicado al Centro Histórico de Querétaro. Red de 19 paradas conectando principales atracciones arqueológicas, coloniales y culturales. Vehículos de cero emisiones para preservación del patrimonio UNESCO. Inaugurado marzo 2026.",
    estaciones_turisticas: ["plaza-independencia-qro", "jardin-zenea-qro", "templo-santa-rosa", "plazuela-corregidora-qro", "templo-santa-clara-qro"],
    estaciones: ["plaza-independencia-qro", "palacio-gobierno-qro", "museo-arte-qro", "jardin-zenea-qro", "casa-corregidora-qro", "plazuela-corregidora-qro", "templo-santa-rosa", "convento-san-francisco-qro", "mercado-escobedo-qro", "iglesia-santiago-qro", "acueducto-centro-qro", "fuerte-qro", "barrio-artista-qro", "centro-convenciones-qro", "plaza-grande-centro-qro", "biblioteca-publica-qro", "museo-historia-natural-qro", "teatro-republica-qro", "templo-santa-clara-qro"],
    ruta_1_dia: {
      titulo: "Ruta de 1 día: Patrimonio Colonial en Eco-Tram Eléctrico",
      paradas: [
        { estacion: "plaza-independencia-qro", actividad: "Plaza Independencia - Inicio y desayuno (8:00 AM)" },
        { estacion: "palacio-gobierno-qro", actividad: "Palacio de Gobierno - Sede colonial (9:00 AM)" },
        { estacion: "jardin-zenea-qro", actividad: "Jardín Zenea - Relajación (9:45 AM)" },
        { estacion: "casa-corregidora-qro", actividad: "Casa de la Corregidora - Historia independentista (10:30 AM)" },
        { estacion: "templo-santa-rosa", actividad: "Templo Santa Rosa de Viterbo - Arquitectura barroca (11:30 AM)" },
        { estacion: "convento-san-francisco-qro", actividad: "Convento San Francisco - Patrimonio religioso (12:30 PM)" },
        { estacion: "mercado-escobedo-qro", actividad: "Mercado Escobedo - Comida local (1:30 PM)" },
        { estacion: "barrio-artista-qro", actividad: "Barrio Artista - Galerías y murales (3:00 PM)" },
        { estacion: "templo-santa-clara-qro", actividad: "Templo Santa Clara - Final y compras de artesanías (5:00 PM)" }
      ]
    },
    seo_title: "Eco-Tram Eléctrico Querétaro — Centro Histórico Patrimonio UNESCO | MetroGuia",
    meta_description: "Eco-Tram Eléctrico de Querétaro. Sistema de transporte cero emisiones conectando 19 paradas del Centro Histórico.",
    h1: "Eco-Tram Eléctrico — Centro Histórico Querétaro"
  }
];
