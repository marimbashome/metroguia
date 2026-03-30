/**
 * Trolebús/STE CDMX — MetroGuia.mx
 * Servicio de Transportes Eléctricos de la Ciudad de México
 * 11 líneas principales + L11 Elevado
 */

export const trolebusData = {
  sistema: 'Trolebús',
  ciudad: 'cdmx',
  slug: 'trolebus',
  color: '#0072CE',
  colorNombre: 'Azul',
  icono: '🚎',
  costo: { min: 4, max: 13, moneda: 'MXN', nota: 'Líneas regulares $4, Línea Elevada (L11) $13. Acepta Tarjeta de Movilidad Integrada.' },
  horario: { apertura: '04:30', cierre: '00:00', frecuencia: '5-15 min según línea' },
  descripcion: 'El Trolebús de CDMX es operado por el STE (Servicio de Transportes Eléctricos). Incluye 10 líneas convencionales que recorren la zona centro y oriente, más la Línea 11 Elevada (Constitución de 1917 → Santa Marta/Chalco), inaugurada en 2025.',
  lineas: {
    'TB-1': {
      id: 'TB-1',
      nombre: 'Línea 1 - Eje Central',
      color: '#E31937',
      colorNombre: 'Rojo',
      inicio: 'Corredor Cero Emisiones (Norte)',
      fin: 'Huipulco',
      total: 6,
      zonas: ['Gustavo A. Madero', 'Cuauhtémoc', 'Benito Juárez', 'Tlalpan'],
      descripcion: 'Recorre el Eje Central Lázaro Cárdenas, una de las arterias principales de CDMX, desde el norte hasta Huipulco al sur.',
      estaciones_turisticas: ['bellas-artes-tb', 'eje-central-salto-agua-tb'],
      estaciones: [
        { slug: 'corredor-norte-tb', nombre: 'Corredor Norte' },
        { slug: 'bellas-artes-tb', nombre: 'Bellas Artes' },
        { slug: 'eje-central-salto-agua-tb', nombre: 'Salto del Agua' },
        { slug: 'eje-central-chabacano-tb', nombre: 'Chabacano' },
        { slug: 'eje-central-nativitas-tb', nombre: 'Nativitas' },
        { slug: 'huipulco-tb', nombre: 'Huipulco' }
      ],
      seo_title: 'Trolebús Línea 1 Eje Central — Ruta y Paradas | MetroGuia',
      meta_description: 'Trolebús L1 por Eje Central Lázaro Cárdenas: paradas principales, conexiones con Metro, horarios y cómo usarlo.',
      h1: 'Trolebús Línea 1 — Eje Central'
    },
    'TB-2': {
      id: 'TB-2',
      nombre: 'Línea 2',
      color: '#00843D',
      colorNombre: 'Verde',
      inicio: 'Chapultepec',
      fin: 'Calzada de la Viga',
      total: 4,
      zonas: ['Miguel Hidalgo', 'Cuauhtémoc', 'Venustiano Carranza'],
      descripcion: 'Conecta Chapultepec con el oriente pasando por el Centro Histórico.',
      estaciones_turisticas: ['chapultepec-tb'],
      estaciones: [
        { slug: 'chapultepec-tb', nombre: 'Chapultepec' },
        { slug: 'centro-historico-tb2', nombre: 'Centro Histórico' },
        { slug: 'merced-tb', nombre: 'La Merced' },
        { slug: 'calzada-viga-tb', nombre: 'Calzada de la Viga' }
      ],
      seo_title: 'Trolebús Línea 2 — Chapultepec a La Viga | MetroGuia',
      meta_description: 'Trolebús L2 CDMX: de Chapultepec al oriente por el Centro Histórico.',
      h1: 'Trolebús Línea 2'
    },
    'TB-3': {
      id: 'TB-3',
      nombre: 'Línea 3',
      color: '#9E2A2B',
      colorNombre: 'Guinda',
      inicio: 'Álamos',
      fin: 'Tacubaya',
      total: 4,
      zonas: ['Benito Juárez', 'Cuauhtémoc', 'Miguel Hidalgo'],
      descripcion: 'Recorre de Álamos hasta Tacubaya por la zona sur-poniente.',
      estaciones_turisticas: [],
      estaciones: [
        { slug: 'alamos-tb', nombre: 'Álamos' },
        { slug: 'patriotismo-tb', nombre: 'Patriotismo' },
        { slug: 'mixcoac-tb', nombre: 'Mixcoac' },
        { slug: 'tacubaya-tb', nombre: 'Tacubaya' }
      ],
      seo_title: 'Trolebús Línea 3 — Álamos a Tacubaya | MetroGuia',
      meta_description: 'Trolebús L3 CDMX: ruta de Álamos a Tacubaya, conexiones con Metro.',
      h1: 'Trolebús Línea 3'
    },
    'TB-4': {
      id: 'TB-4',
      nombre: 'Línea 4',
      color: '#00A9CE',
      colorNombre: 'Cyan',
      inicio: 'San Lázaro',
      fin: 'Santa Martha',
      total: 4,
      zonas: ['Venustiano Carranza', 'Iztapalapa'],
      descripcion: 'Conecta San Lázaro con Santa Martha al oriente de la ciudad.',
      estaciones_turisticas: [],
      estaciones: [
        { slug: 'san-lazaro-tb', nombre: 'San Lázaro' },
        { slug: 'zaragoza-tb', nombre: 'Zaragoza' },
        { slug: 'iztapalapa-tb', nombre: 'Iztapalapa' },
        { slug: 'santa-martha-tb4', nombre: 'Santa Martha' }
      ],
      seo_title: 'Trolebús Línea 4 — San Lázaro a Santa Martha | MetroGuia',
      meta_description: 'Trolebús L4 CDMX: de San Lázaro a Santa Martha, zona oriente.',
      h1: 'Trolebús Línea 4'
    },
    'TB-5': {
      id: 'TB-5',
      nombre: 'Línea 5',
      color: '#F58220',
      colorNombre: 'Naranja',
      inicio: 'San Lázaro',
      fin: 'La Turba',
      total: 4,
      zonas: ['Venustiano Carranza', 'Iztapalapa', 'Tláhuac'],
      descripcion: 'Ruta del oriente que conecta San Lázaro con Tláhuac.',
      estaciones_turisticas: [],
      estaciones: [
        { slug: 'san-lazaro-tb5', nombre: 'San Lázaro' },
        { slug: 'canal-san-juan-tb', nombre: 'Canal de San Juan' },
        { slug: 'constitucion-1917-tb5', nombre: 'Constitución de 1917' },
        { slug: 'la-turba-tb', nombre: 'La Turba' }
      ],
      seo_title: 'Trolebús Línea 5 — San Lázaro a La Turba | MetroGuia',
      meta_description: 'Trolebús L5 CDMX: ruta del oriente de San Lázaro a La Turba, Tláhuac.',
      h1: 'Trolebús Línea 5'
    },
    'TB-6': {
      id: 'TB-6',
      nombre: 'Línea 6',
      color: '#8B4789',
      colorNombre: 'Morado',
      inicio: 'Metro Hidalgo',
      fin: 'Hospital General',
      total: 3,
      zonas: ['Cuauhtémoc'],
      descripcion: 'Ruta corta que conecta Hidalgo con Hospital General por la zona centro.',
      estaciones_turisticas: ['hidalgo-tb'],
      estaciones: [
        { slug: 'hidalgo-tb', nombre: 'Metro Hidalgo' },
        { slug: 'doctores-tb', nombre: 'Doctores' },
        { slug: 'hospital-general-tb', nombre: 'Hospital General' }
      ],
      seo_title: 'Trolebús Línea 6 — Hidalgo a Hospital General | MetroGuia',
      meta_description: 'Trolebús L6: ruta corta del centro, Metro Hidalgo a Hospital General.',
      h1: 'Trolebús Línea 6'
    },
    'TB-7': {
      id: 'TB-7',
      nombre: 'Línea 7',
      color: '#D4A843',
      colorNombre: 'Ocre',
      inicio: 'Metro Chapultepec',
      fin: 'Ciudad Universitaria',
      total: 4,
      zonas: ['Miguel Hidalgo', 'Benito Juárez', 'Coyoacán'],
      descripcion: 'Conecta Chapultepec con Ciudad Universitaria por Insurgentes Sur.',
      estaciones_turisticas: ['chapultepec-tb7', 'cu-tb'],
      estaciones: [
        { slug: 'chapultepec-tb7', nombre: 'Chapultepec' },
        { slug: 'insurgentes-tb', nombre: 'Insurgentes' },
        { slug: 'mixcoac-tb7', nombre: 'Mixcoac' },
        { slug: 'cu-tb', nombre: 'Ciudad Universitaria' }
      ],
      seo_title: 'Trolebús Línea 7 — Chapultepec a CU | MetroGuia',
      meta_description: 'Trolebús L7: de Chapultepec a Ciudad Universitaria por Insurgentes Sur.',
      h1: 'Trolebús Línea 7'
    },
    'TB-8': {
      id: 'TB-8',
      nombre: 'Línea 8',
      color: '#4A7C2E',
      colorNombre: 'Verde Oscuro',
      inicio: 'Metro Constitución de 1917',
      fin: 'Iztapalapa Centro',
      total: 3,
      zonas: ['Iztapalapa'],
      descripcion: 'Recorrido dentro de Iztapalapa desde la estación Constitución de 1917.',
      estaciones_turisticas: [],
      estaciones: [
        { slug: 'constitucion-1917-tb8', nombre: 'Constitución de 1917' },
        { slug: 'santa-cruz-meyehualco-tb', nombre: 'Santa Cruz Meyehualco' },
        { slug: 'iztapalapa-centro-tb', nombre: 'Iztapalapa Centro' }
      ],
      seo_title: 'Trolebús Línea 8 — Constitución de 1917 a Iztapalapa | MetroGuia',
      meta_description: 'Trolebús L8: recorrido en Iztapalapa desde Metro Constitución de 1917.',
      h1: 'Trolebús Línea 8'
    },
    'TB-9': {
      id: 'TB-9',
      nombre: 'Línea 9',
      color: '#B5121B',
      colorNombre: 'Rojo Oscuro',
      inicio: 'Garibaldi',
      fin: 'Villa de Cortés',
      total: 4,
      zonas: ['Cuauhtémoc', 'Benito Juárez'],
      descripcion: 'Recorre de Garibaldi a Villa de Cortés por la zona centro.',
      estaciones_turisticas: ['garibaldi-tb'],
      estaciones: [
        { slug: 'garibaldi-tb', nombre: 'Garibaldi' },
        { slug: 'centro-historico-tb9', nombre: 'Centro Histórico' },
        { slug: 'obrera-tb', nombre: 'Obrera' },
        { slug: 'villa-cortes-tb', nombre: 'Villa de Cortés' }
      ],
      seo_title: 'Trolebús Línea 9 — Garibaldi a Villa de Cortés | MetroGuia',
      meta_description: 'Trolebús L9: de la Plaza Garibaldi hacia el sur por la zona centro.',
      h1: 'Trolebús Línea 9'
    },
    'TB-10': {
      id: 'TB-10',
      nombre: 'Línea 10',
      color: '#666666',
      colorNombre: 'Gris',
      inicio: 'Metro Pantitlán',
      fin: 'Ciudad Nezahualcóyotl',
      total: 3,
      zonas: ['Iztacalco', 'Nezahualcóyotl'],
      descripcion: 'Conecta Pantitlán con Ciudad Nezahualcóyotl al oriente.',
      estaciones_turisticas: [],
      estaciones: [
        { slug: 'pantitlan-tb', nombre: 'Pantitlán' },
        { slug: 'av-texcoco-tb', nombre: 'Av. Texcoco' },
        { slug: 'cd-neza-tb', nombre: 'Ciudad Nezahualcóyotl' }
      ],
      seo_title: 'Trolebús Línea 10 — Pantitlán a Neza | MetroGuia',
      meta_description: 'Trolebús L10: de Metro Pantitlán a Ciudad Nezahualcóyotl.',
      h1: 'Trolebús Línea 10'
    },
    'TB-11': {
      id: 'TB-11',
      nombre: 'Línea 11 Elevada',
      color: '#C41E3A',
      colorNombre: 'Rojo',
      inicio: 'Constitución de 1917',
      fin: 'Santa Marta',
      total: 15,
      zonas: ['Iztapalapa', 'Valle de Chalco', 'Chalco'],
      descripcion: 'La Línea 11 Elevada es el trolebús más moderno de México. Inaugurada en mayo 2025, recorre 18.5 km sobre vía elevada desde la estación Constitución de 1917 del Metro hasta Santa Marta/Chalco. Es la primera línea de trolebús elevado en Latinoamérica.',
      estaciones_turisticas: ['constitucion-1917-tb11'],
      estaciones: [
        { slug: 'constitucion-1917-tb11', nombre: 'Constitución de 1917' },
        { slug: 'santa-maria-aztahuacan-tb', nombre: 'Santa María Aztahuacán' },
        { slug: 'santa-cruz-meyehualco-tb11', nombre: 'Santa Cruz Meyehualco' },
        { slug: 'peñon-viejo-tb', nombre: 'Peñón Viejo' },
        { slug: 'la-calma-tb', nombre: 'La Calma' },
        { slug: 'santa-martha-tb', nombre: 'Santa Martha' },
        { slug: 'la-concordia-tb', nombre: 'La Concordia' },
        { slug: 'los-reyes-tb', nombre: 'Los Reyes' },
        { slug: 'tecamachalco-tb', nombre: 'Tecamachalco' },
        { slug: 'san-isidro-tb', nombre: 'San Isidro' },
        { slug: 'la-magdalena-tb', nombre: 'La Magdalena' },
        { slug: 'san-martin-tb', nombre: 'San Martín' },
        { slug: 'san-juan-tlalpizahuac-tb', nombre: 'San Juan Tlalpizahuac' },
        { slug: 'san-lucas-amalinalco-tb', nombre: 'San Lucas Amalinalco' },
        { slug: 'chalco-tb', nombre: 'Chalco' }
      ],
      ruta_1_dia: {
        titulo: 'Línea Elevada: del Metro al oriente profundo',
        paradas: [
          { estacion: 'Constitución de 1917', actividad: 'Transbordo desde Metro Línea 8 o Línea A', duracion: '5 min' },
          { estacion: 'Santa Martha', actividad: 'Conexión con transporte local a zona oriente', duracion: '10 min' },
          { estacion: 'Chalco', actividad: 'Terminal oriente, acceso a Valle de Chalco', duracion: '10 min' }
        ]
      },
      seo_title: 'Trolebús Elevado L11 — Constitución de 1917 a Chalco | MetroGuia',
      meta_description: 'Línea 11 Elevada del Trolebús CDMX: 15 estaciones sobre vía elevada desde Constitución de 1917 hasta Chalco. Inaugurada 2025, primera línea elevada de trolebús en Latinoamérica.',
      h1: 'Trolebús Elevado Línea 11 — Guía completa'
    }
  },
  // Flat array for search - only main connection stations and L11 Elevado stations
  estaciones: [
    // L1 main stops
    { slug: 'bellas-artes-tb', nombre: 'Bellas Artes (Trolebús)', linea: 'TB-1', sistema: 'trolebus', alcaldia: 'Cuauhtémoc', lat: 19.4353, lng: -99.1413, conexiones_metro: ['bellas-artes'], descripcion_turistica: 'Parada de trolebús frente al Palacio de Bellas Artes.' },
    { slug: 'eje-central-chabacano-tb', nombre: 'Chabacano (Trolebús)', linea: 'TB-1', sistema: 'trolebus', alcaldia: 'Cuauhtémoc', lat: 19.4115, lng: -99.1413, conexiones_metro: ['chabacano'], descripcion_turistica: 'Conexión con Metro L1, L2, L8 y L9 en Chabacano.' },
    // L4 main
    { slug: 'san-lazaro-tb', nombre: 'San Lázaro (Trolebús)', linea: 'TB-4', sistema: 'trolebus', alcaldia: 'Venustiano Carranza', lat: 19.4269, lng: -99.1118, conexiones_metro: ['san-lazaro'], descripcion_turistica: 'Parada junto a la estación San Lázaro del Metro.' },
    // L7 main
    { slug: 'cu-tb', nombre: 'Ciudad Universitaria (Trolebús)', linea: 'TB-7', sistema: 'trolebus', alcaldia: 'Coyoacán', lat: 19.3293, lng: -99.1876, conexiones_metro: ['universidad'], descripcion_turistica: 'Acceso a Ciudad Universitaria (UNAM), Patrimonio de la Humanidad.' },
    // L10 main
    { slug: 'pantitlan-tb', nombre: 'Pantitlán (Trolebús)', linea: 'TB-10', sistema: 'trolebus', alcaldia: 'Iztacalco', lat: 19.4153, lng: -99.0741, conexiones_metro: ['pantitlan'], descripcion_turistica: 'Conexión con Metro L1, L5, L9, LA en la mega estación Pantitlán.' },
    // L11 Elevada - ALL stations
    { slug: 'constitucion-1917-tb11', nombre: 'Constitución de 1917', linea: 'TB-11', sistema: 'trolebus', alcaldia: 'Iztapalapa', lat: 19.3603, lng: -99.0118, conexiones_metro: ['constitucion-de-1917'], descripcion_turistica: 'Terminal poniente de la Línea 11 Elevada. Conexión con Metro L8 y Línea A.' },
    { slug: 'santa-maria-aztahuacan-tb', nombre: 'Santa María Aztahuacán', linea: 'TB-11', sistema: 'trolebus', alcaldia: 'Iztapalapa', lat: 19.3540, lng: -99.0020, conexiones_metro: [], descripcion_turistica: 'Primera estación elevada, zona residencial de Iztapalapa.' },
    { slug: 'santa-cruz-meyehualco-tb11', nombre: 'Santa Cruz Meyehualco', linea: 'TB-11', sistema: 'trolebus', alcaldia: 'Iztapalapa', lat: 19.3480, lng: -98.9930, conexiones_metro: [], descripcion_turistica: 'Zona de Santa Cruz Meyehualco, mercados locales.' },
    { slug: 'penon-viejo-tb', nombre: 'Peñón Viejo', linea: 'TB-11', sistema: 'trolebus', alcaldia: 'Iztapalapa', lat: 19.3620, lng: -98.9844, conexiones_metro: [], descripcion_turistica: 'Cerca de la zona del Peñón, con vistas panorámicas desde la vía elevada.' },
    { slug: 'la-calma-tb', nombre: 'La Calma', linea: 'TB-11', sistema: 'trolebus', alcaldia: 'Iztapalapa', lat: 19.3560, lng: -98.9750, conexiones_metro: [], descripcion_turistica: 'Estación elevada en zona habitacional.' },
    { slug: 'santa-martha-tb', nombre: 'Santa Martha', linea: 'TB-11', sistema: 'trolebus', alcaldia: 'Iztapalapa', lat: 19.3530, lng: -98.9580, conexiones_metro: [], descripcion_turistica: 'Nodo importante del oriente. Conexión con rutas de transporte local.' },
    { slug: 'la-concordia-tb', nombre: 'La Concordia', linea: 'TB-11', sistema: 'trolebus', alcaldia: 'Iztapalapa', lat: 19.3470, lng: -98.9480, conexiones_metro: [], descripcion_turistica: 'Estación en la zona limítrofe entre CDMX y Estado de México.' },
    { slug: 'los-reyes-tb', nombre: 'Los Reyes', linea: 'TB-11', sistema: 'trolebus', alcaldia: 'La Paz', lat: 19.3620, lng: -98.9390, conexiones_metro: [], descripcion_turistica: 'Los Reyes La Paz, municipio del Estado de México.' },
    { slug: 'tecamachalco-tb', nombre: 'Tecamachalco', linea: 'TB-11', sistema: 'trolebus', alcaldia: 'Valle de Chalco', lat: 19.3550, lng: -98.9280, conexiones_metro: [], descripcion_turistica: 'Acceso a Valle de Chalco Solidaridad.' },
    { slug: 'san-isidro-tb', nombre: 'San Isidro', linea: 'TB-11', sistema: 'trolebus', alcaldia: 'Valle de Chalco', lat: 19.3480, lng: -98.9170, conexiones_metro: [], descripcion_turistica: 'Zona residencial de Valle de Chalco.' },
    { slug: 'la-magdalena-tb', nombre: 'La Magdalena', linea: 'TB-11', sistema: 'trolebus', alcaldia: 'Valle de Chalco', lat: 19.3410, lng: -98.9060, conexiones_metro: [], descripcion_turistica: 'Estación elevada en Valle de Chalco.' },
    { slug: 'san-martin-tb', nombre: 'San Martín', linea: 'TB-11', sistema: 'trolebus', alcaldia: 'Chalco', lat: 19.3340, lng: -98.8950, conexiones_metro: [], descripcion_turistica: 'Entrada al municipio de Chalco.' },
    { slug: 'san-juan-tlalpizahuac-tb', nombre: 'San Juan Tlalpizahuac', linea: 'TB-11', sistema: 'trolebus', alcaldia: 'Chalco', lat: 19.3270, lng: -98.8840, conexiones_metro: [], descripcion_turistica: 'Zona de San Juan Tlalpizahuac en Chalco.' },
    { slug: 'san-lucas-amalinalco-tb', nombre: 'San Lucas Amalinalco', linea: 'TB-11', sistema: 'trolebus', alcaldia: 'Chalco', lat: 19.3200, lng: -98.8730, conexiones_metro: [], descripcion_turistica: 'Penúltima estación antes de la terminal Chalco.' },
    { slug: 'chalco-tb', nombre: 'Chalco', linea: 'TB-11', sistema: 'trolebus', alcaldia: 'Chalco', lat: 19.2618, lng: -98.8977, conexiones_metro: [], descripcion_turistica: 'Terminal oriente de la Línea 11 Elevada. Centro de Chalco, Estado de México.' }
  ]
};
