export const estacionesVillahermosa = [
  {
    id: 1,
    nombre: "Terminal Primera Clase",
    ubicacion: "Central de transporte",
    linea: "BRT Villahermosa",
    descripcion_turistica: "Terminal de autobuses de primera clase en Villahermosa, punto principal de llegada y salida hacia ciudades de Tabasco y conexiones nacionales. Nodo de transporte moderno con servicios completos.",
    lugares_cercanos: [
      {
        nombre: "Terminal Primera Clase",
        tipo: "Transporte",
        distancia: "0.1 km",
        descripcion: "Central de autobuses con conexiones a destinos principales"
      },
      {
        nombre: "Servicios de Terminal",
        tipo: "Comercio",
        distancia: "0.15 km",
        descripcion: "Tiendas, restaurantes y servicios en la terminal"
      },
      {
        nombre: "Información Turística",
        tipo: "Servicios",
        distancia: "0.2 km",
        descripcion: "Centro de información para viajeros"
      }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Servicios disponibles 24 horas"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Terminal moderna con accesibilidad completa"
    }
  },
  {
    id: 2,
    nombre: "Centro Histórico",
    ubicacion: "Corazón de Villahermosa",
    linea: "BRT Villahermosa",
    descripcion_turistica: "Centro cultural y administrativo de Villahermosa, zona de patrimonio con plaza central, museos y galerías. Corazón de la capital tabasqueña con mezcla de historia y modernidad.",
    lugares_cercanos: [
      {
        nombre: "Parque La Venta",
        tipo: "Museo Arqueológico",
        distancia: "0.3 km",
        descripcion: "Parque-museo con réplicas de monumentos olmecas en aire libre"
      },
      {
        nombre: "Museo de Antropología",
        tipo: "Museo",
        distancia: "0.4 km",
        descripcion: "Colección de artefactos prehispánicos e historia tabasqueña"
      },
      {
        nombre: "Teatro de la Ciudad",
        tipo: "Cultura",
        distancia: "0.2 km",
        descripcion: "Presentaciones teatrales y artísticas"
      },
      {
        nombre: "Catedral Metropolitana",
        tipo: "Templo",
        distancia: "0.15 km",
        descripcion: "Iglesia principal de Villahermosa"
      }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Museos abiertos 9:00-18:00, teatros con programación variable"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: false,
      rampas: true,
      banos_accesibles: true,
      notas: "Centro con rampas de acceso a principales sitios"
    }
  },
  {
    id: 3,
    nombre: "Agua Blanca",
    ubicacion: "Zona residencial",
    linea: "BRT Villahermosa",
    descripcion_turistica: "Acceso a zona residencial de Agua Blanca, área de desarrollo urbano contemporáneo con servicios comerciales. Barrio con tiendas, restaurantes y servicios para residentes y visitantes.",
    lugares_cercanos: [
      {
        nombre: "Centro Comercial Agua Blanca",
        tipo: "Comercio",
        distancia: "0.3 km",
        descripcion: "Tiendas y servicios modernos de la zona residencial"
      },
      {
        nombre: "Parque Urbano",
        tipo: "Parque",
        distancia: "0.2 km",
        descripcion: "Área verde con equipamiento deportivo y recreativo"
      },
      {
        nombre: "Restaurantes y Cafés",
        tipo: "Gastronomía",
        distancia: "0.25 km",
        descripcion: "Ofertas de comida diversa para toda la familia"
      }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Servicios comerciales abiertos hasta 21:00"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Zona moderna con infraestructura accesible"
    }
  },
  {
    id: 4,
    nombre: "Villahermosa 2000",
    ubicacion: "Complejo comercial moderno",
    linea: "BRT Villahermosa",
    descripcion_turistica: "Acceso a centro comercial y de servicios Villahermosa 2000, complejo moderno con tiendas, oficinas y servicios. Punto de encuentro comercial y de entretenimiento en la ciudad.",
    lugares_cercanos: [
      {
        nombre: "Centro Comercial Villahermosa 2000",
        tipo: "Centro Comercial",
        distancia: "0.2 km",
        descripcion: "Tiendas departamentales y servicios comerciales"
      },
      {
        nombre: "Cines",
        tipo: "Entretenimiento",
        distancia: "0.15 km",
        descripcion: "Salas cinematográficas con estrenos nacionales e internacionales"
      },
      {
        nombre: "Restaurantes Diversos",
        tipo: "Gastronomía",
        distancia: "0.2 km",
        descripcion: "Variedad de opciones gastronómicas"
      }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Centro abierto hasta 22:00 en promedio"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Centro moderno con accesibilidad completa"
    }
  },
  {
    id: 5,
    nombre: "Yumká",
    ubicacion: "Parque ecológico",
    linea: "BRT Villahermosa",
    descripcion_turistica: "Acceso a Yumká, parque de flora y fauna tabasqueña con ecosistemas naturales. Centro de conservación y educación ambiental que preserva la biodiversidad de la región selvatica.",
    lugares_cercanos: [
      {
        nombre: "Parque Yumká",
        tipo: "Parque Ecológico",
        distancia: "0.3 km",
        descripcion: "Reserva natural con flora y fauna de Tabasco"
      },
      {
        nombre: "Senderos Ecológicos",
        tipo: "Ruta Natural",
        distancia: "0.5 km",
        descripcion: "Caminos para observación de wildlife y naturaleza"
      },
      {
        nombre: "Centro de Visitantes",
        tipo: "Museo",
        distancia: "0.2 km",
        descripcion: "Información sobre ecosistemas y conservación"
      }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Parque abierto 9:00-17:00 diariamente"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: false,
      rampas: true,
      banos_accesibles: true,
      notas: "Senderos con rampas principales, baños en centro de visitantes"
    }
  },
  {
    id: 6,
    nombre: "Puxcatán",
    ubicacion: "Zona de haciendas históricas",
    linea: "BRT Villahermosa",
    descripcion_turistica: "Acceso a zona de Puxcatán, área histórica con haciendas y patrimonio agrícola tabasqueño. Centro de herencia cultural relacionada con la producción de cacao y agricultura colonial.",
    lugares_cercanos: [
      {
        nombre: "Haciendas Coloniales",
        tipo: "Patrimonio",
        distancia: "0.5 km",
        descripcion: "Construcciones históricas de época colonial y porfiriana"
      },
      {
        nombre: "Plantaciones de Cacao",
        tipo: "Agricultura",
        distancia: "0.8 km",
        descripcion: "Cultivos tradicionales de cacao tabasqueño"
      },
      {
        nombre: "Senderos Rurales",
        tipo: "Ruta Natural",
        distancia: "0.6 km",
        descripcion: "Caminos por paisaje agrícola histórico"
      }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Visitas disponibles durante horas diurnas"
    },
    accesibilidad: {
      silla_ruedas: false,
      ascensores: false,
      rampas: false,
      banos_accesibles: false,
      notas: "Zona rural con terreno natural, acceso limitado"
    }
  },
  {
    id: 7,
    nombre: "Paseo Tabasco",
    ubicacion: "Avenida principal",
    linea: "BRT Villahermosa",
    descripcion_turistica: "Acceso al Paseo Tabasco, avenida principal de Villahermosa con tiendas, restaurantes y vida comercial de la ciudad. Eje comercial y turístico de Villahermosa con servicios diversos.",
    lugares_cercanos: [
      {
        nombre: "Tiendas Comerciales",
        tipo: "Comercio",
        distancia: "0.3 km",
        descripcion: "Variedad de tiendas a lo largo de la avenida"
      },
      {
        nombre: "Restaurantes y Bares",
        tipo: "Gastronomía",
        distancia: "0.25 km",
        descripcion: "Opciones gastronómicas diversas y tradicionales"
      },
      {
        nombre: "Galerías y Museos",
        tipo: "Cultura",
        distancia: "0.4 km",
        descripcion: "Espacios de arte y cultura en la avenida"
      }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Comercios operativos hasta 21:00 en promedio"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: false,
      rampas: true,
      banos_accesibles: true,
      notas: "Avenida principal con aceras amplias y accesibilidad"
    }
  },
  {
    id: 8,
    nombre: "Museo de Antropología",
    ubicacion: "Centro cultural principal",
    linea: "BRT Villahermosa",
    descripcion_turistica: "Acceso al Museo de Antropología e Historia de Tabasco, principal institución cultural de la entidad. Colecciones de arte prehispánico olmeca, maya y exposiciones de historia tabasqueña.",
    lugares_cercanos: [
      {
        nombre: "Museo Regional",
        tipo: "Museo",
        distancia: "0.2 km",
        descripcion: "Colecciones de arqueología e historia de Tabasco"
      },
      {
        nombre: "Auditorios Culturales",
        tipo: "Cultura",
        distancia: "0.15 km",
        descripcion: "Salas para conferencias y presentaciones"
      },
      {
        nombre: "Tienda del Museo",
        tipo: "Comercio",
        distancia: "0.1 km",
        descripcion: "Venta de libros y reproducciones de arte"
      }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Museo abierto 9:00-18:00 cerrado lunes"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Museo con accesibilidad completa y ascensores"
    }
  },
  {
    id: 9,
    nombre: "Tren Maya Palenque",
    ubicacion: "Conexión Tren Maya",
    linea: "BRT Villahermosa",
    descripcion_turistica: "Estación de conexión con Tren Maya hacia Palenque. Acceso a transporte regional que conecta Villahermosa con la zona arqueológica maya de Palenque y destinos de la Riviera Maya.",
    lugares_cercanos: [
      {
        nombre: "Estación Tren Maya",
        tipo: "Transporte",
        distancia: "0.2 km",
        descripcion: "Terminal del Tren Maya con conexiones regionales"
      },
      {
        nombre: "Centro de Información",
        tipo: "Servicios",
        distancia: "0.15 km",
        descripcion: "Información sobre rutas y destinos del Tren Maya"
      },
      {
        nombre: "Comercios y Restaurantes",
        tipo: "Servicios",
        distancia: "0.25 km",
        descripcion: "Tiendas y servicios de alimentación en terminal"
      }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Tren Maya opera con horarios específicos, consultar en terminal"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Terminal moderna con accesibilidad completa"
    }
  },
  {
    id: 10,
    nombre: "Tren Maya Conexión Riviera",
    ubicacion: "Terminal regional",
    linea: "BRT Villahermosa",
    descripcion_turistica: "Estación de conexión con Tren Maya hacia la Riviera Maya. Puerta de acceso a destinos turísticos principales del Caribe mexicano incluyendo Playa del Carmen, Cozumel y zona hotelera.",
    lugares_cercanos: [
      {
        nombre: "Terminal Tren Maya Riviera",
        tipo: "Transporte",
        distancia: "0.2 km",
        descripcion: "Estación con conexiones a destinos caribeños"
      },
      {
        nombre: "Centro Turístico",
        tipo: "Información",
        distancia: "0.15 km",
        descripcion: "Información sobre destinos de la Riviera Maya"
      },
      {
        nombre: "Servicios de Terminal",
        tipo: "Comercio",
        distancia: "0.2 km",
        descripcion: "Tiendas y restaurantes para viajeros"
      }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Servicios disponibles 24 horas, Tren Maya con horarios específicos"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Terminal de última generación con accesibilidad total"
    }
  }
];
