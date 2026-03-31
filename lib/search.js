import { estaciones as estacionesCDMX } from '@/data/estaciones';
import { estacionesGDL } from '@/data/gdl/estaciones';
import { estacionesMTY } from '@/data/mty/estaciones';
import { estacionesPuebla } from '@/data/puebla/estaciones';
import { estacionesMerida } from '@/data/merida/estaciones';
import { estacionesLeon } from '@/data/leon/estaciones';
import { estacionesChihuahua } from '@/data/chihuahua/estaciones';
import { estacionesTijuana } from '@/data/tijuana/estaciones';
import { estacionesQueretaro } from '@/data/queretaro/estaciones';
import { estacionesToluca } from '@/data/toluca/estaciones';
import { estacionesTrenMaya } from '@/data/tren-maya/estaciones';
import { estacionesOaxaca } from '@/data/oaxaca/estaciones';
import { estacionesMorelia } from '@/data/morelia/estaciones';
import { estacionesVeracruz } from '@/data/veracruz/estaciones';
import { estacionesCampeche } from '@/data/campeche/estaciones';
import { estacionesVillahermosa } from '@/data/villahermosa/estaciones';
import { mexicableEstaciones } from '@/data/cdmx/mexicable';
import { trenSuburbanoData } from '@/data/cdmx/tren-suburbano';
import { trenLigeroData } from '@/data/cdmx/tren-ligero';
import { trolebusData } from '@/data/cdmx/trolebus';
import { metrobusEstaciones } from '@/data/cdmx/metrobus';
import { cablebusEstaciones } from '@/data/cdmx/cablebus';
import { ferrys } from '@/data/ferrys';
import { crucesFronterizos } from '@/data/cruces-fronterizos';

// Turismo data imports
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
 * @param {string} options.ciudad - City filter: 'cdmx', 'gdl', 'mty', 'puebla', 'merida', 'leon', 'chihuahua', 'tijuana', 'queretaro', 'toluca', 'tren-maya', or 'all'
 * @param {number} options.limit - Maximum results to return (default: 8)
 * @returns {Array} Array of matching stations with scores, including 'ciudad' and 'url' fields
 */
export function searchEstaciones(query, options = {}) {
  const { ciudad = 'all', limit = 8 } = options;

  if (!query || query.trim().length === 0) {
    return [];
  }

  // Map of city codes to display names and data
  const cityMap = {
    cdmx: { displayName: 'CDMX', path: 'cdmx', data: estacionesCDMX },
    gdl: { displayName: 'GDL', path: 'gdl', data: estacionesGDL },
    mty: { displayName: 'MTY', path: 'mty', data: estacionesMTY },
    puebla: { displayName: 'Puebla', path: 'puebla', data: estacionesPuebla },
    merida: { displayName: 'Mérida', path: 'merida', data: estacionesMerida },
    leon: { displayName: 'León', path: 'leon', data: estacionesLeon },
    chihuahua: { displayName: 'Chihuahua', path: 'chihuahua', data: estacionesChihuahua },
    tijuana: { displayName: 'Tijuana', path: 'tijuana', data: estacionesTijuana },
    queretaro: { displayName: 'Querétaro', path: 'queretaro', data: estacionesQueretaro },
    toluca: { displayName: 'Toluca', path: 'toluca', data: estacionesToluca },
    'tren-maya': { displayName: 'Tren Maya', path: 'tren-maya', data: estacionesTrenMaya },
    oaxaca: { displayName: 'Oaxaca', path: 'oaxaca', data: estacionesOaxaca },
    morelia: { displayName: 'Morelia', path: 'morelia', data: estacionesMorelia },
    veracruz: { displayName: 'Veracruz', path: 'veracruz', data: estacionesVeracruz },
    campeche: { displayName: 'Campeche', path: 'campeche', data: estacionesCampeche },
    villahermosa: { displayName: 'Villahermosa', path: 'villahermosa', data: estacionesVillahermosa },
    'mexicable': { displayName: 'Mexicable', path: 'cdmx/mexicable', data: mexicableEstaciones },
    'tren-suburbano': { displayName: 'Tren Suburbano', path: 'cdmx/tren-suburbano', data: trenSuburbanoData.estaciones },
    'tren-ligero': { displayName: 'Tren Ligero', path: 'cdmx/tren-ligero', data: trenLigeroData.estaciones },
    'trolebus': { displayName: 'Trolebús', path: 'cdmx/trolebus', data: trolebusData.estaciones },
    'cdmx-metrobus': { displayName: 'CDMX Metrobús', path: 'cdmx/metrobus', data: metrobusEstaciones },
    'cdmx-cablebus': { displayName: 'CDMX Cablebús', path: 'cdmx/cablebus', data: cablebusEstaciones },
  };

  // Determine which datasets to search
  let estacionesList = [];
  
  if (ciudad === 'all') {
    Object.entries(cityMap).forEach(([code, info]) => {
      if (info.data) {
        estacionesList.push(
          ...(info.data || []).map(e => ({ 
            ...e, 
            ciudad: info.displayName,
            ciudadCode: code,
            cityPath: info.path,
            url: `/${info.path}/estacion/${e.slug || ''}`
          }))
        );
      }
    });
  } else if (ciudad === 'cdmx') {
    // Include Metro, Metrobús, and Cablebús when searching CDMX
    const cdmxInfo = cityMap['cdmx'];
    const metrobusInfo = cityMap['cdmx-metrobus'];
    const cablebusInfo = cityMap['cdmx-cablebus'];
    
    estacionesList = [
      ...(cdmxInfo.data || []).map(e => ({ 
        ...e, 
        ciudad: cdmxInfo.displayName,
        ciudadCode: 'cdmx',
        cityPath: cdmxInfo.path,
        url: `/${cdmxInfo.path}/estacion/${e.slug || ''}`
      })),
      ...(metrobusInfo.data || []).map(e => ({ 
        ...e, 
        ciudad: metrobusInfo.displayName,
        ciudadCode: 'cdmx-metrobus',
        cityPath: metrobusInfo.path,
        url: `/${metrobusInfo.path}/estacion/${e.slug || ''}`
      })),
      ...(cablebusInfo.data || []).map(e => ({ 
        ...e, 
        ciudad: cablebusInfo.displayName,
        ciudadCode: 'cdmx-cablebus',
        cityPath: cablebusInfo.path,
        url: `/${cablebusInfo.path}/estacion/${e.slug || ''}`
      }))
    ];
  } else if (cityMap[ciudad]) {
    const info = cityMap[ciudad];
    estacionesList = (info.data || []).map(e => ({ 
      ...e, 
      ciudad: info.displayName,
      ciudadCode: ciudad,
      cityPath: info.path,
      url: `/${info.path}/estacion/${e.slug || ''}`
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
      const { score, cityPath, ...rest } = result;
      return rest;
    });

  // Search ferrys and cruces-fronterizos when ciudad='all'
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
 * @param {string} ciudad - City code: 'cdmx', 'gdl', 'mty', 'puebla', 'merida', 'leon', 'chihuahua', 'tijuana', 'queretaro', 'toluca', or 'tren-maya'
 * @returns {Array} Array of popular station objects with 'url' field
 */
export function getPopularDestinations(ciudad = 'cdmx') {
  const cityCodeMap = {
    cdmx: 'cdmx',
    gdl: 'gdl',
    mty: 'mty',
    puebla: 'puebla',
    merida: 'merida',
    leon: 'leon',
    chihuahua: 'chihuahua',
    tijuana: 'tijuana',
    queretaro: 'queretaro',
    toluca: 'toluca',
    'tren-maya': 'tren-maya',
    oaxaca: 'oaxaca',
    morelia: 'morelia',
    veracruz: 'veracruz',
    campeche: 'campeche',
    villahermosa: 'villahermosa'
  };

  const popularByCity = {
    cdmx: [
      {
        slug: 'estadio-azteca',
        nombre: 'Estadio Azteca',
        linea: '2',
        ciudad: 'CDMX',
        url: '/cdmx/estacion/estadio-azteca'
      },
      {
        slug: 'aeropuerto',
        nombre: 'Aeropuerto',
        linea: 'A',
        ciudad: 'CDMX',
        url: '/cdmx/estacion/aeropuerto'
      },
      {
        slug: 'zocalo',
        nombre: 'Zócalo',
        linea: '1',
        ciudad: 'CDMX',
        url: '/cdmx/estacion/zocalo'
      },
      {
        slug: 'chapultepec',
        nombre: 'Chapultepec',
        linea: '1',
        ciudad: 'CDMX',
        url: '/cdmx/estacion/chapultepec'
      },
      {
        slug: 'bellas-artes',
        nombre: 'Bellas Artes',
        linea: '2',
        ciudad: 'CDMX',
        url: '/cdmx/estacion/bellas-artes'
      },
      {
        slug: 'coyoacan',
        nombre: 'Coyoacán',
        linea: '3',
        ciudad: 'CDMX',
        url: '/cdmx/estacion/coyoacan'
      }
    ],
    gdl: [
      {
        slug: 'estadio-akron',
        nombre: 'Estadio Akron',
        linea: '1',
        ciudad: 'GDL',
        url: '/gdl/estacion/estadio-akron'
      },
      {
        slug: 'centro-historico',
        nombre: 'Centro Histórico',
        linea: '1',
        ciudad: 'GDL',
        url: '/gdl/estacion/centro-historico'
      },
      {
        slug: 'catedral',
        nombre: 'Catedral',
        linea: '1',
        ciudad: 'GDL',
        url: '/gdl/estacion/catedral'
      }
    ],
    mty: [
      {
        slug: 'estadio-bbva',
        nombre: 'Estadio BBVA',
        linea: '1',
        ciudad: 'MTY',
        url: '/mty/estacion/estadio-bbva'
      },
      {
        slug: 'macroplaza',
        nombre: 'Macroplaza',
        linea: '1',
        ciudad: 'MTY',
        url: '/mty/estacion/macroplaza'
      },
      {
        slug: 'fundidora',
        nombre: 'Fundidora',
        linea: '1',
        ciudad: 'MTY',
        url: '/mty/estacion/fundidora'
      }
    ],
    puebla: [
      {
        slug: 'capu',
        nombre: 'CAPU',
        linea: '1',
        ciudad: 'Puebla',
        url: '/puebla/estacion/capu'
      }
    ],
    merida: [
      {
        slug: 'terminal-came',
        nombre: 'Terminal CAME',
        linea: 'D1',
        ciudad: 'Mérida',
        url: '/merida/estacion/terminal-came'
      }
    ],
    leon: [
      {
        slug: 'capu-leon',
        nombre: 'CAPÚ León',
        linea: 'Verde',
        ciudad: 'León',
        url: '/leon/estacion/capu-leon'
      }
    ],
    chihuahua: [
      {
        slug: 'chihuahua-central',
        nombre: 'Estación Chihuahua Central',
        linea: '1',
        ciudad: 'Chihuahua',
        url: '/chihuahua/estacion/chihuahua-central'
      }
    ],
    tijuana: [
      {
        slug: 'san-ysidro-frontera',
        nombre: 'San Ysidro (Cruce Fronterizo)',
        linea: '1',
        ciudad: 'Tijuana',
        url: '/tijuana/estacion/san-ysidro-frontera'
      }
    ],
    queretaro: [
      {
        slug: 'terminal-5-febrero',
        nombre: 'Terminal 5 de Febrero',
        linea: '1',
        ciudad: 'Querétaro',
        url: '/queretaro/estacion/terminal-5-febrero'
      }
    ],
    toluca: [
      {
        slug: 'observatorio-cdmx',
        nombre: 'Observatorio CDMX',
        linea: 'TI',
        ciudad: 'Toluca',
        url: '/toluca/estacion/observatorio-cdmx'
      }
    ],
    'tren-maya': [
      {
        slug: 'cancun',
        nombre: 'Cancún',
        linea: 'T1',
        ciudad: 'Tren Maya',
        url: '/tren-maya/estacion/cancun'
      }
    ],
    oaxaca: [
      {
        slug: 'central-oaxaca',
        nombre: 'Central de Autobuses Oaxaca',
        linea: '1',
        ciudad: 'Oaxaca',
        url: '/oaxaca/estacion/central-oaxaca'
      }
    ],
    morelia: [
      {
        slug: 'central-morelia',
        nombre: 'Central de Autobuses Morelia',
        linea: '1',
        ciudad: 'Morelia',
        url: '/morelia/estacion/central-morelia'
      }
    ],
    veracruz: [
      {
        slug: 'puerto-veracruz',
        nombre: 'Puerto de Veracruz',
        linea: '1',
        ciudad: 'Veracruz',
        url: '/veracruz/estacion/puerto-veracruz'
      }
    ],
    campeche: [
      {
        slug: 'central-campeche',
        nombre: 'Central de Autobuses Campeche',
        linea: '1',
        ciudad: 'Campeche',
        url: '/campeche/estacion/central-campeche'
      }
    ],
    villahermosa: [
      {
        slug: 'central-villahermosa',
        nombre: 'Central de Autobuses Villahermosa',
        linea: '1',
        ciudad: 'Villahermosa',
        url: '/villahermosa/estacion/central-villahermosa'
      }
    ]
  };

  const normalizedCity = ciudad.toLowerCase();
  return popularByCity[normalizedCity] || [];
}