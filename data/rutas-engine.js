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
  'gdl-division-del-norte': 'División del Norte',
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
  // GDL display names — L1 (20)
  'gdl-auditorio': 'Auditorio', 'periferico-norte': 'Periférico Norte', 'dermatologico': 'Dermatológico',
  'atemajac': 'Atemajac', 'gdl-division-del-norte': 'División del Norte', 'avila-camacho': 'Ávila Camacho',
  'mezquitan': 'Mezquitán', 'refugio': 'Refugio', 'gdl-juarez': 'Juárez', 'gdl-mexicaltzingo': 'Mexicaltzingo',
  'washington': 'Washington', 'santa-filomena': 'Santa Filomena', 'unidad-deportiva': 'Unidad Deportiva',
  'urdaneta': 'Urdaneta', '18-de-marzo': '18 de Marzo', 'isla-raza': 'Isla Raza', 'patria': 'Patria',
  'espana': 'España', 'santuario-martires': 'Santuario Mártires', 'periferico-sur': 'Periférico Sur',
  // GDL L2 (10)
  'juarez-l2': 'Juárez (L2)', 'plaza-universidad': 'Plaza Universidad', 'san-juan-de-dios': 'San Juan de Dios',
  'belisario-dominguez': 'Belisario Domínguez', 'oblatos': 'Oblatos', 'cristobal-de-onate': 'Cristóbal de Oñate',
  'san-andres': 'San Andrés', 'san-jacinto': 'San Jacinto', 'la-aurora': 'La Aurora', 'tetlan': 'Tetlán',
  // GDL L3 (18)
  'arcos-de-zapopan': 'Arcos de Zapopan', 'periferico-belenes': 'Periférico Belenes', 'mercado-del-mar': 'Mercado del Mar',
  'zapopan-centro': 'Zapopan Centro', 'plaza-patria': 'Plaza Patria', 'circunvalacion-country': 'Circunvalación Country',
  'avila-camacho-l3': 'Ávila Camacho (L3)', 'la-normal': 'La Normal', 'santuario': 'Santuario',
  'guadalajara-centro': 'Guadalajara Centro', 'independencia-l3': 'Independencia (L3)', 'plaza-de-la-bandera': 'Plaza de la Bandera',
  'cucei': 'CUCEI', 'gdl-revolucion': 'Revolución', 'rio-nilo-l3': 'Río Nilo (L3)', 'tlaquepaque-centro': 'Tlaquepaque Centro',
  'lazaro-cardenas-l3': 'Lázaro Cárdenas (L3)', 'central-de-autobuses': 'Central de Autobuses',
  // GDL L4 (8)
  'las-juntas': 'Las Juntas', 'jalisco-200': 'Jalisco 200 Años', 'real-del-valle': 'Real del Valle',
  'concepcion-del-valle': 'Concepción del Valle', 'el-cuervo': 'El Cuervo', 'lomas-del-sur': 'Lomas del Sur',
  'cutlajo': 'CUTLAJO', 'tlajomulco-centro': 'Tlajomulco Centro',
  // GDL Mi Macro Calzada (27)
  'mirador-mc': 'Mirador', 'huentitan-mc': 'Huentitán', 'zoologico-mc': 'Zoológico',
  'independencia-norte-mc': 'Independencia Norte', 'san-patricio-mc': 'San Patricio', 'igualdad-mc': 'Igualdad',
  'monumental-mc': 'Monumental', 'monte-olivete-mc': 'Monte Olivete', 'circunvalacion-mc': 'Circunvalación',
  'ciencias-salud-mc': 'Ciencias de la Salud', 'juan-alvarez-mc': 'Juan Álvarez', 'alameda-mc': 'Alameda',
  'san-juan-de-dios-mc': 'San Juan de Dios (Macro)', 'bicentenario-mc': 'Bicentenario', 'la-paz-mc': 'La Paz',
  'ninos-heroes-mc': 'Niños Héroes', 'agua-azul-mc': 'Agua Azul', 'cipres-mc': 'Ciprés',
  'heroes-nacozari-mc': 'Héroes de Nacozari', 'lazaro-cardenas-mc': 'Lázaro Cárdenas (Macro)', 'el-dean-mc': 'El Deán',
  'zona-industrial-mc': 'Zona Industrial', 'lopez-de-legazpi-mc': 'López de Legazpi', 'clemente-orozco-mc': 'Clemente Orozco',
  'artes-plasticas-mc': 'Artes Plásticas', 'esculturas-mc': 'Esculturas', 'fray-angelico-mc': 'Fray Angélico',
  // GDL Mi Macro Periférico (42)
  'barranca-huentitan-mp': 'Barranca de Huentitán', 'zoologico-gdl-mp': 'Zoológico GDL', 'independencia-norte-mp': 'Independencia Norte (MP)',
  'lomas-paraiso-mp': 'Lomas del Paraíso', 'rancho-nuevo-mp': 'Rancho Nuevo', 'la-experiencia-mp': 'La Experiencia',
  'el-batan-mp': 'El Batán', 'periferico-norte-mp': 'Periférico Norte (MP)', 'la-cantera-mp': 'La Cantera',
  'tabachines-mp': 'Tabachines', 'constitucion-mp': 'Constitución', 'centro-cultural-universitario-mp': 'Centro Cultural Universitario',
  'san-isidro-mp': 'San Isidro', 'periferico-belenes-mp': 'Periférico Belenes (MP)', 'tuzania-mp': 'Tuzanía',
  'santa-margarita-mp': 'Santa Margarita', 'acueducto-mp': 'Acueducto', 'cinco-de-mayo-mp': '5 de Mayo',
  'san-juan-ocotan-mp': 'San Juan de Ocotán', 'vallarta-mp': 'Vallarta', 'estadio-chivas-mp': 'Estadio Akron (FIFA 2026)',
  'ciudad-judicial-mp': 'Ciudad Judicial', 'ciudad-granja-mp': 'Ciudad Granja', 'parque-metropolitano-mp': 'Parque Metropolitano',
  'chapalita-inn-mp': 'Chapalita Inn', 'el-colli-mp': 'El Colli', 'felipe-ruvalcaba-mp': 'Felipe Ruvalcaba',
  'miramar-mp': 'Miramar', 'mariano-otero-mp': 'Mariano Otero', 'el-briseno-mp': 'El Briseño',
  'agricola-mp': 'Agrícola', 'lopez-mateos-mp': 'López Mateos', 'iteso-mp': 'ITESO',
  'terminal-sur-mp': 'Terminal Sur', 'periferico-sur-mp': 'Periférico Sur (MP)', 'san-sebastianito-mp': 'San Sebastianito',
  'ocho-de-julio-mp': '8 de Julio', 'toluquilla-mp': 'Toluquilla', 'adolf-horn-mp': 'Adolf Horn',
  'artesanos-mp': 'Artesanos', 'las-pintas-mp': 'Las Pintas', 'carretera-chapala-mp': 'Carretera a Chapala',
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
  'mty-cuauhtemoc': 'Cuauhtémoc',
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
  'mty-universidad': 'Universidad',
  'ninos-heroes': 'Niños Héroes',
  'regina': 'Regina',
  'general-anaya': 'General Anaya',
  'cuauhtemoc-l2': 'Cuauhtémoc (L2)',
  'alameda': 'Alameda',
  'fundadores': 'Fundadores',
  'padre-mier': 'Padre Mier',
  'general-i-zaragoza': 'General I. Zaragoza',
  // MTY L3 display names
  'hospital-metropolitano': 'Hospital Metropolitano',
  'los-angeles': 'Los Ángeles',
  'ruiz-cortines': 'Ruiz Cortines',
  'moderna': 'Colonia Moderna',
  'metalurgicos': 'Metalúrgicos',
  'felix-u-gomez-l3': 'Félix U. Gómez (L3)',
  'colonia-obrera': 'Colonia Obrera',
  'santa-lucia': 'Santa Lucía',
  'general-i-zaragoza-l3': 'General I. Zaragoza (L3)',
  // MTY Ecovía display names
  'lincoln': 'Lincoln',
  'astros': 'Astros',
  'cumbres': 'Cumbres',
  'plumbago': 'Plumbago',
  'plutarco-elias-calles': 'Plutarco Elías Calles',
  'embotelladora': 'Embotelladora',
  'panteon-municipal': 'Panteón Municipal',
  'cardenal': 'Cardenal',
  'valle-verde': 'Valle Verde',
  'cardiologia': 'Cardiología',
  'santa-cecilia': 'Santa Cecilia',
  'villa-mitras': 'Villa Mitras',
  'rangel-frias': 'Rangel Frías',
  'transito': 'Tránsito',
  'laredo': 'Laredo',
  'rodrigo-gomez': 'Rodrigo Gómez',
  'mitras-ecovia': 'Mitras (Ecovía)',
  'celulosa': 'Celulosa',
  'veinte-de-noviembre': '20 de Noviembre',
  'hidalgo-ecovia': 'Hidalgo (Ecovía)',
  'bella-vista': 'Bella Vista',
  'regina-ecovia': 'Regina (Ecovía)',
  'asarco': 'Asarco',
  'cementos': 'Cementos',
  'ruiz-cortines-ecovia': 'Ruiz Cortines (Ecovía)',
  'clinica-15': 'Clínica 15',
  'coyoacan-mty': 'Coyoacán',
  'churubusco': 'Churubusco',
  'vidriera': 'Vidriera',
  'las-americas': 'Las Américas',
  'adolfo-prieto': 'Adolfo Prieto',
  'central-de-carga': 'Central de Carga',
  'tauro': 'Tauro',
  'miguel-aleman': 'Miguel Alemán',
  'calle-nueva': 'Calle Nueva',
  'de-la-zanja': 'De La Zanja',
  'aceros': 'Aceros',
  'guadalajara-ecovia': 'Guadalajara',
  'san-miguel-ecovia': 'San Miguel',
  'valle-fertil': 'Valle Fértil',
  'movilidad-monterrey': 'Movilidad Monterrey',
  'valle-soleado': 'Valle Soleado',
}

// GDL stations (125 — SITEUR L1-L4 + Mi Macro Calzada + Mi Macro Periférico)
export const gdlStations = [
  'gdl-auditorio', 'periferico-norte', 'dermatologico', 'atemajac', 'gdl-division-del-norte', 'avila-camacho',
  'mezquitan', 'refugio', 'gdl-juarez', 'gdl-mexicaltzingo', 'washington', 'santa-filomena',
  'unidad-deportiva', 'urdaneta', '18-de-marzo', 'isla-raza', 'patria', 'espana',
  'santuario-martires', 'periferico-sur', 'juarez-l2', 'plaza-universidad', 'san-juan-de-dios', 'belisario-dominguez',
  'oblatos', 'cristobal-de-onate', 'san-andres', 'san-jacinto', 'la-aurora', 'tetlan',
  'arcos-de-zapopan', 'periferico-belenes', 'mercado-del-mar', 'zapopan-centro', 'plaza-patria', 'circunvalacion-country',
  'avila-camacho-l3', 'la-normal', 'santuario', 'guadalajara-centro', 'independencia-l3', 'plaza-de-la-bandera',
  'cucei', 'gdl-revolucion', 'rio-nilo-l3', 'tlaquepaque-centro', 'lazaro-cardenas-l3', 'central-de-autobuses',
  'las-juntas', 'jalisco-200', 'real-del-valle', 'concepcion-del-valle', 'el-cuervo', 'lomas-del-sur',
  'cutlajo', 'tlajomulco-centro', 'mirador-mc', 'huentitan-mc', 'zoologico-mc', 'independencia-norte-mc',
  'san-patricio-mc', 'igualdad-mc', 'monumental-mc', 'monte-olivete-mc', 'circunvalacion-mc', 'ciencias-salud-mc',
  'juan-alvarez-mc', 'alameda-mc', 'san-juan-de-dios-mc', 'bicentenario-mc', 'la-paz-mc', 'ninos-heroes-mc',
  'agua-azul-mc', 'cipres-mc', 'heroes-nacozari-mc', 'lazaro-cardenas-mc', 'el-dean-mc', 'zona-industrial-mc',
  'lopez-de-legazpi-mc', 'clemente-orozco-mc', 'artes-plasticas-mc', 'esculturas-mc', 'fray-angelico-mc',
  'barranca-huentitan-mp', 'zoologico-gdl-mp', 'independencia-norte-mp', 'lomas-paraiso-mp', 'rancho-nuevo-mp',
  'la-experiencia-mp', 'el-batan-mp', 'periferico-norte-mp', 'la-cantera-mp', 'tabachines-mp',
  'constitucion-mp', 'centro-cultural-universitario-mp', 'san-isidro-mp', 'periferico-belenes-mp', 'tuzania-mp',
  'santa-margarita-mp', 'acueducto-mp', 'cinco-de-mayo-mp', 'san-juan-ocotan-mp', 'vallarta-mp',
  'estadio-chivas-mp', 'ciudad-judicial-mp', 'ciudad-granja-mp', 'parque-metropolitano-mp', 'chapalita-inn-mp',
  'el-colli-mp', 'felipe-ruvalcaba-mp', 'miramar-mp', 'mariano-otero-mp', 'el-briseno-mp', 'agricola-mp',
  'lopez-mateos-mp', 'iteso-mp', 'terminal-sur-mp', 'periferico-sur-mp', 'san-sebastianito-mp', 'ocho-de-julio-mp',
  'toluquilla-mp', 'adolf-horn-mp', 'artesanos-mp', 'las-pintas-mp', 'carretera-chapala-mp',
]

// MTY stations (83 — Metrorrey L1 + L2 + L3 + Ecovía)
export const mtyStations = [
  // L1
  'talleres', 'san-bernabe', 'unidad-modelo', 'aztlan', 'penitenciaria',
  'alfonso-reyes', 'mitras', 'simon-bolivar', 'hospital', 'edison',
  'central', 'mty-cuauhtemoc', 'del-golfo', 'felix-u-gomez', 'parque-fundidora',
  'y-griega', 'eloy-cavazos', 'lerdo-de-tejada', 'exposicion',
  // L2
  'sendero', 'tapia', 'san-nicolas', 'anahuac', 'mty-universidad', 'ninos-heroes',
  'regina', 'general-anaya', 'cuauhtemoc-l2', 'alameda', 'fundadores',
  'padre-mier', 'general-i-zaragoza',
  // L3
  'hospital-metropolitano', 'los-angeles', 'ruiz-cortines', 'moderna',
  'metalurgicos', 'felix-u-gomez-l3', 'colonia-obrera', 'santa-lucia',
  'general-i-zaragoza-l3',
  // Ecovía
  'lincoln', 'astros', 'cumbres', 'plumbago', 'plutarco-elias-calles',
  'embotelladora', 'panteon-municipal', 'cardenal', 'valle-verde', 'cardiologia',
  'santa-cecilia', 'villa-mitras', 'rangel-frias', 'transito', 'laredo',
  'rodrigo-gomez', 'mitras-ecovia', 'celulosa', 'veinte-de-noviembre',
  'hidalgo-ecovia', 'bella-vista', 'regina-ecovia', 'asarco', 'cementos',
  'ruiz-cortines-ecovia', 'clinica-15', 'coyoacan-mty', 'churubusco',
  'vidriera', 'las-americas', 'adolfo-prieto', 'central-de-carga', 'tauro',
  'miguel-aleman', 'calle-nueva', 'de-la-zanja', 'aceros', 'guadalajara-ecovia',
  'san-miguel-ecovia', 'valle-fertil', 'movilidad-monterrey', 'valle-soleado',
]

// Secondary cities
export const pueblaStations = ["20-de-noviembre","analco","angelopolis","barrio-artista","buap","capu","cholula","la-paz","loreto","los-fuertes","mercado-artesanias","periferico-ecologico","san-manuel","udla","valsequillo","zocalo-centro"];
export const meridaStations = ["aeropuerto-manuel-crescencio-rejon","altabrisa","caucel","centro-historico","ciudad-caucel","gran-museo-mundo-maya","hospital-general","itzimna","la-plancha","mercado-lucas-galez","parque-centenario","paseo-montejo","plaza-las-americas","terminal-came","terminal-noreste","uady"];
export const leonStations = ["aeropuerto-bajio-acceso","blvd-adolfo-lopez-mateos","capu-leon","catedral-basilica","delta-leon","estadio-leon","expo-leon","forum-metropolitano-leon","gran-plaza-leon","hospital-imss-bajio","industrial-norte-leon","la-calzada","plaza-de-los-martires","plaza-mayor","plaza-toros-leon","poliforum-leon","terminal-central-leon","universidad-campus-leon","zona-centro-leon","zona-piel-leon"];
export const chihuahuaStations = ["bahuichivo","catedral-chihuahua","centro-chihuahua","chihuahua-central","creel","cuauhtemoc","divisadero","el-fuerte","los-mochis","museo-quinta-gameros","palacio-gobierno","pancho-villa-museo","posada-barrancas","uach","zona-dorada-chi"];
export const tijuanaStations = ["aeropuerto-tj","buena-vista","catedral-tijuana","chaparral","hospital-general-tj","la-mesa-tj","mercado-hidalgo","otay-comercial","playas-tj","plaza-rio","plaza-santa-cecilia","puente-cross-border","san-ysidro-frontera","valle-guadalupe-acceso","zona-centro"];
export const queretaroStations = ["acueducto","acueducto-qro","alameda-qro","aromas","barrio-la-cruz-qro","campus-aeroespacial-qro","centro-historico-qro","cimatario-qro","constituyentes","constituyentes-qro","el-pueblito","estadio-corregidora","estadio-corregidora-qro","hospital-angeles","hospital-general-qro","jardin-zenea-qro","juriquilla","juriquilla-qro","la-canada","parque-industrial-qro","plaza-dorada-qro","san-pedrito","santa-rosa-viterbo-qro","teatro-republica","tec-monterrey-qro","tecnologico","terminal-5-febrero","uaq-campus-qro","universidad-autonoma"];
export const tolucaStations = ["aeropuerto-toluca","cosmovitral","lerma","lerma-centro","metepec","metepec-artesanal","nevado-toluca-acceso","observatorio-cdmx","parque-lerma","portales-toluca","san-mateo-atenco","san-salvador-metepec","toluca-centro-bus","universidad-toluca","zinacantepec-terminal"];
export const trenmayaStations = ["agua-azul","bacalar","calakmul-balamku","cancun","chetumal","chichen-itza","escarcega","izamal","merida-oriente","palenque","playa-del-carmen","tulum","uxmal","valladolid","xcaret"];

// Sets for O(1) validation
export const cdmxStationSet = new Set(cdmxStations)
export const gdlStationSet = new Set(gdlStations)
export const mtyStationSet = new Set(mtyStations)
export const pueblaStationSet = new Set(pueblaStations)
export const meridaStationSet = new Set(meridaStations)
export const leonStationSet = new Set(leonStations)
export const chihuahuaStationSet = new Set(chihuahuaStations)
export const tijuanaStationSet = new Set(tijuanaStations)
export const queretaroStationSet = new Set(queretaroStations)
export const tolucaStationSet = new Set(tolucaStations)
export const trenmayaStationSet = new Set(trenmayaStations)
export const allStationSet = new Set([...cdmxStations, ...gdlStations, ...mtyStations, ...pueblaStations, ...meridaStations, ...leonStations, ...chihuahuaStations, ...tijuanaStations, ...queretaroStations, ...tolucaStations, ...trenmayaStations])

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
 * Generate ALL 46,488 route slugs for sitemap
 * CDMX: 24,180 + GDL: 15,500 + MTY: 6,806
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
    case 'puebla': return generateCityRouteSlugs(pueblaStations)
    case 'merida': return generateCityRouteSlugs(meridaStations)
    case 'leon': return generateCityRouteSlugs(leonStations)
    case 'chihuahua': return generateCityRouteSlugs(chihuahuaStations)
    case 'tijuana': return generateCityRouteSlugs(tijuanaStations)
    case 'queretaro': return generateCityRouteSlugs(queretaroStations)
    case 'toluca': return generateCityRouteSlugs(tolucaStations)
    case 'tren-maya': return generateCityRouteSlugs(trenmayaStations)
    default: return []
  }
}
