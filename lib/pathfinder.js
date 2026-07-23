import { getCityConfig } from '@/data/cities-config';
import { findRouteInGraph } from './pathfinder-core.js';

/**
 * Module-level cache for loaded graphs
 * Only graphs that are actually used are loaded into memory
 * @type {Map<string, Object>}
 */
const graphCache = new Map();

/**
 * Map of city codes to dynamic import paths
 * Graphs are loaded lazily on first use
 */
const GRAFO_PATHS = {
  cdmx: () => import('@/data/grafo'),
  gdl: () => import('@/data/gdl/grafo'),
  mty: () => import('@/data/mty/grafo'),
  campeche: () => import('@/data/campeche/grafo'),
  chihuahua: () => import('@/data/chihuahua/grafo'),
  leon: () => import('@/data/leon/grafo'),
  merida: () => import('@/data/merida/grafo'),
  morelia: () => import('@/data/morelia/grafo'),
  oaxaca: () => import('@/data/oaxaca/grafo'),
  puebla: () => import('@/data/puebla/grafo'),
  queretaro: () => import('@/data/queretaro/grafo'),
  tijuana: () => import('@/data/tijuana/grafo'),
  toluca: () => import('@/data/toluca/grafo'),
  'tren-maya': () => import('@/data/tren-maya/grafo'),
  veracruz: () => import('@/data/veracruz/grafo'),
  villahermosa: () => import('@/data/villahermosa/grafo'),
};

/**
 * Base fares — las 16 ciudades mexicanas (todo MXN)
 */
const BASE_FARES = {
  cdmx: 5,          // Metro CDMX $5 MXN
  gdl: 9.5,         // Mi Tren / Mi Macro GDL $9.50 MXN (unified, $14 from April 2026)
  mty: 4.5,         // Metrorrey MTY $4.50 MXN (unified with Ecovía via Mi Pasaje)
  puebla: 8,        // RUTA BRT Puebla $8 MXN
  merida: 7,        // Va y Ven Mérida $7 MXN
  leon: 9,          // SIT León $9 MXN
  chihuahua: 120,   // Chepe Express ~$120 MXN (turístico, varía por tramo)
  tijuana: 21,      // SITT Tijuana ~$21 MXN
  queretaro: 8.5,   // QroBús Querétaro $8.50 MXN
  toluca: 16,       // Tren Interurbano Toluca $16 MXN
  'tren-maya': 200, // Tren Maya ~$200 MXN (turístico, varía por tramo)
  campeche: 8,      // Tren Ligero de Campeche ~$8 MXN
  oaxaca: 10,       // Circuito turístico Oaxaca ~$10 MXN
  veracruz: 10,     // Autobús turístico Veracruz ~$10 MXN
  villahermosa: 10, // Autobús urbano Villahermosa ~$10 MXN
  // morelia: sin tarifa oficial publicada (teleférico aún no opera) — se deja
  // fuera a propósito; ver fallback "costo: null" más abajo (no inventar precio).
};

/**
 * Currency — las 16 ciudades mexicanas son todas MXN
 */
const CURRENCIES = {
  cdmx: 'MXN', gdl: 'MXN', mty: 'MXN', puebla: 'MXN', merida: 'MXN',
  leon: 'MXN', chihuahua: 'MXN', tijuana: 'MXN', queretaro: 'MXN', toluca: 'MXN',
  'tren-maya': 'MXN', campeche: 'MXN', oaxaca: 'MXN', veracruz: 'MXN',
  villahermosa: 'MXN', morelia: 'MXN',
};

/**
 * Load a single city graph lazily
 * Caches the result to avoid repeated imports
 * @param {string} ciudad - City code
 * @returns {Promise<Object>} The city's graph object
 */
async function loadGrafo(ciudad) {
  const normalizedCity = ciudad.toLowerCase();

  // Return from cache if already loaded
  if (graphCache.has(normalizedCity)) {
    return graphCache.get(normalizedCity);
  }

  // Return null if city not found
  if (!GRAFO_PATHS[normalizedCity]) {
    return null;
  }

  // Load dynamically
  try {
    const grafoMod = await GRAFO_PATHS[normalizedCity]();
    const grafoKey = Object.keys(grafoMod)[0];
    const grafo = grafoMod[grafoKey] || grafoMod.default;

    // Cache for future use
    graphCache.set(normalizedCity, grafo);
    return grafo;
  } catch (error) {
    console.error(`Failed to load graph for city: ${normalizedCity}`, error);
    return null;
  }
}

/**
 * Get currency for a city
 * @param {string} ciudad - City slug
 * @returns {string} Currency code: 'MXN' | 'USD' | 'CAD'
 */
export function getCurrency(ciudad) {
  return CURRENCIES[ciudad] || 'MXN';
}

/**
 * Get country for a city
 * @param {string} ciudad - City slug
 * @returns {string|null} Country code: 'MX' | 'US' | 'CA' or null
 */
export function getCountry(ciudad) {
  const config = getCityConfig(ciudad);
  return config?.country || null;
}

/**
 * Get the graph for a specific city (async)
 * Lazy-loads the graph and caches it
 * @param {string} [ciudad] - Optional city code: 'cdmx' | 'gdl' | 'mty' | etc.
 * @returns {Promise<Object|null>} The city's graph object, or null if not found
 */
export async function getGrafo(ciudad) {
  if (!ciudad) {
    // Default to CDMX for backward compatibility
    return loadGrafo('cdmx');
  }
  return loadGrafo(ciudad);
}

/**
 * Detect which city a station belongs to (async)
 * Checks cached graphs or uses city config lookup
 * @param {string} slug - Station slug or city slug
 * @returns {Promise<string|null>} City code or null
 */
export async function detectCiudad(slug) {
  if (!slug) return null;

  // Check all cached graphs first
  for (const [city, graph] of graphCache.entries()) {
    if (graph[slug] && graph[slug].ciudad) {
      return graph[slug].ciudad;
    }
  }

  // Fallback: check if slug is a city code
  const config = getCityConfig(slug);
  if (config) return slug;

  // Try loading CDMX graph (most common case)
  const cdmxGrafo = await loadGrafo('cdmx');
  if (cdmxGrafo && cdmxGrafo[slug]) {
    return 'cdmx';
  }

  // Last resort: iterate all city graphs
  for (const cityCode of Object.keys(GRAFO_PATHS)) {
    if (cityCode === 'cdmx') continue; // Already checked
    const grafo = await loadGrafo(cityCode);
    if (grafo && grafo[slug]) {
      return cityCode;
    }
  }

  return null;
}

/**
 * Find the optimal metro route between two stations using BFS (async)
 * Minimizes transfers first, then total time
 * Lazy-loads only the required city graph
 * @param {string} origen - Origin station slug
 * @param {string} destino - Destination station slug
 * @param {string} [ciudad] - Optional city hint to narrow graph (auto-detected if omitted)
 * @returns {Promise<Object>} Route information including path, time, transfers, cost, etc.
 */
export async function findRoute(origen, destino, ciudad) {
  // Validate inputs
  if (!origen || !destino) {
    return {
      encontrada: false,
      pasos: [],
      tiempo_total: 0,
      transbordos: 0,
      costo: 0,
      lineas_usadas: [],
      alertas: ['Origen y destino son requeridos']
    };
  }

  // Resolve the graph to use
  let activeGrafo;
  if (ciudad) {
    activeGrafo = await loadGrafo(ciudad);
  } else {
    // Try to detect city from origin station slug
    // Load the city if we can determine it
    for (const cityCode of Object.keys(GRAFO_PATHS)) {
      const grafo = await loadGrafo(cityCode);
      if (grafo && grafo[origen]) {
        activeGrafo = grafo;
        break;
      }
    }
  }

  if (!activeGrafo) {
    return {
      encontrada: false,
      pasos: [],
      tiempo_total: 0,
      transbordos: 0,
      costo: 0,
      lineas_usadas: [],
      alertas: ['No se pudo cargar el gráfico de la ciudad']
    };
  }

  // Check if stations exist in the graph
  if (!activeGrafo[origen] || !activeGrafo[destino]) {
    return {
      encontrada: false,
      pasos: [],
      tiempo_total: 0,
      transbordos: 0,
      costo: 0,
      lineas_usadas: [],
      alertas: ['Una o ambas estaciones no existen']
    };
  }

  // Check for cross-city routes (simplified check)
  const origenCiudad = activeGrafo[origen]?.ciudad;
  const destinoCiudad = activeGrafo[destino]?.ciudad;

  if (origenCiudad && destinoCiudad && origenCiudad !== destinoCiudad) {
    return {
      encontrada: false,
      pasos: [],
      tiempo_total: 0,
      transbordos: 0,
      costo: 0,
      lineas_usadas: [],
      alertas: [`No hay conexión de metro entre ${origenCiudad.toUpperCase()} y ${destinoCiudad.toUpperCase()}. Selecciona estaciones de la misma ciudad para calcular tu ruta.`]
    };
  }

  const mejorRuta = findRouteInGraph(activeGrafo, origen, destino);

  if (!mejorRuta.encontrada) {
    return {
      encontrada: false,
      pasos: [],
      tiempo_total: 0,
      transbordos: 0,
      costo: 0,
      lineas_usadas: [],
      alertas: ['No hay ruta disponible entre estas estaciones']
    };
  }

  return buildRouteResponse(activeGrafo, mejorRuta, origenCiudad);
}

function buildRouteResponse(activeGrafo, mejorRuta, origenCiudad) {
  // Build steps from route
  const pasos = [];
  const lineasUsadas = new Set();
  let transbordo = 0;

  for (let i = 0; i < mejorRuta.ruta.length; i++) {
    const estacionSlug = mejorRuta.ruta[i];
    const estacionData = activeGrafo[estacionSlug];
    const linea = mejorRuta.lineas[i];

    lineasUsadas.add(linea);

    let accion = 'viaje';
    if (i === 0) {
      accion = 'inicio';
    } else if (i === mejorRuta.ruta.length - 1) {
      accion = 'destino';
    } else if (mejorRuta.lineas[i] !== mejorRuta.lineas[i - 1]) {
      accion = 'transbordo';
      transbordo++;
    }

    pasos.push({
      estacion: estacionSlug,
      nombre: estacionData.nombre,
      linea: linea,
      accion: accion
    });
  }

  // Calculate cost — city-aware base fares.
  // Si la ciudad no tiene tarifa oficial publicada (ej. morelia: teleférico
  // aún no opera), costo queda en null — NUNCA se inventa un precio.
  const ciudadRuta = origenCiudad;
  const tieneTarifa = Object.prototype.hasOwnProperty.call(BASE_FARES, ciudadRuta);
  let costo = tieneTarifa ? BASE_FARES[ciudadRuta] : null;

  // CDMX surcharges — separate fare systems
  const usesMexicable = lineasUsadas.has('MCR') || lineasUsadas.has('MCV');
  const usesTrenSuburbano = lineasUsadas.has('TS') || lineasUsadas.has('TS-AIFA');
  const usesTrenLigero = lineasUsadas.has('TL');
  const usesTrolebus11 = lineasUsadas.has('TB-11');
  if (costo !== null) {
    if (usesTrenLigero) {
      costo += 10;
    }
    if (usesMexicable) {
      costo += 9; // Mexicable fare is separate ($9 MXN Mexipase)
    }
    if (usesTrenSuburbano) {
      costo += 30; // Tren Suburbano $11-35 MXN, avg ~$30 from Buenavista
    }
    if (usesTrolebus11) {
      costo += 8; // Trolebús L11 Elevado $13 MXN, net difference from base
    }
    // Multi-line surcharge only for CDMX non-integrated systems
    if (ciudadRuta === 'cdmx' && !usesTrenLigero && !usesMexicable && !usesTrenSuburbano && !usesTrolebus11 && lineasUsadas.size > 1) {
      costo += (lineasUsadas.size - 1) * 3;
    }
    // GDL and MTY have unified fares — no extra charge for transfers
  }

  // Check for alerts
  const alertas = [];
  if (!tieneTarifa) {
    alertas.push('Tarifa oficial aún no publicada para este sistema. Costo: Por confirmarse.');
  }
  if (ciudadRuta === 'gdl') {
    if (lineasUsadas.has('MC') || lineasUsadas.has('MP')) {
      alertas.push('GDL: tarifa única $9.50 MXN con Tarjeta Mi Movilidad. Válido para Tren Ligero + Mi Macro.');
    } else {
      alertas.push('GDL: tarifa única $9.50 MXN con Tarjeta Mi Movilidad. Válido para Mi Tren + Mi Macro.');
    }
  }
  if (ciudadRuta === 'mty') {
    if (lineasUsadas.has('ecovia')) {
      alertas.push('MTY: tarifa $4.50 MXN con tarjeta Mi Pasaje. Transbordos Metrorrey ↔ Ecovía incluidos por 2 horas.');
    } else {
      alertas.push('MTY: tarifa $4.50 MXN con tarjeta Mi Pasaje. Transbordos incluidos por 2 horas.');
    }
  }
  if (usesTrenLigero) {
    alertas.push('La tarjeta Metro NO funciona en el Tren Ligero. Compra un boleto separado.');
  }
  if (usesMexicable) {
    alertas.push('El Mexicable usa tarjeta Mexipase ($9 MXN). No acepta boleto del Metro. Gratis con INAPAM.');
  }
  if (usesTrenSuburbano) {
    alertas.push('El Tren Suburbano requiere Tarjeta de Movilidad Integrada. Tarifa variable por distancia ($11-35 MXN).');
  }
  if (usesTrolebus11) {
    alertas.push('El Trolebús Elevado L11 cobra $13 MXN. Acepta Tarjeta de Movilidad Integrada.');
  }

  return {
    encontrada: true,
    pasos: pasos,
    tiempo_total: mejorRuta.tiempo,
    transbordos: transbordo,
    costo: costo,
    lineas_usadas: Array.from(lineasUsadas),
    alertas: alertas
  };
}

/**
 * Find an alternative route using a different first transfer (async)
 * @param {string} origen - Origin station slug
 * @param {string} destino - Destination station slug
 * @param {string} [ciudad] - Optional city hint
 * @returns {Promise<Object>} Alternative route information (same format as findRoute)
 */
export async function findAlternativeRoute(origen, destino, ciudad) {
  // Resolve the graph to use
  let activeGrafo;
  if (ciudad) {
    activeGrafo = await loadGrafo(ciudad);
  } else {
    // Try to detect city from origin station slug
    for (const cityCode of Object.keys(GRAFO_PATHS)) {
      const grafo = await loadGrafo(cityCode);
      if (grafo && grafo[origen]) {
        activeGrafo = grafo;
        break;
      }
    }
  }

  if (!origen || !destino || !activeGrafo || !activeGrafo[origen] || !activeGrafo[destino]) {
    return {
      encontrada: false,
      pasos: [],
      tiempo_total: 0,
      transbordos: 0,
      costo: 0,
      lineas_usadas: [],
      alertas: []
    };
  }

  // Get the primary route
  const rutaPrimaria = await findRoute(origen, destino, ciudad);
  if (!rutaPrimaria.encontrada) {
    return rutaPrimaria;
  }

  const estacionOrigen = activeGrafo[origen];
  if (!estacionOrigen || !estacionOrigen.adyacentes) {
    return {
      encontrada: false,
      pasos: [],
      tiempo_total: 0,
      transbordos: 0,
      costo: 0,
      lineas_usadas: [],
      alertas: []
    };
  }

  // Get the first transfer station from primary route
  let primerTransbordo = null;
  for (let i = 1; i < rutaPrimaria.pasos.length; i++) {
    if (rutaPrimaria.pasos[i].accion === 'transbordo') {
      primerTransbordo = rutaPrimaria.pasos[i].estacion;
      break;
    }
  }

  const origenCiudad = activeGrafo[origen]?.ciudad;

  // Find alternative routes that use different first transfer
  let mejorAlternativa = null;
  let mejorScore = { transbordos: Infinity, tiempo: Infinity };

  for (const conexion of estacionOrigen.adyacentes) {
    const proximaEstacion = conexion.slug;

    // Skip if this leads to the same first transfer
    if (proximaEstacion === primerTransbordo) {
      continue;
    }

    const routeFromAlternative = findRouteInGraph(activeGrafo, proximaEstacion, destino);
    if (!routeFromAlternative.encontrada) {
      continue;
    }

    const rutaCombinada = [origen, ...routeFromAlternative.ruta];
    const lineasCombinadas = [
      conexion.linea,
      conexion.linea,
      ...routeFromAlternative.lineas.slice(1)
    ];
    const tiempoTotal = routeFromAlternative.tiempo + conexion.tiempo;
    let transbordosTotal = 0;

    for (let i = 1; i < lineasCombinadas.length; i++) {
      if (lineasCombinadas[i] !== lineasCombinadas[i - 1]) {
        transbordosTotal++;
      }
    }

    if (
      transbordosTotal < mejorScore.transbordos ||
      (transbordosTotal === mejorScore.transbordos && tiempoTotal < mejorScore.tiempo)
    ) {
      mejorScore = { transbordos: transbordosTotal, tiempo: tiempoTotal };
      mejorAlternativa = buildRouteResponse(activeGrafo, {
        encontrada: true,
        ruta: rutaCombinada,
        lineas: lineasCombinadas,
        tiempo: tiempoTotal,
        transbordos: transbordosTotal
      }, origenCiudad);
    }
  }

  return mejorAlternativa || rutaPrimaria;
}

/**
 * Generate a URL-safe slug from two station names
 * @param {string} origen - Origin station slug
 * @param {string} destino - Destination station slug
 * @returns {string} URL-safe slug like "zocalo-a-estadio-azteca"
 */
export function generateRouteSlug(origen, destino, ciudad) {
  if (!origen || !destino) {
    return '';
  }

  // Remove special characters and normalize
  const sanitize = (str) => {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  const origenSlug = sanitize(origen);
  const destinoSlug = sanitize(destino);

  // Las 16 ciudades son MX — el conector siempre es "a" ("zocalo-a-tasquena").
  return `${origenSlug}-a-${destinoSlug}`;
}
