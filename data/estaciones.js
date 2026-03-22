// =============================================================
// MetroGuia.mx — data/estaciones.js
// Base de datos completa: 195 estaciones del Metro CDMX
// Enriquecido: 2026-03-22
// =============================================================

const estaciones = [
  {
    "slug": "observatorio",
    "nombre": "Observatorio",
    "linea": "1",
    "alcaldia": "Álvaro Obregón",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Terminal Observatorio",
        "tipo": "transporte",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "Parque Lira",
        "tipo": "parque",
        "distancia": "8 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Observatorio CDMX — Terminal foránea | MetroGuia",
    "meta_description": "Metro Observatorio: estación terminal de Línea 1 con conexión directa a Terminal Observatorio. Autobuses foráneos hacia estados del centro. Guía para turistas del Mundial.",
    "h1": "Metro Observatorio: guía turística completa",
    "intro": "Observatorio es la estación terminal de la Línea 1, ubicada en la zona residencial de Álvaro Obregón. Punto de conexión crucial con la Terminal Observatorio, principal nudo de transporte foráneo de la ciudad. Los turistas encontrarán aquí acceso directo a autobuses que conectan con estados del centro de México. La estación marca el inicio o fin del viaje por la Línea 1, siendo fundamental para quienes necesitan salir de la capital hacia Querétaro, Guanajuato, Aguascalientes y otros destinos norte.",
    "historia_icono": "El ícono de esta estación representa el observatorio histórico que dio nombre a la zona, símbolo de ciencia y conocimiento en México.",
    "tips": [
      "Compra tu boleto foráneo con anticipación en horas valle (10-14h)",
      "La Terminal Observatorio funciona de 5:30 AM a 10 PM diariamente",
      "Hay cajeros automáticos y puntos de comida dentro de la terminal",
      "Zona vigilada las 24 horas; mantén vigilancia sobre tus pertenencias en horas nocturnas"
    ],
    "mejor_horario": "Matutino (6-10 AM) para mejores opciones de autobuses foráneos y menor congestión. Evita 5-6 PM cuando hay flujo de retorno de trabajo.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial FIFA 2026.",
    "descripcion_turistica": "Estación en la zona de Tacubaya, cerca del Bosque de Chapultepec. Punto de entrada occidental al sistema de metro con acceso a avenidas principales. Ideal para turistas que visitan el Castillo de Chapultepec, especialmente durante el World Cup 2026 cuando la movilidad será crítica.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Acceso mediante rampas. Señalización táctil en plataforma. Sin elevador, requiere escaleras auxiliares."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierra 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "Bosque de Chapultepec",
        "tipo": "Parque",
        "distancia": "800m",
        "descripcion": "Uno de los parques urbanos más grandes de América Latina, hogar del Castillo de Chapultepec y múltiples museos. Imprescindible para turistas."
      },
      {
        "nombre": "Museo Nacional de Antropología",
        "tipo": "Museo",
        "distancia": "1.2km",
        "descripcion": "Museo más importante de México con la Piedra del Sol y artefactos prehispánicos únicos. Abierto de martes a domingo."
      },
      {
        "nombre": "Castillo de Chapultepec",
        "tipo": "Monumento histórico",
        "distancia": "900m",
        "descripcion": "Residencia presidencial histórica con vistas panorámicas de la ciudad. Costo entrada: ~$80 MXN. Accesible a pie desde la estación."
      },
      {
        "nombre": "Avenida Paseo de la Reforma",
        "tipo": "Zona comercial",
        "distancia": "1km",
        "descripcion": "Principal avenida de la ciudad con tiendas, restaurantes y vida nocturna. Conexión directa hacia centro."
      }
    ]
  },
  {
    "slug": "juanacatlan",
    "nombre": "Juanacatlán",
    "linea": "1",
    "alcaldia": "Álvaro Obregón",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Parque Juanacatlán",
        "tipo": "parque",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Juanacatlán CDMX — Zona residencial | MetroGuia",
    "meta_description": "Metro Juanacatlán: estación residencial tranquila en Álvaro Obregón con acceso a Parque Juanacatlán. Experiencia auténtica capitalina para turistas.",
    "h1": "Metro Juanacatlán: estación de la Línea 1",
    "intro": "Juanacatlán es una estación residencial de la Línea 1 ubicada en Álvaro Obregón. Se caracteriza por ser una zona de transición entre la ciudad central y los barrios periféricos. La zona destaca por arquitectura residencial de clase media, comercios básicos y el cercano Parque Juanacatlán. Ideal para turistas que buscan alejarse del centro turístico y experimentar la vida cotidiana de los capitalinos en ambiente tranquilo y seguro.",
    "historia_icono": "El nombre Juanacatlán proviene del náhuatl 'Juan-acatl-tlan'. El ícono evoca la vegetación prehispánica que caracterizaba esta zona antes de la urbanización.",
    "tips": [
      "Parque Juanacatlán a 5 min caminando: ideal para paseos matutinos sin turistas",
      "Mercaditos locales abiertos de 8 AM a 8 PM con comida auténtica a precios bajos",
      "Zona segura pero menos vigilancia nocturna; evita después de 10 PM",
      "Conexión cercana con Línea 7 en Tacubaya (2 estaciones norte)"
    ],
    "mejor_horario": "Entre 10 AM y 5 PM para disfrutar el parque con luz natural. Menos concurrencia que en horas pico del centro.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial FIFA 2026."
  },
  {
    "slug": "tacubaya",
    "nombre": "Tacubaya",
    "linea": "1",
    "alcaldia": "Miguel Hidalgo",
    "tipo_zona": "transporte",
    "pois": [
      {
        "nombre": "Centro Comercial Tacubaya",
        "tipo": "comercio",
        "distancia": "3 min caminando"
      },
      {
        "nombre": "Mercado de Tacubaya",
        "tipo": "comercio",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "Iglesia de Santa Úrsula",
        "tipo": "religioso",
        "distancia": "10 min caminando"
      }
    ],
    "transferencias": [
      "7",
      "9"
    ],
    "seo_title": "Metro Tacubaya CDMX — Hub de Transferencia | MetroGuia",
    "meta_description": "Estación Tacubaya del Metro CDMX: hub crucial de transferencia a Líneas 1 y 7. Zona comercial vibrante, acceso a Chapultepec, Paseo de la Reforma. Turismo.",
    "h1": "Metro Tacubaya: hub de transporte y comercio",
    "intro": "Tacubaya es uno de los hubs de transferencia más importantes del Metro de la Ciudad de México, estratégicamente ubicado en el Oeste de la ciudad. Esta estación conecta las Líneas 1, 7 y 9, convirtiéndola en un punto nodal para turistas que desean explorar distintas zonas de la capital. La zona es vibrante, con comercio diverso, restaurantes, y acceso directo a la icónica Avenida Paseo de la Reforma.",
    "historia_icono": "El nombre Tacubaya proviene del náhuatl 'Tlecoabaca', que significa 'lugar de sapos'. Desde tiempos prehispánicos fue zona de paso comercial hacia zonas del Oeste. El icono del metro refleja esta herencia con referencias a la flora y fauna del territorio.",
    "tips": [
      "Transfiere a Líneas 1 (Observatorio-Pantitlán) y 7 (Barranca del Muerto-Garibaldi) para máxima cobertura urbana",
      "Explora la Zona Comercial Tacubaya con tiendas, restaurantes y cafeterías de calidad",
      "Accede al Castillo de Chapultepec en 15 minutos mediante metrobús desde la estación",
      "Es el mejor punto de partida para tours al Bosque de Chapultepec y Museo Nacional de Antropología",
      "Aprovecha los horarios nocturnos para disfrutar la vida nocturna de la zona"
    ],
    "mejor_horario": "Mañanas entre 8:00-11:00 para menos aglomeración, o tardes 15:00-18:00. Evita horas pico (7:00-9:00 y 18:00-20:00).",
    "mundial_relevancia": "Hub estratégico para turistas FIFA 2026: conecta Centro histórico con zonas Oeste. Acceso a hoteles de clase alta en Polanco y Chapultepec.",
    "descripcion_turistica": "Tacubaya es hub intermodal importante conectando múltiples líneas. Acceso a zona histórica occidente. Para turistas FIFA 2026 que necesitan transferencia eficiente o explorar Tacubaya.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Estación completamente accesible intermodal con múltiples líneas. Centro de transferencia con todos los servicios."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Barrio Histórico Tacubaya",
        "tipo": "Zona Histórica",
        "distancia": "300m",
        "descripcion": "Zona colonial con arquitectura tradicional mexicana"
      },
      {
        "nombre": "Mercado Tacubaya",
        "tipo": "Mercado",
        "distancia": "250m",
        "descripcion": "Mercado tradicional con comida y artesanías"
      },
      {
        "nombre": "Zona Comercial",
        "tipo": "Zona Comercial",
        "distancia": "200m",
        "descripcion": "Tiendas y comercios diversos"
      }
    ]
  },
  {
    "slug": "chapultepec",
    "nombre": "Chapultepec",
    "linea": "1",
    "alcaldia": "Miguel Hidalgo",
    "tipo_zona": "cultural-turistico",
    "pois": [
      {
        "nombre": "Castillo de Chapultepec",
        "tipo": "historico",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Museo Nacional de Antropología",
        "tipo": "museo",
        "distancia": "10 min caminando"
      },
      {
        "nombre": "Bosque de Chapultepec",
        "tipo": "parque",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "Museo Tamayo",
        "tipo": "museo",
        "distancia": "8 min caminando"
      },
      {
        "nombre": "Zoológico de Chapultepec",
        "tipo": "atraccion",
        "distancia": "12 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Chapultepec CDMX — Museos y bosque | MetroGuia",
    "meta_description": "Metro Chapultepec: acceso a Bosque de Chapultepec, Museo de Antropología, Castillo. Atracciones culturales imprescindibles. Guía turística completa.",
    "h1": "Metro Chapultepec: puerta al corazón histórico de México",
    "intro": "Chapultepec es la puerta de acceso al Bosque de Chapultepec, uno de los mayores pulmones verdes de América Latina y sitio obligatorio para turistas internacionales. La estación conecta directamente con museos de clase mundial incluyendo el Museo de Antropología, Museo de Arte Moderno, castillo histórico y amplios parques de recreación. Para visitantes del Mundial, es la estación más importante de la Línea 1 por su concentración de atracciones culturales imprescindibles.",
    "historia_icono": "El ícono de Chapultepec representa el águila sobre el nopal, símbolo prehispánico del Templo Mayor de Tenochtitlan.",
    "tips": [
      "Entrada al Bosque: GRATUITA. Museos internos: $4-6 USD entrada general",
      "Horarios variados: algunos museos cierran lunes; verifica en app INBA antes de visitar",
      "Entrada norte más cercana al Castillo (15 min caminando) con mejor acceso",
      "Lleva bloqueador solar y agua: visita de 8-11 AM para evitar calor del mediodía"
    ],
    "mejor_horario": "8-11 AM para museos sin filas y bosque con luz natural perfecta. Evita 12-4 PM (calor intenso). Viernes-domingo máxima afluencia.",
    "mundial_relevancia": "Atracción turística principal en CDMX para visitantes de eventos. Recomendación imprescindible para turistas del Mundial entre partidos.",
    "descripcion_turistica": "Estación junto a Bosque de Chapultepec, el corazón verde y cultural de Mexico City. Acceso directo a Castillo, museos de clase mundial y zoológico. Destino obligado para familias y turistas interesados en historia, arte y naturaleza durante World Cup 2026.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Rampas funcionando. Acceso a parque mediante elevadores externos. Señalización táctil completa."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierre 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "Bosque de Chapultepec",
        "tipo": "Parque urbano",
        "distancia": "0m",
        "descripcion": "Parque de 686 hectáreas con museos, zoológico, castillo y lagos. Pulmón verde de la ciudad, ideal para relajarse entre actividades turísticas."
      },
      {
        "nombre": "Castillo de Chapultepec",
        "tipo": "Monumento histórico",
        "distancia": "500m",
        "descripcion": "Fortaleza con vistas panorámicas, residencia presidencial histórica. Entrada: ~$80 MXN. Imprescindible."
      },
      {
        "nombre": "Museo Nacional de Antropología",
        "tipo": "Museo",
        "distancia": "800m",
        "descripcion": "Museo arqueológico más importante de México con Piedra del Sol. Entrada: $85 MXN. Abierto martes a domingo."
      },
      {
        "nombre": "Zoológico de Chapultepec",
        "tipo": "Atracción familiar",
        "distancia": "600m",
        "descripcion": "Uno de zoológicos más antiguos de América con animales de todo el mundo. Entrada: ~$50 MXN. Perfecto para familias."
      },
      {
        "nombre": "Museo de Arte Moderno",
        "tipo": "Museo",
        "distancia": "800m",
        "descripcion": "Galería de arte contemporáneo mexicano. Entrada gratuita domingos. Ubicado dentro del Bosque."
      }
    ]
  },
  {
    "slug": "sevilla",
    "nombre": "Sevilla",
    "linea": "1",
    "alcaldia": "Cuauhtémoc",
    "tipo_zona": "comercial",
    "pois": [
      {
        "nombre": "Paseo de la Reforma",
        "tipo": "comercio",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "Tiendas departamentales Reforma",
        "tipo": "comercio",
        "distancia": "1 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Sevilla CDMX — Zona Rosa shopping | MetroGuia",
    "meta_description": "Metro Sevilla: epicentro de Zona Rosa con tiendas internacionales y vida nocturna. Restaurantes de lujo, entretenimiento. Destino premium para turistas.",
    "h1": "Metro Sevilla: acceso a Paseo de la Reforma",
    "intro": "Sevilla es estación de la Línea 1 ubicada en la exclusiva Zona Rosa de Miguel Hidalgo. Es epicentro de vida nocturna, gastronomía de lujo e tiendas de moda internacional de primer nivel. La zona se caracteriza por comercio premium, restaurantes Michelin, bares sofisticados y ambiente cosmopolita. Para turistas del Mundial con presupuesto alto, es zona de entretenimiento nocturno esencial y compras de lujo.",
    "historia_icono": "El ícono de Sevilla evoca la arquitectura andaluza y el nombre de la ciudad española, reflejando la identidad cosmopolita de la Zona Rosa.",
    "tips": [
      "Zona Rosa es la meca de compras: Saks Fifth Avenue, Gucci, Louis Vuitton a 5 min caminando",
      "Restaurantes de lujo: reserva con anticipación; presupuesto mínimo $50 USD por persona",
      "Vida nocturna: bares y discotecas abiertos hasta 4 AM; entrada típica $10-20 USD",
      "Zona muy vigilada por seguridad privada; muy segura pero tráfico de vehículos intenso"
    ],
    "mejor_horario": "De 10 AM a 2 PM para compras sin aglomeración. De 9 PM en adelante para vida nocturna y entretenimiento.",
    "mundial_relevancia": "Destino premium para turistas extranjeros de alto nivel adquisitivo. Zona con hoteles 5 estrellas y restaurantes de fama internacional.",
    "descripcion_turistica": "Estación en Paseo de la Reforma, zona de desarrollo moderno con hoteles y vida cosmopolita. Acceso directo a avenida principal con tiendas internacionales y cultural vibrante. Localización estratégica para turistas durante World Cup 2026 que desean estar en corazón de la ciudad.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Rampas de acceso disponibles. Señalización táctil. Zona de alto tránsito con infraestructura moderna."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierre 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "Paseo de la Reforma",
        "tipo": "Avenida principal",
        "distancia": "0m",
        "descripcion": "Eje de 12 km con monumentos, tiendas de lujo, hoteles internacionales y museos. Corazón comercial."
      },
      {
        "nombre": "Zona hotelera Reforma-Sevilla",
        "tipo": "Hospedaje",
        "distancia": "100m",
        "descripcion": "Múltiples hoteles de clase mundial. Localización perfecta para acceso a transporte y atractivos turísticos."
      },
      {
        "nombre": "Bosque de Chapultepec",
        "tipo": "Parque",
        "distancia": "1.5km",
        "descripcion": "Uno de parques más grandes de mundo. Museos, castillo y vida natural. Accesible en metro una estación."
      },
      {
        "nombre": "Restaurantes Reforma",
        "tipo": "Gastronomía",
        "distancia": "200m",
        "descripcion": "Restaurantes de alta cocina mexicana e internacional. Ambiente elegante, precios premium."
      }
    ]
  },
  {
    "slug": "insurgentes",
    "nombre": "Insurgentes",
    "linea": "1",
    "alcaldia": "Cuauhtémoc",
    "tipo_zona": "comercial",
    "pois": [
      {
        "nombre": "Avenida Paseo de la Reforma (continuación)",
        "tipo": "comercio",
        "distancia": "1 min"
      },
      {
        "nombre": "Zona hotelera",
        "tipo": "hospedaje",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Restaurantes internacionales",
        "tipo": "gastronomia",
        "distancia": "3 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Insurgentes CDMX — Ángel reformista | MetroGuia",
    "meta_description": "Metro Insurgentes: centro turístico principal con Ángel de la Independencia. Paseo de la Reforma, tiendas internacionales. Hub transporte CDMX.",
    "h1": "Metro Insurgentes: zona comercial y hotelera",
    "intro": "Insurgentes es la estación más importante de la Línea 1, ubicada en el corazón de la Avenida Paseo de la Reforma, mayor arteria comercial y política de la Ciudad de México. Conecta directamente con el Ángel de la Independencia, monumento icónico nacional. La zona es centro de negocios, comercio de lujo, hoteles 5 estrellas y restaurantes gourmet. Para turistas del Mundial es punto de paso obligatorio hacia el centro histórico y conexión crucial con otras líneas de metro.",
    "historia_icono": "El ícono de Insurgentes representa el Ángel de la Independencia, símbolo patrio de México desde 1910.",
    "tips": [
      "Ángel de la Independencia a 2 min caminando: entrada $3 USD, sube 180 escalones para vista 360° de CDMX",
      "Paseo de la Reforma: 14 km de tiendas internacionales; descuentos reales 30-50% en épocas de rebajas",
      "Estación de transbordo: Línea 1, 2, 9 disponibles en área; centro de movilidad crucial de la ciudad",
      "Tráfico muy intenso de vehículos; usa pasos peatonales subterráneos para mayor seguridad"
    ],
    "mejor_horario": "8-11 AM o 4-7 PM para compras eficientes. Evita 12-2 PM (calor y congestión). Fines de semana tienen mayor afluencia turística.",
    "mundial_relevancia": "Centro neurálgico para turistas del Mundial: conecta con Estadio Azteca, Zócalo y zonas hoteleras principales. Parada obligatoria.",
    "descripcion_turistica": "Estación en la Zona Rosa, corazón cultural y comercial de Mexico City. Rodeada de galerías de arte, tiendas boutique, restaurantes y vida nocturna vibrante. Lugar ideal para turistas que buscan entretenimiento, compras y vida cosmopolita durante World Cup 2026.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Rampas funcionales. Señalización táctil completa. Zona con alta afluencia de turistas."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierre 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "Zona Rosa",
        "tipo": "Zona comercial y cultural",
        "distancia": "0m",
        "descripcion": "Barrio bohemio con tiendas boutique, galerías de arte, cafeterías y vida nocturna. Epicentro cultural de Mexico City."
      },
      {
        "nombre": "Paseo de la Reforma",
        "tipo": "Avenida",
        "distancia": "200m",
        "descripcion": "Eje comercial con tiendas de lujo, hoteles de clase mundial y monumentos históricos."
      },
      {
        "nombre": "Museo Tamayo",
        "tipo": "Museo de arte contemporáneo",
        "distancia": "800m",
        "descripcion": "Galería especializada en arte contemporáneo y moderno. Entrada: ~$100 MXN. Ubicado en Reforma."
      },
      {
        "nombre": "Restaurantes y bares Zona Rosa",
        "tipo": "Gastronomía",
        "distancia": "50m",
        "descripcion": "Amplia oferta de restaurantes internacionales, cafeterías artesanales y bares de clase. Ambiente cosmopolita."
      },
      {
        "nombre": "Tiendas de diseño mexicano",
        "tipo": "Retail",
        "distancia": "100m",
        "descripcion": "Boutiques con diseño mexicano contemporáneo, joyería artesanal, ropa de diseñadores locales. Souvenirs únicos."
      }
    ]
  },
  {
    "slug": "cuauhtemoc",
    "nombre": "Cuauhtémoc",
    "linea": "1",
    "alcaldia": "Cuauhtémoc",
    "tipo_zona": "comercial",
    "pois": [
      {
        "nombre": "Avenida Paseo de la Reforma (tramo central)",
        "tipo": "comercio",
        "distancia": "1 min"
      },
      {
        "nombre": "Museos y galerías Reforma",
        "tipo": "cultural-turistico",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Cuauhtémoc CDMX — Comercio auténtico | MetroGuia",
    "meta_description": "Metro Cuauhtémoc: mercado tradicional, gastronomía variada, vida bohemia. Zona auténtica CDMX. Guía para experiencia cultural.",
    "h1": "Metro Cuauhtémoc: corazón comercial de Reforma",
    "intro": "Cuauhtémoc es estación de Línea 1 y Línea 2 ubicada en la colonia del mismo nombre. Zona de comercio tradicional con gastronomía muy variada y servicios diversos. La zona es crisol viviente de culturas con restaurantes de múltiples nacionalidades, tiendas especializadas y ambiente bohemio auténtico. Para turistas representa acceso directo a autenticidad capitalina diferente al turismo masivo de las atracciones principales.",
    "historia_icono": "El ícono de Cuauhtémoc representa al último emperador azteca, figura central de la conquista española.",
    "tips": [
      "Mercado de Sonora a 8 min: mercado tradicional mexicano con artesanías, hierbas medicinales; 10 AM-6 PM",
      "Gastronomía variada: tacos, tortas, comida italiana, china, árabe a precios accesibles ($5-15 USD)",
      "Transfer directo a Línea 9 desde esta estación (metro indio verde); múltiples opciones transporte",
      "Zona universitaria cercana; ambiente joven dinámico; tiendas de libros, discos y arte contemporáneo"
    ],
    "mejor_horario": "10 AM-8 PM para compras y gastronomía. Noche (8 PM-11 PM) para bares y vida social.",
    "mundial_relevancia": "Acceso a experiencia auténtica de CDMX para turistas del Mundial que buscan algo más allá del circuito turístico."
  },
  {
    "slug": "balderas",
    "nombre": "Balderas",
    "linea": "1",
    "alcaldia": "Cuauhtémoc",
    "tipo_zona": "comercial",
    "pois": [
      {
        "nombre": "Centro Comercial Balderas",
        "tipo": "comercio",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "Tiendas de moda y tecnología",
        "tipo": "comercio",
        "distancia": "1 min caminando"
      }
    ],
    "transferencias": [
      "3"
    ],
    "seo_title": "Metro Balderas CDMX — Plaza Garibaldi y Alameda | MetroGuia",
    "meta_description": "Balderas. Transbordo Línea 1-3. Plaza Garibaldi. Alameda Central. Música en vivo tradicional.",
    "h1": "Metro Balderas: transfer a Línea 3",
    "intro": "Balderas es una estación estratégica de transbordo entre las Líneas 1 y 3, ubicada en el corazón del Centro Histórico de la Ciudad de México. La estación ofrece acceso a la Alameda Central, Plaza Garibaldi y al barrio histórico de Centro. Para turistas del Mundial 2026, es un punto neurálgico para conectar con sitios culturales, musicales y arqueológicos de la capital mexicana.",
    "historia_icono": "El ícono de Balderas representa a los Niños Héroes de Chapultepec, jóvenes soldados que dieron sus vidas defendiendo México. Símbolo del heroísmo y sacrificio nacional.",
    "tips": [
      "Centro de transbordo perfecto: conecta Línea 1 y 3 para explorar múltiples zonas",
      "Plaza Garibaldi a pasos: música en vivo, cantantes callejeros y romerías tradicionales",
      "Alameda Central: parque histórico con museos, esculpturas y espacio para descansar",
      "Gastronomía diversa: desde taquerías hasta restaurantes de chef en la zona",
      "Actividad intensa: ideal para turistas que quieran vivir el bullicio de la capital"
    ],
    "mejor_horario": "Noche (8pm-11pm) para experimentar Plaza Garibaldi con música en vivo. Día para museos.",
    "mundial_relevancia": "Centro cultural fundamental. Conecta turistas con experiencias auténticas de la CDMX durante el Mundial.",
    "descripcion_turistica": "Estación con conexión directa a Línea 3, ubicada en zona comercial del Centro Histórico. Avenida Reforma cercana con acceso a tiendas y vida cultural. Punto de transferencia crucial para turistas que combinan actividades centro-norte durante World Cup 2026.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Rampas de acceso. Señalización táctil. Escaleras mecánicas en pasillos principales."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierre 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "Paseo de la Reforma",
        "tipo": "Avenida comercial",
        "distancia": "200m",
        "descripcion": "Eje principal con tiendas de lujo, hoteles y vida cultural. Acceso a monumentos y entretenimiento."
      },
      {
        "nombre": "Barrio Juárez-Santa María la Ribera",
        "tipo": "Zona residencial",
        "distancia": "300m",
        "descripcion": "Barrio bohemio con vida nocturna, bares, galerías y tiendas boutique. Ambiente artístico y joven."
      },
      {
        "nombre": "Estela de Luz",
        "tipo": "Monumento moderno",
        "distancia": "500m",
        "descripcion": "Monumento a la independencia mexicana con vista panorámica. Ubicado en Reforma, accesible a pie."
      },
      {
        "nombre": "Zona de bares y restaurantes",
        "tipo": "Gastronomía",
        "distancia": "150m",
        "descripcion": "Múltiples bares, cantinas tradicionales y restaurantes modernos. Vida nocturna activa en la zona."
      }
    ]
  },
  {
    "slug": "salto-del-agua",
    "nombre": "Salto del Agua",
    "linea": "1",
    "alcaldia": "Cuauhtémoc",
    "tipo_zona": "comercial",
    "pois": [
      {
        "nombre": "Eje Central Lázaro Cárdenas",
        "tipo": "transporte",
        "distancia": "1 min"
      },
      {
        "nombre": "Tiendas y comercios locales",
        "tipo": "comercio",
        "distancia": "2 min caminando"
      }
    ],
    "transferencias": [
      "8"
    ],
    "seo_title": "Metro Salto del Agua CDMX — Centro histórico | MetroGuia",
    "meta_description": "Metro Salto del Agua: acceso a mercados tradicionales y hoteles económicos. Zona de transición hacia Centro Histórico. Guía turística completa.",
    "h1": "Metro Salto del Agua: punto de conexión central",
    "intro": "Salto del Agua es estación de transición entre la Línea 1 y el centro histórico, ubicada en la colonia Cuauhtémoc. Combina comercio de nivel medio con acceso cercano a sitios históricos de la ciudad. Es punto de paso importante hacia la zona de mercados tradicionales y el centro peatonal turístico. La estación funciona como puente entre zonas comerciales modernas y patrimonio histórico colonial.",
    "historia_icono": "El ícono de Salto del Agua evoca el río subterráneo que alguna vez bajaba desde Chapultepec, fuente de agua que alimentaba a la capital prehispánica.",
    "tips": [
      "Acceso a Mercado de Abastos: mercado tradicional a 5 min caminando con productos frescos a precios mínimos",
      "Zona de hoteles económicos ($20-40 USD/noche) en radio de 8 min caminando",
      "Comercio mixto: electrónica, ropa, accesorios; negocios abiertos de 8 AM a 9 PM",
      "Zona popular; mantén vigilancia sobre pertenencias en horas nocturnas (después de 9 PM)"
    ],
    "mejor_horario": "10 AM a 5 PM para compras y exploración tranquila. Evita después de 8 PM en zona aledaña.",
    "mundial_relevancia": "Acceso a hospedaje económico y compras de bajo costo para turistas presupuestarios del Mundial.",
    "descripcion_turistica": "Estación en zona céntrica oriental del Centro Histórico. Acceso a iglesias coloniales y avenidas comerciales con vida local intensa. Punto de transferencia para viajeros que se desplazan entre diferentes zonas del centro durante World Cup 2026.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Rampas funcionando. Señalización táctil en plataforma. Estación antigua con infraestructura mejorada."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierre 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "Avenida 20 de Noviembre",
        "tipo": "Avenida comercial",
        "distancia": "0m",
        "descripcion": "Eje comercial importante con tiendas, cafeterías y vida urbana intensa. Dirección hacia Zócalo."
      },
      {
        "nombre": "Iglesia de Santa Catarina",
        "tipo": "Iglesia colonial",
        "distancia": "200m",
        "descripcion": "Templo del siglo XVI con arquitectura barroca. Abierta para visitas y misas diarias."
      },
      {
        "nombre": "Zona de tiendas Centro",
        "tipo": "Zona comercial",
        "distancia": "100m",
        "descripcion": "Tiendas variadas de ropa, electrónica, accesorios. Precios competitivos y ambiente comercial tradicional."
      },
      {
        "nombre": "Restaurantes Avenida 20 de Noviembre",
        "tipo": "Gastronomía",
        "distancia": "50m",
        "descripcion": "Múltiples opciones de comida rápida y restaurantes con cocina mexicana tradicional. Ambiente local."
      }
    ]
  },
  {
    "slug": "isabel-la-catolica",
    "nombre": "Isabel la Católica",
    "linea": "1",
    "alcaldia": "Cuauhtémoc",
    "tipo_zona": "historico",
    "pois": [
      {
        "nombre": "Catedral Metropolitana",
        "tipo": "religioso",
        "distancia": "8 min caminando"
      },
      {
        "nombre": "Zócalo de la Ciudad de México",
        "tipo": "historico",
        "distancia": "10 min caminando"
      },
      {
        "nombre": "Museo del Templo Mayor",
        "tipo": "museo",
        "distancia": "7 min caminando"
      },
      {
        "nombre": "Iglesias históricas coloniales",
        "tipo": "religioso",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Isabel la Católica CDMX — Centro histórico | MetroGuia",
    "meta_description": "Isabel la Católica: acceso al centro histórico de CDMX. Catedral, Zócalo, Templo Mayor. Guía turística para FIFA 2026.",
    "h1": "Metro Isabel la Católica: puerta al corazón histórico",
    "intro": "Isabel la Católica es una estación clave para explorar el centro histórico de la Ciudad de México. Ofrece acceso a la Catedral Metropolitana, el Zócalo y sitios arqueológicos que datan de la época prehispánica y colonial.",
    "historia_icono": "Isabel la Católica, la reina española que patrocinó la expedición de Colón, representa el encuentro histórico entre dos civilizaciones.",
    "tips": [
      "Catedral Metropolitana: imprescindible visitar",
      "Zócalo: segunda plaza más grande del mundo",
      "Templo Mayor: ruinas aztecas en pleno centro",
      "Museos históricos de clase mundial",
      "Restaurantes tradicionales mexicanos"
    ],
    "mejor_horario": "Mañana temprano para evitar multitudes turísticas.",
    "mundial_relevancia": "Parada obligatoria para turistas FIFA 2026 interesados en historia."
  },
  {
    "slug": "pino-suarez",
    "nombre": "Pino Suárez",
    "linea": "1",
    "alcaldia": "Cuauhtémoc",
    "tipo_zona": "historico",
    "pois": [
      {
        "nombre": "Palacio Nacional",
        "tipo": "historico",
        "distancia": "3 min caminando"
      },
      {
        "nombre": "Zócalo Capitalino",
        "tipo": "historico",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "Museo Nacional de Historia",
        "tipo": "museo",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Librería Porrúa histórica",
        "tipo": "comercio",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "Iglesia de la Santísima Trinidad",
        "tipo": "religioso",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [
      "2"
    ],
    "seo_title": "Metro Pino Suárez CDMX — Centro histórico | MetroGuia",
    "meta_description": "Metro Pino Suárez: acceso al Zócalo, Catedral, Templo Mayor. Patrimonio histórico UNESCO. Guía imprescindible para turistas del Mundial.",
    "h1": "Metro Pino Suárez: acceso directo al Zócalo",
    "intro": "Pino Suárez es estación de la Línea 1 ubicada en el corazón del Centro Histórico, junto al Zócalo de la Ciudad de México. La zona es epicentro de patrimonio cultural con templos coloniales, museos importantes, comercio tradicional y plazas históricas. Para turistas del Mundial es punto de acceso imprescindible al patrimonio histórico de la capital, declarado Patrimonio de la Humanidad por UNESCO. Conecta directamente con Línea 2 hacia Estadio Azteca.",
    "historia_icono": "El ícono de Pino Suárez representa al personaje histórico Benito Juárez Pino Suárez, presidente reformista de México.",
    "tips": [
      "Zócalo a 2 min caminando: plaza más grande de América Latina, Catedral Metropolitana (entrada $6 USD)",
      "Museos gratuitos domingos para residentes; turistas extranjeros pagan tarifa normal de $4-8 USD",
      "Templo Mayor prehispánico a 3 min: entrada $6 USD, una de las ruinas más significativas de México",
      "Zona muy concurrida; evita 11 AM-3 PM. Mejor: 8-10 AM o después de 5 PM para exploración tranquila"
    ],
    "mejor_horario": "8-11 AM para museos y monumentos sin filas enormes. Atardeceres (5-7 PM) ofrecen iluminación dorada del Zócalo.",
    "mundial_relevancia": "Atracción histórica esencial para turistas del Mundial. Centro neurálgico que conecta con Línea 2 hacia Estadio Azteca.",
    "descripcion_turistica": "Estación en zona céntrica con conexión directa a Línea 2. Ubicada junto a iglesias coloniales y cerca del Zócalo. Acceso a vida comercial intensa y gastronomía tradicional. Punto de transferencia clave para turistas que exploran el Centro Histórico durante World Cup 2026.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Rampas de acceso disponibles. Señalización táctil completa. Escaleras mecánicas en horarios pico."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierre 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "Iglesia de la Santísima Trinidad",
        "tipo": "Iglesia colonial",
        "distancia": "100m",
        "descripcion": "Templo barroco del siglo XVIII. Arquitectura espectacular. Abierta para visitantes y misas."
      },
      {
        "nombre": "Mercado de la Merced",
        "tipo": "Mercado tradicional",
        "distancia": "400m",
        "descripcion": "Uno de los mercados más grandes de México. Caótico pero auténtico, con comida, flores y artesanías. Experiencia local pura."
      },
      {
        "nombre": "Zócalo",
        "tipo": "Plaza histórica",
        "distancia": "300m",
        "descripcion": "A pie en 5 minutos. Centro neurálgico de Mexico City con monumentos imprescindibles para turistas."
      },
      {
        "nombre": "Zona de Gastronomía Popular",
        "tipo": "Restaurantes y comida",
        "distancia": "200m",
        "descripcion": "Restaurantes familiares con comida tradicional mexicana. Enchiladas, tacos, pozole, precios accesibles."
      }
    ]
  },
  {
    "slug": "merced",
    "nombre": "Merced",
    "linea": "1",
    "alcaldia": "Cuauhtémoc",
    "tipo_zona": "comercial",
    "pois": [
      {
        "nombre": "Mercado de la Merced",
        "tipo": "comercio",
        "distancia": "3 min caminando"
      },
      {
        "nombre": "Iglesia de la Merced",
        "tipo": "religioso",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "Centro histórico comercial",
        "tipo": "comercio",
        "distancia": "1 min"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Merced CDMX — Mercado histórico | MetroGuia",
    "meta_description": "Merced: estación con acceso al mercado más grande de América Latina. Comercio, gastronomía y autenticidad mexicana.",
    "h1": "Metro Merced: el mercado más grande de América Latina",
    "intro": "Merced es una estación que ofrece acceso al famoso Mercado de la Merced, el más grande de América Latina y uno de los centros comerciales más dinámicos de la Ciudad de México. La zona es vibrante, auténtica y perfecta para experimentar la vida cotidiana capitalina.",
    "historia_icono": "La Merced evoca a la Virgen María, patrona de mercaderes, y la iglesia que da nombre a la estación fue construida en el siglo XVI.",
    "tips": [
      "Mercado de la Merced: experiencia única y auténtica",
      "Gastronomía local a precios accesibles",
      "Compras de alimentos frescos y artesanía",
      "Zona muy concurrida: llevar valuables con cuidado",
      "Mejor visitar en horario diurno"
    ],
    "mejor_horario": "Mañana (7-10 AM) para ver el mercado en movimiento.",
    "mundial_relevancia": "Sin relevancia directa para partidos, pero experiencia auténtica de CDMX."
  },
  {
    "slug": "candelaria",
    "nombre": "Candelaria",
    "linea": "1",
    "alcaldia": "Venustiano Carranza",
    "tipo_zona": "comercial",
    "pois": [
      {
        "nombre": "Zona comercial Candelaria",
        "tipo": "comercio",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "Iglesia de la Candelaria",
        "tipo": "religioso",
        "distancia": "3 min caminando"
      }
    ],
    "transferencias": [
      "4"
    ],
    "seo_title": "Metro Candelaria CDMX — Templo Religioso | MetroGuia",
    "meta_description": "Candelaria CDMX. Templo religioso importante. Peregrinación. Fe mexicana. Festividad 2 febrero.",
    "h1": "Metro Candelaria: conexión a Línea 4",
    "intro": "Candelaria es una estación ubicada en la Alcaldía Venustiano Carranza, ofreciendo acceso a una zona religiosa y culturalmente significativa en el oriente de la capital. La zona alberga el Templo de la Candelaria, un importante sitio de peregrinación y devoción religiosa en la ciudad. Para turistas del Mundial 2026, representa una parada fundamental para comprender la religiosidad profunda y la fe que caracterizan a México. Experimenta la devoción mariana y la tradición católica mexicana.",
    "historia_icono": "El ícono de Candelaria representa la Virgen de la Candelaria, festividad religiosa importante en México. Evoca la devoción mariana y la fe popular mexicana.",
    "tips": [
      "Templo de la Candelaria: iglesia histórica y sitio de peregrinación importante",
      "Festividades religiosas: 2 de febrero celebración de la Candelaria con procesiones",
      "Mercados especializados en productos religiosos y tradicionales",
      "Restaurantes cercanos con comida mexicana auténtica para peregrinos y turistas",
      "Zona tranquila para contemplación espiritual y cultural"
    ],
    "mejor_horario": "Mañana (8am-11am) para visitas religiosas. Especialmente: 2 de febrero para festividad.",
    "mundial_relevancia": "Sitio religioso importante. Relevante para turistas interesados en la fe y devoción de México.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Rampas de acceso. Señalización táctil. Estación intermedia con servicios estándar."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierre 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "Barrio La Candelaria",
        "tipo": "Zona residencial",
        "distancia": "0m",
        "descripcion": "Barrio residencial tranquilo con vida local."
      },
      {
        "nombre": "Zona comercial pequeña",
        "tipo": "Retail",
        "distancia": "100m",
        "descripcion": "Tiendas y servicios locales de barrio."
      },
      {
        "nombre": "Centro Histórico",
        "tipo": "Zona turística",
        "distancia": "3 estaciones sur",
        "descripcion": "Acceso cercano a Zócalo y atracciones."
      },
      {
        "nombre": "Restaurantes Candelaria",
        "tipo": "Gastronomía",
        "distancia": "100m",
        "descripcion": "Opciones de comida familiar mexicana."
      }
    ]
  },
  {
    "slug": "san-lazaro",
    "nombre": "San Lázaro",
    "linea": "1",
    "alcaldia": "Venustiano Carranza",
    "tipo_zona": "transporte",
    "pois": [
      {
        "nombre": "Estación de Ferrocarriles San Lázaro",
        "tipo": "transporte",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "Terminal de autobuses",
        "tipo": "transporte",
        "distancia": "3 min caminando"
      }
    ],
    "transferencias": [
      "B"
    ],
    "seo_title": "Metro San Lázaro — Terminal intermodal este",
    "meta_description": "San Lázaro: Terminal Autobuses del Oriente, mercados locales vibr antes y vida de barrio. Puerta a zonas menos turísticas del oriente capitalino.",
    "h1": "Metro San Lázaro: hub de transporte intermodal",
    "intro": "San Lázaro es estación de conexión importante conectando Centro Histórico con zonas este y sureste de la CDMX, ubicada cerca de Terminal de Autobuses del Oriente. Para turistas del Mundial FIFA 2026, San Lázaro ofrece acceso a zona de transporte intermodal, mercados locales, y puerta a exploraciones de barrios auténticos menos turísticos. Es punto de partida para viajeros que desean descubrir la CDMX desde perspectiva diferente.",
    "historia_icono": "El ícono gris de la Línea B representa conectividad de San Lázaro como estación terminal y de transbordo, histórica importancia como punto de distribución hacia oriente. Este símbolo evoca movimiento y conexión continua.",
    "tips": [
      "Terminal de Autobuses del Oriente (TAPO): acceso a autobuses hacia Veracruz, Puebla y destinos del oriente de México",
      "Mercado de comida rápida en TAPO: tamales, quesadillas y café preparados por vendedores de barrio a precios de mercado local",
      "Museo del Ferrocarril cercano: acceso a historia ferroviaria de México con locomotoras históricas y artefactos de época",
      "Zona residencial tranquila: si necesitas alejarte del caos turístico, barrios cercanos ofrecen vida cotidiana genuina",
      "Seguridad: mantente cerca de estación y mercado principal; lleva dirección en español para taxi si necesitas orientación"
    ],
    "mejor_horario": "Visita de 9 AM-6 PM para actividad de mercados y servicios en operación. Evita de noche cuando zona se vuelve más tranquila.",
    "mundial_relevancia": "Relevancia media: turistas interesados en transporte intermodal y vida de barrio auténtica encontrarán acceso a zonas menos turísticas del oriente.",
    "descripcion_turistica": "San Lázaro es terminal oriental de la Línea B con conexión crítica: TAPO (Terminal de Autobuses Poniente/Oriente), uno de los mayores centros de transporte de la Ciudad. Acceso a viajes foráneos hacia todo México.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Sin elevadores. Escaleras convencionales."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "TAPO (Terminal de Autobuses Oriente)",
        "tipo": "Transporte",
        "distancia": "300m",
        "descripcion": "Terminal de autobuses foráneos más importante del oriente"
      },
      {
        "nombre": "Estación de Ferrocarriles San Lázaro",
        "tipo": "Transporte",
        "distancia": "400m",
        "descripcion": "Terminal ferroviaria histórica"
      },
      {
        "nombre": "Mercado San Lázaro",
        "tipo": "Comercio",
        "distancia": "200m",
        "descripcion": "Tianguis tradicional con productos frescos"
      }
    ]
  },
  {
    "slug": "moctezuma",
    "nombre": "Moctezuma",
    "linea": "1",
    "alcaldia": "Venustiano Carranza",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial Moctezuma",
        "tipo": "residencial",
        "distancia": "2 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Moctezuma CDMX — Estación residencial | MetroGuia",
    "meta_description": "Moctezuma: estación residencial en Venustiano Carranza. Zona tranquila con acceso a servicios locales.",
    "h1": "Metro Moctezuma: zona residencial tranquila",
    "intro": "Moctezuma es una estación residencial ubicada en Venustiano Carranza, ofreciendo acceso a una zona tranquila con comercios locales y servicios comunitarios. Ideal para residentes y visitantes que buscan alejarse del centro turístico.",
    "historia_icono": "Moctezuma II fue el último emperador azteca, símbolo de la grandeza prehispánica y resistencia histórica.",
    "tips": [
      "Zona residencial segura y tranquila",
      "Comercios locales y servicios básicos",
      "Acceso a servicios comunitarios",
      "Buen ambiente para descansar"
    ],
    "mejor_horario": "Cualquier hora, zona tranquila.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial."
  },
  {
    "slug": "balbuena",
    "nombre": "Balbuena",
    "linea": "1",
    "alcaldia": "Venustiano Carranza",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Parque Balbuena",
        "tipo": "parque",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Balbuena CDMX — Parque y zona residencial | MetroGuia",
    "meta_description": "Balbuena: estación residencial con acceso a parque. Zona tranquila de Venustiano Carranza.",
    "h1": "Metro Balbuena: acceso a parque y zona residencial",
    "intro": "Balbuena es una estación residencial que ofrece acceso directo al Parque Balbuena, importante espacio verde de la zona. La zona es tranquila, segura y perfecta para visitantes que buscan relajarse en espacios abiertos.",
    "historia_icono": "Balbuena evoca a Bernardo de Balbuena, poeta y obispo novohispano del siglo XVI.",
    "tips": [
      "Parque Balbuena: excelente para paseos y recreación",
      "Zona segura y tranquila",
      "Acceso a comercios locales",
      "Servicios comunitarios disponibles"
    ],
    "mejor_horario": "Mañana/tarde para disfrutar del parque.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial."
  },
  {
    "slug": "boulevard-puerto-aereo",
    "nombre": "Boulevard Puerto Aéreo",
    "linea": "1",
    "alcaldia": "Venustiano Carranza",
    "tipo_zona": "comercial",
    "pois": [
      {
        "nombre": "Terminal de autobuses",
        "tipo": "transporte",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Zona comercial local",
        "tipo": "comercio",
        "distancia": "3 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Boulevard Puerto Aéreo CDMX | MetroGuia",
    "meta_description": "Boulevard Puerto Aéreo: estación de Venustiano Carranza. Acceso a transporte intermodal y comercios.",
    "h1": "Metro Boulevard Puerto Aéreo: acceso a transporte",
    "intro": "Boulevard Puerto Aéreo es una estación ubicada en Venustiano Carranza que ofrece acceso a terminales de autobuses y zona comercial. Funciona como punto de conexión para viajeros que requieren transporte intermodal.",
    "historia_icono": "Boulevard Puerto Aéreo conecta históricamente la ciudad con su antiguo aeropuerto, símbolo de conexión global.",
    "tips": [
      "Acceso a terminales de autobuses",
      "Zona comercial bien surtida",
      "Servicios de transporte disponibles",
      "Buena conectividad"
    ],
    "mejor_horario": "Horario diurno para servicios completos.",
    "mundial_relevancia": "Útil para conexiones a otros puntos de la ciudad."
  },
  {
    "slug": "gomez-farias",
    "nombre": "Gómez Farías",
    "linea": "1",
    "alcaldia": "Venustiano Carranza",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial Gómez Farías",
        "tipo": "residencial",
        "distancia": "2 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Gómez Farías CDMX — Zona residencial | MetroGuia",
    "meta_description": "Gómez Farías: estación residencial en Venustiano Carranza. Zona tranquila con servicios locales.",
    "h1": "Metro Gómez Farías: estación residencial",
    "intro": "Gómez Farías es una estación residencial ubicada en Venustiano Carranza, ofreciendo acceso a una zona tranquila y segura con servicios locales. Ideal para residentes que buscan tranquilidad lejos del centro.",
    "historia_icono": "Gómez Farías fue un importante político mexicano del siglo XIX, precursor de reformas liberales.",
    "tips": [
      "Zona residencial tranquila",
      "Servicios locales accesibles",
      "Ambiente seguro",
      "Buen descanso para viajeros"
    ],
    "mejor_horario": "Cualquier hora del día.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial."
  },
  {
    "slug": "zaragoza",
    "nombre": "Zaragoza",
    "linea": "1",
    "alcaldia": "Venustiano Carranza",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial Zaragoza",
        "tipo": "residencial",
        "distancia": "2 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Zaragoza CDMX — Zona residencial | MetroGuia",
    "meta_description": "Zaragoza: estación residencial en Venustiano Carranza. Zona tranquila y segura de CDMX.",
    "h1": "Metro Zaragoza: zona residencial tranquila",
    "intro": "Zaragoza es una estación residencial ubicada en Venustiano Carranza, ofreciendo acceso a una zona tranquila con servicios comunitarios básicos. Ideal para visitantes que buscan descansar en ambiente residencial.",
    "historia_icono": "Zaragoza evoca a Agustín de Zaragoza, héroe mexicano de la Batalla de Puebla (5 de mayo de 1862).",
    "tips": [
      "Zona residencial segura y tranquila",
      "Servicios básicos comunitarios",
      "Ambiente relajado",
      "Comercios locales"
    ],
    "mejor_horario": "Cualquier hora, zona segura.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial."
  },
  {
    "slug": "pantitlan",
    "nombre": "Pantitlán",
    "linea": "1",
    "alcaldia": "Venustiano Carranza",
    "tipo_zona": "transporte",
    "pois": [
      {
        "nombre": "Terminal Pantitlán",
        "tipo": "transporte",
        "distancia": "1 min caminando"
      },
      {
        "nombre": "Conexión multimodal (metro, BRT)",
        "tipo": "transporte",
        "distancia": "1 min"
      }
    ],
    "transferencias": [
      "5",
      "9",
      "A"
    ],
    "seo_title": "Metro Pantitlán LA CDMX — Línea Moderna | MetroGuia",
    "meta_description": "Pantitlán Línea A: acceso directo a zonas Este modernas Iztapalapa. Línea nueva 2018 con tecnología contemporánea avanzada. Transporte moderno.",
    "h1": "Metro Pantitlán: terminal y hub de transporte",
    "intro": "Pantitlán es una estación crucial de transferencia en el oriente de la CDMX, punto de conexión entre las Líneas 1, 5, 9 y A. Aunque es principalmente una estación de paso, la zona ofrece acceso a mercados tradicionales y transporte hacia municipios del Estado de México.",
    "historia_icono": "El ícono de la Línea A representa una flecha morada hacia el oriente, simbolizando la expansión del Metro hacia las nuevas zonas periféricas y densamente pobladas.",
    "tips": [
      "Pantitlán es punto de transferencia ideal para explorar diferentes líneas del Metro",
      "La zona es transitada pero segura durante el día; considera horarios de menos afluencia",
      "Acceso directo a zonas residenciales y de transporte comercial",
      "Explora la tecnología moderna de la línea más nueva del Metro"
    ],
    "mejor_horario": "Entre 10:00 y 14:00 horas para menor congestión",
    "mundial_relevancia": "Conexión importante para turistas que necesitan acceder a múltiples líneas del Metro durante el Mundial 2026",
    "descripcion_turistica": "Pantitlán es el terminal oriental de la Línea A, ubicado en la zona de Los Reyes Iztacalco. La estación conecta con importantes rutas de transporte hacia el oriente de la ciudad y zonas residenciales. Es punto de acceso para viajeros hacia el Estado de México.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Estación sin elevadores. Escaleras convencionales disponibles."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Colegio de Bachilleres No. 1",
        "tipo": "Institución Educativa",
        "distancia": "500m",
        "descripcion": "Centro de educación superior importante en la zona"
      },
      {
        "nombre": "Avenida Texcoco",
        "tipo": "Comercio",
        "distancia": "300m",
        "descripcion": "Zona con tiendas, farmacias y servicios varios"
      },
      {
        "nombre": "Mercado Los Reyes",
        "tipo": "Mercado",
        "distancia": "600m",
        "descripcion": "Mercado tradicional con productos locales y frescos"
      }
    ]
  },
  {
    "slug": "cuatro-caminos",
    "nombre": "Cuatro Caminos",
    "linea": "2",
    "alcaldia": "Naucalpan",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial Naucalpan",
        "tipo": "residencial",
        "distancia": "3 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Cuatro Caminos CDMX — Estación terminal Naucalpan | MetroGuia",
    "meta_description": "Cuatro Caminos: estación terminal de la Línea 2 en Naucalpan. Zona residencial segura. Entrada a CDMX desde el Estado de México.",
    "h1": "Metro Cuatro Caminos: terminal de la Línea 2",
    "intro": "Cuatro Caminos es la estación terminal de la Línea 2 ubicada en Naucalpan, Estado de México. Aunque técnicamente fuera de CDMX, es la puerta de entrada para viajeros que vienen del Estado de México. La zona es residencial y segura.",
    "historia_icono": "Cuatro Caminos representa el punto donde convergen múltiples vías de comunicación, símbolo de conexión regional.",
    "tips": [
      "Acceso desde el Estado de México",
      "Zona residencial tranquila",
      "Excelente punto de partida hacia el centro",
      "Servicios básicos disponibles"
    ],
    "mejor_horario": "Horario de pico de transporte (7-9 AM).",
    "mundial_relevancia": "Acceso para aficionados del Estado de México.",
    "descripcion_turistica": "Estación terminal norte de Línea 2, ubicada en zona residencial. Acceso a vida local auténtica, mercados y servicios comunitarios. Punto de partida hacia Centro Histórico y Zócalo. Conexión importante para turistas que viajan desde norte de la ciudad durante World Cup 2026.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Rampas de acceso. Señalización táctil. Estación terminal con infraestructura moderna."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierre 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "Zona Cuatro Caminos",
        "tipo": "Área comercial",
        "distancia": "0m",
        "descripcion": "Nodo comercial importante con tiendas, restaurantes y servicios. Terminal de transporte con acceso a múltiples líneas de metro."
      },
      {
        "nombre": "Mercado de Abastos",
        "tipo": "Mercado",
        "distancia": "300m",
        "descripcion": "Mercado mayorista y minorista con alimentos, frutas, verduras. Vida comercial intensa."
      },
      {
        "nombre": "Iglesia de los Ángeles",
        "tipo": "Iglesia",
        "distancia": "400m",
        "descripcion": "Templo histórico con arquitectura colonial. Abierto para visitas."
      },
      {
        "nombre": "Centro Histórico vía Línea 2",
        "tipo": "Zona turística",
        "distancia": "10 estaciones",
        "descripcion": "Acceso directo al Zócalo, Centro Histórico y atractivos principales. Línea 2 recorre zona céntrica norte a sur."
      }
    ]
  },
  {
    "slug": "panteones",
    "nombre": "Panteones",
    "linea": "2",
    "alcaldia": "Naucalpan",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Panteón Municipal",
        "tipo": "historico",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Panteones CDMX — Estación en Naucalpan | MetroGuia",
    "meta_description": "Panteones: estación residencial en Naucalpan. Zona tranquila de acceso a CDMX desde el Estado de México.",
    "h1": "Metro Panteones: zona residencial Naucalpan",
    "intro": "Panteones es una estación residencial ubicada en Naucalpan que ofrece acceso a zona tranquila y segura. Es un punto de conexión importante entre el Estado de México y la Ciudad de México.",
    "historia_icono": "El nombre evoca los panteones históricos que rodean la zona, parte de la geografía cultural de Naucalpan.",
    "tips": [
      "Zona residencial segura",
      "Acceso directo a CDMX",
      "Servicios locales disponibles",
      "Buen punto de partida al centro"
    ],
    "mejor_horario": "Mañana para transporte eficiente.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial."
  },
  {
    "slug": "tacuba",
    "nombre": "Tacuba",
    "linea": "2",
    "alcaldia": "Miguel Hidalgo",
    "tipo_zona": "comercial",
    "pois": [
      {
        "nombre": "Centro comercial Tacuba",
        "tipo": "comercio",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "Mercado Tacuba",
        "tipo": "comercio",
        "distancia": "3 min caminando"
      },
      {
        "nombre": "Iglesia de Santiago",
        "tipo": "religioso",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Tacuba CDMX — Centro comercial | MetroGuia",
    "meta_description": "Tacuba: estación comercial en Miguel Hidalgo. Mercados, tiendas y gastronomía local.",
    "h1": "Metro Tacuba: centro comercial de Miguel Hidalgo",
    "intro": "Tacuba es una estación comercial ubicada en Miguel Hidalgo, ofreciendo acceso a mercados tradicionales, tiendas y restaurantes locales. La zona es vibrante y auténtica, perfecta para experimentar la vida comercial de CDMX.",
    "historia_icono": "Tacuba proviene del náhuatl 'tlacopan', uno de los grandes centros comerciales de la época prehispánica.",
    "tips": [
      "Mercado tradicional de alimentos frescos",
      "Tiendas locales y artesanía",
      "Gastronomía típica mexicana",
      "Zona concurrida y auténtica"
    ],
    "mejor_horario": "Mañana para ver el mercado en movimiento.",
    "mundial_relevancia": "Sin relevancia directa para partidos.",
    "descripcion_turistica": "Estación histórica en el barrio antiguo de Tacuba, uno de los primeros asentamientos de la Ciudad de México. Acceso a calles coloniales, tiendas tradicionales y vida local auténtica. Perfecto para turistas que buscan la Mexico City histórica durante el World Cup 2026.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Acceso mediante rampas. Señalización táctil. Estación histórica con infraestructura básica pero funcional."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierre 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "Barrio de Tacuba",
        "tipo": "Zona histórica",
        "distancia": "0m",
        "descripcion": "Barrio prehispánico con calles coloniales. Comercio tradicional, tiendas locales y auténtica vida chilanga."
      },
      {
        "nombre": "Templo de San Francisco",
        "tipo": "Iglesia colonial",
        "distancia": "300m",
        "descripcion": "Convento del siglo XVI, uno de los primeros edificios religiosos de la Nueva España. Abierto para visitantes."
      },
      {
        "nombre": "Museo de la Ciudad de México",
        "tipo": "Museo histórico",
        "distancia": "600m",
        "descripcion": "Ubicado en Palacio de los Condes de Santiago de Calimaya. Historia de Mexico City desde época prehispánica. Entrada: $50 MXN."
      },
      {
        "nombre": "Mercado de Artesanías",
        "tipo": "Mercado tradicional",
        "distancia": "200m",
        "descripcion": "Mercado local con textiles, cerámica y artesanías mexicanas auténticas. Precios más económicos que Reforma."
      }
    ]
  },
  {
    "slug": "cuitlahuac",
    "nombre": "Cuitláhuac",
    "linea": "2",
    "alcaldia": "Azcapotzalco",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial Azcapotzalco",
        "tipo": "residencial",
        "distancia": "3 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Cuitláhuac CDMX — Zona residencial Azcapotzalco | MetroGuia",
    "meta_description": "Cuitláhuac: estación residencial en Azcapotzalco. Zona tranquila con servicios locales.",
    "h1": "Metro Cuitláhuac: zona residencial de Azcapotzalco",
    "intro": "Cuitláhuac es una estación residencial ubicada en Azcapotzalco, ofreciendo acceso a zona tranquila y segura con servicios comunitarios. Ideal para residentes que buscan tranquilidad.",
    "historia_icono": "Cuitláhuac fue un emperador azteca, símbolo de liderazgo y poder prehispánico.",
    "tips": [
      "Zona residencial segura",
      "Servicios locales accesibles",
      "Ambiente tranquilo",
      "Buen descanso"
    ],
    "mejor_horario": "Cualquier hora.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial."
  },
  {
    "slug": "popotla",
    "nombre": "Popotla",
    "linea": "2",
    "alcaldia": "Miguel Hidalgo",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial Popotla",
        "tipo": "residencial",
        "distancia": "2 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Popotla CDMX — Zona residencial | MetroGuia",
    "meta_description": "Popotla: estación residencial en Miguel Hidalgo. Zona tranquila y segura de CDMX.",
    "h1": "Metro Popotla: zona residencial Miguel Hidalgo",
    "intro": "Popotla es una estación residencial ubicada en Miguel Hidalgo, ofreciendo acceso a zona tranquila con servicios locales. Ideal para visitantes que buscan descanso en ambiente residencial.",
    "historia_icono": "Popotla proviene del náhuatl 'popotlatl', haciendo referencia a la vegetación característica de la zona.",
    "tips": [
      "Zona residencial tranquila",
      "Servicios locales",
      "Ambiente seguro",
      "Buena conectividad al centro"
    ],
    "mejor_horario": "Cualquier hora.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial."
  },
  {
    "slug": "colegio-militar",
    "nombre": "Colegio Militar",
    "linea": "2",
    "alcaldia": "Miguel Hidalgo",
    "tipo_zona": "cultural-turistico",
    "pois": [
      {
        "nombre": "Museo del Colegio Militar",
        "tipo": "museo",
        "distancia": "3 min caminando"
      },
      {
        "nombre": "Castillo de Chapultepec cercano",
        "tipo": "historico",
        "distancia": "10 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Colegio Militar CDMX — Museo militar | MetroGuia",
    "meta_description": "Colegio Militar: estación con acceso a museo militar histórico. Zona cultural en Miguel Hidalgo.",
    "h1": "Metro Colegio Militar: museo militar histórico",
    "intro": "Colegio Militar es una estación ubicada en Miguel Hidalgo que ofrece acceso a importante museo militar histórico. La zona combina valor histórico con proximidad a Chapultepec.",
    "historia_icono": "El Colegio Militar fue fundado en 1823, siendo la institución militar más importante de México.",
    "tips": [
      "Museo militar con historia importante",
      "Acceso a institución histórica",
      "Proximidad a Chapultepec",
      "Zona cultural e histórica"
    ],
    "mejor_horario": "Mañana para visita completa al museo.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial."
  },
  {
    "slug": "normal",
    "nombre": "Normal",
    "linea": "2",
    "alcaldia": "Cuauhtémoc",
    "tipo_zona": "educativo",
    "pois": [
      {
        "nombre": "Escuela Normal de México",
        "tipo": "educativo",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "Zona universitaria",
        "tipo": "educativo",
        "distancia": "3 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Normal CDMX — Zona educativa | MetroGuia",
    "meta_description": "Normal: estación en zona educativa. Acceso a institutos de educación superior.",
    "h1": "Metro Normal: zona educativa de CDMX",
    "intro": "Normal es una estación ubicada en Cuauhtémoc que ofrece acceso a zona educativa importante, con acceso directo a la Escuela Normal de México. La zona es tranquila y dedicada a la educación.",
    "historia_icono": "La Escuela Normal fue fundada en 1823, precursora de la educación pedagógica en México.",
    "tips": [
      "Acceso a institución educativa histórica",
      "Zona tranquila y segura",
      "Servicios estudiantiles",
      "Ambiente académico"
    ],
    "mejor_horario": "Horario escolar para ambiente completo.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial."
  },
  {
    "slug": "san-cosme",
    "nombre": "San Cosme",
    "linea": "2",
    "alcaldia": "Cuauhtémoc",
    "tipo_zona": "comercial",
    "pois": [
      {
        "nombre": "Avenida Paseo de la Reforma (acceso)",
        "tipo": "comercio",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Iglesia de San Cosme",
        "tipo": "religioso",
        "distancia": "2 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro San Cosme CDMX — Reforma y zona comercial | MetroGuia",
    "meta_description": "San Cosme: estación comercial con acceso a Paseo de la Reforma. Zona de tiendas y servicios.",
    "h1": "Metro San Cosme: acceso a Reforma",
    "intro": "San Cosme es una estación comercial ubicada en Cuauhtémoc que ofrece acceso a Paseo de la Reforma y zona comercial. La zona es moderna y bien conectada.",
    "historia_icono": "San Cosme es el patrón de los cirujanos, y la iglesia histórica que da nombre ha servido por siglos.",
    "tips": [
      "Acceso a Paseo de la Reforma",
      "Zona comercial moderna",
      "Iglesia histórica disponible",
      "Buena conectividad"
    ],
    "mejor_horario": "Tarde para ambiente comercial.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial."
  },
  {
    "slug": "revolucion",
    "nombre": "Revolución",
    "linea": "2",
    "alcaldia": "Cuauhtémoc",
    "tipo_zona": "historico",
    "pois": [
      {
        "nombre": "Museo de la Revolución Mexicana",
        "tipo": "museo",
        "distancia": "3 min caminando"
      },
      {
        "nombre": "Monumento a la Revolución",
        "tipo": "historico",
        "distancia": "2 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Revolución CDMX — Museo y Monumento | MetroGuia",
    "meta_description": "Revolución: estación histórica con museo de la Revolución Mexicana. Sitio imprescindible para entender la historia moderna de México.",
    "h1": "Metro Revolución: museo y monumento histórico",
    "intro": "Revolución es una estación histórica ubicada en Cuauhtémoc que ofrece acceso directo al Museo de la Revolución Mexicana y al icónico Monumento a la Revolución. La zona es culturalmente significativa.",
    "historia_icono": "El Monumento a la Revolución es uno de los símbolos más icónicos de México, celebrando la Revolución Mexicana de 1910.",
    "tips": [
      "Museo de la Revolución imprescindible",
      "Monumento a la Revolución: foto obligatoria",
      "Zona histórica importante",
      "Restaurantes y cafés cercanos"
    ],
    "mejor_horario": "Mañana para visita completa al museo.",
    "mundial_relevancia": "Parada importante para turistas interesados en historia moderna de México."
  },
  {
    "slug": "hidalgo",
    "nombre": "Hidalgo",
    "linea": "2",
    "alcaldia": "Cuauhtémoc",
    "tipo_zona": "cultural-turistico",
    "pois": [
      {
        "nombre": "Monumento a Hidalgo",
        "tipo": "historico",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "Paseo de la Reforma",
        "tipo": "comercio",
        "distancia": "1 min caminando"
      },
      {
        "nombre": "Museos y galerías cercanas",
        "tipo": "cultural-turistico",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [
      "3"
    ],
    "seo_title": "Metro Hidalgo CDMX — Catedral y Zócalo | MetroGuia",
    "meta_description": "Hidalgo CDMX. Catedral Metropolitana. Palacio Nacional. Zócalo. Centro Histórico y Patrimonio.",
    "h1": "Metro Hidalgo: monumento y hub cultural",
    "intro": "Hidalgo es una estación estratégica en el corazón del Centro Histórico de la Ciudad de México, ofreciendo acceso directo a la Catedral Metropolitana, el Palacio Nacional y la Zócalo, la plaza más grande de Latinoamérica. Esta estación es obligatoria para turistas internacionales del Mundial 2026 que deseen conectar con los símbolos más icónicos de México. Desde aquí confluyen historia prehispánica, colonial y moderna en un solo espacio.",
    "historia_icono": "El ícono de Hidalgo representa a Miguel Hidalgo y Costilla, padre de la Independencia mexicana. Simboliza la lucha por la libertad en el corazón del México Colonial.",
    "tips": [
      "Acceso directo a la Catedral Metropolitana, construcción de 5 siglos emblemática",
      "Palacio Nacional con murales de Diego Rivera: historia de México en imágenes",
      "Zócalo a pasos: observa banderas, mercados y vida cultural en la plaza más grande de Latinoamérica",
      "Museos adyacentes: Museo del Templo Mayor, Museo Nacional de Arte a corta distancia",
      "Come en fondas tradicionales cercanas con precios asequibles y sabor auténtico"
    ],
    "mejor_horario": "Mañana (8am-10am) para evitar multitudes en sitios arqueológicos. Tarde (4pm-6pm) para fotos del atardecer en Zócalo.",
    "mundial_relevancia": "Centro neurálgico de la capital. Fundamental para turistas del Mundial que busquen el símbolo más icónico de México: la Zócalo.",
    "descripcion_turistica": "Estación en la zona de la Alameda Central, principal parque histórico de la ciudad con acceso a Palacio de Bellas Artes. Conexión directa con Línea 3. Ubicación perfecta para turistas que visitan el corazón cultural de Mexico City durante el World Cup 2026.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Estación con elevador funcional. Accesibilidad completa en pasillos y plataforma. Una de las mejor equipadas del sistema."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierre 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "Alameda Central",
        "tipo": "Parque histórico",
        "distancia": "200m",
        "descripcion": "Parque más antiguo de América Latina, ideal para paseos tranquilos. Rodeado de cafeterías y tiendas artesanales."
      },
      {
        "nombre": "Palacio de Bellas Artes",
        "tipo": "Museo y teatro",
        "distancia": "400m",
        "descripcion": "Icónico palacio con cúpula de vidrio empleado. Presenta ballet folklórico y exposiciones de arte. Entrada: ~$60 MXN."
      },
      {
        "nombre": "Museo Mural Diego Rivera",
        "tipo": "Museo",
        "distancia": "300m",
        "descripcion": "Pequeño museo dedicado a murales de Diego Rivera. Acceso rápido desde Hidalgo, entrada económica."
      },
      {
        "nombre": "Barrio de Artesanías",
        "tipo": "Zona comercial",
        "distancia": "250m",
        "descripcion": "Tiendas de artesanías mexicanas tradicionales, souvenirs auténticos, buen lugar para comprar regalos."
      },
      {
        "nombre": "Cafeterías Alameda",
        "tipo": "Gastronomía",
        "distancia": "100m",
        "descripcion": "Múltiples cafeterías tradicionales mexicanas alrededor del parque, famosas por tamales y pan dulce."
      }
    ]
  },
  {
    "slug": "bellas-artes",
    "nombre": "Bellas Artes",
    "linea": "2",
    "alcaldia": "Cuauhtémoc",
    "tipo_zona": "cultural-turistico",
    "pois": [
      {
        "nombre": "Palacio de Bellas Artes",
        "tipo": "cultural-turistico",
        "distancia": "1 min caminando"
      },
      {
        "nombre": "Teatro Nacional",
        "tipo": "cultural-turistico",
        "distancia": "1 min caminando"
      },
      {
        "nombre": "Museo del Palacio de Bellas Artes",
        "tipo": "museo",
        "distancia": "1 min caminando"
      },
      {
        "nombre": "Mercado de Artesanías",
        "tipo": "comercio",
        "distancia": "3 min caminando"
      },
      {
        "nombre": "Restaurantes y cafés históricos",
        "tipo": "gastronomia",
        "distancia": "2 min caminando"
      }
    ],
    "transferencias": [
      "8"
    ],
    "seo_title": "Metro Bellas Artes CDMX — Cultura arte | MetroGuia",
    "meta_description": "Metro Bellas Artes: Palacio de Bellas Artes, Balé Folclórico, galerías arte. Centro cultural mexicano imprescindible. Guía completa.",
    "h1": "Metro Bellas Artes: joya cultural de México",
    "intro": "Bellas Artes es estación de la Línea 2 ubicada junto al Palacio de Bellas Artes, joya arquitectónica de Art Nouveau ubicada en el corazón de la capital. El edificio es sede de la ópera nacional, orquesta sinfónica, galerías de arte de renombre mundial y la famosa presentación del Balé Folclórico Mexicano. La zona es centro cultural por excelencia con teatros, museos y patrimonio arquitectónico del Porfiriato de gran belleza.",
    "historia_icono": "El ícono de Bellas Artes es la arquitectura Art Nouveau del Palacio, símbolo de riqueza cultural y artística de México.",
    "tips": [
      "Palacio de Bellas Artes: visitas guiadas $8 USD (martes-domingo 10:30 AM-5:30 PM); arquitectura imprescindible",
      "Balé Folclórico Mexicano: martes-jueves 7 PM, viernes-domingo 5 PM y 8:30 PM; entradas $30-80 USD, reserva online",
      "Museo de Artes Decorativas Palacio: entrada $4 USD, artes plásticas mexicanas siglo XX",
      "Zona de restaurantes y cafés cercanos: presupuesto $15-40 USD comida; ambiente artístico bohemio"
    ],
    "mejor_horario": "Mañanas (10 AM-1 PM) para visita Palacio. Tardes (5-8 PM) para vida cultural cafés cercanos. Shows nocturnos desde 7 PM.",
    "mundial_relevancia": "Entretenimiento cultural de clase mundial para turistas del Mundial que buscan experiencias artísticas e icónico.",
    "descripcion_turistica": "Estación junto al Palacio de Bellas Artes, el monumento cultural más emblemático de México. Centro neurálgico para turistas interesados en arte, arquitectura y cultura. Conexión directa con zona de museos. Sitio obligado durante World Cup 2026.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Excelente accesibilidad con elevador operativo. Acceso directo al Palacio de Bellas Artes con rampas de entrada."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierre 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "Palacio de Bellas Artes",
        "tipo": "Palacio y museo",
        "distancia": "0m",
        "descripcion": "Obra maestra de arquitectura. Ballet folklórico martes, jueves, sábados y domingos. Galerías abiertas miércoles a domingo."
      },
      {
        "nombre": "Museo Nacional de Arte (MUNAL)",
        "tipo": "Museo",
        "distancia": "150m",
        "descripcion": "Galería de arte mexicano del siglo XVI al XX. Ubicado en Palacio de Comunicaciones. Entrada: $80 MXN."
      },
      {
        "nombre": "Centro Histórico - Zócalo",
        "tipo": "Zona histórica",
        "distancia": "800m",
        "descripcion": "Principal plaza de México City con Catedral Metropolitana y Palacio Nacional. 10 minutos a pie o un viaje en metro."
      },
      {
        "nombre": "Museo Numismático",
        "tipo": "Museo especializado",
        "distancia": "200m",
        "descripcion": "Colección de monedas y billetes mexicanos históricos. Entrada libre. Ubicado en Banco de México."
      }
    ]
  },
  {
    "slug": "allende",
    "nombre": "Allende",
    "linea": "2",
    "alcaldia": "Cuauhtémoc",
    "tipo_zona": "historico",
    "pois": [
      {
        "nombre": "Centro histórico colonial",
        "tipo": "historico",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "Iglesias coloniales",
        "tipo": "religioso",
        "distancia": "3 min caminando"
      },
      {
        "nombre": "Tiendas de artesanía",
        "tipo": "comercio",
        "distancia": "1 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Allende CDMX — Centro histórico colonial | MetroGuia",
    "meta_description": "Allende: estación en corazón del centro histórico. Iglesias coloniales, artesanía y auténtica CDMX.",
    "h1": "Metro Allende: corazón del centro histórico",
    "intro": "Allende es una estación ubicada en el corazón del centro histórico colonial de CDMX, ofreciendo acceso a iglesias coloniales, tiendas de artesanía y auténtica arquitectura virreinal. La zona es vibrante y llena de historia.",
    "historia_icono": "Allende evoca a Ignacio Allende, héroe de la Independencia de México, honrado por su lucha por la libertad.",
    "tips": [
      "Centro histórico colonial imprescindible",
      "Iglesias coloniales hermosas",
      "Tiendas de artesanía auténtica",
      "Gastronomía mexicana tradicional",
      "Ambiente vibrante y auténtico"
    ],
    "mejor_horario": "Mañana para evitar multitudes turísticas.",
    "mundial_relevancia": "Parada importante para turistas explorando historia colonial.",
    "descripcion_turistica": "Estación en barrio histórico con ambiente colonial conservado. Rodeada de iglesias antiguas, calles empedradas y vida local tradicional. Ubicación perfecta para turistas que quieren experimentar Mexico City antigua y auténtica fuera del Centro Histórico durante World Cup 2026.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Rampas funcionales. Señalización táctil. Barrio histórico con calles de acceso variable."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierre 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "Barrio de Allende",
        "tipo": "Zona histórica",
        "distancia": "0m",
        "descripcion": "Barrio prehispánico con patrimonio colonial. Calles empedradas, tiendas tradicionales, ambiente muy mexicano."
      },
      {
        "nombre": "Templo de Santiago Tlatelolco",
        "tipo": "Iglesia colonial",
        "distancia": "500m",
        "descripcion": "Convento del siglo XVI sobre templo azteca. Abierto para visitantes. Arquitectura única sincretismo."
      },
      {
        "nombre": "Tlatelolco - Plaza de las Tres Culturas",
        "tipo": "Sitio arqueológico",
        "distancia": "600m",
        "descripcion": "Importante sitio con ruinas aztecas, iglesia colonial y modernidad. Históricamente significante."
      },
      {
        "nombre": "Gastronomía local",
        "tipo": "Restaurantes",
        "distancia": "100m",
        "descripcion": "Comedores tradicionales con antojitos mexicanos. Ambiente local, precios bajos."
      }
    ]
  },
  {
    "slug": "zocalo",
    "nombre": "Zócalo",
    "linea": "2",
    "alcaldia": "Cuauhtémoc",
    "tipo_zona": "historico",
    "pois": [
      {
        "nombre": "Zócalo de la Ciudad de México",
        "tipo": "historico",
        "distancia": "1 min caminando"
      },
      {
        "nombre": "Catedral Metropolitana",
        "tipo": "religioso",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "Palacio Nacional",
        "tipo": "historico",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "Museo del Templo Mayor",
        "tipo": "museo",
        "distancia": "3 min caminando"
      },
      {
        "nombre": "Librerías y tiendas históricas",
        "tipo": "comercio",
        "distancia": "2 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Zócalo CDMX — Corazón histórico | MetroGuia",
    "meta_description": "Metro Zócalo: plaza mayor de América Latina. Catedral, Palacio Nacional, Templo Mayor. Patrimonio UNESCO imprescindible para el Mundial FIFA 2026.",
    "h1": "Metro Zócalo: corazón histórico de México",
    "intro": "Zócalo es la estación de la Línea 2 ubicada en el corazón del Centro Histórico de la Ciudad de México, frente a la plaza del Zócalo. Es la plaza más grande y significativa de América Latina con concentración única de patrimonio arquitectónico colonial, vestigios prehispánicos, museos de categoría mundial y centros de poder político. Para cualquier visitante a la capital es el sitio imprescindible que define la historia de México en sus edificios, monumentos y tradiciones.",
    "historia_icono": "El ícono de Zócalo es el Águila Mexicana (símbolo prehispánico), reflejando que fue sitio del Templo Mayor de Tenochtitlan.",
    "tips": [
      "Catedral Metropolitana: entrada $6 USD, abierta de 8 AM-5 PM, arquitectura renacentista del siglo XVI",
      "Palacio Nacional: visitas guiadas GRATIS con registro previo (30 min antes), murales Diego Rivera imprescindibles",
      "Templo Mayor Museum: entrada $6 USD, experiencia inmersiva civilización azteca; línea espera típica 45 min",
      "Evita después de 8 PM: zona se queda tranquila con menos vigilancia; cambio moneda en casas de cambio"
    ],
    "mejor_horario": "8-10 AM para comenzar recorrido sin filas masivas. Atardeceres (5-7 PM) para fotografía dorada. Viernes-domingo máxima afluencia.",
    "mundial_relevancia": "Atracción #1 para turistas del Mundial. Parada obligatoria para cualquier extranjero. Conecta con Línea 1 hacia Chapultepec.",
    "descripcion_turistica": "La estación más icónica de Mexico City, en la plaza histórica más grande de América Latina. Centro neurálgico de gobierno, cultura y turismo. Acceso a Catedral Metropolitana, Palacio Nacional y Templo Mayor. Imprescindible para cualquier turista durante World Cup 2026.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Estación completamente accesible con elevadores, rampas y señalización táctil. Una de las mejor equipadas del metro."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierre 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "Zócalo (Plaza Mayor)",
        "tipo": "Plaza histórica",
        "distancia": "0m",
        "descripcion": "Segunda plaza más grande del mundo. Centro político y cultural de México desde la época azteca. Imprescindible."
      },
      {
        "nombre": "Catedral Metropolitana",
        "tipo": "Catedral histórica",
        "distancia": "200m",
        "descripcion": "Catedral más grande de América Latina, construcción del siglo XVI. Gratis. Horarios: 7am-8pm. Abierta a turistas."
      },
      {
        "nombre": "Palacio Nacional",
        "tipo": "Palacio gubernamental",
        "distancia": "100m",
        "descripcion": "Sede del Poder Ejecutivo con murales de Diego Rivera. Tours gratuitos lunes a viernes 9am-5pm. Requiere identificación."
      },
      {
        "nombre": "Templo Mayor",
        "tipo": "Sitio arqueológico",
        "distancia": "300m",
        "descripcion": "Ruinas del templo azteca principal con museo. Entrada: $85 MXN. Abierto martes a domingo 9am-5pm."
      },
      {
        "nombre": "Museo del Banco de México",
        "tipo": "Museo de arte",
        "distancia": "150m",
        "descripcion": "Colección de arte prehispánico y moderno. Entrada libre. Ubicado en Palacio de Iturbide, arquitectura espectacular."
      }
    ]
  },
  {
    "slug": "pino-suarez",
    "nombre": "Pino Suárez",
    "linea": "2",
    "alcaldia": "Cuauhtémoc",
    "tipo_zona": "historico",
    "pois": [
      {
        "nombre": "Zócalo (transferencia a Línea 1)",
        "tipo": "historico",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "Centro histórico",
        "tipo": "historico",
        "distancia": "1 min caminando"
      }
    ],
    "transferencias": [
      "1"
    ],
    "seo_title": "Metro Pino Suárez CDMX — Centro histórico | MetroGuia",
    "meta_description": "Metro Pino Suárez: acceso al Zócalo, Catedral, Templo Mayor. Patrimonio histórico UNESCO. Guía imprescindible para turistas del Mundial.",
    "h1": "Metro Pino Suárez (Línea 2): acceso al Zócalo",
    "intro": "Pino Suárez es estación de la Línea 1 ubicada en el corazón del Centro Histórico, junto al Zócalo de la Ciudad de México. La zona es epicentro de patrimonio cultural con templos coloniales, museos importantes, comercio tradicional y plazas históricas. Para turistas del Mundial es punto de acceso imprescindible al patrimonio histórico de la capital, declarado Patrimonio de la Humanidad por UNESCO. Conecta directamente con Línea 2 hacia Estadio Azteca.",
    "historia_icono": "El ícono de Pino Suárez representa al personaje histórico Benito Juárez Pino Suárez, presidente reformista de México.",
    "tips": [
      "Zócalo a 2 min caminando: plaza más grande de América Latina, Catedral Metropolitana (entrada $6 USD)",
      "Museos gratuitos domingos para residentes; turistas extranjeros pagan tarifa normal de $4-8 USD",
      "Templo Mayor prehispánico a 3 min: entrada $6 USD, una de las ruinas más significativas de México",
      "Zona muy concurrida; evita 11 AM-3 PM. Mejor: 8-10 AM o después de 5 PM para exploración tranquila"
    ],
    "mejor_horario": "8-11 AM para museos y monumentos sin filas enormes. Atardeceres (5-7 PM) ofrecen iluminación dorada del Zócalo.",
    "mundial_relevancia": "Atracción histórica esencial para turistas del Mundial. Centro neurálgico que conecta con Línea 2 hacia Estadio Azteca.",
    "descripcion_turistica": "Estación en zona céntrica con conexión directa a Línea 2. Ubicada junto a iglesias coloniales y cerca del Zócalo. Acceso a vida comercial intensa y gastronomía tradicional. Punto de transferencia clave para turistas que exploran el Centro Histórico durante World Cup 2026.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Rampas de acceso disponibles. Señalización táctil completa. Escaleras mecánicas en horarios pico."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierre 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "Iglesia de la Santísima Trinidad",
        "tipo": "Iglesia colonial",
        "distancia": "100m",
        "descripcion": "Templo barroco del siglo XVIII. Arquitectura espectacular. Abierta para visitantes y misas."
      },
      {
        "nombre": "Mercado de la Merced",
        "tipo": "Mercado tradicional",
        "distancia": "400m",
        "descripcion": "Uno de los mercados más grandes de México. Caótico pero auténtico, con comida, flores y artesanías. Experiencia local pura."
      },
      {
        "nombre": "Zócalo",
        "tipo": "Plaza histórica",
        "distancia": "300m",
        "descripcion": "A pie en 5 minutos. Centro neurálgico de Mexico City con monumentos imprescindibles para turistas."
      },
      {
        "nombre": "Zona de Gastronomía Popular",
        "tipo": "Restaurantes y comida",
        "distancia": "200m",
        "descripcion": "Restaurantes familiares con comida tradicional mexicana. Enchiladas, tacos, pozole, precios accesibles."
      }
    ]
  },
  {
    "slug": "san-antonio-abad",
    "nombre": "San Antonio Abad",
    "linea": "2",
    "alcaldia": "Cuauhtémoc",
    "tipo_zona": "comercial",
    "pois": [
      {
        "nombre": "Zona comercial San Antonio",
        "tipo": "comercio",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "Iglesia de San Antonio",
        "tipo": "religioso",
        "distancia": "3 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro San Antonio Abad CDMX — Historia y Mercados",
    "meta_description": "Estación San Antonio Abad: Templo histórico, Mercado de la Jamaica y auténtica vida barrial. Descubre el sur de CDMX.",
    "h1": "Metro San Antonio Abad: zona comercial céntrica",
    "intro": "San Antonio Abad es una estación en el sur de la CDMX que abre la puerta a la zona de Iztapalapa, uno de los corazones históricos de la ciudad. Nombrada por la iglesia del santo, esta zona tiene profundas raíces coloniales y es hogar de una población vibrante y auténtica. Los turistas interesados en la historia, la cultura popular mexicana y la vida real de capitalinos encontrarán mucho que explorar: mercados dinámicos, templos históricos y gastronomía auténtica.",
    "historia_icono": "El ícono representa a San Antonio Abad, santo católico venerado ampliamente en México. Se muestra típicamente con elementos religiosos como una vara o cayado, conectando con la devoción popular y la iglesia histórica que nombra la estación.",
    "tips": [
      "Visita la Iglesia de San Antonio Abad, un templo de importancia histórica",
      "Explora el Mercado de la Jamaica, uno de los más grandes de la CDMX",
      "Come comida de barrio en comedores populares con precios muy accesibles",
      "Observa el arte urbano y murales que narran historias locales",
      "Toma fotos de la arquitectura popular y colorida de las casas"
    ],
    "mejor_horario": "Lunes a sábados entre 08:00 y 17:00 para visitar mercados activos y espacios culturales. Evita noches si no estás familiarizado con la zona.",
    "mundial_relevancia": "San Antonio Abad será una estación importante para turistas del Mundial 2026 que busquen experimentar la CDMX auténtica y menos conocida."
  },
  {
    "slug": "chabacano",
    "nombre": "Chabacano",
    "linea": "2",
    "alcaldia": "Iztapalapa",
    "tipo_zona": "comercial",
    "pois": [
      {
        "nombre": "Zona comercial Chabacano",
        "tipo": "comercio",
        "distancia": "1 min caminando"
      },
      {
        "nombre": "Tiendas de ropa y electrónica",
        "tipo": "comercio",
        "distancia": "2 min caminando"
      }
    ],
    "transferencias": [
      "8",
      "9"
    ],
    "seo_title": "Metro Chabacano CDMX — Mercados y Vida Local",
    "meta_description": "Estación Chabacano: Mercados frescos, fondas auténticas y vida barrial tradicional. Experiencia real de CDMX para viajeros auténticos.",
    "h1": "Metro Chabacano: hub comercial y de transporte",
    "intro": "Chabacano es una estación que conecta con un barrio residencial con carácter tradicional mexicano. Named después de un árbol frutal tropical, la zona mantiene una atmósfera auténtica y local. Es ideal para turistas que quieren ver cómo viven los mexicanos en la ciudad, lejos de las zonas turistificadas. Aquí encontrarás tiendas locales, fondas de comida casera, y la oportunidad de comprar frutas y productos locales en mercados callejeros.",
    "historia_icono": "El ícono representa el árbol chabacano, un árbol frutal tropical que era común en la zona. El símbolo muestra la fruta o las características del árbol, conectando con la naturaleza y la historia agrícola del lugar.",
    "tips": [
      "Compra frutas y verduras en los mercados de barrio, muy frescas y baratas",
      "Come tamales, quesadillas y comida típica en fondas locales auténticas",
      "Interactúa con vendedores locales para recomendaciones personalizadas",
      "El área es segura durante el día para explorar a pie",
      "Toma fotos de la arquitectura vernácula y colorida del barrio"
    ],
    "mejor_horario": "Mañanas entre 07:00 y 11:00 para ver la actividad más auténtica del mercado. Los días de entre semana son más tranquilos.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial FIFA 2026.",
    "descripcion_turistica": "Estación de transferencia importante con conexión a Líneas 8 y 9. Ubicada en zona de comercio intenso con vida local auténtica. Punto clave para turistas que se desplazan entre diferentes zonas de la ciudad durante World Cup 2026.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Excelente accesibilidad con elevador operativo. Estación de transferencia bien equipada para personas con movilidad reducida."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierre 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "Nodo de Transferencia Chabacano",
        "tipo": "Centro de transporte",
        "distancia": "0m",
        "descripcion": "Hub importante de metro con conexión a líneas 2, 8 y 9. Central de transporte clave para movilidad urbana."
      },
      {
        "nombre": "Zona comercial Chabacano",
        "tipo": "Área retail",
        "distancia": "100m",
        "descripcion": "Tiendas, mercados y vida comercial intensa. Ambiente de barrio tradicional con servicios variados."
      },
      {
        "nombre": "Iglesia de Chabacano",
        "tipo": "Iglesia",
        "distancia": "200m",
        "descripcion": "Templo histórico de barrio. Abierto para visitantes."
      },
      {
        "nombre": "Restaurantes y comedores",
        "tipo": "Gastronomía",
        "distancia": "50m",
        "descripcion": "Opciones de comida tradicional y rápida. Precios accesibles para turistas en tránsito."
      }
    ]
  },
  {
    "slug": "viaducto",
    "nombre": "Viaducto",
    "linea": "2",
    "alcaldia": "Cuauhtémoc",
    "tipo_zona": "comercial",
    "pois": [
      {
        "nombre": "Eje Viaducto Miguel Alemán",
        "tipo": "transporte",
        "distancia": "1 min"
      },
      {
        "nombre": "Zona comercial local",
        "tipo": "comercio",
        "distancia": "2 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Viaducto CDMX — Transporte central | MetroGuia",
    "meta_description": "Metro Viaducto: hub de conexión estratégica. Comercio local, restaurantes variados. Guía de transbordo eficiente.",
    "h1": "Metro Viaducto: eje vial importante",
    "intro": "Viaducto es estación de la Línea 2 ubicada bajo el Viaducto Miguel Alemán, importante arteria de transporte de la capital. La zona es comercial y de servicios con ambiente urbano típico capitalino. Para turistas representa acceso a zonas residenciales y comerciales de CDMX más allá del circuito turístico central. Funciona como hub de conexión hacia múltiples direcciones de la ciudad.",
    "historia_icono": "El ícono de Viaducto representa la infraestructura moderna del viaducto, símbolo de modernización ciudad siglo XX.",
    "tips": [
      "Conexión directa con Línea 1 para acceso Chapultepec (museos) e Insurgentes (compras)",
      "Comercio local: tiendas electrónica, ropa, servicios básicos",
      "Restaurantes y cafés presupuesto variado",
      "Zona segura durante día; bien conectada con otras líneas metro"
    ],
    "mejor_horario": "9 AM-7 PM para compras y servicios. Menos turística que estaciones céntrica.",
    "mundial_relevancia": "Punto de transbordo estratégico para turistas que conectan líneas principales del Metro."
  },
  {
    "slug": "xola",
    "nombre": "Xola",
    "linea": "2",
    "alcaldia": "Benito Juárez",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial Xola",
        "tipo": "residencial",
        "distancia": "2 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Xola CDMX — Zona residencial Benito Juárez | MetroGuia",
    "meta_description": "Xola: estación residencial en Benito Juárez. Zona tranquila con servicios locales.",
    "h1": "Metro Xola: zona residencial de Benito Juárez",
    "intro": "Xola es una estación residencial ubicada en Benito Juárez, ofreciendo acceso a zona tranquila con servicios comunitarios. Ideal para residentes que buscan ambiente seguro.",
    "historia_icono": "Xola proviene del náhuatl, haciendo referencia a la topografía de la zona.",
    "tips": [
      "Zona residencial tranquila",
      "Servicios locales",
      "Ambiente seguro",
      "Buen descanso"
    ],
    "mejor_horario": "Cualquier hora.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial."
  },
  {
    "slug": "villa-de-cortes",
    "nombre": "Villa de Cortés",
    "linea": "2",
    "alcaldia": "Benito Juárez",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial Villa de Cortés",
        "tipo": "residencial",
        "distancia": "2 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Villa de Cortés CDMX — Zona residencial | MetroGuia",
    "meta_description": "Villa de Cortés: estación residencial en Benito Juárez. Zona tranquila y segura.",
    "h1": "Metro Villa de Cortés: zona residencial",
    "intro": "Villa de Cortés es una estación residencial ubicada en Benito Juárez, ofreciendo acceso a zona residencial tranquila con servicios locales. Ideal para descanso y residentes.",
    "historia_icono": "Villa de Cortés evoca a Hernán Cortés, conquistador español y figura histórica controvertida.",
    "tips": [
      "Zona residencial segura",
      "Servicios locales",
      "Ambiente tranquilo",
      "Buen descanso"
    ],
    "mejor_horario": "Cualquier hora.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial."
  },
  {
    "slug": "nativitas",
    "nombre": "Nativitas",
    "linea": "2",
    "alcaldia": "Benito Juárez",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial Nativitas",
        "tipo": "residencial",
        "distancia": "2 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Nativitas CDMX — Barrio Familiar Tranquilo",
    "meta_description": "Estación Nativitas: Barrio residencial tranquilo con fondas familiares y mercados. Experiencia auténtica del sur capitalino.",
    "h1": "Metro Nativitas: zona residencial tranquila",
    "intro": "Nativitas es una estación en un barrio residencial del sur coyoacanense. El nombre honra la tradición religiosa cristiana mexicana. La zona es principalmente habitacional, tranquila y segura, con un ambiente auténticamente mexicano. Para turistas interesados en la vida real, lejos de las zonas turísticas, ofrece mercados locales, fondas familiares y la oportunidad de conectar con la comunidad.",
    "historia_icono": "El ícono representa la Natividad de Jesús, un evento importante en la tradición cristiana. El símbolo muestra probablemente elementos religiosos conectando con esta celebración.",
    "tips": [
      "Desayuna como un local en fondas con comida típica",
      "Compra artesanías locales directamente de artesanos",
      "Camina por el barrio para fotografiar arquitectura vernácula",
      "Es seguro explorar durante el día a pie",
      "Los vecinos son amables y abiertos a conversaciones"
    ],
    "mejor_horario": "Mañanas de 07:00 a 12:00 para ver actividad auténtica. Entre semana es más tranquilo que fines de semana.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial FIFA 2026."
  },
  {
    "slug": "portales",
    "nombre": "Portales",
    "linea": "2",
    "alcaldia": "Benito Juárez",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial Portales",
        "tipo": "residencial",
        "distancia": "2 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Portales CDMX — Zona residencial Benito Juárez | MetroGuia",
    "meta_description": "Portales: estación residencial en Benito Juárez. Zona tranquila con servicios locales.",
    "h1": "Metro Portales: zona residencial tranquila",
    "intro": "Portales es una estación residencial ubicada en Benito Juárez, ofreciendo acceso a zona residencial tranquila con servicios básicos. Ideal para residentes que buscan tranquilidad.",
    "historia_icono": "Portales hace referencia a las estructuras arquitectónicas tipo portal de la zona.",
    "tips": [
      "Zona residencial tranquila",
      "Servicios básicos locales",
      "Ambiente seguro",
      "Buen descanso"
    ],
    "mejor_horario": "Cualquier hora.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial."
  },
  {
    "slug": "ermita",
    "nombre": "Ermita",
    "linea": "2",
    "alcaldia": "Coyoacán",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Ermita Coyoacán",
        "tipo": "religioso",
        "distancia": "3 min caminando"
      },
      {
        "nombre": "Zona residencial Coyoacán",
        "tipo": "residencial",
        "distancia": "2 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Ermita — Patrimonio religioso guadalupano",
    "meta_description": "Ermita: cercanía a Basílica de Guadalupe, zona de peregrinación y mercados religiosos. Patrimonio espiritual auténtico en el sur.           ",
    "h1": "Metro Ermita: zona residencial de Coyoacán",
    "intro": "Ermita es estación de la Línea 12 conectando zona residencial-comercial del sur con Basílica de Guadalupe cercana, sitio de importancia religiosa y turística. Para turistas del Mundial FIFA 2026, Ermita ofrece acceso a zona de peregrinación, mercados locales y vida religiosa-cultural vibrante del sur capitalino. Es parada para exploradores interesados en patrimonio religioso.",
    "historia_icono": "El ícono dorado de la Línea 12 representa conexión de Ermita con patrimonio religioso, zona donde fe, tradición y vida moderna convergen. Este símbolo evoca importancia espiritual y cultural.",
    "tips": [
      "Basílica de Guadalupe cercana: visitavisita lugar de peregrinación importante, especialmente deciembre",
      "Mercado local: frutas, velas, flores y productos religiosos para peregrinos",
      "Iglesias locales: arquitectura colonial y religiosa en alrededores",
      "Tiendas de recuerdos religiosos: artículos devocionales a precios de barrio",
      "Respeta espacios: zona es principalmente religiosa; mantén silencio en áreas sagradas"
    ],
    "mejor_horario": "Visita según calendario religioso; diciembre altamente concurrido por Día de Guadalupe.",
    "mundial_relevancia": "Relevancia media: turistas interesados en patrimonio religioso y peregrinación encontrarán experiencia cultural importante.",
    "descripcion_turistica": "Ermita es estación de Línea 12 en zona residencial del sur. Acceso a colonias pobladas y comercio local diversificado de Iztapalapa.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Con elevadores. Acceso total para discapacitados."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Ermita de Santa Cruz",
        "tipo": "Patrimonio",
        "distancia": "400m",
        "descripcion": "Templo colonial histórico"
      },
      {
        "nombre": "Mercado Ermita",
        "tipo": "Comercio",
        "distancia": "200m",
        "descripcion": "Tianguis tradicional"
      },
      {
        "nombre": "Centro Comunitario",
        "tipo": "Servicios",
        "distancia": "300m",
        "descripcion": "Espacio para actividades comunitarias"
      }
    ]
  },
  {
    "slug": "general-anaya",
    "nombre": "General Anaya",
    "linea": "2",
    "alcaldia": "Coyoacán",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial Coyoacán",
        "tipo": "residencial",
        "distancia": "2 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro General Anaya CDMX — Barrio Residencial",
    "meta_description": "Estación General Anaya: Zona residencial tranquila con fondas y tiendas locales. Vida auténtica de CDMX.",
    "h1": "Metro General Anaya: zona residencial Coyoacán",
    "intro": "General Anaya es una estación nombrada en honor a un personaje histórico mexicano. La zona es principalmente residencial, tranquila y segura, con un carácter local auténtico. Aunque no es un destino turístico principal en sí mismo, la estación ofrece acceso a un barrio genuino donde viven capitalinos comunes, con tiendas locales, fondas y la oportunidad de experimentar la vida real de la CDMX lejos de las rutas turísticas.",
    "historia_icono": "El ícono representa a un general, probablemente mostrando elementos militares o símbolos de honor, honrando este personaje histórico mexicano importante.",
    "tips": [
      "Desayuna en fondas locales con comida casera y precios muy bajos",
      "Compra en tiendas de barrio para ver el comercio local",
      "Camina por las calles residenciales para fotografiar la vida cotidiana",
      "El barrio es seguro durante el día",
      "Interactúa con vecinos para recomendaciones auténticas"
    ],
    "mejor_horario": "Cualquier hora del día es segura. Las mañanas entre 07:00 y 11:00 son más auténticas.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial FIFA 2026."
  },
  {
    "slug": "tasquena",
    "nombre": "Tasqueña",
    "linea": "2",
    "alcaldia": "Coyoacán",
    "tipo_zona": "transporte",
    "pois": [
      {
        "nombre": "Terminal Tasqueña (Tren Ligero)",
        "tipo": "transporte",
        "distancia": "1 min caminando"
      },
      {
        "nombre": "Acceso a Tren Ligero → Estadio Azteca",
        "tipo": "transporte",
        "distancia": "1 min caminando"
      },
      {
        "nombre": "Centro comercial",
        "tipo": "comercio",
        "distancia": "3 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Tasqueña CDMX — Tren Ligero al Estadio Azteca | MetroGuia",
    "meta_description": "Tasqueña: terminal CRÍTICA para FIFA 2026. Acceso a Tren Ligero al Estadio Azteca. $15 MXN. Guía para aficionados.",
    "h1": "Metro Tasqueña: puerta al Estadio Azteca para FIFA 2026",
    "intro": "Tasqueña es LA ESTACIÓN CRÍTICA para aficionados del Mundial FIFA 2026. Ubicada en Coyoacán, ofrece acceso directo a la Terminal del Tren Ligero que conecta directamente al Estadio Azteca. IMPORTANTE: La tarjeta de Metro NO funciona en el Tren Ligero — requiere tarjeta separada ($15 MXN).",
    "historia_icono": "Tasqueña es la puerta sur de la Ciudad de México, punto de conexión histórico con transporte de carga y pasajeros.",
    "tips": [
      "CRÍTICO: Terminal Tren Ligero → Estadio Azteca",
      "ATENCIÓN: Tarjeta Metro NO funciona en Tren Ligero",
      "Comprar tarjeta Tren Ligero en taquilla ($15 MXN viaje sencillo)",
      "Viaje al Estadio: ~25 minutos desde Tasqueña",
      "Centro comercial para servicios",
      "Llegar 2-3 horas antes de partido",
      "Zona segura con presencia policial en días de partido",
      "Múltiples cafés y servicios de comida"
    ],
    "mejor_horario": "Crucial: Llegar con 2-3 horas de anticipación a partidos.",
    "mundial_relevancia": "CRÍTICA ABSOLUTA para FIFA 2026. ÚNICA conexión Metro → Estadio Azteca. IMPRESCINDIBLE entender que tarjeta Metro ≠ Tren Ligero."
  },
  {
    "slug": "indios-verdes",
    "nombre": "Indios Verdes",
    "linea": "3",
    "alcaldia": "Gustavo A. Madero",
    "tipo_zona": "residencial-comercial",
    "pois": [
      {
        "nombre": "Central de Autobuses Norte (acceso)",
        "tipo": "transporte",
        "distancia": "10 min en metro"
      },
      {
        "nombre": "Parque Indios Verdes",
        "tipo": "parque",
        "distancia": "3 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Indios Verdes CDMX — Terminal Norte | MetroGuia",
    "meta_description": "Terminal norte Línea 3. Conexión Central Autobuses. Parque Indios Verdes. Entrada CDMX desde norte.",
    "h1": "Metro Indios Verdes: guía completa de la estación terminal",
    "intro": "Indios Verdes es el terminus norte de la Línea 3 del Metro CDMX, una puerta de entrada estratégica para turistas que llegan desde el norte del país. Esta estación conecta directamente con la Central de Autobuses del Norte, facilitando el acceso a visitantes internacionales del Mundial 2026. La zona rodea el icónico Parque Indios Verdes, que ofrece espacios verdes y mercados tradicionales mexicanos. Desde aquí puedes explorar barrios residenciales auténticos de la Ciudad de México.",
    "historia_icono": "El ícono de esta estación representa a los guerreros indígenas que habitaron la región norte del Valle de México. Homenajea a los pueblos originarios de Tenochtitlan y conmemora la presencia indígena en esta zona de la capital.",
    "tips": [
      "Es terminal de línea: siempre hay espacio para sentarse, ideal tras viajes largos desde el norte",
      "Conecta con la Central de Autobuses del Norte en 10 minutos a pie o pesero directo",
      "El Parque Indios Verdes es perfecto para estirar las piernas y disfrutar del verde",
      "Los mercados cercanos venden artesanías y productos típicos mexicanos a buenos precios",
      "Evita las 7-9am y 6-8pm para mayor comodidad"
    ],
    "mejor_horario": "Visita de 10am a 4pm para evitar afluencias máximas. El parque es especialmente hermoso al atardecer para fotos panorámicas.",
    "mundial_relevancia": "Puerta de entrada desde el norte del país. Relevante para turistas que arriben en autobús foráneo durante el Mundial 2026.",
    "descripcion_turistica": "Estación terminal norte de Línea 3, ubicada en zona residencial norte con vida local intenso. Acceso a zonas verdes y vida comunitaria auténtica. Punto de partida hacia Centro Histórico y Coyoacán durante exploración turística en World Cup 2026.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Rampas de acceso. Señalización táctil. Estación terminal con servicios estándar."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierre 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "Mercado Indios Verdes",
        "tipo": "Mercado de flores",
        "distancia": "100m",
        "descripcion": "Mercado mayorista y minorista de flores más grande de América Latina. Explosión de colores y aromas. Abierto desde madrugada."
      },
      {
        "nombre": "Zona Indios Verdes",
        "tipo": "Área comercial",
        "distancia": "0m",
        "descripcion": "Hub comercial importante norte con tiendas, restaurantes y servicios. Nodo de transporte para norte de la ciudad."
      },
      {
        "nombre": "Parque de Indios Verdes",
        "tipo": "Parque",
        "distancia": "200m",
        "descripcion": "Parque público con espacios verdes para descanso y recreación."
      },
      {
        "nombre": "Centro Histórico vía Línea 3",
        "tipo": "Zona turística",
        "distancia": "10 estaciones",
        "descripcion": "Acceso directo a Zócalo, museos y principales atracciones históricas de la ciudad."
      }
    ]
  },
  {
    "slug": "deportivo-18-de-marzo",
    "nombre": "Deportivo 18 de Marzo",
    "linea": "3",
    "alcaldia": "Gustavo A. Madero",
    "tipo_zona": "deportivo-residencial",
    "pois": [
      {
        "nombre": "Deportivo 18 de Marzo",
        "tipo": "estadio",
        "distancia": "2 min caminando"
      }
    ],
    "transferencias": [
      "6"
    ],
    "seo_title": "Metro Deportivo 18 Marzo CDMX — Centro Deportivo | MetroGuia",
    "meta_description": "Deportivo 18 Marzo. Complejo deportivo profesional. Entrenamientos atléticos. Eventos deportivos CDMX.",
    "h1": "Metro Deportivo 18 de Marzo: transferencia L3 y L6",
    "intro": "Esta estación es punto de acceso al Deportivo 18 de Marzo, un complejo deportivo emblemático de la Ciudad de México usado para eventos atléticos y entrenamientos. Para turistas del Mundial 2026, representa una oportunidad de conectar con la vida deportiva local y ver instalaciones de clase mundial. La zona es principalmente residencial y deportiva, con acceso fácil a campos de fútbol, canchas de tenis y espacios de entrenamiento profesional.",
    "historia_icono": "El ícono simboliza la actividad deportiva y el compromiso con la excelencia atlética. Representa los valores olímpicos y el desarrollo del deporte en la ciudad durante décadas.",
    "tips": [
      "Acceso directo al Deportivo 18 de Marzo, complejo con estadio y múltiples canchas",
      "Transferencia con Línea 6 para ampliar tu ruta turística sin cambiar estación",
      "Zona ideal para ver entrenamientos de futbolistas y atletas durante el día",
      "Restaurantes cercanos ofrecen comida deportiva mexicana e internacional",
      "Horario de actividades: 6am-10pm (verifica eventos especiales en línea)"
    ],
    "mejor_horario": "Mañana (7am-11am) para ver entrenamientos en vivo. Tardes tranquilas de 2pm-5pm para explorar sin multitudes.",
    "mundial_relevancia": "Centro de entrenamientos y eventos deportivos. Relevante para turistas interesados en la infraestructura deportiva mexicana que alberga entrenamientos del Mundial."
  },
  {
    "slug": "potrero",
    "nombre": "Potrero",
    "linea": "3",
    "alcaldia": "Gustavo A. Madero",
    "tipo_zona": "residencial-comercial",
    "pois": [
      {
        "nombre": "Mercado Potrero",
        "tipo": "mercado",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Potrero CDMX — Centro Transferencia | MetroGuia",
    "meta_description": "Estación Potrero. Transferencia Línea 5. Zona comercial. Barrios residenciales históricos CDMX.",
    "h1": "Metro Potrero: guía turística de la estación",
    "intro": "Potrero es una estación de transbordo fundamental en la Línea 3, que conecta con la Línea 5, ofreciendo acceso a diversas zonas turísticas de la ciudad. La estación sirve como puente entre el norte residencial y el centro histórico de México. Desde aquí, turistas pueden explorar barrios culturales y comerciales con facilidad, aprovechando la infraestructura de transporte para maximizar sus recorridos.",
    "historia_icono": "El ícono de Potrero representa el concepto de tierra apta para pastura, evocando la historia prehispánica cuando esta zona era terreno agrícola del Valle de México.",
    "tips": [
      "Centro de transferencia: conecta fácilmente con Línea 5 para explorar más zonas",
      "Zona comercial cercana con tiendas y restaurantes para descansar entre traslados",
      "La estación es punto medio ideal para romper un viaje largo por la Línea 3",
      "Acceso a barrios residenciales con arquitectura histórica mexicana",
      "Horario de transbordo: rápido y eficiente durante todo el día"
    ],
    "mejor_horario": "Mediodía (12pm-2pm) cuando la afluencia de trasbordo es moderada. Ideal para explorar comercios cercanos.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial FIFA 2026. Valor principal como estación de conexión para optimizar desplazamientos."
  },
  {
    "slug": "la-raza",
    "nombre": "La Raza",
    "linea": "3",
    "alcaldia": "Gustavo A. Madero",
    "tipo_zona": "cultural-residencial",
    "pois": [
      {
        "nombre": "Museo de la Medicina Mexicana",
        "tipo": "museo",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Hospital General IMSS",
        "tipo": "hospital",
        "distancia": "3 min caminando"
      },
      {
        "nombre": "Túnel de la Ciencia (subterráneo)",
        "tipo": "museo",
        "distancia": "en la misma estación"
      }
    ],
    "transferencias": [
      "5"
    ],
    "seo_title": "Metro La Raza CDMX — Monumento Nacional | MetroGuia",
    "meta_description": "La Raza CDMX. Monumento Nacional. Identidad cultural mexicana. Sitio icónico obligatorio para turistas.",
    "h1": "Metro La Raza: el Túnel de la Ciencia bajo tus pies",
    "intro": "La Raza es una estación histórica y culturalmente significativa en la Línea 3, ubicada en la Alcaldía Gustavo A. Madero. La estación conecta con el Monumento a la Raza, un icono nacional que celebra la identidad mexicana y la confluencia de culturas. Para turistas internacionales del Mundial 2026, representa un sitio obligatorio para entender la identidad cultural e histórica de México, con impactante arquitectura pública y espacios para contemplación.",
    "historia_icono": "El ícono muestra el rostro de La Raza Cósmica, obra maestra del muralismo mexicano. Representa la identidad nacional y la fusión de culturas que define a México, diseñado para inspirar orgullo y unidad.",
    "tips": [
      "Visita el Monumento a la Raza: escultura monumental y símbolo nacional imprescindible",
      "Acceso directo a la Glorieta de La Raza, espacio público para fotos panorámicas",
      "Museos cercanos cuentan historias del México antiguo y moderno",
      "Restaurantes de comida mexicana auténtica en la zona a precios accesibles",
      "Tranquilidad relativa en horario matutino para contemplación sin aglomeraciones"
    ],
    "mejor_horario": "Mañana (8am-11am) para fotografia clara del monumento. Evita tarde (6pm-8pm) cuando el monumento se oscurece.",
    "mundial_relevancia": "Sitio cultural emblemático. Recomendado para turistas que quieran comprender la identidad mexicana durante su visita por el Mundial 2026."
  },
  {
    "slug": "tlatelolco",
    "nombre": "Tlatelolco",
    "linea": "3",
    "alcaldia": "Cuauhtémoc",
    "tipo_zona": "historico",
    "pois": [
      {
        "nombre": "Plaza de las Tres Culturas",
        "tipo": "monumento",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Templo de Santiago Tlatelolco (s. XVI)",
        "tipo": "iglesia",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Zona Arqueológica Tlatelolco",
        "tipo": "museo",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Memorial del 68",
        "tipo": "museo",
        "distancia": "7 min caminando"
      },
      {
        "nombre": "Torre de Tlatelolco (SRE)",
        "tipo": "monumento",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Tlatelolco CDMX — Arqueología Azteca | MetroGuia",
    "meta_description": "Tlatelolco. Plaza Tres Culturas. Ruinas prehispánicas. Acceso Templo Mayor. Patrimonio UNESCO CDMX.",
    "h1": "Metro Tlatelolco: historia prehispánica, colonial y moderna",
    "intro": "Tlatelolco es una estación de profunda importancia histórica, dando acceso a la Plaza de las Tres Culturas, un sitio arqueológico y cultural que resume mil años de historia mexicana. Esta zona alberga restos de la antigua ciudad azteca de Tlatelolco, un templo colonial español y arquitectura moderna, representando las tres culturas que forjaron México. Para turistas del Mundial 2026, es un destino imprescindible para entender las raíces prehispánicas de la nación.",
    "historia_icono": "El ícono de Tlatelolco representa la pirámide del Templo Mayor y la dualidad cultural. Evoca la grandeza de la ciudad gemela de Tenochtitlan, centro de comercio y poder en el Imperio Azteca.",
    "tips": [
      "Entra a la Plaza de las Tres Culturas: arqueología azteca, arquitectura colonial y moderna en un solo lugar",
      "Templo Mayor accesible desde aquí, uno de los museos arqueológicos más importantes de México",
      "Camina entre ruinas prehispánicas y edificios coloniales para experiencia inmersiva en la historia",
      "Guías turísticos especializados ofrecen explicaciones detalladas en español e inglés",
      "Mejor sin aglomeraciones: visita entre semana (martes-jueves)"
    ],
    "mejor_horario": "Mañana (9am-12pm) con luz natural para fotos y exploración. Templo Mayor abre 9am-5pm.",
    "mundial_relevancia": "Sitio arqueológico fundamental. Esencial para turistas internacionales que deseen comprender el legado prehispánico durante el Mundial 2026.",
    "descripcion_turistica": "Estación junto a Plaza de las Tres Culturas, sitio arqueológico e histórico de importancia mundial. Ruinas aztecas, iglesia colonial y modernidad conviven. Destino imprescindible para turistas interesados en sincretismo cultural durante World Cup 2026.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Rampas de acceso a plaza. Señalización táctil. Sitio arqueológico con terreno variable."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierre 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "Plaza de las Tres Culturas",
        "tipo": "Sitio arqueológico histórico",
        "distancia": "0m",
        "descripcion": "Complejo arqueológico único en el mundo: ruinas aztecas, iglesia colonial y modernidad del siglo XX. Abierto al público. Entrada gratuita."
      },
      {
        "nombre": "Templo Mayor de Tlatelolco",
        "tipo": "Ruinas aztecas",
        "distancia": "100m",
        "descripcion": "Restos de templo mayor prehispánico con buena conservación. Museos pequeños con artefactos locales."
      },
      {
        "nombre": "Iglesia de Santiago Apóstol",
        "tipo": "Iglesia colonial",
        "distancia": "200m",
        "descripcion": "Iglesia del siglo XVI construida sobre templo azteca. Arquitectura de sincretismo cultural. Abierta para visitas."
      },
      {
        "nombre": "Relaciones Exteriores (Tlatelolco)",
        "tipo": "Edificio histórico",
        "distancia": "300m",
        "descripcion": "Torre histórica visible desde la plaza. Sitio de eventos culturales importantes en historia mexicana."
      }
    ]
  },
  {
    "slug": "guerrero",
    "nombre": "Guerrero",
    "linea": "3",
    "alcaldia": "Cuauhtémoc",
    "tipo_zona": "comercial-popular",
    "pois": [
      {
        "nombre": "Mercado de Artesanías Guerrero",
        "tipo": "mercado",
        "distancia": "3 min caminando"
      },
      {
        "nombre": "Alameda de Santa María la Ribera",
        "tipo": "parque",
        "distancia": "8 min caminando"
      }
    ],
    "transferencias": [
      "B"
    ],
    "seo_title": "Metro Guerrero — Centro artístico y cultural",
    "meta_description": "Guerrero: galerías de arte contemporáneo, librerías independientes y restaurantes tradicionales. Centro artístico y bohemio vibrante en el Centro Histórico",
    "h1": "Metro Guerrero: mercados, arte y barrio popular",
    "intro": "Guerrero es estación histórica de la Línea B en pleno Centro Histórico, conectando con barrio de tradición cultural donde galerías de arte, tiendas de antigüedades y calles peatonales confluyen. Para turistas del Mundial FIFA 2026, Guerrero ofrece acceso a zona artística vibrante con galeríascontempor neas, librerías independientes y restaurantes de cocina mexicana tradicional. La estación es puerta a arte y historia capitalina auténtica.",
    "historia_icono": "El ícono gris de la Línea B representa la energía artística de Guerrero, zona donde muralistas, artistas plásticos y bohemios transformaron el barrio en epicentro cultural. Este símbolo evoca la creatividad sin límites que define a esta zona histórica.",
    "tips": [
      "Galerías de arte en calles laterales: muchas gratuitas con obras de artistas mexicanos contemporáneos",
      "Librerías independientes como Madero Libros: busca ediciones mexicanas, poesía y literatura independiente",
      "Calle peatonal Madero: compra en tiendas de ropa, accesorios y artesanías directo de diseñadores locales",
      "Come en restaurantes tradicionales: mole negro, chiles rellenos y pozole preparados por cocineras de barrio",
      "Domingo de mercado: Avenida Madero con vendedores de arte, libros usados y artesanías locales"
    ],
    "mejor_horario": "Visita entre 11 AM-7 PM de martes a sábados cuando galerías y tiendas están activas. Domingos hay más vida callejera pero algunos lugares cierran.",
    "mundial_relevancia": "Relevancia media: turistas interesados en arte contemporáneo, literatura y vida bohemia encontrarán experiencia cultural auténtica cercana al Centro Histórico.",
    "descripcion_turistica": "Guerrero comunica la Línea B con la zona centro de Cuauhtémoc. Ubicada en el corazón del barrio histórico de Guerrero, con vivienda antigua y patrimonio arquitectónico significativo.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Estación antigua sin elevadores. Solo escaleras."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Barrio de Guerrero",
        "tipo": "Patrimonio",
        "distancia": "0m",
        "descripcion": "Zona histórica con casonas coloniales y arquitectura antigua"
      },
      {
        "nombre": "Iglesia de Santiago Tlatelolco",
        "tipo": "Patrimonio",
        "distancia": "600m",
        "descripcion": "Templo colonial de importancia histórica"
      },
      {
        "nombre": "Tianguis Guerrero",
        "tipo": "Comercio",
        "distancia": "300m",
        "descripcion": "Mercado informal diario"
      }
    ]
  },
  {
    "slug": "hidalgo",
    "nombre": "Hidalgo",
    "linea": "3",
    "alcaldia": "Cuauhtémoc",
    "tipo_zona": "cultural-historico",
    "pois": [
      {
        "nombre": "Alameda Central",
        "tipo": "parque",
        "distancia": "3 min caminando"
      },
      {
        "nombre": "Palacio de Bellas Artes",
        "tipo": "teatro",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Museo Franz Mayer",
        "tipo": "museo",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Torre Latinoamericana",
        "tipo": "monumento",
        "distancia": "8 min caminando"
      }
    ],
    "transferencias": [
      "2"
    ],
    "seo_title": "Metro Hidalgo CDMX — Catedral y Zócalo | MetroGuia",
    "meta_description": "Hidalgo CDMX. Catedral Metropolitana. Palacio Nacional. Zócalo. Centro Histórico y Patrimonio.",
    "h1": "Metro Hidalgo: puerta a la Alameda y Bellas Artes",
    "intro": "Hidalgo es una estación estratégica en el corazón del Centro Histórico de la Ciudad de México, ofreciendo acceso directo a la Catedral Metropolitana, el Palacio Nacional y la Zócalo, la plaza más grande de Latinoamérica. Esta estación es obligatoria para turistas internacionales del Mundial 2026 que deseen conectar con los símbolos más icónicos de México. Desde aquí confluyen historia prehispánica, colonial y moderna en un solo espacio.",
    "historia_icono": "El ícono de Hidalgo representa a Miguel Hidalgo y Costilla, padre de la Independencia mexicana. Simboliza la lucha por la libertad en el corazón del México Colonial.",
    "tips": [
      "Acceso directo a la Catedral Metropolitana, construcción de 5 siglos emblemática",
      "Palacio Nacional con murales de Diego Rivera: historia de México en imágenes",
      "Zócalo a pasos: observa banderas, mercados y vida cultural en la plaza más grande de Latinoamérica",
      "Museos adyacentes: Museo del Templo Mayor, Museo Nacional de Arte a corta distancia",
      "Come en fondas tradicionales cercanas con precios asequibles y sabor auténtico"
    ],
    "mejor_horario": "Mañana (8am-10am) para evitar multitudes en sitios arqueológicos. Tarde (4pm-6pm) para fotos del atardecer en Zócalo.",
    "mundial_relevancia": "Centro neurálgico de la capital. Fundamental para turistas del Mundial que busquen el símbolo más icónico de México: la Zócalo.",
    "descripcion_turistica": "Estación en la zona de la Alameda Central, principal parque histórico de la ciudad con acceso a Palacio de Bellas Artes. Conexión directa con Línea 3. Ubicación perfecta para turistas que visitan el corazón cultural de Mexico City durante el World Cup 2026.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Estación con elevador funcional. Accesibilidad completa en pasillos y plataforma. Una de las mejor equipadas del sistema."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierre 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "Alameda Central",
        "tipo": "Parque histórico",
        "distancia": "200m",
        "descripcion": "Parque más antiguo de América Latina, ideal para paseos tranquilos. Rodeado de cafeterías y tiendas artesanales."
      },
      {
        "nombre": "Palacio de Bellas Artes",
        "tipo": "Museo y teatro",
        "distancia": "400m",
        "descripcion": "Icónico palacio con cúpula de vidrio empleado. Presenta ballet folklórico y exposiciones de arte. Entrada: ~$60 MXN."
      },
      {
        "nombre": "Museo Mural Diego Rivera",
        "tipo": "Museo",
        "distancia": "300m",
        "descripcion": "Pequeño museo dedicado a murales de Diego Rivera. Acceso rápido desde Hidalgo, entrada económica."
      },
      {
        "nombre": "Barrio de Artesanías",
        "tipo": "Zona comercial",
        "distancia": "250m",
        "descripcion": "Tiendas de artesanías mexicanas tradicionales, souvenirs auténticos, buen lugar para comprar regalos."
      },
      {
        "nombre": "Cafeterías Alameda",
        "tipo": "Gastronomía",
        "distancia": "100m",
        "descripcion": "Múltiples cafeterías tradicionales mexicanas alrededor del parque, famosas por tamales y pan dulce."
      }
    ]
  },
  {
    "slug": "juarez",
    "nombre": "Juárez",
    "linea": "3",
    "alcaldia": "Cuauhtémoc",
    "tipo_zona": "cultural-turistico",
    "pois": [
      {
        "nombre": "Alameda Central",
        "tipo": "parque",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "Museo Memoria y Tolerancia",
        "tipo": "museo",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Mercado San Juan",
        "tipo": "mercado",
        "distancia": "10 min caminando"
      },
      {
        "nombre": "Zona Rosa (colonia)",
        "tipo": "comercial",
        "distancia": "10 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Juárez CDMX — Vida Nocturna y Tiendas | MetroGuia",
    "meta_description": "Juárez CDMX. Avenida Benito Juárez. Paseo Reforma. Tiendas, restaurantes. Centro cosmopolita.",
    "h1": "Metro Juárez: entre la Alameda y la Zona Rosa",
    "intro": "Juárez es una estación ubicada en la avenida más famosa del Centro Histórico, ofreciendo acceso a la Avenida Benito Juárez y a la plaza del mismo nombre. La zona conecta el Centro Histórico con barrios de Cuauhtémoc, siendo punto de convergencia de turismo, comercio y vida nocturna vibrante. Para turistas del Mundial 2026, representa una entrada a la vida cosmopolita de la Ciudad de México con opciones de tiendas, restaurantes y entretenimiento.",
    "historia_icono": "El ícono de Juárez representa al expresidente Benito Juárez, figura legendaria que reformó México en el siglo XIX. Simboliza justicia, legalidad y reforma institucional.",
    "tips": [
      "Avenida Juárez conecta con Paseo de la Reforma, eje más importante de la ciudad",
      "Zona comercial con tiendas internacionales y locales a lo largo de la avenida",
      "Restaurantes y bares para cenar y disfrutar de vida nocturna auténtica de CDMX",
      "Acceso a Parque Morazán y jardines históricos para relajarse",
      "Transferencias múltiples para explorar diferentes barrios sin cambiar estación"
    ],
    "mejor_horario": "Tarde (3pm-7pm) para explorar tiendas. Noche (8pm-11pm) para vida nocturna y restaurantes.",
    "mundial_relevancia": "Centro cosmopolita. Ideal para turistas que busquen compaginar historia con vida moderna durante el Mundial 2026.",
    "descripcion_turistica": "Estación en el corazón de Paseo de la Reforma, zona de tiendas y vida cultural. Acceso directo a la Glorieta de Cuauhtémoc y zona hotelera. Durante el World Cup 2026, será zona de alta circulación con acceso a restaurantes y entretenimiento.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Rampas de acceso, señalización táctil completa. Escaleras mecánicas en horarios pico."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierra 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "Paseo de la Reforma",
        "tipo": "Avenida comercial",
        "distancia": "0m",
        "descripcion": "Eje comercial y cultural más importante de México City con tiendas de lujo, hoteles y museos. Ideal para shopping."
      },
      {
        "nombre": "Glorieta de Cuauhtémoc",
        "tipo": "Monumento",
        "distancia": "200m",
        "descripcion": "Icónica rotonda con estatua del líder indígena. Punto de referencia turístico y nodo de transporte importante."
      },
      {
        "nombre": "Museo de Arte Moderno",
        "tipo": "Museo",
        "distancia": "1.5km",
        "descripcion": "Galería de arte contemporáneo mexicano e internacional. Entrada gratuita domingos. Ubicado en Chapultepec."
      },
      {
        "nombre": "Zona de restaurantes Paseo de la Reforma",
        "tipo": "Gastronomía",
        "distancia": "300m",
        "descripcion": "Amplia oferta de restaurantes internacionales, cafeterías y bares. Ideal para comer antes o después de eventos World Cup."
      }
    ]
  },
  {
    "slug": "balderas",
    "nombre": "Balderas",
    "linea": "3",
    "alcaldia": "Cuauhtémoc",
    "tipo_zona": "comercial",
    "pois": [
      {
        "nombre": "Mercado de Artesanías Ciudadela",
        "tipo": "mercado",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "La Ciudadela (centro cultural)",
        "tipo": "museo",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [
      "1"
    ],
    "seo_title": "Metro Balderas CDMX — Plaza Garibaldi y Alameda | MetroGuia",
    "meta_description": "Balderas. Transbordo Línea 1-3. Plaza Garibaldi. Alameda Central. Música en vivo tradicional.",
    "h1": "Metro Balderas: el mercado de artesanías de La Ciudadela",
    "intro": "Balderas es una estación estratégica de transbordo entre las Líneas 1 y 3, ubicada en el corazón del Centro Histórico de la Ciudad de México. La estación ofrece acceso a la Alameda Central, Plaza Garibaldi y al barrio histórico de Centro. Para turistas del Mundial 2026, es un punto neurálgico para conectar con sitios culturales, musicales y arqueológicos de la capital mexicana.",
    "historia_icono": "El ícono de Balderas representa a los Niños Héroes de Chapultepec, jóvenes soldados que dieron sus vidas defendiendo México. Símbolo del heroísmo y sacrificio nacional.",
    "tips": [
      "Centro de transbordo perfecto: conecta Línea 1 y 3 para explorar múltiples zonas",
      "Plaza Garibaldi a pasos: música en vivo, cantantes callejeros y romerías tradicionales",
      "Alameda Central: parque histórico con museos, esculpturas y espacio para descansar",
      "Gastronomía diversa: desde taquerías hasta restaurantes de chef en la zona",
      "Actividad intensa: ideal para turistas que quieran vivir el bullicio de la capital"
    ],
    "mejor_horario": "Noche (8pm-11pm) para experimentar Plaza Garibaldi con música en vivo. Día para museos.",
    "mundial_relevancia": "Centro cultural fundamental. Conecta turistas con experiencias auténticas de la CDMX durante el Mundial.",
    "descripcion_turistica": "Estación con conexión directa a Línea 3, ubicada en zona comercial del Centro Histórico. Avenida Reforma cercana con acceso a tiendas y vida cultural. Punto de transferencia crucial para turistas que combinan actividades centro-norte durante World Cup 2026.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Rampas de acceso. Señalización táctil. Escaleras mecánicas en pasillos principales."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierre 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "Paseo de la Reforma",
        "tipo": "Avenida comercial",
        "distancia": "200m",
        "descripcion": "Eje principal con tiendas de lujo, hoteles y vida cultural. Acceso a monumentos y entretenimiento."
      },
      {
        "nombre": "Barrio Juárez-Santa María la Ribera",
        "tipo": "Zona residencial",
        "distancia": "300m",
        "descripcion": "Barrio bohemio con vida nocturna, bares, galerías y tiendas boutique. Ambiente artístico y joven."
      },
      {
        "nombre": "Estela de Luz",
        "tipo": "Monumento moderno",
        "distancia": "500m",
        "descripcion": "Monumento a la independencia mexicana con vista panorámica. Ubicado en Reforma, accesible a pie."
      },
      {
        "nombre": "Zona de bares y restaurantes",
        "tipo": "Gastronomía",
        "distancia": "150m",
        "descripcion": "Múltiples bares, cantinas tradicionales y restaurantes modernos. Vida nocturna activa en la zona."
      }
    ]
  },
  {
    "slug": "ninos-heroes",
    "nombre": "Niños Héroes",
    "linea": "3",
    "alcaldia": "Benito Juárez",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Biblioteca de México",
        "tipo": "museo",
        "distancia": "15 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Niños Héroes CDMX — Chapultepec | MetroGuia",
    "meta_description": "Niños Héroes. Acceso a Chapultepec. Castillo Emperador. Museos nacionales. Parque histórico CDMX.",
    "h1": "Metro Niños Héroes: guía de la estación",
    "intro": "Niños Héroes es una estación que commemora a los jóvenes soldados que dieron sus vidas en la defensa de México. Ubicada en el corazón del Centro Histórico, ofrece acceso directo a Chapultepec, uno de los sitios más históricos y hermosos de la Ciudad de México. Para turistas del Mundial 2026, representa una parada imprescindible para conectar con la historia militar mexicana y los espacios verdes más importantes de la capital.",
    "historia_icono": "El ícono representa a los Niños Héroes: cadetes militares que lucharon contra la invasión estadounidense en 1847. Símbolo de valentía patriótica y sacrificio juvenil.",
    "tips": [
      "Acceso a Chapultepec: parque de 3 secciones con bosque, castillo y museos imprescindibles",
      "Castillo de Chapultepec: residencia presidencial histórica con vistas panorámicas de la ciudad",
      "Museos dentro del parque: Nacional de Antropología, Arte Moderno, Historia Natural",
      "Zona verde perfecta para descansar después de explorar ruinas prehispánicas",
      "Restaurantes y cafés en Chapultepec para comer con vistas al parque"
    ],
    "mejor_horario": "Mañana (9am-12pm) para entrar a museos con menos afluencia. Tarde para pasear el parque sin calor intenso.",
    "mundial_relevancia": "Conexión a Chapultepec, sitio patrimonial fundamental. Esencial para turistas que deseen comprender la historia militar mexicana."
  },
  {
    "slug": "hospital-general",
    "nombre": "Hospital General",
    "linea": "3",
    "alcaldia": "Benito Juárez",
    "tipo_zona": "medico",
    "pois": [
      {
        "nombre": "Hospital General de México",
        "tipo": "hospital",
        "distancia": "2 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Hospital General CDMX — Servicios Médicos | MetroGuia",
    "meta_description": "Hospital General CDMX. Centro médico 24/7. Servicios sanitarios. Emergencias. Zona administrativo-médica.",
    "h1": "Metro Hospital General: acceso al mayor hospital de México",
    "intro": "Hospital General es una estación ubicada en la Alcaldía Cuauhtémoc, ofreciendo acceso a la zona médica y administrativa de la Ciudad de México. La estación sirve principalmente como punto de acceso para pacientes y acompañantes, pero también como transbordo hacia otras zonas de la capital. Para turistas del Mundial 2026, representa un acceso útil a los servicios médicos de primer nivel disponibles en la ciudad.",
    "historia_icono": "El ícono de Hospital General representa el caduceo médico, símbolo de la medicina y la salud. Evoca la importancia de los servicios sanitarios en la capital.",
    "tips": [
      "Acceso a Hospital General: uno de los mayores complejos médicos de Latinoamérica",
      "Disponibilidad de servicios médicos 24/7 en caso de emergencias durante tu visita",
      "Zona con restaurantes cercanos para acompañantes durante consultas",
      "Tranquilidad relativa: menor afluencia turística que otras estaciones del centro",
      "Transferencias a Línea 1 para explorar diferentes barrios"
    ],
    "mejor_horario": "Horario variable según necesidades médicas. Si visitas por turismo: mediodía (12pm-3pm).",
    "mundial_relevancia": "Centro médico. Relevante para turistas que requieran atención sanitaria durante el Mundial 2026."
  },
  {
    "slug": "centro-medico",
    "nombre": "Centro Médico",
    "linea": "3",
    "alcaldia": "Benito Juárez",
    "tipo_zona": "medico-residencial",
    "pois": [
      {
        "nombre": "IMSS Centro Médico Nacional Siglo XXI",
        "tipo": "hospital",
        "distancia": "3 min caminando"
      },
      {
        "nombre": "Museo de la Medicina Mexicana UNAM",
        "tipo": "museo",
        "distancia": "10 min caminando"
      }
    ],
    "transferencias": [
      "9"
    ],
    "seo_title": "Metro Centro Médico CDMX — Salud | MetroGuia",
    "meta_description": "Centro Médico CDMX: transferencia estratégica a Línea 3, servicios de salud. Centro Médico Nacional para emergencias turistas. Conectividad.",
    "h1": "Metro Centro Médico: nodo de salud y transferencia L3/L9",
    "intro": "Centro Médico es una estación clave de transferencia (Línea 9 a Línea 3) ubicada en la alcaldía Benito Juárez, cercana al importante Centro Médico Nacional. Esta estación es vital tanto para turistas que requieran servicios de salud de emergencia como para quienes simplemente deseen explorar un nodo de conectividad importante. La zona combina servicios especializados, comercio orientado a salud y bienestar, y múltiples opciones de movilidad.",
    "historia_icono": "Centro Médico Nacional fue fundado en 1943 como institución de salud de referencia en México. El ícono del metro representa la cruz médica y simboliza la salud como derecho accesible. Es emblemático del desarrollo institucional mexicano del siglo XX.",
    "tips": [
      "Si necesitas atención médica, Centro Médico Nacional es accesible en 2 minutos caminando desde la estación",
      "Transfiere a Línea 3 para explorar zonas Sur (Copilco, Ciudad Universitaria) o Norte (Indios Verdes)",
      "Zona con farmacias de calidad y laboratorios clínicos si necesitas servicios de salud menores",
      "Restaurantes y cafeterías especializadas en comida saludable en los alrededores",
      "Estación conectada 24 horas: importante recurso en emergencias médicas durante cualquier hora"
    ],
    "mejor_horario": "Disponible todo el día. Horarios normales durante día; más tranquilo después de 20:00 si buscas usar la estación sin prisa.",
    "mundial_relevancia": "Servicios de salud críticos: acceso a Centro Médico Nacional para emergencias médicas de turistas FIFA 2026. Hub de transferencia estratégico.",
    "descripcion_turistica": "Estación con acceso a complejos médicos importantes y vida urbana céntrica. Ubicación estratégica entre Centro Histórico y zona sur. Punto de referencia para turistas que buscan servicios de salud o descanso durante exploración en World Cup 2026.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Excelente accesibilidad con elevador operativo. Estación médica con acceso completo para personas con movilidad reducida."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierre 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "Instituto Nacional de Cardiología",
        "tipo": "Hospital",
        "distancia": "100m",
        "descripcion": "Centro médico de clase mundial. Referencia nacional para cardiología. Servicios para turistas."
      },
      {
        "nombre": "Centro Médico General",
        "tipo": "Complejo hospitalario",
        "distancia": "200m",
        "descripcion": "Complejo de servicios médicos integrales. Infraestructura moderna."
      },
      {
        "nombre": "Parque España",
        "tipo": "Parque",
        "distancia": "400m",
        "descripcion": "Pequeño parque público para descanso, tranquilo, con vegetación."
      },
      {
        "nombre": "Zona Nápoles",
        "tipo": "Barrio comercial",
        "distancia": "500m",
        "descripcion": "Barrio residencial con tiendas, restaurantes y vida urbana activa."
      }
    ]
  },
  {
    "slug": "etiopia",
    "nombre": "Etiopía/Plaza de la Transparencia",
    "linea": "3",
    "alcaldia": "Benito Juárez",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Plaza de la Transparencia",
        "tipo": "parque",
        "distancia": "2 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Etiopía CDMX — Vida Auténtica Metropolitana | MetroGuia",
    "meta_description": "Etiopía. Plaza Transparencia. Mercados locales. Barrios residenciales auténticos. Vida metropolitana genuine.",
    "h1": "Metro Etiopía: estación en colonia Narvarte",
    "intro": "Etiopía, conocida también como Plaza de la Transparencia, es una estación ubicada en la Alcaldía Cuauhtémoc, ofreciendo acceso a una zona administrativa pero con importante historia cultural. La estación representa un punto de conexión hacia barrios diversificados de la ciudad. Para turistas del Mundial 2026, ofrece acceso a perspectivas menos turísticas pero auténticas de la vida cotidiana en la Ciudad de México.",
    "historia_icono": "El ícono de Etiopía representa la diversidad mundial y la solidaridad internacional. Evoca conexiones culturales entre naciones y pueblos del mundo.",
    "tips": [
      "Zona de transición entre Centro Histórico y barrios residenciales para exploración auténtica",
      "Plaza de la Transparencia: espacio público moderno con arquitectura contemporánea",
      "Mercados locales cercanos con productos frescos y artesanías a precios reales",
      "Restaurantes de cocina variada con precios accesibles para todos los presupuestos",
      "Menor afluencia turística: experiencia más auténtica de la vida metropolitana"
    ],
    "mejor_horario": "Mediodía (11am-2pm) para visitar mercados y comer. Evita noche después de 8pm.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial FIFA 2026. Valor en mostrar CDMX más allá de zonas turísticas tradicionales."
  },
  {
    "slug": "eugenia",
    "nombre": "Eugenia",
    "linea": "3",
    "alcaldia": "Benito Juárez",
    "tipo_zona": "residencial-comercial",
    "pois": [
      {
        "nombre": "Mercado de Medellín",
        "tipo": "mercado",
        "distancia": "10 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Eugenia CDMX — Vida Urbana Auténtica | MetroGuia",
    "meta_description": "Eugenia CDMX. Zona comercial. Barrios residenciales. Tiendas y restaurantes. Vida urbana auténtica.",
    "h1": "Metro Eugenia: acceso a Roma y Narvarte",
    "intro": "Eugenia es una estación ubicada en la Alcaldía Benito Juárez, marcando la transición del Centro Histórico hacia barrios residenciales y comerciales más diversos. La zona ofrece una mezcla de vida urbana y comercial, con acceso a tiendas, restaurantes y servicios. Para turistas del Mundial 2026, representa una parada para experimentar la vida cotidiana mexicana fuera de las principales atracciones turísticas.",
    "historia_icono": "El ícono de Eugenia representa la vida moderna y el progreso urbano. Simboliza el desarrollo de la ciudad más allá del centro histórico.",
    "tips": [
      "Zona comercial diversa con tiendas locales e internacionales para compras",
      "Restaurantes variados: desde comida rápida mexicana hasta cocina internacional",
      "Acceso a barrios residenciales para experimentar la vida auténtica de la ciudad",
      "Menor aglomeración que zonas turísticas: mayor comodidad para transbordo",
      "Conecta fácilmente con otras líneas para explorar diferentes áreas"
    ],
    "mejor_horario": "Tarde (2pm-6pm) para compras y exploración. Horario flexible para pasos entre destinos.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial FIFA 2026. Utilidad como punto de conexión residencial."
  },
  {
    "slug": "division-del-norte",
    "nombre": "División del Norte",
    "linea": "3",
    "alcaldia": "Benito Juárez",
    "tipo_zona": "comercial-residencial",
    "pois": [
      {
        "nombre": "Parque Hundido",
        "tipo": "parque",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro División del Norte CDMX — Arte y Vida Local | MetroGuia",
    "meta_description": "División del Norte. Galerías arte. Vida bohemia. Restaurantes locales. Noche y cultura CDMX.",
    "h1": "Metro División del Norte: entre Del Valle y el Parque Hundido",
    "intro": "División del Norte es una estación ubicada en la Alcaldía Benito Juárez, ofreciendo acceso a una zona comercial importante y barrios históricos con carácter bohemio. La zona destaca por su mezcla de comercio tradicional y moderno, galerías de arte y cafeterías alternativas. Para turistas del Mundial 2026, representa una parada interesante para descubrir la vida cultural y artística fuera del centro histórico.",
    "historia_icono": "El ícono de División del Norte representa el camino histórico que marca la división geográfica de la ciudad. Simboliza la expansión urbana de México hacia el sur.",
    "tips": [
      "Zona artística y bohemia con galerías, cafeterías y tiendas alternativas",
      "Avenida División del Norte es importante vía de conexión con barrios del sur",
      "Antros y vida nocturna alternativa: bares y restaurantes con ambiente local",
      "Acceso a barrios residenciales de clase media con vibrante vida comercial",
      "Mercado de alimentos frescos y tiendas locales con precios competitivos"
    ],
    "mejor_horario": "Tarde-noche (5pm-10pm) para disfrutar de vida cultural y gastronómica local.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial FIFA 2026. Interés en cultura alternativa y vida nocturna."
  },
  {
    "slug": "zapata",
    "nombre": "Zapata",
    "linea": "3",
    "alcaldia": "Coyoacán",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Cineteca Nacional",
        "tipo": "teatro",
        "distancia": "10 min caminando"
      }
    ],
    "transferencias": [
      "12"
    ],
    "seo_title": "Metro Zapata — Barrio residencial sur",
    "meta_description": "Zapata: mercados locales auténticos, gastronomía casera y vida cotidiana de barrio. Barrio genuino del sur capitalino.                      ",
    "h1": "Metro Zapata: puerta a Coyoacán y transfer L12",
    "intro": "Zapata es estación de la Línea 12 en zona residencial y comercial del sur capitalino, conectando comunidades con red metropolitana. Para turistas del Mundial FIFA 2026 que deseen conocer vida auténtica de barrios del sur, Zapata ofrece mercados locales, tiendas de comercio informal, gastronomía casera y atmósfera cotidiana de capitalinos residentes. Es parada para exploradores de barrios genuinos.",
    "historia_icono": "El ícono dorado de la Línea 12 representa conexión de Zapata con comunidades residenciales del sur, zona donde vida cotidiana y comercio informal convergen. Este símbolo evoca movilidad equitativa del sur capitalino.",
    "tips": [
      "Mercado local: frutas, verduras y productos frescos a precios de barrio local",
      "Comedores informales: desayunos, comidas y cenas caseras a precios accesibles",
      "Tiendas de ropa y accesorios: comercio informal con precios bajos",
      "Servicios locales: farmacias, panaderías y tiendas de necesidades básicas",
      "Lleva efectivo: comercio principalmente en efectivo"
    ],
    "mejor_horario": "Visita de 9 AM-5 PM entre semana para actividad comercial óptima.",
    "mundial_relevancia": "Relevancia baja: zona residencial sin atractivos específicos; turistas específicos encontrarán vida de barrio auténtica.",
    "descripcion_turistica": "Zapata honra a Emiliano Zapata, revolucionario del sur. Estación de Línea 12 en zona de Coyoacán. Acceso a zonas residenciales y culturales importantes del sur.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Con elevadores. Acceso completo para personas con discapacidad."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Coyoacán Histórico",
        "tipo": "Patrimonio",
        "distancia": "800m",
        "descripcion": "Centro cultural y patrimonial del sur"
      },
      {
        "nombre": "Museo Casa de Trotsky",
        "tipo": "Cultura",
        "distancia": "1km",
        "descripcion": "Casa-museo histórica"
      },
      {
        "nombre": "Mercado Coyoacán",
        "tipo": "Comercio",
        "distancia": "600m",
        "descripcion": "Tianguis tradicional"
      }
    ]
  },
  {
    "slug": "coyoacan",
    "nombre": "Coyoacán",
    "linea": "3",
    "alcaldia": "Coyoacán",
    "tipo_zona": "cultural-turistico",
    "pois": [
      {
        "nombre": "Jardín Centenario y Plaza Hidalgo",
        "tipo": "parque",
        "distancia": "10 min caminando"
      },
      {
        "nombre": "Mercado de Artesanías Coyoacán",
        "tipo": "mercado",
        "distancia": "10 min caminando"
      },
      {
        "nombre": "Museo Frida Kahlo (Casa Azul)",
        "tipo": "museo",
        "distancia": "15 min caminando"
      },
      {
        "nombre": "Museo de León Trotski",
        "tipo": "museo",
        "distancia": "15 min caminando"
      },
      {
        "nombre": "Fonoteca Nacional",
        "tipo": "museo",
        "distancia": "12 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Coyoacán CDMX — Corazón Bohemio",
    "meta_description": "Estación Coyoacán: Centro cultural bohemio con Casa Azul, cafés artísticos, galerías y arte. Experiencia imprescindible en CDMX.",
    "h1": "Metro Coyoacán: el barrio más bohemio de México",
    "intro": "Coyoacán es mucho más que una estación de metro: es el corazón cultural y bohemio de la CDMX. Con raíces prehispánicas profundas, fue uno de los principales centros administrativos del imperio azteca. Hoy es un destino imprescindible para turistas: plazas coloniales hermosas, cafés artísticos, galerías, museos de talla mundial (Casa Azul, Casa de Trotsky), y una atmósfera vibrante de artistas, intelectuales y viajeros. Es mágico, bohemio y absolutamente fascinante.",
    "historia_icono": "El ícono de Coyoacán representa un coyote, basado en la etimología náhuatl 'Coyoacán' que significa 'lugar de coyotes'. El símbolo muestra la cabeza o silueta de un coyote, conectando con la identidad prehispánica del lugar.",
    "tips": [
      "Visita la Casa Azul, hogar de Frida Kahlo, es una experiencia que no se olvida",
      "Explora la Casa de Trotsky para ver la historia rusa mexicana",
      "Siéntate en los cafés de la plaza para gozar del ambiente bohemio",
      "Come en restaurantes que van desde food trucks hasta alta cocina",
      "Los jueves a domingos hay más vida cultural con galerías abiertas"
    ],
    "mejor_horario": "Jueves a domingos de 10:00 a 21:00 es cuando Coyoacán está más vivo. Las tardes de viernes y sábados son mágicas.",
    "mundial_relevancia": "Coyoacán es una atracción cultural de primer nivel que atraerá a miles de turistas del Mundial FIFA 2026 por su riqueza artística y bohemia.",
    "descripcion_turistica": "Estación en barrio bohemio artístico, uno de los lugares más encantadores de Mexico City. Galerías de arte, cafeterías artesanales, plazas peatonales y vida cultural vibrante. Destino imprescindible para turistas con intereses culturales y artísticos durante World Cup 2026.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Rampas de acceso. Señalización táctil. Barrio bohemio con calles variadas."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierre 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "Barrio de Coyoacán",
        "tipo": "Barrio bohemio histórico",
        "distancia": "0m",
        "descripcion": "Uno de barrios más bellos de Mexico City. Plazas peatonales, galerías de arte, cafeterías artesanales. Ambiente bohemio excepcional."
      },
      {
        "nombre": "Museo Frida Kahlo (Casa Azul)",
        "tipo": "Museo",
        "distancia": "600m",
        "descripcion": "Casa histórica de Frida Kahlo. Museo dedicado a su vida y obra. Entrada: ~$250 MXN. Abierto martes a domingo."
      },
      {
        "nombre": "Museo León Trotsky",
        "tipo": "Museo histórico",
        "distancia": "800m",
        "descripcion": "Casa donde murió León Trotsky. Museo de historia política. Entrada: ~$100 MXN."
      },
      {
        "nombre": "Plazas peatonales de Coyoacán",
        "tipo": "Espacios públicos",
        "distancia": "100m",
        "descripcion": "Plazas coloniales con iglesia, tiendas artesanales y mercado de arte. Ideal para pasear y comer."
      },
      {
        "nombre": "Galerías y cafeterías artesanales",
        "tipo": "Arte y gastronomía",
        "distancia": "150m",
        "descripcion": "Múltiples galerías de arte, cafeterías con ambiente bohemio, restaurantes de comida mexicana artesanal. Precios medios."
      }
    ]
  },
  {
    "slug": "viveros",
    "nombre": "Viveros/Derechos Humanos",
    "linea": "3",
    "alcaldia": "Coyoacán",
    "tipo_zona": "parque-residencial",
    "pois": [
      {
        "nombre": "Viveros de Coyoacán",
        "tipo": "parque",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "CNDH — Comisión Nacional de Derechos Humanos",
        "tipo": "monumento",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Viveros de Coyoacán CDMX — Naturaleza",
    "meta_description": "Estación Viveros de Coyoacán: Parque verde con senderos, naturaleza y espacios para descanso. Pulmón verde de CDMX.",
    "h1": "Metro Viveros: el pulmón verde de Coyoacán",
    "intro": "Viveros de Coyoacán es una estación que te conecta con uno de los pulmones verdes más bellos de la CDMX. El parque histórico de viveros es un lugar de verdor y tranquilidad en medio de la metrópolis. Los turistas encontrarán senderos arbolados, plantas hermosas, la oportunidad de descansar en la naturaleza y escapar del caos urbano. Es perfecto para familias, amantes de la naturaleza y quienes buscan paz en la ciudad.",
    "historia_icono": "El ícono representa árboles, plantas y naturaleza. El símbolo muestra posiblemente un árbol, flores o elementos naturales, representando los viveros y la función del parque como espacio verde.",
    "tips": [
      "Camina los senderos del parque rodeado de árboles y plantas",
      "Trae una manta para picnic en las áreas verdes",
      "Es excelente para fotografía de naturaleza y paisajes urbanos",
      "Las mañanas son ideales para correr o caminar",
      "Los domingos hay menos gente y es muy pacífico"
    ],
    "mejor_horario": "Mañanas de 07:00 a 12:00 para ver la naturaleza con luz hermosa. Los domingos todo el día es tranquilo.",
    "mundial_relevancia": "Viveros de Coyoacán será un destino importante para turistas del Mundial 2026 buscando espacios verdes y descanso en la naturaleza."
  },
  {
    "slug": "miguel-angel-de-quevedo",
    "nombre": "Miguel Ángel de Quevedo",
    "linea": "3",
    "alcaldia": "Coyoacán",
    "tipo_zona": "cultural-residencial",
    "pois": [
      {
        "nombre": "Librerías y antigüedades de la avenida",
        "tipo": "comercial",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "Cafeterías y restaurantes de autor",
        "tipo": "restaurante",
        "distancia": "3 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Quevedo CDMX — Coyoacán Auténtico | MetroGuia",
    "meta_description": "Quevedo CDMX. Coyoacán auténtico. Mercados locales. Vida residencial bohemia. Barrio tradicional.",
    "h1": "Metro Miguel Ángel de Quevedo: libros, cafés y diseño",
    "intro": "Miguel Ángel de Quevedo es una estación ubicada en la Alcaldía Coyoacán, ofreciendo acceso a la vía homónima, una de las avenidas más importantes de la zona. La estación sirve como punto de conexión para explorar barrios residenciales y comerciales de Coyoacán con menos aglomeración que las zonas peatonales centrales. Para turistas del Mundial 2026, representa una parada para experiencias más auténticas y menos masificadas.",
    "historia_icono": "El ícono representa a Miguel Ángel de Quevedo, intelectual y ambientalista mexicano pionero en reforestación. Simboliza el cuidado del medio ambiente y la educación.",
    "tips": [
      "Avenida Miguel Ángel de Quevedo: comercio local, restaurantes y tiendas tradicionales",
      "Acceso a barrios residenciales coyoacanenses con arquitectura colonial y bohemia",
      "Mercado local con productos frescos mexicanos y artesanías a precios reales",
      "Cafeterías y panaderías tradicionales para desayunos y meriendas auténticas",
      "Menor afluencia turística: experiencia más genuina que zonas peatonales principales"
    ],
    "mejor_horario": "Mañana (8am-11am) para mercados frescos. Tarde (3pm-6pm) para exploración relajada.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial FIFA 2026. Valor en experiencia auténtica de vida coyoacanense."
  },
  {
    "slug": "copilco",
    "nombre": "Copilco",
    "linea": "3",
    "alcaldia": "Coyoacán",
    "tipo_zona": "universitario",
    "pois": [
      {
        "nombre": "Campus UNAM (entrada lateral)",
        "tipo": "universidad",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Librería El Sótano",
        "tipo": "comercial",
        "distancia": "3 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Copilco CDMX — Acceso a UNAM",
    "meta_description": "Estación Copilco: Puerta a UNAM, cafés estudiantiles, vida académica. Centro cultural bohemio de Coyoacán.",
    "h1": "Metro Copilco: la antesala de la UNAM",
    "intro": "Copilco es una estación en Coyoacán cercana a la Universidad Nacional Autónoma de México (UNAM). La zona tiene carácter estudiantil y académico, con librerías, cafés de intelectuales y ambiente bohemio. Para turistas, es un acceso importante a la UNAM y su campus hermoso. La zona es vibrante, segura y perfecta para quienes buscan vida cultural y académica.",
    "historia_icono": "El ícono de Copilco está basado en su etimología náhuatl, posiblemente representando elementos relacionados con el lugar. El símbolo conecta con la tradición prehispánica.",
    "tips": [
      "Visita el campus de la UNAM, uno de los más hermosos de América Latina",
      "Come en cafés estudiantiles con precios accesibles",
      "Explora librerías y espacios intelectuales",
      "Es zona muy segura con mucha vida cultural",
      "Ideal para amantes del arte, literatura y academia"
    ],
    "mejor_horario": "Lunes a viernes de 10:00 a 20:00 es cuando hay más vida académica. Fines de semana más tranquilo.",
    "mundial_relevancia": "Copilco será punto de acceso para turistas que visiten UNAM, una institución icónica mexicana."
  },
  {
    "slug": "universidad",
    "nombre": "Universidad",
    "linea": "3",
    "alcaldia": "Coyoacán",
    "tipo_zona": "universitario",
    "pois": [
      {
        "nombre": "Campus Central UNAM",
        "tipo": "universidad",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Estadio Olímpico Universitario (Olímpico 68)",
        "tipo": "estadio",
        "distancia": "10 min caminando"
      },
      {
        "nombre": "Museo Universitario Arte Contemporáneo (MUAC)",
        "tipo": "museo",
        "distancia": "10 min caminando"
      },
      {
        "nombre": "Biblioteca Central UNAM (murales de O'Gorman)",
        "tipo": "museo",
        "distancia": "8 min caminando"
      },
      {
        "nombre": "Centro Cultural Universitario",
        "tipo": "teatro",
        "distancia": "15 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Universidad CDMX — UNAM Terminal | MetroGuia",
    "meta_description": "Universidad. UNAM Terminal Línea 3. Patrimonio UNESCO. Biblioteca Central. Arquitectura icónica 1950.",
    "h1": "Metro Universidad: el campus más bello de México",
    "intro": "Universidad es la estación terminal sur de la Línea 3, ubicada en el corazón de Ciudad Universitaria (CU). La estación marca el acceso principal al campus de la UNAM, Patrimonio de la Humanidad por su arquitectura única del siglo XX. Para turistas del Mundial 2026, representa un destino imprescindible para entender la modernidad arquitectónica mexicana, la educación superior y la vida universitaria latinoamericana.",
    "historia_icono": "El ícono de Universidad representa el símbolo de la UNAM y el compromiso con la educación. Evoca la modernidad, la ciencia y el progreso del México del siglo XX.",
    "tips": [
      "Ciudad Universitaria: campus completo con arquitectura monumental y diseño urbano único",
      "Biblioteca Central: joya arquitectónica de 1956 con fachada de mosaicos deslumbrantes",
      "Museo Universitario de Arte Contemporáneo (MUAC): colecciones de arte moderno latinoamericano",
      "Estadio Olímpico: construcción de 1968 para Juegos Olímpicos, abierto para visitas",
      "Restaurantes y cafeterías esparcidas ofrecen comida económica con vista a la arquitectura"
    ],
    "mejor_horario": "Mañana (9am-12pm) con luz natural para fotografía. Evita fin de semana cuando afluencia es mayor.",
    "mundial_relevancia": "Centro educativo y arquitectónico fundamental. Esencial para turistas que deseen comprender la modernidad mexicana y la identidad educativa del país.",
    "descripcion_turistica": "Estación terminal sur de Línea 3, ubicada junto a UNAM (Universidad Nacional Autónoma de México), una de universidades más prestigiosas de América Latina. Acceso a biblioteca y espacios universitarios. Ideal para turistas interesados en educación y vida académica durante World Cup 2026.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Rampas de acceso. Señalización táctil. Estación terminal con infraestructura moderna."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierre 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "UNAM (Universidad Nacional Autónoma de México)",
        "tipo": "Universidad",
        "distancia": "500m",
        "descripcion": "Una de universidades más grandes y prestigiosas de Latinoamérica. Campus con arquitectura moderna y clásica. Abierto a visitantes."
      },
      {
        "nombre": "Biblioteca Central UNAM",
        "tipo": "Biblioteca monumental",
        "distancia": "1km",
        "descripcion": "Biblioteca con murales Juan O'Gorman espectaculares. Obra maestra de arquitectura moderna mexicana. Accesible a turistas."
      },
      {
        "nombre": "Estadio Olímpico UNAM",
        "tipo": "Estadio",
        "distancia": "800m",
        "descripcion": "Estadio histórico de Juegos Olímpicos 1968. Capacidad 70,000. Abierto para tours."
      },
      {
        "nombre": "Ciudad Universitaria",
        "tipo": "Complejo académico",
        "distancia": "1km",
        "descripcion": "Complejo universitario expansivo con museos, galerías y vida académica. Ideal para recorrido cultural."
      }
    ]
  },
  {
    "slug": "martin-carrera",
    "nombre": "Martín Carrera",
    "linea": "4",
    "alcaldia": "Gustavo A. Madero",
    "tipo_zona": "residencial-transporte",
    "pois": [
      {
        "nombre": "Autobuses zona norte",
        "tipo": "transporte",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [
      "6"
    ],
    "seo_title": "Metro Martín Carrera CDMX — Terminal Norte L4 | MetroGuia",
    "meta_description": "Martín Carrera. Terminal norte Línea 4. Mercados locales. Vida residencial. Acceso norte CDMX.",
    "h1": "Metro Martín Carrera: terminal norte y transfer L4/L6",
    "intro": "Martín Carrera es la estación terminal norte de la Línea 4, ubicada en la Alcaldía Gustavo A. Madero. La estación ofrece acceso a una zona residencial y comercial del norte de la ciudad, con importante conexión a transporte foráneo hacia el norte del país. Para turistas del Mundial 2026, representa un punto de entrada alternativo desde el norte, con vida urbana auténtica y mercados tradicionales.",
    "historia_icono": "El ícono de Martín Carrera representa al general y político mexicano Martín Carrera. Evoca el liderazgo y la política durante el período de transformación de México.",
    "tips": [
      "Terminal de línea norte: acceso a autobuses hacia estados del norte",
      "Zona comercial y residencial con vida local auténtica lejos del turismo masivo",
      "Mercados tradicionales con productos frescos y artesanías a precios reales",
      "Restaurantes de comida local y cantinas auténticas para experiencia genuina",
      "Menor aglomeración que zonas céntricas: mayor comodidad durante transbordo"
    ],
    "mejor_horario": "Mediodía (11am-2pm) para visitar mercados. Evita mañana (7-9am) por afluencia de trabajadores.",
    "mundial_relevancia": "Terminal de acceso norte. Útil para turistas que arriben desde estados septentrionales durante el Mundial 2026.",
    "descripcion_turistica": "Estación terminal norte de Línea 4, ubicada en zona residencial norte. Acceso a vida local auténtica y servicios comunitarios. Punto de partida hacia Centro Histórico. Conexión importante para turistas que viajan desde norte durante World Cup 2026.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Rampas de acceso. Señalización táctil. Estación terminal con infraestructura estándar."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierre 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "Zona Martín Carrera",
        "tipo": "Área comercial",
        "distancia": "0m",
        "descripcion": "Hub comercial norte con tiendas, restaurantes y servicios. Nodo de transporte para zona norte."
      },
      {
        "nombre": "Mercado de la zona",
        "tipo": "Mercado tradicional",
        "distancia": "200m",
        "descripcion": "Mercado local con comida, frutas, artículos. Vida comercial intensa de barrio."
      },
      {
        "nombre": "Parque de Martín Carrera",
        "tipo": "Parque",
        "distancia": "300m",
        "descripcion": "Parque público para descanso y recreación."
      },
      {
        "nombre": "Centro Histórico vía Línea 4",
        "tipo": "Zona turística",
        "distancia": "6 estaciones",
        "descripcion": "Acceso directo a Centro Histórico y principales atracciones turísticas."
      }
    ]
  },
  {
    "slug": "talisman",
    "nombre": "Talismán",
    "linea": "4",
    "alcaldia": "Gustavo A. Madero",
    "tipo_zona": "comercial-residencial",
    "pois": [
      {
        "nombre": "Mercado Talismán",
        "tipo": "mercado",
        "distancia": "3 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Talismán CDMX — Barrio Auténtico | MetroGuia",
    "meta_description": "Talismán CDMX. Barrio residencial auténtico. Mercados locales. Restaurantes caseros. Vida barrial genuine.",
    "h1": "Metro Talismán: mercados y vida del norte de la ciudad",
    "intro": "Talismán es una estación ubicada en la Alcaldía Gustavo A. Madero, ofreciendo acceso a una zona residencial con carácter comercial vibrante. La estación sirve como punto de conexión entre el norte residencial y el centro histórico de la ciudad. Para turistas del Mundial 2026, representa una parada auténtica para experimentar la vida cotidiana de barrios mexicanos menos turísticos. Descubre mercados locales, restaurantes caseros y la hospitalidad genuina de la capital.",
    "historia_icono": "El ícono de Talismán representa objetos de poder y protección en culturas mesoamericanas. Simboliza la conexión con el misticismo y la sabiduría ancestral.",
    "tips": [
      "Zona residencial con comercio local y vida barrial auténtica",
      "Mercados de comida y artesanía con precios accesibles para turistas",
      "Restaurantes de comida mexicana casera sin pretensiones turísticas",
      "Acceso a iglesias coloniales y edificios históricos de la zona",
      "Punto de transbordo cómodo y eficiente hacia otras líneas"
    ],
    "mejor_horario": "Mediodía (12pm-2pm) para mercados y comida. Evita horas pico.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial FIFA 2026. Utilidad como punto de conexión residencial."
  },
  {
    "slug": "bondojito",
    "nombre": "Bondojito",
    "linea": "4",
    "alcaldia": "Gustavo A. Madero",
    "tipo_zona": "residencial",
    "pois": [],
    "transferencias": [],
    "seo_title": "Metro Bondojito CDMX — Zona Industrial Local | MetroGuia",
    "meta_description": "Bondojito. Zona industrial residencial. Mercados populares. Vida obrera. Oriente CDMX auténtico.",
    "h1": "Metro Bondojito: estación residencial norte",
    "intro": "Bondojito es una estación ubicada en la Alcaldía Venustiano Carranza, ofreciendo acceso a una zona industrial y residencial de la ciudad con carácter laboral auténtico. La estación representa un punto de conexión hacia barrios populares y comerciales del oriente de la capital. Para turistas del Mundial 2026, ofrece perspectiva genuina de la vida industrial y obrera de México, lejos de los circuitos turísticos tradicionales. Experimenta el México auténtico en su vida cotidiana.",
    "historia_icono": "El ícono de Bondojito representa el topónimo original: 'Pequeño salto o cascada'. Evoca la geografía natural del territorio antes de la urbanización.",
    "tips": [
      "Zona industrial y residencial: perspectiva auténtica de vida laboral mexicana",
      "Mercados populares con productos frescos a precios muy competitivos",
      "Restaurantes de fonda con comida casera y económica para trabajadores",
      "Acceso a parques y espacios públicos menos saturados que centro turístico",
      "Punto de transbordo eficiente hacia otras zonas de la ciudad"
    ],
    "mejor_horario": "Mediodía (12pm-3pm) para visitar mercados. Evita mañana temprano.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial FIFA 2026. Interés sociológico en vida obrera mexicana.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Rampas de acceso. Señalización táctil. Estación pequeña con servicios básicos."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierre 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "Barrio residencial",
        "tipo": "Zona residencial",
        "distancia": "0m",
        "descripcion": "Zona residencial con vida local tranquila."
      },
      {
        "nombre": "Servicios locales",
        "tipo": "Comercios",
        "distancia": "100m",
        "descripcion": "Tiendas y servicios de barrio."
      },
      {
        "nombre": "Centro Histórico",
        "tipo": "Zona turística",
        "distancia": "5 estaciones sur",
        "descripcion": "Acceso a atracciones principales vía Línea 4."
      },
      {
        "nombre": "Área comercial pequeña",
        "tipo": "Retail",
        "distancia": "200m",
        "descripcion": "Tiendas y comedores locales."
      }
    ]
  },
  {
    "slug": "consulado",
    "nombre": "Consulado",
    "linea": "4",
    "alcaldia": "Gustavo A. Madero",
    "tipo_zona": "comercial",
    "pois": [
      {
        "nombre": "Eje 3 Norte — corredor comercial",
        "tipo": "comercial",
        "distancia": "2 min caminando"
      }
    ],
    "transferencias": [
      "5"
    ],
    "seo_title": "Metro Consulado CDMX — Centro Diplomático | MetroGuia",
    "meta_description": "Consulado CDMX. Zona diplomática. Consulados extranjeros. Restaurantes internacionales. Multicultural CDMX.",
    "h1": "Metro Consulado: transfer L4/L5 en el norte de CDMX",
    "intro": "Consulado es una estación ubicada en la Alcaldía Venustiano Carranza, ofreciendo acceso a una zona de importancia comercial y administrativa con presencia diplomática internacional. La estación marca la ubicación de sedes de consulados de diversos países en la ciudad. Para turistas del Mundial 2026, representa un punto de conexión estratégico hacia barrios con servicios especializados. Descubre la Ciudad de México multicultural y sus conexiones internacionales desde esta importante estación.",
    "historia_icono": "El ícono de Consulado representa la diplomacia y las relaciones internacionales. Evoca la conexión entre México y el mundo exterior.",
    "tips": [
      "Zona de consulados extranjeros: presencia internacional y multicultural",
      "Restaurantes internacionales y locales con variedad de opciones gastronómicas",
      "Servicios especializados: embajadas, oficinas comerciales, negocios internacionales",
      "Acceso a barrios del oriente con vida comercial vibrante",
      "Zona relativamente segura y bien organizada para turistas"
    ],
    "mejor_horario": "Mediodía (11am-3pm) para servicios y gastronomía. Evita mañana.",
    "mundial_relevancia": "Centro diplomático. Relevante para turistas internacionales que requieran servicios consulares durante el Mundial.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Rampas funcionales. Señalización táctil. Estación de tránsito con servicios estándar."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierre 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "Zona Consulado",
        "tipo": "Área oficial",
        "distancia": "0m",
        "descripcion": "Zona con sedes diplomáticas y servicios consulares."
      },
      {
        "nombre": "Zona comercial intermedia",
        "tipo": "Retail",
        "distancia": "100m",
        "descripcion": "Tiendas y servicios comerciales."
      },
      {
        "nombre": "Centro Histórico",
        "tipo": "Zona turística",
        "distancia": "7 estaciones sur",
        "descripcion": "Acceso a Zócalo y atracciones históricas."
      },
      {
        "nombre": "Restaurantes zona norte",
        "tipo": "Gastronomía",
        "distancia": "150m",
        "descripcion": "Opciones de comida variada con precios moderados."
      }
    ]
  },
  {
    "slug": "canal-del-norte",
    "nombre": "Canal del Norte",
    "linea": "4",
    "alcaldia": "Cuauhtémoc",
    "tipo_zona": "industrial-comercial",
    "pois": [
      {
        "nombre": "Mercado de Jamaica (flores)",
        "tipo": "mercado",
        "distancia": "15 min en metro"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Canal del Norte CDMX — Historia Prehispánica | MetroGuia",
    "meta_description": "Canal del Norte. Canales prehispánicos. Historia Tenochtitlan. Barrios tradicionales. Geografía CDMX.",
    "h1": "Metro Canal del Norte: corredor industrial del centro",
    "intro": "Canal del Norte es una estación ubicada en la Alcaldía Venustiano Carranza, ofreciendo acceso a una zona histórica que evoca la geografía antigua de la Ciudad de México. La estación marca la ruta de los antiguos canales que caracterizaban la Tenochtitlan prehispánica. Para turistas del Mundial 2026, representa una conexión fascinante con la historia ambiental y geográfica de la capital mexicana. Descubre vestigios del pasado integrados en la urbanización contemporánea.",
    "historia_icono": "El ícono de Canal del Norte representa el sistema de canales prehispánico de Tenochtitlan. Evoca la ingeniería hidráulica azteca y la geografía lacustre de la antigua ciudad.",
    "tips": [
      "Zona histórica: vestigios de canales prehispánicos integrados en la urbanización",
      "Restaurantes y mercados locales con comida mexicana auténtica",
      "Acceso a parques y espacios públicos para paseos urbanos",
      "Barrios con arquitectura variada mostrando evolución de la ciudad",
      "Punto de transbordo hacia diferentes sectores de la capital"
    ],
    "mejor_horario": "Mañana (9am-12pm) para exploración. Tarde para descanso.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial FIFA 2026. Interés histórico-geográfico."
  },
  {
    "slug": "morelos",
    "nombre": "Morelos",
    "linea": "4",
    "alcaldia": "Cuauhtémoc",
    "tipo_zona": "historico-popular",
    "pois": [
      {
        "nombre": "Tepito — Barrio Bravo",
        "tipo": "mercado",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Buenavista (transfer LB)",
        "tipo": "transporte",
        "distancia": "2 paradas en LB"
      }
    ],
    "transferencias": [
      "B"
    ],
    "seo_title": "Metro Morelos — Historia prehispánica colonial",
    "meta_description": "Morelos: Plaza Tres Culturas con arqueología prehispánica, iglesias coloniales históricas. Barrio histórico con patrimonio de tres culturas mexicanas.",
    "h1": "Metro Morelos: puerta a Tepito y transfer con L-B",
    "intro": "Morelos es estación que conecta barrio residencial histórico donde arquitectura colonial se mezcla con construcción moderna, zona de transición entre Centro y periferias norte. Para turistas del Mundial FIFA 2026 buscando explorar más allá de circuitos turísticos convencionales, Morelos ofrece acceso a museos comunitarios, iglesias coloniales, restaurantes de cocina local y vida auténtica de barrios capitalinos. Ideal para turistas que desean descubrir México profundo en la capital.",
    "historia_icono": "El ícono gris de la Línea B evoca conexión de Morelos con memoria histórica del barrio, cuna de luchas sociales donde arquitectura colonial coexiste con construcción moderna. Este símbolo representa continuidad histórica de la CDMX.",
    "tips": [
      "Iglesia de Santiago de Tlatelolco: camina 800m para visitar templo colonial del siglo XVI con importancia arqueológica e histórica",
      "Plaza Tres Culturas: descubre sitio arqueológico prehispánico, arquitectura colonial y construcción moderna contando la historia de México",
      "Come en comedores locales: tacos, tortas y sopa de tortilla preparados por cocineras de barrio son mucho más económicos que zonas turísticas",
      "Librerías de segunda mano: busca libros en español y ediciones agotadas; zona preferida por estudiantes e intelectuales",
      "Lleva mapa o GPS: calles pueden resultar confusas para turistas sin orientación adecuada"
    ],
    "mejor_horario": "Visita de 9 AM-5 PM de martes-sábados para museos abiertos y actividad comercial óptima; domingos más tranquilo pero algunos lugares cierran.",
    "mundial_relevancia": "Relevancia media: turistas interesados en historia colonial y arqueología encontrarán valor; conexión con Plaza Tres Culturas es atractivo cultural significativo.",
    "descripcion_turistica": "Morelos honra al Siervo de la Nación José María Morelos. Estación en zona centro de la ciudad, conectando con barrios históricos y zonas comerciales tradicionales del nororiente capitalino.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Sin elevadores. Escaleras como acceso vertical único."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Monumento a Morelos",
        "tipo": "Patrimonio",
        "distancia": "300m",
        "descripcion": "Escultura dedicada al héroe independentista"
      },
      {
        "nombre": "Centro Comunitario Barrio Antiguo",
        "tipo": "Cultura",
        "distancia": "400m",
        "descripcion": "Espacios de actividad cultural local"
      },
      {
        "nombre": "Mercado Morelos",
        "tipo": "Comercio",
        "distancia": "200m",
        "descripcion": "Tianguis tradicional con productos variados"
      }
    ]
  },
  {
    "slug": "candelaria",
    "nombre": "Candelaria",
    "linea": "4",
    "alcaldia": "Venustiano Carranza",
    "tipo_zona": "historico",
    "pois": [
      {
        "nombre": "Iglesia de la Candelaria (s. XVII)",
        "tipo": "iglesia",
        "distancia": "3 min caminando"
      },
      {
        "nombre": "Mercado Jamaica (flores)",
        "tipo": "mercado",
        "distancia": "10 min caminando"
      }
    ],
    "transferencias": [
      "1"
    ],
    "seo_title": "Metro Candelaria CDMX — Templo Religioso | MetroGuia",
    "meta_description": "Candelaria CDMX. Templo religioso importante. Peregrinación. Fe mexicana. Festividad 2 febrero.",
    "h1": "Metro Candelaria: historia colonial y transfer L1/L4",
    "intro": "Candelaria es una estación ubicada en la Alcaldía Venustiano Carranza, ofreciendo acceso a una zona religiosa y culturalmente significativa en el oriente de la capital. La zona alberga el Templo de la Candelaria, un importante sitio de peregrinación y devoción religiosa en la ciudad. Para turistas del Mundial 2026, representa una parada fundamental para comprender la religiosidad profunda y la fe que caracterizan a México. Experimenta la devoción mariana y la tradición católica mexicana.",
    "historia_icono": "El ícono de Candelaria representa la Virgen de la Candelaria, festividad religiosa importante en México. Evoca la devoción mariana y la fe popular mexicana.",
    "tips": [
      "Templo de la Candelaria: iglesia histórica y sitio de peregrinación importante",
      "Festividades religiosas: 2 de febrero celebración de la Candelaria con procesiones",
      "Mercados especializados en productos religiosos y tradicionales",
      "Restaurantes cercanos con comida mexicana auténtica para peregrinos y turistas",
      "Zona tranquila para contemplación espiritual y cultural"
    ],
    "mejor_horario": "Mañana (8am-11am) para visitas religiosas. Especialmente: 2 de febrero para festividad.",
    "mundial_relevancia": "Sitio religioso importante. Relevante para turistas interesados en la fe y devoción de México.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Rampas de acceso. Señalización táctil. Estación intermedia con servicios estándar."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierre 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "Barrio La Candelaria",
        "tipo": "Zona residencial",
        "distancia": "0m",
        "descripcion": "Barrio residencial tranquilo con vida local."
      },
      {
        "nombre": "Zona comercial pequeña",
        "tipo": "Retail",
        "distancia": "100m",
        "descripcion": "Tiendas y servicios locales de barrio."
      },
      {
        "nombre": "Centro Histórico",
        "tipo": "Zona turística",
        "distancia": "3 estaciones sur",
        "descripcion": "Acceso cercano a Zócalo y atracciones."
      },
      {
        "nombre": "Restaurantes Candelaria",
        "tipo": "Gastronomía",
        "distancia": "100m",
        "descripcion": "Opciones de comida familiar mexicana."
      }
    ]
  },
  {
    "slug": "fray-servando",
    "nombre": "Fray Servando",
    "linea": "4",
    "alcaldia": "Cuauhtémoc",
    "tipo_zona": "residencial",
    "pois": [],
    "transferencias": [],
    "seo_title": "Metro Fray Servando CDMX — Historia Intelectual | MetroGuia",
    "meta_description": "Fray Servando. Historia intelectual. Iglesias coloniales. Mercado Jamaica. Patrimonio CDMX.",
    "h1": "Metro Fray Servando: estación del centro oriente",
    "intro": "Fray Servando es una estación ubicada en la Alcaldía Venustiano Carranza, honrando al fraile José Servando Teresa de Mier, intelectual y líder independentista. La estación ofrece acceso a una zona histórica del oriente de la capital, con importantes sitios relacionados con la historia religiosa e intelectual de México. Para turistas del Mundial 2026, representa conexión con la historia eclesiástica e intelectual del país.",
    "historia_icono": "El ícono de Fray Servando representa al fraile e intelectual José Servando Teresa de Mier. Evoca el pensamiento crítico y la lucha ideológica por la libertad de Mexico.",
    "tips": [
      "Zona histórica: iglesias y conventos relacionados con la orden dominica",
      "Mercado de Jamaíca muy cercano: uno de los mayores mercados tradicionales de la ciudad",
      "Museos de arte religioso y historia intelectual mexicana",
      "Restaurantes tradicionales y fondas con comida mexicana de calidad",
      "Acceso a barrios históricos con arquitectura colonial preservada"
    ],
    "mejor_horario": "Mañana (9am-1pm) para museos y mercados. Evita tarde.",
    "mundial_relevancia": "Sitio histórico-intelectual. Interesante para turistas que deseen conocer el pensamiento mexicano."
  },
  {
    "slug": "jamaica",
    "nombre": "Jamaica",
    "linea": "4",
    "alcaldia": "Venustiano Carranza",
    "tipo_zona": "comercial-mercado",
    "pois": [
      {
        "nombre": "Mercado de Jamaica (flores)",
        "tipo": "mercado",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Central de Abastos (acceso)",
        "tipo": "mercado",
        "distancia": "10 min caminando"
      }
    ],
    "transferencias": [
      "9"
    ],
    "seo_title": "Metro Jamaica CDMX — Mercado Flores | MetroGuia",
    "meta_description": "Jamaica CDMX. Mercado flores más grande México. Frutas exóticas. Colores vibrantes. Experiencia auténtica.",
    "h1": "Metro Jamaica: flores, aromas y el mercado más colorido de CDMX",
    "intro": "Jamaica es una estación ubicada en la Alcaldía Venustiano Carranza, ofreciendo acceso directo al Mercado Jamaica, uno de los mercados de flores y frutas más grandes y coloridos de Latinoamérica. La estación representa una experiencia sensorial única: aromas, colores y bullicio de un mercado tradicional mexicano vivo. Para turistas del Mundial 2026, es una parada imprescindible para experimentar la autenticidad del comercio tradicional y la biodiversidad agrícola de México.",
    "historia_icono": "El ícono de Jamaica representa flores y frutas del mercado homónimo. Evoca la biodiversidad mexicana y la riqueza agrícola del país.",
    "tips": [
      "Mercado Jamaica: el mayor mercado de flores de México, espectáculo visual impresionante",
      "Fotografia impresionante: arreglos florales, frutas exóticas, colores vibrantes",
      "Aroma intenso y experiencia multisensorial auténtica del México tradicional",
      "Compra de flores y frutas a precios reales muy económicos",
      "Comedores dentro del mercado ofrecen comida casera mexicana deliciosa"
    ],
    "mejor_horario": "Mañana temprano (7am-10am) para ver mercado en plena actividad y mejor fotografía.",
    "mundial_relevancia": "Mercado icónico. Fundamental para turistas que deseen experiencia auténtica del comercio tradicional mexicano.",
    "descripcion_turistica": "Jamaica es IMPRESCINDIBLE para turistas FIFA 2026. Mercado de flores más grande del mundo abre temprano. Experiencia sensorial única: aromas, colores, vida comercial auténtica.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Estación completamente accesible. Mercado de Flores con acceso general adaptado."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00. Mercado más activo madrugada y mañana."
    },
    "lugares_cercanos": [
      {
        "nombre": "Mercado de Flores Jamaica",
        "tipo": "Mercado Especializado",
        "distancia": "100m",
        "descripcion": "Mercado de flores más grande del mundo. Decenas de miles de flores frescas. Abierto desde madrugada. Experiencia sensorial única."
      },
      {
        "nombre": "Mercado de Frutas y Verduras",
        "tipo": "Mercado",
        "distancia": "200m",
        "descripcion": "Mercado mayorista con productos frescos"
      },
      {
        "nombre": "Restaurante de Mercado",
        "tipo": "Restaurante",
        "distancia": "150m",
        "descripcion": "Comida de mercado, jugo fresco, tamales, quesadillas"
      },
      {
        "nombre": "Tienda de Artesanías",
        "tipo": "Tienda",
        "distancia": "250m",
        "descripcion": "Artesanías y souvenirs locales"
      }
    ]
  },
  {
    "slug": "santa-anita",
    "nombre": "Santa Anita",
    "linea": "4",
    "alcaldia": "Iztapalapa",
    "tipo_zona": "residencial-industrial",
    "pois": [
      {
        "nombre": "Xochimilco (acceso en metro/bus)",
        "tipo": "parque",
        "distancia": "30 min en metro"
      }
    ],
    "transferencias": [
      "8"
    ],
    "seo_title": "Metro Santa Anita CDMX — Terminal Sur L4 | MetroGuia",
    "meta_description": "Santa Anita. Terminal sur Línea 4. Templo colonial. Zona religiosa. Barrio auténtico CDMX.",
    "h1": "Metro Santa Anita: transfer L4/L8 en el oriente",
    "intro": "Santa Anita es la estación terminal sur de la Línea 4, ubicada en la Alcaldía Iztapalapa. La estación ofrece acceso a una zona histórica y religiosa, con el Templo y Convento de Santa Anita como referencias arquitectónicas principales de gran valor. Para turistas del Mundial 2026, representa una conexión valiosa con la historia colonial y la religiosidad que caracteriza profundamente a México. Descubre arquitectura colonial preservada y la fe tradicional mexicana.",
    "historia_icono": "El ícono de Santa Anita representa a Santa Ana, madre de la Virgen María. Simboliza la devoción mariana y la fe cristiana en México.",
    "tips": [
      "Templo y Convento de Santa Anita: sitio histórico colonial de gran valor arquitectónico",
      "Zona religiosa importante: peregrinaciones y festividades tradicionales",
      "Mercado local con productos frescos y artesanía a precios reales",
      "Restaurantes tradicionales para experimentar comida mexicana auténtica",
      "Barrios residenciales con vida local genuina y acogedora"
    ],
    "mejor_horario": "Mañana (8am-12pm) para visita a templo. Evita tarde.",
    "mundial_relevancia": "Sitio religioso-colonial. Relevante para turistas interesados en arquitectura colonial y fe mexicana.",
    "descripcion_turistica": "Estación terminal sur de Línea 4, ubicada en zona residencial sur con vida local tradicional. Acceso a servicios comunitarios y mercados locales. Punto estratégico para turistas que inician o terminan recorridos en Línea 4 durante World Cup 2026.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Rampas funcionales. Señalización táctil. Estación terminal con servicios básicos."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierre 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "Barrio de Santa Anita",
        "tipo": "Zona residencial",
        "distancia": "0m",
        "descripcion": "Barrio residencial con vida local auténtica, mercados y restaurantes tradicionales. Ambiente tranquilo."
      },
      {
        "nombre": "Mercado Santa Anita",
        "tipo": "Mercado tradicional",
        "distancia": "150m",
        "descripcion": "Mercado local con alimentos, frutas, comida. Experiencia de mercado tradicional mexicano."
      },
      {
        "nombre": "Iglesia de Santa Anita",
        "tipo": "Iglesia",
        "distancia": "200m",
        "descripcion": "Templo histórico del barrio. Abierto para visitantes."
      },
      {
        "nombre": "Zona residencial sur",
        "tipo": "Barrio",
        "distancia": "500m",
        "descripcion": "Vida comunitaria tranquila, restaurantes familiares, precios accesibles."
      }
    ]
  },
  {
    "slug": "politecnico",
    "nombre": "Politécnico",
    "linea": "5",
    "alcaldia": "Gustavo A. Madero",
    "tipo_zona": "universitario",
    "pois": [
      {
        "nombre": "Instituto Politécnico Nacional (IPN)",
        "tipo": "universidad",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Museo Tecnológico CONACYT",
        "tipo": "museo",
        "distancia": "10 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Politécnico CDMX — IPN y ciencia",
    "meta_description": "Terminal norte Línea 5. Acceso directo al IPN, museos gratis de tecnología. Zona universitaria con comida económica. Guía MetroGuia.",
    "h1": "Metro Politécnico: terminal norte y puerta al IPN",
    "intro": "Terminus norte de la Línea 5, puerta al Instituto Politécnico Nacional (IPN), una de las universidades de ingeniería y ciencias más prestigiosas de México. Esta zona vibrante alberga el campus principal con museos de tecnología de acceso gratuito y una oferta gastronómica estudiantil económica. Ideal para turistas interesados en educación, innovación y la vida académica mexicana.",
    "historia_icono": "El ícono representa los engranajes y símbolos de la ingeniería, evocando la misión del IPN fundado en 1936 por Lázaro Cárdenas para impulsar la educación técnica y científica del país.",
    "tips": [
      "El Museo Tecnológico CONACYT del IPN es gratuito y tiene exhibiciones sobre innovación mexicana",
      "Zona universitaria con fondas económicas y cafeterías (comida completa desde $60-80 MXN)",
      "Terminal de L5: siempre hay asientos disponibles al abordar en hora pico",
      "Acceso a la biblioteca y explanada del IPN (preguntar en entrada principal por acceso a visitantes)"
    ],
    "mejor_horario": "Lunes a viernes 9am-2pm para museos. Mañanas para atmosfera académica.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial.",
    "descripcion_turistica": "Estación cercana a la Escuela Politécnica Nacional, en la delegación Gustavo A. Madero. Zona de acceso norte importante para llegar a zonas residenciales del norte de la CDMX. Perfecta para turistas FIFA 2026 que buscan explorar barrios auténticos fuera del centro.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Acceso por escaleras. Señalización en piso táctil disponible para usuarios con discapacidad visual."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Escuela Politécnica Nacional",
        "tipo": "Institución Educativa",
        "distancia": "200m",
        "descripcion": "Campus histórico de educación superior, importante polo de desarrollo académico"
      },
      {
        "nombre": "Parque Tezozomoc",
        "tipo": "Parque",
        "distancia": "1.2km",
        "descripcion": "Amplio parque recreativo con ciclovía y áreas verdes para descansar"
      },
      {
        "nombre": "Mercado del Barrio",
        "tipo": "Mercado",
        "distancia": "400m",
        "descripcion": "Mercado tradicional donde encontrarás comida local auténtica y artesanías"
      }
    ]
  },
  {
    "slug": "instituto-del-petroleo-l5",
    "nombre": "Instituto del Petróleo",
    "linea": "5",
    "alcaldia": "Gustavo A. Madero",
    "tipo_zona": "universitario-industrial",
    "pois": [
      {
        "nombre": "IPN — campus Zacatenco",
        "tipo": "universidad",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [
      "6"
    ],
    "seo_title": "Metro Instituto Petróleo CDMX — L5/L6",
    "meta_description": "Transfer Líneas 5 y 6. Acceso IPN Zacatenco, ruta a La Villa-Basílica. Conexión norte-sur metró. Guía MetroGuia.",
    "h1": "Metro Instituto del Petróleo: transfer L5/L6",
    "intro": "Nodo de transferencia entre Líneas 5 y 6 estratégicamente ubicado en Zacatenco, acceso al campus del IPN y puerta norte hacia La Villa-Basílica. Esta estación conecta el eje norte-sur del metro con la ruta hacia la Basílica de Guadalupe. Zona segura y funcional, perfecta para cruzar de un corredor a otro.",
    "historia_icono": "El ícono conmemora el Instituto Mexicano del Petróleo, fundado en 1938 tras la expropiación petrolera, símbolo de la soberanía energética y de la industria nacional.",
    "tips": [
      "Transfer rápido y eficiente a Línea 6 hacia La Villa-Basílica (solo 2 paradas)",
      "Conecta Campus Zacatenco del IPN con la red metropolitana",
      "Zona tranquila y bien iluminada, segura para turistas",
      "Bancos y tiendas de conveniencia en los alrededores"
    ],
    "mejor_horario": "Todo el día. Ideal en mañanas para evitar aglomeración de tardecita.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial.",
    "descripcion_turistica": "Estación al servicio del Instituto Mexicano del Petróleo y zonas industriales del norte. Acceso conveniente para turistas FIFA 2026 que deseen visitar instalaciones de investigación o explorar la industria mexicana.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Estación sin elevadores. Piso táctil presente para orientación de personas con discapacidad visual."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Instituto Mexicano del Petróleo",
        "tipo": "Centro de Investigación",
        "distancia": "300m",
        "descripcion": "Centro de investigación petrolera, importante para entender industria energética mexicana"
      },
      {
        "nombre": "Unidad Habitacional Nonoalco",
        "tipo": "Vivienda Histórica",
        "distancia": "800m",
        "descripcion": "Conjunto habitacional modernista diseñado por Mario Pani"
      },
      {
        "nombre": "Restaurante Las Delicias del Maíz",
        "tipo": "Restaurante",
        "distancia": "500m",
        "descripcion": "Comida tradicional mexicana a precios accesibles"
      }
    ]
  },
  {
    "slug": "autobuses-del-norte",
    "nombre": "Autobuses del Norte",
    "linea": "5",
    "alcaldia": "Gustavo A. Madero",
    "tipo_zona": "transporte",
    "pois": [
      {
        "nombre": "Terminal Central del Norte",
        "tipo": "transporte",
        "distancia": "3 min caminando"
      },
      {
        "nombre": "Autobuses a todo México",
        "tipo": "transporte",
        "distancia": "3 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Autobuses del Norte CDMX — terminal",
    "meta_description": "Acceso directo Terminal Central del Norte. Mayor terminal de autobuses de México. Rutas a 30 estados. Guía MetroGuia.",
    "h1": "Metro Autobuses del Norte: puerta a toda México",
    "intro": "La Terminal Central del Norte es la terminal de autobuses más grande de México, conectando a CDMX con ciudades de todo el norte y bajío del país. Punto de entrada/salida fundamental para turistas que llegan desde estados como Monterrey, Guadalajara, Querétaro y ciudades del norte. Acceso por metro a solo $5 MXN, sin taxis.",
    "historia_icono": "El ícono representa un autobús de larga distancia, símbolo del transporte terrestre interurbano que ha conectado México a través de carreteras desde mediados del siglo XX.",
    "tips": [
      "Compra boletos con 1-2 días de anticipación en temporada alta (feriados, puentes)",
      "Terminal 24 horas: restaurantes, cajeros, tiendas, baños limpios",
      "Guarda equipaje en las consignas dentro de la terminal (costo: ~$15-30 MXN por día)",
      "Evita viajar con efectivo visible; usa cajeros de la terminal"
    ],
    "mejor_horario": "Todo el día. Mayor flujo viernes-domingo y puentes vacacionales (llega 30 min antes).",
    "mundial_relevancia": "Punto de entrada/salida para turistas del Mundial 2026 que viajan desde el norte y bajío del país.",
    "descripcion_turistica": "Terminal de autobuses del norte, conexión clave para turistas FIFA 2026 que llegan desde el norte de México o desean visitar destinos hacia Monterrey, Querétaro y más. Acceso directo a uno de los mayores centros de transporte del país.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Estación completamente accesible con elevadores y rampas. Centro de transporte con servicios completos de accesibilidad."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Terminal de Autobuses del Norte",
        "tipo": "Terminal de Transporte",
        "distancia": "100m",
        "descripcion": "Mayor terminal de autobuses de México, conexión a todo el norte y centro del país"
      },
      {
        "nombre": "Zona Comercial Autobuses del Norte",
        "tipo": "Zona Comercial",
        "distancia": "200m",
        "descripcion": "Tiendas, restaurantes y servicios de viajero alrededor de la terminal"
      },
      {
        "nombre": "Parque Metropolitano",
        "tipo": "Parque",
        "distancia": "600m",
        "descripcion": "Parque urbano con áreas verdes y ciclovía"
      }
    ]
  },
  {
    "slug": "la-raza-l5",
    "nombre": "La Raza",
    "linea": "5",
    "alcaldia": "Gustavo A. Madero",
    "tipo_zona": "cultural-residencial",
    "pois": [
      {
        "nombre": "Túnel de la Ciencia (subterráneo gratuito)",
        "tipo": "museo",
        "distancia": "en la misma estación"
      },
      {
        "nombre": "Hospital General IMSS",
        "tipo": "hospital",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [
      "3"
    ],
    "seo_title": "Metro La Raza CDMX — Túnel de Ciencia",
    "meta_description": "Transfer L3/L5 con famoso Túnel de la Ciencia gratuito. Joya escondida del metro. Guía MetroGuia.",
    "h1": "Metro La Raza: el Túnel de la Ciencia bajo tus pies",
    "intro": "Estación famosa por el Túnel de la Ciencia subterráneo y gratuito que corre entre los andenes, una joya escondida del metro que pocos turistas conocen. Además, La Raza es nodo de transferencia entre Líneas 3 y 5, conectando el centro histórico con el norte. Un destino para descubrir la cultura científica mexicana literalmente bajo tus pies.",
    "historia_icono": "El ícono representa la mezcla de razas que constituye la identidad mestiza mexicana. El concepto proviene de la filosof­ía de José Vasconcelos y su libro 'La raza cósmica'.",
    "tips": [
      "El Túnel de la Ciencia es COMPLETAMENTE GRATUITO: entra sin pagar boleto de más",
      "Transfer instantáneo a Línea 3 (hacia Indios Verdes o Centro Médico)",
      "Túnel con exhibits de ciencia, módulos interactivos (especialmente para niños)",
      "Comida callejera auténtica en los alrededores (tacos, elote, agua fresca)"
    ],
    "mejor_horario": "Cualquier hora. Mejor visitarlo en mañanas cuando hay menos gente.",
    "mundial_relevancia": "Curiosidad cultural para turistas del Mundial en tránsito.",
    "descripcion_turistica": "Estación La Raza conecta con el Monumento a la Raza, símbolo cultural mexicano imprescindible. Ideal para turistas FIFA 2026 que buscan comprender la historia y cultura de México de forma rápida.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Acceso con rampa disponible. Escaleras principales sin elevador. Piso táctil presente."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Monumento a la Raza",
        "tipo": "Monumento Histórico",
        "distancia": "150m",
        "descripcion": "Icónico monumento que celebra la fusión de culturas. Museo y plataforma con vistas de la ciudad"
      },
      {
        "nombre": "Parque Lázaro Cárdenas",
        "tipo": "Parque",
        "distancia": "400m",
        "descripcion": "Espacio verde amplio con áreas de picnic y recreación"
      },
      {
        "nombre": "Restaurante Casa de Comidas Tradicionales",
        "tipo": "Restaurante",
        "distancia": "300m",
        "descripcion": "Cocina mexicana auténtica en ambiente acogedor"
      },
      {
        "nombre": "Centro Cultural La Raza",
        "tipo": "Centro Cultural",
        "distancia": "200m",
        "descripcion": "Exposiciones y eventos culturales de la ciudad"
      }
    ]
  },
  {
    "slug": "misterios",
    "nombre": "Misterios",
    "linea": "5",
    "alcaldia": "Gustavo A. Madero",
    "tipo_zona": "residencial",
    "pois": [],
    "transferencias": [],
    "seo_title": "Metro Misterios CDMX — zona residencial norte",
    "meta_description": "Estación residencial norte. Punto de tránsito Línea 5. Barrio tradicional de CDMX. Guía MetroGuia.",
    "h1": "Metro Misterios: estación residencial norte",
    "intro": "Estación residencial en Gustavo A. Madero que conecta el corredor norte de la Línea 5. Aunque no tiene atracciones turísticas prominentes, es punto de tránsito importante entre La Raza y Valle Gómez. La zona conserva carácter de barrio tradicional de norte de CDMX con comercios locales y vida comunitaria.",
    "historia_icono": "El ícono representa los misterios de la fe cristiana, en referencia a una procesión religiosa tradicional que recorría históricamente esta calzada en el norte de la ciudad.",
    "tips": [
      "Zona tranquila y segura, ideal para evitar aglomeraciones del centro",
      "Punto de paso entre La Raza y Pantitlán sin necesidad de bajar",
      "Tiendas y servicios locales para turistas que necesiten algo rápido",
      "Mucho menos concurrida que estaciones centrales (ideal si vienes de mochilero)"
    ],
    "mejor_horario": "Todo el día. Evitar las 7-9am y 6-8pm si viajas en hora pico.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial.",
    "descripcion_turistica": "Estación Misterios sirve la zona norte de la ciudad. Nombre evocador que refleja la historia de la CDMX. Acceso conveniente para turistas FIFA 2026 que exploran los barrios tradicionales del norte.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Acceso por escaleras. Señalización táctil disponible para personas con discapacidad visual."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Iglesia de los Misterios",
        "tipo": "Templo Religioso",
        "distancia": "250m",
        "descripcion": "Iglesia histórica del siglo XVI, testimonio de arquitectura colonial mexicana"
      },
      {
        "nombre": "Mercadito de los Misterios",
        "tipo": "Mercado",
        "distancia": "300m",
        "descripcion": "Mercado tradicional con productos, comida y artesanías locales"
      },
      {
        "nombre": "Parque Ernesto P. Uruchurtu",
        "tipo": "Parque",
        "distancia": "500m",
        "descripcion": "Área verde con juegos infantiles y espacios para relajarse"
      }
    ]
  },
  {
    "slug": "valle-gomez",
    "nombre": "Valle Gómez",
    "linea": "5",
    "alcaldia": "Cuauhtémoc",
    "tipo_zona": "residencial-popular",
    "pois": [
      {
        "nombre": "Mercado popular Valle Gómez",
        "tipo": "mercado",
        "distancia": "3 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Valle Gómez CDMX — mercados populares",
    "meta_description": "Zona popular con mercados baratos. Auténtico norte de CDMX. Comida casera económica. Guía MetroGuia.",
    "h1": "Metro Valle Gómez: barrio popular del norte del centro",
    "intro": "Estación en zona popular de Cuauhtémoc que marca la transición del norte puro al norte del centro histórico. Aquí comienzan los mercados locales auténticos de CDMX, especialmente el Mercado Valle Gómez con precios incre­íblemente económicos. Para turistas que quieren experiencia auténtica de la vida cotidiana mexicana, no es imprescindible pero es genuino.",
    "historia_icono": "El ícono representa al general Gómez, figura histórica del barrio Morelos-Valle Gómez en el norte del centro. Es referencia a la historia revolucionaria de la zona.",
    "tips": [
      "Mercado Valle Gómez: frutas, verduras, carnes a precios mínimos (30-50% menos que tiendas)",
      "Zona auténtica y popular; turistas extranjeros son minoría (verdadera CDMX)",
      "Restaurantes de comida casera con porciones enormes ($40-60 MXN plato fuerte)",
      "A dos paradas del Templo Mayor si quieres combinar norte con centro"
    ],
    "mejor_horario": "Mañanas 8am-1pm para mercados llenos. Tardes más tranquilas.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial."
  },
  {
    "slug": "consulado-l5",
    "nombre": "Consulado",
    "linea": "5",
    "alcaldia": "Gustavo A. Madero",
    "tipo_zona": "comercial",
    "pois": [
      {
        "nombre": "Corredor comercial Eje 3 Norte",
        "tipo": "comercial",
        "distancia": "2 min caminando"
      }
    ],
    "transferencias": [
      "4"
    ],
    "seo_title": "Metro Consulado CDMX — transfer L4/L5",
    "meta_description": "Transfer Líneas 4 y 5. Zona comercial norte. Conecta ejes principales. Guía MetroGuia.",
    "h1": "Metro Consulado: transfer L4/L5 en el norte",
    "intro": "Nodo de transferencia entre Líneas 4 y 5 ubicado en zona comercial activa del norte. Consulado conecta el eje 3 norte con los corredores principales, siendo punto de cruce para turistas que necesitan cambiar entre líneas en el norte de la ciudad. La zona tiene tiendas, mercados y comercios dinámicos.",
    "historia_icono": "El ícono representa el Tribunal del Consulado de la Nueva España, institución mercantil colonial del siglo XVIII que regulaba el comercio de CDMX en la era prehispánica.",
    "tips": [
      "Transfer rápido entre L4 y L5: solo 2-3 min de caminata",
      "Zona comercial con tiendas de ropa, electrónica y mercados variados",
      "Conecta rápidamente el norte de la ciudad con el oriente (Línea 4 → Lázaro Cárdenas)",
      "Zona segura y bien iluminada con presencia de comerciantes"
    ],
    "mejor_horario": "Todo el día. Máxima actividad comercial lunes-sábado 9am-8pm.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial."
  },
  {
    "slug": "eduardo-molina",
    "nombre": "Eduardo Molina",
    "linea": "5",
    "alcaldia": "Venustiano Carranza",
    "tipo_zona": "industrial-residencial",
    "pois": [],
    "transferencias": [],
    "seo_title": "Metro Eduardo Molina CDMX — zona industrial",
    "meta_description": "Zona industrial oriente. Punto de tránsito Línea 5. Lado manufacturero de CDMX. Guía MetroGuia.",
    "h1": "Metro Eduardo Molina: zona industrial oriente",
    "intro": "Estación en zona industrial y residencial de Venustiano Carranza que forma parte del corredor oriente de la Línea 5. Es punto de tránsito importante para trabajadores y residentes, pero también acceso a la zona industrial del oriente que muestra el lado productivo y manufacturero de la CDMX.",
    "historia_icono": "El ícono representa al ingeniero Eduardo Molina, director de obras públicas durante el Porfiriato que diseñó el revolucionario sistema de drenaje moderno de CDMX.",
    "tips": [
      "Zona industrial: menos turistas, más auténtica CDMX laboral",
      "Punto de paso hacia Pantitlán sin necesidad de bajar",
      "Tiendas de materiales y herramientas para los que trabajan en la zona",
      "Evitar horas pico (7-9am, 5-8pm) si buscas comodidad"
    ],
    "mejor_horario": "Todo el día. Más tranquilo después de las 8pm.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial."
  },
  {
    "slug": "aragon",
    "nombre": "Aragón",
    "linea": "5",
    "alcaldia": "Gustavo A. Madero",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Bosque de Aragón",
        "tipo": "parque",
        "distancia": "15 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Aragón — Barrio comercial noreste",
    "meta_description": "Aragón: mercados locales activos, tiendas de comercio informal y gastronomía casera mexicana. Vida auténtica del barrio comercial noreste.  ",
    "h1": "Metro Aragón: puerta al Bosque de Aragón",
    "intro": "Aragón es estación de la Línea B en zona comercial y residencial del noreste capitalino, conectando comunidades del oriente con red metropolitana. Para turistas del Mundial FIFA 2026 que busquen explorar autenticidad de barrios menos turísticos, Aragón ofrece acceso a mercados locales, tiendas de comercio informal, gastronomía casera y vida cotidiana de capitalinos residentes. Es parada para exploradores que desean alejarse de circuitos convencionales.",
    "historia_icono": "El ícono gris de la Línea B representa conexión de Aragón con zona comercial del noreste, donde economía informal y vida residencial convergen. Este símbolo evoca movilidad equitativa de comunidades menos privilegiadas.",
    "tips": [
      "Mercado de Aragón: frutas, verduras y productos locales a precios de comercio de barrio",
      "Comedores económicos: desayunos completos, comidas y cenas a precios accesibles para residentes locales",
      "Tiendas de ropa y zapatos: comercio informal de prendas nuevas y de temporada a precios inferiores a centros comerciales",
      "Caja de ahorros y servicios financieros locales: acceso a cambio de divisas si lo necesitas",
      "Mantente en zonas principales: es barrio tranquilo pero residencial; lleva GPS para orientación"
    ],
    "mejor_horario": "Visita de 10 AM-4 PM de martes-viernes para actividad comercial óptima sin aglomeración de fin de semana.",
    "mundial_relevancia": "Relevancia baja: turistas muy específicos interesados en vida auténtica de barrio y mercados locales encontrarán experiencia genuina.",
    "descripcion_turistica": "Aragón conecta Línea B hacia zonas del nororiente de la ciudad. Acceso a colonias residenciales importantes del área nororiental.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Sin equipamiento elevador."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Colonia Aragón",
        "tipo": "Residencial",
        "distancia": "0m",
        "descripcion": "Zona residencial establecida"
      },
      {
        "nombre": "Mercado Aragón",
        "tipo": "Comercio",
        "distancia": "200m",
        "descripcion": "Tianguis tradicional"
      },
      {
        "nombre": "Primaria Estatal",
        "tipo": "Educación",
        "distancia": "400m",
        "descripcion": "Centro educativo importante"
      }
    ]
  },
  {
    "slug": "oceania",
    "nombre": "Oceanía",
    "linea": "5",
    "alcaldia": "Venustiano Carranza",
    "tipo_zona": "transporte",
    "pois": [
      {
        "nombre": "AICM — Aeropuerto Internacional (T2)",
        "tipo": "transporte",
        "distancia": "10 min en LB"
      },
      {
        "nombre": "Forum Buenavista (acceso rápido por LB)",
        "tipo": "comercial",
        "distancia": "20 min en LB"
      }
    ],
    "transferencias": [
      "B"
    ],
    "seo_title": "Metro Oceanía — Barrio residencial y comercial",
    "meta_description": "Oceanía: mercados locales auténticos, gastronomía casera mexicana tradicional, vida cotidiana. Experiencia genuina del norte capitalino.    ",
    "h1": "Metro Oceanía: transfer L5/LB y conexión al aeropuerto",
    "intro": "Oceanía es estación de la Línea B en zona norte residencial y comercial, conectando comunidades del oriente capitalino con el Centro. Para turistas del Mundial FIFA 2026 que deseen experimentar vida auténtica de barrio capitalino más allá de zonas turísticas, Oceanía ofrece acceso a mercados locales, tiendas de comercio informal, restaurantes de comida casera y la cotidianidad genuina de los habitantes. Es parada secundaria pero valiosa para exploradores curiosos.",
    "historia_icono": "El ícono gris de la Línea B representa conexión de Oceanía con comunidades del norte capitalino, zona donde comercio informal y vida residencial convergen. Este símbolo evoca inclusión y equidad en movilidad de las periferias.",
    "tips": [
      "Mercado local de Oceanía: compra frutas, verduras y productos frescos a precios locales, no turísticos",
      "Comedores de mercado: tortas ahogadas, tamales y pozole preparados por cocineras de barrio; relación calidad-precio excelente",
      "Tiendas informales: ropa, zapatos y artículos prácticos a fracción de precio de tiendas departamentales",
      "Ambiente seguro: zona residencial tranquila pero poco turística; lleva efectivo y dirección escrita en español",
      "Evita tarjetas de crédito: comercio es principalmente en efectivo"
    ],
    "mejor_horario": "Visita de 9 AM-5 PM de lunes-viernes cuando mercados están activos pero sin congestión de fin de semana.",
    "mundial_relevancia": "Relevancia baja: turistas especializados interesados en vida de barrio auténtica y mercados locales encontrarán experiencia genuina.",
    "descripcion_turistica": "Oceanía conecta Línea B con zona residencial del nororiente. Nombre que remite a la geografía y modernidad en nomenclatura urbana.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Estación sin elevadores."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Parque Ecológico Oceanía",
        "tipo": "Recreación",
        "distancia": "500m",
        "descripcion": "Área verde importante de la zona"
      },
      {
        "nombre": "Centros Comerciales",
        "tipo": "Comercio",
        "distancia": "300m",
        "descripcion": "Tiendas y servicios variados"
      },
      {
        "nombre": "Clínica Comunitaria",
        "tipo": "Salud",
        "distancia": "400m",
        "descripcion": "Centro de salud local"
      }
    ]
  },
  {
    "slug": "terminal-aerea",
    "nombre": "Terminal Aérea",
    "linea": "5",
    "alcaldia": "Venustiano Carranza",
    "tipo_zona": "transporte",
    "pois": [
      {
        "nombre": "AICM Terminal 1",
        "tipo": "transporte",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Zona de hoteles aeropuerto",
        "tipo": "hotel",
        "distancia": "5-10 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Terminal Aérea CDMX — aeropuerto $5",
    "meta_description": "Acceso directo AICM Terminal 1. Solo $5 MXN. Opción más económica turistas. Guía MetroGuia.",
    "h1": "Metro Terminal Aérea: llega al aeropuerto por $5 pesos",
    "intro": "Terminal Aérea es el secreto mejor guardado para turistas del Mundial 2026: acceso directo al Aeropuerto Internacional Benito Juárez Terminal 1 por SOLO $5 MXN, sin taxis, sin tráfico, sin sorpresas. En 5-10 minutos caminando llegas a la entrada de vuelos internacionales. Es la opción más económica, segura y directa para llegar al aeropuerto.",
    "historia_icono": "El ícono representa un avión en despegue/aterrizaje, símbolo directo de la función aeroportuaria que da servicio esta estación histórica.",
    "tips": [
      "Acceso DIRECTO a AICM Terminal 1: salida norte de la estación, 5 min caminando",
      "Costo: $5 MXN vs $300-500 MXN en taxi — AHORRA DINERO",
      "Consulta horarios: Metro abre 5am, cierra 12mn (para vuelos muy nocturnos: taxi)",
      "Hoteles del aeropuerto a 5-10 min caminando si necesitas quedarte antes de vuelo temprano"
    ],
    "mejor_horario": "24/7 para el aeropuerto. Metro: 5am-12mn. Para vuelos nocturnos después de 12mn, usar taxi.",
    "mundial_relevancia": "ESENCIAL para turistas del Mundial 2026. La opción más económica para llegar al aeropuerto desde CDMX.",
    "descripcion_turistica": "Terminal Aérea conecta el metro con vuelos hacia Monterrey, Guadalajara y destinos del norte. Estación clave para turistas FIFA 2026 que continúan viaje a otros destinos mexicanos después de eventos.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Estación accesible con elevadores. Conexión directa a aeropuerto del norte (Benito Juárez Express)."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Terminal Aérea del Norte",
        "tipo": "Terminal Aéreo",
        "distancia": "100m",
        "descripcion": "Terminal aéreo con vuelos nacionales hacia norte y occidente de México"
      },
      {
        "nombre": "Zona de Espera y Restaurantes",
        "tipo": "Servicios",
        "distancia": "50m",
        "descripcion": "Restaurantes y cafeterías para esperas antes de vuelos"
      },
      {
        "nombre": "Parque Metropolitano",
        "tipo": "Parque",
        "distancia": "800m",
        "descripcion": "Área verde cercana para relajarse antes de vuelo"
      }
    ]
  },
  {
    "slug": "hangares",
    "nombre": "Hangares",
    "linea": "5",
    "alcaldia": "Venustiano Carranza",
    "tipo_zona": "aeronautico",
    "pois": [
      {
        "nombre": "AICM Terminal 2 (acceso)",
        "tipo": "transporte",
        "distancia": "10 min caminando"
      },
      {
        "nombre": "Área de hangares AICM",
        "tipo": "transporte",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Hangares CDMX — AICM Terminal 2",
    "meta_description": "Acceso a Terminal 2 AICM. Aeroméxico y aerolíneas internacionales. Guía MetroGuia.",
    "h1": "Metro Hangares: Terminal 2 del aeropuerto",
    "intro": "Hangares es la estación más cercana a la Terminal 2 del Aeropuerto Internacional de CDMX y a los hangares privados de aviación. Principalmente utilizada por vuelos de Aeroméxico y aerolíneas internacionales que operan desde Terminal 2. Menos concurrida que Terminal Aérea, ideal para turistas con vuelos en T2.",
    "historia_icono": "El ícono representa un hangar de aviación, los grandes galpones donde se guardan, reparan y dan mantenimiento a los aviones comerciales del aeropuerto.",
    "tips": [
      "Terminal 2 está a 10-12 min caminando (más lejos que Terminal Aérea)",
      "Aeroméxico y alianzas vuelan principalmente desde T2",
      "Menos aglomeración que Terminal Aérea (ventaja en horas pico)",
      "Mismo costo ($5 MXN) y ventajas de seguridad que Terminal Aérea"
    ],
    "mejor_horario": "Todo el día según vuelos. Ideal si tu vuelo sale de T2.",
    "mundial_relevancia": "Útil para turistas del Mundial 2026 con vuelos en Terminal 2 del AICM.",
    "descripcion_turistica": "Estación Hangares en zona industrial norte. Punto de conexión para turistas FIFA 2026 interesados en industria logística mexicana o explorando el norte de la ciudad más allá de zonas centrales.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Acceso por escaleras. Piso táctil disponible para orientación."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Zona Industrial Hangares",
        "tipo": "Zona Industrial",
        "distancia": "200m",
        "descripcion": "Centro logístico importante de CDMX"
      },
      {
        "nombre": "Mercado Surtidores",
        "tipo": "Mercado",
        "distancia": "400m",
        "descripcion": "Mercado mayorista con productos diversos"
      },
      {
        "nombre": "Restaurante El Transportista",
        "tipo": "Restaurante",
        "distancia": "300m",
        "descripcion": "Comida casera frecuentada por trabajadores locales"
      }
    ]
  },
  {
    "slug": "pantitlan-l5",
    "nombre": "Pantitlán",
    "linea": "5",
    "alcaldia": "Venustiano Carranza",
    "tipo_zona": "transporte",
    "pois": [
      {
        "nombre": "Hub de transferencia 4 líneas",
        "tipo": "transporte",
        "distancia": "en la misma estación"
      }
    ],
    "transferencias": [
      "1",
      "9",
      "A"
    ],
    "seo_title": "Metro Pantitlán CDMX — hub 4 líneas",
    "meta_description": "Hub de transferencia 4 líneas (L1, L5, L9, LA). Mayor nodo oriente. Logística turistas. Guía MetroGuia.",
    "h1": "Metro Pantitlán: la gran central de transferencias",
    "intro": "Pantitlán es el HUB de transferencia MÁS IMPORTANTE del Metro CDMX: cuatro líneas confluyen aquí simultáneamente (L1, L5, L9 y LA), haciendo de esta estación el nodo logístico que conecta el oriente con cualquier destino del metro. Es la puerta de entrada al metro desde el oriente y punto neurálgico para turistas cambiando de línea.",
    "historia_icono": "El ícono representa los cuatro vientos o puntos cardinales, símbolo mitológico de la convergencia de fuerzas que ocurre en esta estación donde se cruzan 4 líneas.",
    "tips": [
      "Cuatro líneas: L1 (rosa centro), L5 (amarilla norte-oriente), L9 (café sur), LA (morada periférico)",
      "MUY CONCURRIDA: vigila mochilas/bolsas en horas pico (7-9am, 6-8pm)",
      "Flechas en pisos indican direcciones de transfers; sigue señales claras",
      "Usar escaleras mecánicas para llevar maletas (evita escaleras fijas)"
    ],
    "mejor_horario": "Cualquier hora sirve. EVITAR horas pico (7-9am, 6-8pm) si quieres comodidad.",
    "mundial_relevancia": "Nodo logístico importante para turistas del Mundial 2026 moviéndose por la red.",
    "descripcion_turistica": "Pantitlán Línea 5 conecta con la línea A (tren ligero a Xochimilco). Acceso a uno de los puntos turísticos más importantes: Xochimilco con sus famosos trajineras. Perfecta para turistas FIFA 2026 buscando experiencia auténtica mexicana.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Estación intermodal con rampa de acceso. Línea A accesible para conexión a Xochimilco."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Estación Línea A (Tren Ligero)",
        "tipo": "Transporte",
        "distancia": "50m",
        "descripcion": "Conexión directa a Xochimilco vía tren ligero"
      },
      {
        "nombre": "Parque Ecológico Pantitlán",
        "tipo": "Parque",
        "distancia": "300m",
        "descripcion": "Espacio verde cercano al centro de transferencia"
      },
      {
        "nombre": "Mercado Solidario",
        "tipo": "Mercado",
        "distancia": "250m",
        "descripcion": "Mercado con productos frescos y comidas típicas"
      }
    ]
  },
  {
    "slug": "el-rosario-l6",
    "nombre": "El Rosario",
    "linea": "6",
    "alcaldia": "Azcapotzalco",
    "tipo_zona": "transporte",
    "pois": [
      {
        "nombre": "CETRAM El Rosario (autobuses)",
        "tipo": "transporte",
        "distancia": "2 min caminando"
      }
    ],
    "transferencias": [
      "7"
    ],
    "seo_title": "Metro El Rosario CDMX — terminal L6/L7",
    "meta_description": "Terminal norte L6 y L7. CETRAM a Estado de México. Hub norte. Guía MetroGuia.",
    "h1": "Metro El Rosario: terminal norte L6 y L7",
    "intro": "El Rosario es terminal norte simultánea de Líneas 6 y 7, punto de salida del metro para autobuses hacia el Estado de México (Tlalnepantla, Naucalpan, Huixquilucan). Hub importante para turistas que quieren explorar zonas al norte de CDMX o conexiones con el EDOMEX.",
    "historia_icono": "El ícono representa el Rosario, símbolo del catolicismo popular mexicano y devoción mariana, en referencia a la parroquia histórica que existía en este barrio colonial del norte.",
    "tips": [
      "Terminal simultánea L6 y L7: últimas paradas de ambas líneas",
      "CETRAM con autobuses a Tlalnepantla, Naucalpan, Huixquilucan, pueblos Estado de México",
      "Zona de alta afluencia en horas pico (viernes a domingo 10am-2pm)",
      "Restaurantes y tiendas en los alrededores para turistas con equipo"
    ],
    "mejor_horario": "Todo el día. Evitar viernes-domingo 10am-2pm si buscas comodidad.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial.",
    "descripcion_turistica": "El Rosario Línea 6 es punto terminal norte con acceso a zona residencial e industrial. Ideal para turistas FIFA 2026 que buscan ver la vida cotidiana de la CDMX más allá del centro turístico. Zona auténtica con mercados y comida local.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Estación terminal con rampa de acceso. Escaleras principales sin elevador."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Parque Tezozomoc",
        "tipo": "Parque",
        "distancia": "600m",
        "descripcion": "Uno de los parques más grandes de CDMX con ciclovía, lagos y áreas de esparcimiento"
      },
      {
        "nombre": "Mercado del Rosario",
        "tipo": "Mercado",
        "distancia": "200m",
        "descripcion": "Mercado tradicional con comida auténtica y artesanías locales"
      },
      {
        "nombre": "Tianguis Dominical",
        "tipo": "Mercado",
        "distancia": "300m",
        "descripcion": "Tianguis tradicional con productos, ropa y comida típica"
      }
    ]
  },
  {
    "slug": "tezozomoc",
    "nombre": "Tezozómoc",
    "linea": "6",
    "alcaldia": "Azcapotzalco",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Parque Tezozómoc",
        "tipo": "parque",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Tezozómoc CDMX — parque prehispánico",
    "meta_description": "Acceso Parque Tezozómoc: maqueta única Valle de México prehispánico. Entrada gratuita. Guía MetroGuia.",
    "h1": "Metro Tezozómoc: el parque con el Valle de México en miniatura",
    "intro": "Tezozómoc da acceso al Parque Ecológico Tezozómoc, joya verde del norte de CDMX famosa por su maqueta topográfica ÚNICA del Valle de México prehispánico con sus lagos, montes y ciudades reproducidos a escala. Recorre una miniatura del mundo que Moctezuma II conocía hace 500 años.",
    "historia_icono": "El ícono representa a Tezozómoc, el gran tlatoani tepaneca del siglo XIV que dominó el Valle de México antes del ascenso azteca. Símbolo del poder prehispánico de la región.",
    "tips": [
      "Maqueta del Valle de México prehispánico: recorr­e los lagos Texcoco, Xochimilco, Chalco miniaturizados",
      "Entrada COMPLETAMENTE GRATUITA (6am-5:30pm todos los días)",
      "Lago para remar, ciclopista, senderos, zona de picnic",
      "Menos concurrido que parques del sur; ambiente tranquilo y familia"
    ],
    "mejor_horario": "Fines de semana 8am-3pm para disfrutar parque. Semanas hay menos gente.",
    "mundial_relevancia": "Curiosidad histórica para turistas del Mundial que quieran ver cómo era CDMX antes de la conquista.",
    "descripcion_turistica": "Estación Tezozomoc en zona de Azcapotzalco, barrio industrial histórico. Acceso al Parque Tezozomoc, uno de los más grandes de la ciudad. Excelente opción para turistas FIFA 2026 que buscan naturaleza y espacio verde.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Acceso por escaleras. Piso táctil presente. Parque completamente accesible."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Parque Tezozomoc",
        "tipo": "Parque",
        "distancia": "100m",
        "descripcion": "Parque emblemático con 127 hectáreas, ciclovía, lagos artificiales, canchas y jardines temáticos"
      },
      {
        "nombre": "Café Literario",
        "tipo": "Café",
        "distancia": "400m",
        "descripcion": "Café con ambiente tranquilo dentro del parque"
      },
      {
        "nombre": "Restaurante Casa del Barrio",
        "tipo": "Restaurante",
        "distancia": "350m",
        "descripcion": "Comida tradicional de Azcapotzalco con ambiente local"
      },
      {
        "nombre": "Museo Tamayo (cercano)",
        "tipo": "Museo",
        "distancia": "2km",
        "descripcion": "Museo de arte contemporáneo accesible en metro desde Polanco"
      }
    ]
  },
  {
    "slug": "azcapotzalco",
    "nombre": "Azcapotzalco",
    "linea": "6",
    "alcaldia": "Azcapotzalco",
    "tipo_zona": "industrial-residencial",
    "pois": [
      {
        "nombre": "Parque Azcapotzalco",
        "tipo": "parque",
        "distancia": "8 min caminando"
      },
      {
        "nombre": "Refinería Azcapotzalco (histórica)",
        "tipo": "monumento",
        "distancia": "10 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Azcapotzalco CDMX — historia tepaneca",
    "meta_description": "Señorío tepaneca prehispánico. Zona industrial con historia. Parque Azcapotzalco. Guía MetroGuia.",
    "h1": "Metro Azcapotzalco: historia y industria en el norte",
    "intro": "Azcapotzalco fue el centro del poderoso señorío tepaneca antes de que los aztecas lo conquistaran en el siglo XIV. Hoy es alcaldía industrial con profundo pasado prehispánico, parques ecológicos y la histórica refinería. Zona para turistas interesados en arqueología, industria mexicana e historia prehispánica menos explorada.",
    "historia_icono": "El ícono representa el hormiguero, pues 'Azcapotzalco' significa 'lugar del hormiguero' en náhuatl. Referencia directa a los tepanecas que fundaron este señorío.",
    "tips": [
      "Zona con historia prehispánica poco visitada por turistas internacionales",
      "Parque Azcapotzalco con senderos, áreas verdes, zona recreativa",
      "Refinería histórica de Azcapotzalco (visible desde zona): monumento industrial mexicano",
      "Comida local auténtica en comedores y taquerías de la zona"
    ],
    "mejor_horario": "Mañanas (8am-1pm) para parques. Tardes más tranquilo.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial.",
    "descripcion_turistica": "Estación Azcapotzalco en corazón del barrio industrial histórico, cuna de la industria mexicana. Perfecto para turistas FIFA 2026 interesados en historia industrial y arquitectura de principios del siglo XX.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Estación con rampa de acceso. Escaleras principales sin elevador."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Iglesia de San Pedro Apóstol",
        "tipo": "Templo Religioso",
        "distancia": "300m",
        "descripcion": "Iglesia colonial histórica, uno de los monumentos más antiguos del norte de CDMX"
      },
      {
        "nombre": "Museo Casa de los Azulejos (referencia histórica)",
        "tipo": "Museo",
        "distancia": "1.5km",
        "descripcion": "Arquitectura colonial mexicana característica"
      },
      {
        "nombre": "Mercado Azcapotzalco",
        "tipo": "Mercado",
        "distancia": "200m",
        "descripcion": "Mercado tradicional con comida local auténtica"
      },
      {
        "nombre": "Restaurante La Chimba",
        "tipo": "Restaurante",
        "distancia": "250m",
        "descripcion": "Comida típica mexicana en ambiente tradicional"
      }
    ]
  },
  {
    "slug": "ferreria",
    "nombre": "Ferrería/Arena Ciudad de México",
    "linea": "6",
    "alcaldia": "Azcapotzalco",
    "tipo_zona": "entretenimiento",
    "pois": [
      {
        "nombre": "Arena Ciudad de México",
        "tipo": "arena",
        "distancia": "3 min caminando"
      },
      {
        "nombre": "Foro Sol (15 min en Línea 9)",
        "tipo": "estadio",
        "distancia": "15 min combinando metro"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Ferrería CDMX — Arena Ciudad México",
    "meta_description": "Acceso directo Arena Ciudad de México. Conciertos, boxeo, WWE. Recinto 22k personas. Guía MetroGuia.",
    "h1": "Metro Ferrería: la puerta a la Arena Ciudad de México",
    "intro": "La estación de acceso directo a la ARENA CIUDAD DE MÉXICO, el recinto de entretenimiento más importante del país con capacidad para 22,000 personas. Conciertos de grandes artistas, campeonatos de boxeo, WWE, eventos deportivos y espectáculos internacionales pasan por aquí. Para turistas en CDMX buscando entretenimiento de clase mundial.",
    "historia_icono": "El ícono representa los rieles del tren y símbolo de transporte, en referencia a los antiguos talleres ferroviarios que existían en esta zona industrial de Azcapotzalco durante el siglo XX.",
    "tips": [
      "Acceso DIRECTO a Arena CDMX desde salida norte de la estación (3 min caminando)",
      "Llega 45 minutos antes de eventos para evitar la avalancha de 22,000 personas",
      "Puestos de comida, bebidas y merchandising en alrededores (precios evento, no calle)",
      "Seguridad robusta en días de evento: no hay problema moviéndote de noche"
    ],
    "mejor_horario": "Según calendario de eventos. Consult­a www.arenamexico.com para eventos en MetroGuia.",
    "mundial_relevancia": "Punto de entretenimiento para turistas del Mundial 2026 que quieran disfrutar eventos además del fútbol.",
    "descripcion_turistica": "Estación Ferretería en zona industrial histórica de Azcapotzalco. Nombre refleja herencia industrial. Para turistas FIFA 2026 buscando autenticidad lejos del centro, explorando barrios con historia",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Acceso por escaleras. Piso táctil disponible."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Zona Industrial Azcapotzalco",
        "tipo": "Zona Industrial",
        "distancia": "300m",
        "descripcion": "Área con fábricas históricas y centros manufactureros"
      },
      {
        "nombre": "Mercado Ferretería",
        "tipo": "Mercado",
        "distancia": "200m",
        "descripcion": "Mercado con productos y comida tradicional"
      },
      {
        "nombre": "Restaurante Doña Carmen",
        "tipo": "Restaurante",
        "distancia": "300m",
        "descripcion": "Comida casera mexicana, frecuentado por trabajadores locales"
      }
    ]
  },
  {
    "slug": "norte-45",
    "nombre": "Norte 45",
    "linea": "6",
    "alcaldia": "Azcapotzalco",
    "tipo_zona": "residencial-comercial",
    "pois": [],
    "transferencias": [],
    "seo_title": "Metro Norte 45 CDMX — zona residencial norte",
    "meta_description": "Zona residencial norte. Punto de tránsito Línea 6. Barrio tranquilo. Guía MetroGuia.",
    "h1": "Metro Norte 45: estación en el corazón de Azcapotzalco",
    "intro": "Estación en zona residencial y comercial del norte de CDMX, punto de tránsito en la Línea 6 entre Ferrería y Vallejo. Aunque no tiene atracciones turísticas mayor, es paso importante para turistas que conectan entre el noreste y el norte de la ciudad.",
    "historia_icono": "El ícono representa la avenida Norte 45, vía importante del norte de CDMX que corre paralela a la Línea 6.",
    "tips": [
      "Zona residencial tranquila, menos concurrida que estaciones centrales",
      "Punto de paso hacia La Villa-Basílica sin bajar del metro",
      "Tiendas y servicios locales para necesidades rápidas",
      "Ideal si buscas evitar multitudes del centro"
    ],
    "mejor_horario": "Todo el día. Muy tranquilo en semana.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial.",
    "descripcion_turistica": "Estación Norte 45 en Azcapotzalco. Acceso a zona residencial nord-occidental. Para turistas FIFA 2026 que desean explorar vida real de CDMX, lejos de circuito turístico convencional.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Acceso por escaleras. Señalización táctil disponible."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Colonia Residencial Norte",
        "tipo": "Zona Residencial",
        "distancia": "200m",
        "descripcion": "Zona residencial tranquila con casas y apartamentos"
      },
      {
        "nombre": "Mercado Local",
        "tipo": "Mercado",
        "distancia": "250m",
        "descripcion": "Mercado con productos frescos y comida típica"
      },
      {
        "nombre": "Cafetería San José",
        "tipo": "Café",
        "distancia": "300m",
        "descripcion": "Café local con pasteles y desayuno mexicano"
      }
    ]
  },
  {
    "slug": "vallejo",
    "nombre": "Vallejo",
    "linea": "6",
    "alcaldia": "Gustavo A. Madero",
    "tipo_zona": "industrial-comercial",
    "pois": [
      {
        "nombre": "Corredor industrial Vallejo",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Vallejo CDMX — zona comercial norte",
    "meta_description": "Zona comercial norte. Mercados y tiendas locales. Punto de tránsito L6. Guía MetroGuia.",
    "h1": "Metro Vallejo: zona industrial del norte",
    "intro": "Estación en zona comercial e industrial de Gustavo A. Madero, punto importante de la Línea 6 que conecta el norte con los corredores principales. Zona con mercados, tiendas y servicios comerciales que reflejan la vida económica del norte de la ciudad.",
    "historia_icono": "El ícono representa el apellido Vallejo, en referencia a personajes históricos de la revolución mexicana o familias que poblaron esta zona del norte.",
    "tips": [
      "Zona comercial activa con tiendas, mercadillos y comercio local",
      "Point de paso hacia Martín Carrera (última parada L6) sin bajar",
      "Tiendas de ropa, electrónica y servicios locales económicos",
      "Zona segura con buena presencia de comerciantes"
    ],
    "mejor_horario": "Todo el día. Máxima actividad comercial lunes-sábado 10am-7pm.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial.",
    "descripcion_turistica": "Estación Vallejo en zona comercial y residencial del norte. Acceso a mercados y tiendas. Punto de partida ideal para turistas FIFA 2026 que quieren conocer barrios residenciales auténticos de CDMX.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Estación con rampa de acceso. Escaleras principales sin elevador."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Mercado Vallejo",
        "tipo": "Mercado Comercial",
        "distancia": "200m",
        "descripcion": "Gran mercado comercial mayorista y minorista con ropa, accesorios y artesanías"
      },
      {
        "nombre": "Zona de Tiendas Vallejo",
        "tipo": "Zona Comercial",
        "distancia": "100m",
        "descripcion": "Centro comercial con múltiples tiendas de diversos rubros"
      },
      {
        "nombre": "Restaurante La Hacienda",
        "tipo": "Restaurante",
        "distancia": "300m",
        "descripcion": "Comida mexicana tradicional en ambiente agradable"
      }
    ]
  },
  {
    "slug": "instituto-del-petroleo-l6",
    "nombre": "Instituto del Petróleo",
    "linea": "6",
    "alcaldia": "Gustavo A. Madero",
    "tipo_zona": "universitario-industrial",
    "pois": [
      {
        "nombre": "IPN — campus Zacatenco",
        "tipo": "universidad",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [
      "5"
    ],
    "seo_title": "Metro Instituto Petróleo CDMX — L5/L6",
    "meta_description": "Transfer Líneas 5 y 6. Acceso IPN Zacatenco, ruta a La Villa-Basílica. Conexión norte-sur metró. Guía MetroGuia.",
    "h1": "Metro Instituto del Petróleo: nodo norte L5/L6",
    "intro": "Nodo de transferencia entre Líneas 5 y 6 estratégicamente ubicado en Zacatenco, acceso al campus del IPN y puerta norte hacia La Villa-Basílica. Esta estación conecta el eje norte-sur del metro con la ruta hacia la Basílica de Guadalupe. Zona segura y funcional, perfecta para cruzar de un corredor a otro.",
    "historia_icono": "El ícono conmemora el Instituto Mexicano del Petróleo, fundado en 1938 tras la expropiación petrolera, símbolo de la soberanía energética y de la industria nacional.",
    "tips": [
      "Transfer rápido y eficiente a Línea 6 hacia La Villa-Basílica (solo 2 paradas)",
      "Conecta Campus Zacatenco del IPN con la red metropolitana",
      "Zona tranquila y bien iluminada, segura para turistas",
      "Bancos y tiendas de conveniencia en los alrededores"
    ],
    "mejor_horario": "Todo el día. Ideal en mañanas para evitar aglomeración de tardecita.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial.",
    "descripcion_turistica": "Estación Instituto del Petróleo Línea 6 sirve instalaciones de investigación petrolera. Para turistas FIFA 2026 interesados en entender industria energética mexicana y su importancia histórica.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Acceso por escaleras. Piso táctil disponible."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Instituto Mexicano del Petróleo",
        "tipo": "Centro de Investigación",
        "distancia": "300m",
        "descripcion": "Centro de investigación científica en energía y petróleo"
      },
      {
        "nombre": "Zona Residencial Cercana",
        "tipo": "Zona Residencial",
        "distancia": "400m",
        "descripcion": "Barrio residencial tranquilo con servicios locales"
      },
      {
        "nombre": "Restaurante El Científico",
        "tipo": "Restaurante",
        "distancia": "350m",
        "descripcion": "Comida casera frecuentada por investigadores y empleados"
      }
    ]
  },
  {
    "slug": "lindavista",
    "nombre": "Lindavista",
    "linea": "6",
    "alcaldia": "Gustavo A. Madero",
    "tipo_zona": "residencial-comercial",
    "pois": [
      {
        "nombre": "Centro Comercial Lindavista",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Universidad La Salle",
        "tipo": "universidad",
        "distancia": "10 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Lindavista CDMX — zona residencial",
    "meta_description": "Zona residencial tranquila. Punto de tránsito L6. Barrio auténtico. Guía MetroGuia.",
    "h1": "Metro Lindavista: la colonia residencial del norte",
    "intro": "Estación residencial en Gustavo A. Madero, punto de tránsito en la Línea 6. Zona tranquila y segura que refleja la vida cotidiana de los barrios residenciales del norte. Para turistas que quieren experiencias más auténticas fuera del circuito turístico central.",
    "historia_icono": "El ícono representa el barrio de Lindavista, zona residencial que creció como suburbio de CDMX en el siglo XX.",
    "tips": [
      "Zona residencial tranquila, segura para turistas",
      "Menos aglomeración que estaciones centrales (ideal si viajas sin prisa)",
      "Tiendas de conveniencia y servicios locales",
      "Punto de paso hacia La Villa-Basílica sin bajar"
    ],
    "mejor_horario": "Todo el día. Muy tranquilo en semana.",
    "mundial_relevancia": "Zona recomendada para alojamiento de turistas del Mundial 2026.",
    "descripcion_turistica": "Estación Lindavista en barrio residencial del norte. Zona tranquila con escuelas y comercios. Para turistas FIFA 2026 buscando descanso en ambiente familiar lejos de ruido del centro.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Acceso por escaleras. Señalización táctil disponible."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Parque Linares",
        "tipo": "Parque",
        "distancia": "300m",
        "descripcion": "Parque verde barrial con áreas de juego"
      },
      {
        "nombre": "Mercado Lindavista",
        "tipo": "Mercado",
        "distancia": "200m",
        "descripcion": "Mercado tradicional con comida y productos locales"
      },
      {
        "nombre": "Cafetería Punto de Encuentro",
        "tipo": "Café",
        "distancia": "250m",
        "descripcion": "Café con desayunos mexicanos e internacionales"
      }
    ]
  },
  {
    "slug": "deportivo-18-de-marzo-l6",
    "nombre": "Deportivo 18 de Marzo",
    "linea": "6",
    "alcaldia": "Gustavo A. Madero",
    "tipo_zona": "deportivo-residencial",
    "pois": [
      {
        "nombre": "Deportivo 18 de Marzo",
        "tipo": "estadio",
        "distancia": "2 min caminando"
      }
    ],
    "transferencias": [
      "3"
    ],
    "seo_title": "Metro Deportivo 18 Marzo CDMX — complejo deportivo",
    "meta_description": "Deportivo 18 de Marzo: complejo deportivo, estadio, albercas. Deporte mexicano. Guía MetroGuia.",
    "h1": "Metro Deportivo 18 de Marzo: transfer L3/L6",
    "intro": "Estación que da acceso al Deportivo 18 de Marzo, complejo deportivo importante con estadio, alberca, canchas y servicios deportivos. Punto de referencia para turistas interesados en deporte mexicano, fútbol amateur y recreación. Importante para el contexto del Mundial FIFA 2026.",
    "historia_icono": "El ícono representa el estadio y las instalaciones deportivas, símbolo de la tradición deportiva y comunitaria del norte de CDMX.",
    "tips": [
      "Deportivo 18 de Marzo: complejo deportivo con estadio, albercas, canchas",
      "Eventos deportivos locales, partidos de fútbol amateur y actividades recreativas",
      "Acceso a zona de entretenimiento familiar y deporte comunitario",
      "Ideal para turistas que quieren ver vida deportiva mexicana auténtica"
    ],
    "mejor_horario": "Fines de semana para eventos deportivos. Semana: entrenamientos y actividades menores.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial.",
    "descripcion_turistica": "Estación Deportivo 18 de Marzo accede a centro deportivo importante. Ideal para turistas FIFA 2026 interesados en instalaciones deportivas mexicanas y actividades recreativas.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Estación con rampa de acceso al complejo deportivo. Instalaciones deportivas adaptadas."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00. Más concurrida en fines de semana."
    },
    "lugares_cercanos": [
      {
        "nombre": "Complejo Deportivo 18 de Marzo",
        "tipo": "Centro Deportivo",
        "distancia": "100m",
        "descripcion": "Centro deportivo con piscinas, canchas y áreas de entrenamiento"
      },
      {
        "nombre": "Parque Deportivo",
        "tipo": "Parque",
        "distancia": "200m",
        "descripcion": "Espacios verdes anexos con áreas de descanso"
      },
      {
        "nombre": "Restaurante El Atleta",
        "tipo": "Restaurante",
        "distancia": "300m",
        "descripcion": "Comida saludable y mexicana para deportistas"
      }
    ]
  },
  {
    "slug": "la-villa-basilica",
    "nombre": "La Villa-Basílica",
    "linea": "6",
    "alcaldia": "Gustavo A. Madero",
    "tipo_zona": "religioso",
    "pois": [
      {
        "nombre": "Basílica de Guadalupe (nueva)",
        "tipo": "iglesia",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Antigua Basílica (s. XVIII)",
        "tipo": "iglesia",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Capilla del Cerrito y Capilla de las Rosas",
        "tipo": "iglesia",
        "distancia": "10 min caminando"
      },
      {
        "nombre": "Museo de la Basílica de Guadalupe",
        "tipo": "museo",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro La Villa-Basílica CDMX — Guadalupe",
    "meta_description": "Acceso directo Basílica de Guadalupe. Santuario religioso México. Peregrrinaje. Guía MetroGuia.",
    "h1": "Metro La Villa-Basílica: el santuario más visitado de América",
    "intro": "LA ESTACIÓN MÁS SAGRADA DE LA LÍNEA 6: acceso directo a la Basílica de Guadalupe, el santuario católico más importante de México y punto de peregrinación de millones anuales. Para turistas religiosos y culturales, La Villa es obligatoria. El significado espiritual de este lugar no tiene parangón en CDMX.",
    "historia_icono": "El ícono representa la Virgen de Guadalupe, patrona de México, símbolo máximo de la devoción religiosa mexicana y la identidad cultural del país.",
    "tips": [
      "Basílica de Guadalupe abierta 6am-10pm (visitas libres, donativos opcionales)",
      "Templo Expiatorio: iglesia más antigua (16th siglo) 100 metros al norte",
      "Mercado de artesanías y velas religiosas en los alrededores (buenas compras de souvenirs)",
      "Zona muy concurrida fines de semana y festividades; llegar temprano para comodidad"
    ],
    "mejor_horario": "Cualquier hora abierta. Menos concurrido lunes-jueves 8am-3pm.",
    "mundial_relevancia": "Visita espiritual y cultural imperdible para turistas del Mundial 2026. El sitio más visitado de México.",
    "descripcion_turistica": "La Villa-Basílica es parada obligatoria para turistas FIFA 2026. Acceso directo a la Basílica de Guadalupe, santuario más visitado de América Latina. Experiencia espiritual y cultural incomparable.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Estación completamente accesible con elevadores y rampas, diseñada para recibir multitud de peregrinos con diferentes necesidades."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00. Especialmente concurrida en días de peregrinación."
    },
    "lugares_cercanos": [
      {
        "nombre": "Basílica de Guadalupe",
        "tipo": "Santuario",
        "distancia": "150m",
        "descripcion": "Basílica dedicada a la Virgen de Guadalupe. Santuario más visitado de América Latina, centro de fe mexicana."
      },
      {
        "nombre": "Parque Céntrico de la Villa",
        "tipo": "Parque",
        "distancia": "200m",
        "descripcion": "Plaza abierta con vistas a la Basílica, espacio para descansar"
      },
      {
        "nombre": "Mercado de Alimentos La Villa",
        "tipo": "Mercado",
        "distancia": "300m",
        "descripcion": "Mercado con alimentos frescos y comidas típicas del norte de CDMX"
      },
      {
        "nombre": "Restaurante El Encuentro",
        "tipo": "Restaurante",
        "distancia": "250m",
        "descripcion": "Comida mexicana tradicional, ambiente familiar"
      }
    ]
  },
  {
    "slug": "martin-carrera-l6",
    "nombre": "Martín Carrera",
    "linea": "6",
    "alcaldia": "Gustavo A. Madero",
    "tipo_zona": "residencial-transporte",
    "pois": [
      {
        "nombre": "Autobuses zona norte",
        "tipo": "transporte",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [
      "4"
    ],
    "seo_title": "Metro Martín Carrera CDMX — terminal L6 norte",
    "meta_description": "Terminal norte Línea 6. Extremo norte metro CDMX. CETRAM a EDOMEX. Guía MetroGuia.",
    "h1": "Metro Martín Carrera: transfer L4/L6 en el norte",
    "intro": "Martín Carrera es la terminal norte de la Línea 6, extremo final del corredor norte-sur de esta línea. Zona residencial de Gustavo A. Madero que marca el límite norte del metro de CDMX. Desde aquí, turistas pueden tomar autobuses hacia municipios del Estado de México o explorar la periferia norte.",
    "historia_icono": "El ícono representa a Martín Carrera, personaje histórico de la época colonial o revolucionaria asociado con esta zona del norte.",
    "tips": [
      "Terminal norte L6: última parada antes de salir del metro de CDMX",
      "CETRAM con autobuses a municipios Estado de México (Ecatepec, Coacalco, etc.)",
      "Zona residencial tranquila, menos turística que centro",
      "Punto de inicio/fin para turistas recorriendo la L6 de norte a sur"
    ],
    "mejor_horario": "Todo el día. Evitar horas pico si buscas comodidad.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial.",
    "descripcion_turistica": "Estación Martín Carrera, terminal norte de Línea 6. Zona residencial tranquila. Punto de conexión para turistas FIFA 2026 que exploran áreas alejadas del centro con auténtica vida capitalina.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Estación terminal con rampa de acceso. Escaleras sin elevador."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Parque Martín Carrera",
        "tipo": "Parque",
        "distancia": "200m",
        "descripcion": "Parque barrial con áreas verdes y espacios de recreación"
      },
      {
        "nombre": "Mercado Martín Carrera",
        "tipo": "Mercado",
        "distancia": "150m",
        "descripcion": "Mercado tradicional con productos locales y comida auténtica"
      },
      {
        "nombre": "Restaurante Casa de Don Pedro",
        "tipo": "Restaurante",
        "distancia": "250m",
        "descripcion": "Comida mexicana casera en ambiente familiar"
      }
    ]
  },
  {
    "slug": "el-rosario-l7",
    "nombre": "El Rosario",
    "linea": "7",
    "alcaldia": "Azcapotzalco",
    "tipo_zona": "transporte",
    "pois": [
      {
        "nombre": "CETRAM El Rosario",
        "tipo": "transporte",
        "distancia": "2 min caminando"
      }
    ],
    "transferencias": [
      "6"
    ],
    "seo_title": "Metro El Rosario CDMX — Terminal L6 y L7 | MetroGuia",
    "meta_description": "El Rosario: terminal de Líneas 6 y 7, CETRAM más grande del norte. Conexión directa al Estado de México. Guía para turistas del Mundial 2026.",
    "h1": "Metro El Rosario: terminal norte de dos líneas",
    "intro": "El Rosario es el gran terminus del norte poniente de CDMX, donde confluyen la Línea 6 y la Línea 7 junto al CETRAM más grande de toda la zona metropolitana. Desde aquí parten autobuses a Naucalpan, Tlalnepantla y toda la zona industrial del Estado de México. Para turistas del Mundial 2026 que se hospedan en la periferia norte, esta estación es la puerta de entrada al sistema de metro capitalino.",
    "historia_icono": "El ícono representa una rosa, haciendo referencia a la Basílica de Guadalupe y la advocación mariana presente en el nombre del barrio. El Rosario es también uno de los barrios más antiguos de Azcapotzalco, con raíces coloniales del siglo XVII.",
    "tips": [
      "Es terminal simultánea de L6 y L7 — identifica bien tu línea antes de subir",
      "El CETRAM conecta con autobuses frecuentes a Naucalpan y Tlalnepantla cada 5-10 min",
      "Evita horas pico (7-9 AM y 6-8 PM) — la afluencia es muy alta",
      "Hay estacionamiento disponible si vienes en auto desde el Estado de México",
      "Kioscos de comida económica en el exterior del CETRAM"
    ],
    "mejor_horario": "Cualquier horario fuera de horas pico. Mañanas entre semana después de las 10 AM son las más tranquilas.",
    "mundial_relevancia": "Punto de entrada al metro para turistas hospedados en el área metropolitana norte (Naucalpan, Tlalnepantla). Desde aquí se toma L7 hacia el centro para conectar con rutas al Estadio Azteca.",
    "descripcion_turistica": "El Rosario Línea 7, terminal occidental. Zona residencial e industrial. Acceso a áreas auténticas del occidente de CDMX. Ideal para turistas FIFA 2026 buscando explorar más allá del circuito turístico central.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Estación terminal con rampa de acceso. Escaleras sin elevador."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Parque Tezozomoc",
        "tipo": "Parque",
        "distancia": "1km",
        "descripcion": "Uno de los mayores parques de CDMX con ciclovía y lagos"
      },
      {
        "nombre": "Mercado El Rosario",
        "tipo": "Mercado",
        "distancia": "300m",
        "descripcion": "Mercado tradicional con comida y artesanías"
      },
      {
        "nombre": "Restaurante Casa Abierta",
        "tipo": "Restaurante",
        "distancia": "250m",
        "descripcion": "Comida mexicana auténtica"
      }
    ]
  },
  {
    "slug": "aquiles-serdan",
    "nombre": "Aquiles Serdán",
    "linea": "7",
    "alcaldia": "Azcapotzalco",
    "tipo_zona": "residencial",
    "pois": [],
    "transferencias": [],
    "seo_title": "Metro Aquiles Serdán CDMX — Barrio obrero Azcapotzalco | MetroGuia",
    "meta_description": "Metro Aquiles Serdán, zona residencial auténtica de Azcapotzalco. Historia revolucionaria, mercados locales y ambiente tranquilo. Línea 7 CDMX.",
    "h1": "Metro Aquiles Serdán: barrio residencial de Azcapotzalco",
    "intro": "Aquiles Serdán es una estación de tránsito en la zona residencial de Azcapotzalco, nombrada en honor al mártir revolucionario que fue uno de los primeros en levantarse contra el régimen de Díaz en 1910. La zona que rodea esta estación es un barrio obrero tranquilo con mercados locales auténticos y comercio popular que muy pocos turistas conocen.",
    "historia_icono": "El ícono representa el retrato estilizado de Aquiles Serdán, héroe de la Revolución Mexicana fusilado en 1910 en Puebla. Su figura simboliza el inicio del movimiento armado que transformó México en el siglo XX.",
    "tips": [
      "Zona tranquila ideal para explorar la CDMX auténtica fuera del circuito turístico",
      "Mercado local con productos frescos y comida económica",
      "Distancia caminable entre estaciones El Rosario y Camarones para conocer el barrio",
      "Azcapotzalco tiene historia industrial interesante — antiguamente aquí estaba la refinería PEMEX",
      "Área segura y con servicios básicos completos"
    ],
    "mejor_horario": "Cualquier momento del día. Fines de semana son especialmente tranquilos y propicios para explorar el barrio.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial FIFA 2026. Útil como estación intermedia en trayectos norte-sur por la Línea 7.",
    "descripcion_turistica": "Estación Aquiles Serdán en zona residencial occidente. Barrio tranquilo con comercios locales. Para turistas FIFA 2026 que desean alejarse del ruido central y experimentar CDMX real.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Acceso por escaleras. Señalización táctil disponible."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Mercado Aquiles Serdán",
        "tipo": "Mercado",
        "distancia": "200m",
        "descripcion": "Mercado local con alimentos frescos y comida típica"
      },
      {
        "nombre": "Tianguis Tradicional",
        "tipo": "Mercado",
        "distancia": "300m",
        "descripcion": "Tianguis de fin de semana con productos diversos"
      },
      {
        "nombre": "Cafetería Local",
        "tipo": "Café",
        "distancia": "250m",
        "descripcion": "Café con pasteles mexicanos y desayunos"
      }
    ]
  },
  {
    "slug": "camarones",
    "nombre": "Camarones",
    "linea": "7",
    "alcaldia": "Azcapotzalco",
    "tipo_zona": "industrial-residencial",
    "pois": [],
    "transferencias": [],
    "seo_title": "Metro Camarones CDMX — Historia lacustre de Azcapotzalco | MetroGuia",
    "meta_description": "Metro Camarones en Azcapotzalco, recuerda los canales prehispánicos de la ciudad lacustre. Zona industrial auténtica. Línea 7 del Metro CDMX.",
    "h1": "Metro Camarones: zona industrial de Azcapotzalco",
    "intro": "Camarones es una estación que marca la transición entre la zona industrial de Azcapotzalco y los barrios residenciales populares del norte de la Ciudad de México. El nombre evoca los tiempos en que el Canal de los Camarones atravesaba esta zona lacustre prehispánica. Hoy es un corredor de transición con pequeños comercios y talleres mecánicos que reflejan el carácter obrero de la alcaldía.",
    "historia_icono": "El ícono representa un camarón, evocando el antiguo Canal de los Camarones que existía en esta zona cuando era un lago. El lago de Texcoco y sus canales cubrían gran parte de lo que hoy es el norte de la CDMX.",
    "tips": [
      "Zona de transición industrial-residencial, tranquila entre semana",
      "Pequeños talleres y comercios locales típicos del México obrero",
      "Buena conexión entre El Rosario y zonas más céntricas de L7",
      "Azcapotzalco tiene varios museos industriales — pregunta en la alcaldía",
      "Evita llevar objetos de valor visibles en zonas industriales"
    ],
    "mejor_horario": "Horario regular. Entre semana hay menos afluencia que en horas pico.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial FIFA 2026.",
    "descripcion_turistica": "Estación Camarones en zona residencial del occidente. Barrio tranquilo lejos del centro turístico. Perfecta para turistas FIFA 2026 buscando experiencia auténtica en colonias residenciales.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Acceso por escaleras. Piso táctil presente."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Parque Residencial",
        "tipo": "Parque",
        "distancia": "300m",
        "descripcion": "Parque barrial con áreas verdes"
      },
      {
        "nombre": "Mercado Camarones",
        "tipo": "Mercado",
        "distancia": "200m",
        "descripcion": "Mercado tradicional con productos locales"
      },
      {
        "nombre": "Restaurante Doña Rosa",
        "tipo": "Restaurante",
        "distancia": "250m",
        "descripcion": "Comida casera mexicana"
      }
    ]
  },
  {
    "slug": "refineria",
    "nombre": "Refinería",
    "linea": "7",
    "alcaldia": "Azcapotzalco",
    "tipo_zona": "industrial",
    "pois": [
      {
        "nombre": "Ex-Refinería 18 de Marzo (zona industrial histórica)",
        "tipo": "monumento",
        "distancia": "10 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Refinería CDMX — Historia petrolera de México | MetroGuia",
    "meta_description": "Metro Refinería, homenaje a la expropiación petrolera de 1938. Zona industrial histórica en Azcapotzalco. Línea 7 del Metro CDMX.",
    "h1": "Metro Refinería: la historia del petróleo mexicano",
    "intro": "La estación Refinería lleva el nombre de la histórica Refinería 18 de Marzo de PEMEX, símbolo de la expropiación petrolera de 1938 con la que el presidente Lázaro Cárdenas nationalizó la industria del petróleo en México. Aunque la refinería ya no opera en el área, la zona sigue siendo de carácter industrial con una identidad obrera profundamente arraigada.",
    "historia_icono": "El ícono representa una torre de refinería petrolera, commemorando la histórica expropiación petrolera del 18 de marzo de 1938. Ese día Cárdenas expropió las empresas extranjeras, y México celebra el Día de la Expropiación Petrolera cada año en esa fecha.",
    "tips": [
      "La historia de PEMEX y la expropiación petrolera es fascinante — busca el Museo del Petróleo en el Bosque de Chapultepec",
      "Zona industrial en transformación hacia usos habitacionales",
      "Conecta en minutos con el nodo de Tacuba (L2) y El Rosario",
      "Área tranquila fuera de horas de entrada y salida de trabajadores",
      "Ofrece acceso a barrios populares auténticos de Azcapotzalco"
    ],
    "mejor_horario": "Cualquier horario fuera de las 7-9 AM y 5-7 PM para evitar flujos de trabajadores.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial FIFA 2026.",
    "descripcion_turistica": "Estación Refinería en zona industrial histórica del poniente. Nombre refleja herencia industrial mexicana. Para turistas FIFA 2026 interesados en industria y historia económica del país.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Acceso por escaleras. Piso táctil disponible."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Zona Industrial",
        "tipo": "Zona Industrial",
        "distancia": "300m",
        "descripcion": "Área con fábricas e industrias"
      },
      {
        "nombre": "Mercado Industrial",
        "tipo": "Mercado",
        "distancia": "250m",
        "descripcion": "Comercios y comida para trabajadores"
      },
      {
        "nombre": "Restaurante El Trabajador",
        "tipo": "Restaurante",
        "distancia": "300m",
        "descripcion": "Comida tradicional y asequible"
      }
    ]
  },
  {
    "slug": "tacuba",
    "nombre": "Tacuba",
    "linea": "7",
    "alcaldia": "Miguel Hidalgo",
    "tipo_zona": "historico-residencial",
    "pois": [
      {
        "nombre": "Estación Ferroviaria Tacuba (histórica)",
        "tipo": "monumento",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Museo del Ferrocarril",
        "tipo": "museo",
        "distancia": "8 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Tacuba CDMX — Centro comercial | MetroGuia",
    "meta_description": "Tacuba: estación comercial en Miguel Hidalgo. Mercados, tiendas y gastronomía local.",
    "h1": "Metro Tacuba: historia colonial y ferroviaria",
    "intro": "Tacuba es una estación comercial ubicada en Miguel Hidalgo, ofreciendo acceso a mercados tradicionales, tiendas y restaurantes locales. La zona es vibrante y auténtica, perfecta para experimentar la vida comercial de CDMX.",
    "historia_icono": "Tacuba proviene del náhuatl 'tlacopan', uno de los grandes centros comerciales de la época prehispánica.",
    "tips": [
      "Mercado tradicional de alimentos frescos",
      "Tiendas locales y artesanía",
      "Gastronomía típica mexicana",
      "Zona concurrida y auténtica"
    ],
    "mejor_horario": "Mañana para ver el mercado en movimiento.",
    "mundial_relevancia": "Sin relevancia directa para partidos.",
    "descripcion_turistica": "Estación histórica en el barrio antiguo de Tacuba, uno de los primeros asentamientos de la Ciudad de México. Acceso a calles coloniales, tiendas tradicionales y vida local auténtica. Perfecto para turistas que buscan la Mexico City histórica durante el World Cup 2026.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Acceso mediante rampas. Señalización táctil. Estación histórica con infraestructura básica pero funcional."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierre 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "Barrio de Tacuba",
        "tipo": "Zona histórica",
        "distancia": "0m",
        "descripcion": "Barrio prehispánico con calles coloniales. Comercio tradicional, tiendas locales y auténtica vida chilanga."
      },
      {
        "nombre": "Templo de San Francisco",
        "tipo": "Iglesia colonial",
        "distancia": "300m",
        "descripcion": "Convento del siglo XVI, uno de los primeros edificios religiosos de la Nueva España. Abierto para visitantes."
      },
      {
        "nombre": "Museo de la Ciudad de México",
        "tipo": "Museo histórico",
        "distancia": "600m",
        "descripcion": "Ubicado en Palacio de los Condes de Santiago de Calimaya. Historia de Mexico City desde época prehispánica. Entrada: $50 MXN."
      },
      {
        "nombre": "Mercado de Artesanías",
        "tipo": "Mercado tradicional",
        "distancia": "200m",
        "descripcion": "Mercado local con textiles, cerámica y artesanías mexicanas auténticas. Precios más económicos que Reforma."
      }
    ]
  },
  {
    "slug": "san-joaquin",
    "nombre": "San Joaquín",
    "linea": "7",
    "alcaldia": "Miguel Hidalgo",
    "tipo_zona": "residencial-comercial",
    "pois": [
      {
        "nombre": "Centro Comercial Punto Polanco",
        "tipo": "comercial",
        "distancia": "10 min caminando"
      },
      {
        "nombre": "Museo Jumex (acceso)",
        "tipo": "museo",
        "distancia": "15 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro San Joaquín CDMX — Acceso a Polanco y Museo Jumex | MetroGuia",
    "meta_description": "Metro San Joaquín: acceso a Polanco, Museo Jumex y arte contemporáneo. Alternativa tranquila para visitar el barrio más elegante de CDMX.",
    "h1": "Metro San Joaquín: puerta poniente a Polanco",
    "intro": "San Joaquín es la puerta trasera al elegante barrio de Polanco y al corredor de arte contemporáneo más importante de México. A pocos metros se encuentra el Museo Jumex, institución privada de arte contemporáneo reconocida internacionalmente, y a unos minutos caminando el Museo Soumaya y las boutiques de Presidente Masaryk. Una opción menos concurrida que la estación Polanco para acceder a la misma zona.",
    "historia_icono": "El ícono representa la iglesia de San Joaquín, edificio colonial que da nombre a la colonia homónima. San Joaquín es el padre de la Virgen María en la tradición católica, y su devoción se extendió por toda la Nueva España durante la evangelización.",
    "tips": [
      "Museo Jumex: entrada general $80 MXN, uno de los mejores museos de arte contemporáneo de Latinoamérica",
      "Acceso menos saturado a Polanco que la estación del mismo nombre",
      "Presidente Masaryk: el 'Champs-Élysées mexicano' con tiendas de lujo",
      "Parque América: espacio verde para descansar entre museos",
      "Taxis y Uber son abundantes en la zona — ideal para continuar tour"
    ],
    "mejor_horario": "Martes a domingo 10 AM–6 PM para los museos. La zona es agradable todo el día.",
    "mundial_relevancia": "Alta relevancia para turistas del Mundial 2026: Polanco concentra los mejores hoteles de la ciudad (Camino Real, JW Marriott, St. Regis, Presidente InterContinental). Muchas delegaciones y aficionados adinerados se hospedarán en esta zona.",
    "descripcion_turistica": "Estación San Joaquín en zona residencial del occidente. Barrio tranquilo con servicios locales. Ideal para turistas FIFA 2026 que buscan hospedaje en zona segura y accesible a metro.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Acceso por escaleras. Piso táctil disponible."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Colonia San Joaquín",
        "tipo": "Zona Residencial",
        "distancia": "200m",
        "descripcion": "Zona residencial segura y tranquila"
      },
      {
        "nombre": "Mercado San Joaquín",
        "tipo": "Mercado",
        "distancia": "250m",
        "descripcion": "Mercado local con productos frescos"
      },
      {
        "nombre": "Restaurante Casa del Barrio",
        "tipo": "Restaurante",
        "distancia": "300m",
        "descripcion": "Comida mexicana casera"
      }
    ]
  },
  {
    "slug": "polanco",
    "nombre": "Polanco",
    "linea": "7",
    "alcaldia": "Miguel Hidalgo",
    "tipo_zona": "comercial-residencial",
    "pois": [
      {
        "nombre": "Presidente InterContinental Hotel",
        "tipo": "hotel",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Antara Fashion Hall",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Restaurantes de autor (Pujol, Quintonil)",
        "tipo": "restaurante",
        "distancia": "10-15 min caminando"
      },
      {
        "nombre": "Museo Soumaya (Plaza Carso)",
        "tipo": "museo",
        "distancia": "15 min caminando"
      },
      {
        "nombre": "Parque Lincoln",
        "tipo": "parque",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Polanco CDMX — Lujo, gastronomía y Chapultepec | MetroGuia",
    "meta_description": "Metro Polanco: puerta al barrio más elegante de CDMX. Pujol, Museo Soumaya, hoteles 5 estrellas. Esencial para el Mundial FIFA 2026.",
    "h1": "Metro Polanco: el barrio más cosmopolita de CDMX",
    "intro": "Polanco es el barrio más cosmopolita, lujoso y gastronómico de la Ciudad de México. La estación da acceso directo al Paseo de la Reforma, al Bosque de Chapultepec, a dos de los mejores restaurantes del mundo (Pujol ocupa el lugar #13 en la lista World's 50 Best), y a los mejores hoteles de la ciudad. Para el Mundial FIFA 2026, Polanco será el corazón de la actividad turística premium.",
    "historia_icono": "El ícono representa un búho, símbolo de sabiduría asociado a la colonia Polanco cuyo desarrollo urbanístico moderno inició en los años 1940. El búho también evoca la naturaleza de Chapultepec — 'cerro del chapulín' en náhuatl — bosque adyacente a la colonia.",
    "tips": [
      "Pujol (top 15 mundial) y Quintonil (top 30) requieren reserva con 2-3 meses de anticipación vía su sitio web",
      "Museo Soumaya en Plaza Carso: GRATUITO y con obras de Rodin, El Greco y Dalí",
      "Av. Presidente Masaryk: peatonal los domingos para mercado de artesanías",
      "Parque Lincoln: ambiente familiar con tianguis de antigüedades los domingos",
      "Uber y taxis de plataforma son seguros y abundantes en toda la zona"
    ],
    "mejor_horario": "Cualquier día. Domingos en Masaryk peatonal son especiales. Tardes-noches para la escena gastronómica.",
    "mundial_relevancia": "Zona CRÍTICA para el Mundial 2026: concentra los principales hoteles de lujo donde se hospedarán selecciones nacionales, directivos de FIFA y turistas de alto poder adquisitivo. Fan experience de alta gama en esta área.",
    "descripcion_turistica": "Polanco es el corazón de la CDMX de lujo. Barrio exclusivo con museos de clase mundial, restaurantes gourmet y arquitectura sofisticada. Parada obligatoria para turistas FIFA 2026 que desean experiencia premium.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Estación completamente accesible con elevadores. Zona comercial de lujo completamente adaptada."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Museo Jumex",
        "tipo": "Museo de Arte",
        "distancia": "300m",
        "descripcion": "Museo contemporáneo con exposiciones de arte moderno y contemporáneo"
      },
      {
        "nombre": "Museo Tamayo",
        "tipo": "Museo de Arte",
        "distancia": "400m",
        "descripcion": "Museo de arte contemporáneo en edificio arquitectónico icónico"
      },
      {
        "nombre": "Zona Comercial Polanco",
        "tipo": "Zona Comercial",
        "distancia": "200m",
        "descripcion": "Tiendas de marca mundial, joyerías y boutiques de diseñador"
      },
      {
        "nombre": "Restaurantes Gourmet",
        "tipo": "Restaurante",
        "distancia": "250m",
        "descripcion": "Restaurantes de chef reconocidos internacionalmente con cocina mexicana e internacional"
      },
      {
        "nombre": "Paseo de Madera",
        "tipo": "Zona Comercial",
        "distancia": "300m",
        "descripcion": "Eje comercial exclusivo con tiendas, cafés y galerías"
      }
    ]
  },
  {
    "slug": "auditorio",
    "nombre": "Auditorio",
    "linea": "7",
    "alcaldia": "Miguel Hidalgo",
    "tipo_zona": "cultural",
    "pois": [
      {
        "nombre": "Auditorio Nacional",
        "tipo": "teatro",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Bosque de Chapultepec (acceso norte)",
        "tipo": "parque",
        "distancia": "10 min caminando"
      },
      {
        "nombre": "Museo Tamayo Arte Contemporáneo",
        "tipo": "museo",
        "distancia": "10 min caminando"
      },
      {
        "nombre": "Lago del Bosque de Chapultepec",
        "tipo": "parque",
        "distancia": "15 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Auditorio CDMX — Auditorio Nacional y Chapultepec | MetroGuia",
    "meta_description": "Metro Auditorio: acceso al Auditorio Nacional, Bosque de Chapultepec norte y Museo Tamayo. Zona cultural premium del Paseo de la Reforma.",
    "h1": "Metro Auditorio: música, arte y el bosque urbano más grande de CDMX",
    "intro": "La estación Auditorio ofrece acceso privilegiado a tres íconos de la Ciudad de México en menos de 10 minutos a pie: el Auditorio Nacional (el mejor recinto de conciertos de México), el acceso norte al Bosque de Chapultepec, y el Museo Tamayo Arte Contemporáneo. Para turistas del Mundial 2026, esta zona combina cultura, naturaleza urbana y entretenimiento en una ubicación inmejorable sobre el Paseo de la Reforma.",
    "historia_icono": "El ícono representa el Auditorio Nacional con su característica forma arquitectónica. Inaugurado en 1952, el 'Coloso de Reforma' ha sido escenario de los conciertos más importantes de la historia de México y Latinoamérica.",
    "tips": [
      "Auditorio Nacional: revisa cartelera en Ticketmaster — siempre hay conciertos de talla mundial",
      "Museo Tamayo: entrada libre los domingos, colección permanente de arte contemporáneo internacional",
      "Bosque de Chapultepec acceso norte: menos concurrido que el acceso principal de Chapultepec",
      "Paseo de la Reforma frente al Auditorio: ciclovia dominical desde las 8 AM",
      "Los museos de Chapultepec (Castillo, Antropología) quedan a 15-20 min caminando"
    ],
    "mejor_horario": "Martes a domingo. Domingos son ideales para la ciclovía. Noches con eventos en el Auditorio crean ambiente festivo único.",
    "mundial_relevancia": "Alta relevancia para el Mundial 2026: el Auditorio Nacional y la zona de Reforma serán puntos de encuentro de aficionados internacionales. El Paseo de la Reforma conecta directamente con zonas de hoteles y posibles Fan Zones.",
    "descripcion_turistica": "Estación Auditorio accede al Auditorio Nacional, escenario de conciertos y eventos. Zona cultural importante. Imprescindible para turistas FIFA 2026 interesados en música, arte y eventos especiales.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Estación completamente accesible. Auditorio Nacional con servicios completos de accesibilidad."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00. Mayor afluencia días de conciertos."
    },
    "lugares_cercanos": [
      {
        "nombre": "Auditorio Nacional",
        "tipo": "Sala de Conciertos",
        "distancia": "100m",
        "descripcion": "Auditorio de clase mundial para conciertos, ópera y eventos. Capacidad 10,000 personas."
      },
      {
        "nombre": "Museo Tamayo",
        "tipo": "Museo",
        "distancia": "200m",
        "descripcion": "Museo de arte contemporáneo anexo"
      },
      {
        "nombre": "Paseo de la Reforma",
        "tipo": "Avenida",
        "distancia": "300m",
        "descripcion": "Eje principal de CDMX con tiendas, restaurantes y museos"
      },
      {
        "nombre": "Bosque de Chapultepec",
        "tipo": "Parque",
        "distancia": "500m",
        "descripcion": "Acceso a uno de los parques más grandes y famosos de Latinoamérica"
      }
    ]
  },
  {
    "slug": "constituyentes",
    "nombre": "Constituyentes",
    "linea": "7",
    "alcaldia": "Miguel Hidalgo",
    "tipo_zona": "residencial-cultural",
    "pois": [
      {
        "nombre": "Bosque de Chapultepec (segunda sección)",
        "tipo": "parque",
        "distancia": "10 min caminando"
      },
      {
        "nombre": "Papalote Museo del Niño",
        "tipo": "museo",
        "distancia": "15 min caminando"
      },
      {
        "nombre": "Museo Tecnológico CONACYT",
        "tipo": "museo",
        "distancia": "15 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Constituyentes CDMX — Chapultepec 2a sección | MetroGuia",
    "meta_description": "Metro Constituyentes: acceso a Papalote Museo del Niño y segunda sección del Bosque de Chapultepec. Zona verde para familias en CDMX.",
    "h1": "Metro Constituyentes: la segunda sección de Chapultepec",
    "intro": "Constituyentes es la puerta más tranquila al Bosque de Chapultepec, específicamente a su segunda sección donde se encuentran el Papalote Museo del Niño, el Museo Tecnológico de la CFE, la Casa del Lago y amplias áreas verdes menos concurridas que la primera sección. La avenida Constituyentes es también un eje viario importante que conecta Polanco con Santa Fe.",
    "historia_icono": "El ícono representa el Congreso Constituyente de 1917, referencia al proceso que dio lugar a la Constitución Política de México vigente hasta hoy. La Constitución de 1917 fue una de las primeras en el mundo en incluir derechos sociales como trabajo y educación.",
    "tips": [
      "Papalote Museo del Niño: ideal para familias, entrada ~$250 MXN adultos",
      "Segunda sección de Chapultepec: menos concurrida, perfecta para caminatas y picnic",
      "Lago de Chapultepec: renta de lanchas disponible",
      "Casa del Lago: eventos culturales y conciertos frecuentemente gratuitos",
      "Los fines de semana la zona se llena de familias capitalinas — ambiente festivo auténtico"
    ],
    "mejor_horario": "Fines de semana para el ambiente familiar. Martes a viernes para menor afluencia en museos.",
    "mundial_relevancia": "Relevancia media para el Mundial 2026: Chapultepec en general será destino turístico para aficionados. La segunda sección es ideal para un día de descanso entre partidos.",
    "descripcion_turistica": "Estación Constituyentes es puerta de acceso al Bosque de Chapultepec y sus museos de clase mundial. Zona cultural y recreativa imprescindible para turistas FIFA 2026.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Estación completamente accesible. Bosque de Chapultepec completamente adaptado para visitantes."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Bosque de Chapultepec",
        "tipo": "Parque",
        "distancia": "200m",
        "descripcion": "Parque histórico de 1,695 hectáreas con museos, castillo y lagos"
      },
      {
        "nombre": "Castillo de Chapultepec",
        "tipo": "Monumento Histórico",
        "distancia": "500m",
        "descripcion": "Castillo presidencial del siglo XIX con vistas panorámicas de CDMX"
      },
      {
        "nombre": "Museo Nacional de Historia",
        "tipo": "Museo",
        "distancia": "600m",
        "descripcion": "Museo dentro del Castillo con historia mexicana desde conquista a época contemporánea"
      },
      {
        "nombre": "Museo de Arte Moderno",
        "tipo": "Museo",
        "distancia": "400m",
        "descripcion": "Museo de arte mexicano moderno y contemporáneo"
      }
    ]
  },
  {
    "slug": "tacubaya-l7",
    "nombre": "Tacubaya",
    "linea": "7",
    "alcaldia": "Miguel Hidalgo",
    "tipo_zona": "transporte",
    "pois": [
      {
        "nombre": "CETRAM Tacubaya",
        "tipo": "transporte",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "Liverpool Insurgentes",
        "tipo": "comercial",
        "distancia": "10 min caminando"
      }
    ],
    "transferencias": [
      "1",
      "9"
    ],
    "seo_title": "Metro Tacubaya L7 CDMX — Hub de 3 líneas poniente | MetroGuia",
    "meta_description": "Metro Tacubaya en Línea 7: nodo de transferencia con L1, L7 y L9. CETRAM hacia Santa Fe y Álvaro Obregón. Guía para el Mundial FIFA 2026.",
    "h1": "Metro Tacubaya: el gran hub del poniente",
    "intro": "Tacubaya en la Línea 7 forma parte del nodo de transferencia más importante del poniente capitalino, donde convergen tres líneas del metro (L1, L7 y L9). El CETRAM de Tacubaya conecta con decenas de rutas de microbús hacia toda la zona de Álvaro Obregón, Santa Fe y el corredor Insurgentes Sur. Es también acceso a la Colonia Escandón y a varios hospitales y centros comerciales de la zona.",
    "historia_icono": "El ícono representa el glifo prehispánico de Tacubaya, una ciudad importante del período posclásico conocida como 'Atlacuihuayan' en náhuatl, que significa 'lugar donde se toma el agua'. La región fue proveedor de agua potable para la antigua Tenochtitlán.",
    "tips": [
      "Nodo de transfer entre L1, L7 y L9 — identifica bien tu línea",
      "CETRAM con microbuses a toda la zona poniente de CDMX y Santa Fe",
      "Alta afluencia — guarda bien tus pertenencias en horas pico",
      "Acceso a hospitales importantes de la zona: ABC, Mocel",
      "Colonia Escandón cercana: barrio bohemio con restaurantes y cafés"
    ],
    "mejor_horario": "Evita 7-9 AM y 6-8 PM. Mejor entre 10 AM y 5 PM para conexiones cómodas.",
    "mundial_relevancia": "Relevante para el Mundial 2026 como nodo de conexión. Desde Tacubaya se puede ir hacia el sur (L9 hacia el Estadio Azteca vía otras transferencias) o hacia el centro.",
    "descripcion_turistica": "Estación Tacubaya Línea 7 en zona histórica del occidente. Conexión con otras líneas y acceso a barrios culturales. Para turistas FIFA 2026 buscando explorar occidente de la ciudad.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Estación intermodal con rampa de acceso. Conexión con Línea 1 accesible."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Barrio Histórico Tacubaya",
        "tipo": "Zona Histórica",
        "distancia": "300m",
        "descripcion": "Zona colonial con arquitectura tradicional mexicana"
      },
      {
        "nombre": "Mercado Tacubaya",
        "tipo": "Mercado",
        "distancia": "250m",
        "descripcion": "Mercado tradicional con comida y artesanías"
      },
      {
        "nombre": "Restaurante Casa Tradicional",
        "tipo": "Restaurante",
        "distancia": "200m",
        "descripcion": "Comida mexicana auténtica en casa colonial"
      }
    ]
  },
  {
    "slug": "san-pedro-de-los-pinos",
    "nombre": "San Pedro de los Pinos",
    "linea": "7",
    "alcaldia": "Benito Juárez",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Colonia San Pedro de los Pinos",
        "tipo": "parque",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro San Pedro de los Pinos CDMX — Naturaleza y Tranquilidad",
    "meta_description": "Estación San Pedro de los Pinos: Zona arbolada tranquila, parques verdes y ambiente sereno. Escape natural en el corazón de CDMX.",
    "h1": "Metro San Pedro de los Pinos: colonia residencial tranquila",
    "intro": "San Pedro de los Pinos es una estación que te conecta con una zona arbolada y tranquila, perfecta para turistas que buscan verdor y aire fresco en la ciudad. El barrio es principalmente residencial, con calles bordeadas de árboles y un ambiente sereno. Encontrarás parques agradables para paseos, pequeñas tiendas, restaurantes locales y la sensación de estar en un oasis dentro de la metrópolis. Es ideal para familias y viajeros que quieren descansar.",
    "historia_icono": "El ícono representa pinos, que son los árboles característicos de esta zona. El símbolo muestra agujas de pino o la forma característica del árbol, haciendo referencia directa al ambiente arbolado y la naturaleza que prevalece en el lugar.",
    "tips": [
      "Pasea por los parques arbolados para relajarte en la naturaleza",
      "Las mañanas son ideales para correr o hacer ejercicio en la zona",
      "Encuentra tiendas de conveniencia y panaderías para desayunos auténticos",
      "El ambiente es perfecto para fotógrafos en busca de escenas urbano-naturales",
      "Los cafés locales son acogedores y perfectos para trabajar remotamente"
    ],
    "mejor_horario": "Mañanas entre 07:00 y 12:00 para disfrutar del ambiente tranquilo. Los sábados y domingos todo el día ofrece paz.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial FIFA 2026.",
    "descripcion_turistica": "San Pedro de los Pinos es zona residencial exclusiva del occidente. Barrio tranquilo con casas históricas. Ideal para turistas FIFA 2026 buscando hospedaje en zona segura y residencial.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Acceso por escaleras. Piso táctil disponible."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Colonia San Pedro de los Pinos",
        "tipo": "Zona Residencial",
        "distancia": "200m",
        "descripcion": "Colonia exclusiva con casas de arquitectura tradicional mexicana"
      },
      {
        "nombre": "Parque San Pedro",
        "tipo": "Parque",
        "distancia": "300m",
        "descripcion": "Parque barrial verde y tranquilo"
      },
      {
        "nombre": "Restaurante Casa Boutique",
        "tipo": "Restaurante",
        "distancia": "250m",
        "descripcion": "Comida gourmet en casa colonial renovada"
      }
    ]
  },
  {
    "slug": "san-antonio",
    "nombre": "San Antonio",
    "linea": "7",
    "alcaldia": "Benito Juárez",
    "tipo_zona": "residencial-comercial",
    "pois": [
      {
        "nombre": "Perisur / CC Insurgentes (acceso)",
        "tipo": "comercial",
        "distancia": "20 min en metro"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro San Antonio CDMX — Arte y Cultura Local",
    "meta_description": "Estación San Antonio: Galerías de arte, cafeterías artesanales y tiendas independientes. Descubre la CDMX creativa y auténtica.",
    "h1": "Metro San Antonio: entre Del Valle y Mixcoac",
    "intro": "San Antonio es una estación que representa la dualidad de la CDMX moderna: combina espacios residenciales acogedores con comercio dinámico. La zona es conocida por sus tiendas boutique, cafeterías artesanales y galerías de arte independientes. Es ideal para turistas que buscan una experiencia más auténtica y menos turística, donde puedan interactuar con artistas locales y disfrutar de la cultura contemporánea mexicana.",
    "historia_icono": "El ícono representa a San Antonio, santo venerado en la tradición católica mexicana. Comúnmente se muestra con elementos religiosos o iconografía que refleja la devoción popular del lugar, conectando con las raíces culturales y espirituales de la zona.",
    "tips": [
      "Explora galerías de arte independientes que exhiben trabajo de artistas locales",
      "Las cafeterías locales sirven café de especialidad y repostería artesanal",
      "Mercados de artesanías donde puedes comprar souvenirs auténticos",
      "El área tiene un ambiente bohemio perfecto para fotógrafos y creadores",
      "Varios murales y arte urbano dignos de fotografiar"
    ],
    "mejor_horario": "Jueves a sábados entre 15:00 y 21:00 cuando la vida nocturna y cultural está en su apogeo. Las tardes de domingo son excelentes para un ambiente más relajado.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial FIFA 2026.",
    "descripcion_turistica": "San Antonio en zona residencial poniente. Barrio tranquilo con comercios locales. Perfecto para turistas FIFA 2026 buscando zona segura lejos del ajetreo central.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Acceso por escaleras. Señalización táctil presente."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Colonia San Antonio",
        "tipo": "Zona Residencial",
        "distancia": "200m",
        "descripcion": "Zona residencial tranquila y segura"
      },
      {
        "nombre": "Mercado San Antonio",
        "tipo": "Mercado",
        "distancia": "250m",
        "descripcion": "Mercado local con productos frescos"
      },
      {
        "nombre": "Restaurante Don Anselmo",
        "tipo": "Restaurante",
        "distancia": "300m",
        "descripcion": "Comida casera mexicana"
      }
    ]
  },
  {
    "slug": "mixcoac-l7",
    "nombre": "Mixcoac",
    "linea": "7",
    "alcaldia": "Benito Juárez",
    "tipo_zona": "residencial-transporte",
    "pois": [
      {
        "nombre": "Zona Arqueológica Mixcoac",
        "tipo": "museo",
        "distancia": "10 min caminando"
      },
      {
        "nombre": "World Trade Center México",
        "tipo": "comercial",
        "distancia": "15 min caminando"
      }
    ],
    "transferencias": [
      "12"
    ],
    "seo_title": "Metro Mixcoac CDMX — Zona arqueológica y Línea 12 | MetroGuia",
    "meta_description": "Metro Mixcoac en L7: zona arqueológica gratuita, transfer a Línea 12 y World Trade Center. Barrios Del Valle y Nápoles a pasos.",
    "h1": "Metro Mixcoac: transfer L7/L12 y zona arqueológica",
    "intro": "Mixcoac en la Línea 7 es un punto estratégico de conexión con la moderna Línea 12, la llamada 'Línea Dorada'. La zona de Mixcoac alberga una zona arqueológica prehispánica de acceso gratuito, el World Trade Center México, y se encuentra en la frontera entre las colonias Del Valle, Nápoles y San Pedro de los Pinos — barrios residenciales de clase media con buena oferta gastronómica.",
    "historia_icono": "El ícono representa la antigua pirámide de Mixcoac, dios prehispánico del viento también asociado con Quetzalcóatl. La zona arqueológica de Mixcoac, una de las menos visitadas de la CDMX, está a 5 minutos caminando de esta estación.",
    "tips": [
      "Zona Arqueológica de Mixcoac: GRATUITA y muy poco concurrida — joya escondida",
      "Transfer a L12 hacia Xochimilco y Tláhuac desde aquí",
      "World Trade Center: sede de exposiciones y convenciones internacionales",
      "Colonia Del Valle cercana: excelente oferta de restaurantes a precios accesibles",
      "Ciclovia de Insurgentes Sur pasa por aquí — ideal para ciclistas"
    ],
    "mejor_horario": "Cualquier día. La zona arqueológica cierra los lunes. Fines de semana para explorar los barrios.",
    "mundial_relevancia": "Relevancia media para el Mundial 2026: conexión con Línea 12 permite acceso al sur de la ciudad. El WTC puede ser sede de eventos paralelos al torneo.",
    "descripcion_turistica": "Estación Mixcoac en zona residencial sur. Nombre prehispánico (lugar de nube). Barrio con historia y comercios locales. Para turistas FIFA 2026 buscando explorar sur de CDMX auténtico.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Acceso por escaleras. Piso táctil disponible."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Barrio Mixcoac",
        "tipo": "Zona Histórica",
        "distancia": "200m",
        "descripcion": "Barrio con nombre prehispánico, zona residencial tradicional"
      },
      {
        "nombre": "Mercado Mixcoac",
        "tipo": "Mercado",
        "distancia": "250m",
        "descripcion": "Mercado tradicional con comida y productos locales"
      },
      {
        "nombre": "Parque Residencial",
        "tipo": "Parque",
        "distancia": "300m",
        "descripcion": "Parque barrial verde"
      },
      {
        "nombre": "Restaurante La Cocina de Abuela",
        "tipo": "Restaurante",
        "distancia": "280m",
        "descripcion": "Comida casera mexicana auténtica"
      }
    ]
  },
  {
    "slug": "barranca-del-muerto",
    "nombre": "Barranca del Muerto",
    "linea": "7",
    "alcaldia": "Álvaro Obregón",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Mercado de San Ángel (sábados)",
        "tipo": "mercado",
        "distancia": "10 min en bus"
      },
      {
        "nombre": "Pedregal de San Ángel (UNAM)",
        "tipo": "parque",
        "distancia": "20 min"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Barranca del Muerto CDMX — Reforma",
    "meta_description": "Estación Barranca del Muerto: Acceso a Paseo de la Reforma, tiendas y restaurantes. Zona residencial segura cerca de museos y cultura en CDMX.",
    "h1": "Metro Barranca del Muerto: terminal sur de L7",
    "intro": "Barranca del Muerto es una estación que conecta con una de las avenidas más importantes de la CDMX. La zona ofrece una mezcla de espacios residenciales y comerciales modernos, ideal para turistas que buscan alejarse del centro pero manteniéndose conectados con el transporte público. Aquí encontrarás centros comerciales, restaurantes variados y acceso fácil a museos de clase mundial como el Museo Tamayo y el Museo de Arte Moderno. Es la puerta de entrada a Chapultepec y sus alrededores.",
    "historia_icono": "El ícono representa una barranca o garganta profunda, referencia directa al nombre de la estación. Surge del significado prehispánico del lugar, donde se formaban barrancos naturales en el terreno. Este símbolo visualmente muestra un corte vertical del terreno, recordando la geografía original de la zona.",
    "tips": [
      "Acceso directo a Paseo de la Reforma, una de las avenidas más elegantes de la ciudad",
      "A pocos pasos encontrarás múltiples opciones de comida: desde taquerías auténticas hasta restaurantes de alta cocina",
      "La zona tiene ATMs y casas de cambio convenientemente ubicadas",
      "Conecta con varias líneas de metrobús si necesitas explorar zonas más amplias",
      "El área es segura y tiene buena iluminación, incluso de noche"
    ],
    "mejor_horario": "Viernes y sábados entre 10:00 y 18:00 para disfrutar de los restaurantes y tiendas sin exceso de gente. Por las tardes, el ambiente es más relajado que en horas pico de oficina.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial FIFA 2026.",
    "descripcion_turistica": "Barranca del Muerto, terminal sur de Línea 7. Zona residencial del sur. Acceso a barrios tradicionales. Para turistas FIFA 2026 explorando sur de la ciudad lejos del centro.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Estación terminal con rampa de acceso. Escaleras sin elevador."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Colonia Barranca del Muerto",
        "tipo": "Zona Residencial",
        "distancia": "200m",
        "descripcion": "Zona residencial sur con historia"
      },
      {
        "nombre": "Mercado Barranca",
        "tipo": "Mercado",
        "distancia": "250m",
        "descripcion": "Mercado tradicional con productos locales"
      },
      {
        "nombre": "Restaurante Casa del Sur",
        "tipo": "Restaurante",
        "distancia": "300m",
        "descripcion": "Comida sureña mexicana"
      }
    ]
  },
  {
    "slug": "garibaldi",
    "nombre": "Garibaldi/Lagunilla",
    "linea": "8",
    "alcaldia": "Cuauhtémoc",
    "tipo_zona": "cultural-nocturno",
    "pois": [
      {
        "nombre": "Plaza Garibaldi",
        "tipo": "cultural",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Mercado de Lagunilla",
        "tipo": "mercado",
        "distancia": "10 min caminando"
      },
      {
        "nombre": "Tepito",
        "tipo": "comercial",
        "distancia": "15 min caminando"
      }
    ],
    "transferencias": [
      "B"
    ],
    "seo_title": "Metro Garibaldi CDMX — Mariachis y Plaza Garibaldi | MetroGuia",
    "meta_description": "Metro Garibaldi: acceso a Plaza Garibaldi y mariachis, Mercado de Lagunilla. Experiencia nocturna mexicana auténtica. Esencial para el Mundial 2026.",
    "h1": "Estación Garibaldi/Lagunilla — Línea 8 del Metro CDMX",
    "intro": "Garibaldi/Lagunilla en la Línea 8 es la puerta a uno de los rincones más auténticos y nocturnos de la Ciudad de México. La Plaza Garibaldi, a 5 minutos caminando, es el templo mundial del mariachi donde cada noche docenas de grupos ofrecen serenatas. El Mercado de Lagunilla, con su ambiente de tianguis dominical de antigüedades, completa una experiencia 100% mexicana que ningún turista debe perderse.",
    "historia_icono": "El ícono representa a un mariachi con sombrero de charro, símbolo inequívoco de la Plaza Garibaldi y de la cultura popular mexicana. El mariachi fue declarado Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO en 2011.",
    "tips": [
      "Plaza Garibaldi es mejor de noche (8 PM–2 AM): el ambiente mariachero es máximo",
      "Una serenata en la plaza cuesta ~$150-300 MXN por canción — negocia con el grupo",
      "El Salón Tenampa (1925) es el bar de mariachis más histórico del mundo — imprescindible",
      "Mercado de Lagunilla: domingos para el tianguis de antigüedades y curiosidades",
      "Zona activa — mantén pertenencias seguras en zonas muy concurridas"
    ],
    "mejor_horario": "Viernes y sábados por la noche para el máximo ambiente. Domingo por la mañana para el tianguis de Lagunilla.",
    "mundial_relevancia": "Alta relevancia para el Mundial 2026: Garibaldi será uno de los destinos culturales más visitados por turistas FIFA en busca de experiencias mexicanas auténticas. Especialmente popular entre aficionados latinoamericanos.",
    "descripcion_turistica": "Garibaldi es IMPRESCINDIBLE para turistas FIFA 2026. Plaza de las Tradiciones Mexicanas con mariachis en vivo, cantinas tradicionales y ambiente de fiesta. Experiencia única de la CDMX nocturna.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Estación completamente accesible. Plaza Garibaldi con muchos bares y restaurantes accesibles."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00. Especialmente animada de noche."
    },
    "lugares_cercanos": [
      {
        "nombre": "Plaza Garibaldi",
        "tipo": "Plaza",
        "distancia": "50m",
        "descripcion": "Epicentro de tradición mariachi mexicana. Músicos en vivo, cantinas tradicionales, ambiente auténtico."
      },
      {
        "nombre": "Museo Templo Mayor",
        "tipo": "Museo Arqueológico",
        "distancia": "300m",
        "descripcion": "Templo azteca prehispánico, centro ceremonial de Tenochtitlán"
      },
      {
        "nombre": "Cantina El Tenampa",
        "tipo": "Cantina",
        "distancia": "100m",
        "descripcion": "Cantina icónica desde 1925 con mariachis en vivo"
      },
      {
        "nombre": "Mercado de Artesanías",
        "tipo": "Mercado",
        "distancia": "150m",
        "descripcion": "Artesanías mexicanas, souvenirs típicos"
      }
    ]
  },
  {
    "slug": "bellas-artes-l8",
    "nombre": "Bellas Artes",
    "linea": "8",
    "alcaldia": "Cuauhtémoc",
    "tipo_zona": "cultural",
    "pois": [
      {
        "nombre": "Palacio de Bellas Artes",
        "tipo": "museo",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "Museo Tamayo",
        "tipo": "museo",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Centro Histórico",
        "tipo": "cultural",
        "distancia": "3 min caminando"
      }
    ],
    "transferencias": [
      "2"
    ],
    "seo_title": "Metro Bellas Artes L8 CDMX — Centro Cultural | MetroGuia",
    "meta_description": "Metro Bellas Artes en L8: Palacio de Bellas Artes, murales de Rivera, Alameda Central y Madero peatonal. Centro histórico y cultural de CDMX.",
    "h1": "Estación Bellas Artes — Línea 8 del Metro CDMX",
    "intro": "La estación Bellas Artes de la Línea 8 comparte el honor de dar acceso al corazón cultural del Centro Histórico junto a la Línea 2. El Palacio de Bellas Artes, joya del art nouveau y art déco mexicano, alberga los murales más importantes de Diego Rivera, David Alfaro Siqueiros y José Clemente Orozco. La calle Madero peatonal y la Alameda Central completan un recorrido cultural de primer nivel.",
    "historia_icono": "El ícono representa el Palacio de Bellas Artes con su característica cúpula azul y blanca visible desde toda la Alameda. Inaugurado en 1934 tras 30 años de construcción, es considerado el recinto cultural más importante de México.",
    "tips": [
      "El Palacio de Bellas Artes tiene entrada general ~$80 MXN — incluye los murales monumentales de Rivera y Siqueiros",
      "La cúpula de cristal Tiffany solo se ve desde el interior en funciones especiales",
      "Madero peatonal: 600 metros de historia y comercio entre Bellas Artes y el Zócalo",
      "La Alameda Central: jardín histórico del siglo XVI, ideal para descansar",
      "Museo de la Estampa y Museo Franz Mayer frente a la Alameda: joyitas culturales"
    ],
    "mejor_horario": "Martes a domingo 10 AM–5:30 PM para Bellas Artes. Cualquier momento para Madero peatonal.",
    "mundial_relevancia": "Alta relevancia para el Mundial 2026: el Centro Histórico y Bellas Artes serán los destinos culturales más visitados por los miles de turistas FIFA. La zona se llenará de actividades culturales durante el torneo.",
    "descripcion_turistica": "Bellas Artes es joya arquitectónica e icono cultural de México. Palacio de Bellas Artes, teatro de ópera, murales de Rivera. OBLIGATORIA para turistas FIFA 2026 interesados en arte mexicano.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Estación completamente accesible. Palacio de Bellas Artes completamente adaptado. Acceso a museos y sala de conciertos."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Palacio de Bellas Artes",
        "tipo": "Centro Cultural",
        "distancia": "100m",
        "descripcion": "Edificio de mármol blanco con arquitectura art déco. Teatro, museos, galerías. Murales de Diego Rivera."
      },
      {
        "nombre": "Zona Centro Histórico",
        "tipo": "Zona Histórica",
        "distancia": "200m",
        "descripcion": "Centro histórico de CDMX con Zócalo, Catedral, palacios virreinales"
      },
      {
        "nombre": "Museo Mural Diego Rivera",
        "tipo": "Museo",
        "distancia": "150m",
        "descripcion": "Mural 'Sueño de una tarde dominical' en edificio anexo"
      },
      {
        "nombre": "Biblioteca Vasconcelos",
        "tipo": "Biblioteca",
        "distancia": "400m",
        "descripcion": "Biblioteca monumental con arquitectura moderna, acervo importante"
      }
    ]
  },
  {
    "slug": "san-juan-de-letran",
    "nombre": "San Juan de Letrán",
    "linea": "8",
    "alcaldia": "Cuauhtémoc",
    "tipo_zona": "comercial-histórico",
    "pois": [
      {
        "nombre": "Centro Histórico",
        "tipo": "cultural",
        "distancia": "3 min caminando"
      },
      {
        "nombre": "Avenida Francisco I. Madero",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro San Juan de Letrán CDMX — Centro y Mercado | MetroGuia",
    "meta_description": "Metro San Juan de Letrán: acceso al Mercado de San Juan gourmet, Eje Central y Centro Histórico. Historia colonial y gastronomía en CDMX.",
    "h1": "Estación San Juan de Letrán — Línea 8 del Metro CDMX",
    "intro": "San Juan de Letrán es el nodo comercial popular entre el Centro Histórico y la colonia Doctores. La avenida del mismo nombre, hoy renombrada Eje Central, es una de las arterias comerciales más bulliciosas de la ciudad, con tiendas de electrónica, librerías de segunda mano, y el acceso al histórico Mercado de San Juan — un mercado gourmet donde se encuentran ingredientes internacionales y delicias gastronómicas únicas.",
    "historia_icono": "El ícono representa el antiguo Colegio de San Juan de Letrán, primera institución educativa pública de América, fundada en 1527 por Fray Pedro de Gante para la educación de niños indígenas. El edificio colonial ya no existe, pero su legado en la historia de la educación mexicana es monumental.",
    "tips": [
      "Mercado de San Juan (a 10 min caminando): el mercado gourmet más famoso de CDMX — mariscos, quesos europeos, tacos de autor",
      "Eje Central tiene librerías de segunda mano con precios increíbles",
      "La colonia Doctores tiene taquerías auténticas con los mejores tacos de guisado de la ciudad",
      "El Plaza de la Ciudadela y el Mercado de Artesanías son destinos de compras auténticas",
      "Zona activa en todo momento — guarda pertenencias con discreción"
    ],
    "mejor_horario": "Martes a sábado para el Mercado de San Juan. Entre semana para las librerías y comercios.",
    "mundial_relevancia": "Relevancia media para el Mundial 2026: acceso al Centro Histórico y al Mercado de San Juan, destino gastronómico de turistas internacionales.",
    "descripcion_turistica": "San Juan de Letrán en Centro Histórico. Acceso a zona de templos coloniales y vida tradicional del centro. Para turistas FIFA 2026 buscando historia y cultura.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Estación con rampa de acceso. Centro Histórico con muchas escaleras, pero accesible general."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Templo de San Juan de Letrán",
        "tipo": "Templo Religioso",
        "distancia": "100m",
        "descripcion": "Iglesia colonial del siglo XVI con arquitectura religiosa tradicional"
      },
      {
        "nombre": "Centro Histórico CDMX",
        "tipo": "Zona Histórica",
        "distancia": "200m",
        "descripcion": "Corazón histórico de la ciudad con arquitectura colonial"
      },
      {
        "nombre": "Mercado de Templo Mayor",
        "tipo": "Mercado",
        "distancia": "300m",
        "descripcion": "Zona comercial con tiendas y restaurantes"
      }
    ]
  },
  {
    "slug": "salto-del-agua",
    "nombre": "Salto del Agua",
    "linea": "8",
    "alcaldia": "Cuauhtémoc",
    "tipo_zona": "histórico",
    "pois": [
      {
        "nombre": "Centro Histórico",
        "tipo": "cultural",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Eje Central Lázaro Cárdenas",
        "tipo": "transporte",
        "distancia": "2 min caminando"
      }
    ],
    "transferencias": [
      "1"
    ],
    "seo_title": "Metro Salto del Agua CDMX — Centro histórico | MetroGuia",
    "meta_description": "Metro Salto del Agua: acceso a mercados tradicionales y hoteles económicos. Zona de transición hacia Centro Histórico. Guía turística completa.",
    "h1": "Estación Salto del Agua — Línea 8 del Metro CDMX",
    "intro": "Salto del Agua es estación de transición entre la Línea 1 y el centro histórico, ubicada en la colonia Cuauhtémoc. Combina comercio de nivel medio con acceso cercano a sitios históricos de la ciudad. Es punto de paso importante hacia la zona de mercados tradicionales y el centro peatonal turístico. La estación funciona como puente entre zonas comerciales modernas y patrimonio histórico colonial.",
    "historia_icono": "El ícono de Salto del Agua evoca el río subterráneo que alguna vez bajaba desde Chapultepec, fuente de agua que alimentaba a la capital prehispánica.",
    "tips": [
      "Acceso a Mercado de Abastos: mercado tradicional a 5 min caminando con productos frescos a precios mínimos",
      "Zona de hoteles económicos ($20-40 USD/noche) en radio de 8 min caminando",
      "Comercio mixto: electrónica, ropa, accesorios; negocios abiertos de 8 AM a 9 PM",
      "Zona popular; mantén vigilancia sobre pertenencias en horas nocturnas (después de 9 PM)"
    ],
    "mejor_horario": "10 AM a 5 PM para compras y exploración tranquila. Evita después de 8 PM en zona aledaña.",
    "mundial_relevancia": "Acceso a hospedaje económico y compras de bajo costo para turistas presupuestarios del Mundial.",
    "descripcion_turistica": "Estación en zona céntrica oriental del Centro Histórico. Acceso a iglesias coloniales y avenidas comerciales con vida local intensa. Punto de transferencia para viajeros que se desplazan entre diferentes zonas del centro durante World Cup 2026.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Rampas funcionando. Señalización táctil en plataforma. Estación antigua con infraestructura mejorada."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierre 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "Avenida 20 de Noviembre",
        "tipo": "Avenida comercial",
        "distancia": "0m",
        "descripcion": "Eje comercial importante con tiendas, cafeterías y vida urbana intensa. Dirección hacia Zócalo."
      },
      {
        "nombre": "Iglesia de Santa Catarina",
        "tipo": "Iglesia colonial",
        "distancia": "200m",
        "descripcion": "Templo del siglo XVI con arquitectura barroca. Abierta para visitas y misas diarias."
      },
      {
        "nombre": "Zona de tiendas Centro",
        "tipo": "Zona comercial",
        "distancia": "100m",
        "descripcion": "Tiendas variadas de ropa, electrónica, accesorios. Precios competitivos y ambiente comercial tradicional."
      },
      {
        "nombre": "Restaurantes Avenida 20 de Noviembre",
        "tipo": "Gastronomía",
        "distancia": "50m",
        "descripcion": "Múltiples opciones de comida rápida y restaurantes con cocina mexicana tradicional. Ambiente local."
      }
    ]
  },
  {
    "slug": "chabacano",
    "nombre": "Chabacano",
    "linea": "8",
    "alcaldia": "Iztapalapa",
    "tipo_zona": "comercial",
    "pois": [
      {
        "nombre": "Zona comercial Chabacano",
        "tipo": "comercial",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "Avenida Chabacano",
        "tipo": "transporte",
        "distancia": "adyacente"
      }
    ],
    "transferencias": [
      "2",
      "9"
    ],
    "seo_title": "Metro Chabacano CDMX — Mercados y Vida Local",
    "meta_description": "Estación Chabacano: Mercados frescos, fondas auténticas y vida barrial tradicional. Experiencia real de CDMX para viajeros auténticos.",
    "h1": "Estación Chabacano — Línea 8 del Metro CDMX",
    "intro": "Chabacano es una estación que conecta con un barrio residencial con carácter tradicional mexicano. Named después de un árbol frutal tropical, la zona mantiene una atmósfera auténtica y local. Es ideal para turistas que quieren ver cómo viven los mexicanos en la ciudad, lejos de las zonas turistificadas. Aquí encontrarás tiendas locales, fondas de comida casera, y la oportunidad de comprar frutas y productos locales en mercados callejeros.",
    "historia_icono": "El ícono representa el árbol chabacano, un árbol frutal tropical que era común en la zona. El símbolo muestra la fruta o las características del árbol, conectando con la naturaleza y la historia agrícola del lugar.",
    "tips": [
      "Compra frutas y verduras en los mercados de barrio, muy frescas y baratas",
      "Come tamales, quesadillas y comida típica en fondas locales auténticas",
      "Interactúa con vendedores locales para recomendaciones personalizadas",
      "El área es segura durante el día para explorar a pie",
      "Toma fotos de la arquitectura vernácula y colorida del barrio"
    ],
    "mejor_horario": "Mañanas entre 07:00 y 11:00 para ver la actividad más auténtica del mercado. Los días de entre semana son más tranquilos.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial FIFA 2026.",
    "descripcion_turistica": "Estación de transferencia importante con conexión a Líneas 8 y 9. Ubicada en zona de comercio intenso con vida local auténtica. Punto clave para turistas que se desplazan entre diferentes zonas de la ciudad durante World Cup 2026.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Excelente accesibilidad con elevador operativo. Estación de transferencia bien equipada para personas con movilidad reducida."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierre 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "Nodo de Transferencia Chabacano",
        "tipo": "Centro de transporte",
        "distancia": "0m",
        "descripcion": "Hub importante de metro con conexión a líneas 2, 8 y 9. Central de transporte clave para movilidad urbana."
      },
      {
        "nombre": "Zona comercial Chabacano",
        "tipo": "Área retail",
        "distancia": "100m",
        "descripcion": "Tiendas, mercados y vida comercial intensa. Ambiente de barrio tradicional con servicios variados."
      },
      {
        "nombre": "Iglesia de Chabacano",
        "tipo": "Iglesia",
        "distancia": "200m",
        "descripcion": "Templo histórico de barrio. Abierto para visitantes."
      },
      {
        "nombre": "Restaurantes y comedores",
        "tipo": "Gastronomía",
        "distancia": "50m",
        "descripcion": "Opciones de comida tradicional y rápida. Precios accesibles para turistas en tránsito."
      }
    ]
  },
  {
    "slug": "la-viga",
    "nombre": "La Viga",
    "linea": "8",
    "alcaldia": "Iztapalapa",
    "tipo_zona": "comercial",
    "pois": [
      {
        "nombre": "Mercado La Viga",
        "tipo": "mercado",
        "distancia": "3 min caminando"
      },
      {
        "nombre": "Canal de la Viga",
        "tipo": "histórico",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro La Viga CDMX — Canal histórico e Iztapalapa | MetroGuia",
    "meta_description": "Metro La Viga: mercado de flores desde la madrugada, historia del Canal colonial y gastronomía popular auténtica en Iztapalapa.",
    "h1": "Estación La Viga — Línea 8 del Metro CDMX",
    "intro": "La Viga es la entrada al oriente popular de la Ciudad de México, una zona de carácter trabajador y auténtico que pocos turistas conocen. El histórico Canal de La Viga fue durante siglos la principal ruta por la que llegaban flores, verduras y canoas desde Xochimilco hasta el mercado de Tlatelolco. Hoy el barrio conserva mercados tradicionales vibrantes y una identidad comunitaria fuerte.",
    "historia_icono": "El ícono representa una viga de madera, referencia literal al Canal de La Viga, la ruta acuática de madera que los aztecas usaban para transportar mercancías en canoas desde el sur lacustre hacia el gran mercado de Tlatelolco. Esta vía fue esencial para la economía de Tenochtitlán.",
    "tips": [
      "Mercado La Viga: flores desde las 3 AM y pescado fresco diariamente — experiencia madrugadora única",
      "La zona tiene carnitas y comida popular de bajo costo — auténtica CDMX",
      "Domingo: tianguis comunitario con productos locales y artesanías",
      "El Canal de La Viga es parte de la historia lacustre de la ciudad — busca información en placas históricas",
      "Zona tranquila para explorar la CDMX no turística"
    ],
    "mejor_horario": "Madrugada para el mercado de flores (3-7 AM). Domingos para el tianguis popular.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial FIFA 2026.",
    "descripcion_turistica": "Estación La Viga accede a zona comercial popular del oriente. Barrio con mercados tradicionales. Para turistas FIFA 2026 buscando compras y experiencia comercial local.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Acceso por escaleras. Piso táctil disponible."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Mercado de La Viga",
        "tipo": "Mercado",
        "distancia": "200m",
        "descripcion": "Mercado grande con frutas, verduras y productos diversos"
      },
      {
        "nombre": "Zona Comercial Popular",
        "tipo": "Zona Comercial",
        "distancia": "150m",
        "descripcion": "Tiendas y comercios de barrio"
      },
      {
        "nombre": "Restaurante El Mercadito",
        "tipo": "Restaurante",
        "distancia": "250m",
        "descripcion": "Comida de mercado, auténtica y económica"
      }
    ]
  },
  {
    "slug": "santa-anita",
    "nombre": "Santa Anita",
    "linea": "8",
    "alcaldia": "Iztapalapa",
    "tipo_zona": "comercial",
    "pois": [
      {
        "nombre": "Zona comercial Santa Anita",
        "tipo": "comercial",
        "distancia": "2 min caminando"
      }
    ],
    "transferencias": [
      "4"
    ],
    "seo_title": "Metro Santa Anita CDMX — Terminal Sur L4 | MetroGuia",
    "meta_description": "Santa Anita. Terminal sur Línea 4. Templo colonial. Zona religiosa. Barrio auténtico CDMX.",
    "h1": "Estación Santa Anita — Línea 8 del Metro CDMX",
    "intro": "Santa Anita es la estación terminal sur de la Línea 4, ubicada en la Alcaldía Iztapalapa. La estación ofrece acceso a una zona histórica y religiosa, con el Templo y Convento de Santa Anita como referencias arquitectónicas principales de gran valor. Para turistas del Mundial 2026, representa una conexión valiosa con la historia colonial y la religiosidad que caracteriza profundamente a México. Descubre arquitectura colonial preservada y la fe tradicional mexicana.",
    "historia_icono": "El ícono de Santa Anita representa a Santa Ana, madre de la Virgen María. Simboliza la devoción mariana y la fe cristiana en México.",
    "tips": [
      "Templo y Convento de Santa Anita: sitio histórico colonial de gran valor arquitectónico",
      "Zona religiosa importante: peregrinaciones y festividades tradicionales",
      "Mercado local con productos frescos y artesanía a precios reales",
      "Restaurantes tradicionales para experimentar comida mexicana auténtica",
      "Barrios residenciales con vida local genuina y acogedora"
    ],
    "mejor_horario": "Mañana (8am-12pm) para visita a templo. Evita tarde.",
    "mundial_relevancia": "Sitio religioso-colonial. Relevante para turistas interesados en arquitectura colonial y fe mexicana.",
    "descripcion_turistica": "Estación terminal sur de Línea 4, ubicada en zona residencial sur con vida local tradicional. Acceso a servicios comunitarios y mercados locales. Punto estratégico para turistas que inician o terminan recorridos en Línea 4 durante World Cup 2026.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Rampas funcionales. Señalización táctil. Estación terminal con servicios básicos."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierre 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "Barrio de Santa Anita",
        "tipo": "Zona residencial",
        "distancia": "0m",
        "descripcion": "Barrio residencial con vida local auténtica, mercados y restaurantes tradicionales. Ambiente tranquilo."
      },
      {
        "nombre": "Mercado Santa Anita",
        "tipo": "Mercado tradicional",
        "distancia": "150m",
        "descripcion": "Mercado local con alimentos, frutas, comida. Experiencia de mercado tradicional mexicano."
      },
      {
        "nombre": "Iglesia de Santa Anita",
        "tipo": "Iglesia",
        "distancia": "200m",
        "descripcion": "Templo histórico del barrio. Abierto para visitantes."
      },
      {
        "nombre": "Zona residencial sur",
        "tipo": "Barrio",
        "distancia": "500m",
        "descripcion": "Vida comunitaria tranquila, restaurantes familiares, precios accesibles."
      }
    ]
  },
  {
    "slug": "atlalilco",
    "nombre": "Atlalilco",
    "linea": "8",
    "alcaldia": "Iztapalapa",
    "tipo_zona": "comercial",
    "pois": [
      {
        "nombre": "Zona Atlalilco",
        "tipo": "comercial",
        "distancia": "adyacente"
      }
    ],
    "transferencias": [
      "12"
    ],
    "seo_title": "Metro Atlalilco — Zona residencial sur",
    "meta_description": "Atlalilco: mercados locales auténticos, vida de barrio residencial del sur. Experiencia genuina del sur capitalino.                         ",
    "h1": "Estación Atlalilco — Línea 8 del Metro CDMX",
    "intro": "Atlalilco es estación de la Línea 12 en zona residencial del sur conectando comunidades con infraestructura de transporte. Para turistas del Mundial FIFA 2026 que deseen conocer vida auténtica de barrios sureños, Atlalilco ofrece mercados locales, tiendas de comercio informal y atmósfera cotidiana de capitalinos. Es parada para exploradores de barrios genuinos.",
    "historia_icono": "El ícono dorado de la Línea 12 representa conexión de Atlalilco con comunidades residenciales del sur, zona donde vida cotidiana y legado prehispánico convergen. Este símbolo evoca raíces profundas.",
    "tips": [
      "Mercado local: productos frescos a precios de barrio local",
      "Tiendas informales: ropa, zapatos y artículos prácticos a precios bajos",
      "Comedores de barrio: comidas caseras a precios accesibles",
      "Servicios locales: farmacias y tiendas de necesidades básicas",
      "Lleva efectivo: comercio principalmente en efectivo"
    ],
    "mejor_horario": "Visita de 9 AM-5 PM entre semana para actividad comercial.",
    "mundial_relevancia": "Relevancia muy baja: zona residencial sin atractivos específicos.",
    "descripcion_turistica": "Atlalilco (del náhuatl 'lugar en el agua') es estación de Línea 12 en Iztapalapa. Zona lacustre histórica con importancia en memoria prehispánica.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Con elevadores. Acceso total."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Zona Arqueológica Atlalilco",
        "tipo": "Patrimonio",
        "distancia": "600m",
        "descripcion": "Sitio con vestigios prehispánicos"
      },
      {
        "nombre": "Tianguis Atlalilco",
        "tipo": "Comercio",
        "distancia": "300m",
        "descripcion": "Mercado tradicional"
      },
      {
        "nombre": "Parque Ecológico",
        "tipo": "Naturaleza",
        "distancia": "700m",
        "descripcion": "Área verde con importancia ecológica"
      }
    ]
  },
  {
    "slug": "iztapalapa",
    "nombre": "Iztapalapa",
    "linea": "8",
    "alcaldia": "Iztapalapa",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Centro Comercial Iztapalapa",
        "tipo": "comercial",
        "distancia": "3 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Iztapalapa CDMX — Cultura y Tradición",
    "meta_description": "Estación Iztapalapa: Centro cultural con Cerro de la Estrella, mercados auténticos y Pasión de Cristo. Corazón del sur de CDMX.",
    "h1": "Estación Iztapalapa — Línea 8 del Metro CDMX",
    "intro": "Iztapalapa es una estación nombrada después de uno de los ayuntamientos más grandes de la CDMX, con una historia que se remonta a civilizaciones prehispánicas. La zona es conocida por su vibrante vida cultural, mercados tradicionales y la famosa Pasión de Cristo que se representa cada año. Para turistas, es un lugar para entender la verdadera vida en la CDMX, con arquitectura mezclada, gastronomía auténtica y un ambiente genuinamente mexicano.",
    "historia_icono": "El ícono representa elementos prehispánicos relacionados con Iztapalapa. Puede mostrar jeroglíficos o símbolos relacionados con la cosmovisión azteca, honrando el legado ancestral del lugar.",
    "tips": [
      "Visita el Cerro de la Estrella si te interesa la geografía y arqueología",
      "Come en comedores locales que sirven mole, pozole y otros platillos tradicionales",
      "Explora los mercados para entender el comercio tradicional mexicano",
      "Si visitas en Semana Santa, observa la Pasión de Cristo (evento cultural importante)",
      "Toma transporte adicional para zonas cercanas como Xochimilco"
    ],
    "mejor_horario": "Cualquier día entre 08:00 y 18:00 es bueno. Si visitas en Semana Santa, es especialmente memorable por la representación de la Pasión.",
    "mundial_relevancia": "Iztapalapa será punto de partida para turistas del Mundial 2026 que visiten Xochimilco y otras atracciones turísticas sureñas.",
    "descripcion_turistica": "Iztapalapa es acceso a Cerro de la Estrella, monumento arqueológico prehispánico. Zona importante cultural. Para turistas FIFA 2026 buscando historia azteca.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Estación con rampa de acceso. Cerro de la Estrella con sendero accesible a la mayoría."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Cerro de la Estrella",
        "tipo": "Sitio Arqueológico",
        "distancia": "600m",
        "descripcion": "Pirámide prehispánica azteca con vistas panorámicas de CDMX desde 2,300m de altura"
      },
      {
        "nombre": "Parque Cerro de la Estrella",
        "tipo": "Parque",
        "distancia": "500m",
        "descripcion": "Parque ecológico con senderos y áreas verdes"
      },
      {
        "nombre": "Mercado Iztapalapa",
        "tipo": "Mercado",
        "distancia": "250m",
        "descripcion": "Mercado local con comida y productos"
      }
    ]
  },
  {
    "slug": "apatlaco",
    "nombre": "Apatlaco",
    "linea": "8",
    "alcaldia": "Iztapalapa",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial Apatlaco",
        "tipo": "residencial",
        "distancia": "adyacente"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Apatlaco CDMX — Barrio Auténtico y Tranquilo",
    "meta_description": "Estación Apatlaco: Zona residencial tranquila con tiendas locales y fondas auténticas. Verdadera vida barrial de CDMX.",
    "h1": "Estación Apatlaco — Línea 8 del Metro CDMX",
    "intro": "Apatlaco es una estación en una zona residencial del sur de la CDMX, con un nombre que proviene del náhuatl. La zona es principalmente habitacional, con un ambiente tranquilo y auténtico. Para turistas interesados en ver cómo viven los mexicanos en la ciudad sin la masificación de zonas turísticas, Apatlaco ofrece mercados locales, tiendas de barrio y la oportunidad de conectar con la comunidad local. Es un lugar para viajeros aventureros.",
    "historia_icono": "El ícono de Apatlaco representa elementos relacionados con el agua o canales, basado en la etimología náhuatl 'apatl' que se refiere a agua. El símbolo puede mostrar un cuerpo de agua estilizado o motivos acuáticos.",
    "tips": [
      "Compra artesanías locales y souvenirs directamente de artesanos",
      "Come comida casera en fondas donde los precios son muy accesibles",
      "Camina por las calles residenciales para fotografiar la arquitectura local",
      "El barrio es seguro durante el día para explorarlo a pie",
      "Habla con locales para obtener recomendaciones genuinas no turísticas"
    ],
    "mejor_horario": "Cualquier hora del día es relativamente segura. Las mañanas son ideales para ver la actividad barrial más auténtica.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial FIFA 2026.",
    "descripcion_turistica": "Apatlaco en zona del oriente, barrio residencial. Nombre náhuatl con historia prehispánica. Para turistas FIFA 2026 explorando barrios tradicionales del oriente.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Acceso por escaleras. Piso táctil disponible."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Colonia Apatlaco",
        "tipo": "Zona Residencial",
        "distancia": "200m",
        "descripcion": "Barrio residencial tradicional"
      },
      {
        "nombre": "Mercado Local",
        "tipo": "Mercado",
        "distancia": "250m",
        "descripcion": "Mercado con comida y productos locales"
      },
      {
        "nombre": "Restaurante Típico",
        "tipo": "Restaurante",
        "distancia": "300m",
        "descripcion": "Comida tradicional mexicana"
      }
    ]
  },
  {
    "slug": "aculco",
    "nombre": "Aculco",
    "linea": "8",
    "alcaldia": "Iztapalapa",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial Aculco",
        "tipo": "residencial",
        "distancia": "adyacente"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Aculco CDMX — Tranquilidad y Autenticidad",
    "meta_description": "Estación Aculco: Barrio residencial tranquilo con mercados y fondas locales. Escape de lo turístico, vida auténtica de CDMX.",
    "h1": "Estación Aculco — Línea 8 del Metro CDMX",
    "intro": "Aculco es una estación en la línea sur del metro que conecta con un barrio residencial tranquilo y accesible. La zona mantiene un carácter fundamentalmente local, con tiendas de barrio, pequeños restaurantes y la vida cotidiana mexicana auténtica. Es perfecto para turistas que buscan alejarse del bullicio, experimentar la hospitalidad mexicana genuina y conocer cómo es vivir en la ciudad para la población local.",
    "historia_icono": "El ícono de Aculco está basado en la etimología náhuatl, representando posiblemente agua o lugares relacionados con cuerpos de agua. El símbolo conecta con la tradición prehispánica del lugar.",
    "tips": [
      "Desayuna como un local en fondas económicas y auténticas",
      "Compra frutas y productos locales en mercadillos callejeros",
      "Camina por el barrio para ver la arquitectura vernácula",
      "El transporte desde aquí conecta a otras zonas del sur",
      "Es un lugar seguro para explorar durante el día"
    ],
    "mejor_horario": "Mañanas entre 07:00 y 13:00 para experimentar la vida barrial más auténtica. Los entre semana son más tranquilos.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial FIFA 2026.",
    "descripcion_turistica": "Aculco en zona del oriente, barrio residencial con tradición. Nombre prehispánico. Para turistas FIFA 2026 explorando historia y vida barrial.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Acceso por escaleras. Piso táctil disponible."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Colonia Aculco",
        "tipo": "Zona Residencial",
        "distancia": "200m",
        "descripcion": "Barrio residencial del oriente"
      },
      {
        "nombre": "Mercado Aculco",
        "tipo": "Mercado",
        "distancia": "250m",
        "descripcion": "Mercado tradicional local"
      },
      {
        "nombre": "Restaurante Doña María",
        "tipo": "Restaurante",
        "distancia": "300m",
        "descripcion": "Comida mexicana casera"
      }
    ]
  },
  {
    "slug": "escuadron-201",
    "nombre": "Escuadrón 201",
    "linea": "8",
    "alcaldia": "Iztapalapa",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona Escuadrón 201",
        "tipo": "residencial",
        "distancia": "adyacente"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Escuadrón 201 CDMX — Historia Militar",
    "meta_description": "Estación Escuadrón 201: Zona tranquila honrando historia militar de México. Barrio auténtico con fondas y vida local.",
    "h1": "Estación Escuadrón 201 — Línea 8 del Metro CDMX",
    "intro": "Escuadrón 201 es una estación que honra a una unidad mexicana histórica que participó en la Segunda Guerra Mundial. La zona es principalmente residencial pero con importancia histórica. Para turistas, representa un punto de conexión a barrios locales auténticos y la oportunidad de aprender sobre la historia militar mexicana del siglo XX. El área es segura y tranquila, ideal para quienes buscan alejarse del centro turístico.",
    "historia_icono": "El ícono representa al Escuadrón 201, la unidad aérea mexicana que participó en la Segunda Guerra Mundial. El símbolo muestra probablemente un avión o insignia militar, honrando esta gesta histórica mexicana.",
    "tips": [
      "Aprende sobre la historia del Escuadrón 201 preguntando a residentes locales",
      "Come comida típica mexicana en fondas locales con precios muy accesibles",
      "El barrio es tranquilo y seguro para caminar durante el día",
      "Toma fotos de murales y arte urbano local",
      "Conecta a otros transportes locales desde esta estación"
    ],
    "mejor_horario": "Cualquier hora del día es segura. Las mañanas ofrecen un ambiente más tranquilo para explorar.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial FIFA 2026.",
    "descripcion_turistica": "Escuadrón 201, nombre histórico. Zona residencial del oriente. Para turistas FIFA 2026 interesados en historia militar mexicana y barrios populares.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Acceso por escaleras. Piso táctil disponible."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Colonia Escuadrón 201",
        "tipo": "Zona Residencial",
        "distancia": "200m",
        "descripcion": "Zona residencial con nombre histórico"
      },
      {
        "nombre": "Mercado Local",
        "tipo": "Mercado",
        "distancia": "250m",
        "descripcion": "Mercado tradicional"
      },
      {
        "nombre": "Restaurante El Recuerdo",
        "tipo": "Restaurante",
        "distancia": "300m",
        "descripcion": "Comida mexicana"
      }
    ]
  },
  {
    "slug": "parque-de-los-venados",
    "nombre": "Parque de los Venados",
    "linea": "8",
    "alcaldia": "Iztapalapa",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona Parque de los Venados",
        "tipo": "residencial",
        "distancia": "adyacente"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Parque de los Venados — Parque y verde",
    "meta_description": "Parque de los Venados: parque verde del sur con mercados locales y vida de barrio. Naturaleza urbana y espacio recreativo en CDMX.          ",
    "h1": "Estación Parque de los Venados — Línea 8 del Metro CDMX",
    "intro": "Parque de los Venados es estación de la Línea 12 cerca de zona verde del sur capitalino, conectando comunidades con parque y vida comercial de barrio. Para turistas del Mundial FIFA 2026 que deseen combinar naturaleza con autenticidad de barrio, Parque de los Venados ofrece acceso a espacio verde, mercados locales y atmósfera cotidiana de capitalinos. Es parada para exploradores buscando ecosistemas urbanos.",
    "historia_icono": "El ícono dorado de la Línea 12 representa conexión de Parque de los Venados con naturaleza urbana del sur, zona donde espacio verde y vida residencial convergen. Este símbolo evoca equidad en acceso a espacios recreativos.",
    "tips": [
      "Parque de los Venados: espacio verde con áreas de descanso y naturaleza; ideal para escapar del caos",
      "Mercado local: frutas, verduras y comidas rápidas a precios de barrio",
      "Tiendas de comercio informal: ropa y artículos prácticos a precios bajos",
      "Ambiente tranquilo: zona segura para familias y exploradores",
      "Seguridad: tranquilo pero poco turístico; evita andar solo al atardecer"
    ],
    "mejor_horario": "Visita de 9 AM-5 PM entre semana; domingos parque tiene más visitantes locales.",
    "mundial_relevancia": "Relevancia baja: zona residencial con parque; turistas específicos interesados en naturaleza urbana encontrarán valor.",
    "descripcion_turistica": "Parque de los Venados es estación de Línea 12 en zona residencial del sur. Nombre que evoca espacios naturales. Acceso a parques y recreación.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Con elevadores y acceso total."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Parque de los Venados",
        "tipo": "Recreación",
        "distancia": "300m",
        "descripcion": "Parque urbano con ciclovía y áreas verdes"
      },
      {
        "nombre": "Centro Comercial",
        "tipo": "Comercio",
        "distancia": "400m",
        "descripcion": "Tiendas y servicios"
      },
      {
        "nombre": "Instituto Técnico",
        "tipo": "Educación",
        "distancia": "500m",
        "descripcion": "Centro de capacitación profesional"
      }
    ]
  },
  {
    "slug": "penon-viejo",
    "nombre": "Peñón Viejo",
    "linea": "8",
    "alcaldia": "Iztapalapa",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona Peñón Viejo",
        "tipo": "residencial",
        "distancia": "adyacente"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Peñón Viejo CDMX — Geografía Urbana | MetroGuia",
    "meta_description": "Peñón Viejo: geografía topográfica Iztapalapa, zona residencial. Desarrollo urbano contemporáneo. Perspectiva expansión metropolitana CDMX moderna.",
    "h1": "Estación Peñón Viejo — Línea 8 del Metro CDMX",
    "intro": "Peñón Viejo es estación de la Línea A ubicada en Iztapalapa, que accede a una zona nombrada por sus características geográficas: el Peñón o elevación rocosa que caracteriza el territorio. Esta es una zona residencial densamente poblada de la ciudad, donde viven cientos de miles de capitalinos. Para turistas interesados en antropología urbana, geografía urbana y vida real de la CDMX contemporánea, ofrece experiencia no filtrada de urbanidad mexicana.",
    "historia_icono": "Peñón Viejo refiere al accidente geográfico que caracteriza la zona: elevaciones rocosas del terreno. El ícono incorpora elementos rocosos y topográficos, honrando la geografía natural que ha definido el asentamiento urbano en esta región de Iztapalapa.",
    "tips": [
      "Explora la topografía: la zona tiene elevaciones que ofrecen perspectivas visuales interesantes",
      "Visita el Peñón mismo si es accesible: estructura geológica que ha definido la zona",
      "Come en restaurantes de barrio: comida mexicana casera a precios mínimos",
      "Recorre calles: comercio variado, tiendas, mercadillos de todo tipo",
      "Interactúa con gente: zona es amable, especialmente si muestras respeto genuino"
    ],
    "mejor_horario": "9:00 a 17:00 para exploración segura. Evita altas horas de la noche en zonas menos céntrica.",
    "mundial_relevancia": "Geografía urbana: para turistas interesados en cómo se desarrollan ciudades. Perspectiva sobre expansión metropolitana.",
    "descripcion_turistica": "Peñón Viejo es estación de la Línea A ubicada en zona residencial del oriente de Iztacalco. Facilita conectividad hacia áreas de vivienda popular y comercio local.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Estación sin equipamiento elevador. Solo escaleras disponibles."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Escuela Técnica Peñón Viejo",
        "tipo": "Educación",
        "distancia": "400m",
        "descripcion": "Centro formativo técnico-profesional"
      },
      {
        "nombre": "Mercado Peñón Viejo",
        "tipo": "Comercio",
        "distancia": "200m",
        "descripcion": "Tianguis diario con productos frescos y diversos"
      },
      {
        "nombre": "Clínica Comunitaria",
        "tipo": "Salud",
        "distancia": "500m",
        "descripcion": "Centro de salud de acceso comunitario"
      }
    ]
  },
  {
    "slug": "balbuena",
    "nombre": "Balbuena",
    "linea": "8",
    "alcaldia": "Iztapalapa",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona Balbuena",
        "tipo": "residencial",
        "distancia": "adyacente"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Balbuena CDMX — Parque y zona residencial | MetroGuia",
    "meta_description": "Balbuena: estación residencial con acceso a parque. Zona tranquila de Venustiano Carranza.",
    "h1": "Estación Balbuena — Línea 8 del Metro CDMX",
    "intro": "Balbuena es una estación residencial que ofrece acceso directo al Parque Balbuena, importante espacio verde de la zona. La zona es tranquila, segura y perfecta para visitantes que buscan relajarse en espacios abiertos.",
    "historia_icono": "Balbuena evoca a Bernardo de Balbuena, poeta y obispo novohispano del siglo XVI.",
    "tips": [
      "Parque Balbuena: excelente para paseos y recreación",
      "Zona segura y tranquila",
      "Acceso a comercios locales",
      "Servicios comunitarios disponibles"
    ],
    "mejor_horario": "Mañana/tarde para disfrutar del parque.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial."
  },
  {
    "slug": "minas",
    "nombre": "Minas",
    "linea": "8",
    "alcaldia": "Iztapalapa",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona Minas",
        "tipo": "residencial",
        "distancia": "adyacente"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Minas CDMX — Acceso al Cerro de la Estrella | MetroGuia",
    "meta_description": "Metro Minas en Iztapalapa: puerta al Parque Ecológico Cerro de la Estrella, zona arqueológica y naturaleza urbana en el oriente de CDMX.",
    "h1": "Estación Minas — Línea 8 del Metro CDMX",
    "intro": "Minas es una estación residencial del oriente de Iztapalapa que sirve de puerta al parque ecológico del Cerro de la Estrella, uno de los volcanes extintos más importantes del Valle de México. La zona refleja el carácter popular y comunitario de Iztapalapa, la alcaldía más poblada de CDMX con más de 2 millones de habitantes y una tradición cultural extraordinaria.",
    "historia_icono": "El ícono representa herramientas de minería, referencia a las antiguas minas de cantera y tepetate que se explotaron en los cerros de esta región durante el período colonial para la construcción de edificios en la Ciudad de México.",
    "tips": [
      "Punto de acceso al Parque Ecológico del Cerro de la Estrella — 10 min caminando",
      "Zona popular con excelente comida callejera a precios muy accesibles",
      "La Semana Santa en Iztapalapa organiza la Representación del Vía Crucis, la más grande del mundo con 2 millones de asistentes",
      "Cerro de la Estrella tiene senderos para caminatas con vistas panorámicas",
      "Área residencial tranquila y acogedora"
    ],
    "mejor_horario": "Mañanas para subir al Cerro de la Estrella (evita el calor de mediodía). Fines de semana para ambiente familiar.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial FIFA 2026. El Cerro de la Estrella puede interesar a turistas que buscan naturaleza y arqueología."
  },
  {
    "slug": "guelatao",
    "nombre": "Guelatao",
    "linea": "8",
    "alcaldia": "Iztapalapa",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona Guelatao",
        "tipo": "residencial",
        "distancia": "adyacente"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Guelatao CDMX — Zona Residencial Oaxaca | MetroGuia",
    "meta_description": "Guelatao: zona residencial popular Iztapalapa historia Juárez. Mercados tradicionales, gastronomía oaxaca. Auténtica CDMX trabajadora. Real.",
    "h1": "Estación Guelatao — Línea 8 del Metro CDMX",
    "intro": "Guelatao es una estación de la Línea A ubicada en Iztapalapa, nombrada en honor a Guelatao de Juárez en Oaxaca, tierra natal de Benito Juárez. Esta estación sirve a una zona residencial trabajadora con comercio local, mercados tradicionales, y espacios comunitarios. Ofrece a turistas una perspectiva de cómo viven millones de capitalinos: en zonas de clase media-baja pero con vibrante vida comunitaria, comercio activo, y carácter auténtico.",
    "historia_icono": "Guelatao es pueblo natal de Benito Juárez en Oaxaca. El ícono honra esta conexión con un prócer de la historia mexicana. Refleja la costumbre del Metro de CDMX de nombrar estaciones con figuras históricas y geográficas de México.",
    "tips": [
      "Compra en mercados tradicionales: frutas, verduras, productos locales a precios mayoristas",
      "Prueba comida oaxaqueña: la zona tiene tradición gastronómica oaxaca que es exquisita",
      "Visita ferreterías y tiendas de abarrotes: vida cotidiana mexicana en acción",
      "Camina por plazas públicas: espacios donde se reúnen residentes, especialmente fines de semana",
      "Toma fotos: zonas residenciales auténticas son visualmente ricas en detalles y colores"
    ],
    "mejor_horario": "8:00 a 18:00 para actividad comercial máxima. Mañanas más vibrantes, tardes con actividad sostenida.",
    "mundial_relevancia": "Zona residencial popular: experiencia auténtica de Ciudad de México trabajadora para turistas FIFA 2026 interesados en vida real.",
    "descripcion_turistica": "Guelatao honra la memoria de Benito Juárez, nacido en San Pablo Guelatao, Oaxaca. La estación comunica zonas residenciales de Iztacalco con el resto del sistema metro.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Acceso mediante escaleras. Espacios reducidos en plataforma."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Centro Cultural Benito Juárez",
        "tipo": "Cultura",
        "distancia": "500m",
        "descripcion": "Espacio dedicado a la historia y legado del Benemérito"
      },
      {
        "nombre": "Tianguis Guelatao",
        "tipo": "Comercio",
        "distancia": "300m",
        "descripcion": "Mercado tradicional con oferta variada"
      },
      {
        "nombre": "Parque Benito Juárez",
        "tipo": "Recreación",
        "distancia": "700m",
        "descripcion": "Área verde con áreas de esparcimiento"
      }
    ]
  },
  {
    "slug": "cerro-de-la-estrella",
    "nombre": "Cerro de la Estrella",
    "linea": "8",
    "alcaldia": "Iztapalapa",
    "tipo_zona": "patrimonio-arqueologico",
    "pois": [
      {
        "nombre": "Parque Ecológico Cerro de la Estrella",
        "tipo": "parque",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Zona Arqueológica",
        "tipo": "arqueológica",
        "distancia": "10 min caminando"
      },
      {
        "nombre": "Vistas panorámicas de la CDMX",
        "tipo": "mirador",
        "distancia": "15 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Cerro de la Estrella CDMX — Arqueología y naturaleza | MetroGuia",
    "meta_description": "Metro Cerro de la Estrella: volcán sagrado mexica, zona arqueológica gratuita y senderos con vistas panorámicas de CDMX. Terminal Línea 8.",
    "h1": "Estación Cerro de la Estrella — Línea 8 del Metro CDMX",
    "intro": "Cerro de la Estrella es el terminus sur de la Línea 8 y la puerta a uno de los espacios naturales y arqueológicos más ignorados de la Ciudad de México. Este volcán extinto fue sagrado para los mexicas: aquí encendían el Fuego Nuevo cada 52 años para evitar el fin del mundo según su cosmogonía. Hoy el cerro es un parque ecológico urbano con zona arqueológica y senderos con vistas panorámicas de la ciudad.",
    "historia_icono": "El ícono representa el Cerro de la Estrella (Huizachtépetl en náhuatl), volcán sagrado donde los mexicas realizaban la Ceremonia del Fuego Nuevo cada 52 años. Si el fuego no encendía en esa noche, creían que sería el fin del mundo — y el rito nunca falló.",
    "tips": [
      "Zona Arqueológica del Cerro de la Estrella: gratuita, con vestigios del templo prehispánico",
      "La subida al cerro toma 30-45 min y ofrece vistas 360° de la CDMX — lleva agua",
      "Parque Ecológico con flora y fauna nativa del Valle de México",
      "Visita temprana (7-10 AM) para evitar el calor y disfrutar la vista",
      "Los fines de semana familias capitalinas hacen picnics — ambiente cálido y local auténtico"
    ],
    "mejor_horario": "Mañanas de martes a domingo (cierra los lunes). El amanecer desde la cima es espectacular.",
    "mundial_relevancia": "Sin relevancia directa para el Mundial FIFA 2026. Sin embargo, es una joya escondida que turistas aventureros encontrarán fascinante por su historia prehispánica y sus vistas de la ciudad.",
    "descripcion_turistica": "Cerro de la Estrella, estación dedicada a sitio arqueológico. Acceso directo a pirámide prehispánica con vistas espectaculares de CDMX. IMPRESCINDIBLE para arqueología.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Estación con rampa de acceso. Cerro con senderos parcialmente accesibles."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00. Parque cierra anochecer."
    },
    "lugares_cercanos": [
      {
        "nombre": "Pirámide Cerro de la Estrella",
        "tipo": "Sitio Arqueológico",
        "distancia": "200m",
        "descripcion": "Estructura prehispánica azteca con escalinatas. Vista panorámica de toda CDMX."
      },
      {
        "nombre": "Parque Ecológico",
        "tipo": "Parque",
        "distancia": "100m",
        "descripcion": "Senderos naturales, áreas de picnic, flora y fauna local"
      },
      {
        "nombre": "Restaurante Cumbre",
        "tipo": "Restaurante",
        "distancia": "300m",
        "descripcion": "Comida con vistas del cerro"
      }
    ]
  },
  {
    "slug": "constitucion-de-1917",
    "nombre": "Constitución de 1917",
    "linea": "8",
    "alcaldia": "Iztapalapa",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona Constitución de 1917",
        "tipo": "residencial",
        "distancia": "adyacente"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Constitución 1917 CDMX — Historia | MetroGuia",
    "meta_description": "Constitución de 1917: historia legal mexicana fundacional zona residencial. Legado político México moderno. Hospedaje turistas FIFA accesible.",
    "h1": "Estación Constitución de 1917 — Línea 8 del Metro CDMX",
    "intro": "Constitución de 1917 lleva el nombre del documento que estableció las bases legales de México moderno. Esta estación de la Línea A conecta con zonas residenciales de Iztapalapa y representa el compromiso del transporte público con la historia nacional.",
    "historia_icono": "El nombre honra la Constitución Política de los Estados Unidos Mexicanos de 1917, el documento fundacional de México moderno.",
    "tips": [
      "Reflexiona sobre la importancia histórica del nombre mientras utilizas la estación",
      "Zona residencial de Iztapalapa",
      "Acceso a servicios y comercio local",
      "Reflexiona sobre historia legal mexicana visitando la zona"
    ],
    "mejor_horario": "Entre 10:00 y 15:00 horas",
    "mundial_relevancia": "Sin relevancia directa para el Mundial",
    "descripcion_turistica": "Constitución de 1917 conmemora la promulgación de la Constitución Mexicana. La estación es punto de acceso a zonas residenciales e industriales del norte de Iztacalco, con importante flujo de trabajadores.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Sin elevadores. Escaleras como único acceso vertical."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Museo Constitucional",
        "tipo": "Cultura",
        "distancia": "800m",
        "descripcion": "Espacio dedicado a la historia constitucional mexicana"
      },
      {
        "nombre": "Parque Industrial Iztacalco",
        "tipo": "Comercio",
        "distancia": "1km",
        "descripcion": "Zona de empleo industrial importante"
      },
      {
        "nombre": "Centro Comercial Avenida Morelos",
        "tipo": "Comercio",
        "distancia": "500m",
        "descripcion": "Tiendas y servicios variados"
      }
    ]
  },
  {
    "slug": "tacubaya",
    "nombre": "Tacubaya",
    "linea": "9",
    "alcaldia": "Miguel Hidalgo",
    "tipo_zona": "comercial-residencial",
    "pois": [
      {
        "nombre": "Zona Comercial Tacubaya",
        "tipo": "comercial",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "Castillo de Chapultepec",
        "tipo": "cultural",
        "distancia": "15 min en metrobús"
      }
    ],
    "transferencias": [
      "1",
      "7"
    ],
    "seo_title": "Metro Tacubaya CDMX — Hub de Transferencia | MetroGuia",
    "meta_description": "Estación Tacubaya del Metro CDMX: hub crucial de transferencia a Líneas 1 y 7. Zona comercial vibrante, acceso a Chapultepec, Paseo de la Reforma. Turismo.",
    "h1": "Estación Tacubaya — Línea 9 del Metro CDMX",
    "intro": "Tacubaya es uno de los hubs de transferencia más importantes del Metro de la Ciudad de México, estratégicamente ubicado en el Oeste de la ciudad. Esta estación conecta las Líneas 1, 7 y 9, convirtiéndola en un punto nodal para turistas que desean explorar distintas zonas de la capital. La zona es vibrante, con comercio diverso, restaurantes, y acceso directo a la icónica Avenida Paseo de la Reforma.",
    "historia_icono": "El nombre Tacubaya proviene del náhuatl 'Tlecoabaca', que significa 'lugar de sapos'. Desde tiempos prehispánicos fue zona de paso comercial hacia zonas del Oeste. El icono del metro refleja esta herencia con referencias a la flora y fauna del territorio.",
    "tips": [
      "Transfiere a Líneas 1 (Observatorio-Pantitlán) y 7 (Barranca del Muerto-Garibaldi) para máxima cobertura urbana",
      "Explora la Zona Comercial Tacubaya con tiendas, restaurantes y cafeterías de calidad",
      "Accede al Castillo de Chapultepec en 15 minutos mediante metrobús desde la estación",
      "Es el mejor punto de partida para tours al Bosque de Chapultepec y Museo Nacional de Antropología",
      "Aprovecha los horarios nocturnos para disfrutar la vida nocturna de la zona"
    ],
    "mejor_horario": "Mañanas entre 8:00-11:00 para menos aglomeración, o tardes 15:00-18:00. Evita horas pico (7:00-9:00 y 18:00-20:00).",
    "mundial_relevancia": "Hub estratégico para turistas FIFA 2026: conecta Centro histórico con zonas Oeste. Acceso a hoteles de clase alta en Polanco y Chapultepec.",
    "descripcion_turistica": "Tacubaya es hub intermodal importante conectando múltiples líneas. Acceso a zona histórica occidente. Para turistas FIFA 2026 que necesitan transferencia eficiente o explorar Tacubaya.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Estación completamente accesible intermodal con múltiples líneas. Centro de transferencia con todos los servicios."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Barrio Histórico Tacubaya",
        "tipo": "Zona Histórica",
        "distancia": "300m",
        "descripcion": "Zona colonial con arquitectura tradicional mexicana"
      },
      {
        "nombre": "Mercado Tacubaya",
        "tipo": "Mercado",
        "distancia": "250m",
        "descripcion": "Mercado tradicional con comida y artesanías"
      },
      {
        "nombre": "Zona Comercial",
        "tipo": "Zona Comercial",
        "distancia": "200m",
        "descripcion": "Tiendas y comercios diversos"
      }
    ]
  },
  {
    "slug": "patriotismo",
    "nombre": "Patriotismo",
    "linea": "9",
    "alcaldia": "Benito Juárez",
    "tipo_zona": "residencial-comercial",
    "pois": [
      {
        "nombre": "Avenida Patriotismo",
        "tipo": "comercial",
        "distancia": "adyacente"
      },
      {
        "nombre": "Zona residencial Patriotismo",
        "tipo": "residencial",
        "distancia": "2 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Patriotismo CDMX — Eje Oeste-Este | MetroGuia",
    "meta_description": "Estación Patriotismo: eje comercial Oriente-Poniente en Benito Juárez. Tiendas, cafés independientes, acceso a Polanco y Paseo de la Reforma. Turismo CDMX.",
    "h1": "Estación Patriotismo — Línea 9 del Metro CDMX",
    "intro": "La estación Patriotismo es un nodo comercial y residencial en el corazón de la alcaldía Benito Juárez. Ubicada en la importante Avenida Patriotismo, que es un eje estructurante Oriente-Poniente de la ciudad, esta estación sirve como puente entre el Centro histórico y las zonas residenciales del Poniente. La zona ofrece tiendas, restaurantes y una vida urbana dinámica con carácter cosmopolita.",
    "historia_icono": "Avenida Patriotismo fue trazada en el siglo XIX como vía de conexión entre el Centro y zonas de expansión hacia el Oeste. Su nombre evoca el espíritu nacionalista de la época. El ícono metro representa esta arteria vital que dinamiza el transporte urbano.",
    "tips": [
      "Recorre la Avenida Patriotismo a pie: encontrarás boutiques, cafés independientes y galerías de arte",
      "Los jueves a domingo, la zona tiene propuestas culturales en espacios alternativos",
      "Accede fácilmente a la zona de Polanco (10 minutos caminando) con tiendas de lujo y restaurantes de clase mundial",
      "Cercano a Paseo de la Reforma, ideal para turistas que quieren recorrer esta icónica avenida",
      "Excelente ubicación para hospedarse: hoteles de precio moderado con buen acceso a toda la ciudad"
    ],
    "mejor_horario": "De 11:00 a 19:00, los mejores horarios para compras y paseos. Fin de semana más tranquilo y agradable.",
    "mundial_relevancia": "Conexión crucial Oriente-Poniente: facilita movilidad de turistas entre Centro, Reforma y zonas residenciales de alojamiento.",
    "descripcion_turistica": "Estación Patriotismo en zona residencial occidente. Conecta con vida cotidiana de CDMX. Para turistas FIFA 2026 buscando experiencia en barrios residenciales auténticos.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Acceso por escaleras. Piso táctil disponible."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Colonia Patriotismo",
        "tipo": "Zona Residencial",
        "distancia": "200m",
        "descripcion": "Zona residencial del occidente"
      },
      {
        "nombre": "Mercado Patriotismo",
        "tipo": "Mercado",
        "distancia": "250m",
        "descripcion": "Mercado tradicional local"
      },
      {
        "nombre": "Restaurante Casa del Patriota",
        "tipo": "Restaurante",
        "distancia": "300m",
        "descripcion": "Comida mexicana casera"
      }
    ]
  },
  {
    "slug": "chilpancingo",
    "nombre": "Chilpancingo",
    "linea": "9",
    "alcaldia": "Benito Juárez",
    "tipo_zona": "residencial-comercial",
    "pois": [
      {
        "nombre": "Zona Chilpancingo",
        "tipo": "residencial",
        "distancia": "adyacente"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Chilpancingo CDMX — Zona Residencial | MetroGuia",
    "meta_description": "Estación Chilpancingo: zona residencial tranquila de clase media en Benito Juárez. Hospedaje cómodo, comercio local, restaurantes. Acceso ciudad.",
    "h1": "Estación Chilpancingo — Línea 9 del Metro CDMX",
    "intro": "Chilpancingo es una estación residencial ubicada en la alcaldía Benito Juárez, que ofrece un ambiente más tranquilo que el Centro pero con fácil acceso a las principales atracciones turísticas de la ciudad. Nombrada en honor a la capital del estado de Guerrero, esta estación sirve a una zona de clase media con buenos servicios, comercios locales y espacios públicos accesibles. Es una opción interesante para turistas que buscan hospedaje cómodo fuera del centro congestionado.",
    "historia_icono": "Chilpancingo, cuyo nombre significa 'en la cuesta de agua' en náhuatl, es la capital del estado de Guerrero. El ícono del metro rinde homenaje a esta ciudad histórica, reconociendo la importancia de las conexiones entre la capital y los estados circundantes.",
    "tips": [
      "Hospédate en hoteles de 3-4 estrellas de la zona: relación precio-calidad excelente para turistas",
      "Acceso directo a mercados y tienditas locales para compras de artesanías mexicanas auténticas",
      "Estación tranquila: ideal para turistas que prefieren alejarse del caos del Centro sin sacrificar conectividad",
      "En 10 minutos a pie llegas a restaurantes tradicionales mexicanos con precios accesibles",
      "Cercano a parques locales para descansar entre actividades turísticas"
    ],
    "mejor_horario": "Mañanas de 9:00-12:00 para disfrutar la tranquilidad. Tardes después de las 14:00 con ambiente comercial activo.",
    "mundial_relevancia": "Alojamiento residencial: zona segura y cómoda para turistas FIFA 2026 que prefieren estancia tranquila con buen acceso al transporte.",
    "descripcion_turistica": "Estación Chilpancingo en zona residencial sur. Barrio tranquilo. Para turistas FIFA 2026 buscando alojamiento en zona segura y accesible.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Acceso por escaleras. Piso táctil disponible."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Colonia Chilpancingo",
        "tipo": "Zona Residencial",
        "distancia": "200m",
        "descripcion": "Zona residencial tranquila del sur"
      },
      {
        "nombre": "Mercado Local",
        "tipo": "Mercado",
        "distancia": "250m",
        "descripcion": "Mercado con productos locales"
      },
      {
        "nombre": "Restaurante Chilpancingo",
        "tipo": "Restaurante",
        "distancia": "300m",
        "descripcion": "Comida mexicana tradicional"
      }
    ]
  },
  {
    "slug": "centro-medico",
    "nombre": "Centro Médico",
    "linea": "9",
    "alcaldia": "Benito Juárez",
    "tipo_zona": "médico-comercial",
    "pois": [
      {
        "nombre": "Centro Médico Nacional",
        "tipo": "médico",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "Zona comercial Centro Médico",
        "tipo": "comercial",
        "distancia": "3 min caminando"
      }
    ],
    "transferencias": [
      "3"
    ],
    "seo_title": "Metro Centro Médico CDMX — Salud | MetroGuia",
    "meta_description": "Centro Médico CDMX: transferencia estratégica a Línea 3, servicios de salud. Centro Médico Nacional para emergencias turistas. Conectividad.",
    "h1": "Estación Centro Médico — Línea 9 del Metro CDMX",
    "intro": "Centro Médico es una estación clave de transferencia (Línea 9 a Línea 3) ubicada en la alcaldía Benito Juárez, cercana al importante Centro Médico Nacional. Esta estación es vital tanto para turistas que requieran servicios de salud de emergencia como para quienes simplemente deseen explorar un nodo de conectividad importante. La zona combina servicios especializados, comercio orientado a salud y bienestar, y múltiples opciones de movilidad.",
    "historia_icono": "Centro Médico Nacional fue fundado en 1943 como institución de salud de referencia en México. El ícono del metro representa la cruz médica y simboliza la salud como derecho accesible. Es emblemático del desarrollo institucional mexicano del siglo XX.",
    "tips": [
      "Si necesitas atención médica, Centro Médico Nacional es accesible en 2 minutos caminando desde la estación",
      "Transfiere a Línea 3 para explorar zonas Sur (Copilco, Ciudad Universitaria) o Norte (Indios Verdes)",
      "Zona con farmacias de calidad y laboratorios clínicos si necesitas servicios de salud menores",
      "Restaurantes y cafeterías especializadas en comida saludable en los alrededores",
      "Estación conectada 24 horas: importante recurso en emergencias médicas durante cualquier hora"
    ],
    "mejor_horario": "Disponible todo el día. Horarios normales durante día; más tranquilo después de 20:00 si buscas usar la estación sin prisa.",
    "mundial_relevancia": "Servicios de salud críticos: acceso a Centro Médico Nacional para emergencias médicas de turistas FIFA 2026. Hub de transferencia estratégico.",
    "descripcion_turistica": "Estación con acceso a complejos médicos importantes y vida urbana céntrica. Ubicación estratégica entre Centro Histórico y zona sur. Punto de referencia para turistas que buscan servicios de salud o descanso durante exploración en World Cup 2026.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Excelente accesibilidad con elevador operativo. Estación médica con acceso completo para personas con movilidad reducida."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "Lunes a viernes. Sábados cierre 01:00. Domingos y festivos 00:00."
    },
    "lugares_cercanos": [
      {
        "nombre": "Instituto Nacional de Cardiología",
        "tipo": "Hospital",
        "distancia": "100m",
        "descripcion": "Centro médico de clase mundial. Referencia nacional para cardiología. Servicios para turistas."
      },
      {
        "nombre": "Centro Médico General",
        "tipo": "Complejo hospitalario",
        "distancia": "200m",
        "descripcion": "Complejo de servicios médicos integrales. Infraestructura moderna."
      },
      {
        "nombre": "Parque España",
        "tipo": "Parque",
        "distancia": "400m",
        "descripcion": "Pequeño parque público para descanso, tranquilo, con vegetación."
      },
      {
        "nombre": "Zona Nápoles",
        "tipo": "Barrio comercial",
        "distancia": "500m",
        "descripcion": "Barrio residencial con tiendas, restaurantes y vida urbana activa."
      }
    ]
  },
  {
    "slug": "lazaro-cardenas",
    "nombre": "Lázaro Cárdenas",
    "linea": "9",
    "alcaldia": "Cuauhtémoc",
    "tipo_zona": "comercial-histórico",
    "pois": [
      {
        "nombre": "Centro Histórico",
        "tipo": "cultural",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Avenida Paseo de la Reforma",
        "tipo": "comercial",
        "distancia": "3 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Lázaro Cárdenas — Centro Histórico | MetroGuia",
    "meta_description": "Lázaro Cárdenas: puerta estratégica al Centro Histórico CDMX, Paseo de la Reforma. Museos, monumentos, patrimonio cultural. Imprescindible turismo.",
    "h1": "Estación Lázaro Cárdenas — Línea 9 del Metro CDMX",
    "intro": "La estación Lázaro Cárdenas es una puerta estratégica hacia el Centro Histórico de la Ciudad de México, ubicada en la alcaldía Cuauhtémoc. Esta estación conecta directamente con la icónica Avenida Paseo de la Reforma, uno de los grandes atractivos turísticos de la capital, y ofrece acceso a museos de clase mundial, monumentos históricos y la vibrante vida cultural de la ciudad. Es imprescindible para cualquier turista que desee experimentar la quintaesencia de la CDMX.",
    "historia_icono": "Lázaro Cárdenas del Río fue presidente de México de 1934 a 1940, época de grandes transformaciones sociales. El ícono del metro honra su legado en la historia política mexicana, representando el progreso institucional del país.",
    "tips": [
      "Camina hacia el Centro Histórico en 5 minutos para ver la Catedral, Palacio Nacional y Plaza Mayor",
      "Recorre Paseo de la Reforma: la avenida más icónica de México con museos, monumentos y arquitectura de clase mundial",
      "Visita el Museo Nacional de Antropología (15 minutos en metrobús) para conocer tesoros prehispánicos como la Piedra del Sol",
      "Accede a galerías de arte contemporáneo y museos especializados cerca de la estación",
      "Mejor punto de partida para tours culturales a pie por Centro Histórico (Templo Mayor, Suprema Corte de Justicia)"
    ],
    "mejor_horario": "10:00 a 18:00 es ideal para turismo cultural. Museos abren 10:00-17:00. Evita noches tarde en zona Centro por seguridad.",
    "mundial_relevancia": "Patrimonio cultural global: acceso a Centro Histórico UNESCO, Paseo de la Reforma, museos. Imprescindible para turistas FIFA 2026 que quieren México profundo.",
    "descripcion_turistica": "Lázaro Cárdenas en zona centro-sur. Nombre de presidente importante de México. Para turistas FIFA 2026 interesados en historia política mexicana.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Acceso por escaleras. Piso táctil disponible."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Colonia Centro-Sur",
        "tipo": "Zona Residencial",
        "distancia": "200m",
        "descripcion": "Zona residencial del centro-sur"
      },
      {
        "nombre": "Mercado Local",
        "tipo": "Mercado",
        "distancia": "250m",
        "descripcion": "Mercado tradicional"
      },
      {
        "nombre": "Restaurante El Cárdenas",
        "tipo": "Restaurante",
        "distancia": "300m",
        "descripcion": "Comida mexicana"
      }
    ]
  },
  {
    "slug": "chabacano-l9",
    "nombre": "Chabacano",
    "linea": "9",
    "alcaldia": "Iztapalapa",
    "tipo_zona": "comercial",
    "pois": [
      {
        "nombre": "Zona comercial Chabacano",
        "tipo": "comercial",
        "distancia": "2 min caminando"
      }
    ],
    "transferencias": [
      "2",
      "8"
    ],
    "seo_title": "Metro Chabacano L9 CDMX — Hub Conectividad | MetroGuia",
    "meta_description": "Estación Chabacano Línea 9: hub de transferencia a Líneas 2 y 8. Comercio intenso y activo, conectividad Este-Oeste. Nodo estratégico Metro CDMX.",
    "h1": "Estación Chabacano — Línea 9 del Metro CDMX",
    "intro": "La estación Chabacano en la Línea 9 es un hub crucial de transferencia ubicado en la alcaldía Iztapalapa, que conecta con las Líneas 2 y 8, ofreciendo a los turistas una flexibilidad significativa para moverse por toda la ciudad. La zona es comercialmente activa con vendedores callejeros, tiendas, y una energía urbana característica. Avenida Chabacano es una arterial histórica que ha sido eje de comercio y transporte durante décadas.",
    "historia_icono": "Avenida Chabacano es una de las arterias más antiguas de la Ciudad de México, trazada en el siglo XIX como vía importante de comunicación. El ícono metro representa esta conexión vital entre diferentes partes de la ciudad, simbolizando la movilidad urbana.",
    "tips": [
      "Transfiere a Línea 2 para acceder a zonas Sur (Taxqueña, CU) o Norte (Cuatro Caminos)",
      "Transfiere a Línea 8 para explorar Iztapalapa o zonas Este (Apatlaco)",
      "Zona comercial intensa: ideal para compras de últimas horas o comercio callejero auténtico",
      "Estación bien señalizada y con buen flujo: aunque es hub, es relativamente fácil de navegar",
      "Acceso a mercadillos y vendedores ambulantes con productos típicos mexicanos"
    ],
    "mejor_horario": "7:00-11:00 y 15:00-18:00 para transferencias eficientes. Midday (11:00-14:00) puede ser más tranquilo.",
    "mundial_relevancia": "Nodo de conectividad Este-Oeste: estratégico para turistas que quieren máxima cobertura del Metro. Acceso a zonas diversas de la capital.",
    "descripcion_turistica": "Chabacano Línea 9 ofrece acceso alternativo a zona comercial. Punto de transferencia. Para turistas FIFA 2026 navigando la ciudad.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Estación completamente accesible con elevadores. Centro de transferencia con múltiples líneas."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Zona Comercial Chabacano",
        "tipo": "Zona Comercial",
        "distancia": "150m",
        "descripcion": "Tiendas y restaurantes diversos"
      },
      {
        "nombre": "Mercado Chabacano",
        "tipo": "Mercado",
        "distancia": "200m",
        "descripcion": "Mercado popular con variedad"
      },
      {
        "nombre": "Restaurante Casa Central",
        "tipo": "Restaurante",
        "distancia": "250m",
        "descripcion": "Comida mexicana rápida y tradicional"
      }
    ]
  },
  {
    "slug": "jamaica-l9",
    "nombre": "Jamaica",
    "linea": "9",
    "alcaldia": "Venustiano Carranza",
    "tipo_zona": "mercado-comercial",
    "pois": [
      {
        "nombre": "Mercado Jamaica",
        "tipo": "mercado",
        "distancia": "3 min caminando"
      },
      {
        "nombre": "Mercado de flores más grande de México",
        "tipo": "botánico",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [
      "4"
    ],
    "seo_title": "Metro Jamaica CDMX — Mercado de Flores | MetroGuia",
    "meta_description": "Jamaica: Mercado Jamaica de flores, plantas, comercio popular. Experiencia auténtica comercio tradicional mexicano. Imprescindible turistas. Madrugada.",
    "h1": "Estación Jamaica — Línea 9 del Metro CDMX",
    "intro": "Jamaica es una estación ubicada en la alcaldía Venustiano Carranza, famosa por su enorme Mercado Jamaica, el mayor mercado de flores y plantas de América Latina. Esta estación es un destino turístico único que ofrece una experiencia auténtica de comercio tradicional mexicano, con vendedores de flores frescas, plantas ornamentales, artesanías relacionadas con floristería, y una atmósfera vibrante de actividad comercial. Es obligatoria para turistas que quieren experimentar el comercio popular mexicano.",
    "historia_icono": "Jamaica hace referencia a la región de Jamaica en el Caribe, pero el Mercado Jamaica se consolidó aquí en el siglo XX como centro floricultural. El ícono del metro incorpora elementos florales, celebrando la principal actividad económica y cultural de la estación.",
    "tips": [
      "Visita el Mercado Jamaica en madrugada (5:00-7:00): cuando mayoristas y floristas llegan con flores frescas del día",
      "Compra flores, plantas y arreglos florales a precios mayoristas: las más baratas de la ciudad",
      "Camina por los pasillos del mercado: es una experiencia sensorial completa del comercio mexicano tradicional",
      "Prueba comida callejera típica: desde tamales hasta café mexicano en las comedorías del mercado",
      "Fotografía: es un lugar visualmente espectacular con colores vibrantes de miles de flores"
    ],
    "mejor_horario": "5:00 a 10:00 es la época dorada: máxima actividad, flores frescas, ambiente auténtico. Después de 14:00 menos activo.",
    "mundial_relevancia": "Experiencia auténtica: Mercado Jamaica es atracción única de comercio popular mexicano. Imprescindible para turistas FIFA 2026 que quieren lo genuino."
  },
  {
    "slug": "mixiuhca",
    "nombre": "Mixiuhca",
    "linea": "9",
    "alcaldia": "Venustiano Carranza",
    "tipo_zona": "comercial",
    "pois": [
      {
        "nombre": "Zona Mixiuhca",
        "tipo": "comercial",
        "distancia": "adyacente"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Mixiuhca CDMX — Deportes y Recreación | MetroGuia",
    "meta_description": "Mixiuhca: instalaciones deportivas, parques, espacios recreación. Centro deportivo Iztapalapa para actividades. Espacio verde turistas CDMX.",
    "h1": "Estación Mixiuhca — Línea 9 del Metro CDMX",
    "intro": "Mixiuhca es una estación ubicada en la alcaldía Iztapalapa que da acceso al Complexo Deportivo de la Ciudad de México, un área con múltiples instalaciones deportivas, parques y espacios verdes. Esta estación es importante para turistas interesados en deportes, eventos deportivos, y actividades al aire libre. La palabra Mixiuhca proviene del náhuatl y tiene profundas raíces en la historia prehispánica de la región.",
    "historia_icono": "Mixiuhca del náhuatl 'miztli' (luna) y 'ohuaca' (rodea), significa 'lugar rodeado por la luna'. Es un nombre prehispánico que refleja la cosmovisión mexica. El ícono incorpora referencias a la luna y la cosmología mesoamericana.",
    "tips": [
      "Accede a instalaciones deportivas: estadios, albercas, y canchas disponibles para actividades físicas",
      "Visita parques y espacios verdes para descanso y actividades recreativas en familia",
      "Durante el Mundial 2026, esta zona puede hospedar eventos deportivos clasificatorios o entrenamientos",
      "Camina por senderos verdes: es una zona más tranquila con naturaleza dentro de la ciudad",
      "Come en restaurantes deportivos o cafeterías cercanas a las instalaciones"
    ],
    "mejor_horario": "8:00 a 17:00 para actividades deportivas y recreativas. Fines de semana más concurridos y con mayor variedad de eventos.",
    "mundial_relevancia": "Instalaciones deportivas: posible hub de eventos FIFA 2026, entrenamientos o actividades complementarias. Espacio recreativo para turistas.",
    "descripcion_turistica": "Mixiuhca en zona de parques deportivos. Nombre prehispánico. Zona con tradición atlética. Para turistas FIFA 2026 interesados en deporte mexicano.",
    "accesibilidad": {
      "elevador": false,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Estación con rampa de acceso. Parques deportivos parcialmente accesibles."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Parques Deportivos Mixiuhca",
        "tipo": "Zona Deportiva",
        "distancia": "300m",
        "descripcion": "Instalaciones deportivas, piscinas y canchas"
      },
      {
        "nombre": "Bosque de Nativitas",
        "tipo": "Parque",
        "distancia": "400m",
        "descripcion": "Área verde para esparcimiento"
      },
      {
        "nombre": "Restaurante El Atleta",
        "tipo": "Restaurante",
        "distancia": "350m",
        "descripcion": "Comida saludable para deportistas"
      }
    ]
  },
  {
    "slug": "velodromo",
    "nombre": "Velódromo",
    "linea": "9",
    "alcaldia": "Venustiano Carranza",
    "tipo_zona": "deportivo-histórico",
    "pois": [
      {
        "nombre": "Estadio Olímpico Universitario",
        "tipo": "deportivo",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Ciudad Universitaria",
        "tipo": "educativo",
        "distancia": "10 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Velódromo CDMX — Ciclismo Olímpico | MetroGuia",
    "meta_description": "Velódromo de la Ciudad México: legado olímpico 1968, ciclismo pista profesional. Arquitectura deportiva histórica México. Posible venue FIFA 2026.",
    "h1": "Estación Velódromo — Línea 9 del Metro CDMX",
    "intro": "Velódromo es estación con acceso a Estadio Olímpico Universitario, sitio histórico de los Juegos Olímpicos 1968.",
    "historia_icono": "Estadio Olímpico fue sede principal de los Juegos Olímpicos de México 1968, evento histórico mundial.",
    "tips": [
      "Acceso a Estadio Olímpico: importante patrimonio olímpico",
      "Cercano a Ciudad Universitaria UNAM",
      "Sitio histórico para turistas interesados en historia olímpica",
      "Eventos deportivos ocasionales en estadio"
    ],
    "mejor_horario": "Todo el día (verificar eventos)",
    "mundial_relevancia": "Patrimonio olímpico 1968: contexto histórico para turistas FIFA 2026",
    "descripcion_turistica": "Velódromo accede a instalación ciclista olímpica. Sitio de eventos deportivos importantes. IMPRESCINDIBLE para turistas FIFA 2026 interesados en ciclismo y deporte.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Estación completamente accesible. Velódromo con servicios completos de accesibilidad para eventos."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00. Más concurrida días de competencia."
    },
    "lugares_cercanos": [
      {
        "nombre": "Velódromo de Agustín Melgar",
        "tipo": "Instalación Deportiva",
        "distancia": "150m",
        "descripcion": "Pista olímpica de ciclismo. Sede de competencias nacionales e internacionales. Capacidad 6,000 espectadores."
      },
      {
        "nombre": "Parque Deportivo",
        "tipo": "Zona Deportiva",
        "distancia": "200m",
        "descripcion": "Instalaciones deportivas complementarias"
      },
      {
        "nombre": "Restaurante El Ciclista",
        "tipo": "Restaurante",
        "distancia": "300m",
        "descripcion": "Comida para deportistas y espectadores"
      }
    ]
  },
  {
    "slug": "ciudad-deportiva",
    "nombre": "Ciudad Deportiva",
    "linea": "9",
    "alcaldia": "Iztacalco",
    "tipo_zona": "deportivo",
    "pois": [
      {
        "nombre": "Complejo Deportivo",
        "tipo": "deportivo",
        "distancia": "adyacente"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Ciudad Deportiva — Infraestructura deportiva",
    "meta_description": "Ciudad Deportiva: complejo deportivo comunitario con mercados y vida auténtica. Infraestructura deportiva activa en barrio del oriente.     ",
    "h1": "Estación Ciudad Deportiva — Línea 9 del Metro CDMX",
    "intro": "Ciudad Deportiva es estación de la Línea B cerca de complejo deportivo del oriente capitalino, zona con instalaciones recreativas y vida de barrio comercial. Para turistas del Mundial FIFA 2026 que deseen conocer infraestructura deportiva de barrio y vida auténtica, Ciudad Deportiva ofrece acceso a campos y canchas, mercados locales y la atmósfera cotidiana de capitalinos. Es parada para aficionados al deporte interesados en vida de barrio.",
    "historia_icono": "El ícono gris de la Línea B representa conexión de Ciudad Deportiva con infraestructura deportiva comunitaria, zona donde deporte y vida residencial convergen. Este símbolo evoca acceso equitativo a instalaciones recreativas.",
    "tips": [
      "Complejo deportivo: canchas de fútbol, basquetbol y otras instalaciones abiertas al público; requiere inscripción o pago de acceso",
      "Mercado local de comida: alimentos frescos y comidas rápidas a precios de barrio",
      "Tiendas de artículos deportivos: equipamiento para deportes a precios locales",
      "Ambiente deportivo: si eres aficionado a deportes, te encontrarás en zona con vida deportiva activa",
      "Llevar efectivo: comercio principalmente en efectivo en zona residencial"
    ],
    "mejor_horario": "Visita de 9 AM-6 PM entre semana para actividad comercial; sábados-domingos mayor actividad deportiva comunitaria.",
    "mundial_relevancia": "Relevancia media: turistas interesados en infraestructura deportiva comunitaria y vida de barrio encontrarán experiencia auténtica.",
    "descripcion_turistica": "Ciudad Deportiva es terminal de Línea B hacia el nororiente. Nombre que alude a zona de instalaciones deportivas. Importante para FIFA 2026 con capacidades atlético-recreativas.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Estación sin elevadores."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Unidad Deportiva Ciudad Deportiva",
        "tipo": "Deportes",
        "distancia": "300m",
        "descripcion": "Complejo de instalaciones deportivas"
      },
      {
        "nombre": "Estadio Azul",
        "tipo": "Deportes",
        "distancia": "1km",
        "descripcion": "Estadio histórico del Cruz Azul FC"
      },
      {
        "nombre": "Mercado Local",
        "tipo": "Comercio",
        "distancia": "400m",
        "descripcion": "Tianguis comunitario"
      }
    ]
  },
  {
    "slug": "puebla",
    "nombre": "Puebla",
    "linea": "9",
    "alcaldia": "Iztacalco",
    "tipo_zona": "residencial-comercial",
    "pois": [
      {
        "nombre": "Zona Puebla",
        "tipo": "residencial",
        "distancia": "adyacente"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Puebla CDMX — Zona Residencial Auténtica | MetroGuia",
    "meta_description": "Puebla: zona residencial auténtica Iztapalapa clase media. Tiendas locales, comida tradicional mexicana. Vida real capital. Hospedaje cómodo.",
    "h1": "Estación Puebla — Línea 9 del Metro CDMX",
    "intro": "La estación Puebla en Iztapalapa es una estación residencial y comercial que sirve a una zona de clase media con una atmósfera más tranquila que las zonas céntrica y comercial de la ciudad. Esta estación es interesante para turistas que buscan experimentar vida cotidiana mexicana, acceder a comercios locales, restaurantes auténticos y espacios públicos donde conocer a residentes locales. Es una ventana a la Ciudad de México que vive más allá de los circuitos turísticos principales.",
    "historia_icono": "Puebla hace referencia al estado de Puebla, uno de los más importantes histórica y culturalmente de México. El ícono del metro honra esta región con su herencia prehispánica y colonial, reconociendo la importancia de Puebla en la historia nacional.",
    "tips": [
      "Come en taquerías y fondas locales: comida auténtica mexicana a precios accesibles",
      "Compra en mercados locales y tiendas de barrio: vive como residente local, no como turista",
      "Recorre las calles a pie: descubre murales, pequeños negocios y vida urbana auténtica",
      "Interactúa con habitantes locales en plazas y parques: muchos hablan español coloquial mexicano",
      "Toma fotos de comercios y espacios públicos: es zona muy fotografiable e auténtica"
    ],
    "mejor_horario": "10:00 a 18:00 para comercio activo y vida urbana. Noches también activas para restaurantes y vida social.",
    "mundial_relevancia": "Experiencia cotidiana: zona residencial auténtica para turistas que quieren vida real mexicana, no solo circuitos turísticos.",
    "descripcion_turistica": "Estación Puebla en zona centro-oriente. Zona residencial y comercial importante. Para turistas FIFA 2026 buscando zona balanceada entre centro y periferia.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Acceso por escaleras. Piso táctil disponible."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V horario regular. Sábados hasta 01:00. Domingos y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Colonia Puebla",
        "tipo": "Zona Residencial",
        "distancia": "200m",
        "descripcion": "Zona residencial tradicional"
      },
      {
        "nombre": "Mercado Puebla",
        "tipo": "Mercado",
        "distancia": "250m",
        "descripcion": "Mercado local con productos variados"
      },
      {
        "nombre": "Restaurante Casa Poblana",
        "tipo": "Restaurante",
        "distancia": "300m",
        "descripcion": "Comida poblana y mexicana"
      }
    ]
  },
  {
    "slug": "pantitlan",
    "nombre": "Pantitlán",
    "linea": "9",
    "alcaldia": "Venustiano Carranza",
    "tipo_zona": "hub-terminal",
    "pois": [
      {
        "nombre": "Terminal Pantitlán",
        "tipo": "transporte",
        "distancia": "adyacente"
      },
      {
        "nombre": "Zona Comercial Pantitlán",
        "tipo": "comercial",
        "distancia": "2 min caminando"
      }
    ],
    "transferencias": [
      "1",
      "5",
      "A"
    ],
    "seo_title": "Metro Pantitlán LA CDMX — Línea Moderna | MetroGuia",
    "meta_description": "Pantitlán Línea A: acceso directo a zonas Este modernas Iztapalapa. Línea nueva 2018 con tecnología contemporánea avanzada. Transporte moderno.",
    "h1": "Estación Pantitlán — Línea 9 del Metro CDMX",
    "intro": "Pantitlán es una estación crucial de transferencia en el oriente de la CDMX, punto de conexión entre las Líneas 1, 5, 9 y A. Aunque es principalmente una estación de paso, la zona ofrece acceso a mercados tradicionales y transporte hacia municipios del Estado de México.",
    "historia_icono": "El ícono de la Línea A representa una flecha morada hacia el oriente, simbolizando la expansión del Metro hacia las nuevas zonas periféricas y densamente pobladas.",
    "tips": [
      "Pantitlán es punto de transferencia ideal para explorar diferentes líneas del Metro",
      "La zona es transitada pero segura durante el día; considera horarios de menos afluencia",
      "Acceso directo a zonas residenciales y de transporte comercial",
      "Explora la tecnología moderna de la línea más nueva del Metro"
    ],
    "mejor_horario": "Entre 10:00 y 14:00 horas para menor congestión",
    "mundial_relevancia": "Conexión importante para turistas que necesitan acceder a múltiples líneas del Metro durante el Mundial 2026",
    "descripcion_turistica": "Pantitlán es el terminal oriental de la Línea A, ubicado en la zona de Los Reyes Iztacalco. La estación conecta con importantes rutas de transporte hacia el oriente de la ciudad y zonas residenciales. Es punto de acceso para viajeros hacia el Estado de México.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Estación sin elevadores. Escaleras convencionales disponibles."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Colegio de Bachilleres No. 1",
        "tipo": "Institución Educativa",
        "distancia": "500m",
        "descripcion": "Centro de educación superior importante en la zona"
      },
      {
        "nombre": "Avenida Texcoco",
        "tipo": "Comercio",
        "distancia": "300m",
        "descripcion": "Zona con tiendas, farmacias y servicios varios"
      },
      {
        "nombre": "Mercado Los Reyes",
        "tipo": "Mercado",
        "distancia": "600m",
        "descripcion": "Mercado tradicional con productos locales y frescos"
      }
    ]
  },
  {
    "slug": "pantitlan",
    "nombre": "Pantitlán",
    "linea": "A",
    "alcaldia": "Venustiano Carranza, CDMX",
    "tipo_zona": "transporte",
    "pois": [
      {
        "nombre": "Mercado Morelos",
        "tipo": "mercado",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Zona residencial tradicional",
        "tipo": "residencial",
        "distancia": "alrededor"
      }
    ],
    "transferencias": [
      "1",
      "5",
      "9"
    ],
    "seo_title": "Metro Pantitlán LA CDMX — Línea Moderna | MetroGuia",
    "meta_description": "Pantitlán Línea A: acceso directo a zonas Este modernas Iztapalapa. Línea nueva 2018 con tecnología contemporánea avanzada. Transporte moderno.",
    "h1": "Metro Pantitlán: hub de transporte en Venustiano Carranza",
    "intro": "Pantitlán es una estación crucial de transferencia en el oriente de la CDMX, punto de conexión entre las Líneas 1, 5, 9 y A. Aunque es principalmente una estación de paso, la zona ofrece acceso a mercados tradicionales y transporte hacia municipios del Estado de México.",
    "historia_icono": "El ícono de la Línea A representa una flecha morada hacia el oriente, simbolizando la expansión del Metro hacia las nuevas zonas periféricas y densamente pobladas.",
    "tips": [
      "Pantitlán es punto de transferencia ideal para explorar diferentes líneas del Metro",
      "La zona es transitada pero segura durante el día; considera horarios de menos afluencia",
      "Acceso directo a zonas residenciales y de transporte comercial",
      "Explora la tecnología moderna de la línea más nueva del Metro"
    ],
    "mejor_horario": "Entre 10:00 y 14:00 horas para menor congestión",
    "mundial_relevancia": "Conexión importante para turistas que necesitan acceder a múltiples líneas del Metro durante el Mundial 2026",
    "descripcion_turistica": "Pantitlán es el terminal oriental de la Línea A, ubicado en la zona de Los Reyes Iztacalco. La estación conecta con importantes rutas de transporte hacia el oriente de la ciudad y zonas residenciales. Es punto de acceso para viajeros hacia el Estado de México.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Estación sin elevadores. Escaleras convencionales disponibles."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Colegio de Bachilleres No. 1",
        "tipo": "Institución Educativa",
        "distancia": "500m",
        "descripcion": "Centro de educación superior importante en la zona"
      },
      {
        "nombre": "Avenida Texcoco",
        "tipo": "Comercio",
        "distancia": "300m",
        "descripcion": "Zona con tiendas, farmacias y servicios varios"
      },
      {
        "nombre": "Mercado Los Reyes",
        "tipo": "Mercado",
        "distancia": "600m",
        "descripcion": "Mercado tradicional con productos locales y frescos"
      }
    ]
  },
  {
    "slug": "agricola-oriental",
    "nombre": "Agrícola Oriental",
    "linea": "A",
    "alcaldia": "Iztacalco, CDMX",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial y comercial",
        "tipo": "residencial",
        "distancia": "alrededor"
      },
      {
        "nombre": "Pequeños negocios locales",
        "tipo": "comercial",
        "distancia": "10 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Agrícola Oriental CDMX — Este | MetroGuia",
    "meta_description": "Agrícola Oriental: mercados locales vibrantes, comercio popular auténtico. Vida real Iztapalapa clase trabajadora. Comida auténtica zona Este.",
    "h1": "Metro Agrícola Oriental: el pulso residencial de Iztacalco",
    "intro": "Agrícola Oriental es la primera estación de la Línea A hacia el Este, ubicada en Iztapalapa. Esta zona es una ventana a la Ciudad de México más allá del Centro, donde viven millones de capitalinos en zonas residenciales auténticas. Agrícola Oriental ofrece experiencia de vida urbana mexicana real: mercados locales, comercios, restaurantes de barrio, y espacios públicos donde los turistas interesados pueden conocer la vida cotidiana de la capital. Es menos turística y más auténtica.",
    "historia_icono": "Agrícola Oriental refleja la historia de Iztapalapa como zona agrícola importante en tiempos prehispánicos y coloniales. El ícono incorpora elementos de agricultura y naturaleza, honrando la vocación histórica de estas tierras fértiles del Valle de México.",
    "tips": [
      "Visita mercados locales: experimenta comercio popular mexicano genuino, no organizado para turistas",
      "Come en fondas y restaurantes de barrio: comida mexicana auténtica a precios muy accesibles",
      "Recorre la zona a pie: descubre murales, espacios públicos y vida urbana real",
      "Compra artesanías y productos locales directamente: apoya economía local",
      "Fotografía: espacios auténticos son visualmente interesantes y menos sobreexplotados turísticamente"
    ],
    "mejor_horario": "8:00 a 17:00 para máxima actividad comercial y de mercados. Mañanas especialmente animadas.",
    "mundial_relevancia": "Experiencia auténtica Este: para turistas FIFA 2026 que quieren vivir CDMX real, no circuitos turísticos, zona accesible y segura.",
    "descripcion_turistica": "Agrícola Oriental conecta con la zona residencial de Los Reyes Iztacalco, caracterizada por vivienda de densidad media. La estación facilita acceso a comercios locales y servicios comunitarios del oriente capitalino.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Acceso mediante escaleras. Pasillos estrechos requieren especial atención."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Hospital Infantil de México",
        "tipo": "Salud",
        "distancia": "800m",
        "descripcion": "Centro hospitalario especializado de referencia nacional"
      },
      {
        "nombre": "Tianguis Agrícola Oriental",
        "tipo": "Comercio",
        "distancia": "200m",
        "descripcion": "Mercado informal con productos a precio accesible"
      },
      {
        "nombre": "Parque Ecológico Los Reyes",
        "tipo": "Recreación",
        "distancia": "1km",
        "descripcion": "Área verde con ciclovía y espacios para actividad física"
      }
    ]
  },
  {
    "slug": "canal-de-san-juan",
    "nombre": "Canal de San Juan",
    "linea": "A",
    "alcaldia": "Iztacalco, CDMX",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Canal de desagüe histórico",
        "tipo": "cultural-turistico",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "Zona residencial densamente poblada",
        "tipo": "residencial",
        "distancia": "alrededor"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Canal San Juan CDMX — Historia | MetroGuia",
    "meta_description": "Canal de San Juan: historia canales antiguos Tenochtitlán, arqueología urbana. Raíces prehispánicas CDMX vivas. Zona residencial Este con historia.",
    "h1": "Metro Canal de San Juan: patrimonio hídrico de Iztacalco",
    "intro": "Canal de San Juan es una estación en la Línea A ubicada en Iztapalapa que ofrece acceso a una zona histórica y tradicional de la ciudad. El Canal de San Juan tiene raíces en el sistema de canales prehispánico de Tenochtitlán, que fue transformado durante la colonia. Esta estación es interesante para turistas interesados en historia, arqueología urbana, y geografía de la ciudad. La zona combina historia y vida contemporánea.",
    "historia_icono": "Canal de San Juan forma parte del sistema de canales que era fundamental en Tenochtitlán. Durante la colonia el canal fue modificado. El ícono refleja la importancia histórica del agua en la Ciudad de México, elemento central de su identidad.",
    "tips": [
      "Busca restos del canal histórico: aunque modificado, puedes ver evidencia de su trayecto",
      "Aprecia paisaje urbano que mezcla historia prehispánica con desarrollo moderno",
      "Compra en tiendas locales: ropa, artículos diversos a precios accesibles",
      "Come en restaurantes locales: comida casera y tradicional mexicana",
      "Recorre a pie y observa arquitectura: mezcla interesante de periodos históricos"
    ],
    "mejor_horario": "9:00 a 17:00 para actividad comercial. Evita noches tarde por seguridad en zonas menos céntrica.",
    "mundial_relevancia": "Historia hidráulica prehispánica: para turistas interesados en arqueología urbana y geografía histórica CDMX.",
    "descripcion_turistica": "Canal de San Juan es estación histórica en la Línea A que comunica la zona de Los Reyes con el norte de Iztacalco. Su nombre remite al antiguo canal prehispánico que drenaba la cuenca de México.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Estación sin elevadores. Requiere uso de escaleras."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Iglesia de San Juan Bautista",
        "tipo": "Patrimonio",
        "distancia": "400m",
        "descripcion": "Templo colonial con valor histórico local"
      },
      {
        "nombre": "Centro Comercial Iztacalco",
        "tipo": "Comercio",
        "distancia": "500m",
        "descripcion": "Concentración de tiendas y servicios"
      },
      {
        "nombre": "Escuela Primaria Benito Juárez",
        "tipo": "Educación",
        "distancia": "300m",
        "descripcion": "Centro educativo importante en la comunidad"
      }
    ]
  },
  {
    "slug": "tepalcates",
    "nombre": "Tepalcates",
    "linea": "A",
    "alcaldia": "Iztapalapa, CDMX",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial de Iztapalapa",
        "tipo": "residencial",
        "distancia": "alrededor"
      },
      {
        "nombre": "Comercio local tradicional",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Tepalcates CDMX — Zona Residencial Este | MetroGuia",
    "meta_description": "Tepalcates: zona residencial Este, cerámica artesanía. Gastronomía local oaxaca, vida auténtica. Desarrollo urbano contemporáneo. Accesible.",
    "h1": "Metro Tepalcates: corazón residencial de Iztapalapa",
    "intro": "Tepalcates es una estación de la Línea A en Iztapalapa que representa la expansión metropolitana hacia zonas Este. El nombre Tepalcates viene del náhuatl y se refiere a fragmentos de cerámica, lo cual evoca el patrimonio arqueológico de la zona. Esta estación es acceso a una zona residencial de clase trabajadora donde viven miles de capitalinos, ofreciendo turistas una perspectiva auténtica de Ciudad de México contemporánea más allá de circuitos turísticos formales.",
    "historia_icono": "Tepalcates del náhuatl 'tepalli' (cerámica) y 'catl' (fragmentos), literalmente 'fragmentos de cerámica'. El ícono incorpora patrones cerámicos prehispánicos, honrando la riqueza arqueológica de la región y la artesanía mexicana tradicional.",
    "tips": [
      "Visita tiendas artesanales: cerámica y artículos de arte popular auténticos",
      "Come en comedores locales: experimenta gastronomía de barrio genuina",
      "Recorre parques locales: espacios públicos comunitarios lejos del turismo masivo",
      "Interactúa con residentes: la gente es amable con turistas genuinamente interesados",
      "Fotografía de murales y arte urbano: zonas residenciales tienen riqueza visual"
    ],
    "mejor_horario": "9:00 a 17:00 para máxima actividad. Zona es relativamente segura durante horas comerciales.",
    "mundial_relevancia": "Zona residencial Este: acceso a vida real de clase trabajadora mexicana. Perspectiva auténtica para turistas FIFA 2026.",
    "descripcion_turistica": "Tepalcates conecta zonas residenciales de Iztacalco con el transporte metro. El nombre proviene del náhuatl 'tepal-cates' (fragmentos de cerámica), recordando la tradición alfarera prehispánica de la región.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Estación con escaleras convencionales como acceso principal."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Mercado Tepalcates",
        "tipo": "Mercado",
        "distancia": "250m",
        "descripcion": "Tianguis con productos frescos y alimentos locales"
      },
      {
        "nombre": "Biblioteca Comunitaria",
        "tipo": "Cultura",
        "distancia": "600m",
        "descripcion": "Espacio cultural para la comunidad"
      },
      {
        "nombre": "Clínica de Salud IMSS",
        "tipo": "Salud",
        "distancia": "400m",
        "descripcion": "Centro de atención primaria para la zona"
      }
    ]
  },
  {
    "slug": "guelatao",
    "nombre": "Guelatao",
    "linea": "A",
    "alcaldia": "Iztapalapa, CDMX",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial densa",
        "tipo": "residencial",
        "distancia": "alrededor"
      },
      {
        "nombre": "Escuelas y servicios comunitarios",
        "tipo": "residencial",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Guelatao CDMX — Zona Residencial Oaxaca | MetroGuia",
    "meta_description": "Guelatao: zona residencial popular Iztapalapa historia Juárez. Mercados tradicionales, gastronomía oaxaca. Auténtica CDMX trabajadora. Real.",
    "h1": "Metro Guelatao: vida cotidiana de Iztapalapa",
    "intro": "Guelatao es una estación de la Línea A ubicada en Iztapalapa, nombrada en honor a Guelatao de Juárez en Oaxaca, tierra natal de Benito Juárez. Esta estación sirve a una zona residencial trabajadora con comercio local, mercados tradicionales, y espacios comunitarios. Ofrece a turistas una perspectiva de cómo viven millones de capitalinos: en zonas de clase media-baja pero con vibrante vida comunitaria, comercio activo, y carácter auténtico.",
    "historia_icono": "Guelatao es pueblo natal de Benito Juárez en Oaxaca. El ícono honra esta conexión con un prócer de la historia mexicana. Refleja la costumbre del Metro de CDMX de nombrar estaciones con figuras históricas y geográficas de México.",
    "tips": [
      "Compra en mercados tradicionales: frutas, verduras, productos locales a precios mayoristas",
      "Prueba comida oaxaqueña: la zona tiene tradición gastronómica oaxaca que es exquisita",
      "Visita ferreterías y tiendas de abarrotes: vida cotidiana mexicana en acción",
      "Camina por plazas públicas: espacios donde se reúnen residentes, especialmente fines de semana",
      "Toma fotos: zonas residenciales auténticas son visualmente ricas en detalles y colores"
    ],
    "mejor_horario": "8:00 a 18:00 para actividad comercial máxima. Mañanas más vibrantes, tardes con actividad sostenida.",
    "mundial_relevancia": "Zona residencial popular: experiencia auténtica de Ciudad de México trabajadora para turistas FIFA 2026 interesados en vida real.",
    "descripcion_turistica": "Guelatao honra la memoria de Benito Juárez, nacido en San Pablo Guelatao, Oaxaca. La estación comunica zonas residenciales de Iztacalco con el resto del sistema metro.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Acceso mediante escaleras. Espacios reducidos en plataforma."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Centro Cultural Benito Juárez",
        "tipo": "Cultura",
        "distancia": "500m",
        "descripcion": "Espacio dedicado a la historia y legado del Benemérito"
      },
      {
        "nombre": "Tianguis Guelatao",
        "tipo": "Comercio",
        "distancia": "300m",
        "descripcion": "Mercado tradicional con oferta variada"
      },
      {
        "nombre": "Parque Benito Juárez",
        "tipo": "Recreación",
        "distancia": "700m",
        "descripcion": "Área verde con áreas de esparcimiento"
      }
    ]
  },
  {
    "slug": "penon-viejo",
    "nombre": "Peñón Viejo",
    "linea": "A",
    "alcaldia": "Iztapalapa, CDMX",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial de Iztapalapa",
        "tipo": "residencial",
        "distancia": "alrededor"
      },
      {
        "nombre": "Servicios comerciales locales",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Peñón Viejo CDMX — Geografía Urbana | MetroGuia",
    "meta_description": "Peñón Viejo: geografía topográfica Iztapalapa, zona residencial. Desarrollo urbano contemporáneo. Perspectiva expansión metropolitana CDMX moderna.",
    "h1": "Metro Peñón Viejo: barrios tradicionales de Iztapalapa",
    "intro": "Peñón Viejo es estación de la Línea A ubicada en Iztapalapa, que accede a una zona nombrada por sus características geográficas: el Peñón o elevación rocosa que caracteriza el territorio. Esta es una zona residencial densamente poblada de la ciudad, donde viven cientos de miles de capitalinos. Para turistas interesados en antropología urbana, geografía urbana y vida real de la CDMX contemporánea, ofrece experiencia no filtrada de urbanidad mexicana.",
    "historia_icono": "Peñón Viejo refiere al accidente geográfico que caracteriza la zona: elevaciones rocosas del terreno. El ícono incorpora elementos rocosos y topográficos, honrando la geografía natural que ha definido el asentamiento urbano en esta región de Iztapalapa.",
    "tips": [
      "Explora la topografía: la zona tiene elevaciones que ofrecen perspectivas visuales interesantes",
      "Visita el Peñón mismo si es accesible: estructura geológica que ha definido la zona",
      "Come en restaurantes de barrio: comida mexicana casera a precios mínimos",
      "Recorre calles: comercio variado, tiendas, mercadillos de todo tipo",
      "Interactúa con gente: zona es amable, especialmente si muestras respeto genuino"
    ],
    "mejor_horario": "9:00 a 17:00 para exploración segura. Evita altas horas de la noche en zonas menos céntrica.",
    "mundial_relevancia": "Geografía urbana: para turistas interesados en cómo se desarrollan ciudades. Perspectiva sobre expansión metropolitana.",
    "descripcion_turistica": "Peñón Viejo es estación de la Línea A ubicada en zona residencial del oriente de Iztacalco. Facilita conectividad hacia áreas de vivienda popular y comercio local.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Estación sin equipamiento elevador. Solo escaleras disponibles."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Escuela Técnica Peñón Viejo",
        "tipo": "Educación",
        "distancia": "400m",
        "descripcion": "Centro formativo técnico-profesional"
      },
      {
        "nombre": "Mercado Peñón Viejo",
        "tipo": "Comercio",
        "distancia": "200m",
        "descripcion": "Tianguis diario con productos frescos y diversos"
      },
      {
        "nombre": "Clínica Comunitaria",
        "tipo": "Salud",
        "distancia": "500m",
        "descripcion": "Centro de salud de acceso comunitario"
      }
    ]
  },
  {
    "slug": "cabeza-de-juarez",
    "nombre": "Cabeza de Juárez",
    "linea": "A",
    "alcaldia": "Iztapalapa, CDMX",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial",
        "tipo": "residencial",
        "distancia": "alrededor"
      },
      {
        "nombre": "Comercio tradicional",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Cabeza Juárez CDMX — Residencial | MetroGuia",
    "meta_description": "Cabeza de Juárez: zona residencial Iztapalapa honor Benito Juárez. Comunidad auténtica capitalina vida urbana. Experiencia real CDMX profunda.",
    "h1": "Metro Cabeza de Juárez: acceso al sur de Iztapalapa",
    "intro": "Cabeza de Juárez es una estación de la Línea A en Iztapalapa, nombrada en honor a Benito Juárez, figura colosal de la historia mexicana. Esta estación sirve a una zona residencial con historia y carácter, donde viven capitalinos de múltiples generaciones. Ofrece a turistas acceso a barrios auténticos donde pueden experimentar vida cotidiana, comercio local, y espacios públicos comunitarios que forman la verdadera textura de la Ciudad de México contemporánea.",
    "historia_icono": "Cabeza de Juárez honra Benito Juárez, presidente clave del siglo XIX mexicano. El ícono utiliza elementos que evocan a este prócer y su importancia en la modernización de México. Refleja valor histórico que el Metro da a esta figura.",
    "tips": [
      "Compra en tiendas locales: desde ropa hasta alimentos, precio y autenticidad",
      "Come en comedores del barrio: cocina mexicana tradicional genuina",
      "Visita plazas comunitarias: especialmente vivos en fines de semana con familias",
      "Fotografía de comercios y espacios públicos: vida urbana no mediatizada",
      "Camina y observa: murales, graffiti artístico, expresión urbana auténtica"
    ],
    "mejor_horario": "8:00 a 18:00 para máxima actividad. Fines de semana especialmente vibrantes con vida comunitaria.",
    "mundial_relevancia": "Vida comunitaria auténtica: para turistas FIFA 2026 que quieren experiencia profunda de CDMX más allá de atractivos turísticos.",
    "descripcion_turistica": "Cabeza de Juárez rinde tributo al presidente Benito Juárez. La estación conecta zonas densamente pobladas de Iztacalco con oportunidades de empleo y servicios en toda la ciudad.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Acceso por escaleras. Zona operacional compacta."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Mercado Cabeza de Juárez",
        "tipo": "Comercio",
        "distancia": "150m",
        "descripcion": "Centro comercial tradicional muy concurrido"
      },
      {
        "nombre": "Monumento a Benito Juárez",
        "tipo": "Patrimonio",
        "distancia": "300m",
        "descripcion": "Escultura histórica de referencia local"
      },
      {
        "nombre": "Instituto Técnico Iztacalco",
        "tipo": "Educación",
        "distancia": "600m",
        "descripcion": "Centro de capacitación técnica"
      }
    ]
  },
  {
    "slug": "constitucion-de-1917",
    "nombre": "Constitución de 1917",
    "linea": "A",
    "alcaldia": "Iztapalapa, CDMX",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial de Iztapalapa",
        "tipo": "residencial",
        "distancia": "alrededor"
      },
      {
        "nombre": "Servicios comerciales",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Constitución 1917 CDMX — Historia | MetroGuia",
    "meta_description": "Constitución de 1917: historia legal mexicana fundacional zona residencial. Legado político México moderno. Hospedaje turistas FIFA accesible.",
    "h1": "Metro Constitución de 1917: homenaje al documento fundacional",
    "intro": "Constitución de 1917 lleva el nombre del documento que estableció las bases legales de México moderno. Esta estación de la Línea A conecta con zonas residenciales de Iztapalapa y representa el compromiso del transporte público con la historia nacional.",
    "historia_icono": "El nombre honra la Constitución Política de los Estados Unidos Mexicanos de 1917, el documento fundacional de México moderno.",
    "tips": [
      "Reflexiona sobre la importancia histórica del nombre mientras utilizas la estación",
      "Zona residencial de Iztapalapa",
      "Acceso a servicios y comercio local",
      "Reflexiona sobre historia legal mexicana visitando la zona"
    ],
    "mejor_horario": "Entre 10:00 y 15:00 horas",
    "mundial_relevancia": "Sin relevancia directa para el Mundial",
    "descripcion_turistica": "Constitución de 1917 conmemora la promulgación de la Constitución Mexicana. La estación es punto de acceso a zonas residenciales e industriales del norte de Iztacalco, con importante flujo de trabajadores.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Sin elevadores. Escaleras como único acceso vertical."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Museo Constitucional",
        "tipo": "Cultura",
        "distancia": "800m",
        "descripcion": "Espacio dedicado a la historia constitucional mexicana"
      },
      {
        "nombre": "Parque Industrial Iztacalco",
        "tipo": "Comercio",
        "distancia": "1km",
        "descripcion": "Zona de empleo industrial importante"
      },
      {
        "nombre": "Centro Comercial Avenida Morelos",
        "tipo": "Comercio",
        "distancia": "500m",
        "descripcion": "Tiendas y servicios variados"
      }
    ]
  },
  {
    "slug": "uam-i",
    "nombre": "UAM-I",
    "linea": "A",
    "alcaldia": "Iztapalapa, CDMX",
    "tipo_zona": "universitario",
    "pois": [
      {
        "nombre": "Universidad Autónoma Metropolitana Unidad Iztapalapa",
        "tipo": "universidad",
        "distancia": "10 min caminando"
      },
      {
        "nombre": "Campus universitario con cafeterías y espacios verdes",
        "tipo": "universitario",
        "distancia": "10 min caminando"
      },
      {
        "nombre": "Biblioteca y recursos académicos",
        "tipo": "universidad",
        "distancia": "12 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro UAM-I CDMX — Universidad | MetroGuia",
    "meta_description": "UAM-I: campus universitario importante, educación superior México. Cultura, eventos académicos para turistas. Institución moderna innovadora.",
    "h1": "Metro UAM-I: puerta a la educación de excelencia en la CDMX",
    "intro": "UAM-I (Universidad Autónoma Metropolitana, Unidad Iztapalapa) es estación de la Línea A ubicada en Iztapalapa, que da acceso al campus principal de una de las universidades más importantes de México. Esta estación es puerta a un mundo académico vibrante, con miles de estudiantes, investigadores, librerías, cafeterías, y espacios culturales. Para turistas interesados en educación superior mexicana, investigación, y vida estudiantil, es destino fascinante.",
    "historia_icono": "UAM es institución educativa moderna creada en 1974, revolucionaria en su modelo académico descentralizado. El ícono incorpora elementos educacionales y modernistas, reflejando el carácter innovador de esta universidad.",
    "tips": [
      "Visita el campus: arquitectura moderna interesante y espacios abiertos",
      "Compra en librerías de la universidad: libros mexicanos e internacionales a precios accesibles",
      "Come en cafeterías estudiantiles: comida barata y comida variada",
      "Participa en eventos: conferencias, exposiciones, y actividades culturales abiertas al público",
      "Observa vida universitaria: dinámicas académicas y estudiantiles mexicanas"
    ],
    "mejor_horario": "10:00 a 17:00 durante semestre activo. Períodos vacacionales menos animado pero abierto.",
    "mundial_relevancia": "Institución académica: perspectiva sobre educación superior mexicana. Eventos culturales para turistas FIFA 2026.",
    "descripcion_turistica": "UAM-I es terminal de la Línea A que conecta directamente con la Universidad Autónoma Metropolitana Iztapalapa. Campus importante con 25,000+ estudiantes, referencia educativa del oriente capitalino.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Acceso principalmente por escaleras. Conexión directa al campus universitario"
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Universidad Autónoma Metropolitana Iztapalapa",
        "tipo": "Educación",
        "distancia": "100m",
        "descripcion": "Campus universitario de nivel nacional"
      },
      {
        "nombre": "Biblioteca UAM-I",
        "tipo": "Cultura",
        "distancia": "200m",
        "descripcion": "Acervo bibliográfico especializado"
      },
      {
        "nombre": "Cafetería Estudiantil",
        "tipo": "Servicios",
        "distancia": "150m",
        "descripcion": "Comida y servicios para la comunidad universitaria"
      }
    ]
  },
  {
    "slug": "la-paz",
    "nombre": "La Paz",
    "linea": "A",
    "alcaldia": "Nezahualcóyotl, Estado de México",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Municipio de Nezahualcóyotl, Estado de México",
        "tipo": "residencial",
        "distancia": "alrededor"
      },
      {
        "nombre": "Centro comercial local",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Parques municipales",
        "tipo": "parque",
        "distancia": "10 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro La Paz CDMX — Terminal Línea A Este | MetroGuia",
    "meta_description": "La Paz: terminal Línea A Este expansión metropolitana. Final recorrido moderno línea nueva. Perspectiva CDMX expandida. Contemporáneo único.",
    "h1": "Metro La Paz: puerta a Nezahualcóyotl y el Estado de México",
    "intro": "La Paz es la estación terminal de la Línea A del Metro CDMX, ubicada en Iztapalapa. Es el punto más al Este de esta línea moderna. La zona es residencial con carácter de periferia urbana donde viven capitalinos en condiciones variadas. La estación La Paz representa el alcance moderno del Metro hacia zonas que históricamente carecían de transporte rápido. Es final de línea pero no final de experiencia: ofrece perspectiva sobre expansión metropolitana.",
    "historia_icono": "La Paz refiere a la paz como valor universal. El ícono incorpora elementos de tranquilidad y armonía, contrastando interesantemente con la dinámica urbana del resto de la línea. Representa destino final, punto de quietud después del viaje.",
    "tips": [
      "Usa La Paz como punto final de exploración de Línea A: ya completaste el recorrido Este",
      "Observa expansión urbana: desde Pantitlán hasta La Paz es viaje a través de metropolitanización",
      "Come en restaurantes locales: comida auténtica de barrio",
      "Compra en mercados: última parada antes del final de línea",
      "Reflexiona sobre viaje: La Paz es punto de reflexión sobre geografía y expansión urbana"
    ],
    "mejor_horario": "9:00 a 17:00 para actividad comercial. Zona tranquila comparada con Centro.",
    "mundial_relevancia": "Expansión metropolitana: punto final de línea A representa alcance moderno del Metro a zonas lejanas. Perspectiva sobre CDMX expandida.",
    "descripcion_turistica": "La Paz es terminal occidental de la Línea A en Iztapalapa. La estación marca la frontera entre la Ciudad de México y el Estado de México, siendo punto crítico para conectar viajeros intermunicipales.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Terminal sin elevadores. Acceso por escaleras convencionales."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Terminal Intermunicipal La Paz",
        "tipo": "Transporte",
        "distancia": "300m",
        "descripcion": "Conexión con Estado de México y región"
      },
      {
        "nombre": "Tianguis La Paz",
        "tipo": "Comercio",
        "distancia": "200m",
        "descripcion": "Mercado local muy concurrido"
      },
      {
        "nombre": "Centro de Salud La Paz",
        "tipo": "Salud",
        "distancia": "400m",
        "descripcion": "Clínica de servicios primarios"
      }
    ]
  },
  {
    "slug": "buenavista",
    "nombre": "Buenavista",
    "linea": "B",
    "alcaldia": "Cuauhtémoc, CDMX",
    "tipo_zona": "transporte",
    "pois": [
      {
        "nombre": "Tren Suburbano (Buenavista-Cuautitlán)",
        "tipo": "transporte",
        "distancia": "conexión directa"
      },
      {
        "nombre": "Central de Autobuses del Norte",
        "tipo": "transporte",
        "distancia": "500m caminando"
      },
      {
        "nombre": "Estación histórica de Ferrocarriles",
        "tipo": "cultural-turistico",
        "distancia": "200m caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Buenavista CDMX — Hub intermodal",
    "meta_description": "Buenavista: puerta intermodal del norte con Tren Suburbano, autobuses y Metro. Acceso rápido a Estadio Azteca y hoteles para turistas del Mundial 2026 que ",
    "h1": "Metro Buenavista: puerta intermodal al norte de la CDMX",
    "intro": "Buenavista es la puerta intermodal norte de la CDMX, conectando Tren Suburbano, autobuses de larga distancia y Metro en un solo hub. Para turistas del Mundial FIFA 2026 que llegan desde el extranjero, esta estación es el primer contacto con transporte público capitalino, ofreciendo acceso directo a hoteles, estadios y centros de convenciones. Su ubicación estratégica la convierte en nodo imprescindible para movilidad integrada.",
    "historia_icono": "El ícono gris de la Línea B representa conectividad y modernidad de Buenavista como estación intermodal de clase mundial. Este símbolo refuerza el rol de convergencia donde tren, autobús y metro se integran para facilitar movilidad de turistas internacionales.",
    "tips": [
      "Llega 15 minutos antes: hub muy concurrido en horas pico (7-9 AM, 5-7 PM); turistas necesitarán tiempo para orientarse",
      "Tren Suburbano directo a Cuautitlán: ideal para viajeros del norte sin necesidad de cambios de transporte",
      "Consigna de equipaje disponible: perfecta para turistas con maletas que necesitan guardarlas mientras exploran",
      "Oficinas de información turística: solicita mapas del Metro, información sobre estadios del Mundial y rutas a hoteles",
      "Cambio de divisas y cajeros automáticos: garantiza acceso a pesos mexicanos para gastos iniciales"
    ],
    "mejor_horario": "Visita entre 10 AM-12 PM o 2-4 PM para evitar aglomeraciones de trabajadores. Estos horarios permiten movimiento fluido y mejor acceso a servicios turísticos.",
    "mundial_relevancia": "CRÍTICA para el Mundial FIFA 2026: conexión Tren Suburbano ↔ Metro permite acceso rápido a Estadio Azteca y hoteles del corredor norte.",
    "descripcion_turistica": "Buenavista es terminal occidental de la Línea B con conexión única: el Tren Suburbano hacia Aeropuerto Internacional Benito Juárez. Zona con Biblioteca Vasconcelos, centro cultural de importancia nacional. Para FIFA 2026, hub crítico para llegada de viajeros internacionales.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Sin elevadores. Escaleras convencionales y pasajes amplios."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Tren Suburbano a Aeropuerto",
        "tipo": "Transporte",
        "distancia": "100m",
        "descripcion": "Conexión directa al Aeropuerto Internacional (25 minutos)"
      },
      {
        "nombre": "Biblioteca Vasconcelos",
        "tipo": "Cultura",
        "distancia": "400m",
        "descripcion": "Biblioteca megabiblioteca nacional, icono arquitectónico"
      },
      {
        "nombre": "Mercado de San Cándido",
        "tipo": "Comercio",
        "distancia": "500m",
        "descripcion": "Mercado tradicional con productos frescos"
      }
    ]
  },
  {
    "slug": "guerrero",
    "nombre": "Guerrero",
    "linea": "B",
    "alcaldia": "Cuauhtémoc, CDMX",
    "tipo_zona": "comercial",
    "pois": [
      {
        "nombre": "Galerías comerciales y tiendas",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Mercados tradicionales",
        "tipo": "mercado",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Zona de transporte de pasajeros",
        "tipo": "transporte",
        "distancia": "alrededor"
      }
    ],
    "transferencias": [
      "3"
    ],
    "seo_title": "Metro Guerrero — Centro artístico y cultural",
    "meta_description": "Guerrero: galerías de arte contemporáneo, librerías independientes y restaurantes tradicionales. Centro artístico y bohemio vibrante en el Centro Histórico",
    "h1": "Metro Guerrero: comercio y transferencia en el centro norte",
    "intro": "Guerrero es estación histórica de la Línea B en pleno Centro Histórico, conectando con barrio de tradición cultural donde galerías de arte, tiendas de antigüedades y calles peatonales confluyen. Para turistas del Mundial FIFA 2026, Guerrero ofrece acceso a zona artística vibrante con galeríascontempor neas, librerías independientes y restaurantes de cocina mexicana tradicional. La estación es puerta a arte y historia capitalina auténtica.",
    "historia_icono": "El ícono gris de la Línea B representa la energía artística de Guerrero, zona donde muralistas, artistas plásticos y bohemios transformaron el barrio en epicentro cultural. Este símbolo evoca la creatividad sin límites que define a esta zona histórica.",
    "tips": [
      "Galerías de arte en calles laterales: muchas gratuitas con obras de artistas mexicanos contemporáneos",
      "Librerías independientes como Madero Libros: busca ediciones mexicanas, poesía y literatura independiente",
      "Calle peatonal Madero: compra en tiendas de ropa, accesorios y artesanías directo de diseñadores locales",
      "Come en restaurantes tradicionales: mole negro, chiles rellenos y pozole preparados por cocineras de barrio",
      "Domingo de mercado: Avenida Madero con vendedores de arte, libros usados y artesanías locales"
    ],
    "mejor_horario": "Visita entre 11 AM-7 PM de martes a sábados cuando galerías y tiendas están activas. Domingos hay más vida callejera pero algunos lugares cierran.",
    "mundial_relevancia": "Relevancia media: turistas interesados en arte contemporáneo, literatura y vida bohemia encontrarán experiencia cultural auténtica cercana al Centro Histórico.",
    "descripcion_turistica": "Guerrero comunica la Línea B con la zona centro de Cuauhtémoc. Ubicada en el corazón del barrio histórico de Guerrero, con vivienda antigua y patrimonio arquitectónico significativo.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Estación antigua sin elevadores. Solo escaleras."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Barrio de Guerrero",
        "tipo": "Patrimonio",
        "distancia": "0m",
        "descripcion": "Zona histórica con casonas coloniales y arquitectura antigua"
      },
      {
        "nombre": "Iglesia de Santiago Tlatelolco",
        "tipo": "Patrimonio",
        "distancia": "600m",
        "descripcion": "Templo colonial de importancia histórica"
      },
      {
        "nombre": "Tianguis Guerrero",
        "tipo": "Comercio",
        "distancia": "300m",
        "descripcion": "Mercado informal diario"
      }
    ]
  },
  {
    "slug": "garibaldi-lagunilla",
    "nombre": "Garibaldi/Lagunilla",
    "linea": "B",
    "alcaldia": "Cuauhtémoc, CDMX",
    "tipo_zona": "cultural-turistico",
    "pois": [
      {
        "nombre": "Plaza Garibaldi (Mariachis)",
        "tipo": "cultural-turistico",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "Mercado de Lagunilla",
        "tipo": "mercado",
        "distancia": "3 min caminando"
      },
      {
        "nombre": "Iglesia de Nuestra Señora de Candelaria",
        "tipo": "cultural-turistico",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [
      "8"
    ],
    "seo_title": "Metro Garibaldi/Lagunilla — Cultura mexicana",
    "meta_description": "Garibaldi: Plaza histórica con mariachis en vivo, música folklórica auténtica y gastronomía mexicana tradicional. Entretenimiento cultural imprescindible p",
    "h1": "Metro Garibaldi/Lagunilla: corazón cultural de la CDMX",
    "intro": "Garibaldi-Lagunilla abre las puertas a tradición mexicana pura: Plaza Garibaldi, donde mariachis, música folklórica y gastronomía centenaria confluyen en atmósfera vibrante. Para turistas del Mundial FIFA 2026, esta estación ofrece experiencia cultural genuina, combinando entretenimiento nocturno, artesanías y restaurantes con recetas transmitidas generacionalmente. Es lugar perfecto para sumergirse en identidad cultural mexicana después de disfrutar de un partido.",
    "historia_icono": "El ícono gris de la Línea B representa convergencia de tradiciones: Garibaldi es símbolo de música folklórica mexicana donde generaciones de mariachis interpretan canciones del alma nacional. Este ícono evoca riqueza cultural que espera a turistas.",
    "tips": [
      "Plaza Garibaldi abre después de 6 PM: vive experiencia auténtica de mariachis y bandas cuando cae el atardecer",
      "Come tacos de barbacoa en El Torito o pulque tradicional en pulquerías centenarias para gastronomía auténtica",
      "Domingos hay mercado de artesanías en Lagunilla: compra cerámica, textiles y arte mexicano directo de artesanos",
      "Lleva efectivo: muchas cantinas y restaurantes tradicionales no aceptan tarjeta; cajeros disponibles cerca de estación",
      "Evita andar solo después de 11 PM; mantente en zonas bien iluminadas de Garibaldi"
    ],
    "mejor_horario": "Visita Plaza Garibaldi de 6-10 PM para mariachis en vivo; domingos de 9 AM-2 PM para mercado de Lagunilla con mejor seguridad.",
    "mundial_relevancia": "ALTA relevancia: turistas del Mundial buscarán experiencias mexicanas auténticas; Garibaldi es parada cultural imprescindible post-partido para entretenimiento.",
    "descripcion_turistica": "Garibaldi-Lagunilla conecta dos zonas icónicas del centro: la Plaza Garibaldi con música de mariachis de fama mundial, y el mercado de La Lagunilla con artesanías y antigüedades. Punto de atracción turística importante.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Estación sin elevadores. Acceso por escaleras."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Plaza Garibaldi",
        "tipo": "Cultura",
        "distancia": "200m",
        "descripcion": "Centro mundial de la música de mariachis"
      },
      {
        "nombre": "Mercado de La Lagunilla",
        "tipo": "Comercio",
        "distancia": "300m",
        "descripcion": "Mercado de antigüedades, artesanías y segunda mano"
      },
      {
        "nombre": "Museo de la Fotografía",
        "tipo": "Cultura",
        "distancia": "400m",
        "descripcion": "Galería de arte fotográfico"
      }
    ]
  },
  {
    "slug": "lagunilla",
    "nombre": "Lagunilla",
    "linea": "B",
    "alcaldia": "Cuauhtémoc, CDMX",
    "tipo_zona": "comercial",
    "pois": [
      {
        "nombre": "Mercado de Lagunilla",
        "tipo": "mercado",
        "distancia": "1 min caminando"
      },
      {
        "nombre": "Tiendas de antigüedades y artesanías",
        "tipo": "comercial",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "Zona residencial tradicional",
        "tipo": "residencial",
        "distancia": "alrededor"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Lagunilla — Mercado artesanal tradicional",
    "meta_description": "Lagunilla: mercado histórico con artesanías mexicanas auténticas, ropa vintage y souvenirs únicos. Comercio directo de artesanos locales a precios justos.",
    "h1": "Metro Lagunilla: compra y comercio tradicional",
    "intro": "Lagunilla es corazón del comercio popular y artesanal de la CDMX, mercado que ha funcionado durante décadas vendiendo souvenirs auténticos. Para turistas del Mundial FIFA 2026 que buscan artesanías mexicanas, prendas vintage y objetos únicos a precios accesibles, Lagunilla ofrece experiencia de compra imposible en centros comerciales. La zona refleja energía, creatividad y espíritu emprendedor capitalino.",
    "historia_icono": "El ícono gris de la Línea B simboliza conexión con corazón comercial y artesanal de la CDMX. Lagunilla destaca como mercado histórico donde generaciones de comerciantes vendieron productos únicos, representando accesibilidad y vitalidad económica.",
    "tips": [
      "Mercado de Lagunilla los domingos de 8 AM-3 PM: ropa vintage, discos de vinilo, libros antiguos y artesanías a precios bajos",
      "Regatea siempre: vendedores esperan negociar; consigue descuentos de 20-30% preguntando por mejor precio",
      "Desayuna tamales de rajas con queso en vendedores callejeros: desayuno tradicional que locales disfrutan por menos de 50 pesos",
      "Lleva mochila pequeña y cierra bolsillos: mercado concurrido con actividad de carteristas ocasionales",
      "Compra artesanías de Oaxaca (textiles, cerámica) y Guanajuato (alfarería): precios mayoristas ideales para regalos"
    ],
    "mejor_horario": "Domingos de 8 AM-2 PM: máxima variedad de vendedores, precios competitivos y ambiente festivo sin congestión nocturna.",
    "mundial_relevancia": "Relevancia media: turistas apreciarán compras de artesanías y souvenirs mexicanos; parada cultural valiosa para experiencia de compra auténtica.",
    "descripcion_turistica": "Lagunilla es acceso directo al famoso mercado de La Lagunilla, especializado en artesanías mexicanas, antigüedades, ropa vintage y productos diversos. Zona muy visitada por turistas nacionales e internacionales.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Sin elevadores. Escaleras como acceso principal."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Mercado de La Lagunilla",
        "tipo": "Comercio",
        "distancia": "100m",
        "descripcion": "Uno de los mercados más grandes de Latinoamérica"
      },
      {
        "nombre": "Templo de Lagunilla",
        "tipo": "Patrimonio",
        "distancia": "250m",
        "descripcion": "Iglesia colonial de referencia local"
      },
      {
        "nombre": "Restaurantes tradicionales",
        "tipo": "Gastronomía",
        "distancia": "300m",
        "descripcion": "Comida típica mexicana y antojitos"
      }
    ]
  },
  {
    "slug": "tepito",
    "nombre": "Tepito",
    "linea": "B",
    "alcaldia": "Cuauhtémoc, CDMX",
    "tipo_zona": "comercial",
    "pois": [
      {
        "nombre": "Tianguis de Tepito (comercio mayorista)",
        "tipo": "comercial",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "Centro Comercial informal",
        "tipo": "comercial",
        "distancia": "alrededor"
      },
      {
        "nombre": "Zona de ropa, electrónica y generales",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Tepito — Barrio bohemio y comercial",
    "meta_description": "Tepito: barrio bohemio con tiendas deportivas, ropa vintage, música en vivo y gastronomía tradicional mexicana. Pulso auténtico genuino de la Ciudad.",
    "h1": "Metro Tepito: el corazón del comercio mayorista capitalino",
    "intro": "Tepito es barrio bravo de la CDMX con historia revolucionaria y carácter rebelde donde comercio, música y cultura popular confluyen en calles vibrantes. Para turistas del Mundial FIFA 2026 que deseen pulso auténtico de la ciudad más allá de zonas turísticas convencionales, Tepito ofrece tiendas especializadas, ropa deportiva, música en vivo en bares y atmósfera genuinamente capitalina. Es zona donde se siente corazón popular de la CDMX.",
    "historia_icono": "El ícono gris de la Línea B representa resistencia y vitalidad de Tepito, barrio que reinventó constantemente su identidad manteniendo carácter bohemio y comercial. Este símbolo evoca creatividad sin límites que define a esta zona histórica.",
    "tips": [
      "Compra ropa deportiva de marcas internacionales: Tepito es destino de aficionados buscando uniformes de equipos del Mundial a mejor precio",
      "Bares con tocadas de música en vivo: La Perla Suiza y otros establecimientos ofrecen conciertos de bandas locales de acceso gratuito",
      "Desayuna en Café de Tepito: café de olla y pan de muerto todo el año; experiencia revolucionaria y auténtica",
      "Mercado de ropa usada y vintage: negocios venden prendas vintage, uniformes históricos y jeans de diseñador a fracción de precio",
      "Seguridad: mantente en calles principales, evita andar solo de noche, no lleves accesorios de lujo visibles"
    ],
    "mejor_horario": "Visita de 10 AM-6 PM entre lunes-viernes para movimiento comercial intenso pero controlado; evita fines de semana por aglomeración.",
    "mundial_relevancia": "Relevancia media-alta: turistas buscarán artículos deportivos y uniformes; Tepito ofrece precios competitivos y experiencia auténtica de barrio popular.",
    "descripcion_turistica": "Tepito es legendaria zona de comercio informal de la Ciudad de México, famosa por sus tiendas de ropa, electrónica y artículos varios a precios competitivos. Centro cultural con identidad propia muy marcada del barrio antiguo.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Estación sin elevadores. Acceso por escaleras convencionales."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Mercado de Tepito",
        "tipo": "Comercio",
        "distancia": "50m",
        "descripcion": "Centro comercial informal más grande de América Latina"
      },
      {
        "nombre": "Templo Mayor",
        "tipo": "Patrimonio",
        "distancia": "600m",
        "descripcion": "Ruinas aztecas y museo nacional de importancia"
      },
      {
        "nombre": "Barrio antiguo de Tepito",
        "tipo": "Cultura",
        "distancia": "0m",
        "descripcion": "Zona histórica con tradición barrial única"
      }
    ]
  },
  {
    "slug": "morelos",
    "nombre": "Morelos",
    "linea": "B",
    "alcaldia": "Cuauhtémoc, CDMX",
    "tipo_zona": "comercial",
    "pois": [
      {
        "nombre": "Zona comercial y de servicios",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Mercados y tiendas",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [
      "4"
    ],
    "seo_title": "Metro Morelos — Historia prehispánica colonial",
    "meta_description": "Morelos: Plaza Tres Culturas con arqueología prehispánica, iglesias coloniales históricas. Barrio histórico con patrimonio de tres culturas mexicanas.",
    "h1": "Metro Morelos: conexión comercial al norte del Centro",
    "intro": "Morelos es estación que conecta barrio residencial histórico donde arquitectura colonial se mezcla con construcción moderna, zona de transición entre Centro y periferias norte. Para turistas del Mundial FIFA 2026 buscando explorar más allá de circuitos turísticos convencionales, Morelos ofrece acceso a museos comunitarios, iglesias coloniales, restaurantes de cocina local y vida auténtica de barrios capitalinos. Ideal para turistas que desean descubrir México profundo en la capital.",
    "historia_icono": "El ícono gris de la Línea B evoca conexión de Morelos con memoria histórica del barrio, cuna de luchas sociales donde arquitectura colonial coexiste con construcción moderna. Este símbolo representa continuidad histórica de la CDMX.",
    "tips": [
      "Iglesia de Santiago de Tlatelolco: camina 800m para visitar templo colonial del siglo XVI con importancia arqueológica e histórica",
      "Plaza Tres Culturas: descubre sitio arqueológico prehispánico, arquitectura colonial y construcción moderna contando la historia de México",
      "Come en comedores locales: tacos, tortas y sopa de tortilla preparados por cocineras de barrio son mucho más económicos que zonas turísticas",
      "Librerías de segunda mano: busca libros en español y ediciones agotadas; zona preferida por estudiantes e intelectuales",
      "Lleva mapa o GPS: calles pueden resultar confusas para turistas sin orientación adecuada"
    ],
    "mejor_horario": "Visita de 9 AM-5 PM de martes-sábados para museos abiertos y actividad comercial óptima; domingos más tranquilo pero algunos lugares cierran.",
    "mundial_relevancia": "Relevancia media: turistas interesados en historia colonial y arqueología encontrarán valor; conexión con Plaza Tres Culturas es atractivo cultural significativo.",
    "descripcion_turistica": "Morelos honra al Siervo de la Nación José María Morelos. Estación en zona centro de la ciudad, conectando con barrios históricos y zonas comerciales tradicionales del nororiente capitalino.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Sin elevadores. Escaleras como acceso vertical único."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Monumento a Morelos",
        "tipo": "Patrimonio",
        "distancia": "300m",
        "descripcion": "Escultura dedicada al héroe independentista"
      },
      {
        "nombre": "Centro Comunitario Barrio Antiguo",
        "tipo": "Cultura",
        "distancia": "400m",
        "descripcion": "Espacios de actividad cultural local"
      },
      {
        "nombre": "Mercado Morelos",
        "tipo": "Comercio",
        "distancia": "200m",
        "descripcion": "Tianguis tradicional con productos variados"
      }
    ]
  },
  {
    "slug": "san-lazaro",
    "nombre": "San Lázaro",
    "linea": "B",
    "alcaldia": "Venustiano Carranza, CDMX",
    "tipo_zona": "transporte",
    "pois": [
      {
        "nombre": "Estación de Ferrocarril San Lázaro",
        "tipo": "transporte",
        "distancia": "100m caminando"
      },
      {
        "nombre": "Estación Intermodal de Transporte",
        "tipo": "transporte",
        "distancia": "alrededor"
      },
      {
        "nombre": "Terminal de Autobuses",
        "tipo": "transporte",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [
      "1"
    ],
    "seo_title": "Metro San Lázaro — Terminal intermodal este",
    "meta_description": "San Lázaro: Terminal Autobuses del Oriente, mercados locales vibr antes y vida de barrio. Puerta a zonas menos turísticas del oriente capitalino.",
    "h1": "Metro San Lázaro: puerta histórica al transporte nacional",
    "intro": "San Lázaro es estación de conexión importante conectando Centro Histórico con zonas este y sureste de la CDMX, ubicada cerca de Terminal de Autobuses del Oriente. Para turistas del Mundial FIFA 2026, San Lázaro ofrece acceso a zona de transporte intermodal, mercados locales, y puerta a exploraciones de barrios auténticos menos turísticos. Es punto de partida para viajeros que desean descubrir la CDMX desde perspectiva diferente.",
    "historia_icono": "El ícono gris de la Línea B representa conectividad de San Lázaro como estación terminal y de transbordo, histórica importancia como punto de distribución hacia oriente. Este símbolo evoca movimiento y conexión continua.",
    "tips": [
      "Terminal de Autobuses del Oriente (TAPO): acceso a autobuses hacia Veracruz, Puebla y destinos del oriente de México",
      "Mercado de comida rápida en TAPO: tamales, quesadillas y café preparados por vendedores de barrio a precios de mercado local",
      "Museo del Ferrocarril cercano: acceso a historia ferroviaria de México con locomotoras históricas y artefactos de época",
      "Zona residencial tranquila: si necesitas alejarte del caos turístico, barrios cercanos ofrecen vida cotidiana genuina",
      "Seguridad: mantente cerca de estación y mercado principal; lleva dirección en español para taxi si necesitas orientación"
    ],
    "mejor_horario": "Visita de 9 AM-6 PM para actividad de mercados y servicios en operación. Evita de noche cuando zona se vuelve más tranquila.",
    "mundial_relevancia": "Relevancia media: turistas interesados en transporte intermodal y vida de barrio auténtica encontrarán acceso a zonas menos turísticas del oriente.",
    "descripcion_turistica": "San Lázaro es terminal oriental de la Línea B con conexión crítica: TAPO (Terminal de Autobuses Poniente/Oriente), uno de los mayores centros de transporte de la Ciudad. Acceso a viajes foráneos hacia todo México.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Sin elevadores. Escaleras convencionales."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "TAPO (Terminal de Autobuses Oriente)",
        "tipo": "Transporte",
        "distancia": "300m",
        "descripcion": "Terminal de autobuses foráneos más importante del oriente"
      },
      {
        "nombre": "Estación de Ferrocarriles San Lázaro",
        "tipo": "Transporte",
        "distancia": "400m",
        "descripcion": "Terminal ferroviaria histórica"
      },
      {
        "nombre": "Mercado San Lázaro",
        "tipo": "Comercio",
        "distancia": "200m",
        "descripcion": "Tianguis tradicional con productos frescos"
      }
    ]
  },
  {
    "slug": "ricardo-flores-magon",
    "nombre": "Ricardo Flores Magón",
    "linea": "B",
    "alcaldia": "Venustiano Carranza, CDMX",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial",
        "tipo": "residencial",
        "distancia": "alrededor"
      },
      {
        "nombre": "Servicios comerciales",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Flores Magón — La Merced histórico",
    "meta_description": "Flores Magón: La Merced mercado mayorista más grande de México con frutas exóticas. Flores frescas y gastronomía auténtica del mercado tradicional.",
    "h1": "Metro Ricardo Flores Magón: homenaje a un revolucionario",
    "intro": "Ricardo Flores Magón es estación que abre puertas a La Merced, mercado más grande de la CDMX y centro de distribución de alimentos desde hace siglos. Para turistas del Mundial FIFA 2026, esta estación ofrece experiencia inmersiva del comercio mayorista mexicano: colores vibrantes, aromas intensos de frutas y flores frescas, energía pura del mercado que alimenta a millones. Experiencia sensorial y gastronómica única que pocos turistas descubren.",
    "historia_icono": "El ícono gris de la Línea B simboliza abundancia y vitalidad comercial de Flores Magón, conectando con La Merced, mercado icónico donde vendedores distribuyeron alimentos del país durante generaciones. Símbolo representa flujo constante de productos que sostienen la ciudad.",
    "tips": [
      "La Merced abre desde las 4 AM: madruga para vivir experiencia auténtica de vendedores mayoristas comprando frutas y verduras directamente",
      "Desayuna en La Merced: café con pan dulce en cafeterías informales; desayuno de trabajadores cuesta menos de 100 pesos",
      "Compra frutas y verduras exóticas: nopales, chayotes, zapotes y otras frutas mexicanas a precios de mayorista imposibles en supermercados",
      "Toma fotografías discretamente: algunos vendedores prefieren no ser fotografiados; respeta espacios de trabajo y negocios",
      "Lleva efectivo: La Merced es zona de comercio tradicional donde tarjetas son raras; múltiples cajeros en estación"
    ],
    "mejor_horario": "Madruga 5-8 AM para experiencia auténtica en plena actividad; después de 10 AM es más tranquilo pero menos vibrante.",
    "mundial_relevancia": "Relevancia media-alta: turistas interesados en gastronomía, mercados tradicionales y cocina mexicana auténtica encontrarán valor excepcional en La Merced.",
    "descripcion_turistica": "Ricardo Flores Magón conmemora al anarquista y revolucionario mexicano. Estación en zona centro-norte con importancia histórica y conectividad a barrios comerciales.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Estación antigua sin elevadores."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Casa Ricardo Flores Magón",
        "tipo": "Patrimonio",
        "distancia": "500m",
        "descripcion": "Sitio histórico dedicado al revolucionario"
      },
      {
        "nombre": "Biblioteca Pública",
        "tipo": "Cultura",
        "distancia": "400m",
        "descripcion": "Centro de recursos y acervo comunitario"
      },
      {
        "nombre": "Tianguis Ricardo Flores Magón",
        "tipo": "Comercio",
        "distancia": "250m",
        "descripcion": "Mercado tradicional diario"
      }
    ]
  },
  {
    "slug": "romero-rubio",
    "nombre": "Romero Rubio",
    "linea": "B",
    "alcaldia": "Venustiano Carranza, CDMX",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial",
        "tipo": "residencial",
        "distancia": "alrededor"
      },
      {
        "nombre": "Comercio local",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Romero Rubio — Historia y arqueología",
    "meta_description": "Romero Rubio: acceso directo a Plaza Tres Culturas con arqueología prehispánica. Iglesias coloniales e historia de las tres culturas mexicanas.",
    "h1": "Metro Romero Rubio: vida residencial de Venustiano Carranza",
    "intro": "Romero Rubio conecta barrio residencial e histórico de Morelos, zona de transición entre Centro Histórico y periferias norte de la CDMX. Para turistas del Mundial FIFA 2026 que buscan explorar más allá de circuitos turísticos convencionales, Romero Rubio ofrece acceso a museos comunitarios, iglesias coloniales, restaurantes de cocina local y vida auténtica de barrios capitalinos. Punto de partida ideal para turistas que desean descubrir México profundo en la capital.",
    "historia_icono": "El ícono gris de la Línea B evoca conexión de Romero Rubio con memoria histórica, barrio cuna de luchas sociales donde arquitectura colonial se mezcla con construcción moderna. Este símbolo representa continuidad histórica de la CDMX.",
    "tips": [
      "Iglesia de Santiago de Tlatelolco: camina 800m para visitar templo colonial del siglo XVI con importancia arqueológica",
      "Plaza Tres Culturas: descubre sitio arqueológico, arquitectura colonial y construcción moderna contando historia de México en un lugar",
      "Come en comedores locales: tacos, tortas y sopa de tortilla preparados por cocineras de barrio son económicos y auténticos",
      "Librerías de segunda mano: busca libros en español y ediciones agotadas; zona de estudiantes e intelectuales",
      "Seguridad: Romero Rubio es tranquilo pero residencial; lleva mapa o GPS para orientación adecuada"
    ],
    "mejor_horario": "Visita de 9 AM-5 PM de martes-sábados para museos abiertos; domingos es más tranquilo pero algunos lugares cierran.",
    "mundial_relevancia": "Relevancia media: turistas interesados en historia colonial y arqueología encontrarán valor; conexión con Plaza Tres Culturas es atractivo cultural.",
    "descripcion_turistica": "Romero Rubio comunica zonas residenciales del nororiente con la Línea B. Acceso a colonias pobladas con comercio local importante.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Sin elevadores. Solo escaleras."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Colonia Romero Rubio",
        "tipo": "Residencial",
        "distancia": "0m",
        "descripcion": "Zona densamente poblada de vivienda"
      },
      {
        "nombre": "Escuelas Primarias",
        "tipo": "Educación",
        "distancia": "400m",
        "descripcion": "Varios centros educativos en la zona"
      },
      {
        "nombre": "Mercadito Local",
        "tipo": "Comercio",
        "distancia": "200m",
        "descripcion": "Comercios de necesidad diaria"
      }
    ]
  },
  {
    "slug": "oceania",
    "nombre": "Oceanía",
    "linea": "B",
    "alcaldia": "Venustiano Carranza, CDMX",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial",
        "tipo": "residencial",
        "distancia": "alrededor"
      },
      {
        "nombre": "Servicios comerciales",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [
      "5"
    ],
    "seo_title": "Metro Oceanía — Barrio residencial y comercial",
    "meta_description": "Oceanía: mercados locales auténticos, gastronomía casera mexicana tradicional, vida cotidiana. Experiencia genuina del norte capitalino.    ",
    "h1": "Metro Oceanía: conexión al oriente de la CDMX",
    "intro": "Oceanía es estación de la Línea B en zona norte residencial y comercial, conectando comunidades del oriente capitalino con el Centro. Para turistas del Mundial FIFA 2026 que deseen experimentar vida auténtica de barrio capitalino más allá de zonas turísticas, Oceanía ofrece acceso a mercados locales, tiendas de comercio informal, restaurantes de comida casera y la cotidianidad genuina de los habitantes. Es parada secundaria pero valiosa para exploradores curiosos.",
    "historia_icono": "El ícono gris de la Línea B representa conexión de Oceanía con comunidades del norte capitalino, zona donde comercio informal y vida residencial convergen. Este símbolo evoca inclusión y equidad en movilidad de las periferias.",
    "tips": [
      "Mercado local de Oceanía: compra frutas, verduras y productos frescos a precios locales, no turísticos",
      "Comedores de mercado: tortas ahogadas, tamales y pozole preparados por cocineras de barrio; relación calidad-precio excelente",
      "Tiendas informales: ropa, zapatos y artículos prácticos a fracción de precio de tiendas departamentales",
      "Ambiente seguro: zona residencial tranquila pero poco turística; lleva efectivo y dirección escrita en español",
      "Evita tarjetas de crédito: comercio es principalmente en efectivo"
    ],
    "mejor_horario": "Visita de 9 AM-5 PM de lunes-viernes cuando mercados están activos pero sin congestión de fin de semana.",
    "mundial_relevancia": "Relevancia baja: turistas especializados interesados en vida de barrio auténtica y mercados locales encontrarán experiencia genuina.",
    "descripcion_turistica": "Oceanía conecta Línea B con zona residencial del nororiente. Nombre que remite a la geografía y modernidad en nomenclatura urbana.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Estación sin elevadores."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Parque Ecológico Oceanía",
        "tipo": "Recreación",
        "distancia": "500m",
        "descripcion": "Área verde importante de la zona"
      },
      {
        "nombre": "Centros Comerciales",
        "tipo": "Comercio",
        "distancia": "300m",
        "descripcion": "Tiendas y servicios variados"
      },
      {
        "nombre": "Clínica Comunitaria",
        "tipo": "Salud",
        "distancia": "400m",
        "descripcion": "Centro de salud local"
      }
    ]
  },
  {
    "slug": "aragon",
    "nombre": "Aragón",
    "linea": "B",
    "alcaldia": "Gustavo A. Madero, CDMX",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial",
        "tipo": "residencial",
        "distancia": "alrededor"
      },
      {
        "nombre": "Comercio local",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Aragón — Barrio comercial noreste",
    "meta_description": "Aragón: mercados locales activos, tiendas de comercio informal y gastronomía casera mexicana. Vida auténtica del barrio comercial noreste.  ",
    "h1": "Metro Aragón: entrada al norte de la CDMX",
    "intro": "Aragón es estación de la Línea B en zona comercial y residencial del noreste capitalino, conectando comunidades del oriente con red metropolitana. Para turistas del Mundial FIFA 2026 que busquen explorar autenticidad de barrios menos turísticos, Aragón ofrece acceso a mercados locales, tiendas de comercio informal, gastronomía casera y vida cotidiana de capitalinos residentes. Es parada para exploradores que desean alejarse de circuitos convencionales.",
    "historia_icono": "El ícono gris de la Línea B representa conexión de Aragón con zona comercial del noreste, donde economía informal y vida residencial convergen. Este símbolo evoca movilidad equitativa de comunidades menos privilegiadas.",
    "tips": [
      "Mercado de Aragón: frutas, verduras y productos locales a precios de comercio de barrio",
      "Comedores económicos: desayunos completos, comidas y cenas a precios accesibles para residentes locales",
      "Tiendas de ropa y zapatos: comercio informal de prendas nuevas y de temporada a precios inferiores a centros comerciales",
      "Caja de ahorros y servicios financieros locales: acceso a cambio de divisas si lo necesitas",
      "Mantente en zonas principales: es barrio tranquilo pero residencial; lleva GPS para orientación"
    ],
    "mejor_horario": "Visita de 10 AM-4 PM de martes-viernes para actividad comercial óptima sin aglomeración de fin de semana.",
    "mundial_relevancia": "Relevancia baja: turistas muy específicos interesados en vida auténtica de barrio y mercados locales encontrarán experiencia genuina.",
    "descripcion_turistica": "Aragón conecta Línea B hacia zonas del nororiente de la ciudad. Acceso a colonias residenciales importantes del área nororiental.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Sin equipamiento elevador."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Colonia Aragón",
        "tipo": "Residencial",
        "distancia": "0m",
        "descripcion": "Zona residencial establecida"
      },
      {
        "nombre": "Mercado Aragón",
        "tipo": "Comercio",
        "distancia": "200m",
        "descripcion": "Tianguis tradicional"
      },
      {
        "nombre": "Primaria Estatal",
        "tipo": "Educación",
        "distancia": "400m",
        "descripcion": "Centro educativo importante"
      }
    ]
  },
  {
    "slug": "villa-de-aragon",
    "nombre": "Villa de Aragón",
    "linea": "B",
    "alcaldia": "Gustavo A. Madero, CDMX",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial",
        "tipo": "residencial",
        "distancia": "alrededor"
      },
      {
        "nombre": "Comercio y servicios",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Villa de Aragón — Zona residencial",
    "meta_description": "Villa de Aragón: mercados locales amplios, vida cotidiana de barrio residencial popular. Experiencia auténtica del noreste capitalino genuino.",
    "h1": "Metro Villa de Aragón: vida residencial del norte",
    "intro": "Villa de Aragón es estación de la Línea B en zona residencial densa del noreste capitalino, conectando amplias comunidades con red de Metro. Para turistas del Mundial FIFA 2026 que deseen conocer vida cotidiana de barrios menos turísticos, Villa de Aragón ofrece mercados locales, tiendas de comercio informal, restaurantes de comida casera y la atmósfera genuina de capitalinos residentes. Es parada secundaria pero auténtica para exploradores curiosos.",
    "historia_icono": "El ícono gris de la Línea B simboliza conexión de Villa de Aragón con amplias comunidades residenciales, zona donde vida familiar y comercio informal convergen. Este símbolo evoca equidad en acceso a transporte público.",
    "tips": [
      "Mercado local amplio: frutas, verduras, carnes y productos frescos a precios de mayorista",
      "Papelerías y tiendas de uniformes escolares: servicios locales útiles para necesidades básicas",
      "Comedores de mercado: desayunos, comidas y cenas a precios de barrio accesibles",
      "Farmacias locales con servicios de farmacéutico: si necesitas medicinas, disponibles sin receta médica",
      "Seguridad: zona residencial tranquila pero poco turística; mantente en comercios principales"
    ],
    "mejor_horario": "Visita de 9 AM-5 PM entre semana para actividad comercial; evita fin de semana cuando es más tranquilo.",
    "mundial_relevancia": "Relevancia muy baja: zona residencial sin atractivos turísticos específicos; solo recomendada para exploradores muy específicos buscando vida cotidiana.",
    "descripcion_turistica": "Villa de Aragón continúa la extensión de la Línea B hacia el noreste. Zona residencial de mediana densidad con comercio local diversificado.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Estación sin elevadores."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Villa de Aragón",
        "tipo": "Residencial",
        "distancia": "0m",
        "descripcion": "Colonia residencial"
      },
      {
        "nombre": "Centro Comercial",
        "tipo": "Comercio",
        "distancia": "300m",
        "descripcion": "Tiendas y servicios"
      },
      {
        "nombre": "Parque Local",
        "tipo": "Recreación",
        "distancia": "400m",
        "descripcion": "Área verde comunitaria"
      }
    ]
  },
  {
    "slug": "bosque-de-aragon",
    "nombre": "Bosque de Aragón",
    "linea": "B",
    "alcaldia": "Gustavo A. Madero, CDMX",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Bosque y zona verde",
        "tipo": "parque",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Zona residencial",
        "tipo": "residencial",
        "distancia": "alrededor"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Bosque de Aragón — Parque y zona verde",
    "meta_description": "Bosque de Aragón: parque verde del noreste con ciclovías y mercados locales activos. Naturaleza urbana y vida de barrio en la CDMX.         ",
    "h1": "Metro Bosque de Aragón: naturaleza en el norte",
    "intro": "Bosque de Aragón es estación de la Línea B cerca del Parque Bosque de Aragón, zona verde del noreste capitalino con espacios de recreo y mercados locales. Para turistas del Mundial FIFA 2026 que deseen combinar naturaleza con vida auténtica de barrio, Bosque de Aragón ofrece acceso a parque verde, mercados de comercio informal y la atmósfera cotidiana de capitalinos residentes. Es parada para exploradores que buscan ecosistemas urbanos.",
    "historia_icono": "El ícono gris de la Línea B representa conexión de Bosque de Aragón con naturaleza urbana, zona donde parque verde y vida residencial convergen. Este símbolo evoca equidad en acceso a espacios recreativos de la ciudad.",
    "tips": [
      "Parque Bosque de Aragón: espacio verde con ciclovías, juegos infantiles y áreas de descanso; ideal para escapar del caos urbano",
      "Mercado local: frutas, verduras y productos locales a precios de barrio",
      "Tiendas de material deportivo: ropa y equipo para actividades al aire libre a precios bajos",
      "Restaurantes informales: comidas caseras en ambiente de familiares capitalinos",
      "Seguridad: parque y zona tranquila pero poco turística; evita andar solo al atardecer"
    ],
    "mejor_horario": "Visita de 9 AM-5 PM de martes-viernes para actividad comercial óptima; domingos el parque tiene más visitantes locales.",
    "mundial_relevancia": "Relevancia baja: zona residencial con parque; turistas específicos interesados en naturaleza urbana encontrarán valor.",
    "descripcion_turistica": "Bosque de Aragón es estación en Línea B que conecta con zona residencial y comercial del nororiente. Nombre que evoca tradición ecológica de la región.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Sin elevadores."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Bosque de Aragón",
        "tipo": "Recreación",
        "distancia": "200m",
        "descripcion": "Parque y área natural importante"
      },
      {
        "nombre": "Zona Comercial Bosque",
        "tipo": "Comercio",
        "distancia": "400m",
        "descripcion": "Tiendas y servicios variados"
      },
      {
        "nombre": "Clínica IMSS",
        "tipo": "Salud",
        "distancia": "500m",
        "descripcion": "Centro de salud"
      }
    ]
  },
  {
    "slug": "ciudad-deportiva",
    "nombre": "Ciudad Deportiva",
    "linea": "B",
    "alcaldia": "Iztacalco, CDMX",
    "tipo_zona": "cultural-turistico",
    "pois": [
      {
        "nombre": "Estadios y complejos deportivos",
        "tipo": "estadio",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Instalaciones de entrenamiento",
        "tipo": "estadio",
        "distancia": "alrededor"
      },
      {
        "nombre": "Parques deportivos",
        "tipo": "parque",
        "distancia": "10 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Ciudad Deportiva — Infraestructura deportiva",
    "meta_description": "Ciudad Deportiva: complejo deportivo comunitario con mercados y vida auténtica. Infraestructura deportiva activa en barrio del oriente.     ",
    "h1": "Metro Ciudad Deportiva: centro de entrenamiento capitalino",
    "intro": "Ciudad Deportiva es estación de la Línea B cerca de complejo deportivo del oriente capitalino, zona con instalaciones recreativas y vida de barrio comercial. Para turistas del Mundial FIFA 2026 que deseen conocer infraestructura deportiva de barrio y vida auténtica, Ciudad Deportiva ofrece acceso a campos y canchas, mercados locales y la atmósfera cotidiana de capitalinos. Es parada para aficionados al deporte interesados en vida de barrio.",
    "historia_icono": "El ícono gris de la Línea B representa conexión de Ciudad Deportiva con infraestructura deportiva comunitaria, zona donde deporte y vida residencial convergen. Este símbolo evoca acceso equitativo a instalaciones recreativas.",
    "tips": [
      "Complejo deportivo: canchas de fútbol, basquetbol y otras instalaciones abiertas al público; requiere inscripción o pago de acceso",
      "Mercado local de comida: alimentos frescos y comidas rápidas a precios de barrio",
      "Tiendas de artículos deportivos: equipamiento para deportes a precios locales",
      "Ambiente deportivo: si eres aficionado a deportes, te encontrarás en zona con vida deportiva activa",
      "Llevar efectivo: comercio principalmente en efectivo en zona residencial"
    ],
    "mejor_horario": "Visita de 9 AM-6 PM entre semana para actividad comercial; sábados-domingos mayor actividad deportiva comunitaria.",
    "mundial_relevancia": "Relevancia media: turistas interesados en infraestructura deportiva comunitaria y vida de barrio encontrarán experiencia auténtica.",
    "descripcion_turistica": "Ciudad Deportiva es terminal de Línea B hacia el nororiente. Nombre que alude a zona de instalaciones deportivas. Importante para FIFA 2026 con capacidades atlético-recreativas.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Estación sin elevadores."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Unidad Deportiva Ciudad Deportiva",
        "tipo": "Deportes",
        "distancia": "300m",
        "descripcion": "Complejo de instalaciones deportivas"
      },
      {
        "nombre": "Estadio Azul",
        "tipo": "Deportes",
        "distancia": "1km",
        "descripcion": "Estadio histórico del Cruz Azul FC"
      },
      {
        "nombre": "Mercado Local",
        "tipo": "Comercio",
        "distancia": "400m",
        "descripcion": "Tianguis comunitario"
      }
    ]
  },
  {
    "slug": "deportivo-oceania",
    "nombre": "Deportivo Oceanía",
    "linea": "B",
    "alcaldia": "Venustiano Carranza, CDMX",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Instalaciones deportivas",
        "tipo": "parque",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Zona residencial",
        "tipo": "residencial",
        "distancia": "alrededor"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Deportivo Oceanía — Complejo deportivo",
    "meta_description": "Deportivo Oceanía: instalaciones deportivas comunitarias y mercados locales vibr antes. Vida de barrio del oriente capitalino.              ",
    "h1": "Metro Deportivo Oceanía: deporte y residencia",
    "intro": "Deportivo Oceanía es estación de la Línea B cerca de complejo deportivo del oriente, zona con instalaciones recreativas y vida comercial de barrio. Para turistas del Mundial FIFA 2026 que deseen experimentar infraestructura deportiva comunitaria y autenticidad de barrio, Deportivo Oceanía ofrece acceso a campos deportivos, mercados locales y atmósfera cotidiana de capitalinos. Es parada para deportistas curiosos.",
    "historia_icono": "El ícono gris de la Línea B representa conexión de Deportivo Oceanía con vida deportiva comunitaria, zona donde instalaciones recreativas y comercio informal convergen. Este símbolo evoca acceso equitativo a deporte y recreación.",
    "tips": [
      "Complejo deportivo acceso público: verifica horarios y tarifas para usar instalaciones de fútbol, basquetbol u otro deporte",
      "Mercado local: frutas, verduras y comidas rápidas a precios de barrio",
      "Tiendas de ropa deportiva: equipo para deporte a precios bajos",
      "Ambiente de familias locales: fin de semana mucha actividad recreativa comunitaria",
      "Mantente en zonas principales: es barrio tranquilo pero residencial"
    ],
    "mejor_horario": "Visita de 9 AM-6 PM entre semana; sábados-domingos mayor actividad deportiva y familiar.",
    "mundial_relevancia": "Relevancia media: turistas interesados en deporte comunitario y vida de barrio encontrarán experiencia auténtica.",
    "descripcion_turistica": "Deportivo Oceanía es estación de Línea B cercana a instalaciones deportivas del noreste. Acceso a zonas de recreación y actividades físicas.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Sin elevadores."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Parque Deportivo Oceanía",
        "tipo": "Deportes",
        "distancia": "250m",
        "descripcion": "Instalaciones de recreación física"
      },
      {
        "nombre": "Pistas de Atletismo",
        "tipo": "Deportes",
        "distancia": "300m",
        "descripcion": "Centro de entrenamiento"
      },
      {
        "nombre": "Comercio Cercano",
        "tipo": "Comercio",
        "distancia": "400m",
        "descripcion": "Tiendas y cafeterías"
      }
    ]
  },
  {
    "slug": "nezahualcoyotl",
    "nombre": "Nezahualcóyotl",
    "linea": "B",
    "alcaldia": "Nezahualcóyotl, Estado de México",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Municipio de Nezahualcóyotl",
        "tipo": "residencial",
        "distancia": "alrededor"
      },
      {
        "nombre": "Centro comercial local",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Nezahualcóyotl — Zona residencial noreste",
    "meta_description": "Nezahualcóyotl: mercados locales vibrantes, vida cotidiana de barrio popular del norte. Experiencia auténtica del noreste capitalino genuino.",
    "h1": "Metro Nezahualcóyotl: puerta al Estado de México",
    "intro": "Nezahualcóyotl es estación de la Línea B en zona residencial densa del noreste, conectando amplias comunidades con la red metropolitana. Para turistas del Mundial FIFA 2026 que deseen conocer vida cotidiana de barrios populares del noreste, Nezahualcóyotl ofrece mercados locales vibrantes, tiendas de comercio informal, gastronomía casera y la atmósfera genuina de capitalinos residentes. Es parada secundaria pero auténtica.",
    "historia_icono": "El ícono gris de la Línea B representa conexión de Nezahualcóyotl con amplias comunidades del noreste, zona donde vida residencial y comercio informal convergen. Este símbolo evoca equidad en acceso a transporte.",
    "tips": [
      "Mercado local extenso: frutas, verduras, carnes y productos frescos a precios de mayorista local",
      "Desayunos de barrio: quesadillas, tamales y café a precios accesibles para residentes",
      "Tiendas de uniformes escolares y papelerías: servicios prácticos para necesidades básicas",
      "Pharmacias de barrio: medicinas disponibles sin receta médica a precios locales",
      "Seguridad: zona residencial tranquila pero poco turística; mantente en comercios principales"
    ],
    "mejor_horario": "Visita de 8 AM-5 PM entre semana para actividad comercial óptima sin aglomeración.",
    "mundial_relevancia": "Relevancia muy baja: zona residencial sin atractivos específicos; solo para exploradores muy específicos.",
    "descripcion_turistica": "Nezahualcóyotl honra al poeta-rey azteca. Estación en Línea B que comunica con zona del noreste de la ciudad. Importante conectividad a área metropolitana.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Estación sin elevadores."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Monumento Nezahualcóyotl",
        "tipo": "Patrimonio",
        "distancia": "400m",
        "descripcion": "Escultura dedicada al poeta-rey"
      },
      {
        "nombre": "Biblioteca Comunitaria",
        "tipo": "Cultura",
        "distancia": "500m",
        "descripcion": "Centro cultural local"
      },
      {
        "nombre": "Tianguis Nezahualcóyotl",
        "tipo": "Comercio",
        "distancia": "300m",
        "descripcion": "Mercado tradicional"
      }
    ]
  },
  {
    "slug": "impulsora",
    "nombre": "Impulsora",
    "linea": "B",
    "alcaldia": "Ecatepec, Estado de México",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Municipio de Ecatepec",
        "tipo": "residencial",
        "distancia": "alrededor"
      },
      {
        "nombre": "Zona residencial y comercial",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Impulsora — Zona residencial",
    "meta_description": "Impulsora: mercados locales auténticos, vida cotidiana de barrio residencial del norte. Experiencia genuina del noreste capitalino.         ",
    "h1": "Metro Impulsora: acceso a Ecatepec",
    "intro": "Impulsora es estación de la Línea B en zona residencial del noreste, conectando comunidades con la red de Metro. Para turistas del Mundial FIFA 2026 que deseen conocer vida auténtica de barrios menos turísticos, Impulsora ofrece mercados locales, tiendas de comercio informal y la atmósfera cotidiana de capitalinos residentes. Es parada secundaria para exploradores curiosos.",
    "historia_icono": "El ícono gris de la Línea B representa conexión de Impulsora con comunidades residenciales del noreste, zona donde vida cotidiana y comercio convergen. Este símbolo evoca movilidad equitativa.",
    "tips": [
      "Mercado local: productos frescos y alimentos a precios de barrio",
      "Comedores informales: desayunos y comidas caseras a precios accesibles",
      "Tiendas de ropa y accesorios: comercio informal con precios bajos",
      "Farmacias locales: medicinas y servicios de farmacéutico disponibles",
      "Lleva efectivo: zona de comercio principalmente en efectivo"
    ],
    "mejor_horario": "Visita de 9 AM-4 PM entre semana para actividad comercial sin aglomeración.",
    "mundial_relevancia": "Relevancia muy baja: zona residencial sin atractivos específicos.",
    "descripcion_turistica": "Impulsora es estación de Línea B conectando zonas residenciales del noreste. Acceso a comercio y servicios de barrio.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Sin elevadores."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Colonia Impulsora",
        "tipo": "Residencial",
        "distancia": "0m",
        "descripcion": "Zona residencial establecida"
      },
      {
        "nombre": "Mercado Impulsora",
        "tipo": "Comercio",
        "distancia": "200m",
        "descripcion": "Tianguis local"
      },
      {
        "nombre": "Clínica Comunitaria",
        "tipo": "Salud",
        "distancia": "400m",
        "descripcion": "Centro de salud"
      }
    ]
  },
  {
    "slug": "rio-de-los-remedios",
    "nombre": "Río de los Remedios",
    "linea": "B",
    "alcaldia": "Ecatepec, Estado de México",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Río de los Remedios",
        "tipo": "cultural-turistico",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "Zona residencial",
        "tipo": "residencial",
        "distancia": "alrededor"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Río de los Remedios — Zona residencial",
    "meta_description": "Río de los Remedios: mercados locales, vida cotidiana de barrio auténtico. Experiencia genuina del oriente capitalino fuera de circuitos.   ",
    "h1": "Metro Río de los Remedios: naturaleza en Ecatepec",
    "intro": "Río de los Remedios es estación de la Línea B en zona residencial del oriente, conectando comunidades con red metropolitana. Para turistas del Mundial FIFA 2026 que deseen explorar autenticidad de barrios menos convencionales, Río de los Remedios ofrece mercados locales, tiendas de comercio informal y vida cotidiana genuina de capitalinos residentes. Es parada para exploradores de barrios auténticos.",
    "historia_icono": "El ícono gris de la Línea B representa conexión de Río de los Remedios con comunidades del oriente, zona donde naturaleza local y vida residencial convergen. Este símbolo evoca equidad en movilidad.",
    "tips": [
      "Mercado local: frutas, verduras y productos frescos a precios locales",
      "Tiendas de comercio informal: ropa, zapatos y artículos prácticos a precios bajos",
      "Comedores de barrio: desayunos y comidas caseras a precios accesibles",
      "Servicios locales: farmacias, panaderías y abarroterías de barrio",
      "Mantente en zonas principales: es tranquilo pero poco turístico"
    ],
    "mejor_horario": "Visita de 9 AM-5 PM entre semana para actividad comercial óptima.",
    "mundial_relevancia": "Relevancia muy baja: zona residencial sin atractivos turísticos específicos.",
    "descripcion_turistica": "Río de los Remedios es estación de Línea B en noreste. Nombre evocando geografía natural de la cuenca. Acceso a zonas residenciales importantes.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Estación sin elevadores."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Río de los Remedios",
        "tipo": "Naturaleza",
        "distancia": "300m",
        "descripcion": "Cause fluvial con ciclovía"
      },
      {
        "nombre": "Parque Ecológico",
        "tipo": "Recreación",
        "distancia": "500m",
        "descripcion": "Área verde importante"
      },
      {
        "nombre": "Comercios Locales",
        "tipo": "Comercio",
        "distancia": "250m",
        "descripcion": "Tiendas y servicios"
      }
    ]
  },
  {
    "slug": "muzquiz",
    "nombre": "Múzquiz",
    "linea": "B",
    "alcaldia": "Ecatepec, Estado de México",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial",
        "tipo": "residencial",
        "distancia": "alrededor"
      },
      {
        "nombre": "Comercio local",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Múzquiz — Zona residencial oriente",
    "meta_description": "Múzquiz: mercados locales auténticos, vida cotidiana de barrio residencial del oriente. Experiencia genuina para exploradores dedicados.    ",
    "h1": "Metro Múzquiz: vida residencial del norte",
    "intro": "Múzquiz es estación de la Línea B en zona residencial del oriente, conectando comunidades con red metropolitana. Para turistas del Mundial FIFA 2026 que deseen conocer autenticidad de barrios residenciales, Múzquiz ofrece mercados locales, tiendas de comercio informal y la vida cotidiana de capitalinos residentes. Es parada para exploradores interesados en barrios genuinos.",
    "historia_icono": "El ícono gris de la Línea B representa conexión de Múzquiz con comunidades del oriente, zona donde vida residencial y comercio informal convergen. Este símbolo evoca equidad en transporte.",
    "tips": [
      "Mercado local: productos frescos a precios de barrio",
      "Tiendas informales: ropa y artículos prácticos a precios bajos",
      "Comedores de barrio: comidas caseras a precios accesibles",
      "Farmacias y servicios locales: disponibles sin necesidad de desplazarse",
      "Lleva efectivo: comercio principalmente en efectivo"
    ],
    "mejor_horario": "Visita de 9 AM-5 PM entre semana para actividad comercial.",
    "mundial_relevancia": "Relevancia muy baja: zona residencial sin atractivos específicos.",
    "descripcion_turistica": "Muzquiz es estación de Línea B en zona noreste. Conecta colonias residenciales del área metropolitana con acceso a centro de la ciudad.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Sin elevadores."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Colonia Muzquiz",
        "tipo": "Residencial",
        "distancia": "0m",
        "descripcion": "Zona densamente poblada"
      },
      {
        "nombre": "Mercado Municipal",
        "tipo": "Comercio",
        "distancia": "300m",
        "descripcion": "Tianguis tradicional"
      },
      {
        "nombre": "Instituto Técnico",
        "tipo": "Educación",
        "distancia": "500m",
        "descripcion": "Centro de capacitación"
      }
    ]
  },
  {
    "slug": "olimpica",
    "nombre": "Olímpica",
    "linea": "B",
    "alcaldia": "Ecatepec, Estado de México",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial",
        "tipo": "residencial",
        "distancia": "alrededor"
      },
      {
        "nombre": "Servicios comerciales",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Olímpica — Legado olímpico deportivo",
    "meta_description": "Olímpica: instalaciones deportivas históricas y mercados locales vibrantes del oriente. Legado de Juegos Olímpicos en la CDMX.              ",
    "h1": "Metro Olímpica: antesala a Ciudad Azteca",
    "intro": "Olímpica es estación de la Línea B en zona donde infraestructura deportiva histórica converge con vida residencial del oriente capitalino. Para turistas del Mundial FIFA 2026 que deseen conocer legado olímpico y vida de barrio, Olímpica ofrece acceso a instalaciones deportivas, mercados locales y atmósfera cotidiana de capitalinos. Es parada para aficionados al deporte interesados en historia olímpica.",
    "historia_icono": "El ícono gris de la Línea B representa conexión de Olímpica con infraestructura deportiva histórica de CDMX, zona donde legado de Juegos Olímpicos y vida residencial convergen. Este símbolo evoca excelencia deportiva comunitaria.",
    "tips": [
      "Instalaciones olímpicas históricas: verifica qué complejos están abiertos al público y horarios de acceso",
      "Mercado local: frutas, verduras y comidas rápidas a precios de barrio",
      "Tiendas de artículos deportivos: equipo para deporte a precios locales",
      "Ambiente deportivo: si buscas vida de barrio con influencia deportiva, lo encontrarás aquí",
      "Seguridad: zona tranquila pero poco turística"
    ],
    "mejor_horario": "Visita de 9 AM-5 PM entre semana para actividad comercial; sábados-domingos actividad deportiva.",
    "mundial_relevancia": "Relevancia media: turistas interesados en legado olímpico e historia deportiva de México encontrarán valor.",
    "descripcion_turistica": "Olímpica conmemora los Juegos Olímpicos 1968. Terminal de Línea B hacia noreste. Importancia histórica en desarrollo urbano y deportivo de la ciudad.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Estación sin elevadores."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Unidad Deportiva Olímpica",
        "tipo": "Deportes",
        "distancia": "400m",
        "descripcion": "Instalaciones deportivas heredadas de 1968"
      },
      {
        "nombre": "Estadio Olimpiada",
        "tipo": "Deportes",
        "distancia": "600m",
        "descripcion": "Venue histórico"
      },
      {
        "nombre": "Museo Olímpico",
        "tipo": "Cultura",
        "distancia": "700m",
        "descripcion": "Centro dedicado a historia olímpica"
      }
    ]
  },
  {
    "slug": "ciudad-azteca",
    "nombre": "Ciudad Azteca",
    "linea": "B",
    "alcaldia": "Ecatepec, Estado de México",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Municipio de Ecatepec, Estado de México",
        "tipo": "residencial",
        "distancia": "alrededor"
      },
      {
        "nombre": "Zona residencial planificada",
        "tipo": "residencial",
        "distancia": "alrededor"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Ciudad Azteca — Legado prehispánico",
    "meta_description": "Ciudad Azteca: mercados locales auténticos, vida de barrio y legado prehispánico. Experiencia genuina del noreste capitalino.               ",
    "h1": "Metro Ciudad Azteca: terminus del norte metropolitano",
    "intro": "Ciudad Azteca es estación de la Línea B en zona residencial del noreste, conectando comunidades amplias con red metropolitana. Para turistas del Mundial FIFA 2026 que deseen explorar autenticidad de barrios residenciales populares, Ciudad Azteca ofrece mercados locales vibrantes, tiendas de comercio informal y la vida cotidiana genuina de capitalinos residentes. Es parada para exploradores de barrios auténticos.",
    "historia_icono": "El ícono gris de la Línea B representa conexión de Ciudad Azteca con legado prehispánico y comunidades modernas del noreste, zona donde raíces históricas y vida residencial convergen. Este símbolo evoca continuidad de civilización mexicana.",
    "tips": [
      "Mercado local extenso: frutas, verduras, carnes y productos frescos a precios de mayorista local",
      "Desayunos de barrio: quesadillas, tamales y café a precios accesibles",
      "Tiendas de ropa y zapatos: comercio informal a precios bajos",
      "Servicios locales: farmacias, panaderías y tiendas de necesidades básicas",
      "Mantente en comercios principales: zona tranquila pero residencial"
    ],
    "mejor_horario": "Visita de 8 AM-5 PM entre semana para actividad comercial óptima.",
    "mundial_relevancia": "Relevancia muy baja: zona residencial sin atractivos específicos; solo para exploradores muy dedicados.",
    "descripcion_turistica": "Ciudad Azteca es terminal oriental de Línea B. Último paradero conectando con zona del noreste. Nombre evocando identidad prehispánica de la región.",
    "accesibilidad": {
      "elevador": false,
      "rampa": false,
      "piso_tactil": true,
      "notas": "Terminal sin elevadores."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Centro Comercial Ciudad Azteca",
        "tipo": "Comercio",
        "distancia": "300m",
        "descripcion": "Zona comercial importante"
      },
      {
        "nombre": "Tianguis Ciudad Azteca",
        "tipo": "Comercio",
        "distancia": "200m",
        "descripcion": "Mercado tradicional muy concurrido"
      },
      {
        "nombre": "Escuelas Secundarias",
        "tipo": "Educación",
        "distancia": "500m",
        "descripcion": "Centros educativos locales"
      }
    ]
  },
  {
    "slug": "mixcoac",
    "nombre": "Mixcoac",
    "linea": "12",
    "alcaldia": "Benito Juárez, CDMX",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial de Benito Juárez",
        "tipo": "residencial",
        "distancia": "alrededor"
      },
      {
        "nombre": "Comercio y servicios",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [
      "7"
    ],
    "seo_title": "Metro Mixcoac — Arte y diseño contemporáneo",
    "meta_description": "Mixcoac: galerías de arte contemporáneo, cafeterías de especialidad y restaurantes vanguardistas. Diseño mexicano moderno en barrio creativo.",
    "h1": "Metro Mixcoac: inicio de la línea dorada hacia el sur",
    "intro": "Mixcoac es estación de la Línea 12 ('Línea Dorada') en Benito Juárez, barrio de clase media con galerías de arte, restaurantes modernos y vida cultural activa. Para turistas del Mundial FIFA 2026, Mixcoac ofrece acceso a zona artística vibrante donde galerías coexisten con cafeterías de especialidad, librerías y tiendas de diseño mexicano. La zona perfecciona experiencia de turista buscando modernidad con raíces culturales.",
    "historia_icono": "El ícono dorado de la Línea 12 ('Línea Dorada') refleja riqueza cultural y artística de Mixcoac, zona donde artistas y emprendedores creativos transformaron el barrio. Este símbolo dorado evoca calidad de experiencias que espera.",
    "tips": [
      "Galerías de arte Mixcoac: visita Galería OMR, Kurimanzutto y galerías de arte contemporáneo mexicano; entrada gratuita",
      "Café de especialidad: Café Aroma sirve café de origen único preparado por baristas certificados",
      "Tiendas de diseño mexicano: compra artículos de diseñadores locales, joyería contemporánea y textiles oaxaqueños",
      "Restaurantes vanguardistas: Pujol, Éndalo reinterpretan recetas clásicas con técnicas modernas",
      "Sábados de mercado: mercado de diseñadores y artesanos en Avenida Amsterdam"
    ],
    "mejor_horario": "Visita 10 AM-6 PM jueves-sábados cuando galerías y tiendas están activas; domingos hay mercado de artesanos.",
    "mundial_relevancia": "ALTA relevancia: Línea 12 conecta Xochimilco (sur turístico) con Mixcoac (norte artístico); itinerario cultural integral ideal para turistas.",
    "descripcion_turistica": "Mixcoac es intercambio de Línea 12 con Línea 7. Zona residencial importante de Benito Juárez. Acceso a comercio, servicios y vivienda de valor medio-alto.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Línea 12 con elevadores. Acceso completo para discapacitados."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Centro Comercial Mixcoac",
        "tipo": "Comercio",
        "distancia": "300m",
        "descripcion": "Zona de tiendas y restaurantes"
      },
      {
        "nombre": "Biblioteca Mixcoac",
        "tipo": "Cultura",
        "distancia": "400m",
        "descripcion": "Centro cultural comunitario"
      },
      {
        "nombre": "Parque Benito Juárez",
        "tipo": "Recreación",
        "distancia": "500m",
        "descripcion": "Área verde importante de la zona"
      }
    ]
  },
  {
    "slug": "insurgentes-sur",
    "nombre": "Insurgentes Sur",
    "linea": "12",
    "alcaldia": "Benito Juárez, CDMX",
    "tipo_zona": "comercial",
    "pois": [
      {
        "nombre": "Avenida Paseo de la Reforma (cercana)",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Zona comercial y residencial",
        "tipo": "comercial",
        "distancia": "alrededor"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Insurgentes Sur — Lujo y comercio",
    "meta_description": "Insurgentes Sur: Paseo de la Reforma con hoteles 5 estrellas, museos y restaurantes gourmet. Zona cosmopolita de lujo y comercio moderno.   ",
    "h1": "Metro Insurgentes Sur: acceso a zonas de negocios",
    "intro": "Insurgentes Sur es corazón comercial y turístico de la Línea 12 en Benito Juárez, conectando directamente con Paseo de la Reforma Sur, zona de hoteles de lujo y tiendas departamentales. Para turistas del Mundial FIFA 2026, esta estación ofrece acceso a infraestructura hotelera de clase mundial, shopping de marca, restaurantes gourmet y servicios de concierge. Es puerta de entrada a zona más moderna y cosmopolita de la CDMX.",
    "historia_icono": "El ícono dorado de la Línea 12 simboliza riqueza comercial y cosmopolita de Insurgentes Sur, donde modernidad urbana y servicios de clase mundial confluyen. Este símbolo dorado evoca calidad y lujo.",
    "tips": [
      "Paseo de la Reforma: camina avenida más famosa de México con museos, edificios históricos y vistas panorámicas",
      "Museo Tamayo: arte contemporáneo internacional en edificio de arquitectura moderna; a 500m de estación",
      "Tiendas departamentales Liverpool: compra marcas internacionales con precios competitivos",
      "Restaurantes gourmet: cocina mexicana contemporánea hasta francesa; reserva con anticipación",
      "Hoteles de lujo cercanos: acceso directo sin necesidad de taxis"
    ],
    "mejor_horario": "Visita 11 AM-8 PM para tiendas y restaurantes en operación óptima; evita 12-1 PM y 7-8 PM por aglomeración.",
    "mundial_relevancia": "CRÍTICA: Insurgentes Sur es entrada para turistas en hoteles 5 estrellas de Paseo de la Reforma; conexión directa con zona hotelera.",
    "descripcion_turistica": "Insurgentes Sur es estación de Línea 12 en avenida principal. Conecta con importante corredor comercial de sur de la ciudad. Zona de negocios, servicios y residencial.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Línea 12 con elevadores. Acceso total para PMD."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Avenida Insurgentes",
        "tipo": "Comercio",
        "distancia": "0m",
        "descripcion": "Uno de los corredores más grandes de la ciudad"
      },
      {
        "nombre": "Centro Médico Dalinde",
        "tipo": "Salud",
        "distancia": "600m",
        "descripcion": "Hospital privado importante"
      },
      {
        "nombre": "Restaurantes y Cafeterías",
        "tipo": "Gastronomía",
        "distancia": "300m",
        "descripcion": "Variada oferta gastronómica"
      }
    ]
  },
  {
    "slug": "hospital-20-de-noviembre",
    "nombre": "Hospital 20 de Noviembre",
    "linea": "12",
    "alcaldia": "Benito Juárez, CDMX",
    "tipo_zona": "cultural-turistico",
    "pois": [
      {
        "nombre": "Hospital 20 de Noviembre (ISSSTE)",
        "tipo": "comercial",
        "distancia": "2 min caminando"
      },
      {
        "nombre": "Zona médica y de servicios",
        "tipo": "comercial",
        "distancia": "alrededor"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Hospital 20 de Noviembre — Servicios médicos",
    "meta_description": "Hospital 20 de Noviembre: institución médica certificada con servicios de salud completos. Acceso médico de emergencia en Línea 12.         ",
    "h1": "Metro Hospital 20 de Noviembre: acceso a salud",
    "intro": "Hospital 20 de Noviembre es estación de la Línea 12 conectando zona hospitalaria importante con vida residencial y comercial del sur capitalino. Para turistas del Mundial FIFA 2026 que necesiten servicios de salud o deseen conocer infraestructura médica, Hospital 20 de Noviembre ofrece acceso a servicios médicos de calidad y mercados locales cercanos. Es parada funcional para turistas en emergencia médica.",
    "historia_icono": "El ícono dorado de la Línea 12 representa conexión con infraestructura médica crucial, donde Hospital 20 de Noviembre destaca como institución de salud importante. Este símbolo evoca cuidado y servicio comunitario.",
    "tips": [
      "Hospital 20 de Noviembre: acceso directo a servicios médicos si necesitas atención de urgencia o consultas",
      "Farmacia del hospital: medicinas disponibles con precios regulados y servicio de farmacéutico",
      "Mercado local cercano: comidas, bebidas y productos frescos para acompañantes de pacientes",
      "Zona residencial tranquila: si necesitas descansar después de consulta médica",
      "Seguridad: zona bien atendida por presencia de instituciones médicas"
    ],
    "mejor_horario": "Visita según necesidad médica; servicios disponibles 24/7; mercado local activo de 8 AM-6 PM.",
    "mundial_relevancia": "Relevancia media: turistas que necesiten servicios médicos encontrarán acceso directo a hospital certificado.",
    "descripcion_turistica": "Hospital 20 de Noviembre es estación de Línea 12 con acceso directo al hospital ISSSTE del mismo nombre. Centro de salud importante para trabajadores del sector público.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Con elevadores y acceso completo para discapacitados."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Hospital 20 de Noviembre ISSSTE",
        "tipo": "Salud",
        "distancia": "100m",
        "descripcion": "Centro hospitalario de referencia para derechohabientes"
      },
      {
        "nombre": "Farmacia ISSSTE",
        "tipo": "Salud",
        "distancia": "200m",
        "descripcion": "Servicio de medicamentos"
      },
      {
        "nombre": "Comercios Locales",
        "tipo": "Comercio",
        "distancia": "400m",
        "descripcion": "Tiendas cercanas"
      }
    ]
  },
  {
    "slug": "zapata",
    "nombre": "Zapata",
    "linea": "12",
    "alcaldia": "Coyoacán, CDMX",
    "tipo_zona": "cultural-turistico",
    "pois": [
      {
        "nombre": "Centro Histórico de Coyoacán",
        "tipo": "cultural-turistico",
        "distancia": "10 min caminando"
      },
      {
        "nombre": "Museo Frida Kahlo",
        "tipo": "museo",
        "distancia": "15 min caminando"
      },
      {
        "nombre": "Parque Viveros de Coyoacán",
        "tipo": "parque",
        "distancia": "10 min caminando"
      },
      {
        "nombre": "Mercado de Coyoacán",
        "tipo": "mercado",
        "distancia": "12 min caminando"
      }
    ],
    "transferencias": [
      "3"
    ],
    "seo_title": "Metro Zapata — Barrio residencial sur",
    "meta_description": "Zapata: mercados locales auténticos, gastronomía casera y vida cotidiana de barrio. Barrio genuino del sur capitalino.                      ",
    "h1": "Metro Zapata: puerta al corazón bohemio de la CDMX",
    "intro": "Zapata es estación de la Línea 12 en zona residencial y comercial del sur capitalino, conectando comunidades con red metropolitana. Para turistas del Mundial FIFA 2026 que deseen conocer vida auténtica de barrios del sur, Zapata ofrece mercados locales, tiendas de comercio informal, gastronomía casera y atmósfera cotidiana de capitalinos residentes. Es parada para exploradores de barrios genuinos.",
    "historia_icono": "El ícono dorado de la Línea 12 representa conexión de Zapata con comunidades residenciales del sur, zona donde vida cotidiana y comercio informal convergen. Este símbolo evoca movilidad equitativa del sur capitalino.",
    "tips": [
      "Mercado local: frutas, verduras y productos frescos a precios de barrio local",
      "Comedores informales: desayunos, comidas y cenas caseras a precios accesibles",
      "Tiendas de ropa y accesorios: comercio informal con precios bajos",
      "Servicios locales: farmacias, panaderías y tiendas de necesidades básicas",
      "Lleva efectivo: comercio principalmente en efectivo"
    ],
    "mejor_horario": "Visita de 9 AM-5 PM entre semana para actividad comercial óptima.",
    "mundial_relevancia": "Relevancia baja: zona residencial sin atractivos específicos; turistas específicos encontrarán vida de barrio auténtica.",
    "descripcion_turistica": "Zapata honra a Emiliano Zapata, revolucionario del sur. Estación de Línea 12 en zona de Coyoacán. Acceso a zonas residenciales y culturales importantes del sur.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Con elevadores. Acceso completo para personas con discapacidad."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Coyoacán Histórico",
        "tipo": "Patrimonio",
        "distancia": "800m",
        "descripcion": "Centro cultural y patrimonial del sur"
      },
      {
        "nombre": "Museo Casa de Trotsky",
        "tipo": "Cultura",
        "distancia": "1km",
        "descripcion": "Casa-museo histórica"
      },
      {
        "nombre": "Mercado Coyoacán",
        "tipo": "Comercio",
        "distancia": "600m",
        "descripcion": "Tianguis tradicional"
      }
    ]
  },
  {
    "slug": "parque-de-los-venados",
    "nombre": "Parque de los Venados",
    "linea": "12",
    "alcaldia": "Benito Juárez, CDMX",
    "tipo_zona": "parque",
    "pois": [
      {
        "nombre": "Parque de los Venados",
        "tipo": "parque",
        "distancia": "3 min caminando"
      },
      {
        "nombre": "Zona residencial",
        "tipo": "residencial",
        "distancia": "alrededor"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Parque de los Venados — Parque y verde",
    "meta_description": "Parque de los Venados: parque verde del sur con mercados locales y vida de barrio. Naturaleza urbana y espacio recreativo en CDMX.          ",
    "h1": "Metro Parque de los Venados: naturaleza en el sur",
    "intro": "Parque de los Venados es estación de la Línea 12 cerca de zona verde del sur capitalino, conectando comunidades con parque y vida comercial de barrio. Para turistas del Mundial FIFA 2026 que deseen combinar naturaleza con autenticidad de barrio, Parque de los Venados ofrece acceso a espacio verde, mercados locales y atmósfera cotidiana de capitalinos. Es parada para exploradores buscando ecosistemas urbanos.",
    "historia_icono": "El ícono dorado de la Línea 12 representa conexión de Parque de los Venados con naturaleza urbana del sur, zona donde espacio verde y vida residencial convergen. Este símbolo evoca equidad en acceso a espacios recreativos.",
    "tips": [
      "Parque de los Venados: espacio verde con áreas de descanso y naturaleza; ideal para escapar del caos",
      "Mercado local: frutas, verduras y comidas rápidas a precios de barrio",
      "Tiendas de comercio informal: ropa y artículos prácticos a precios bajos",
      "Ambiente tranquilo: zona segura para familias y exploradores",
      "Seguridad: tranquilo pero poco turístico; evita andar solo al atardecer"
    ],
    "mejor_horario": "Visita de 9 AM-5 PM entre semana; domingos parque tiene más visitantes locales.",
    "mundial_relevancia": "Relevancia baja: zona residencial con parque; turistas específicos interesados en naturaleza urbana encontrarán valor.",
    "descripcion_turistica": "Parque de los Venados es estación de Línea 12 en zona residencial del sur. Nombre que evoca espacios naturales. Acceso a parques y recreación.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Con elevadores y acceso total."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Parque de los Venados",
        "tipo": "Recreación",
        "distancia": "300m",
        "descripcion": "Parque urbano con ciclovía y áreas verdes"
      },
      {
        "nombre": "Centro Comercial",
        "tipo": "Comercio",
        "distancia": "400m",
        "descripcion": "Tiendas y servicios"
      },
      {
        "nombre": "Instituto Técnico",
        "tipo": "Educación",
        "distancia": "500m",
        "descripcion": "Centro de capacitación profesional"
      }
    ]
  },
  {
    "slug": "eje-central",
    "nombre": "Eje Central",
    "linea": "12",
    "alcaldia": "Iztapalapa, CDMX",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Avenida Eje Central",
        "tipo": "comercial",
        "distancia": "alrededor"
      },
      {
        "nombre": "Zona residencial de Iztapalapa",
        "tipo": "residencial",
        "distancia": "alrededor"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Eje Central — Comercio urbano central",
    "meta_description": "Eje Central: zona comercial vibrante, tiendas variadas y movimiento urbano constante. Columna vertebral de la CDMX con comercio activo.     ",
    "h1": "Metro Eje Central: conexión hacia el sur de la CDMX",
    "intro": "Eje Central es estación de la Línea 12 en zona central-sur de la CDMX, conectando con avenida importante que vertebra la ciudad. Para turistas del Mundial FIFA 2026 que deseen explorar vida comercial y urbana del eje central, Eje Central ofrece acceso a mercados, tiendas variadas y movimiento urbano constante. Es parada estratégica para transporte hacia múltiples direcciones.",
    "historia_icono": "El ícono dorado de la Línea 12 representa conexión de Eje Central con columna vertebral urbana que divide y conecta la CDMX. Este símbolo evoca importancia estratégica de esta avenida histórica.",
    "tips": [
      "Eje Central avenida importante: acceso a zona comercial amplia con tiendas variadas",
      "Mercado local: productos frescos y comidas rápidas a precios de comercio de barrio",
      "Tiendas departamentales pequeñas: ropa, zapatos y artículos variados a precios competitivos",
      "Movimiento urbano constante: zona con tránsito importante de capitalinos en todos horarios",
      "Mantente alerta: zona muy concurrida requiere atención a pertenencias"
    ],
    "mejor_horario": "Visita de 10 AM-6 PM para comercio activo; evita horas pico de transporte laboral.",
    "mundial_relevancia": "Relevancia media: zona comercial y de transporte; turistas buscando compras urbanas encontrarán opciones variadas.",
    "descripcion_turistica": "Eje Central es estación de Línea 12 ubicada en importante corredor vial norte-sur de la ciudad. Conecta zonas residenciales y comerciales del sur.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Con elevadores. Acceso completo."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Eje Central Lázaro Cárdenas",
        "tipo": "Comercio",
        "distancia": "0m",
        "descripcion": "Corredor comercial importante"
      },
      {
        "nombre": "Centro de Salud",
        "tipo": "Salud",
        "distancia": "400m",
        "descripcion": "Clínica comunitaria"
      },
      {
        "nombre": "Escuelas y Colegios",
        "tipo": "Educación",
        "distancia": "500m",
        "descripcion": "Centros educativos varios"
      }
    ]
  },
  {
    "slug": "ermita",
    "nombre": "Ermita",
    "linea": "12",
    "alcaldia": "Iztapalapa, CDMX",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial",
        "tipo": "residencial",
        "distancia": "alrededor"
      },
      {
        "nombre": "Comercio local",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Ermita — Patrimonio religioso guadalupano",
    "meta_description": "Ermita: cercanía a Basílica de Guadalupe, zona de peregrinación y mercados religiosos. Patrimonio espiritual auténtico en el sur.           ",
    "h1": "Metro Ermita: corazón residencial del sur",
    "intro": "Ermita es estación de la Línea 12 conectando zona residencial-comercial del sur con Basílica de Guadalupe cercana, sitio de importancia religiosa y turística. Para turistas del Mundial FIFA 2026, Ermita ofrece acceso a zona de peregrinación, mercados locales y vida religiosa-cultural vibrante del sur capitalino. Es parada para exploradores interesados en patrimonio religioso.",
    "historia_icono": "El ícono dorado de la Línea 12 representa conexión de Ermita con patrimonio religioso, zona donde fe, tradición y vida moderna convergen. Este símbolo evoca importancia espiritual y cultural.",
    "tips": [
      "Basílica de Guadalupe cercana: visitavisita lugar de peregrinación importante, especialmente deciembre",
      "Mercado local: frutas, velas, flores y productos religiosos para peregrinos",
      "Iglesias locales: arquitectura colonial y religiosa en alrededores",
      "Tiendas de recuerdos religiosos: artículos devocionales a precios de barrio",
      "Respeta espacios: zona es principalmente religiosa; mantén silencio en áreas sagradas"
    ],
    "mejor_horario": "Visita según calendario religioso; diciembre altamente concurrido por Día de Guadalupe.",
    "mundial_relevancia": "Relevancia media: turistas interesados en patrimonio religioso y peregrinación encontrarán experiencia cultural importante.",
    "descripcion_turistica": "Ermita es estación de Línea 12 en zona residencial del sur. Acceso a colonias pobladas y comercio local diversificado de Iztapalapa.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Con elevadores. Acceso total para discapacitados."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Ermita de Santa Cruz",
        "tipo": "Patrimonio",
        "distancia": "400m",
        "descripcion": "Templo colonial histórico"
      },
      {
        "nombre": "Mercado Ermita",
        "tipo": "Comercio",
        "distancia": "200m",
        "descripcion": "Tianguis tradicional"
      },
      {
        "nombre": "Centro Comunitario",
        "tipo": "Servicios",
        "distancia": "300m",
        "descripcion": "Espacio para actividades comunitarias"
      }
    ]
  },
  {
    "slug": "mexicaltzingo",
    "nombre": "Mexicaltzingo",
    "linea": "12",
    "alcaldia": "Iztapalapa, CDMX",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial",
        "tipo": "residencial",
        "distancia": "alrededor"
      },
      {
        "nombre": "Servicios comerciales",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Mexicaltzingo — Legado prehispánico sur",
    "meta_description": "Mexicaltzingo: mercados locales auténticos, vida de barrio y legado prehispánico. Experiencia genuina del sur capitalino.                   ",
    "h1": "Metro Mexicaltzingo: barrios antiguos de Iztapalapa",
    "intro": "Mexicaltzingo es estación de la Línea 12 en zona residencial-comercial del sur capitalino, conectando comunidades con red metropolitana. Para turistas del Mundial FIFA 2026 que deseen explorar autenticidad de barrios sureños, Mexicaltzingo ofrece mercados locales, tiendas de comercio informal y vida cotidiana genuina de capitalinos residentes. Es parada para exploradores de barrios auténticos.",
    "historia_icono": "El ícono dorado de la Línea 12 representa conexión de Mexicaltzingo con legado prehispánico y comunidades modernas del sur, zona donde raíces históricas y vida residencial convergen. Este símbolo evoca continuidad mesoamericana.",
    "tips": [
      "Mercado local: frutas, verduras y productos frescos a precios de comercio de barrio",
      "Comedores informales: desayunos, comidas caseras a precios accesibles",
      "Tiendas de ropa y comercio informal: prendas nuevas a precios bajos",
      "Servicios locales: farmacias, panaderías de barrio",
      "Mantente en zonas principales: tranquilo pero residencial"
    ],
    "mejor_horario": "Visita de 9 AM-5 PM entre semana para actividad comercial óptima.",
    "mundial_relevancia": "Relevancia baja: zona residencial; turistas específicos encontrarán vida de barrio auténtica.",
    "descripcion_turistica": "Mexicaltzingo (del náhuatl) es estación de Línea 12 en Iztapalapa. Conecta zonas residenciales con acceso a comercio y servicios del área.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Con elevadores. Acceso completo."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Mercado Mexicaltzingo",
        "tipo": "Comercio",
        "distancia": "250m",
        "descripcion": "Centro comercial importante"
      },
      {
        "nombre": "Clínica de Salud",
        "tipo": "Salud",
        "distancia": "400m",
        "descripcion": "Centro comunitario de salud"
      },
      {
        "nombre": "Parque Local",
        "tipo": "Recreación",
        "distancia": "500m",
        "descripcion": "Área verde comunitaria"
      }
    ]
  },
  {
    "slug": "atlalilco",
    "nombre": "Atlalilco",
    "linea": "12",
    "alcaldia": "Iztapalapa, CDMX",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial",
        "tipo": "residencial",
        "distancia": "alrededor"
      },
      {
        "nombre": "Comercio local",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [
      "8"
    ],
    "seo_title": "Metro Atlalilco — Zona residencial sur",
    "meta_description": "Atlalilco: mercados locales auténticos, vida de barrio residencial del sur. Experiencia genuina del sur capitalino.                         ",
    "h1": "Metro Atlalilco: nodo de conexión al sur",
    "intro": "Atlalilco es estación de la Línea 12 en zona residencial del sur conectando comunidades con infraestructura de transporte. Para turistas del Mundial FIFA 2026 que deseen conocer vida auténtica de barrios sureños, Atlalilco ofrece mercados locales, tiendas de comercio informal y atmósfera cotidiana de capitalinos. Es parada para exploradores de barrios genuinos.",
    "historia_icono": "El ícono dorado de la Línea 12 representa conexión de Atlalilco con comunidades residenciales del sur, zona donde vida cotidiana y legado prehispánico convergen. Este símbolo evoca raíces profundas.",
    "tips": [
      "Mercado local: productos frescos a precios de barrio local",
      "Tiendas informales: ropa, zapatos y artículos prácticos a precios bajos",
      "Comedores de barrio: comidas caseras a precios accesibles",
      "Servicios locales: farmacias y tiendas de necesidades básicas",
      "Lleva efectivo: comercio principalmente en efectivo"
    ],
    "mejor_horario": "Visita de 9 AM-5 PM entre semana para actividad comercial.",
    "mundial_relevancia": "Relevancia muy baja: zona residencial sin atractivos específicos.",
    "descripcion_turistica": "Atlalilco (del náhuatl 'lugar en el agua') es estación de Línea 12 en Iztapalapa. Zona lacustre histórica con importancia en memoria prehispánica.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Con elevadores. Acceso total."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Zona Arqueológica Atlalilco",
        "tipo": "Patrimonio",
        "distancia": "600m",
        "descripcion": "Sitio con vestigios prehispánicos"
      },
      {
        "nombre": "Tianguis Atlalilco",
        "tipo": "Comercio",
        "distancia": "300m",
        "descripcion": "Mercado tradicional"
      },
      {
        "nombre": "Parque Ecológico",
        "tipo": "Naturaleza",
        "distancia": "700m",
        "descripcion": "Área verde con importancia ecológica"
      }
    ]
  },
  {
    "slug": "culhuacan",
    "nombre": "Culhuacán",
    "linea": "12",
    "alcaldia": "Iztapalapa, CDMX",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial",
        "tipo": "residencial",
        "distancia": "alrededor"
      },
      {
        "nombre": "Servicios comerciales",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Culhuacán — Legado prehispánico sur",
    "meta_description": "Culhuacán: mercados locales auténticos, vida de barrio. Legado prehispánico en el surponiente capitalino genuino.                           ",
    "h1": "Metro Culhuacán: barrios del sur",
    "intro": "Culhuacán es estación de la Línea 12 en zona residencial del surponiente conectando comunidades con red metropolitana. Para turistas del Mundial FIFA 2026 que deseen explorar autenticidad de barrios sureños, Culhuacán ofrece mercados locales, tiendas de comercio informal y vida cotidiana de capitalinos residentes. Es parada para exploradores de barrios genuinos.",
    "historia_icono": "El ícono dorado de la Línea 12 representa conexión de Culhuacán con legado prehispánico y comunidades modernas, zona donde raíces históricas y vida residencial convergen. Este símbolo evoca continuidad histórica.",
    "tips": [
      "Mercado local: frutas, verduras y productos frescos a precios locales",
      "Tiendas de comercio informal: ropa y accesorios a precios bajos",
      "Comedores de barrio: comidas caseras a precios accesibles",
      "Servicios locales: farmacias y panaderías de barrio",
      "Mantente en zonas principales: tranquilo pero residencial"
    ],
    "mejor_horario": "Visita de 9 AM-5 PM entre semana para actividad comercial óptima.",
    "mundial_relevancia": "Relevancia muy baja: zona residencial sin atractivos específicos.",
    "descripcion_turistica": "Culhuacán (del náhuatl) es estación de Línea 12 en Iztapalapa. Zona de gran importancia histórica azteca, cuna de la dinastía Culhua. Acceso a patrimonio prehispánico.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Con elevadores. Acceso completo."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Zona Arqueológica Culhuacán",
        "tipo": "Patrimonio",
        "distancia": "400m",
        "descripcion": "Sitio prehispánico excavado"
      },
      {
        "nombre": "Museo Culhuacán",
        "tipo": "Cultura",
        "distancia": "500m",
        "descripcion": "Centro dedicado a historia local"
      },
      {
        "nombre": "Mercado Culhuacán",
        "tipo": "Comercio",
        "distancia": "250m",
        "descripcion": "Tianguis local tradicional"
      }
    ]
  },
  {
    "slug": "san-andres-tomatlan",
    "nombre": "San Andrés Tomatlán",
    "linea": "12",
    "alcaldia": "Iztapalapa, CDMX",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial",
        "tipo": "residencial",
        "distancia": "alrededor"
      },
      {
        "nombre": "Comercio local",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro San Andrés Tomatlán — Zona residencial",
    "meta_description": "San Andrés Tomatlán: mercados locales auténticos, vida de barrio residencial del sur. Experiencia genuina del sur capitalino.               ",
    "h1": "Metro San Andrés Tomatlán: sur profundo",
    "intro": "San Andrés Tomatlán es estación de la Línea 12 en zona residencial del sur conectando comunidades con red metropolitana. Para turistas del Mundial FIFA 2026 que deseen experimentar vida auténtica de barrios sureños, San Andrés Tomatlán ofrece mercados locales, tiendas de comercio informal y atmósfera cotidiana de capitalinos residentes. Es parada para exploradores de barrios genuinos.",
    "historia_icono": "El ícono dorado de la Línea 12 representa conexión de San Andrés Tomatlán con comunidades residenciales del sur, zona donde vida cotidiana y comercio informal convergen. Este símbolo evoca equidad en movilidad.",
    "tips": [
      "Mercado local: productos frescos a precios de barrio",
      "Comedores informales: comidas caseras a precios accesibles",
      "Tiendas de comercio informal: ropa y artículos prácticos a precios bajos",
      "Servicios locales: farmacias y panaderías disponibles",
      "Lleva efectivo: comercio principalmente en efectivo"
    ],
    "mejor_horario": "Visita de 9 AM-5 PM entre semana para actividad comercial óptima.",
    "mundial_relevancia": "Relevancia muy baja: zona residencial sin atractivos específicos.",
    "descripcion_turistica": "San Andrés Tomatlán (del náhuatl 'lugar de tomates') es estación de Línea 12 en Iztapalapa. Zona agrícola histórica con tradición prehispánica.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Con elevadores. Acceso total para PMD."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Iglesia de San Andrés",
        "tipo": "Patrimonio",
        "distancia": "300m",
        "descripcion": "Templo colonial de importancia"
      },
      {
        "nombre": "Tianguis San Andrés",
        "tipo": "Comercio",
        "distancia": "200m",
        "descripcion": "Mercado tradicional muy concurrido"
      },
      {
        "nombre": "Clínica Comunitaria",
        "tipo": "Salud",
        "distancia": "400m",
        "descripcion": "Centro de salud"
      }
    ]
  },
  {
    "slug": "lomas-estrella",
    "nombre": "Lomas Estrella",
    "linea": "12",
    "alcaldia": "Iztapalapa, CDMX",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial",
        "tipo": "residencial",
        "distancia": "alrededor"
      },
      {
        "nombre": "Servicios comerciales",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Lomas Estrella — Zona residencial sur",
    "meta_description": "Lomas Estrella: mercados locales auténticos, vida de barrio residencial del sur. Experiencia genuina del sur capitalino.                    ",
    "h1": "Metro Lomas Estrella: lomas del sur",
    "intro": "Lomas Estrella es estación de la Línea 12 en zona residencial del sur conectando comunidades con red metropolitana. Para turistas del Mundial FIFA 2026 que deseen conocer autenticidad de barrios sureños, Lomas Estrella ofrece mercados locales, tiendas de comercio informal y vida cotidiana genuina de capitalinos residentes. Es parada para exploradores de barrios auténticos.",
    "historia_icono": "El ícono dorado de la Línea 12 representa conexión de Lomas Estrella con comunidades residenciales del sur, zona donde vida moderna y raíces locales convergen. Este símbolo evoca equidad en transporte.",
    "tips": [
      "Mercado local: frutas, verduras y productos frescos a precios locales",
      "Tiendas informales: ropa y accesorios a precios bajos",
      "Comedores de barrio: comidas caseras a precios accesibles",
      "Servicios locales: farmacias y panaderías disponibles",
      "Mantente en zonas principales: tranquilo pero residencial"
    ],
    "mejor_horario": "Visita de 9 AM-5 PM entre semana para actividad comercial.",
    "mundial_relevancia": "Relevancia muy baja: zona residencial sin atractivos específicos.",
    "descripcion_turistica": "Lomas Estrella es estación de Línea 12 en Iztapalapa. Zona residencial con vistas panorámicas. Acceso a comercio y servicios de la zona sur.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Con elevadores. Acceso completo."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Parque Lomas Estrella",
        "tipo": "Recreación",
        "distancia": "400m",
        "descripcion": "Área verde con vista panorámica"
      },
      {
        "nombre": "Centro Comercial",
        "tipo": "Comercio",
        "distancia": "300m",
        "descripcion": "Tiendas y servicios"
      },
      {
        "nombre": "Escuela Primaria",
        "tipo": "Educación",
        "distancia": "500m",
        "descripcion": "Centro educativo comunitario"
      }
    ]
  },
  {
    "slug": "calle-11",
    "nombre": "Calle 11",
    "linea": "12",
    "alcaldia": "Iztapalapa, CDMX",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial",
        "tipo": "residencial",
        "distancia": "alrededor"
      },
      {
        "nombre": "Comercio local",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Calle 11 — Zona residencial sur",
    "meta_description": "Calle 11: mercados locales auténticos, vida cotidiana de barrio del sur. Experiencia genuina del sur capitalino.                            ",
    "h1": "Metro Calle 11: barrios del sur profundo",
    "intro": "Calle 11 es estación de la Línea 12 en zona residencial del sur conectando comunidades con red metropolitana. Para turistas del Mundial FIFA 2026 que deseen explorar autenticidad de barrios sureños, Calle 11 ofrece mercados locales, tiendas informales y vida cotidiana de capitalinos residentes. Es parada para exploradores de barrios genuinos.",
    "historia_icono": "El ícono dorado de la Línea 12 representa conexión de Calle 11 con comunidades residenciales del sur, zona donde vida cotidiana y comercio informal convergen. Este símbolo evoca movilidad equitativa.",
    "tips": [
      "Mercado local: productos frescos a precios de barrio local",
      "Tiendas de comercio informal: ropa y artículos prácticos a precios bajos",
      "Comedores de barrio: comidas caseras a precios accesibles",
      "Servicios locales: farmacias y panaderías de barrio",
      "Lleva efectivo: comercio principalmente en efectivo"
    ],
    "mejor_horario": "Visita de 9 AM-5 PM entre semana para actividad comercial óptima.",
    "mundial_relevancia": "Relevancia muy baja: zona residencial sin atractivos específicos.",
    "descripcion_turistica": "Calle 11 es estación de Línea 12 en Iztapalapa. Acceso a zona residencial densa con comercio popular importante.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Con elevadores. Acceso total."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Mercado Calle 11",
        "tipo": "Comercio",
        "distancia": "100m",
        "descripcion": "Tianguis muy concurrido"
      },
      {
        "nombre": "Comercios Diversos",
        "tipo": "Comercio",
        "distancia": "200m",
        "descripcion": "Tiendas de necesidad diaria"
      },
      {
        "nombre": "Clínica de Salud",
        "tipo": "Salud",
        "distancia": "400m",
        "descripcion": "Centro de atención primaria"
      }
    ]
  },
  {
    "slug": "periferico-oriente",
    "nombre": "Periférico Oriente",
    "linea": "12",
    "alcaldia": "Iztapalapa, CDMX",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Avenida Periférico Oriente",
        "tipo": "comercial",
        "distancia": "alrededor"
      },
      {
        "nombre": "Zona residencial",
        "tipo": "residencial",
        "distancia": "alrededor"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Periférico Oriente — Vida local auténtica",
    "meta_description": "Periférico Oriente: mercados locales auténticos, gastronomía casera y vida cotidiana. Barrio genuino del oriente fuera de circuito.         ",
    "h1": "Metro Periférico Oriente: acceso al anillo vial",
    "intro": "Periférico Oriente es estación de conexión hacia zonas residenciales y comerciales del oriente capitalino, punto de transición donde Línea 12 alcanza expansión máxima. Para turistas del Mundial FIFA 2026 que deseen explorar barrios auténticos más allá de zonas turísticas convencionales, Periférico Oriente ofrece acceso a mercados locales, restaurantes de cocina casera y vida cotidiana genuina de capitalinos residentes.",
    "historia_icono": "El ícono dorado de la Línea 12 representa expansión y alcance hacia oriente metropolitano, conectando comunidades históricamente marginadas con sistema de transporte. Este símbolo evoca inclusión y equidad.",
    "tips": [
      "Mercado de Unidad Habitacional Ejército de Oriente: compra productos frescos, ropa y artículos variados a precios de barrio",
      "Comedores de mercado: caldo tlalpeño, chiles rellenos y sopas tradicionales preparadas por cocineras locales",
      "Tiendas de ropa informal: prendas mexicanas, uniformes escolares a precios bajos",
      "Área comercial de Periférico Oriente: tiendas de zapatos, electrónica y servicios locales",
      "Seguridad: zona tranquila pero poco turística; lleva dirección en español si necesitas orientación"
    ],
    "mejor_horario": "Visita 10 AM-5 PM martes-viernes cuando mercados están activos; domingos más tranquilo.",
    "mundial_relevancia": "Relevancia media: turistas interesados en vida de barrio auténtica y gastronomía casera mexicana encontrarán valor único.",
    "descripcion_turistica": "Periférico Oriente es estación de Línea 12 ubicada en circuito vial perimetral sur. Zona de conectividad metropolitana importante. Acceso a comercio y residencial.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Con elevadores. Acceso completo."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Centro Comercial Periférico",
        "tipo": "Comercio",
        "distancia": "300m",
        "descripcion": "Tiendas y servicios variados"
      },
      {
        "nombre": "Parque Metropolitano",
        "tipo": "Recreación",
        "distancia": "600m",
        "descripcion": "Área verde importante"
      },
      {
        "nombre": "Instituto Técnico",
        "tipo": "Educación",
        "distancia": "500m",
        "descripcion": "Centro de formación profesional"
      }
    ]
  },
  {
    "slug": "tezonco",
    "nombre": "Tezonco",
    "linea": "12",
    "alcaldia": "Tláhuac, CDMX",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial de Tláhuac",
        "tipo": "residencial",
        "distancia": "alrededor"
      },
      {
        "nombre": "Comercio local",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Tezonco — Zona residencial oriente",
    "meta_description": "Tezonco: mercados locales auténticos, vida cotidiana de barrio residencial del oriente. Experiencia genuina del oriente capitalino.         ",
    "h1": "Metro Tezonco: puerta a Tláhuac",
    "intro": "Tezonco es estación de la Línea 12 en zona residencial del oriente conectando comunidades con red metropolitana. Para turistas del Mundial FIFA 2026 que deseen conocer autenticidad de barrios orientales, Tezonco ofrece mercados locales, tiendas de comercio informal y vida cotidiana genuina de capitalinos residentes. Es parada para exploradores de barrios auténticos.",
    "historia_icono": "El ícono dorado de la Línea 12 representa conexión de Tezonco con comunidades residenciales del oriente, zona donde vida cotidiana y comercio informal convergen. Este símbolo evoca equidad en transporte metropolitano.",
    "tips": [
      "Mercado local: frutas, verduras y productos frescos a precios de barrio local",
      "Tiendas informales: ropa, zapatos y artículos prácticos a precios bajos",
      "Comedores de barrio: comidas caseras a precios accesibles",
      "Servicios locales: farmacias y panaderías disponibles",
      "Lleva efectivo: comercio principalmente en efectivo"
    ],
    "mejor_horario": "Visita de 9 AM-5 PM entre semana para actividad comercial óptima.",
    "mundial_relevancia": "Relevancia muy baja: zona residencial sin atractivos específicos para turistas.",
    "descripcion_turistica": "Tezonco (del náhuatl 'tetl-zonco') es estación de Línea 12 en Iztapalapa. Zona con importancia arqueológica e histórica. Acceso a patrimonio prehispánico.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Con elevadores. Acceso total."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Zona Arqueológica Tezonco",
        "tipo": "Patrimonio",
        "distancia": "400m",
        "descripcion": "Sitio prehispánico excavado"
      },
      {
        "nombre": "Tianguis Tezonco",
        "tipo": "Comercio",
        "distancia": "200m",
        "descripcion": "Mercado tradicional"
      },
      {
        "nombre": "Museo Local",
        "tipo": "Cultura",
        "distancia": "500m",
        "descripcion": "Centro cultural comunitario"
      }
    ]
  },
  {
    "slug": "olivos",
    "nombre": "Olivos",
    "linea": "12",
    "alcaldia": "Tláhuac, CDMX",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial",
        "tipo": "residencial",
        "distancia": "alrededor"
      },
      {
        "nombre": "Servicios comerciales",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Olivos — Zona residencial sureste",
    "meta_description": "Olivos: mercados locales auténticos, vida de barrio residencial del sureste. Experiencia genuina del sureste capitalino.                    ",
    "h1": "Metro Olivos: barrios de Tláhuac",
    "intro": "Olivos es estación de la Línea 12 en zona residencial del sureste conectando comunidades con red metropolitana. Para turistas del Mundial FIFA 2026 que deseen explorar autenticidad de barrios sureste, Olivos ofrece mercados locales, tiendas informales y vida cotidiana de capitalinos residentes. Es parada para exploradores de barrios genuinos.",
    "historia_icono": "El ícono dorado de la Línea 12 representa conexión de Olivos con comunidades residenciales del sureste, zona donde vida moderna y raíces locales convergen. Este símbolo evoca inclusión en transporte.",
    "tips": [
      "Mercado local: productos frescos a precios de barrio local",
      "Tiendas de comercio informal: ropa y accesorios a precios bajos",
      "Comedores de barrio: comidas caseras a precios accesibles",
      "Servicios locales: farmacias y panaderías disponibles",
      "Mantente en zonas principales: tranquilo pero residencial"
    ],
    "mejor_horario": "Visita de 9 AM-5 PM entre semana para actividad comercial óptima.",
    "mundial_relevancia": "Relevancia muy baja: zona residencial sin atractivos específicos.",
    "descripcion_turistica": "Olivos es estación de Línea 12 en Iztapalapa. Zona residencial con comercio local. Acceso a servicios comunitarios del sur.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Con elevadores. Acceso completo."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Mercado Olivos",
        "tipo": "Comercio",
        "distancia": "250m",
        "descripcion": "Centro comercial local"
      },
      {
        "nombre": "Parque Olivos",
        "tipo": "Recreación",
        "distancia": "400m",
        "descripcion": "Área verde comunitaria"
      },
      {
        "nombre": "Centro de Salud",
        "tipo": "Salud",
        "distancia": "400m",
        "descripcion": "Clínica comunitaria"
      }
    ]
  },
  {
    "slug": "nopalera",
    "nombre": "Nopalera",
    "linea": "12",
    "alcaldia": "Tláhuac, CDMX",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial",
        "tipo": "residencial",
        "distancia": "alrededor"
      },
      {
        "nombre": "Comercio local",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Nopalera — Zona residencial sureste",
    "meta_description": "Nopalera: mercados locales auténticos, vida cotidiana de barrio del sureste. Experiencia genuina del sureste capitalino.                    ",
    "h1": "Metro Nopalera: sur tradicional",
    "intro": "Nopalera es estación de la Línea 12 en zona residencial del sureste conectando comunidades con red metropolitana. Para turistas del Mundial FIFA 2026 que deseen conocer autenticidad de barrios sureños, Nopalera ofrece mercados locales, tiendas de comercio informal y vida cotidiana genuina de capitalinos. Es parada para exploradores de barrios auténticos.",
    "historia_icono": "El ícono dorado de la Línea 12 representa conexión de Nopalera con comunidades residenciales del sureste, zona donde vida cotidiana y comercio informal convergen. Este símbolo evoca movilidad equitativa.",
    "tips": [
      "Mercado local: frutas, verduras y productos frescos a precios locales",
      "Tiendas informales: ropa y artículos prácticos a precios bajos",
      "Comedores de barrio: comidas caseras a precios accesibles",
      "Servicios locales: farmacias y panaderías disponibles",
      "Lleva efectivo: comercio principalmente en efectivo"
    ],
    "mejor_horario": "Visita de 9 AM-5 PM entre semana para actividad comercial.",
    "mundial_relevancia": "Relevancia muy baja: zona residencial sin atractivos específicos.",
    "descripcion_turistica": "Nopalera es estación de Línea 12 en Iztapalapa. Zona residencial con tradición de cultivo de nopal. Acceso a comercio tradicional.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Con elevadores. Acceso total."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Campos de Nopal",
        "tipo": "Agricultura",
        "distancia": "600m",
        "descripcion": "Cultivos tradicionales de la zona"
      },
      {
        "nombre": "Tianguis Nopalera",
        "tipo": "Comercio",
        "distancia": "200m",
        "descripcion": "Mercado tradicional"
      },
      {
        "nombre": "Clínica IMSS",
        "tipo": "Salud",
        "distancia": "400m",
        "descripcion": "Centro de salud"
      }
    ]
  },
  {
    "slug": "zapotitlan",
    "nombre": "Zapotitlán",
    "linea": "12",
    "alcaldia": "Tláhuac, CDMX",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial",
        "tipo": "residencial",
        "distancia": "alrededor"
      },
      {
        "nombre": "Servicios comerciales",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Zapotitlán — Zona residencial sureste",
    "meta_description": "Zapotitlán: mercados locales auténticos, vida de barrio residencial del sureste. Experiencia genuina del sureste capitalino.                ",
    "h1": "Metro Zapotitlán: sur profundo de Tláhuac",
    "intro": "Zapotitlán es estación de la Línea 12 en zona residencial del sureste conectando comunidades con red metropolitana. Para turistas del Mundial FIFA 2026 que deseen explorar autenticidad de barrios sureños, Zapotitlán ofrece mercados locales, tiendas informales y vida cotidiana de capitalinos residentes. Es parada para exploradores de barrios genuinos.",
    "historia_icono": "El ícono dorado de la Línea 12 representa conexión de Zapotitlán con comunidades residenciales del sureste, zona donde vida moderna y tradiciones locales convergen. Este símbolo evoca equidad en transporte.",
    "tips": [
      "Mercado local: productos frescos a precios de barrio local",
      "Tiendas de comercio informal: ropa y accesorios a precios bajos",
      "Comedores de barrio: comidas caseras a precios accesibles",
      "Servicios locales: farmacias y panaderías disponibles",
      "Mantente en zonas principales: tranquilo pero residencial"
    ],
    "mejor_horario": "Visita de 9 AM-5 PM entre semana para actividad comercial óptima.",
    "mundial_relevancia": "Relevancia muy baja: zona residencial sin atractivos específicos.",
    "descripcion_turistica": "Zapotitlán (del náhuatl 'lugar de zapotes') es estación de Línea 12 en Tláhuac. Zona con importancia agrícola e histórica. Acceso a chinampas y ecosistemas.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Con elevadores. Acceso completo."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Chinampas de Zapotitlán",
        "tipo": "Agricultura",
        "distancia": "800m",
        "descripcion": "Jardines flotantes prehispánicos activos"
      },
      {
        "nombre": "Tianguis Zapotitlán",
        "tipo": "Comercio",
        "distancia": "250m",
        "descripcion": "Mercado local"
      },
      {
        "nombre": "Centro Comunitario",
        "tipo": "Servicios",
        "distancia": "400m",
        "descripcion": "Espacio cultural comunitario"
      }
    ]
  },
  {
    "slug": "tlaltenco",
    "nombre": "Tlaltenco",
    "linea": "12",
    "alcaldia": "Tláhuac, CDMX",
    "tipo_zona": "residencial",
    "pois": [
      {
        "nombre": "Zona residencial",
        "tipo": "residencial",
        "distancia": "alrededor"
      },
      {
        "nombre": "Comercio local",
        "tipo": "comercial",
        "distancia": "5 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Tlaltenco — Legado prehispánico sureste",
    "meta_description": "Tlaltenco: mercados locales auténticos, vida de barrio. Legado prehispánico del sureste capitalino genuino.                                 ",
    "h1": "Metro Tlaltenco: antesala a Tláhuac terminal",
    "intro": "Tlaltenco es estación de la Línea 12 en zona residencial del sureste conectando comunidades con red metropolitana. Para turistas del Mundial FIFA 2026 que deseen conocer autenticidad de barrios sureños, Tlaltenco ofrece mercados locales, tiendas de comercio informal y vida cotidiana genuina de capitalinos residentes. Es parada para exploradores de barrios auténticos.",
    "historia_icono": "El ícono dorado de la Línea 12 representa conexión de Tlaltenco con comunidades residenciales del sureste, zona donde vida cotidiana y raíces prehispánicas convergen. Este símbolo evoca continuidad histórica.",
    "tips": [
      "Mercado local: frutas, verduras y productos frescos a precios de barrio local",
      "Tiendas informales: ropa y artículos prácticos a precios bajos",
      "Comedores de barrio: comidas caseras a precios accesibles",
      "Servicios locales: farmacias y panaderías disponibles",
      "Lleva efectivo: comercio principalmente en efectivo"
    ],
    "mejor_horario": "Visita de 9 AM-5 PM entre semana para actividad comercial.",
    "mundial_relevancia": "Relevancia muy baja: zona residencial sin atractivos específicos.",
    "descripcion_turistica": "Tlaltenco (del náhuatl 'lugar de tierra') es estación de Línea 12 en Tláhuac. Zona con paisajes lacustres y agrícolas. Importante para acceso a patrimonio natural.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Con elevadores. Acceso total."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Zona de Chinampas",
        "tipo": "Agricultura",
        "distancia": "400m",
        "descripcion": "Cultivos tradicionales flotantes"
      },
      {
        "nombre": "Lago de Tláhuac",
        "tipo": "Naturaleza",
        "distancia": "600m",
        "descripcion": "Ecosistema lacustre importante"
      },
      {
        "nombre": "Tianguis Tlaltenco",
        "tipo": "Comercio",
        "distancia": "200m",
        "descripcion": "Mercado local"
      }
    ]
  },
  {
    "slug": "tlahuac",
    "nombre": "Tláhuac",
    "linea": "12",
    "alcaldia": "Tláhuac, CDMX",
    "tipo_zona": "cultural-turistico",
    "pois": [
      {
        "nombre": "Centro histórico de Tláhuac",
        "tipo": "cultural-turistico",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Xochimilco (cercano)",
        "tipo": "cultural-turistico",
        "distancia": "20 min en transporte"
      },
      {
        "nombre": "Mercado de Tláhuac",
        "tipo": "mercado",
        "distancia": "5 min caminando"
      },
      {
        "nombre": "Iglesia histórica",
        "tipo": "cultural-turistico",
        "distancia": "8 min caminando"
      }
    ],
    "transferencias": [],
    "seo_title": "Metro Tláhuac — Patrimonio prehispánico vivo",
    "meta_description": "Tláhuac: trajineras en canales ancestrales, pueblo originario y gastronomía chinampera. Herencia prehispánica más auténtica del surponiente.",
    "h1": "Metro Tláhuac: puerta a las tradiciones del sur",
    "intro": "Tláhuac es estación final de la Línea 12, puerta de entrada a pueblo originario del mismo nombre con canales, trajineras y herencia prehispánica viva. Para turistas del Mundial FIFA 2026 que deseen escapar de aglomeraciones turísticas manteniendo contacto con patrimonio ancestral, Tláhuac ofrece experiencia más auténtica que Xochimilco: trajineras en canales anchos, gastronomía chinampera tradicional, encuentro genuino con comunidades preservando forma de vida prehispánica.",
    "historia_icono": "El ícono dorado de la Línea 12 llega su máxima expresión en Tláhuac, representando conexión con pueblos originarios cuya herencia prehispánica permanece viva. Este símbolo dorado evoca riqueza de raíces profundas.",
    "tips": [
      "Renta trajinera en madrugada (6-8 AM): menos turistas, canales limpios, aves acuáticas abundantes y precios negociables",
      "Come chiles rellenos de queso en restaurante chinampero: gastronomía única de las propias chinampas donde crece comida",
      "Casa Museo de Eulalia Guzmán: arqueóloga que descubrió restos de Cuauhtémoc; vivienda-museo con acervo arqueológico único",
      "Mercado de flores de Tláhuac: dalias gigantes, noche buena y flores de temporada a precios de productor directo",
      "Seguridad: tranquilo pero alejado; lleva efectivo, mapa o GPS, mantente en zonas de embarcaderos principales"
    ],
    "mejor_horario": "Madruga llegada 6 AM para trajinera 6:30-8:30 AM: experiencia menos turística, canales vírgenes y conexión genuina prehispánica.",
    "mundial_relevancia": "ALTA relevancia cultural: Tláhuac ofrece experiencia más auténtica que Xochimilco; Línea 12 es única conexión Metro a joya prehispánica. Ideal para turistas buscando autenticidad.",
    "descripcion_turistica": "Tláhuac es terminal de Línea 12 en delegación del mismo nombre. Centro administrativo y comercial de Tláhuac. Acceso importante a chinampas, sitios arqueológicos y ecosistema lacustre. Zona de gran importancia para turismo ecológico.",
    "accesibilidad": {
      "elevador": true,
      "rampa": true,
      "piso_tactil": true,
      "notas": "Terminal de Línea 12 con elevadores. Acceso completo para PMD."
    },
    "horarios": {
      "apertura": "05:00",
      "cierre": "00:00",
      "notas": "L-V 05:00-00:00. Sáb hasta 01:00. Dom y festivos hasta 00:00"
    },
    "lugares_cercanos": [
      {
        "nombre": "Centro Administrativo Tláhuac",
        "tipo": "Servicios",
        "distancia": "300m",
        "descripcion": "Cabecera delegacional"
      },
      {
        "nombre": "Chinampas y Xochimilco",
        "tipo": "Patrimonio",
        "distancia": "2km",
        "descripcion": "Patrimonio UNESCO: jardines flotantes prehispánicos"
      },
      {
        "nombre": "Mercado Principal Tláhuac",
        "tipo": "Comercio",
        "distancia": "400m",
        "descripcion": "Centro comercial importante de la delegación"
      }
    ]
  }
];

module.exports = { estaciones };
