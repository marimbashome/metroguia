/**
 * MetroGuia.mx — Fuzzy Search (v2 — lightweight)
 *
 * Uses search-index.js (~400KB) instead of importing all station data files (~5.4MB).
 * Only slug, nombre, and linea are needed for autocomplete.
 * Full station data is loaded on-demand when navigating to a station page.
 */

import { searchIndex } from '@/data/search-index';

// Small data imports for cross-domain search (ferry, border, turismo)
import { ferrys } from '@/data/ferrys';
import { crucesFronterizos } from '@/data/cruces-fronterizos';
import { pueblosMagicos } from '@/data/turismo/pueblos-magicos';
import { zonasArqueologicas } from '@/data/turismo/zonas-arqueologicas';
import { ciudadesPatrimonio } from '@/data/turismo/ciudades-patrimonio';
import { playas } from '@/data/turismo/playas';
import { barriosMagicos } from '@/data/turismo/barrios-magicos';
import { rutasGastronomicas } from '@/data/turismo/rutas-gastronomicas';
import { destinosPrioritarios } from '@/data/turismo/destinos-prioritarios';
import { naturaleza } from '@/data/turismo/naturaleza';

/**
 * Normalize text by removing accents and converting to lowercase
 * @param {string} text - Text to normalize
 * @returns {string} Normalized text
 */
export function normalizeText(text) {
  if (!text) return '';

  const accentMap = {
    'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
    'Á': 'a', 'É': 'e', 'Í': 'i', 'Ó': 'o', 'Ú': 'u',
    'ñ': 'n', 'Ñ': 'n'
  };

  return text
    .toLowerCase()
    .split('')
    .map(char => accentMap[char] || char)
    .join('');
}

/**
 * Calculate fuzzy match score for a query against a station name
 * Higher score means better match
 * @param {string} query - Search query
 * @param {string} nombre - Station name to match against
 * @returns {number} Match score (0 = no match, 100+ = better matches)
 */
function calculateFuzzyScore(query, nombre) {
  if (!query || !nombre) return 0;

  const normalizedQuery = normalizeText(query);
  const normalizedNombre = normalizeText(nombre);

  // Exact match (highest priority)
  if (normalizedNombre === normalizedQuery) {
    return 1000;
  }

  // Exact prefix match
  if (normalizedNombre.startsWith(normalizedQuery)) {
    return 500 + (normalizedQuery.length / normalizedNombre.length) * 100;
  }

  // Contains match
  const containsIndex = normalizedNombre.indexOf(normalizedQuery);
  if (containsIndex !== -1) {
    // Score higher if match is at beginning
    const positionBonus = (normalizedNombre.length - containsIndex) * 5;
    return 200 + positionBonus + (normalizedQuery.length / normalizedNombre.length) * 50;
  }

  // Token matching (each word in query matched independently)
  const queryTokens = normalizedQuery.split(/\s+/).filter(t => t);
  const nombreTokens = normalizedNombre.split(/\s+/).filter(t => t);

  let tokenMatches = 0;
  for (const queryToken of queryTokens) {
    for (const nombreToken of nombreTokens) {
      if (nombreToken.includes(queryToken) || queryToken.includes(nombreToken)) {
        tokenMatches++;
        break;
      }
    }
  }

  if (tokenMatches > 0) {
    const tokenScore = (tokenMatches / Math.max(queryTokens.length, nombreTokens.length)) * 100;
    return tokenScore;
  }

  return 0;
}

/**
 * Search for stations with fuzzy matching
 * @param {string} query - Search query
 * @param {Object} options - Search options
 * @param {string} options.ciudad - City filter: city code or 'all'
 * @param {number} options.limit - Maximum results to return (default: 8)
 * @returns {Array} Array of matching stations with scores, including 'ciudad' and 'url' fields
 */
export function searchEstaciones(query, options = {}) {
  const { ciudad = 'all', limit = 8 } = options;

  if (!query || query.trim().length === 0) {
    return [];
  }

  // Build flat station list from search index
  let estacionesList = [];

  if (ciudad === 'all') {
    Object.entries(searchIndex).forEach(([code, info]) => {
      if (info.stations) {
        const sp = info.stationPath || 'estacion';
        estacionesList.push(
          ...info.stations.map(e => ({
            ...e,
            ciudad: info.displayName,
            ciudadCode: code,
            url: `/${info.path}/${sp}/${e.slug || ''}`
          }))
        );
      }
    });
  } else if (ciudad === 'cdmx') {
    // Include Metro, Metrobús, and Cablebús when searching CDMX
    const cdmxKeys = ['cdmx', 'cdmx-metrobus', 'cdmx-cablebus'];
    for (const key of cdmxKeys) {
      const info = searchIndex[key];
      if (info && info.stations) {
        const sp = info.stationPath || 'estacion';
        estacionesList.push(
          ...info.stations.map(e => ({
            ...e,
            ciudad: info.displayName,
            ciudadCode: key,
            url: `/${info.path}/${sp}/${e.slug || ''}`
          }))
        );
      }
    }
  } else if (searchIndex[ciudad]) {
    const info = searchIndex[ciudad];
    const sp = info.stationPath || 'estacion';
    estacionesList = (info.stations || []).map(e => ({
      ...e,
      ciudad: info.displayName,
      ciudadCode: ciudad,
      url: `/${info.path}/${sp}/${e.slug || ''}`
    }));
  }

  // Calculate scores for all stations
  const scoredResults = estacionesList
    .map(estacion => ({
      ...estacion,
      score: calculateFuzzyScore(query, estacion.nombre)
    }))
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(result => {
      const { score, ...rest } = result;
      return rest;
    });

  // Search ferrys, cruces-fronterizos, and turismo when ciudad='all'
  let allResults = scoredResults;

  if (ciudad === 'all') {
    // Search ferrys
    const ferryMatches = (ferrys || [])
      .map(f => ({
        ...f,
        score: calculateFuzzyScore(query, f.nombre) ||
                calculateFuzzyScore(query, f.ruta?.origen) ||
                calculateFuzzyScore(query, f.ruta?.destino)
      }))
      .filter(f => f.score > 0)
      .map(f => ({
        nombre: f.nombre,
        slug: f.slug,
        ciudad: 'Ferry',
        url: `/ferries/${f.slug}`,
        score: f.score
      }));

    // Search cruces-fronterizos
    const cruceMatches = (crucesFronterizos || [])
      .map(c => ({
        ...c,
        score: calculateFuzzyScore(query, c.nombre) ||
                calculateFuzzyScore(query, c.ciudad_mexico) ||
                calculateFuzzyScore(query, c.ciudad_usa) ||
                calculateFuzzyScore(query, c.ciudad_guatemala) ||
                calculateFuzzyScore(query, c.ciudad_belice)
      }))
      .filter(c => c.score > 0)
      .map(c => ({
        nombre: c.nombre,
        slug: c.slug,
        ciudad: 'Frontera',
        url: `/frontera/${c.slug}`,
        score: c.score
      }));

    // Search turismo destinations
    const turismoSources = [
      { data: pueblosMagicos, label: 'Pueblo Mágico', base: '/turismo/pueblos-magicos' },
      { data: zonasArqueologicas, label: 'Zona Arqueológica', base: '/turismo/zonas-arqueologicas' },
      { data: ciudadesPatrimonio, label: 'Patrimonio UNESCO', base: '/turismo/ciudades-patrimonio' },
      { data: playas, label: 'Playa', base: '/turismo/playas' },
      { data: barriosMagicos, label: 'Barrio Mágico', base: '/turismo/barrios-magicos' },
      { data: rutasGastronomicas, label: 'Ruta Gastronómica', base: '/turismo/rutas-gastronomicas' },
      { data: destinosPrioritarios, label: 'Destino Prioritario', base: '/turismo/destinos-prioritarios' },
      { data: naturaleza, label: 'Naturaleza', base: '/turismo/naturaleza' },
    ];

    const turismoMatches = [];
    for (const source of turismoSources) {
      for (const item of (source.data || [])) {
        const score = calculateFuzzyScore(query, item.nombre) ||
                      calculateFuzzyScore(query, item.estado || '') ||
                      calculateFuzzyScore(query, item.destino || '') ||
                      calculateFuzzyScore(query, item.ciudad || '') ||
                      calculateFuzzyScore(query, item.region || '');
        if (score > 0) {
          turismoMatches.push({
            nombre: item.nombre,
            slug: item.slug,
            ciudad: source.label,
            url: `${source.base}/${item.slug}`,
            score
          });
        }
      }
    }

    // Merge all results and re-sort by score
    allResults = [...scoredResults, ...ferryMatches, ...cruceMatches, ...turismoMatches]
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
  }

  return allResults;
}

/**
 * Get hardcoded list of popular destinations for a city
 * @param {string} ciudad - City code
 * @returns {Array} Array of popular station objects with 'url' field
 */
export function getPopularDestinations(ciudad = 'cdmx') {
  const popularByCity = {
    cdmx: [
      { slug: 'estadio-azteca', nombre: 'Estadio Azteca', linea: '2', ciudad: 'CDMX', url: '/cdmx/estacion/estadio-azteca' },
      { slug: 'aeropuerto', nombre: 'Aeropuerto', linea: 'A', ciudad: 'CDMX', url: '/cdmx/estacion/aeropuerto' },
      { slug: 'zocalo', nombre: 'Zócalo', linea: '1', ciudad: 'CDMX', url: '/cdmx/estacion/zocalo' },
      { slug: 'chapultepec', nombre: 'Chapultepec', linea: '1', ciudad: 'CDMX', url: '/cdmx/estacion/chapultepec' },
      { slug: 'bellas-artes', nombre: 'Bellas Artes', linea: '2', ciudad: 'CDMX', url: '/cdmx/estacion/bellas-artes' },
      { slug: 'coyoacan', nombre: 'Coyoacán', linea: '3', ciudad: 'CDMX', url: '/cdmx/estacion/coyoacan' },
    ],
    gdl: [
      { slug: 'estadio-akron', nombre: 'Estadio Akron', linea: '1', ciudad: 'GDL', url: '/gdl/estacion/estadio-akron' },
      { slug: 'centro-historico', nombre: 'Centro Histórico', linea: '1', ciudad: 'GDL', url: '/gdl/estacion/centro-historico' },
      { slug: 'catedral', nombre: 'Catedral', linea: '1', ciudad: 'GDL', url: '/gdl/estacion/catedral' },
    ],
    mty: [
      { slug: 'estadio-bbva', nombre: 'Estadio BBVA', linea: '1', ciudad: 'MTY', url: '/mty/estacion/estadio-bbva' },
      { slug: 'macroplaza', nombre: 'Macroplaza', linea: '1', ciudad: 'MTY', url: '/mty/estacion/macroplaza' },
      { slug: 'fundidora', nombre: 'Fundidora', linea: '1', ciudad: 'MTY', url: '/mty/estacion/fundidora' },
    ],
    puebla: [{ slug: 'capu', nombre: 'CAPU', linea: '1', ciudad: 'Puebla', url: '/puebla/estacion/capu' }],
    merida: [{ slug: 'terminal-came', nombre: 'Terminal CAME', linea: 'D1', ciudad: 'Mérida', url: '/merida/estacion/terminal-came' }],
    leon: [{ slug: 'capu-leon', nombre: 'CAPÚ León', linea: 'Verde', ciudad: 'León', url: '/leon/estacion/capu-leon' }],
    chihuahua: [{ slug: 'chihuahua-central', nombre: 'Estación Chihuahua Central', linea: '1', ciudad: 'Chihuahua', url: '/chihuahua/estacion/chihuahua-central' }],
    tijuana: [{ slug: 'san-ysidro-frontera', nombre: 'San Ysidro (Cruce Fronterizo)', linea: '1', ciudad: 'Tijuana', url: '/tijuana/estacion/san-ysidro-frontera' }],
    queretaro: [{ slug: 'terminal-5-febrero', nombre: 'Terminal 5 de Febrero', linea: '1', ciudad: 'Querétaro', url: '/queretaro/estacion/terminal-5-febrero' }],
    toluca: [{ slug: 'observatorio-cdmx', nombre: 'Observatorio CDMX', linea: 'TI', ciudad: 'Toluca', url: '/toluca/estacion/observatorio-cdmx' }],
    'tren-maya': [{ slug: 'cancun', nombre: 'Cancún', linea: 'T1', ciudad: 'Tren Maya', url: '/tren-maya/estacion/cancun' }],
    oaxaca: [{ slug: 'central-oaxaca', nombre: 'Central de Autobuses Oaxaca', linea: '1', ciudad: 'Oaxaca', url: '/oaxaca/estacion/central-oaxaca' }],
    morelia: [{ slug: 'central-morelia', nombre: 'Central de Autobuses Morelia', linea: '1', ciudad: 'Morelia', url: '/morelia/estacion/central-morelia' }],
    veracruz: [{ slug: 'puerto-veracruz', nombre: 'Puerto de Veracruz', linea: '1', ciudad: 'Veracruz', url: '/veracruz/estacion/puerto-veracruz' }],
    campeche: [{ slug: 'central-campeche', nombre: 'Central de Autobuses Campeche', linea: '1', ciudad: 'Campeche', url: '/campeche/estacion/central-campeche' }],
    villahermosa: [{ slug: 'central-villahermosa', nombre: 'Central de Autobuses Villahermosa', linea: '1', ciudad: 'Villahermosa', url: '/villahermosa/estacion/central-villahermosa' }],
    // US cities
    nyc: [
      { slug: 'nyc-times-sq-42-st', nombre: 'Times Sq-42 St', linea: '1,2,3,7,N,Q,R,W,S', ciudad: 'NYC', url: '/nyc/station/nyc-times-sq-42-st' },
      { slug: 'nyc-grand-central-42-st', nombre: 'Grand Central-42 St', linea: '4,5,6,7,S', ciudad: 'NYC', url: '/nyc/station/nyc-grand-central-42-st' },
      { slug: 'nyc-penn-station', nombre: 'Penn Station', linea: '1,2,3,A,C,E', ciudad: 'NYC', url: '/nyc/station/nyc-penn-station' },
      { slug: 'nyc-fulton-st', nombre: 'Fulton St', linea: '2,3,4,5,A,C,J,Z', ciudad: 'NYC', url: '/nyc/station/nyc-fulton-st' },
    ],
    'los-angeles': [
      { slug: 'la-union-station', nombre: 'Union Station', linea: 'A,B,D,E', ciudad: 'Los Angeles', url: '/los-angeles/station/la-union-station' },
      { slug: 'la-hollywood-highland', nombre: 'Hollywood/Highland', linea: 'B', ciudad: 'Los Angeles', url: '/los-angeles/station/la-hollywood-highland' },
      { slug: 'la-7th-st-metro-center', nombre: '7th St/Metro Center', linea: 'A,B,D,E', ciudad: 'Los Angeles', url: '/los-angeles/station/la-7th-st-metro-center' },
    ],
    houston: [
      { slug: 'hou-main-street-square', nombre: 'Main Street Square', linea: 'Red', ciudad: 'Houston', url: '/houston/station/hou-main-street-square' },
      { slug: 'hou-nrg-park', nombre: 'NRG Park', linea: 'Red', ciudad: 'Houston', url: '/houston/station/hou-nrg-park' },
    ],
    atlanta: [
      { slug: 'atl-five-points', nombre: 'Five Points', linea: 'Red,Gold,Blue,Green', ciudad: 'Atlanta', url: '/atlanta/station/atl-five-points' },
      { slug: 'atl-airport', nombre: 'Airport', linea: 'Red,Gold', ciudad: 'Atlanta', url: '/atlanta/station/atl-airport' },
    ],
    philadelphia: [{ slug: 'philly-city-hall', nombre: 'City Hall', linea: 'BSL,MFL', ciudad: 'Philadelphia', url: '/philadelphia/station/philly-city-hall' }],
    seattle: [{ slug: 'sea-westlake', nombre: 'Westlake', linea: '1 Line', ciudad: 'Seattle', url: '/seattle/station/sea-westlake' }],
    'san-francisco': [{ slug: 'sf-embarcadero', nombre: 'Embarcadero', linea: 'BART,Muni', ciudad: 'San Francisco', url: '/san-francisco/station/sf-embarcadero' }],
    boston: [{ slug: 'bos-park-street', nombre: 'Park Street', linea: 'Red,Green', ciudad: 'Boston', url: '/boston/station/bos-park-street' }],
    miami: [{ slug: 'mia-government-center', nombre: 'Government Center', linea: 'Green,Orange', ciudad: 'Miami', url: '/miami/station/mia-government-center' }],
    dallas: [{ slug: 'dal-akard', nombre: 'Akard', linea: 'Red,Blue,Orange', ciudad: 'Dallas', url: '/dallas/station/dal-akard' }],
    'kansas-city': [{ slug: 'kc-union-station', nombre: 'Union Station', linea: 'KC Streetcar', ciudad: 'Kansas City', url: '/kansas-city/station/kc-union-station' }],
    toronto: [{ slug: 'tor-union', nombre: 'Union', linea: '1,GO Transit', ciudad: 'Toronto', url: '/toronto/station/tor-union' }],
    vancouver: [{ slug: 'van-waterfront', nombre: 'Waterfront', linea: 'Expo,Canada', ciudad: 'Vancouver', url: '/vancouver/station/van-waterfront' }],
    chicago: [{ slug: 'chicago-clark-lake', nombre: 'Clark/Lake', linea: 'Blue,Green,Brown,Purple,Pink,Orange', ciudad: 'Chicago', url: '/chicago/station/chicago-clark-lake' }],
    'washington-dc': [{ slug: 'dc-metro-center', nombre: 'Metro Center', linea: 'Red,Blue,Orange,Silver', ciudad: 'Washington DC', url: '/washington-dc/station/dc-metro-center' }],
    portland: [{ slug: 'pdx-pioneer-square', nombre: 'Pioneer Square', linea: 'Blue,Green,Red,Orange,Yellow', ciudad: 'Portland', url: '/portland/station/pdx-pioneer-square' }],
    denver: [{ slug: 'den-union-station', nombre: 'Union Station', linea: 'A,B,C,D,E,W', ciudad: 'Denver', url: '/denver/station/den-union-station' }],
    montreal: [{ slug: 'mtl-berri-uqam', nombre: 'Berri-UQAM', linea: 'Verte,Orange', ciudad: 'Montreal', url: '/montreal/station/mtl-berri-uqam' }],
    calgary: [{ slug: 'cal-city-hall', nombre: 'City Hall', linea: 'Red,Blue', ciudad: 'Calgary', url: '/calgary/station/cal-city-hall' }],
    edmonton: [{ slug: 'edm-churchill', nombre: 'Churchill', linea: 'Capital,Metro', ciudad: 'Edmonton', url: '/edmonton/station/edm-churchill' }],
    ottawa: [{ slug: 'ott-parliament', nombre: 'Parliament', linea: 'Confederation', ciudad: 'Ottawa', url: '/ottawa/station/ott-parliament' }],
    sacramento: [{ slug: 'sac-capitol', nombre: 'Capitol', linea: 'Blue,Gold', ciudad: 'Sacramento', url: '/sacramento/station/sac-capitol' }],
    'salt-lake-city': [{ slug: 'slc-temple-square', nombre: 'Temple Square', linea: 'Blue,Green', ciudad: 'Salt Lake City', url: '/salt-lake-city/station/slc-temple-square' }],
    'san-diego': [{ slug: 'sd-america-plaza', nombre: 'America Plaza', linea: 'Blue,Orange', ciudad: 'San Diego', url: '/san-diego/station/sd-america-plaza' }],
    minneapolis: [{ slug: 'msp-nicollet-mall', nombre: 'Nicollet Mall', linea: 'Blue,Green', ciudad: 'Minneapolis', url: '/minneapolis/station/msp-nicollet-mall' }],
    pittsburgh: [{ slug: 'pit-steel-plaza', nombre: 'Steel Plaza', linea: 'Red,Blue,Silver', ciudad: 'Pittsburgh', url: '/pittsburgh/station/pit-steel-plaza' }],
    baltimore: [{ slug: 'bal-charles-center', nombre: 'Charles Center', linea: 'Metro', ciudad: 'Baltimore', url: '/baltimore/station/bal-charles-center' }],
    charlotte: [{ slug: 'cha-ctc-arena', nombre: 'CTC/Arena', linea: 'Blue', ciudad: 'Charlotte', url: '/charlotte/station/cha-ctc-arena' }],
    phoenix: [{ slug: 'phx-roosevelt-central-ave', nombre: 'Roosevelt/Central Ave', linea: 'Valley Metro', ciudad: 'Phoenix', url: '/phoenix/station/phx-roosevelt-central-ave' }],
    'st-louis': [{ slug: 'stl-convention-center', nombre: 'Convention Center', linea: 'Red,Blue', ciudad: 'St. Louis', url: '/st-louis/station/stl-convention-center' }],
    detroit: [{ slug: 'det-campus-martius', nombre: 'Campus Martius', linea: 'QLine', ciudad: 'Detroit', url: '/detroit/station/det-campus-martius' }],
    cleveland: [{ slug: 'cle-tower-city', nombre: 'Tower City', linea: 'Red,Blue,Green', ciudad: 'Cleveland', url: '/cleveland/station/cle-tower-city' }],
    'las-vegas': [{ slug: 'lv-las-vegas-convention-center', nombre: 'Las Vegas Convention Center', linea: 'Monorail', ciudad: 'Las Vegas', url: '/las-vegas/station/lv-las-vegas-convention-center' }],
    'san-jose': [{ slug: 'sj-diridon', nombre: 'Diridon', linea: 'Blue,Green', ciudad: 'San Jose', url: '/san-jose/station/sj-diridon' }],
    'new-orleans': [{ slug: 'no-canal-street', nombre: 'Canal Street', linea: 'St. Charles,Canal', ciudad: 'New Orleans', url: '/new-orleans/station/no-canal-street' }],
    buffalo: [{ slug: 'buf-fountain-plaza', nombre: 'Fountain Plaza', linea: 'Metro', ciudad: 'Buffalo', url: '/buffalo/station/buf-fountain-plaza' }],
    honolulu: [{ slug: 'hon-ala-moana-center', nombre: 'Ala Moana Center', linea: 'Skyline', ciudad: 'Honolulu', url: '/honolulu/station/hon-ala-moana-center' }],
    norfolk: [{ slug: 'nfk-macarthur-square', nombre: 'MacArthur Square', linea: 'Tide', ciudad: 'Norfolk', url: '/norfolk/station/nfk-macarthur-square' }],
    jacksonville: [{ slug: 'jax-convention-center', nombre: 'Convention Center', linea: 'Skyway', ciudad: 'Jacksonville', url: '/jacksonville/station/jax-convention-center' }],
    austin: [{ slug: 'austin-downtown-austin', nombre: 'Downtown Austin', linea: 'Red', ciudad: 'Austin', url: '/austin/station/austin-downtown-austin' }],
    orlando: [{ slug: 'orlando-church-street', nombre: 'Church Street', linea: 'SunRail', ciudad: 'Orlando', url: '/orlando/station/orlando-church-street' }],
    'san-juan': [{ slug: 'san-juan-sagrado-corazon', nombre: 'Sagrado Corazón', linea: 'Tren Urbano', ciudad: 'San Juan', url: '/san-juan/station/san-juan-sagrado-corazon' }],
    milwaukee: [{ slug: 'milwaukee-intermodal-station', nombre: 'Intermodal Station', linea: 'The Hop', ciudad: 'Milwaukee', url: '/milwaukee/station/milwaukee-intermodal-station' }],
    tucson: [{ slug: 'tucson-mercado-district', nombre: 'Mercado District', linea: 'Sun Link', ciudad: 'Tucson', url: '/tucson/station/tucson-mercado-district' }],
    tampa: [{ slug: 'tampa-ybor-city', nombre: 'Ybor City', linea: 'TECO', ciudad: 'Tampa', url: '/tampa/station/tampa-ybor-city' }],
    'oklahoma-city': [{ slug: 'oklahoma-city-convention-center', nombre: 'Convention Center', linea: 'OKC Streetcar', ciudad: 'Oklahoma City', url: '/oklahoma-city/station/oklahoma-city-convention-center' }],
    'el-paso': [{ slug: 'el-paso-downtown-transfer-center', nombre: 'Downtown Transfer Center', linea: 'Streetcar', ciudad: 'El Paso', url: '/el-paso/station/el-paso-downtown-transfer-center' }],
    cincinnati: [{ slug: 'cincinnati-government-square', nombre: 'Government Square', linea: 'Connector', ciudad: 'Cincinnati', url: '/cincinnati/station/cincinnati-government-square' }],
    nashville: [{ slug: 'nashville-riverfront', nombre: 'Riverfront', linea: 'WeGo Star', ciudad: 'Nashville', url: '/nashville/station/nashville-riverfront' }],
    newark: [{ slug: 'newark-penn-station', nombre: 'Penn Station', linea: 'Light Rail', ciudad: 'Newark', url: '/newark/station/newark-penn-station' }],
    'kitchener-waterloo': [{ slug: 'kw-central-station', nombre: 'Central Station', linea: 'ION', ciudad: 'Kitchener-Waterloo', url: '/kitchener-waterloo/station/kw-central-station' }],
    mississauga: [{ slug: 'miss-city-centre', nombre: 'City Centre', linea: 'Hazel McCallion', ciudad: 'Mississauga', url: '/mississauga/station/miss-city-centre' }],
  };

  const normalizedCity = ciudad.toLowerCase();
  return popularByCity[normalizedCity] || [];
}
