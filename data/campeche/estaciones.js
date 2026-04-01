export const estacionesCampeche = [
  {
    id: 1,
    nombre: "Estación Central",
    ubicacion: "Centro de Campeche",
    linea: "BRT Campeche",
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
    }
  },
  {
    id: 2,
    nombre: "Fuerte San Miguel",
    ubicacion: "Colina de San Miguel",
    linea: "BRT Campeche",
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
    }
  },
  {
    id: 3,
    nombre: "Centro Histórico",
    ubicacion: "Casco Antiguo",
    linea: "BRT Campeche",
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
    }
  },
  {
    id: 4,
    nombre: "Puerta de Tierra",
    ubicacion: "Entrada histórica",
    linea: "BRT Campeche",
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
    }
  },
  {
    id: 5,
    nombre: "Barrio Antiguo",
    ubicacion: "Sector colonial",
    linea: "BRT Campeche",
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
    }
  },
  {
    id: 6,
    nombre: "Barrio San Francisco",
    ubicacion: "Zona sur histórica",
    linea: "BRT Campeche",
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
    }
  },
  {
    id: 7,
    nombre: "Playita Bonita",
    ubicacion: "Zona costera",
    linea: "BRT Campeche",
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
    }
  },
  {
    id: 8,
    nombre: "Edzná",
    ubicacion: "Zona arqueológica",
    linea: "BRT Campeche",
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
    }
  },
  {
    id: 9,
    nombre: "Tren Maya",
    ubicacion: "Terminal de Tren",
    linea: "BRT Campeche",
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
    }
  },
  {
    id: 10,
    nombre: "Cerro de Arcos",
    ubicacion: "Zona elevada",
    linea: "BRT Campeche",
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
    }
  },
  {
    id: 11,
    nombre: "Lerma",
    ubicacion: "Zona norte",
    linea: "BRT Campeche",
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
    }
  },
  {
    id: 12,
    nombre: "Calakmul",
    ubicacion: "Zona arqueológica sur",
    linea: "BRT Campeche",
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
    }
  },
  {
    id: 13,
    nombre: "Chichannà",
    ubicacion: "Zona arqueológica este",
    linea: "BRT Campeche",
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
    }
  },
  {
    id: 14,
    nombre: "Becán",
    ubicacion: "Zona arqueológica norte",
    linea: "BRT Campeche",
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
    }
  }
];
