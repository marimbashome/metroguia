export const lineasBuenosAires = [
  {
    id: 'A',
    color: '#7AC5E5',
    colorNombre: 'Línea A',
    inicio: 'Plaza de Mayo',
    fin: 'San Pedrito',
    total: 21,
    municipios: ['Buenos Aires'],
    descripcion: 'La Línea A es la más antigua de América Latina, inaugurada en 1913. Conecta el microcentro histórico de Buenos Aires con los barrios de Caballito y Flores. Sus coches originales de madera fueron reemplazados, pero la línea conserva estaciones con mosaicos artísticos únicos. Es clave para llegar al Congreso Nacional, el Abasto y el barrio de Flores.',
    estaciones_turisticas: ['baires-plaza-de-mayo-a', 'baires-congreso-a', 'baires-malabia-a', 'baires-federico-lacroze-a'],
    estaciones: ['baires-plaza-de-mayo-a','baires-peru-a','baires-piedras-a','baires-lima-a','baires-saenz-pena-a','baires-congreso-a','baires-pasco-a','baires-alberti-a','baires-plaza-miserere-a','baires-loria-a','baires-castro-barros-a','baires-rio-de-janeiro-a','baires-medrano-a','baires-angel-gallardo-a','baires-malabia-a','baires-dorrego-a','baires-federico-lacroze-a','baires-tronador-a','baires-los-incas-a','baires-pilcomayo-a','baires-san-pedrito-a'],
    ruta_1_dia: {
      titulo: 'Del microcentro histórico al barrio de Flores',
      paradas: [
        { estacion: 'baires-plaza-de-mayo-a', actividad: 'Casa Rosada y Plaza de Mayo (09:00)' },
        { estacion: 'baires-congreso-a', actividad: 'Congreso Nacional y Avenida de Mayo (11:30)' },
        { estacion: 'baires-malabia-a', actividad: 'Palermo y boutiques locales (14:00)' },
        { estacion: 'baires-san-pedrito-a', actividad: 'Barrio de Flores y mercados (16:00)' }
      ]
    },
    seo_title: 'Línea A Subte Buenos Aires: Plaza de Mayo a San Pedrito | 21 estaciones',
    meta_description: 'Guía completa de la Línea A del Subte de Buenos Aires. 21 estaciones desde Plaza de Mayo hasta San Pedrito. La línea de metro más antigua de América Latina (1913).',
    h1: 'Línea A del Subte — Buenos Aires'
  },
  {
    id: 'B',
    color: '#EF3A3C',
    colorNombre: 'Línea B',
    inicio: 'Leandro N. Alem',
    fin: 'Juan Manuel de Rosas',
    total: 17,
    municipios: ['Buenos Aires'],
    descripcion: 'La Línea B conecta el microcentro financiero con los barrios de Villa Urquiza y Villa del Parque. Inaugurada en 1930, recorre el eje de la Avenida Corrientes, corazón cultural porteño con sus teatros y librerías. Pasa por Palermo y Plaza Italia.',
    estaciones_turisticas: ['baires-florida-b', 'baires-carlos-pellegrini-b', 'baires-palermo-b', 'baires-plaza-italia-b'],
    estaciones: ['baires-leandro-n-alem-b','baires-florida-b','baires-carlos-pellegrini-b','baires-callao-b','baires-uruguay-b','baires-medrano-b','baires-angel-gallardo-b','baires-pasteur-b','baires-pueyrredon-b','baires-rio-de-janeiro-b','baires-carlos-gardel-b','baires-scalabrini-ortiz-b','baires-palermo-b','baires-plaza-italia-b','baires-tronador-b','baires-los-incas-b','baires-juan-manuel-de-rosas-b'],
    ruta_1_dia: {
      titulo: 'Corrientes cultural: librerías, teatros y Palermo',
      paradas: [
        { estacion: 'baires-florida-b', actividad: 'Peatonal Florida y Galerías Pacífico (10:00)' },
        { estacion: 'baires-carlos-pellegrini-b', actividad: 'Obelisco y Av. Corrientes (11:30)' },
        { estacion: 'baires-carlos-gardel-b', actividad: 'Mercado de Abasto y museo Gardel (14:00)' },
        { estacion: 'baires-plaza-italia-b', actividad: 'Jardín Zoológico y Botanical (17:00)' }
      ]
    },
    seo_title: 'Línea B Subte Buenos Aires: Leandro N. Alem a Juan Manuel de Rosas',
    meta_description: 'Línea B del Subte de Buenos Aires. 17 estaciones por Corrientes, Palermo y Plaza Italia. Teatros, librerías y el corazón cultural porteño.',
    h1: 'Línea B del Subte — Buenos Aires'
  },
  {
    id: 'C',
    color: '#1E5FA6',
    colorNombre: 'Línea C',
    inicio: 'Constitución',
    fin: 'Retiro',
    total: 8,
    municipios: ['Buenos Aires'],
    descripcion: 'La Línea C conecta las dos terminales ferroviarias más importantes: Constitución (trenes al sur bonaerense) y Retiro (trenes al norte). Inaugurada en 1934, es la más utilizada del sistema por su conexión estratégica entre los grandes nodos ferroviarios. Pasa por el Microcentro y la Diagonal Norte.',
    estaciones_turisticas: ['baires-constitucion-c', 'baires-diagonal-norte-c', 'baires-retiro-c'],
    estaciones: ['baires-constitucion-c','baires-san-juan-c','baires-independencia-c','baires-moreno-c','baires-diagonal-norte-c','baires-lavalle-c','baires-general-san-martin-c','baires-retiro-c'],
    ruta_1_dia: {
      titulo: 'Norte-Sur: de Retiro al barrio de San Telmo',
      paradas: [
        { estacion: 'baires-retiro-c', actividad: 'Terminal Retiro y Puerto Madero (09:00)' },
        { estacion: 'baires-general-san-martin-c', actividad: 'Teatro Colón a 5 cuadras (10:30)' },
        { estacion: 'baires-diagonal-norte-c', actividad: 'Catedral y Casa Rosada (12:00)' },
        { estacion: 'baires-independencia-c', actividad: 'San Telmo y feria de antigüedades (14:00)' },
        { estacion: 'baires-constitucion-c', actividad: 'Constitución y La Boca cercana (16:00)' }
      ]
    },
    seo_title: 'Línea C Subte Buenos Aires: Constitución a Retiro | 8 estaciones',
    meta_description: 'Línea C (azul marino) del Subte de Buenos Aires. 8 estaciones conectando las terminales de Constitución y Retiro. Ruta esencial para turistas en BA.',
    h1: 'Línea C del Subte — Buenos Aires'
  },
  {
    id: 'D',
    color: '#159748',
    colorNombre: 'Línea D',
    inicio: 'Catedral',
    fin: 'Congreso de Tucumán',
    total: 17,
    municipios: ['Buenos Aires'],
    descripcion: 'La Línea D recorre la emblemática Avenida Santa Fe desde el microcentro hasta Belgrano. Inaugurada en 1937, conecta el Obelisco, la Recoleta y el Jardín Botánico. Su tramo norte atraviesa los barrios residenciales de Palermo y Belgrano, los más cosmopolitas de Buenos Aires.',
    estaciones_turisticas: ['baires-catedral-d', 'baires-9-de-julio-d', 'baires-palermo-d', 'baires-plaza-italia-d'],
    estaciones: ['baires-catedral-d','baires-9-de-julio-d','baires-tribunales-d','baires-callao-d','baires-facultad-de-medicina-d','baires-once-de-septiembre-d','baires-medrano-d','baires-pueyrredon-d','baires-aguero-d','baires-bulnes-d','baires-plaza-italia-d','baires-palermo-d','baires-ministro-carranza-d','baires-olleros-d','baires-jose-hernandez-d','baires-juramento-d','baires-congreso-de-tucuman-d'],
    ruta_1_dia: {
      titulo: 'Santa Fe: del microcentro a Belgrano',
      paradas: [
        { estacion: 'baires-catedral-d', actividad: 'Catedral Metropolitana y Plaza de Mayo (09:00)' },
        { estacion: 'baires-9-de-julio-d', actividad: 'Obelisco y Teatro Colón (10:30)' },
        { estacion: 'baires-plaza-italia-d', actividad: 'Palermo Soho y brunch (14:00)' },
        { estacion: 'baires-congreso-de-tucuman-d', actividad: 'Barrio de Belgrano y Barrancas (17:00)' }
      ]
    },
    seo_title: 'Línea D Subte Buenos Aires: Catedral a Congreso de Tucumán | 17 estaciones',
    meta_description: 'Línea D (verde) del Subte de Buenos Aires. 17 estaciones por Av. Santa Fe: Catedral, Obelisco, Recoleta, Palermo y Belgrano.',
    h1: 'Línea D del Subte — Buenos Aires'
  },
  {
    id: 'E',
    color: '#9B297D',
    colorNombre: 'Línea E',
    inicio: 'Plaza de los Virreyes',
    fin: 'Retiro',
    total: 21,
    municipios: ['Buenos Aires'],
    descripcion: 'La Línea E conecta los barrios del sur de Buenos Aires con el centro y Retiro. Inaugurada en 1944, recorre Boedo, San Cristóbal y el microcentro. Es la línea que mejor sirve a los barrios de clase media popular porteña, con acceso a San Telmo, Parque Chacabuco y Boedo.',
    estaciones_turisticas: ['baires-retiro-e', 'baires-bolivar-e', 'baires-independencia-e', 'baires-boedo-e'],
    estaciones: ['baires-retiro-e','baires-catalinas-e','baires-correo-central-e','baires-bolivar-e','baires-belgrano-e','baires-independencia-e','baires-general-urquiza-e','baires-entre-rios-e','baires-jujuy-e','baires-pichincha-e','baires-boedo-e','baires-colombres-e','baires-av-la-plata-e','baires-medrano-e','baires-gascon-e','baires-jose-maria-moreno-e','baires-emilio-mitre-e','baires-varela-e','baires-bonorino-e','baires-corrientes-e','baires-plaza-de-los-virreyes-e'],
    ruta_1_dia: {
      titulo: 'Del sur porteño a Retiro',
      paradas: [
        { estacion: 'baires-retiro-e', actividad: 'Terminal Retiro y conexiones (09:00)' },
        { estacion: 'baires-bolivar-e', actividad: 'Manzana de las Luces (10:00)' },
        { estacion: 'baires-independencia-e', actividad: 'San Telmo y mercado de antigüedades (11:30)' },
        { estacion: 'baires-boedo-e', actividad: 'Barrio de Boedo y tanguerías (14:00)' }
      ]
    },
    seo_title: 'Línea E Subte Buenos Aires: Plaza de los Virreyes a Retiro | 21 estaciones',
    meta_description: 'Línea E (morado) del Subte de Buenos Aires. 21 estaciones conectando Retiro con los barrios de Boedo y Plaza de los Virreyes.',
    h1: 'Línea E del Subte — Buenos Aires'
  },
  {
    id: 'H',
    color: '#F9BC15',
    colorNombre: 'Línea H',
    inicio: 'Caseros',
    fin: 'Facultad de Derecho',
    total: 10,
    municipios: ['Buenos Aires'],
    descripcion: 'La Línea H es la más nueva del Subte, inaugurada en 2007 y en expansión. Es la única que corre de norte a sur en el eje este, conectando el "Distrito Tecnológico" de Parque Patricios con Recoleta y la Facultad de Derecho. Una línea clave para los barrios de San Telmo y Almagro.',
    estaciones_turisticas: ['baires-once-h', 'baires-santa-fe-h', 'baires-las-heras-h', 'baires-facultad-de-derecho-h'],
    estaciones: ['baires-caseros-h','baires-parque-patricios-h','baires-inclan-h','baires-humberto-primo-h','baires-venezuela-h','baires-once-h','baires-corrientes-h','baires-santa-fe-h','baires-las-heras-h','baires-facultad-de-derecho-h'],
    ruta_1_dia: {
      titulo: 'Tecnología, cultura y Recoleta',
      paradas: [
        { estacion: 'baires-parque-patricios-h', actividad: 'Distrito Tecnológico (09:00)' },
        { estacion: 'baires-humberto-primo-h', actividad: 'San Telmo histórico (11:00)' },
        { estacion: 'baires-once-h', actividad: 'Barrio Once y compras (13:00)' },
        { estacion: 'baires-facultad-de-derecho-h', actividad: 'Recoleta y Cementerio (16:00)' }
      ]
    },
    seo_title: 'Línea H Subte Buenos Aires: Caseros a Facultad de Derecho | 10 estaciones',
    meta_description: 'Línea H (amarillo) del Subte de Buenos Aires. 10 estaciones de Parque Patricios a Recoleta. La línea más nueva del sistema subterráneo porteño.',
    h1: 'Línea H del Subte — Buenos Aires'
  }
];
