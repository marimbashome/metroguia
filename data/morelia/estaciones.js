export const estacionesMorelia = [
  {
    id: 1,
    nombre: "Plaza Morelos",
    ubicacion: "Centro histórico de Morelia",
    linea: "BRT Morelia",
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
    }
  },
  {
    id: 2,
    nombre: "Cerro Garnica",
    ubicacion: "Zona elevada norte",
    linea: "BRT Morelia",
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
    }
  },
  {
    id: 3,
    nombre: "Zona Residencial",
    ubicacion: "Norte de Morelia",
    linea: "BRT Morelia",
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
    }
  },
  {
    id: 4,
    nombre: "Santuario Cibernético",
    ubicacion: "Zona de innovación",
    linea: "BRT Morelia",
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
    }
  },
  {
    id: 5,
    nombre: "Parque Enrique Ramírez",
    ubicacion: "Zona verde sur",
    linea: "BRT Morelia",
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
    }
  },
  {
    id: 6,
    nombre: "Acueducto",
    ubicacion: "Patrimonio histórico",
    linea: "BRT Morelia",
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
    }
  }
];
