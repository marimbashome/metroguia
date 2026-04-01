const slugify = (text) => {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w-]/g, '')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

export const estacionesMorelia = [
  {
    id: 1,
    nombre: "Plaza Morelos",
    slug: "morelia-plaza-morelos",
    ubicacion: "Centro histórico de Morelia",
    municipio: "Centro histórico de Morelia",
    linea: "BRT Morelia",
    tipo_zona: "urbano",
    descripcion_turistica: "Corazón político y cultural de Morelia, centro administrativo de Michoacán. Plaza principal rodeada de arquitectura colonial de piedra rosada, punto de partida para explorar la UNESCO Patrimonio de la Humanidad y la catedral metropolitana.",
    lugares_cercanos: [
      {
        nombre: "Catedral Metropolitana",
        tipo: "Monumento Histórico",
        distancia: "0.1 km",
        descripcion: "Catedral de piedra rosada del siglo XVII, máximo símbolo arquitectónico de Morelia"
      },
      {
        nombre: "Palacio de Gobierno",
        tipo: "Edificio Histórico",
        distancia: "0.15 km",
        descripcion: "Sede del gobierno estatal con murales históricos y valor arquitectónico"
      },
      {
        nombre: "Museo Regional Michoacano",
        tipo: "Museo",
        distancia: "0.2 km",
        descripcion: "Colección de arte colonial y prehispánico de Michoacán"
      },
      {
        nombre: "Colegio de San Nicolás",
        tipo: "Monumento",
        distancia: "0.3 km",
        descripcion: "Institución educativa colonial, uno de los edificios históricos más antiguos"
      }
    ],
    pois: [
      {
        nombre: "Catedral Metropolitana",
        tipo: "Monumento Histórico",
        distancia: "0.1 km"
      },
      {
        nombre: "Palacio de Gobierno",
        tipo: "Edificio Histórico",
        distancia: "0.15 km"
      },
      {
        nombre: "Museo Regional Michoacano",
        tipo: "Museo",
        distancia: "0.2 km"
      }
    ],
    transferencias: [],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Centro comercial y administrativo con servicios disponibles durante horas operativas"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Estación totalmente accesible con rampas y ascensores"
    },
    seo_title: "Estación Plaza Morelos — BRT Morelia | MetroGuia",
    meta_description: "Estación Plaza Morelos de BRT Morelia. Corazón político y cultural de Morelia.",
    h1: "Estación Plaza Morelos — BRT Morelia",
    intro: "Corazón político y cultural de Morelia, centro administrativo de Michoacán. Plaza principal rodeada de arquitectura colonial de piedra rosada, punto de partida para explorar la UNESCO Patrimonio de la Humanidad y la catedral metropolitana.",
    tips: [
      "Visite la Catedral Metropolitana para apreciar arquitectura colonial",
      "Explore el Palacio de Gobierno y sus murales históricos",
      "Camine alrededor de Plaza Morelos para apreciar la arquitectura"
    ],
    mejor_horario: "Temprano para evitar horas pico",
    mundial_relevancia: "Sin relevancia directa al Mundial 2026"
  },
  {
    id: 2,
    nombre: "Cerro Garnica",
    slug: "morelia-cerro-garnica",
    ubicacion: "Zona elevada norte",
    municipio: "Zona elevada norte",
    linea: "BRT Morelia",
    tipo_zona: "urbano",
    descripcion_turistica: "Mirador estratégico con vistas panorámicas de Morelia, la catedral y el valle de Guayangareo. Punto de observación natural ideal para fotografía y apreciación del entorno urbano y natural de la capital michoacana.",
    lugares_cercanos: [
      {
        nombre: "Mirador Cerro Garnica",
        tipo: "Mirador",
        distancia: "0.3 km",
        descripcion: "Punto elevado con vistas 360 grados de Morelia"
      },
      {
        nombre: "Convento de las Rosas",
        tipo: "Monumento",
        distancia: "0.8 km",
        descripcion: "Convento colonial con jardines históricos"
      },
      {
        nombre: "Parque Natural",
        tipo: "Área Verde",
        distancia: "0.5 km",
        descripcion: "Vegetación natural de la región con senderos para caminata"
      }
    ],
    pois: [
      {
        nombre: "Mirador Cerro Garnica",
        tipo: "Mirador",
        distancia: "0.3 km"
      },
      {
        nombre: "Convento de las Rosas",
        tipo: "Monumento",
        distancia: "0.8 km"
      },
      {
        nombre: "Parque Natural",
        tipo: "Área Verde",
        distancia: "0.5 km"
      }
    ],
    transferencias: [],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Mirador accesible durante horas diurnas, recomendado al atardecer"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: false,
      rampas: true,
      banos_accesibles: false,
      notas: "Acceso mediante rampas, pero requiere caminata moderada"
    },
    seo_title: "Estación Cerro Garnica — BRT Morelia | MetroGuia",
    meta_description: "Estación Cerro Garnica de BRT Morelia. Mirador estratégico con vistas panorámicas.",
    h1: "Estación Cerro Garnica — BRT Morelia",
    intro: "Mirador estratégico con vistas panorámicas de Morelia, la catedral y el valle de Guayangareo. Punto de observación natural ideal para fotografía y apreciación del entorno urbano y natural de la capital michoacana.",
    tips: [
      "Llegue al atardecer para fotografías con iluminación dorada",
      "Lleve binoculares para apreciar detalles de la catedral desde arriba",
      "Use zapatos de senderismo para caminar senderos naturales"
    ],
    mejor_horario: "Temprano para evitar horas pico",
    mundial_relevancia: "Sin relevancia directa al Mundial 2026"
  },
  {
    id: 3,
    nombre: "Zona Residencial",
    slug: "morelia-zona-residencial",
    ubicacion: "Norte de Morelia",
    municipio: "Norte de Morelia",
    linea: "BRT Morelia",
    tipo_zona: "urbano",
    descripcion_turistica: "Conexión a zonas residenciales modernas de Morelia con acceso a tiendas, servicios y áreas recreativas. Punto de integración entre transporte de masa y vida cotidiana contemporánea de la ciudad.",
    lugares_cercanos: [
      {
        nombre: "Centro Comercial",
        tipo: "Comercio",
        distancia: "0.4 km",
        descripcion: "Tiendas y servicios modernos para compras y entretenimiento"
      },
      {
        nombre: "Parque Infantil",
        tipo: "Área Recreativa",
        distancia: "0.2 km",
        descripcion: "Espacios verdes y juegos para familias"
      },
      {
        nombre: "Clínica de Servicios",
        tipo: "Salud",
        distancia: "0.3 km",
        descripcion: "Centro médico con servicios de urgencia y consulta"
      }
    ],
    pois: [
      {
        nombre: "Centro Comercial",
        tipo: "Comercio",
        distancia: "0.4 km"
      },
      {
        nombre: "Parque Infantil",
        tipo: "Área Recreativa",
        distancia: "0.2 km"
      },
      {
        nombre: "Clínica de Servicios",
        tipo: "Salud",
        distancia: "0.3 km"
      }
    ],
    transferencias: [],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Servicios comerciales abiertos hasta 21:00 en promedio"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Infraestructura moderna con estándares completos de accesibilidad"
    },
    seo_title: "Estación Zona Residencial — BRT Morelia | MetroGuia",
    meta_description: "Estación Zona Residencial de BRT Morelia. Conexión a zonas residenciales modernas.",
    h1: "Estación Zona Residencial — BRT Morelia",
    intro: "Conexión a zonas residenciales modernas de Morelia con acceso a tiendas, servicios y áreas recreativas. Punto de integración entre transporte de masa y vida cotidiana contemporánea de la ciudad.",
    tips: [
      "Compre en centro comercial con variedad de tiendas modernas",
      "Disfrute con familia en parque infantil",
      "Acceda fácilmente a servicios médicos en clínica cercana"
    ],
    mejor_horario: "Temprano para evitar horas pico",
    mundial_relevancia: "Sin relevancia directa al Mundial 2026"
  },
  {
    id: 4,
    nombre: "Santuario Cibernético",
    slug: "morelia-santuario-cibernetico",
    ubicacion: "Zona de innovación",
    municipio: "Zona de innovación",
    linea: "BRT Morelia",
    tipo_zona: "urbano",
    descripcion_turistica: "Acceso a centro de innovación tecnológica y cibernética en Morelia. Centro de desarrollo económico con oficinas, espacios de trabajo colaborativo e instituciones dedicadas a tecnología e innovación digital.",
    lugares_cercanos: [
      {
        nombre: "Santuario Cibernético",
        tipo: "Centro Tecnológico",
        distancia: "0.2 km",
        descripcion: "Hub de innovación con startups y centros de investigación"
      },
      {
        nombre: "Espacios de Coworking",
        tipo: "Oficinas",
        distancia: "0.3 km",
        descripcion: "Espacios compartidos para emprendedores y profesionales"
      },
      {
        nombre: "Cafetería Tecnológica",
        tipo: "Gastronomía",
        distancia: "0.15 km",
        descripcion: "Café moderno para reuniones y trabajo colaborativo"
      }
    ],
    pois: [
      {
        nombre: "Santuario Cibernético",
        tipo: "Centro Tecnológico",
        distancia: "0.2 km"
      },
      {
        nombre: "Espacios de Coworking",
        tipo: "Oficinas",
        distancia: "0.3 km"
      },
      {
        nombre: "Cafetería Tecnológica",
        tipo: "Gastronomía",
        distancia: "0.15 km"
      }
    ],
    transferencias: [],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Centro abierto con horarios extendidos para profesionales"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Instalación moderna con accesibilidad total"
    },
    seo_title: "Estación Santuario Cibernético — BRT Morelia | MetroGuia",
    meta_description: "Estación Santuario Cibernético de BRT Morelia. Centro de innovación tecnológica.",
    h1: "Estación Santuario Cibernético — BRT Morelia",
    intro: "Acceso a centro de innovación tecnológica y cibernética en Morelia. Centro de desarrollo económico con oficinas, espacios de trabajo colaborativo e instituciones dedicadas a tecnología e innovación digital.",
    tips: [
      "Visite startups y centros de investigación en el Santuario",
      "Trabaje en espacios de coworking con infraestructura moderna",
      "Reúnase en cafetería tecnológica con ambiente profesional"
    ],
    mejor_horario: "Temprano para evitar horas pico",
    mundial_relevancia: "Sin relevancia directa al Mundial 2026"
  },
  {
    id: 5,
    nombre: "Parque Enrique Ramírez",
    slug: "morelia-parque-enrique-ramirez",
    ubicacion: "Zona verde sur",
    municipio: "Zona verde sur",
    linea: "BRT Morelia",
    tipo_zona: "urbano",
    descripcion_turistica: "Acceso a importante parque urbano de Morelia con áreas verdes, áreas recreativas y equipamiento público. Espacio de esparcimiento y conexión con la naturaleza en el contexto urbano moreliense.",
    lugares_cercanos: [
      {
        nombre: "Parque Enrique Ramírez",
        tipo: "Parque Público",
        distancia: "0.2 km",
        descripcion: "Área verde con juegos infantiles y zonas de descanso"
      },
      {
        nombre: "Pistas de Patinaje",
        tipo: "Recreación",
        distancia: "0.3 km",
        descripcion: "Instalaciones para patinaje y deportes urbanos"
      },
      {
        nombre: "Servicios de Alimentación",
        tipo: "Gastronomía",
        distancia: "0.25 km",
        descripcion: "Puestos de comida y cafeterías dentro del parque"
      }
    ],
    pois: [
      {
        nombre: "Parque Enrique Ramírez",
        tipo: "Parque Público",
        distancia: "0.2 km"
      },
      {
        nombre: "Pistas de Patinaje",
        tipo: "Recreación",
        distancia: "0.3 km"
      },
      {
        nombre: "Servicios de Alimentación",
        tipo: "Gastronomía",
        distancia: "0.25 km"
      }
    ],
    transferencias: [],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Parque con iluminación nocturna, seguridad disponible"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: false,
      rampas: true,
      banos_accesibles: true,
      notas: "Senderos y áreas principales accesibles, baños públicos disponibles"
    },
    seo_title: "Estación Parque Enrique Ramírez — BRT Morelia | MetroGuia",
    meta_description: "Estación Parque Enrique Ramírez de BRT Morelia. Acceso a importante parque urbano.",
    h1: "Estación Parque Enrique Ramírez — BRT Morelia",
    intro: "Acceso a importante parque urbano de Morelia con áreas verdes, áreas recreativas y equipamiento público. Espacio de esparcimiento y conexión con la naturaleza en el contexto urbano moreliense.",
    tips: [
      "Lleve patines para disfrutar pistas de patinaje del parque",
      "Disfrute áreas verdes y zonas de descanso en familia",
      "Pruebe opciones gastronómicas en puestos dentro del parque"
    ],
    mejor_horario: "Temprano para evitar horas pico",
    mundial_relevancia: "Sin relevancia directa al Mundial 2026"
  },
  {
    id: 6,
    nombre: "Acueducto",
    slug: "morelia-acueducto",
    ubicacion: "Patrimonio histórico",
    municipio: "Patrimonio histórico",
    linea: "BRT Morelia",
    tipo_zona: "urbano",
    descripcion_turistica: "Acceso al icónico Acueducto de Morelia, obra maestra de ingeniería hidráulica colonial. Estructura de 253 arcos de piedra rosada que representa uno de los símbolos arquitectónicos más emblemáticos de Morelia.",
    lugares_cercanos: [
      {
        nombre: "Acueducto de Morelia",
        tipo: "Monumento",
        distancia: "0.3 km",
        descripcion: "Obra colonial del siglo XVIII con 253 arcos de piedra"
      },
      {
        nombre: "Calzada del Acueducto",
        tipo: "Paseo Histórico",
        distancia: "0.2 km",
        descripcion: "Avenida arbolada bajo los arcos del acueducto"
      },
      {
        nombre: "Mercado de Artesanías",
        tipo: "Comercio",
        distancia: "0.4 km",
        descripcion: "Venta de artesanías y productos locales michoacanos"
      }
    ],
    pois: [
      {
        nombre: "Acueducto de Morelia",
        tipo: "Monumento",
        distancia: "0.3 km"
      },
      {
        nombre: "Calzada del Acueducto",
        tipo: "Paseo Histórico",
        distancia: "0.2 km"
      },
      {
        nombre: "Mercado de Artesanías",
        tipo: "Comercio",
        distancia: "0.4 km"
      }
    ],
    transferencias: [],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Paseo disponible durante horas diurnas y nocturnas"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: false,
      rampas: true,
      banos_accesibles: false,
      notas: "Calzada accesible parcialmente, adoquines históricos"
    },
    seo_title: "Estación Acueducto — BRT Morelia | MetroGuia",
    meta_description: "Estación Acueducto de BRT Morelia. Acceso al icónico Acueducto de Morelia.",
    h1: "Estación Acueducto — BRT Morelia",
    intro: "Acceso al icónico Acueducto de Morelia, obra maestra de ingeniería hidráulica colonial. Estructura de 253 arcos de piedra rosada que representa uno de los símbolos arquitectónicos más emblemáticos de Morelia.",
    tips: [
      "Fotografíe el acueducto desde diferentes ángulos y alturas",
      "Camine la Calzada del Acueducto bajo los arcos históricos",
      "Compre artesanías locales en mercado cercano"
    ],
    mejor_horario: "Temprano para evitar horas pico",
    mundial_relevancia: "Sin relevancia directa al Mundial 2026"
  }
];
