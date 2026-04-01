const slugify = (text) => {
  return text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\s+/g, '-').replace(/[^\w-]/g, '').replace(/-+/g, '-').replace(/^-|-$/g, '');
};

export const estacionesVeracruz = [
  {
    id: 1,
    nombre: "Puerto Bello",
    slug: "veracruz-puerto-bello",
    ubicacion: "Zona portuaria",
    municipio: "Veracruz",
    linea: "BRT Veracruz",
    tipo_zona: "portuario",
    descripcion_turistica: "Acceso a zona portuaria histórica de Veracruz, principal puerto mexicano del Golfo. Centro de confluencia entre historia colonial, modernidad comercial y belleza del Golfo de México.",
    lugares_cercanos: [
      {
        nombre: "Puerto de Veracruz",
        tipo: "Instalación Portuaria",
        distancia: "0.3 km",
        descripcion: "Puerto comercial internacional con movimiento de barcos histórico"
      },
      {
        nombre: "Acuario de Veracruz",
        tipo: "Museo",
        distancia: "0.5 km",
        descripcion: "Acuario moderno con exhibiciones de fauna marina del Golfo"
      },
      {
        nombre: "Malecón Portuario",
        tipo: "Paseo",
        distancia: "0.2 km",
        descripcion: "Paseo frente al puerto con vista de barcos y mar"
      }
    ],
    pois: [
      { nombre: "Puerto de Veracruz", tipo: "Instalación Portuaria", distancia: "0.3 km" },
      { nombre: "Acuario de Veracruz", tipo: "Museo", distancia: "0.5 km" },
      { nombre: "Malecón Portuario", tipo: "Paseo", distancia: "0.2 km" }
    ],
    transferencias: [],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Puerto operativo 24 horas, paseos públicos disponibles"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Instalaciones modernas con accesibilidad completa"
    },
    seo_title: "Puerto Bello — Zona Portuaria | BRT Veracruz | MetroGuia",
    meta_description: "Zona portuaria histórica de Veracruz. Puerto comercial, acuario y malecón con vistas del Golfo.",
    h1: "Puerto Bello — Zona Portuaria | BRT Veracruz",
    intro: "Zona portuaria histórica con puerto comercial, acuario moderno y malecón del Golfo.",
    tips: ["Explore el Acuario de Veracruz", "Disfruta el Malecón Portuario", "Observa barcos internacionales", "Puerto operativo 24 horas"],
    mejor_horario: "Tarde para vistas portuarias",
    mundial_relevancia: "Puerto histórico para turistas internacionales"
  },
  {
    id: 2,
    nombre: "Centro Histórico",
    slug: "veracruz-centro-historico",
    ubicacion: "Casco colonial veracruzano",
    municipio: "Veracruz",
    linea: "BRT Veracruz",
    tipo_zona: "histórico",
    descripcion_turistica: "Corazón colonial de Veracruz con cuatro siglos de historia portuaria. Zona de patrimonio con zócalo, fortificaciones españolas y arquitectura que mezcla influencias del Caribe, España y México.",
    lugares_cercanos: [
      {
        nombre: "Zócalo de Veracruz",
        tipo: "Plaza Principal",
        distancia: "0.2 km",
        descripcion: "Plaza central con portales históricos y vida social veracruzana"
      },
      {
        nombre: "Catedral Metropolitana",
        tipo: "Templo",
        distancia: "0.15 km",
        descripcion: "Iglesia colonial del siglo XVI, símbolo religioso de Veracruz"
      },
      {
        nombre: "Orquesta Sinfónica",
        tipo: "Cultura",
        distancia: "0.3 km",
        descripcion: "Presentaciones musicales en salones históricos"
      },
      {
        nombre: "Galerías de Arte",
        tipo: "Arte",
        distancia: "0.25 km",
        descripcion: "Espacios dedicados al arte contemporáneo veracruzano"
      }
    ],
    pois: [
      { nombre: "Zócalo de Veracruz", tipo: "Plaza Principal", distancia: "0.2 km" },
      { nombre: "Catedral Metropolitana", tipo: "Templo", distancia: "0.15 km" },
      { nombre: "Orquesta Sinfónica", tipo: "Cultura", distancia: "0.3 km" },
      { nombre: "Galerías de Arte", tipo: "Arte", distancia: "0.25 km" }
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
      notas: "Calles coloniales con adoquines, rampas en sitios principales"
    },
    seo_title: "Centro Histórico de Veracruz — BRT Veracruz | MetroGuia",
    meta_description: "Centro colonial de Veracruz. Zócalo histórico, catedral, galerías de arte y presentaciones musicales.",
    h1: "Centro Histórico de Veracruz — BRT Veracruz",
    intro: "Corazón colonial con zócalo histórico, catedral del siglo XVI y galerías de arte.",
    tips: ["Visite el Zócalo al atardecer", "Explore la Catedral Metropolitana", "Disfruta presentaciones de la Orquesta Sinfónica", "Descubre galerías de arte contemporáneo"],
    mejor_horario: "Tarde para vida social en zócalo",
    mundial_relevancia: "Patrimonio colonial para turistas culturales"
  },
  {
    id: 3,
    nombre: "Baluarte San Carlos",
    slug: "veracruz-baluarte-san-carlos",
    ubicacion: "Fortificación histórica",
    municipio: "Veracruz",
    linea: "BRT Veracruz",
    tipo_zona: "histórico",
    descripcion_turistica: "Fortaleza colonial del siglo XVII, baluarte defensivo histórico de Veracruz. Museo y estructura conservada que representa la importancia estratégica portuaria durante conquista y colonización.",
    lugares_cercanos: [
      {
        nombre: "Baluarte de San Carlos",
        tipo: "Fortaleza",
        distancia: "0.2 km",
        descripcion: "Fuerte colonial con estructura defensiva preservada"
      },
      {
        nombre: "Museo de Fortificaciones",
        tipo: "Museo",
        distancia: "0.15 km",
        descripcion: "Exhibiciones sobre historia militar y fortificaciones coloniales"
      },
      {
        nombre: "Paseo de las Murallas",
        tipo: "Ruta Histórica",
        distancia: "0.3 km",
        descripcion: "Recorrido por sistema defensivo colonial restaurado"
      }
    ],
    pois: [
      { nombre: "Baluarte de San Carlos", tipo: "Fortaleza", distancia: "0.2 km" },
      { nombre: "Museo de Fortificaciones", tipo: "Museo", distancia: "0.15 km" },
      { nombre: "Paseo de las Murallas", tipo: "Ruta Histórica", distancia: "0.3 km" }
    ],
    transferencias: [],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Museo abierto 10:00-18:00, fortaleza accesible durante horas luz"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: false,
      rampas: true,
      banos_accesibles: true,
      notas: "Rampas de acceso a áreas principales del baluarte"
    },
    seo_title: "Baluarte San Carlos — Fortaleza Histórica | BRT Veracruz | MetroGuia",
    meta_description: "Fortaleza colonial del siglo XVII. Museo de fortificaciones y paseo de murallas restauradas.",
    h1: "Baluarte San Carlos — Fortaleza Histórica | BRT Veracruz",
    intro: "Fortaleza colonial del siglo XVII con museo militar y paseo de murallas.",
    tips: ["Visite el museo 10:00-18:00", "Explore el Paseo de las Murallas", "Aprenda sobre arquitectura militar colonial", "Vistas desde las murallas"],
    mejor_horario: "Mañana para museo",
    mundial_relevancia: "Patrimonio militar para turistas históricos"
  },
  {
    id: 4,
    nombre: "Playa Hornos",
    slug: "veracruz-playa-hornos",
    ubicacion: "Zona de playa",
    municipio: "Veracruz",
    linea: "BRT Veracruz",
    tipo_zona: "playa",
    descripcion_turistica: "Acceso a playas urbanas de Veracruz, costas históricas con arena y mar del Golfo. Centro de recreación acuática y descanso en ambiente portuario con vista a barcos.",
    lugares_cercanos: [
      {
        nombre: "Playa Hornos",
        tipo: "Playa",
        distancia: "0.2 km",
        descripcion: "Playa en el centro de Veracruz con servicios"
      },
      {
        nombre: "Restaurantes de Mariscos",
        tipo: "Gastronomía",
        distancia: "0.3 km",
        descripcion: "Especialidades de mariscos frescos y cocina veracruzana"
      },
      {
        nombre: "Bares y Cantinas Históricas",
        tipo: "Entretenimiento",
        distancia: "0.25 km",
        descripcion: "Establecimientos tradicionales con música y ambiente local"
      }
    ],
    pois: [
      { nombre: "Playa Hornos", tipo: "Playa", distancia: "0.2 km" },
      { nombre: "Restaurantes de Mariscos", tipo: "Gastronomía", distancia: "0.3 km" },
      { nombre: "Bares y Cantinas Históricas", tipo: "Entretenimiento", distancia: "0.25 km" }
    ],
    transferencias: [],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Playas accesibles durante horas diurnas y nocturnas"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: false,
      rampas: true,
      banos_accesibles: true,
      notas: "Rampa de acceso a playa, baños públicos accesibles"
    },
    seo_title: "Playa Hornos — Playas Urbanas | BRT Veracruz | MetroGuia",
    meta_description: "Playas urbanas de Veracruz. Restaurantes de mariscos frescos y bares tradicionales.",
    h1: "Playa Hornos — Playas Urbanas | BRT Veracruz",
    intro: "Playas urbanas con restaurantes de mariscos frescos y bares tradicionales veracruzanos.",
    tips: ["Nada en el Golfo de México", "Disfruta mariscos frescos", "Visita bares y cantinas históricas", "Vistas de barcos en puerto"],
    mejor_horario: "Tarde para atardecer en playa",
    mundial_relevancia: "Playas urbanas para turismo de mar"
  },
  {
    id: 5,
    nombre: "Acuario",
    slug: "veracruz-acuario",
    ubicacion: "Centro turístico",
    municipio: "Veracruz",
    linea: "BRT Veracruz",
    tipo_zona: "turístico",
    descripcion_turistica: "Acceso al Acuario de Veracruz, atracción turística principal de la ciudad. Centro de educación marina con exhibiciones de fauna del Golfo de México y del Caribe en tanques interactivos.",
    lugares_cercanos: [
      {
        nombre: "Acuario de Veracruz",
        tipo: "Museo",
        distancia: "0.1 km",
        descripcion: "Acuario con exhibiciones de tiburones, mantas y fauna marina"
      },
      {
        nombre: "Tienda de Recuerdos",
        tipo: "Comercio",
        distancia: "0.15 km",
        descripcion: "Tienda de souvenirs y artículos del acuario"
      },
      {
        nombre: "Restaurante Acuario",
        tipo: "Gastronomía",
        distancia: "0.2 km",
        descripcion: "Restaurante con vistas al océano dentro del acuario"
      }
    ],
    pois: [
      { nombre: "Acuario de Veracruz", tipo: "Museo", distancia: "0.1 km" },
      { nombre: "Tienda de Recuerdos", tipo: "Comercio", distancia: "0.15 km" },
      { nombre: "Restaurante Acuario", tipo: "Gastronomía", distancia: "0.2 km" }
    ],
    transferencias: [],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Acuario abierto 9:00-18:00 diariamente"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Instalación moderna con accesibilidad total"
    },
    seo_title: "Acuario de Veracruz — Educación Marina | BRT Veracruz | MetroGuia",
    meta_description: "Acuario principal de Veracruz. Exhibiciones de tiburones, mantas y fauna del Golfo.",
    h1: "Acuario de Veracruz — Educación Marina | BRT Veracruz",
    intro: "Centro de educación marina con exhibiciones de fauna del Golfo de México y Caribe.",
    tips: ["Abierto 9:00-18:00 diariamente", "Observa tiburones y mantas", "Disfruta restaurante con vistas océano", "Compra souvenirs educativos"],
    mejor_horario: "Mañana para tanques bien iluminados",
    mundial_relevancia: "Educación marina para turistas familiares"
  },
  {
    id: 6,
    nombre: "Playa Mocambo",
    slug: "veracruz-playa-mocambo",
    ubicacion: "Zona costera sur",
    municipio: "Veracruz",
    linea: "BRT Veracruz",
    tipo_zona: "playa",
    descripcion_turistica: "Acceso a playa de Mocambo, balneario histórico veracruzano con extensas arenas. Zona residencial y de playa con hoteles, restaurantes y servicios completos de playa.",
    lugares_cercanos: [
      {
        nombre: "Playa Mocambo",
        tipo: "Playa",
        distancia: "0.3 km",
        descripcion: "Playa extensa con arena fina y servicios de playa"
      },
      {
        nombre: "Hotel Mocambo",
        tipo: "Hospedaje",
        distancia: "0.2 km",
        descripcion: "Hotel histórico con arquitectura vintage veracruzana"
      },
      {
        nombre: "Restaurantes de Playa",
        tipo: "Gastronomía",
        distancia: "0.25 km",
        descripcion: "Comedores con mariscos frescos frente a la playa"
      }
    ],
    pois: [
      { nombre: "Playa Mocambo", tipo: "Playa", distancia: "0.3 km" },
      { nombre: "Hotel Mocambo", tipo: "Hospedaje", distancia: "0.2 km" },
      { nombre: "Restaurantes de Playa", tipo: "Gastronomía", distancia: "0.25 km" }
    ],
    transferencias: [],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Playas y servicios operativos durante el día"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: false,
      rampas: true,
      banos_accesibles: true,
      notas: "Rampa de acceso a playa, servicios sanitarios disponibles"
    },
    seo_title: "Playa Mocambo — Balneario Histórico | BRT Veracruz | MetroGuia",
    meta_description: "Balneario histórico de Veracruz. Extensas arenas, hotel vintage y restaurantes de mariscos.",
    h1: "Playa Mocambo — Balneario Histórico | BRT Veracruz",
    intro: "Balneario histórico con extensas arenas, hotel vintage y restaurantes frente al mar.",
    tips: ["Disfruta playas extensas", "Aloja en el Hotel Mocambo histórico", "Prueba restaurantes de mariscos", "Servicios completos de playa"],
    mejor_horario: "Mañana para playas tranquilas",
    mundial_relevancia: "Playas resort para turismo de sol"
  },
  {
    id: 7,
    nombre: "Boca del Río",
    slug: "veracruz-boca-del-rio",
    ubicacion: "Desembocadura del río",
    municipio: "Boca del Río",
    linea: "BRT Veracruz",
    tipo_zona: "turístico",
    descripcion_turistica: "Acceso a zona de Boca del Río, desarrollo turístico moderno en desembocadura del Río Papaloapan. Centro de gastronomía de mariscos, paseos acuáticos y desarrollo residencial frente al mar.",
    lugares_cercanos: [
      {
        nombre: "Paseo Boca del Río",
        tipo: "Paseo Turístico",
        distancia: "0.3 km",
        descripcion: "Avenida costera con tiendas, bares y restaurantes"
      },
      {
        nombre: "Restaurantes de Mariscos",
        tipo: "Gastronomía",
        distancia: "0.2 km",
        descripcion: "Restaurantes especializados en cocina marina veracruzana"
      },
      {
        nombre: "Marina Turística",
        tipo: "Servicios",
        distancia: "0.25 km",
        descripcion: "Paseos en barco y agua taxís por el río y bahía"
      }
    ],
    pois: [
      { nombre: "Paseo Boca del Río", tipo: "Paseo Turístico", distancia: "0.3 km" },
      { nombre: "Restaurantes de Mariscos", tipo: "Gastronomía", distancia: "0.2 km" },
      { nombre: "Marina Turística", tipo: "Servicios", distancia: "0.25 km" }
    ],
    transferencias: [],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Servicios disponibles hasta 22:00 en promedio"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Desarrollo moderno con estándares completos de accesibilidad"
    },
    seo_title: "Boca del Río — Desarrollo Turístico Moderno | BRT Veracruz | MetroGuia",
    meta_description: "Zona moderna con restaurantes de mariscos, paseos acuáticos y marina turística.",
    h1: "Boca del Río — Desarrollo Turístico Moderno | BRT Veracruz",
    intro: "Desarrollo turístico moderno con restaurantes gourmet, paseos acuáticos y marina.",
    tips: ["Disfruta restaurantes de mariscos gourmet", "Paseos en barco por río y bahía", "Compra en paseo Boca del Río", "Servicios hasta 22:00"],
    mejor_horario: "Tarde para atardecer en el río",
    mundial_relevancia: "Gastronomía gourmet para turismo de lujo"
  },
  {
    id: 8,
    nombre: "Mandinga",
    slug: "veracruz-mandinga",
    ubicacion: "Pueblo costero",
    municipio: "Veracruz",
    linea: "BRT Veracruz",
    tipo_zona: "costero",
    descripcion_turistica: "Acceso a Mandinga, pueblo costero tradicional cerca de Veracruz. Comunidad de pescadores con ambiente auténtico, restaurantes de mariscos y playa con carácter local.",
    lugares_cercanos: [
      {
        nombre: "Playa de Mandinga",
        tipo: "Playa",
        distancia: "0.2 km",
        descripcion: "Playa de pescadores con arena y vista del Golfo"
      },
      {
        nombre: "Restaurantes de Pescado Fresco",
        tipo: "Gastronomía",
        distancia: "0.15 km",
        descripcion: "Comedores con pescado capturado localmente"
      },
      {
        nombre: "Mercado de Pescado",
        tipo: "Comercio",
        distancia: "0.2 km",
        descripcion: "Venta de mariscos y pescados frescos de la zona"
      }
    ],
    pois: [
      { nombre: "Playa de Mandinga", tipo: "Playa", distancia: "0.2 km" },
      { nombre: "Restaurantes de Pescado Fresco", tipo: "Gastronomía", distancia: "0.15 km" },
      { nombre: "Mercado de Pescado", tipo: "Comercio", distancia: "0.2 km" }
    ],
    transferencias: [],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Mercado activo desde 6:00, restaurantes hasta 20:00"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: false,
      rampas: false,
      banos_accesibles: true,
      notas: "Pueblo con calles no totalmente accesibles, baños disponibles"
    },
    seo_title: "Mandinga — Pueblo de Pescadores | BRT Veracruz | MetroGuia",
    meta_description: "Pueblo costero tradicional. Comunidad de pescadores con restaurantes de pescado fresco.",
    h1: "Mandinga — Pueblo de Pescadores | BRT Veracruz",
    intro: "Pueblo costero tradicional de pescadores con playa auténtica y restaurantes de pescado fresco.",
    tips: ["Prueba pescado capturado localmente", "Compra en mercado de pescado fresco", "Disfruta ambiente local auténtico", "Mercado activo desde 6:00"],
    mejor_horario: "Temprano para pescado fresco",
    mundial_relevancia: "Autenticidad local para turismo cultural"
  },
  {
    id: 9,
    nombre: "Loma de Lara",
    slug: "veracruz-loma-de-lara",
    ubicacion: "Zona residencial elevada",
    municipio: "Veracruz",
    linea: "BRT Veracruz",
    tipo_zona: "residencial",
    descripcion_turistica: "Acceso a zona residencial de Loma de Lara, área elevada con vistas de Veracruz y puerto. Zona de desarrollo urbano contemporáneo con comercios y servicios modernos.",
    lugares_cercanos: [
      {
        nombre: "Mirador Loma de Lara",
        tipo: "Mirador",
        distancia: "0.4 km",
        descripcion: "Punto elevado con vistas de puerto y ciudad"
      },
      {
        nombre: "Centro Comercial",
        tipo: "Comercio",
        distancia: "0.3 km",
        descripcion: "Tiendas y servicios de zona residencial"
      },
      {
        nombre: "Parque Recreativo",
        tipo: "Parque",
        distancia: "0.2 km",
        descripcion: "Área verde con juegos y áreas de descanso"
      }
    ],
    pois: [
      { nombre: "Mirador Loma de Lara", tipo: "Mirador", distancia: "0.4 km" },
      { nombre: "Centro Comercial", tipo: "Comercio", distancia: "0.3 km" },
      { nombre: "Parque Recreativo", tipo: "Parque", distancia: "0.2 km" }
    ],
    transferencias: [],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Comercios operativos hasta 21:00"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Zona moderna con infraestructura accesible"
    },
    seo_title: "Loma de Lara — Zona Residencial Moderna | BRT Veracruz | MetroGuia",
    meta_description: "Zona residencial elevada con vistas de puerto. Centro comercial y parque recreativo.",
    h1: "Loma de Lara — Zona Residencial Moderna | BRT Veracruz",
    intro: "Zona residencial elevada con vistas panorámicas de Veracruz y servicios modernos.",
    tips: ["Disfruta mirador con vistas de puerto", "Compra en centro comercial", "Relájate en parque recreativo", "Servicios hasta 21:00"],
    mejor_horario: "Tarde para vistas al atardecer",
    mundial_relevancia: "Zona residencial para turismo urbano"
  },
  {
    id: 10,
    nombre: "Museo de Antropología",
    slug: "veracruz-museo-antropologia",
    ubicacion: "Centro cultural",
    municipio: "Xalapa",
    linea: "BRT Veracruz",
    tipo_zona: "cultural",
    descripcion_turistica: "Acceso al Museo de Antropología de Xalapa, uno de los museos más importantes de México. Colecciones de arte prehispánico, especialmente cabezas colosales olmecas y cultura veracruzana antigua.",
    lugares_cercanos: [
      {
        nombre: "Museo de Antropología de Xalapa",
        tipo: "Museo",
        distancia: "0.5 km",
        descripcion: "Museo con colecciones de arte olmeca y mesoamericano"
      },
      {
        nombre: "Parque Museo",
        tipo: "Parque",
        distancia: "0.3 km",
        descripcion: "Jardines con esculturas y espacios abiertos del museo"
      },
      {
        nombre: "Tienda del Museo",
        tipo: "Comercio",
        distancia: "0.2 km",
        descripcion: "Tienda de libros y reproducciones de arte prehispánico"
      }
    ],
    pois: [
      { nombre: "Museo de Antropología de Xalapa", tipo: "Museo", distancia: "0.5 km" },
      { nombre: "Parque Museo", tipo: "Parque", distancia: "0.3 km" },
      { nombre: "Tienda del Museo", tipo: "Comercio", distancia: "0.2 km" }
    ],
    transferencias: [],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Museo abierto 9:00-17:00 cerrado lunes"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Museo con accesibilidad completa y ascensores"
    },
    seo_title: "Museo de Antropología de Xalapa — Olmeca | BRT Veracruz | MetroGuia",
    meta_description: "Museo de Antropología de Xalapa. Colecciones de arte olmeca, cabezas colosales y prehispánico.",
    h1: "Museo de Antropología de Xalapa — Olmeca | BRT Veracruz",
    intro: "Uno de los museos más importantes de México con colecciones de arte olmeca y prehispánico.",
    tips: ["Abierto 9:00-17:00 cerrado lunes", "Observa cabezas colosales olmecas", "Explora Parque Museo con jardines", "Compra libros en tienda del museo"],
    mejor_horario: "Mañana para visita completa",
    mundial_relevancia: "Patrimonio arqueológico para turismo cultural"
  },
  {
    id: 11,
    nombre: "La Caleta",
    slug: "veracruz-la-caleta",
    ubicacion: "Caleta histórica",
    municipio: "Veracruz",
    linea: "BRT Veracruz",
    tipo_zona: "portuario",
    descripcion_turistica: "Acceso a La Caleta, caleta de pescadores histórica de Veracruz. Sitio tradicional de marinería con restaurantes de mariscos, venta de pescado fresco y ambiente de puerto de trabajo.",
    lugares_cercanos: [
      {
        nombre: "Caleta de Pescadores",
        tipo: "Puerto Tradicional",
        distancia: "0.1 km",
        descripcion: "Embarcadero de pesca con barcas de trabajo tradicional"
      },
      {
        nombre: "Restaurantes de Pescado",
        tipo: "Gastronomía",
        distancia: "0.15 km",
        descripcion: "Comedores frente a la caleta con pescado fresco"
      },
      {
        nombre: "Venta de Captura del Día",
        tipo: "Comercio",
        distancia: "0.2 km",
        descripcion: "Venta directa de pescado recién capturado"
      }
    ],
    pois: [
      { nombre: "Caleta de Pescadores", tipo: "Puerto Tradicional", distancia: "0.1 km" },
      { nombre: "Restaurantes de Pescado", tipo: "Gastronomía", distancia: "0.15 km" },
      { nombre: "Venta de Captura del Día", tipo: "Comercio", distancia: "0.2 km" }
    ],
    transferencias: [],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "05:00 - 23:00",
      domingo: "06:00 - 22:00",
      notas: "Caleta activa desde madrugada, restaurantes hasta 20:00"
    },
    accesibilidad: {
      silla_ruedas: true,
      ascensores: false,
      rampas: true,
      banos_accesibles: false,
      notas: "Acceso mediante rampas, pero área con tráfico de trabajo"
    },
    seo_title: "La Caleta — Puerto Pesquero Histórico | BRT Veracruz | MetroGuia",
    meta_description: "Caleta histórica de pescadores. Restaurantes de mariscos frescos y embarcaderos de pesca.",
    h1: "La Caleta — Puerto Pesquero Histórico | BRT Veracruz",
    intro: "Caleta histórica de pescadores con restaurantes de mariscos frescos y barcas tradicionales.",
    tips: ["Prueba pescado del día recién capturado", "Compra captura fresca directamente", "Disfruta restaurantes frente a caleta", "Activa desde madrugada"],
    mejor_horario: "Temprano para pescado fresco",
    mundial_relevancia: "Marinería tradicional para turismo auténtico"
  },
  {
    id: 12,
    nombre: "Terminal de Autobuses",
    slug: "veracruz-terminal-autobuses",
    ubicacion: "Central de transporte",
    municipio: "Veracruz",
    linea: "BRT Veracruz",
    tipo_zona: "transporte",
    descripcion_turistica: "Terminal foránea de Veracruz, punto de llegada y salida de transporte a ciudades vecinas y regiones del país. Nodo importante de conectividad del sistema de transporte veracruzano.",
    lugares_cercanos: [
      {
        nombre: "Terminal de Autobuses",
        tipo: "Transporte",
        distancia: "0.1 km",
        descripcion: "Central con autobuses a destinos nacionales"
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
        distancia: "0.2 km",
        descripcion: "Alojamiento para viajeros en tránsito"
      }
    ],
    pois: [
      { nombre: "Terminal de Autobuses", tipo: "Transporte", distancia: "0.1 km" },
      { nombre: "Servicios de Terminal", tipo: "Comercio", distancia: "0.15 km" },
      { nombre: "Hotel Terminal", tipo: "Hospedaje", distancia: "0.2 km" }
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
    seo_title: "Terminal de Autobuses — Centro de Transporte | BRT Veracruz | MetroGuia",
    meta_description: "Terminal foránea de Veracruz. Conexiones a ciudades vecinas y regiones del país.",
    h1: "Terminal de Autobuses — Centro de Transporte | BRT Veracruz",
    intro: "Terminal foránea con conexiones a ciudades vecinas y regiones nacionales.",
    tips: ["Servicios disponibles 24 horas", "Compra boletos con anticipación", "Hotel Terminal para conexiones", "Tiendas y restaurantes en terminal"],
    mejor_horario: "Mañana para viajes con menos tráfico",
    mundial_relevancia: "Hub de transporte para conectividad nacional"
  }
];
