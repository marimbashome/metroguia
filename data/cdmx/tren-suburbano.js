export const trenSuburbanoData = {
  sistema: 'Tren Suburbano',
  ciudad: 'cdmx',
  slug: 'tren-suburbano',
  color: '#00A651',  // Green color for Tren Suburbano
  colorNombre: 'Verde',
  icono: '🚆',
  costo: { min: 11, max: 35, moneda: 'MXN', nota: 'Varía por distancia. Tarjeta Movilidad Integrada requerida.' },
  horario: { apertura: '05:00', cierre: '23:00', frecuencia: '10-15 min' },
  descripcion: 'El Tren Suburbano conecta CDMX con el norte del Estado de México. Recorre 27 km desde Buenavista hasta Cuautitlán, con extensión al Aeropuerto Internacional Felipe Ángeles (AIFA).',
  lineas: {
    'TS': {
      id: 'TS',
      nombre: 'Tren Suburbano',
      color: '#00A651',
      colorNombre: 'Verde',
      inicio: 'Buenavista',
      fin: 'Cuautitlán',
      total: 7,
      zonas: ['Cuauhtémoc', 'Azcapotzalco', 'Tlalnepantla', 'Cuautitlán Izcalli'],
      descripcion: 'Línea principal del Tren Suburbano. Conecta la estación Buenavista en el centro de CDMX con Cuautitlán en el Estado de México. Ideal para llegar al AIFA desde CDMX.',
      estaciones_turisticas: ['buenavista-ts', 'lecheria-ts'],
      estaciones: [
        { slug: 'buenavista-ts', nombre: 'Buenavista', conexiones: ['Metro LB', 'Metrobús L1'] },
        { slug: 'fortuna-ts', nombre: 'Fortuna', conexiones: [] },
        { slug: 'tlalnepantla-ts', nombre: 'Tlalnepantla', conexiones: [] },
        { slug: 'san-rafael-ts', nombre: 'San Rafael', conexiones: [] },
        { slug: 'lecheria-ts', nombre: 'Lechería', conexiones: ['Ramal AIFA'] },
        { slug: 'tultitlan-ts', nombre: 'Tultitlán', conexiones: [] },
        { slug: 'cuautitlan-ts', nombre: 'Cuautitlán', conexiones: [] }
      ],
      ruta_1_dia: {
        titulo: 'Tren Suburbano: De CDMX al norte del Estado de México',
        paradas: [
          { estacion: 'Buenavista', actividad: 'Conectar desde Metro/Metrobús al centro de CDMX', duracion: '15 min' },
          { estacion: 'Lechería', actividad: 'Transbordo al ramal AIFA si vas al aeropuerto', duracion: '5 min' },
          { estacion: 'Cuautitlán', actividad: 'Terminal norte, conexión con transporte local', duracion: '10 min' }
        ]
      },
      seo_title: 'Tren Suburbano CDMX — Estaciones, Horarios y Costos | MetroGuia',
      meta_description: 'Guía completa del Tren Suburbano CDMX: 7 estaciones de Buenavista a Cuautitlán. Conexión al AIFA, horarios, tarifas y cómo usar la Tarjeta de Movilidad.',
      h1: 'Tren Suburbano CDMX — Guía completa'
    },
    'TS-AIFA': {
      id: 'TS-AIFA',
      nombre: 'Ramal AIFA',
      color: '#00A651',
      colorNombre: 'Verde',
      inicio: 'Lechería',
      fin: 'AIFA',
      total: 2,
      zonas: ['Tultepec', 'Zumpango'],
      descripcion: 'Ramal del Tren Suburbano que conecta la estación Lechería con el Aeropuerto Internacional Felipe Ángeles (AIFA). Inaugurado en 2023.',
      estaciones_turisticas: ['aifa-ts'],
      estaciones: [
        { slug: 'lecheria-ts', nombre: 'Lechería', conexiones: ['Tren Suburbano línea principal'] },
        { slug: 'aifa-ts', nombre: 'AIFA (Aeropuerto Felipe Ángeles)', conexiones: [] }
      ],
      ruta_1_dia: {
        titulo: 'Del centro de CDMX al AIFA en tren',
        paradas: [
          { estacion: 'Buenavista', actividad: 'Tomar el Tren Suburbano hacia Cuautitlán', duracion: '5 min' },
          { estacion: 'Lechería', actividad: 'Transbordo al ramal AIFA', duracion: '5 min' },
          { estacion: 'AIFA', actividad: 'Llegada al Aeropuerto Felipe Ángeles', duracion: '30 min' }
        ]
      },
      seo_title: 'Cómo llegar al AIFA en Tren Suburbano — Ruta, Horarios y Costo | MetroGuia',
      meta_description: 'Ruta del Tren Suburbano al AIFA: horarios, costo ($17 MXN desde Lechería) y cómo llegar desde CDMX. Ramal Lechería-AIFA.',
      h1: 'Tren Suburbano al AIFA — Guía de conexión'
    }
  },
  // All stations as flat array for search indexing
  estaciones: [
    { slug: 'buenavista-ts', nombre: 'Buenavista', linea: 'TS', sistema: 'tren-suburbano', alcaldia: 'Cuauhtémoc', lat: 19.4506, lng: -99.1531, conexiones_metro: ['buenavista'], descripcion_turistica: 'Terminal sur del Tren Suburbano. Conexión directa con Metro Línea B y Metrobús Línea 1. Ubicada junto a la antigua estación de trenes Buenavista, ahora centro comercial Forum Buenavista.' },
    { slug: 'fortuna-ts', nombre: 'Fortuna', linea: 'TS', sistema: 'tren-suburbano', alcaldia: 'Azcapotzalco', lat: 19.4847, lng: -99.1628, conexiones_metro: [], descripcion_turistica: 'Estación en la zona industrial de Azcapotzalco. Cercana al Parque Tezozómoc, un espacio verde con lagos artificiales.' },
    { slug: 'tlalnepantla-ts', nombre: 'Tlalnepantla', linea: 'TS', sistema: 'tren-suburbano', alcaldia: 'Tlalnepantla de Baz', lat: 19.5360, lng: -99.1972, conexiones_metro: [], descripcion_turistica: 'Acceso a Tlalnepantla, municipio del Estado de México. Centro comercial Mundo E y zona industrial cercanos.' },
    { slug: 'san-rafael-ts', nombre: 'San Rafael', linea: 'TS', sistema: 'tren-suburbano', alcaldia: 'Tlalnepantla de Baz', lat: 19.5561, lng: -99.2080, conexiones_metro: [], descripcion_turistica: 'Estación intermedia en Tlalnepantla. Zona residencial con acceso a comercio local.' },
    { slug: 'lecheria-ts', nombre: 'Lechería', linea: 'TS', sistema: 'tren-suburbano', alcaldia: 'Tultitlán', lat: 19.5784, lng: -99.2117, conexiones_metro: [], descripcion_turistica: 'Nodo de conexión crucial: aquí se toma el ramal al AIFA. Terminal de transbordo entre la línea principal y el ramal aeroportuario.' },
    { slug: 'tultitlan-ts', nombre: 'Tultitlán', linea: 'TS', sistema: 'tren-suburbano', alcaldia: 'Tultitlán', lat: 19.6104, lng: -99.1773, conexiones_metro: [], descripcion_turistica: 'Estación en el municipio de Tultitlán. Acceso a zonas residenciales del Estado de México.' },
    { slug: 'cuautitlan-ts', nombre: 'Cuautitlán', linea: 'TS', sistema: 'tren-suburbano', alcaldia: 'Cuautitlán', lat: 19.6622, lng: -99.1773, conexiones_metro: [], descripcion_turistica: 'Terminal norte del Tren Suburbano. Conexión con transporte público local hacia Tepotzotlán y otros municipios del norte del Estado de México.' },
    { slug: 'aifa-ts', nombre: 'AIFA', linea: 'TS-AIFA', sistema: 'tren-suburbano', alcaldia: 'Zumpango', lat: 19.7454, lng: -99.0082, conexiones_metro: [], descripcion_turistica: 'Aeropuerto Internacional Felipe Ángeles. Terminal del ramal AIFA del Tren Suburbano. Desde Buenavista: ~1 hora con transbordo en Lechería.' }
  ]
};
