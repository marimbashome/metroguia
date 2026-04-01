/**
 * Grafo de transporte público de Guadalajara (GDL) para MetroGuia.mx
 * Sistema SITEUR: Tren Ligero (L1, L2, L3, L4) + Mi Macro Calzada (MC) + Mi Macro Periférico (MP)
 * 
 * 125 nodos totales
 * L1: 20 estaciones | L2: 10 estaciones | L3: 18 estaciones | L4: 8 estaciones
 * Mi Macro Calzada: 27 estaciones | Mi Macro Periférico: 42 estaciones (circular)
 * 
 * Estructura de nodo:
 * {
 *   ciudad: 'gdl',
 *   nombre: string,
 *   lineas: string[],
 *   adyacentes: [{ slug, tiempo (minutos), linea, tipo ('tren-ligero' | 'brt' | 'transbordo') }]
 * }
 */

export const grafoGDL = {
  // ============================================
  // LÍNEA 1 (Roja) - 20 estaciones
  // ============================================
  'gdl-auditorio': {
    ciudad: 'gdl',
    nombre: 'Auditorio',
    lineas: ['1'],
    adyacentes: [
      { slug: 'periferico-norte', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
    ]
  },
  'periferico-norte': {
    ciudad: 'gdl',
    nombre: 'Periférico Norte',
    lineas: ['1', 'MP'],
    adyacentes: [
      { slug: 'gdl-auditorio', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
      { slug: 'dermatologico', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
      { slug: 'periferico-norte-mp', tiempo: 5, linea: 'MP', tipo: 'transbordo' },
    ]
  },
  'dermatologico': {
    ciudad: 'gdl',
    nombre: 'Dermatológico',
    lineas: ['1'],
    adyacentes: [
      { slug: 'periferico-norte', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
      { slug: 'atemajac', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
    ]
  },
  'atemajac': {
    ciudad: 'gdl',
    nombre: 'Atemajac',
    lineas: ['1'],
    adyacentes: [
      { slug: 'dermatologico', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
      { slug: 'gdl-division-del-norte', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
    ]
  },
  'gdl-division-del-norte': {
    ciudad: 'gdl',
    nombre: 'División del Norte',
    lineas: ['1'],
    adyacentes: [
      { slug: 'atemajac', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
      { slug: 'avila-camacho', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
    ]
  },
  'avila-camacho': {
    ciudad: 'gdl',
    nombre: 'Ávila Camacho',
    lineas: ['1', '3'],
    adyacentes: [
      { slug: 'gdl-division-del-norte', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
      { slug: 'mezquitan', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
      { slug: 'avila-camacho-l3', tiempo: 5, linea: '3', tipo: 'transbordo' },
    ]
  },
  'mezquitan': {
    ciudad: 'gdl',
    nombre: 'Mezquitán',
    lineas: ['1'],
    adyacentes: [
      { slug: 'avila-camacho', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
      { slug: 'refugio', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
    ]
  },
  'refugio': {
    ciudad: 'gdl',
    nombre: 'Refugio',
    lineas: ['1'],
    adyacentes: [
      { slug: 'mezquitan', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
      { slug: 'gdl-juarez', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
    ]
  },
  'gdl-juarez': {
    ciudad: 'gdl',
    nombre: 'Juárez',
    lineas: ['1', '2'],
    adyacentes: [
      { slug: 'refugio', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
      { slug: 'gdl-mexicaltzingo', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
      { slug: 'juarez-l2', tiempo: 5, linea: '2', tipo: 'transbordo' },
    ]
  },
  'gdl-mexicaltzingo': {
    ciudad: 'gdl',
    nombre: 'Mexicaltzingo',
    lineas: ['1'],
    adyacentes: [
      { slug: 'gdl-juarez', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
      { slug: 'washington', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
    ]
  },
  'washington': {
    ciudad: 'gdl',
    nombre: 'Washington',
    lineas: ['1'],
    adyacentes: [
      { slug: 'gdl-mexicaltzingo', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
      { slug: 'santa-filomena', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
    ]
  },
  'santa-filomena': {
    ciudad: 'gdl',
    nombre: 'Santa Filomena',
    lineas: ['1'],
    adyacentes: [
      { slug: 'washington', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
      { slug: 'unidad-deportiva', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
    ]
  },
  'unidad-deportiva': {
    ciudad: 'gdl',
    nombre: 'Unidad Deportiva',
    lineas: ['1'],
    adyacentes: [
      { slug: 'santa-filomena', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
      { slug: 'urdaneta', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
    ]
  },
  'urdaneta': {
    ciudad: 'gdl',
    nombre: 'Urdaneta',
    lineas: ['1'],
    adyacentes: [
      { slug: 'unidad-deportiva', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
      { slug: '18-de-marzo', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
    ]
  },
  '18-de-marzo': {
    ciudad: 'gdl',
    nombre: '18 de Marzo',
    lineas: ['1'],
    adyacentes: [
      { slug: 'urdaneta', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
      { slug: 'isla-raza', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
    ]
  },
  'isla-raza': {
    ciudad: 'gdl',
    nombre: 'Isla Raza',
    lineas: ['1'],
    adyacentes: [
      { slug: '18-de-marzo', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
      { slug: 'patria', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
    ]
  },
  'patria': {
    ciudad: 'gdl',
    nombre: 'Patria',
    lineas: ['1'],
    adyacentes: [
      { slug: 'isla-raza', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
      { slug: 'espana', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
    ]
  },
  'espana': {
    ciudad: 'gdl',
    nombre: 'España',
    lineas: ['1'],
    adyacentes: [
      { slug: 'patria', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
      { slug: 'santuario-martires', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
    ]
  },
  'santuario-martires': {
    ciudad: 'gdl',
    nombre: 'Santuario Mártires',
    lineas: ['1'],
    adyacentes: [
      { slug: 'espana', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
      { slug: 'periferico-sur', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
    ]
  },
  'periferico-sur': {
    ciudad: 'gdl',
    nombre: 'Periférico Sur',
    lineas: ['1', 'MP'],
    adyacentes: [
      { slug: 'santuario-martires', tiempo: 2, linea: '1', tipo: 'tren-ligero' },
      { slug: 'periferico-sur-mp', tiempo: 5, linea: 'MP', tipo: 'transbordo' },
    ]
  },
  // ============================================
  // LÍNEA 2 (Verde) - 10 estaciones
  // ============================================
  'juarez-l2': {
    ciudad: 'gdl',
    nombre: 'Juárez',
    lineas: ['2', '1'],
    adyacentes: [
      { slug: 'plaza-universidad', tiempo: 3, linea: '2', tipo: 'tren-ligero' },
      { slug: 'gdl-juarez', tiempo: 5, linea: '1', tipo: 'transbordo' },
    ]
  },
  'plaza-universidad': {
    ciudad: 'gdl',
    nombre: 'Plaza Universidad',
    lineas: ['2', '3'],
    adyacentes: [
      { slug: 'juarez-l2', tiempo: 3, linea: '2', tipo: 'tren-ligero' },
      { slug: 'san-juan-de-dios', tiempo: 3, linea: '2', tipo: 'tren-ligero' },
      { slug: 'guadalajara-centro', tiempo: 7, linea: '3', tipo: 'transbordo' },
    ]
  },
  'san-juan-de-dios': {
    ciudad: 'gdl',
    nombre: 'San Juan de Dios',
    lineas: ['2', 'MC'],
    adyacentes: [
      { slug: 'plaza-universidad', tiempo: 3, linea: '2', tipo: 'tren-ligero' },
      { slug: 'belisario-dominguez', tiempo: 3, linea: '2', tipo: 'tren-ligero' },
      { slug: 'san-juan-de-dios-mc', tiempo: 5, linea: 'MC', tipo: 'transbordo' },
    ]
  },
  'belisario-dominguez': {
    ciudad: 'gdl',
    nombre: 'Belisario Domínguez',
    lineas: ['2'],
    adyacentes: [
      { slug: 'san-juan-de-dios', tiempo: 3, linea: '2', tipo: 'tren-ligero' },
      { slug: 'oblatos', tiempo: 3, linea: '2', tipo: 'tren-ligero' },
    ]
  },
  'oblatos': {
    ciudad: 'gdl',
    nombre: 'Oblatos',
    lineas: ['2'],
    adyacentes: [
      { slug: 'belisario-dominguez', tiempo: 3, linea: '2', tipo: 'tren-ligero' },
      { slug: 'cristobal-de-onate', tiempo: 3, linea: '2', tipo: 'tren-ligero' },
    ]
  },
  'cristobal-de-onate': {
    ciudad: 'gdl',
    nombre: 'Cristóbal de Oñate',
    lineas: ['2'],
    adyacentes: [
      { slug: 'oblatos', tiempo: 3, linea: '2', tipo: 'tren-ligero' },
      { slug: 'san-andres', tiempo: 3, linea: '2', tipo: 'tren-ligero' },
    ]
  },
  'san-andres': {
    ciudad: 'gdl',
    nombre: 'San Andrés',
    lineas: ['2'],
    adyacentes: [
      { slug: 'cristobal-de-onate', tiempo: 3, linea: '2', tipo: 'tren-ligero' },
      { slug: 'san-jacinto', tiempo: 3, linea: '2', tipo: 'tren-ligero' },
    ]
  },
  'san-jacinto': {
    ciudad: 'gdl',
    nombre: 'San Jacinto',
    lineas: ['2'],
    adyacentes: [
      { slug: 'san-andres', tiempo: 3, linea: '2', tipo: 'tren-ligero' },
      { slug: 'la-aurora', tiempo: 3, linea: '2', tipo: 'tren-ligero' },
    ]
  },
  'la-aurora': {
    ciudad: 'gdl',
    nombre: 'La Aurora',
    lineas: ['2'],
    adyacentes: [
      { slug: 'san-jacinto', tiempo: 3, linea: '2', tipo: 'tren-ligero' },
      { slug: 'tetlan', tiempo: 3, linea: '2', tipo: 'tren-ligero' },
    ]
  },
  'tetlan': {
    ciudad: 'gdl',
    nombre: 'Tetlán',
    lineas: ['2'],
    adyacentes: [
      { slug: 'la-aurora', tiempo: 3, linea: '2', tipo: 'tren-ligero' },
    ]
  },
  // ============================================
  // LÍNEA 3 (Rosa) - 18 estaciones
  // ============================================
  'arcos-de-zapopan': {
    ciudad: 'gdl',
    nombre: 'Arcos de Zapopan',
    lineas: ['3'],
    adyacentes: [
      { slug: 'periferico-belenes', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
    ]
  },
  'periferico-belenes': {
    ciudad: 'gdl',
    nombre: 'Periférico Belenes',
    lineas: ['3', 'MP'],
    adyacentes: [
      { slug: 'arcos-de-zapopan', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
      { slug: 'mercado-del-mar', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
      { slug: 'periferico-belenes-mp', tiempo: 5, linea: 'MP', tipo: 'transbordo' },
    ]
  },
  'mercado-del-mar': {
    ciudad: 'gdl',
    nombre: 'Mercado del Mar',
    lineas: ['3'],
    adyacentes: [
      { slug: 'periferico-belenes', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
      { slug: 'zapopan-centro', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
    ]
  },
  'zapopan-centro': {
    ciudad: 'gdl',
    nombre: 'Zapopan Centro',
    lineas: ['3'],
    adyacentes: [
      { slug: 'mercado-del-mar', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
      { slug: 'plaza-patria', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
    ]
  },
  'plaza-patria': {
    ciudad: 'gdl',
    nombre: 'Plaza Patria',
    lineas: ['3'],
    adyacentes: [
      { slug: 'zapopan-centro', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
      { slug: 'circunvalacion-country', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
    ]
  },
  'circunvalacion-country': {
    ciudad: 'gdl',
    nombre: 'Circunvalación Country',
    lineas: ['3'],
    adyacentes: [
      { slug: 'plaza-patria', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
      { slug: 'avila-camacho-l3', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
    ]
  },
  'avila-camacho-l3': {
    ciudad: 'gdl',
    nombre: 'Ávila Camacho',
    lineas: ['3', '1'],
    adyacentes: [
      { slug: 'circunvalacion-country', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
      { slug: 'la-normal', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
      { slug: 'avila-camacho', tiempo: 5, linea: '1', tipo: 'transbordo' },
    ]
  },
  'la-normal': {
    ciudad: 'gdl',
    nombre: 'La Normal',
    lineas: ['3'],
    adyacentes: [
      { slug: 'avila-camacho-l3', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
      { slug: 'santuario', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
    ]
  },
  'santuario': {
    ciudad: 'gdl',
    nombre: 'Santuario',
    lineas: ['3'],
    adyacentes: [
      { slug: 'la-normal', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
      { slug: 'guadalajara-centro', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
    ]
  },
  'guadalajara-centro': {
    ciudad: 'gdl',
    nombre: 'Guadalajara Centro',
    lineas: ['3', '2'],
    adyacentes: [
      { slug: 'santuario', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
      { slug: 'independencia-l3', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
      { slug: 'plaza-universidad', tiempo: 7, linea: '2', tipo: 'transbordo' },
    ]
  },
  'independencia-l3': {
    ciudad: 'gdl',
    nombre: 'Independencia',
    lineas: ['3', 'MC'],
    adyacentes: [
      { slug: 'guadalajara-centro', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
      { slug: 'plaza-de-la-bandera', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
      { slug: 'independencia-norte-mc', tiempo: 7, linea: 'MC', tipo: 'transbordo' },
    ]
  },
  'plaza-de-la-bandera': {
    ciudad: 'gdl',
    nombre: 'Plaza de la Bandera',
    lineas: ['3'],
    adyacentes: [
      { slug: 'independencia-l3', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
      { slug: 'cucei', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
    ]
  },
  'cucei': {
    ciudad: 'gdl',
    nombre: 'CUCEI',
    lineas: ['3'],
    adyacentes: [
      { slug: 'plaza-de-la-bandera', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
      { slug: 'gdl-revolucion', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
    ]
  },
  'gdl-revolucion': {
    ciudad: 'gdl',
    nombre: 'Revolución',
    lineas: ['3'],
    adyacentes: [
      { slug: 'cucei', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
      { slug: 'rio-nilo-l3', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
    ]
  },
  'rio-nilo-l3': {
    ciudad: 'gdl',
    nombre: 'Río Nilo',
    lineas: ['3'],
    adyacentes: [
      { slug: 'gdl-revolucion', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
      { slug: 'tlaquepaque-centro', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
    ]
  },
  'tlaquepaque-centro': {
    ciudad: 'gdl',
    nombre: 'Tlaquepaque Centro',
    lineas: ['3'],
    adyacentes: [
      { slug: 'rio-nilo-l3', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
      { slug: 'lazaro-cardenas-l3', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
    ]
  },
  'lazaro-cardenas-l3': {
    ciudad: 'gdl',
    nombre: 'Lázaro Cárdenas',
    lineas: ['3'],
    adyacentes: [
      { slug: 'tlaquepaque-centro', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
      { slug: 'central-de-autobuses', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
    ]
  },
  'central-de-autobuses': {
    ciudad: 'gdl',
    nombre: 'Central de Autobuses',
    lineas: ['3', '4'],
    adyacentes: [
      { slug: 'lazaro-cardenas-l3', tiempo: 2, linea: '3', tipo: 'tren-ligero' },
      { slug: 'las-juntas', tiempo: 8, linea: '4', tipo: 'transbordo' },
    ]
  },
  // ============================================
  // LÍNEA 4 (Naranja) - 8 estaciones
  // ============================================
  'las-juntas': {
    ciudad: 'gdl',
    nombre: 'Las Juntas',
    lineas: ['4', '3'],
    adyacentes: [
      { slug: 'jalisco-200', tiempo: 3, linea: '4', tipo: 'tren-ligero' },
      { slug: 'central-de-autobuses', tiempo: 8, linea: '3', tipo: 'transbordo' },
    ]
  },
  'jalisco-200': {
    ciudad: 'gdl',
    nombre: 'Jalisco 200',
    lineas: ['4'],
    adyacentes: [
      { slug: 'las-juntas', tiempo: 3, linea: '4', tipo: 'tren-ligero' },
      { slug: 'real-del-valle', tiempo: 3, linea: '4', tipo: 'tren-ligero' },
    ]
  },
  'real-del-valle': {
    ciudad: 'gdl',
    nombre: 'Real del Valle',
    lineas: ['4'],
    adyacentes: [
      { slug: 'jalisco-200', tiempo: 3, linea: '4', tipo: 'tren-ligero' },
      { slug: 'concepcion-del-valle', tiempo: 3, linea: '4', tipo: 'tren-ligero' },
    ]
  },
  'concepcion-del-valle': {
    ciudad: 'gdl',
    nombre: 'Concepción del Valle',
    lineas: ['4'],
    adyacentes: [
      { slug: 'real-del-valle', tiempo: 3, linea: '4', tipo: 'tren-ligero' },
      { slug: 'el-cuervo', tiempo: 3, linea: '4', tipo: 'tren-ligero' },
    ]
  },
  'el-cuervo': {
    ciudad: 'gdl',
    nombre: 'El Cuervo',
    lineas: ['4'],
    adyacentes: [
      { slug: 'concepcion-del-valle', tiempo: 3, linea: '4', tipo: 'tren-ligero' },
      { slug: 'lomas-del-sur', tiempo: 3, linea: '4', tipo: 'tren-ligero' },
    ]
  },
  'lomas-del-sur': {
    ciudad: 'gdl',
    nombre: 'Lomas del Sur',
    lineas: ['4'],
    adyacentes: [
      { slug: 'el-cuervo', tiempo: 3, linea: '4', tipo: 'tren-ligero' },
      { slug: 'cutlajo', tiempo: 3, linea: '4', tipo: 'tren-ligero' },
    ]
  },
  'cutlajo': {
    ciudad: 'gdl',
    nombre: 'Cutlajo',
    lineas: ['4'],
    adyacentes: [
      { slug: 'lomas-del-sur', tiempo: 3, linea: '4', tipo: 'tren-ligero' },
      { slug: 'tlajomulco-centro', tiempo: 3, linea: '4', tipo: 'tren-ligero' },
    ]
  },
  'tlajomulco-centro': {
    ciudad: 'gdl',
    nombre: 'Tlajomulco Centro',
    lineas: ['4'],
    adyacentes: [
      { slug: 'cutlajo', tiempo: 3, linea: '4', tipo: 'tren-ligero' },
    ]
  },
  // ============================================
  // MI MACRO CALZADA (Azul) - 27 estaciones
  // ============================================
  'mirador-mc': {
    ciudad: 'gdl',
    nombre: 'Mirador',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'huentitan-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
    ]
  },
  'huentitan-mc': {
    ciudad: 'gdl',
    nombre: 'Huentitán',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'mirador-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
      { slug: 'zoologico-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
    ]
  },
  'zoologico-mc': {
    ciudad: 'gdl',
    nombre: 'Zoológico',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'huentitan-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
      { slug: 'independencia-norte-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
    ]
  },
  'independencia-norte-mc': {
    ciudad: 'gdl',
    nombre: 'Independencia Norte',
    lineas: ['MC', '3'],
    adyacentes: [
      { slug: 'zoologico-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
      { slug: 'san-patricio-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
      { slug: 'independencia-l3', tiempo: 7, linea: '3', tipo: 'transbordo' },
    ]
  },
  'san-patricio-mc': {
    ciudad: 'gdl',
    nombre: 'San Patricio',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'independencia-norte-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
      { slug: 'igualdad-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
    ]
  },
  'igualdad-mc': {
    ciudad: 'gdl',
    nombre: 'Igualdad',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'san-patricio-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
      { slug: 'monumental-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
    ]
  },
  'monumental-mc': {
    ciudad: 'gdl',
    nombre: 'Monumental',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'igualdad-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
      { slug: 'monte-olivete-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
    ]
  },
  'monte-olivete-mc': {
    ciudad: 'gdl',
    nombre: 'Monte Olivete',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'monumental-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
      { slug: 'circunvalacion-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
    ]
  },
  'circunvalacion-mc': {
    ciudad: 'gdl',
    nombre: 'Circunvalación',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'monte-olivete-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
      { slug: 'ciencias-salud-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
    ]
  },
  'ciencias-salud-mc': {
    ciudad: 'gdl',
    nombre: 'Ciencias de la Salud',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'circunvalacion-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
      { slug: 'juan-alvarez-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
    ]
  },
  'juan-alvarez-mc': {
    ciudad: 'gdl',
    nombre: 'Juan Álvarez',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'ciencias-salud-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
      { slug: 'alameda-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
    ]
  },
  'alameda-mc': {
    ciudad: 'gdl',
    nombre: 'Alameda',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'juan-alvarez-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
      { slug: 'san-juan-de-dios-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
    ]
  },
  'san-juan-de-dios-mc': {
    ciudad: 'gdl',
    nombre: 'San Juan de Dios',
    lineas: ['MC', '2'],
    adyacentes: [
      { slug: 'alameda-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
      { slug: 'bicentenario-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
      { slug: 'san-juan-de-dios', tiempo: 5, linea: '2', tipo: 'transbordo' },
    ]
  },
  'bicentenario-mc': {
    ciudad: 'gdl',
    nombre: 'Bicentenario',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'san-juan-de-dios-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
      { slug: 'la-paz-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
    ]
  },
  'la-paz-mc': {
    ciudad: 'gdl',
    nombre: 'La Paz',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'bicentenario-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
      { slug: 'ninos-heroes-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
    ]
  },
  'ninos-heroes-mc': {
    ciudad: 'gdl',
    nombre: 'Niños Héroes',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'la-paz-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
      { slug: 'agua-azul-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
    ]
  },
  'agua-azul-mc': {
    ciudad: 'gdl',
    nombre: 'Agua Azul',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'ninos-heroes-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
      { slug: 'cipres-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
    ]
  },
  'cipres-mc': {
    ciudad: 'gdl',
    nombre: 'Ciprés',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'agua-azul-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
      { slug: 'heroes-nacozari-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
    ]
  },
  'heroes-nacozari-mc': {
    ciudad: 'gdl',
    nombre: 'Héroes de Nacozari',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'cipres-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
      { slug: 'lazaro-cardenas-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
    ]
  },
  'lazaro-cardenas-mc': {
    ciudad: 'gdl',
    nombre: 'Lázaro Cárdenas',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'heroes-nacozari-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
      { slug: 'el-dean-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
    ]
  },
  'el-dean-mc': {
    ciudad: 'gdl',
    nombre: 'El Deán',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'lazaro-cardenas-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
      { slug: 'zona-industrial-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
    ]
  },
  'zona-industrial-mc': {
    ciudad: 'gdl',
    nombre: 'Zona Industrial',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'el-dean-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
      { slug: 'lopez-de-legazpi-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
    ]
  },
  'lopez-de-legazpi-mc': {
    ciudad: 'gdl',
    nombre: 'López de Legazpi',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'zona-industrial-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
      { slug: 'clemente-orozco-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
    ]
  },
  'clemente-orozco-mc': {
    ciudad: 'gdl',
    nombre: 'Clemente Orozco',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'lopez-de-legazpi-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
      { slug: 'artes-plasticas-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
    ]
  },
  'artes-plasticas-mc': {
    ciudad: 'gdl',
    nombre: 'Artes Plásticas',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'clemente-orozco-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
      { slug: 'esculturas-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
    ]
  },
  'esculturas-mc': {
    ciudad: 'gdl',
    nombre: 'Esculturas',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'artes-plasticas-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
      { slug: 'fray-angelico-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
    ]
  },
  'fray-angelico-mc': {
    ciudad: 'gdl',
    nombre: 'Fray Angélico',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'esculturas-mc', tiempo: 2, linea: 'MC', tipo: 'brt' },
    ]
  },
  // ============================================
  // MI MACRO PERIFÉRICO (Morado) - 42 estaciones
  // ============================================
  'barranca-huentitan-mp': {
    ciudad: 'gdl',
    nombre: 'Barranca de Huentitán',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'zoologico-gdl-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'carretera-chapala-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'zoologico-gdl-mp': {
    ciudad: 'gdl',
    nombre: 'Zoológico GDL',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'barranca-huentitan-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'independencia-norte-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'independencia-norte-mp': {
    ciudad: 'gdl',
    nombre: 'Independencia Norte',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'zoologico-gdl-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'lomas-paraiso-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'lomas-paraiso-mp': {
    ciudad: 'gdl',
    nombre: 'Lomas Paraíso',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'independencia-norte-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'rancho-nuevo-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'rancho-nuevo-mp': {
    ciudad: 'gdl',
    nombre: 'Rancho Nuevo',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'lomas-paraiso-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'la-experiencia-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'la-experiencia-mp': {
    ciudad: 'gdl',
    nombre: 'La Experiencia',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'rancho-nuevo-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'el-batan-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'el-batan-mp': {
    ciudad: 'gdl',
    nombre: 'El Batán',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'la-experiencia-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'periferico-norte-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'periferico-norte-mp': {
    ciudad: 'gdl',
    nombre: 'Periférico Norte',
    lineas: ['MP', '1'],
    adyacentes: [
      { slug: 'el-batan-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'la-cantera-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'periferico-norte', tiempo: 5, linea: '1', tipo: 'transbordo' },
    ]
  },
  'la-cantera-mp': {
    ciudad: 'gdl',
    nombre: 'La Cantera',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'periferico-norte-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'tabachines-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'tabachines-mp': {
    ciudad: 'gdl',
    nombre: 'Tabachines',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'la-cantera-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'constitucion-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'constitucion-mp': {
    ciudad: 'gdl',
    nombre: 'Constitución',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'tabachines-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'centro-cultural-universitario-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'centro-cultural-universitario-mp': {
    ciudad: 'gdl',
    nombre: 'Centro Cultural Universitario',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'constitucion-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'san-isidro-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'san-isidro-mp': {
    ciudad: 'gdl',
    nombre: 'San Isidro',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'centro-cultural-universitario-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'periferico-belenes-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'periferico-belenes-mp': {
    ciudad: 'gdl',
    nombre: 'Periférico Belenes',
    lineas: ['MP', '3'],
    adyacentes: [
      { slug: 'san-isidro-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'tuzania-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'periferico-belenes', tiempo: 5, linea: '3', tipo: 'transbordo' },
    ]
  },
  'tuzania-mp': {
    ciudad: 'gdl',
    nombre: 'Tuzanía',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'periferico-belenes-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'santa-margarita-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'santa-margarita-mp': {
    ciudad: 'gdl',
    nombre: 'Santa Margarita',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'tuzania-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'acueducto-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'acueducto-mp': {
    ciudad: 'gdl',
    nombre: 'Acueducto',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'santa-margarita-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'cinco-de-mayo-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'cinco-de-mayo-mp': {
    ciudad: 'gdl',
    nombre: 'Cinco de Mayo',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'acueducto-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'san-juan-ocotan-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'san-juan-ocotan-mp': {
    ciudad: 'gdl',
    nombre: 'San Juan de Ocotán',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'cinco-de-mayo-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'vallarta-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'vallarta-mp': {
    ciudad: 'gdl',
    nombre: 'Vallarta',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'san-juan-ocotan-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'estadio-chivas-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'estadio-chivas-mp': {
    ciudad: 'gdl',
    nombre: 'Estadio Chivas',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'vallarta-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'ciudad-judicial-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'ciudad-judicial-mp': {
    ciudad: 'gdl',
    nombre: 'Ciudad Judicial',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'estadio-chivas-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'ciudad-granja-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'ciudad-granja-mp': {
    ciudad: 'gdl',
    nombre: 'Ciudad Granja',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'ciudad-judicial-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'parque-metropolitano-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'parque-metropolitano-mp': {
    ciudad: 'gdl',
    nombre: 'Parque Metropolitano',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'ciudad-granja-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'chapalita-inn-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'chapalita-inn-mp': {
    ciudad: 'gdl',
    nombre: 'Chapalita Inn',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'parque-metropolitano-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'el-colli-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'el-colli-mp': {
    ciudad: 'gdl',
    nombre: 'El Colli',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'chapalita-inn-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'felipe-ruvalcaba-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'felipe-ruvalcaba-mp': {
    ciudad: 'gdl',
    nombre: 'Felipe Ruvalcaba',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'el-colli-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'miramar-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'miramar-mp': {
    ciudad: 'gdl',
    nombre: 'Miramar',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'felipe-ruvalcaba-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'mariano-otero-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'mariano-otero-mp': {
    ciudad: 'gdl',
    nombre: 'Mariano Otero',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'miramar-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'el-briseno-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'el-briseno-mp': {
    ciudad: 'gdl',
    nombre: 'El Briseño',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'mariano-otero-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'agricola-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'agricola-mp': {
    ciudad: 'gdl',
    nombre: 'Agrícola',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'el-briseno-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'lopez-mateos-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'lopez-mateos-mp': {
    ciudad: 'gdl',
    nombre: 'López Mateos',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'agricola-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'iteso-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'iteso-mp': {
    ciudad: 'gdl',
    nombre: 'ITESO',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'lopez-mateos-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'terminal-sur-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'terminal-sur-mp': {
    ciudad: 'gdl',
    nombre: 'Terminal Sur',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'iteso-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'periferico-sur-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'periferico-sur-mp': {
    ciudad: 'gdl',
    nombre: 'Periférico Sur',
    lineas: ['MP', '1'],
    adyacentes: [
      { slug: 'terminal-sur-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'san-sebastianito-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'periferico-sur', tiempo: 5, linea: '1', tipo: 'transbordo' },
    ]
  },
  'san-sebastianito-mp': {
    ciudad: 'gdl',
    nombre: 'San Sebastianito',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'periferico-sur-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'ocho-de-julio-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'ocho-de-julio-mp': {
    ciudad: 'gdl',
    nombre: 'Ocho de Julio',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'san-sebastianito-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'toluquilla-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'toluquilla-mp': {
    ciudad: 'gdl',
    nombre: 'Toluquilla',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'ocho-de-julio-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'adolf-horn-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'adolf-horn-mp': {
    ciudad: 'gdl',
    nombre: 'Adolf Horn',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'toluquilla-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'artesanos-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'artesanos-mp': {
    ciudad: 'gdl',
    nombre: 'Artesanos',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'adolf-horn-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'las-pintas-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'las-pintas-mp': {
    ciudad: 'gdl',
    nombre: 'Las Pintas',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'artesanos-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'carretera-chapala-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
  'carretera-chapala-mp': {
    ciudad: 'gdl',
    nombre: 'Carretera a Chapala',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'las-pintas-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
      { slug: 'barranca-huentitan-mp', tiempo: 2, linea: 'MP', tipo: 'brt' },
    ]
  },
};
