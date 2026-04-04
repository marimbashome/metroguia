import { getCityConfig } from '@/data/cities-config';

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
  nyc: () => import('@/data/nyc/grafo'),
  'los-angeles': () => import('@/data/los-angeles/grafo'),
  houston: () => import('@/data/houston/grafo'),
  atlanta: () => import('@/data/atlanta/grafo'),
  philadelphia: () => import('@/data/philadelphia/grafo'),
  seattle: () => import('@/data/seattle/grafo'),
  'san-francisco': () => import('@/data/san-francisco/grafo'),
  boston: () => import('@/data/boston/grafo'),
  miami: () => import('@/data/miami/grafo'),
  dallas: () => import('@/data/dallas/grafo'),
  'kansas-city': () => import('@/data/kansas-city/grafo'),
  denver: () => import('@/data/denver/grafo'),
  portland: () => import('@/data/portland/grafo'),
  sacramento: () => import('@/data/sacramento/grafo'),
  'salt-lake-city': () => import('@/data/salt-lake-city/grafo'),
  'washington-dc': () => import('@/data/washington-dc/grafo'),
  chicago: () => import('@/data/chicago/grafo'),
  'san-diego': () => import('@/data/san-diego/grafo'),
  minneapolis: () => import('@/data/minneapolis/grafo'),
  pittsburgh: () => import('@/data/pittsburgh/grafo'),
  baltimore: () => import('@/data/baltimore/grafo'),
  charlotte: () => import('@/data/charlotte/grafo'),
  phoenix: () => import('@/data/phoenix/grafo'),
  'st-louis': () => import('@/data/st-louis/grafo'),
  toronto: () => import('@/data/toronto/grafo'),
  vancouver: () => import('@/data/vancouver/grafo'),
  montreal: () => import('@/data/montreal/grafo'),
  calgary: () => import('@/data/calgary/grafo'),
  edmonton: () => import('@/data/edmonton/grafo'),
  ottawa: () => import('@/data/ottawa/grafo'),
  detroit: () => import('@/data/detroit/grafo'),
  cleveland: () => import('@/data/cleveland/grafo'),
  'las-vegas': () => import('@/data/las-vegas/grafo'),
  'san-jose': () => import('@/data/san-jose/grafo'),
  'new-orleans': () => import('@/data/new-orleans/grafo'),
  buffalo: () => import('@/data/buffalo/grafo'),
  honolulu: () => import('@/data/honolulu/grafo'),
  norfolk: () => import('@/data/norfolk/grafo'),
  jacksonville: () => import('@/data/jacksonville/grafo'),
  austin: () => import('@/data/austin/grafo'),
  cincinnati: () => import('@/data/cincinnati/grafo'),
  'el-paso': () => import('@/data/el-paso/grafo'),
  orlando: () => import('@/data/orlando/grafo'),
  'san-juan': () => import('@/data/san-juan/grafo'),
  tampa: () => import('@/data/tampa/grafo'),
  tucson: () => import('@/data/tucson/grafo'),
  'oklahoma-city': () => import('@/data/oklahoma-city/grafo'),
  nashville: () => import('@/data/nashville/grafo'),
  milwaukee: () => import('@/data/milwaukee/grafo'),
  newark: () => import('@/data/newark/grafo'),
  'kitchener-waterloo': () => import('@/data/kitchener-waterloo/grafo'),
  mississauga: () => import('@/data/mississauga/grafo'),
};

/**
 * Base fares for all cities (MXN for Mexico, USD for US, CAD for Canada)
 */
const BASE_FARES = {
  // Mexico (MXN)
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

  // United States (USD)
  nyc: 2.90,         // MTA Subway single ride $2.90 USD
  'los-angeles': 1.75, // LA Metro $1.75 USD
  houston: 1.25,     // METRO Houston $1.25 USD
  atlanta: 2.50,     // MARTA $2.50 USD
  philadelphia: 2.50, // SEPTA $2.50 USD
  seattle: 2.75,     // Sound Transit $2.75 USD
  'san-francisco': 2.15, // BART $2.15 USD (base fare)
  boston: 2.40,      // MBTA $2.40 USD
  miami: 2.25,       // Metromover / Tri-Rail $2.25 USD
  dallas: 2.50,      // DART $2.50 USD
  'kansas-city': 1.50, // KC Metro $1.50 USD
  denver: 3.00,
  portland: 2.50,
  sacramento: 2.50,
  'salt-lake-city': 2.50,
  'washington-dc': 2.00,
  chicago: 2.50,
  'san-diego': 2.50,
  minneapolis: 2.00,
  pittsburgh: 2.75,
  baltimore: 2.00,
  charlotte: 2.20,
  phoenix: 2.00,
  'st-louis': 2.50,

  // New US cities
  detroit: 1.50,
  cleveland: 2.50,
  'las-vegas': 5.00,
  'san-jose': 2.50,
  'new-orleans': 1.25,
  buffalo: 2.00,
  honolulu: 3.00,
  norfolk: 2.00,
  jacksonville: 0,    // JTA Skyway is FREE
  austin: 3.50,        // Capital MetroRail $3.50 USD
  cincinnati: 1.00,    // Cincinnati Connector $1.00 USD
  'el-paso': 1.50,     // El Paso Streetcar $1.50 USD
  orlando: 2.00,       // SunRail $2.00 USD
  'san-juan': 0.75,    // Tren Urbano $0.75 USD
  tampa: 2.50,         // TECO Streetcar $2.50 USD
  tucson: 1.50,        // Sun Link $1.50 USD
  'oklahoma-city': 0,  // OKC Streetcar is FREE
  nashville: 5.25,     // WeGo Star $5.25 USD
  milwaukee: 1.00,     // The Hop $1.00 USD
  newark: 2.10,        // Newark Light Rail $2.10 USD

  // Canada (CAD)
  toronto: 3.35,     // TTC Subway $3.35 CAD
  vancouver: 3.15,   // SkyTrain $3.15 CAD
  montreal: 3.75,    // STM Metro $3.75 CAD
  calgary: 3.60,     // CTrain $3.60 CAD
  edmonton: 3.50,    // ETS LRT $3.50 CAD
  ottawa: 3.75,      // O-Train $3.75 CAD
};

/**
 * Currency for all cities
 */
const CURRENCIES = {
  // Mexico
  cdmx: 'MXN', gdl: 'MXN', mty: 'MXN', puebla: 'MXN', merida: 'MXN',
  leon: 'MXN', chihuahua: 'MXN', tijuana: 'MXN', queretaro: 'MXN', toluca: 'MXN', 'tren-maya': 'MXN',
  // United States
  nyc: 'USD', 'los-angeles': 'USD', houston: 'USD', atlanta: 'USD',
  philadelphia: 'USD', seattle: 'USD', 'san-francisco': 'USD', boston: 'USD',
  miami: 'USD', dallas: 'USD', 'kansas-city': 'USD',
  denver: 'USD', portland: 'USD', sacramento: 'USD', 'salt-lake-city': 'USD',
  'washington-dc': 'USD', chicago: 'USD', 'san-diego': 'USD', minneapolis: 'USD',
  pittsburgh: 'USD', baltimore: 'USD', charlotte: 'USD', phoenix: 'USD', 'st-louis': 'USD',
  detroit: 'USD', cleveland: 'USD', 'las-vegas': 'USD', 'san-jose': 'USD',
  'new-orleans': 'USD', buffalo: 'USD', honolulu: 'USD', norfolk: 'USD', jacksonville: 'USD',
  austin: 'USD', cincinnati: 'USD', 'el-paso': 'USD', orlando: 'USD', 'san-juan': 'USD',
  tampa: 'USD', tucson: 'USD', 'oklahoma-city': 'USD', nashville: 'USD', milwaukee: 'USD', newark: 'USD',
  // Canada
  toronto: 'CAD', vancouver: 'CAD', montreal: 'CAD', calgary: 'CAD', edmonton: 'CAD', ottawa: 'CAD',
  'kitchener-waterloo': 'CAD', mississauga: 'CAD',
};

/**

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
 * City aliases for shorthand notation
 */
const CIUDAD_ALIAS = {
  la: 'los-angeles',
  sf: 'san-francisco',
};

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
      return CIUDAD_ALIAS[graph[slug].ciudad] || graph[slug].ciudad;
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

  // BFS to find optimal path
  const queue = [
    {
      estacion: origen,
      ruta: [origen],
      lineas: [activeGrafo[origen].lineas ? activeGrafo[origen].lineas[0] : '1'],
      tiempo: 0,
      transbordos: 0
    }
  ];

  const visitados = new Set([origen]);
  let mejorRuta = null;
  let mejorScore = { transbordos: Infinity, tiempo: Infinity };

  while (queue.length > 0) {
    const actual = queue.shift();

    if (actual.estacion === destino) {
      // Evaluate if this is a better route
      const score = {
        transbordos: actual.transbordos,
        tiempo: actual.tiempo
      };

      if (
        score.transbordos < mejorScore.transbordos ||
        (score.transbordos === mejorScore.transbordos && score.tiempo < mejorScore.tiempo)
      ) {
        mejorScore = score;
        mejorRuta = actual;
      }
      continue;
    }

    // Explore neighbors
    const estacionData = activeGrafo[actual.estacion];
    if (!estacionData || !estacionData.adyacentes) continue;

    for (const conexion of estacionData.adyacentes) {
      const { slug: proxima, tiempo: tiempoConexion, linea } = conexion;

      if (visitados.has(proxima)) continue;

      const nuevoTransbordo = actual.transbordos + (linea !== actual.lineas[actual.lineas.length - 1] ? 1 : 0);
      const nuevoTiempo = actual.tiempo + tiempoConexion;

      // Pruning: skip if clearly worse than best route found
      if (
        mejorRuta &&
        (nuevoTransbordo > mejorScore.transbordos ||
          (nuevoTransbordo === mejorScore.transbordos && nuevoTiempo > mejorScore.tiempo + 30))
      ) {
        continue;
      }

      visitados.add(proxima);
      queue.push({
        estacion: proxima,
        ruta: [...actual.ruta, proxima],
        lineas: [...actual.lineas, linea],
        tiempo: nuevoTiempo,
        transbordos: nuevoTransbordo
      });
    }
  }

  if (!mejorRuta) {
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

  // Calculate cost — city-aware base fares
  const ciudadRuta = origenCiudad;
  let costo = BASE_FARES[ciudadRuta] || BASE_FARES.cdmx;

  // CDMX surcharges — separate fare systems
  const usesMexicable = lineasUsadas.has('MCR') || lineasUsadas.has('MCV');
  const usesTrenSuburbano = lineasUsadas.has('TS') || lineasUsadas.has('TS-AIFA');
  const usesTrenLigero = lineasUsadas.has('TL');
  const usesTrolebus11 = lineasUsadas.has('TB-11');
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

  // Check for alerts
  const alertas = [];
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

  // Find alternative routes that use different first transfer
  let mejorAlternativa = null;
  let mejorScore = { transbordos: Infinity, tiempo: Infinity };

  for (const conexion of estacionOrigen.adyacentes) {
    const proximaEstacion = conexion.slug;

    // Skip if this leads to the same first transfer
    if (proximaEstacion === primerTransbordo) {
      continue;
    }

    // Try to find route from this alternative station to destination
    const routeFromAlternative = await findRoute(proximaEstacion, destino, ciudad);
    if (!routeFromAlternative.encontrada) {
      continue;
    }

    const transbordosTotal = routeFromAlternative.transbordos + 1;
    const tiempoTotal = routeFromAlternative.tiempo_total + conexion.tiempo;

    if (
      transbordosTotal < mejorScore.transbordos ||
      (transbordosTotal === mejorScore.transbordos && tiempoTotal < mejorScore.tiempo)
    ) {
      mejorScore = { transbordos: transbordosTotal, tiempo: tiempoTotal };

      // Reconstruct full path including origin
      mejorAlternativa = {
        ...routeFromAlternative,
        pasos: [
          {
            estacion: origen,
            nombre: estacionOrigen.nombre,
            linea: conexion.linea,
            accion: 'inicio'
          },
          ...routeFromAlternative.pasos
        ],
        tiempo_total: tiempoTotal,
        transbordos: transbordosTotal
      };
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

  const config = getCityConfig(ciudad);
  const connector = (config && (config.country === 'US' || config.country === 'CA')) ? 'to' : 'a';

  return `${origenSlug}-${connector}-${destinoSlug}`;
}
