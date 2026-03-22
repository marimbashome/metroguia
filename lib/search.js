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
    'tren-maya': { displayName: 'Tren Maya', path: 'tren-maya', data: estacionesTrenMaya }
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

  return scoredResults;
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
    'tren-maya': 'tren-maya'
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
    ]
  };

  const normalizedCity = ciudad.toLowerCase();
  return popularByCity[normalizedCity] || [];
}