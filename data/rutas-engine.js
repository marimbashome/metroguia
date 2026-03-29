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
  // GDL display names
  'auditorio': 'Auditorio',
  'periferico-norte': 'Periférico Norte',
  'mexicaltzingo': 'Mexicaltzingo',
  'avila-camacho': 'Ávila Camacho',
  'juarez': 'Juárez',
  'washington': 'Washington',
  'mezquitan': 'Mezquitán',
  'san-juan-de-dios': 'San Juan de Dios',
  'belisario-dominguez': 'Belisario Domínguez',
  'cristobal-de-onate': 'Cristóbal de Oñate',
  'la-aurora': 'La Aurora',
  'plaza-universidad': 'Plaza Universidad',
  'san-andres': 'San Andrés',
  'san-jacinto': 'San Jacinto',
  'transferencia': 'Transferencia',
  'lino-portes-gil': 'Lino Portes Gil',
  'santa-isabel': 'Santa Isabel',
  'rio-nilo': 'Río Nilo',
  'periferico-sur': 'Periférico Sur',
  'tetlan': 'Tetlán',
  'la-aurora-l2': 'La Aurora (L2)',
  'san-jacinto-l2': 'San Jacinto (L2)',
  'san-andres-l2': 'San Andrés (L2)',
  'cristobal-de-onate-l2': 'Cristóbal de Oñate (L2)',
  'belisario-dominguez-l2': 'Belisario Domínguez (L2)',
  'san-juan-de-dios-l2': 'San Juan de Dios (L2)',
  'plaza-universidad-l2': 'Plaza Universidad (L2)',
  'juarez-l2': 'Juárez (L2)',
  'arcos-de-zapopan': 'Arcos de Zapopan',
  'zapopan-centro': 'Zapopan Centro',
  'plaza-patria': 'Plaza Patria',
  'santuario': 'Santuario',
  'independencia': 'Independencia',
  'guadalajara-centro': 'Guadalajara Centro',
  'la-normal': 'La Normal',
  'avila-camacho-l3': 'Ávila Camacho (L3)',
  'plaza-universidad-l3': 'Plaza Universidad (L3)',
  'cucei': 'CUCEI',
  'rio-nilo-l3': 'Río Nilo (L3)',
  'estadio-chivas': 'Estadio Chivas (Akron)',
  'mariano-otero': 'Mariano Otero',
  'central-de-autobuses': 'Central de Autobuses',
  // MTY display names
  'talleres': 'Talleres',
  'san-bernabe': 'San Bernabé',
  'unidad-modelo': 'Unidad Modelo',
  'aztlan': 'Aztlán',
  'penitenciaria': 'Penitenciaría',
  'alfonso-reyes': 'Alfonso Reyes',
  'mitras': 'Mitras',
  'simon-bolivar': 'Simón Bolívar',
  'hospital': 'Hospital',
  'edison': 'Edison',
  'central': 'Central',
  'cuauhtemoc': 'Cuauhtémoc',
  'del-golfo': 'Del Golfo',
  'felix-u-gomez': 'Félix U. Gómez',
  'parque-fundidora': 'Parque Fundidora',
  'y-griega': 'Y Griega',
  'eloy-cavazos': 'Eloy Cavazos',
  'lerdo-de-tejada': 'Lerdo de Tejada',
  'exposicion': 'Exposición',
  'sendero': 'Sendero',
  'tapia': 'Tapia',
  'san-nicolas': 'San Nicolás',
  'anahuac': 'Anáhuac',
  'universidad': 'Universidad',
  'ninos-heroes': 'Niños Héroes',
  'regina': 'Regina',
  'general-anaya': 'General Anaya',
  'cuauhtemoc-l2': 'Cuauhtémoc (L2)',
  'alameda': 'Alameda',
  'fundadores': 'Fundadores',
  'padre-mier': 'Padre Mier',
  'general-i-zaragoza': 'General I. Zaragoza',
}

// GDL stations (42 — SITEUR L1, L2, L3 + Mi Macro)
export const gdlStations = [
  'auditorio', 'periferico-norte', 'mexicaltzingo', 'avila-camacho', 'juarez',
  'washington', 'mezquitan', 'san-juan-de-dios', 'belisario-dominguez',
  'cristobal-de-onate', 'la-aurora', 'plaza-universidad', 'san-andres',
  'san-jacinto', 'transferencia', 'lino-portes-gil', 'santa-isabel', 'rio-nilo',
  'periferico-sur', 'tetlan', 'la-aurora-l2', 'san-jacinto-l2', 'san-andres-l2',
  'cristobal-de-onate-l2', 'belisario-dominguez-l2', 'san-juan-de-dios-l2',
  'plaza-universidad-l2', 'juarez-l2', 'arcos-de-zapopan', 'zapopan-centro',
  'plaza-patria', 'santuario', 'independencia', 'guadalajara-centro', 'la-normal',
  'avila-camacho-l3', 'plaza-universidad-l3', 'cucei', 'rio-nilo-l3',
  'estadio-chivas', 'mariano-otero', 'central-de-autobuses',
]

// MTY stations (32 — Metrorrey L1 + L2)
export const mtyStations = [
  'talleres', 'san-bernabe', 'unidad-modelo', 'aztlan', 'penitenciaria',
  'alfonso-reyes', 'mitras', 'simon-bolivar', 'hospital', 'edison',
  'central', 'cuauhtemoc', 'del-golfo', 'felix-u-gomez', 'parque-fundidora',
  'y-griega', 'eloy-cavazos', 'lerdo-de-tejada', 'exposicion', 'sendero',
  'tapia', 'san-nicolas', 'anahuac', 'universidad', 'ninos-heroes',
  'regina', 'general-anaya', 'cuauhtemoc-l2', 'alameda', 'fundadores',
  'padre-mier', 'general-i-zaragoza',
]

// Sets for O(1) validation
export const cdmxStationSet = new Set(cdmxStations)
export const gdlStationSet = new Set(gdlStations)
export const mtyStationSet = new Set(mtyStations)
export const allStationSet = new Set([...cdmxStations, ...gdlStations, ...mtyStations])

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
 * Generate route slugs for a single city
 */
function generateCityRouteSlugs(stations, prefix = '') {
  const slugs = []
  for (let i = 0; i < stations.length; i++) {
    for (let j = 0; j < stations.length; j++) {
      if (i === j) continue
      const slug = `${stations[i]}-a-${stations[j]}`
      slugs.push(prefix ? `${prefix}/${slug}` : slug)
    }
  }
  return slugs
}

/**
 * Generate ALL 26,894 route slugs for sitemap
 * CDMX: 24,180 + GDL: 1,722 + MTY: 992
 * Called once during sitemap generation
 */
export function generateAllRouteSlugs() {
  return [
    ...generateCityRouteSlugs(cdmxStations),
    ...generateCityRouteSlugs(gdlStations),
    ...generateCityRouteSlugs(mtyStations),
  ]
}

/**
 * Generate route slugs for a specific city only
 */
export function generateCityRoutes(city) {
  switch (city) {
    case 'cdmx': return generateCityRouteSlugs(cdmxStations)
    case 'gdl': return generateCityRouteSlugs(gdlStations)
    case 'mty': return generateCityRouteSlugs(mtyStations)
    default: return []
  }
}
