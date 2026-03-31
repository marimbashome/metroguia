/**
 * Grafo de estaciones de metro para MetroGuia.mx
 * Sistema de pathfinding para CDMX, GDL y MTY
 * 
 * Estructura de nodo:
 * {
 *   ciudad: 'cdmx' | 'gdl' | 'mty',
 *   nombre: string,
 *   lineas: string[],
 *   adyacentes: [{ slug, tiempo (minutos), linea, tipo ('linea' | 'transbordo' | 'tren-ligero') }]
 * }
 */

export const grafo = {
  // ============================================
  // LÍNEA 1 (Rosa #E91E8C) - 18 estaciones
  // ============================================
  'observatorio': {
    ciudad: 'cdmx',
    nombre: 'Observatorio',
    lineas: ['1'],
    adyacentes: [
      { slug: 'tacubaya', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'terminal-poniente', tiempo: 3, linea: 'terminal', tipo: 'transbordo' }
    ]
  },
  'tacubaya': {
    ciudad: 'cdmx',
    nombre: 'Tacubaya',
    lineas: ['1', '7', '9'],
    adyacentes: [
      { slug: 'observatorio', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'juanacatlan', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'san-pedro-de-los-pinos', tiempo: 5, linea: '7', tipo: 'transbordo' },
      { slug: 'chilpancingo', tiempo: 5, linea: '9', tipo: 'transbordo' }
    ]
  },
  'juanacatlan': {
    ciudad: 'cdmx',
    nombre: 'Juanacatlán',
    lineas: ['1'],
    adyacentes: [
      { slug: 'tacubaya', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'chapultepec', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'chapultepec': {
    ciudad: 'cdmx',
    nombre: 'Chapultepec',
    lineas: ['1'],
    adyacentes: [
      { slug: 'juanacatlan', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'sevilla', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'sevilla': {
    ciudad: 'cdmx',
    nombre: 'Sevilla',
    lineas: ['1'],
    adyacentes: [
      { slug: 'chapultepec', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'insurgentes', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'insurgentes': {
    ciudad: 'cdmx',
    nombre: 'Insurgentes',
    lineas: ['1'],
    adyacentes: [
      { slug: 'sevilla', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'cuauhtemoc', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'balderas': {
    ciudad: 'cdmx',
    nombre: 'Balderas',
    lineas: ['1', '3'],
    adyacentes: [
      { slug: 'cuauhtemoc', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'salto-del-agua', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'niños-heroes', tiempo: 5, linea: '3', tipo: 'transbordo' }
    ]
  },
  'salto-del-agua': {
    ciudad: 'cdmx',
    nombre: 'Salto del Agua',
    lineas: ['1', '8'],
    adyacentes: [
      { slug: 'balderas', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'pino-suarez', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'san-juan-de-letran', tiempo: 5, linea: '8', tipo: 'transbordo' },
      { slug: 'doctores', tiempo: 2, linea: '8', tipo: 'linea' }
    ]
  },
  'pino-suarez': {
    ciudad: 'cdmx',
    nombre: 'Pino Suárez',
    lineas: ['1', '2'],
    adyacentes: [
      { slug: 'salto-del-agua', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'merced', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'san-antonio-abad', tiempo: 5, linea: '2', tipo: 'transbordo' }
    ]
  },
  'merced': {
    ciudad: 'cdmx',
    nombre: 'Merced',
    lineas: ['1'],
    adyacentes: [
      { slug: 'pino-suarez', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'candelaria', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'candelaria': {
    ciudad: 'cdmx',
    nombre: 'Candelaria',
    lineas: ['1', '4'],
    adyacentes: [
      { slug: 'merced', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'san-lazaro', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'fray-servando', tiempo: 5, linea: '4', tipo: 'transbordo' }
    ]
  },
  'san-lazaro': {
    ciudad: 'cdmx',
    nombre: 'San Lázaro',
    lineas: ['1', 'B'],
    adyacentes: [
      { slug: 'candelaria', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'morelos', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'ricardo-flores-magon', tiempo: 5, linea: 'B', tipo: 'transbordo' },
      { slug: 'terminal-tapo', tiempo: 3, linea: 'terminal', tipo: 'transbordo' }
    ]
  },
  'morelos': {
    ciudad: 'cdmx',
    nombre: 'Morelos',
    lineas: ['1', 'B'],
    adyacentes: [
      { slug: 'san-lazaro', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'santa-anita', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'garibaldi-lagunilla', tiempo: 5, linea: 'B', tipo: 'transbordo' }
    ]
  },
  'santa-anita': {
    ciudad: 'cdmx',
    nombre: 'Santa Anita',
    lineas: ['1', '4', '8'],
    adyacentes: [
      { slug: 'morelos', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'peñon-viejo', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'jamaica', tiempo: 5, linea: '4', tipo: 'transbordo' },
      { slug: 'coyuya', tiempo: 5, linea: '8', tipo: 'transbordo' }
    ]
  },
  'peñon-viejo': {
    ciudad: 'cdmx',
    nombre: 'Peñón Viejo',
    lineas: ['1', 'A'],
    adyacentes: [
      { slug: 'santa-anita', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'zaragoza', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'acatitla', tiempo: 5, linea: 'A', tipo: 'transbordo' }
    ]
  },
  'zaragoza': {
    ciudad: 'cdmx',
    nombre: 'Zaragoza',
    lineas: ['1'],
    adyacentes: [
      { slug: 'peñon-viejo', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'pantitlan', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'pantitlan': {
    ciudad: 'cdmx',
    nombre: 'Pantitlán',
    lineas: ['1', '5', '9', 'A'],
    adyacentes: [
      { slug: 'zaragoza', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'hangares', tiempo: 5, linea: '5', tipo: 'transbordo' },
      { slug: 'puebla', tiempo: 5, linea: '9', tipo: 'transbordo' },
      { slug: 'agricola-oriental', tiempo: 5, linea: 'A', tipo: 'transbordo' }
    ]
  },
  // ============================================
  // LÍNEA 2 (Azul #0057A8) - 24 estaciones
  // ============================================
  'cuatro-caminos': {
    ciudad: 'cdmx',
    nombre: 'Cuatro Caminos',
    lineas: ['2'],
    adyacentes: [
      { slug: 'camarones', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'camarones': {
    ciudad: 'cdmx',
    nombre: 'Camarones',
    lineas: ['2', '7'],
    adyacentes: [
      { slug: 'cuatro-caminos', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'refineria', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'aquiles-serdan', tiempo: 5, linea: '7', tipo: 'transbordo' }
    ]
  },
  'refineria': {
    ciudad: 'cdmx',
    nombre: 'Refinería',
    lineas: ['2', '7'],
    adyacentes: [
      { slug: 'camarones', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'tacuba', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'tacuba', tiempo: 5, linea: '7', tipo: 'transbordo' }
    ]
  },
  'tacuba': {
    ciudad: 'cdmx',
    nombre: 'Tacuba',
    lineas: ['2', '7'],
    adyacentes: [
      { slug: 'refineria', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'panteones', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'san-joaquin', tiempo: 5, linea: '7', tipo: 'transbordo' }
    ]
  },
  'panteones': {
    ciudad: 'cdmx',
    nombre: 'Panteones',
    lineas: ['2'],
    adyacentes: [
      { slug: 'tacuba', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'cuitlahuac', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'cuitlahuac': {
    ciudad: 'cdmx',
    nombre: 'Cuitláhuac',
    lineas: ['2'],
    adyacentes: [
      { slug: 'panteones', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'popotla', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'popotla': {
    ciudad: 'cdmx',
    nombre: 'Popotla',
    lineas: ['2'],
    adyacentes: [
      { slug: 'cuitlahuac', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'colegio-militar', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'colegio-militar': {
    ciudad: 'cdmx',
    nombre: 'Colegio Militar',
    lineas: ['2'],
    adyacentes: [
      { slug: 'popotla', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'normal', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'normal': {
    ciudad: 'cdmx',
    nombre: 'Normal',
    lineas: ['2'],
    adyacentes: [
      { slug: 'colegio-militar', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'san-cosme', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'san-cosme': {
    ciudad: 'cdmx',
    nombre: 'San Cosme',
    lineas: ['2'],
    adyacentes: [
      { slug: 'normal', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'revolucion', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'revolucion': {
    ciudad: 'cdmx',
    nombre: 'Revolución',
    lineas: ['2'],
    adyacentes: [
      { slug: 'san-cosme', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'hidalgo', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'hidalgo': {
    ciudad: 'cdmx',
    nombre: 'Hidalgo',
    lineas: ['2', '3'],
    adyacentes: [
      { slug: 'revolucion', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'bellas-artes', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'juarez', tiempo: 5, linea: '3', tipo: 'transbordo' }
    ]
  },
  'bellas-artes': {
    ciudad: 'cdmx',
    nombre: 'Bellas Artes',
    lineas: ['2', '8'],
    adyacentes: [
      { slug: 'hidalgo', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'allende', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'garibaldi', tiempo: 5, linea: '8', tipo: 'transbordo' }
    ]
  },
  'allende': {
    ciudad: 'cdmx',
    nombre: 'Allende',
    lineas: ['2'],
    adyacentes: [
      { slug: 'bellas-artes', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'zocalo', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'zocalo': {
    ciudad: 'cdmx',
    nombre: 'Zócalo',
    lineas: ['2'],
    adyacentes: [
      { slug: 'allende', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'pino-suarez', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'san-antonio-abad': {
    ciudad: 'cdmx',
    nombre: 'San Antonio Abad',
    lineas: ['2'],
    adyacentes: [
      { slug: 'pino-suarez', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'chabacano', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'chabacano': {
    ciudad: 'cdmx',
    nombre: 'Chabacano',
    lineas: ['2', '8', '9'],
    adyacentes: [
      { slug: 'san-antonio-abad', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'viga', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'la-viga', tiempo: 5, linea: '8', tipo: 'transbordo' },
      { slug: 'lazaro-cardenas', tiempo: 5, linea: '9', tipo: 'transbordo' },
      { slug: 'obrera', tiempo: 2, linea: '8', tipo: 'linea' }
    ]
  },
  'viga': {
    ciudad: 'cdmx',
    nombre: 'Viga',
    lineas: ['2'],
    adyacentes: [
      { slug: 'chabacano', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'xola', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'xola': {
    ciudad: 'cdmx',
    nombre: 'Xola',
    lineas: ['2'],
    adyacentes: [
      { slug: 'viga', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'villa-de-cortes', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'villa-de-cortes': {
    ciudad: 'cdmx',
    nombre: 'Villa de Cortés',
    lineas: ['2'],
    adyacentes: [
      { slug: 'xola', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'nativitas', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'nativitas': {
    ciudad: 'cdmx',
    nombre: 'Nativitas',
    lineas: ['2'],
    adyacentes: [
      { slug: 'villa-de-cortes', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'portales', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'portales': {
    ciudad: 'cdmx',
    nombre: 'Portales',
    lineas: ['2'],
    adyacentes: [
      { slug: 'nativitas', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'taxquena', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'taxquena': {
    ciudad: 'cdmx',
    nombre: 'Tasqueña',
    lineas: ['2', 'TL'],
    adyacentes: [
      { slug: 'portales', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'tren-ligero-estadio-azteca', tiempo: 25, linea: 'TL', tipo: 'tren-ligero' },
      { slug: 'xochimilco', tiempo: 35, linea: 'TL', tipo: 'tren-ligero' },
      { slug: 'tasquena', tiempo: 0, linea: '2', tipo: 'transbordo' },
      { slug: 'tasquena-tl', tiempo: 5, linea: 'TL', tipo: 'transbordo' },
      { slug: 'terminal-sur', tiempo: 3, linea: 'terminal', tipo: 'transbordo' }
    ]
  },
  // ============================================
  // LÍNEA 3 (Verde #6B7A2A) - 21 estaciones
  // ============================================
  'indios-verdes': {
    ciudad: 'cdmx',
    nombre: 'Indios Verdes',
    lineas: ['3', 'MCV'],
    adyacentes: [
      { slug: 'deportivo-18-de-marzo', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'mexicable-indios-verdes', tiempo: 5, linea: 'MCV', tipo: 'transbordo' },
      { slug: 'mb-indios-verdes', tiempo: 5, linea: 'MB-1', tipo: 'transbordo' },
      { slug: 'cb-indios-verdes', tiempo: 5, linea: 'CB-1', tipo: 'transbordo' }
    ]
  },
  'deportivo-18-de-marzo': {
    ciudad: 'cdmx',
    nombre: 'Deportivo 18 de Marzo',
    lineas: ['3', '6'],
    adyacentes: [
      { slug: 'indios-verdes', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'potrero', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'potrero', tiempo: 5, linea: '6', tipo: 'transbordo' }
    ]
  },
  'potrero': {
    ciudad: 'cdmx',
    nombre: 'Potrero',
    lineas: ['3', '6'],
    adyacentes: [
      { slug: 'deportivo-18-de-marzo', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'la-raza', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'la-villa-basilica', tiempo: 5, linea: '6', tipo: 'transbordo' }
    ]
  },
  'la-raza': {
    ciudad: 'cdmx',
    nombre: 'La Raza',
    lineas: ['3', '5', '6'],
    adyacentes: [
      { slug: 'potrero', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'tlatelolco', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'eduardo-molina', tiempo: 5, linea: '5', tipo: 'transbordo' },
      { slug: 'martin-carrera', tiempo: 5, linea: '6', tipo: 'transbordo' }
    ]
  },
  'tlatelolco': {
    ciudad: 'cdmx',
    nombre: 'Tlatelolco',
    lineas: ['3'],
    adyacentes: [
      { slug: 'la-raza', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'guerrero', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'guerrero': {
    ciudad: 'cdmx',
    nombre: 'Guerrero',
    lineas: ['3', 'B'],
    adyacentes: [
      { slug: 'tlatelolco', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'hidalgo', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'garibaldi-lagunilla', tiempo: 5, linea: 'B', tipo: 'transbordo' },
      { slug: 'buenavista', tiempo: 3, linea: 'B', tipo: 'linea' }
    ]
  },
  'juarez': {
    ciudad: 'cdmx',
    nombre: 'Juárez',
    lineas: ['3'],
    adyacentes: [
      { slug: 'hidalgo', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'balderas', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'niños-heroes': {
    ciudad: 'cdmx',
    nombre: 'Niños Héroes',
    lineas: ['3'],
    adyacentes: [
      { slug: 'balderas', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'hospital-general', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'centro-medico': {
    ciudad: 'cdmx',
    nombre: 'Centro Médico',
    lineas: ['3', '9'],
    adyacentes: [
      { slug: 'hospital-general', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'etiopia-plaza-de-la-transparencia', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'chilpancingo', tiempo: 5, linea: '9', tipo: 'transbordo' }
    ]
  },
  'etiopia-plaza-de-la-transparencia': {
    ciudad: 'cdmx',
    nombre: 'Etiopía / Plaza de la Transparencia',
    lineas: ['3'],
    adyacentes: [
      { slug: 'centro-medico', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'eugenia', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'eugenia': {
    ciudad: 'cdmx',
    nombre: 'Eugenia',
    lineas: ['3'],
    adyacentes: [
      { slug: 'etiopia-plaza-de-la-transparencia', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'division-del-norte', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'division-del-norte': {
    ciudad: 'cdmx',
    nombre: 'División del Norte',
    lineas: ['3'],
    adyacentes: [
      { slug: 'eugenia', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'zapata', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'zapata': {
    ciudad: 'cdmx',
    nombre: 'Zapata',
    lineas: ['3', '12'],
    adyacentes: [
      { slug: 'division-del-norte', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'coyoacan', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'parque-de-los-venados', tiempo: 5, linea: '12', tipo: 'transbordo' }
    ]
  },
  'coyoacan': {
    ciudad: 'cdmx',
    nombre: 'Coyoacán',
    lineas: ['3'],
    adyacentes: [
      { slug: 'zapata', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'viveros-derechos-humanos', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'viveros-derechos-humanos': {
    ciudad: 'cdmx',
    nombre: 'Viveros / Derechos Humanos',
    lineas: ['3'],
    adyacentes: [
      { slug: 'coyoacan', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'miguel-angel-de-quevedo', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'miguel-angel-de-quevedo': {
    ciudad: 'cdmx',
    nombre: 'Miguel Ángel de Quevedo',
    lineas: ['3'],
    adyacentes: [
      { slug: 'viveros-derechos-humanos', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'copilco', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'copilco': {
    ciudad: 'cdmx',
    nombre: 'Copilco',
    lineas: ['3'],
    adyacentes: [
      { slug: 'miguel-angel-de-quevedo', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'universidad', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'universidad': {
    ciudad: 'cdmx',
    nombre: 'Universidad',
    lineas: ['3'],
    adyacentes: [
      { slug: 'copilco', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  // ============================================
  // LÍNEA 4 (Celeste #00B5C8) - 9 estaciones
  // ============================================
  'martin-carrera': {
    ciudad: 'cdmx',
    nombre: 'Martín Carrera',
    lineas: ['4', '5', '6'],
    adyacentes: [
      { slug: 'talisman', tiempo: 2, linea: '4', tipo: 'linea' },
      { slug: 'la-raza', tiempo: 5, linea: '6', tipo: 'transbordo' },
      { slug: 'misterios', tiempo: 5, linea: '5', tipo: 'transbordo' }
    ]
  },
  'talisman': {
    ciudad: 'cdmx',
    nombre: 'Talismán',
    lineas: ['4'],
    adyacentes: [
      { slug: 'martin-carrera', tiempo: 2, linea: '4', tipo: 'linea' },
      { slug: 'bondojito', tiempo: 2, linea: '4', tipo: 'linea' }
    ]
  },
  'bondojito': {
    ciudad: 'cdmx',
    nombre: 'Bondojito',
    lineas: ['4'],
    adyacentes: [
      { slug: 'talisman', tiempo: 2, linea: '4', tipo: 'linea' },
      { slug: 'consulado', tiempo: 2, linea: '4', tipo: 'linea' }
    ]
  },
  'consulado': {
    ciudad: 'cdmx',
    nombre: 'Consulado',
    lineas: ['4', '5'],
    adyacentes: [
      { slug: 'bondojito', tiempo: 2, linea: '4', tipo: 'linea' },
      { slug: 'canal-del-norte', tiempo: 2, linea: '4', tipo: 'linea' },
      { slug: 'canal-del-norte', tiempo: 5, linea: '5', tipo: 'transbordo' }
    ]
  },
  'canal-del-norte': {
    ciudad: 'cdmx',
    nombre: 'Canal del Norte',
    lineas: ['4', '5'],
    adyacentes: [
      { slug: 'consulado', tiempo: 2, linea: '4', tipo: 'linea' },
      { slug: 'candelaria', tiempo: 2, linea: '4', tipo: 'linea' },
      { slug: 'misterios', tiempo: 5, linea: '5', tipo: 'transbordo' },
      { slug: 'terminal-norte', tiempo: 10, linea: 'terminal', tipo: 'transbordo' }
    ]
  },
  'fray-servando': {
    ciudad: 'cdmx',
    nombre: 'Fray Servando',
    lineas: ['4'],
    adyacentes: [
      { slug: 'candelaria', tiempo: 2, linea: '4', tipo: 'linea' },
      { slug: 'jamaica', tiempo: 2, linea: '4', tipo: 'linea' }
    ]
  },
  'jamaica': {
    ciudad: 'cdmx',
    nombre: 'Jamaica',
    lineas: ['4', '9'],
    adyacentes: [
      { slug: 'fray-servando', tiempo: 2, linea: '4', tipo: 'linea' },
      { slug: 'santa-anita', tiempo: 2, linea: '4', tipo: 'linea' },
      { slug: 'ciudad-deportiva', tiempo: 5, linea: '9', tipo: 'transbordo' }
    ]
  },
  // ============================================
  // LÍNEA 5 (Amarillo #FFCD00) - 11 estaciones
  // ============================================
  'hangares': {
    ciudad: 'cdmx',
    nombre: 'Hangares',
    lineas: ['5'],
    adyacentes: [
      { slug: 'pantitlan', tiempo: 2, linea: '5', tipo: 'linea' },
      { slug: 'terminal-aerea', tiempo: 2, linea: '5', tipo: 'linea' }
    ]
  },
  'terminal-aerea': {
    ciudad: 'cdmx',
    nombre: 'Terminal Aérea',
    lineas: ['5'],
    adyacentes: [
      { slug: 'hangares', tiempo: 2, linea: '5', tipo: 'linea' },
      { slug: 'oceania', tiempo: 2, linea: '5', tipo: 'linea' },
      { slug: 'aeropuerto', tiempo: 2, linea: '5', tipo: 'linea' },
      { slug: 'aeropuerto-cdmx', tiempo: 5, linea: 'aeropuerto', tipo: 'transbordo' }
    ]
  },
  'oceania': {
    ciudad: 'cdmx',
    nombre: 'Oceanía',
    lineas: ['5', 'B'],
    adyacentes: [
      { slug: 'terminal-aerea', tiempo: 2, linea: '5', tipo: 'linea' },
      { slug: 'aragon', tiempo: 2, linea: '5', tipo: 'linea' },
      { slug: 'deportivo-oceania', tiempo: 5, linea: 'B', tipo: 'transbordo' }
    ]
  },
  'aragon': {
    ciudad: 'cdmx',
    nombre: 'Aragón',
    lineas: ['5'],
    adyacentes: [
      { slug: 'oceania', tiempo: 2, linea: '5', tipo: 'linea' },
      { slug: 'eduardo-molina', tiempo: 2, linea: '5', tipo: 'linea' }
    ]
  },
  'eduardo-molina': {
    ciudad: 'cdmx',
    nombre: 'Eduardo Molina',
    lineas: ['5'],
    adyacentes: [
      { slug: 'aragon', tiempo: 2, linea: '5', tipo: 'linea' },
      { slug: 'consulado', tiempo: 2, linea: '5', tipo: 'linea' }
    ]
  },
  'misterios': {
    ciudad: 'cdmx',
    nombre: 'Misterios',
    lineas: ['5'],
    adyacentes: [
      { slug: 'canal-del-norte', tiempo: 2, linea: '5', tipo: 'linea' },
      { slug: 'valle-gómez', tiempo: 2, linea: '5', tipo: 'linea' }
    ]
  },
  'valle-gómez': {
    ciudad: 'cdmx',
    nombre: 'Valle Gómez',
    lineas: ['5'],
    adyacentes: [
      { slug: 'misterios', tiempo: 2, linea: '5', tipo: 'linea' },
      { slug: 'martin-carrera', tiempo: 2, linea: '5', tipo: 'linea' }
    ]
  },
  // ============================================
  // LÍNEA 6 (Rojo #DA291C) - 13 estaciones
  // ============================================
  'el-rosario': {
    ciudad: 'cdmx',
    nombre: 'El Rosario',
    lineas: ['6', '7'],
    adyacentes: [
      { slug: 'tezozomoc', tiempo: 2, linea: '6', tipo: 'linea' },
      { slug: 'aquiles-serdan', tiempo: 5, linea: '7', tipo: 'transbordo' }
    ]
  },
  'tezozomoc': {
    ciudad: 'cdmx',
    nombre: 'Tezozómoc',
    lineas: ['6'],
    adyacentes: [
      { slug: 'el-rosario', tiempo: 2, linea: '6', tipo: 'linea' },
      { slug: 'azcapotzalco', tiempo: 2, linea: '6', tipo: 'linea' }
    ]
  },
  'azcapotzalco': {
    ciudad: 'cdmx',
    nombre: 'Azcapotzalco',
    lineas: ['6'],
    adyacentes: [
      { slug: 'tezozomoc', tiempo: 2, linea: '6', tipo: 'linea' },
      { slug: 'ferreria', tiempo: 2, linea: '6', tipo: 'linea' }
    ]
  },
  'ferreria': {
    ciudad: 'cdmx',
    nombre: 'Ferrería',
    lineas: ['6'],
    adyacentes: [
      { slug: 'azcapotzalco', tiempo: 2, linea: '6', tipo: 'linea' },
      { slug: 'norte-45', tiempo: 2, linea: '6', tipo: 'linea' }
    ]
  },
  'norte-45': {
    ciudad: 'cdmx',
    nombre: 'Norte 45',
    lineas: ['6'],
    adyacentes: [
      { slug: 'ferreria', tiempo: 2, linea: '6', tipo: 'linea' },
      { slug: 'vallejo', tiempo: 2, linea: '6', tipo: 'linea' }
    ]
  },
  'vallejo': {
    ciudad: 'cdmx',
    nombre: 'Vallejo',
    lineas: ['6'],
    adyacentes: [
      { slug: 'norte-45', tiempo: 2, linea: '6', tipo: 'linea' },
      { slug: 'instituto-del-petroleo', tiempo: 2, linea: '6', tipo: 'linea' }
    ]
  },
  'instituto-del-petroleo': {
    ciudad: 'cdmx',
    nombre: 'Instituto del Petróleo',
    lineas: ['6'],
    adyacentes: [
      { slug: 'vallejo', tiempo: 2, linea: '6', tipo: 'linea' },
      { slug: 'lindavista', tiempo: 2, linea: '6', tipo: 'linea' }
    ]
  },
  'lindavista': {
    ciudad: 'cdmx',
    nombre: 'Lindavista',
    lineas: ['6'],
    adyacentes: [
      { slug: 'instituto-del-petroleo', tiempo: 2, linea: '6', tipo: 'linea' },
      { slug: 'deportivo-18-de-marzo', tiempo: 2, linea: '6', tipo: 'linea' }
    ]
  },
  'la-villa-basilica': {
    ciudad: 'cdmx',
    nombre: 'La Villa Basílica',
    lineas: ['6'],
    adyacentes: [
      { slug: 'potrero', tiempo: 2, linea: '6', tipo: 'linea' },
      { slug: 'martin-carrera', tiempo: 2, linea: '6', tipo: 'linea' }
    ]
  },
  // ============================================
  // LÍNEA 7 (Naranja #F97316) - 14 estaciones
  // ============================================
  'aquiles-serdan': {
    ciudad: 'cdmx',
    nombre: 'Aquiles Serdán',
    lineas: ['7'],
    adyacentes: [
      { slug: 'el-rosario', tiempo: 2, linea: '7', tipo: 'linea' },
      { slug: 'camarones', tiempo: 2, linea: '7', tipo: 'linea' }
    ]
  },
  'san-joaquin': {
    ciudad: 'cdmx',
    nombre: 'San Joaquín',
    lineas: ['7'],
    adyacentes: [
      { slug: 'tacuba', tiempo: 2, linea: '7', tipo: 'linea' },
      { slug: 'polanco', tiempo: 2, linea: '7', tipo: 'linea' }
    ]
  },
  'polanco': {
    ciudad: 'cdmx',
    nombre: 'Polanco',
    lineas: ['7'],
    adyacentes: [
      { slug: 'san-joaquin', tiempo: 2, linea: '7', tipo: 'linea' },
      { slug: 'auditorio', tiempo: 2, linea: '7', tipo: 'linea' }
    ]
  },
  'auditorio': {
    ciudad: 'cdmx',
    nombre: 'Auditorio',
    lineas: ['7'],
    adyacentes: [
      { slug: 'polanco', tiempo: 2, linea: '7', tipo: 'linea' },
      { slug: 'constituyentes', tiempo: 2, linea: '7', tipo: 'linea' }
    ]
  },
  'san-pedro-de-los-pinos': {
    ciudad: 'cdmx',
    nombre: 'San Pedro de los Pinos',
    lineas: ['7'],
    adyacentes: [
      { slug: 'tacubaya', tiempo: 2, linea: '7', tipo: 'linea' },
      { slug: 'san-antonio', tiempo: 2, linea: '7', tipo: 'linea' }
    ]
  },
  'san-antonio': {
    ciudad: 'cdmx',
    nombre: 'San Antonio',
    lineas: ['7'],
    adyacentes: [
      { slug: 'san-pedro-de-los-pinos', tiempo: 2, linea: '7', tipo: 'linea' },
      { slug: 'mixcoac', tiempo: 2, linea: '7', tipo: 'linea' }
    ]
  },
  'mixcoac': {
    ciudad: 'cdmx',
    nombre: 'Mixcoac',
    lineas: ['7', '12'],
    adyacentes: [
      { slug: 'san-antonio', tiempo: 2, linea: '7', tipo: 'linea' },
      { slug: 'barranca-del-muerto', tiempo: 2, linea: '7', tipo: 'linea' },
      { slug: 'insurgentes-sur', tiempo: 5, linea: '12', tipo: 'transbordo' }
    ]
  },
  'barranca-del-muerto': {
    ciudad: 'cdmx',
    nombre: 'Barranca del Muerto',
    lineas: ['7'],
    adyacentes: [
      { slug: 'mixcoac', tiempo: 2, linea: '7', tipo: 'linea' }
    ]
  },
  // ============================================
  // LÍNEA 8 (Verde oscuro #00A650) - 19 estaciones
  // ============================================
  'garibaldi': {
    ciudad: 'cdmx',
    nombre: 'Garibaldi',
    lineas: ['8'],
    adyacentes: [
      { slug: 'bellas-artes', tiempo: 2, linea: '8', tipo: 'linea' },
      { slug: 'san-juan-de-letran', tiempo: 2, linea: '8', tipo: 'linea' },
      { slug: 'garibaldi-lagunilla', tiempo: 5, linea: 'transferencia', tipo: 'transbordo' }
    ]
  },
  'san-juan-de-letran': {
    ciudad: 'cdmx',
    nombre: 'San Juan de Letrán',
    lineas: ['8'],
    adyacentes: [
      { slug: 'garibaldi', tiempo: 2, linea: '8', tipo: 'linea' },
      { slug: 'salto-del-agua', tiempo: 2, linea: '8', tipo: 'linea' }
    ]
  },
  'doctores': {
    ciudad: 'cdmx',
    nombre: 'Doctores',
    lineas: ['8'],
    adyacentes: [
      { slug: 'salto-del-agua', tiempo: 2, linea: '8', tipo: 'linea' },
      { slug: 'obrera', tiempo: 2, linea: '8', tipo: 'linea' }
    ]
  },
  'obrera': {
    ciudad: 'cdmx',
    nombre: 'Obrera',
    lineas: ['8'],
    adyacentes: [
      { slug: 'doctores', tiempo: 2, linea: '8', tipo: 'linea' },
      { slug: 'chabacano', tiempo: 2, linea: '8', tipo: 'linea' }
    ]
  },
  'la-viga': {
    ciudad: 'cdmx',
    nombre: 'La Viga',
    lineas: ['8'],
    adyacentes: [
      { slug: 'chabacano', tiempo: 2, linea: '8', tipo: 'linea' },
      { slug: 'coyuya', tiempo: 2, linea: '8', tipo: 'linea' }
    ]
  },
  'coyuya': {
    ciudad: 'cdmx',
    nombre: 'Coyuya',
    lineas: ['8'],
    adyacentes: [
      { slug: 'la-viga', tiempo: 2, linea: '8', tipo: 'linea' },
      { slug: 'santa-anita', tiempo: 2, linea: '8', tipo: 'linea' }
    ]
  },
  'iztacalco': {
    ciudad: 'cdmx',
    nombre: 'Iztacalco',
    lineas: ['8'],
    adyacentes: [
      { slug: 'coyuya', tiempo: 2, linea: '8', tipo: 'linea' },
      { slug: 'apatlaco', tiempo: 2, linea: '8', tipo: 'linea' }
    ]
  },
  'apatlaco': {
    ciudad: 'cdmx',
    nombre: 'Apatlaco',
    lineas: ['8'],
    adyacentes: [
      { slug: 'iztacalco', tiempo: 2, linea: '8', tipo: 'linea' },
      { slug: 'aculco', tiempo: 2, linea: '8', tipo: 'linea' }
    ]
  },
  'aculco': {
    ciudad: 'cdmx',
    nombre: 'Aculco',
    lineas: ['8'],
    adyacentes: [
      { slug: 'apatlaco', tiempo: 2, linea: '8', tipo: 'linea' },
      { slug: 'escuadron-201', tiempo: 2, linea: '8', tipo: 'linea' }
    ]
  },
  'escuadron-201': {
    ciudad: 'cdmx',
    nombre: 'Escuadrón 201',
    lineas: ['8'],
    adyacentes: [
      { slug: 'aculco', tiempo: 2, linea: '8', tipo: 'linea' },
      { slug: 'atlalilco', tiempo: 2, linea: '8', tipo: 'linea' }
    ]
  },
  'atlalilco': {
    ciudad: 'cdmx',
    nombre: 'Atlalilco',
    lineas: ['8', '12'],
    adyacentes: [
      { slug: 'escuadron-201', tiempo: 2, linea: '8', tipo: 'linea' },
      { slug: 'iztapalapa', tiempo: 2, linea: '8', tipo: 'linea' },
      { slug: 'culhuacan', tiempo: 5, linea: '12', tipo: 'transbordo' }
    ]
  },
  'iztapalapa': {
    ciudad: 'cdmx',
    nombre: 'Iztapalapa',
    lineas: ['8'],
    adyacentes: [
      { slug: 'atlalilco', tiempo: 2, linea: '8', tipo: 'linea' },
      { slug: 'cerro-de-la-estrella', tiempo: 2, linea: '8', tipo: 'linea' }
    ]
  },
  'cerro-de-la-estrella': {
    ciudad: 'cdmx',
    nombre: 'Cerro de la Estrella',
    lineas: ['8'],
    adyacentes: [
      { slug: 'iztapalapa', tiempo: 2, linea: '8', tipo: 'linea' },
      { slug: 'u-a-m-i', tiempo: 2, linea: '8', tipo: 'linea' }
    ]
  },
  'u-a-m-i': {
    ciudad: 'cdmx',
    nombre: 'UAM-I',
    lineas: ['8'],
    adyacentes: [
      { slug: 'cerro-de-la-estrella', tiempo: 2, linea: '8', tipo: 'linea' },
      { slug: 'constitucion-de-1917', tiempo: 2, linea: '8', tipo: 'linea' }
    ]
  },
  'constitucion-de-1917': {
    ciudad: 'cdmx',
    nombre: 'Constitución de 1917',
    lineas: ['8'],
    adyacentes: [
      { slug: 'u-a-m-i', tiempo: 2, linea: '8', tipo: 'linea' },
      { slug: 'constitucion-1917-tb11', tiempo: 5, linea: 'TB-11', tipo: 'transbordo' },
      { slug: 'cb-constitucion-1917', tiempo: 5, linea: 'CB-2', tipo: 'transbordo' }
    ]
  },
  // ============================================
  // LÍNEA 9 (Café #6B3A2A) - 12 estaciones
  // ============================================
  'puebla': {
    ciudad: 'cdmx',
    nombre: 'Puebla',
    lineas: ['9'],
    adyacentes: [
      { slug: 'pantitlan', tiempo: 2, linea: '9', tipo: 'linea' },
      { slug: 'ciudad-deportiva', tiempo: 2, linea: '9', tipo: 'linea' }
    ]
  },
  'ciudad-deportiva': {
    ciudad: 'cdmx',
    nombre: 'Ciudad Deportiva',
    lineas: ['9'],
    adyacentes: [
      { slug: 'puebla', tiempo: 2, linea: '9', tipo: 'linea' },
      { slug: 'velodromo', tiempo: 2, linea: '9', tipo: 'linea' }
    ]
  },
  'velodromo': {
    ciudad: 'cdmx',
    nombre: 'Velódromo',
    lineas: ['9'],
    adyacentes: [
      { slug: 'ciudad-deportiva', tiempo: 2, linea: '9', tipo: 'linea' },
      { slug: 'mixiuhca', tiempo: 2, linea: '9', tipo: 'linea' }
    ]
  },
  'mixiuhca': {
    ciudad: 'cdmx',
    nombre: 'Mixiuhca',
    lineas: ['9'],
    adyacentes: [
      { slug: 'velodromo', tiempo: 2, linea: '9', tipo: 'linea' },
      { slug: 'jamaica', tiempo: 2, linea: '9', tipo: 'linea' }
    ]
  },
  'lazaro-cardenas': {
    ciudad: 'cdmx',
    nombre: 'Lázaro Cárdenas',
    lineas: ['9'],
    adyacentes: [
      { slug: 'chabacano', tiempo: 2, linea: '9', tipo: 'linea' },
      { slug: 'centro-medico', tiempo: 2, linea: '9', tipo: 'linea' }
    ]
  },
  'chilpancingo': {
    ciudad: 'cdmx',
    nombre: 'Chilpancingo',
    lineas: ['9'],
    adyacentes: [
      { slug: 'centro-medico', tiempo: 2, linea: '9', tipo: 'linea' },
      { slug: 'patriotismo', tiempo: 2, linea: '9', tipo: 'linea' },
      { slug: 'condesa', tiempo: 3, linea: '9', tipo: 'linea' }
    ]
  },
  'patriotismo': {
    ciudad: 'cdmx',
    nombre: 'Patriotismo',
    lineas: ['9'],
    adyacentes: [
      { slug: 'chilpancingo', tiempo: 2, linea: '9', tipo: 'linea' },
      { slug: 'tacubaya', tiempo: 2, linea: '9', tipo: 'linea' }
    ]
  },
  // ============================================
  // LÍNEA A (Morado #7C3AED) - 10 estaciones
  // ============================================
  'agricola-oriental': {
    ciudad: 'cdmx',
    nombre: 'Agrícola Oriental',
    lineas: ['A'],
    adyacentes: [
      { slug: 'pantitlan', tiempo: 2, linea: 'A', tipo: 'linea' },
      { slug: 'canal-de-san-juan', tiempo: 2, linea: 'A', tipo: 'linea' }
    ]
  },
  'canal-de-san-juan': {
    ciudad: 'cdmx',
    nombre: 'Canal de San Juan',
    lineas: ['A'],
    adyacentes: [
      { slug: 'agricola-oriental', tiempo: 2, linea: 'A', tipo: 'linea' },
      { slug: 'tepalcates', tiempo: 2, linea: 'A', tipo: 'linea' }
    ]
  },
  'tepalcates': {
    ciudad: 'cdmx',
    nombre: 'Tepalcates',
    lineas: ['A'],
    adyacentes: [
      { slug: 'canal-de-san-juan', tiempo: 2, linea: 'A', tipo: 'linea' },
      { slug: 'guelatao', tiempo: 2, linea: 'A', tipo: 'linea' }
    ]
  },
  'guelatao': {
    ciudad: 'cdmx',
    nombre: 'Guelatao',
    lineas: ['A'],
    adyacentes: [
      { slug: 'tepalcates', tiempo: 2, linea: 'A', tipo: 'linea' },
      { slug: 'peñon-viejo', tiempo: 2, linea: 'A', tipo: 'linea' }
    ]
  },
  'acatitla': {
    ciudad: 'cdmx',
    nombre: 'Acatitla',
    lineas: ['A'],
    adyacentes: [
      { slug: 'peñon-viejo', tiempo: 2, linea: 'A', tipo: 'linea' },
      { slug: 'santa-marta', tiempo: 2, linea: 'A', tipo: 'linea' }
    ]
  },
  'santa-marta': {
    ciudad: 'cdmx',
    nombre: 'Santa Marta',
    lineas: ['A'],
    adyacentes: [
      { slug: 'acatitla', tiempo: 2, linea: 'A', tipo: 'linea' },
      { slug: 'los-reyes', tiempo: 2, linea: 'A', tipo: 'linea' },
      { slug: 'cb-santa-marta', tiempo: 5, linea: 'CB-2', tipo: 'transbordo' }
    ]
  },
  'los-reyes': {
    ciudad: 'cdmx',
    nombre: 'Los Reyes',
    lineas: ['A'],
    adyacentes: [
      { slug: 'santa-marta', tiempo: 2, linea: 'A', tipo: 'linea' },
      { slug: 'la-paz', tiempo: 2, linea: 'A', tipo: 'linea' }
    ]
  },
  // ============================================
  // LÍNEA B (Gris #9E9E9E) - 20 estaciones
  // ============================================
  'buenavista': {
    ciudad: 'cdmx',
    nombre: 'Buenavista',
    lineas: ['B'],
    adyacentes: [
      { slug: 'guerrero', tiempo: 2, linea: 'B', tipo: 'linea' },
      { slug: 'buenavista-ts', tiempo: 5, linea: 'TS', tipo: 'transbordo' }
    ]
  },
  'garibaldi-lagunilla': {
    ciudad: 'cdmx',
    nombre: 'Garibaldi / Lagunilla',
    lineas: ['B'],
    adyacentes: [
      { slug: 'guerrero', tiempo: 2, linea: 'B', tipo: 'linea' },
      { slug: 'tepito', tiempo: 2, linea: 'B', tipo: 'linea' },
      { slug: 'garibaldi', tiempo: 5, linea: '8', tipo: 'transbordo' }
    ]
  },
  'tepito': {
    ciudad: 'cdmx',
    nombre: 'Tepito',
    lineas: ['B'],
    adyacentes: [
      { slug: 'garibaldi-lagunilla', tiempo: 2, linea: 'B', tipo: 'linea' },
      { slug: 'morelos', tiempo: 2, linea: 'B', tipo: 'linea' }
    ]
  },
  'ricardo-flores-magon': {
    ciudad: 'cdmx',
    nombre: 'Ricardo Flores Magón',
    lineas: ['B'],
    adyacentes: [
      { slug: 'san-lazaro', tiempo: 2, linea: 'B', tipo: 'linea' },
      { slug: 'romero-rubio', tiempo: 2, linea: 'B', tipo: 'linea' }
    ]
  },
  'romero-rubio': {
    ciudad: 'cdmx',
    nombre: 'Romero Rubio',
    lineas: ['B'],
    adyacentes: [
      { slug: 'ricardo-flores-magon', tiempo: 2, linea: 'B', tipo: 'linea' },
      { slug: 'oceania', tiempo: 2, linea: 'B', tipo: 'linea' }
    ]
  },
  'deportivo-oceania': {
    ciudad: 'cdmx',
    nombre: 'Deportivo Oceania',
    lineas: ['B'],
    adyacentes: [
      { slug: 'oceania', tiempo: 2, linea: 'B', tipo: 'linea' },
      { slug: 'bosque-de-aragon', tiempo: 2, linea: 'B', tipo: 'linea' }
    ]
  },
  'bosque-de-aragon': {
    ciudad: 'cdmx',
    nombre: 'Bosque de Aragón',
    lineas: ['B'],
    adyacentes: [
      { slug: 'deportivo-oceania', tiempo: 2, linea: 'B', tipo: 'linea' },
      { slug: 'villa-de-aragon', tiempo: 2, linea: 'B', tipo: 'linea' }
    ]
  },
  'villa-de-aragon': {
    ciudad: 'cdmx',
    nombre: 'Villa de Aragón',
    lineas: ['B'],
    adyacentes: [
      { slug: 'bosque-de-aragon', tiempo: 2, linea: 'B', tipo: 'linea' },
      { slug: 'nezahualcoyotl', tiempo: 2, linea: 'B', tipo: 'linea' }
    ]
  },
  'nezahualcoyotl': {
    ciudad: 'cdmx',
    nombre: 'Nezahualcóyotl',
    lineas: ['B'],
    adyacentes: [
      { slug: 'villa-de-aragon', tiempo: 2, linea: 'B', tipo: 'linea' },
      { slug: 'impulsora', tiempo: 2, linea: 'B', tipo: 'linea' }
    ]
  },
  'impulsora': {
    ciudad: 'cdmx',
    nombre: 'Impulsora',
    lineas: ['B'],
    adyacentes: [
      { slug: 'nezahualcoyotl', tiempo: 2, linea: 'B', tipo: 'linea' },
      { slug: 'rio-de-los-remedios', tiempo: 2, linea: 'B', tipo: 'linea' }
    ]
  },
  'rio-de-los-remedios': {
    ciudad: 'cdmx',
    nombre: 'Río de los Remedios',
    lineas: ['B'],
    adyacentes: [
      { slug: 'impulsora', tiempo: 2, linea: 'B', tipo: 'linea' },
      { slug: 'muzquiz', tiempo: 2, linea: 'B', tipo: 'linea' }
    ]
  },
  'muzquiz': {
    ciudad: 'cdmx',
    nombre: 'Múzquiz',
    lineas: ['B'],
    adyacentes: [
      { slug: 'rio-de-los-remedios', tiempo: 2, linea: 'B', tipo: 'linea' },
      { slug: 'ecatepec', tiempo: 2, linea: 'B', tipo: 'linea' }
    ]
  },
  'ecatepec': {
    ciudad: 'cdmx',
    nombre: 'Ecatepec',
    lineas: ['B'],
    adyacentes: [
      { slug: 'muzquiz', tiempo: 2, linea: 'B', tipo: 'linea' },
      { slug: 'olimpica', tiempo: 2, linea: 'B', tipo: 'linea' }
    ]
  },
  'olimpica': {
    ciudad: 'cdmx',
    nombre: 'Olímpica',
    lineas: ['B'],
    adyacentes: [
      { slug: 'ecatepec', tiempo: 2, linea: 'B', tipo: 'linea' },
      { slug: 'plaza-aragon', tiempo: 2, linea: 'B', tipo: 'linea' }
    ]
  },
  'plaza-aragon': {
    ciudad: 'cdmx',
    nombre: 'Plaza Aragón',
    lineas: ['B'],
    adyacentes: [
      { slug: 'olimpica', tiempo: 2, linea: 'B', tipo: 'linea' },
      { slug: 'ciudad-azteca', tiempo: 2, linea: 'B', tipo: 'linea' }
    ]
  },
  'ciudad-azteca': {
    ciudad: 'cdmx',
    nombre: 'Ciudad Azteca',
    lineas: ['B'],
    adyacentes: [
      { slug: 'plaza-aragon', tiempo: 2, linea: 'B', tipo: 'linea' }
    ]
  },
  // ============================================
  // LÍNEA 12 (Oro #C9A84C) - 20 estaciones
  // ============================================
  'insurgentes-sur': {
    ciudad: 'cdmx',
    nombre: 'Insurgentes Sur',
    lineas: ['12'],
    adyacentes: [
      { slug: 'mixcoac', tiempo: 2, linea: '12', tipo: 'linea' },
      { slug: 'hospital-20-de-noviembre', tiempo: 2, linea: '12', tipo: 'linea' }
    ]
  },
  'hospital-20-de-noviembre': {
    ciudad: 'cdmx',
    nombre: 'Hospital 20 de Noviembre',
    lineas: ['12'],
    adyacentes: [
      { slug: 'insurgentes-sur', tiempo: 2, linea: '12', tipo: 'linea' },
      { slug: 'zapata', tiempo: 2, linea: '12', tipo: 'linea' }
    ]
  },
  'parque-de-los-venados': {
    ciudad: 'cdmx',
    nombre: 'Parque de los Venados',
    lineas: ['12'],
    adyacentes: [
      { slug: 'zapata', tiempo: 2, linea: '12', tipo: 'linea' },
      { slug: 'eje-central', tiempo: 2, linea: '12', tipo: 'linea' }
    ]
  },
  'eje-central': {
    ciudad: 'cdmx',
    nombre: 'Eje Central',
    lineas: ['12'],
    adyacentes: [
      { slug: 'parque-de-los-venados', tiempo: 2, linea: '12', tipo: 'linea' },
      { slug: 'ermita', tiempo: 2, linea: '12', tipo: 'linea' }
    ]
  },
  'ermita': {
    ciudad: 'cdmx',
    nombre: 'Ermita',
    lineas: ['12'],
    adyacentes: [
      { slug: 'eje-central', tiempo: 2, linea: '12', tipo: 'linea' },
      { slug: 'mexicaltzingo', tiempo: 2, linea: '12', tipo: 'linea' }
    ]
  },
  'mexicaltzingo': {
    ciudad: 'cdmx',
    nombre: 'Mexicaltzingo',
    lineas: ['12'],
    adyacentes: [
      { slug: 'ermita', tiempo: 2, linea: '12', tipo: 'linea' },
      { slug: 'atlalilco', tiempo: 2, linea: '12', tipo: 'linea' }
    ]
  },
  'culhuacan': {
    ciudad: 'cdmx',
    nombre: 'Culhuacán',
    lineas: ['12'],
    adyacentes: [
      { slug: 'atlalilco', tiempo: 2, linea: '12', tipo: 'linea' },
      { slug: 'san-andres-tomatlan', tiempo: 2, linea: '12', tipo: 'linea' }
    ]
  },
  'san-andres-tomatlan': {
    ciudad: 'cdmx',
    nombre: 'San Andrés Tomatlán',
    lineas: ['12'],
    adyacentes: [
      { slug: 'culhuacan', tiempo: 2, linea: '12', tipo: 'linea' },
      { slug: 'lomas-estrella', tiempo: 2, linea: '12', tipo: 'linea' }
    ]
  },
  'lomas-estrella': {
    ciudad: 'cdmx',
    nombre: 'Lomas Estrella',
    lineas: ['12'],
    adyacentes: [
      { slug: 'san-andres-tomatlan', tiempo: 2, linea: '12', tipo: 'linea' },
      { slug: 'calle-11', tiempo: 2, linea: '12', tipo: 'linea' }
    ]
  },
  'calle-11': {
    ciudad: 'cdmx',
    nombre: 'Calle 11',
    lineas: ['12'],
    adyacentes: [
      { slug: 'lomas-estrella', tiempo: 2, linea: '12', tipo: 'linea' },
      { slug: 'periferico-oriente', tiempo: 2, linea: '12', tipo: 'linea' }
    ]
  },
  'periferico-oriente': {
    ciudad: 'cdmx',
    nombre: 'Periférico Oriente',
    lineas: ['12'],
    adyacentes: [
      { slug: 'calle-11', tiempo: 2, linea: '12', tipo: 'linea' },
      { slug: 'tezonco', tiempo: 2, linea: '12', tipo: 'linea' }
    ]
  },
  'tezonco': {
    ciudad: 'cdmx',
    nombre: 'Tezonco',
    lineas: ['12'],
    adyacentes: [
      { slug: 'periferico-oriente', tiempo: 2, linea: '12', tipo: 'linea' },
      { slug: 'olivos', tiempo: 2, linea: '12', tipo: 'linea' }
    ]
  },
  'olivos': {
    ciudad: 'cdmx',
    nombre: 'Olivos',
    lineas: ['12'],
    adyacentes: [
      { slug: 'tezonco', tiempo: 2, linea: '12', tipo: 'linea' },
      { slug: 'nopalera', tiempo: 2, linea: '12', tipo: 'linea' }
    ]
  },
  'nopalera': {
    ciudad: 'cdmx',
    nombre: 'Nopalera',
    lineas: ['12'],
    adyacentes: [
      { slug: 'olivos', tiempo: 2, linea: '12', tipo: 'linea' },
      { slug: 'zapotitlan', tiempo: 2, linea: '12', tipo: 'linea' }
    ]
  },
  'zapotitlan': {
    ciudad: 'cdmx',
    nombre: 'Zapotitlán',
    lineas: ['12'],
    adyacentes: [
      { slug: 'nopalera', tiempo: 2, linea: '12', tipo: 'linea' },
      { slug: 'tlaltenco', tiempo: 2, linea: '12', tipo: 'linea' }
    ]
  },
  'tlaltenco': {
    ciudad: 'cdmx',
    nombre: 'Tlaltenco',
    lineas: ['12'],
    adyacentes: [
      { slug: 'zapotitlan', tiempo: 2, linea: '12', tipo: 'linea' },
      { slug: 'tlahuac', tiempo: 2, linea: '12', tipo: 'linea' }
    ]
  },
  'tlahuac': {
    ciudad: 'cdmx',
    nombre: 'Tláhuac',
    lineas: ['12'],
    adyacentes: [
      { slug: 'tlaltenco', tiempo: 2, linea: '12', tipo: 'linea' }
    ]
  },
  // ============================================
  // TREN LIGERO (Tasqueña → Estadio Azteca)
  // ============================================
  'tren-ligero-estadio-azteca': {
    ciudad: 'cdmx',
    nombre: 'Estadio Azteca (Tren Ligero)',
    lineas: ['TL'],
    adyacentes: [
      { slug: 'taxquena', tiempo: 25, linea: 'TL', tipo: 'tren-ligero' }
    ]
  },
  // ============================================
  // NODOS VIRTUALES — aliases turísticos para SEO
  // ============================================
  'tasquena': {
    ciudad: 'cdmx',
    nombre: 'Tasqueña',
    lineas: ['2', 'TL'],
    adyacentes: [
      { slug: 'taxquena', tiempo: 0, linea: '2', tipo: 'transbordo' }
    ]
  },
  'aeropuerto': {
    ciudad: 'cdmx',
    nombre: 'Aeropuerto (Terminal Aérea)',
    lineas: ['5'],
    adyacentes: [
      { slug: 'terminal-aerea', tiempo: 2, linea: '5', tipo: 'linea' }
    ]
  },
  'xochimilco': {
    ciudad: 'cdmx',
    nombre: 'Xochimilco (Tren Ligero)',
    lineas: ['TL'],
    adyacentes: [
      { slug: 'taxquena', tiempo: 35, linea: 'TL', tipo: 'tren-ligero' }
    ]
  },
  'condesa': {
    ciudad: 'cdmx',
    nombre: 'Condesa (Chilpancingo)',
    lineas: ['9'],
    adyacentes: [
      { slug: 'chilpancingo', tiempo: 3, linea: '9', tipo: 'linea' }
    ]
  },
  'roma': {
    ciudad: 'cdmx',
    nombre: 'Roma (Hospital General)',
    lineas: ['3'],
    adyacentes: [
      { slug: 'hospital-general', tiempo: 3, linea: '3', tipo: 'linea' }
    ]
  },
  // ============================================
  // MEXICABLE — Línea Roja (MCR) - 7 estaciones
  // ============================================
  'mexicable-santa-clara': {
    ciudad: 'cdmx',
    nombre: 'Santa Clara (Mexicable)',
    lineas: ['MCR'],
    adyacentes: [
      { slug: 'mexicable-hank-gonzalez', tiempo: 3, linea: 'MCR', tipo: 'linea' }
    ]
  },
  'mexicable-hank-gonzalez': {
    ciudad: 'cdmx',
    nombre: 'Hank González (Mexicable)',
    lineas: ['MCR', 'MCV'],
    adyacentes: [
      { slug: 'mexicable-santa-clara', tiempo: 3, linea: 'MCR', tipo: 'linea' },
      { slug: 'mexicable-fatima', tiempo: 3, linea: 'MCR', tipo: 'linea' },
      { slug: 'mexicable-hank-gonzalez-ii', tiempo: 5, linea: 'MCV', tipo: 'transbordo' }
    ]
  },
  'mexicable-fatima': {
    ciudad: 'cdmx',
    nombre: 'Fátima (Mexicable)',
    lineas: ['MCR'],
    adyacentes: [
      { slug: 'mexicable-hank-gonzalez', tiempo: 3, linea: 'MCR', tipo: 'linea' },
      { slug: 'mexicable-tablas-del-pozo', tiempo: 3, linea: 'MCR', tipo: 'linea' }
    ]
  },
  'mexicable-tablas-del-pozo': {
    ciudad: 'cdmx',
    nombre: 'Tablas del Pozo (Mexicable)',
    lineas: ['MCR'],
    adyacentes: [
      { slug: 'mexicable-fatima', tiempo: 3, linea: 'MCR', tipo: 'linea' },
      { slug: 'mexicable-los-bordos', tiempo: 3, linea: 'MCR', tipo: 'linea' }
    ]
  },
  'mexicable-los-bordos': {
    ciudad: 'cdmx',
    nombre: 'Los Bordos (Mexicable)',
    lineas: ['MCR'],
    adyacentes: [
      { slug: 'mexicable-tablas-del-pozo', tiempo: 3, linea: 'MCR', tipo: 'linea' },
      { slug: 'mexicable-deportivo', tiempo: 3, linea: 'MCR', tipo: 'linea' }
    ]
  },
  'mexicable-deportivo': {
    ciudad: 'cdmx',
    nombre: 'Deportivo (Mexicable)',
    lineas: ['MCR'],
    adyacentes: [
      { slug: 'mexicable-los-bordos', tiempo: 3, linea: 'MCR', tipo: 'linea' },
      { slug: 'mexicable-la-canada', tiempo: 3, linea: 'MCR', tipo: 'linea' }
    ]
  },
  'mexicable-la-canada': {
    ciudad: 'cdmx',
    nombre: 'La Cañada (Mexicable)',
    lineas: ['MCR'],
    adyacentes: [
      { slug: 'mexicable-deportivo', tiempo: 3, linea: 'MCR', tipo: 'linea' }
    ]
  },
  // ============================================
  // MEXICABLE — Línea Verde (MCV) - 7 estaciones
  // ============================================
  'mexicable-indios-verdes': {
    ciudad: 'cdmx',
    nombre: 'Indios Verdes (Mexicable)',
    lineas: ['MCV'],
    adyacentes: [
      { slug: 'mexicable-tanque-de-agua', tiempo: 4, linea: 'MCV', tipo: 'linea' },
      { slug: 'indios-verdes', tiempo: 5, linea: '3', tipo: 'transbordo' }
    ]
  },
  'mexicable-tanque-de-agua': {
    ciudad: 'cdmx',
    nombre: 'Tanque de Agua (Mexicable)',
    lineas: ['MCV'],
    adyacentes: [
      { slug: 'mexicable-indios-verdes', tiempo: 4, linea: 'MCV', tipo: 'linea' },
      { slug: 'mexicable-periferico', tiempo: 4, linea: 'MCV', tipo: 'linea' }
    ]
  },
  'mexicable-periferico': {
    ciudad: 'cdmx',
    nombre: 'Periférico (Mexicable)',
    lineas: ['MCV'],
    adyacentes: [
      { slug: 'mexicable-tanque-de-agua', tiempo: 4, linea: 'MCV', tipo: 'linea' },
      { slug: 'mexicable-san-isidro', tiempo: 4, linea: 'MCV', tipo: 'linea' }
    ]
  },
  'mexicable-san-isidro': {
    ciudad: 'cdmx',
    nombre: 'San Isidro (Mexicable)',
    lineas: ['MCV'],
    adyacentes: [
      { slug: 'mexicable-periferico', tiempo: 4, linea: 'MCV', tipo: 'linea' },
      { slug: 'mexicable-dr-jimenez-cantu', tiempo: 4, linea: 'MCV', tipo: 'linea' }
    ]
  },
  'mexicable-dr-jimenez-cantu': {
    ciudad: 'cdmx',
    nombre: 'Dr. Jiménez Cantú (Mexicable)',
    lineas: ['MCV'],
    adyacentes: [
      { slug: 'mexicable-san-isidro', tiempo: 4, linea: 'MCV', tipo: 'linea' },
      { slug: 'mexicable-la-mesa', tiempo: 4, linea: 'MCV', tipo: 'linea' }
    ]
  },
  'mexicable-la-mesa': {
    ciudad: 'cdmx',
    nombre: 'La Mesa (Mexicable)',
    lineas: ['MCV'],
    adyacentes: [
      { slug: 'mexicable-dr-jimenez-cantu', tiempo: 4, linea: 'MCV', tipo: 'linea' },
      { slug: 'mexicable-hank-gonzalez-ii', tiempo: 4, linea: 'MCV', tipo: 'linea' }
    ]
  },
  'mexicable-hank-gonzalez-ii': {
    ciudad: 'cdmx',
    nombre: 'Hank González II (Mexicable)',
    lineas: ['MCV', 'MCR'],
    adyacentes: [
      { slug: 'mexicable-la-mesa', tiempo: 4, linea: 'MCV', tipo: 'linea' },
      { slug: 'mexicable-hank-gonzalez', tiempo: 5, linea: 'MCR', tipo: 'transbordo' }
    ]
  },
  // ============================================
  // ============================================
  // GDL SITEUR - LÍNEA 1 (Roja) - 20 estaciones
  // ============================================
  'gdl-auditorio': {
    ciudad: 'gdl',
    nombre: 'Auditorio',
    lineas: ['1'],
    adyacentes: [
      { slug: 'periferico-norte', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'periferico-norte': {
    ciudad: 'gdl',
    nombre: 'Periférico Norte',
    lineas: ['1'],
    adyacentes: [
      { slug: 'gdl-auditorio', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'dermatologico', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'dermatologico': {
    ciudad: 'gdl',
    nombre: 'Dermatológico',
    lineas: ['1'],
    adyacentes: [
      { slug: 'periferico-norte', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'atemajac', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'atemajac': {
    ciudad: 'gdl',
    nombre: 'Atemajac',
    lineas: ['1'],
    adyacentes: [
      { slug: 'dermatologico', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'gdl-division-del-norte', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'gdl-division-del-norte': {
    ciudad: 'gdl',
    nombre: 'División del Norte',
    lineas: ['1'],
    adyacentes: [
      { slug: 'atemajac', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'avila-camacho', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'avila-camacho': {
    ciudad: 'gdl',
    nombre: 'Ávila Camacho',
    lineas: ['1', '3'],
    adyacentes: [
      { slug: 'gdl-division-del-norte', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'mezquitan', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'avila-camacho-l3', tiempo: 5, linea: '3', tipo: 'transbordo' }
    ]
  },
  'mezquitan': {
    ciudad: 'gdl',
    nombre: 'Mezquitán',
    lineas: ['1'],
    adyacentes: [
      { slug: 'avila-camacho', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'refugio', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'refugio': {
    ciudad: 'gdl',
    nombre: 'Refugio',
    lineas: ['1'],
    adyacentes: [
      { slug: 'mezquitan', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'gdl-juarez', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'gdl-juarez': {
    ciudad: 'gdl',
    nombre: 'Juárez',
    lineas: ['1', '2'],
    adyacentes: [
      { slug: 'refugio', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'gdl-mexicaltzingo', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'juarez-l2', tiempo: 5, linea: '2', tipo: 'transbordo' }
    ]
  },
  'gdl-mexicaltzingo': {
    ciudad: 'gdl',
    nombre: 'Mexicaltzingo',
    lineas: ['1'],
    adyacentes: [
      { slug: 'gdl-juarez', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'washington', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'washington': {
    ciudad: 'gdl',
    nombre: 'Washington',
    lineas: ['1'],
    adyacentes: [
      { slug: 'gdl-mexicaltzingo', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'santa-filomena', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'santa-filomena': {
    ciudad: 'gdl',
    nombre: 'Santa Filomena',
    lineas: ['1'],
    adyacentes: [
      { slug: 'washington', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'unidad-deportiva', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'unidad-deportiva': {
    ciudad: 'gdl',
    nombre: 'Unidad Deportiva',
    lineas: ['1'],
    adyacentes: [
      { slug: 'santa-filomena', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'urdaneta', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'urdaneta': {
    ciudad: 'gdl',
    nombre: 'Urdaneta',
    lineas: ['1'],
    adyacentes: [
      { slug: 'unidad-deportiva', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: '18-de-marzo', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  '18-de-marzo': {
    ciudad: 'gdl',
    nombre: '18 de Marzo',
    lineas: ['1'],
    adyacentes: [
      { slug: 'urdaneta', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'isla-raza', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'isla-raza': {
    ciudad: 'gdl',
    nombre: 'Isla Raza',
    lineas: ['1'],
    adyacentes: [
      { slug: '18-de-marzo', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'patria', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'patria': {
    ciudad: 'gdl',
    nombre: 'Patria',
    lineas: ['1'],
    adyacentes: [
      { slug: 'isla-raza', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'espana', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'espana': {
    ciudad: 'gdl',
    nombre: 'España',
    lineas: ['1'],
    adyacentes: [
      { slug: 'patria', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'santuario-martires', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'santuario-martires': {
    ciudad: 'gdl',
    nombre: 'Santuario de los Mártires',
    lineas: ['1'],
    adyacentes: [
      { slug: 'espana', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'periferico-sur', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'periferico-sur': {
    ciudad: 'gdl',
    nombre: 'Periférico Sur',
    lineas: ['1'],
    adyacentes: [
      { slug: 'santuario-martires', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  // ============================================
  // GDL SITEUR - LÍNEA 2 (Verde) - 10 estaciones
  // ============================================
  'juarez-l2': {
    ciudad: 'gdl',
    nombre: 'Juárez',
    lineas: ['2', '1'],
    adyacentes: [
      { slug: 'plaza-universidad', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'gdl-juarez', tiempo: 5, linea: '1', tipo: 'transbordo' }
    ]
  },
  'plaza-universidad': {
    ciudad: 'gdl',
    nombre: 'Plaza Universidad',
    lineas: ['2', '3'],
    adyacentes: [
      { slug: 'juarez-l2', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'san-juan-de-dios', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'guadalajara-centro', tiempo: 5, linea: '3', tipo: 'transbordo' }
    ]
  },
  'san-juan-de-dios': {
    ciudad: 'gdl',
    nombre: 'San Juan de Dios',
    lineas: ['2'],
    adyacentes: [
      { slug: 'plaza-universidad', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'belisario-dominguez', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'san-juan-de-dios-mc', tiempo: 5, linea: 'MC', tipo: 'transbordo' }
    ]
  },
  'belisario-dominguez': {
    ciudad: 'gdl',
    nombre: 'Belisario Domínguez',
    lineas: ['2'],
    adyacentes: [
      { slug: 'san-juan-de-dios', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'oblatos', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'oblatos': {
    ciudad: 'gdl',
    nombre: 'Oblatos',
    lineas: ['2'],
    adyacentes: [
      { slug: 'belisario-dominguez', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'cristobal-de-onate', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'cristobal-de-onate': {
    ciudad: 'gdl',
    nombre: 'Cristóbal de Oñate',
    lineas: ['2'],
    adyacentes: [
      { slug: 'oblatos', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'san-andres', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'san-andres': {
    ciudad: 'gdl',
    nombre: 'San Andrés',
    lineas: ['2'],
    adyacentes: [
      { slug: 'cristobal-de-onate', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'san-jacinto', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'san-jacinto': {
    ciudad: 'gdl',
    nombre: 'San Jacinto',
    lineas: ['2'],
    adyacentes: [
      { slug: 'san-andres', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'la-aurora', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'la-aurora': {
    ciudad: 'gdl',
    nombre: 'La Aurora',
    lineas: ['2'],
    adyacentes: [
      { slug: 'san-jacinto', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'tetlan', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'tetlan': {
    ciudad: 'gdl',
    nombre: 'Tetlán',
    lineas: ['2'],
    adyacentes: [
      { slug: 'la-aurora', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  // ============================================
  // GDL SITEUR - LÍNEA 3 (Rosa) - 18 estaciones
  // ============================================
  'arcos-de-zapopan': {
    ciudad: 'gdl',
    nombre: 'Arcos de Zapopan',
    lineas: ['3'],
    adyacentes: [
      { slug: 'periferico-belenes', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'periferico-belenes': {
    ciudad: 'gdl',
    nombre: 'Periférico Belenes',
    lineas: ['3'],
    adyacentes: [
      { slug: 'arcos-de-zapopan', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'mercado-del-mar', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'periferico-belenes-mp', tiempo: 5, linea: 'MP', tipo: 'transbordo' }
    ]
  },
  'mercado-del-mar': {
    ciudad: 'gdl',
    nombre: 'Mercado del Mar',
    lineas: ['3'],
    adyacentes: [
      { slug: 'periferico-belenes', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'zapopan-centro', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'zapopan-centro': {
    ciudad: 'gdl',
    nombre: 'Zapopan Centro',
    lineas: ['3'],
    adyacentes: [
      { slug: 'mercado-del-mar', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'plaza-patria', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'plaza-patria': {
    ciudad: 'gdl',
    nombre: 'Plaza Patria',
    lineas: ['3'],
    adyacentes: [
      { slug: 'zapopan-centro', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'circunvalacion-country', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'circunvalacion-country': {
    ciudad: 'gdl',
    nombre: 'Circunvalación Country',
    lineas: ['3'],
    adyacentes: [
      { slug: 'plaza-patria', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'avila-camacho-l3', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'avila-camacho-l3': {
    ciudad: 'gdl',
    nombre: 'Ávila Camacho',
    lineas: ['3', '1'],
    adyacentes: [
      { slug: 'circunvalacion-country', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'la-normal', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'avila-camacho', tiempo: 5, linea: '1', tipo: 'transbordo' }
    ]
  },
  'la-normal': {
    ciudad: 'gdl',
    nombre: 'La Normal',
    lineas: ['3'],
    adyacentes: [
      { slug: 'avila-camacho-l3', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'santuario', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'santuario': {
    ciudad: 'gdl',
    nombre: 'Santuario',
    lineas: ['3'],
    adyacentes: [
      { slug: 'la-normal', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'guadalajara-centro', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'guadalajara-centro': {
    ciudad: 'gdl',
    nombre: 'Guadalajara Centro',
    lineas: ['3', '2'],
    adyacentes: [
      { slug: 'santuario', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'independencia-l3', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'plaza-universidad', tiempo: 5, linea: '2', tipo: 'transbordo' }
    ]
  },
  'independencia-l3': {
    ciudad: 'gdl',
    nombre: 'Independencia',
    lineas: ['3'],
    adyacentes: [
      { slug: 'guadalajara-centro', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'plaza-de-la-bandera', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'bicentenario-mc', tiempo: 5, linea: 'MC', tipo: 'transbordo' }
    ]
  },
  'plaza-de-la-bandera': {
    ciudad: 'gdl',
    nombre: 'Plaza de la Bandera',
    lineas: ['3'],
    adyacentes: [
      { slug: 'independencia-l3', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'cucei', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'cucei': {
    ciudad: 'gdl',
    nombre: 'CUCEI',
    lineas: ['3'],
    adyacentes: [
      { slug: 'plaza-de-la-bandera', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'gdl-revolucion', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'gdl-revolucion': {
    ciudad: 'gdl',
    nombre: 'Revolución',
    lineas: ['3'],
    adyacentes: [
      { slug: 'cucei', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'rio-nilo-l3', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'rio-nilo-l3': {
    ciudad: 'gdl',
    nombre: 'Río Nilo',
    lineas: ['3'],
    adyacentes: [
      { slug: 'gdl-revolucion', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'tlaquepaque-centro', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'tlaquepaque-centro': {
    ciudad: 'gdl',
    nombre: 'Tlaquepaque Centro',
    lineas: ['3'],
    adyacentes: [
      { slug: 'rio-nilo-l3', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'lazaro-cardenas-l3', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'lazaro-cardenas-l3': {
    ciudad: 'gdl',
    nombre: 'Lázaro Cárdenas',
    lineas: ['3'],
    adyacentes: [
      { slug: 'tlaquepaque-centro', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'central-de-autobuses', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'central-de-autobuses': {
    ciudad: 'gdl',
    nombre: 'Central de Autobuses',
    lineas: ['3'],
    adyacentes: [
      { slug: 'lazaro-cardenas-l3', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  // ============================================
  // GDL SITEUR - LÍNEA 4 (Naranja) - 8 estaciones
  // ============================================
  'las-juntas': {
    ciudad: 'gdl',
    nombre: 'Las Juntas',
    lineas: ['4'],
    adyacentes: [
      { slug: 'jalisco-200', tiempo: 5, linea: '4', tipo: 'linea' },
      { slug: 'periferico-sur-mp', tiempo: 10, linea: 'MP', tipo: 'transbordo' }
    ]
  },
  'jalisco-200': {
    ciudad: 'gdl',
    nombre: 'Jalisco 200',
    lineas: ['4'],
    adyacentes: [
      { slug: 'las-juntas', tiempo: 5, linea: '4', tipo: 'linea' },
      { slug: 'real-del-valle', tiempo: 5, linea: '4', tipo: 'linea' }
    ]
  },
  'real-del-valle': {
    ciudad: 'gdl',
    nombre: 'Real del Valle',
    lineas: ['4'],
    adyacentes: [
      { slug: 'jalisco-200', tiempo: 5, linea: '4', tipo: 'linea' },
      { slug: 'concepcion-del-valle', tiempo: 5, linea: '4', tipo: 'linea' }
    ]
  },
  'concepcion-del-valle': {
    ciudad: 'gdl',
    nombre: 'Concepción del Valle',
    lineas: ['4'],
    adyacentes: [
      { slug: 'real-del-valle', tiempo: 5, linea: '4', tipo: 'linea' },
      { slug: 'el-cuervo', tiempo: 5, linea: '4', tipo: 'linea' }
    ]
  },
  'el-cuervo': {
    ciudad: 'gdl',
    nombre: 'El Cuervo',
    lineas: ['4'],
    adyacentes: [
      { slug: 'concepcion-del-valle', tiempo: 5, linea: '4', tipo: 'linea' },
      { slug: 'lomas-del-sur', tiempo: 5, linea: '4', tipo: 'linea' }
    ]
  },
  'lomas-del-sur': {
    ciudad: 'gdl',
    nombre: 'Lomas del Sur',
    lineas: ['4'],
    adyacentes: [
      { slug: 'el-cuervo', tiempo: 5, linea: '4', tipo: 'linea' },
      { slug: 'cutlajo', tiempo: 5, linea: '4', tipo: 'linea' }
    ]
  },
  'cutlajo': {
    ciudad: 'gdl',
    nombre: 'Cutlajo',
    lineas: ['4'],
    adyacentes: [
      { slug: 'lomas-del-sur', tiempo: 5, linea: '4', tipo: 'linea' },
      { slug: 'tlajomulco-centro', tiempo: 5, linea: '4', tipo: 'linea' }
    ]
  },
  'tlajomulco-centro': {
    ciudad: 'gdl',
    nombre: 'Tlajomulco Centro',
    lineas: ['4'],
    adyacentes: [
      { slug: 'cutlajo', tiempo: 5, linea: '4', tipo: 'linea' }
    ]
  },
  // ============================================
  // GDL MI MACRO CALZADA (Azul) - 27 estaciones
  // ============================================
  'mirador-mc': {
    ciudad: 'gdl',
    nombre: 'Mirador',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'huentitan-mc', tiempo: 2, linea: 'MC', tipo: 'linea' }
    ]
  },
  'huentitan-mc': {
    ciudad: 'gdl',
    nombre: 'Huentitán',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'mirador-mc', tiempo: 2, linea: 'MC', tipo: 'linea' },
      { slug: 'zoologico-mc', tiempo: 2, linea: 'MC', tipo: 'linea' }
    ]
  },
  'zoologico-mc': {
    ciudad: 'gdl',
    nombre: 'Zoológico',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'huentitan-mc', tiempo: 2, linea: 'MC', tipo: 'linea' },
      { slug: 'independencia-norte-mc', tiempo: 2, linea: 'MC', tipo: 'linea' }
    ]
  },
  'independencia-norte-mc': {
    ciudad: 'gdl',
    nombre: 'Independencia Norte',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'zoologico-mc', tiempo: 2, linea: 'MC', tipo: 'linea' },
      { slug: 'san-patricio-mc', tiempo: 2, linea: 'MC', tipo: 'linea' },
      { slug: 'independencia-norte-mp', tiempo: 3, linea: 'MP', tipo: 'transbordo' }
    ]
  },
  'san-patricio-mc': {
    ciudad: 'gdl',
    nombre: 'San Patricio',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'independencia-norte-mc', tiempo: 2, linea: 'MC', tipo: 'linea' },
      { slug: 'igualdad-mc', tiempo: 2, linea: 'MC', tipo: 'linea' }
    ]
  },
  'igualdad-mc': {
    ciudad: 'gdl',
    nombre: 'Igualdad',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'san-patricio-mc', tiempo: 2, linea: 'MC', tipo: 'linea' },
      { slug: 'monumental-mc', tiempo: 2, linea: 'MC', tipo: 'linea' }
    ]
  },
  'monumental-mc': {
    ciudad: 'gdl',
    nombre: 'Monumental',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'igualdad-mc', tiempo: 2, linea: 'MC', tipo: 'linea' },
      { slug: 'monte-olivete-mc', tiempo: 2, linea: 'MC', tipo: 'linea' }
    ]
  },
  'monte-olivete-mc': {
    ciudad: 'gdl',
    nombre: 'Monte Olivete',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'monumental-mc', tiempo: 2, linea: 'MC', tipo: 'linea' },
      { slug: 'circunvalacion-mc', tiempo: 2, linea: 'MC', tipo: 'linea' }
    ]
  },
  'circunvalacion-mc': {
    ciudad: 'gdl',
    nombre: 'Circunvalación',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'monte-olivete-mc', tiempo: 2, linea: 'MC', tipo: 'linea' },
      { slug: 'ciencias-salud-mc', tiempo: 2, linea: 'MC', tipo: 'linea' }
    ]
  },
  'ciencias-salud-mc': {
    ciudad: 'gdl',
    nombre: 'Ciencias de la Salud',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'circunvalacion-mc', tiempo: 2, linea: 'MC', tipo: 'linea' },
      { slug: 'juan-alvarez-mc', tiempo: 2, linea: 'MC', tipo: 'linea' }
    ]
  },
  'juan-alvarez-mc': {
    ciudad: 'gdl',
    nombre: 'Juan Álvarez',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'ciencias-salud-mc', tiempo: 2, linea: 'MC', tipo: 'linea' },
      { slug: 'alameda-mc', tiempo: 2, linea: 'MC', tipo: 'linea' }
    ]
  },
  'alameda-mc': {
    ciudad: 'gdl',
    nombre: 'Alameda',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'juan-alvarez-mc', tiempo: 2, linea: 'MC', tipo: 'linea' },
      { slug: 'san-juan-de-dios-mc', tiempo: 2, linea: 'MC', tipo: 'linea' }
    ]
  },
  'san-juan-de-dios-mc': {
    ciudad: 'gdl',
    nombre: 'San Juan de Dios',
    lineas: ['MC', '2'],
    adyacentes: [
      { slug: 'alameda-mc', tiempo: 2, linea: 'MC', tipo: 'linea' },
      { slug: 'bicentenario-mc', tiempo: 2, linea: 'MC', tipo: 'linea' },
      { slug: 'san-juan-de-dios', tiempo: 5, linea: '2', tipo: 'transbordo' }
    ]
  },
  'bicentenario-mc': {
    ciudad: 'gdl',
    nombre: 'Bicentenario',
    lineas: ['MC', '3'],
    adyacentes: [
      { slug: 'san-juan-de-dios-mc', tiempo: 2, linea: 'MC', tipo: 'linea' },
      { slug: 'la-paz-mc', tiempo: 2, linea: 'MC', tipo: 'linea' },
      { slug: 'independencia-l3', tiempo: 5, linea: '3', tipo: 'transbordo' }
    ]
  },
  'la-paz-mc': {
    ciudad: 'gdl',
    nombre: 'La Paz',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'bicentenario-mc', tiempo: 2, linea: 'MC', tipo: 'linea' },
      { slug: 'ninos-heroes-mc', tiempo: 2, linea: 'MC', tipo: 'linea' }
    ]
  },
  'ninos-heroes-mc': {
    ciudad: 'gdl',
    nombre: 'Niños Héroes',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'la-paz-mc', tiempo: 2, linea: 'MC', tipo: 'linea' },
      { slug: 'agua-azul-mc', tiempo: 2, linea: 'MC', tipo: 'linea' }
    ]
  },
  'agua-azul-mc': {
    ciudad: 'gdl',
    nombre: 'Agua Azul',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'ninos-heroes-mc', tiempo: 2, linea: 'MC', tipo: 'linea' },
      { slug: 'cipres-mc', tiempo: 2, linea: 'MC', tipo: 'linea' }
    ]
  },
  'cipres-mc': {
    ciudad: 'gdl',
    nombre: 'Ciprés',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'agua-azul-mc', tiempo: 2, linea: 'MC', tipo: 'linea' },
      { slug: 'heroes-nacozari-mc', tiempo: 2, linea: 'MC', tipo: 'linea' }
    ]
  },
  'heroes-nacozari-mc': {
    ciudad: 'gdl',
    nombre: 'Héroes de Nacozari',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'cipres-mc', tiempo: 2, linea: 'MC', tipo: 'linea' },
      { slug: 'lazaro-cardenas-mc', tiempo: 2, linea: 'MC', tipo: 'linea' }
    ]
  },
  'lazaro-cardenas-mc': {
    ciudad: 'gdl',
    nombre: 'Lázaro Cárdenas',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'heroes-nacozari-mc', tiempo: 2, linea: 'MC', tipo: 'linea' },
      { slug: 'el-dean-mc', tiempo: 2, linea: 'MC', tipo: 'linea' }
    ]
  },
  'el-dean-mc': {
    ciudad: 'gdl',
    nombre: 'El Deán',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'lazaro-cardenas-mc', tiempo: 2, linea: 'MC', tipo: 'linea' },
      { slug: 'zona-industrial-mc', tiempo: 2, linea: 'MC', tipo: 'linea' }
    ]
  },
  'zona-industrial-mc': {
    ciudad: 'gdl',
    nombre: 'Zona Industrial',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'el-dean-mc', tiempo: 2, linea: 'MC', tipo: 'linea' },
      { slug: 'lopez-de-legazpi-mc', tiempo: 2, linea: 'MC', tipo: 'linea' }
    ]
  },
  'lopez-de-legazpi-mc': {
    ciudad: 'gdl',
    nombre: 'López de Legazpi',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'zona-industrial-mc', tiempo: 2, linea: 'MC', tipo: 'linea' },
      { slug: 'clemente-orozco-mc', tiempo: 2, linea: 'MC', tipo: 'linea' }
    ]
  },
  'clemente-orozco-mc': {
    ciudad: 'gdl',
    nombre: 'Clemente Orozco',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'lopez-de-legazpi-mc', tiempo: 2, linea: 'MC', tipo: 'linea' },
      { slug: 'artes-plasticas-mc', tiempo: 2, linea: 'MC', tipo: 'linea' }
    ]
  },
  'artes-plasticas-mc': {
    ciudad: 'gdl',
    nombre: 'Artes Plásticas',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'clemente-orozco-mc', tiempo: 2, linea: 'MC', tipo: 'linea' },
      { slug: 'esculturas-mc', tiempo: 2, linea: 'MC', tipo: 'linea' }
    ]
  },
  'esculturas-mc': {
    ciudad: 'gdl',
    nombre: 'Esculturas',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'artes-plasticas-mc', tiempo: 2, linea: 'MC', tipo: 'linea' },
      { slug: 'fray-angelico-mc', tiempo: 2, linea: 'MC', tipo: 'linea' }
    ]
  },
  'fray-angelico-mc': {
    ciudad: 'gdl',
    nombre: 'Fray Angélico',
    lineas: ['MC'],
    adyacentes: [
      { slug: 'esculturas-mc', tiempo: 2, linea: 'MC', tipo: 'linea' }
    ]
  },
  // ============================================
  // GDL MI MACRO PERIFÉRICO (Morado) - 42 estaciones - CIRCULAR
  // ============================================
  'barranca-huentitan-mp': {
    ciudad: 'gdl',
    nombre: 'Barranca de Huentitán',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'zoologico-gdl-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'carretera-chapala-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'zoologico-gdl-mp': {
    ciudad: 'gdl',
    nombre: 'Zoológico de Guadalajara',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'barranca-huentitan-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'independencia-norte-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'independencia-norte-mp': {
    ciudad: 'gdl',
    nombre: 'Independencia Norte',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'zoologico-gdl-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'lomas-paraiso-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'independencia-norte-mc', tiempo: 3, linea: 'MC', tipo: 'transbordo' }
    ]
  },
  'lomas-paraiso-mp': {
    ciudad: 'gdl',
    nombre: 'Lomas Paraíso',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'independencia-norte-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'rancho-nuevo-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'rancho-nuevo-mp': {
    ciudad: 'gdl',
    nombre: 'Rancho Nuevo',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'lomas-paraiso-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'la-experiencia-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'la-experiencia-mp': {
    ciudad: 'gdl',
    nombre: 'La Experiencia',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'rancho-nuevo-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'el-batan-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'el-batan-mp': {
    ciudad: 'gdl',
    nombre: 'El Batán',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'la-experiencia-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'periferico-norte-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'periferico-norte-mp': {
    ciudad: 'gdl',
    nombre: 'Periférico Norte',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'el-batan-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'la-cantera-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'la-cantera-mp': {
    ciudad: 'gdl',
    nombre: 'La Cantera',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'periferico-norte-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'tabachines-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'tabachines-mp': {
    ciudad: 'gdl',
    nombre: 'Tabachines',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'la-cantera-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'constitucion-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'constitucion-mp': {
    ciudad: 'gdl',
    nombre: 'Constitución',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'tabachines-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'centro-cultural-universitario-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'centro-cultural-universitario-mp': {
    ciudad: 'gdl',
    nombre: 'Centro Cultural Universitario',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'constitucion-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'san-isidro-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'san-isidro-mp': {
    ciudad: 'gdl',
    nombre: 'San Isidro',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'centro-cultural-universitario-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'periferico-belenes-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'periferico-belenes-mp': {
    ciudad: 'gdl',
    nombre: 'Periférico Belenes',
    lineas: ['MP', '3'],
    adyacentes: [
      { slug: 'san-isidro-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'tuzania-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'periferico-belenes', tiempo: 5, linea: '3', tipo: 'transbordo' }
    ]
  },
  'tuzania-mp': {
    ciudad: 'gdl',
    nombre: 'Tuzanía',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'periferico-belenes-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'santa-margarita-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'santa-margarita-mp': {
    ciudad: 'gdl',
    nombre: 'Santa Margarita',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'tuzania-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'acueducto-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'acueducto-mp': {
    ciudad: 'gdl',
    nombre: 'Acueducto',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'santa-margarita-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'cinco-de-mayo-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'cinco-de-mayo-mp': {
    ciudad: 'gdl',
    nombre: 'Cinco de Mayo',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'acueducto-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'san-juan-ocotan-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'san-juan-ocotan-mp': {
    ciudad: 'gdl',
    nombre: 'San Juan Ocotán',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'cinco-de-mayo-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'vallarta-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'vallarta-mp': {
    ciudad: 'gdl',
    nombre: 'Vallarta',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'san-juan-ocotan-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'estadio-chivas-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'estadio-chivas-mp': {
    ciudad: 'gdl',
    nombre: 'Estadio Chivas',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'vallarta-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'ciudad-judicial-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'ciudad-judicial-mp': {
    ciudad: 'gdl',
    nombre: 'Ciudad Judicial',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'estadio-chivas-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'ciudad-granja-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'ciudad-granja-mp': {
    ciudad: 'gdl',
    nombre: 'Ciudad Granja',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'ciudad-judicial-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'parque-metropolitano-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'parque-metropolitano-mp': {
    ciudad: 'gdl',
    nombre: 'Parque Metropolitano',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'ciudad-granja-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'chapalita-inn-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'chapalita-inn-mp': {
    ciudad: 'gdl',
    nombre: 'Chapalita Inn',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'parque-metropolitano-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'el-colli-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'el-colli-mp': {
    ciudad: 'gdl',
    nombre: 'El Colli',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'chapalita-inn-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'felipe-ruvalcaba-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'felipe-ruvalcaba-mp': {
    ciudad: 'gdl',
    nombre: 'Felipe Ruvalcaba',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'el-colli-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'miramar-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'miramar-mp': {
    ciudad: 'gdl',
    nombre: 'Miramar',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'felipe-ruvalcaba-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'mariano-otero-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'mariano-otero-mp': {
    ciudad: 'gdl',
    nombre: 'Mariano Otero',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'miramar-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'el-briseno-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'el-briseno-mp': {
    ciudad: 'gdl',
    nombre: 'El Briseño',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'mariano-otero-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'agricola-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'agricola-mp': {
    ciudad: 'gdl',
    nombre: 'Agrícola',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'el-briseno-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'lopez-mateos-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'lopez-mateos-mp': {
    ciudad: 'gdl',
    nombre: 'López Mateos',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'agricola-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'iteso-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'iteso-mp': {
    ciudad: 'gdl',
    nombre: 'ITESO',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'lopez-mateos-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'terminal-sur-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'terminal-sur-mp': {
    ciudad: 'gdl',
    nombre: 'Terminal Sur',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'iteso-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'periferico-sur-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'periferico-sur-mp': {
    ciudad: 'gdl',
    nombre: 'Periférico Sur',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'terminal-sur-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'san-sebastianito-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'las-juntas', tiempo: 10, linea: '4', tipo: 'transbordo' }
    ]
  },
  'san-sebastianito-mp': {
    ciudad: 'gdl',
    nombre: 'San Sebastianito',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'periferico-sur-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'ocho-de-julio-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'ocho-de-julio-mp': {
    ciudad: 'gdl',
    nombre: 'Ocho de Julio',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'san-sebastianito-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'toluquilla-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'toluquilla-mp': {
    ciudad: 'gdl',
    nombre: 'Toluquilla',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'ocho-de-julio-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'adolf-horn-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'adolf-horn-mp': {
    ciudad: 'gdl',
    nombre: 'Adolf Horn',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'toluquilla-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'artesanos-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'artesanos-mp': {
    ciudad: 'gdl',
    nombre: 'Artesanos',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'adolf-horn-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'las-pintas-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'las-pintas-mp': {
    ciudad: 'gdl',
    nombre: 'Las Pintas',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'artesanos-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'carretera-chapala-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  'carretera-chapala-mp': {
    ciudad: 'gdl',
    nombre: 'Carretera a Chapala',
    lineas: ['MP'],
    adyacentes: [
      { slug: 'las-pintas-mp', tiempo: 2, linea: 'MP', tipo: 'linea' },
      { slug: 'barranca-huentitan-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
    ]
  },
  // MTY METRORREY - LÍNEA 1 (Amarilla) - 19 estaciones
  // ============================================
  'talleres': {
    ciudad: 'mty',
    nombre: 'Talleres',
    lineas: ['1'],
    adyacentes: [
      { slug: 'san-bernabe', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'san-bernabe': {
    ciudad: 'mty',
    nombre: 'San Bernabé',
    lineas: ['1'],
    adyacentes: [
      { slug: 'talleres', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'unidad-modelo', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'unidad-modelo': {
    ciudad: 'mty',
    nombre: 'Unidad Modelo',
    lineas: ['1'],
    adyacentes: [
      { slug: 'san-bernabe', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'aztlan', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'aztlan': {
    ciudad: 'mty',
    nombre: 'Aztlán',
    lineas: ['1'],
    adyacentes: [
      { slug: 'unidad-modelo', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'penitenciaria', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'penitenciaria': {
    ciudad: 'mty',
    nombre: 'Penitenciaría',
    lineas: ['1'],
    adyacentes: [
      { slug: 'aztlan', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'alfonso-reyes', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'alfonso-reyes': {
    ciudad: 'mty',
    nombre: 'Alfonso Reyes',
    lineas: ['1'],
    adyacentes: [
      { slug: 'penitenciaria', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'mitras', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'mitras': {
    ciudad: 'mty',
    nombre: 'Mitras',
    lineas: ['1'],
    adyacentes: [
      { slug: 'alfonso-reyes', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'simon-bolivar', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'mitras-ecovia', tiempo: 5, linea: 'ecovia', tipo: 'transbordo' }
    ]
  },
  'simon-bolivar': {
    ciudad: 'mty',
    nombre: 'Simón Bolívar',
    lineas: ['1'],
    adyacentes: [
      { slug: 'mitras', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'hospital', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'hospital': {
    ciudad: 'mty',
    nombre: 'Hospital',
    lineas: ['1'],
    adyacentes: [
      { slug: 'simon-bolivar', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'edison', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'edison': {
    ciudad: 'mty',
    nombre: 'Edison',
    lineas: ['1'],
    adyacentes: [
      { slug: 'hospital', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'central', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'central': {
    ciudad: 'mty',
    nombre: 'Central',
    lineas: ['1'],
    adyacentes: [
      { slug: 'edison', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'mty-cuauhtemoc', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'mty-cuauhtemoc': {
    ciudad: 'mty',
    nombre: 'Cuauhtémoc',
    lineas: ['1', '2'],
    adyacentes: [
      { slug: 'central', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'del-golfo', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'cuauhtemoc-l2', tiempo: 5, linea: '2', tipo: 'transbordo' }
    ]
  },
  'del-golfo': {
    ciudad: 'mty',
    nombre: 'Del Golfo',
    lineas: ['1'],
    adyacentes: [
      { slug: 'mty-cuauhtemoc', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'felix-u-gomez', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'felix-u-gomez': {
    ciudad: 'mty',
    nombre: 'Félix U. Gómez',
    lineas: ['1'],
    adyacentes: [
      { slug: 'del-golfo', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'parque-fundidora', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'felix-u-gomez-l3', tiempo: 5, linea: '3', tipo: 'transbordo' }
    ]
  },
  'parque-fundidora': {
    ciudad: 'mty',
    nombre: 'Parque Fundidora',
    lineas: ['1'],
    adyacentes: [
      { slug: 'felix-u-gomez', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'y-griega', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'y-griega': {
    ciudad: 'mty',
    nombre: 'Y Griega',
    lineas: ['1'],
    adyacentes: [
      { slug: 'parque-fundidora', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'eloy-cavazos', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'eloy-cavazos': {
    ciudad: 'mty',
    nombre: 'Eloy Cavazos',
    lineas: ['1'],
    adyacentes: [
      { slug: 'y-griega', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'lerdo-de-tejada', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'lerdo-de-tejada': {
    ciudad: 'mty',
    nombre: 'Lerdo de Tejada',
    lineas: ['1'],
    adyacentes: [
      { slug: 'eloy-cavazos', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'exposicion', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'exposicion': {
    ciudad: 'mty',
    nombre: 'Exposición',
    lineas: ['1'],
    adyacentes: [
      { slug: 'lerdo-de-tejada', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  // ============================================
  // MTY METRORREY - LÍNEA 2 (Verde) - 13 estaciones
  // ============================================
  'sendero': {
    ciudad: 'mty',
    nombre: 'Sendero',
    lineas: ['2'],
    adyacentes: [
      { slug: 'tapia', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'tapia': {
    ciudad: 'mty',
    nombre: 'Tapia',
    lineas: ['2'],
    adyacentes: [
      { slug: 'sendero', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'san-nicolas', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'san-nicolas': {
    ciudad: 'mty',
    nombre: 'San Nicolás',
    lineas: ['2'],
    adyacentes: [
      { slug: 'tapia', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'anahuac', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'anahuac': {
    ciudad: 'mty',
    nombre: 'Anáhuac',
    lineas: ['2'],
    adyacentes: [
      { slug: 'san-nicolas', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'mty-universidad', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'mty-universidad': {
    ciudad: 'mty',
    nombre: 'Universidad',
    lineas: ['2'],
    adyacentes: [
      { slug: 'anahuac', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'ninos-heroes', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'ninos-heroes': {
    ciudad: 'mty',
    nombre: 'Niños Héroes',
    lineas: ['2'],
    adyacentes: [
      { slug: 'mty-universidad', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'regina', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'regina': {
    ciudad: 'mty',
    nombre: 'Regina',
    lineas: ['2'],
    adyacentes: [
      { slug: 'ninos-heroes', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'general-anaya', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'regina-ecovia', tiempo: 5, linea: 'ecovia', tipo: 'transbordo' }
    ]
  },
  'general-anaya': {
    ciudad: 'mty',
    nombre: 'General Anaya',
    lineas: ['2'],
    adyacentes: [
      { slug: 'regina', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'cuauhtemoc-l2', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'cuauhtemoc-l2': {
    ciudad: 'mty',
    nombre: 'Cuauhtémoc',
    lineas: ['1', '2'],
    adyacentes: [
      { slug: 'general-anaya', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'alameda', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'mty-cuauhtemoc', tiempo: 5, linea: '1', tipo: 'transbordo' }
    ]
  },
  'alameda': {
    ciudad: 'mty',
    nombre: 'Alameda',
    lineas: ['2'],
    adyacentes: [
      { slug: 'cuauhtemoc-l2', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'fundadores', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'fundadores': {
    ciudad: 'mty',
    nombre: 'Fundadores',
    lineas: ['2'],
    adyacentes: [
      { slug: 'alameda', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'padre-mier', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'padre-mier': {
    ciudad: 'mty',
    nombre: 'Padre Mier',
    lineas: ['2'],
    adyacentes: [
      { slug: 'fundadores', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'general-i-zaragoza', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'general-i-zaragoza': {
    ciudad: 'mty',
    nombre: 'General I. Zaragoza',
    lineas: ['2'],
    adyacentes: [
      { slug: 'padre-mier', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'general-i-zaragoza-l3', tiempo: 5, linea: '3', tipo: 'transbordo' }
    ]
  },
  // ============================================
  // MTY METRORREY LÍNEA 3 (Naranja) - 9 estaciones
  // ============================================
  'hospital-metropolitano': {
    ciudad: 'mty',
    nombre: 'Hospital Metropolitano',
    lineas: ['3'],
    adyacentes: [
      { slug: 'los-angeles', tiempo: 3, linea: '3', tipo: 'linea' }
    ]
  },
  'los-angeles': {
    ciudad: 'mty',
    nombre: 'Los Ángeles',
    lineas: ['3'],
    adyacentes: [
      { slug: 'hospital-metropolitano', tiempo: 3, linea: '3', tipo: 'linea' },
      { slug: 'ruiz-cortines', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'ruiz-cortines': {
    ciudad: 'mty',
    nombre: 'Ruiz Cortines',
    lineas: ['3', 'ecovia'],
    adyacentes: [
      { slug: 'los-angeles', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'moderna', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'ruiz-cortines-ecovia', tiempo: 5, linea: 'ecovia', tipo: 'transbordo' }
    ]
  },
  'moderna': {
    ciudad: 'mty',
    nombre: 'Colonia Moderna',
    lineas: ['3'],
    adyacentes: [
      { slug: 'ruiz-cortines', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'metalurgicos', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'metalurgicos': {
    ciudad: 'mty',
    nombre: 'Metalúrgicos',
    lineas: ['3'],
    adyacentes: [
      { slug: 'moderna', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'felix-u-gomez-l3', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'felix-u-gomez-l3': {
    ciudad: 'mty',
    nombre: 'Félix U. Gómez',
    lineas: ['1', '3'],
    adyacentes: [
      { slug: 'metalurgicos', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'colonia-obrera', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'felix-u-gomez', tiempo: 5, linea: '1', tipo: 'transbordo' }
    ]
  },
  'colonia-obrera': {
    ciudad: 'mty',
    nombre: 'Colonia Obrera',
    lineas: ['3'],
    adyacentes: [
      { slug: 'felix-u-gomez-l3', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'santa-lucia', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'santa-lucia': {
    ciudad: 'mty',
    nombre: 'Santa Lucía',
    lineas: ['3'],
    adyacentes: [
      { slug: 'colonia-obrera', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'general-i-zaragoza-l3', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'general-i-zaragoza-l3': {
    ciudad: 'mty',
    nombre: 'General I. Zaragoza',
    lineas: ['2', '3'],
    adyacentes: [
      { slug: 'santa-lucia', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'general-i-zaragoza', tiempo: 5, linea: '2', tipo: 'transbordo' }
    ]
  },
  // ============================================
  // MTY ECOVÍA (TransMetro BRT) - 42 estaciones
  // ============================================
  'lincoln': {
    ciudad: 'mty',
    nombre: 'Lincoln',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'astros', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'astros': {
    ciudad: 'mty',
    nombre: 'Astros',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'lincoln', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'cumbres', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'cumbres': {
    ciudad: 'mty',
    nombre: 'Cumbres',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'astros', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'plumbago', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'plumbago': {
    ciudad: 'mty',
    nombre: 'Plumbago',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'cumbres', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'plutarco-elias-calles', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'plutarco-elias-calles': {
    ciudad: 'mty',
    nombre: 'Plutarco Elías Calles',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'plumbago', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'embotelladora', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'embotelladora': {
    ciudad: 'mty',
    nombre: 'Embotelladora',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'plutarco-elias-calles', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'panteon-municipal', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'panteon-municipal': {
    ciudad: 'mty',
    nombre: 'Panteón Municipal',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'embotelladora', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'cardenal', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'cardenal': {
    ciudad: 'mty',
    nombre: 'Cardenal',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'panteon-municipal', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'valle-verde', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'valle-verde': {
    ciudad: 'mty',
    nombre: 'Valle Verde',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'cardenal', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'cardiologia', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'cardiologia': {
    ciudad: 'mty',
    nombre: 'Cardiología',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'valle-verde', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'santa-cecilia', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'santa-cecilia': {
    ciudad: 'mty',
    nombre: 'Santa Cecilia',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'cardiologia', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'villa-mitras', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'villa-mitras': {
    ciudad: 'mty',
    nombre: 'Villa Mitras',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'santa-cecilia', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'rangel-frias', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'rangel-frias': {
    ciudad: 'mty',
    nombre: 'Rangel Frías',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'villa-mitras', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'transito', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'transito': {
    ciudad: 'mty',
    nombre: 'Tránsito',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'rangel-frias', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'laredo', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'laredo': {
    ciudad: 'mty',
    nombre: 'Laredo',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'transito', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'rodrigo-gomez', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'rodrigo-gomez': {
    ciudad: 'mty',
    nombre: 'Rodrigo Gómez',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'laredo', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'mitras-ecovia', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'mitras-ecovia': {
    ciudad: 'mty',
    nombre: 'Mitras',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'rodrigo-gomez', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'celulosa', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'mitras', tiempo: 5, linea: '1', tipo: 'transbordo' }
    ]
  },
  'celulosa': {
    ciudad: 'mty',
    nombre: 'Celulosa',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'mitras-ecovia', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'veinte-de-noviembre', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'veinte-de-noviembre': {
    ciudad: 'mty',
    nombre: '20 de Noviembre',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'celulosa', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'hidalgo-ecovia', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'hidalgo-ecovia': {
    ciudad: 'mty',
    nombre: 'Hidalgo',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'veinte-de-noviembre', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'bella-vista', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'bella-vista': {
    ciudad: 'mty',
    nombre: 'Bella Vista',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'hidalgo-ecovia', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'regina-ecovia', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'regina-ecovia': {
    ciudad: 'mty',
    nombre: 'Regina',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'bella-vista', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'asarco', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'regina', tiempo: 5, linea: '2', tipo: 'transbordo' }
    ]
  },
  'asarco': {
    ciudad: 'mty',
    nombre: 'Asarco',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'regina-ecovia', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'cementos', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'cementos': {
    ciudad: 'mty',
    nombre: 'Cementos',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'asarco', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'ruiz-cortines-ecovia', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'ruiz-cortines-ecovia': {
    ciudad: 'mty',
    nombre: 'Ruiz Cortines',
    lineas: ['3', 'ecovia'],
    adyacentes: [
      { slug: 'cementos', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'clinica-15', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'ruiz-cortines', tiempo: 5, linea: '3', tipo: 'transbordo' }
    ]
  },
  'clinica-15': {
    ciudad: 'mty',
    nombre: 'Clínica 15',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'ruiz-cortines-ecovia', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'coyoacan-mty', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'coyoacan-mty': {
    ciudad: 'mty',
    nombre: 'Coyoacán',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'clinica-15', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'churubusco', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'churubusco': {
    ciudad: 'mty',
    nombre: 'Churubusco',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'coyoacan-mty', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'vidriera', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'vidriera': {
    ciudad: 'mty',
    nombre: 'Vidriera',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'churubusco', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'las-americas', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'las-americas': {
    ciudad: 'mty',
    nombre: 'Las Américas',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'vidriera', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'adolfo-prieto', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'adolfo-prieto': {
    ciudad: 'mty',
    nombre: 'Adolfo Prieto',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'las-americas', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'central-de-carga', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'central-de-carga': {
    ciudad: 'mty',
    nombre: 'Central de Carga',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'adolfo-prieto', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'tauro', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'tauro': {
    ciudad: 'mty',
    nombre: 'Tauro',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'central-de-carga', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'miguel-aleman', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'miguel-aleman': {
    ciudad: 'mty',
    nombre: 'Miguel Alemán',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'tauro', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'calle-nueva', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'calle-nueva': {
    ciudad: 'mty',
    nombre: 'Calle Nueva',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'miguel-aleman', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'de-la-zanja', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'de-la-zanja': {
    ciudad: 'mty',
    nombre: 'De La Zanja',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'calle-nueva', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'aceros', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'aceros': {
    ciudad: 'mty',
    nombre: 'Aceros',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'de-la-zanja', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'guadalajara-ecovia', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'guadalajara-ecovia': {
    ciudad: 'mty',
    nombre: 'Guadalajara',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'aceros', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'san-miguel-ecovia', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'san-miguel-ecovia': {
    ciudad: 'mty',
    nombre: 'San Miguel',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'guadalajara-ecovia', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'valle-fertil', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'valle-fertil': {
    ciudad: 'mty',
    nombre: 'Valle Fértil',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'san-miguel-ecovia', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'movilidad-monterrey', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'movilidad-monterrey': {
    ciudad: 'mty',
    nombre: 'Movilidad Monterrey',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'valle-fertil', tiempo: 2, linea: 'ecovia', tipo: 'linea' },
      { slug: 'valle-soleado', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  'valle-soleado': {
    ciudad: 'mty',
    nombre: 'Valle Soleado',
    lineas: ['ecovia'],
    adyacentes: [
      { slug: 'movilidad-monterrey', tiempo: 2, linea: 'ecovia', tipo: 'linea' }
    ]
  },
  // CDMX TREN SUBURBANO - LÍNEA TS (Verde #00A651) - 7+1 estaciones
  // ============================================
  'buenavista-ts': {
    ciudad: 'cdmx',
    nombre: 'Buenavista',
    lineas: ['TS'],
    adyacentes: [
      { slug: 'fortuna-ts', tiempo: 4, linea: 'TS', tipo: 'linea' },
      { slug: 'buenavista', tiempo: 5, linea: 'B', tipo: 'transbordo' }
    ]
  },
  'fortuna-ts': {
    ciudad: 'cdmx',
    nombre: 'Fortuna',
    lineas: ['TS'],
    adyacentes: [
      { slug: 'buenavista-ts', tiempo: 4, linea: 'TS', tipo: 'linea' },
      { slug: 'tlalnepantla-ts', tiempo: 5, linea: 'TS', tipo: 'linea' }
    ]
  },
  'tlalnepantla-ts': {
    ciudad: 'cdmx',
    nombre: 'Tlalnepantla',
    lineas: ['TS'],
    adyacentes: [
      { slug: 'fortuna-ts', tiempo: 5, linea: 'TS', tipo: 'linea' },
      { slug: 'san-rafael-ts', tiempo: 4, linea: 'TS', tipo: 'linea' }
    ]
  },
  'san-rafael-ts': {
    ciudad: 'cdmx',
    nombre: 'San Rafael',
    lineas: ['TS'],
    adyacentes: [
      { slug: 'tlalnepantla-ts', tiempo: 4, linea: 'TS', tipo: 'linea' },
      { slug: 'lecheria-ts', tiempo: 5, linea: 'TS', tipo: 'linea' }
    ]
  },
  'lecheria-ts': {
    ciudad: 'cdmx',
    nombre: 'Lechería',
    lineas: ['TS', 'TS-AIFA'],
    adyacentes: [
      { slug: 'san-rafael-ts', tiempo: 5, linea: 'TS', tipo: 'linea' },
      { slug: 'tultitlan-ts', tiempo: 5, linea: 'TS', tipo: 'linea' },
      { slug: 'aifa-ts', tiempo: 25, linea: 'TS-AIFA', tipo: 'linea' }
    ]
  },
  'tultitlan-ts': {
    ciudad: 'cdmx',
    nombre: 'Tultitlán',
    lineas: ['TS'],
    adyacentes: [
      { slug: 'lecheria-ts', tiempo: 5, linea: 'TS', tipo: 'linea' },
      { slug: 'cuautitlan-ts', tiempo: 6, linea: 'TS', tipo: 'linea' }
    ]
  },
  'cuautitlan-ts': {
    ciudad: 'cdmx',
    nombre: 'Cuautitlán',
    lineas: ['TS'],
    adyacentes: [
      { slug: 'tultitlan-ts', tiempo: 6, linea: 'TS', tipo: 'linea' }
    ]
  },
  'aifa-ts': {
    ciudad: 'cdmx',
    nombre: 'AIFA',
    lineas: ['TS-AIFA'],
    adyacentes: [
      { slug: 'lecheria-ts', tiempo: 25, linea: 'TS-AIFA', tipo: 'linea' }
    ]
  },
  // ============================================
  // CDMX TREN LIGERO XOCHIMILCO - LÍNEA TL (Dorado #FFD700) - 18 estaciones
  // ============================================
  'tasquena-tl': {
    ciudad: 'cdmx',
    nombre: 'Tasqueña',
    lineas: ['TL'],
    adyacentes: [
      { slug: 'las-torres-tl', tiempo: 2, linea: 'TL', tipo: 'linea' },
      { slug: 'taxquena', tiempo: 5, linea: '2', tipo: 'transbordo' }
    ]
  },
  'las-torres-tl': {
    ciudad: 'cdmx',
    nombre: 'Las Torres',
    lineas: ['TL'],
    adyacentes: [
      { slug: 'tasquena-tl', tiempo: 2, linea: 'TL', tipo: 'linea' },
      { slug: 'ciudad-jardin-tl', tiempo: 2, linea: 'TL', tipo: 'linea' }
    ]
  },
  'ciudad-jardin-tl': {
    ciudad: 'cdmx',
    nombre: 'Ciudad Jardín',
    lineas: ['TL'],
    adyacentes: [
      { slug: 'las-torres-tl', tiempo: 2, linea: 'TL', tipo: 'linea' },
      { slug: 'la-virgen-tl', tiempo: 2, linea: 'TL', tipo: 'linea' }
    ]
  },
  'la-virgen-tl': {
    ciudad: 'cdmx',
    nombre: 'La Virgen',
    lineas: ['TL'],
    adyacentes: [
      { slug: 'ciudad-jardin-tl', tiempo: 2, linea: 'TL', tipo: 'linea' },
      { slug: 'xotepingo-tl', tiempo: 2, linea: 'TL', tipo: 'linea' }
    ]
  },
  'xotepingo-tl': {
    ciudad: 'cdmx',
    nombre: 'Xotepingo',
    lineas: ['TL'],
    adyacentes: [
      { slug: 'la-virgen-tl', tiempo: 2, linea: 'TL', tipo: 'linea' },
      { slug: 'nezahualpilli-tl', tiempo: 2, linea: 'TL', tipo: 'linea' }
    ]
  },
  'nezahualpilli-tl': {
    ciudad: 'cdmx',
    nombre: 'Nezahualpilli',
    lineas: ['TL'],
    adyacentes: [
      { slug: 'xotepingo-tl', tiempo: 2, linea: 'TL', tipo: 'linea' },
      { slug: 'registro-federal-tl', tiempo: 2, linea: 'TL', tipo: 'linea' }
    ]
  },
  'registro-federal-tl': {
    ciudad: 'cdmx',
    nombre: 'Registro Federal',
    lineas: ['TL'],
    adyacentes: [
      { slug: 'nezahualpilli-tl', tiempo: 2, linea: 'TL', tipo: 'linea' },
      { slug: 'textitlan-tl', tiempo: 2, linea: 'TL', tipo: 'linea' }
    ]
  },
  'textitlan-tl': {
    ciudad: 'cdmx',
    nombre: 'Textitlán',
    lineas: ['TL'],
    adyacentes: [
      { slug: 'registro-federal-tl', tiempo: 2, linea: 'TL', tipo: 'linea' },
      { slug: 'el-vergel-tl', tiempo: 2, linea: 'TL', tipo: 'linea' }
    ]
  },
  'el-vergel-tl': {
    ciudad: 'cdmx',
    nombre: 'El Vergel',
    lineas: ['TL'],
    adyacentes: [
      { slug: 'textitlan-tl', tiempo: 2, linea: 'TL', tipo: 'linea' },
      { slug: 'estadio-azteca-tl', tiempo: 2, linea: 'TL', tipo: 'linea' }
    ]
  },
  'estadio-azteca-tl': {
    ciudad: 'cdmx',
    nombre: 'Estadio Azteca',
    lineas: ['TL'],
    adyacentes: [
      { slug: 'el-vergel-tl', tiempo: 2, linea: 'TL', tipo: 'linea' },
      { slug: 'huipulco-tl', tiempo: 2, linea: 'TL', tipo: 'linea' }
    ]
  },
  'huipulco-tl': {
    ciudad: 'cdmx',
    nombre: 'Huipulco',
    lineas: ['TL'],
    adyacentes: [
      { slug: 'estadio-azteca-tl', tiempo: 2, linea: 'TL', tipo: 'linea' },
      { slug: 'xomali-tl', tiempo: 2, linea: 'TL', tipo: 'linea' }
    ]
  },
  'xomali-tl': {
    ciudad: 'cdmx',
    nombre: 'Xomali',
    lineas: ['TL'],
    adyacentes: [
      { slug: 'huipulco-tl', tiempo: 2, linea: 'TL', tipo: 'linea' },
      { slug: 'periferico-tl', tiempo: 2, linea: 'TL', tipo: 'linea' }
    ]
  },
  'periferico-tl': {
    ciudad: 'cdmx',
    nombre: 'Periférico',
    lineas: ['TL'],
    adyacentes: [
      { slug: 'xomali-tl', tiempo: 2, linea: 'TL', tipo: 'linea' },
      { slug: 'tepepan-tl', tiempo: 2, linea: 'TL', tipo: 'linea' }
    ]
  },
  'tepepan-tl': {
    ciudad: 'cdmx',
    nombre: 'Tepepan',
    lineas: ['TL'],
    adyacentes: [
      { slug: 'periferico-tl', tiempo: 2, linea: 'TL', tipo: 'linea' },
      { slug: 'la-noria-tl', tiempo: 2, linea: 'TL', tipo: 'linea' }
    ]
  },
  'la-noria-tl': {
    ciudad: 'cdmx',
    nombre: 'La Noria',
    lineas: ['TL'],
    adyacentes: [
      { slug: 'tepepan-tl', tiempo: 2, linea: 'TL', tipo: 'linea' },
      { slug: 'huichapan-tl', tiempo: 2, linea: 'TL', tipo: 'linea' }
    ]
  },
  'huichapan-tl': {
    ciudad: 'cdmx',
    nombre: 'Huichapan',
    lineas: ['TL'],
    adyacentes: [
      { slug: 'la-noria-tl', tiempo: 2, linea: 'TL', tipo: 'linea' },
      { slug: 'francisco-goitia-tl', tiempo: 2, linea: 'TL', tipo: 'linea' }
    ]
  },
  'francisco-goitia-tl': {
    ciudad: 'cdmx',
    nombre: 'Francisco Goitia',
    lineas: ['TL'],
    adyacentes: [
      { slug: 'huichapan-tl', tiempo: 2, linea: 'TL', tipo: 'linea' },
      { slug: 'xochimilco-tl', tiempo: 2, linea: 'TL', tipo: 'linea' }
    ]
  },
  'xochimilco-tl': {
    ciudad: 'cdmx',
    nombre: 'Xochimilco',
    lineas: ['TL'],
    adyacentes: [
      { slug: 'francisco-goitia-tl', tiempo: 2, linea: 'TL', tipo: 'linea' }
    ]
  },
  // ============================================
  // CDMX TROLEBÚS L11 ELEVADO (Rojo #C41E3A) - 15 estaciones
  // ============================================
  'santa-maria-aztahuacan-tb': {
    ciudad: 'cdmx',
    nombre: 'Santa María Aztahuacán',
    lineas: ['TB-11'],
    adyacentes: [
      { slug: 'constitucion-1917-tb11', tiempo: 3, linea: 'TB-11', tipo: 'linea' },
      { slug: 'santa-cruz-meyehualco-tb11', tiempo: 3, linea: 'TB-11', tipo: 'linea' }
    ]
  },
  'penon-viejo-tb': {
    ciudad: 'cdmx',
    nombre: 'Peñón Viejo',
    lineas: ['TB-11'],
    adyacentes: [
      { slug: 'santa-cruz-meyehualco-tb11', tiempo: 3, linea: 'TB-11', tipo: 'linea' },
      { slug: 'la-calma-tb', tiempo: 2, linea: 'TB-11', tipo: 'linea' }
    ]
  },
  'la-calma-tb': {
    ciudad: 'cdmx',
    nombre: 'La Calma',
    lineas: ['TB-11'],
    adyacentes: [
      { slug: 'penon-viejo-tb', tiempo: 2, linea: 'TB-11', tipo: 'linea' },
      { slug: 'santa-martha-tb', tiempo: 3, linea: 'TB-11', tipo: 'linea' }
    ]
  },
  'santa-martha-tb': {
    ciudad: 'cdmx',
    nombre: 'Santa Martha',
    lineas: ['TB-11'],
    adyacentes: [
      { slug: 'la-calma-tb', tiempo: 3, linea: 'TB-11', tipo: 'linea' },
      { slug: 'la-concordia-tb', tiempo: 3, linea: 'TB-11', tipo: 'linea' }
    ]
  },
  'la-concordia-tb': {
    ciudad: 'cdmx',
    nombre: 'La Concordia',
    lineas: ['TB-11'],
    adyacentes: [
      { slug: 'santa-martha-tb', tiempo: 3, linea: 'TB-11', tipo: 'linea' },
      { slug: 'los-reyes-tb', tiempo: 3, linea: 'TB-11', tipo: 'linea' }
    ]
  },
  'los-reyes-tb': {
    ciudad: 'cdmx',
    nombre: 'Los Reyes',
    lineas: ['TB-11'],
    adyacentes: [
      { slug: 'la-concordia-tb', tiempo: 3, linea: 'TB-11', tipo: 'linea' },
      { slug: 'tecamachalco-tb', tiempo: 3, linea: 'TB-11', tipo: 'linea' }
    ]
  },
  'tecamachalco-tb': {
    ciudad: 'cdmx',
    nombre: 'Tecamachalco',
    lineas: ['TB-11'],
    adyacentes: [
      { slug: 'los-reyes-tb', tiempo: 3, linea: 'TB-11', tipo: 'linea' },
      { slug: 'san-isidro-tb', tiempo: 2, linea: 'TB-11', tipo: 'linea' }
    ]
  },
  'san-isidro-tb': {
    ciudad: 'cdmx',
    nombre: 'San Isidro',
    lineas: ['TB-11'],
    adyacentes: [
      { slug: 'tecamachalco-tb', tiempo: 2, linea: 'TB-11', tipo: 'linea' },
      { slug: 'la-magdalena-tb', tiempo: 2, linea: 'TB-11', tipo: 'linea' }
    ]
  },
  'la-magdalena-tb': {
    ciudad: 'cdmx',
    nombre: 'La Magdalena',
    lineas: ['TB-11'],
    adyacentes: [
      { slug: 'san-isidro-tb', tiempo: 2, linea: 'TB-11', tipo: 'linea' },
      { slug: 'san-martin-tb', tiempo: 3, linea: 'TB-11', tipo: 'linea' }
    ]
  },
  'san-martin-tb': {
    ciudad: 'cdmx',
    nombre: 'San Martín',
    lineas: ['TB-11'],
    adyacentes: [
      { slug: 'la-magdalena-tb', tiempo: 3, linea: 'TB-11', tipo: 'linea' },
      { slug: 'san-juan-tlalpizahuac-tb', tiempo: 2, linea: 'TB-11', tipo: 'linea' }
    ]
  },
  'san-juan-tlalpizahuac-tb': {
    ciudad: 'cdmx',
    nombre: 'San Juan Tlalpizahuac',
    lineas: ['TB-11'],
    adyacentes: [
      { slug: 'san-martin-tb', tiempo: 2, linea: 'TB-11', tipo: 'linea' },
      { slug: 'san-lucas-amalinalco-tb', tiempo: 2, linea: 'TB-11', tipo: 'linea' }
    ]
  },
  'san-lucas-amalinalco-tb': {
    ciudad: 'cdmx',
    nombre: 'San Lucas Amalinalco',
    lineas: ['TB-11'],
    adyacentes: [
      { slug: 'san-juan-tlalpizahuac-tb', tiempo: 2, linea: 'TB-11', tipo: 'linea' },
      { slug: 'chalco-tb', tiempo: 3, linea: 'TB-11', tipo: 'linea' }
    ]
  },
  'chalco-tb': {
    ciudad: 'cdmx',
    nombre: 'Chalco',
    lineas: ['TB-11'],
    adyacentes: [
      { slug: 'san-lucas-amalinalco-tb', tiempo: 3, linea: 'TB-11', tipo: 'linea' }
    ]
  },
  // ============================================
  // AEROPUERTOS — Nodos de conexión al transporte urbano
  // ============================================
  // AICM (MEX) → Metro Terminal Aérea (L5) ~5 min caminando
  'aeropuerto-cdmx': {
    ciudad: 'cdmx',
    nombre: 'Aeropuerto CDMX (MEX)',
    lineas: ['aeropuerto'],
    adyacentes: [
      { slug: 'terminal-aerea', tiempo: 5, linea: '5', tipo: 'transbordo' }
    ]
  },
  // ============================================
  // TERMINALES DE AUTOBUSES — Nodos de conexión
  // ============================================
  // TAPO ↔ San Lázaro (L1/B), Poniente ↔ Observatorio (L1), Sur ↔ Taxqueña (L2)
  'terminal-tapo': {
    ciudad: 'cdmx',
    nombre: 'TAPO',
    lineas: ['terminal'],
    adyacentes: [
      { slug: 'san-lazaro', tiempo: 3, linea: '1', tipo: 'transbordo' }
    ]
  },
  'terminal-norte': {
    ciudad: 'cdmx',
    nombre: 'Central del Norte',
    lineas: ['terminal'],
    adyacentes: [
      { slug: 'canal-del-norte', tiempo: 10, linea: '5', tipo: 'transbordo' }
    ]
  },
  'terminal-poniente': {
    ciudad: 'cdmx',
    nombre: 'Terminal Poniente (Observatorio)',
    lineas: ['terminal'],
    adyacentes: [
      { slug: 'observatorio', tiempo: 3, linea: '1', tipo: 'transbordo' }
    ]
  },
  'terminal-sur': {
    ciudad: 'cdmx',
    nombre: 'Terminal del Sur (Taxqueña)',
    lineas: ['terminal'],
    adyacentes: [
      { slug: 'taxquena', tiempo: 3, linea: '2', tipo: 'transbordo' }
    ]
  },
  'cb-indios-verdes': {
    ciudad: 'cdmx',
    nombre: 'Indios Verdes',
    lineas: ['CB-1'],
    adyacentes: [
      { slug: 'cb-ticoman', tiempo: 6, linea: 'CB-1', tipo: 'linea' },
      { slug: 'indios-verdes', tiempo: 5, linea: 'metro-1', tipo: 'transbordo' },
      { slug: 'mb-indios-verdes', tiempo: 5, linea: 'MB-1', tipo: 'transbordo' }
    ]
  },
  'cb-ticoman': {
    ciudad: 'cdmx',
    nombre: 'Ticomán',
    lineas: ['CB-1'],
    adyacentes: [
      { slug: 'cb-indios-verdes', tiempo: 6, linea: 'CB-1', tipo: 'linea' },
      { slug: 'cb-valle-de-mexico', tiempo: 4, linea: 'CB-1', tipo: 'linea' }
    ]
  },
  'cb-valle-de-mexico': {
    ciudad: 'cdmx',
    nombre: 'Valle de México',
    lineas: ['CB-1'],
    adyacentes: [
      { slug: 'cb-ticoman', tiempo: 4, linea: 'CB-1', tipo: 'linea' },
      { slug: 'cb-francisco-i-madero', tiempo: 5, linea: 'CB-1', tipo: 'linea' }
    ]
  },
  'cb-francisco-i-madero': {
    ciudad: 'cdmx',
    nombre: 'Francisco I. Madero',
    lineas: ['CB-1'],
    adyacentes: [
      { slug: 'cb-valle-de-mexico', tiempo: 5, linea: 'CB-1', tipo: 'linea' },
      { slug: 'cb-lomas-de-la-era', tiempo: 4, linea: 'CB-1', tipo: 'linea' }
    ]
  },
  'cb-lomas-de-la-era': {
    ciudad: 'cdmx',
    nombre: 'Lomas de la Era',
    lineas: ['CB-1'],
    adyacentes: [
      { slug: 'cb-francisco-i-madero', tiempo: 4, linea: 'CB-1', tipo: 'linea' },
      { slug: 'cb-tlalpexco', tiempo: 5, linea: 'CB-1', tipo: 'linea' }
    ]
  },
  'cb-tlalpexco': {
    ciudad: 'cdmx',
    nombre: 'Tlalpexco',
    lineas: ['CB-1'],
    adyacentes: [
      { slug: 'cb-lomas-de-la-era', tiempo: 5, linea: 'CB-1', tipo: 'linea' }
    ]
  },
  'cb-constitucion-1917': {
    ciudad: 'cdmx',
    nombre: 'Constitución de 1917',
    lineas: ['CB-2'],
    adyacentes: [
      { slug: 'cb-quetzalcoatl', tiempo: 6, linea: 'CB-2', tipo: 'linea' },
      { slug: 'constitucion-de-1917', tiempo: 5, linea: 'metro-9', tipo: 'transbordo' }
    ]
  },
  'cb-quetzalcoatl': {
    ciudad: 'cdmx',
    nombre: 'Quetzalcóatl',
    lineas: ['CB-2'],
    adyacentes: [
      { slug: 'cb-constitucion-1917', tiempo: 6, linea: 'CB-2', tipo: 'linea' },
      { slug: 'cb-aquiles-serdan', tiempo: 4, linea: 'CB-2', tipo: 'linea' }
    ]
  },
  'cb-aquiles-serdan': {
    ciudad: 'cdmx',
    nombre: 'Aquiles Serdán',
    lineas: ['CB-2'],
    adyacentes: [
      { slug: 'cb-quetzalcoatl', tiempo: 4, linea: 'CB-2', tipo: 'linea' },
      { slug: 'cb-la-estrella', tiempo: 5, linea: 'CB-2', tipo: 'linea' }
    ]
  },
  'cb-la-estrella': {
    ciudad: 'cdmx',
    nombre: 'La Estrella',
    lineas: ['CB-2'],
    adyacentes: [
      { slug: 'cb-aquiles-serdan', tiempo: 5, linea: 'CB-2', tipo: 'linea' },
      { slug: 'cb-el-trebol', tiempo: 4, linea: 'CB-2', tipo: 'linea' }
    ]
  },
  'cb-el-trebol': {
    ciudad: 'cdmx',
    nombre: 'El Trébol',
    lineas: ['CB-2'],
    adyacentes: [
      { slug: 'cb-la-estrella', tiempo: 4, linea: 'CB-2', tipo: 'linea' },
      { slug: 'cb-miguel-teotongo', tiempo: 5, linea: 'CB-2', tipo: 'linea' }
    ]
  },
  'cb-miguel-teotongo': {
    ciudad: 'cdmx',
    nombre: 'Miguel Teotongo',
    lineas: ['CB-2'],
    adyacentes: [
      { slug: 'cb-el-trebol', tiempo: 5, linea: 'CB-2', tipo: 'linea' },
      { slug: 'cb-santa-marta', tiempo: 4, linea: 'CB-2', tipo: 'linea' }
    ]
  },
  'cb-santa-marta': {
    ciudad: 'cdmx',
    nombre: 'Santa Marta',
    lineas: ['CB-2'],
    adyacentes: [
      { slug: 'cb-miguel-teotongo', tiempo: 4, linea: 'CB-2', tipo: 'linea' },
      { slug: 'santa-marta', tiempo: 5, linea: 'metro-a', tipo: 'transbordo' }
    ]
  },
  'cb-vasco-quiroga': {
    ciudad: 'cdmx',
    nombre: 'Vasco de Quiroga',
    lineas: ['CB-3'],
    adyacentes: [
      { slug: 'cb-panteon-dolores', tiempo: 4, linea: 'CB-3', tipo: 'linea' }
    ]
  },
  'cb-panteon-dolores': {
    ciudad: 'cdmx',
    nombre: 'Panteón Dolores',
    lineas: ['CB-3'],
    adyacentes: [
      { slug: 'cb-vasco-quiroga', tiempo: 4, linea: 'CB-3', tipo: 'linea' },
      { slug: 'cb-cuicuilco', tiempo: 5, linea: 'CB-3', tipo: 'linea' }
    ]
  },
  'cb-cuicuilco': {
    ciudad: 'cdmx',
    nombre: 'Cuicuilco',
    lineas: ['CB-3'],
    adyacentes: [
      { slug: 'cb-panteon-dolores', tiempo: 5, linea: 'CB-3', tipo: 'linea' },
      { slug: 'cb-santa-rosa', tiempo: 4, linea: 'CB-3', tipo: 'linea' }
    ]
  },
  'cb-santa-rosa': {
    ciudad: 'cdmx',
    nombre: 'Santa Rosa',
    lineas: ['CB-3'],
    adyacentes: [
      { slug: 'cb-cuicuilco', tiempo: 4, linea: 'CB-3', tipo: 'linea' },
      { slug: 'cb-villa-coapa', tiempo: 5, linea: 'CB-3', tipo: 'linea' }
    ]
  },
  'cb-villa-coapa': {
    ciudad: 'cdmx',
    nombre: 'Villa Coapa',
    lineas: ['CB-3'],
    adyacentes: [
      { slug: 'cb-santa-rosa', tiempo: 5, linea: 'CB-3', tipo: 'linea' },
      { slug: 'cb-los-pinos', tiempo: 4, linea: 'CB-3', tipo: 'linea' }
    ]
  },
  'cb-los-pinos': {
    ciudad: 'cdmx',
    nombre: 'Los Pinos',
    lineas: ['CB-3'],
    adyacentes: [
      { slug: 'cb-villa-coapa', tiempo: 4, linea: 'CB-3', tipo: 'linea' },
      { slug: 'constituyentes', tiempo: 5, linea: 'metro-1', tipo: 'transbordo' }
    ]
  },
  'corredor-norte-tb': {
    ciudad: 'cdmx',
    nombre: 'Corredor Norte Tb',
    lineas: ['TB-1'],
    adyacentes: [
      { slug: 'bellas-artes-tb', tiempo: 3, linea: 'TB-1', tipo: 'linea' }
    ]
  },
  'bellas-artes-tb': {
    ciudad: 'cdmx',
    nombre: 'Bellas Artes Tb',
    lineas: ['TB-1'],
    adyacentes: [
      { slug: 'corredor-norte-tb', tiempo: 3, linea: 'TB-1', tipo: 'linea' },
      { slug: 'eje-central-salto-agua-tb', tiempo: 3, linea: 'TB-1', tipo: 'linea' }
    ]
  },
  'eje-central-salto-agua-tb': {
    ciudad: 'cdmx',
    nombre: 'Eje Central Salto Agua Tb',
    lineas: ['TB-1'],
    adyacentes: [
      { slug: 'bellas-artes-tb', tiempo: 3, linea: 'TB-1', tipo: 'linea' },
      { slug: 'eje-central-chabacano-tb', tiempo: 3, linea: 'TB-1', tipo: 'linea' }
    ]
  },
  'eje-central-chabacano-tb': {
    ciudad: 'cdmx',
    nombre: 'Eje Central Chabacano Tb',
    lineas: ['TB-1'],
    adyacentes: [
      { slug: 'eje-central-salto-agua-tb', tiempo: 3, linea: 'TB-1', tipo: 'linea' },
      { slug: 'eje-central-nativitas-tb', tiempo: 3, linea: 'TB-1', tipo: 'linea' }
    ]
  },
  'eje-central-nativitas-tb': {
    ciudad: 'cdmx',
    nombre: 'Eje Central Nativitas Tb',
    lineas: ['TB-1'],
    adyacentes: [
      { slug: 'eje-central-chabacano-tb', tiempo: 3, linea: 'TB-1', tipo: 'linea' },
      { slug: 'huipulco-tb', tiempo: 3, linea: 'TB-1', tipo: 'linea' }
    ]
  },
  'huipulco-tb': {
    ciudad: 'cdmx',
    nombre: 'Huipulco Tb',
    lineas: ['TB-1'],
    adyacentes: [
      { slug: 'eje-central-nativitas-tb', tiempo: 3, linea: 'TB-1', tipo: 'linea' }
    ]
  },
  'pantitlan-tb': {
    ciudad: 'cdmx',
    nombre: 'Pantitlan Tb',
    lineas: ['TB-10'],
    adyacentes: [
      { slug: 'av-texcoco-tb', tiempo: 3, linea: 'TB-10', tipo: 'linea' }
    ]
  },
  'av-texcoco-tb': {
    ciudad: 'cdmx',
    nombre: 'Av Texcoco Tb',
    lineas: ['TB-10'],
    adyacentes: [
      { slug: 'pantitlan-tb', tiempo: 3, linea: 'TB-10', tipo: 'linea' },
      { slug: 'cd-neza-tb', tiempo: 3, linea: 'TB-10', tipo: 'linea' }
    ]
  },
  'cd-neza-tb': {
    ciudad: 'cdmx',
    nombre: 'Cd Neza Tb',
    lineas: ['TB-10'],
    adyacentes: [
      { slug: 'av-texcoco-tb', tiempo: 3, linea: 'TB-10', tipo: 'linea' }
    ]
  },
  'constitucion-1917-tb11': {
    ciudad: 'cdmx',
    nombre: 'Constitucion 1917 Tb11',
    lineas: ['TB-11'],
    adyacentes: [
      { slug: 'santa-maria-aztahuacan-tb', tiempo: 3, linea: 'TB-11', tipo: 'linea' }
    ]
  },
  'santa-cruz-meyehualco-tb11': {
    ciudad: 'cdmx',
    nombre: 'Santa Cruz Meyehualco Tb11',
    lineas: ['TB-11'],
    adyacentes: [
      { slug: 'santa-maria-aztahuacan-tb', tiempo: 3, linea: 'TB-11', tipo: 'linea' },
      { slug: 'peñon-viejo-tb', tiempo: 3, linea: 'TB-11', tipo: 'linea' }
    ]
  },
  'peñon-viejo-tb': {
    ciudad: 'cdmx',
    nombre: 'Peñon Viejo Tb',
    lineas: ['TB-11'],
    adyacentes: [
      { slug: 'santa-cruz-meyehualco-tb11', tiempo: 3, linea: 'TB-11', tipo: 'linea' },
      { slug: 'la-calma-tb', tiempo: 3, linea: 'TB-11', tipo: 'linea' }
    ]
  },
  'chapultepec-tb': {
    ciudad: 'cdmx',
    nombre: 'Chapultepec Tb',
    lineas: ['TB-2'],
    adyacentes: [
      { slug: 'centro-historico-tb2', tiempo: 3, linea: 'TB-2', tipo: 'linea' }
    ]
  },
  'merced-tb': {
    ciudad: 'cdmx',
    nombre: 'Merced Tb',
    lineas: ['TB-2'],
    adyacentes: [
      { slug: 'centro-historico-tb2', tiempo: 3, linea: 'TB-2', tipo: 'linea' },
      { slug: 'calzada-viga-tb', tiempo: 3, linea: 'TB-2', tipo: 'linea' }
    ]
  },
  'calzada-viga-tb': {
    ciudad: 'cdmx',
    nombre: 'Calzada Viga Tb',
    lineas: ['TB-2'],
    adyacentes: [
      { slug: 'merced-tb', tiempo: 3, linea: 'TB-2', tipo: 'linea' }
    ]
  },
  'alamos-tb': {
    ciudad: 'cdmx',
    nombre: 'Alamos Tb',
    lineas: ['TB-3'],
    adyacentes: [
      { slug: 'patriotismo-tb', tiempo: 3, linea: 'TB-3', tipo: 'linea' }
    ]
  },
  'patriotismo-tb': {
    ciudad: 'cdmx',
    nombre: 'Patriotismo Tb',
    lineas: ['TB-3'],
    adyacentes: [
      { slug: 'alamos-tb', tiempo: 3, linea: 'TB-3', tipo: 'linea' },
      { slug: 'mixcoac-tb', tiempo: 3, linea: 'TB-3', tipo: 'linea' }
    ]
  },
  'mixcoac-tb': {
    ciudad: 'cdmx',
    nombre: 'Mixcoac Tb',
    lineas: ['TB-3'],
    adyacentes: [
      { slug: 'patriotismo-tb', tiempo: 3, linea: 'TB-3', tipo: 'linea' },
      { slug: 'tacubaya-tb', tiempo: 3, linea: 'TB-3', tipo: 'linea' }
    ]
  },
  'tacubaya-tb': {
    ciudad: 'cdmx',
    nombre: 'Tacubaya Tb',
    lineas: ['TB-3'],
    adyacentes: [
      { slug: 'mixcoac-tb', tiempo: 3, linea: 'TB-3', tipo: 'linea' }
    ]
  },
  'san-lazaro-tb': {
    ciudad: 'cdmx',
    nombre: 'San Lazaro Tb',
    lineas: ['TB-4'],
    adyacentes: [
      { slug: 'zaragoza-tb', tiempo: 3, linea: 'TB-4', tipo: 'linea' }
    ]
  },
  'zaragoza-tb': {
    ciudad: 'cdmx',
    nombre: 'Zaragoza Tb',
    lineas: ['TB-4'],
    adyacentes: [
      { slug: 'san-lazaro-tb', tiempo: 3, linea: 'TB-4', tipo: 'linea' },
      { slug: 'iztapalapa-tb', tiempo: 3, linea: 'TB-4', tipo: 'linea' }
    ]
  },
  'iztapalapa-tb': {
    ciudad: 'cdmx',
    nombre: 'Iztapalapa Tb',
    lineas: ['TB-4'],
    adyacentes: [
      { slug: 'zaragoza-tb', tiempo: 3, linea: 'TB-4', tipo: 'linea' },
      { slug: 'santa-martha-tb4', tiempo: 3, linea: 'TB-4', tipo: 'linea' }
    ]
  },
  'canal-san-juan-tb': {
    ciudad: 'cdmx',
    nombre: 'Canal San Juan Tb',
    lineas: ['TB-5'],
    adyacentes: [
      { slug: 'san-lazaro-tb5', tiempo: 3, linea: 'TB-5', tipo: 'linea' },
      { slug: 'constitucion-1917-tb5', tiempo: 3, linea: 'TB-5', tipo: 'linea' }
    ]
  },
  'constitucion-1917-tb5': {
    ciudad: 'cdmx',
    nombre: 'Constitucion 1917 Tb5',
    lineas: ['TB-5'],
    adyacentes: [
      { slug: 'canal-san-juan-tb', tiempo: 3, linea: 'TB-5', tipo: 'linea' },
      { slug: 'la-turba-tb', tiempo: 3, linea: 'TB-5', tipo: 'linea' }
    ]
  },
  'la-turba-tb': {
    ciudad: 'cdmx',
    nombre: 'La Turba Tb',
    lineas: ['TB-5'],
    adyacentes: [
      { slug: 'constitucion-1917-tb5', tiempo: 3, linea: 'TB-5', tipo: 'linea' }
    ]
  },
  'hidalgo-tb': {
    ciudad: 'cdmx',
    nombre: 'Hidalgo Tb',
    lineas: ['TB-6'],
    adyacentes: [
      { slug: 'doctores-tb', tiempo: 3, linea: 'TB-6', tipo: 'linea' }
    ]
  },
  'doctores-tb': {
    ciudad: 'cdmx',
    nombre: 'Doctores Tb',
    lineas: ['TB-6'],
    adyacentes: [
      { slug: 'hidalgo-tb', tiempo: 3, linea: 'TB-6', tipo: 'linea' },
      { slug: 'hospital-general-tb', tiempo: 3, linea: 'TB-6', tipo: 'linea' }
    ]
  },
  'hospital-general-tb': {
    ciudad: 'cdmx',
    nombre: 'Hospital General Tb',
    lineas: ['TB-6'],
    adyacentes: [
      { slug: 'doctores-tb', tiempo: 3, linea: 'TB-6', tipo: 'linea' }
    ]
  },
  'insurgentes-tb': {
    ciudad: 'cdmx',
    nombre: 'Insurgentes Tb',
    lineas: ['TB-7'],
    adyacentes: [
      { slug: 'chapultepec-tb7', tiempo: 3, linea: 'TB-7', tipo: 'linea' },
      { slug: 'mixcoac-tb7', tiempo: 3, linea: 'TB-7', tipo: 'linea' }
    ]
  },
  'cu-tb': {
    ciudad: 'cdmx',
    nombre: 'Cu Tb',
    lineas: ['TB-7'],
    adyacentes: [
      { slug: 'mixcoac-tb7', tiempo: 3, linea: 'TB-7', tipo: 'linea' }
    ]
  },
  'constitucion-1917-tb8': {
    ciudad: 'cdmx',
    nombre: 'Constitucion 1917 Tb8',
    lineas: ['TB-8'],
    adyacentes: [
      { slug: 'santa-cruz-meyehualco-tb', tiempo: 3, linea: 'TB-8', tipo: 'linea' }
    ]
  },
  'santa-cruz-meyehualco-tb': {
    ciudad: 'cdmx',
    nombre: 'Santa Cruz Meyehualco Tb',
    lineas: ['TB-8'],
    adyacentes: [
      { slug: 'constitucion-1917-tb8', tiempo: 3, linea: 'TB-8', tipo: 'linea' },
      { slug: 'iztapalapa-centro-tb', tiempo: 3, linea: 'TB-8', tipo: 'linea' }
    ]
  },
  'iztapalapa-centro-tb': {
    ciudad: 'cdmx',
    nombre: 'Iztapalapa Centro Tb',
    lineas: ['TB-8'],
    adyacentes: [
      { slug: 'santa-cruz-meyehualco-tb', tiempo: 3, linea: 'TB-8', tipo: 'linea' }
    ]
  },
  'garibaldi-tb': {
    ciudad: 'cdmx',
    nombre: 'Garibaldi Tb',
    lineas: ['TB-9'],
    adyacentes: [
      { slug: 'centro-historico-tb9', tiempo: 3, linea: 'TB-9', tipo: 'linea' }
    ]
  },
  'obrera-tb': {
    ciudad: 'cdmx',
    nombre: 'Obrera Tb',
    lineas: ['TB-9'],
    adyacentes: [
      { slug: 'centro-historico-tb9', tiempo: 3, linea: 'TB-9', tipo: 'linea' },
      { slug: 'villa-cortes-tb', tiempo: 3, linea: 'TB-9', tipo: 'linea' }
    ]
  },
  'villa-cortes-tb': {
    ciudad: 'cdmx',
    nombre: 'Villa Cortes Tb',
    lineas: ['TB-9'],
    adyacentes: [
      { slug: 'obrera-tb', tiempo: 3, linea: 'TB-9', tipo: 'linea' }
    ]
  },  'cb-cuautepec': {
    ciudad: 'cdmx',
    nombre: 'Cb Cuautepec',
    lineas: ['CB-1'],
    adyacentes: [
      { slug: 'cb-indios-verdes', tiempo: 2, linea: 'CB-1', tipo: 'linea' },
      { slug: 'cb-ticoman', tiempo: 2, linea: 'CB-1', tipo: 'linea' }
    ]
  },
  'cb-la-pastora': {
    ciudad: 'cdmx',
    nombre: 'Cb La Pastora',
    lineas: ['CB-1'],
    adyacentes: [
      { slug: 'cb-ticoman', tiempo: 2, linea: 'CB-1', tipo: 'linea' },
      { slug: 'cb-torres-buenavista', tiempo: 2, linea: 'CB-1', tipo: 'linea' }
    ]
  },
  'cb-torres-buenavista': {
    ciudad: 'cdmx',
    nombre: 'Cb Torres Buenavista',
    lineas: ['CB-1'],
    adyacentes: [
      { slug: 'cb-la-pastora', tiempo: 2, linea: 'CB-1', tipo: 'linea' }
    ]
  },
  'cb-lomas-estancia': {
    ciudad: 'cdmx',
    nombre: 'Cb Lomas Estancia',
    lineas: ['CB-2'],
    adyacentes: [
      { slug: 'cb-tlalpexco', tiempo: 2, linea: 'CB-2', tipo: 'linea' },
      { slug: 'cb-constitucion-1917', tiempo: 2, linea: 'CB-2', tipo: 'linea' }
    ]
  },
  'cb-xalpa': {
    ciudad: 'cdmx',
    nombre: 'Cb Xalpa',
    lineas: ['CB-2'],
    adyacentes: [
      { slug: 'cb-constitucion-1917', tiempo: 2, linea: 'CB-2', tipo: 'linea' },
      { slug: 'cb-los-pinos', tiempo: 2, linea: 'CB-2', tipo: 'linea' }
    ]
  },
  'cb-charreria': {
    ciudad: 'cdmx',
    nombre: 'Cb Charreria',
    lineas: ['CB-3'],
    adyacentes: [
      { slug: 'cb-indios-verdes', tiempo: 2, linea: 'CB-3', tipo: 'linea' },
      { slug: 'cb-campos-revolucion', tiempo: 2, linea: 'CB-3', tipo: 'linea' }
    ]
  },
  'cb-campos-revolucion': {
    ciudad: 'cdmx',
    nombre: 'Cb Campos Revolucion',
    lineas: ['CB-3'],
    adyacentes: [
      { slug: 'cb-charreria', tiempo: 2, linea: 'CB-3', tipo: 'linea' },
      { slug: 'cb-parcur', tiempo: 2, linea: 'CB-3', tipo: 'linea' }
    ]
  },
  'cb-parcur': {
    ciudad: 'cdmx',
    nombre: 'Cb Parcur',
    lineas: ['CB-3'],
    adyacentes: [
      { slug: 'cb-campos-revolucion', tiempo: 2, linea: 'CB-3', tipo: 'linea' },
      { slug: 'cb-quetzalcoatl', tiempo: 2, linea: 'CB-3', tipo: 'linea' }
    ]
  },
  'cb-cineteca-bodega': {
    ciudad: 'cdmx',
    nombre: 'Cb Cineteca Bodega',
    lineas: ['CB-3'],
    adyacentes: [
      { slug: 'cb-quetzalcoatl', tiempo: 2, linea: 'CB-3', tipo: 'linea' },
      { slug: 'cb-miguel-teotongo', tiempo: 2, linea: 'CB-3', tipo: 'linea' }
    ]
  },
  'centro-historico-tb2': {
    ciudad: 'cdmx',
    nombre: 'Centro Historico Tb2',
    lineas: ['TB-2'],
    adyacentes: [
      { slug: 'chapultepec-tb', tiempo: 3, linea: 'TB-2', tipo: 'linea' },
      { slug: 'merced-tb', tiempo: 3, linea: 'TB-2', tipo: 'linea' }
    ]
  },
  'centro-historico-tb9': {
    ciudad: 'cdmx',
    nombre: 'Centro Historico Tb9',
    lineas: ['TB-9'],
    adyacentes: [
      { slug: 'garibaldi-tb', tiempo: 3, linea: 'TB-9', tipo: 'linea' },
      { slug: 'obrera-tb', tiempo: 3, linea: 'TB-9', tipo: 'linea' }
    ]
  },
  'chapultepec-tb7': {
    ciudad: 'cdmx',
    nombre: 'Chapultepec Tb7',
    lineas: ['TB-7'],
    adyacentes: [
      { slug: 'insurgentes-tb', tiempo: 3, linea: 'TB-7', tipo: 'linea' },
      { slug: 'mixcoac-tb7', tiempo: 3, linea: 'TB-7', tipo: 'linea' }
    ]
  },
  'mixcoac-tb7': {
    ciudad: 'cdmx',
    nombre: 'Mixcoac Tb7',
    lineas: ['TB-7'],
    adyacentes: [
      { slug: 'chapultepec-tb7', tiempo: 3, linea: 'TB-7', tipo: 'linea' },
      { slug: 'cu-tb', tiempo: 3, linea: 'TB-7', tipo: 'linea' }
    ]
  },
  'san-lazaro-tb5': {
    ciudad: 'cdmx',
    nombre: 'San Lazaro Tb5',
    lineas: ['TB-5'],
    adyacentes: [
      { slug: 'canal-san-juan-tb', tiempo: 3, linea: 'TB-5', tipo: 'linea' },
      { slug: 'constitucion-1917-tb5', tiempo: 3, linea: 'TB-5', tipo: 'linea' }
    ]
  },
  'santa-martha-tb4': {
    ciudad: 'cdmx',
    nombre: 'Santa Martha Tb4',
    lineas: ['TB-4'],
    adyacentes: [
      { slug: 'zaragoza-tb', tiempo: 3, linea: 'TB-4', tipo: 'linea' },
      { slug: 'iztapalapa-tb', tiempo: 3, linea: 'TB-4', tipo: 'linea' }
    ]
  },
  // === METROBÚS (151 estaciones, 7 líneas) ===
  'mb-indios-verdes': {
    ciudad: 'cdmx',
    nombre: 'Indios Verdes',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-morelos', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-morelos': {
    ciudad: 'cdmx',
    nombre: 'Morelos',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-indios-verdes', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-vallejo', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-vallejo': {
    ciudad: 'cdmx',
    nombre: 'Vallejo',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-morelos', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-autobuses-de-oriente', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-autobuses-de-oriente': {
    ciudad: 'cdmx',
    nombre: 'Autobuses de Oriente',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-vallejo', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-terminal-central-norte', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-terminal-central-norte': {
    ciudad: 'cdmx',
    nombre: 'Terminal Central Norte',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-autobuses-de-oriente', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-calle-5-de-mayo', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-calle-5-de-mayo': {
    ciudad: 'cdmx',
    nombre: 'Calle 5 de Mayo',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-terminal-central-norte', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-garcia-navarrete', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-garcia-navarrete': {
    ciudad: 'cdmx',
    nombre: 'García Navarrete',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-calle-5-de-mayo', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-avenida-revolucion', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-avenida-revolucion': {
    ciudad: 'cdmx',
    nombre: 'Avenida Revolución',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-garcia-navarrete', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-calle-alfonso-reyes', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-calle-alfonso-reyes': {
    ciudad: 'cdmx',
    nombre: 'Calle Alfonso Reyes',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-avenida-revolucion', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-buenavista', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-buenavista': {
    ciudad: 'cdmx',
    nombre: 'Buenavista',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-calle-alfonso-reyes', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-revolucion', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-revolucion': {
    ciudad: 'cdmx',
    nombre: 'Revolución',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-buenavista', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-magnolias', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-magnolias': {
    ciudad: 'cdmx',
    nombre: 'Magnolias',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-revolucion', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-plaza-de-la-republica', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-plaza-de-la-republica': {
    ciudad: 'cdmx',
    nombre: 'Plaza de la República',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-magnolias', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-fuente-de-petrarca', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-fuente-de-petrarca': {
    ciudad: 'cdmx',
    nombre: 'Fuente de Petrarca',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-plaza-de-la-republica', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-lopez-mateos', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-lopez-mateos': {
    ciudad: 'cdmx',
    nombre: 'López Mateos',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-fuente-de-petrarca', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-avenida-chapultepec', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-avenida-chapultepec': {
    ciudad: 'cdmx',
    nombre: 'Avenida Chapultepec',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-lopez-mateos', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-paseo-de-la-reforma', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-paseo-de-la-reforma': {
    ciudad: 'cdmx',
    nombre: 'Paseo de la Reforma',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-avenida-chapultepec', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-constitucion', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-constitucion': {
    ciudad: 'cdmx',
    nombre: 'Constitución',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-paseo-de-la-reforma', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-angel-independencia', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-angel-independencia': {
    ciudad: 'cdmx',
    nombre: 'Ángel de la Independencia',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-constitucion', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-avenida-ejercito-nacional', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-avenida-ejercito-nacional': {
    ciudad: 'cdmx',
    nombre: 'Avenida Ejército Nacional',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-angel-independencia', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-parque-espana', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-parque-espana': {
    ciudad: 'cdmx',
    nombre: 'Parque España',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-avenida-ejercito-nacional', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-lomas-del-virrey', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-lomas-del-virrey': {
    ciudad: 'cdmx',
    nombre: 'Lomas del Virrey',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-parque-espana', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-avenida-lomas', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-avenida-lomas': {
    ciudad: 'cdmx',
    nombre: 'Avenida Lomas',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-lomas-del-virrey', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-miguel-e-ahumada', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-miguel-e-ahumada': {
    ciudad: 'cdmx',
    nombre: 'Miguel E. Ahumada',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-avenida-lomas', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-periferica-sur', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-periferica-sur': {
    ciudad: 'cdmx',
    nombre: 'Periférica Sur',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-miguel-e-ahumada', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-estadio-azteca', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-estadio-azteca': {
    ciudad: 'cdmx',
    nombre: 'Estadio Azteca',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-periferica-sur', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-municipios', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-municipios': {
    ciudad: 'cdmx',
    nombre: 'Municipios',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-estadio-azteca', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-natividad', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-natividad': {
    ciudad: 'cdmx',
    nombre: 'Natividad',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-municipios', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-avenida-santa-rosa', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-avenida-santa-rosa': {
    ciudad: 'cdmx',
    nombre: 'Avenida Santa Rosa',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-natividad', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-centro-comercial-gigante', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-centro-comercial-gigante': {
    ciudad: 'cdmx',
    nombre: 'Centro Comercial Gigante',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-avenida-santa-rosa', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-avenida-division-del-norte', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-avenida-division-del-norte': {
    ciudad: 'cdmx',
    nombre: 'Avenida División del Norte',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-centro-comercial-gigante', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-avenida-mexico', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-avenida-mexico': {
    ciudad: 'cdmx',
    nombre: 'Avenida México',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-avenida-division-del-norte', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-avenida-copilco', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-avenida-copilco': {
    ciudad: 'cdmx',
    nombre: 'Avenida Copilco',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-avenida-mexico', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-avenida-universidad', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-avenida-universidad': {
    ciudad: 'cdmx',
    nombre: 'Avenida Universidad',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-avenida-copilco', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-central-de-abastos', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-central-de-abastos': {
    ciudad: 'cdmx',
    nombre: 'Central de Abastos',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-avenida-universidad', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-avenida-del-taller', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-avenida-del-taller': {
    ciudad: 'cdmx',
    nombre: 'Avenida del Taller',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-central-de-abastos', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-xotepingo', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-xotepingo': {
    ciudad: 'cdmx',
    nombre: 'Xotepingo',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-avenida-del-taller', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-avenida-prolongacion-insurgentes', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-avenida-prolongacion-insurgentes': {
    ciudad: 'cdmx',
    nombre: 'Avenida Prolongación Insurgentes',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-xotepingo', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-avenida-universidad-sur', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-avenida-universidad-sur': {
    ciudad: 'cdmx',
    nombre: 'Avenida Universidad Sur',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-avenida-prolongacion-insurgentes', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-paseo-de-los-heroes', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-paseo-de-los-heroes': {
    ciudad: 'cdmx',
    nombre: 'Paseo de los Héroes',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-avenida-universidad-sur', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-avenida-moctezuma', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-avenida-moctezuma': {
    ciudad: 'cdmx',
    nombre: 'Avenida Moctezuma',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-paseo-de-los-heroes', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-mercado-de-la-paz', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-mercado-de-la-paz': {
    ciudad: 'cdmx',
    nombre: 'Mercado de la Paz',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-avenida-moctezuma', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-avenida-batalla-de-puebla', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-avenida-batalla-de-puebla': {
    ciudad: 'cdmx',
    nombre: 'Avenida Batalla de Puebla',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-mercado-de-la-paz', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-avenida-general-anaya', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-avenida-general-anaya': {
    ciudad: 'cdmx',
    nombre: 'Avenida General Anaya',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-avenida-batalla-de-puebla', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-avenida-nativitas', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-avenida-nativitas': {
    ciudad: 'cdmx',
    nombre: 'Avenida Nativitas',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-avenida-general-anaya', tiempo: 3, linea: 'MB-L1', tipo: 'linea' },
      { slug: 'mb-el-caminero', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-el-caminero': {
    ciudad: 'cdmx',
    nombre: 'El Caminero',
    lineas: ['MB-L1'],
    adyacentes: [
      { slug: 'mb-avenida-nativitas', tiempo: 3, linea: 'MB-L1', tipo: 'linea' }
    ]
  },
  'mb-san-lazaro': {
    ciudad: 'cdmx',
    nombre: 'San Lázaro',
    lineas: ['MB-L2'],
    adyacentes: [
      { slug: 'mb-merced', tiempo: 3, linea: 'MB-L2', tipo: 'linea' }
    ]
  },
  'mb-merced': {
    ciudad: 'cdmx',
    nombre: 'Merced',
    lineas: ['MB-L2'],
    adyacentes: [
      { slug: 'mb-san-lazaro', tiempo: 3, linea: 'MB-L2', tipo: 'linea' },
      { slug: 'mb-centro-medico', tiempo: 3, linea: 'MB-L2', tipo: 'linea' }
    ]
  },
  'mb-centro-medico': {
    ciudad: 'cdmx',
    nombre: 'Centro Médico',
    lineas: ['MB-L2'],
    adyacentes: [
      { slug: 'mb-merced', tiempo: 3, linea: 'MB-L2', tipo: 'linea' },
      { slug: 'mb-balance', tiempo: 3, linea: 'MB-L2', tipo: 'linea' }
    ]
  },
  'mb-balance': {
    ciudad: 'cdmx',
    nombre: 'Balance',
    lineas: ['MB-L2'],
    adyacentes: [
      { slug: 'mb-centro-medico', tiempo: 3, linea: 'MB-L2', tipo: 'linea' },
      { slug: 'mb-juarez', tiempo: 3, linea: 'MB-L2', tipo: 'linea' }
    ]
  },
  'mb-juarez': {
    ciudad: 'cdmx',
    nombre: 'Juárez',
    lineas: ['MB-L2'],
    adyacentes: [
      { slug: 'mb-balance', tiempo: 3, linea: 'MB-L2', tipo: 'linea' },
      { slug: 'mb-avenida-hidalgo', tiempo: 3, linea: 'MB-L2', tipo: 'linea' }
    ]
  },
  'mb-avenida-hidalgo': {
    ciudad: 'cdmx',
    nombre: 'Avenida Hidalgo',
    lineas: ['MB-L2'],
    adyacentes: [
      { slug: 'mb-juarez', tiempo: 3, linea: 'MB-L2', tipo: 'linea' },
      { slug: 'mb-belen', tiempo: 3, linea: 'MB-L2', tipo: 'linea' }
    ]
  },
  'mb-belen': {
    ciudad: 'cdmx',
    nombre: 'Belén',
    lineas: ['MB-L2'],
    adyacentes: [
      { slug: 'mb-avenida-hidalgo', tiempo: 3, linea: 'MB-L2', tipo: 'linea' },
      { slug: 'mb-santa-maria-la-redonda', tiempo: 3, linea: 'MB-L2', tipo: 'linea' }
    ]
  },
  'mb-santa-maria-la-redonda': {
    ciudad: 'cdmx',
    nombre: 'Santa María la Redonda',
    lineas: ['MB-L2'],
    adyacentes: [
      { slug: 'mb-belen', tiempo: 3, linea: 'MB-L2', tipo: 'linea' },
      { slug: 'mb-avenida-san-pablo', tiempo: 3, linea: 'MB-L2', tipo: 'linea' }
    ]
  },
  'mb-avenida-san-pablo': {
    ciudad: 'cdmx',
    nombre: 'Avenida San Pablo',
    lineas: ['MB-L2'],
    adyacentes: [
      { slug: 'mb-santa-maria-la-redonda', tiempo: 3, linea: 'MB-L2', tipo: 'linea' },
      { slug: 'mb-avenida-norte-88', tiempo: 3, linea: 'MB-L2', tipo: 'linea' }
    ]
  },
  'mb-avenida-norte-88': {
    ciudad: 'cdmx',
    nombre: 'Avenida Norte 88',
    lineas: ['MB-L2'],
    adyacentes: [
      { slug: 'mb-avenida-san-pablo', tiempo: 3, linea: 'MB-L2', tipo: 'linea' },
      { slug: 'mb-avenida-norte-45', tiempo: 3, linea: 'MB-L2', tipo: 'linea' }
    ]
  },
  'mb-avenida-norte-45': {
    ciudad: 'cdmx',
    nombre: 'Avenida Norte 45',
    lineas: ['MB-L2'],
    adyacentes: [
      { slug: 'mb-avenida-norte-88', tiempo: 3, linea: 'MB-L2', tipo: 'linea' },
      { slug: 'mb-poniente-150', tiempo: 3, linea: 'MB-L2', tipo: 'linea' }
    ]
  },
  'mb-poniente-150': {
    ciudad: 'cdmx',
    nombre: 'Poniente 150',
    lineas: ['MB-L2'],
    adyacentes: [
      { slug: 'mb-avenida-norte-45', tiempo: 3, linea: 'MB-L2', tipo: 'linea' },
      { slug: 'mb-avenida-pdte-carranza', tiempo: 3, linea: 'MB-L2', tipo: 'linea' }
    ]
  },
  'mb-avenida-pdte-carranza': {
    ciudad: 'cdmx',
    nombre: 'Avenida Pdte. Carranza',
    lineas: ['MB-L2'],
    adyacentes: [
      { slug: 'mb-poniente-150', tiempo: 3, linea: 'MB-L2', tipo: 'linea' },
      { slug: 'mb-avenida-la-paz', tiempo: 3, linea: 'MB-L2', tipo: 'linea' }
    ]
  },
  'mb-avenida-la-paz': {
    ciudad: 'cdmx',
    nombre: 'Avenida La Paz',
    lineas: ['MB-L2'],
    adyacentes: [
      { slug: 'mb-avenida-pdte-carranza', tiempo: 3, linea: 'MB-L2', tipo: 'linea' },
      { slug: 'mb-avenida-melchor-ocampo', tiempo: 3, linea: 'MB-L2', tipo: 'linea' }
    ]
  },
  'mb-avenida-melchor-ocampo': {
    ciudad: 'cdmx',
    nombre: 'Avenida Melchor Ocampo',
    lineas: ['MB-L2'],
    adyacentes: [
      { slug: 'mb-avenida-la-paz', tiempo: 3, linea: 'MB-L2', tipo: 'linea' },
      { slug: 'mb-avenida-polanco', tiempo: 3, linea: 'MB-L2', tipo: 'linea' }
    ]
  },
  'mb-avenida-polanco': {
    ciudad: 'cdmx',
    nombre: 'Avenida Polanco',
    lineas: ['MB-L2'],
    adyacentes: [
      { slug: 'mb-avenida-melchor-ocampo', tiempo: 3, linea: 'MB-L2', tipo: 'linea' },
      { slug: 'mb-lomas-de-virreyes', tiempo: 3, linea: 'MB-L2', tipo: 'linea' }
    ]
  },
  'mb-lomas-de-virreyes': {
    ciudad: 'cdmx',
    nombre: 'Lomas de Virreyes',
    lineas: ['MB-L2'],
    adyacentes: [
      { slug: 'mb-avenida-polanco', tiempo: 3, linea: 'MB-L2', tipo: 'linea' },
      { slug: 'mb-toreo', tiempo: 3, linea: 'MB-L2', tipo: 'linea' }
    ]
  },
  'mb-toreo': {
    ciudad: 'cdmx',
    nombre: 'Toreo',
    lineas: ['MB-L2'],
    adyacentes: [
      { slug: 'mb-lomas-de-virreyes', tiempo: 3, linea: 'MB-L2', tipo: 'linea' }
    ]
  },
  'mb-palacio-nacional': {
    ciudad: 'cdmx',
    nombre: 'Palacio Nacional',
    lineas: ['MB-L3'],
    adyacentes: [
      { slug: 'mb-zocalo', tiempo: 3, linea: 'MB-L3', tipo: 'linea' }
    ]
  },
  'mb-zocalo': {
    ciudad: 'cdmx',
    nombre: 'Zócalo',
    lineas: ['MB-L3'],
    adyacentes: [
      { slug: 'mb-palacio-nacional', tiempo: 3, linea: 'MB-L3', tipo: 'linea' },
      { slug: 'mb-isabel-la-catolica', tiempo: 3, linea: 'MB-L3', tipo: 'linea' }
    ]
  },
  'mb-isabel-la-catolica': {
    ciudad: 'cdmx',
    nombre: 'Isabel la Católica',
    lineas: ['MB-L3'],
    adyacentes: [
      { slug: 'mb-zocalo', tiempo: 3, linea: 'MB-L3', tipo: 'linea' },
      { slug: 'mb-avenida-benito-juarez', tiempo: 3, linea: 'MB-L3', tipo: 'linea' }
    ]
  },
  'mb-avenida-benito-juarez': {
    ciudad: 'cdmx',
    nombre: 'Avenida Benito Juárez',
    lineas: ['MB-L3'],
    adyacentes: [
      { slug: 'mb-isabel-la-catolica', tiempo: 3, linea: 'MB-L3', tipo: 'linea' },
      { slug: 'mb-lazaro-cardenas', tiempo: 3, linea: 'MB-L3', tipo: 'linea' }
    ]
  },
  'mb-lazaro-cardenas': {
    ciudad: 'cdmx',
    nombre: 'Lázaro Cárdenas',
    lineas: ['MB-L3'],
    adyacentes: [
      { slug: 'mb-avenida-benito-juarez', tiempo: 3, linea: 'MB-L3', tipo: 'linea' },
      { slug: 'mb-avenida-paseo-de-la-reforma', tiempo: 3, linea: 'MB-L3', tipo: 'linea' }
    ]
  },
  'mb-avenida-paseo-de-la-reforma': {
    ciudad: 'cdmx',
    nombre: 'Avenida Paseo de la Reforma',
    lineas: ['MB-L3'],
    adyacentes: [
      { slug: 'mb-lazaro-cardenas', tiempo: 3, linea: 'MB-L3', tipo: 'linea' },
      { slug: 'mb-avenida-pdte-masaryk', tiempo: 3, linea: 'MB-L3', tipo: 'linea' }
    ]
  },
  'mb-avenida-pdte-masaryk': {
    ciudad: 'cdmx',
    nombre: 'Avenida Pdte. Masaryk',
    lineas: ['MB-L3'],
    adyacentes: [
      { slug: 'mb-avenida-paseo-de-la-reforma', tiempo: 3, linea: 'MB-L3', tipo: 'linea' },
      { slug: 'mb-avenida-ejercito-nacional-oriente', tiempo: 3, linea: 'MB-L3', tipo: 'linea' }
    ]
  },
  'mb-avenida-ejercito-nacional-oriente': {
    ciudad: 'cdmx',
    nombre: 'Avenida Ejército Nacional Oriente',
    lineas: ['MB-L3'],
    adyacentes: [
      { slug: 'mb-avenida-pdte-masaryk', tiempo: 3, linea: 'MB-L3', tipo: 'linea' },
      { slug: 'mb-avenida-mariano-escobedo', tiempo: 3, linea: 'MB-L3', tipo: 'linea' }
    ]
  },
  'mb-avenida-mariano-escobedo': {
    ciudad: 'cdmx',
    nombre: 'Avenida Mariano Escobedo',
    lineas: ['MB-L3'],
    adyacentes: [
      { slug: 'mb-avenida-ejercito-nacional-oriente', tiempo: 3, linea: 'MB-L3', tipo: 'linea' },
      { slug: 'mb-avenida-observatorio', tiempo: 3, linea: 'MB-L3', tipo: 'linea' }
    ]
  },
  'mb-avenida-observatorio': {
    ciudad: 'cdmx',
    nombre: 'Avenida Observatorio',
    lineas: ['MB-L3'],
    adyacentes: [
      { slug: 'mb-avenida-mariano-escobedo', tiempo: 3, linea: 'MB-L3', tipo: 'linea' },
      { slug: 'mb-avenida-constituyentes', tiempo: 3, linea: 'MB-L3', tipo: 'linea' }
    ]
  },
  'mb-avenida-constituyentes': {
    ciudad: 'cdmx',
    nombre: 'Avenida Constituyentes',
    lineas: ['MB-L3'],
    adyacentes: [
      { slug: 'mb-avenida-observatorio', tiempo: 3, linea: 'MB-L3', tipo: 'linea' },
      { slug: 'mb-avenida-lopez-mateos-oriente', tiempo: 3, linea: 'MB-L3', tipo: 'linea' }
    ]
  },
  'mb-avenida-lopez-mateos-oriente': {
    ciudad: 'cdmx',
    nombre: 'Avenida López Mateos Oriente',
    lineas: ['MB-L3'],
    adyacentes: [
      { slug: 'mb-avenida-constituyentes', tiempo: 3, linea: 'MB-L3', tipo: 'linea' },
      { slug: 'mb-avenida-cuauhtemoc', tiempo: 3, linea: 'MB-L3', tipo: 'linea' }
    ]
  },
  'mb-avenida-cuauhtemoc': {
    ciudad: 'cdmx',
    nombre: 'Avenida Cuauhtémoc',
    lineas: ['MB-L3'],
    adyacentes: [
      { slug: 'mb-avenida-lopez-mateos-oriente', tiempo: 3, linea: 'MB-L3', tipo: 'linea' },
      { slug: 'mb-avenida-san-antonio-de-padua', tiempo: 3, linea: 'MB-L3', tipo: 'linea' }
    ]
  },
  'mb-avenida-san-antonio-de-padua': {
    ciudad: 'cdmx',
    nombre: 'Avenida San Antonio de Padua',
    lineas: ['MB-L3'],
    adyacentes: [
      { slug: 'mb-avenida-cuauhtemoc', tiempo: 3, linea: 'MB-L3', tipo: 'linea' },
      { slug: 'mb-terminal-2-aeropuerto', tiempo: 3, linea: 'MB-L3', tipo: 'linea' }
    ]
  },
  'mb-terminal-2-aeropuerto': {
    ciudad: 'cdmx',
    nombre: 'Terminal 2 Aeropuerto',
    lineas: ['MB-L3'],
    adyacentes: [
      { slug: 'mb-avenida-san-antonio-de-padua', tiempo: 3, linea: 'MB-L3', tipo: 'linea' },
      { slug: 'mb-avenida-puerto-aéreo', tiempo: 3, linea: 'MB-L3', tipo: 'linea' }
    ]
  },
  'mb-avenida-puerto-aéreo': {
    ciudad: 'cdmx',
    nombre: 'Avenida Puerto Aéreo',
    lineas: ['MB-L3'],
    adyacentes: [
      { slug: 'mb-terminal-2-aeropuerto', tiempo: 3, linea: 'MB-L3', tipo: 'linea' },
      { slug: 'mb-avenida-benito-juarez-aeropuerto', tiempo: 3, linea: 'MB-L3', tipo: 'linea' }
    ]
  },
  'mb-avenida-benito-juarez-aeropuerto': {
    ciudad: 'cdmx',
    nombre: 'Avenida Benito Juárez Aeropuerto',
    lineas: ['MB-L3'],
    adyacentes: [
      { slug: 'mb-avenida-puerto-aéreo', tiempo: 3, linea: 'MB-L3', tipo: 'linea' },
      { slug: 'mb-avenida-terminal-1', tiempo: 3, linea: 'MB-L3', tipo: 'linea' }
    ]
  },
  'mb-avenida-terminal-1': {
    ciudad: 'cdmx',
    nombre: 'Avenida Terminal 1',
    lineas: ['MB-L3'],
    adyacentes: [
      { slug: 'mb-avenida-benito-juarez-aeropuerto', tiempo: 3, linea: 'MB-L3', tipo: 'linea' },
      { slug: 'mb-avenida-terminal-3', tiempo: 3, linea: 'MB-L3', tipo: 'linea' }
    ]
  },
  'mb-avenida-terminal-3': {
    ciudad: 'cdmx',
    nombre: 'Avenida Terminal 3',
    lineas: ['MB-L3'],
    adyacentes: [
      { slug: 'mb-avenida-terminal-1', tiempo: 3, linea: 'MB-L3', tipo: 'linea' },
      { slug: 'mb-aeropuerto-internacional', tiempo: 3, linea: 'MB-L3', tipo: 'linea' }
    ]
  },
  'mb-aeropuerto-internacional': {
    ciudad: 'cdmx',
    nombre: 'Aeropuerto Internacional',
    lineas: ['MB-L3'],
    adyacentes: [
      { slug: 'mb-avenida-terminal-3', tiempo: 3, linea: 'MB-L3', tipo: 'linea' }
    ]
  },
  'mb-santa-ursula': {
    ciudad: 'cdmx',
    nombre: 'Santa Úrsula',
    lineas: ['MB-L4'],
    adyacentes: [
      { slug: 'mb-avenida-chimalpopoca', tiempo: 3, linea: 'MB-L4', tipo: 'linea' }
    ]
  },
  'mb-avenida-chimalpopoca': {
    ciudad: 'cdmx',
    nombre: 'Avenida Chimalpopoca',
    lineas: ['MB-L4'],
    adyacentes: [
      { slug: 'mb-santa-ursula', tiempo: 3, linea: 'MB-L4', tipo: 'linea' },
      { slug: 'mb-avenida-del-pedregal', tiempo: 3, linea: 'MB-L4', tipo: 'linea' }
    ]
  },
  'mb-avenida-del-pedregal': {
    ciudad: 'cdmx',
    nombre: 'Avenida del Pedregal',
    lineas: ['MB-L4'],
    adyacentes: [
      { slug: 'mb-avenida-chimalpopoca', tiempo: 3, linea: 'MB-L4', tipo: 'linea' },
      { slug: 'mb-avenida-universidad-sur-l4', tiempo: 3, linea: 'MB-L4', tipo: 'linea' }
    ]
  },
  'mb-avenida-universidad-sur-l4': {
    ciudad: 'cdmx',
    nombre: 'Avenida Universidad Sur',
    lineas: ['MB-L4'],
    adyacentes: [
      { slug: 'mb-avenida-del-pedregal', tiempo: 3, linea: 'MB-L4', tipo: 'linea' },
      { slug: 'mb-avenida-rio-magdalena', tiempo: 3, linea: 'MB-L4', tipo: 'linea' }
    ]
  },
  'mb-avenida-rio-magdalena': {
    ciudad: 'cdmx',
    nombre: 'Avenida Río Magdalena',
    lineas: ['MB-L4'],
    adyacentes: [
      { slug: 'mb-avenida-universidad-sur-l4', tiempo: 3, linea: 'MB-L4', tipo: 'linea' },
      { slug: 'mb-avenida-san-jerónimo', tiempo: 3, linea: 'MB-L4', tipo: 'linea' }
    ]
  },
  'mb-avenida-san-jerónimo': {
    ciudad: 'cdmx',
    nombre: 'Avenida San Jerónimo',
    lineas: ['MB-L4'],
    adyacentes: [
      { slug: 'mb-avenida-rio-magdalena', tiempo: 3, linea: 'MB-L4', tipo: 'linea' },
      { slug: 'mb-avenida-desierto-de-los-leones', tiempo: 3, linea: 'MB-L4', tipo: 'linea' }
    ]
  },
  'mb-avenida-desierto-de-los-leones': {
    ciudad: 'cdmx',
    nombre: 'Avenida Desierto de los Leones',
    lineas: ['MB-L4'],
    adyacentes: [
      { slug: 'mb-avenida-san-jerónimo', tiempo: 3, linea: 'MB-L4', tipo: 'linea' },
      { slug: 'mb-avenida-contreras', tiempo: 3, linea: 'MB-L4', tipo: 'linea' }
    ]
  },
  'mb-avenida-contreras': {
    ciudad: 'cdmx',
    nombre: 'Avenida Contreras',
    lineas: ['MB-L4'],
    adyacentes: [
      { slug: 'mb-avenida-desierto-de-los-leones', tiempo: 3, linea: 'MB-L4', tipo: 'linea' },
      { slug: 'mb-avenida-san-luis-potosi', tiempo: 3, linea: 'MB-L4', tipo: 'linea' }
    ]
  },
  'mb-avenida-san-luis-potosi': {
    ciudad: 'cdmx',
    nombre: 'Avenida San Luis Potosí',
    lineas: ['MB-L4'],
    adyacentes: [
      { slug: 'mb-avenida-contreras', tiempo: 3, linea: 'MB-L4', tipo: 'linea' },
      { slug: 'mb-avenida-eje-3-sur', tiempo: 3, linea: 'MB-L4', tipo: 'linea' }
    ]
  },
  'mb-avenida-eje-3-sur': {
    ciudad: 'cdmx',
    nombre: 'Avenida Eje 3 Sur',
    lineas: ['MB-L4'],
    adyacentes: [
      { slug: 'mb-avenida-san-luis-potosi', tiempo: 3, linea: 'MB-L4', tipo: 'linea' },
      { slug: 'mb-avenida-del-carmen', tiempo: 3, linea: 'MB-L4', tipo: 'linea' }
    ]
  },
  'mb-avenida-del-carmen': {
    ciudad: 'cdmx',
    nombre: 'Avenida del Carmen',
    lineas: ['MB-L4'],
    adyacentes: [
      { slug: 'mb-avenida-eje-3-sur', tiempo: 3, linea: 'MB-L4', tipo: 'linea' },
      { slug: 'mb-avenida-miguel-angel-de-quevedo', tiempo: 3, linea: 'MB-L4', tipo: 'linea' }
    ]
  },
  'mb-avenida-miguel-angel-de-quevedo': {
    ciudad: 'cdmx',
    nombre: 'Avenida Miguel Ángel de Quevedo',
    lineas: ['MB-L4'],
    adyacentes: [
      { slug: 'mb-avenida-del-carmen', tiempo: 3, linea: 'MB-L4', tipo: 'linea' },
      { slug: 'mb-avenida-universidad-sur-coyoacan', tiempo: 3, linea: 'MB-L4', tipo: 'linea' }
    ]
  },
  'mb-avenida-universidad-sur-coyoacan': {
    ciudad: 'cdmx',
    nombre: 'Avenida Universidad Sur Coyoacán',
    lineas: ['MB-L4'],
    adyacentes: [
      { slug: 'mb-avenida-miguel-angel-de-quevedo', tiempo: 3, linea: 'MB-L4', tipo: 'linea' },
      { slug: 'mb-avenida-mexico-sur', tiempo: 3, linea: 'MB-L4', tipo: 'linea' }
    ]
  },
  'mb-avenida-mexico-sur': {
    ciudad: 'cdmx',
    nombre: 'Avenida México Sur',
    lineas: ['MB-L4'],
    adyacentes: [
      { slug: 'mb-avenida-universidad-sur-coyoacan', tiempo: 3, linea: 'MB-L4', tipo: 'linea' },
      { slug: 'mb-avenida-nativitas-sur', tiempo: 3, linea: 'MB-L4', tipo: 'linea' }
    ]
  },
  'mb-avenida-nativitas-sur': {
    ciudad: 'cdmx',
    nombre: 'Avenida Nativitas Sur',
    lineas: ['MB-L4'],
    adyacentes: [
      { slug: 'mb-avenida-mexico-sur', tiempo: 3, linea: 'MB-L4', tipo: 'linea' },
      { slug: 'mb-avenida-xotepingo-sur', tiempo: 3, linea: 'MB-L4', tipo: 'linea' }
    ]
  },
  'mb-avenida-xotepingo-sur': {
    ciudad: 'cdmx',
    nombre: 'Avenida Xotepingo Sur',
    lineas: ['MB-L4'],
    adyacentes: [
      { slug: 'mb-avenida-nativitas-sur', tiempo: 3, linea: 'MB-L4', tipo: 'linea' },
      { slug: 'mb-terminal-central-sur', tiempo: 3, linea: 'MB-L4', tipo: 'linea' }
    ]
  },
  'mb-terminal-central-sur': {
    ciudad: 'cdmx',
    nombre: 'Terminal Central del Sur',
    lineas: ['MB-L4'],
    adyacentes: [
      { slug: 'mb-avenida-xotepingo-sur', tiempo: 3, linea: 'MB-L4', tipo: 'linea' }
    ]
  },
  'mb-indios-verdes-l5': {
    ciudad: 'cdmx',
    nombre: 'Indios Verdes',
    lineas: ['MB-L5'],
    adyacentes: [
      { slug: 'mb-avenida-gustavo-baz', tiempo: 3, linea: 'MB-L5', tipo: 'linea' }
    ]
  },
  'mb-avenida-gustavo-baz': {
    ciudad: 'cdmx',
    nombre: 'Avenida Gustavo Báz',
    lineas: ['MB-L5'],
    adyacentes: [
      { slug: 'mb-indios-verdes-l5', tiempo: 3, linea: 'MB-L5', tipo: 'linea' },
      { slug: 'mb-avenida-canada', tiempo: 3, linea: 'MB-L5', tipo: 'linea' }
    ]
  },
  'mb-avenida-canada': {
    ciudad: 'cdmx',
    nombre: 'Avenida Cañada',
    lineas: ['MB-L5'],
    adyacentes: [
      { slug: 'mb-avenida-gustavo-baz', tiempo: 3, linea: 'MB-L5', tipo: 'linea' },
      { slug: 'mb-avenida-ecatepec', tiempo: 3, linea: 'MB-L5', tipo: 'linea' }
    ]
  },
  'mb-avenida-ecatepec': {
    ciudad: 'cdmx',
    nombre: 'Avenida Ecatepec',
    lineas: ['MB-L5'],
    adyacentes: [
      { slug: 'mb-avenida-canada', tiempo: 3, linea: 'MB-L5', tipo: 'linea' },
      { slug: 'mb-avenida-aztecas', tiempo: 3, linea: 'MB-L5', tipo: 'linea' }
    ]
  },
  'mb-avenida-aztecas': {
    ciudad: 'cdmx',
    nombre: 'Avenida Aztecas',
    lineas: ['MB-L5'],
    adyacentes: [
      { slug: 'mb-avenida-ecatepec', tiempo: 3, linea: 'MB-L5', tipo: 'linea' },
      { slug: 'mb-avenida-norte-180', tiempo: 3, linea: 'MB-L5', tipo: 'linea' }
    ]
  },
  'mb-avenida-norte-180': {
    ciudad: 'cdmx',
    nombre: 'Avenida Norte 180',
    lineas: ['MB-L5'],
    adyacentes: [
      { slug: 'mb-avenida-aztecas', tiempo: 3, linea: 'MB-L5', tipo: 'linea' },
      { slug: 'mb-avenida-norte-200', tiempo: 3, linea: 'MB-L5', tipo: 'linea' }
    ]
  },
  'mb-avenida-norte-200': {
    ciudad: 'cdmx',
    nombre: 'Avenida Norte 200',
    lineas: ['MB-L5'],
    adyacentes: [
      { slug: 'mb-avenida-norte-180', tiempo: 3, linea: 'MB-L5', tipo: 'linea' },
      { slug: 'mb-avenida-las-torres', tiempo: 3, linea: 'MB-L5', tipo: 'linea' }
    ]
  },
  'mb-avenida-las-torres': {
    ciudad: 'cdmx',
    nombre: 'Avenida Las Torres',
    lineas: ['MB-L5'],
    adyacentes: [
      { slug: 'mb-avenida-norte-200', tiempo: 3, linea: 'MB-L5', tipo: 'linea' },
      { slug: 'mb-avenida-san-juan-de-dios', tiempo: 3, linea: 'MB-L5', tipo: 'linea' }
    ]
  },
  'mb-avenida-san-juan-de-dios': {
    ciudad: 'cdmx',
    nombre: 'Avenida San Juan de Dios',
    lineas: ['MB-L5'],
    adyacentes: [
      { slug: 'mb-avenida-las-torres', tiempo: 3, linea: 'MB-L5', tipo: 'linea' },
      { slug: 'mb-avenida-mariano-escobedo-norte', tiempo: 3, linea: 'MB-L5', tipo: 'linea' }
    ]
  },
  'mb-avenida-mariano-escobedo-norte': {
    ciudad: 'cdmx',
    nombre: 'Avenida Mariano Escobedo Norte',
    lineas: ['MB-L5'],
    adyacentes: [
      { slug: 'mb-avenida-san-juan-de-dios', tiempo: 3, linea: 'MB-L5', tipo: 'linea' },
      { slug: 'mb-avenida-constituyentes-norte', tiempo: 3, linea: 'MB-L5', tipo: 'linea' }
    ]
  },
  'mb-avenida-constituyentes-norte': {
    ciudad: 'cdmx',
    nombre: 'Avenida Constituyentes Norte',
    lineas: ['MB-L5'],
    adyacentes: [
      { slug: 'mb-avenida-mariano-escobedo-norte', tiempo: 3, linea: 'MB-L5', tipo: 'linea' },
      { slug: 'mb-avenida-homero', tiempo: 3, linea: 'MB-L5', tipo: 'linea' }
    ]
  },
  'mb-avenida-homero': {
    ciudad: 'cdmx',
    nombre: 'Avenida Homero',
    lineas: ['MB-L5'],
    adyacentes: [
      { slug: 'mb-avenida-constituyentes-norte', tiempo: 3, linea: 'MB-L5', tipo: 'linea' },
      { slug: 'mb-avenida-veracruz', tiempo: 3, linea: 'MB-L5', tipo: 'linea' }
    ]
  },
  'mb-avenida-veracruz': {
    ciudad: 'cdmx',
    nombre: 'Avenida Veracruz',
    lineas: ['MB-L5'],
    adyacentes: [
      { slug: 'mb-avenida-homero', tiempo: 3, linea: 'MB-L5', tipo: 'linea' },
      { slug: 'mb-avenida-ejercito-nacional-norte', tiempo: 3, linea: 'MB-L5', tipo: 'linea' }
    ]
  },
  'mb-avenida-ejercito-nacional-norte': {
    ciudad: 'cdmx',
    nombre: 'Avenida Ejército Nacional Norte',
    lineas: ['MB-L5'],
    adyacentes: [
      { slug: 'mb-avenida-veracruz', tiempo: 3, linea: 'MB-L5', tipo: 'linea' },
      { slug: 'mb-avenida-monte-blanco', tiempo: 3, linea: 'MB-L5', tipo: 'linea' }
    ]
  },
  'mb-avenida-monte-blanco': {
    ciudad: 'cdmx',
    nombre: 'Avenida Monte Blanco',
    lineas: ['MB-L5'],
    adyacentes: [
      { slug: 'mb-avenida-ejercito-nacional-norte', tiempo: 3, linea: 'MB-L5', tipo: 'linea' },
      { slug: 'mb-observatorio', tiempo: 3, linea: 'MB-L5', tipo: 'linea' }
    ]
  },
  'mb-observatorio': {
    ciudad: 'cdmx',
    nombre: 'Observatorio',
    lineas: ['MB-L5'],
    adyacentes: [
      { slug: 'mb-avenida-monte-blanco', tiempo: 3, linea: 'MB-L5', tipo: 'linea' }
    ]
  },
  'mb-circuito-poniente': {
    ciudad: 'cdmx',
    nombre: 'Circuito Interior Poniente',
    lineas: ['MB-L6'],
    adyacentes: [
      { slug: 'mb-avenida-revolucion-circuito', tiempo: 3, linea: 'MB-L6', tipo: 'linea' }
    ]
  },
  'mb-avenida-revolucion-circuito': {
    ciudad: 'cdmx',
    nombre: 'Avenida Revolución',
    lineas: ['MB-L6'],
    adyacentes: [
      { slug: 'mb-circuito-poniente', tiempo: 3, linea: 'MB-L6', tipo: 'linea' },
      { slug: 'mb-avenida-paseo-circuito', tiempo: 3, linea: 'MB-L6', tipo: 'linea' }
    ]
  },
  'mb-avenida-paseo-circuito': {
    ciudad: 'cdmx',
    nombre: 'Avenida Paseo',
    lineas: ['MB-L6'],
    adyacentes: [
      { slug: 'mb-avenida-revolucion-circuito', tiempo: 3, linea: 'MB-L6', tipo: 'linea' },
      { slug: 'mb-avenida-nueva-york', tiempo: 3, linea: 'MB-L6', tipo: 'linea' }
    ]
  },
  'mb-avenida-nueva-york': {
    ciudad: 'cdmx',
    nombre: 'Avenida Nueva York',
    lineas: ['MB-L6'],
    adyacentes: [
      { slug: 'mb-avenida-paseo-circuito', tiempo: 3, linea: 'MB-L6', tipo: 'linea' },
      { slug: 'mb-avenida-dinamarca', tiempo: 3, linea: 'MB-L6', tipo: 'linea' }
    ]
  },
  'mb-avenida-dinamarca': {
    ciudad: 'cdmx',
    nombre: 'Avenida Dinamarca',
    lineas: ['MB-L6'],
    adyacentes: [
      { slug: 'mb-avenida-nueva-york', tiempo: 3, linea: 'MB-L6', tipo: 'linea' },
      { slug: 'mb-avenida-estocolmo', tiempo: 3, linea: 'MB-L6', tipo: 'linea' }
    ]
  },
  'mb-avenida-estocolmo': {
    ciudad: 'cdmx',
    nombre: 'Avenida Estocolmo',
    lineas: ['MB-L6'],
    adyacentes: [
      { slug: 'mb-avenida-dinamarca', tiempo: 3, linea: 'MB-L6', tipo: 'linea' },
      { slug: 'mb-avenida-helsinki', tiempo: 3, linea: 'MB-L6', tipo: 'linea' }
    ]
  },
  'mb-avenida-helsinki': {
    ciudad: 'cdmx',
    nombre: 'Avenida Helsinki',
    lineas: ['MB-L6'],
    adyacentes: [
      { slug: 'mb-avenida-estocolmo', tiempo: 3, linea: 'MB-L6', tipo: 'linea' },
      { slug: 'mb-avenida-amsterdam', tiempo: 3, linea: 'MB-L6', tipo: 'linea' }
    ]
  },
  'mb-avenida-amsterdam': {
    ciudad: 'cdmx',
    nombre: 'Avenida Amsterdam',
    lineas: ['MB-L6'],
    adyacentes: [
      { slug: 'mb-avenida-helsinki', tiempo: 3, linea: 'MB-L6', tipo: 'linea' },
      { slug: 'mb-avenida-bruselas', tiempo: 3, linea: 'MB-L6', tipo: 'linea' }
    ]
  },
  'mb-avenida-bruselas': {
    ciudad: 'cdmx',
    nombre: 'Avenida Bruselas',
    lineas: ['MB-L6'],
    adyacentes: [
      { slug: 'mb-avenida-amsterdam', tiempo: 3, linea: 'MB-L6', tipo: 'linea' },
      { slug: 'mb-avenida-roma', tiempo: 3, linea: 'MB-L6', tipo: 'linea' }
    ]
  },
  'mb-avenida-roma': {
    ciudad: 'cdmx',
    nombre: 'Avenida Roma',
    lineas: ['MB-L6'],
    adyacentes: [
      { slug: 'mb-avenida-bruselas', tiempo: 3, linea: 'MB-L6', tipo: 'linea' },
      { slug: 'mb-avenida-florencia', tiempo: 3, linea: 'MB-L6', tipo: 'linea' }
    ]
  },
  'mb-avenida-florencia': {
    ciudad: 'cdmx',
    nombre: 'Avenida Florencia',
    lineas: ['MB-L6'],
    adyacentes: [
      { slug: 'mb-avenida-roma', tiempo: 3, linea: 'MB-L6', tipo: 'linea' },
      { slug: 'mb-avenida-praga', tiempo: 3, linea: 'MB-L6', tipo: 'linea' }
    ]
  },
  'mb-avenida-praga': {
    ciudad: 'cdmx',
    nombre: 'Avenida Praga',
    lineas: ['MB-L6'],
    adyacentes: [
      { slug: 'mb-avenida-florencia', tiempo: 3, linea: 'MB-L6', tipo: 'linea' },
      { slug: 'mb-avenida-varsovia', tiempo: 3, linea: 'MB-L6', tipo: 'linea' }
    ]
  },
  'mb-avenida-varsovia': {
    ciudad: 'cdmx',
    nombre: 'Avenida Varsovia',
    lineas: ['MB-L6'],
    adyacentes: [
      { slug: 'mb-avenida-praga', tiempo: 3, linea: 'MB-L6', tipo: 'linea' },
      { slug: 'mb-avenida-budapest', tiempo: 3, linea: 'MB-L6', tipo: 'linea' }
    ]
  },
  'mb-avenida-budapest': {
    ciudad: 'cdmx',
    nombre: 'Avenida Budapest',
    lineas: ['MB-L6'],
    adyacentes: [
      { slug: 'mb-avenida-varsovia', tiempo: 3, linea: 'MB-L6', tipo: 'linea' },
      { slug: 'mb-avenida-belgica', tiempo: 3, linea: 'MB-L6', tipo: 'linea' }
    ]
  },
  'mb-avenida-belgica': {
    ciudad: 'cdmx',
    nombre: 'Avenida Bélgica',
    lineas: ['MB-L6'],
    adyacentes: [
      { slug: 'mb-avenida-budapest', tiempo: 3, linea: 'MB-L6', tipo: 'linea' },
      { slug: 'mb-avenida-zurich', tiempo: 3, linea: 'MB-L6', tipo: 'linea' }
    ]
  },
  'mb-avenida-zurich': {
    ciudad: 'cdmx',
    nombre: 'Avenida Zurich',
    lineas: ['MB-L6'],
    adyacentes: [
      { slug: 'mb-avenida-belgica', tiempo: 3, linea: 'MB-L6', tipo: 'linea' },
      { slug: 'mb-avenida-ginebra', tiempo: 3, linea: 'MB-L6', tipo: 'linea' }
    ]
  },
  'mb-avenida-ginebra': {
    ciudad: 'cdmx',
    nombre: 'Avenida Ginebra',
    lineas: ['MB-L6'],
    adyacentes: [
      { slug: 'mb-avenida-zurich', tiempo: 3, linea: 'MB-L6', tipo: 'linea' },
      { slug: 'mb-avenida-oslo', tiempo: 3, linea: 'MB-L6', tipo: 'linea' }
    ]
  },
  'mb-avenida-oslo': {
    ciudad: 'cdmx',
    nombre: 'Avenida Oslo',
    lineas: ['MB-L6'],
    adyacentes: [
      { slug: 'mb-avenida-ginebra', tiempo: 3, linea: 'MB-L6', tipo: 'linea' },
      { slug: 'mb-circuito-oriente', tiempo: 3, linea: 'MB-L6', tipo: 'linea' }
    ]
  },
  'mb-circuito-oriente': {
    ciudad: 'cdmx',
    nombre: 'Circuito Interior Oriente',
    lineas: ['MB-L6'],
    adyacentes: [
      { slug: 'mb-avenida-oslo', tiempo: 3, linea: 'MB-L6', tipo: 'linea' }
    ]
  },
  'mb-periferico-norte': {
    ciudad: 'cdmx',
    nombre: 'Periférico Norte',
    lineas: ['MB-L7'],
    adyacentes: [
      { slug: 'mb-avenida-lomas-norte', tiempo: 3, linea: 'MB-L7', tipo: 'linea' }
    ]
  },
  'mb-avenida-lomas-norte': {
    ciudad: 'cdmx',
    nombre: 'Avenida Lomas Norte',
    lineas: ['MB-L7'],
    adyacentes: [
      { slug: 'mb-periferico-norte', tiempo: 3, linea: 'MB-L7', tipo: 'linea' },
      { slug: 'mb-avenida-tlalpan-norte', tiempo: 3, linea: 'MB-L7', tipo: 'linea' }
    ]
  },
  'mb-avenida-tlalpan-norte': {
    ciudad: 'cdmx',
    nombre: 'Avenida Tlalpan Norte',
    lineas: ['MB-L7'],
    adyacentes: [
      { slug: 'mb-avenida-lomas-norte', tiempo: 3, linea: 'MB-L7', tipo: 'linea' },
      { slug: 'mb-avenida-tolstoi', tiempo: 3, linea: 'MB-L7', tipo: 'linea' }
    ]
  },
  'mb-avenida-tolstoi': {
    ciudad: 'cdmx',
    nombre: 'Avenida Tolstoi',
    lineas: ['MB-L7'],
    adyacentes: [
      { slug: 'mb-avenida-tlalpan-norte', tiempo: 3, linea: 'MB-L7', tipo: 'linea' },
      { slug: 'mb-avenida-periferico-oriente', tiempo: 3, linea: 'MB-L7', tipo: 'linea' }
    ]
  },
  'mb-avenida-periferico-oriente': {
    ciudad: 'cdmx',
    nombre: 'Avenida Periférico Oriente',
    lineas: ['MB-L7'],
    adyacentes: [
      { slug: 'mb-avenida-tolstoi', tiempo: 3, linea: 'MB-L7', tipo: 'linea' },
      { slug: 'mb-avenida-estadio-azteca', tiempo: 3, linea: 'MB-L7', tipo: 'linea' }
    ]
  },
  'mb-avenida-estadio-azteca': {
    ciudad: 'cdmx',
    nombre: 'Avenida Estadio Azteca',
    lineas: ['MB-L7'],
    adyacentes: [
      { slug: 'mb-avenida-periferico-oriente', tiempo: 3, linea: 'MB-L7', tipo: 'linea' },
      { slug: 'mb-avenida-periferico-sur-oriente', tiempo: 3, linea: 'MB-L7', tipo: 'linea' }
    ]
  },
  'mb-avenida-periferico-sur-oriente': {
    ciudad: 'cdmx',
    nombre: 'Avenida Periférico Sur Oriente',
    lineas: ['MB-L7'],
    adyacentes: [
      { slug: 'mb-avenida-estadio-azteca', tiempo: 3, linea: 'MB-L7', tipo: 'linea' },
      { slug: 'mb-avenida-ajusco', tiempo: 3, linea: 'MB-L7', tipo: 'linea' }
    ]
  },
  'mb-avenida-ajusco': {
    ciudad: 'cdmx',
    nombre: 'Avenida Ajusco',
    lineas: ['MB-L7'],
    adyacentes: [
      { slug: 'mb-avenida-periferico-sur-oriente', tiempo: 3, linea: 'MB-L7', tipo: 'linea' },
      { slug: 'mb-avenida-periferico-sur', tiempo: 3, linea: 'MB-L7', tipo: 'linea' }
    ]
  },
  'mb-avenida-periferico-sur': {
    ciudad: 'cdmx',
    nombre: 'Avenida Periférico Sur',
    lineas: ['MB-L7'],
    adyacentes: [
      { slug: 'mb-avenida-ajusco', tiempo: 3, linea: 'MB-L7', tipo: 'linea' },
      { slug: 'mb-avenida-mexico-periferico', tiempo: 3, linea: 'MB-L7', tipo: 'linea' }
    ]
  },
  'mb-avenida-mexico-periferico': {
    ciudad: 'cdmx',
    nombre: 'Avenida México Periférico',
    lineas: ['MB-L7'],
    adyacentes: [
      { slug: 'mb-avenida-periferico-sur', tiempo: 3, linea: 'MB-L7', tipo: 'linea' },
      { slug: 'mb-avenida-desierto-periferico', tiempo: 3, linea: 'MB-L7', tipo: 'linea' }
    ]
  },
  'mb-avenida-desierto-periferico': {
    ciudad: 'cdmx',
    nombre: 'Avenida Desierto Periférico',
    lineas: ['MB-L7'],
    adyacentes: [
      { slug: 'mb-avenida-mexico-periferico', tiempo: 3, linea: 'MB-L7', tipo: 'linea' },
      { slug: 'mb-avenida-san-jerome-periferico', tiempo: 3, linea: 'MB-L7', tipo: 'linea' }
    ]
  },
  'mb-avenida-san-jerome-periferico': {
    ciudad: 'cdmx',
    nombre: 'Avenida San Jerónimo Periférico',
    lineas: ['MB-L7'],
    adyacentes: [
      { slug: 'mb-avenida-desierto-periferico', tiempo: 3, linea: 'MB-L7', tipo: 'linea' },
      { slug: 'mb-avenida-contreras-periferico', tiempo: 3, linea: 'MB-L7', tipo: 'linea' }
    ]
  },
  'mb-avenida-contreras-periferico': {
    ciudad: 'cdmx',
    nombre: 'Avenida Contreras Periférico',
    lineas: ['MB-L7'],
    adyacentes: [
      { slug: 'mb-avenida-san-jerome-periferico', tiempo: 3, linea: 'MB-L7', tipo: 'linea' },
      { slug: 'mb-avenida-periferico-poniente', tiempo: 3, linea: 'MB-L7', tipo: 'linea' }
    ]
  },
  'mb-avenida-periferico-poniente': {
    ciudad: 'cdmx',
    nombre: 'Avenida Periférico Poniente',
    lineas: ['MB-L7'],
    adyacentes: [
      { slug: 'mb-avenida-contreras-periferico', tiempo: 3, linea: 'MB-L7', tipo: 'linea' },
      { slug: 'mb-periferico-sur', tiempo: 3, linea: 'MB-L7', tipo: 'linea' }
    ]
  },
  'mb-periferico-sur': {
    ciudad: 'cdmx',
    nombre: 'Periférico Sur',
    lineas: ['MB-L7'],
    adyacentes: [
      { slug: 'mb-avenida-periferico-poniente', tiempo: 3, linea: 'MB-L7', tipo: 'linea' }
    ]
  },
  'constituyentes': {
    ciudad: 'queretaro',
    nombre: 'Avenida Constituyentes',
    lineas: [],
    adyacentes: [{ slug: 'constituyentes-qro', tiempo: 5, linea: 'Q1', tipo: 'transbordo' }
    ]
  },
  'cuauhtemoc': {
    ciudad: 'chihuahua',
    nombre: 'Comunidades Menonitas',
    lineas: ['1'],
    adyacentes: [{ slug: 'creel', tiempo: 3, linea: '1', tipo: 'linea' }, { slug: 'chihuahua-central', tiempo: 3, linea: '1', tipo: 'linea' }]
  },
  'hospital-general': {
    ciudad: 'merida',
    nombre: 'Hospital General de Mérida',
    lineas: ['R2'],
    adyacentes: [{ slug: 'itzimna', tiempo: 3, linea: 'R2', tipo: 'linea' }, { slug: 'altabrisa', tiempo: 3, linea: 'R2', tipo: 'linea' }, { slug: 'centro-historico', tiempo: 15, linea: 'D1', tipo: 'linea' }
    ]
  },
  'la-paz': {
    ciudad: 'puebla',
    nombre: 'Zona residencial La Paz',
    lineas: ['2'],
    adyacentes: [{ slug: 'buap', tiempo: 3, linea: '2', tipo: 'linea' }, { slug: 'san-manuel', tiempo: 3, linea: '2', tipo: 'linea' }]
  },
  '20-de-noviembre': {
    ciudad: 'puebla',
    nombre: 'Tiendas departamentales',
    lineas: ['1'],
    adyacentes: [{ slug: 'zocalo-centro', tiempo: 3, linea: '1', tipo: 'linea' }, { slug: 'capu', tiempo: 3, linea: '1', tipo: 'linea' }]
  },
  'acueducto': {
    ciudad: 'queretaro',
    nombre: 'Acueducto de Querétaro',
    lineas: [],
    adyacentes: [{ slug: 'acueducto-qro', tiempo: 5, linea: 'Q1', tipo: 'transbordo' }
    ]
  },
  'acueducto-qro': {
    ciudad: 'queretaro',
    nombre: 'Acueducto de Querétaro',
    lineas: ['Verde'],
    adyacentes: [{ slug: 'constituyentes-qro', tiempo: 3, linea: 'Verde', tipo: 'linea' }, { slug: 'acueducto', tiempo: 5, linea: 'Q1', tipo: 'transbordo' }
    ]
  },
  'aeropuerto-bajio-acceso': {
    ciudad: 'leon',
    nombre: 'Aeropuerto Internacional del Bajío',
    lineas: ['Naranja'],
    adyacentes: [{ slug: 'industrial-norte-leon', tiempo: 3, linea: 'Naranja', tipo: 'linea' }]
  },
  'aeropuerto-manuel-crescencio-rejon': {
    ciudad: 'merida',
    nombre: 'Aeropuerto Internacional',
    lineas: ['A4'],
    adyacentes: [{ slug: 'ciudad-caucel', tiempo: 3, linea: 'A4', tipo: 'linea' }]
  },
  'aeropuerto-tj': {
    ciudad: 'tijuana',
    nombre: 'Aeropuerto Internacional Abelardo L. Rodríguez',
    lineas: ['2'],
    adyacentes: [{ slug: 'puente-cross-border', tiempo: 3, linea: '2', tipo: 'linea' }, { slug: 'hospital-general-tj', tiempo: 3, linea: '2', tipo: 'linea' }, { slug: 'otay-comercial', tiempo: 12, linea: '2', tipo: 'linea' }
    ]
  },
  'aeropuerto-toluca': {
    ciudad: 'toluca',
    nombre: 'Aeropuerto Internacional Toluca',
    lineas: ['M2'],
    adyacentes: [{ slug: 'universidad-toluca', tiempo: 3, linea: 'M2', tipo: 'linea' }]
  },
  'agua-azul': {
    ciudad: 'tren-maya',
    nombre: 'Cascadas de Agua Azul',
    lineas: ['T5'],
    adyacentes: [{ slug: 'palenque', tiempo: 5, linea: 'T5', tipo: 'linea' }]
  },
  'alameda-qro': {
    ciudad: 'queretaro',
    nombre: 'Alameda de Querétaro',
    lineas: ['Azul'],
    adyacentes: [{ slug: 'cimatario-qro', tiempo: 3, linea: 'Azul', tipo: 'linea' }]
  },
  'altabrisa': {
    ciudad: 'merida',
    nombre: 'Zona residencial Altabrisa',
    lineas: ['R2'],
    adyacentes: [{ slug: 'hospital-general', tiempo: 3, linea: 'R2', tipo: 'linea' }, { slug: 'plaza-las-americas', tiempo: 3, linea: 'R2', tipo: 'linea' }]
  },
  'analco': {
    ciudad: 'puebla',
    nombre: 'Iglesia de Santo Domingo',
    lineas: ['1'],
    adyacentes: [{ slug: 'cholula', tiempo: 3, linea: '1', tipo: 'linea' }, { slug: 'barrio-artista', tiempo: 3, linea: '1', tipo: 'linea' }]
  },
  'angelopolis': {
    ciudad: 'puebla',
    nombre: 'Angelópolis Shopping Center',
    lineas: ['1'],
    adyacentes: [{ slug: 'mercado-artesanias', tiempo: 3, linea: '1', tipo: 'linea' }, { slug: 'cholula', tiempo: 3, linea: '1', tipo: 'linea' }]
  },
  'aromas': {
    ciudad: 'queretaro',
    nombre: 'Centro comercial Aromas',
    lineas: [],
    adyacentes: [{ slug: 'constituyentes-qro', tiempo: 15, linea: 'Q1', tipo: 'linea' }
    ]
  },
  'bacalar': {
    ciudad: 'tren-maya',
    nombre: 'Laguna de los 7 Colores',
    lineas: ['T3'],
    adyacentes: [{ slug: 'chetumal', tiempo: 5, linea: 'T3', tipo: 'linea' }, { slug: 'tulum', tiempo: 60, linea: 'T1', tipo: 'transbordo' }, { slug: 'escarcega', tiempo: 90, linea: 'T4', tipo: 'transbordo' }]
  },
  'bahuichivo': {
    ciudad: 'chihuahua',
    nombre: 'Acceso a Cerocahui',
    lineas: ['1'],
    adyacentes: [{ slug: 'el-fuerte', tiempo: 3, linea: '1', tipo: 'linea' }, { slug: 'posada-barrancas', tiempo: 3, linea: '1', tipo: 'linea' }]
  },
  'barrio-artista': {
    ciudad: 'puebla',
    nombre: 'Callejón del Artista',
    lineas: ['1'],
    adyacentes: [{ slug: 'analco', tiempo: 3, linea: '1', tipo: 'linea' }, { slug: 'zocalo-centro', tiempo: 3, linea: '1', tipo: 'linea' }]
  },
  'barrio-la-cruz-qro': {
    ciudad: 'queretaro',
    nombre: 'Barrio La Cruz',
    lineas: ['Rojo'],
    adyacentes: [{ slug: 'estadio-corregidora-qro', tiempo: 3, linea: 'Rojo', tipo: 'linea' }]
  },
  'blvd-adolfo-lopez-mateos': {
    ciudad: 'leon',
    nombre: 'Boulevard Adolfo López Mateos',
    lineas: ['Verde'],
    adyacentes: [{ slug: 'estadio-leon', tiempo: 3, linea: 'Verde', tipo: 'linea' }]
  },
  'buap': {
    ciudad: 'puebla',
    nombre: 'Benemérita Universidad Autónoma de Puebla',
    lineas: ['2'],
    adyacentes: [{ slug: 'la-paz', tiempo: 3, linea: '2', tipo: 'linea' }]
  },
  'buena-vista': {
    ciudad: 'tijuana',
    nombre: 'Zona Cañada',
    lineas: ['2'],
    adyacentes: [{ slug: 'la-mesa-tj', tiempo: 3, linea: '2', tipo: 'linea' }, { slug: 'puente-cross-border', tiempo: 3, linea: '2', tipo: 'linea' }, { slug: 'zona-centro', tiempo: 15, linea: '1', tipo: 'linea' }
    ]
  },
  'calakmul-balamku': {
    ciudad: 'tren-maya',
    nombre: 'Zona Arqueológica de Calakmul',
    lineas: ['T4'],
    adyacentes: [{ slug: 'escarcega', tiempo: 5, linea: 'T4', tipo: 'linea' }]
  },
  'campus-aeroespacial-qro': {
    ciudad: 'queretaro',
    nombre: 'Campus Aeroespacial',
    lineas: ['Azul'],
    adyacentes: [{ slug: 'constituyentes-qro', tiempo: 3, linea: 'Azul', tipo: 'linea' }]
  },
  'cancun': {
    ciudad: 'tren-maya',
    nombre: 'Estación Cancún Tren Maya',
    lineas: ['T1'],
    adyacentes: [{ slug: 'playa-del-carmen', tiempo: 5, linea: 'T1', tipo: 'linea' }, { slug: 'valladolid', tiempo: 90, linea: 'T7', tipo: 'transbordo' }]
  },
  'capu': {
    ciudad: 'puebla',
    nombre: 'Central de Autobuses de Puebla',
    lineas: ['1'],
    adyacentes: [{ slug: '20-de-noviembre', tiempo: 3, linea: '1', tipo: 'linea' }]
  },
  'capu-leon': {
    ciudad: 'leon',
    nombre: 'Central Camionera de León',
    lineas: ['Verde'],
    adyacentes: [{ slug: 'plaza-mayor', tiempo: 3, linea: 'Verde', tipo: 'linea' }]
  },
  'catedral-basilica': {
    ciudad: 'leon',
    nombre: 'Catedral Basílica de León',
    lineas: ['Verde'],
    adyacentes: [{ slug: 'la-calzada', tiempo: 3, linea: 'Verde', tipo: 'linea' }, { slug: 'plaza-de-los-martires', tiempo: 3, linea: 'Verde', tipo: 'linea' }]
  },
  'catedral-chihuahua': {
    ciudad: 'chihuahua',
    nombre: 'Catedral Metropolitana',
    lineas: ['2'],
    adyacentes: [{ slug: 'zona-dorada-chi', tiempo: 3, linea: '2', tipo: 'linea' }, { slug: 'palacio-gobierno', tiempo: 3, linea: '2', tipo: 'linea' }]
  },
  'catedral-tijuana': {
    ciudad: 'tijuana',
    nombre: 'Catedral Nuestra Señora de Guadalupe',
    lineas: ['1'],
    adyacentes: [{ slug: 'mercado-hidalgo', tiempo: 3, linea: '1', tipo: 'linea' }, { slug: 'zona-centro', tiempo: 3, linea: '1', tipo: 'linea' }]
  },
  'caucel': {
    ciudad: 'merida',
    nombre: 'Zona Caucel',
    lineas: ['V3'],
    adyacentes: [{ slug: 'cholul', tiempo: 3, linea: 'V3', tipo: 'linea' }, { slug: 'centro-historico', tiempo: 20, linea: 'V3', tipo: 'linea' }
    ]
  },
  'centro-chihuahua': {
    ciudad: 'chihuahua',
    nombre: 'Zócalo de Chihuahua',
    lineas: ['2'],
    adyacentes: [{ slug: 'palacio-gobierno', tiempo: 3, linea: '2', tipo: 'linea' }, { slug: 'chihuahua-central', tiempo: 10, linea: '1', tipo: 'transbordo' }
    ]
  },
  'centro-historico': {
    ciudad: 'merida',
    nombre: 'Catedral de San Ildefonso',
    lineas: ['A4', 'D1'],
    adyacentes: [{ slug: 'mercado-lucas-galez', tiempo: 3, linea: 'D1', tipo: 'linea' }, { slug: 'paseo-montejo', tiempo: 3, linea: 'D1', tipo: 'linea' }, { slug: 'ciudad-caucel', tiempo: 3, linea: 'A4', tipo: 'linea' }, { slug: 'terminal-came', tiempo: 5, linea: 'D1', tipo: 'transbordo' }, { slug: 'la-plancha', tiempo: 5, linea: 'D1', tipo: 'transbordo' }, { slug: 'gran-museo-mundo-maya', tiempo: 5, linea: 'D1', tipo: 'transbordo' }, { slug: 'paseo-montejo', tiempo: 5, linea: 'D1', tipo: 'transbordo' }, { slug: 'mercado-lucas-galez', tiempo: 5, linea: 'D1', tipo: 'transbordo' }, { slug: 'uady', tiempo: 5, linea: 'D1', tipo: 'transbordo' }, { slug: 'aeropuerto-manuel-crescencio-rejon', tiempo: 5, linea: 'A4', tipo: 'transbordo' }, { slug: 'ciudad-caucel', tiempo: 5, linea: 'A4', tipo: 'transbordo' }, { slug: 'hospital-general', tiempo: 15, linea: 'D1', tipo: 'linea' }
    ]
  },
  'centro-historico-qro': {
    ciudad: 'queretaro',
    nombre: 'Jardín Zenea',
    lineas: ['Rojo'],
    adyacentes: [{ slug: 'jardin-zenea-qro', tiempo: 3, linea: 'Rojo', tipo: 'linea' }, { slug: 'terminal-5-febrero', tiempo: 3, linea: 'Rojo', tipo: 'linea' }]
  },
  'chaparral': {
    ciudad: 'tijuana',
    nombre: 'Garita del Chaparral',
    lineas: ['1'],
    adyacentes: [{ slug: 'plaza-rio', tiempo: 3, linea: '1', tipo: 'linea' }, { slug: 'san-ysidro-frontera', tiempo: 3, linea: '1', tipo: 'linea' }]
  },
  'chetumal': {
    ciudad: 'tren-maya',
    nombre: 'Puerto de Chetumal',
    lineas: ['T3'],
    adyacentes: [{ slug: 'bacalar', tiempo: 5, linea: 'T3', tipo: 'linea' }]
  },
  'chichen-itza': {
    ciudad: 'tren-maya',
    nombre: 'Zona Arqueológica de Chichén Itzá',
    lineas: ['T7'],
    adyacentes: [{ slug: 'valladolid', tiempo: 5, linea: 'T7', tipo: 'linea' }]
  },
  'chihuahua-central': {
    ciudad: 'chihuahua',
    nombre: 'Estación Central del Chepe',
    lineas: ['1'],
    adyacentes: [{ slug: 'cuauhtemoc', tiempo: 3, linea: '1', tipo: 'linea' }, { slug: 'centro-chihuahua', tiempo: 10, linea: '1', tipo: 'transbordo' }
    ]
  },
  'cholula': {
    ciudad: 'puebla',
    nombre: 'Pirámide de Cholula',
    lineas: ['1'],
    adyacentes: [{ slug: 'angelopolis', tiempo: 3, linea: '1', tipo: 'linea' }, { slug: 'analco', tiempo: 3, linea: '1', tipo: 'linea' }]
  },
  'cimatario-qro': {
    ciudad: 'queretaro',
    nombre: 'Cerro de Cimatario',
    lineas: ['Azul'],
    adyacentes: [{ slug: 'plaza-dorada-qro', tiempo: 3, linea: 'Azul', tipo: 'linea' }, { slug: 'alameda-qro', tiempo: 3, linea: 'Azul', tipo: 'linea' }]
  },
  'ciudad-caucel': {
    ciudad: 'merida',
    nombre: 'Zona residencial Ciudad Caucel',
    lineas: ['A4'],
    adyacentes: [{ slug: 'centro-historico', tiempo: 3, linea: 'A4', tipo: 'linea' }, { slug: 'aeropuerto-manuel-crescencio-rejon', tiempo: 3, linea: 'A4', tipo: 'linea' }]
  },
  'constituyentes-qro': {
    ciudad: 'queretaro',
    nombre: 'Zona comercial Constituyentes',
    lineas: ['Azul', 'Verde'],
    adyacentes: [{ slug: 'campus-aeroespacial-qro', tiempo: 3, linea: 'Azul', tipo: 'linea' }, { slug: 'hospital-general-qro', tiempo: 3, linea: 'Azul', tipo: 'linea' }, { slug: 'acueducto-qro', tiempo: 3, linea: 'Verde', tipo: 'linea' }, { slug: 'parque-industrial-qro', tiempo: 3, linea: 'Verde', tipo: 'linea' }, { slug: 'alameda-qro', tiempo: 5, linea: 'Azul', tipo: 'transbordo' }, { slug: 'cimatario-qro', tiempo: 5, linea: 'Azul', tipo: 'transbordo' }, { slug: 'plaza-dorada-qro', tiempo: 5, linea: 'Azul', tipo: 'transbordo' }, { slug: 'hospital-general-qro', tiempo: 5, linea: 'Azul', tipo: 'transbordo' }, { slug: 'campus-aeroespacial-qro', tiempo: 5, linea: 'Azul', tipo: 'transbordo' }, { slug: 'tec-monterrey-qro', tiempo: 5, linea: 'Verde', tipo: 'transbordo' }, { slug: 'juriquilla-qro', tiempo: 5, linea: 'Verde', tipo: 'transbordo' }, { slug: 'parque-industrial-qro', tiempo: 5, linea: 'Verde', tipo: 'transbordo' }, { slug: 'acueducto-qro', tiempo: 5, linea: 'Verde', tipo: 'transbordo' }, { slug: 'constituyentes', tiempo: 5, linea: 'Q1', tipo: 'transbordo' }
    , { slug: 'aromas', tiempo: 15, linea: 'Q1', tipo: 'linea' }
    , { slug: 'el-pueblito', tiempo: 15, linea: 'Q1', tipo: 'linea' }
    , { slug: 'hospital-angeles', tiempo: 15, linea: 'Q1', tipo: 'linea' }
    , { slug: 'la-canada', tiempo: 15, linea: 'Q1', tipo: 'linea' }
    , { slug: 'san-pedrito', tiempo: 15, linea: 'Q1', tipo: 'linea' }
    , { slug: 'teatro-republica', tiempo: 15, linea: 'Q1', tipo: 'linea' }
    , { slug: 'tecnologico', tiempo: 15, linea: 'Q1', tipo: 'linea' }
    , { slug: 'universidad-autonoma', tiempo: 15, linea: 'Q1', tipo: 'linea' }
    , { slug: 'panteón-queretanos', tiempo: 12, linea: 'Q1', tipo: 'linea' }
    ]
  },
  'cosmovitral': {
    ciudad: 'toluca',
    nombre: 'Cosmovitral Jardín Botánico',
    lineas: ['M1'],
    adyacentes: [{ slug: 'metepec-artesanal', tiempo: 3, linea: 'M1', tipo: 'linea' }, { slug: 'portales-toluca', tiempo: 3, linea: 'M1', tipo: 'linea' }]
  },
  'creel': {
    ciudad: 'chihuahua',
    nombre: 'Plaza Principal de Creel',
    lineas: ['1'],
    adyacentes: [{ slug: 'divisadero', tiempo: 3, linea: '1', tipo: 'linea' }, { slug: 'cuauhtemoc', tiempo: 3, linea: '1', tipo: 'linea' }]
  },
  'delta-leon': {
    ciudad: 'leon',
    nombre: 'Centro Comercial Delta',
    lineas: ['Azul'],
    adyacentes: [{ slug: 'gran-plaza-leon', tiempo: 3, linea: 'Azul', tipo: 'linea' }, { slug: 'terminal-central-leon', tiempo: 3, linea: 'Azul', tipo: 'linea' }, { slug: 'zona-centro-leon', tiempo: 10, linea: 'Verde', tipo: 'transbordo' }]
  },
  'divisadero': {
    ciudad: 'chihuahua',
    nombre: 'Mirador Divisadero',
    lineas: ['1'],
    adyacentes: [{ slug: 'posada-barrancas', tiempo: 3, linea: '1', tipo: 'linea' }, { slug: 'creel', tiempo: 3, linea: '1', tipo: 'linea' }]
  },
  'el-fuerte': {
    ciudad: 'chihuahua',
    nombre: 'Centro Histórico de El Fuerte',
    lineas: ['1'],
    adyacentes: [{ slug: 'los-mochis', tiempo: 3, linea: '1', tipo: 'linea' }, { slug: 'bahuichivo', tiempo: 3, linea: '1', tipo: 'linea' }]
  },
  'el-pueblito': {
    ciudad: 'queretaro',
    nombre: 'Zona residencial El Pueblito',
    lineas: [],
    adyacentes: [{ slug: 'constituyentes-qro', tiempo: 15, linea: 'Q1', tipo: 'linea' }
    ]
  },
  'escarcega': {
    ciudad: 'tren-maya',
    nombre: 'Estación de Escárcega',
    lineas: ['T4'],
    adyacentes: [{ slug: 'calakmul-balamku', tiempo: 5, linea: 'T4', tipo: 'linea' }, { slug: 'bacalar', tiempo: 90, linea: 'T3', tipo: 'transbordo' }, { slug: 'palenque', tiempo: 75, linea: 'T5', tipo: 'transbordo' }]
  },
  'estadio-corregidora': {
    ciudad: 'queretaro',
    nombre: 'Estadio Corregidora',
    lineas: [],
    adyacentes: [{ slug: 'estadio-corregidora-qro', tiempo: 5, linea: 'Q1', tipo: 'transbordo' }
    ]
  },
  'estadio-corregidora-qro': {
    ciudad: 'queretaro',
    nombre: 'Estadio La Corregidora',
    lineas: ['Rojo'],
    adyacentes: [{ slug: 'barrio-la-cruz-qro', tiempo: 3, linea: 'Rojo', tipo: 'linea' }, { slug: 'uaq-campus-qro', tiempo: 3, linea: 'Rojo', tipo: 'linea' }, { slug: 'estadio-corregidora', tiempo: 5, linea: 'Q1', tipo: 'transbordo' }
    ]
  },
  'estadio-leon': {
    ciudad: 'leon',
    nombre: 'Estadio León (Estación de Bomberos)',
    lineas: ['Verde'],
    adyacentes: [{ slug: 'blvd-adolfo-lopez-mateos', tiempo: 3, linea: 'Verde', tipo: 'linea' }, { slug: 'la-calzada', tiempo: 3, linea: 'Verde', tipo: 'linea' }]
  },
  'expo-leon': {
    ciudad: 'leon',
    nombre: 'Centro de Exposiciones Expo León',
    lineas: ['Naranja'],
    adyacentes: [{ slug: 'poliforum-leon', tiempo: 3, linea: 'Naranja', tipo: 'linea' }]
  },
  'forum-metropolitano-leon': {
    ciudad: 'leon',
    nombre: 'Forum Metropolitano',
    lineas: ['Morado'],
    adyacentes: [{ slug: 'zona-piel-leon', tiempo: 3, linea: 'Morado', tipo: 'linea' }, { slug: 'zona-centro-leon', tiempo: 8, linea: 'Verde', tipo: 'transbordo' }]
  },
  'gran-museo-mundo-maya': {
    ciudad: 'merida',
    nombre: 'Gran Museo del Mundo Maya',
    lineas: ['D1'],
    adyacentes: [{ slug: 'paseo-montejo', tiempo: 3, linea: 'D1', tipo: 'linea' }, { slug: 'la-plancha', tiempo: 3, linea: 'D1', tipo: 'linea' }]
  },
  'gran-plaza-leon': {
    ciudad: 'leon',
    nombre: 'Gran Plaza Comercial',
    lineas: ['Azul'],
    adyacentes: [{ slug: 'plaza-toros-leon', tiempo: 3, linea: 'Azul', tipo: 'linea' }, { slug: 'delta-leon', tiempo: 3, linea: 'Azul', tipo: 'linea' }]
  },
  'hospital-angeles': {
    ciudad: 'queretaro',
    nombre: 'Hospital Angeles de Querétaro',
    lineas: [],
    adyacentes: [{ slug: 'constituyentes-qro', tiempo: 15, linea: 'Q1', tipo: 'linea' }
    ]
  },
  'hospital-general-qro': {
    ciudad: 'queretaro',
    nombre: 'Hospital General de Querétaro',
    lineas: ['Azul'],
    adyacentes: [{ slug: 'constituyentes-qro', tiempo: 3, linea: 'Azul', tipo: 'linea' }, { slug: 'plaza-dorada-qro', tiempo: 3, linea: 'Azul', tipo: 'linea' }]
  },
  'hospital-general-tj': {
    ciudad: 'tijuana',
    nombre: 'Hospital General',
    lineas: ['2'],
    adyacentes: [{ slug: 'aeropuerto-tj', tiempo: 3, linea: '2', tipo: 'linea' }, { slug: 'plaza-santa-cecilia', tiempo: 3, linea: '2', tipo: 'linea' }]
  },
  'hospital-imss-bajio': {
    ciudad: 'leon',
    nombre: 'Hospital IMSS Bajío',
    lineas: ['Azul'],
    adyacentes: [{ slug: 'universidad-campus-leon', tiempo: 3, linea: 'Azul', tipo: 'linea' }, { slug: 'plaza-toros-leon', tiempo: 3, linea: 'Azul', tipo: 'linea' }]
  },
  'industrial-norte-leon': {
    ciudad: 'leon',
    nombre: 'Zona Industrial',
    lineas: ['Naranja'],
    adyacentes: [{ slug: 'aeropuerto-bajio-acceso', tiempo: 3, linea: 'Naranja', tipo: 'linea' }, { slug: 'poliforum-leon', tiempo: 3, linea: 'Naranja', tipo: 'linea' }]
  },
  'itzimna': {
    ciudad: 'merida',
    nombre: 'Zona residencial Itzimná',
    lineas: ['R2'],
    adyacentes: [{ slug: 'parque-centenario', tiempo: 3, linea: 'R2', tipo: 'linea' }, { slug: 'hospital-general', tiempo: 3, linea: 'R2', tipo: 'linea' }]
  },
  'izamal': {
    ciudad: 'tren-maya',
    nombre: 'Convento de San Antonio de Padua',
    lineas: ['T6'],
    adyacentes: [{ slug: 'uxmal', tiempo: 5, linea: 'T6', tipo: 'linea' }, { slug: 'valladolid', tiempo: 45, linea: 'T7', tipo: 'transbordo' }]
  },
  'jardin-zenea-qro': {
    ciudad: 'queretaro',
    nombre: 'Jardín Zenea',
    lineas: ['Rojo'],
    adyacentes: [{ slug: 'santa-rosa-viterbo-qro', tiempo: 3, linea: 'Rojo', tipo: 'linea' }, { slug: 'centro-historico-qro', tiempo: 3, linea: 'Rojo', tipo: 'linea' }]
  },
  'juriquilla': {
    ciudad: 'queretaro',
    nombre: 'Zona residencial Juriquilla',
    lineas: [],
    adyacentes: [{ slug: 'juriquilla-qro', tiempo: 5, linea: 'Q1', tipo: 'transbordo' }
    ]
  },
  'juriquilla-qro': {
    ciudad: 'queretaro',
    nombre: 'Zona residencial Juriquilla',
    lineas: ['Verde'],
    adyacentes: [{ slug: 'parque-industrial-qro', tiempo: 3, linea: 'Verde', tipo: 'linea' }, { slug: 'tec-monterrey-qro', tiempo: 3, linea: 'Verde', tipo: 'linea' }, { slug: 'juriquilla', tiempo: 5, linea: 'Q1', tipo: 'transbordo' }
    ]
  },
  'la-calzada': {
    ciudad: 'leon',
    nombre: 'Zona residencial La Calzada',
    lineas: ['Verde'],
    adyacentes: [{ slug: 'estadio-leon', tiempo: 3, linea: 'Verde', tipo: 'linea' }, { slug: 'catedral-basilica', tiempo: 3, linea: 'Verde', tipo: 'linea' }]
  },
  'la-canada': {
    ciudad: 'queretaro',
    nombre: 'Zona residencial La Cañada',
    lineas: [],
    adyacentes: [{ slug: 'constituyentes-qro', tiempo: 15, linea: 'Q1', tipo: 'linea' }
    ]
  },
  'la-mesa-tj': {
    ciudad: 'tijuana',
    nombre: 'Zona residencial La Mesa',
    lineas: ['2'],
    adyacentes: [{ slug: 'valle-guadalupe-acceso', tiempo: 3, linea: '2', tipo: 'linea' }, { slug: 'buena-vista', tiempo: 3, linea: '2', tipo: 'linea' }]
  },
  'la-plancha': {
    ciudad: 'merida',
    nombre: 'Parque Lineal La Plancha',
    lineas: ['D1'],
    adyacentes: [{ slug: 'gran-museo-mundo-maya', tiempo: 3, linea: 'D1', tipo: 'linea' }, { slug: 'terminal-came', tiempo: 3, linea: 'D1', tipo: 'linea' }]
  },
  'lerma': {
    ciudad: 'toluca',
    nombre: 'Centro de Lerma',
    lineas: ['TI'],
    adyacentes: [{ slug: 'san-mateo-atenco', tiempo: 3, linea: 'TI', tipo: 'linea' }, { slug: 'observatorio-cdmx', tiempo: 3, linea: 'TI', tipo: 'linea' }]
  },
  'lerma-centro': {
    ciudad: 'toluca',
    nombre: 'Centro Comercial Lerma',
    lineas: ['M2'],
    adyacentes: [{ slug: 'parque-lerma', tiempo: 3, linea: 'M2', tipo: 'linea' }]
  },
  'loreto': {
    ciudad: 'puebla',
    nombre: 'Zona residencial Loreto',
    lineas: ['3'],
    adyacentes: [{ slug: 'periferico-ecologico', tiempo: 3, linea: '3', tipo: 'linea' }, { slug: 'los-fuertes', tiempo: 3, linea: '3', tipo: 'linea' }]
  },
  'los-fuertes': {
    ciudad: 'puebla',
    nombre: 'Zona residencial Los Fuertes',
    lineas: ['3'],
    adyacentes: [{ slug: 'loreto', tiempo: 3, linea: '3', tipo: 'linea' }, { slug: 'valsequillo', tiempo: 3, linea: '3', tipo: 'linea' }]
  },
  'los-mochis': {
    ciudad: 'chihuahua',
    nombre: 'Estación Los Mochis (Terminal Chepe)',
    lineas: ['1'],
    adyacentes: [{ slug: 'el-fuerte', tiempo: 3, linea: '1', tipo: 'linea' }]
  },
  'mercado-artesanias': {
    ciudad: 'puebla',
    nombre: 'Mercado de Artesanías Poblanas',
    lineas: ['1'],
    adyacentes: [{ slug: 'angelopolis', tiempo: 3, linea: '1', tipo: 'linea' }]
  },
  'mercado-hidalgo': {
    ciudad: 'tijuana',
    nombre: 'Mercado Hidalgo',
    lineas: ['1'],
    adyacentes: [{ slug: 'playas-tj', tiempo: 3, linea: '1', tipo: 'linea' }, { slug: 'catedral-tijuana', tiempo: 3, linea: '1', tipo: 'linea' }]
  },
  'mercado-lucas-galez': {
    ciudad: 'merida',
    nombre: 'Mercado Lucas de Gálvez',
    lineas: ['D1'],
    adyacentes: [{ slug: 'uady', tiempo: 3, linea: 'D1', tipo: 'linea' }, { slug: 'centro-historico', tiempo: 3, linea: 'D1', tipo: 'linea' }]
  },
  'merida-oriente': {
    ciudad: 'tren-maya',
    nombre: 'Centro de Mérida',
    lineas: ['T6'],
    adyacentes: [{ slug: 'uxmal', tiempo: 5, linea: 'T6', tipo: 'linea' }]
  },
  'metepec': {
    ciudad: 'toluca',
    nombre: 'Metepec Centro',
    lineas: ['TI'],
    adyacentes: [{ slug: 'zinacantepec-terminal', tiempo: 3, linea: 'TI', tipo: 'linea' }, { slug: 'san-mateo-atenco', tiempo: 3, linea: 'TI', tipo: 'linea' }]
  },
  'metepec-artesanal': {
    ciudad: 'toluca',
    nombre: 'Mercado de Artesanías Metepec',
    lineas: ['M1'],
    adyacentes: [{ slug: 'san-salvador-metepec', tiempo: 3, linea: 'M1', tipo: 'linea' }, { slug: 'cosmovitral', tiempo: 3, linea: 'M1', tipo: 'linea' }]
  },
  'museo-quinta-gameros': {
    ciudad: 'chihuahua',
    nombre: 'Quinta Gameros (Art Nouveau)',
    lineas: ['2'],
    adyacentes: [{ slug: 'pancho-villa-museo', tiempo: 3, linea: '2', tipo: 'linea' }, { slug: 'uach', tiempo: 3, linea: '2', tipo: 'linea' }]
  },
  'nevado-toluca-acceso': {
    ciudad: 'toluca',
    nombre: 'Nevado de Toluca / Xinantécatl',
    lineas: [],
    adyacentes: []
  },
  'observatorio-cdmx': {
    ciudad: 'toluca',
    nombre: 'Estación Observatorio Metro CDMX Línea 1',
    lineas: ['TI'],
    adyacentes: [{ slug: 'lerma', tiempo: 3, linea: 'TI', tipo: 'linea' }]
  },
  'otay-comercial': {
    ciudad: 'tijuana',
    nombre: 'Garita Otay',
    lineas: [],
    adyacentes: [{ slug: 'aeropuerto-tj', tiempo: 12, linea: '2', tipo: 'linea' }
    ]
  },
  'palacio-gobierno': {
    ciudad: 'chihuahua',
    nombre: 'Murales de Aarón Piña Mora',
    lineas: ['2'],
    adyacentes: [{ slug: 'catedral-chihuahua', tiempo: 3, linea: '2', tipo: 'linea' }, { slug: 'centro-chihuahua', tiempo: 3, linea: '2', tipo: 'linea' }]
  },
  'palenque': {
    ciudad: 'tren-maya',
    nombre: 'Zona Arqueológica de Palenque',
    lineas: ['T5'],
    adyacentes: [{ slug: 'agua-azul', tiempo: 5, linea: 'T5', tipo: 'linea' }, { slug: 'escarcega', tiempo: 75, linea: 'T4', tipo: 'transbordo' }]
  },
  'pancho-villa-museo': {
    ciudad: 'chihuahua',
    nombre: 'Casa de Pancho Villa',
    lineas: ['2'],
    adyacentes: [{ slug: 'museo-quinta-gameros', tiempo: 3, linea: '2', tipo: 'linea' }]
  },
  'panteón-queretanos': {
    ciudad: 'queretaro',
    nombre: 'Panteón de los Queretanos',
    lineas: [],
    adyacentes: [{ slug: 'constituyentes-qro', tiempo: 12, linea: 'Q1', tipo: 'linea' }
    ]
  },
  'parque-centenario': {
    ciudad: 'merida',
    nombre: 'Parque del Centenario',
    lineas: ['R2'],
    adyacentes: [{ slug: 'itzimna', tiempo: 3, linea: 'R2', tipo: 'linea' }]
  },
  'parque-industrial-qro': {
    ciudad: 'queretaro',
    nombre: 'Parque Industrial de Querétaro',
    lineas: ['Verde'],
    adyacentes: [{ slug: 'constituyentes-qro', tiempo: 3, linea: 'Verde', tipo: 'linea' }, { slug: 'juriquilla-qro', tiempo: 3, linea: 'Verde', tipo: 'linea' }]
  },
  'parque-lerma': {
    ciudad: 'toluca',
    nombre: 'Parque Natural Lerma',
    lineas: ['M2'],
    adyacentes: [{ slug: 'universidad-toluca', tiempo: 3, linea: 'M2', tipo: 'linea' }, { slug: 'lerma-centro', tiempo: 3, linea: 'M2', tipo: 'linea' }]
  },
  'paseo-montejo': {
    ciudad: 'merida',
    nombre: 'Paseo de Montejo',
    lineas: ['D1'],
    adyacentes: [{ slug: 'centro-historico', tiempo: 3, linea: 'D1', tipo: 'linea' }, { slug: 'gran-museo-mundo-maya', tiempo: 3, linea: 'D1', tipo: 'linea' }]
  },
  'periferico-ecologico': {
    ciudad: 'puebla',
    nombre: 'Periférico Ecológico de Puebla',
    lineas: ['3'],
    adyacentes: [{ slug: 'loreto', tiempo: 3, linea: '3', tipo: 'linea' }]
  },
  'playa-del-carmen': {
    ciudad: 'tren-maya',
    nombre: 'Quinta Avenida',
    lineas: ['T1'],
    adyacentes: [{ slug: 'xcaret', tiempo: 5, linea: 'T1', tipo: 'linea' }, { slug: 'cancun', tiempo: 5, linea: 'T1', tipo: 'linea' }]
  },
  'playas-tj': {
    ciudad: 'tijuana',
    nombre: 'Playas públicas',
    lineas: ['1'],
    adyacentes: [{ slug: 'mercado-hidalgo', tiempo: 3, linea: '1', tipo: 'linea' }]
  },
  'plaza-de-los-martires': {
    ciudad: 'leon',
    nombre: 'Plaza de los Mártires',
    lineas: ['Verde'],
    adyacentes: [{ slug: 'catedral-basilica', tiempo: 3, linea: 'Verde', tipo: 'linea' }, { slug: 'zona-centro-leon', tiempo: 3, linea: 'Verde', tipo: 'linea' }]
  },
  'plaza-dorada-qro': {
    ciudad: 'queretaro',
    nombre: 'Centro comercial Plaza Dorada',
    lineas: ['Azul'],
    adyacentes: [{ slug: 'hospital-general-qro', tiempo: 3, linea: 'Azul', tipo: 'linea' }, { slug: 'cimatario-qro', tiempo: 3, linea: 'Azul', tipo: 'linea' }]
  },
  'plaza-las-americas': {
    ciudad: 'merida',
    nombre: 'Centro comercial Plaza Las Américas',
    lineas: ['R2'],
    adyacentes: [{ slug: 'altabrisa', tiempo: 3, linea: 'R2', tipo: 'linea' }, { slug: 'terminal-noreste', tiempo: 3, linea: 'R2', tipo: 'linea' }]
  },
  'plaza-mayor': {
    ciudad: 'leon',
    nombre: 'Plaza Mayor Shopping',
    lineas: ['Verde'],
    adyacentes: [{ slug: 'zona-centro-leon', tiempo: 3, linea: 'Verde', tipo: 'linea' }, { slug: 'capu-leon', tiempo: 3, linea: 'Verde', tipo: 'linea' }]
  },
  'plaza-rio': {
    ciudad: 'tijuana',
    nombre: 'Plaza Río Centro Comercial',
    lineas: ['1'],
    adyacentes: [{ slug: 'zona-centro', tiempo: 3, linea: '1', tipo: 'linea' }, { slug: 'chaparral', tiempo: 3, linea: '1', tipo: 'linea' }]
  },
  'plaza-santa-cecilia': {
    ciudad: 'tijuana',
    nombre: 'Plaza Santa Cecilia',
    lineas: ['2'],
    adyacentes: [{ slug: 'hospital-general-tj', tiempo: 3, linea: '2', tipo: 'linea' }]
  },
  'plaza-toros-leon': {
    ciudad: 'leon',
    nombre: 'Plaza de Toros León',
    lineas: ['Azul'],
    adyacentes: [{ slug: 'hospital-imss-bajio', tiempo: 3, linea: 'Azul', tipo: 'linea' }, { slug: 'gran-plaza-leon', tiempo: 3, linea: 'Azul', tipo: 'linea' }]
  },
  'poliforum-leon': {
    ciudad: 'leon',
    nombre: 'Polifórum de León',
    lineas: ['Naranja'],
    adyacentes: [{ slug: 'industrial-norte-leon', tiempo: 3, linea: 'Naranja', tipo: 'linea' }, { slug: 'expo-leon', tiempo: 3, linea: 'Naranja', tipo: 'linea' }, { slug: 'zona-centro-leon', tiempo: 10, linea: 'Verde', tipo: 'transbordo' }]
  },
  'portales-toluca': {
    ciudad: 'toluca',
    nombre: 'Portales de Toluca',
    lineas: ['M1'],
    adyacentes: [{ slug: 'cosmovitral', tiempo: 3, linea: 'M1', tipo: 'linea' }, { slug: 'toluca-centro-bus', tiempo: 3, linea: 'M1', tipo: 'linea' }]
  },
  'posada-barrancas': {
    ciudad: 'chihuahua',
    nombre: 'Hotel Posada Barrancas',
    lineas: ['1'],
    adyacentes: [{ slug: 'bahuichivo', tiempo: 3, linea: '1', tipo: 'linea' }, { slug: 'divisadero', tiempo: 3, linea: '1', tipo: 'linea' }]
  },
  'puente-cross-border': {
    ciudad: 'tijuana',
    nombre: 'Cross Border Xpress',
    lineas: ['2'],
    adyacentes: [{ slug: 'buena-vista', tiempo: 3, linea: '2', tipo: 'linea' }, { slug: 'aeropuerto-tj', tiempo: 3, linea: '2', tipo: 'linea' }]
  },
  'san-manuel': {
    ciudad: 'puebla',
    nombre: 'Zona residencial San Manuel',
    lineas: ['2'],
    adyacentes: [{ slug: 'la-paz', tiempo: 3, linea: '2', tipo: 'linea' }, { slug: 'hospital-general', tiempo: 3, linea: '2', tipo: 'linea' }]
  },
  'san-mateo-atenco': {
    ciudad: 'toluca',
    nombre: 'Zona residencial San Mateo',
    lineas: ['TI'],
    adyacentes: [{ slug: 'metepec', tiempo: 3, linea: 'TI', tipo: 'linea' }, { slug: 'lerma', tiempo: 3, linea: 'TI', tipo: 'linea' }]
  },
  'san-pedrito': {
    ciudad: 'queretaro',
    nombre: 'Zona residencial San Pedrito',
    lineas: [],
    adyacentes: [{ slug: 'constituyentes-qro', tiempo: 15, linea: 'Q1', tipo: 'linea' }
    ]
  },
  'san-salvador-metepec': {
    ciudad: 'toluca',
    nombre: 'Zona residencial',
    lineas: ['M1'],
    adyacentes: [{ slug: 'metepec-artesanal', tiempo: 3, linea: 'M1', tipo: 'linea' }]
  },
  'san-ysidro-frontera': {
    ciudad: 'tijuana',
    nombre: 'Puerto de Entrada San Ysidro',
    lineas: ['1'],
    adyacentes: [{ slug: 'chaparral', tiempo: 3, linea: '1', tipo: 'linea' }]
  },
  'santa-rosa-viterbo-qro': {
    ciudad: 'queretaro',
    nombre: 'Templo de Santa Rosa de Viterbo',
    lineas: ['Rojo'],
    adyacentes: [{ slug: 'uaq-campus-qro', tiempo: 3, linea: 'Rojo', tipo: 'linea' }, { slug: 'jardin-zenea-qro', tiempo: 3, linea: 'Rojo', tipo: 'linea' }]
  },
  'teatro-republica': {
    ciudad: 'queretaro',
    nombre: 'Teatro de la República',
    lineas: [],
    adyacentes: [{ slug: 'constituyentes-qro', tiempo: 15, linea: 'Q1', tipo: 'linea' }
    ]
  },
  'tec-monterrey-qro': {
    ciudad: 'queretaro',
    nombre: 'Tecnológico de Monterrey Campus Querétaro',
    lineas: ['Verde'],
    adyacentes: [{ slug: 'juriquilla-qro', tiempo: 3, linea: 'Verde', tipo: 'linea' }]
  },
  'tecnologico': {
    ciudad: 'queretaro',
    nombre: 'Instituto Tecnológico de Querétaro',
    lineas: [],
    adyacentes: [{ slug: 'constituyentes-qro', tiempo: 15, linea: 'Q1', tipo: 'linea' }
    ]
  },
  'terminal-5-febrero': {
    ciudad: 'queretaro',
    nombre: 'Terminal de Autobuses 5 de Febrero',
    lineas: ['Rojo'],
    adyacentes: [{ slug: 'centro-historico-qro', tiempo: 3, linea: 'Rojo', tipo: 'linea' }]
  },
  'terminal-came': {
    ciudad: 'merida',
    nombre: 'Central de Autobuses del Estado',
    lineas: ['D1'],
    adyacentes: [{ slug: 'la-plancha', tiempo: 3, linea: 'D1', tipo: 'linea' }]
  },
  'terminal-central-leon': {
    ciudad: 'leon',
    nombre: 'Terminal de Autobuses Central',
    lineas: ['Azul'],
    adyacentes: [{ slug: 'delta-leon', tiempo: 3, linea: 'Azul', tipo: 'linea' }]
  },
  'terminal-noreste': {
    ciudad: 'merida',
    nombre: 'Terminal de autobuses noreste',
    lineas: ['R2'],
    adyacentes: [{ slug: 'plaza-las-americas', tiempo: 3, linea: 'R2', tipo: 'linea' }]
  },
  'toluca-centro-bus': {
    ciudad: 'toluca',
    nombre: 'Centro Histórico Toluca',
    lineas: ['M1'],
    adyacentes: [{ slug: 'portales-toluca', tiempo: 3, linea: 'M1', tipo: 'linea' }, { slug: 'zinacantepec-terminal', tiempo: 3, linea: 'M1', tipo: 'linea' }]
  },
  'tulum': {
    ciudad: 'tren-maya',
    nombre: 'Zona Arqueológica de Tulum',
    lineas: ['T1'],
    adyacentes: [{ slug: 'xcaret', tiempo: 5, linea: 'T1', tipo: 'linea' }, { slug: 'bacalar', tiempo: 60, linea: 'T3', tipo: 'transbordo' }]
  },
  'uach': {
    ciudad: 'chihuahua',
    nombre: 'Campus de la UACH',
    lineas: ['2'],
    adyacentes: [{ slug: 'museo-quinta-gameros', tiempo: 3, linea: '2', tipo: 'linea' }, { slug: 'zona-dorada-chi', tiempo: 3, linea: '2', tipo: 'linea' }]
  },
  'uady': {
    ciudad: 'merida',
    nombre: 'Universidad Autónoma de Yucatán',
    lineas: ['D1'],
    adyacentes: [{ slug: 'mercado-lucas-galez', tiempo: 3, linea: 'D1', tipo: 'linea' }]
  },
  'uaq-campus-qro': {
    ciudad: 'queretaro',
    nombre: 'Universidad Autónoma de Querétaro',
    lineas: ['Rojo'],
    adyacentes: [{ slug: 'estadio-corregidora-qro', tiempo: 3, linea: 'Rojo', tipo: 'linea' }, { slug: 'santa-rosa-viterbo-qro', tiempo: 3, linea: 'Rojo', tipo: 'linea' }]
  },
  'udla': {
    ciudad: 'puebla',
    nombre: 'Universidad de las Américas',
    lineas: ['2'],
    adyacentes: [{ slug: 'hospital-general', tiempo: 3, linea: '2', tipo: 'linea' }]
  },
  'universidad-autonoma': {
    ciudad: 'queretaro',
    nombre: 'Universidad Autónoma de Querétaro',
    lineas: [],
    adyacentes: [{ slug: 'constituyentes-qro', tiempo: 15, linea: 'Q1', tipo: 'linea' }
    ]
  },
  'universidad-campus-leon': {
    ciudad: 'leon',
    nombre: 'Campus Universitario',
    lineas: ['Azul'],
    adyacentes: [{ slug: 'hospital-imss-bajio', tiempo: 3, linea: 'Azul', tipo: 'linea' }]
  },
  'universidad-toluca': {
    ciudad: 'toluca',
    nombre: 'Campus Universitario',
    lineas: ['M2'],
    adyacentes: [{ slug: 'aeropuerto-toluca', tiempo: 3, linea: 'M2', tipo: 'linea' }, { slug: 'parque-lerma', tiempo: 3, linea: 'M2', tipo: 'linea' }]
  },
  'uxmal': {
    ciudad: 'tren-maya',
    nombre: 'Zona Arqueológica de Uxmal',
    lineas: ['T6'],
    adyacentes: [{ slug: 'merida-oriente', tiempo: 5, linea: 'T6', tipo: 'linea' }, { slug: 'izamal', tiempo: 5, linea: 'T6', tipo: 'linea' }]
  },
  'valladolid': {
    ciudad: 'tren-maya',
    nombre: 'Centro histórico de Valladolid',
    lineas: ['T7'],
    adyacentes: [{ slug: 'chichen-itza', tiempo: 5, linea: 'T7', tipo: 'linea' }, { slug: 'cancun', tiempo: 90, linea: 'T1', tipo: 'transbordo' }, { slug: 'izamal', tiempo: 45, linea: 'T6', tipo: 'transbordo' }]
  },
  'valle-guadalupe-acceso': {
    ciudad: 'tijuana',
    nombre: 'Valle de Guadalupe',
    lineas: ['2'],
    adyacentes: [{ slug: 'la-mesa-tj', tiempo: 3, linea: '2', tipo: 'linea' }]
  },
  'valsequillo': {
    ciudad: 'puebla',
    nombre: 'Zona residencial Valsequillo',
    lineas: ['3'],
    adyacentes: [{ slug: 'los-fuertes', tiempo: 3, linea: '3', tipo: 'linea' }]
  },
  'xcaret': {
    ciudad: 'tren-maya',
    nombre: 'Parque Xcaret',
    lineas: ['T1'],
    adyacentes: [{ slug: 'tulum', tiempo: 5, linea: 'T1', tipo: 'linea' }, { slug: 'playa-del-carmen', tiempo: 5, linea: 'T1', tipo: 'linea' }]
  },
  'zinacantepec-terminal': {
    ciudad: 'toluca',
    nombre: 'Terminal Zinacantepec Tren Interurbano',
    lineas: ['M1', 'TI'],
    adyacentes: [{ slug: 'metepec', tiempo: 3, linea: 'TI', tipo: 'linea' }, { slug: 'toluca-centro-bus', tiempo: 3, linea: 'M1', tipo: 'linea' }, { slug: 'observatorio-cdmx', tiempo: 5, linea: 'TI', tipo: 'transbordo' }, { slug: 'lerma', tiempo: 5, linea: 'TI', tipo: 'transbordo' }, { slug: 'san-mateo-atenco', tiempo: 5, linea: 'TI', tipo: 'transbordo' }, { slug: 'metepec', tiempo: 5, linea: 'TI', tipo: 'transbordo' }, { slug: 'toluca-centro-bus', tiempo: 5, linea: 'M1', tipo: 'transbordo' }, { slug: 'portales-toluca', tiempo: 5, linea: 'M1', tipo: 'transbordo' }, { slug: 'cosmovitral', tiempo: 5, linea: 'M1', tipo: 'transbordo' }, { slug: 'metepec-artesanal', tiempo: 5, linea: 'M1', tipo: 'transbordo' }, { slug: 'san-salvador-metepec', tiempo: 5, linea: 'M1', tipo: 'transbordo' }]
  },
  'zocalo-centro': {
    ciudad: 'puebla',
    nombre: 'Catedral Metropolitana',
    lineas: ['1'],
    adyacentes: [{ slug: 'barrio-artista', tiempo: 3, linea: '1', tipo: 'linea' }, { slug: '20-de-noviembre', tiempo: 3, linea: '1', tipo: 'linea' }]
  },
  'zona-centro': {
    ciudad: 'tijuana',
    nombre: 'Avenida Revolución (callejón)',
    lineas: ['1'],
    adyacentes: [{ slug: 'catedral-tijuana', tiempo: 3, linea: '1', tipo: 'linea' }, { slug: 'plaza-rio', tiempo: 3, linea: '1', tipo: 'linea' }, { slug: 'buena-vista', tiempo: 15, linea: '1', tipo: 'linea' }
    ]
  },
  'zona-centro-leon': {
    ciudad: 'leon',
    nombre: 'Catedral Basílica de León',
    lineas: ['Verde'],
    adyacentes: [{ slug: 'plaza-de-los-martires', tiempo: 3, linea: 'Verde', tipo: 'linea' }, { slug: 'plaza-mayor', tiempo: 3, linea: 'Verde', tipo: 'linea' }, { slug: 'poliforum-leon', tiempo: 10, linea: 'Naranja', tipo: 'transbordo' }, { slug: 'delta-leon', tiempo: 10, linea: 'Azul', tipo: 'transbordo' }, { slug: 'forum-metropolitano-leon', tiempo: 8, linea: 'Morado', tipo: 'transbordo' }]
  },
  'zona-dorada-chi': {
    ciudad: 'chihuahua',
    nombre: 'Hoteles de lujo',
    lineas: ['2'],
    adyacentes: [{ slug: 'uach', tiempo: 3, linea: '2', tipo: 'linea' }, { slug: 'catedral-chihuahua', tiempo: 3, linea: '2', tipo: 'linea' }]
  },
  'zona-piel-leon': {
    ciudad: 'leon',
    nombre: 'Zona Piel León',
    lineas: ['Morado'],
    adyacentes: [{ slug: 'forum-metropolitano-leon', tiempo: 3, linea: 'Morado', tipo: 'linea' }]
  }
,
  // TREN MAYA — Estaciones faltantes para completar el loop
  // ============================================
  'merida-teya': {
    ciudad: 'tren-maya',
    nombre: 'Mérida-Teya',
    lineas: ['T7'],
    adyacentes: [
      { slug: 'izamal', tiempo: 45, linea: 'T7', tipo: 'linea' },
      { slug: 'chichen-itza', tiempo: 60, linea: 'T7', tipo: 'linea' }
    ]
  },
  'izamal': {
    ciudad: 'tren-maya',
    nombre: 'Izamal',
    lineas: ['T7'],
    adyacentes: [
      { slug: 'merida-teya', tiempo: 45, linea: 'T7', tipo: 'linea' },
      { slug: 'chichen-itza', tiempo: 45, linea: 'T7', tipo: 'linea' }
    ]
  },
  'chichen-itza': {
    ciudad: 'tren-maya',
    nombre: 'Chichén Itzá',
    lineas: ['T7'],
    adyacentes: [
      { slug: 'izamal', tiempo: 45, linea: 'T7', tipo: 'linea' },
      { slug: 'valladolid-tren', tiempo: 50, linea: 'T7', tipo: 'linea' }
    ]
  },
  'valladolid-tren': {
    ciudad: 'tren-maya',
    nombre: 'Valladolid',
    lineas: ['T7'],
    adyacentes: [
      { slug: 'chichen-itza', tiempo: 50, linea: 'T7', tipo: 'linea' },
      { slug: 'playa-del-carmen', tiempo: 60, linea: 'T7', tipo: 'linea' }
    ]
  },

  // ============================================
  // CHIHUAHUA BOWÍ BRT — 14 estaciones
  // ============================================
  'terminal-norte-bowi': {
    ciudad: 'chihuahua',
    nombre: 'Terminal Norte Bowí',
    lineas: ['Bowí'],
    adyacentes: [
      { slug: 'periferico-norte-bowi', tiempo: 5, linea: 'Bowí', tipo: 'linea' },
      { slug: 'benito-juarez-bowi', tiempo: 8, linea: 'Bowí', tipo: 'linea' }
    ]
  },
  'periferico-norte-bowi': {
    ciudad: 'chihuahua',
    nombre: 'Periférico Norte Bowí',
    lineas: ['Bowí'],
    adyacentes: [
      { slug: 'terminal-norte-bowi', tiempo: 5, linea: 'Bowí', tipo: 'linea' },
      { slug: 'benito-juarez-bowi', tiempo: 5, linea: 'Bowí', tipo: 'linea' }
    ]
  },
  'benito-juarez-bowi': {
    ciudad: 'chihuahua',
    nombre: 'Benito Juárez Bowí',
    lineas: ['Bowí'],
    adyacentes: [
      { slug: 'periferico-norte-bowi', tiempo: 5, linea: 'Bowí', tipo: 'linea' },
      { slug: 'paseo-bolvar-bowi', tiempo: 4, linea: 'Bowí', tipo: 'linea' }
    ]
  },
  'paseo-bolvar-bowi': {
    ciudad: 'chihuahua',
    nombre: 'Paseo Bolívar Bowí',
    lineas: ['Bowí'],
    adyacentes: [
      { slug: 'benito-juarez-bowi', tiempo: 4, linea: 'Bowí', tipo: 'linea' },
      { slug: 'division-norte-bowi', tiempo: 4, linea: 'Bowí', tipo: 'linea' }
    ]
  },
  'division-norte-bowi': {
    ciudad: 'chihuahua',
    nombre: 'División del Norte Bowí',
    lineas: ['Bowí'],
    adyacentes: [
      { slug: 'paseo-bolvar-bowi', tiempo: 4, linea: 'Bowí', tipo: 'linea' },
      { slug: 'av-simonovich-bowi', tiempo: 4, linea: 'Bowí', tipo: 'linea' }
    ]
  },
  'av-simonovich-bowi': {
    ciudad: 'chihuahua',
    nombre: 'Avenida Simonovich Bowí',
    lineas: ['Bowí'],
    adyacentes: [
      { slug: 'division-norte-bowi', tiempo: 4, linea: 'Bowí', tipo: 'linea' },
      { slug: 'av-tecnologico-bowi', tiempo: 4, linea: 'Bowí', tipo: 'linea' }
    ]
  },
  'av-tecnologico-bowi': {
    ciudad: 'chihuahua',
    nombre: 'Avenida Tecnológico Bowí',
    lineas: ['Bowí'],
    adyacentes: [
      { slug: 'av-simonovich-bowi', tiempo: 4, linea: 'Bowí', tipo: 'linea' },
      { slug: 'circunvalacion-bowi', tiempo: 4, linea: 'Bowí', tipo: 'linea' }
    ]
  },
  'circunvalacion-bowi': {
    ciudad: 'chihuahua',
    nombre: 'Circunvalación Bowí',
    lineas: ['Bowí'],
    adyacentes: [
      { slug: 'av-tecnologico-bowi', tiempo: 4, linea: 'Bowí', tipo: 'linea' },
      { slug: 'av-ninos-heroes-bowi', tiempo: 4, linea: 'Bowí', tipo: 'linea' }
    ]
  },
  'av-ninos-heroes-bowi': {
    ciudad: 'chihuahua',
    nombre: 'Avenida Niños Héroes Bowí',
    lineas: ['Bowí'],
    adyacentes: [
      { slug: 'circunvalacion-bowi', tiempo: 4, linea: 'Bowí', tipo: 'linea' },
      { slug: 'juarez-centro-bowi', tiempo: 4, linea: 'Bowí', tipo: 'linea' }
    ]
  },
  'juarez-centro-bowi': {
    ciudad: 'chihuahua',
    nombre: 'Juárez Centro Bowí',
    lineas: ['Bowí'],
    adyacentes: [
      { slug: 'av-ninos-heroes-bowi', tiempo: 4, linea: 'Bowí', tipo: 'linea' },
      { slug: 'avenida-juarez-bowi', tiempo: 4, linea: 'Bowí', tipo: 'linea' }
    ]
  },
  'avenida-juarez-bowi': {
    ciudad: 'chihuahua',
    nombre: 'Avenida Juárez Bowí',
    lineas: ['Bowí'],
    adyacentes: [
      { slug: 'juarez-centro-bowi', tiempo: 4, linea: 'Bowí', tipo: 'linea' },
      { slug: 'calle-4-bowi', tiempo: 4, linea: 'Bowí', tipo: 'linea' }
    ]
  },
  'calle-4-bowi': {
    ciudad: 'chihuahua',
    nombre: 'Calle 4 Bowí',
    lineas: ['Bowí'],
    adyacentes: [
      { slug: 'avenida-juarez-bowi', tiempo: 4, linea: 'Bowí', tipo: 'linea' },
      { slug: 'calle-2-bowi', tiempo: 3, linea: 'Bowí', tipo: 'linea' }
    ]
  },
  'calle-2-bowi': {
    ciudad: 'chihuahua',
    nombre: 'Calle 2 Bowí',
    lineas: ['Bowí'],
    adyacentes: [
      { slug: 'calle-4-bowi', tiempo: 3, linea: 'Bowí', tipo: 'linea' },
      { slug: 'terminal-sur-bowi', tiempo: 5, linea: 'Bowí', tipo: 'linea' }
    ]
  },
  'terminal-sur-bowi': {
    ciudad: 'chihuahua',
    nombre: 'Terminal Sur Bowí',
    lineas: ['Bowí'],
    adyacentes: [
      { slug: 'calle-2-bowi', tiempo: 5, linea: 'Bowí', tipo: 'linea' }
    ]
  },

  // ============================================
  // TIJUANA SITT BRT — 12 estaciones + CBX Frontera
  // ============================================
  'playas-tijuana-sitt': {
    ciudad: 'tijuana',
    nombre: 'Playas Tijuana SITT',
    lineas: ['SITT'],
    adyacentes: [
      { slug: 'imperial-beach-sitt', tiempo: 4, linea: 'SITT', tipo: 'linea' },
      { slug: 'nido-aguila-sitt', tiempo: 5, linea: 'SITT', tipo: 'linea' }
    ]
  },
  'imperial-beach-sitt': {
    ciudad: 'tijuana',
    nombre: 'Imperial Beach SITT',
    lineas: ['SITT'],
    adyacentes: [
      { slug: 'playas-tijuana-sitt', tiempo: 4, linea: 'SITT', tipo: 'linea' },
      { slug: 'nido-aguila-sitt', tiempo: 4, linea: 'SITT', tipo: 'linea' }
    ]
  },
  'nido-aguila-sitt': {
    ciudad: 'tijuana',
    nombre: 'Nido del Águila SITT',
    lineas: ['SITT'],
    adyacentes: [
      { slug: 'imperial-beach-sitt', tiempo: 4, linea: 'SITT', tipo: 'linea' },
      { slug: 'zona-rio-sitt', tiempo: 5, linea: 'SITT', tipo: 'linea' }
    ]
  },
  'zona-rio-sitt': {
    ciudad: 'tijuana',
    nombre: 'Zona Río SITT',
    lineas: ['SITT'],
    adyacentes: [
      { slug: 'nido-aguila-sitt', tiempo: 5, linea: 'SITT', tipo: 'linea' },
      { slug: 'aviacion-sitt', tiempo: 4, linea: 'SITT', tipo: 'linea' }
    ]
  },
  'aviacion-sitt': {
    ciudad: 'tijuana',
    nombre: 'Aviación SITT',
    lineas: ['SITT'],
    adyacentes: [
      { slug: 'zona-rio-sitt', tiempo: 4, linea: 'SITT', tipo: 'linea' },
      { slug: 'benito-juarez-sitt', tiempo: 4, linea: 'SITT', tipo: 'linea' }
    ]
  },
  'benito-juarez-sitt': {
    ciudad: 'tijuana',
    nombre: 'Benito Juárez SITT',
    lineas: ['SITT'],
    adyacentes: [
      { slug: 'aviacion-sitt', tiempo: 4, linea: 'SITT', tipo: 'linea' },
      { slug: 'revolucion-sitt', tiempo: 4, linea: 'SITT', tipo: 'linea' }
    ]
  },
  'revolucion-sitt': {
    ciudad: 'tijuana',
    nombre: 'Revolución SITT',
    lineas: ['SITT'],
    adyacentes: [
      { slug: 'benito-juarez-sitt', tiempo: 4, linea: 'SITT', tipo: 'linea' },
      { slug: 'centro-civico-sitt', tiempo: 4, linea: 'SITT', tipo: 'linea' }
    ]
  },
  'centro-civico-sitt': {
    ciudad: 'tijuana',
    nombre: 'Centro Cívico SITT',
    lineas: ['SITT'],
    adyacentes: [
      { slug: 'revolucion-sitt', tiempo: 4, linea: 'SITT', tipo: 'linea' },
      { slug: 'otay-mesa-sitt', tiempo: 5, linea: 'SITT', tipo: 'linea' }
    ]
  },
  'otay-mesa-sitt': {
    ciudad: 'tijuana',
    nombre: 'Otay Mesa SITT',
    lineas: ['SITT'],
    adyacentes: [
      { slug: 'centro-civico-sitt', tiempo: 5, linea: 'SITT', tipo: 'linea' },
      { slug: 'san-ysidro-sitt', tiempo: 8, linea: 'SITT', tipo: 'linea' }
    ]
  },
  'san-ysidro-sitt': {
    ciudad: 'tijuana',
    nombre: 'San Ysidro SITT',
    lineas: ['SITT'],
    adyacentes: [
      { slug: 'otay-mesa-sitt', tiempo: 8, linea: 'SITT', tipo: 'linea' },
      { slug: 'san-ysidro-frontera', tiempo: 3, linea: 'SITT', tipo: 'transbordo' },
      { slug: 'cbx-tijuana', tiempo: 5, linea: 'SITT', tipo: 'transbordo' }
    ]
  },
  'pedregral-hills-sitt': {
    ciudad: 'tijuana',
    nombre: 'Pedregal Hills SITT',
    lineas: ['SITT'],
    adyacentes: [
      { slug: 'otay-mesa-sitt', tiempo: 5, linea: 'SITT', tipo: 'linea' }
    ]
  },
  'rancho-grande-sitt': {
    ciudad: 'tijuana',
    nombre: 'Rancho Grande SITT',
    lineas: ['SITT'],
    adyacentes: [
      { slug: 'otay-mesa-sitt', tiempo: 6, linea: 'SITT', tipo: 'linea' }
    ]
  },
  'cbx-tijuana': {
    ciudad: 'tijuana',
    nombre: 'Cross Border Xpress (CBX)',
    lineas: ['frontera'],
    adyacentes: [
      { slug: 'san-ysidro-sitt', tiempo: 5, linea: 'SITT', tipo: 'transbordo' },
      { slug: 'san-ysidro-frontera', tiempo: 8, linea: 'frontera', tipo: 'transbordo' }
    ]
  },

  // ============================================
  // CAMPECHE TREN LIGERO — 14 estaciones + 1 intermodal
  // ============================================
  'terminal-autobuses-camp': {
    ciudad: 'campeche',
    nombre: 'Terminal de Autobuses Campeche',
    lineas: ['1'],
    adyacentes: [
      { slug: 'av-ruiz-cortines-camp', tiempo: 5, linea: '1', tipo: 'linea' }
    ]
  },
  'av-ruiz-cortines-camp': {
    ciudad: 'campeche',
    nombre: 'Avenida Ruiz Cortines',
    lineas: ['1'],
    adyacentes: [
      { slug: 'terminal-autobuses-camp', tiempo: 5, linea: '1', tipo: 'linea' },
      { slug: 'calle-63-camp', tiempo: 4, linea: '1', tipo: 'linea' }
    ]
  },
  'calle-63-camp': {
    ciudad: 'campeche',
    nombre: 'Calle 63 Campeche',
    lineas: ['1'],
    adyacentes: [
      { slug: 'av-ruiz-cortines-camp', tiempo: 4, linea: '1', tipo: 'linea' },
      { slug: 'calle-59-camp', tiempo: 4, linea: '1', tipo: 'linea' }
    ]
  },
  'calle-59-camp': {
    ciudad: 'campeche',
    nombre: 'Calle 59 Campeche',
    lineas: ['1'],
    adyacentes: [
      { slug: 'calle-63-camp', tiempo: 4, linea: '1', tipo: 'linea' },
      { slug: 'centro-historico-camp', tiempo: 4, linea: '1', tipo: 'linea' }
    ]
  },
  'centro-historico-camp': {
    ciudad: 'campeche',
    nombre: 'Centro Histórico Campeche',
    lineas: ['1'],
    adyacentes: [
      { slug: 'calle-59-camp', tiempo: 4, linea: '1', tipo: 'linea' },
      { slug: 'fuerte-san-miguel-camp', tiempo: 5, linea: '1', tipo: 'linea' }
    ]
  },
  'fuerte-san-miguel-camp': {
    ciudad: 'campeche',
    nombre: 'Fuerte San Miguel Campeche',
    lineas: ['1'],
    adyacentes: [
      { slug: 'centro-historico-camp', tiempo: 5, linea: '1', tipo: 'linea' },
      { slug: 'calle-22-camp', tiempo: 5, linea: '1', tipo: 'linea' }
    ]
  },
  'calle-22-camp': {
    ciudad: 'campeche',
    nombre: 'Calle 22 Campeche',
    lineas: ['1'],
    adyacentes: [
      { slug: 'fuerte-san-miguel-camp', tiempo: 5, linea: '1', tipo: 'linea' },
      { slug: 'merida-camp', tiempo: 4, linea: '1', tipo: 'linea' }
    ]
  },
  'merida-camp': {
    ciudad: 'campeche',
    nombre: 'Mérida Campeche',
    lineas: ['1'],
    adyacentes: [
      { slug: 'calle-22-camp', tiempo: 4, linea: '1', tipo: 'linea' },
      { slug: 'progreso-camp', tiempo: 4, linea: '1', tipo: 'linea' }
    ]
  },
  'progreso-camp': {
    ciudad: 'campeche',
    nombre: 'Progreso Campeche',
    lineas: ['1'],
    adyacentes: [
      { slug: 'merida-camp', tiempo: 4, linea: '1', tipo: 'linea' },
      { slug: 'escarcega-camp', tiempo: 5, linea: '1', tipo: 'linea' }
    ]
  },
  'escarcega-camp': {
    ciudad: 'campeche',
    nombre: 'Escárcega Campeche',
    lineas: ['1'],
    adyacentes: [
      { slug: 'progreso-camp', tiempo: 5, linea: '1', tipo: 'linea' },
      { slug: 'ciudad-del-carmen-camp', tiempo: 6, linea: '1', tipo: 'linea' }
    ]
  },
  'ciudad-del-carmen-camp': {
    ciudad: 'campeche',
    nombre: 'Ciudad del Carmen Campeche',
    lineas: ['1'],
    adyacentes: [
      { slug: 'escarcega-camp', tiempo: 6, linea: '1', tipo: 'linea' },
      { slug: 'isla-aguada-camp', tiempo: 5, linea: '1', tipo: 'linea' }
    ]
  },
  'isla-aguada-camp': {
    ciudad: 'campeche',
    nombre: 'Isla Aguada Campeche',
    lineas: ['1'],
    adyacentes: [
      { slug: 'ciudad-del-carmen-camp', tiempo: 5, linea: '1', tipo: 'linea' },
      { slug: 'sabancuy-camp', tiempo: 4, linea: '1', tipo: 'linea' }
    ]
  },
  'sabancuy-camp': {
    ciudad: 'campeche',
    nombre: 'Sabancuy Campeche',
    lineas: ['1'],
    adyacentes: [
      { slug: 'isla-aguada-camp', tiempo: 4, linea: '1', tipo: 'linea' },
      { slug: 'centro-historico-camp-hub', tiempo: 8, linea: '1', tipo: 'transbordo' }
    ]
  },
  'intermodal-tren-maya': {
    ciudad: 'campeche',
    nombre: 'Intermodal Tren Maya Campeche',
    lineas: ['1'],
    adyacentes: [
      { slug: 'centro-historico-camp', tiempo: 8, linea: '1', tipo: 'transbordo' },
      { slug: 'centro-historico-camp-hub', tiempo: 15, linea: 'T2', tipo: 'transbordo' }
    ]
  },
  'centro-historico-camp-hub': {
    ciudad: 'campeche',
    nombre: 'Centro Histórico Campeche (Hub Turístico)',
    lineas: ['1', 'T2'],
    adyacentes: [
      { slug: 'sabancuy-camp', tiempo: 8, linea: '1', tipo: 'transbordo' },
      { slug: 'intermodal-tren-maya', tiempo: 15, linea: 'T2', tipo: 'transbordo' }
    ]
  },

  // ============================================
  // PUEBLA LÍNEA 4 — estaciones
  // ============================================
  'atlixcayotl-pue': {
    ciudad: 'puebla',
    nombre: 'Atlixcayotl Puebla',
    lineas: ['4'],
    adyacentes: [
      { slug: 'cholula', tiempo: 3, linea: '4', tipo: 'transbordo' },
      { slug: 'huejotzacan-pue', tiempo: 3, linea: '4', tipo: 'linea' }
    ]
  },
  'huejotzacan-pue': {
    ciudad: 'puebla',
    nombre: 'Huejotzacán Puebla',
    lineas: ['4'],
    adyacentes: [
      { slug: 'atlixcayotl-pue', tiempo: 3, linea: '4', tipo: 'linea' },
      { slug: 'angelopolis', tiempo: 3, linea: '4', tipo: 'transbordo' },
      { slug: 'reserva-territorial-pue', tiempo: 3, linea: '4', tipo: 'linea' }
    ]
  },
  'reserva-territorial-pue': {
    ciudad: 'puebla',
    nombre: 'Reserva Territorial Puebla',
    lineas: ['4'],
    adyacentes: [
      { slug: 'huejotzacan-pue', tiempo: 3, linea: '4', tipo: 'linea' },
      { slug: 'loma-del-boni-pue', tiempo: 3, linea: '4', tipo: 'linea' }
    ]
  },
  'loma-del-boni-pue': {
    ciudad: 'puebla',
    nombre: 'Loma del Boni Puebla',
    lineas: ['4'],
    adyacentes: [
      { slug: 'reserva-territorial-pue', tiempo: 3, linea: '4', tipo: 'linea' },
      { slug: 'san-andres-cholula-pue', tiempo: 3, linea: '4', tipo: 'linea' }
    ]
  },
  'san-andres-cholula-pue': {
    ciudad: 'puebla',
    nombre: 'San Andrés Cholula Puebla',
    lineas: ['4'],
    adyacentes: [
      { slug: 'loma-del-boni-pue', tiempo: 3, linea: '4', tipo: 'linea' },
      { slug: 'valsequillo-pue', tiempo: 3, linea: '4', tipo: 'linea' }
    ]
  },
  'valsequillo-pue': {
    ciudad: 'puebla',
    nombre: 'Valsequillo Puebla',
    lineas: ['4'],
    adyacentes: [
      { slug: 'san-andres-cholula-pue', tiempo: 3, linea: '4', tipo: 'linea' },
      { slug: 'loreto', tiempo: 3, linea: '4', tipo: 'transbordo' },
      { slug: 'santa-clara-xitla-pue', tiempo: 3, linea: '4', tipo: 'linea' }
    ]
  },
  'santa-clara-xitla-pue': {
    ciudad: 'puebla',
    nombre: 'Santa Clara Xitla Puebla',
    lineas: ['4'],
    adyacentes: [
      { slug: 'valsequillo-pue', tiempo: 3, linea: '4', tipo: 'linea' }
    ]
  },

  // ============================================
  // TOURIST HUBS — Oaxaca, Morelia, Veracruz, Villahermosa
  // ============================================
  'centro-historico-oax': {
    ciudad: 'oaxaca',
    nombre: 'Centro Histórico Oaxaca',
    lineas: ['1'],
    adyacentes: [
      { slug: 'monte-alban-oax', tiempo: 30, linea: '1', tipo: 'linea' }
    ]
  },
  'monte-alban-oax': {
    ciudad: 'oaxaca',
    nombre: 'Monte Albán Oaxaca',
    lineas: ['1'],
    adyacentes: [
      { slug: 'centro-historico-oax', tiempo: 30, linea: '1', tipo: 'linea' }
    ]
  },

  'centro-historico-morelia': {
    ciudad: 'morelia',
    nombre: 'Centro Histórico Morelia',
    lineas: ['1'],
    adyacentes: [
      { slug: 'patzcuaro-morelia', tiempo: 30, linea: '1', tipo: 'linea' }
    ]
  },
  'patzcuaro-morelia': {
    ciudad: 'morelia',
    nombre: 'Pátzcuaro Morelia',
    lineas: ['1'],
    adyacentes: [
      { slug: 'centro-historico-morelia', tiempo: 30, linea: '1', tipo: 'linea' }
    ]
  },

  'puerto-veracruz': {
    ciudad: 'veracruz',
    nombre: 'Puerto de Veracruz',
    lineas: ['1'],
    adyacentes: [
      { slug: 'castillo-san-juan-veracruz', tiempo: 25, linea: '1', tipo: 'linea' }
    ]
  },
  'castillo-san-juan-veracruz': {
    ciudad: 'veracruz',
    nombre: 'Castillo de San Juan de Ulúa',
    lineas: ['1'],
    adyacentes: [
      { slug: 'puerto-veracruz', tiempo: 25, linea: '1', tipo: 'linea' }
    ]
  },

  'centro-historico-villa': {
    ciudad: 'villahermosa',
    nombre: 'Centro Histórico Villahermosa',
    lineas: ['1'],
    adyacentes: [
      { slug: 'cimadevilla', tiempo: 20, linea: '1', tipo: 'linea' }
    ]
  },
  'cimadevilla': {
    ciudad: 'villahermosa',
    nombre: 'Cima de Villahermosa',
    lineas: ['1'],
    adyacentes: [
      { slug: 'centro-historico-villa', tiempo: 20, linea: '1', tipo: 'linea' }
    ]
  }
};
