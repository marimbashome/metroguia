const slugify = (text) => {
  return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-').replace(/[^\w-]/g, '').replace(/-+/g, '-').replace(/^-|-$/g, '');
};

export const estacionesOaxaca = [
  {
    id: 1,
    nombre: "Aeropuerto",
    slug: "oaxaca-aeropuerto",
    ubicacion: "Entrada a Oaxaca",
    municipio: "Xoxocotlán",
    linea: "BRT Oaxaca",
    tipo_zona: "acceso",
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
    pois: [
      { nombre: "Terminal Aérea", tipo: "Transporte", distancia: "0.2 km" },
      { nombre: "Rental de Autos", tipo: "Servicios", distancia: "0.3 km" },
      { nombre: "Hotel Gateway", tipo: "Hospedaje", distancia: "0.5 km" }
    ],
    transferencias: [],
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
    },
    seo_title: "Aeropuerto de Oaxaca — BRT Oaxaca | MetroGuia",
    meta_description: "Aeropuerto de Oaxaca en BRT Oaxaca. Puerta de entrada con conexión directa al aeropuerto internacional Xoxocotlán.",
    h1: "Aeropuerto de Oaxaca — BRT Oaxaca",
    intro: "Puerta de entrada a Oaxaca con conexión directa al aeropuerto internacional Xoxocotlán.",
    tips: ["Llegue con anticipación para vuelos internacionales", "Rente vehículos en la terminal", "Hotel Gateway ofrece conexiones rápidas", "Servicios disponibles 24 horas"],
    mejor_horario: "Temprano para evitar traslados nocturnos",
    mundial_relevancia: "Acceso internacional para turistas del Mundial 2026"
  },
  {
    id: 2,
    nombre: "Centro Histórico",
    slug: "oaxaca-centro-historico",
    ubicacion: "Corazón cultural de Oaxaca",
    municipio: "Oaxaca de Juárez",
    linea: "BRT Oaxaca",
    tipo_zona: "histórico",
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
    pois: [
      { nombre: "Zócalo de Oaxaca", tipo: "Plaza Principal", distancia: "0.2 km" },
      { nombre: "Catedral Metropolitana", tipo: "Templo", distancia: "0.15 km" },
      { nombre: "Mercado Benito Juárez", tipo: "Mercado", distancia: "0.3 km" },
      { nombre: "Galerías de Arte", tipo: "Arte", distancia: "0.4 km" }
    ],
    transferencias: [],
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
    },
    seo_title: "Centro Histórico de Oaxaca — BRT Oaxaca | MetroGuia",
    meta_description: "Centro Histórico Patrimonio UNESCO. Zócalo, mercados tradicionales, galerías de arte y templos coloniales.",
    h1: "Centro Histórico de Oaxaca — BRT Oaxaca",
    intro: "Corazón cultural UNESCO con zócalo histórico, mercados tradicionales y arquitectura colonial.",
    tips: ["Visite el Zócalo al atardecer", "Explore el Mercado Benito Juárez para artesanías", "Las galerías abren después de las 10:00", "Pruebe la cocina oaxaqueña auténtica"],
    mejor_horario: "Mañana para evitar multitudes en mercados",
    mundial_relevancia: "Patrimonio cultural para turistas del Mundial 2026"
  },
  {
    id: 3,
    nombre: "Santo Domingo",
    slug: "oaxaca-santo-domingo",
    ubicacion: "Templo y museo",
    municipio: "Oaxaca de Juárez",
    linea: "BRT Oaxaca",
    tipo_zona: "cultural",
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
    pois: [
      { nombre: "Basílica de Santo Domingo", tipo: "Templo Histórico", distancia: "0.1 km" },
      { nombre: "Museo de las Culturas", tipo: "Museo", distancia: "0.15 km" },
      { nombre: "Jardín Etnobotánico", tipo: "Jardín", distancia: "0.25 km" },
      { nombre: "Galerías Artesanales", tipo: "Comercio", distancia: "0.3 km" }
    ],
    transferencias: [],
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
    },
    seo_title: "Santo Domingo — Basílica y Museo | BRT Oaxaca | MetroGuia",
    meta_description: "Basílica de Santo Domingo. Joya barroca con museo de culturas indígenas, textiles y jardín etnobotánico.",
    h1: "Santo Domingo — Basílica y Museo | BRT Oaxaca",
    intro: "Joya arquitectónica barroca con museo de arte religioso, textiles indígenas y jardín etnobotánico.",
    tips: ["Visite el museo 10:00-18:00", "Explore el Jardín Etnobotánico", "Las galerías artesanales venden directamente", "La decoración interior es excepcional"],
    mejor_horario: "Mañana para recorridos del museo",
    mundial_relevancia: "Patrimonio cultural para turistas internacionales"
  },
  {
    id: 4,
    nombre: "Monte Albán",
    slug: "oaxaca-monte-alban",
    ubicacion: "Zona arqueológica",
    municipio: "Oaxaca de Juárez",
    linea: "BRT Oaxaca",
    tipo_zona: "arqueologico",
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
    pois: [
      { nombre: "Zona Arqueológica Monte Albán", tipo: "Sitio Prehispánico", distancia: "0.5 km" },
      { nombre: "Museo de Sitio", tipo: "Museo", distancia: "0.3 km" },
      { nombre: "Mirador Panorámico", tipo: "Mirador", distancia: "0.4 km" }
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
      notas: "Senderos con rampas principales, baños accesibles en museo"
    },
    seo_title: "Monte Albán — Patrimonio UNESCO | BRT Oaxaca | MetroGuia",
    meta_description: "Zona arqueológica Patrimonio UNESCO. Capital zapoteca con pirámides, palacios y vistas del valle.",
    h1: "Monte Albán — Patrimonio UNESCO | BRT Oaxaca",
    intro: "Capital zapoteca Patrimonio UNESCO con pirámides milenarias y vistas panorámicas del valle.",
    tips: ["Llegue temprano para evitar calor", "Explore el Museo de Sitio", "El mirador panorámico tiene vistas excepcionales", "Lleve protección solar"],
    mejor_horario: "Temprano para exploración completa",
    mundial_relevancia: "Patrimonio arqueológico mundial"
  },
  {
    id: 5,
    nombre: "Mitla",
    slug: "oaxaca-mitla",
    ubicacion: "Zona arqueológica este",
    municipio: "Santa Catarina Mitla",
    linea: "BRT Oaxaca",
    tipo_zona: "arqueologico",
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
    pois: [
      { nombre: "Zona Arqueológica de Mitla", tipo: "Sitio Prehispánico", distancia: "0.3 km" },
      { nombre: "Capilla Colonial", tipo: "Templo", distancia: "0.2 km" },
      { nombre: "Tienda de Artesanías", tipo: "Comercio", distancia: "0.25 km" }
    ],
    transferencias: [],
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
    },
    seo_title: "Mitla — Centro Ceremonial Zapoteca | BRT Oaxaca | MetroGuia",
    meta_description: "Mitla, segundo sitio arqueológico de Oaxaca. Mosaicos de piedra y arquitectura decorativa única.",
    h1: "Mitla — Centro Ceremonial Zapoteca | BRT Oaxaca",
    intro: "Centro ceremonial zapoteca con patrones geométricos únicos en mosaicos de piedra.",
    tips: ["Explore los patrones geométricos de mosaicos", "Visite la Capilla Colonial", "Compre huipiles en tiendas de artesanías", "Lleve calzado cómodo para terrenos antiguos"],
    mejor_horario: "Mañana para fotografía clara",
    mundial_relevancia: "Arqueología prehispánica para turistas culturales"
  },
  {
    id: 6,
    nombre: "Hierve el Agua",
    slug: "oaxaca-hierve-el-agua",
    ubicacion: "Formaciones naturales",
    municipio: "Distritos de Oaxaca",
    linea: "BRT Oaxaca",
    tipo_zona: "natural",
    descripcion_turistica: "Acceso a las cascadas fosilizadas de Hierve el Agua, espectáculo natural único en Oaxaca. Formaciones minerales blancas que caen por la montaña, con piscinas naturales de agua termal.",
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
    pois: [
      { nombre: "Cascadas de Hierve el Agua", tipo: "Formación Natural", distancia: "0.4 km" },
      { nombre: "Piscinas Termales", tipo: "Baño Natural", distancia: "0.5 km" },
      { nombre: "Mirador de la Sierra", tipo: "Mirador", distancia: "0.3 km" }
    ],
    transferencias: [],
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
    },
    seo_title: "Hierve el Agua — Cascadas Fosilizadas | BRT Oaxaca | MetroGuia",
    meta_description: "Cascadas fosilizadas únicas con piscinas termales naturales y vista panorámica de la sierra.",
    h1: "Hierve el Agua — Cascadas Fosilizadas | BRT Oaxaca",
    intro: "Cascadas petrificadas formadas por minerales, con piscinas termales y vistas panorámicas.",
    tips: ["Nada en las piscinas termales 8:00-17:00", "Lleve traje de baño", "El mirador ofrece fotografía espectacular", "Piscinas tienen propiedades terapéuticas"],
    mejor_horario: "Mañana para piscinas tranquilas",
    mundial_relevancia: "Espectáculo natural para turismo de aventura"
  },
  {
    id: 7,
    nombre: "Mercado Benito Juárez",
    slug: "oaxaca-mercado-benito-juarez",
    ubicacion: "Centro histórico comercial",
    municipio: "Oaxaca de Juárez",
    linea: "BRT Oaxaca",
    tipo_zona: "comercial",
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
    pois: [
      { nombre: "Mercado Benito Juárez", tipo: "Mercado Tradicional", distancia: "0.1 km" },
      { nombre: "Puestos de Comida", tipo: "Gastronomía", distancia: "0.15 km" },
      { nombre: "Tiendas de Textiles", tipo: "Comercio", distancia: "0.2 km" }
    ],
    transferencias: [],
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
    },
    seo_title: "Mercado Benito Juárez — Comercio Tradicional | BRT Oaxaca | MetroGuia",
    meta_description: "Mercado tradicional emblemático. Textiles indígenas, alimentos frescos y comida oaxaqueña auténtica.",
    h1: "Mercado Benito Juárez — Comercio Tradicional | BRT Oaxaca",
    intro: "Mercado histórico con miles de vendedores de productos locales, textiles y gastronomía tradicional.",
    tips: ["Visite temprano para variedad máxima", "Pruebe mole negro y rojo", "Compre textiles directamente de vendedores", "Negocie precios cortésmente"],
    mejor_horario: "Temprano para productos frescos",
    mundial_relevancia: "Experiencia cultural auténtica para turistas"
  },
  {
    id: 8,
    nombre: "Mercado 20 de Noviembre",
    slug: "oaxaca-mercado-20-noviembre",
    ubicacion: "Centro comercial tradicional",
    municipio: "Oaxaca de Juárez",
    linea: "BRT Oaxaca",
    tipo_zona: "comercial",
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
    pois: [
      { nombre: "Mercado 20 de Noviembre", tipo: "Mercado de Alimentos", distancia: "0.15 km" },
      { nombre: "Comedores Tradicionales", tipo: "Gastronomía", distancia: "0.2 km" },
      { nombre: "Vendedores de Mole", tipo: "Gastronomía", distancia: "0.25 km" }
    ],
    transferencias: [],
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
    },
    seo_title: "Mercado 20 de Noviembre — Gastronomía | BRT Oaxaca | MetroGuia",
    meta_description: "Mercado de alimentos frescos con comedores caseros y vendedores de mole tradicional.",
    h1: "Mercado 20 de Noviembre — Gastronomía | BRT Oaxaca",
    intro: "Mercado especializado en alimentos frescos y gastronomía tradicional oaxaqueña.",
    tips: ["Prueba los comedores caseros", "Compra mole negro, rojo y amarillo", "Visita temprano para productos frescos", "Negocia precios en ingredientes"],
    mejor_horario: "Temprano para variedad máxima",
    mundial_relevancia: "Gastronomía auténtica para turistas culinarios"
  },
  {
    id: 9,
    nombre: "Andador Macedonio",
    slug: "oaxaca-andador-macedonio",
    ubicacion: "Paseo peatonal histórico",
    municipio: "Oaxaca de Juárez",
    linea: "BRT Oaxaca",
    tipo_zona: "peatonal",
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
    pois: [
      { nombre: "Andador Macedonio Alcalá", tipo: "Paseo Peatonal", distancia: "0.1 km" },
      { nombre: "Galerías de Arte Contemporáneo", tipo: "Arte", distancia: "0.2 km" },
      { nombre: "Cafeterías Históricas", tipo: "Gastronomía", distancia: "0.15 km" },
      { nombre: "Tiendas de Artesanías", tipo: "Comercio", distancia: "0.25 km" }
    ],
    transferencias: [],
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
    },
    seo_title: "Andador Macedonio — Paseo Histórico | BRT Oaxaca | MetroGuia",
    meta_description: "Calle peatonal histórica con galerías de arte, cafés coloniales y tiendas de artesanías.",
    h1: "Andador Macedonio — Paseo Histórico | BRT Oaxaca",
    intro: "Paseo peatonal histórico con galerías de arte, cafeterías coloniales y tiendas de artesanías.",
    tips: ["Explore galerías de arte contemporáneo", "Disfruta cafés tradicionales", "Compra artesanías de alta calidad", "Seguro para caminar de noche"],
    mejor_horario: "Tarde para galerías y cafés",
    mundial_relevancia: "Arte y cultura para turistas internacionales"
  },
  {
    id: 10,
    nombre: "Terminal ADO",
    slug: "oaxaca-terminal-ado",
    ubicacion: "Central de autobuses",
    municipio: "Oaxaca de Juárez",
    linea: "BRT Oaxaca",
    tipo_zona: "transporte",
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
    pois: [
      { nombre: "Terminal ADO", tipo: "Transporte", distancia: "0.1 km" },
      { nombre: "Servicios de Terminal", tipo: "Comercio", distancia: "0.15 km" },
      { nombre: "Hotel Terminal", tipo: "Hospedaje", distancia: "0.3 km" }
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
    seo_title: "Terminal ADO — Central de Autobuses | BRT Oaxaca | MetroGuia",
    meta_description: "Terminal foránea ADO. Conexiones a ciudades vecinas y regiones de México.",
    h1: "Terminal ADO — Central de Autobuses | BRT Oaxaca",
    intro: "Principal punto de llegada y salida de transporte foráneo en Oaxaca.",
    tips: ["Servicios disponibles 24 horas", "Compra boletos con anticipación", "Hotel Terminal cerca para conexiones", "Tiendas y restaurantes en terminal"],
    mejor_horario: "Mañana para viajes con menos tráfico",
    mundial_relevancia: "Hub de transporte para conexiones nacionales"
  },
  {
    id: 11,
    nombre: "Ruta del Mezcal",
    slug: "oaxaca-ruta-del-mezcal",
    ubicacion: "Zona productora de mezcal",
    municipio: "Oaxaca Central",
    linea: "BRT Oaxaca",
    tipo_zona: "gastronómico",
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
    pois: [
      { nombre: "Mezcalerías Tradicionales", tipo: "Comercio", distancia: "0.5 km" },
      { nombre: "Fábricas de Mezcal", tipo: "Producción", distancia: "1.0 km" },
      { nombre: "Museo del Mezcal", tipo: "Museo", distancia: "0.8 km" }
    ],
    transferencias: [],
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
    },
    seo_title: "Ruta del Mezcal — Degustación | BRT Oaxaca | MetroGuia",
    meta_description: "Ruta mezcalera con mezcalerías, fábricas tradicionales y museo. Degustación de mezcal artesanal.",
    h1: "Ruta del Mezcal — Degustación | BRT Oaxaca",
    intro: "Acceso a principales regiones productoras de mezcal con degustación artesanal.",
    tips: ["Degusta mezcal artesanal", "Visita fábricas tradicionales", "Explora el Museo del Mezcal", "Compra botellas de denominación de origen"],
    mejor_horario: "Tarde para degustaciones",
    mundial_relevancia: "Gastronomía tradicional para turistas de bebidas"
  },
  {
    id: 12,
    nombre: "El Tule",
    slug: "oaxaca-el-tule",
    ubicacion: "Árbol monumental",
    municipio: "Santa Catarina Tule",
    linea: "BRT Oaxaca",
    tipo_zona: "natural",
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
    pois: [
      { nombre: "Árbol del Tule", tipo: "Monumento Natural", distancia: "0.2 km" },
      { nombre: "Templo Adyacente", tipo: "Templo", distancia: "0.15 km" },
      { nombre: "Tienda de Recuerdos", tipo: "Comercio", distancia: "0.25 km" }
    ],
    transferencias: [],
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
    },
    seo_title: "El Tule — Árbol Monumental | BRT Oaxaca | MetroGuia",
    meta_description: "Árbol del Tule, uno de los más grandes del mundo. Monumento natural milenario con 58m de circunferencia.",
    h1: "El Tule — Árbol Monumental | BRT Oaxaca",
    intro: "Árbol del Tule, monumento natural milenario con circunferencia de 58 metros.",
    tips: ["Visita la rampa circular", "Fotografía desde diferentes ángulos", "Explora el templo colonial adyacente", "Compra souvenirs locales"],
    mejor_horario: "Mañana para fotografía clara",
    mundial_relevancia: "Monumento natural para turistas de ecología"
  }
];
