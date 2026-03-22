export const estacionesGDL = [
  // LÍNEA 1 (Roja) - 20 estaciones
  {
    slug: "auditorio",
    nombre: "Auditorio",
    linea: "1",
    municipio: "Zapopan",
    tipo_zona: "cultural-turistico",
    pois: [
      { nombre: "Auditorio de Guadalajara", tipo: "auditorio", distancia: "2 min caminando" },
      { nombre: "Complejo Jorge Matute Remus", tipo: "deportes", distancia: "5 min caminando" }
    ],
    transferencias: ["3"],
    seo_title: "Estación Auditorio Metro Guadalajara — Guía turística | MetroGuia",
    meta_description: "Estación Auditorio de la Línea 1 del Tren Ligero de Guadalajara. Acceso a eventos culturales y deportivos. Horarios, conexiones y guía turística.",
    h1: "Estación Auditorio — Línea 1 del Metro de Guadalajara",
    intro: "Estación terminal norte de la Línea 1, punto de acceso a equipamientos culturales y deportivos de Zapopan. Zona administrativa y de esparcimiento.",
    tips: ["Acceso a eventos en el Auditorio de Guadalajara", "Zona con bancos y comercios", "Estacionamiento disponible"],
    mejor_horario: "Mañana para evitar aglomeración",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "periferico-norte",
    nombre: "Periférico Norte",
    linea: "1",
    municipio: "Zapopan",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Centro Comercial Andares", tipo: "comercio", distancia: "10 min caminando" },
      { nombre: "Paseo Periférico", tipo: "comercio", distancia: "5 min caminando" }
    ],
    transferencias: [],
    seo_title: "Estación Periférico Norte — Metro Guadalajara | MetroGuia",
    meta_description: "Estación Periférico Norte de la Línea 1. Acceso a centros comerciales y zonas de compra en la periferia norte de Guadalajara.",
    h1: "Estación Periférico Norte — Línea 1",
    intro: "Zona comercial importante con acceso a grandes centros comerciales y tiendas. Punto de conexión con transporte periférico.",
    tips: ["Acceso a centros comerciales", "Varias opciones de restaurantes", "Zona segura y bien iluminada"],
    mejor_horario: "Tarde para evitar trabajo",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "mexicaltzingo",
    nombre: "Mexicaltzingo",
    linea: "1",
    municipio: "Guadalajara",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Avenida Mexicaltzingo", tipo: "comercio", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "Estación Mexicaltzingo — Metro Guadalajara | MetroGuia",
    meta_description: "Estación Mexicaltzingo de la Línea 1 del Tren Ligero. Acceso a zona comercial y tiendas en el centro de Guadalajara.",
    h1: "Estación Mexicaltzingo — Línea 1",
    intro: "Estación de la Línea 1 ubicada en zona comercial central. Punto de acceso a tiendas y servicios de la avenida principal.",
    tips: ["Zona comercial activa", "Acceso a restaurantes locales", "Cerca del centro histórico"],
    mejor_horario: "Mañana o tarde",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "avila-camacho",
    nombre: "Ávila Camacho",
    linea: "1",
    municipio: "Guadalajara",
    tipo_zona: "historico",
    pois: [
      { nombre: "Barrio San Jacinto", tipo: "historico", distancia: "8 min caminando" },
      { nombre: "Centro Histórico", tipo: "cultural-turistico", distancia: "15 min caminando" }
    ],
    transferencias: ["2", "3"],
    seo_title: "Estación Ávila Camacho — Metro Guadalajara | MetroGuia",
    meta_description: "Estación Ávila Camacho con conexiones a Líneas 2 y 3. Acceso a barrios históricos y centro cultural de Guadalajara.",
    h1: "Estación Ávila Camacho — Línea 1 (Conexión L2, L3)",
    intro: "Nodo importante de conexión entre tres líneas del SITEUR. Centro de acceso a barrios históricos y zonas culturales de Guadalajara.",
    tips: ["Conexión con Línea 2 y Línea 3", "Acceso a barrio San Jacinto", "Comercios y restaurantes cercanos"],
    mejor_horario: "Mañana para visitas turísticas",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "juarez",
    nombre: "Juárez",
    linea: "1",
    municipio: "Guadalajara",
    tipo_zona: "historico",
    pois: [
      { nombre: "Centro Histórico de Guadalajara", tipo: "cultural-turistico", distancia: "3 min caminando" },
      { nombre: "Catedral Metropolitana", tipo: "cultural-turistico", distancia: "5 min caminando" },
      { nombre: "Teatro Degollado", tipo: "cultural-turistico", distancia: "5 min caminando" }
    ],
    transferencias: ["2"],
    seo_title: "Estación Juárez — Metro Guadalajara | MetroGuia",
    meta_description: "Estación Juárez con acceso al Centro Histórico de Guadalajara, Catedral y Teatro Degollado. Punto turístico principal.",
    h1: "Estación Juárez — Línea 1 (Conexión L2)",
    intro: "Corazón del centro histórico de Guadalajara. Acceso directo a monumentos históricos, plazas y sitios de interés cultural.",
    tips: ["Catedral Metropolitana a 5 min", "Teatro Degollado cercano", "Plazas y jardines históricos", "Centro de información turística"],
    mejor_horario: "Mañana o tarde para explorar monumentos",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "washington",
    nombre: "Washington",
    linea: "1",
    municipio: "Guadalajara",
    tipo_zona: "historico",
    pois: [
      { nombre: "Barrio de la Santa María", tipo: "historico", distancia: "5 min caminando" },
      { nombre: "Museo Regional de Guadalajara", tipo: "museo", distancia: "8 min caminando" }
    ],
    transferencias: [],
    seo_title: "Estación Washington — Metro Guadalajara | MetroGuia",
    meta_description: "Estación Washington de la Línea 1. Acceso a barrios históricos y museos de Guadalajara.",
    h1: "Estación Washington — Línea 1",
    intro: "Zona histórica con acceso a barrios tradicionales y espacios culturales. Importante para explorar la Guadalajara colonial.",
    tips: ["Barrio histórico cerca", "Museos locales", "Gastronomía tradicional jalisciense"],
    mejor_horario: "Mañana para visitas culturales",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "mezquitan",
    nombre: "Mezquitán",
    linea: "1",
    municipio: "Guadalajara",
    tipo_zona: "historico",
    pois: [
      { nombre: "Avenida Mezquitán", tipo: "comercio", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "Estación Mezquitán — Metro Guadalajara | MetroGuia",
    meta_description: "Estación Mezquitán de la Línea 1. Zona comercial y residencial de Guadalajara.",
    h1: "Estación Mezquitán — Línea 1",
    intro: "Estación ubicada en zona comercial y residencial. Punto de acceso a tiendas y servicios locales.",
    tips: ["Zona comercial activa", "Restaurantes cercanos", "Acceso a residencias"],
    mejor_horario: "Tarde",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "san-juan-de-dios",
    nombre: "San Juan de Dios",
    linea: "1",
    municipio: "Guadalajara",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Mercado San Juan de Dios", tipo: "mercado", distancia: "2 min caminando" }
    ],
    transferencias: ["2"],
    seo_title: "Estación San Juan de Dios — Metro Guadalajara | MetroGuia",
    meta_description: "Estación San Juan de Dios con acceso al mercado tradicional. Línea 1 con conexión a Línea 2.",
    h1: "Estación San Juan de Dios — Línea 1 (Conexión L2)",
    intro: "Acceso al icónico Mercado San Juan de Dios, uno de los mercados tradicionales más importantes de Guadalajara.",
    tips: ["Mercado tradicional con comida local", "Artesanías y productos típicos", "Experiencia auténtica tapatía"],
    mejor_horario: "Mañana para compras y comida local",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "belisario-dominguez",
    nombre: "Belisario Domínguez",
    linea: "1",
    municipio: "Guadalajara",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Avenida Belisario Domínguez", tipo: "comercio", distancia: "2 min caminando" }
    ],
    transferencias: ["2"],
    seo_title: "Estación Belisario Domínguez — Metro Guadalajara | MetroGuia",
    meta_description: "Estación Belisario Domínguez de la Línea 1 con conexión a Línea 2. Zona comercial.",
    h1: "Estación Belisario Domínguez — Línea 1 (Conexión L2)",
    intro: "Estación de conexión entre Línea 1 y Línea 2. Zona comercial con tiendas y servicios.",
    tips: ["Conexión con Línea 2", "Zona comercial activa", "Acceso a restaurantes"],
    mejor_horario: "Tarde",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "cristobal-de-onate",
    nombre: "Cristóbal de Oñate",
    linea: "1",
    municipio: "Guadalajara",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Avenida Cristóbal de Oñate", tipo: "comercio", distancia: "2 min caminando" }
    ],
    transferencias: ["2"],
    seo_title: "Estación Cristóbal de Oñate — Metro Guadalajara | MetroGuia",
    meta_description: "Estación Cristóbal de Oñate de la Línea 1 con conexión a Línea 2.",
    h1: "Estación Cristóbal de Oñate — Línea 1 (Conexión L2)",
    intro: "Estación comercial con conexión a la Línea 2. Punto importante para acceder a diferentes zonas de la ciudad.",
    tips: ["Conexión con Línea 2", "Comercios y tiendas", "Fácil acceso a otras líneas"],
    mejor_horario: "Tarde",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "la-aurora",
    nombre: "La Aurora",
    linea: "1",
    municipio: "Guadalajara",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Paseo la Aurora", tipo: "comercio", distancia: "3 min caminando" }
    ],
    transferencias: ["2"],
    seo_title: "Estación La Aurora — Metro Guadalajara | MetroGuia",
    meta_description: "Estación La Aurora de la Línea 1. Acceso a zona comercial y conexión con Línea 2.",
    h1: "Estación La Aurora — Línea 1 (Conexión L2)",
    intro: "Zona comercial con tiendas y centros de compra. Punto de conexión entre Línea 1 y Línea 2.",
    tips: ["Centros comerciales cercanos", "Zona de compras", "Restaurantes variados"],
    mejor_horario: "Tarde",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "plaza-universidad",
    nombre: "Plaza Universidad",
    linea: "1",
    municipio: "Guadalajara",
    tipo_zona: "cultural-turistico",
    pois: [
      { nombre: "Universidad de Guadalajara", tipo: "educacion", distancia: "5 min caminando" },
      { nombre: "Rectoría Universidad de Guadalajara", tipo: "cultural-turistico", distancia: "7 min caminando" }
    ],
    transferencias: ["2", "3"],
    seo_title: "Estación Plaza Universidad — Metro Guadalajara | MetroGuia",
    meta_description: "Estación Plaza Universidad con conexión a Líneas 2 y 3. Acceso a Universidad de Guadalajara.",
    h1: "Estación Plaza Universidad — Línea 1 (Conexión L2, L3)",
    intro: "Nodo importante de conexión entre Línea 1, 2 y 3. Centro académico y cultural de Guadalajara.",
    tips: ["Conexión con Línea 2 y Línea 3", "Campus universitario", "Biblioteca y centros de estudio", "Zona segura y bien atendida"],
    mejor_horario: "Mañana para actividades académicas",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "san-andrés",
    nombre: "San Andrés",
    linea: "1",
    municipio: "Guadalajara",
    tipo_zona: "historico",
    pois: [
      { nombre: "Barrio San Andrés", tipo: "historico", distancia: "3 min caminando" },
      { nombre: "Templo de San Andrés", tipo: "cultural-turistico", distancia: "5 min caminando" }
    ],
    transferencias: ["2"],
    seo_title: "Estación San Andrés — Metro Guadalajara | MetroGuia",
    meta_description: "Estación San Andrés de la Línea 1. Acceso a barrio histórico y templo tradicional.",
    h1: "Estación San Andrés — Línea 1 (Conexión L2)",
    intro: "Acceso a barrio histórico tradicional con arquitectura colonial. Zona de importancia cultural.",
    tips: ["Barrio histórico tradicional", "Templo colonial", "Gastronomía local", "Comercios artesanales"],
    mejor_horario: "Mañana o tarde",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "san-jacinto",
    nombre: "San Jacinto",
    linea: "1",
    municipio: "Guadalajara",
    tipo_zona: "historico",
    pois: [
      { nombre: "Barrio San Jacinto", tipo: "historico", distancia: "2 min caminando" }
    ],
    transferencias: ["2"],
    seo_title: "Estación San Jacinto — Metro Guadalajara | MetroGuia",
    meta_description: "Estación San Jacinto de la Línea 1. Acceso a barrio artístico y cultural.",
    h1: "Estación San Jacinto — Línea 1 (Conexión L2)",
    intro: "Acceso al colorido barrio San Jacinto, conocido por sus galerías de arte y tiendas tradicionales.",
    tips: ["Barrio artístico muy vibrante", "Galerías de arte local", "Tiendas de artesanía", "Restaurantes tradicionales tapatíos"],
    mejor_horario: "Tarde para disfrutar vida nocturna",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "transferencia",
    nombre: "Transferencia",
    linea: "1",
    municipio: "Tlaquepaque",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Avenida Transferencia", tipo: "comercio", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "Estación Transferencia — Metro Guadalajara | MetroGuia",
    meta_description: "Estación Transferencia de la Línea 1. Zona de conexión de rutas de autobús.",
    h1: "Estación Transferencia — Línea 1",
    intro: "Centro de transferencia de rutas de transporte público. Importante nodo de conexión en Tlaquepaque.",
    tips: ["Centro de transferencias", "Múltiples líneas de autobús", "Información de rutas"],
    mejor_horario: "Mañana o tarde",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "lino-portes-gil",
    nombre: "Lino Portes Gil",
    linea: "1",
    municipio: "Tlaquepaque",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Zona comercial Tlaquepaque", tipo: "comercio", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Estación Lino Portes Gil — Metro Guadalajara | MetroGuia",
    meta_description: "Estación Lino Portes Gil de la Línea 1 en Tlaquepaque.",
    h1: "Estación Lino Portes Gil — Línea 1",
    intro: "Estación ubicada en zona comercial de Tlaquepaque. Acceso a tiendas y servicios locales.",
    tips: ["Zona comercial activa", "Tiendas de cerámica tradicional", "Mercado local"],
    mejor_horario: "Tarde",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "santa-isabel",
    nombre: "Santa Isabel",
    linea: "1",
    municipio: "Tlaquepaque",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Centro de Tlaquepaque", tipo: "comercio", distancia: "5 min caminando" }
    ],
    transferencias: [],
    seo_title: "Estación Santa Isabel — Metro Guadalajara | MetroGuia",
    meta_description: "Estación Santa Isabel de la Línea 1 en Tlaquepaque.",
    h1: "Estación Santa Isabel — Línea 1",
    intro: "Zona de Tlaquepaque con acceso a centros comerciales y tiendas de artesanía local.",
    tips: ["Artesanías locales", "Tiendas de cerámica", "Comercio tradicional"],
    mejor_horario: "Tarde",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "rio-nilo",
    nombre: "Río Nilo",
    linea: "1",
    municipio: "Tlaquepaque",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Avenida Río Nilo", tipo: "comercio", distancia: "2 min caminando" }
    ],
    transferencias: ["3"],
    seo_title: "Estación Río Nilo — Metro Guadalajara | MetroGuia",
    meta_description: "Estación Río Nilo de la Línea 1 con conexión a Línea 3.",
    h1: "Estación Río Nilo — Línea 1 (Conexión L3)",
    intro: "Estación con conexión a la Línea 3. Zona comercial en Tlaquepaque.",
    tips: ["Conexión con Línea 3", "Tiendas y comercios", "Acceso a diferentes zonas"],
    mejor_horario: "Tarde",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "periferico-sur",
    nombre: "Periférico Sur",
    linea: "1",
    municipio: "Tlaquepaque",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Paseo Periférico Sur", tipo: "comercio", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Estación Periférico Sur — Metro Guadalajara | MetroGuia",
    meta_description: "Estación Periférico Sur de la Línea 1. Terminal sur del tren ligero.",
    h1: "Estación Periférico Sur — Línea 1 (Terminal)",
    intro: "Estación terminal sur de la Línea 1. Importante nodo de conexión con transporte periférico.",
    tips: ["Terminal de la línea", "Estacionamiento", "Autobuses de conexión", "Acceso a zonas periféricas"],
    mejor_horario: "Mañana o tarde",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  // LÍNEA 2 (Verde) - 10 estaciones
  {
    slug: "tetlan",
    nombre: "Tetlán",
    linea: "2",
    municipio: "Guadalajara",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Zona comercial Tetlán", tipo: "comercio", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Estación Tetlán — Metro Guadalajara | MetroGuia",
    meta_description: "Estación Tetlán de la Línea 2 del Tren Ligero. Terminal oriente.",
    h1: "Estación Tetlán — Línea 2 (Terminal)",
    intro: "Estación terminal oriente de la Línea 2. Importante punto de acceso a zona comercial.",
    tips: ["Terminal de la línea", "Zona comercial activa", "Estacionamiento disponible"],
    mejor_horario: "Tarde",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "la-aurora-l2",
    nombre: "La Aurora",
    linea: "2",
    municipio: "Guadalajara",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Paseo la Aurora", tipo: "comercio", distancia: "2 min caminando" }
    ],
    transferencias: ["1"],
    seo_title: "Estación La Aurora — Metro Guadalajara (Línea 2) | MetroGuia",
    meta_description: "Estación La Aurora de la Línea 2. Conexión con Línea 1.",
    h1: "Estación La Aurora — Línea 2 (Conexión L1)",
    intro: "Estación de conexión entre Línea 1 y Línea 2. Zona comercial importante.",
    tips: ["Conexión con Línea 1", "Centros comerciales", "Restaurantes variados"],
    mejor_horario: "Tarde",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "san-jacinto-l2",
    nombre: "San Jacinto",
    linea: "2",
    municipio: "Guadalajara",
    tipo_zona: "historico",
    pois: [
      { nombre: "Barrio San Jacinto", tipo: "historico", distancia: "2 min caminando" }
    ],
    transferencias: ["1"],
    seo_title: "Estación San Jacinto — Metro Guadalajara (Línea 2) | MetroGuia",
    meta_description: "Estación San Jacinto de la Línea 2. Barrio artístico con galerías.",
    h1: "Estación San Jacinto — Línea 2 (Conexión L1)",
    intro: "Acceso al vibrante barrio San Jacinto, centro de arte y cultura local.",
    tips: ["Barrio artístico muy colorido", "Galerías de arte", "Tiendas de artesanía", "Vida nocturna activa"],
    mejor_horario: "Tarde para disfrutar el barrio",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "san-andres-l2",
    nombre: "San Andrés",
    linea: "2",
    municipio: "Guadalajara",
    tipo_zona: "historico",
    pois: [
      { nombre: "Barrio San Andrés", tipo: "historico", distancia: "2 min caminando" },
      { nombre: "Templo de San Andrés", tipo: "cultural-turistico", distancia: "3 min caminando" }
    ],
    transferencias: ["1"],
    seo_title: "Estación San Andrés — Metro Guadalajara (Línea 2) | MetroGuia",
    meta_description: "Estación San Andrés de la Línea 2. Barrio histórico tradicional.",
    h1: "Estación San Andrés — Línea 2 (Conexión L1)",
    intro: "Barrio histórico con arquitectura colonial y tiendas tradicionales.",
    tips: ["Barrio histórico auténtico", "Templo colonial", "Gastronomía local", "Comercios artesanales"],
    mejor_horario: "Mañana o tarde",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "cristobal-de-onate-l2",
    nombre: "Cristóbal de Oñate",
    linea: "2",
    municipio: "Guadalajara",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Avenida Cristóbal de Oñate", tipo: "comercio", distancia: "2 min caminando" }
    ],
    transferencias: ["1"],
    seo_title: "Estación Cristóbal de Oñate — Metro Guadalajara (Línea 2) | MetroGuia",
    meta_description: "Estación Cristóbal de Oñate de la Línea 2. Zona comercial central.",
    h1: "Estación Cristóbal de Oñate — Línea 2 (Conexión L1)",
    intro: "Zona comercial central con conexión a múltiples líneas.",
    tips: ["Zona comercial activa", "Tiendas y servicios", "Fácil acceso a otras líneas"],
    mejor_horario: "Tarde",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "belisario-dominguez-l2",
    nombre: "Belisario Domínguez",
    linea: "2",
    municipio: "Guadalajara",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Avenida Belisario Domínguez", tipo: "comercio", distancia: "2 min caminando" }
    ],
    transferencias: ["1"],
    seo_title: "Estación Belisario Domínguez — Metro Guadalajara (Línea 2) | MetroGuia",
    meta_description: "Estación Belisario Domínguez de la Línea 2. Zona comercial.",
    h1: "Estación Belisario Domínguez — Línea 2 (Conexión L1)",
    intro: "Estación comercial con conexión a Línea 1.",
    tips: ["Conexión con Línea 1", "Zona comercial activa", "Restaurantes cercanos"],
    mejor_horario: "Tarde",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "san-juan-de-dios-l2",
    nombre: "San Juan de Dios",
    linea: "2",
    municipio: "Guadalajara",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Mercado San Juan de Dios", tipo: "mercado", distancia: "2 min caminando" }
    ],
    transferencias: ["1"],
    seo_title: "Estación San Juan de Dios — Metro Guadalajara (Línea 2) | MetroGuia",
    meta_description: "Estación San Juan de Dios con acceso al mercado tradicional.",
    h1: "Estación San Juan de Dios — Línea 2 (Conexión L1)",
    intro: "Acceso al icónico Mercado San Juan de Dios, mercado tradicional de Guadalajara.",
    tips: ["Mercado tradicional auténtico", "Comida local", "Artesanías", "Experiencia tapatía genuina"],
    mejor_horario: "Mañana para compras",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "plaza-universidad-l2",
    nombre: "Plaza Universidad",
    linea: "2",
    municipio: "Guadalajara",
    tipo_zona: "cultural-turistico",
    pois: [
      { nombre: "Universidad de Guadalajara", tipo: "educacion", distancia: "5 min caminando" },
      { nombre: "Rectoría", tipo: "cultural-turistico", distancia: "7 min caminando" }
    ],
    transferencias: ["1", "3"],
    seo_title: "Estación Plaza Universidad — Metro Guadalajara (Línea 2) | MetroGuia",
    meta_description: "Estación Plaza Universidad con conexión a Líneas 1 y 3. Centro académico.",
    h1: "Estación Plaza Universidad — Línea 2 (Conexión L1, L3)",
    intro: "Nodo de conexión importante entre tres líneas. Centro académico y cultural.",
    tips: ["Conexión con Línea 1 y Línea 3", "Campus universitario", "Biblioteca y centros de estudio", "Información turística"],
    mejor_horario: "Mañana",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "juarez-l2",
    nombre: "Juárez",
    linea: "2",
    municipio: "Guadalajara",
    tipo_zona: "historico",
    pois: [
      { nombre: "Centro Histórico de Guadalajara", tipo: "cultural-turistico", distancia: "3 min caminando" },
      { nombre: "Catedral Metropolitana", tipo: "cultural-turistico", distancia: "5 min caminando" },
      { nombre: "Teatro Degollado", tipo: "cultural-turistico", distancia: "5 min caminando" }
    ],
    transferencias: ["1"],
    seo_title: "Estación Juárez — Metro Guadalajara (Línea 2) | MetroGuia",
    meta_description: "Estación Juárez terminal poniente de Línea 2. Centro Histórico de Guadalajara.",
    h1: "Estación Juárez — Línea 2 (Terminal, Conexión L1)",
    intro: "Terminal poniente de Línea 2. Acceso principal al Centro Histórico de Guadalajara.",
    tips: ["Catedral Metropolitana a 5 min", "Teatro Degollado cercano", "Plazas históricas", "Centro de información turística"],
    mejor_horario: "Mañana o tarde para explorar monumentos",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  // LÍNEA 3 (Naranja/Dorada) - 18 estaciones
  {
    slug: "arcos-de-zapopan",
    nombre: "Arcos de Zapopan",
    linea: "3",
    municipio: "Zapopan",
    tipo_zona: "cultural-turistico",
    pois: [
      { nombre: "Arcos de Zapopan", tipo: "cultural-turistico", distancia: "2 min caminando" },
      { nombre: "Basílica de Zapopan", tipo: "cultural-turistico", distancia: "5 min caminando" }
    ],
    transferencias: ["1"],
    seo_title: "Estación Arcos de Zapopan — Metro Guadalajara | MetroGuia",
    meta_description: "Estación Arcos de Zapopan de la Línea 3. Terminal norte. Acceso a Basílica.",
    h1: "Estación Arcos de Zapopan — Línea 3 (Terminal)",
    intro: "Estación terminal norte de Línea 3. Acceso a los emblemáticos Arcos de Zapopan y la Basílica.",
    tips: ["Arcos de Zapopan icónicos", "Basílica de Zapopan", "Centro de Zapopan", "Comercio local"],
    mejor_horario: "Mañana para visitar basílica",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "zapopan-centro",
    nombre: "Zapopan Centro",
    linea: "3",
    municipio: "Zapopan",
    tipo_zona: "comercial-cultural",
    pois: [
      { nombre: "Centro de Zapopan", tipo: "comercio", distancia: "2 min caminando" },
      { nombre: "Plazas y jardines", tipo: "parque", distancia: "5 min caminando" }
    ],
    transferencias: [],
    seo_title: "Estación Zapopan Centro — Metro Guadalajara | MetroGuia",
    meta_description: "Estación Zapopan Centro de la Línea 3. Centro comercial de Zapopan.",
    h1: "Estación Zapopan Centro — Línea 3",
    intro: "Centro de Zapopan con zona comercial y cultural importante.",
    tips: ["Centro comercial de Zapopan", "Tiendas locales", "Restaurantes variados", "Plazas públicas"],
    mejor_horario: "Tarde",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "plaza-patria",
    nombre: "Plaza Patria",
    linea: "3",
    municipio: "Zapopan",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Plaza Patria", tipo: "comercio", distancia: "2 min caminando" },
      { nombre: "Centro comercial", tipo: "comercio", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Estación Plaza Patria — Metro Guadalajara | MetroGuia",
    meta_description: "Estación Plaza Patria de la Línea 3. Centro comercial importante.",
    h1: "Estación Plaza Patria — Línea 3",
    intro: "Centro comercial importante de la zona norte de Guadalajara.",
    tips: ["Centro comercial Plaza Patria", "Tiendas departamentales", "Restaurantes y cines", "Zona segura y bien atendida"],
    mejor_horario: "Tarde para compras",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "santuario",
    nombre: "Santuario",
    linea: "3",
    municipio: "Zapopan",
    tipo_zona: "cultural-turistico",
    pois: [
      { nombre: "Santuario", tipo: "cultural-turistico", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Estación Santuario — Metro Guadalajara | MetroGuia",
    meta_description: "Estación Santuario de la Línea 3. Zona religiosa y cultural.",
    h1: "Estación Santuario — Línea 3",
    intro: "Zona de importancia religiosa y cultural con acceso a sitios de interés espiritual.",
    tips: ["Sitios religiosos", "Zona cultural", "Comercio local", "Restaurantes tradicionales"],
    mejor_horario: "Mañana",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "independencia",
    nombre: "Independencia",
    linea: "3",
    municipio: "Zapopan",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Avenida Independencia", tipo: "comercio", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "Estación Independencia — Metro Guadalajara | MetroGuia",
    meta_description: "Estación Independencia de la Línea 3. Zona comercial de Zapopan.",
    h1: "Estación Independencia — Línea 3",
    intro: "Zona comercial ubicada en Zapopan con tiendas y servicios.",
    tips: ["Zona comercial activa", "Tiendas y restaurantes", "Acceso fácil a otras zonas"],
    mejor_horario: "Tarde",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "guadalajara-centro",
    nombre: "Guadalajara Centro",
    linea: "3",
    municipio: "Guadalajara",
    tipo_zona: "historico",
    pois: [
      { nombre: "Centro Histórico de Guadalajara", tipo: "cultural-turistico", distancia: "3 min caminando" },
      { nombre: "Catedral Metropolitana", tipo: "cultural-turistico", distancia: "5 min caminando" }
    ],
    transferencias: [],
    seo_title: "Estación Guadalajara Centro — Metro Guadalajara | MetroGuia",
    meta_description: "Estación Guadalajara Centro de la Línea 3. Centro Histórico.",
    h1: "Estación Guadalajara Centro — Línea 3",
    intro: "Acceso al Centro Histórico de Guadalajara. Corazón cultural de la ciudad.",
    tips: ["Centro Histórico de Guadalajara", "Catedral Metropolitana", "Teatro Degollado", "Plazas y jardines históricos"],
    mejor_horario: "Mañana o tarde",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "la-normal",
    nombre: "La Normal",
    linea: "3",
    municipio: "Guadalajara",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Zona comercial La Normal", tipo: "comercio", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Estación La Normal — Metro Guadalajara | MetroGuia",
    meta_description: "Estación La Normal de la Línea 3. Zona comercial de Guadalajara.",
    h1: "Estación La Normal — Línea 3",
    intro: "Zona comercial con tiendas y servicios para toda la familia.",
    tips: ["Zona comercial activa", "Tiendas diversas", "Restaurantes cercanos"],
    mejor_horario: "Tarde",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "avila-camacho-l3",
    nombre: "Ávila Camacho",
    linea: "3",
    municipio: "Guadalajara",
    tipo_zona: "historico",
    pois: [
      { nombre: "Barrio San Jacinto", tipo: "historico", distancia: "8 min caminando" }
    ],
    transferencias: ["1", "2"],
    seo_title: "Estación Ávila Camacho — Metro Guadalajara (Línea 3) | MetroGuia",
    meta_description: "Estación Ávila Camacho de la Línea 3 con conexión a Líneas 1 y 2.",
    h1: "Estación Ávila Camacho — Línea 3 (Conexión L1, L2)",
    intro: "Nodo importante de conexión entre Línea 1, 2 y 3. Acceso a barrios históricos.",
    tips: ["Conexión con Línea 1 y Línea 2", "Barrios históricos cercanos", "Comercios y restaurantes"],
    mejor_horario: "Mañana o tarde",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "plaza-universidad-l3",
    nombre: "Plaza Universidad",
    linea: "3",
    municipio: "Guadalajara",
    tipo_zona: "cultural-turistico",
    pois: [
      { nombre: "Universidad de Guadalajara", tipo: "educacion", distancia: "5 min caminando" }
    ],
    transferencias: ["1", "2"],
    seo_title: "Estación Plaza Universidad — Metro Guadalajara (Línea 3) | MetroGuia",
    meta_description: "Estación Plaza Universidad de la Línea 3 con conexión a Líneas 1 y 2.",
    h1: "Estación Plaza Universidad — Línea 3 (Conexión L1, L2)",
    intro: "Centro académico y cultural con conexión a múltiples líneas.",
    tips: ["Conexión con Línea 1 y Línea 2", "Campus universitario", "Biblioteca", "Servicios académicos"],
    mejor_horario: "Mañana",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "cucei",
    nombre: "CUCEI",
    linea: "3",
    municipio: "Guadalajara",
    tipo_zona: "cultural-turistico",
    pois: [
      { nombre: "Centro Universitario de Ciencias Exactas e Ingenierías", tipo: "educacion", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "Estación CUCEI — Metro Guadalajara | MetroGuia",
    meta_description: "Estación CUCEI de la Línea 3. Centro universitario de Ciencias.",
    h1: "Estación CUCEI — Línea 3",
    intro: "Acceso al Centro Universitario de Ciencias Exactas e Ingenierías de la Universidad de Guadalajara.",
    tips: ["Campus CUCEI", "Centro académico", "Biblioteca universitaria", "Servicios estudiantiles"],
    mejor_horario: "Mañana",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "rio-nilo-l3",
    nombre: "Río Nilo",
    linea: "3",
    municipio: "Tlaquepaque",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Avenida Río Nilo", tipo: "comercio", distancia: "2 min caminando" }
    ],
    transferencias: ["1"],
    seo_title: "Estación Río Nilo — Metro Guadalajara (Línea 3) | MetroGuia",
    meta_description: "Estación Río Nilo de la Línea 3 con conexión a Línea 1.",
    h1: "Estación Río Nilo — Línea 3 (Conexión L1)",
    intro: "Zona comercial con conexión a Línea 1 en Tlaquepaque.",
    tips: ["Conexión con Línea 1", "Zona comercial activa", "Tiendas y restaurantes"],
    mejor_horario: "Tarde",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "estadio-chivas",
    nombre: "Estadio Chivas (Estadio Akron)",
    linea: "3",
    municipio: "Zapopan",
    tipo_zona: "deportes",
    pois: [
      { nombre: "Estadio Akron", tipo: "estadio", distancia: "20 min caminando" }
    ],
    transferencias: ["Mi Macro Periférico"],
    seo_title: "Estación Estadio Chivas (Akron) — Metro Guadalajara | MetroGuia",
    meta_description: "Estación Estadio Chivas de la Línea 3. Acceso al Estadio Akron. Partidos FIFA 2026.",
    h1: "Estación Estadio Chivas — Línea 3",
    intro: "Estación más cercana al Estadio Akron. Punto de acceso para eventos deportivos y partidos del Mundial 2026.",
    tips: ["Partidos de Chivas", "Eventos especiales", "A 20 min a pie del Estadio Akron", "Transporte Mi Macro Periférico disponible"],
    mejor_horario: "Hora del partido",
    mundial_relevancia: "Estación de acceso al Estadio Akron. Desde aquí tomar Mi Macro Periférico hasta Estadio Chivas o caminar 20 minutos."
  },
  {
    slug: "mariano-otero",
    nombre: "Mariano Otero",
    linea: "3",
    municipio: "Zapopan",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Zona comercial Mariano Otero", tipo: "comercio", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Estación Mariano Otero — Metro Guadalajara | MetroGuia",
    meta_description: "Estación Mariano Otero de la Línea 3. Zona comercial de Zapopan.",
    h1: "Estación Mariano Otero — Línea 3",
    intro: "Zona comercial ubicada en Zapopan con tiendas y servicios.",
    tips: ["Zona comercial activa", "Tiendas y restaurantes", "Fácil acceso a otras áreas"],
    mejor_horario: "Tarde",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  },
  {
    slug: "central-de-autobuses",
    nombre: "Central de Autobuses",
    linea: "3",
    municipio: "Tlaquepaque",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Central de Autobuses de Tlaquepaque", tipo: "transporte", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "Estación Central de Autobuses — Metro Guadalajara | MetroGuia",
    meta_description: "Estación Central de Autobuses de la Línea 3. Terminal sur. Conexión intermodal.",
    h1: "Estación Central de Autobuses — Línea 3 (Terminal)",
    intro: "Estación terminal sur de Línea 3. Importante nodo de conexión intermodal con autobuses de largo recorrido.",
    tips: ["Central de Autobuses de Tlaquepaque", "Autobuses a otras ciudades", "Información de rutas", "Servicios de viajero"],
    mejor_horario: "Mañana para viajes",
    mundial_relevancia: "Sin relevancia directa al Estadio Akron"
  }
];