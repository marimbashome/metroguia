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
  }
];
