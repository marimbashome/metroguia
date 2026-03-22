// Estaciones Líneas 5, 6 y 7 — MetroGuia
const estacionesL5L6L7 = [
  // ============ LÍNEA 5 — AMARILLA ============
  {
    slug: "politecnico",
    nombre: "Politécnico",
    linea: "5",
    alcaldia: "Gustavo A. Madero",
    tipo_zona: "universitario",
    pois: [
      { nombre: "Instituto Politécnico Nacional", tipo: "universidad", distancia: "5 min caminando" },
      { nombre: "Parque Lira", tipo: "parque", distancia: "8 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro Politécnico CDMX — Campus del IPN | MetroGuia",
    meta_description: "Estación Metro Politécnico: acceso directo al IPN, guía turística y tips para visitantes. Punto clave para estudiantes y turistas en CDMX.",
    h1: "Metro Politécnico: acceso al corazón del IPN",
    intro: "Politécnico es la estación terminal norte de la Línea 5, punto de acceso directo al Instituto Politécnico Nacional. Zona universitaria con ambiente estudiantil y cultural.",
    historia_icono: "El ícono representa la engranaje, símbolo del IPN y la innovación tecnológica mexicana.",
    tips: [
      "Perfecto para conocer el campus más grande de México",
      "Zona con cafeterías estudiantiles económicas",
      "Mejor horario: entre semana para evitar multitudes de estudiantes"
    ],
    mejor_horario: "Lunes a viernes en la mañana para una experiencia más tranquila.",
    mundial_relevancia: "Sin relevancia directa para el Mundial."
  },
  {
    slug: "instituto-del-petroleo",
    nombre: "Instituto del Petróleo",
    linea: "5",
    alcaldia: "Gustavo A. Madero",
    tipo_zona: "universitario",
    pois: [
      { nombre: "Instituto Mexicano del Petróleo", tipo: "universidad", distancia: "3 min caminando" },
      { nombre: "Biblioteca del IMP", tipo: "biblioteca", distancia: "5 min caminando" }
    ],
    transferencias: ["6"],
    seo_title: "Metro Instituto del Petróleo CDMX — Centro de Investigación | MetroGuia",
    meta_description: "Estación Metro Instituto del Petróleo: punto de conexión L5-L6, acceso a investigación energética de México. Guía para turistas y especialistas.",
    h1: "Metro Instituto del Petróleo: entre tecnología y sostenibilidad",
    intro: "Estación estratégica que conecta las Líneas 5 y 6. Ubicada en la zona de investigación e innovación, con acceso al Instituto Mexicano del Petróleo.",
    historia_icono: "El ícono muestra una gota de petróleo, representando la importancia energética de México.",
    tips: [
      "Punto de transferencia clave entre líneas 5 y 6",
      "Zona con instituciones de investigación y desarrollo",
      "Acceso a bibliotecas especializadas en energía"
    ],
    mejor_horario: "De lunes a viernes en horario matutino.",
    mundial_relevancia: "Sin relevancia directa para el Mundial."
  },
  {
    slug: "autobuses-del-norte",
    nombre: "Autobuses del Norte",
    linea: "5",
    alcaldia: "Gustavo A. Madero",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Central de Autobuses del Norte", tipo: "transporte", distancia: "1 min caminando" },
      { nombre: "Zona de refaccionarias", tipo: "comercial", distancia: "5 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro Autobuses del Norte CDMX — Central de Transportes | MetroGuia",
    meta_description: "Estación Metro Autobuses del Norte: conexión directa a la Central de Autobuses. Guía de transportes interurbanos e información turística para viajeros.",
    h1: "Metro Autobuses del Norte: puerta a México",
    intro: "Central de Autobuses del Norte es el principal terminal de transportes foráneos de la CDMX. Estación crucial para turistas que llegan de otras ciudades.",
    historia_icono: "El ícono representa un autobús, símbolo del transporte interurbano mexicano.",
    tips: [
      "Salida directa a la Central de Autobuses del Norte",
      "Información de destinos a todo México",
      "Zona con comedores y servicios para viajeros"
    ],
    mejor_horario: "Cualquier hora es útil, aunque menos ajetreo en horario nocturno.",
    mundial_relevancia: "Punto de llegada para turistas internacionales del Mundial 2026."
  },
  {
    slug: "la-raza",
    nombre: "La Raza",
    linea: "5",
    alcaldia: "Gustavo A. Madero",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Monumento a la Raza", tipo: "monumento", distancia: "3 min caminando" },
      { nombre: "Plaza Comercial La Raza", tipo: "comercial", distancia: "2 min caminando" },
      { nombre: "Mercadería local", tipo: "mercado", distancia: "5 min caminando" }
    ],
    transferencias: ["3"],
    seo_title: "Metro La Raza CDMX — Monumento y Comercio | MetroGuia",
    meta_description: "Estación Metro La Raza: conexión L5-L3, acceso al Monumento a la Raza. Zona comercial con historia para turistas y locales.",
    h1: "Metro La Raza: historia, comercio y transferencia",
    intro: "La Raza es una estación histórica que honra la herencia cultural mexicana. Zona comercial muy transitada con transferencia a la Línea 3.",
    historia_icono: "El ícono muestra un rostro ancestral, representando la mezcla de culturas que forman la identidad mexicana.",
    tips: [
      "Visita el Monumento a la Raza para entender la identidad nacional",
      "Zona con múltiples opciones comerciales",
      "Transferencia importante a Línea 3"
    ],
    mejor_horario: "Entre semana en la tarde para menor congestión.",
    mundial_relevancia: "Excelente punto para entender la identidad cultural mexicana antes de disfrutar del Mundial."
  },
  {
    slug: "misterios",
    nombre: "Misterios",
    linea: "5",
    alcaldia: "Gustavo A. Madero",
    tipo_zona: "residencial",
    pois: [
      { nombre: "Barrio de Misterios", tipo: "barrio-historico", distancia: "2 min caminando" },
      { nombre: "Iglesia de los Misterios", tipo: "iglesia", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro Misterios CDMX — Barrio Histórico | MetroGuia",
    meta_description: "Estación Metro Misterios: zona residencial e histórica. Conoce uno de los barrios más antiguos de la CDMX con carácter auténtico.",
    h1: "Metro Misterios: el barrio histórico de la CDMX",
    intro: "Estación en el corazón del Barrio de Misterios, una de las zonas más antiguas de la Ciudad de México con arquitectura colonial y carácter auténtico.",
    historia_icono: "El ícono representa la Iglesia de los Misterios, monumento histórico de importancia espiritual.",
    tips: [
      "Explora la arquitectura colonial del barrio",
      "Visita la Iglesia de los Misterios para apreciar el arte religioso",
      "Zona con restaurantes de comida tradicional mexicana"
    ],
    mejor_horario: "Mañana o tarde para disfrutar del barrio sin prisa.",
    mundial_relevancia: "Sin relevancia directa para el Mundial."
  },
  {
    slug: "valle-gomez",
    nombre: "Valle Gómez",
    linea: "5",
    alcaldia: "Cuauhtémoc",
    tipo_zona: "residencial",
    pois: [
      { nombre: "Parque Valle Gómez", tipo: "parque", distancia: "2 min caminando" },
      { nombre: "Mercado local", tipo: "mercado", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro Valle Gómez CDMX — Zona Residencial y Verde | MetroGuia",
    meta_description: "Estación Metro Valle Gómez: área residencial tranquila con parque y espacios verdes. Ideal para una pausa en tu ruta por el Metro.",
    h1: "Metro Valle Gómez: tranquilidad y espacios verdes",
    intro: "Valle Gómez es una estación en zona residencial tranquila, con acceso a espacios verdes y ambiente local auténtico. Contraste perfecto con zonas más turísticas.",
    historia_icono: "El ícono representa árboles, simbolizando los espacios verdes y la naturaleza de la zona.",
    tips: [
      "Relájate en el Parque Valle Gómez",
      "Prueba comida auténtica en mercadería local",
      "Zona ideal para fotografía callejera"
    ],
    mejor_horario: "Mañana para disfrutar del parque en paz.",
    mundial_relevancia: "Sin relevancia directa para el Mundial."
  },
  {
    slug: "consulado",
    nombre: "Consulado",
    linea: "5",
    alcaldia: "Gustavo A. Madero",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Zona de comercios variados", tipo: "comercial", distancia: "1 min caminando" },
      { nombre: "Mercado de abastos", tipo: "mercado", distancia: "2 min caminando" }
    ],
    transferencias: ["4"],
    seo_title: "Metro Consulado CDMX — Comercio y Transferencia | MetroGuia",
    meta_description: "Estación Metro Consulado: conexión L5-L4, zona comercial activa. Guía para turistas y locales que buscan transferencia rápida.",
    h1: "Metro Consulado: comercio y conectividad",
    intro: "Estación comercial en la Línea 5 con transferencia a la Línea 4. Zona activa con tiendas, mercados y ambiente urbano dinámico.",
    historia_icono: "El ícono representa la ubicación histórica del consulado, punto de conexión diplomática.",
    tips: [
      "Transferencia rápida a Línea 4",
      "Zona con ofertas comerciales variadas",
      "Mercado de abastos para compras locales"
    ],
    mejor_horario: "Entre semana en horario matutino.",
    mundial_relevancia: "Sin relevancia directa para el Mundial."
  },
  {
    slug: "eduardo-molina",
    nombre: "Eduardo Molina",
    linea: "5",
    alcaldia: "Venustiano Carranza",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Mercado sobre Avenida Eduardo Molina", tipo: "mercado", distancia: "1 min caminando" },
      { nombre: "Zona de comercio ambulante", tipo: "comercial", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro Eduardo Molina CDMX — Mercado Popular | MetroGuia",
    meta_description: "Estación Metro Eduardo Molina: mercado popular y zona de comercio intenso. Vive la experiencia de mercadería auténtica de CDMX.",
    h1: "Metro Eduardo Molina: corazón del comercio popular",
    intro: "Estación en zona de comercio intenso y mercadería popular. Eduardo Molina es punto clave para entender el comercio de base de la CDMX.",
    historia_icono: "El ícono muestra un mercado, símbolo del comercio popular mexicano.",
    tips: [
      "Explora mercadería auténtica y precios locales",
      "Ten cuidado con pertenencias en zona muy concurrida",
      "Mejor en horario de mañana para mayor variedad"
    ],
    mejor_horario: "Mañana, especialmente entre semana.",
    mundial_relevancia: "Sin relevancia directa para el Mundial."
  },
  {
    slug: "aragon",
    nombre: "Aragón",
    linea: "5",
    alcaldia: "Gustavo A. Madero",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Zona de tiendas electrónicas", tipo: "comercial", distancia: "2 min caminando" },
      { nombre: "Centro comercial Aragón", tipo: "comercial", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro Aragón CDMX — Centro Comercial | MetroGuia",
    meta_description: "Estación Metro Aragón: zona comercial importante con tiendas de electrónica y servicios. Destino para compras en la Línea 5.",
    h1: "Metro Aragón: zona de compras y electrónica",
    intro: "Aragón es una estación comercial importante en la Línea 5, especializada en electrónica y servicios. Zona de mucho movimiento comercial.",
    historia_icono: "El ícono representa comercio y transacción, símbolo de la actividad económica.",
    tips: [
      "Compara precios en tiendas de electrónica locales",
      "Zona con servicios bancarios",
      "Evita horarios pico de tarde"
    ],
    mejor_horario: "Mañana o early evening para mejor atención.",
    mundial_relevancia: "Sin relevancia directa para el Mundial."
  },
  {
    slug: "oceanía",
    nombre: "Oceanía",
    linea: "5",
    alcaldia: "Venustiano Carranza",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Terminal de autobuses foráneos", tipo: "transporte", distancia: "2 min caminando" },
      { nombre: "Zona de servicios", tipo: "comercial", distancia: "3 min caminando" }
    ],
    transferencias: ["B"],
    seo_title: "Metro Oceanía CDMX — Transporte e Interconexión | MetroGuia",
    meta_description: "Estación Metro Oceanía: conexión L5-Línea B, punto de transporte importante. Guía para cambios de línea y turismo en CDMX.",
    h1: "Metro Oceanía: puerta a líneas del oriente",
    intro: "Estación de transporte en la Línea 5 con transferencia a la Línea B. Zona con servicios para viajeros y punto importante de interconexión.",
    historia_icono: "El ícono representa el agua y la ubicación geográfica, símbolo de conectividad.",
    tips: [
      "Transferencia rápida a Línea B hacia el oriente",
      "Servicios de transporte e información",
      "Zona con comercios de servicios rápidos"
    ],
    mejor_horario: "Cualquier hora es útil para transferencias.",
    mundial_relevancia: "Sin relevancia directa para el Mundial."
  },
  {
    slug: "terminal-aerea",
    nombre: "Terminal Aérea",
    linea: "5",
    alcaldia: "Venustiano Carranza",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Conexión Benito Juárez / AICM T1", tipo: "transporte", distancia: "5 min caminando" },
      { nombre: "Zona de servicios para viajeros", tipo: "comercial", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro Terminal Aérea CDMX — Acceso al Aeropuerto | MetroGuia",
    meta_description: "Estación Metro Terminal Aérea: conexión a Benito Juárez Int'l Airport. Guía para turistas internacionales y viajeros que llegan a CDMX.",
    h1: "Metro Terminal Aérea: tu entrada a la CDMX",
    intro: "Terminal Aérea conecta directamente con el Aeropuerto Internacional Benito Juárez (AICM Terminal 1). Estación crucial para turistas internacionales.",
    historia_icono: "El ícono representa un avión, símbolo de la conectividad aérea internacional.",
    tips: [
      "Acceso rápido y económico al aeropuerto desde cualquier punto del Metro",
      "Servicios de información turística",
      "Zona con opciones de cambio de divisas"
    ],
    mejor_horario: "Cualquier hora, según vuelos.",
    mundial_relevancia: "Punto clave de entrada para turistas del Mundial FIFA 2026 que llegan vía aérea."
  },
  {
    slug: "hangares",
    nombre: "Hangares",
    linea: "5",
    alcaldia: "Venustiano Carranza",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Zona industrial aeroportuaria", tipo: "industrial", distancia: "2 min caminando" },
      { nombre: "Servicios de transporte", tipo: "transporte", distancia: "1 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro Hangares CDMX — Puerta del Aeropuerto | MetroGuia",
    meta_description: "Estación Metro Hangares: área de servicios aeroportuarios. Estación técnica y de transporte para viajeros en ruta.",
    h1: "Metro Hangares: zona de logística aérea",
    intro: "Estación Terminal Aérea cercana a los hangares y servicios de carga del Aeropuerto Internacional. Zona de importancia logística.",
    historia_icono: "El ícono representa estructuras de almacenamiento, símbolo de logística aérea.",
    tips: [
      "Zona principalmente técnica y de transportación",
      "Acceso rápido a servicios de carga aérea",
      "Menos turismo, más logística"
    ],
    mejor_horario: "Horario laboral para servicios.",
    mundial_relevancia: "Sin relevancia directa para turismo del Mundial."
  },
  {
    slug: "pantitlan",
    nombre: "Pantitlán",
    linea: "5",
    alcaldia: "Venustiano Carranza",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Mercado de Pantitlán", tipo: "mercado", distancia: "1 min caminando" },
      { nombre: "Centro de transferencias multimodal", tipo: "transporte", distancia: "2 min caminando" }
    ],
    transferencias: ["1", "9", "A"],
    seo_title: "Metro Pantitlán CDMX — Gran Nodo de Transferencia | MetroGuia",
    meta_description: "Estación Metro Pantitlán: conexión L5-L1-L9-Línea A, mercado popular. Uno de los nodos más importantes del Metro CDMX.",
    h1: "Metro Pantitlán: el corazón de las transferencias",
    intro: "Pantitlán es el mayor nodo de transferencias del Metro, conectando Líneas 1, 5, 9 y A. Estación terminal sur de la Línea 5 con alto flujo de viajeros.",
    historia_icono: "El ícono representa múltiples vías convergentes, símbolo de la conectividad absoluta.",
    tips: [
      "Punto de transferencia más importante del Metro",
      "Mercado de Pantitlán para mercadería variada",
      "Servicios de información turística disponibles",
      "Planifica bien tu transferencia, es estación muy grande"
    ],
    mejor_horario: "Evita horas pico (7-9am, 5-8pm).",
    mundial_relevancia: "Punto central estratégico para distribuirse a estadios y zonas del Mundial 2026."
  },

  // ============ LÍNEA 6 — ROJA ============
  {
    slug: "el-rosario-l6",
    nombre: "El Rosario",
    linea: "6",
    alcaldia: "Azcapotzalco",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Terminal de autobuses", tipo: "transporte", distancia: "2 min caminando" },
      { nombre: "Zona residencial", tipo: "residencial", distancia: "5 min caminando" }
    ],
    transferencias: ["7"],
    seo_title: "Metro El Rosario CDMX — Terminal Línea 6 | MetroGuia",
    meta_description: "Estación Metro El Rosario (Línea 6): conexión L6-L7, terminal norte. Puerta de entrada a Azcapotzalco y zonas del noroeste.",
    h1: "Metro El Rosario: inicio de la Línea 6 roja",
    intro: "El Rosario es la estación terminal de la Línea 6, punto de transferencia con Línea 7. Zona residencial del noroeste con acceso a Azcapotzalco.",
    historia_icono: "El ícono muestra la flor del Rosario, símbolo de devoción y continuidad.",
    tips: [
      "Transferencia con Línea 7 muy accesible",
      "Zona residencial tranquila",
      "Inicio perfecto para explorar el noroeste"
    ],
    mejor_horario: "Mañana para una experiencia tranquila.",
    mundial_relevancia: "Sin relevancia directa para el Mundial."
  },
  {
    slug: "tezozomoc",
    nombre: "Tezozómoc",
    linea: "6",
    alcaldia: "Azcapotzalco",
    tipo_zona: "cultural-turistico",
    pois: [
      { nombre: "Parque Tezozómoc", tipo: "parque", distancia: "2 min caminando" },
      { nombre: "Anfiteatro y espacios verdes", tipo: "parque", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro Tezozómoc CDMX — Parque Arqueológico | MetroGuia",
    meta_description: "Estación Metro Tezozómoc: acceso a Parque Tezozómoc, espacio verde con referencias prehispánicas. Ideal para descanso y naturaleza.",
    h1: "Metro Tezozómoc: el imperio verde del norte",
    intro: "Estación con acceso directo al Parque Tezozómoc, gran espacio verde con motivos arqueológicos y espacios para recreación familiar.",
    historia_icono: "El ícono representa el emperador Tezozómoc, líder mexica histórico, conectando pasado prehispánico.",
    tips: [
      "Parque perfecto para descansar del caos capitalino",
      "Espacios verdes amplios y seguros",
      "Actividades familiares y deportivas disponibles"
    ],
    mejor_horario: "Cualquier hora, especialmente fines de semana.",
    mundial_relevancia: "Sin relevancia directa para el Mundial."
  },
  {
    slug: "azcapotzalco",
    nombre: "Azcapotzalco",
    linea: "6",
    alcaldia: "Azcapotzalco",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Mercado central de Azcapotzalco", tipo: "mercado", distancia: "2 min caminando" },
      { nombre: "Zona comercial activa", tipo: "comercial", distancia: "1 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro Azcapotzalco CDMX — Centro Comercial | MetroGuia",
    meta_description: "Estación Metro Azcapotzalco: corazón comercial de la alcaldía. Zona de mercadería, servicios y compras locales.",
    h1: "Metro Azcapotzalco: comercio y tradición",
    intro: "Azcapotzalco es el corazón comercial y administrativo de la alcaldía homónima. Zona con mercado central, tiendas y servicios variados.",
    historia_icono: "El ícono representa el centro urbano, símbolo de la cabecera municipal.",
    tips: [
      "Explora mercadería local auténtica",
      "Zona con servicios municipales",
      "Ambiente comercial tradicional mexicano"
    ],
    mejor_horario: "Mañana entre semana para mejor atención.",
    mundial_relevancia: "Sin relevancia directa para el Mundial."
  },
  {
    slug: "ferreria",
    nombre: "Ferrería/Arena Ciudad de México",
    linea: "6",
    alcaldia: "Azcapotzalco",
    tipo_zona: "entretenimiento",
    pois: [
      { nombre: "Arena Ciudad de México", tipo: "arena", distancia: "1 min caminando" },
      { nombre: "Eventos y conciertos", tipo: "entretenimiento", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro Ferrería / Arena Ciudad de México CDMX — Conciertos y Eventos | MetroGuia",
    meta_description: "Estación Metro Ferrería: acceso directo a Arena Ciudad de México. Eventos, conciertos y espectáculos en la capital.",
    h1: "Metro Ferrería: tu entrada al espectáculo",
    intro: "Ferrería es el acceso directo a la Arena Ciudad de México, uno de los principales recintos para conciertos, eventos deportivos y espectáculos de la CDMX.",
    historia_icono: "El ícono muestra la arena y escenario, símbolo del entretenimiento y espectáculos.",
    tips: [
      "Acceso directo a Arena Ciudad de México",
      "Perfecta para eventos y conciertos",
      "Información sobre eventos disponible en estación",
      "Llega temprano en días de evento para evitar congestión"
    ],
    mejor_horario: "Depende del evento. Verifica cartelera.",
    mundial_relevancia: "Posibles eventos paralelos del Mundial 2026 podrían realizarse aquí."
  },
  {
    slug: "norte-45",
    nombre: "Norte 45",
    linea: "6",
    alcaldia: "Azcapotzalco",
    tipo_zona: "comercial-residencial",
    pois: [
      { nombre: "Centro comercial local", tipo: "comercial", distancia: "2 min caminando" },
      { nombre: "Zona residencial", tipo: "residencial", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro Norte 45 CDMX — Zona Residencial | MetroGuia",
    meta_description: "Estación Metro Norte 45: área residencial de Azcapotzalco con comercios locales. Tranquila zona del noroeste.",
    h1: "Metro Norte 45: tranquilidad del noroeste",
    intro: "Estación en zona residencial de Azcapotzalco, con comercios locales y ambiente tranquilo. Punto de descanso en la Línea 6.",
    historia_icono: "El ícono representa la ubicación y orientación, símbolo geográfico del norte.",
    tips: [
      "Zona residencial auténtica",
      "Comercios locales y servicios",
      "Menos turismo, más vida local"
    ],
    mejor_horario: "Tarde para vida cotidiana.",
    mundial_relevancia: "Sin relevancia directa para el Mundial."
  },
  {
    slug: "vallejo",
    nombre: "Vallejo",
    linea: "6",
    alcaldia: "Gustavo A. Madero",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Zona de tiendas y servicios", tipo: "comercial", distancia: "1 min caminando" },
      { nombre: "Mercadería de consumo", tipo: "mercado", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro Vallejo CDMX — Comercio Popular | MetroGuia",
    meta_description: "Estación Metro Vallejo: zona comercial importante del norte. Tiendas, servicios y mercadería para la vida cotidiana.",
    h1: "Metro Vallejo: comercio sin parar",
    intro: "Vallejo es estación comercial importante en la Línea 6, con tiendas de diversos tipos, servicios y mercadería de consumo diario.",
    historia_icono: "El ícono representa comercio y transacción, símbolo de actividad económica.",
    tips: [
      "Zona comercial muy transitada",
      "Variedad de servicios",
      "Evita horas pico para mejor atención"
    ],
    mejor_horario: "Mañana entre semana.",
    mundial_relevancia: "Sin relevancia directa para el Mundial."
  },
  {
    slug: "instituto-del-petroleo-l6",
    nombre: "Instituto del Petróleo",
    linea: "6",
    alcaldia: "Gustavo A. Madero",
    tipo_zona: "universitario",
    pois: [
      { nombre: "Instituto Mexicano del Petróleo", tipo: "universidad", distancia: "3 min caminando" },
      { nombre: "Centro de investigación", tipo: "universidad", distancia: "2 min caminando" }
    ],
    transferencias: ["5"],
    seo_title: "Metro Instituto del Petróleo CDMX — Centro de Investigación | MetroGuia",
    meta_description: "Estación Metro Instituto del Petróleo (Línea 6): conexión L6-L5, centro de investigación energética. Acceso a instituciones académicas.",
    h1: "Metro Instituto del Petróleo: innovación energética",
    intro: "Estación con transferencia a Línea 5, ubicada en zona de investigación e innovación. Acceso al Instituto Mexicano del Petróleo.",
    historia_icono: "El ícono representa energía y desarrollo, símbolo de la investigación mexicana.",
    tips: [
      "Transferencia con Línea 5",
      "Instituciones de investigación especializadas",
      "Zona académica con biblioteca"
    ],
    mejor_horario: "Lunes a viernes en horario laboral.",
    mundial_relevancia: "Sin relevancia directa para el Mundial."
  },
  {
    slug: "lindavista",
    nombre: "Lindavista",
    linea: "6",
    alcaldia: "Gustavo A. Madero",
    tipo_zona: "comercial-residencial",
    pois: [
      { nombre: "Zona comercial Lindavista", tipo: "comercial", distancia: "2 min caminando" },
      { nombre: "Parque Lindavista", tipo: "parque", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro Lindavista CDMX — Comercio y Verde | MetroGuia",
    meta_description: "Estación Metro Lindavista: zona comercial con espacios verdes. Balance entre compras y naturaleza en la Línea 6.",
    h1: "Metro Lindavista: verde y compras",
    intro: "Lindavista es estación que combina zona comercial con espacios verdes. Punto de equilibrio entre actividad urbana y naturaleza.",
    historia_icono: "El ícono muestra una vista linda, símbolo de la belleza paisajística local.",
    tips: [
      "Comercios variados",
      "Acceso a áreas verdes",
      "Zona con restaurantes locales"
    ],
    mejor_horario: "Tarde para disfrutar.",
    mundial_relevancia: "Sin relevancia directa para el Mundial."
  },
  {
    slug: "deportivo-18-de-marzo",
    nombre: "Deportivo 18 de Marzo",
    linea: "6",
    alcaldia: "Gustavo A. Madero",
    tipo_zona: "deportivo",
    pois: [
      { nombre: "Deportivo 18 de Marzo", tipo: "estadio", distancia: "1 min caminando" },
      { nombre: "Instalaciones deportivas", tipo: "estadio", distancia: "2 min caminando" }
    ],
    transferencias: ["3"],
    seo_title: "Metro Deportivo 18 de Marzo CDMX — Instalaciones Deportivas | MetroGuia",
    meta_description: "Estación Metro Deportivo 18 de Marzo: conexión L6-L3, acceso a instalaciones deportivas. Ideal para eventos y entrenamientos.",
    h1: "Metro Deportivo 18 de Marzo: donde juegan los campeones",
    intro: "Estación con transferencia a Línea 3, ubicada junto a importantes instalaciones deportivas del Deportivo 18 de Marzo.",
    historia_icono: "El ícono representa deporte y competición, símbolo del movimiento atlético mexicano.",
    tips: [
      "Acceso a instalaciones deportivas profesionales",
      "Transferencia con Línea 3",
      "Zona para eventos deportivos",
      "Ambiente deportivo y de entrenamiento"
    ],
    mejor_horario: "Depende de eventos deportivos.",
    mundial_relevancia: "Posibles entrenamientos de equipos del Mundial 2026 podrían ocurrir aquí."
  },
  {
    slug: "la-villa-basilica",
    nombre: "La Villa-Basílica",
    linea: "6",
    alcaldia: "Gustavo A. Madero",
    tipo_zona: "religioso",
    pois: [
      { nombre: "Basílica de Guadalupe", tipo: "iglesia", distancia: "1 min caminando" },
      { nombre: "Atrio y espacios religiosos", tipo: "iglesia", distancia: "2 min caminando" },
      { nombre: "Centro de peregrinación más visitado de América", tipo: "iglesia", distancia: "1 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro La Villa-Basílica CDMX — Basílica de Guadalupe | MetroGuia",
    meta_description: "Estación Metro La Villa-Basílica: acceso directo a la Basílica de Guadalupe. Centro de fe y peregrinación más importante de América.",
    h1: "Metro La Villa-Basílica: santuario de fe americano",
    intro: "La Villa-Basílica es estación de acceso directo a la Basílica de Guadalupe, el santuario católico más visitado de América. Lugar de profunda significación espiritual.",
    historia_icono: "El ícono muestra a la Virgen de Guadalupe, símbolo máximo de fe mexicana y latinoamericana.",
    tips: [
      "Uno de los lugares de peregrinación más importantes del mundo",
      "Acceso directo desde el Metro sin caminar mucho",
      "Respetuoso y espiritual, ideal para reflexión",
      "Vestimenta modesta recomendada",
      "Muy concurrida los domingos y días de fiesta"
    ],
    mejor_horario: "Entre semana para una experiencia más tranquila. Domingos y 12 de diciembre muy concurridos.",
    mundial_relevancia: "Sitio espiritual importante para turistas del Mundial que buscan experiencias culturales profundas."
  },
  {
    slug: "martin-carrera",
    nombre: "Martín Carrera",
    linea: "6",
    alcaldia: "Gustavo A. Madero",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Terminal de transferencias", tipo: "transporte", distancia: "1 min caminando" },
      { nombre: "Conexiones multimodales", tipo: "transporte", distancia: "2 min caminando" }
    ],
    transferencias: ["4"],
    seo_title: "Metro Martín Carrera CDMX — Terminal y Transferencia | MetroGuia",
    meta_description: "Estación Metro Martín Carrera: terminal de Línea 6, conexión L6-L4. Nodo importante de transferencias del norte.",
    h1: "Metro Martín Carrera: fin de la Línea 6 roja",
    intro: "Martín Carrera es la estación terminal de la Línea 6, con transferencia a Línea 4. Importante nodo de transferencias en el norte de la CDMX.",
    historia_icono: "El ícono representa vías convergentes, símbolo de la conectividad multimodal.",
    tips: [
      "Terminal de Línea 6",
      "Transferencia con Línea 4",
      "Centro de transferencias importante",
      "Punto de partida para explorar el norte"
    ],
    mejor_horario: "Cualquier hora es útil para transferencias.",
    mundial_relevancia: "Sin relevancia directa para el Mundial."
  },

  // ============ LÍNEA 7 — NARANJA ============
  {
    slug: "el-rosario-l7",
    nombre: "El Rosario",
    linea: "7",
    alcaldia: "Azcapotzalco",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Terminal de autobuses", tipo: "transporte", distancia: "2 min caminando" },
      { nombre: "Zona de servicios", tipo: "comercial", distancia: "3 min caminando" }
    ],
    transferencias: ["6"],
    seo_title: "Metro El Rosario CDMX — Terminal Línea 7 | MetroGuia",
    meta_description: "Estación Metro El Rosario (Línea 7): conexión L7-L6, inicio de la línea naranja. Puerta a Azcapotzalco.",
    h1: "Metro El Rosario: comienzo de la aventura naranja",
    intro: "El Rosario es la estación terminal norte de la Línea 7 naranja, con transferencia a Línea 6. Punto de inicio para recorrer el occidente.",
    historia_icono: "El ícono representa la flor del Rosario, símbolo de belleza y continuidad.",
    tips: [
      "Transferencia con Línea 6 muy cercana",
      "Servicios variados",
      "Inicio de la Línea 7 naranja"
    ],
    mejor_horario: "Mañana para evitar ajetreo.",
    mundial_relevancia: "Sin relevancia directa para el Mundial."
  },
  {
    slug: "aquiles-serdan",
    nombre: "Aquiles Serdán",
    linea: "7",
    alcaldia: "Azcapotzalco",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Zona comercial activa", tipo: "comercial", distancia: "1 min caminando" },
      { nombre: "Tiendas variadas", tipo: "comercial", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro Aquiles Serdán CDMX — Comercio Popular | MetroGuia",
    meta_description: "Estación Metro Aquiles Serdán: zona comercial importante en Azcapotzalco. Tiendas y servicios para todos.",
    h1: "Metro Aquiles Serdán: comercio en movimiento",
    intro: "Aquiles Serdán es estación comercial importante en la Línea 7, con múltiples tiendas y servicios variados.",
    historia_icono: "El ícono representa comercio, símbolo de actividad económica mexicana.",
    tips: [
      "Variedad de tiendas",
      "Servicios locales",
      "Zona muy concurrida"
    ],
    mejor_horario: "Entre semana en la mañana.",
    mundial_relevancia: "Sin relevancia directa para el Mundial."
  },
  {
    slug: "camarones",
    nombre: "Camarones",
    linea: "7",
    alcaldia: "Azcapotzalco",
    tipo_zona: "comercial-residencial",
    pois: [
      { nombre: "Mercado de Camarones", tipo: "mercado", distancia: "2 min caminando" },
      { nombre: "Zona residencial local", tipo: "residencial", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro Camarones CDMX — Mercado Local | MetroGuia",
    meta_description: "Estación Metro Camarones: zona de mercado popular con carácter local. Balance entre comercio y residencia.",
    h1: "Metro Camarones: tradición del mercado local",
    intro: "Camarones es estación con acceso a mercado local y zona residencial. Punto que refleja el comercio tradicional de Azcapotzalco.",
    historia_icono: "El ícono representa mariscos, conectando con el nombre histórico de la zona.",
    tips: [
      "Mercado popular auténtico",
      "Zona residencial tranquila",
      "Experiencia local genuina"
    ],
    mejor_horario: "Mañana para mejor variedad de mercado.",
    mundial_relevancia: "Sin relevancia directa para el Mundial."
  },
  {
    slug: "refineria",
    nombre: "Refinería",
    linea: "7",
    alcaldia: "Azcapotzalco",
    tipo_zona: "industrial",
    pois: [
      { nombre: "Zona industrial de Azcapotzalco", tipo: "industrial", distancia: "2 min caminando" },
      { nombre: "Historia industrial mexicana", tipo: "industrial", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro Refinería CDMX — Patrimonio Industrial | MetroGuia",
    meta_description: "Estación Metro Refinería: zona industrial histórica de Azcapotzalco. Legado de la industria petrolera mexicana.",
    h1: "Metro Refinería: la industria que alimenta a México",
    intro: "Refinería es estación ubicada en zona industrial histórica de Azcapotzalco, reflejando el patrimonio industrial y petroquímico de México.",
    historia_icono: "El ícono representa refinería y producción, símbolo del desarrollo industrial mexicano.",
    tips: [
      "Zona industrial importante",
      "Historia de la industria mexicana",
      "Punto para entender economía mexicana"
    ],
    mejor_horario: "Horario diurno.",
    mundial_relevancia: "Sin relevancia directa para el Mundial."
  },
  {
    slug: "tacuba",
    nombre: "Tacuba",
    linea: "7",
    alcaldia: "Miguel Hidalgo",
    tipo_zona: "historico",
    pois: [
      { nombre: "Zona Histórica de Tacuba", tipo: "monumento", distancia: "2 min caminando" },
      { nombre: "Avenida Paseo de la Reforma", tipo: "avenida-historica", distancia: "5 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro Tacuba CDMX — Zona Histórica Prehispánica | MetroGuia",
    meta_description: "Estación Metro Tacuba: acceso a zona histórica prehispánica. Legado tenochca en pleno occidente de CDMX.",
    h1: "Metro Tacuba: corazón tenochca del poniente",
    intro: "Tacuba es estación ubicada en zona histórica prehispánica, con conexión a importantes vías como Paseo de la Reforma. Legado azteca en el poniente.",
    historia_icono: "El ícono representa Tacuba prehispánico, barrio tenochca histórico.",
    tips: [
      "Zona histórica importante",
      "Acceso a Paseo de la Reforma",
      "Patrimonio prehispánico"
    ],
    mejor_horario: "Mañana para visitas culturales.",
    mundial_relevancia: "Sitio histórico importante para entender raíces prehispánicas."
  },
  {
    slug: "san-joaquin",
    nombre: "San Joaquín",
    linea: "7",
    alcaldia: "Miguel Hidalgo",
    tipo_zona: "comercial-residencial",
    pois: [
      { nombre: "Zona comercial San Joaquín", tipo: "comercial", distancia: "1 min caminando" },
      { nombre: "Parque local", tipo: "parque", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro San Joaquín CDMX — Zona Residencial Céntrica | MetroGuia",
    meta_description: "Estación Metro San Joaquín: zona residencial con comercios locales. Equilibrio entre ciudad y tranquilidad.",
    h1: "Metro San Joaquín: residencial con carácter",
    intro: "San Joaquín es estación en zona residencial mixta con comercios. Balance entre vida urbana y tranquilidad familiar.",
    historia_icono: "El ícono representa san Joaquín, santo patrono de familias y trabajadores.",
    tips: [
      "Zona residencial equilibrada",
      "Comercios locales",
      "Espacios tranquilos"
    ],
    mejor_horario: "Cualquier hora.",
    mundial_relevancia: "Sin relevancia directa para el Mundial."
  },
  {
    slug: "polanco",
    nombre: "Polanco",
    linea: "7",
    alcaldia: "Miguel Hidalgo",
    tipo_zona: "comercial-residencial",
    pois: [
      { nombre: "Zona Residencial Polanco", tipo: "residencial", distancia: "2 min caminando" },
      { nombre: "Restaurantes de lujo", tipo: "restaurante", distancia: "3 min caminando" },
      { nombre: "Hotel Presidente Intercontinental", tipo: "hotel", distancia: "5 min caminando" },
      { nombre: "Centro Comercial Antara", tipo: "comercial", distancia: "8 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro Polanco CDMX — Lujo y Gastronomía | MetroGuia",
    meta_description: "Estación Metro Polanco: acceso a la zona residencial más exclusiva de CDMX. Restaurantes de lujo, hoteles y compras premium.",
    h1: "Metro Polanco: sofisticación en el poniente",
    intro: "Polanco es la zona residencial más exclusiva y sofisticada de la CDMX. Acceso a restaurantes Michelin, hoteles de lujo y centros comerciales premium.",
    historia_icono: "El ícono representa sofisticación y elegancia, símbolo del nivel más alto de la capital.",
    tips: [
      "Zona de lujo y sofisticación",
      "Restaurantes de clase mundial",
      "Hoteles de cinco estrellas",
      "Compras premium en Antara",
      "Ideal para cena especial o experiencia VIP"
    ],
    mejor_horario: "Noche para cenas y entretenimiento. Día para compras.",
    mundial_relevancia: "Zona donde se alojará élite internacional del Mundial 2026. Acceso a gastronomía de clase mundial."
  },
  {
    slug: "auditorio",
    nombre: "Auditorio",
    linea: "7",
    alcaldia: "Miguel Hidalgo",
    tipo_zona: "cultural",
    pois: [
      { nombre: "Auditorio Nacional", tipo: "auditorio", distancia: "1 min caminando" },
      { nombre: "Bosque de Chapultepec", tipo: "parque", distancia: "8 min caminando" },
      { nombre: "Museo Tamayo", tipo: "museo", distancia: "10 min caminando" },
      { nombre: "Museo Jumex", tipo: "museo", distancia: "12 min caminando" },
      { nombre: "Castillo de Chapultepec", tipo: "museo", distancia: "15 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro Auditorio CDMX — Centro Cultural | MetroGuia",
    meta_description: "Estación Metro Auditorio: acceso a Auditorio Nacional y Bosque de Chapultepec. Centro cultural por excelencia de CDMX.",
    h1: "Metro Auditorio: corazón cultural de México",
    intro: "Auditorio es estación ubicada en el centro cultural más importante de la CDMX. Acceso directo al Auditorio Nacional, Bosque de Chapultepec y museos de clase mundial.",
    historia_icono: "El ícono representa las columnas del Auditorio Nacional, símbolo de la cultura mexicana.",
    tips: [
      "Auditorio Nacional para conciertos y espectáculos",
      "Bosque de Chapultepec para naturaleza urbana",
      "Museos Tamayo y Jumex para arte contemporáneo",
      "Castillo de Chapultepec para historia mexicana",
      "Zona cultural más completa de la ciudad"
    ],
    mejor_horario: "Depende del evento. Tarde/noche para conciertos, mañana para museos.",
    mundial_relevancia: "Posibles eventos culturales paralelos del Mundial 2026. Centro de entretenimiento sofisticado."
  },
  {
    slug: "constituyentes",
    nombre: "Constituyentes",
    linea: "7",
    alcaldia: "Miguel Hidalgo",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Paseo de la Reforma", tipo: "avenida-historica", distancia: "1 min caminando" },
      { nombre: "Zona de tiendas y servicios", tipo: "comercial", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro Constituyentes CDMX — En la Reforma | MetroGuia",
    meta_description: "Estación Metro Constituyentes: ubicada sobre Paseo de la Reforma. Comercios, servicios y punto clave para turismo.",
    h1: "Metro Constituyentes: sobre la avenida más famosa",
    intro: "Constituyentes es estación ubicada sobre el Paseo de la Reforma, la avenida más icónica de México. Zona comercial y de servicios estratégica.",
    historia_icono: "El ícono representa la Constitución, fundamento legal de México.",
    tips: [
      "Paseo de la Reforma es la avenida más icónica de México",
      "Acceso a comercios y servicios",
      "Punto estratégico para exploración"
    ],
    mejor_horario: "Cualquier hora.",
    mundial_relevancia: "Sobre la avenida más famosa. Punto estratégico para turismo del Mundial."
  },
  {
    slug: "tacubaya",
    nombre: "Tacubaya",
    linea: "7",
    alcaldia: "Miguel Hidalgo",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Centro de transferencias multimodal", tipo: "transporte", distancia: "1 min caminando" },
      { nombre: "Zona comercial importante", tipo: "comercial", distancia: "2 min caminando" }
    ],
    transferencias: ["1", "9"],
    seo_title: "Metro Tacubaya CDMX — Nodo de Transferencias | MetroGuia",
    meta_description: "Estación Metro Tacubaya: conexión L7-L1-L9. Importante nodo de transferencias de la CDMX.",
    h1: "Metro Tacubaya: el corazón del transporte poniente",
    intro: "Tacubaya es importante nodo de transferencias que conecta Líneas 1, 7 y 9. Centro de distribución estratégico para el poniente y sur de la CDMX.",
    historia_icono: "El ícono representa vías convergentes, símbolo de múltiples rutas.",
    tips: [
      "Transferencia importante entre tres líneas",
      "Centro de transportación estratégico",
      "Zona comercial activa",
      "Punto de redistribución hacia sur y poniente"
    ],
    mejor_horario: "Cualquier hora es útil.",
    mundial_relevancia: "Nodo importante para distribución a zonas del sur durante el Mundial 2026."
  },
  {
    slug: "san-pedro-de-los-pinos",
    nombre: "San Pedro de los Pinos",
    linea: "7",
    alcaldia: "Benito Juárez",
    tipo_zona: "residencial",
    pois: [
      { nombre: "Zona residencial San Pedro de los Pinos", tipo: "residencial", distancia: "2 min caminando" },
      { nombre: "Parque local", tipo: "parque", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro San Pedro de los Pinos CDMX — Zona Residencial | MetroGuia",
    meta_description: "Estación Metro San Pedro de los Pinos: zona residencial tranquila. Escapada de la ciudad sin perder conectividad.",
    h1: "Metro San Pedro de los Pinos: paz en el sur",
    intro: "San Pedro de los Pinos es estación en zona residencial tranquila y arbolada. Escapada del caos urbano con conectividad perfecta.",
    historia_icono: "El ícono representa árboles de pino, símbolo de la naturaleza local.",
    tips: [
      "Zona residencial tranquila",
      "Espacios verdes",
      "Experiencia serena del sur"
    ],
    mejor_horario: "Tarde para descanso.",
    mundial_relevancia: "Sin relevancia directa para el Mundial."
  },
  {
    slug: "san-antonio",
    nombre: "San Antonio",
    linea: "7",
    alcaldia: "Benito Juárez",
    tipo_zona: "residencial",
    pois: [
      { nombre: "Barrio de San Antonio", tipo: "barrio-historico", distancia: "1 min caminando" },
      { nombre: "Iglesia de San Antonio", tipo: "iglesia", distancia: "2 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro San Antonio CDMX — Barrio Histórico | MetroGuia",
    meta_description: "Estación Metro San Antonio: barrio histórico con iglesia colonial. Zona auténtica del sur de CDMX.",
    h1: "Metro San Antonio: autenticidad del sur",
    intro: "San Antonio es estación en barrio histórico auténtico del sur, con iglesia colonial y arquitectura tradicional mexicana.",
    historia_icono: "El ícono representa san Antonio, santo popular mexicano.",
    tips: [
      "Barrio histórico auténtico",
      "Iglesia colonial importante",
      "Experiencia local genuina",
      "Restaurantes de comida típica"
    ],
    mejor_horario: "Tarde para vida local.",
    mundial_relevancia: "Sin relevancia directa para el Mundial."
  },
  {
    slug: "mixcoac",
    nombre: "Mixcoac",
    linea: "7",
    alcaldia: "Benito Juárez",
    tipo_zona: "comercial-residencial",
    pois: [
      { nombre: "Zona comercial Mixcoac", tipo: "comercial", distancia: "2 min caminando" },
      { nombre: "Centro de servicios", tipo: "comercial", distancia: "1 min caminando" }
    ],
    transferencias: ["12"],
    seo_title: "Metro Mixcoac CDMX — Centro Comercial Sur | MetroGuia",
    meta_description: "Estación Metro Mixcoac: conexión L7-L12, zona comercial importante del sur. Centro de servicios para el sur de CDMX.",
    h1: "Metro Mixcoac: comercio y transferencia del sur",
    intro: "Mixcoac es estación comercial importante en la Línea 7, con transferencia a Línea 12. Centro de distribución estratégico para el sur de la CDMX.",
    historia_icono: "El ícono representa comercio, símbolo de intercambio y actividad económica.",
    tips: [
      "Zona comercial importante",
      "Transferencia con Línea 12",
      "Centro de servicios variados"
    ],
    mejor_horario: "Mañana entre semana.",
    mundial_relevancia: "Sin relevancia directa para el Mundial."
  },
  {
    slug: "barranca-del-muerto",
    nombre: "Barranca del Muerto",
    linea: "7",
    alcaldia: "Álvaro Obregón",
    tipo_zona: "residencial",
    pois: [
      { nombre: "Barranca del Muerto", tipo: "accidente-geografico", distancia: "2 min caminando" },
      { nombre: "Zona residencial sur", tipo: "residencial", distancia: "3 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro Barranca del Muerto CDMX — Terminal Sur | MetroGuia",
    meta_description: "Estación Metro Barranca del Muerto: terminal sur de Línea 7. Acceso a zonas residenciales del sur y suroeste.",
    h1: "Metro Barranca del Muerto: fin del viaje naranja",
    intro: "Barranca del Muerto es la estación terminal sur de la Línea 7 naranja. Ubicada en zona residencial del sur con acceso a suroeste de la ciudad.",
    historia_icono: "El ícono representa la Barranca del Muerto, accidente geográfico histórico.",
    tips: [
      "Terminal sur de Línea 7",
      "Zona residencial tranquila",
      "Acceso a sur y suroeste",
      "Final del viaje naranja"
    ],
    mejor_horario: "Cualquier hora.",
    mundial_relevancia: "Sin relevancia directa para el Mundial."
  }
];

module.exports = estacionesL5L6L7;