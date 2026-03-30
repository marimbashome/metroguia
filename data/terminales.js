// TERMINALES DE AUTOBUSES - MÉXICO
// Datos geográficos y de transporte para MetroGuia.mx
// Última actualización: 2026-03-30

export const terminales = [
  // CIUDAD DE MÉXICO - TAPO
  {
    slug: 'tapo',
    nombre: 'Terminal de Autobuses de Pasajeros de Oriente (TAPO)',
    intro: 'La mayor terminal de autobuses de México para el oriente y sureste. TAPO es el principal hub para viajeros hacia Puebla, Oaxaca, Veracruz, Chiapas y la Península de Yucatán. Ubicada a dos cuadras de la estación San Lázaro del Metro con acceso directo a Líneas 1 y B.',
    pois: [
      { nombre: 'Mercado de Sonora', descripcion: 'Mercado tradicional mexicano a 10 min en Metro' },
      { nombre: 'Centro Histórico de CDMX', descripcion: 'Zócalo y Catedral a 20 min en Metro hacia Pantitlán' },
      { nombre: 'Barrio Bravo', descripcion: 'Zona bohemia con arte callejero a 5 min caminando' },
      { nombre: 'Coyoacán', descripcion: 'Pueblo mágico histórico a 25 min en Metro' },
    ],
    tips: [
      'TAPO es la más segura y moderna; llegue con 30 min de anticipación',
      'Compre boletos de ADO/OCC en ventanillas oficiales, no con intermediarios',
      'Estacionamiento vigilado disponible en dos plantas',
      'Cafeterías y tiendas dentro de la terminal; evite comer afuera',
    ],
    nombreCorto: 'TAPO',
    ciudad: 'Ciudad de México',
    estado: 'Ciudad de México',
    region: 'centro',
    lat: 19.4264,
    lng: -99.1208,
    destinos: [
      'Puebla',
      'Oaxaca',
      'Veracruz',
      'Chiapas',
      'Yucatán',
      'Tabasco',
      'Campeche',
      'Quintana Roo',
    ],
    lineasBus: ['ADO', 'ADO GL', 'ADO Platino', 'AU', 'OCC', 'Cuenca'],
    conexionMetro: {
      slug: 'san-lazaro',
      nombre: 'San Lázaro',
      linea: '1, B',
    },
    comoLlegar: {
      transporte: [
        {
          tipo: 'Metro',
          detalle:
            'Líneas 1 (Observatorio-Pantitlán) y B (Cuatro Caminos-La Paz). Estación San Lázaro. Salida directa a la terminal.',
          tiempo: '2-3 min caminando',
          costo: '$5 MXN',
        },
      ],
      taxi: {
        estimado: '$80-120 MXN desde el Zócalo',
        nota: 'Taxi autorizado disponible en la terminal. Tiempo: 15-20 min en tráfico normal',
      },
      uber: {
        estimado: '$50-100 MXN desde centro histórico',
        nota: 'Zona de pickup claramente señalizada',
      },
    },
    descripcion:
      'La mayor terminal de autobuses para el oriente y sureste de México. Ofrece conexiones directas a Puebla, Oaxaca, Veracruz, Chiapas y la Península de Yucatán. Instalaciones modernas con tiendas, restaurantes y servicios.',
    seo_title:
      'TAPO — Terminal de Autobuses de Oriente CDMX | Cómo llegar en Metro',
    meta_description:
      'Guía completa para llegar a TAPO en Metro (San Lázaro, Líneas 1 y B). Destinos: Puebla, Oaxaca, Veracruz, Chiapas, Yucatán. Líneas ADO, OCC y más.',
  },

  // CIUDAD DE MÉXICO - CENTRAL DEL NORTE
  {
    slug: 'central-del-norte',
    nombre: 'Terminal Central de Autobuses del Norte',
    intro: 'Terminal principal para viajes al norte de México conectando con Monterrey, Guadalajara, Querétaro y el Bajío. Ubicada directamente bajo la estación Autobuses del Norte de Metro Línea 5. Ofrece servicios premium de Primera Plus, ETN y Omnibus de México hacia destinos clave del país.',
    pois: [
      { nombre: 'Buenavista', descripcion: 'Zona cultural con museos y galerías a 5 min en Metro' },
      { nombre: 'Centro Histórico', descripcion: 'Zócalo a 15 min en Metro hacia Pantitlán' },
      { nombre: 'Reforma', descripcion: 'Avenida comercial a 10 min en Metro hacia el sur' },
      { nombre: 'Zona Rosa', descripcion: 'Barrio residencial con tiendas a 12 min en Metro' },
    ],
    tips: [
      'Compre boletos con anticipación en línea para mejor precio',
      'Primera Plus y ETN ofrecen autobuses con WiFi y películas',
      'Estacionamiento de automóviles en el sótano',
      'Abra de 5:30 am a 11 pm; viajes nocturnos desde las 9 pm',
    ],
    nombreCorto: 'Central del Norte',
    ciudad: 'Ciudad de México',
    estado: 'Ciudad de México',
    region: 'norte',
    lat: 25.5245,
    lng: -100.9981,
    destinos: [
      'Querétaro',
      'San Luis Potosí',
      'Monterrey',
      'Guadalajara',
      'Aguascalientes',
      'Zacatecas',
      'Chihuahua',
      'Durango',
      'Saltillo',
    ],
    lineasBus: [
      'Primera Plus',
      'ETN',
      'Futura',
      'Omnibus de México',
      'Transportes y Servicios del Valle',
      'Autobuses del Centro del Bajío',
    ],
    conexionMetro: {
      slug: 'autobuses-del-norte',
      nombre: 'Autobuses del Norte',
      linea: '5',
    },
    comoLlegar: {
      transporte: [
        {
          tipo: 'Metro',
          detalle:
            'Línea 5 (Pantitlán-La Paz). Estación Autobuses del Norte. Salida directa a la terminal.',
          tiempo: '1-2 min caminando',
          costo: '$5 MXN',
        },
      ],
      taxi: {
        estimado: '$120-180 MXN desde Reforma',
        nota: 'Estacionamiento de taxis formales en la terminal',
      },
      uber: {
        estimado: '$70-120 MXN desde Reforma',
      },
    },
    descripcion:
      'Terminal principal para viajes al norte de México. Conecta con ciudades importantes como Monterrey, Guadalajara y el Bajío. Amplia oferta de líneas de autobuses premium y de primera clase.',
    seo_title:
      'Central del Norte CDMX — Terminal de Autobuses Línea 5 Metro | Cómo llegar',
    meta_description:
      'Central de Autobuses del Norte en CDMX: Línea 5 Metro (Autobuses del Norte). Destinos: Monterrey, Guadalajara, Querétaro, SLP. Líneas Primera Plus, ETN.',
  },

  // CIUDAD DE MÉXICO - TERMINAL PONIENTE
  {
    slug: 'terminal-poniente',
    nombre: 'Terminal de Autobuses Poniente',
    intro: 'Terminal especializada en rutas hacia el occidente de México conectando Toluca, Morelia y pueblos mágicos del Estado de México. Ubicada directamente en la estación Observatorio de Metro Línea 1. Principal acceso para viajeros a Valle de Bravo y Malinalco.',
    pois: [
      { nombre: 'Observatorio', descripcion: 'Parque científico a 3 min caminando' },
      { nombre: 'Bosque de Chapultepec', descripcion: 'Parque principal de CDMX a 10 min en Metro' },
      { nombre: 'Polanco', descripcion: 'Zona de lujo con tiendas a 10 min en Metro' },
      { nombre: 'Coyoacán', descripcion: 'Pueblo mágico histórico a 25 min en Metro' },
    ],
    tips: [
      'Flecha Roja ofrece servicio de lujo a Toluca y Morelia',
      'Mejor opción para viajes a pueblos mágicos del occidente',
      'Servicio de autobús turístico directo a resorts de montaña',
      'Terminal pequeña, llegue con 20 min de anticipación',
    ],
    nombreCorto: 'Terminal Poniente',
    ciudad: 'Ciudad de México',
    estado: 'Ciudad de México',
    region: 'poniente',
    lat: 19.3948,
    lng: -99.1947,
    destinos: [
      'Toluca',
      'Morelia',
      'Valle de Bravo',
      'Malinalco',
      'Tenancingo',
      'Irapuato',
    ],
    lineasBus: [
      'Flecha Roja',
      'TMT (Transportes Magisteriales de Toluca)',
      'Caminante',
      'Autobuses Urbanos de Toluca',
      'Estrella Blanca',
    ],
    conexionMetro: {
      slug: 'observatorio',
      nombre: 'Observatorio',
      linea: '1',
    },
    comoLlegar: {
      transporte: [
        {
          tipo: 'Metro',
          detalle:
            'Línea 1 (Observatorio-Pantitlán). Estación Observatorio. Salida directa a la terminal.',
          tiempo: '2-3 min caminando',
          costo: '$5 MXN',
        },
      ],
      taxi: {
        estimado: '$100-150 MXN desde Reforma',
        nota: 'Zona de taxis bien organizada',
      },
      uber: {
        estimado: '$60-100 MXN desde el centro',
      },
    },
    descripcion:
      'Terminal especializada en rutas hacia el occidente de México. Principal conexión a Toluca, Morelia y destinos del Estado de México. Ideal para excursiones a Valle de Bravo y pueblos mágicos cercanos.',
    seo_title:
      'Terminal Poniente CDMX — Metro Observatorio Línea 1 | Toluca, Morelia',
    meta_description:
      'Terminal Poniente en CDMX: Línea 1 Metro (Observatorio). Destinos: Toluca, Morelia, Valle de Bravo. Líneas Flecha Roja, TMT, Caminante.',
  },

  // CIUDAD DE MÉXICO - TERMINAL DEL SUR
  {
    slug: 'terminal-del-sur',
    nombre: 'Terminal de Autobuses del Sur (Taxqueña)',
    intro: 'Terminal para destinos al sur de México especialmente hacia Guerrero. Ubicada en la estación Taxqueña de Metro Línea 2. Principal conexión directa a Cuernavaca, Taxco (Pueblo Mágico), Acapulco y Chilpancingo. Servicio de líneas de calidad premiada como Pullman de Morelos.',
    pois: [
      { nombre: 'Coyoacán', descripcion: 'Barrio bohemio de CDMX a 15 min en Metro' },
      { nombre: 'Museo de Frida Kahlo', descripcion: 'Casa azul y museos de arte a 15 min en Metro' },
      { nombre: 'Xochimilco', descripcion: 'Trajineras y chinampas a 10 min en Metro' },
      { nombre: 'Espacio Escultórico', descripcion: 'Museo al aire libre en universidad a 15 min' },
    ],
    tips: [
      'Pullman de Morelos es la línea más cómoda hacia Acapulco y Cuernavaca',
      'Compre con anticipación para evitar sobreventa en vacaciones',
      'Terminal climatizada y con tiendas de comida rápida',
      'Conexión directa a Xochimilco para viajes combinados',
    ],
    nombreCorto: 'Terminal del Sur',
    ciudad: 'Ciudad de México',
    estado: 'Ciudad de México',
    region: 'sur',
    lat: 19.335,
    lng: -99.145,
    destinos: [
      'Cuernavaca',
      'Taxco',
      'Acapulco',
      'Guerrero',
      'Chilpancingo',
      'Iguala',
    ],
    lineasBus: [
      'Pullman de Morelos',
      'Estrella de Oro',
      'Costa Line',
      'Autobuses Unidos',
      'Transportes del Sur de México',
    ],
    conexionMetro: {
      slug: 'taxquena',
      nombre: 'Taxqueña',
      linea: '2',
    },
    comoLlegar: {
      transporte: [
        {
          tipo: 'Metro',
          detalle:
            'Línea 2 (Cuatro Caminos-La Paz). Estación Taxqueña. Salida directa a la terminal.',
          tiempo: '2-3 min caminando',
          costo: '$5 MXN',
        },
      ],
      taxi: {
        estimado: '$100-140 MXN desde el Zócalo',
        nota: 'Transporte formalizado disponible',
      },
      uber: {
        estimado: '$50-90 MXN desde el Zócalo',
      },
    },
    descripcion:
      'Terminal para destinos al sur de México, principalmente Guerrero. Conexiones directas a Cuernavaca, Taxco (Pueblo Mágico), Acapulco y Chilpancingo. Líneas de calidad premiada.',
    seo_title:
      'Terminal del Sur (Taxqueña) CDMX — Metro Línea 2 | Acapulco, Cuernavaca',
    meta_description:
      'Terminal del Sur en CDMX: Estación Metro Taxqueña (Línea 2). Destinos: Acapulco, Cuernavaca, Taxco. Líneas Pullman de Morelos, Estrella de Oro.',
  },

  // GUADALAJARA - NUEVA CENTRAL CAMIONERA
  {
    slug: 'nueva-central-gdl',
    nombre: 'Nueva Central Camionera de Guadalajara',
    intro: 'Terminal más importante de Guadalajara ubicada al sur de la ciudad. Principal punto de salida hacia CDMX, Puerto Vallarta y estados vecinos. Moderna terminal integrada con estacionamiento, comercios y servicios. Ubicada a 5 km del centro con conexión vía Tren Ligero o autobús urbano.',
    pois: [
      { nombre: 'Centro Histórico de Guadalajara', descripcion: 'Plazas y templos coloniales a 15 min en Tren Ligero' },
      { nombre: 'Tlaquepaque', descripcion: 'Pueblo artesanal con cerámica a 20 min en autobús' },
      { nombre: 'Tonalá', descripcion: 'Mercado de artesanías a 25 min' },
      { nombre: 'Tequila', descripcion: 'Pueblo mágico y destilerías a 50 min' },
    ],
    tips: [
      'Reserve boletos en línea; compre en terminales de ETN o Primera Plus',
      'Terminal amplia con múltiples secciones; llegar con 30 min',
      'Transporte urbano MAX rojo conecta al centro eficientemente',
      'Servicios de viaje Primera Plus con WiFi y enchufes',
    ],
    nombreCorto: 'Nueva Central Camionera GDL',
    ciudad: 'Guadalajara',
    estado: 'Jalisco',
    region: 'occidente',
    lat: 20.5165,
    lng: -103.3038,
    destinos: [
      'Ciudad de México',
      'Puerto Vallarta',
      'Colima',
      'Aguascalientes',
      'Tepic',
      'Lagos de Moreno',
      'San Juan de los Lagos',
    ],
    lineasBus: [
      'ETN',
      'Primera Plus',
      'TAP (Transportes Autobús Plus)',
      'Omnibus de México',
      'Allianza',
    ],
    conexionMetro: null,
    comoLlegar: {
      transporte: [
        {
          tipo: 'Tren Ligero',
          detalle:
            'Tren Ligero Guadalajara (SRG) no tiene estación directa. A 5 km al sur del centro.',
          tiempo: '5-10 min en taxi/uber',
        },
        {
          tipo: 'Autobús Urbano',
          detalle:
            'Sistema de transporte urbano (TUR). Múltiples rutas conectan la terminal con el centro.',
          tiempo: '15-25 min desde el centro',
          costo: '$9 MXN',
        },
      ],
      taxi: {
        estimado: '$80-120 MXN desde el centro histórico',
      },
      uber: {
        estimado: '$60-100 MXN desde el centro',
      },
    },
    descripcion:
      'Terminal más importante de Guadalajara, ubicada al sur de la ciudad. Principal punto de salida hacia CDMX, Puerto Vallarta y otras ciudades de Jalisco y estados vecinos. Estaciones de autobús de diferentes líneas distribuidas en la zona.',
    seo_title:
      'Nueva Central Camionera Guadalajara — Cómo llegar desde el centro',
    meta_description:
      'Nueva Central Camionera GDL: Autobús urbano desde el centro. Destinos: CDMX, Puerto Vallarta, Colima. Líneas ETN, Primera Plus, TAP.',
  },

  // GUADALAJARA - ANTIGUA CENTRAL CAMIONERA
  {
    slug: 'antigua-central-gdl',
    nombre: 'Antigua Central Camionera de Guadalajara',
    intro: 'Terminal para rutas regionales dentro de Jalisco y zonas cercanas. Especializada en destinos cercanos como Chapala, Jocotepec y pueblos del área metropolitana de Guadalajara. Ubicada en el norte de la ciudad con acceso vía transporte urbano y Tren Ligero.',
    pois: [
      { nombre: 'Chapala', descripcion: 'Pueblo mágico lacustre a 45 min en autobús' },
      { nombre: 'Jocotepec', descripcion: 'Pueblo artesanal al lado de Chapala a 50 min' },
      { nombre: 'Ajijic', descripcion: 'Pueblo bohemio al borde del lago a 50 min' },
      { nombre: 'Mezcala', descripcion: 'Isla histórica en el lago a 60 min' },
    ],
    tips: [
      'Terminal pequeña pero acogedora; ideal para viajes cortos',
      'Autobuses locales hacia Chapala salen frecuentemente',
      'Mejor opción para explorar pueblos lacustres de Jalisco',
      'Conecta con Tren Ligero para ir al centro',
    ],
    nombreCorto: 'Antigua Central Camionera GDL',
    ciudad: 'Guadalajara',
    estado: 'Jalisco',
    region: 'occidente',
    lat: 20.6635,
    lng: -103.3528,
    destinos: [
      'Sayaltepeque',
      'Tonalá',
      'Chapala',
      'Jocotepec',
      'Tlajomulco',
      'Rutas regionales Jalisco',
    ],
    lineasBus: [
      'Autotransportes Chapala',
      'Transportes Sayaltepeque',
      'Líneas regionales',
    ],
    conexionMetro: null,
    comoLlegar: {
      transporte: [
        {
          tipo: 'Tren Ligero',
          detalle:
            'A aproximadamente 4 km del Tren Ligero central. Acceso vía autobús urbano.',
          tiempo: '10-15 min',
        },
        {
          tipo: 'Autobús Urbano',
          detalle: 'Múltiples rutas de autobús urbano desde el centro',
          tiempo: '15-20 min desde el centro',
          costo: '$9 MXN',
        },
      ],
      taxi: {
        estimado: '$70-100 MXN desde el centro',
      },
      uber: {
        estimado: '$50-80 MXN desde el centro',
      },
    },
    descripcion:
      'Terminal para rutas regionales dentro de Jalisco y estados cercanos. Enfocada en destinos cercanos como Chapala, Jocotepec y pueblos del área metropolitana de Guadalajara.',
    seo_title:
      'Antigua Central Camionera Guadalajara — Rutas Regionales Jalisco',
    meta_description:
      'Antigua Central Camionera GDL: Destinos regionales Jalisco. Chapala, Jocotepec, Tonalá. Autobús urbano desde el centro.',
  },

  // MONTERREY - CENTRAL DE AUTOBUSES
  {
    slug: 'central-monterrey',
    nombre: 'Central de Autobuses de Monterrey',
    intro: 'Terminal principal de Monterrey, hub importante para viajes hacia el norte de México, Estados Unidos y otros estados. Ubicada en el centro de la ciudad con estación más cercana de Metrorrey a 1.5 km. Ofrece conexiones de primera categoría con líneas premium Primera Plus y ETN.',
    pois: [
      { nombre: 'Barrio Antiguo', descripcion: 'Centro histórico de Monterrey a 10 min en Metrorrey' },
      { nombre: 'Paseo Santa Lucia', descripcion: 'Paseo acuático artificial al corazón de Monterrey' },
      { nombre: 'MARCO', descripcion: 'Museo de arte contemporáneo a 10 min' },
      { nombre: 'Macroplaza', descripcion: 'Plaza más grande del mundo a 5 min caminando' },
    ],
    tips: [
      'Tranferobus rojo conecta desde Barrio Antiguo directamente',
      'Servicio de seguridad 24/7; zona vigilada',
      'Primera Plus ofrece wifi y enchufes en todos los autobuses',
      'Compre boletos con ID; hay control de identidad',
    ],
    nombreCorto: 'Central Monterrey',
    ciudad: 'Monterrey',
    estado: 'Nuevo León',
    region: 'norte',
    lat: 25.3722,
    lng: -100.3158,
    destinos: [
      'Ciudad de México',
      'Saltillo',
      'Laredo',
      'Reynosa',
      'Tampico',
      'San Luis Potosí',
      'Guadalajara',
      'Torreón',
    ],
    lineasBus: [
      'Transportes del Norte',
      'Intercam',
      'Transportes Sada',
      'Autobuses Coordinados',
      'Primera Plus',
      'ETN',
    ],
    conexionMetro: null,
    comoLlegar: {
      transporte: [
        {
          tipo: 'Metrorrey',
          detalle:
            'Línea 1 (Crispín Castillo-San Bernabé). Sin estación directa en la terminal. Estación más cercana: Barrio Antiguo a 1.5 km.',
          tiempo: '5-10 min en taxi/uber desde Barrio Antiguo',
        },
        {
          tipo: 'Autobús Urbano',
          detalle:
            'Sistema de transporte urbano (Servicios de Transportes Urbanos de Monterrey). Múltiples rutas hacia la terminal.',
          tiempo: '10-20 min desde el centro',
          costo: '$10-15 MXN',
        },
      ],
      taxi: {
        estimado: '$80-150 MXN desde Barrio Antiguo',
      },
      uber: {
        estimado: '$60-120 MXN desde Barrio Antiguo',
      },
    },
    descripcion:
      'Terminal principal de Monterrey, hub importante para viajes hacia el norte de México, Estados Unidos y otros estados. Conexiones de primera categoría con líneas premium.',
    seo_title:
      'Central de Autobuses de Monterrey — Cómo llegar desde el centro',
    meta_description:
      'Central de Autobuses Monterrey: Autobús urbano desde el centro. CDMX, Saltillo, Laredo, Tampico. Líneas Primera Plus, ETN.',
  },

  // PUEBLA - CAPU
  {
    slug: 'capu-puebla',
    nombre: 'Central de Autobuses Puebla (CAPU)',
    intro: 'Central de Autobuses de Puebla, punto de conexión a CDMX, Oaxaca y Veracruz. Ubicada a 10 km del Zócalo histórico de Puebla, Patrimonio de la Humanidad. Acceso fácil mediante autobús urbano, taxi o Uber desde el centro histórico.',
    pois: [
      { nombre: 'Zócalo de Puebla', descripcion: 'Plaza principal con catedral barroca a 15 min' },
      { nombre: 'Biblioteca Palafoxiana', descripcion: 'Biblioteca histórica del siglo XVII a 15 min' },
      { nombre: 'Iglesia de Santo Domingo', descripcion: 'Iglesia más suntuosa de Puebla a 12 min' },
      { nombre: 'Africano (Tienda de Artesanías)', descripcion: 'Tienda tradicional de cerámica a 10 min' },
    ],
    tips: [
      'ADO es la línea dominante; compre en mostrador oficial',
      'Terminal grande y moderna; llegar con 25 min',
      'Viajes a CDMX duran 2 horas y salen cada 10 min',
      'Zona segura con vigilancia 24/7',
    ],
    nombreCorto: 'CAPU Puebla',
    ciudad: 'Puebla',
    estado: 'Puebla',
    region: 'oriente',
    lat: 19.0414,
    lng: -98.2434,
    destinos: [
      'Ciudad de México',
      'Oaxaca',
      'Veracruz',
      'Tlaxcala',
      'Huamantla',
      'Córdoba',
    ],
    lineasBus: [
      'ADO',
      'ADO GL',
      'AU',
      'OCC',
      'Autobuses Urbanos de Puebla',
      'Flecha Amarilla',
    ],
    conexionMetro: null,
    comoLlegar: {
      transporte: [
        {
          tipo: 'Autobús Urbano',
          detalle:
            'Sistema de transporte urbano de Puebla. Múltiples rutas desde el centro histórico.',
          tiempo: '15-20 min desde el Zócalo',
          costo: '$7-9 MXN',
        },
      ],
      taxi: {
        estimado: '$60-90 MXN desde el Zócalo',
      },
      uber: {
        estimado: '$40-70 MXN desde el Zócalo',
      },
    },
    descripcion:
      'Central de Autobuses de Puebla, punto de conexión a CDMX, Oaxaca y Veracruz. Acceso fácil a la ciudad de Puebla, Patrimonio de la Humanidad.',
    seo_title:
      'CAPU Puebla — Central de Autobuses | Cómo llegar desde el Zócalo',
    meta_description:
      'CAPU (Central de Autobuses Puebla): Destinos CDMX, Oaxaca, Veracruz. Líneas ADO, OCC. Autobús urbano desde el centro.',
  },

  // QUERÉTARO - CENTRAL DE AUTOBUSES
  {
    slug: 'central-queretaro',
    nombre: 'Central de Autobuses de Querétaro',
    intro: 'Central de Autobuses de Querétaro, hub del Bajío. Conexiones directas a CDMX, Guadalajara y ciudades del Bajío. Punto de partida para explorar el Patrimonio de la Humanidad de Querétaro, Tequisquiapan y la región vinícola.',
    pois: [
      { nombre: 'Centro Histórico de Querétaro', descripcion: 'Zona UNESCO con plazas coloniales a 20 min' },
      { nombre: 'Acueducto de Querétaro', descripcion: 'Obra arquitectónica del siglo XVIII visible' },
      { nombre: 'Tequisquiapan', descripcion: 'Pueblo mágico con viñedos a 45 min' },
      { nombre: 'San Juan del Río', descripcion: 'Centro de joyería de gemas a 35 min' },
    ],
    tips: [
      'Primera Plus ofrece viajes cómodos a CDMX en 2.5 horas',
      'Terminal bien ubicada en el acceso sur a la ciudad',
      'Compre boletos con anticipación en línea para descuentos',
      'Buen servicio de tiendas y restaurantes dentro',
    ],
    nombreCorto: 'Central Querétaro',
    ciudad: 'Querétaro',
    estado: 'Querétaro',
    region: 'bajio',
    lat: 20.5764,
    lng: -100.4029,
    destinos: [
      'Ciudad de México',
      'Guadalajara',
      'San Luis Potosí',
      'Aguascalientes',
      'León',
      'Irapuato',
    ],
    lineasBus: [
      'Primera Plus',
      'ETN',
      'Omnibus de México',
      'Transportes Magisteriales',
    ],
    conexionMetro: null,
    comoLlegar: {
      transporte: [
        {
          tipo: 'Autobús Urbano',
          detalle:
            'Sistema de transporte urbano local. Múltiples líneas hacia la terminal.',
          tiempo: '10-15 min desde el centro',
          costo: '$8-10 MXN',
        },
      ],
      taxi: {
        estimado: '$50-80 MXN desde el centro histórico',
      },
      uber: {
        estimado: '$40-70 MXN desde el centro',
      },
    },
    descripcion:
      'Central de Autobuses de Querétaro, hub del Bajío. Conexiones directas a CDMX, Guadalajara y ciudades del bajío. Punto de partida para explorar el Patrimonio de la Humanidad de Querétaro.',
    seo_title:
      'Central de Autobuses Querétaro — Cómo llegar desde el centro | CDMX, GDL',
    meta_description:
      'Central Querétaro: Destinos CDMX, Guadalajara, SLP. Primera Plus, ETN. Autobús urbano desde el centro histórico.',
  },

  // MÉRIDA - CAME
  {
    slug: 'came-merida',
    nombre: 'Central de Autobuses de Mérida (CAME)',
    intro: 'Terminal ADO (CAME) de Mérida, punto de partida hacia Cancún, Playa del Carmen y la Riviera Maya. Centro de conexiones para toda la Península de Yucatán. Ubicada a 2 km del centro histórico con servicio de autobús local, taxi o Uber de bajo costo.',
    pois: [
      { nombre: 'Centro Histórico de Mérida', descripcion: 'Zócalo y palacios coloniales a 10 min en taxi' },
      { nombre: 'Catedral de Mérida', descripcion: 'Catedral barroca del siglo XVI a 10 min' },
      { nombre: 'Chichén Itzá', descripcion: 'Zona arqueológica maya a 120 min en autobús' },
      { nombre: 'Uxmal', descripcion: 'Sitio arqueológico Puuc a 80 min al sur' },
    ],
    tips: [
      'ADO es la línea oficial; compre en mostrador, no con revendedores',
      'Viajes frecuentes a Cancún (3.5 horas) y Playa del Carmen (2.5 horas)',
      'Terminal pequeña pero ordenada y segura',
      'Llegue 20 minutos antes para viajes locales',
    ],
    nombreCorto: 'CAME Mérida',
    ciudad: 'Mérida',
    estado: 'Yucatán',
    region: 'sureste',
    lat: 20.9673,
    lng: -89.6237,
    destinos: [
      'Cancún',
      'Playa del Carmen',
      'Campeche',
      'Valladolid',
      'Tulum',
      'Cozumel (vía Playa del Carmen)',
    ],
    lineasBus: [
      'ADO',
      'ADO GL',
      'ADO Platino',
      'OCC',
      'Mayab',
      'Transportes Peninsulares',
    ],
    conexionMetro: null,
    comoLlegar: {
      transporte: [
        {
          tipo: 'Autobús Urbano',
          detalle:
            'Sistema de transporte urbano de Mérida. A 2 km del centro histórico.',
          tiempo: '10-15 min desde el centro',
          costo: '$8-10 MXN',
        },
      ],
      taxi: {
        estimado: '$40-60 MXN desde el centro',
      },
      uber: {
        estimado: '$30-50 MXN desde el centro',
      },
    },
    descripcion:
      'Terminal ADO (CAME) de Mérida, punto de partida hacia Cancún, Playa del Carmen y la Riviera Maya. Centro de conexiones para toda la Península de Yucatán.',
    seo_title:
      'CAME Mérida — Central de Autobuses | Cancún, Playa del Carmen, Cozumel',
    meta_description:
      'CAME Mérida: Terminal ADO. Destinos: Cancún, Playa del Carmen, Campeche, Tulum. Líneas ADO, ADO GL, Mayab.',
  },

  // OAXACA - CENTRAL DE AUTOBUSES
  {
    slug: 'central-oaxaca',
    nombre: 'Central de Autobuses de Oaxaca',
    intro: 'Central de Autobuses de Oaxaca, punto de salida hacia Puerto Escondido, Huatulco y la costa oaxaqueña. También conecta con CDMX y Chiapas. Ubicada a 2 km del zócalo histórico de Oaxaca, centro cultural e histórico de México con gastronomía prehispánica.',
    pois: [
      { nombre: 'Zócalo de Oaxaca', descripcion: 'Plaza principal con templo y tiendas a 10 min' },
      { nombre: 'Templo de Santo Domingo', descripcion: 'Iglesia barroca del siglo XVI a 8 min' },
      { nombre: 'Puerto Escondido', descripcion: 'Playa de surf de clase mundial a 90 min' },
      { nombre: 'Huatulco', descripcion: 'Bahías vírgenes de resort de lujo a 120 min' },
    ],
    tips: [
      'ADO y OCC son las líneas principales; compre en ventanillas oficiales',
      'Puerto Escondido es muy popular; reserve con 2-3 días antes',
      'Terminal organizada con servicios de comida y tiendas',
      'Viajes a CDMX duran 6 horas; salidas cada 2 horas',
    ],
    nombreCorto: 'Central Oaxaca',
    ciudad: 'Oaxaca',
    estado: 'Oaxaca',
    region: 'sureste',
    lat: 17.0627,
    lng: -96.7205,
    destinos: [
      'Ciudad de México',
      'Puerto Escondido',
      'Huatulco',
      'Chiapas',
      'Puebla',
      'Istmo de Tehuantepec',
    ],
    lineasBus: [
      'ADO',
      'ADO GL',
      'OCC',
      'Transportes del Sur',
      'Cuenca',
      'Líneas regionales',
    ],
    conexionMetro: null,
    comoLlegar: {
      transporte: [
        {
          tipo: 'Autobús Urbano',
          detalle:
            'Sistema de transporte urbano. A 2 km del zócalo histórico.',
          tiempo: '10-15 min desde el centro',
          costo: '$7-8 MXN',
        },
      ],
      taxi: {
        estimado: '$40-70 MXN desde el zócalo',
      },
      uber: {
        estimado: '$30-60 MXN desde el zócalo',
      },
    },
    descripcion:
      'Central de Autobuses de Oaxaca, punto de salida hacia Puerto Escondido, Huatulco y la costa oaxaqueña. También conecta con CDMX y Chiapas. Centro cultural e histórico de México.',
    seo_title:
      'Central de Autobuses Oaxaca — Cómo llegar | Puerto Escondido, Huatulco',
    meta_description:
      'Central Oaxaca: Destinos Puerto Escondido, Huatulco, CDMX. ADO, OCC. Autobús urbano desde el zócalo.',
  },

  // CANCÚN - CENTRAL DE AUTOBUSES
  {
    slug: 'central-cancun',
    nombre: 'Central de Autobuses de Cancún',
    intro: 'Central de Autobuses de Cancún, hub para la Riviera Maya. Conexiones a Playa del Carmen, Tulum, Mérida y toda la Península de Yucatán. Punto de acceso a los cenotes y playas de Quintana Roo desde la Zona Hotelera o centro de Cancún.',
    pois: [
      { nombre: 'Zona Hotelera de Cancún', descripcion: 'Resorts de lujo a 10 min en autobús' },
      { nombre: 'Centro de Cancún', descripcion: 'Parque Las Palapas con tiendas y comida a 8 min' },
      { nombre: 'Playa del Carmen', descripcion: 'Resort de playa famoso a 45 min en autobús' },
      { nombre: 'Tulum', descripcion: 'Ruinas mayas frente al mar a 90 min' },
    ],
    tips: [
      'ADO es la línea de clase turística; compre en mostrador oficial',
      'Viajes frecuentes a Playa del Carmen (1 hora cada 30 min)',
      'Terminal en el centro; autobús R1 y R2 conectan a Zona Hotelera',
      'Compre boletos con anticipación si viaja en vacaciones',
    ],
    nombreCorto: 'Central Cancún',
    ciudad: 'Cancún',
    estado: 'Quintana Roo',
    region: 'sureste',
    lat: 21.1575,
    lng: -87.2869,
    destinos: [
      'Mérida',
      'Playa del Carmen',
      'Tulum',
      'Valladolid',
      'Cozumel (vía Playa)',
      'Puerto Morelos',
    ],
    lineasBus: [
      'ADO',
      'ADO GL',
      'OCC',
      'Mayab',
      'Critter',
      'Viajes Transportes',
    ],
    conexionMetro: null,
    comoLlegar: {
      transporte: [
        {
          tipo: 'Autobús Urbano',
          detalle:
            'Sistema de transporte urbano de Cancún. Ubicada en el centro de la ciudad.',
          tiempo: '10-20 min desde la Zona Hotelera',
          costo: '$9-12 MXN',
        },
      ],
      taxi: {
        estimado: '$50-100 MXN desde la Zona Hotelera',
      },
      uber: {
        estimado: '$40-80 MXN desde la Zona Hotelera',
      },
    },
    descripcion:
      'Central de Autobuses de Cancún, hub para la Riviera Maya. Conexiones a Playa del Carmen, Tulum, Mérida y toda la Península de Yucatán. Punto de acceso a los cenotes y playas de Quintana Roo.',
    seo_title:
      'Central de Autobuses Cancún — Playa del Carmen, Tulum, Mérida | Riviera Maya',
    meta_description:
      'Central Cancún: Riviera Maya. Playa del Carmen, Tulum, Mérida, Cozumel. ADO, OCC, Mayab.',
  },

  // TUXTLA GUTIÉRREZ - CENTRAL DE AUTOBUSES
  {
    slug: 'central-tuxtla',
    nombre: 'Central de Autobuses de Tuxtla Gutiérrez',
    intro: 'Central de Autobuses de Tuxtla Gutiérrez, puerta de entrada a Chiapas. Conexión principal a San Cristóbal de las Casas, Comitán y la Ruta Maya. Centro histórico y cultural de Chiapas con acceso a los cañones del Sumidero, ruinas mayas y pueblos indígenas.',
    pois: [
      { nombre: 'Cañón del Sumidero', descripcion: 'Cañón espectacular con tours en lancha a 30 min' },
      { nombre: 'San Cristóbal de las Casas', descripcion: 'Pueblo mágico colonial a 60 min en autobús' },
      { nombre: 'Palenque', descripcion: 'Ruinas mayas clásicas en la selva a 180 km' },
      { nombre: 'Agua Azul', descripcion: 'Cascadas turquesas naturales a 110 km' },
    ],
    tips: [
      'ADO es la línea principal; reserve con anticipación',
      'Viajes a San Cristóbal duran 2 horas; salen cada 30 min',
      'Terminal moderna con servicios de comida y baños limpios',
      'Mejor salir de madrugada para llegar en el día a destinos lejanos',
    ],
    nombreCorto: 'Central Tuxtla',
    ciudad: 'Tuxtla Gutiérrez',
    estado: 'Chiapas',
    region: 'sureste',
    lat: 16.7588,
    lng: -93.1131,
    destinos: [
      'San Cristóbal de las Casas',
      'Ciudad de México',
      'Oaxaca',
      'Comitán',
      'Villahermosa',
      'Palenque',
    ],
    lineasBus: [
      'ADO',
      'ADO GL',
      'OCC',
      'Transportes del Sur',
      'Cruzazul',
      'Líneas regionales',
    ],
    conexionMetro: null,
    comoLlegar: {
      transporte: [
        {
          tipo: 'Autobús Urbano',
          detalle:
            'Sistema de transporte urbano local. Ubicada en el centro de la ciudad.',
          tiempo: '10-15 min desde el centro',
          costo: '$8-10 MXN',
        },
      ],
      taxi: {
        estimado: '$50-80 MXN desde el centro',
      },
      uber: {
        estimado: '$40-70 MXN desde el centro',
      },
    },
    descripcion:
      'Central de Autobuses de Tuxtla Gutiérrez, puerta de entrada a Chiapas. Conexión principal a San Cristóbal de las Casas, Comitán y la Ruta Maya. Centro histórico y cultural de Chiapas.',
    seo_title:
      'Central Tuxtla Gutiérrez — San Cristóbal, Comitán, Chiapas | Ruta Maya',
    meta_description:
      'Central Tuxtla: Destinos San Cristóbal, Comitán, CDMX, Oaxaca. ADO, OCC. Chiapas.',
  },

  // LEÓN - TERMINAL DE AUTOBUSES
  {
    slug: 'terminal-leon',
    nombre: 'Terminal de Autobuses de León',
    intro: 'Terminal de Autobuses de León, hub del Bajío. Conexiones a CDMX, Guadalajara y ciudades del Bajío. Punto de partida para explorar Guanajuato y la región de la industria de calzado de México. Ubicada a 3 km del centro histórico de León.',
    pois: [
      { nombre: 'Centro Histórico de León', descripcion: 'Plaza principal con tiendas de zapatos a 15 min' },
      { nombre: 'Guanajuato Centro', descripcion: 'Ciudad minera colonial UNESCO a 45 min' },
      { nombre: 'San Miguel de Allende', descripcion: 'Pueblo artístico UNESCO a 90 min' },
      { nombre: 'Dolores Hidalgo', descripcion: 'Pueblo cuna de la independencia a 60 min' },
    ],
    tips: [
      'Primera Plus ofrece servicio de lujo a CDMX (4.5 horas)',
      'Terminal en el acceso sur; fácil acceso desde la carretera',
      'Compre boletos en línea para mejores precios',
      'Viajes a Guanajuato salen cada 30 min (1 hora)',
    ],
    nombreCorto: 'Terminal León',
    ciudad: 'León',
    estado: 'Guanajuato',
    region: 'bajio',
    lat: 20.9533,
    lng: -101.6576,
    destinos: [
      'Ciudad de México',
      'Guadalajara',
      'Aguascalientes',
      'Irapuato',
      'Guanajuato',
      'Querétaro',
    ],
    lineasBus: [
      'Primera Plus',
      'ETN',
      'Omnibus de México',
      'Flecha Amarilla',
      'Autobuses del Centro del Bajío',
    ],
    conexionMetro: null,
    comoLlegar: {
      transporte: [
        {
          tipo: 'Autobús Urbano',
          detalle:
            'Sistema de transporte urbano de León. Ubicada a 3 km del centro histórico.',
          tiempo: '15-20 min desde el centro',
          costo: '$8-10 MXN',
        },
      ],
      taxi: {
        estimado: '$60-100 MXN desde el centro',
      },
      uber: {
        estimado: '$50-80 MXN desde el centro',
      },
    },
    descripcion:
      'Terminal de Autobuses de León, hub del Bajío. Conexiones a CDMX, Guadalajara y ciudades del Bajío. Punto de partida para explorar Guanajuato y la región.',
    seo_title:
      'Terminal de Autobuses León — CDMX, Guadalajara, Bajío | Guanajuato',
    meta_description:
      'Terminal León GTO: Destinos CDMX, GDL, Aguascalientes. Primera Plus, ETN. Centro histórico del Bajío.',
  },

  // TIJUANA - CENTRAL DE AUTOBUSES
  {
    slug: 'central-tijuana',
    nombre: 'Central de Autobuses de Tijuana',
    intro: 'Central de Autobuses de Tijuana, puerta de entrada a Baja California. Conexiones nacionales e internacionales hacia el sur de California. Punto de partida para explorar Ensenada y la costa de Baja California. Ubicada en el centro de Tijuana cerca del centro comercial.',
    pois: [
      { nombre: 'Avenida Revolución', descripcion: 'Centro comercial y gastronómico de Tijuana a 8 min' },
      { nombre: 'Plaza Río', descripcion: 'Centro comercial con vistas a San Diego a 10 min' },
      { nombre: 'Rosarito Beach', descripcion: 'Playa resort a 30 min de auto hacia el sur' },
      { nombre: 'Ensenada', descripcion: 'Puerto de pescado con gastronomía a 60 min' },
    ],
    tips: [
      'Autotransportes de Baja California es la línea principal regional',
      'Primera Plus ofrece viaje a CDMX (30 horas, raro)',
      'Fácil acceso a cruce fronterizo a San Diego',
      'Terminal activa 24/7; zona vigilada pero concurrida',
    ],
    nombreCorto: 'Central Tijuana',
    ciudad: 'Tijuana',
    estado: 'Baja California',
    region: 'noroeste',
    lat: 32.5149,
    lng: -116.9718,
    destinos: [
      'Mexicali',
      'Ensenada',
      'San Diego',
      'Ciudad de México',
      'Los Cabos',
      'Rosarito',
    ],
    lineasBus: [
      'Autotransportes de Baja California',
      'La Diferencia',
      'Transportes ABC',
      'Águila de Oro',
      'Primera Plus',
    ],
    conexionMetro: null,
    comoLlegar: {
      transporte: [
        {
          tipo: 'Autobús Urbano',
          detalle:
            'Sistema de transporte urbano de Tijuana. Ubicada en el centro.',
          tiempo: '10-15 min desde el centro',
          costo: '$10-12 MXN',
        },
        {
          tipo: 'Línea Internacional',
          detalle:
            'Acceso a San Diego y cruce fronterizo con Estados Unidos.',
          tiempo: 'Variable según cruce',
        },
      ],
      taxi: {
        estimado: '$50-100 MXN desde el centro',
      },
      uber: {
        estimado: '$40-80 MXN desde el centro',
      },
    },
    descripcion:
      'Central de Autobuses de Tijuana, puerta de entrada a Baja California. Conexiones nacionales e internacionales. Punto de partida para explorar Ensenada y la costa de Baja California.',
    seo_title:
      'Central Tijuana — Mexicali, Ensenada, San Diego, CDMX | Baja California',
    meta_description:
      'Central Tijuana: Destinos Ensenada, Mexicali, Los Cabos, CDMX. Frontera con San Diego.',
  },

  // TOLUCA - CENTRAL CAMIONERA
  {
    slug: 'central-toluca',
    nombre: 'Central Camionera de Toluca',
    intro: 'Central Camionera de Toluca, punto de salida hacia Morelia, Valle de Bravo y pueblos mágicos del Estado de México. Conexión alternativa a CDMX vía Tren Suburbano México-Toluca. Ubicada a 2 km del centro de Toluca con conexión a mercados y zonas comerciales.',
    pois: [
      { nombre: 'Centro de Toluca', descripcion: 'Zócalo y Biblioteca Iberoamericana a 10 min' },
      { nombre: 'Valle de Bravo', descripcion: 'Pueblo mágico lacustre a 70 min en autobús' },
      { nombre: 'Malinalco', descripcion: 'Pueblo arqueológico a 60 min en auto' },
      { nombre: 'Tenancingo', descripcion: 'Pueblo de rebozos tradicionales a 45 min' },
    ],
    tips: [
      'Flecha Roja ofrece autobuses cómodos hacia Morelia y Valle de Bravo',
      'Tren Suburbano a CDMX es alternativa rápida (90 min) a 2 km',
      'Terminal moderna y climatizada',
      'Compre boletos en línea; llegue 20 min antes',
    ],
    nombreCorto: 'Central Toluca',
    ciudad: 'Toluca',
    estado: 'Estado de México',
    region: 'centro',
    lat: 19.2776,
    lng: -99.6554,
    destinos: [
      'Ciudad de México',
      'Morelia',
      'Valle de Bravo',
      'Malinalco',
      'Tenancingo',
      'Irapuato',
    ],
    lineasBus: [
      'TMT (Transportes Magisteriales de Toluca)',
      'Flecha Roja',
      'Caminante',
      'Autobuses de Toluca',
      'Transportes Zitácuaro',
    ],
    conexionMetro: null,
    comoLlegar: {
      transporte: [
        {
          tipo: 'Tren Suburbano',
          detalle:
            'Tren Suburbano México-Toluca conecta CDMX con Toluca. A 2 km de la central.',
          tiempo: '5-10 min en taxi/uber desde la estación del Tren',
          costo: '$95-120 MXN (Tren desde CDMX)',
        },
        {
          tipo: 'Autobús Urbano',
          detalle:
            'Sistema de transporte urbano local. Múltiples rutas hacia la terminal.',
          tiempo: '10-15 min desde el centro',
          costo: '$8-10 MXN',
        },
      ],
      taxi: {
        estimado: '$60-100 MXN desde el centro de Toluca',
      },
      uber: {
        estimado: '$50-80 MXN desde el centro',
      },
    },
    descripcion:
      'Central Camionera de Toluca, punto de salida hacia Morelia, Valle de Bravo y pueblos mágicos del Estado de México. Conexión alternativa a CDMX vía Tren Suburbano.',
    seo_title:
      'Central Toluca — Morelia, Valle de Bravo, CDMX | Tren Suburbano',
    meta_description:
      'Central Toluca: Destinos Morelia, Valle de Bravo, CDMX. TMT, Flecha Roja. Acceso a Tren Suburbano.',
  },
];
