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

export const estacionesCampeche = [
  {
    id: 1,
    nombre: "Estación Central",
    slug: "campeche-estacion-central",
    ubicacion: "Centro de Campeche",
    municipio: "Centro de Campeche",
    linea: "BRT Campeche",
    tipo_zona: "urbano",
    descripcion_turistica: "Centro de operaciones de transporte intermodal en Campeche. Punto de partida hacia la histórica ciudad amurallada UNESCO, con acceso directo al malecón colonial y los principales sitios arqueológicos de la región.",
    lugares_cercanos: [
      {
        nombre: "Malecón de Campeche",
        tipo: "Paseo Cultural",
        distancia: "0.3 km",
        descripcion: "Paseo costero con vistas al Golfo de México, muralla colonial y plazas históricas"
      },
      {
        nombre: "Catedral Metropolitana",
        tipo: "Monumento Histórico",
        distancia: "0.4 km",
        descripcion: "Iglesia colonial del siglo XVI, uno de los monumentos religiosos más importantes de Campeche"
      },
      {
        nombre: "Fuerte de San Miguel",
        tipo: "Museo",
        distancia: "2.5 km",
        descripcion: "Fortaleza del siglo XVIII con museo de artefactos mayas prehispánicos"
      }
    ],
    pois: [
      {
        nombre: "Malecón de Campeche",
        tipo: "Paseo Cultural",
        distancia: "0.3 km"
      },
      {
        nombre: "Catedral Metropolitana",
        tipo: "Monumento Histórico",
        distancia: "0.4 km"
      },
      {
        nombre: "Fuerte de San Miguel",
        tipo: "Museo",
        distancia: "2.5 km"
      }
    ],
    transferencias: [],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Horarios estándar BRT Campeche"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Instalaciones completamente accesibles con ascensor de acceso directo a plataformas"
    },
    seo_title: "Estación Estación Central — BRT Campeche | MetroGuia",
    meta_description: "Estación Estación Central de BRT Campeche. Centro de operaciones de transporte intermodal en Campeche.",
    h1: "Estación Estación Central — BRT Campeche",
    intro: "Centro de operaciones de transporte intermodal en Campeche. Punto de partida hacia la histórica ciudad amurallada UNESCO, con acceso directo al malecón colonial y los principales sitios arqueológicos de la región.",
    tips: [
      "Llegue con anticipación durante horas pico para evitar congestión en plataformas",
      "Utilice los ascensores disponibles si viaja con equipaje pesado",
      "Consulte horarios especiales en días festivos nacionales"
    ],
    mejor_horario: "Temprano para evitar horas pico",
    mundial_relevancia: "Sin relevancia directa al Mundial 2026"
  },
  {
    id: 2,
    nombre: "Fuerte San Miguel",
    slug: "campeche-fuerte-san-miguel",
    ubicacion: "Colina de San Miguel",
    municipio: "Colina de San Miguel",
    linea: "BRT Campeche",
    tipo_zona: "urbano",
    descripcion_turistica: "Acceso a la fortaleza colonial del siglo XVIII, joya arquitectónica de Campeche. Museo con colecciones mayas de importancia mundial, ubicado estratégicamente en la colina de San Miguel con vistas panorámicas.",
    lugares_cercanos: [
      {
        nombre: "Museo de Cultura Maya",
        tipo: "Museo",
        distancia: "0.1 km",
        descripcion: "Colección de artefactos y esculturas mayas de las civilizaciones prehispánicas"
      },
      {
        nombre: "Barrio Antiguo de Campeche",
        tipo: "Zona Histórica",
        distancia: "1.2 km",
        descripcion: "Sector colonial restaurado con arquitectura de los siglos XVI-XVII"
      },
      {
        nombre: "Playa Bonita",
        tipo: "Playa",
        distancia: "1.5 km",
        descripcion: "Playa cercana al casco histórico, ideal para descanso después de visitas turísticas"
      }
    ],
    pois: [
      {
        nombre: "Museo de Cultura Maya",
        tipo: "Museo",
        distancia: "0.1 km"
      },
      {
        nombre: "Barrio Antiguo de Campeche",
        tipo: "Zona Histórica",
        distancia: "1.2 km"
      },
      {
        nombre: "Playa Bonita",
        tipo: "Playa",
        distancia: "1.5 km"
      }
    ],
    transferencias: [],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Acceso al fuerte disponible 9:00-18:00"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Rampa de acceso a la estación, ascensor disponible en museo"
    },
    seo_title: "Estación Fuerte San Miguel — BRT Campeche | MetroGuia",
    meta_description: "Estación Fuerte San Miguel de BRT Campeche. Acceso a la fortaleza colonial del siglo XVIII, joya arquitectónica de Campeche.",
    h1: "Estación Fuerte San Miguel — BRT Campeche",
    intro: "Acceso a la fortaleza colonial del siglo XVIII, joya arquitectónica de Campeche. Museo con colecciones mayas de importancia mundial, ubicado estratégicamente en la colina de San Miguel con vistas panorámicas.",
    tips: [
      "Traiga calzado cómodo para recorrer la colina y las instalaciones del fuerte",
      "Visite el museo en las primeras horas para evitar multitudes",
      "Disfrute de las vistas panorámicas desde la colina al atardecer"
    ],
    mejor_horario: "Temprano para evitar horas pico",
    mundial_relevancia: "Sin relevancia directa al Mundial 2026"
  },
  {
    id: 3,
    nombre: "Centro Histórico",
    slug: "campeche-centro-historico",
    ubicacion: "Casco Antiguo",
    municipio: "Casco Antiguo",
    linea: "BRT Campeche",
    tipo_zona: "urbano",
    descripcion_turistica: "Núcleo del patrimonio mundial UNESCO de Campeche. Centro de confluencia hacia la Catedral Metropolitana, el Zócalo y las plazas coloniales que conforman el corazón histórico de la ciudad amurallada.",
    lugares_cercanos: [
      {
        nombre: "Zócalo de Campeche",
        tipo: "Plaza Pública",
        distancia: "0.2 km",
        descripcion: "Plaza principal rodeada de edificios coloniales, punto de encuentro histórico y cultural"
      },
      {
        nombre: "Catedral Metropolitana",
        tipo: "Monumento Histórico",
        distancia: "0.2 km",
        descripcion: "Monumento religioso del siglo XVI, ejemplo de arquitectura colonial religiosa"
      },
      {
        nombre: "Muralla de Campeche",
        tipo: "Fortificación",
        distancia: "0.3 km",
        descripcion: "Sistema defensivo del siglo XVII que rodea el centro histórico, restaurado y preservado"
      },
      {
        nombre: "Casa del Teniente del Rey",
        tipo: "Museo",
        distancia: "0.15 km",
        descripcion: "Mansion colonial convertida en museo que muestra la vida colonial de Campeche"
      }
    ],
    pois: [
      {
        nombre: "Zócalo de Campeche",
        tipo: "Plaza Pública",
        distancia: "0.2 km"
      },
      {
        nombre: "Catedral Metropolitana",
        tipo: "Monumento Histórico",
        distancia: "0.2 km"
      },
      {
        nombre: "Muralla de Campeche",
        tipo: "Fortificación",
        distancia: "0.3 km"
      }
    ],
    transferencias: [],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Centro comercial y cultural abierto la mayoría de horas"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: false,
      rampas: true,
      banos_accesibles: true,
      notas: "Rampas de acceso disponibles, calles adoquinadas en casco antiguo"
    },
    seo_title: "Estación Centro Histórico — BRT Campeche | MetroGuia",
    meta_description: "Estación Centro Histórico de BRT Campeche. Núcleo del patrimonio mundial UNESCO de Campeche.",
    h1: "Estación Centro Histórico — BRT Campeche",
    intro: "Núcleo del patrimonio mundial UNESCO de Campeche. Centro de confluencia hacia la Catedral Metropolitana, el Zócalo y las plazas coloniales que conforman el corazón histórico de la ciudad amurallada.",
    tips: [
      "Estacione su bicicleta en las racks disponibles en el zócalo",
      "Camine lentamente para apreciar la arquitectura colonial de cada calle",
      "Visite tiendas de artesanías locales a lo largo de las calles principales"
    ],
    mejor_horario: "Temprano para evitar horas pico",
    mundial_relevancia: "Sin relevancia directa al Mundial 2026"
  },
  {
    id: 4,
    nombre: "Puerta de Tierra",
    slug: "campeche-puerta-de-tierra",
    ubicacion: "Entrada histórica",
    municipio: "Entrada histórica",
    linea: "BRT Campeche",
    tipo_zona: "urbano",
    descripcion_turistica: "Acceso a una de las puertas monumentales de la muralla colonial de Campeche, entrada histórica a la ciudad amurallada con importante valor arquitectónico y turístico. Punto de partida para recorridos por el casco antiguo.",
    lugares_cercanos: [
      {
        nombre: "Puerta de Tierra",
        tipo: "Monumento",
        distancia: "0.05 km",
        descripcion: "Puerta colonial restaurada que formaba parte del sistema defensivo de la ciudad"
      },
      {
        nombre: "Paseo de las Murallas",
        tipo: "Ruta Histórica",
        distancia: "0.3 km",
        descripcion: "Recorrido a lo largo de la muralla completamente restaurada con vistas panorámicas"
      },
      {
        nombre: "Iglesia de San Francisco",
        tipo: "Templo",
        distancia: "0.4 km",
        descripcion: "Iglesia colonial del siglo XVII con arquitectura de importancia histórica"
      }
    ],
    pois: [
      {
        nombre: "Puerta de Tierra",
        tipo: "Monumento",
        distancia: "0.05 km"
      },
      {
        nombre: "Paseo de las Murallas",
        tipo: "Ruta Histórica",
        distancia: "0.3 km"
      },
      {
        nombre: "Iglesia de San Francisco",
        tipo: "Templo",
        distancia: "0.4 km"
      }
    ],
    transferencias: [],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Acceso a muralla disponible durante horas diurnas"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: false,
      rampas: true,
      banos_accesibles: false,
      notas: "Acceso a estación con rampa, pero muralla tiene calles empedradas"
    },
    seo_title: "Estación Puerta de Tierra — BRT Campeche | MetroGuia",
    meta_description: "Estación Puerta de Tierra de BRT Campeche. Acceso a una de las puertas monumentales de la muralla colonial.",
    h1: "Estación Puerta de Tierra — BRT Campeche",
    intro: "Acceso a una de las puertas monumentales de la muralla colonial de Campeche, entrada histórica a la ciudad amurallada con importante valor arquitectónico y turístico. Punto de partida para recorridos por el casco antiguo.",
    tips: [
      "Use zapatos con buen agarre para las calles empedradas del casco antiguo",
      "Fotografíe la puerta desde diferentes ángulos para captar su arquitectura",
      "Reserve tiempo para recorrer el Paseo de las Murallas completo"
    ],
    mejor_horario: "Temprano para evitar horas pico",
    mundial_relevancia: "Sin relevancia directa al Mundial 2026"
  },
  {
    id: 5,
    nombre: "Barrio Antiguo",
    slug: "campeche-barrio-antiguo",
    ubicacion: "Sector colonial",
    municipio: "Sector colonial",
    linea: "BRT Campeche",
    tipo_zona: "urbano",
    descripcion_turistica: "Corazón del patrimonio arquitectónico campechano con mansiones coloniales restauradas, tiendas artesanales y galerías de arte. Zona de convivencia entre historia y vida cotidiana contemporánea de Campeche.",
    lugares_cercanos: [
      {
        nombre: "Casa de Artesanías",
        tipo: "Tienda",
        distancia: "0.2 km",
        descripcion: "Venta de productos artesanales locales y típicos de Campeche"
      },
      {
        nombre: "Galerías de Arte Colonial",
        tipo: "Galería",
        distancia: "0.3 km",
        descripcion: "Espacios dedicados al arte contemporáneo en edificios coloniales restaurados"
      },
      {
        nombre: "Restaurantes Tradicionales",
        tipo: "Gastronomía",
        distancia: "0.2 km",
        descripcion: "Oferta de cocina campechana tradicional en ambiente colonial"
      }
    ],
    pois: [
      {
        nombre: "Casa de Artesanías",
        tipo: "Tienda",
        distancia: "0.2 km"
      },
      {
        nombre: "Galerías de Arte Colonial",
        tipo: "Galería",
        distancia: "0.3 km"
      },
      {
        nombre: "Restaurantes Tradicionales",
        tipo: "Gastronomía",
        distancia: "0.2 km"
      }
    ],
    transferencias: [],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Comercios locales abiertos hasta 20:00 en promedio"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: false,
      rampas: true,
      banos_accesibles: true,
      notas: "Calles con adoquines, algunos comercios con rampas adaptadas"
    },
    seo_title: "Estación Barrio Antiguo — BRT Campeche | MetroGuia",
    meta_description: "Estación Barrio Antiguo de BRT Campeche. Corazón del patrimonio arquitectónico campechano con mansiones coloniales.",
    h1: "Estación Barrio Antiguo — BRT Campeche",
    intro: "Corazón del patrimonio arquitectónico campechano con mansiones coloniales restauradas, tiendas artesanales y galerías de arte. Zona de convivencia entre historia y vida cotidiana contemporánea de Campeche.",
    tips: [
      "Compre artesanías en tiendas locales para apoyar a artesanos campechanos",
      "Pruebe la cocina campechana en restaurantes tradicionales",
      "Visite galerías de arte durante las tardes para mejor iluminación"
    ],
    mejor_horario: "Temprano para evitar horas pico",
    mundial_relevancia: "Sin relevancia directa al Mundial 2026"
  },
  {
    id: 6,
    nombre: "Barrio San Francisco",
    slug: "campeche-barrio-san-francisco",
    ubicacion: "Zona sur histórica",
    municipio: "Zona sur histórica",
    linea: "BRT Campeche",
    tipo_zona: "urbano",
    descripcion_turistica: "Barrio histórico que mantiene la esencia colonial de Campeche con iglesia de San Francisco como referencia. Zona residencial con atractivo turístico, ofreciendo experiencia auténtica del Campeche histórico.",
    lugares_cercanos: [
      {
        nombre: "Iglesia de San Francisco",
        tipo: "Templo Histórico",
        distancia: "0.2 km",
        descripcion: "Iglesia colonial del siglo XVII con arquitectura de piedra característica"
      },
      {
        nombre: "Plazuela de San Francisco",
        tipo: "Plaza",
        distancia: "0.15 km",
        descripcion: "Espacio público histórico frente a la iglesia, punto de convivencia local"
      },
      {
        nombre: "Casas Coloniales Restauradas",
        tipo: "Patrimonio",
        distancia: "0.3 km",
        descripcion: "Residencias coloniales que preservan arquitectura original del siglo XVII"
      }
    ],
    pois: [
      {
        nombre: "Iglesia de San Francisco",
        tipo: "Templo Histórico",
        distancia: "0.2 km"
      },
      {
        nombre: "Plazuela de San Francisco",
        tipo: "Plaza",
        distancia: "0.15 km"
      },
      {
        nombre: "Casas Coloniales Restauradas",
        tipo: "Patrimonio",
        distancia: "0.3 km"
      }
    ],
    transferencias: [],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Horarios estándar BRT Campeche"
    },
    accesibilidad: {
      silla_ruedas: false,
      ascensores: false,
      rampas: false,
      banos_accesibles: false,
      notas: "Zona con calles empedradas, limitada accesibilidad para silla de ruedas"
    },
    seo_title: "Estación Barrio San Francisco — BRT Campeche | MetroGuia",
    meta_description: "Estación Barrio San Francisco de BRT Campeche. Barrio histórico que mantiene la esencia colonial de Campeche.",
    h1: "Estación Barrio San Francisco — BRT Campeche",
    intro: "Barrio histórico que mantiene la esencia colonial de Campeche con iglesia de San Francisco como referencia. Zona residencial con atractivo turístico, ofreciendo experiencia auténtica del Campeche histórico.",
    tips: [
      "Visite la iglesia durante los servicios dominicales para experiencia cultural auténtica",
      "Descubra tiendas locales y pequeños negocios familiares en el barrio",
      "Camine a paso lento para apreciar los detalles arquitectónicos"
    ],
    mejor_horario: "Temprano para evitar horas pico",
    mundial_relevancia: "Sin relevancia directa al Mundial 2026"
  },
  {
    id: 7,
    nombre: "Playita Bonita",
    slug: "campeche-playita-bonita",
    ubicacion: "Zona costera",
    municipio: "Zona costera",
    linea: "BRT Campeche",
    tipo_zona: "urbano",
    descripcion_turistica: "Acceso a playas cercanas a Campeche con ambiente relajado y vistas al Golfo de México. Punto de partida para disfrutar de actividades de playa y gastronomía local de mariscos en restaurants costeros.",
    lugares_cercanos: [
      {
        nombre: "Playita Bonita",
        tipo: "Playa",
        distancia: "0.2 km",
        descripcion: "Pequeña playa urbana cerca del centro histórico con arena y agua cristalina"
      },
      {
        nombre: "Restaurantes de Mariscos",
        tipo: "Gastronomía",
        distancia: "0.3 km",
        descripcion: "Ofertas de cocina marina campechana, especialidad local con vistas al mar"
      },
      {
        nombre: "Malecón Marítimo",
        tipo: "Paseo",
        distancia: "0.4 km",
        descripcion: "Paseo costero con infraestructura moderna para descanso y recreación"
      }
    ],
    pois: [
      {
        nombre: "Playita Bonita",
        tipo: "Playa",
        distancia: "0.2 km"
      },
      {
        nombre: "Restaurantes de Mariscos",
        tipo: "Gastronomía",
        distancia: "0.3 km"
      },
      {
        nombre: "Malecón Marítimo",
        tipo: "Paseo",
        distancia: "0.4 km"
      }
    ],
    transferencias: [],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Playas y restaurants accesibles durante horas de operación"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: false,
      rampas: true,
      banos_accesibles: true,
      notas: "Rampa de acceso a playa, baños públicos accesibles disponibles"
    },
    seo_title: "Estación Playita Bonita — BRT Campeche | MetroGuia",
    meta_description: "Estación Playita Bonita de BRT Campeche. Acceso a playas cercanas a Campeche con ambiente relajado.",
    h1: "Estación Playita Bonita — BRT Campeche",
    intro: "Acceso a playas cercanas a Campeche con ambiente relajado y vistas al Golfo de México. Punto de partida para disfrutar de actividades de playa y gastronomía local de mariscos en restaurants costeros.",
    tips: [
      "Lleve protección solar y agua para protegerse durante su visita a la playa",
      "Visite durante las tardes para disfrutar de restaurantes con puesta de sol",
      "Pruebe los mariscos frescos en los comedores locales frente a la playa"
    ],
    mejor_horario: "Temprano para evitar horas pico",
    mundial_relevancia: "Sin relevancia directa al Mundial 2026"
  },
  {
    id: 8,
    nombre: "Edzná",
    slug: "campeche-edzna",
    ubicacion: "Zona arqueológica",
    municipio: "Zona arqueológica",
    linea: "BRT Campeche",
    tipo_zona: "urbano",
    descripcion_turistica: "Acceso a importante sitio arqueológico maya cercano a Campeche, destacado por sus estructuras piramidales y complejos prehispánicos. Centro de investigación y apreciación de la civilización maya clásica.",
    lugares_cercanos: [
      {
        nombre: "Zona Arqueológica de Edzná",
        tipo: "Sitio Maya",
        distancia: "1.5 km",
        descripcion: "Complejo de pirámides y estructuras mayas del período clásico, abierto a visitantes"
      },
      {
        nombre: "Centro de Visitantes",
        tipo: "Museo",
        distancia: "0.3 km",
        descripcion: "Información y artefactos sobre la historia maya de Edzná"
      },
      {
        nombre: "Tienda de Artesanías",
        tipo: "Comercio",
        distancia: "0.2 km",
        descripcion: "Venta de reproducciones y artesanías mayas locales"
      }
    ],
    pois: [
      {
        nombre: "Zona Arqueológica de Edzná",
        tipo: "Sitio Maya",
        distancia: "1.5 km"
      },
      {
        nombre: "Centro de Visitantes",
        tipo: "Museo",
        distancia: "0.3 km"
      },
      {
        nombre: "Tienda de Artesanías",
        tipo: "Comercio",
        distancia: "0.2 km"
      }
    ],
    transferencias: [],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Zona arqueológica abierta 8:00-17:00 diariamente"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: false,
      rampas: true,
      banos_accesibles: true,
      notas: "Senderos con rampas en zona arqueológica, baños accesibles en centro de visitantes"
    },
    seo_title: "Estación Edzná — BRT Campeche | MetroGuia",
    meta_description: "Estación Edzná de BRT Campeche. Acceso a importante sitio arqueológico maya cercano a Campeche.",
    h1: "Estación Edzná — BRT Campeche",
    intro: "Acceso a importante sitio arqueológico maya cercano a Campeche, destacado por sus estructuras piramidales y complejos prehispánicos. Centro de investigación y apreciación de la civilización maya clásica.",
    tips: [
      "Contrate un guía en el Centro de Visitantes para máxima experiencia educativa",
      "Visite temprano para evitar el calor del mediodía",
      "Lleve agua abundante, sombreros y protección solar para la zona abierta"
    ],
    mejor_horario: "Temprano para evitar horas pico",
    mundial_relevancia: "Sin relevancia directa al Mundial 2026"
  },
  {
    id: 9,
    nombre: "Tren Maya",
    slug: "campeche-tren-maya",
    ubicacion: "Terminal de Tren",
    municipio: "Terminal de Tren",
    linea: "BRT Campeche",
    tipo_zona: "urbano",
    descripcion_turistica: "Estación de conexión con el Tren Maya, proyecto de transporte regional que conecta Campeche con Playa del Carmen, Cozumel y otras ciudades del Caribe mexicano. Puerta de entrada a la Riviera Maya.",
    lugares_cercanos: [
      {
        nombre: "Terminal Tren Maya",
        tipo: "Transporte",
        distancia: "0.1 km",
        descripcion: "Estación moderna con servicios de trasportación a principales destinos del Caribe"
      },
      {
        nombre: "Centro Comercial Adyacente",
        tipo: "Comercio",
        distancia: "0.2 km",
        descripcion: "Tiendas y restaurants para viajeros con acceso directo a terminal"
      },
      {
        nombre: "Información Turística",
        tipo: "Servicios",
        distancia: "0.05 km",
        descripcion: "Centro de información para viajeros con mapas y asesoramiento turístico"
      }
    ],
    pois: [
      {
        nombre: "Terminal Tren Maya",
        tipo: "Transporte",
        distancia: "0.1 km"
      },
      {
        nombre: "Centro Comercial Adyacente",
        tipo: "Comercio",
        distancia: "0.2 km"
      },
      {
        nombre: "Información Turística",
        tipo: "Servicios",
        distancia: "0.05 km"
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
      notas: "Terminal de última generación con accesibilidad completa, ascensores, rampas"
    },
    seo_title: "Estación Tren Maya — BRT Campeche | MetroGuia",
    meta_description: "Estación Tren Maya de BRT Campeche. Conexión con el Tren Maya a destinos del Caribe.",
    h1: "Estación Tren Maya — BRT Campeche",
    intro: "Estación de conexión con el Tren Maya, proyecto de transporte regional que conecta Campeche con Playa del Carmen, Cozumel y otras ciudades del Caribe mexicano. Puerta de entrada a la Riviera Maya.",
    tips: [
      "Compre sus boletos con anticipación durante temporada alta de viajeros",
      "Aproveche el centro comercial para compras antes de viajar",
      "Consulte horarios del Tren Maya directamente en información turística"
    ],
    mejor_horario: "Temprano para evitar horas pico",
    mundial_relevancia: "Sin relevancia directa al Mundial 2026"
  },
  {
    id: 10,
    nombre: "Cerro de Arcos",
    slug: "campeche-cerro-de-arcos",
    ubicacion: "Zona elevada",
    municipio: "Zona elevada",
    linea: "BRT Campeche",
    tipo_zona: "urbano",
    descripcion_turistica: "Mirador natural con vistas panorámicas de Campeche y sus alrededores. Punto de observación estratégica para apreciar la distribución urbana, el litoral y la importancia geográfica histórica de la ciudad amurallada.",
    lugares_cercanos: [
      {
        nombre: "Mirador del Cerro",
        tipo: "Mirador",
        distancia: "0.3 km",
        descripcion: "Punto elevado con vistas panorámicas 360 grados de Campeche"
      },
      {
        nombre: "Sendero Natural",
        tipo: "Ruta de Senderismo",
        distancia: "0.5 km",
        descripcion: "Caminos naturales para caminata con vegetación tropical"
      },
      {
        nombre: "Área de Descanso",
        tipo: "Parque",
        distancia: "0.2 km",
        descripcion: "Espacio con bancas y sombra para descanso de visitantes"
      }
    ],
    pois: [
      {
        nombre: "Mirador del Cerro",
        tipo: "Mirador",
        distancia: "0.3 km"
      },
      {
        nombre: "Sendero Natural",
        tipo: "Ruta de Senderismo",
        distancia: "0.5 km"
      },
      {
        nombre: "Área de Descanso",
        tipo: "Parque",
        distancia: "0.2 km"
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
      silla_ruedas: false,
      ascensores: false,
      rampas: false,
      banos_accesibles: false,
      notas: "Acceso a mirador requiere caminata por senderos naturales sin accesibilidad"
    },
    seo_title: "Estación Cerro de Arcos — BRT Campeche | MetroGuia",
    meta_description: "Estación Cerro de Arcos de BRT Campeche. Mirador natural con vistas panorámicas de Campeche.",
    h1: "Estación Cerro de Arcos — BRT Campeche",
    intro: "Mirador natural con vistas panorámicas de Campeche y sus alrededores. Punto de observación estratégica para apreciar la distribución urbana, el litoral y la importancia geográfica histórica de la ciudad amurallada.",
    tips: [
      "Lleve cámara para capturar las vistas panorámicas de 360 grados",
      "Visite al atardecer para disfrutar de iluminación dorada",
      "Use calzado de senderismo para los caminos naturales"
    ],
    mejor_horario: "Temprano para evitar horas pico",
    mundial_relevancia: "Sin relevancia directa al Mundial 2026"
  },
  {
    id: 11,
    nombre: "Lerma",
    slug: "campeche-lerma",
    ubicacion: "Zona norte",
    municipio: "Zona norte",
    linea: "BRT Campeche",
    tipo_zona: "urbano",
    descripcion_turistica: "Estación de acceso a zona norte de Campeche con conexión a asentamientos residenciales y comerciales. Punto de conexión del sistema BRT con áreas de desarrollo urbano contemporáneo de la ciudad.",
    lugares_cercanos: [
      {
        nombre: "Zona Comercial Lerma",
        tipo: "Centro Comercial",
        distancia: "0.3 km",
        descripcion: "Tiendas y servicios comerciales modernos de la zona norte"
      },
      {
        nombre: "Parque Lerma",
        tipo: "Parque Público",
        distancia: "0.2 km",
        descripcion: "Área verde con equipamiento deportivo y recreativo"
      },
      {
        nombre: "Residencias y Oficinas",
        tipo: "Zona Residencial",
        distancia: "0.4 km",
        descripcion: "Desarrollo urbano moderno de Campeche con servicios diversos"
      }
    ],
    pois: [
      {
        nombre: "Zona Comercial Lerma",
        tipo: "Centro Comercial",
        distancia: "0.3 km"
      },
      {
        nombre: "Parque Lerma",
        tipo: "Parque Público",
        distancia: "0.2 km"
      },
      {
        nombre: "Residencias y Oficinas",
        tipo: "Zona Residencial",
        distancia: "0.4 km"
      }
    ],
    transferencias: [],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Comercios locales operativos durante horas estándar"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Zona moderna con estándares de accesibilidad contemporáneos completos"
    },
    seo_title: "Estación Lerma — BRT Campeche | MetroGuia",
    meta_description: "Estación Lerma de BRT Campeche. Acceso a zona norte de Campeche con conexión a asentamientos.",
    h1: "Estación Lerma — BRT Campeche",
    intro: "Estación de acceso a zona norte de Campeche con conexión a asentamientos residenciales y comerciales. Punto de conexión del sistema BRT con áreas de desarrollo urbano contemporáneo de la ciudad.",
    tips: [
      "Compre en la zona comercial con precios competitivos modernos",
      "Disfrute de actividades recreativas en el Parque Lerma",
      "Acceda fácilmente a servicios residenciales y comerciales modernos"
    ],
    mejor_horario: "Temprano para evitar horas pico",
    mundial_relevancia: "Sin relevancia directa al Mundial 2026"
  },
  {
    id: 12,
    nombre: "Calakmul",
    slug: "campeche-calakmul",
    ubicacion: "Zona arqueológica sur",
    municipio: "Zona arqueológica sur",
    linea: "BRT Campeche",
    tipo_zona: "urbano",
    descripcion_turistica: "Acceso a sitio arqueológico de Calakmul, una de las ciudades mayas más importantes de la antigüedad. Ubicado en la selva tropical campechana, ofrece experiencia inmersiva en ruinas mayas y biodiversidad de la región.",
    lugares_cercanos: [
      {
        nombre: "Zona Arqueológica de Calakmul",
        tipo: "Sitio Maya",
        distancia: "2.0 km",
        descripcion: "Complejo arqueológico importante con pirámides y estructuras de la era clásica maya"
      },
      {
        nombre: "Reserva de la Biósfera",
        tipo: "Parque Natural",
        distancia: "0.5 km",
        descripcion: "Área protegida con flora y fauna tropical de la región selvatica"
      },
      {
        nombre: "Centro de Interpretación",
        tipo: "Museo",
        distancia: "0.3 km",
        descripcion: "Información sobre la historia maya y ecología de la región"
      }
    ],
    pois: [
      {
        nombre: "Zona Arqueológica de Calakmul",
        tipo: "Sitio Maya",
        distancia: "2.0 km"
      },
      {
        nombre: "Reserva de la Biósfera",
        tipo: "Parque Natural",
        distancia: "0.5 km"
      },
      {
        nombre: "Centro de Interpretación",
        tipo: "Museo",
        distancia: "0.3 km"
      }
    ],
    transferencias: [],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Zona arqueológica abierta 8:00-17:00, requiere guía en algunos casos"
    },
    accesibilidad: {
      silla_ruedas: false,
      ascensores: false,
      rampas: false,
      banos_accesibles: true,
      descripcion: "Senderos naturales con baños accesibles en centro de visitantes"
    },
    seo_title: "Estación Calakmul — BRT Campeche | MetroGuia",
    meta_description: "Estación Calakmul de BRT Campeche. Acceso a sitio arqueológico de Calakmul.",
    h1: "Estación Calakmul — BRT Campeche",
    intro: "Acceso a sitio arqueológico de Calakmul, una de las ciudades mayas más importantes de la antigüedad. Ubicado en la selva tropical campechana, ofrece experiencia inmersiva en ruinas mayas y biodiversidad de la región.",
    tips: [
      "Lleve abundante agua y protección solar para recorrer la zona arqueológica",
      "Suba a la Estructura II para vistas panorámicas de la selva",
      "Observe la fauna local con paciencia desde senderos naturales"
    ],
    mejor_horario: "Temprano para evitar horas pico",
    mundial_relevancia: "Sin relevancia directa al Mundial 2026"
  },
  {
    id: 13,
    nombre: "Chichannà",
    slug: "campeche-chicchana",
    ubicacion: "Zona arqueológica este",
    municipio: "Zona arqueológica este",
    linea: "BRT Campeche",
    tipo_zona: "urbano",
    descripcion_turistica: "Estación de acceso a Chichannà, sitio arqueológico importante de arquitectura maya del período Puuc. Destacado por sus estructuras con decoraciones de máscaras de Itzamná, influencia estilística característica de la región.",
    lugares_cercanos: [
      {
        nombre: "Zona Arqueológica de Chichannà",
        tipo: "Sitio Maya",
        distancia: "1.8 km",
        descripcion: "Complejo arqueológico con estructuras del estilo arquitectónico Puuc"
      },
      {
        nombre: "Laguna Cercana",
        tipo: "Cuerpo de Agua",
        distancia: "0.8 km",
        descripcion: "Laguna natural con ecosistema de agua dulce tropical"
      },
      {
        nombre: "Sendero de la Selva",
        tipo: "Ruta Natural",
        distancia: "0.5 km",
        descripcion: "Camino a través de vegetación tropical para observación de fauna"
      }
    ],
    pois: [
      {
        nombre: "Zona Arqueológica de Chichannà",
        tipo: "Sitio Maya",
        distancia: "1.8 km"
      },
      {
        nombre: "Laguna Cercana",
        tipo: "Cuerpo de Agua",
        distancia: "0.8 km"
      },
      {
        nombre: "Sendero de la Selva",
        tipo: "Ruta Natural",
        distancia: "0.5 km"
      }
    ],
    transferencias: [],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Zona arqueológica abierta 8:00-17:00 diariamente"
    },
    accesibilidad: {
      silla_ruedas: false,
      ascensores: false,
      rampas: false,
      banos_accesibles: true,
      notas: "Senderos naturales, baños disponibles en área de entrada"
    },
    seo_title: "Estación Chichannà — BRT Campeche | MetroGuia",
    meta_description: "Estación Chichannà de BRT Campeche. Acceso a sitio arqueológico importante de arquitectura maya.",
    h1: "Estación Chichannà — BRT Campeche",
    intro: "Estación de acceso a Chichannà, sitio arqueológico importante de arquitectura maya del período Puuc. Destacado por sus estructuras con decoraciones de máscaras de Itzamná, influencia estilística característica de la región.",
    tips: [
      "Observe detalladamente las máscaras decorativas de Itzamná en las fachadas",
      "Camine los senderos de la selva para observar fauna tropical",
      "Traiga repelente de insectos para protección en el bosque tropical"
    ],
    mejor_horario: "Temprano para evitar horas pico",
    mundial_relevancia: "Sin relevancia directa al Mundial 2026"
  },
  {
    id: 14,
    nombre: "Becán",
    slug: "campeche-becan",
    ubicacion: "Zona arqueológica norte",
    municipio: "Zona arqueológica norte",
    linea: "BRT Campeche",
    tipo_zona: "urbano",
    descripcion_turistica: "Acceso a Becán, sitio arqueológico maya con estructuras defensivas y residenciales. Notable por su sistema de foso defensivo y arquitectura de ocupación prolongada, ejemplo de adaptación urbana maya antigua.",
    lugares_cercanos: [
      {
        nombre: "Zona Arqueológica de Becán",
        tipo: "Sitio Maya",
        distancia: "1.5 km",
        descripcion: "Complejo con estructuras defensivas y residenciales de la era clásica"
      },
      {
        nombre: "Estructura Principal",
        tipo: "Pirámide",
        distancia: "0.3 km",
        descripcion: "Pirámide principal con vistas de la distribución urbana antigua"
      },
      {
        nombre: "Área Forestal",
        tipo: "Bosque",
        distancia: "0.6 km",
        descripcion: "Vegetación tropical circundante con fauna característica de la región"
      }
    ],
    pois: [
      {
        nombre: "Zona Arqueológica de Becán",
        tipo: "Sitio Maya",
        distancia: "1.5 km"
      },
      {
        nombre: "Estructura Principal",
        tipo: "Pirámide",
        distancia: "0.3 km"
      },
      {
        nombre: "Área Forestal",
        tipo: "Bosque",
        distancia: "0.6 km"
      }
    ],
    transferencias: [],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Zona arqueológica abierta 8:00-17:00 con guías disponibles"
    },
    accesibilidad: {
      silla_ruedas: false,
      ascensores: false,
      rampas: false,
      banos_accesibles: true,
      notas: "Senderos con terreno natural, baños en área administrativa"
    },
    seo_title: "Estación Becán — BRT Campeche | MetroGuia",
    meta_description: "Estación Becán de BRT Campeche. Acceso a Becán, sitio arqueológico maya con estructuras defensivas.",
    h1: "Estación Becán — BRT Campeche",
    intro: "Acceso a Becán, sitio arqueológico maya con estructuras defensivas y residenciales. Notable por su sistema de foso defensivo y arquitectura de ocupación prolongada, ejemplo de adaptación urbana maya antigua.",
    tips: [
      "Explore el foso defensivo unique que rodea el sitio arqueológico",
      "Suba la pirámide principal para entender la distribución urbana maya",
      "Observe arquitectura residencial maya en las estructuras más pequeñas"
    ],
    mejor_horario: "Temprano para evitar horas pico",
    mundial_relevancia: "Sin relevancia directa al Mundial 2026"
  }
];
