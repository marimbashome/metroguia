export const estacionesOaxaca = [
  {
    id: 1,
    nombre: "Aeropuerto",
    ubicacion: "Entrada a Oaxaca",
    linea: "BRT Oaxaca",
    descripcion_turistica: "Puerta de entrada a Oaxaca con conexión directa al aeropuerto internacional. Punto de partida para viajeros hacia la capital oaxaqueña, centro cultural y gastronómico de México.",
    lugares_cercanos: [
      {
        nombre: "Terminal Aérea",
        tipo: "Transporte",
        distancia: "0.2 km",
        descripcion: "Aeropuerto internacional Xoxocotlán con vuelos nacionales e internacionales"
      },
      {
        nombre: "Rental de Autos",
        tipo: "Servicios",
        distancia: "0.3 km",
        descripcion: "Empresas de renta de vehículos para exploración de Oaxaca"
      },
      {
        nombre: "Hotel Gateway",
        tipo: "Hospedaje",
        distancia: "0.5 km",
        descripcion: "Alojamiento cercano al aeropuerto para conexiones rápidas"
      }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Servicios disponibles 24 horas para viajeros"
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
    ubicacion: "Corazón cultural de Oaxaca",
    linea: "BRT Oaxaca",
    descripcion_turistica: "Patrimonio de la Humanidad UNESCO, corazón cultural y gastronómico de Oaxaca. Centro del arte, tradición y modernidad donde convergen mercados históricos, galerías, templos coloniales y la cocina oaxaqueña de clase mundial.",
    lugares_cercanos: [
      {
        nombre: "Zócalo de Oaxaca",
        tipo: "Plaza Principal",
        distancia: "0.2 km",
        descripcion: "Plaza central con kiosko histórico, punto de encuentro cultural"
      },
      {
        nombre: "Catedral Metropolitana",
        tipo: "Templo",
        distancia: "0.15 km",
        descripcion: "Iglesia colonial del siglo XVI, ejemplo de arquitectura religiosa"
      },
      {
        nombre: "Mercado Benito Juárez",
        tipo: "Mercado",
        distancia: "0.3 km",
        descripcion: "Mercado tradicional con alimentos, artesanías y textiles oaxaqueños"
      },
      {
        nombre: "Galerías de Arte",
        tipo: "Arte",
        distancia: "0.4 km",
        descripcion: "Espacios dedicados al arte contemporáneo e indígena oaxaqueño"
      }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Centro comercial y cultural con actividad constante"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: false,
      rampas: true,
      banos_accesibles: true,
      notas: "Calles con adoquines, acceso mediante rampas a principales sitios"
    }
  },
  {
    id: 3,
    nombre: "Santo Domingo",
    ubicacion: "Templo y museo",
    linea: "BRT Oaxaca",
    descripcion_turistica: "Acceso a la Basílica de Santo Domingo, joya arquitectónica del barroco colonial oaxaqueño. Museo con arte religioso, textiles indígenas y colecciones de la tradición oaxaqueña, acompañado de jardín etnobotánico.",
    lugares_cercanos: [
      {
        nombre: "Basílica de Santo Domingo",
        tipo: "Templo Histórico",
        distancia: "0.1 km",
        descripcion: "Iglesia barroca del siglo XVI con decoración interior excepcional"
      },
      {
        nombre: "Museo de las Culturas",
        tipo: "Museo",
        distancia: "0.15 km",
        descripcion: "Colecciones de arte indígena, textiles y arqueología oaxaqueña"
      },
      {
        nombre: "Jardín Etnobotánico",
        tipo: "Jardín",
        distancia: "0.25 km",
        descripcion: "Plantas tradicionales de Oaxaca con propósitos medicinales y culturales"
      },
      {
        nombre: "Galerías Artesanales",
        tipo: "Comercio",
        distancia: "0.3 km",
        descripcion: "Venta directa de artesanías de cooperativas indígenas"
      }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Basílica abierta 7:00-20:00, museo 10:00-18:00"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: false,
      rampas: true,
      banos_accesibles: true,
      notas: "Rampas de acceso a templo y museo"
    }
  },
  {
    id: 4,
    nombre: "Monte Albán",
    ubicacion: "Zona arqueológica",
    linea: "BRT Oaxaca",
    descripcion_turistica: "Acceso a la gran capital zapoteca de Monte Albán, Patrimonio de la Humanidad. Complejo arqueológico monumental con pirámides, palacios y plazas que dominan el valle oaxaqueño desde hace 2500 años.",
    lugares_cercanos: [
      {
        nombre: "Zona Arqueológica Monte Albán",
        tipo: "Sitio Prehispánico",
        distancia: "0.5 km",
        descripcion: "Complejo arqueológico zapoteca con estructuras ceremoniales principales"
      },
      {
        nombre: "Museo de Sitio",
        tipo: "Museo",
        distancia: "0.3 km",
        descripcion: "Artefactos y explicación de la historia de Monte Albán"
      },
      {
        nombre: "Mirador Panorámico",
        tipo: "Mirador",
        distancia: "0.4 km",
        descripcion: "Vistas de valle de Oaxaca desde la altura de Monte Albán"
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
      notas: "Senderos con rampas principales, baños accesibles en museo"
    }
  },
  {
    id: 5,
    nombre: "Mitla",
    ubicacion: "Zona arqueológica este",
    linea: "BRT Oaxaca",
    descripcion_turistica: "Acceso a Mitla, segundo sitio arqueológico más importante de Oaxaca. Centro ceremonial zapoteca conocido por su arquitectura decorativa única con patrones geométricos de mosaicos de piedra.",
    lugares_cercanos: [
      {
        nombre: "Zona Arqueológica de Mitla",
        tipo: "Sitio Prehispánico",
        distancia: "0.3 km",
        descripcion: "Complejo con estructura del palacio y patios decorados con mosaicos"
      },
      {
        nombre: "Capilla Colonial",
        tipo: "Templo",
        distancia: "0.2 km",
        descripcion: "Capilla española construida sobre estructura prehispánica"
      },
      {
        nombre: "Tienda de Artesanías",
        tipo: "Comercio",
        distancia: "0.25 km",
        descripcion: "Venta de textiles y huipiles tradicionales de Mitla"
      }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Zona arqueológica abierta 8:00-17:00"
    },
    accesibilidad: {
      silla_ruedas: false,
      ascensores: false,
      rampas: false,
      banos_accesibles: true,
      notas: "Estructuras antiguas sin rampas, baños disponibles"
    }
  },
  {
    id: 6,
    nombre: "Hierve el Agua",
    ubicacion: "Formaciones naturales",
    linea: "BRT Oaxaca",
    descripcion_turistica: "Acceso a las cascadas fosilizadas de Hierve el Agua, espectáculo natural único en Oaxaca. Formaciones minerales blancas que caen por la montaña, con piscinas naturales de agua termal."
,
    lugares_cercanos: [
      {
        nombre: "Cascadas de Hierve el Agua",
        tipo: "Formación Natural",
        distancia: "0.4 km",
        descripcion: "Cascadas petrificadas de agua con minerales de travertino"
      },
      {
        nombre: "Piscinas Termales",
        tipo: "Baño Natural",
        distancia: "0.5 km",
        descripcion: "Piscinas de agua mineral con propiedades terapéuticas"
      },
      {
        nombre: "Mirador de la Sierra",
        tipo: "Mirador",
        distancia: "0.3 km",
        descripcion: "Vista panorámica de las cascadas y sierra de Oaxaca"
      }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Acceso a piscinas disponible 8:00-17:00"
    },
    accesibilidad: {
      silla_ruedas: false,
      ascensores: false,
      rampas: false,
      banos_accesibles: true,
      notas: "Terreno natural con escaleras, baños disponibles"
    }
  },
  {
    id: 7,
    nombre: "Mercado Benito Juárez",
    ubicacion: "Centro histórico comercial",
    linea: "BRT Oaxaca",
    descripcion_turistica: "Acceso directo al icónico mercado tradicional de Oaxaca, emblema de la vida cotidiana oaxaqueña. Mercado histórico con miles de vendedores de productos locales, alimentos, textiles, artesanías y especias.",
    lugares_cercanos: [
      {
        nombre: "Mercado Benito Juárez",
        tipo: "Mercado Tradicional",
        distancia: "0.1 km",
        descripcion: "Mercado grande con productos frescos, textiles y artesanías"
      },
      {
        nombre: "Puestos de Comida",
        tipo: "Gastronomía",
        distancia: "0.15 km",
        descripcion: "Comida tradicional oaxaqueña, mole y especialidades locales"
      },
      {
        nombre: "Tiendas de Textiles",
        tipo: "Comercio",
        distancia: "0.2 km",
        descripcion: "Venta de huipiles, rebozos y textiles indígenas"
      }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Mercado operativo desde 6:00 hasta 20:00"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: false,
      rampas: true,
      banos_accesibles: true,
      notas: "Rampas de acceso principal, pasillos para circulación"
    }
  },
  {
    id: 8,
    nombre: "Mercado 20 de Noviembre",
    ubicacion: "Centro comercial tradicional",
    linea: "BRT Oaxaca",
    descripcion_turistica: "Acceso a mercado tradicional especializado en alimentos y productos frescos. Centro de abastos donde convergen vendedores de comida tradicional oaxaqueña, ingredientes locales y especialidades gastronómicas.",
    lugares_cercanos: [
      {
        nombre: "Mercado 20 de Noviembre",
        tipo: "Mercado de Alimentos",
        distancia: "0.15 km",
        descripcion: "Mercado con frutas, vegetales, carnes y productos frescos"
      },
      {
        nombre: "Comedores Tradicionales",
        tipo: "Gastronomía",
        distancia: "0.2 km",
        descripcion: "Restaurantes caseros con cocina oaxaqueña auténtica"
      },
      {
        nombre: "Vendedores de Mole",
        tipo: "Gastronomía",
        distancia: "0.25 km",
        descripcion: "Productores y vendedores de mole negro, rojo y amarillo"
      }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Mercado abierto desde 6:00 hasta 19:00"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: false,
      rampas: true,
      banos_accesibles: false,
      notas: "Acceso con rampa, pasillos amplios entre puestos"
    }
  },
  {
    id: 9,
    nombre: "Andador Macedonio",
    ubicacion: "Paseo peatonal histórico",
    linea: "BRT Oaxaca",
    descripcion_turistica: "Acceso al paseo peatonal histórico de Oaxaca, calle exclusiva para peatones entre el zócalo y Santo Domingo. Zona con galerías, tiendas, cafés y atractivos turísticos en ambiente de preservación histórica.",
    lugares_cercanos: [
      {
        nombre: "Andador Macedonio Alcalá",
        tipo: "Paseo Peatonal",
        distancia: "0.1 km",
        descripcion: "Calle histórica peatonal con galerías de arte y tiendas"
      },
      {
        nombre: "Galerías de Arte Contemporáneo",
        tipo: "Arte",
        distancia: "0.2 km",
        descripcion: "Espacios dedicados a artistas oaxaqueños e internacionales"
      },
      {
        nombre: "Cafeterías Históricas",
        tipo: "Gastronomía",
        distancia: "0.15 km",
        descripcion: "Cafés tradicionales con arquitectura colonial"
      },
      {
        nombre: "Tiendas de Artesanías",
        tipo: "Comercio",
        distancia: "0.25 km",
        descripcion: "Venta de artesanías de alta calidad oaxaqueña"
      }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Paseo disponible con seguridad nocturna"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: false,
      rampas: true,
      banos_accesibles: true,
      notas: "Paseo totalmente peatonal y accesible"
    }
  },
  {
    id: 10,
    nombre: "Terminal ADO",
    ubicacion: "Central de autobuses",
    linea: "BRT Oaxaca",
    descripcion_turistica: "Terminal de autobuses ADO, principal punto de llegada y salida de transporte foráneo. Conexión a ciudades vecinas y regiones de México, importante nodo de transporte en Oaxaca.",
    lugares_cercanos: [
      {
        nombre: "Terminal ADO",
        tipo: "Transporte",
        distancia: "0.1 km",
        descripcion: "Central de autobuses con conexiones a todo México"
      },
      {
        nombre: "Servicios de Terminal",
        tipo: "Comercio",
        distancia: "0.15 km",
        descripcion: "Tiendas, restaurantes y servicios en terminal"
      },
      {
        nombre: "Hotel Terminal",
        tipo: "Hospedaje",
        distancia: "0.3 km",
        descripcion: "Alojamiento cerca de terminal para viajeros"
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
    id: 11,
    nombre: "Ruta del Mezcal",
    ubicacion: "Zona productora de mezcal",
    linea: "BRT Oaxaca",
    descripcion_turistica: "Acceso a destinos de la ruta mezcalera de Oaxaca, principales regiones productoras. Centro de producción y degustación del mezcal, espíritu destilado tradicional oaxaqueño con denominación de origen.",
    lugares_cercanos: [
      {
        nombre: "Mezcalerías Tradicionales",
        tipo: "Comercio",
        distancia: "0.5 km",
        descripcion: "Espacios de venta y degustación de mezcal artesanal"
      },
      {
        nombre: "Fábricas de Mezcal",
        tipo: "Producción",
        distancia: "1.0 km",
        descripcion: "Visitas a espacios donde se produce mezcal tradicional"
      },
      {
        nombre: "Museo del Mezcal",
        tipo: "Museo",
        distancia: "0.8 km",
        descripcion: "Historia y cultura del mezcal oaxaqueño"
      }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Visitas disponibles 10:00-18:00 en mezcalerías"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: false,
      rampas: true,
      banos_accesibles: true,
      notas: "Acceso a principales mezcalerías mediante rampas"
    }
  },
  {
    id: 12,
    nombre: "El Tule",
    ubicacion: "Árbol monumental",
    linea: "BRT Oaxaca",
    descripcion_turistica: "Acceso al Árbol del Tule, uno de los árboles más grandes del mundo por diámetro del tronco. Monumento natural milenario de Oaxaca con circunferencia de 58 metros, declarado patrimonio ambiental.",
    lugares_cercanos: [
      {
        nombre: "Árbol del Tule",
        tipo: "Monumento Natural",
        distancia: "0.2 km",
        descripcion: "Ahuehuete monumental con más de 2000 años de edad"
      },
      {
        nombre: "Templo Adyacente",
        tipo: "Templo",
        distancia: "0.15 km",
        descripcion: "Iglesia colonial al lado del árbol histórico"
      },
      {
        nombre: "Tienda de Recuerdos",
        tipo: "Comercio",
        distancia: "0.25 km",
        descripcion: "Venta de artesanías y souvenirs del Tule"
      }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Árbol y zona disponible durante horas diurnas"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: false,
      rampas: true,
      banos_accesibles: true,
      notas: "Rampa de acceso circular al árbol, baños disponibles"
    }
  }
];
