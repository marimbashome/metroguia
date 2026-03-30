// =============================================================
// MetroGuia.mx — data/cdmx/mexicable.js
// Mexicable: Teleférico del Estado de México (Ecatepec/Tlalnepantla)
// 2 líneas, 14 estaciones, 13.15 km
// Conexión intermodal: Metro L3 (Indios Verdes), Cablebús L1, Metrobús L1/3/7
// =============================================================

export const mexicableLineas = {
  "roja": {
    id: "roja",
    nombre: "Línea Roja",
    nombreCorto: "L1",
    color: "#E53935",
    colorNombre: "Rojo",
    inicio: "Santa Clara",
    fin: "La Cañada",
    total: 7,
    km: 4.9,
    tiempo_recorrido: "17 min",
    horario: "Lun-Vie 5:00-23:00 · Sáb 6:00-23:00 · Dom 7:00-23:00",
    tarifa: "$9 MXN (Mexipase)",
    municipio: "Ecatepec de Morelos",
    descripcion: "La Línea Roja del Mexicable recorre 4.9 km a través de las colonias montañosas de Ecatepec, conectando Santa Clara Coatitla con San Andrés de la Cañada. Inaugurada en 2016, fue el primer teleférico de transporte público en el Estado de México. Ofrece vistas panorámicas de la Sierra de Guadalupe y acceso a comunidades que antes requerían largos trayectos en camión.",
    estaciones: [
      { slug: "mexicable-santa-clara", nombre: "Santa Clara" },
      { slug: "mexicable-hank-gonzalez", nombre: "Hank González" },
      { slug: "mexicable-fatima", nombre: "Fátima" },
      { slug: "mexicable-tablas-del-pozo", nombre: "Tablas del Pozo" },
      { slug: "mexicable-los-bordos", nombre: "Los Bordos" },
      { slug: "mexicable-deportivo", nombre: "Deportivo" },
      { slug: "mexicable-la-canada", nombre: "La Cañada" }
    ],
    conexiones_intermodales: [
      "Transferencia a Línea Verde en estación Hank González"
    ],
    seo_title: "Mexicable Línea Roja — 7 estaciones Santa Clara a La Cañada | MetroGuia",
    meta_description: "Guía de la Línea Roja del Mexicable: 7 estaciones, 4.9 km, $9 MXN. Teleférico en Ecatepec con vistas panorámicas de la Sierra de Guadalupe.",
    h1: "Mexicable Línea Roja — Guía completa"
  },

  "verde": {
    id: "verde",
    nombre: "Línea Verde",
    nombreCorto: "L2",
    color: "#43A047",
    colorNombre: "Verde",
    inicio: "Indios Verdes",
    fin: "Hank González II",
    total: 7,
    km: 8.25,
    tiempo_recorrido: "29 min",
    horario: "Lun-Vie 5:00-23:00 · Sáb 6:00-23:00 · Dom 7:00-23:00",
    tarifa: "$9 MXN (Mexipase)",
    municipio: "Tlalnepantla / Ecatepec",
    descripcion: "La Línea Verde del Mexicable es la línea más larga (8.25 km) y la más estratégica: conecta directamente con la estación Indios Verdes del Metro CDMX (Línea 3), creando un puente entre el Estado de México y el sistema de transporte de la capital. Inaugurada en septiembre 2024, incluye un CETRAM integrado en Indios Verdes que conecta Metro, Metrobús, Cablebús y Mexibús.",
    estaciones: [
      { slug: "mexicable-indios-verdes", nombre: "Indios Verdes" },
      { slug: "mexicable-tanque-de-agua", nombre: "Tanque de Agua" },
      { slug: "mexicable-periferico", nombre: "Periférico" },
      { slug: "mexicable-san-isidro", nombre: "San Isidro" },
      { slug: "mexicable-dr-jimenez-cantu", nombre: "Dr. Jorge Jiménez Cantú" },
      { slug: "mexicable-la-mesa", nombre: "La Mesa" },
      { slug: "mexicable-hank-gonzalez-ii", nombre: "Hank González II" }
    ],
    conexiones_intermodales: [
      "Metro Línea 3 en Indios Verdes",
      "Cablebús Línea 1 en Indios Verdes",
      "Metrobús Líneas 1, 3 y 7 en Indios Verdes",
      "Transferencia a Línea Roja en Hank González II"
    ],
    seo_title: "Mexicable Línea Verde — Indios Verdes a Hank González II | MetroGuia",
    meta_description: "Guía de la Línea Verde del Mexicable: 7 estaciones, 8.25 km. Conecta Metro CDMX (Indios Verdes) con Ecatepec. Teleférico con conexión multimodal.",
    h1: "Mexicable Línea Verde — Guía completa"
  }
}

export const mexicableEstaciones = [
  // ─── LÍNEA ROJA ───
  {
    slug: "mexicable-santa-clara",
    nombre: "Santa Clara",
    linea: "Mexicable Roja",
    lineaId: "roja",
    sistema: "Mexicable",
    municipio: "Ecatepec de Morelos",
    tipo_zona: "residencial",
    lat: 19.5401,
    lng: -99.0587,
    pois: [
      { nombre: "Mercado Santa Clara Coatitla", tipo: "mercado", distancia: "5 min caminando" },
      { nombre: "Vía Morelos", tipo: "transporte", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Mexicable Santa Clara — Terminal Línea Roja | MetroGuia",
    meta_description: "Estación Santa Clara del Mexicable: terminal de la Línea Roja en Ecatepec. Acceso a Vía Morelos y mercado local. Horarios y conexiones.",
    h1: "Mexicable Santa Clara",
    intro: "Santa Clara es la estación terminal de la Línea Roja del Mexicable, ubicada en Santa Clara Coatitla, Ecatepec. Es el punto de inicio para atravesar las colonias montañosas de la Sierra de Guadalupe en teleférico.",
    tips: [
      "Compra tu Mexipase en la taquilla de la estación ($9 MXN por viaje)",
      "Punto de partida ideal para recorrer toda la Línea Roja hasta La Cañada",
      "Mercado local a 5 minutos con comida económica"
    ]
  },
  {
    slug: "mexicable-hank-gonzalez",
    nombre: "Hank González",
    linea: "Mexicable Roja",
    lineaId: "roja",
    sistema: "Mexicable",
    municipio: "Ecatepec de Morelos",
    tipo_zona: "residencial",
    lat: 19.5356,
    lng: -99.0512,
    pois: [
      { nombre: "Col. Hank González", tipo: "barrio", distancia: "En la zona" }
    ],
    transferencias: ["Mexicable Línea Verde (Hank González II)"],
    seo_title: "Mexicable Hank González — Conexión Línea Roja y Verde | MetroGuia",
    meta_description: "Estación Hank González del Mexicable: punto de transferencia entre Línea Roja y Línea Verde. Conexión clave del sistema de teleféricos de Ecatepec.",
    h1: "Mexicable Hank González",
    intro: "Hank González es la estación de transferencia clave del sistema Mexicable, donde convergen la Línea Roja y la Línea Verde. Ubicada en la colonia del mismo nombre en Ecatepec, permite combinar ambas líneas para llegar desde La Cañada hasta Indios Verdes y conectar con el Metro CDMX.",
    tips: [
      "Estación de transferencia entre ambas líneas del Mexicable",
      "Mismo Mexipase funciona para ambas líneas sin costo adicional",
      "Desde aquí puedes tomar la Línea Verde hasta Indios Verdes → Metro L3 al Centro Histórico"
    ]
  },
  {
    slug: "mexicable-fatima",
    nombre: "Fátima",
    linea: "Mexicable Roja",
    lineaId: "roja",
    sistema: "Mexicable",
    municipio: "Ecatepec de Morelos",
    tipo_zona: "residencial",
    lat: 19.5330,
    lng: -99.0465,
    pois: [
      { nombre: "Parroquia de Fátima", tipo: "iglesia", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Mexicable Fátima — Línea Roja Ecatepec | MetroGuia",
    meta_description: "Estación Fátima del Mexicable Línea Roja en Ecatepec. Zona residencial con acceso a colonias de la Sierra de Guadalupe.",
    h1: "Mexicable Fátima",
    intro: "Fátima es una estación intermedia de la Línea Roja del Mexicable, que da servicio a las colonias residenciales en las laderas de la Sierra de Guadalupe.",
    tips: [
      "Zona residencial tranquila con comercios locales",
      "Vistas panorámicas durante el recorrido en teleférico"
    ]
  },
  {
    slug: "mexicable-tablas-del-pozo",
    nombre: "Tablas del Pozo",
    linea: "Mexicable Roja",
    lineaId: "roja",
    sistema: "Mexicable",
    municipio: "Ecatepec de Morelos",
    tipo_zona: "residencial",
    lat: 19.5312,
    lng: -99.0420,
    pois: [
      { nombre: "Colonia Tablas del Pozo", tipo: "barrio", distancia: "En la zona" }
    ],
    transferencias: [],
    seo_title: "Mexicable Tablas del Pozo — Línea Roja Ecatepec | MetroGuia",
    meta_description: "Estación Tablas del Pozo del Mexicable Línea Roja. Zona residencial en Ecatepec con servicio de teleférico.",
    h1: "Mexicable Tablas del Pozo",
    intro: "Tablas del Pozo es una estación intermedia de la Línea Roja del Mexicable, ubicada en la colonia del mismo nombre en Ecatepec. Zona residencial a la que el teleférico dio conectividad que antes no existía.",
    tips: [
      "Zona residencial con acceso limitado por carretera — el teleférico es la forma más rápida de llegar",
      "Comercios locales cerca de la estación"
    ]
  },
  {
    slug: "mexicable-los-bordos",
    nombre: "Los Bordos",
    linea: "Mexicable Roja",
    lineaId: "roja",
    sistema: "Mexicable",
    municipio: "Ecatepec de Morelos",
    tipo_zona: "residencial",
    lat: 19.5288,
    lng: -99.0380,
    pois: [
      { nombre: "Sierra de Guadalupe (mirador)", tipo: "naturaleza", distancia: "10 min caminando" }
    ],
    transferencias: [],
    seo_title: "Mexicable Los Bordos — Línea Roja Ecatepec | MetroGuia",
    meta_description: "Estación Los Bordos del Mexicable Línea Roja. Acceso a la Sierra de Guadalupe y vistas panorámicas del Valle de México.",
    h1: "Mexicable Los Bordos",
    intro: "Los Bordos ofrece algunas de las mejores vistas panorámicas del recorrido en la Línea Roja, con la Sierra de Guadalupe como telón de fondo. Zona residencial con acceso a senderos de la sierra.",
    tips: [
      "Punto con mejores vistas del recorrido — ten la cámara lista",
      "Acceso a senderos de la Sierra de Guadalupe a 10 min caminando"
    ]
  },
  {
    slug: "mexicable-deportivo",
    nombre: "Deportivo",
    linea: "Mexicable Roja",
    lineaId: "roja",
    sistema: "Mexicable",
    municipio: "Ecatepec de Morelos",
    tipo_zona: "deportivo",
    lat: 19.5265,
    lng: -99.0342,
    pois: [
      { nombre: "Unidad Deportiva Ecatepec", tipo: "deportivo", distancia: "5 min caminando" }
    ],
    transferencias: [],
    seo_title: "Mexicable Deportivo — Línea Roja Ecatepec | MetroGuia",
    meta_description: "Estación Deportivo del Mexicable Línea Roja. Acceso a la Unidad Deportiva de Ecatepec y zonas recreativas.",
    h1: "Mexicable Deportivo",
    intro: "Deportivo es la penúltima estación de la Línea Roja, cercana a las instalaciones deportivas de Ecatepec. Zona popular para actividades recreativas al aire libre.",
    tips: [
      "Unidad deportiva a 5 minutos con canchas y áreas verdes",
      "Buena opción para ejercicio matutino antes de tomar el teleférico"
    ]
  },
  {
    slug: "mexicable-la-canada",
    nombre: "La Cañada",
    linea: "Mexicable Roja",
    lineaId: "roja",
    sistema: "Mexicable",
    municipio: "Ecatepec de Morelos",
    tipo_zona: "residencial",
    lat: 19.5240,
    lng: -99.0300,
    pois: [
      { nombre: "San Andrés de la Cañada", tipo: "pueblo", distancia: "En la zona" },
      { nombre: "Sierra de Guadalupe", tipo: "naturaleza", distancia: "5 min caminando" }
    ],
    transferencias: [],
    seo_title: "Mexicable La Cañada — Terminal Línea Roja | MetroGuia",
    meta_description: "Estación La Cañada: terminal sur de la Línea Roja del Mexicable. Acceso a San Andrés de la Cañada en Ecatepec.",
    h1: "Mexicable La Cañada",
    intro: "La Cañada es la estación terminal sur de la Línea Roja, ubicada en la comunidad de San Andrés de la Cañada. Zona montañosa que antes dependía exclusivamente de transporte terrestre con largos tiempos de traslado.",
    tips: [
      "Terminal de la Línea Roja — aquí termina el recorrido",
      "Comunidad con ambiente de pueblo tradicional",
      "Para conectar al Metro CDMX: regresa a Hank González → Línea Verde → Indios Verdes"
    ]
  },

  // ─── LÍNEA VERDE ───
  {
    slug: "mexicable-indios-verdes",
    nombre: "Indios Verdes",
    linea: "Mexicable Verde",
    lineaId: "verde",
    sistema: "Mexicable",
    municipio: "Gustavo A. Madero / Tlalnepantla",
    tipo_zona: "transporte",
    lat: 19.4932,
    lng: -99.1186,
    pois: [
      { nombre: "CETRAM Indios Verdes", tipo: "transporte", distancia: "Integrado" },
      { nombre: "Metro Indios Verdes (Línea 3)", tipo: "metro", distancia: "5 min caminando" },
      { nombre: "Cablebús Línea 1", tipo: "transporte", distancia: "5 min caminando" },
      { nombre: "Metrobús Líneas 1, 3, 7", tipo: "transporte", distancia: "5 min caminando" }
    ],
    transferencias: ["Metro L3", "Cablebús L1", "Metrobús L1/L3/L7"],
    seo_title: "Mexicable Indios Verdes — Conexión Metro L3, Cablebús, Metrobús | MetroGuia",
    meta_description: "Estación Indios Verdes del Mexicable Línea Verde: mega hub multimodal. Conexión directa a Metro Línea 3, Cablebús L1, Metrobús L1/L3/L7. Ruta Ecatepec al Centro CDMX.",
    h1: "Mexicable Indios Verdes",
    intro: "Indios Verdes es el mega hub multimodal del norte de la Ciudad de México. La estación del Mexicable Línea Verde conecta directamente con Metro Línea 3 (hacia Zócalo, Coyoacán, Universidad), Cablebús Línea 1 (hacia Cuautepec), y múltiples líneas de Metrobús. Para turistas del Mundial FIFA 2026, es la puerta de entrada desde el Estado de México al sistema de transporte de CDMX.",
    tips: [
      "Punto de entrada al Metro CDMX desde Ecatepec — camina 5 min al Metro Línea 3",
      "CETRAM integrado con pasillos techados — no necesitas salir a la calle",
      "Desde Metro Indios Verdes: Línea 3 → Hidalgo (25 min) → Zócalo (30 min)",
      "Hora pico intensa 7-9 AM y 6-8 PM — evita si puedes"
    ]
  },
  {
    slug: "mexicable-tanque-de-agua",
    nombre: "Tanque de Agua",
    linea: "Mexicable Verde",
    lineaId: "verde",
    sistema: "Mexicable",
    municipio: "Tlalnepantla de Baz",
    tipo_zona: "residencial",
    lat: 19.5010,
    lng: -99.1080,
    pois: [
      { nombre: "Colonia Tanque de Agua", tipo: "barrio", distancia: "En la zona" }
    ],
    transferencias: [],
    seo_title: "Mexicable Tanque de Agua — Línea Verde | MetroGuia",
    meta_description: "Estación Tanque de Agua del Mexicable Línea Verde. Zona residencial de Tlalnepantla con servicio de teleférico.",
    h1: "Mexicable Tanque de Agua",
    intro: "Tanque de Agua es la segunda estación de la Línea Verde del Mexicable, ubicada en Tlalnepantla. Zona residencial que ahora cuenta con conexión directa al Metro CDMX vía el teleférico.",
    tips: [
      "Zona residencial — pocos servicios turísticos",
      "El teleférico ofrece vistas de la periferia norte de CDMX"
    ]
  },
  {
    slug: "mexicable-periferico",
    nombre: "Periférico",
    linea: "Mexicable Verde",
    lineaId: "verde",
    sistema: "Mexicable",
    municipio: "Tlalnepantla de Baz",
    tipo_zona: "transporte",
    lat: 19.5080,
    lng: -99.0980,
    pois: [
      { nombre: "Anillo Periférico Norte", tipo: "vialidad", distancia: "Cruce directo" },
      { nombre: "Mexibús (conexión)", tipo: "transporte", distancia: "5 min caminando" }
    ],
    transferencias: ["Mexibús"],
    seo_title: "Mexicable Periférico — Línea Verde, conexión Mexibús | MetroGuia",
    meta_description: "Estación Periférico del Mexicable Línea Verde. Cruce con el Anillo Periférico Norte y conexión con Mexibús.",
    h1: "Mexicable Periférico",
    intro: "Periférico es una estación estratégica de la Línea Verde que cruza sobre el Anillo Periférico Norte, una de las vialidades más transitadas del Estado de México. Ofrece conexión con el sistema Mexibús.",
    tips: [
      "Conexión con Mexibús para destinos en el Estado de México",
      "Vista aérea espectacular del Periférico desde la góndola"
    ]
  },
  {
    slug: "mexicable-san-isidro",
    nombre: "San Isidro",
    linea: "Mexicable Verde",
    lineaId: "verde",
    sistema: "Mexicable",
    municipio: "Tlalnepantla de Baz",
    tipo_zona: "residencial",
    lat: 19.5150,
    lng: -99.0880,
    pois: [
      { nombre: "Colonia San Isidro", tipo: "barrio", distancia: "En la zona" }
    ],
    transferencias: [],
    seo_title: "Mexicable San Isidro — Línea Verde | MetroGuia",
    meta_description: "Estación San Isidro del Mexicable Línea Verde en Tlalnepantla. Zona residencial con servicio de teleférico hacia Indios Verdes.",
    h1: "Mexicable San Isidro",
    intro: "San Isidro es una estación intermedia de la Línea Verde del Mexicable, ubicada en la zona residencial de Tlalnepantla. Conecta a los habitantes con el Metro CDMX en menos de 20 minutos.",
    tips: [
      "Zona residencial tranquila",
      "A 15 minutos de Indios Verdes por teleférico"
    ]
  },
  {
    slug: "mexicable-dr-jimenez-cantu",
    nombre: "Dr. Jorge Jiménez Cantú",
    linea: "Mexicable Verde",
    lineaId: "verde",
    sistema: "Mexicable",
    municipio: "Ecatepec de Morelos",
    tipo_zona: "residencial",
    lat: 19.5220,
    lng: -99.0780,
    pois: [
      { nombre: "Hospital regional", tipo: "salud", distancia: "10 min caminando" }
    ],
    transferencias: [],
    seo_title: "Mexicable Dr. Jiménez Cantú — Línea Verde | MetroGuia",
    meta_description: "Estación Dr. Jorge Jiménez Cantú del Mexicable Línea Verde. Zona residencial entre Tlalnepantla y Ecatepec.",
    h1: "Mexicable Dr. Jorge Jiménez Cantú",
    intro: "La estación Dr. Jorge Jiménez Cantú lleva el nombre del ex-gobernador del Estado de México. Ubicada en la frontera entre Tlalnepantla y Ecatepec, da servicio a colonias residenciales de la zona alta.",
    tips: [
      "Acceso a servicios de salud en la zona",
      "Estación intermedia — 15 min a Indios Verdes, 15 min a Hank González II"
    ]
  },
  {
    slug: "mexicable-la-mesa",
    nombre: "La Mesa",
    linea: "Mexicable Verde",
    lineaId: "verde",
    sistema: "Mexicable",
    municipio: "Ecatepec de Morelos",
    tipo_zona: "residencial",
    lat: 19.5280,
    lng: -99.0680,
    pois: [
      { nombre: "Colonia La Mesa", tipo: "barrio", distancia: "En la zona" }
    ],
    transferencias: [],
    seo_title: "Mexicable La Mesa — Línea Verde | MetroGuia",
    meta_description: "Estación La Mesa del Mexicable Línea Verde en Ecatepec. Penúltima estación hacia Hank González II.",
    h1: "Mexicable La Mesa",
    intro: "La Mesa es la penúltima estación de la Línea Verde del Mexicable antes de llegar a Hank González II. Zona residencial de Ecatepec con vistas panorámicas del norte del Valle de México.",
    tips: [
      "Vistas panorámicas del Valle de México desde la góndola",
      "Zona residencial con comercios locales"
    ]
  },
  {
    slug: "mexicable-hank-gonzalez-ii",
    nombre: "Hank González II",
    linea: "Mexicable Verde",
    lineaId: "verde",
    sistema: "Mexicable",
    municipio: "Ecatepec de Morelos",
    tipo_zona: "transporte",
    lat: 19.5356,
    lng: -99.0515,
    pois: [
      { nombre: "Conexión Mexicable Línea Roja", tipo: "transporte", distancia: "3 min caminando" },
      { nombre: "Col. Hank González", tipo: "barrio", distancia: "En la zona" }
    ],
    transferencias: ["Mexicable Línea Roja"],
    seo_title: "Mexicable Hank González II — Conexión Línea Roja y Verde | MetroGuia",
    meta_description: "Estación Hank González II: terminal de la Línea Verde del Mexicable. Transferencia a Línea Roja hacia Santa Clara y La Cañada.",
    h1: "Mexicable Hank González II",
    intro: "Hank González II es la estación terminal de la Línea Verde del Mexicable. Aquí se realiza la transferencia a la Línea Roja, permitiendo recorrer todo el sistema desde Indios Verdes (Metro CDMX) hasta La Cañada en Ecatepec. Es el nodo que une ambas líneas del Mexicable.",
    tips: [
      "Terminal de la Línea Verde — transferencia a Línea Roja aquí",
      "Camina 3 min a la estación Hank González de la Línea Roja",
      "Para llegar al Centro Histórico: Línea Verde → Indios Verdes → Metro L3 → Zócalo (~50 min)"
    ]
  }
]

// Metadata del sistema completo
export const mexicableSistema = {
  nombre: "Mexicable",
  tipo: "Teleférico",
  operador: "Gobierno del Estado de México",
  inauguracion: 2016,
  lineas: 2,
  estaciones: 14,
  km_totales: 13.15,
  tarifa: "$9 MXN",
  metodo_pago: "Tarjeta Mexipase",
  gratuito: "Adultos mayores 60+ (INAPAM), niños menores de 5 años, personas con discapacidad",
  color_sistema: "#E53935",
  descripcion_seo: "El Mexicable es el sistema de teleféricos de transporte público del Estado de México, con 2 líneas que conectan Ecatepec y Tlalnepantla con el Metro CDMX en Indios Verdes. 14 estaciones, 13.15 km, $9 MXN por viaje."
}
