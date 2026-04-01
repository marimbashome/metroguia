export const estacionesToluca = [
  {
    slug: "observatorio-cdmx",
    nombre: "Observatorio CDMX",
    linea: "TI",
    municipio: "Ciudad de México",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Estación Observatorio Metro CDMX Línea 1", tipo: "transporte", distancia: "integrado" },
      { nombre: "Terminal Tren Interurbano", tipo: "transporte", distancia: "integrado" },
      { nombre: "Centro Comercial cercano", tipo: "comercio", distancia: "3 min" }
    ],
    transferencias: ["Metro CDMX Línea 1"],
    seo_title: "Estación Observatorio CDMX — Tren Interurbano México-Toluca | MetroGuia",
    meta_description: "Estación Observatorio. Puerta intermodal: Metro CDMX Línea 1 + Tren Interurbano México-Toluca. Conexión directa con FIFA 2026.",
    h1: "Estación Observatorio — Intermodal CDMX",
    intro: "Estación intermodal que conecta el Metro CDMX Línea 1 con el Tren Interurbano México-Toluca. Puerta de entrada desde el corazón de CDMX al Tren Interurbano.",
    tips: ["Acceso directo Metro CDMX", "Señalización clara a Tren Interurbano", "Taquillas y máquinas de boletos", "Información turística disponible", "Servicios bancarios"],
    mejor_horario: "Mañana temprano para menos aglomeración",
    mundial_relevancia: "⚽ Acceso a CDMX sede FIFA 2026 desde Toluca en 65 minutos",
    descripcion_turistica: "Terminal intermodal de Observatorio conecta el Metro CDMX Línea 1 con el moderno Tren Interurbano México-Toluca. Esta estación es la puerta principal para turistas que viajan entre la capital y Toluca, con acceso a zonas comerciales cercanas y servicios completos de información turística.",
    lugares_cercanos: [
      { nombre: "Centro Comercial La Mexicana", tipo: "comercio", distancia: "350 metros", descripcion: "Centro comercial con restaurantes, tiendas y servicios bancarios" },
      { nombre: "Parque España", tipo: "parque", distancia: "600 metros", descripcion: "Espacio verde arbolado ideal para descansar entre viajes" },
      { nombre: "Cafés y restaurantes locales", tipo: "alimento", distancia: "200-400 metros", descripcion: "Variedad de opciones de comida antes de abordar el tren" }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:30",
      sabado: "05:00 - 23:30",
      domingo: "06:00 - 22:00",
      notas: "Frecuencia cada 10-15 minutos. Primera salida 05:00 lunes-sábado, 06:00 domingo. Última salida 23:30 lunes-sábado, 22:00 domingo."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Estación completamente accesible. Elevadores en todos los niveles, ascensores para discapacitados, pisos táctiles en andenes, baños adaptados con barras de apoyo."
    }
  },
  {
    slug: "lerma",
    nombre: "Lerma",
    linea: "TI",
    municipio: "Lerma",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Centro de Lerma", tipo: "comercio", distancia: "8 min caminando" },
      { nombre: "Parque Lerma", tipo: "recreación", distancia: "5 min" },
      { nombre: "Servicios locales", tipo: "servicios", distancia: "4 min" }
    ],
    transferencias: [],
    seo_title: "Estación Lerma — Tren Interurbano | MetroGuia",
    meta_description: "Estación Lerma del Tren Interurbano México-Toluca. Acceso a la ciudad de Lerma y servicios regionales.",
    h1: "Estación Lerma — Puerta a Lerma",
    intro: "Estación en Lerma con acceso a la ciudad y servicios locales. Parada intermedia en el Tren Interurbano México-Toluca.",
    tips: ["Salida rápida desde Observatorio", "Conexión a servicios locales", "Parada intermedia estratégica", "Tiempo de viaje: ~15 min desde Observatorio", "Frecuencia cada 10-15 minutos"],
    mejor_horario: "Todo el día",
    mundial_relevancia: "Conexión desde Toluca a CDMX",
    descripcion_turistica: "Estación Lerma es una parada estratégica del Tren Interurbano a solo 15 minutos de Observatorio. Punto de acceso al municipio de Lerma con conexión a servicios locales, comercio y recreación, ideal para viajeros que deseen explorar el Estado de México.",
    lugares_cercanos: [
      { nombre: "Parque Natural Lerma", tipo: "parque", distancia: "5 minutos", descripcion: "Áreas verdes y senderos para caminar, ideal para descansar durante el viaje" },
      { nombre: "Centro Comercial Lerma", tipo: "comercio", distancia: "8 minutos", descripcion: "Tiendas, restaurantes y servicios locales del municipio" },
      { nombre: "Mercado tradicional de Lerma", tipo: "comercio", distancia: "10 minutos", descripcion: "Mercado local con productos frescos y artesanías regionales" }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:30",
      sabado: "05:00 - 23:30",
      domingo: "06:00 - 22:00",
      notas: "Parada intermedia con frecuencia cada 10-15 minutos. Tiempo de recorrido desde Observatorio: ~15 minutos."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Estación moderna y completamente accesible. Ascensores operativos, rampas en accesos, pisos antideslizantes, servicios sanitarios adaptados."
    }
  },
  {
    slug: "san-mateo-atenco",
    nombre: "San Mateo Atenco",
    linea: "TI",
    municipio: "San Mateo Atenco",
    tipo_zona: "residencial",
    pois: [
      { nombre: "Zona residencial San Mateo", tipo: "servicios", distancia: "5 min caminando" },
      { nombre: "Comercios locales", tipo: "comercio", distancia: "4 min" },
      { nombre: "Iglesia local", tipo: "monumento", distancia: "3 min" }
    ],
    transferencias: [],
    seo_title: "Estación San Mateo Atenco — Tren Interurbano | MetroGuia",
    meta_description: "Estación San Mateo Atenco. Zona residencial del Estado de México en la ruta México-Toluca.",
    h1: "Estación San Mateo Atenco — Zona Residencial",
    intro: "Estación en la zona residencial de San Mateo Atenco, parada intermedia del Tren Interurbano con acceso a servicios locales.",
    tips: ["Conexión residencial", "Servicios básicos disponibles", "Zona tranquila", "Tiempo: ~30 min desde Observatorio", "Comunidad local activa"],
    mejor_horario: "Tarde-noche",
    mundial_relevancia: "Conexión diaria CDMX-Toluca",
    descripcion_turistica: "San Mateo Atenco es una parada residencial tranquila del Tren Interurbano a 30 minutos de Observatorio. Ofrece acceso a una comunidad local activa con iglesia colonial cercana y comercios tradicionales del Estado de México.",
    lugares_cercanos: [
      { nombre: "Iglesia de San Mateo Atenco", tipo: "monumento", distancia: "3 minutos", descripcion: "Iglesia colonial histórica con arquitectura tradicional del siglo XVIII" },
      { nombre: "Comercios y tiendas locales", tipo: "comercio", distancia: "4 minutos", descripcion: "Tiendas de abarrotes, panaderías y servicios básicos del municipio" },
      { nombre: "Zona residencial con cafés", tipo: "alimento", distancia: "5 minutos", descripcion: "Cafeterías locales y pequeños restaurantes con comida típica" }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:30",
      sabado: "05:00 - 23:30",
      domingo: "06:00 - 22:00",
      notas: "Parada intermedia con servicios diarios. Tiempo total desde Observatorio: ~30 minutos."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Estación accesible con infraestructura moderna para discapacitados. Ascensores funcionales, rampas de acceso suave, baños equipados con barras de seguridad."
    }
  },
  {
    slug: "metepec",
    nombre: "Metepec",
    linea: "TI",
    municipio: "Metepec",
    tipo_zona: "artesanal-cultural",
    pois: [
      { nombre: "Metepec Centro", tipo: "comercio", distancia: "4 min caminando" },
      { nombre: "Artesanías de barro (Tonalámatl)", tipo: "comercio", distancia: "5 min" },
      { nombre: "Mercado artesanal", tipo: "comercio", distancia: "4 min" },
      { nombre: "Iglesia colonial", tipo: "monumento", distancia: "6 min" }
    ],
    transferencias: [],
    seo_title: "Estación Metepec — Tren Interurbano | Artesanías | MetroGuia",
    meta_description: "Estación Metepec. Acceso a artesanías de barro negro y Tonalámatl. Pueblo mágico artesanal.",
    h1: "Estación Metepec — Centro Artesanal",
    intro: "Metepec es famoso por sus artesanías de barro negro, el Tonalámatl (calendario prehispánico) y cerámica policromada. Pueblo artesanal imprescindible entre Toluca y CDMX.",
    tips: ["Barro negro artesanal", "Tonalámatl (calendario prehispánico)", "Mercado de artesanías", "Iglesia colonial hermosa", "Mejor mañana para compras"],
    mejor_horario: "Mañana para artesanías",
    mundial_relevancia: "Patrimonio artesanal de Toluca",
    descripcion_turistica: "Metepec es un pueblo artesanal legendario con artesanos de barro negro que crean el Tonalámatl (calendario prehispánico). La estación está a 4 minutos del mercado artesanal y del centro histórico con iglesia colonial, siendo parada obligada para coleccionistas de artesanías mexicanas.",
    lugares_cercanos: [
      { nombre: "Mercado de Artesanías Metepec", tipo: "comercio", distancia: "4 minutos", descripcion: "Mercado tradicional con decenas de vendedores de barro negro y cerámica policromada" },
      { nombre: "Talleres de artesanos Tonalámatl", tipo: "comercio", distancia: "5 minutos", descripcion: "Artesanos que crean el calendario prehispánico de barro negro, compra directa del artista" },
      { nombre: "Iglesia de Metepec (siglo XVIII)", tipo: "monumento", distancia: "6 minutos", descripcion: "Templo colonial histórico con retablos barrocos y arquitectura auténtica" }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:30",
      sabado: "05:00 - 23:30",
      domingo: "06:00 - 22:00",
      notas: "Parada intermedia importante. Tiempo desde Observatorio: ~45 minutos. Mercado artesanal abierto martes a domingo principalmente."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Estación completamente accesible. Ascensores en terminal, rampas hacia mercado artesanal, baños públicos adaptados con barras de apoyo."
    }
  },
  {
    slug: "zinacantepec-terminal",
    nombre: "Zinacantepec Terminal",
    linea: "TI",
    municipio: "Zinacantepec",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Terminal Zinacantepec Tren Interurbano", tipo: "transporte", distancia: "integrado" },
      { nombre: "Centro Comercial Terminal", tipo: "comercio", distancia: "2 min" },
      { nombre: "Conexión a Mexibús", tipo: "transporte", distancia: "2 min" },
      { nombre: "Restaurantes y cafeterías", tipo: "alimento", distancia: "2 min" }
    ],
    transferencias: ["Mexibús Línea 1"],
    seo_title: "Estación Terminal Zinacantepec — Tren Interurbano | MetroGuia",
    meta_description: "Terminal Zinacantepec. Punto final del Tren Interurbano México-Toluca. Conexión a Mexibús y centro de Toluca.",
    h1: "Terminal Zinacantepec — Final del Tren Interurbano",
    intro: "Terminal final del Tren Interurbano México-Toluca en Zinacantepec. Conexión intermodal con Mexibús para acceso a Toluca Centro y zonas artesanales.",
    tips: ["Terminal moderna", "Conexión Mexibús", "Tiendas y gastronomía", "Información turística", "Tiempo total desde Observatorio: ~65 minutos"],
    mejor_horario: "Según horarios de tren",
    mundial_relevancia: "⚽ Hospedaje económico en Toluca para FIFA 2026 / Viaje a CDMX en 65 min",
    descripcion_turistica: "Terminal Zinacantepec es el final del Tren Interurbano México-Toluca, punto de conexión estratégico hacia Toluca Centro mediante Mexibús. Terminal moderna con servicios completos, comercios, gastronomía y conexión con transporte local para explorar Toluca, sus museos y artesanías.",
    lugares_cercanos: [
      { nombre: "Centro Comercial Terminal Zinacantepec", tipo: "comercio", distancia: "2 minutos", descripcion: "Centro comercial con tiendas de conveniencia, restaurantes y cafeterías" },
      { nombre: "Parada Mexibús Línea 1", tipo: "transporte", distancia: "2 minutos", descripcion: "Conexión inmediata a Toluca Centro, Cosmovitral y Portales" },
      { nombre: "Servicios de transporte local (taxis, remises)", tipo: "transporte", distancia: "integrado", descripcion: "Disponibles en plataforma de terminal para traslados al aeropuerto o hoteles" }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:30",
      sabado: "05:00 - 23:30",
      domingo: "06:00 - 22:00",
      notas: "Terminal final con última salida a CDMX 23:30 lunes-sábado, 22:00 domingo. Tiempo total Observatorio-Zinacantepec: ~65 minutos."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Terminal intermodal completamente accesible. Múltiples ascensores, rampas suaves, servicios sanitarios adaptados, información en Braille, ayuda de personal disponible."
    }
  },
  {
    slug: "toluca-centro-bus",
    nombre: "Toluca Centro",
    linea: "M1",
    municipio: "Toluca",
    tipo_zona: "comercial-historico",
    pois: [
      { nombre: "Centro Histórico Toluca", tipo: "historico", distancia: "3 min caminando" },
      { nombre: "Portales de Toluca", tipo: "arquitectura", distancia: "2 min" },
      { nombre: "Gastronomía toluca", tipo: "alimento", distancia: "2 min" },
      { nombre: "Mercado 16 de Septiembre", tipo: "comercio", distancia: "3 min" }
    ],
    transferencias: [],
    seo_title: "Parada Toluca Centro — Mexibús Línea 1 | MetroGuia",
    meta_description: "Parada Toluca Centro. Acceso al Centro Histórico, Portales y gastronomía toluca.",
    h1: "Parada Toluca Centro — Corazón de la Ciudad",
    intro: "Centro histórico de Toluca con acceso a los únicos Portales de México (arquitectura colonial única) y gastronomía tradicional toluca.",
    tips: ["Portales únicos de arquitectura", "Centro Histórico bien conservado", "Comida tradicional excelente", "Mercado 16 de Septiembre", "Mejor mañana-tarde"],
    mejor_horario: "Mañana-tarde",
    mundial_relevancia: "Centro urbano de Toluca",
    descripcion_turistica: "Toluca Centro es el corazón histórico de la capital estatal con los únicos Portales de México — estructura colonial única con soportales del siglo XVIII. Aquí encontrarás gastronomía tradicional toluca, tiendas históricas y acceso al Mercado 16 de Septiembre con artesanías locales.",
    lugares_cercanos: [
      { nombre: "Portales de Toluca", tipo: "arquitectura", distancia: "2 minutos", descripcion: "Única estructura de portales en México, soportales coloniales del siglo XVIII con tiendas y cafés históricos" },
      { nombre: "Mercado 16 de Septiembre", tipo: "comercio", distancia: "3 minutos", descripcion: "Mercado tradicional con comidas típicas de Toluca, frutas y artesanías locales" },
      { nombre: "Restaurantes de comida toluca", tipo: "alimento", distancia: "2 minutos", descripcion: "Especialidades locales como enchiladas tolucas, quesadillas y cecina de Toluca" }
    ],
    horarios: {
      lunes_viernes: "05:00 - 23:00",
      sabado: "06:00 - 23:00",
      domingo: "07:00 - 22:00",
      notas: "Parada central de Mexibús con servicio frecuente. Mercados abiertos principalmente mañana-tarde."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: false,
      rampas: true,
      banos_accesibles: true,
      notas: "Zona histórica con arquitectura colonial. Rampas en accesos principales, baños públicos adaptados en mercados, calles adoquinadas que requieren cuidado con silla de ruedas."
    }
  },
  {
    slug: "portales-toluca",
    nombre: "Portales",
    linea: "M1",
    municipio: "Toluca",
    tipo_zona: "historico",
    pois: [
      { nombre: "Portales de Toluca", tipo: "arquitectura", distancia: "1 min caminando" },
      { nombre: "Tiendas coloniales", tipo: "comercio", distancia: "2 min" },
      { nombre: "Cafés tradicionales", tipo: "alimento", distancia: "2 min" }
    ],
    transferencias: [],
    seo_title: "Parada Portales — Arquit. Colonial Única | MetroGuia",
    meta_description: "Parada Portales de Toluca. Única arquitectura de portales en México. Patrimonio histórico.",
    h1: "Parada Portales — Arquitectura Colonial Única",
    intro: "Los Portales de Toluca son únicos en México. Arquitectura colonial del siglo XVIII con soportales que albergan comercios y cafés históricos.",
    tips: ["Portales únicos en México", "Arquitectura colonial auténtica", "Tiendas y cafés", "Ideal para fotografía", "Ambiente tradicional"],
    mejor_horario: "Mañana para luz natural",
    mundial_relevancia: "Patrimonio arquitectónico de Toluca",
    descripcion_turistica: "Los Portales de Toluca son la única estructura de soportales coloniales en México — arquitectura única del siglo XVIII que funciona como espacio comercial y social. Bajo sus arcos históricos encontrarás tiendas de artesanías, librerías, cafés con ambiente tradicional y tiendas de ropa local.",
    lugares_cercanos: [
      { nombre: "Tiendas de artesanías en Portales", tipo: "comercio", distancia: "1 minuto", descripcion: "Pequeñas tiendas vendiendo artesanías locales, textiles y productos tradicionales" },
      { nombre: "Cafés históricos bajo Portales", tipo: "alimento", distancia: "1 minuto", descripcion: "Cafeterías tradicionales con ambiente colonial, ideal para café y desayuno toluca" },
      { nombre: "Librerías y tiendas de ropa", tipo: "comercio", distancia: "2 minutos", descripcion: "Comercios diversos en la estructura histórica de los Portales" }
    ],
    horarios: {
      lunes_viernes: "06:00 - 22:00",
      sabado: "08:00 - 22:00",
      domingo: "09:00 - 20:00",
      notas: "Parada de tránsito con comercios que varían en horario. Mejor visitarla mañana-tarde para luz natural y ambiente social."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: false,
      rampas: true,
      banos_accesibles: true,
      notas: "Estructura colonial con pisos adoquinados. Acceso a nivel de calle, algunos comercios requieren pequeños escalones, baños públicos cercanos adaptados."
    }
  },
  {
    slug: "cosmovitral",
    nombre: "Cosmovitral",
    linea: "M1",
    municipio: "Toluca",
    tipo_zona: "cultural-botanico",
    pois: [
      { nombre: "Cosmovitral Jardín Botánico", tipo: "cultura", distancia: "2 min caminando" },
      { nombre: "Vitral más grande del mundo como ventana", tipo: "arte", distancia: "2 min" },
      { nombre: "Exposiciones", tipo: "cultura", distancia: "2 min" },
      { nombre: "Cafetería", tipo: "alimento", distancia: "2 min" }
    ],
    transferencias: [],
    seo_title: "Parada Cosmovitral — Jardín Botánico | MetroGuia",
    meta_description: "Parada Cosmovitral. Vitral más grande del mundo como ventana. Jardín Botánico único en Toluca.",
    h1: "Parada Cosmovitral — Vitral Mundial",
    intro: "Cosmovitral es un jardín botánico único en Toluca con el vitral más grande del mundo como ventana (3,900 m²). Exposiciones, arte y naturaleza combinados.",
    tips: ["Vitral más grande del mundo", "Jardín botánico hermoso", "Exposiciones variadas", "Fotografía espectacular", "Entrada con tarifa"],
    mejor_horario: "Mañana-tarde con buena luz",
    mundial_relevancia: "Patrimonio artístico-natural de Toluca",
    descripcion_turistica: "Cosmovitral es un jardín botánico extraordinario con el vitral más grande del mundo como entrada (3,900 m² de vidrio soplado). Alberga exposiciones de arte, plantas tropicales, orquídeas y una cafetería. Imprescindible para amantes del arte y naturaleza.",
    lugares_cercanos: [
      { nombre: "Cosmovitral Jardín Botánico", tipo: "cultura", distancia: "2 minutos", descripcion: "Jardín botánico con vitral gigante de 3,900 m², plantas exóticas, orquídeas y exposiciones temporales de arte" },
      { nombre: "Cafetería Cosmovitral", tipo: "alimento", distancia: "2 minutos", descripcion: "Cafetería con vistas al jardín botánico y vitral, ofrece bebidas y snacks" },
      { nombre: "Zonas comerciales cercanas", tipo: "comercio", distancia: "5 minutos", descripcion: "Tiendas y comercios en zona cercana de Toluca" }
    ],
    horarios: {
      lunes_viernes: "09:00 - 18:00",
      sabado: "09:00 - 18:00",
      domingo: "10:00 - 17:00",
      notas: "Jardín botánico con entrada de pago (~$50-100 MXN). Mejor visitarlo mañana-tarde para luz natural que resalte el vitral. Cerrado lunes en ocasiones, verificar."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: false,
      rampas: true,
      banos_accesibles: true,
      notas: "Acceso de nivel para entrada principal, rampas internas para jardín botánico, senderos pavimentados, baños adaptados en el complejo. Personal disponible para asistencia."
    }
  },
  {
    slug: "metepec-artesanal",
    nombre: "Metepec Artesanal",
    linea: "M1",
    municipio: "Metepec",
    tipo_zona: "artesanal",
    pois: [
      { nombre: "Mercado de Artesanías Metepec", tipo: "comercio", distancia: "2 min caminando" },
      { nombre: "Barro negro y cerámica", tipo: "comercio", distancia: "2 min" },
      { nombre: "Tiendas artesanales", tipo: "comercio", distancia: "2 min" }
    ],
    transferencias: [],
    seo_title: "Parada Metepec Artesanal — Barro Negro | MetroGuia",
    meta_description: "Parada Metepec Artesanal. Mercado de cerámica y barro negro de Metepec.",
    h1: "Parada Metepec Artesanal — Centro de Cerámica",
    intro: "Acceso directo al mercado artesanal de Metepec con barro negro, cerámica policromada y Tonalámatl (calendario prehispánico artesanal).",
    tips: ["Barro negro auténtico", "Cerámica de calidad", "Precios competitivos", "Negociación posible", "Martes-domingo abierto"],
    mejor_horario: "Mañana",
    mundial_relevancia: "Patrimonio artesanal mexiquense",
    descripcion_turistica: "Metepec Artesanal ofrece acceso directo al legendario mercado de barro negro y cerámica policromada. Aquí compras directamente a artesanos que crean piezas tradicionales como el Tonalámatl (calendario prehispánico). Precios competitivos y oportunidad de negociar con vendedores.",
    lugares_cercanos: [
      { nombre: "Mercado de Artesanías Metepec", tipo: "comercio", distancia: "2 minutos", descripcion: "Mercado principal con decenas de puestos de barro negro, cerámica policromada y artesanías tradicionales" },
      { nombre: "Talleres de artesanos directos", tipo: "comercio", distancia: "3 minutos", descripcion: "Talleres de artesanos creando piezas en vivo, venta directa del artista" },
      { nombre: "Tiendas de recuerdos", tipo: "comercio", distancia: "2 minutos", descripcion: "Pequeñas tiendas con selección curada de mejor cerámica y artesanías" }
    ],
    horarios: {
      lunes_viernes: "07:00 - 18:00",
      sabado: "07:00 - 18:00",
      domingo: "08:00 - 17:00",
      notas: "Mercado abierto principalmente martes a domingo. Mejor visitarlo mañana cuando hay mayor variedad y animación. Algunos puestos cierran lunes."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: false,
      rampas: true,
      banos_accesibles: true,
      notas: "Mercado tradicional con pisos no totalmente uniformes. Acceso a nivel principal, algunos pasillos angostos, baños públicos del mercado adaptados, personal puede asistir con la silla de ruedas."
    }
  },
  {
    slug: "san-salvador-metepec",
    nombre: "San Salvador Metepec",
    linea: "M1",
    municipio: "Metepec",
    tipo_zona: "residencial",
    pois: [
      { nombre: "Zona residencial", tipo: "servicios", distancia: "3 min caminando" },
      { nombre: "Comercios locales", tipo: "comercio", distancia: "3 min" }
    ],
    transferencias: [],
    seo_title: "Parada San Salvador Metepec | MetroGuia",
    meta_description: "Parada San Salvador Metepec. Zona residencial de Metepec en Mexibús Línea 1.",
    h1: "Parada San Salvador Metepec — Zona Residencial",
    intro: "Zona residencial de San Salvador Metepec con acceso a servicios locales y comercios.",
    tips: ["Zona tranquila", "Servicios básicos", "Comunidad local", "Conexión rápida a Toluca"],
    mejor_horario: "Tarde-noche",
    mundial_relevancia: "Vida residencial mexiquense",
    descripcion_turistica: "San Salvador Metepec es una parada residencial tranquila en Mexibús Línea 1, con acceso a servicios locales, comercios familiares y vida de comunidad. Punto de conexión para residentes que viajan a Toluca Centro o para turistas hospedados en la zona.",
    lugares_cercanos: [
      { nombre: "Comercios locales y tiendas", tipo: "comercio", distancia: "3 minutos", descripcion: "Tiendas de abarrotes, panaderías, farmacias y servicios del barrio residencial" },
      { nombre: "Pequeños restaurantes locales", tipo: "alimento", distancia: "4 minutos", descripcion: "Fondas, comedores y restaurantes caseros con comida local" },
      { nombre: "Servicios municipales", tipo: "servicios", distancia: "5 minutos", descripcion: "Oficinas administrativas y servicios básicos de la comunidad" }
    ],
    horarios: {
      lunes_viernes: "05:30 - 23:00",
      sabado: "06:00 - 23:00",
      domingo: "07:00 - 22:00",
      notas: "Parada residencial con servicio frecuente según demanda horaria. Mejor visitarla tarde-noche si buscas ambiente local."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: false,
      rampas: true,
      banos_accesibles: true,
      notas: "Parada de nivel de calle, comercios locales con variabilidad en acceso. Rampas disponibles en parada, algunos comercios requieren pequeños escalones, servicios adapta según disponibilidad local."
    }
  },
  {
    slug: "lerma-centro",
    nombre: "Lerma Centro",
    linea: "M2",
    municipio: "Lerma",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Centro Comercial Lerma", tipo: "comercio", distancia: "2 min caminando" },
      { nombre: "Parque Lerma", tipo: "recreación", distancia: "3 min" },
      { nombre: "Servicios municipales", tipo: "servicios", distancia: "3 min" }
    ],
    transferencias: [],
    seo_title: "Parada Lerma Centro — Mexibús Línea 2 | MetroGuia",
    meta_description: "Parada Lerma Centro. Comercio y recreación en Mexibús Línea 2.",
    h1: "Parada Lerma Centro — Centro Comercial",
    intro: "Centro comercial y zona residencial de Lerma con acceso a parques y servicios locales.",
    tips: ["Comercio local", "Parque público", "Servicios variados", "Zona segura"],
    mejor_horario: "Tarde",
    mundial_relevancia: "Centro urbano regional",
    descripcion_turistica: "Lerma Centro es el corazón comercial del municipio de Lerma con tiendas, servicios municipales y acceso al Parque Natural Lerma. Parada de Mexibús Línea 2 ideal para compras locales y recreación al aire libre.",
    lugares_cercanos: [
      { nombre: "Centro Comercial Lerma", tipo: "comercio", distancia: "2 minutos", descripcion: "Tiendas, supermercado, restaurantes y servicios comerciales del municipio" },
      { nombre: "Parque Natural Lerma", tipo: "parque", distancia: "3 minutos", descripcion: "Área verde con senderos, áreas de juego y espacios para picnic" },
      { nombre: "Servicios municipales de Lerma", tipo: "servicios", distancia: "3 minutos", descripcion: "Presidencia municipal, servicios administrativos y atención al público" }
    ],
    horarios: {
      lunes_viernes: "06:00 - 22:00",
      sabado: "07:00 - 22:00",
      domingo: "08:00 - 21:00",
      notas: "Parada central de Lerma con Mexibús Línea 2. Comercios abiertos principalmente mañana-tarde."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: false,
      rampas: true,
      banos_accesibles: true,
      notas: "Zona comercial con acceso a nivel de calle, rampas en accesos principales, baños públicos en centro comercial adaptados. Algunos comercios requieren pequeños escalones."
    }
  },
  {
    slug: "parque-lerma",
    nombre: "Parque Lerma",
    linea: "M2",
    municipio: "Lerma",
    tipo_zona: "parques",
    pois: [
      { nombre: "Parque Natural Lerma", tipo: "parque", distancia: "2 min caminando" },
      { nombre: "Senderos ecológicos", tipo: "recreación", distancia: "2 min" },
      { nombre: "Áreas verdes", tipo: "parque", distancia: "2 min" }
    ],
    transferencias: [],
    seo_title: "Parada Parque Lerma — Naturaleza | MetroGuia",
    meta_description: "Parada Parque Lerma. Naturaleza y recreación al aire libre.",
    h1: "Parada Parque Lerma — Naturaleza y Recreación",
    intro: "Acceso a parque natural con senderos ecológicos, áreas verdes para recreación y contacto con la naturaleza.",
    tips: ["Naturaleza cercana", "Senderos para caminar", "Aire limpio", "Familia friendly", "Ideal para ejercicio"],
    mejor_horario: "Mañana-atardecer",
    mundial_relevancia: "Espacios verdes del Bajío",
    descripcion_turistica: "Parque Lerma es un espacio natural protegido con senderos ecológicos, áreas verdes y ambiente tranquilo. Ideal para caminar, hacer ejercicio, picnic familiar o simplemente descansar en la naturaleza cercana a la ciudad. Parte importante del sistema de parques del Bajío.",
    lugares_cercanos: [
      { nombre: "Parque Natural Lerma", tipo: "parque", distancia: "2 minutos", descripcion: "Bosque conservado con senderos marcados, zonas de pic-nic y áreas de descanso" },
      { nombre: "Senderos ecológicos interpretativos", tipo: "recreación", distancia: "2 minutos", descripcion: "Caminos educativos con señalización sobre flora y fauna local" },
      { nombre: "Áreas de descanso y pic-nic", tipo: "recreación", distancia: "3 minutos", descripcion: "Mesas, basureros y espacios para pasar tiempo en familia en la naturaleza" }
    ],
    horarios: {
      lunes_viernes: "06:00 - 18:00",
      sabado: "07:00 - 18:00",
      domingo: "07:00 - 17:00",
      notas: "Parque abierto durante horas de luz. Mejor visitarlo mañana-atardecer para mejor luz y ambiente. Entrada generalmente libre, mantenimiento voluntario."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: false,
      rampas: false,
      banos_accesibles: true,
      notas: "Parque natural con caminos naturales. Acceso principal a nivel de calle, algunos senderos tienen inclinación natural, baños públicos adaptados en entrada principal."
    }
  },
  {
    slug: "universidad-toluca",
    nombre: "Universidad Toluca",
    linea: "M2",
    municipio: "Toluca",
    tipo_zona: "educativo",
    pois: [
      { nombre: "Campus Universitario", tipo: "educación", distancia: "4 min caminando" },
      { nombre: "Biblioteca", tipo: "educación", distancia: "3 min" },
      { nombre: "Cafetería del campus", tipo: "alimento", distancia: "3 min" }
    ],
    transferencias: [],
    seo_title: "Parada Universidad Toluca | MetroGuia",
    meta_description: "Parada Universidad Toluca. Acceso a campus universitario.",
    h1: "Parada Universidad Toluca — Centro Educativo",
    intro: "Acceso a campus universitario con infraestructura educativa, bibliotecas y espacios deportivos.",
    tips: ["Campus bien equipado", "Biblioteca moderna", "Servicios para estudiantes", "Busses frecuentes"],
    mejor_horario: "Horario escolar",
    mundial_relevancia: "Educación superior en Toluca",
    descripcion_turistica: "Parada Universidad Toluca proporciona acceso a campus universitario moderno con biblioteca, auditorios, espacios deportivos y servicios para estudiantes. Centro de educación superior del Estado de México con ambiente académico y servicios de transporte frecuente.",
    lugares_cercanos: [
      { nombre: "Campus Universitario principal", tipo: "educación", distancia: "4 minutos", descripcion: "Instalaciones académicas, aulas, laboratorios y espacios para estudiantes" },
      { nombre: "Biblioteca universitaria", tipo: "educación", distancia: "3 minutos", descripcion: "Biblioteca moderna con salas de estudio, acervo de libros y acceso a bases de datos" },
      { nombre: "Comedores y cafeterías", tipo: "alimento", distancia: "3 minutos", descripcion: "Servicios de alimentación para estudiantes y personal universitario" }
    ],
    horarios: {
      lunes_viernes: "06:00 - 22:00",
      sabado: "08:00 - 18:00",
      domingo: "cerrado",
      notas: "Parada activa durante horario escolar (lunes-viernes mañana-tarde). Fines de semana con menor movimiento."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Campus accesible con ascensores en edificios principales, rampas en accesos, baños adaptados con barras de apoyo, estacionamiento accesible disponible."
    }
  },
  {
    slug: "aeropuerto-toluca",
    nombre: "Acceso Aeropuerto",
    linea: "M2",
    municipio: "Toluca",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Aeropuerto Internacional Toluca", tipo: "transporte", distancia: "6 min caminando" },
      { nombre: "Servicios aeroportuarios", tipo: "transporte", distancia: "6 min" },
      { nombre: "Rental de autos", tipo: "servicios", distancia: "5 min" }
    ],
    transferencias: [],
    seo_title: "Acceso Aeropuerto Toluca | MetroGuia",
    meta_description: "Acceso Aeropuerto Toluca. Conexión aérea con CDMX.",
    h1: "Acceso Aeropuerto — Transporte Aéreo",
    intro: "Acceso al Aeropuerto Internacional de Toluca con vuelos nacionales e internacionales.",
    tips: ["Conexión aérea", "Vuelos a CDMX", "Rental de autos", "Servicios turísticos"],
    mejor_horario: "Según vuelos",
    mundial_relevancia: "Conectividad aérea del Bajío",
    descripcion_turistica: "Acceso Aeropuerto Toluca conecta con el Aeropuerto Internacional de Toluca, que ofrece vuelos nacionales e internacionales. Está a 6 minutos de la parada, con servicios de rental de autos, gastronomía y tiendas duty-free. Alternativa eficiente al Aeropuerto Internacional Benito Juárez.",
    lugares_cercanos: [
      { nombre: "Aeropuerto Internacional de Toluca (Terminal)", tipo: "transporte", distancia: "6 minutos", descripcion: "Terminal aérea moderna con mostradores de check-in, gastronomía, duty-free y servicios aeroportuarios" },
      { nombre: "Servicios de Rental de Autos", tipo: "servicios", distancia: "5 minutos", descripcion: "Empresas de renta de automóviles (Hertz, Budget, Avis) para traslados independientes" },
      { nombre: "Hotel aeroportuario y servicios", tipo: "alimento", distancia: "integrado", descripcion: "Gastronomía, tiendas de conveniencia y servicios en terminal" }
    ],
    horarios: {
      lunes_viernes: "06:00 - 23:00",
      sabado: "06:00 - 23:00",
      domingo: "07:00 - 22:00",
      notas: "Terminal operativa según horarios de vuelos. Servicio de Mexibús M2 coordinado con llegadas/salidas de aeropuerto."
    },
    accesibilidad: {
      silla_ruedas: true,
      elevadores: true,
      rampas: true,
      banos_accesibles: true,
      notas: "Terminal completamente accesible. Ascensores en todos los niveles, rampas amplias, baños adaptados múltiples, servicios de información en varios idiomas, asistencia de personal disponible."
    }
  },
  {
    slug: "nevado-toluca-acceso",
    nombre: "Acceso Nevado",
    linea: "especial",
    municipio: "Toluca",
    tipo_zona: "natural",
    pois: [
      { nombre: "Nevado de Toluca / Xinantécatl", tipo: "naturaleza", distancia: "60 km" },
      { nombre: "Volcán activo", tipo: "naturaleza", distancia: "pico 4,680 msnm" },
      { nombre: "Lagunas en el cráter", tipo: "naturaleza", distancia: "acceso por carretera" }
    ],
    transferencias: [],
    seo_title: "Acceso Nevado de Toluca — Volcán Xinantécatl | MetroGuia",
    meta_description: "Acceso al Nevado de Toluca. Volcán activo con lagunas en el cráter a 4,680 msnm.",
    h1: "Acceso Nevado de Toluca — Aventura en el Volcán",
    intro: "Acceso a Nevado de Toluca (Xinantécatl), volcán activo con lagunas glaciares en el cráter a 4,680 metros sobre el nivel del mar.",
    tips: ["Volcán activo con lagunas", "Vistas espectaculares", "Altitud requiere aclimatación", "Mejor temporada: primavera", "Caminatas posibles"],
    mejor_horario: "Mañana temprano",
    mundial_relevancia: "Patrimonio natural de Toluca",
    descripcion_turistica: "Nevado de Toluca (Xinantécatl) es un volcán activo a 4,680 metros de altitud con lagunas glaciares en el cráter. Situado a 60 km de Toluca, ofrece caminatas de montaña, vistas espectaculares del Bajío y experiencia única en un ecosistema alpino. Requiere aclimatación y mejor visitarlo en primavera.",
    lugares_cercanos: [
      { nombre: "Cráter del Nevado con lagunas", tipo: "naturaleza", distancia: "caminata desde base", descripcion: "Pico del volcán Xinantécatl con lagunas glaciares de agua turquesa en el cráter" },
      { nombre: "Senderos de montaña", tipo: "recreación", distancia: "desde base del volcán", descripcion: "Caminos para senderismo con diferentes niveles de dificultad, vistas panorámicas del Bajío" },
      { nombre: "Cabañas y hospedaje base", tipo: "alimento", distancia: "base del volcán", descripcion: "Albergues rústicos, restaurantes y servicios básicos en pueblos cercanos (Sultepec, Toluca)" }
    ],
    horarios: {
      lunes_viernes: "acceso 24 horas",
      sabado: "acceso 24 horas",
      domingo: "acceso 24 horas",
      notas: "Parque Nacional abierto todo el año. Mejor época: marzo a junio (primavera/verano). Invierno con posibilidad de nieve. Caminata recomendada con guía local."
    },
    accesibilidad: {
      silla_ruedas: false,
      elevadores: false,
      rampas: false,
      banos_accesibles: false,
      notas: "Zona de montaña natural sin adaptaciones especiales. Requiere caminata de montaña con elevación significant. Solo recomendado para personas con buena condición física. Acceso por carretera hasta base del volcán."
    }
  }
];
