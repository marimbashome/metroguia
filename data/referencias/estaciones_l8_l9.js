// Estaciones Líneas 8 y 9 — MetroGuia
// LÍNEA 8: 19 estaciones | LÍNEA 9: 12 estaciones | TOTAL: 31

const estacionesL8L9 = [
  // ============================================================
  // LÍNEA 8 — VERDE OSCURO (19 estaciones)
  // ============================================================

  {
    slug: "garibaldi",
    nombre: "Garibaldi/Lagunilla",
    linea: "8",
    alcaldia: "Cuauhtémoc",
    tipo_zona: "cultural-nocturno",
    pois: [
      { nombre: "Plaza Garibaldi", tipo: "monumento", distancia: "5 min caminando" },
      { nombre: "Mercado de Lagunilla", tipo: "mercado", distancia: "8 min caminando" },
      { nombre: "Tepito (Centro Histórico)", tipo: "comercial", distancia: "10 min caminando" }
    ],
    transferencias: ["B"],
    seo_title: "Metro Garibaldi CDMX — Mariachis y Cultura Mexicana | MetroGuia",
    meta_description: "Guía de la estación Metro Garibaldi/Lagunilla en CDMX: Plaza Garibaldi con mariachis, mercados tradicionales y la vibra cultural. ¡Perfecta para turistas del Mundial!",
    h1: "Metro Garibaldi: la auténtica experiencia cultural de CDMX",
    intro: "Garibaldi es el corazón cultural nocturno de la Ciudad de México. Aquí encontrarás la icónica Plaza Garibaldi donde actúan mariachis en vivo, rodeada de restaurantes tradicionales y bares. Es el lugar ideal para experimentar la música y tradición mexicana que fascinará a turistas del Mundial 2026.",
    historia_icono: "El ícono de la estación representa una lira o instrumento musical, aludiendo a la tradición mariachi que define a Garibaldi.",
    tips: [
      "Ve por la noche para ver a los mariachis en acción; durante el día la plaza es más tranquila",
      "Llega sin prisa: la experiencia es lenta y social, perfecta para disfrutar conversando",
      "Prueba los antojitos mexicanos en los comedores alrededor de la plaza"
    ],
    mejor_horario: "Después de las 19:00 horas para disfrutar de los mariachis en vivo. Fines de semana especialmente concurrido.",
    mundial_relevancia: "Experiencia cultural auténtica imprescindible para turistas internacionales. Los mariachis son sinónimo de México; ideal para turistas del Mundial que quieren llevarse recuerdos únicos."
  },

  {
    slug: "bellas-artes",
    nombre: "Bellas Artes",
    linea: "8",
    alcaldia: "Cuauhtémoc",
    tipo_zona: "cultural-turistico",
    pois: [
      { nombre: "Palacio de Bellas Artes", tipo: "museo", distancia: "2 min caminando" },
      { nombre: "Centro Histórico", tipo: "monumento", distancia: "5 min caminando" },
      { nombre: "Biblioteca Nacional", tipo: "cultura", distancia: "10 min caminando" }
    ],
    transferencias: ["2"],
    seo_title: "Metro Bellas Artes CDMX — Palacio y Arte Mexicano | MetroGuia",
    meta_description: "Estación Metro Bellas Artes: acceso directo al Palacio de Bellas Artes. Murales, arte, historia y arquitectura. Guía completa para turistas.",
    h1: "Metro Bellas Artes: arte y arquitectura mexicana en el Centro",
    intro: "Bellas Artes es la estación de acceso al Palacio de Bellas Artes, joya arquitectónica que alberga murales de Rivera, Siqueiros y Orozco. Ubicada en el corazón del Centro Histórico, es un punto focal para quien quiera entender el México revolucionario y contemporáneo.",
    historia_icono: "El ícono representa una mascarilla de teatro o máscara artística, símbolo de las artes escénicas y visuales.",
    tips: [
      "Compra boleto para subir a la Sala de Espectáculos; las vistas del Centro son espectaculares",
      "Visita temprano en la mañana para evitar multitudes turísticas",
      "Revisa si hay presentación de Ballet Folclórico — una experiencia imprescindible"
    ],
    mejor_horario: "Mañanas entre 9:00-12:00 horas. Evita tardes muy concurridas.",
    mundial_relevancia: "Parada obligatoria para turistas que quieren conocer la identidad cultural de México. Los murales revolucionarios son contexto histórico esencial."
  },

  {
    slug: "san-juan-de-letran",
    nombre: "San Juan de Letrán",
    linea: "8",
    alcaldia: "Cuauhtémoc",
    tipo_zona: "historico",
    pois: [
      { nombre: "Centro Histórico", tipo: "monumento", distancia: "3 min caminando" },
      { nombre: "Templo Mayor", tipo: "arqueologico", distancia: "12 min caminando" },
      { nombre: "Mercado de Dulces", tipo: "mercado", distancia: "5 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro San Juan de Letrán CDMX — Centro Histórico | MetroGuia",
    meta_description: "Estación San Juan de Letrán: punto de entrada al corazón histórico de CDMX. Templo Mayor, Zócalo, dulces tradicionales y arquitectura colonial.",
    h1: "Metro San Juan de Letrán: en el pulso del Centro Histórico",
    intro: "San Juan de Letrán conecta directamente con las arterias del Centro Histórico de la Ciudad de México. Desde aquí puedes llegar caminando a plazas coloniales, tiendas de artesanías y el Mercado de Dulces que vende golosinas tradicionales desde hace siglos.",
    historia_icono: "El ícono representa letras o pergamino, alusión al nombre literario y a la educación colonial de la zona.",
    tips: [
      "No te pierdas el Mercado de Dulces para llevar souvenirs comestibles auténticos",
      "La zona es mejor para explorar a pie durante el día",
      "Combina con visita al Templo Mayor para entender la estratificación histórica de CDMX"
    ],
    mejor_horario: "Mañanas y mediodía. La zona es menos segura por la noche.",
    mundial_relevancia: "Acceso estratégico al Centro Histórico. Turistas pueden conocer capas de historia: azteca, colonial y moderna en un mismo paseo."
  },

  {
    slug: "salto-del-agua",
    nombre: "Salto del Agua",
    linea: "8",
    alcaldia: "Cuauhtémoc",
    tipo_zona: "historico",
    pois: [
      { nombre: "Centro Histórico", tipo: "monumento", distancia: "5 min caminando" },
      { nombre: "Arquiducto de Chapultepec", tipo: "monumento", distancia: "15 min caminando" }
    ],
    transferencias: ["1"],
    seo_title: "Metro Salto del Agua CDMX — Centro Histórico | MetroGuia",
    meta_description: "Estación Salto del Agua: entrada al Centro Histórico con transferencia a Línea 1. Arquitectura colonial y sitios emblemáticos.",
    h1: "Metro Salto del Agua: conexión al corazón histórico",
    intro: "Salto del Agua es una estación conectora que une el Centro Histórico con otras zonas de la ciudad. Su nombre remite a los antiguos acueductos que traían agua a la capital azteca, un recordatorio de la importancia del agua en la geografía de CDMX.",
    historia_icono: "El ícono representa agua que cae o un acueducto, referencia al sistema hidráulico prehispánico y colonial.",
    tips: [
      "Transferencia ideal con Línea 1 para conectar al sur de la ciudad",
      "Zona comercial: hay tiendas de ropa, electrónica y artesanías",
      "Mejor para movimiento que para permanecer — no es destino final sino punto de paso"
    ],
    mejor_horario: "De 10:00-18:00 horas. Durante la noche no recomendable para turistas sin prisa.",
    mundial_relevancia: "Punto de conexión estratégico para turistas que quieren optimizar su desplazamiento en CDMX. No es destino en sí, pero evita caminar largas distancias."
  },

  {
    slug: "chabacano",
    nombre: "Chabacano",
    linea: "8",
    alcaldia: "Iztapalapa",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Centro de Transferencia", tipo: "transporte", distancia: "en la estación" },
      { nombre: "Terminal de Autobús", tipo: "transporte", distancia: "conectado" },
      { nombre: "Mercado de Chabacano", tipo: "mercado", distancia: "5 min caminando" }
    ],
    transferencias: ["2", "9"],
    seo_title: "Metro Chabacano CDMX — Centro de Transferencias | MetroGuia",
    meta_description: "Estación Chabacano: hub de transporte del Metro CDMX. Transferencias a Líneas 2, 8 y 9. Guía práctica para turistas.",
    h1: "Metro Chabacano: el mayor nodo de transferencias del Metro",
    intro: "Chabacano es el corazón de la red de transporte de la Ciudad de México. Aquí convergen las Líneas 2, 8 y 9, creando un hub crucial para turistas y locales. Desde aquí puedes llegar casi a cualquier punto de la ciudad en cuestión de minutos.",
    historia_icono: "El ícono representa un chabacano (fruta) o un enlace de cadena, simbolizando la conexión multidireccional de transporte.",
    tips: [
      "Estación compleja con múltiples accesos — sigue señalización clara para no perderte",
      "Ten cuidado con tus pertenencias en horas pico",
      "Ideal para turistas porque te lleva a prácticamente cualquier destino del Metro"
    ],
    mejor_horario: "Cualquier hora del día es funcional. Evita horas pico (7-9 AM, 5-7 PM) si prefieres menos aglomeración.",
    mundial_relevancia: "Punto estratégico para maximizar el tiempo de turistas. Desde Chabacano accedes a zonas turísticas, de hospedaje y entretenimiento de toda la ciudad."
  },

  {
    slug: "la-viga",
    nombre: "La Viga",
    linea: "8",
    alcaldia: "Iztapalapa",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Mercado de La Viga", tipo: "mercado", distancia: "5 min caminando" },
      { nombre: "Mercado de Mariscos", tipo: "mercado", distancia: "8 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro La Viga CDMX — Mercado de Mariscos | MetroGuia",
    meta_description: "Estación La Viga: acceso al legendario Mercado de La Viga con productos frescos y mariscos. Experiencia auténtica de CDMX.",
    h1: "Metro La Viga: el mercado más grande de productos frescos",
    intro: "La Viga es la estación del famoso Mercado de La Viga, el más grande y antiguo centro de abastos de la Ciudad de México. Aunque no es «turístico» en sentido convencional, ofrece una experiencia auténtica de cómo compra comida la ciudad todos los días: verduras, frutas, mariscos frescos y especias.",
    historia_icono: "El ícono representa un mercado o viga (madero), alusión al comercio ancestral en esta zona.",
    tips: [
      "Ve temprano (6:00-9:00 AM) para ver el mercado en plena actividad",
      "Ten precaución: es un mercado de trabajadores, no turístico — ve en grupos",
      "Los mariscos frescos son muy baratos; ideal para probar ceviches y cócteles locales"
    ],
    mejor_horario: "Temprano en la mañana (6:00-9:00 AM) cuando el mercado está en su apogeo.",
    mundial_relevancia: "Para turistas aventureros: experiencia auténtica de la vida local lejos de zonas turistificadas. Fotografía, olores y vida de CDMX real."
  },

  {
    slug: "santa-anita",
    nombre: "Santa Anita",
    linea: "8",
    alcaldia: "Iztapalapa",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Mercado de Santa Anita", tipo: "mercado", distancia: "5 min caminando" },
      { nombre: "Centro Comercial", tipo: "comercial", distancia: "10 min caminando" }
    ],
    transferencias: ["4"],
    seo_title: "Metro Santa Anita CDMX — Mercado y Comercio | MetroGuia",
    meta_description: "Estación Santa Anita: transferencia con Línea 4. Mercado tradicional y zona comercial de Iztapalapa.",
    h1: "Metro Santa Anita: mercado y punto de conexión",
    intro: "Santa Anita es una estación conectora entre la Línea 8 y 4, ubicada en la zona comercial de Iztapalapa. El Mercado de Santa Anita vende ropa, calzado y artículos de consumo diario. Es un punto de paso estratégico pero sin atracciones turísticas destacadas.",
    historia_icono: "El ícono representa a Santa Anita, la santa patrona, o un mercado de comercio.",
    tips: [
      "Transferencia útil para turistas que quieren ir al sur de Iztapalapa",
      "Zona segura durante el día; no recomendable para explorar por la noche",
      "No hay atracciones específicas, pero es hub de conexión funcional"
    ],
    mejor_horario: "Durante horas comerciales (10:00-18:00). Evita madrugada y noche.",
    mundial_relevancia: "Sin relevancia directa para el Mundial. Es punto de transferencia técnico, no destino."
  },

  {
    slug: "atlalilco",
    nombre: "Atlalilco",
    linea: "8",
    alcaldia: "Iztapalapa",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Centro de Transferencia", tipo: "transporte", distancia: "en la estación" },
      { nombre: "Zona Residencial", tipo: "residencial", distancia: "inmediata" }
    ],
    transferencias: ["12"],
    seo_title: "Metro Atlalilco CDMX — Transferencia Línea 12 | MetroGuia",
    meta_description: "Estación Atlalilco: acceso a la Línea 12 (Línea Dorada). Conexión hacia Iztapalapa, Coyoacán y Xochimilco.",
    h1: "Metro Atlalilco: conexión a la Línea 12 hacia Xochimilco",
    intro: "Atlalilco es estación de transferencia entre las Líneas 8 y 12. La Línea 12 es conocida como la «Línea Dorada» porque conecta hacia Xochimilco, uno de los destinos turísticos más icónicos de CDMX. Desde Atlalilco puedes cambiar de línea para dirigirte al sur o sureste de la ciudad.",
    historia_icono: "El ícono evoca la geografía prehispánica de Atlalilco, antigua zona lacustre de la cuenca de México.",
    tips: [
      "Transferencia crucial si planeas visitar Xochimilco — combina Líneas 8 → 12 → Xochimilco",
      "Menos concurrida que Chabacano; mejor flujo de pasajeros",
      "Zona residencial: sin atracciones específicas para turistas"
    ],
    mejor_horario: "Cualquier hora funcional para transferencia. No es destino final.",
    mundial_relevancia: "Punto de acceso a Xochimilco vía Línea 12, destino imprescindible para turistas del Mundial."
  },

  {
    slug: "iztapalapa",
    nombre: "Iztapalapa",
    linea: "8",
    alcaldia: "Iztapalapa",
    tipo_zona: "residencial",
    pois: [
      { nombre: "Barrio de Iztapalapa", tipo: "residencial", distancia: "inmediata" },
      { nombre: "Tiendas locales", tipo: "comercial", distancia: "5 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro Iztapalapa CDMX — Zona Residencial | MetroGuia",
    meta_description: "Estación Iztapalapa: acceso a la alcaldía de Iztapalapa. Zona residencial con tiendas y mercados locales.",
    h1: "Metro Iztapalapa: el barrio auténtico del sur de CDMX",
    intro: "Iztapalapa es una estación ubicada en el corazón de la alcaldía más poblada de México. No es «turística» en sentido convencional, pero ofrece una ventana auténtica a la vida cotidiana de los capitalinos fuera del Centro. Barrios populares, comercio local y una población vibrante.",
    historia_icono: "El ícono representa la alcaldía de Iztapalapa o sus inicios prehispánicos.",
    tips: [
      "Zona residencial: sin atracciones turísticas específicas",
      "Ideal para turistas que quieren vivir como un local — come en fondas, compra en mercaditos",
      "Ve durante el día; no recomendable por la noche"
    ],
    mejor_horario: "De 10:00-18:00 horas para mayor seguridad y actividad comercial.",
    mundial_relevancia: "Sin relevancia directa para el Mundial. Es destino para turistas aventureros interesados en vida local auténtica."
  },

  {
    slug: "apatlaco",
    nombre: "Apatlaco",
    linea: "8",
    alcaldia: "Iztapalapa",
    tipo_zona: "residencial",
    pois: [
      { nombre: "Mercado local", tipo: "mercado", distancia: "5 min caminando" },
      { nombre: "Zona residencial", tipo: "residencial", distancia: "inmediata" }
    ],
    transferencias: [],
    seo_title: "Metro Apatlaco CDMX — Zona Residencial Sur | MetroGuia",
    meta_description: "Estación Apatlaco: entrada a la zona residencial sur de Iztapalapa. Mercados y vida local.",
    h1: "Metro Apatlaco: el barrio residencial del extremo sur",
    intro: "Apatlaco es una estación periférica en la Línea 8, ubicada en la zona residencial sur de Iztapalapa. No tiene atracciones turísticas destacadas, pero representa la vida cotidiana de miles de capitalinos que viven lejos del Centro Histórico.",
    historia_icono: "El ícono alude a Apatlaco, nombre prehispánico que significa «agua que corre» en náhuatl.",
    tips: [
      "Zona residencial tranquila, sin puntos de interés turístico específicos",
      "Mercado local auténtico si quieres comprar souvenirs comestibles",
      "No recomendable para turistas que visitan por primera vez CDMX"
    ],
    mejor_horario: "De día para máxima seguridad. Evita noches y madrugadas.",
    mundial_relevancia: "Sin relevancia para el Mundial. Estación exclusivamente residencial."
  },

  {
    slug: "aculco",
    nombre: "Aculco",
    linea: "8",
    alcaldia: "Iztapalapa",
    tipo_zona: "residencial",
    pois: [
      { nombre: "Zona residencial", tipo: "residencial", distancia: "inmediata" }
    ],
    transferencias: [],
    seo_title: "Metro Aculco CDMX — Estación Residencial | MetroGuia",
    meta_description: "Estación Aculco: zona residencial de Iztapalapa. Parada sin atracciones turísticas específicas.",
    h1: "Metro Aculco: estación residencial del sur profundo",
    intro: "Aculco es una estación residencial sin atracciones turísticas destacadas. Forma parte de la Línea 8 que se extiende hacia el sur profundo de Iztapalapa, sirviendo a comunidades de trabajadores y familias que viven lejos del centro.",
    historia_icono: "El ícono representa Aculco, nombre prehispánico derivado del náhuatl.",
    tips: [
      "Estación de paso sin destinos turísticos",
      "Zona segura durante el día pero sin interés para viajeros de ocio",
      "No hay puntos de venta de souvenirs o comida turística"
    ],
    mejor_horario: "No es destino turístico. Solo transporte de residentes.",
    mundial_relevancia: "Sin relevancia para el Mundial."
  },

  {
    slug: "escuadron-201",
    nombre: "Escuadrón 201",
    linea: "8",
    alcaldia: "Iztapalapa",
    tipo_zona: "residencial",
    pois: [
      { nombre: "Zona residencial", tipo: "residencial", distancia: "inmediata" }
    ],
    transferencias: [],
    seo_title: "Metro Escuadrón 201 CDMX — Estación Residencial | MetroGuia",
    meta_description: "Estación Escuadrón 201: zona residencial sur de Iztapalapa. Parada sin atracciones turísticas.",
    h1: "Metro Escuadrón 201: estación del sur profundo de CDMX",
    intro: "Escuadrón 201 es una estación residencial ubicada en el sur de Iztapalapa. Se llama así por homenaje al Escuadrón 201, unidad de aviadores mexicanos en la Segunda Guerra Mundial. Es una estación funcional pero sin atractivos turísticos.",
    historia_icono: "El ícono alude al Escuadrón 201 y la historia militar mexicana.",
    tips: [
      "Estación residencial sin interés para turistas",
      "Zona tranquila pero sin servicios para visitantes",
      "No hay restaurantes, museos o atracciones cercanas"
    ],
    mejor_horario: "No es destino turístico.",
    mundial_relevancia: "Sin relevancia para el Mundial."
  },

  {
    slug: "parque-de-los-venados",
    nombre: "Parque de los Venados",
    linea: "8",
    alcaldia: "Iztapalapa",
    tipo_zona: "residencial",
    pois: [
      { nombre: "Zona residencial", tipo: "residencial", distancia: "inmediata" }
    ],
    transferencias: [],
    seo_title: "Metro Parque de los Venados CDMX — Estación Residencial | MetroGuia",
    meta_description: "Estación Parque de los Venados: zona residencial de Iztapalapa. Parada funcional sin atracciones turísticas.",
    h1: "Metro Parque de los Venados: estación residencial del sur",
    intro: "Parque de los Venados es una estación residencial ubicada en la zona sur de Iztapalapa. Aunque el nombre sugiere un parque, es principalmente una zona de viviendas y comercio local sin atracciones turísticas destacadas.",
    historia_icono: "El ícono alude a los venados, fauna característica de la región histórica.",
    tips: [
      "Estación residencial sin destinos turísticos",
      "Zona segura durante el día",
      "No recomendable para turistas sin guía local"
    ],
    mejor_horario: "No es destino turístico.",
    mundial_relevancia: "Sin relevancia para el Mundial."
  },

  {
    slug: "penon-viejo",
    nombre: "Peñón Viejo",
    linea: "8",
    alcaldia: "Iztapalapa",
    tipo_zona: "residencial",
    pois: [
      { nombre: "Zona residencial", tipo: "residencial", distancia: "inmediata" }
    ],
    transferencias: [],
    seo_title: "Metro Peñón Viejo CDMX — Estación Residencial | MetroGuia",
    meta_description: "Estación Peñón Viejo: zona residencial sur de Iztapalapa. Parada sin atracciones turísticas.",
    h1: "Metro Peñón Viejo: estación del sur de Iztapalapa",
    intro: "Peñón Viejo es una estación residencial ubicada en el extremo sur de Iztapalapa. Es una zona de viviendas y comercio local que sirve a los residentes de esta área, pero sin puntos de interés para visitantes.",
    historia_icono: "El ícono representa un peñol o roca antigua, alusión geográfica a la zona.",
    tips: [
      "Estación de residentes, no turística",
      "Zona segura pero sin servicios para viajeros",
      "No hay restaurantes o atracciones cercanas"
    ],
    mejor_horario: "No es destino turístico.",
    mundial_relevancia: "Sin relevancia para el Mundial."
  },

  {
    slug: "balbuena",
    nombre: "Balbuena",
    linea: "8",
    alcaldia: "Iztapalapa",
    tipo_zona: "residencial",
    pois: [
      { nombre: "Zona residencial", tipo: "residencial", distancia: "inmediata" }
    ],
    transferencias: [],
    seo_title: "Metro Balbuena CDMX — Estación Residencial | MetroGuia",
    meta_description: "Estación Balbuena: zona residencial sur de Iztapalapa. Parada sin atracciones turísticas específicas.",
    h1: "Metro Balbuena: estación residencial del extremo sur",
    intro: "Balbuena es una estación residencial ubicada en el sur de Iztapalapa. Sirve a comunidades residenciales de trabajadores y familias, pero no cuenta con atracciones turísticas destacadas.",
    historia_icono: "El ícono alude a Balbuena, nombre de la zona.",
    tips: [
      "Estación residencial sin interés turístico",
      "Zona tranquila y segura durante el día",
      "No hay servicios específicos para viajeros"
    ],
    mejor_horario: "No es destino turístico.",
    mundial_relevancia: "Sin relevancia para el Mundial."
  },

  {
    slug: "minas",
    nombre: "Minas",
    linea: "8",
    alcaldia: "Iztapalapa",
    tipo_zona: "residencial",
    pois: [
      { nombre: "Zona residencial", tipo: "residencial", distancia: "inmediata" }
    ],
    transferencias: [],
    seo_title: "Metro Minas CDMX — Estación Residencial | MetroGuia",
    meta_description: "Estación Minas: zona residencial sur de Iztapalapa. Parada sin atracciones turísticas.",
    h1: "Metro Minas: estación residencial del sur de CDMX",
    intro: "Minas es una estación residencial ubicada en la zona sur de Iztapalapa. Como muchas estaciones del extremo sur de la Línea 8, sirve principalmente a residentes locales sin ofrecer atracciones turísticas.",
    historia_icono: "El ícono alude a la minería o recursos minerales históricos de la zona.",
    tips: [
      "Estación residencial funcional sin destinos para turistas",
      "Zona segura durante el día",
      "No recomendable para visita sin guía"
    ],
    mejor_horario: "No es destino turístico.",
    mundial_relevancia: "Sin relevancia para el Mundial."
  },

  {
    slug: "guelatao",
    nombre: "Guelatao",
    linea: "8",
    alcaldia: "Iztapalapa",
    tipo_zona: "residencial",
    pois: [
      { nombre: "Zona residencial", tipo: "residencial", distancia: "inmediata" }
    ],
    transferencias: [],
    seo_title: "Metro Guelatao CDMX — Estación Residencial | MetroGuia",
    meta_description: "Estación Guelatao: zona residencial sur de Iztapalapa. Parada sin atracciones turísticas específicas.",
    h1: "Metro Guelatao: estación residencial del sur profundo",
    intro: "Guelatao es una estación residencial ubicada en el extremo sur de Iztapalapa. Se llama así por homenaje a Benito Juárez, quien nació en Guelatao, Oaxaca. Es una estación funcional para residentes, sin atracciones turísticas.",
    historia_icono: "El ícono alude a Guelatao, pueblo oaxaqueño de nacimiento de Benito Juárez.",
    tips: [
      "Estación residencial sin puntos de interés turístico",
      "Zona segura pero sin servicios para viajeros",
      "No hay museos, restaurantes o mercados destacados"
    ],
    mejor_horario: "No es destino turístico.",
    mundial_relevancia: "Sin relevancia para el Mundial."
  },

  {
    slug: "cerro-de-la-estrella",
    nombre: "Cerro de la Estrella",
    linea: "8",
    alcaldia: "Iztapalapa",
    tipo_zona: "parque",
    pois: [
      { nombre: "Parque Ecológico Cerro de la Estrella", tipo: "parque", distancia: "10 min caminando" },
      { nombre: "Zona Arqueológica Cerro de la Estrella", tipo: "arqueologico", distancia: "10 min caminando" },
      { nombre: "Vistas panorámicas de CDMX", tipo: "monumento", distancia: "15 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro Cerro de la Estrella CDMX — Parque y Arqueología | MetroGuia",
    meta_description: "Estación Cerro de la Estrella: acceso al Parque Ecológico y zona arqueológica. Vistas panorámicas de la Ciudad de México. Naturaleza e historia.",
    h1: "Metro Cerro de la Estrella: naturaleza, arqueología y vistas panorámicas",
    intro: "Cerro de la Estrella es la joya ecológica de la Línea 8. Ubicado en Iztapalapa, ofrece un Parque Ecológico de 128 hectáreas con zona arqueológica prehispánica, senderos de senderismo y vistas panorámicas espectaculares de toda la Ciudad de México. Es un oasis de naturaleza a minutos del centro.",
    historia_icono: "El ícono representa una estrella en la cima de un cerro, aludiendo al nombre geográfico y a la importancia astronómica del sitio.",
    tips: [
      "Lleva agua y zapatos cómodos: el ascenso al cerro es moderado pero vale la pena",
      "Las vistas desde la cima son espectaculares al atardecer — llega con tiempo",
      "La zona arqueológica está parcialmente documentada; contratar un guía enriquece la visita",
      "Es uno de los pocos espacios verdes de CDMX: respirarás aire fresco auténtico"
    ],
    mejor_horario: "Temprano en la mañana (8:00-11:00 AM) o atardecer (16:00-18:00 PM) para evitar calor y disfrutar luz dorada.",
    mundial_relevancia: "Destino imprescindible para turistas que quieren escapar del ruido urbano. Ofrece perspectiva geográfica completa de dónde está el Estadio Azteca y otros puntos relevantes del Mundial."
  },

  {
    slug: "constitucion-de-1917",
    nombre: "Constitución de 1917",
    linea: "8",
    alcaldia: "Iztapalapa",
    tipo_zona: "residencial",
    pois: [
      { nombre: "Barrio residencial", tipo: "residencial", distancia: "inmediata" },
      { nombre: "Mercado local", tipo: "mercado", distancia: "5 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro Constitución de 1917 CDMX — Terminus Sur | MetroGuia",
    meta_description: "Estación Constitución de 1917: terminus de la Línea 8. Zona residencial periférica de Iztapalapa. Final de línea.",
    h1: "Metro Constitución de 1917: el terminus sur de la Línea 8",
    intro: "Constitución de 1917 es el terminus sur de la Línea 8. Ubicada en el extremo de Iztapalapa, es una estación completamente residencial que sirve a comunidades locales sin atracciones turísticas específicas. Su nombre honra la Constitución Política de los Estados Unidos Mexicanos de 1917.",
    historia_icono: "El ícono representa la Constitución Mexicana de 1917 o el águila nacional.",
    tips: [
      "Terminus de línea: final de ruta de la Línea 8",
      "Zona residencial periférica sin atracciones turísticas",
      "No recomendable para turistas sin guía",
      "Zona segura durante el día"
    ],
    mejor_horario: "De día para mayor seguridad. No es destino turístico.",
    mundial_relevancia: "Sin relevancia para el Mundial. Es estación funcional residencial."
  },

  // ============================================================
  // LÍNEA 9 — CAFÉ/MARRÓN (12 estaciones)
  // ============================================================

  {
    slug: "tacubaya",
    nombre: "Tacubaya",
    linea: "9",
    alcaldia: "Miguel Hidalgo",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Centro de Transferencia", tipo: "transporte", distancia: "en la estación" },
      { nombre: "Zona residencial", tipo: "residencial", distancia: "5 min caminando" },
      { nombre: "Castillo de Chapultepec", tipo: "monumento", distancia: "15 min caminando" }
    ],
    transferencias: ["1", "7"],
    seo_title: "Metro Tacubaya CDMX — Hub de Transferencias | MetroGuia",
    meta_description: "Estación Tacubaya: transferencia con Líneas 1 y 7. Acceso a Chapultepec, Bosque y castillo. Hub de transporte del occidente de CDMX.",
    h1: "Metro Tacubaya: conexión al Castillo de Chapultepec",
    intro: "Tacubaya es una estación hub de la Línea 9 que conecta con las Líneas 1 y 7. Ubicada en Miguel Hidalgo, está a corta distancia del Castillo de Chapultepec, una de las atracciones turísticas más icónicas de CDMX. Es punto de conexión estratégico para turistas que quieren visitar el Bosque de Chapultepec.",
    historia_icono: "El ícono representa un cerro o montaña, aludiendo a la geografía de Chapultepec y Tacubaya.",
    tips: [
      "Transferencia crucial para acceder a Chapultepec vía Líneas 1 o 7 después de cambiar",
      "Estación grande y bien señalizada, pero confusa por múltiples accesos",
      "Ten cuidado con carteristas en horas pico",
      "Combina Tacubaya + Chapultepec para día completo de turismo"
    ],
    mejor_horario: "Mañanas (9:00-12:00 horas) para evitar multitudes en Chapultepec.",
    mundial_relevancia: "Punto estratégico para turistas que quieren conocer Chapultepec. Desde Tacubaya accedes a castillo, museos y bosque, elementos imprescindibles del itinerario turístico de CDMX."
  },

  {
    slug: "patriotismo",
    nombre: "Patriotismo",
    linea: "9",
    alcaldia: "Benito Juárez",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Zona comercial", tipo: "comercial", distancia: "inmediata" },
      { nombre: "Centro Comercial", tipo: "comercial", distancia: "5 min caminando" },
      { nombre: "Restaurantes", tipo: "gastronomia", distancia: "5 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro Patriotismo CDMX — Zona Comercial | MetroGuia",
    meta_description: "Estación Patriotismo: zona comercial y de negocios en Benito Juárez. Tiendas, restaurantes y vida urbana de CDMX.",
    h1: "Metro Patriotismo: el pulso comercial de Benito Juárez",
    intro: "Patriotismo es una estación ubicada en la zona comercial de Benito Juárez. Rodeada de tiendas, restaurantes y oficinas, es un punto de paso dinámico que muestra la vida urbana capitalina. No es atractividad turística en sí, pero ofrece servicios prácticos para viajeros.",
    historia_icono: "El ícono representa la bandera mexicana o el patriotismo nacional.",
    tips: [
      "Zona comercial útil para comprar última hora souvenirs o ropa",
      "Hay restaurantes y cafeterías para descansar entre actividades",
      "Mejor durante horas comerciales (10:00-18:00)",
      "Zona segura durante el día"
    ],
    mejor_horario: "Horas comerciales: 10:00-18:00 horas.",
    mundial_relevancia: "Sin relevancia directa turística. Zona funcional de paso para servicios."
  },

  {
    slug: "chilpancingo",
    nombre: "Chilpancingo",
    linea: "9",
    alcaldia: "Benito Juárez",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Zona comercial", tipo: "comercial", distancia: "inmediata" },
      { nombre: "Tiendas locales", tipo: "comercial", distancia: "5 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro Chilpancingo CDMX — Zona Comercial | MetroGuia",
    meta_description: "Estación Chilpancingo: zona comercial de Benito Juárez. Tiendas, mercados locales y vida urbana.",
    h1: "Metro Chilpancingo: comercio local del centro de CDMX",
    intro: "Chilpancingo es una estación comercial ubicada en la alcaldía Benito Juárez. Es una zona de paso con tiendas y mercados locales donde la vida urbana capitalina bulle en ritmo acelerado. No es destino turístico en sí, pero ofrece vista auténtica del CDMX comercial.",
    historia_icono: "El ícono alude a Chilpancingo, capital del estado de Guerrero.",
    tips: [
      "Zona comercial activa durante el día",
      "Útil para compras de última hora",
      "Mercados locales con precios accesibles",
      "Evita la noche si no conoces la zona"
    ],
    mejor_horario: "10:00-18:00 horas para máxima actividad comercial.",
    mundial_relevancia: "Sin relevancia turística específica. Zona de paso funcional."
  },

  {
    slug: "centro-medico",
    nombre: "Centro Médico",
    linea: "9",
    alcaldia: "Benito Juárez",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Centro Médico Nacional", tipo: "salud", distancia: "5 min caminando" },
      { nombre: "Zona comercial", tipo: "comercial", distancia: "5 min caminando" }
    ],
    transferencias: ["3"],
    seo_title: "Metro Centro Médico CDMX — Transferencia Línea 3 | MetroGuia",
    meta_description: "Estación Centro Médico: transferencia con Línea 3. Conexión hacia el sur de CDMX (Taxqueña, Tren Ligero).",
    h1: "Metro Centro Médico: conexión a Línea 3 hacia el sur",
    intro: "Centro Médico es una estación de transferencia entre las Líneas 9 y 3. Ubicada en Benito Juárez, es un hub funcional que permite a turistas acceder al sur de la ciudad, incluyendo el Tren Ligero hacia Tasqueña. Es punto de conexión estratégico pero sin atracciones turísticas propias.",
    historia_icono: "El ícono representa una cruz médica o institución de salud.",
    tips: [
      "Transferencia estratégica: L9 → L3 → Tren Ligero hacia Tasqueña",
      "Centro Médico Nacional cercano, pero no es destino turístico",
      "Estación funcional bien señalizada",
      "Útil para optimizar rutas hacia el sur de la ciudad"
    ],
    mejor_horario: "Cualquier hora funcional para transferencia.",
    mundial_relevancia: "Punto estratégico de conexión hacia Tren Ligero. Turistas del Mundial pueden usar esta ruta para llegar a Tasqueña y la zona sur de CDMX."
  },

  {
    slug: "lazaro-cardenas",
    nombre: "Lázaro Cárdenas",
    linea: "9",
    alcaldia: "Cuauhtémoc",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Zona comercial", tipo: "comercial", distancia: "inmediata" },
      { nombre: "Parque Hundido", tipo: "parque", distancia: "10 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro Lázaro Cárdenas CDMX — Comercio y Parques | MetroGuia",
    meta_description: "Estación Lázaro Cárdenas: zona comercial de Cuauhtémoc. Acceso a Parque Hundido y vida urbana del Centro.",
    h1: "Metro Lázaro Cárdenas: la zona comercial del Centro-Sur",
    intro: "Lázaro Cárdenas es una estación ubicada en la alcaldía Cuauhtémoc. La zona es comercial con acceso al Parque Hundido, un espacio verde urbano frecuentado por locales. Es punto intermedio entre el Centro Histórico y las estaciones del sur.",
    historia_icono: "El ícono representa a Lázaro Cárdenas, expresidente mexicano conocido por su política de reforma agraria.",
    tips: [
      "Parque Hundido cercano: ofrece escape de ruido urbano",
      "Zona comercial con servicios prácticos",
      "Ve durante el día para máxima seguridad",
      "Útil para turistas que quieren descansar en verde"
    ],
    mejor_horario: "10:00-18:00 horas para actividad comercial. Parque mejor en mañanas.",
    mundial_relevancia: "Sin relevancia directa para el Mundial. Zona de paso con espacio verde para descanso."
  },

  {
    slug: "chabacano-l9",
    nombre: "Chabacano",
    linea: "9",
    alcaldia: "Iztapalapa",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Centro de Transferencia", tipo: "transporte", distancia: "en la estación" },
      { nombre: "Terminal de Autobús", tipo: "transporte", distancia: "conectado" }
    ],
    transferencias: ["2", "8"],
    seo_title: "Metro Chabacano CDMX — Mega Hub de Transferencias | MetroGuia",
    meta_description: "Estación Chabacano: el nodo de transporte más importante de CDMX. Transferencias L2, L8 y L9. Centro neurálgico de la red Metro.",
    h1: "Metro Chabacano: el corazón de la red de transporte",
    intro: "Chabacano es el mega hub de transporte de CDMX, donde confluyen tres líneas (2, 8 y 9). Es el punto de transferencia más importante de toda la red Metro, conectando norte, sur, este y oeste de la ciudad. Un lugar caótico pero estratégico que todo turista experimentará.",
    historia_icono: "El ícono representa una cadena de conexiones o el nodo central de una red.",
    tips: [
      "Estación gigante y confusa: sigue señalización clara para no perderte",
      "En horas pico es abrumadora — ve con tiempo",
      "Cuida tus pertenencias en medio de multitudes",
      "Es el punto neurálgico: desde aquí llegas a cualquier lado de CDMX"
    ],
    mejor_horario: "Evita 7-9 AM y 5-7 PM si prefieres menos caos. Otros horarios funcionales.",
    mundial_relevancia: "Hub crítico para turistas del Mundial. La mayoría de rutas inteligentes pasan por Chabacano."
  },

  {
    slug: "jamaica",
    nombre: "Jamaica",
    linea: "9",
    alcaldia: "Venustiano Carranza",
    tipo_zona: "comercial",
    pois: [
      { nombre: "Terminal de Autobús Jamaica", tipo: "transporte", distancia: "conectado" },
      { nombre: "Mercado Jamaica", tipo: "mercado", distancia: "5 min caminando" },
      { nombre: "Zona comercial", tipo: "comercial", distancia: "inmediata" }
    ],
    transferencias: ["4"],
    seo_title: "Metro Jamaica CDMX — Terminal de Autobús y Mercado | MetroGuia",
    meta_description: "Estación Jamaica: transferencia con Línea 4. Terminal de autobús y Mercado Jamaica. Hub de transporte inter-ciudad.",
    h1: "Metro Jamaica: terminal de autobús y el mercado más grande",
    intro: "Jamaica es una estación de transferencia entre las Líneas 9 y 4, ubicada en Venustiano Carranza. Es hogar de la Terminal de Autobús Jamaica, uno de los mayores hubs de transporte inter-ciudad, y del Mercado Jamaica, el mercado de flores y plantas más grande de Latinoamérica. Es caótica pero vibrante.",
    historia_icono: "El ícono representa flores o plantas, aludiendo al famoso Mercado Jamaica.",
    tips: [
      "Mercado Jamaica es espectáculo sensorial: flores, olores, colores — ve por la mañana",
      "Terminal de autobús: útil si necesitas ir a otras ciudades de México",
      "Zona confusa por multitudes: ve con cuidado y atención",
      "Transferencia fácil hacia Línea 4 (sur de la ciudad)"
    ],
    mejor_horario: "Temprano en la mañana (6:00-9:00 AM) para ver el Mercado Jamaica en apogeo.",
    mundial_relevancia: "Destino único: Mercado Jamaica es experiencia sensorial imprescindible para turistas aventureros. Fotografía, colores, aromas de México auténtico."
  },

  {
    slug: "mixiuhca",
    nombre: "Mixiuhca",
    linea: "9",
    alcaldia: "Venustiano Carranza",
    tipo_zona: "deportivo",
    pois: [
      { nombre: "Estadio Olímpico Universitario", tipo: "estadio", distancia: "10 min caminando" },
      { nombre: "Parque de la 9ª Sección", tipo: "parque", distancia: "5 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro Mixiuhca CDMX — Estadio Olímpico | MetroGuia",
    meta_description: "Estación Mixiuhca: acceso al Estadio Olímpico Universitario. Zona deportiva, parques y arquitectura histórica de los Juegos Olímpicos 1968.",
    h1: "Metro Mixiuhca: acceso al legado olímpico de 1968",
    intro: "Mixiuhca es una estación ubicada en Venustiano Carranza, cercana al Estadio Olímpico Universitario y al Parque de la 9ª Sección. Es zona de importancia histórica por los Juegos Olímpicos 1968 celebrados en CDMX. Ofrece arquitectura emblemática y espacios deportivos de calibre mundial.",
    historia_icono: "El ícono representa el anillo olímpico o el Estadio Olímpico en forma estilizada.",
    tips: [
      "Estadio Olímpico es legado histórico de los JJ.OO. 1968: vale la pena el recorrido",
      "Parque de la 9ª Sección es espacio verde tranquilo para descansar",
      "Zona segura durante el día",
      "Si hay eventos deportivos, llega temprano para estacionamiento y acceso"
    ],
    mejor_horario: "Mañanas o mediodía. Mejor durante días con eventos deportivos si te interesa.",
    mundial_relevancia: "Contexto histórico olímpico: turistas del Mundial pueden ver dónde México fue anfitrión de Juegos Olímpicos 1968. Conexión simbólica con México como sede de grandes eventos."
  },

  {
    slug: "velodromo",
    nombre: "Velódromo",
    linea: "9",
    alcaldia: "Venustiano Carranza",
    tipo_zona: "deportivo",
    pois: [
      { nombre: "Velódromo Olímpico", tipo: "estadio", distancia: "5 min caminando" },
      { nombre: "Centro Deportivo", tipo: "deporte", distancia: "5 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro Velódromo CDMX — Instalación Olímpica 1968 | MetroGuia",
    meta_description: "Estación Velódromo: acceso al Velódromo Olímpico de los JJ.OO. 1968. Instalación deportiva histórica de CDMX.",
    h1: "Metro Velódromo: la pista donde se hizo historia olímpica",
    intro: "Velódromo es una estación ubicada en Venustiano Carranza, cercana al histórico Velódromo Olímpico donde se disputaron carreras de ciclismo en los Juegos Olímpicos 1968. Es zona deportiva emblemática que forma parte del patrimonio olímpico de CDMX.",
    historia_icono: "El ícono representa un velódromo o pista de ciclismo en forma de óvalo.",
    tips: [
      "Velódromo Olímpico es instalación histórica: vale recorrido para ciclistas o aficionados",
      "Zona segura y tranquila durante el día",
      "Centro Deportivo cercano con infraestructuras modernas",
      "No es atractividad turística masiva, pero sí para público interesado en deporte"
    ],
    mejor_horario: "Mañanas y mediodía. Mejor con guía si quieres entrar a instalaciones.",
    mundial_relevancia: "Legado olímpico mexicano: turistas interesados en historia deportiva apreciarán este sitio. Conexión con pasado de México como anfitrión."
  },

  {
    slug: "ciudad-deportiva",
    nombre: "Ciudad Deportiva",
    linea: "9",
    alcaldia: "Iztacalco",
    tipo_zona: "deportivo",
    pois: [
      { nombre: "Complejo Deportivo", tipo: "deporte", distancia: "5 min caminando" },
      { nombre: "Instalaciones Olímpicas", tipo: "estadio", distancia: "10 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro Ciudad Deportiva CDMX — Complejo Olímpico 1968 | MetroGuia",
    meta_description: "Estación Ciudad Deportiva: acceso a complejo deportivo con instalaciones de los Juegos Olímpicos 1968. Zona de deporte y recreación.",
    h1: "Metro Ciudad Deportiva: el corazón del deporte olímpico mexicano",
    intro: "Ciudad Deportiva es una estación ubicada en Iztacalco, cercana a un complejo deportivo integral que forma parte del legado de los Juegos Olímpicos 1968. Es zona dedicada al deporte profesional y recreativo donde México demostró su capacidad como anfitrión mundial.",
    historia_icono: "El ícono representa un complejo deportivo o múltiples instalaciones de entrenamiento.",
    tips: [
      "Complejo deportivo con múltiples disciplinas: vale la pena si te interesa deporte",
      "Zona segura durante horas comerciales",
      "Útil para turistas interesados en legado olímpico mexicano",
      "No es atractividad turística masiva"
    ],
    mejor_horario: "Mañanas y mediodía. Mejor con entrada a eventos si hay.",
    mundial_relevancia: "Contexto de México como anfitrión de eventos deportivos mundiales. Turistas del Mundial 2026 apreciarán ver infraestructura deportiva de categoría mundial."
  },

  {
    slug: "puebla",
    nombre: "Puebla",
    linea: "9",
    alcaldia: "Iztacalco",
    tipo_zona: "residencial",
    pois: [
      { nombre: "Zona residencial", tipo: "residencial", distancia: "inmediata" },
      { nombre: "Mercado local", tipo: "mercado", distancia: "5 min caminando" }
    ],
    transferencias: [],
    seo_title: "Metro Puebla CDMX — Zona Residencial | MetroGuia",
    meta_description: "Estación Puebla: zona residencial de Iztacalco. Parada sin atracciones turísticas específicas.",
    h1: "Metro Puebla: el barrio residencial del oriente",
    intro: "Puebla es una estación residencial ubicada en Iztacalco. Es zona de viviendas y comercio local que sirve a residentes del oriente de CDMX. Sin atracciones turísticas destacadas, pero representa la vida cotidiana capitalina.",
    historia_icono: "El ícono alude al estado de Puebla o a la riqueza cultural oaxaca-poblana.",
    tips: [
      "Zona residencial sin interés turístico específico",
      "Mercado local auténtico si quieres comprar souvenirs comestibles",
      "Ve durante el día; no recomendable por la noche"
    ],
    mejor_horario: "10:00-18:00 horas para máxima seguridad.",
    mundial_relevancia: "Sin relevancia para el Mundial. Zona residencial de paso."
  },

  {
    slug: "pantitlan",
    nombre: "Pantitlán",
    linea: "9",
    alcaldia: "Venustiano Carranza",
    tipo_zona: "transporte",
    pois: [
      { nombre: "Centro de Transferencia", tipo: "transporte", distancia: "en la estación" },
      { nombre: "Terminal de Autobús", tipo: "transporte", distancia: "conectado" },
      { nombre: "Acceso a líneas de transporte", tipo: "transporte", distancia: "inmediato" }
    ],
    transferencias: ["1", "5", "A"],
    seo_title: "Metro Pantitlán CDMX — Mega Hub de Transporte | MetroGuia",
    meta_description: "Estación Pantitlán: el segundo mega hub después de Chabacano. Transferencias con Líneas 1, 5 y A. Acceso a toda la red Metro.",
    h1: "Metro Pantitlán: el terminus este de CDMX y hub de transporte",
    intro: "Pantitlán es el terminus oriente de la Línea 9 y uno de los mayores hubs de transporte de CDMX. Aquí convergen las Líneas 1, 5, 9 y A (Línea Dorada), creando un nodo de conexión vital. Es caótica como Chabacano, pero esencial para turistas que exploran la ciudad.",
    historia_icono: "El ícono representa un nodo de red o conexiones múltiples (ramas), aludiendo a Pantitlán como punto neurálgico.",
    tips: [
      "Mega hub complejo: sigue señalización para encontrar tu línea de conexión",
      "Cuida tus pertenencias en multitudes",
      "Terminal de autobús conectada para viajes inter-ciudad",
      "Evita horas pico si prefieres menos caos",
      "Desde aquí accedes a la mayoría de destinos de CDMX"
    ],
    mejor_horario: "Evita 7-9 AM y 5-7 PM. Otros horarios funcionales pero siempre concurrido.",
    mundial_relevancia: "Hub estratégico para turistas. Línea A (Línea Dorada) desde Pantitlán va directamente al Aeropuerto Internacional, crucial para llegadas/salidas de turistas del Mundial."
  }
];

module.exports = estacionesL8L9;
