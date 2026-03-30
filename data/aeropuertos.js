export const aeropuertos = [
  {
    slug: 'benito-juarez-cdmx',
    nombre: 'Aeropuerto Internacional Benito Juárez',
    intro: 'Principal puerta de entrada a México, el aeropuerto Benito Juárez conecta a la Ciudad de México con más de 300 destinos internacionales. Con la Terminal Aérea en Metro Línea 5, es una de las formas más eficientes y económicas de llegar al centro histórico. Recibe anualmente millones de viajeros en sus dos modernas terminales.',
    pois: [
      { nombre: 'Museo Tamayo', descripcion: 'Museo de arte contemporáneo a 20 min en Metro Línea 5 hacia Coyoacán' },
      { nombre: 'Bosque de Chapultepec', descripcion: 'Parque central con castillo y museos a 15 min desde el aeropuerto en Metro' },
      { nombre: 'Centro Histórico de CDMX', descripcion: 'Zócalo, Catedral y Palacio Nacional a 45-50 min en Metro directo' },
      { nombre: 'Mercado de Sonora', descripcion: 'Tradicional mercado mexicano a 25 min en Metro desde Terminal Aérea' },
    ],
    iata: 'MEX',
    ciudad: 'Ciudad de México',
    estado: 'Ciudad de México',
    region: 'centro',
    lat: 19.4363,
    lng: -99.0721,
    distanciaCentro: '13 km',
    comoLlegar: {
      transporte: [
        {
          tipo: 'Metro',
          detalle: 'Línea 5 (Rosa), estación Terminal Aérea. Directo al aeropuerto desde el centro histórico y Coyoacán.',
          tiempo: '45-50 min al Zócalo',
          precio: '$5 MXN',
        },
        {
          tipo: 'Metrobús',
          detalle: 'Línea 4 (La Raza-Aeropuerto), parada Terminal 1. Conecta con Buenavista y Reforma.',
          tiempo: '50-60 min a Buenavista',
          precio: '$6 MXN',
        },
      ],
      taxi: {
        estimado: '$250-350 MXN al centro',
        nota: 'Compra en counters dentro de terminales. Tarifa autorizada fija.',
      },
      uber: {
        estimado: '$150-250 MXN al centro',
        nota: 'Zona pickup en Puerta 4 T1, Puerta 3 T2. Horarios: 6am-midnight.',
      },
      tips: [
        'Metro es 10x más barato pero puede estar lleno con maletas en rush hours',
        'Taxis autorizados incluyen seguro; desconfía de taxis piratas',
        'Uber peak pricing 8-10am y 5-7pm',
        'Terminal 2 es nueva (2023) con mejor Metro access',
      ],
    },
    conexiones: [
      { tipo: 'metro', slug: 'terminal-aerea', nombre: 'Terminal Aérea', linea: '5' },
      { tipo: 'metrobus', slug: 'metrobus-l4', nombre: 'Línea 4', linea: '4' },
    ],
    descripcion:
      'El aeropuerto más grande de México y puerta de entrada para 50+ millones de turistas anuales. Conectado directamente a Metro Línea 5 desde 1982. Recientemente ampliado con Terminal 2 (2023).',
    seo_title: 'Aeropuerto de México (MEX) — Cómo llegar al centro en metro y transporte',
    meta_description:
      'Guía completa: Aeropuerto Benito Juárez CDMX. Metro Línea 5, Metrobús L4, taxi y Uber. Precios, tiempos y tips 2026.',
  },
  {
    slug: 'felipe-angeles-edomex',
    nombre: 'Aeropuerto Internacional Felipe Ángeles',
    intro: 'Aeropuerto alternativo ubicado en Zumpango, Estado de México, a 35 km al norte de la Ciudad de México. Abierto 24/7 con servicios de autobús directo y Uber. Ideal para viajeros con destino al norte CDMX o Estado de México que buscan evitar el tráfico del aeropuerto principal.',
    pois: [
      { nombre: 'Zumpango Centro', descripcion: 'Pueblo mágico con arquitectura colonial a 20 min de autobús' },
      { nombre: 'Polanco', descripcion: 'Zona de lujo CDMX a 60 min en autobús directo o 45 min en Uber' },
      { nombre: 'Santa Fe', descripcion: 'Centro financiero moderno de CDMX a 50 min en Uber' },
      { nombre: 'Mercado del Valle', descripcion: 'Centro comercial tradicional en ruta hacia el norte' },
    ],
    iata: 'NLU',
    ciudad: 'Zumpango',
    estado: 'Estado de México',
    region: 'norte',
    lat: 19.7501,
    lng: -99.0121,
    distanciaCentro: '35 km (CDMX)',
    comoLlegar: {
      transporte: [
        {
          tipo: 'Autobús',
          detalle: 'Servicio Benito Juárez Express. Conecta con Central de Autos del Norte y Centro CDMX.',
          tiempo: '60-90 min al centro',
          precio: '$60-80 MXN',
        },
        {
          tipo: 'Autobús',
          detalle: 'Servicio local Transportes Zumpango hacia la cabecera municipal.',
          tiempo: '20 min a pueblo, luego conexiones',
          precio: '$15 MXN',
        },
      ],
      taxi: {
        estimado: '$400-600 MXN al centro CDMX',
        nota: 'Sin servicio de taxi autorizado; usar Uber o remises privadas.',
      },
      uber: {
        estimado: '$300-450 MXN al centro CDMX',
        nota: 'Disponible pero precios muy altos por distancia. Usar para cortas distancias.',
      },
      tips: [
        'Felipe Ángeles es más alejado del centro; considera si vale la pena ahorrar dinero en ticket',
        'Sin Metro directo; dependencia de autobús es alta',
        'Abierto 24/7 pero servicios de transporte limitados a madrugada',
        'Mejor opción si alojamiento está en norte CDMX (Polanco, Santa Fe)',
      ],
    },
    conexiones: [],
    descripcion:
      'Aeropuerto militar reconvertido inaugurado en 2022 como alternativa a Benito Juárez. Ubicado en Zumpango, Edomex. Bajo movimiento de pasajeros (3-5% del total nacional).',
    seo_title: 'Aeropuerto Felipe Ángeles (NLU) — Transporte a CDMX y norte',
    meta_description:
      'Felipe Ángeles Zumpango: autobús, Uber, taxi. Cómo llegar a CDMX. Alternativa a Benito Juárez.',
  },
  {
    slug: 'miguel-hidalgo-guadalajara',
    nombre: 'Aeropuerto Internacional Miguel Hidalgo',
    intro: 'El segundo aeropuerto más importante de México, ubicado a 16 km al sur de Guadalajara. Conecta la capital jalisciense con destinos principales en América del Norte y Europa. Acceso directo mediante Macrobús BRT (línea MAX Rojo) hacia el centro histórico y zonas turísticas.',
    pois: [
      { nombre: 'Centro Histórico de Guadalajara', descripcion: 'Casco antiguo con plazas y templos coloniales a 50 min en Macrobús' },
      { nombre: 'Tlaquepaque', descripcion: 'Pueblo artesanal con galerías y cerámica tradicional a 30 min en Macrobús' },
      { nombre: 'Tonalá', descripcion: 'Mercado de artesanías y vidrio soplado mexicano a 35 min en Macrobús' },
      { nombre: 'Zapopan', descripcion: 'Zona residencial y comercial a 40 min en Macrobús' },
    ],
    iata: 'GDL',
    ciudad: 'Guadalajara',
    estado: 'Jalisco',
    region: 'occidente',
    lat: 20.5213,
    lng: -103.3058,
    distanciaCentro: '16 km',
    comoLlegar: {
      transporte: [
        {
          tipo: 'Autobús',
          detalle: 'Transportes Guadalajara y Aeromex Coach. Hacia Centro, Tlaquepaque y Zapopan.',
          tiempo: '45-60 min al centro Gdl',
          precio: '$50-70 MXN',
        },
        {
          tipo: 'Macrobús (BRT)',
          detalle: 'Línea de tránsito rápido MAX Rojo. Parada en terminal T1.',
          tiempo: '50-70 min al centro',
          precio: '$8 MXN',
        },
      ],
      taxi: {
        estimado: '$250-350 MXN al centro',
        nota: 'Sitio oficial de taxis del aeropuerto. Tarifa segura.',
      },
      uber: {
        estimado: '$180-280 MXN al centro',
        nota: 'Disponible 24/7. Zona pickup en Módulo 3, salida Sur T1.',
      },
      tips: [
        'Guadalajara tiene Macrobús pero NO Tren Ligero directo al aeropuerto',
        'Macrobús es más barato que taxi/Uber',
        'Rentadora de autos en T1; buenos para explorar Guadalajara',
        'Conecta con pueblos mágicos (Tequila, Talpa, San Sebastián)',
      ],
    },
    conexiones: [],
    descripcion:
      'Segundo aeropuerto más importante de México. Ubicado en municipio de Tlajomulco. Acceso a Guadalajara, Zapopan, Tlaquepaque y Tonalá. Centro cultural de Jalisco.',
    seo_title: 'Aeropuerto Guadalajara (GDL) — Cómo llegar al centro en Macrobús y taxi',
    meta_description:
      'Aeropuerto Miguel Hidalgo Guadalajara: Macrobús, taxi, Uber. Precios y tiempos al centro Gdl 2026.',
  },
  {
    slug: 'mariano-escobedo-monterrey',
    nombre: 'Aeropuerto Internacional Mariano Escobedo',
    intro: 'Principal hub aeroportuario del norte mexicano, ubicado en Apodaca a 24 km de Monterrey. Centro de conexiones para negocios en el Bajío y norte de México. Sin conexión directa de Metrorrey, requiere taxi, Uber o autobús hacia el centro de la ciudad.',
    pois: [
      { nombre: 'Barrio Antiguo', descripcion: 'Centro histórico de Monterrey a 40 min en taxi con arquitectura colonial' },
      { nombre: 'Paseo Santa Lucia', descripcion: 'Paseo acuático artificial al corazón de Monterrey a 40 min en Uber' },
      { nombre: 'MARCO (Museo de Arte Contemporáneo)', descripcion: 'Museo moderno a 35 min en taxi desde el aeropuerto' },
      { nombre: 'Macroplaza', descripcion: 'Centro comercial y plaza más grande del mundo a 35 min en Uber' },
    ],
    iata: 'MTY',
    ciudad: 'Monterrey',
    estado: 'Nuevo León',
    region: 'norte',
    lat: 25.7785,
    lng: -100.1065,
    distanciaCentro: '24 km',
    comoLlegar: {
      transporte: [
        {
          tipo: 'Autobús',
          detalle: 'Servicios locales Monterrey-Apodaca y Transporte del Valle del Tecnológico.',
          tiempo: '50-70 min al centro',
          precio: '$30-50 MXN',
        },
        {
          tipo: 'Metrorrey',
          detalle: 'NO hay conexión directa de Metrorrey al aeropuerto. Requiere cambios.',
          tiempo: '80+ min (incómodo)',
          precio: '$9 MXN',
        },
      ],
      taxi: {
        estimado: '$400-550 MXN al centro',
        nota: 'Sitio oficial de taxis. Servicio autorizado. Sin estaciones de metro.',
      },
      uber: {
        estimado: '$300-450 MXN al centro',
        nota: 'Disponible. Zona pickup enfrente de Puerta A T1.',
      },
      tips: [
        'Metrorrey NO conecta el aeropuerto. Depende de autobús y taxi.',
        'Mejor usar taxi o Uber por seguridad y conveniencia',
        'Rentadora de autos recomendada para explorar Monterrey',
        'Acceso a empresas de negocios en Barrio Antiguo y Santa Lucia',
      ],
    },
    conexiones: [],
    descripcion:
      'Aeropuerto industrial de Monterrey, hub de negocios del norte. Terminal moderna con comercio y servicios. Ubicado en Apodaca, distante del centro.',
    seo_title: 'Aeropuerto Monterrey (MTY) — Cómo llegar: taxi, Uber y autobús',
    meta_description:
      'Mariano Escobedo Monterrey: sin metro directo. Taxi, Uber y autobús. Guía transporte 2026.',
  },
  {
    slug: 'cancun-cun',
    nombre: 'Aeropuerto Internacional de Cancún',
    intro: 'Puerta de entrada a la Riviera Maya, ubicado a 20 km al sur de Cancún. Es el aeropuerto turístico más importante de México con conexiones a la Zona Hotelera, Playa del Carmen y Tulum. Acceso mediante autobús turístico, Uber o servicio de shuttle directo a resorts.',
    pois: [
      { nombre: 'Playa del Carmen', descripcion: 'Resort y zona turística a 45 min en autobús' },
      { nombre: 'Tulum', descripcion: 'Ruinas mayas frente al mar a 70 min en autobús' },
      { nombre: 'Cenote Tankah', descripcion: 'Sinkhole natural para buceo y natación a 60 min en Uber' },
      { nombre: 'Isla de Cozumel', descripcion: 'Isla de buceo de clase mundial, ferry desde Playa del Carmen a 60 min' },
    ],
    iata: 'CUN',
    ciudad: 'Cancún',
    estado: 'Quintana Roo',
    region: 'sureste',
    lat: 21.0087,
    lng: -87.2721,
    distanciaCentro: '25 km',
    comoLlegar: {
      transporte: [
        {
          tipo: 'Tren Maya',
          detalle: 'Estación Cancún Aeropuerto. Directo a Playa del Carmen, Tulum, Cozumel (ferry) y Mérida.',
          tiempo: '35 min a Playa del Carmen',
          precio: '$150-300 MXN (según destino)',
        },
        {
          tipo: 'Autobús',
          detalle: 'ADO, Mayab, Transportes Peninsulares. Hacia Playa, Tulum, Mérida, Cozumel.',
          tiempo: '45-90 min a Playa del Carmen',
          precio: '$80-150 MXN',
        },
        {
          tipo: 'Shuttle Compartido',
          detalle: 'Servicios privados tipo Xel-Ha Express hacia resorts en Riviera Maya.',
          tiempo: '30-60 min',
          precio: '$200-400 MXN',
        },
      ],
      taxi: {
        estimado: '$400-600 MXN a zona hotelera',
        nota: 'Compra en booth oficial. Sin Uber en Cancún (prohibición local).',
      },
      uber: {
        estimado: 'NO disponible en Cancún',
        nota: 'Usar taxi autorizado o Indriver (similar a Uber).',
      },
      tips: [
        'Tren Maya es novedad (inaugurado 2023); conecta toda la Riviera Maya',
        'ADO es opción tradicional, confiable y más barata que Tren Maya',
        'Cancún está dominado por resorts all-inclusive; turistas rara vez necesitan transporte público',
        'Alquilar auto si piensas visitar Tulum, Cozumel o Playa del Carmen',
      ],
    },
    conexiones: [
      { tipo: 'tren', slug: 'tren-maya-cancun', nombre: 'Estación Tren Maya Cancún', linea: 'Tren Maya' },
    ],
    descripcion:
      'Tercer aeropuerto más importante de México. Puerta a la Riviera Maya. Conectado con Tren Maya desde 2023. Centro vacacional global.',
    seo_title: 'Aeropuerto Cancún (CUN) — Tren Maya, ADO y taxi a Riviera Maya',
    meta_description:
      'Aeropuerto Cancún: Tren Maya a Playa del Carmen y Tulum. ADO, taxi. Guía turista 2026.',
  },
  {
    slug: 'los-cabos-sjd',
    nombre: 'Aeropuerto Internacional de Los Cabos',
    intro: 'Destino turístico de lujo ubicado en la punta sur de la Península de Baja California, a 48 km de Cabo San Lucas. Hub para el turismo de lujo en México con resorts de clase mundial. Acceso mediante shuttle, Uber o servicio de resort directo a hoteles de la zona.',
    pois: [
      { nombre: 'Cabo San Lucas', descripcion: 'Marina con yates de lujo y restaurantes a 50 min en Uber' },
      { nombre: 'El Arco', descripcion: 'Formación rocosa icónica en la punta de Baja California a 60 min' },
      { nombre: 'San José del Cabo', descripcion: 'Pueblo colonial artístico a 45 min con galerías y tiendas' },
      { nombre: 'Flora Farms', descripcion: 'Resort gastronómico y tienda de lujo a 40 min en Uber' },
    ],
    iata: 'SJD',
    ciudad: 'San José del Cabo',
    estado: 'Baja California Sur',
    region: 'pacifico',
    lat: 23.1725,
    lng: -109.7212,
    distanciaCentro: '35 km',
    comoLlegar: {
      transporte: [
        {
          tipo: 'Autobús',
          detalle: 'Servicios Aerocab y Transportes La Paz. Hacia San José, Cabo San Lucas y La Paz.',
          tiempo: '45-60 min a Cabo San Lucas',
          precio: '$80-120 MXN',
        },
        {
          tipo: 'Shuttle de Hotel',
          detalle: 'Mayoría de resorts ofrecen transporte gratuito o por pago.',
          tiempo: 'Varía',
          precio: 'Incluido o $200-300 MXN',
        },
      ],
      taxi: {
        estimado: '$600-800 MXN a Cabo San Lucas',
        nota: 'Sitio oficial en terminal. Tarifa fija.',
      },
      uber: {
        estimado: '$400-600 MXN a Cabo San Lucas',
        nota: 'Disponible. Zona pickup clara en Arrivals.',
      },
      tips: [
        'Los Cabos es destino resort; mayoría no usa transporte público',
        'Rentar auto si quieres explorar más allá de resorts',
        'Conexión a La Paz (capital estatal) en 2 hrs',
        'Puerto de cruceros en Cabo San Lucas; importante turístico',
      ],
    },
    conexiones: [],
    descripcion:
      'Puerta a Los Cabos y Baja California Sur. Destino de lujo mundial. Acceso a playas, resorts all-inclusive y vida nocturna premium.',
    seo_title: 'Aeropuerto Los Cabos (SJD) — Cómo llegar a Cabo San Lucas',
    meta_description:
      'San José del Cabo SJD: autobús, taxi, Uber. Transporte a Cabo San Lucas y resorts.',
  },
  {
    slug: 'puerto-vallarta-pvr',
    nombre: 'Aeropuerto Internacional Licenciado Gustavo Díaz Ordaz',
    intro: 'Principal aeropuerto de la Costa Jalisco, ubicado a 8 km de Puerto Vallarta. Conecta la playa con resorts de lujo y el pueblo turístico tradicional. Acceso mediante autobús local, taxi o Uber directo a la Zona Hotelera y centro histórico.',
    pois: [
      { nombre: 'Malecón de Puerto Vallarta', descripcion: 'Paseo costero con vistas al Pacífico a 15 min en taxi' },
      { nombre: 'Centro Histórico', descripcion: 'Galerías, tiendas y restaurantes a 10 min en taxi' },
      { nombre: 'Yelapa', descripcion: 'Playa paradisíaca sin acceso carretero, ferry desde Puerto Vallarta a 30 min' },
      { nombre: 'Sayulita', descripcion: 'Pueblo bohemio con playas y tiendas a 35 min en auto' },
    ],
    iata: 'PVR',
    ciudad: 'Puerto Vallarta',
    estado: 'Jalisco',
    region: 'pacifico',
    lat: 20.5808,
    lng: -105.2538,
    distanciaCentro: '12 km',
    comoLlegar: {
      transporte: [
        {
          tipo: 'Autobús',
          detalle: 'Servicios locales hacia Puerto Vallarta centro, Nuevo Vallarta.',
          tiempo: '30-45 min al centro',
          precio: '$50-70 MXN',
        },
        {
          tipo: 'Shuttle de Hotel',
          detalle: 'Resorts ofrecen transporte.',
          tiempo: 'Varía',
          precio: 'Incluido o $150-250 MXN',
        },
      ],
      taxi: {
        estimado: '$200-300 MXN al centro',
        nota: 'Sitio oficial. Tarifa segura.',
      },
      uber: {
        estimado: '$150-220 MXN al centro',
        nota: 'Disponible. Zona pickup frente a Arrivals.',
      },
      tips: [
        'Puerto Vallarta es destino playero populares para canadienses y estadounidenses',
        'Centro histórico (Malecón) es caminable desde Playa de Oro',
        'Buenas opciones de rentadora de autos para explorar Nayarit',
        'Bahía accesible a Islas Marietas (tours)',
      ],
    },
    conexiones: [],
    descripcion:
      'Puerta a Puerto Vallarta. Ubicado en playas de Jalisco. Centro vacacional de Pacífico Mexicano con malecón histórico.',
    seo_title: 'Aeropuerto Puerto Vallarta (PVR) — Cómo llegar al centro',
    meta_description:
      'Puerto Vallarta PVR: autobús, taxi, Uber. Transporte al centro y malecón. Guía 2026.',
  },
  {
    slug: 'tijuana-tij',
    nombre: 'Aeropuerto Internacional General Abelardo L. Rodríguez',
    intro: 'Puerta norte de México ubicada a 5 km del centro de Tijuana y muy cerca de la frontera con San Diego. Conecta con destinos internacionales y el sur de California. Acceso mediante taxi, Uber o autobús local al centro y zonas comerciales.',
    pois: [
      { nombre: 'Avenida Revolución', descripcion: 'Centro comercial y gastronómico de Tijuana a 10 min en taxi' },
      { nombre: 'Plaza Río', descripcion: 'Centro comercial con vistas a San Diego a 12 min en Uber' },
      { nombre: 'Rosarito Beach', descripcion: 'Playa resort a 30 min de auto hacia el sur' },
      { nombre: 'Ensenada', descripcion: 'Puerto de pescado y gastronomía a 60 min en auto' },
    ],
    iata: 'TIJ',
    ciudad: 'Tijuana',
    estado: 'Baja California',
    region: 'norte',
    lat: 32.5411,
    lng: -116.9712,
    distanciaCentro: '8 km',
    comoLlegar: {
      transporte: [
        {
          tipo: 'Autobús Urbano',
          detalle: 'Rutas locales 1, 2, 3 hacia Centro, Playas, Otay.',
          tiempo: '25-40 min al centro',
          precio: '$2.50 USD (tarjeta Sube)',
        },
        {
          tipo: 'CBX (Cross Border Express)',
          detalle: 'Puente peatonal directo a San Diego (Última terminal CBX).',
          tiempo: '2 min a San Diego',
          precio: '$15 USD + inspección USA',
        },
      ],
      taxi: {
        estimado: '$150-250 MXN al centro',
        nota: 'Sitio oficial. Muchos taxis piratas; evitar.',
      },
      uber: {
        estimado: '$100-180 MXN al centro',
        nota: 'Disponible en Uber México. Zona pickup clara.',
      },
      tips: [
        'Tijuana es fronteriza; transporte conecta con San Diego directo (CBX)',
        'CBX peatonal es único en América; 2 min a San Diego',
        'Autobús super barato pero lento',
        'Muchos turistas californianos; Uber es opción segura',
        'No hay metro en Tijuana',
      ],
    },
    conexiones: [
      { tipo: 'cbx', slug: 'cbx-puente-fronterizo', nombre: 'CBX (Cross Border Express)', linea: 'San Diego' },
    ],
    descripcion:
      'Aeropuerto fronterizo único con acceso directo a San Diego via CBX peatonal. Centro de comercio y turismo fronterizo.',
    seo_title: 'Aeropuerto Tijuana (TIJ) — CBX a San Diego, autobús, Uber',
    meta_description:
      'Tijuana TIJ: CBX puente a San Diego. Autobús, Uber. Transporte fronterizo 2026.',
  },
  {
    slug: 'merida-mid',
    nombre: 'Aeropuerto Internacional Manuel Crescencio Rejón',
    intro: 'Puerta a la Península de Yucatán ubicada a 9 km al suroeste de Mérida. Conecta la capital yucateca con destinos nacionales e internacionales. Acceso mediante autobús local, taxi o Uber al centro histórico y zonas arqueológicas mayas cercanas.',
    pois: [
      { nombre: 'Centro Histórico de Mérida', descripcion: 'Ciudad colonial con palacios y plazas a 15 min en taxi' },
      { nombre: 'Chichén Itzá', descripcion: 'Zona arqueológica maya a 2 horas de auto hacia el este' },
      { nombre: 'Uxmal', descripcion: 'Sitio arqueológico con arquitectura Puuc a 60 min al sur' },
      { nombre: 'Cenote Ik-Kil', descripcion: 'Cenote subterráneo para nadar a 45 min hacia Chichén Itzá' },
    ],
    iata: 'MID',
    ciudad: 'Mérida',
    estado: 'Yucatán',
    region: 'sureste',
    lat: 20.9294,
    lng: -89.6564,
    distanciaCentro: '10 km',
    comoLlegar: {
      transporte: [
        {
          tipo: 'Autobús',
          detalle: 'Servicios locales y foráneos. Hacia Mérida centro, Chichén Itzá, Cancún.',
          tiempo: '30-45 min al centro Mérida',
          precio: '$40-60 MXN',
        },
        {
          tipo: 'Tren Maya',
          detalle: 'Próxima estación será en Mérida (en construcción 2026).',
          tiempo: 'No disponible aún',
          precio: 'TBD',
        },
      ],
      taxi: {
        estimado: '$200-300 MXN al centro',
        nota: 'Sitio oficial en terminal.',
      },
      uber: {
        estimado: '$150-230 MXN al centro',
        nota: 'Disponible. Zona pickup clara.',
      },
      tips: [
        'Mérida es puerta a Chichén Itzá (patrimonio Unesco)',
        'Población amigable; ciudad colonial hermosa',
        'Futuro Tren Maya llegará a Mérida en 2026',
        'Gastronomía yucateca única',
        'Centro de Mérida caminable desde aeropuerto en 45 min',
      ],
    },
    conexiones: [],
    descripcion:
      'Aeropuerto regional de Yucatán. Puerta a Chichén Itzá, Uxmal y patrimonio maya. Ciudad colonial con identidad cultural fuerte.',
    seo_title: 'Aeropuerto Mérida (MID) — Cómo llegar al centro y Chichén Itzá',
    meta_description:
      'Mérida MID: autobús, taxi, Uber. Acceso a Chichén Itzá. Transporte 2026.',
  },
  {
    slug: 'chihuahua-cuu',
    nombre: 'Aeropuerto Internacional General Roberto Fierro Villalobos',
    intro: 'Aeropuerto del norte de Chihuahua ubicado a 15 km de la capital estatal. Hub para viajeros de negocios y aventureros en la Sierra Madre. Acceso mediante autobús local, taxi o Uber al centro histórico y destinos rurales circundantes.',
    pois: [
      { nombre: 'Centro Histórico de Chihuahua', descripcion: 'Plaza de armas con museos y catedrales a 20 min en taxi' },
      { nombre: 'Barrio Antiguo', descripcion: 'Zona restaurada con tiendas y gastronomía a 18 min en Uber' },
      { nombre: 'Barrancas del Cobre', descripcion: 'Cañones espectaculares acceso vía tren desde Chihuahua a 4 horas' },
      { nombre: 'Casas Grandes', descripcion: 'Zona arqueológica a 300 km hacia el norte' },
    ],
    iata: 'CUU',
    ciudad: 'Chihuahua',
    estado: 'Chihuahua',
    region: 'norte',
    lat: 28.6992,
    lng: -105.8697,
    distanciaCentro: '15 km',
    comoLlegar: {
      transporte: [
        {
          tipo: 'Autobús Urbano',
          detalle: 'Rutas locales 8, 9, 11 hacia Centro Histórico.',
          tiempo: '30-45 min al centro',
          precio: '$25-40 MXN',
        },
      ],
      taxi: {
        estimado: '$250-350 MXN al centro',
        nota: 'Sitio oficial en terminal.',
      },
      uber: {
        estimado: '$180-280 MXN al centro',
        nota: 'Disponible. Zona pickup clara.',
      },
      tips: [
        'Chihuahua no tiene metro o tren ligero',
        'Autobús es opción barata pero lenta',
        'Acceso a Ferrocarril Chepe (Tren turístico a Barranca del Cobre)',
        'Centro histórico es atracción principal',
      ],
    },
    conexiones: [],
    descripcion:
      'Aeropuerto del norte. Centro histórico colonial de Chihuahua. Acceso a Barranca del Cobre y Ferrocarril Chepe.',
    seo_title: 'Aeropuerto Chihuahua (CUU) — Cómo llegar al centro',
    meta_description:
      'Chihuahua CUU: autobús, taxi, Uber. Transporte al centro e acceso a Ferrocarril Chepe.',
  },
  {
    slug: 'bajio-leon-bjx',
    nombre: 'Aeropuerto Internacional de Bajío',
    intro: 'Aeropuerto regional ubicado entre León, Guanajuato y el Bajío. Hub importante para viajeros de negocios en la zona de manufactura mexicana. Acceso mediante autobús, Uber o servicio de renta de autos a ciudades del Bajío.',
    pois: [
      { nombre: 'Guanajuato Centro Histórico', descripcion: 'Ciudad minera colonial UNESCO a 45 min en auto' },
      { nombre: 'León Centro', descripcion: 'Capital de la industria de calzado a 30 min en Uber' },
      { nombre: 'Dolores Hidalgo', descripcion: 'Pueblo mágico cuna de la independencia a 60 min en auto' },
      { nombre: 'San Miguel de Allende', descripcion: 'Pueblo artístico con galerías y tiendas a 90 min' },
    ],
    iata: 'BJX',
    ciudad: 'León',
    estado: 'Guanajuato',
    region: 'bajio',
    lat: 20.7467,
    lng: -101.4896,
    distanciaCentro: '40 km a León',
    comoLlegar: {
      transporte: [
        {
          tipo: 'Autobús Aeromex Coach',
          detalle: 'Servicios hacia León, Guanajuato capital, San Miguel Allende.',
          tiempo: '50-70 min a León',
          precio: '$100-140 MXN',
        },
        {
          tipo: 'Autobús Foráneo',
          detalle: 'ETN, Primera Plus hacia destinos regionales.',
          tiempo: 'Varía',
          precio: '$60-120 MXN',
        },
      ],
      taxi: {
        estimado: '$400-600 MXN a León',
        nota: 'Distancia considerable; sitio oficial en terminal.',
      },
      uber: {
        estimado: '$300-450 MXN a León',
        nota: 'Disponible pero caro por distancia.',
      },
      tips: [
        'Bajío está en medio de varias ciudades: León (industrial), Guanajuato (patrimonio), San Miguel Allende (artístico)',
        'Sin metro o tren ligero directo',
        'Rentadora de autos recomendada para explorar región',
        'Acceso fácil a ciudades coloniales (Guanajuato, Dolores Hidalgo)',
      ],
    },
    conexiones: [],
    descripcion:
      'Aeropuerto del Bajío mexicano. Ubicado equidistante entre León, Guanajuato y San Miguel Allende. Puerta a patrimonio colonial.',
    seo_title: 'Aeropuerto Bajío (BJX) — Transporte a León, Guanajuato, San Miguel',
    meta_description:
      'Bajío BJX: autobús, taxi, Uber. Guía transporte a León, Guanajuato 2026.',
  },
  {
    slug: 'queretaro-qro',
    nombre: 'Aeropuerto Internacional Querétaro',
    intro: 'Aeropuerto del Bajío ubicado a 27 km al norte de Querétaro. Sirve como conexión regional para destinos del norte y negocios en la zona. Acceso mediante autobús, Uber o renta de autos hacia el centro histórico UNESCO.',
    pois: [
      { nombre: 'Centro Histórico de Querétaro', descripcion: 'Zona UNESCO con plazas coloniales a 30 min en Uber' },
      { nombre: 'Acueducto de Querétaro', descripcion: 'Obra del siglo XVIII visible desde la ciudad' },
      { nombre: 'Tequisquiapan', descripcion: 'Pueblo mágico con viñedos a 45 min en auto' },
      { nombre: 'San Juan del Río', descripcion: 'Centro de joyería y gemas a 35 min' },
    ],
    iata: 'QRO',
    ciudad: 'Querétaro',
    estado: 'Querétaro',
    region: 'centro',
    lat: 20.6173,
    lng: -100.2898,
    distanciaCentro: '25 km',
    comoLlegar: {
      transporte: [
        {
          tipo: 'Autobús Aeromex Coach',
          detalle: 'Hacia Centro de Querétaro y destinos regionales.',
          tiempo: '45-60 min al centro',
          precio: '$80-100 MXN',
        },
        {
          tipo: 'Transporte Local',
          detalle: 'Autobuses urbanos hacia Querétaro centro.',
          tiempo: '50-70 min',
          precio: '$30-50 MXN',
        },
      ],
      taxi: {
        estimado: '$300-450 MXN al centro',
        nota: 'Sitio oficial en terminal.',
      },
      uber: {
        estimado: '$200-320 MXN al centro',
        nota: 'Disponible. Zona pickup clara.',
      },
      tips: [
        'Querétaro es ciudad colonial hermosa y cercana a CDMX (3 hrs)',
        'Sin metro o tren ligero directo',
        'Acceso a vineyards regionales',
        'Centro histórico (Patrimonio Unesco) es atracción',
      ],
    },
    conexiones: [],
    descripcion:
      'Aeropuerto regional de Querétaro. Acceso a ciudad colonial patrimonio Unesco. Ubicación estratégica entre CDMX y Guanajuato.',
    seo_title: 'Aeropuerto Querétaro (QRO) — Transporte al centro histórico',
    meta_description:
      'Querétaro QRO: autobús, taxi, Uber. Cómo llegar al centro histórico. Guía 2026.',
  },
  {
    slug: 'oaxaca-oax',
    nombre: 'Aeropuerto Internacional Xoxocotlán',
    intro: 'Puerta a la cultura prehispánica ubicada a 11 km de Oaxaca. Conecta la zona de textiles y gastronomía tradicional mexicana con destinos nacionales. Acceso mediante taxi, Uber o autobús local a la capital cultural de México.',
    pois: [
      { nombre: 'Centro Histórico de Oaxaca', descripcion: 'UNESCO con mercados y templos a 15 min en taxi' },
      { nombre: 'Templo de Santo Domingo', descripcion: 'Iglesia barroca del siglo XVI a 12 min en Uber' },
      { nombre: 'Hierve el Agua', descripcion: 'Cascadas minerales y piscinas naturales a 60 min de auto' },
      { nombre: 'Puerto Escondido', descripcion: 'Playa de surf de clase mundial a 90 min hacia la costa' },
    ],
    iata: 'OAX',
    ciudad: 'Oaxaca',
    estado: 'Oaxaca',
    region: 'sureste',
    lat: 16.9976,
    lng: -96.7265,
    distanciaCentro: '7 km',
    comoLlegar: {
      transporte: [
        {
          tipo: 'Autobús Local',
          detalle: 'Servicios locales hacia Oaxaca centro y destinos regionales.',
          tiempo: '20-30 min al centro',
          precio: '$20-40 MXN',
        },
        {
          tipo: 'Colectivo (Combi)',
          detalle: 'Transporte compartido local muy barato.',
          tiempo: '25-35 min',
          precio: '$15 MXN',
        },
      ],
      taxi: {
        estimado: '$150-250 MXN al centro',
        nota: 'Sitio oficial; muy cercano al centro.',
      },
      uber: {
        estimado: '$100-180 MXN al centro',
        nota: 'Disponible. Zona pickup clara.',
      },
      tips: [
        'Oaxaca muy cercana al aeropuerto (7 km)',
        'Centro histórico caminable desde aeropuerto en 30 min',
        'Acceso a pueblos mágicos (Etla, Tlacolula)',
        'Gastronomía oaxaqueña es atracción',
        'Textiles y artesanía local',
      ],
    },
    conexiones: [],
    descripcion:
      'Aeropuerto regional de Oaxaca. Puerta a ciudad colonial de gastronomía y arte. Acceso a pueblos mágicos y tradiciones indígenas.',
    seo_title: 'Aeropuerto Oaxaca (OAX) — Transporte al centro histórico',
    meta_description:
      'Oaxaca OAX: autobús, combi, taxi, Uber. Transporte al centro. Guía 2026.',
  },
  {
    slug: 'toluca-tlc',
    nombre: 'Aeropuerto Internacional Adolfo López Mateos',
    intro: 'Aeropuerto alternativo ubicado a 20 km de Toluca en el Estado de México. Opción de bajo costo para viajeros con destino al oeste de la Ciudad de México y pueblos mágicos. Acceso mediante autobús, Uber o Tren Suburbano hacia CDMX.',
    pois: [
      { nombre: 'Valle de Bravo', descripcion: 'Pueblo mágico lacustre a 70 min en auto' },
      { nombre: 'Tepoztlán', descripcion: 'Pueblo mágico con ruinas prehispánicas a 90 min' },
      { nombre: 'Cuernavaca', descripcion: 'Ciudad de eterna primavera a 80 min en auto' },
      { nombre: 'Malinalco', descripcion: 'Pueblo arqueológico a 60 min' },
    ],
    iata: 'TLC',
    ciudad: 'Toluca',
    estado: 'Estado de México',
    region: 'centro',
    lat: 19.3362,
    lng: -99.5638,
    distanciaCentro: '65 km a CDMX',
    comoLlegar: {
      transporte: [
        {
          tipo: 'Autobús Aeromex Coach',
          detalle: 'Directo a CDMX (Central del Norte, Terminal Sur) y Toluca.',
          tiempo: '90-120 min a CDMX',
          precio: '$100-150 MXN',
        },
        {
          tipo: 'Autobús Local',
          detalle: 'Transporte hacia Toluca centro y destinos regionales.',
          tiempo: '30 min a Toluca',
          precio: '$30-50 MXN',
        },
      ],
      taxi: {
        estimado: '$600-900 MXN a CDMX',
        nota: 'Distancia muy grande; sitio oficial en terminal.',
      },
      uber: {
        estimado: '$400-700 MXN a CDMX',
        nota: 'Disponible pero muy caro. Usar autobús.',
      },
      tips: [
        'Toluca está entre CDMX y México Occidental',
        'SIN conexión directa de tren/metro a CDMX',
        'Depende mucho de autobús',
        'Mejor para turistas con destino en occidente',
        'Alternativa menos congestionada a Benito Juárez',
      ],
    },
    conexiones: [],
    descripcion:
      'Aeropuerto regional de Toluca. Alternativa a Benito Juárez pero alejado. Acceso a Estado de México y zona occidente.',
    seo_title: 'Aeropuerto Toluca (TLC) — Cómo llegar a CDMX',
    meta_description:
      'Toluca TLC: autobús a CDMX. Alternativa a Benito Juárez. Transporte 2026.',
  },
  {
    slug: 'tapachula-tap',
    nombre: 'Aeropuerto Internacional de Tapachula',
    intro: 'Puerta sur fronteriza ubicada a 22 km de Tapachula, Chiapas, cerca de la frontera con Guatemala. Conecta Centroamérica con el interior de México. Acceso mediante autobús, taxi o Uber a la ciudad y conecta con Chiapas interior.',
    pois: [
      { nombre: 'Tapachula Centro', descripcion: 'Centro urbano con mercados y comida local a 20 min' },
      { nombre: 'Izapa', descripcion: 'Zona arqueológica prehispánica a 30 min en auto' },
      { nombre: 'Volcán Tacana', descripcion: 'Volcán compartido con Guatemala a 60 min en auto' },
      { nombre: 'Puerto Arista', descripcion: 'Playa cercana a 45 min hacia la costa' },
    ],
    iata: 'TAP',
    ciudad: 'Tapachula',
    estado: 'Chiapas',
    region: 'sureste',
    lat: 14.7942,
    lng: -92.3638,
    distanciaCentro: '20 km',
    comoLlegar: {
      transporte: [
        {
          tipo: 'Autobús Local',
          detalle: 'Transporte hacia Tapachula centro y frontera Guatemala.',
          tiempo: '30-40 min al centro',
          precio: '$40-60 MXN',
        },
      ],
      taxi: {
        estimado: '$200-350 MXN al centro',
        nota: 'Sitio oficial; ciudad pequeña.',
      },
      uber: {
        estimado: '$150-280 MXN al centro',
        nota: 'Disponible pero oferta limitada.',
      },
      tips: [
        'Tapachula es puerta a Guatemala (frontera inmediata)',
        'Migración es importante en aeropuerto',
        'Pequeño aeropuerto regional',
        'Acceso a Cascadas de Agua Azul y Misol-Ha',
        'Puerto comercial importante',
      ],
    },
    conexiones: [],
    descripcion:
      'Aeropuerto fronterizo sur de México en Chiapas. Puerta a Guatemala. Hub de migración y comercio fronterizo.',
    seo_title: 'Aeropuerto Tapachula (TAP) — Transporte al centro y frontera',
    meta_description:
      'Tapachula TAP: autobús, taxi, Uber. Frontera Guatemala. Transporte 2026.',
  },
  {
    slug: 'veracruz-ver',
    nombre: 'Aeropuerto Internacional General Heriberto Jara',
    intro: 'Principal aeropuerto del Golfo de México ubicado a 12 km de Veracruz. Conecta la ciudad portuaria histórica con destinos nacionales. Acceso mediante autobús, taxi o Uber al centro histórico y malecón veracruzano.',
    pois: [
      { nombre: 'Centro Histórico de Veracruz', descripcion: 'Fortaleza colonial y malecón a 15 min en taxi' },
      { nombre: 'Castillo de San Juan de Ulúa', descripcion: 'Fuerte histórico en la bahía a 20 min' },
      { nombre: 'Xalapa', descripcion: 'Capital del estado en las montañas a 90 min' },
      { nombre: 'Cempoala', descripcion: 'Zona arqueológica prehispánica a 45 min en auto' },
    ],
    iata: 'VER',
    ciudad: 'Veracruz',
    estado: 'Veracruz',
    region: 'sureste',
    lat: 19.1451,
    lng: -96.1879,
    distanciaCentro: '12 km',
    comoLlegar: {
      transporte: [
        {
          tipo: 'Autobús Local',
          detalle: 'Servicios hacia Veracruz puerto y destinos regionales.',
          tiempo: '25-40 min al centro',
          precio: '$40-60 MXN',
        },
      ],
      taxi: {
        estimado: '$200-300 MXN al puerto',
        nota: 'Sitio oficial en terminal.',
      },
      uber: {
        estimado: '$150-250 MXN al puerto',
        nota: 'Disponible. Zona pickup clara.',
      },
      tips: [
        'Veracruz es puerto histórico del Caribe mexicano',
        'Malecón es principal atracción turística',
        'Fuerte de San Juan de Ulúa (patrimonio)',
        'SIN metro o tren ligero',
        'Gastronomía marina importante',
      ],
    },
    conexiones: [],
    descripcion:
      'Aeropuerto de Veracruz. Puerta a puerto histórico y capital de Veracruz. Patrimonio colonial y marina.',
    seo_title: 'Aeropuerto Veracruz (VER) — Cómo llegar al puerto histórico',
    meta_description:
      'Veracruz VER: autobús, taxi, Uber. Transporte al puerto histórico. Guía 2026.',
  },
  {
    slug: 'villahermosa-vsa',
    nombre: 'Aeropuerto Internacional Carlos Rovirosa',
    intro: 'Puerta a Tabasco ubicada a 18 km de Villahermosa. Conecta con la Ruta Maya hacia Palenque y destinos del sureste. Acceso mediante autobús local, taxi o Uber hacia el centro y zonas arqueológicas cercanas.',
    pois: [
      { nombre: 'Parque La Venta', descripcion: 'Museo al aire libre con artefactos olmecas a 5 min' },
      { nombre: 'Palenque', descripcion: 'Ruinas mayas en la selva a 150 km hacia Chiapas' },
      { nombre: 'Calakmul', descripcion: 'Zona arqueológica remotay hacia Campeche a 300 km' },
      { nombre: 'Centro Histórico de Villahermosa', descripcion: 'Plaza de armas y templos a 20 min en taxi' },
    ],
    iata: 'VSA',
    ciudad: 'Villahermosa',
    estado: 'Tabasco',
    region: 'sureste',
    lat: 17.9945,
    lng: -92.8435,
    distanciaCentro: '22 km',
    comoLlegar: {
      transporte: [
        {
          tipo: 'Autobús Local',
          detalle: 'Servicios hacia Villahermosa centro y destinos regionales.',
          tiempo: '40-50 min al centro',
          precio: '$50-80 MXN',
        },
      ],
      taxi: {
        estimado: '$250-400 MXN al centro',
        nota: 'Sitio oficial en terminal.',
      },
      uber: {
        estimado: '$180-320 MXN al centro',
        nota: 'Disponible. Oferta moderada.',
      },
      tips: [
        'Villahermosa es capital de Tabasco',
        'Acceso a Palenque (Patrimonio Unesco)',
        'Río Grijalva importante para turismo',
        'Museo regional de arte maya',
        'SIN metro o tren ligero',
      ],
    },
    conexiones: [],
    descripcion:
      'Aeropuerto de Villahermosa, Tabasco. Puerta a Palenque (Patrimonio Unesco). Centro petrolero y cultural del sureste.',
    seo_title: 'Aeropuerto Villahermosa (VSA) — Cómo llegar a Palenque',
    meta_description:
      'Villahermosa VSA: autobús, taxi, Uber. Transporte a Palenque. Guía 2026.',
  },
  {
    slug: 'aguascalientes-agu',
    nombre: 'Aeropuerto Internacional Jesús Terán Peredo',
    intro: 'Aeropuerto del Bajío ubicado a 27 km de Aguascalientes. Hub para viajeros de negocios y acceso a la Feria Nacional de Aguascalientes. Acceso mediante autobús, Uber o renta de autos hacia el centro y el Bajío.',
    pois: [
      { nombre: 'Centro Histórico de Aguascalientes', descripcion: 'Plaza de armas con templos barrocos a 30 min' },
      { nombre: 'Parque del Siglo', descripcion: 'Parque recreativo principal a 25 min en taxi' },
      { nombre: 'Presa de Aguamilpa', descripcion: 'Embalse para deportes acuáticos a 45 min' },
      { nombre: 'Lagos de Moreno', descripcion: 'Pueblo mágico con destilería de tequila a 90 min' },
    ],
    iata: 'AGU',
    ciudad: 'Aguascalientes',
    estado: 'Aguascalientes',
    region: 'bajio',
    lat: 21.7303,
    lng: -102.2859,
    distanciaCentro: '25 km',
    comoLlegar: {
      transporte: [
        {
          tipo: 'Autobús',
          detalle: 'Servicios hacia Aguascalientes centro y destinos regionales.',
          tiempo: '40-50 min al centro',
          precio: '$50-80 MXN',
        },
      ],
      taxi: {
        estimado: '$300-450 MXN al centro',
        nota: 'Sitio oficial en terminal.',
      },
      uber: {
        estimado: '$200-350 MXN al centro',
        nota: 'Disponible. Zona pickup clara.',
      },
      tips: [
        'Aguascalientes es capital estatal en el Bajío',
        'Feria de Aguascalientes (Oct-Nov) es evento importante',
        'SIN metro o tren ligero',
        'Acceso a destinos norte (Zacatecas)',
        'Centro histórico pequeño pero charming',
      ],
    },
    conexiones: [],
    descripcion:
      'Aeropuerto del Bajío central. Puerta a Aguascalientes y su famosa Feria anual. Ubicación estratégica entre norte y centro.',
    seo_title: 'Aeropuerto Aguascalientes (AGU) — Cómo llegar al centro',
    meta_description:
      'Aguascalientes AGU: autobús, taxi, Uber. Transporte al centro. Guía Feria 2026.',
  },
  {
    slug: 'hermosillo-hmo',
    nombre: 'Aeropuerto Internacional General Ignacio Pesqueira',
    intro: 'Aeropuerto de Sonora ubicado a 17 km de Hermosillo. Puerta al noroeste de México con acceso al desierto de Sonora y frontera con Arizona. Acceso mediante autobús, taxi o Uber hacia el centro y destinos del norte.',
    pois: [
      { nombre: 'Hermosillo Centro Histórico', descripcion: 'Plaza de armas y catedral a 20 min en taxi' },
      { nombre: 'Bahía de Kino', descripcion: 'Playa desértica con pueblo costero a 100 km' },
      { nombre: 'Desierto de Pinacate', descripcion: 'Reserva natural UNESCO a 140 km' },
      { nombre: 'Puerto Peñasco', descripcion: 'Pueblo costero con playas y mariscos a 160 km' },
    ],
    iata: 'HMO',
    ciudad: 'Hermosillo',
    estado: 'Sonora',
    region: 'norte',
    lat: 29.0433,
    lng: -110.9683,
    distanciaCentro: '20 km',
    comoLlegar: {
      transporte: [
        {
          tipo: 'Autobús Local',
          detalle: 'Servicios hacia Hermosillo centro y destinos regionales.',
          tiempo: '35-50 min al centro',
          precio: '$40-70 MXN',
        },
      ],
      taxi: {
        estimado: '$300-450 MXN al centro',
        nota: 'Sitio oficial en terminal.',
      },
      uber: {
        estimado: '$200-350 MXN al centro',
        nota: 'Disponible. Zona pickup clara.',
      },
      tips: [
        'Hermosillo es capital de Sonora',
        'SIN metro o tren ligero',
        'Acceso a Puerto Peñasco y playas de Sonora',
        'Cercanía a Arizona, USA',
        'Centro histórico pequeño',
      ],
    },
    conexiones: [],
    descripcion:
      'Aeropuerto de Hermosillo, Sonora. Puerta a norte mexicano y playas del Mar de Cortés. Capital estatal industrial.',
    seo_title: 'Aeropuerto Hermosillo (HMO) — Cómo llegar al centro',
    meta_description:
      'Hermosillo HMO: autobús, taxi, Uber. Transporte al centro. Guía 2026.',
  },
  {
    slug: 'mazatlan-mzt',
    nombre: 'Aeropuerto Internacional General Rafael Buelna',
    intro: 'Aeropuerto turístico de Sinaloa ubicado a 20 km de Mazatlán. Conecta la Riviera del Pacífico con destinos nacionales e internacionales. Acceso mediante autobús, taxi o Uber al malecón y centro turístico de Mazatlán.',
    pois: [
      { nombre: 'Malecón de Mazatlán', descripcion: 'Paseo costero con vistas al Pacífico a 20 min' },
      { nombre: 'Centro Histórico de Mazatlán', descripcion: 'Zona peatonal con tiendas y restaurantes a 25 min' },
      { nombre: 'Islas de Mazatlán', descripcion: 'Archipiélago con playas vírgenes a 15 min en ferry' },
      { nombre: 'Durango', descripcion: 'Ciudad colonial al interior a 180 km' },
    ],
    iata: 'MZT',
    ciudad: 'Mazatlán',
    estado: 'Sinaloa',
    region: 'pacifico',
    lat: 23.1614,
    lng: -106.2656,
    distanciaCentro: '27 km',
    comoLlegar: {
      transporte: [
        {
          tipo: 'Autobús Local',
          detalle: 'Servicios hacia Mazatlán centro y destinos costeros.',
          tiempo: '45-60 min al centro',
          precio: '$60-100 MXN',
        },
        {
          tipo: 'Shuttle de Hotel',
          detalle: 'Resorts ofrecen transporte.',
          tiempo: 'Varía',
          precio: 'Incluido o $150-250 MXN',
        },
      ],
      taxi: {
        estimado: '$350-550 MXN al centro',
        nota: 'Sitio oficial en terminal.',
      },
      uber: {
        estimado: '$250-400 MXN al centro',
        nota: 'Disponible. Zona pickup clara.',
      },
      tips: [
        'Mazatlán es destino playero popular de Pacífico norte',
        'Malecón es principal atracción',
        'SIN metro o tren ligero',
        'Acceso a pueblos vecinos (El Rosario, Copala)',
        'Gastronomía marina',
      ],
    },
    conexiones: [],
    descripcion:
      'Aeropuerto de Mazatlán, Sinaloa. Puerta a playa colonial del Pacífico. Destino de vacaciones y retiros.',
    seo_title: 'Aeropuerto Mazatlán (MZT) — Cómo llegar al malecón',
    meta_description:
      'Mazatlán MZT: autobús, taxi, Uber. Transporte al centro y malecón. Guía 2026.',
  },
  {
    slug: 'acapulco-aca',
    nombre: 'Aeropuerto Internacional General Juan N. Álvarez',
    intro: 'Legendario aeropuerto turístico ubicado a 24 km de Acapulco, Guerrero. Conecta la playa más famosa de México con destinos nacionales. Acceso mediante autobús, taxi o Uber hacia el malecón y resorts de lujo.',
    pois: [
      { nombre: 'Bahía de Acapulco', descripcion: 'Playa semicircular con vistas espectaculares a 25 min' },
      { nombre: 'Acantilados de Acapulco', descripcion: 'Playas con rocas y cuevas cercanas a 10 min' },
      { nombre: 'Fuerte de San Diego', descripcion: 'Fortaleza histórica del siglo XVII a 25 min' },
      { nombre: 'Laguna Coyuca', descripcion: 'Laguna natural con mariscos frescos a 30 min' },
    ],
    iata: 'ACA',
    ciudad: 'Acapulco',
    estado: 'Guerrero',
    region: 'pacifico',
    lat: 16.8639,
    lng: -99.8739,
    distanciaCentro: '22 km',
    comoLlegar: {
      transporte: [
        {
          tipo: 'Autobús Local',
          detalle: 'Servicios hacia Acapulco centro, Diamante y destinos costeros.',
          tiempo: '40-60 min al centro',
          precio: '$80-120 MXN',
        },
        {
          tipo: 'Shuttle de Hotel',
          detalle: 'Resorts ofrecen transporte.',
          tiempo: 'Varía',
          precio: 'Incluido o $200-300 MXN',
        },
      ],
      taxi: {
        estimado: '$400-600 MXN al centro',
        nota: 'Sitio oficial; transporte seguro.',
      },
      uber: {
        estimado: '$300-450 MXN al centro',
        nota: 'Disponible. Zona pickup clara.',
      },
      tips: [
        'Acapulco es legendario destino de playas y resorts',
        'Bahía hermosa y resorts all-inclusive',
        'SIN metro o tren ligero',
        'Clavadistas acróbatas de La Quebrada (espectáculo)',
        'Vida nocturna importante',
      ],
    },
    conexiones: [],
    descripcion:
      'Aeropuerto de Acapulco. Puerta a resort destino de Pacífico. Bahía hermosa con vida nocturna y playas premium.',
    seo_title: 'Aeropuerto Acapulco (ACA) — Cómo llegar al centro y bahía',
    meta_description:
      'Acapulco ACA: autobús, taxi, Uber. Transporte al centro y resorts. Guía 2026.',
  },
  {
    slug: 'tuxtla-gutierrez-tgz',
    nombre: 'Aeropuerto Internacional Ángel Albino Corzo',
    intro: 'Puerta a Chiapas ubicada a 36 km de Tuxtla Gutiérrez. Conecta la Ruta Maya con destinos nacionales. Acceso mediante autobús, taxi o Uber hacia el centro y las ruinas de San Cristóbal, Palenque y Bonampak.',
    pois: [
      { nombre: 'Cañón del Sumidero', descripcion: 'Cañón espectacular a 30 min en auto' },
      { nombre: 'San Cristóbal de las Casas', descripcion: 'Pueblo mágico colonial a 60 min en auto' },
      { nombre: 'Palenque', descripcion: 'Ruinas mayas en la selva a 180 km al norte' },
      { nombre: 'Agua Azul', descripcion: 'Cascadas turquesas a 110 km' },
    ],
    iata: 'TGZ',
    ciudad: 'Tuxtla Gutiérrez',
    estado: 'Chiapas',
    region: 'sureste',
    lat: 16.7710,
    lng: -93.0147,
    distanciaCentro: '15 km',
    comoLlegar: {
      transporte: [
        {
          tipo: 'Autobús Local',
          detalle: 'Servicios hacia Tuxtla Gutiérrez centro y destinos regionales.',
          tiempo: '30-45 min al centro',
          precio: '$50-80 MXN',
        },
      ],
      taxi: {
        estimado: '$250-400 MXN al centro',
        nota: 'Sitio oficial en terminal.',
      },
      uber: {
        estimado: '$180-320 MXN al centro',
        nota: 'Disponible. Zona pickup clara.',
      },
      tips: [
        'Tuxtla es capital de Chiapas',
        'Acceso a Cañón del Sumidero (natural)',
        'Puente hacia Palenque y destinos regionales',
        'SIN metro o tren ligero',
        'Museo regional importante',
      ],
    },
    conexiones: [],
    descripcion:
      'Aeropuerto de Tuxtla Gutiérrez. Puerta a Chiapas y Cañón del Sumidero. Capital estatal del sureste.',
    seo_title: 'Aeropuerto Tuxtla Gutiérrez (TGZ) — Cómo llegar al centro',
    meta_description:
      'Tuxtla Gutiérrez TGZ: autobús, taxi, Uber. Cañón Sumidero. Transporte 2026.',
  },
  {
    slug: 'ciudad-del-carmen-cme',
    nombre: 'Aeropuerto Internacional de Ciudad del Carmen',
    intro: 'Aeropuerto petrolero ubicado a 25 km de Ciudad del Carmen, Campeche. Hub para trabajadores de la industria energética y acceso a la Península de Yucatán. Acceso mediante taxi, Uber o autobús local hacia la ciudad isla.',
    pois: [
      { nombre: 'Centro Histórico de Ciudad del Carmen', descripcion: 'Puerto histórico con malecón a 25 min' },
      { nombre: 'Banco de Campeche', descripcion: 'Arrecife de coral para buceo a 15 min en ferry' },
      { nombre: 'Estuary Tour', descripcion: 'Tours de manglares y fauna marina a 30 min' },
      { nombre: 'Campeche Centro', descripcion: 'Ciudad amurallada UNESCO a 60 km al sur' },
    ],
    iata: 'CME',
    ciudad: 'Ciudad del Carmen',
    estado: 'Campeche',
    region: 'sureste',
    lat: 18.6564,
    lng: -91.8132,
    distanciaCentro: '20 km',
    comoLlegar: {
      transporte: [
        {
          tipo: 'Autobús Local',
          detalle: 'Servicios hacia Ciudad del Carmen y destinos regionales.',
          tiempo: '35-45 min al centro',
          precio: '$50-80 MXN',
        },
      ],
      taxi: {
        estimado: '$300-450 MXN al centro',
        nota: 'Sitio oficial en terminal; ciudad petrolera.',
      },
      uber: {
        estimado: '$200-350 MXN al centro',
        nota: 'Disponible pero oferta limitada.',
      },
      tips: [
        'Ciudad del Carmen es hub petrolero importante',
        'Isla Aguada y playas cercanas',
        'SIN metro o tren ligero',
        'Acceso a islas en Laguna de Términos',
        'Puerto comercial importante',
      ],
    },
    conexiones: [],
    descripcion:
      'Aeropuerto de Ciudad del Carmen. Puerta a isla petrolera del Golfo. Hub industrial y comercial de Campeche.',
    seo_title: 'Aeropuerto Ciudad del Carmen (CME) — Cómo llegar al centro',
    meta_description:
      'Ciudad del Carmen CME: autobús, taxi, Uber. Transporte al centro. Guía 2026.',
  },
  {
    slug: 'zacatecas-zcl',
    nombre: 'Aeropuerto Internacional General Leobardo C. Ruiz',
    intro: 'Aeropuerto de Zacatecas ubicado a 27 km de la capital estatal. Conecta la ciudad minera colonial UNESCO con destinos nacionales. Acceso mediante taxi, Uber o autobús local hacia el centro histórico en las montañas.',
    pois: [
      { nombre: 'Centro Histórico de Zacatecas', descripcion: 'Barroco colonial en montaña a 30 min en auto' },
      { nombre: 'Catedral Metropolitana', descripcion: 'Joya arquitectónica del siglo XVI a 30 min' },
      { nombre: 'Mina de Edén', descripcion: 'Mina convertida en discoteca a 25 min' },
      { nombre: 'Fresnillo', descripcion: 'Pueblo minero cercano a 45 min' },
    ],
    iata: 'ZCL',
    ciudad: 'Zacatecas',
    estado: 'Zacatecas',
    region: 'norte',
    lat: 22.8879,
    lng: -102.5879,
    distanciaCentro: '23 km',
    comoLlegar: {
      transporte: [
        {
          tipo: 'Autobús Local',
          detalle: 'Servicios hacia Zacatecas centro y destinos regionales.',
          tiempo: '35-50 min al centro',
          precio: '$40-70 MXN',
        },
      ],
      taxi: {
        estimado: '$250-400 MXN al centro',
        nota: 'Sitio oficial en terminal.',
      },
      uber: {
        estimado: '$180-320 MXN al centro',
        nota: 'Disponible. Oferta limitada.',
      },
      tips: [
        'Zacatecas es ciudad minera colonial hermosa (Patrimonio Unesco)',
        'Centro histórico en montaña',
        'SIN metro o tren ligero',
        'Acceso a pueblos mágicos cercanos (Platería, Jerez)',
        'Teatro histórico importante',
      ],
    },
    conexiones: [],
    descripcion:
      'Aeropuerto regional de Zacatecas. Puerta a ciudad minera colonial patrimonio Unesco. Capital cultural del norte.',
    seo_title: 'Aeropuerto Zacatecas (ZCL) — Cómo llegar al centro histórico',
    meta_description:
      'Zacatecas ZCL: autobús, taxi, Uber. Transporte al centro histórico. Guía 2026.',
  },
];
