// =============================================================
// MetroGuia.mx — data/rutas-engine.js
// Station data + route generation engine for ISR (24,180 routes)
// The curated 4,742 routes live in rutas-populares.js
// =============================================================

// Complete list of 156 CDMX metro stations in the grafo
export const cdmxStations = [
  'observatorio', 'tacubaya', 'juanacatlan', 'chapultepec', 'sevilla',
  'insurgentes', 'balderas', 'salto-del-agua', 'pino-suarez', 'merced',
  'candelaria', 'san-lazaro', 'morelos', 'santa-anita', 'peñon-viejo',
  'zaragoza', 'pantitlan', 'cuatro-caminos', 'camarones', 'refineria',
  'tacuba', 'panteones', 'cuitlahuac', 'popotla', 'colegio-militar',
  'normal', 'san-cosme', 'revolucion', 'hidalgo', 'bellas-artes',
  'allende', 'zocalo', 'san-antonio-abad', 'chabacano', 'viga',
  'xola', 'villa-de-cortes', 'nativitas', 'portales', 'taxquena',
  'indios-verdes', 'deportivo-18-de-marzo', 'potrero', 'la-raza',
  'tlatelolco', 'guerrero', 'niños-heroes', 'hospital-general',
  'centro-medico', 'etiopia-plaza-de-la-transparencia', 'eugenia',
  'division-del-norte', 'zapata', 'coyoacan', 'viveros-derechos-humanos',
  'miguel-angel-de-quevedo', 'copilco', 'martin-carrera', 'talisman',
  'bondojito', 'consulado', 'canal-del-norte', 'fray-servando',
  'jamaica', 'hangares', 'terminal-aerea', 'oceania', 'aragon',
  'eduardo-molina', 'misterios', 'valle-gómez', 'el-rosario',
  'tezozomoc', 'azcapotzalco', 'ferreria', 'norte-45', 'vallejo',
  'instituto-del-petroleo', 'lindavista', 'la-villa-basilica',
  'aquiles-serdan', 'san-joaquin', 'polanco', 'constituyentes',
  'san-pedro-de-los-pinos', 'san-antonio', 'mixcoac', 'barranca-del-muerto',
  'garibaldi', 'san-juan-de-letran', 'doctores', 'obrera', 'la-viga',
  'coyuya', 'iztacalco', 'apatlaco', 'aculco', 'escuadron-201',
  'atlalilco', 'iztapalapa', 'cerro-de-la-estrella', 'u-a-m-i',
  'constitucion-de-1917', 'puebla', 'ciudad-deportiva', 'velodromo',
  'mixiuhca', 'lazaro-cardenas', 'chilpancingo', 'patriotismo',
  'agricola-oriental', 'canal-de-san-juan', 'tepalcates', 'guelatao',
  'acatitla', 'santa-marta', 'los-reyes', 'la-paz', 'buenavista',
  'garibaldi-lagunilla', 'tepito', 'ricardo-flores-magon', 'romero-rubio',
  'deportivo-oceania', 'bosque-de-aragon', 'villa-de-aragon',
  'nezahualcoyotl', 'impulsora', 'rio-de-los-remedios', 'muzquiz',
  'ecatepec', 'olimpica', 'plaza-aragon', 'ciudad-azteca',
  'insurgentes-sur', 'hospital-20-de-noviembre', 'parque-de-los-venados',
  'eje-central', 'ermita', 'culhuacan', 'san-andres-tomatlan',
  'lomas-estrella', 'calle-11', 'periferico-oriente', 'tezonco',
  'olivos', 'nopalera', 'zapotitlan', 'tlaltenco', 'tlahuac',
  'tren-ligero-estadio-azteca', 'tasquena', 'aeropuerto', 'xochimilco',
  'condesa', 'roma',
]

// Display names with proper capitalization and accents
export const STATION_DISPLAY_NAMES = {
  'observatorio': 'Observatorio',
  'tacubaya': 'Tacubaya',
  'juanacatlan': 'Juanacatlán',
  'chapultepec': 'Chapultepec',
  'sevilla': 'Sevilla',
  'insurgentes': 'Insurgentes',
  'balderas': 'Balderas',
  'salto-del-agua': 'Salto del Agua',
  'pino-suarez': 'Pino Suárez',
  'merced': 'Merced',
  'candelaria': 'Candelaria',
  'san-lazaro': 'San Lázaro',
  'morelos': 'Morelos',
  'santa-anita': 'Santa Anita',
  'peñon-viejo': 'Peñón Viejo',
  'zaragoza': 'Zaragoza',
  'pantitlan': 'Pantitlán',
  'cuatro-caminos': 'Cuatro Caminos',
  'camarones': 'Camarones',
  'refineria': 'Refinería',
  'tacuba': 'Tacuba',
  'panteones': 'Panteones',
  'cuitlahuac': 'Cuitláhuac',
  'popotla': 'Popotla',
  'colegio-militar': 'Colegio Militar',
  'normal': 'Normal',
  'san-cosme': 'San Cosme',
  'revolucion': 'Revolución',
  'hidalgo': 'Hidalgo',
  'bellas-artes': 'Bellas Artes',
  'allende': 'Allende',
  'zocalo': 'Zócalo',
  'san-antonio-abad': 'San Antonio Abad',
  'chabacano': 'Chabacano',
  'viga': 'Viga',
  'xola': 'Xola',
  'villa-de-cortes': 'Villa de Cortés',
  'nativitas': 'Nativitas',
  'portales': 'Portales',
  'taxquena': 'Tasqueña',
  'indios-verdes': 'Indios Verdes',
  'deportivo-18-de-marzo': 'Deportivo 18 de Marzo',
  'potrero': 'Potrero',
  'la-raza': 'La Raza',
  'tlatelolco': 'Tlatelolco',
  'guerrero': 'Guerrero',
  'niños-heroes': 'Niños Héroes',
  'hospital-general': 'Hospital General',
  'centro-medico': 'Centro Médico',
  'etiopia-plaza-de-la-transparencia': 'Etiopía/Plaza de la Transparencia',
  'eugenia': 'Eugenia',
  'division-del-norte': 'División del Norte',
  'zapata': 'Zapata',
  'coyoacan': 'Coyoacán',
  'viveros-derechos-humanos': 'Viveros/Derechos Humanos',
  'miguel-angel-de-quevedo': 'Miguel Ángel de Quevedo',
  'copilco': 'Copilco',
  'martin-carrera': 'Martín Carrera',
  'talisman': 'Talismán',
  'bondojito': 'Bondojito',
  'consulado': 'Consulado',
  'canal-del-norte': 'Canal del Norte',
  'fray-servando': 'Fray Servando',
  'jamaica': 'Jamaica',
  'hangares': 'Hangares',
  'terminal-aerea': 'Terminal Aérea',
  'oceania': 'Oceanía',
  'aragon': 'Aragón',
  'eduardo-molina': 'Eduardo Molina',
  'misterios': 'Misterios',
  'valle-gómez': 'Valle Gómez',
  'el-rosario': 'El Rosario',
  'tezozomoc': 'Tezozómoc',
  'azcapotzalco': 'Azcapotzalco',
  'ferreria': 'Ferrería',
  'norte-45': 'Norte 45',
  'vallejo': 'Vallejo',
  'instituto-del-petroleo': 'Instituto del Petróleo',
  'lindavista': 'Lindavista',
  'la-villa-basilica': 'La Villa-Basílica',
  'aquiles-serdan': 'Aquiles Serdán',
  'san-joaquin': 'San Joaquín',
  'polanco': 'Polanco',
  'constituyentes': 'Constituyentes',
  'san-pedro-de-los-pinos': 'San Pedro de los Pinos',
  'san-antonio': 'San Antonio',
  'mixcoac': 'Mixcoac',
  'barranca-del-muerto': 'Barranca del Muerto',
  'garibaldi': 'Garibaldi',
  'san-juan-de-letran': 'San Juan de Letrán',
  'doctores': 'Doctores',
  'obrera': 'Obrera',
  'la-viga': 'La Viga',
  'coyuya': 'Coyuya',
  'iztacalco': 'Iztacalco',
  'apatlaco': 'Apatlaco',
  'aculco': 'Aculco',
  'escuadron-201': 'Escuadrón 201',
  'atlalilco': 'Atlalilco',
  'iztapalapa': 'Iztapalapa',
  'cerro-de-la-estrella': 'Cerro de la Estrella',
  'u-a-m-i': 'UAM Iztapalapa',
  'constitucion-de-1917': 'Constitución de 1917',
  'puebla': 'Puebla',
  'ciudad-deportiva': 'Ciudad Deportiva',
  'velodromo': 'Velódromo',
  'mixiuhca': 'Mixiuhca',
  'lazaro-cardenas': 'Lázaro Cárdenas',
  'chilpancingo': 'Chilpancingo',
  'patriotismo': 'Patriotismo',
  'agricola-oriental': 'Agrícola Oriental',
  'canal-de-san-juan': 'Canal de San Juan',
  'tepalcates': 'Tepalcates',
  'guelatao': 'Guelatao',
  'acatitla': 'Acatitla',
  'santa-marta': 'Santa Marta',
  'los-reyes': 'Los Reyes',
  'la-paz': 'La Paz',
  'buenavista': 'Buenavista',
  'garibaldi-lagunilla': 'Garibaldi-Lagunilla',
  'tepito': 'Tepito',
  'ricardo-flores-magon': 'Ricardo Flores Magón',
  'romero-rubio': 'Romero Rubio',
  'deportivo-oceania': 'Deportivo Oceanía',
  'bosque-de-aragon': 'Bosque de Aragón',
  'villa-de-aragon': 'Villa de Aragón',
  'nezahualcoyotl': 'Nezahualcóyotl',
  'impulsora': 'Impulsora',
  'rio-de-los-remedios': 'Río de los Remedios',
  'muzquiz': 'Múzquiz',
  'ecatepec': 'Ecatepec',
  'olimpica': 'Olímpica',
  'plaza-aragon': 'Plaza Aragón',
  'ciudad-azteca': 'Ciudad Azteca',
  'insurgentes-sur': 'Insurgentes Sur',
  'hospital-20-de-noviembre': 'Hospital 20 de Noviembre',
  'parque-de-los-venados': 'Parque de los Venados',
  'eje-central': 'Eje Central',
  'ermita': 'Ermita',
  'culhuacan': 'Culhuacán',
  'san-andres-tomatlan': 'San Andrés Tomatlán',
  'lomas-estrella': 'Lomas Estrella',
  'calle-11': 'Calle 11',
  'periferico-oriente': 'Periférico Oriente',
  'tezonco': 'Tezonco',
  'olivos': 'Olivos',
  'nopalera': 'Nopalera',
  'zapotitlan': 'Zapotitlán',
  'tlaltenco': 'Tlaltenco',
  'tlahuac': 'Tláhuac',
  'tren-ligero-estadio-azteca': 'Estadio Azteca (Tren Ligero)',
  'tasquena': 'Tasqueña',
  'aeropuerto': 'Aeropuerto T1',
  'xochimilco': 'Xochimilco',
  'condesa': 'Condesa',
  'roma': 'Roma',
}

// Set for O(1) validation
export const cdmxStationSet = new Set(cdmxStations)

/**
 * Get display name for a station slug
 */
export function getStationName(slug) {
  return STATION_DISPLAY_NAMES[slug] || slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())
}

/**
 * Generate display title for a route
 * Routes to tasquena → "Origen al Estadio Azteca"
 */
export function generateRouteTitulo(origen, destino) {
  const origenName = getStationName(origen)
  const destinoName = getStationName(destino)
  if (destino === 'tasquena' || destino === 'taxquena') {
    return `${origenName} al Estadio Azteca`
  }
  return `${origenName} a ${destinoName}`
}

/**
 * Generate ALL 24,180 route slugs for sitemap
 * Called once during sitemap generation
 */
export function generateAllRouteSlugs() {
  const slugs = []
  for (let i = 0; i < cdmxStations.length; i++) {
    for (let j = 0; j < cdmxStations.length; j++) {
      if (i === j) continue
      slugs.push(`${cdmxStations[i]}-a-${cdmxStations[j]}`)
    }
  }
  return slugs
}
