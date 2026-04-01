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

export const estacionesVillahermosa = [
  {
    id: 1,
    nombre: "Terminal Primera Clase",
    slug: "villahermosa-terminal-primera-clase",
    ubicacion: "Central de transporte",
    municipio: "Central de transporte",
    linea: "BRT Villahermosa",
    tipo_zona: "urbano",
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
    pois: [
      {
        nombre: "Terminal Primera Clase",
        tipo: "Transporte",
        distancia: "0.1 km"
      },
      {
        nombre: "Servicios de Terminal",
        tipo: "Comercio",
        distancia: "0.15 km"
      },
      {
        nombre: "Información Turística",
        tipo: "Servicios",
        distancia: "0.2 km"
      }
    ],
    transferencias: [],
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
    },
    seo_title: "Estación Terminal Primera Clase — BRT Villahermosa | MetroGuia",
    meta_description: "Estación Terminal Primera Clase de BRT Villahermosa. Terminal de autobuses de primera clase.",
    h1: "Estación Terminal Primera Clase — BRT Villahermosa",
    intro: "Terminal de autobuses de primera clase en Villahermosa, punto principal de llegada y salida hacia ciudades de Tabasco y conexiones nacionales. Nodo de transporte moderno con servicios completos.",
    tips: [
      "Compre boletos con anticipación durante temporada alta",
      "Consulte horarios en taquillas antes de su viaje",
      "Use servicios de información para conexiones en otras ciudades"
    ],
    mejor_horario: "Temprano para evitar horas pico",
    mundial_relevancia: "Sin relevancia directa al Mundial 2026"
  },
  {
    id: 2,
    nombre: "Centro Histórico",
    slug: "villahermosa-centro-historico",
    ubicacion: "Corazón de Villahermosa",
    municipio: "Corazón de Villahermosa",
    linea: "BRT Villahermosa",
    tipo_zona: "urbano",
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
    pois: [
      {
        nombre: "Parque La Venta",
        tipo: "Museo Arqueológico",
        distancia: "0.3 km"
      },
      {
        nombre: "Museo de Antropología",
        tipo: "Museo",
        distancia: "0.4 km"
      },
      {
        nombre: "Teatro de la Ciudad",
        tipo: "Cultura",
        distancia: "0.2 km"
      }
    ],
    transferencias: [],
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
    },
    seo_title: "Estación Centro Histórico — BRT Villahermosa | MetroGuia",
    meta_description: "Estación Centro Histórico de BRT Villahermosa. Centro cultural y administrativo de Villahermosa.",
    h1: "Estación Centro Histórico — BRT Villahermosa",
    intro: "Centro cultural y administrativo de Villahermosa, zona de patrimonio con plaza central, museos y galerías. Corazón de la capital tabasqueña con mezcla de historia y modernidad.",
    tips: [
      "Visite Parque La Venta para ver monumentos olmecas originales",
      "Explore el Museo de Antropología para entender la historia de Tabasco",
      "Verifique la programación del Teatro de la Ciudad durante su visita"
    ],
    mejor_horario: "Temprano para evitar horas pico",
    mundial_relevancia: "Sin relevancia directa al Mundial 2026"
  },
  {
    id: 3,
    nombre: "Agua Blanca",
    slug: "villahermosa-agua-blanca",
    ubicacion: "Zona residencial",
    municipio: "Zona residencial",
    linea: "BRT Villahermosa",
    tipo_zona: "urbano",
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
    pois: [
      {
        nombre: "Centro Comercial Agua Blanca",
        tipo: "Comercio",
        distancia: "0.3 km"
      },
      {
        nombre: "Parque Urbano",
        tipo: "Parque",
        distancia: "0.2 km"
      },
      {
        nombre: "Restaurantes y Cafés",
        tipo: "Gastronomía",
        distancia: "0.25 km"
      }
    ],
    transferencias: [],
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
    },
    seo_title: "Estación Agua Blanca — BRT Villahermosa | MetroGuia",
    meta_description: "Estación Agua Blanca de BRT Villahermosa. Acceso a zona residencial de Agua Blanca.",
    h1: "Estación Agua Blanca — BRT Villahermosa",
    intro: "Acceso a zona residencial de Agua Blanca, área de desarrollo urbano contemporáneo con servicios comerciales. Barrio con tiendas, restaurantes y servicios para residentes y visitantes.",
    tips: [
      "Compre en centro comercial con variedad de tiendas modernas",
      "Disfrute actividades recreativas en parque urbano",
      "Pruebe diversos restaurantes y cafés de la zona"
    ],
    mejor_horario: "Temprano para evitar horas pico",
    mundial_relevancia: "Sin relevancia directa al Mundial 2026"
  },
  {
    id: 4,
    nombre: "Villahermosa 2000",
    slug: "villahermosa-villahermosa-2000",
    ubicacion: "Complejo comercial moderno",
    municipio: "Complejo comercial moderno",
    linea: "BRT Villahermosa",
    tipo_zona: "urbano",
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
    pois: [
      {
        nombre: "Centro Comercial Villahermosa 2000",
        tipo: "Centro Comercial",
        distancia: "0.2 km"
      },
      {
        nombre: "Cines",
        tipo: "Entretenimiento",
        distancia: "0.15 km"
      },
      {
        nombre: "Restaurantes Diversos",
        tipo: "Gastronomía",
        distancia: "0.2 km"
      }
    ],
    transferencias: [],
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
    },
    seo_title: "Estación Villahermosa 2000 — BRT Villahermosa | MetroGuia",
    meta_description: "Estación Villahermosa 2000 de BRT Villahermosa. Acceso a centro comercial moderno.",
    h1: "Estación Villahermosa 2000 — BRT Villahermosa",
    intro: "Acceso a centro comercial y de servicios Villahermosa 2000, complejo moderno con tiendas, oficinas y servicios. Punto de encuentro comercial y de entretenimiento en la ciudad.",
    tips: [
      "Compre en tiendas departamentales con promociones especiales",
      "Vea películas en cines modernos con tecnología actualizada",
      "Disfrute comidas en restaurantes con variedad culinaria"
    ],
    mejor_horario: "Temprano para evitar horas pico",
    mundial_relevancia: "Sin relevancia directa al Mundial 2026"
  },
  {
    id: 5,
    nombre: "Yumká",
    slug: "villahermosa-yumka",
    ubicacion: "Parque ecológico",
    municipio: "Parque ecológico",
    linea: "BRT Villahermosa",
    tipo_zona: "urbano",
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
    pois: [
      {
        nombre: "Parque Yumká",
        tipo: "Parque Ecológico",
        distancia: "0.3 km"
      },
      {
        nombre: "Senderos Ecológicos",
        tipo: "Ruta Natural",
        distancia: "0.5 km"
      },
      {
        nombre: "Centro de Visitantes",
        tipo: "Museo",
        distancia: "0.2 km"
      }
    ],
    transferencias: [],
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
    },
    seo_title: "Estación Yumká — BRT Villahermosa | MetroGuia",
    meta_description: "Estación Yumká de BRT Villahermosa. Acceso a Yumká, parque de flora y fauna tabasqueña.",
    h1: "Estación Yumká — BRT Villahermosa",
    intro: "Acceso a Yumká, parque de flora y fauna tabasqueña con ecosistemas naturales. Centro de conservación y educación ambiental que preserva la biodiversidad de la región selvatica.",
    tips: [
      "Camine senderos ecológicos para observar fauna local",
      "Aprenda sobre conservación en centro de visitantes",
      "Fotografíe la biodiversidad de Tabasco en su entorno natural"
    ],
    mejor_horario: "Temprano para evitar horas pico",
    mundial_relevancia: "Sin relevancia directa al Mundial 2026"
  },
  {
    id: 6,
    nombre: "Puxcatán",
    slug: "villahermosa-puxcatan",
    ubicacion: "Zona de haciendas históricas",
    municipio: "Zona de haciendas históricas",
    linea: "BRT Villahermosa",
    tipo_zona: "urbano",
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
    pois: [
      {
        nombre: "Haciendas Coloniales",
        tipo: "Patrimonio",
        distancia: "0.5 km"
      },
      {
        nombre: "Plantaciones de Cacao",
        tipo: "Agricultura",
        distancia: "0.8 km"
      },
      {
        nombre: "Senderos Rurales",
        tipo: "Ruta Natural",
        distancia: "0.6 km"
      }
    ],
    transferencias: [],
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
    },
    seo_title: "Estación Puxcatán — BRT Villahermosa | MetroGuia",
    meta_description: "Estación Puxcatán de BRT Villahermosa. Acceso a zona de haciendas históricas.",
    h1: "Estación Puxcatán — BRT Villahermosa",
    intro: "Acceso a zona de Puxcatán, área histórica con haciendas y patrimonio agrícola tabasqueño. Centro de herencia cultural relacionada con la producción de cacao y agricultura colonial.",
    tips: [
      "Visite haciendas coloniales para aprender sobre historia agrícola",
      "Explore plantaciones de cacao en cultivo tradicional",
      "Camine senderos rurales para disfrutar paisajes campestres"
    ],
    mejor_horario: "Temprano para evitar horas pico",
    mundial_relevancia: "Sin relevancia directa al Mundial 2026"
  },
  {
    id: 7,
    nombre: "Paseo Tabasco",
    slug: "villahermosa-paseo-tabasco",
    ubicacion: "Avenida principal",
    municipio: "Avenida principal",
    linea: "BRT Villahermosa",
    tipo_zona: "urbano",
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
    pois: [
      {
        nombre: "Tiendas Comerciales",
        tipo: "Comercio",
        distancia: "0.3 km"
      },
      {
        nombre: "Restaurantes y Bares",
        tipo: "Gastronomía",
        distancia: "0.25 km"
      },
      {
        nombre: "Galerías y Museos",
        tipo: "Cultura",
        distancia: "0.4 km"
      }
    ],
    transferencias: [],
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
    },
    seo_title: "Estación Paseo Tabasco — BRT Villahermosa | MetroGuia",
    meta_description: "Estación Paseo Tabasco de BRT Villahermosa. Acceso al Paseo Tabasco, avenida principal.",
    h1: "Estación Paseo Tabasco — BRT Villahermosa",
    intro: "Acceso al Paseo Tabasco, avenida principal de Villahermosa con tiendas, restaurantes y vida comercial de la ciudad. Eje comercial y turístico de Villahermosa con servicios diversos.",
    tips: [
      "Compre en tiendas con variedad y promociones especiales",
      "Cene en restaurantes y bares a lo largo de la avenida",
      "Visite galerías para apreciar arte y cultura local"
    ],
    mejor_horario: "Temprano para evitar horas pico",
    mundial_relevancia: "Sin relevancia directa al Mundial 2026"
  },
  {
    id: 8,
    nombre: "Museo de Antropología",
    slug: "villahermosa-museo-de-antropologia",
    ubicacion: "Centro cultural principal",
    municipio: "Centro cultural principal",
    linea: "BRT Villahermosa",
    tipo_zona: "urbano",
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
    pois: [
      {
        nombre: "Museo Regional",
        tipo: "Museo",
        distancia: "0.2 km"
      },
      {
        nombre: "Auditorios Culturales",
        tipo: "Cultura",
        distancia: "0.15 km"
      },
      {
        nombre: "Tienda del Museo",
        tipo: "Comercio",
        distancia: "0.1 km"
      }
    ],
    transferencias: [],
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
    },
    seo_title: "Estación Museo de Antropología — BRT Villahermosa | MetroGuia",
    meta_description: "Estación Museo de Antropología de BRT Villahermosa. Acceso al Museo de Antropología.",
    h1: "Estación Museo de Antropología — BRT Villahermosa",
    intro: "Acceso al Museo de Antropología e Historia de Tabasco, principal institución cultural de la entidad. Colecciones de arte prehispánico olmeca, maya y exposiciones de historia tabasqueña.",
    tips: [
      "Vea colecciones olmecas y mayas principales del museo",
      "Asista a presentaciones culturales en auditorios",
      "Compre reproducciones de arte prehispánico en tienda"
    ],
    mejor_horario: "Temprano para evitar horas pico",
    mundial_relevancia: "Sin relevancia directa al Mundial 2026"
  },
  {
    id: 9,
    nombre: "Tren Maya Palenque",
    slug: "villahermosa-tren-maya-palenque",
    ubicacion: "Conexión Tren Maya",
    municipio: "Conexión Tren Maya",
    linea: "BRT Villahermosa",
    tipo_zona: "urbano",
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
    pois: [
      {
        nombre: "Estación Tren Maya",
        tipo: "Transporte",
        distancia: "0.2 km"
      },
      {
        nombre: "Centro de Información",
        tipo: "Servicios",
        distancia: "0.15 km"
      },
      {
        nombre: "Comercios y Restaurantes",
        tipo: "Servicios",
        distancia: "0.25 km"
      }
    ],
    transferencias: [],
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
    },
    seo_title: "Estación Tren Maya Palenque — BRT Villahermosa | MetroGuia",
    meta_description: "Estación Tren Maya Palenque de BRT Villahermosa. Conexión con Tren Maya hacia Palenque.",
    h1: "Estación Tren Maya Palenque — BRT Villahermosa",
    intro: "Estación de conexión con Tren Maya hacia Palenque. Acceso a transporte regional que conecta Villahermosa con la zona arqueológica maya de Palenque y destinos de la Riviera Maya.",
    tips: [
      "Compre boletos del Tren Maya con anticipación",
      "Consulte información sobre conexiones a Palenque",
      "Compre provisiones antes de viajar en comercios de terminal"
    ],
    mejor_horario: "Temprano para evitar horas pico",
    mundial_relevancia: "Sin relevancia directa al Mundial 2026"
  },
  {
    id: 10,
    nombre: "Tren Maya Conexión Riviera",
    slug: "villahermosa-tren-maya-conexion-riviera",
    ubicacion: "Terminal regional",
    municipio: "Terminal regional",
    linea: "BRT Villahermosa",
    tipo_zona: "urbano",
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
    pois: [
      {
        nombre: "Terminal Tren Maya Riviera",
        tipo: "Transporte",
        distancia: "0.2 km"
      },
      {
        nombre: "Centro Turístico",
        tipo: "Información",
        distancia: "0.15 km"
      },
      {
        nombre: "Servicios de Terminal",
        tipo: "Comercio",
        distancia: "0.2 km"
      }
    ],
    transferencias: [],
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
    },
    seo_title: "Estación Tren Maya Conexión Riviera — BRT Villahermosa | MetroGuia",
    meta_description: "Estación Tren Maya Conexión Riviera de BRT Villahermosa. Conexión a Riviera Maya.",
    h1: "Estación Tren Maya Conexión Riviera — BRT Villahermosa",
    intro: "Estación de conexión con Tren Maya hacia la Riviera Maya. Puerta de acceso a destinos turísticos principales del Caribe mexicano incluyendo Playa del Carmen, Cozumel y zona hotelera.",
    tips: [
      "Compre boletos a destinos de Riviera Maya con anticipación",
      "Obtenga información sobre paquetes turísticos disponibles",
      "Aproveche servicios de terminal para preparar su viaje"
    ],
    mejor_horario: "Temprano para evitar horas pico",
    mundial_relevancia: "Sin relevancia directa al Mundial 2026"
  }
];
