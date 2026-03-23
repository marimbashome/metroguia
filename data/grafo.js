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
      { slug: 'tacubaya', tiempo: 2, linea: '1', tipo: 'linea' }
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
      { slug: 'san-juan-de-letran', tiempo: 5, linea: '8', tipo: 'transbordo' }
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
      { slug: 'ricardo-flores-magon', tiempo: 5, linea: 'B', tipo: 'transbordo' }
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
      { slug: 'lazaro-cardenas', tiempo: 5, linea: '9', tipo: 'transbordo' }
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
      { slug: 'tasquena', tiempo: 0, linea: '2', tipo: 'transbordo' }
    ]
  },

  // ============================================
  // LÍNEA 3 (Verde #6B7A2A) - 21 estaciones
  // ============================================
  'indios-verdes': {
    ciudad: 'cdmx',
    nombre: 'Indios Verdes',
    lineas: ['3'],
    adyacentes: [
      { slug: 'deportivo-18-de-marzo', tiempo: 2, linea: '3', tipo: 'linea' }
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
      { slug: 'garibaldi-lagunilla', tiempo: 5, linea: 'B', tipo: 'transbordo' }
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
      { slug: 'misterios', tiempo: 5, linea: '5', tipo: 'transbordo' }
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
      { slug: 'aeropuerto', tiempo: 2, linea: '5', tipo: 'linea' }
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
      { slug: 'tacubaya', tiempo: 2, linea: '7', tipo: 'linea' }
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
      { slug: 'u-a-m-i', tiempo: 2, linea: '8', tipo: 'linea' }
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
      { slug: 'los-reyes', tiempo: 2, linea: 'A', tipo: 'linea' }
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
      { slug: 'guerrero', tiempo: 2, linea: 'B', tipo: 'linea' }
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
  // GDL SITEUR - LÍNEA 1 (Roja) - 20 estaciones
  // ============================================
  'auditorio': {
    ciudad: 'gdl',
    nombre: 'Auditorio',
    lineas: ['1', '3'],
    adyacentes: [
      { slug: 'periferico-norte', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'arcos-de-zapopan', tiempo: 5, linea: '3', tipo: 'transbordo' }
    ]
  },
  'periferico-norte': {
    ciudad: 'gdl',
    nombre: 'Periférico Norte',
    lineas: ['1'],
    adyacentes: [
      { slug: 'auditorio', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'mexicaltzingo', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'mexicaltzingo': {
    ciudad: 'gdl',
    nombre: 'Mexicaltzingo',
    lineas: ['1'],
    adyacentes: [
      { slug: 'periferico-norte', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'avila-camacho', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'avila-camacho': {
    ciudad: 'gdl',
    nombre: 'Ávila Camacho',
    lineas: ['1', '2', '3'],
    adyacentes: [
      { slug: 'mexicaltzingo', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'juarez', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'san-jacinto-l2', tiempo: 5, linea: '2', tipo: 'transbordo' },
      { slug: 'avila-camacho-l3', tiempo: 5, linea: '3', tipo: 'transbordo' }
    ]
  },
  'juarez': {
    ciudad: 'gdl',
    nombre: 'Juárez',
    lineas: ['1', '2'],
    adyacentes: [
      { slug: 'avila-camacho', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'washington', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'juarez-l2', tiempo: 5, linea: '2', tipo: 'transbordo' }
    ]
  },
  'washington': {
    ciudad: 'gdl',
    nombre: 'Washington',
    lineas: ['1'],
    adyacentes: [
      { slug: 'juarez', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'mezquitan', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'mezquitan': {
    ciudad: 'gdl',
    nombre: 'Mezquitán',
    lineas: ['1'],
    adyacentes: [
      { slug: 'washington', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'san-juan-de-dios', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'san-juan-de-dios': {
    ciudad: 'gdl',
    nombre: 'San Juan de Dios',
    lineas: ['1', '2'],
    adyacentes: [
      { slug: 'mezquitan', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'belisario-dominguez', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'san-juan-de-dios-l2', tiempo: 5, linea: '2', tipo: 'transbordo' }
    ]
  },
  'belisario-dominguez': {
    ciudad: 'gdl',
    nombre: 'Belisario Domínguez',
    lineas: ['1', '2'],
    adyacentes: [
      { slug: 'san-juan-de-dios', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'cristobal-de-onate', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'belisario-dominguez-l2', tiempo: 5, linea: '2', tipo: 'transbordo' }
    ]
  },
  'cristobal-de-onate': {
    ciudad: 'gdl',
    nombre: 'Cristóbal de Oñate',
    lineas: ['1', '2'],
    adyacentes: [
      { slug: 'belisario-dominguez', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'la-aurora', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'cristobal-de-onate-l2', tiempo: 5, linea: '2', tipo: 'transbordo' }
    ]
  },
  'la-aurora': {
    ciudad: 'gdl',
    nombre: 'La Aurora',
    lineas: ['1', '2'],
    adyacentes: [
      { slug: 'cristobal-de-onate', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'plaza-universidad', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'la-aurora-l2', tiempo: 5, linea: '2', tipo: 'transbordo' }
    ]
  },
  'plaza-universidad': {
    ciudad: 'gdl',
    nombre: 'Plaza Universidad',
    lineas: ['1', '2', '3'],
    adyacentes: [
      { slug: 'la-aurora', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'san-andres', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'plaza-universidad-l2', tiempo: 5, linea: '2', tipo: 'transbordo' },
      { slug: 'plaza-universidad-l3', tiempo: 5, linea: '3', tipo: 'transbordo' }
    ]
  },
  'san-andres': {
    ciudad: 'gdl',
    nombre: 'San Andrés',
    lineas: ['1', '2'],
    adyacentes: [
      { slug: 'plaza-universidad', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'san-jacinto', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'san-andres-l2', tiempo: 5, linea: '2', tipo: 'transbordo' }
    ]
  },
  'san-jacinto': {
    ciudad: 'gdl',
    nombre: 'San Jacinto',
    lineas: ['1', '2'],
    adyacentes: [
      { slug: 'san-andres', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'transferencia', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'san-jacinto-l2', tiempo: 5, linea: '2', tipo: 'transbordo' }
    ]
  },
  'transferencia': {
    ciudad: 'gdl',
    nombre: 'Transferencia',
    lineas: ['1'],
    adyacentes: [
      { slug: 'san-jacinto', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'lino-portes-gil', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'lino-portes-gil': {
    ciudad: 'gdl',
    nombre: 'Lino Portes Gil',
    lineas: ['1'],
    adyacentes: [
      { slug: 'transferencia', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'santa-isabel', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'santa-isabel': {
    ciudad: 'gdl',
    nombre: 'Santa Isabel',
    lineas: ['1'],
    adyacentes: [
      { slug: 'lino-portes-gil', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'rio-nilo', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'rio-nilo': {
    ciudad: 'gdl',
    nombre: 'Río Nilo',
    lineas: ['1', '3'],
    adyacentes: [
      { slug: 'santa-isabel', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'periferico-sur', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'rio-nilo-l3', tiempo: 5, linea: '3', tipo: 'transbordo' }
    ]
  },
  'periferico-sur': {
    ciudad: 'gdl',
    nombre: 'Periférico Sur',
    lineas: ['1'],
    adyacentes: [
      { slug: 'rio-nilo', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },

  // ============================================
  // GDL SITEUR - LÍNEA 2 (Verde) - 10 estaciones
  // ============================================
  'tetlan': {
    ciudad: 'gdl',
    nombre: 'Tetlán',
    lineas: ['2'],
    adyacentes: [
      { slug: 'la-aurora-l2', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'la-aurora-l2': {
    ciudad: 'gdl',
    nombre: 'La Aurora',
    lineas: ['1', '2'],
    adyacentes: [
      { slug: 'tetlan', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'san-jacinto-l2', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'la-aurora', tiempo: 5, linea: '1', tipo: 'transbordo' }
    ]
  },
  'san-jacinto-l2': {
    ciudad: 'gdl',
    nombre: 'San Jacinto',
    lineas: ['1', '2'],
    adyacentes: [
      { slug: 'la-aurora-l2', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'san-andres-l2', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'san-jacinto', tiempo: 5, linea: '1', tipo: 'transbordo' },
      { slug: 'avila-camacho', tiempo: 5, linea: '1', tipo: 'transbordo' }
    ]
  },
  'san-andres-l2': {
    ciudad: 'gdl',
    nombre: 'San Andrés',
    lineas: ['1', '2'],
    adyacentes: [
      { slug: 'san-jacinto-l2', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'cristobal-de-onate-l2', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'san-andres', tiempo: 5, linea: '1', tipo: 'transbordo' }
    ]
  },
  'cristobal-de-onate-l2': {
    ciudad: 'gdl',
    nombre: 'Cristóbal de Oñate',
    lineas: ['1', '2'],
    adyacentes: [
      { slug: 'san-andres-l2', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'belisario-dominguez-l2', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'cristobal-de-onate', tiempo: 5, linea: '1', tipo: 'transbordo' }
    ]
  },
  'belisario-dominguez-l2': {
    ciudad: 'gdl',
    nombre: 'Belisario Domínguez',
    lineas: ['1', '2'],
    adyacentes: [
      { slug: 'cristobal-de-onate-l2', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'san-juan-de-dios-l2', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'belisario-dominguez', tiempo: 5, linea: '1', tipo: 'transbordo' }
    ]
  },
  'san-juan-de-dios-l2': {
    ciudad: 'gdl',
    nombre: 'San Juan de Dios',
    lineas: ['1', '2'],
    adyacentes: [
      { slug: 'belisario-dominguez-l2', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'plaza-universidad-l2', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'san-juan-de-dios', tiempo: 5, linea: '1', tipo: 'transbordo' }
    ]
  },
  'plaza-universidad-l2': {
    ciudad: 'gdl',
    nombre: 'Plaza Universidad',
    lineas: ['1', '2', '3'],
    adyacentes: [
      { slug: 'san-juan-de-dios-l2', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'juarez-l2', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'plaza-universidad', tiempo: 5, linea: '1', tipo: 'transbordo' },
      { slug: 'plaza-universidad-l3', tiempo: 5, linea: '3', tipo: 'transbordo' }
    ]
  },
  'juarez-l2': {
    ciudad: 'gdl',
    nombre: 'Juárez',
    lineas: ['1', '2'],
    adyacentes: [
      { slug: 'plaza-universidad-l2', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'juarez', tiempo: 5, linea: '1', tipo: 'transbordo' }
    ]
  },

  // ============================================
  // GDL SITEUR - LÍNEA 3 (Verde Claro) - 18 estaciones
  // ============================================
  'arcos-de-zapopan': {
    ciudad: 'gdl',
    nombre: 'Arcos de Zapopan',
    lineas: ['3'],
    adyacentes: [
      { slug: 'zapopan-centro', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'auditorio', tiempo: 5, linea: '1', tipo: 'transbordo' }
    ]
  },
  'zapopan-centro': {
    ciudad: 'gdl',
    nombre: 'Zapopan Centro',
    lineas: ['3'],
    adyacentes: [
      { slug: 'arcos-de-zapopan', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'plaza-patria', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'plaza-patria': {
    ciudad: 'gdl',
    nombre: 'Plaza Patria',
    lineas: ['3'],
    adyacentes: [
      { slug: 'zapopan-centro', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'santuario', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'santuario': {
    ciudad: 'gdl',
    nombre: 'Santuario',
    lineas: ['3'],
    adyacentes: [
      { slug: 'plaza-patria', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'independencia', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'independencia': {
    ciudad: 'gdl',
    nombre: 'Independencia',
    lineas: ['3'],
    adyacentes: [
      { slug: 'santuario', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'guadalajara-centro', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'guadalajara-centro': {
    ciudad: 'gdl',
    nombre: 'Guadalajara Centro',
    lineas: ['3'],
    adyacentes: [
      { slug: 'independencia', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'la-normal', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'la-normal': {
    ciudad: 'gdl',
    nombre: 'La Normal',
    lineas: ['3'],
    adyacentes: [
      { slug: 'guadalajara-centro', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'avila-camacho-l3', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'avila-camacho-l3': {
    ciudad: 'gdl',
    nombre: 'Ávila Camacho',
    lineas: ['1', '2', '3'],
    adyacentes: [
      { slug: 'la-normal', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'plaza-universidad-l3', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'avila-camacho', tiempo: 5, linea: '1', tipo: 'transbordo' }
    ]
  },
  'plaza-universidad-l3': {
    ciudad: 'gdl',
    nombre: 'Plaza Universidad',
    lineas: ['1', '2', '3'],
    adyacentes: [
      { slug: 'avila-camacho-l3', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'cucei', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'plaza-universidad', tiempo: 5, linea: '1', tipo: 'transbordo' },
      { slug: 'plaza-universidad-l2', tiempo: 5, linea: '2', tipo: 'transbordo' }
    ]
  },
  'cucei': {
    ciudad: 'gdl',
    nombre: 'CUCEI',
    lineas: ['3'],
    adyacentes: [
      { slug: 'plaza-universidad-l3', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'rio-nilo-l3', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'rio-nilo-l3': {
    ciudad: 'gdl',
    nombre: 'Río Nilo',
    lineas: ['1', '3'],
    adyacentes: [
      { slug: 'cucei', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'estadio-chivas', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'rio-nilo', tiempo: 5, linea: '1', tipo: 'transbordo' }
    ]
  },
  'estadio-chivas': {
    ciudad: 'gdl',
    nombre: 'Estadio Chivas (Estadio Akron)',
    lineas: ['3'],
    adyacentes: [
      { slug: 'rio-nilo-l3', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'mariano-otero', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'mariano-otero': {
    ciudad: 'gdl',
    nombre: 'Mariano Otero',
    lineas: ['3'],
    adyacentes: [
      { slug: 'estadio-chivas', tiempo: 2, linea: '3', tipo: 'linea' },
      { slug: 'central-de-autobuses', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },
  'central-de-autobuses': {
    ciudad: 'gdl',
    nombre: 'Central de Autobuses',
    lineas: ['3'],
    adyacentes: [
      { slug: 'mariano-otero', tiempo: 2, linea: '3', tipo: 'linea' }
    ]
  },

  // ============================================
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
      { slug: 'simon-bolivar', tiempo: 2, linea: '1', tipo: 'linea' }
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
      { slug: 'cuauhtemoc', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'cuauhtemoc': {
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
      { slug: 'cuauhtemoc', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'felix-u-gomez', tiempo: 2, linea: '1', tipo: 'linea' }
    ]
  },
  'felix-u-gomez': {
    ciudad: 'mty',
    nombre: 'Félix U. Gómez',
    lineas: ['1'],
    adyacentes: [
      { slug: 'del-golfo', tiempo: 2, linea: '1', tipo: 'linea' },
      { slug: 'parque-fundidora', tiempo: 2, linea: '1', tipo: 'linea' }
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
      { slug: 'universidad', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'universidad': {
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
      { slug: 'universidad', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'regina', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  },
  'regina': {
    ciudad: 'mty',
    nombre: 'Regina',
    lineas: ['2'],
    adyacentes: [
      { slug: 'ninos-heroes', tiempo: 2, linea: '2', tipo: 'linea' },
      { slug: 'general-anaya', tiempo: 2, linea: '2', tipo: 'linea' }
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
      { slug: 'cuauhtemoc', tiempo: 5, linea: '1', tipo: 'transbordo' }
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
      { slug: 'padre-mier', tiempo: 2, linea: '2', tipo: 'linea' }
    ]
  }
};