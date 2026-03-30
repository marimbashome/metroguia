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
  'cuauhtemoc': {
    ciudad: 'cdmx',
    nombre: 'Cuauhtémoc',
    lineas: ['1'],
    adyacentes: [
      { slug: 'insurgentes', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'balderas', tiempo: 2, linea: '1', tipo: 'linea' }
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
  'hospital-general': {
    ciudad: 'cdmx',
    nombre: 'Hospital General',
    lineas: ['3'],
    adyacentes: [
      { slug: 'niños-heroes', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'centro-medico', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'roma', tiempo: 3, linea: '3', tipo: 'linea' }
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
  'constituyentes': {
    ciudad: 'cdmx',
    nombre: 'Constituyentes',
    lineas: ['7'],
    adyacentes: [
      { slug: 'auditorio', tiempo: 2, linea: '7', tipo: 'linea' },
      { slug: 'tacubaya', tiempo: 2, linea: '7', tipo: 'linea' },
      { slug: 'cb-los-pinos', tiempo: 5, linea: 'CB-3', tipo: 'transbordo' }
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
  'la-paz': {
    ciudad: 'cdmx',
    nombre: 'La Paz',
    lineas: ['A'],
    adyacentes: [
      { slug: 'los-reyes', tiempo: 2, linea: 'A', tipo: 'linea' }
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
      { slug: 'jalisco-200', tiempo: 5, linea: '4', tipo: 'linea' }
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
      { slug: 'san-sebastianito-mp', tiempo: 2, linea: 'MP', tipo: 'linea' }
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
    lineas: ['ecovia'],
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

    // ============================================
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
  'constitucion-1917-tb11': {
    ciudad: 'cdmx',
    nombre: 'Constitución de 1917',
    lineas: ['TB-11'],
    adyacentes: [
      { slug: 'santa-maria-aztahuacan-tb', tiempo: 3, linea: 'TB-11', tipo: 'linea' },
      { slug: 'constitucion-de-1917', tiempo: 5, linea: '8', tipo: 'transbordo' }
    ]
  },
  'santa-maria-aztahuacan-tb': {
    ciudad: 'cdmx',
    nombre: 'Santa María Aztahuacán',
    lineas: ['TB-11'],
    adyacentes: [
      { slug: 'constitucion-1917-tb11', tiempo: 3, linea: 'TB-11', tipo: 'linea' },
      { slug: 'santa-cruz-meyehualco-tb11', tiempo: 3, linea: 'TB-11', tipo: 'linea' }
    ]
  },
  'santa-cruz-meyehualco-tb11': {
    ciudad: 'cdmx',
    nombre: 'Santa Cruz Meyehualco',
    lineas: ['TB-11'],
    adyacentes: [
      { slug: 'santa-maria-aztahuacan-tb', tiempo: 3, linea: 'TB-11', tipo: 'linea' },
      { slug: 'penon-viejo-tb', tiempo: 3, linea: 'TB-11', tipo: 'linea' }
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
  'mb-indios-verdes': {
    ciudad: 'cdmx',
    nombre: 'Indios Verdes',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-morelos', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'indios-verdes', tiempo: 5, linea: 'metro-1', tipo: 'transbordo' },
      { slug: 'cb-indios-verdes', tiempo: 5, linea: 'CB-1', tipo: 'transbordo' }
    ]
  },
  'mb-morelos': {
    ciudad: 'cdmx',
    nombre: 'Morelos',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-indios-verdes', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-vallejo', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-vallejo': {
    ciudad: 'cdmx',
    nombre: 'Vallejo',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-morelos', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-avenida-san-juan-de-dios', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-avenida-san-juan-de-dios': {
    ciudad: 'cdmx',
    nombre: 'Avenida San Juan de Dios',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-vallejo', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-avenida-5-de-mayo', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-avenida-5-de-mayo': {
    ciudad: 'cdmx',
    nombre: 'Avenida 5 de Mayo',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-avenida-san-juan-de-dios', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-la-raza', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-la-raza': {
    ciudad: 'cdmx',
    nombre: 'La Raza',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-avenida-5-de-mayo', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-misterios', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-misterios': {
    ciudad: 'cdmx',
    nombre: 'Misterios',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-la-raza', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-revolucion', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-revolucion': {
    ciudad: 'cdmx',
    nombre: 'Revolución',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-misterios', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-5-de-febrero', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-5-de-febrero': {
    ciudad: 'cdmx',
    nombre: '5 de Febrero',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-revolucion', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-tepito', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-tepito': {
    ciudad: 'cdmx',
    nombre: 'Tepito',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-5-de-febrero', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-santa-anita', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-santa-anita': {
    ciudad: 'cdmx',
    nombre: 'Santa Anita',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-tepito', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-merced', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-merced': {
    ciudad: 'cdmx',
    nombre: 'Merced',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-santa-anita', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-mixcalco', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-mixcalco': {
    ciudad: 'cdmx',
    nombre: 'Mixcalco',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-merced', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-jesus-maria', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-jesus-maria': {
    ciudad: 'cdmx',
    nombre: 'Jesús María',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-mixcalco', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-isabel-la-catolica', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-isabel-la-catolica': {
    ciudad: 'cdmx',
    nombre: 'Isabel la Católica',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-jesus-maria', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-zocalo', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-zocalo': {
    ciudad: 'cdmx',
    nombre: 'Zócalo',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-isabel-la-catolica', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-corregidora', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-corregidora': {
    ciudad: 'cdmx',
    nombre: 'Corregidora',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-zocalo', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-san-antonio-abad', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-san-antonio-abad': {
    ciudad: 'cdmx',
    nombre: 'San Antonio Abad',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-corregidora', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-niño-artillero', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-niño-artillero': {
    ciudad: 'cdmx',
    nombre: 'Niño Artillero',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-san-antonio-abad', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-doctores', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-doctores': {
    ciudad: 'cdmx',
    nombre: 'Doctores',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-niño-artillero', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-roma-sur', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-roma-sur': {
    ciudad: 'cdmx',
    nombre: 'Roma Sur',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-doctores', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-insurgentes-sur', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-insurgentes-sur': {
    ciudad: 'cdmx',
    nombre: 'Insurgentes Sur',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-roma-sur', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-xoco', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-xoco': {
    ciudad: 'cdmx',
    nombre: 'Xoco',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-insurgentes-sur', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-nino-perdido', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-nino-perdido': {
    ciudad: 'cdmx',
    nombre: 'Niño Perdido',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-xoco', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-leyes-de-reforma', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-leyes-de-reforma': {
    ciudad: 'cdmx',
    nombre: 'Leyes de Reforma',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-nino-perdido', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-mixcoac', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-mixcoac': {
    ciudad: 'cdmx',
    nombre: 'Mixcoac',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-leyes-de-reforma', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-jardin-balbuena', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-jardin-balbuena': {
    ciudad: 'cdmx',
    nombre: 'Jardín Balbuena',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-mixcoac', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-copilco', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-copilco': {
    ciudad: 'cdmx',
    nombre: 'Copilco',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-jardin-balbuena', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-pedregal', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-pedregal': {
    ciudad: 'cdmx',
    nombre: 'Pedregal',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-copilco', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-villa-olimpica', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-villa-olimpica': {
    ciudad: 'cdmx',
    nombre: 'Villa Olímpica',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-pedregal', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-la-noria', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-la-noria': {
    ciudad: 'cdmx',
    nombre: 'La Noria',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-villa-olimpica', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-canela', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-canela': {
    ciudad: 'cdmx',
    nombre: 'Canela',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-la-noria', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-san-francisco', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-san-francisco': {
    ciudad: 'cdmx',
    nombre: 'San Francisco',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-canela', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-buenavista', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-buenavista': {
    ciudad: 'cdmx',
    nombre: 'Buenavista',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-san-francisco', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-azcapotzalco', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-azcapotzalco': {
    ciudad: 'cdmx',
    nombre: 'Azcapotzalco',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-buenavista', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-refineria', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-refineria': {
    ciudad: 'cdmx',
    nombre: 'Refinería',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-azcapotzalco', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-escritores', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-escritores': {
    ciudad: 'cdmx',
    nombre: 'Escritores',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-refineria', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-san-rafael', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-san-rafael': {
    ciudad: 'cdmx',
    nombre: 'San Rafael',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-escritores', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-santa-maria-la-redonda', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-santa-maria-la-redonda': {
    ciudad: 'cdmx',
    nombre: 'Santa María la Redonda',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-san-rafael', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-guerrero', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-guerrero': {
    ciudad: 'cdmx',
    nombre: 'Guerrero',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-santa-maria-la-redonda', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-beltran', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-beltran': {
    ciudad: 'cdmx',
    nombre: 'Beltrán',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-guerrero', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-algarin', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-algarin': {
    ciudad: 'cdmx',
    nombre: 'Algarín',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-beltran', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-penitenciaria', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-penitenciaria': {
    ciudad: 'cdmx',
    nombre: 'Penitenciaria',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-algarin', tiempo: 2, linea: 'MB-1', tipo: 'linea' },
      { slug: 'mb-el-caminero', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
    ]
  },
  'mb-el-caminero': {
    ciudad: 'cdmx',
    nombre: 'El Caminero',
    lineas: ['MB-1'],
    adyacentes: [
      { slug: 'mb-penitenciaria', tiempo: 2, linea: 'MB-1', tipo: 'linea' }
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
  }
};