import { grafo } from '@/data/grafo';
import { grafoGDL } from '@/data/gdl/grafo';
import { grafoMTY } from '@/data/mty/grafo';
import { grafoNYC } from "@/data/nyc/grafo";
import { grafoLA } from "@/data/los-angeles/grafo";
import { grafoHOU } from "@/data/houston/grafo";
import { grafoAtlanta } from "@/data/atlanta/grafo";
import { grafoPhiladelphia } from "@/data/philadelphia/grafo";
import { grafoSeattle } from "@/data/seattle/grafo";
import { grafoSF } from "@/data/san-francisco/grafo";
import { grafoBoston } from "@/data/boston/grafo";
import { grafoMiami } from "@/data/miami/grafo";
import { grafoDallas } from "@/data/dallas/grafo";
import { grafoKansasCity } from "@/data/kansas-city/grafo";
import { grafoToronto } from "@/data/toronto/grafo";
import { grafoVancouver } from "@/data/vancouver/grafo";
import { grafoDenver } from "@/data/denver/grafo";
import { grafoPortland } from "@/data/portland/grafo";
import { grafoSacramento } from "@/data/sacramento/grafo";
import { grafoSaltLakeCity } from "@/data/salt-lake-city/grafo";
import { grafoDC } from "@/data/washington-dc/grafo";
import { grafoChicago } from "@/data/chicago/grafo";
import { grafoSanDiego } from "@/data/san-diego/grafo";
import { grafoMinneapolis } from "@/data/minneapolis/grafo";
import { grafoPittsburgh } from "@/data/pittsburgh/grafo";
import { grafoBaltimore } from "@/data/baltimore/grafo";
import { grafoCharlotte } from "@/data/charlotte/grafo";
import { grafoPhoenix } from "@/data/phoenix/grafo";
import { grafoStLouis } from "@/data/st-louis/grafo";
import { grafoMontreal } from "@/data/montreal/grafo";
import { grafoCalgary } from "@/data/calgary/grafo";
import { grafoEdmonton } from "@/data/edmonton/grafo";
import { grafoOttawa } from "@/data/ottawa/grafo";
import { grafoDetroit } from "@/data/detroit/grafo";
import { grafoCleveland } from "@/data/cleveland/grafo";
import { grafoLasVegas } from "@/data/las-vegas/grafo";
import { grafoSanJose } from "@/data/san-jose/grafo";
import { grafoNewOrleans } from "@/data/new-orleans/grafo";
import { grafoBuffalo } from "@/data/buffalo/grafo";
import { grafoHonolulu } from "@/data/honolulu/grafo";
import { grafoNorfolk } from "@/data/norfolk/grafo";
import { getCityConfig } from '@/data/cities-config';

/**
 * Combined graph merging all cities into a single lookup.
 * Each city's stations are prefixed/namespaced by unique slugs so there are no collisions.
 * The pathfinder validates same-city routing automatically.
 */
const grafoCombinado = { ...grafo, ...grafoGDL, ...grafoMTY, ...grafoNYC, ...grafoLA, ...grafoHOU, ...grafoAtlanta, ...grafoPhiladelphia, ...grafoSeattle, ...grafoSF, ...grafoBoston, ...grafoMiami, ...grafoDallas, ...grafoKansasCity, ...grafoToronto, ...grafoVancouver, ...grafoDenver, ...grafoPortland, ...grafoSacramento, ...grafoSaltLakeCity, ...grafoDC, ...grafoChicago, ...grafoSanDiego, ...grafoMinneapolis, ...grafoPittsburgh, ...grafoBaltimore, ...grafoCharlotte, ...grafoPhoenix, ...grafoStLouis, ...grafoMontreal, ...grafoCalgary, ...grafoEdmonton, ...grafoOttawa, ...grafoDetroit, ...grafoCleveland, ...grafoLasVegas, ...grafoSanJose, ...grafoNewOrleans, ...grafoBuffalo, ...grafoHonolulu, ...grafoNorfolk };

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
  'new-orleans': 'USD', buffalo: 'USD', honolulu: 'USD', norfolk: 'USD',
  // Canada
  toronto: 'CAD', vancouver: 'CAD', montreal: 'CAD', calgary: 'CAD', edmonton: 'CAD', ottawa: 'CAD',
};

/**

/**
 * Map of city codes to their respective graphs
 */
const GRAFO_MAP = {
  cdmx: grafo,
  gdl: grafoGDL,
  mty: grafoMTY,
  nyc: grafoNYC,
  'los-angeles': grafoLA,
  houston: grafoHOU,
  atlanta: grafoAtlanta,
  philadelphia: grafoPhiladelphia,
  seattle: grafoSeattle,
  'san-francisco': grafoSF,
  boston: grafoBoston,
  miami: grafoMiami,
  dallas: grafoDallas,
  'kansas-city': grafoKansasCity,
  denver: grafoDenver,
  portland: grafoPortland,
  sacramento: grafoSacramento,
  'salt-lake-city': grafoSaltLakeCity,
  'washington-dc': grafoDC,
  chicago: grafoChicago,
  'san-diego': grafoSanDiego,
  minneapolis: grafoMinneapolis,
  pittsburgh: grafoPittsburgh,
  baltimore: grafoBaltimore,
  charlotte: grafoCharlotte,
  phoenix: grafoPhoenix,
  'st-louis': grafoStLouis,
  toronto: grafoToronto,
  vancouver: grafoVancouver,
};

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
 * Get the graph for a specific city, or the full combined graph
 * @param {string} [ciudad] - Optional city filter: 'cdmx' | 'gdl' | 'mty' | undefined for all
 * @returns {Object} The graph object
 */
export function getGrafo(ciudad) {
  if (!ciudad) return grafoCombinado;
  return GRAFO_MAP[ciudad.toLowerCase()] || grafoCombinado;
}

/**
 * Detect which city a station belongs to
 * Supports: cdmx, gdl, mty (Mexico), nyc, los-angeles, houston, atlanta, philadelphia,
 * seattle, san-francisco, boston, miami, dallas, kansas-city (US), toronto, vancouver (CA)
 * @param {string} slug - Station slug or city slug
 * @returns {string|null} City code or null
 */
export function detectCiudad(slug) {
  if (!slug) return null;
  const node = grafoCombinado[slug];
  if (node && node.ciudad) {
    return CIUDAD_ALIAS[node.ciudad] || node.ciudad;
  }
  const config = getCityConfig(slug);
  if (config) return slug;
  return null;
}

/**
 * Find the optimal metro route between two stations using BFS
 * Minimizes transfers first, then total time
 * @param {string} origen - Origin station slug
 * @param {string} destino - Destination station slug
 * @param {string} [ciudad] - Optional city hint to narrow graph (auto-detected if omitted)
 * @returns {Object} Route information including path, time, transfers, cost, etc.
 */
export function findRoute(origen, destino, ciudad) {
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
  const activeGrafo = ciudad ? getGrafo(ciudad) : grafoCombinado;

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
 * Find an alternative route using a different first transfer
 * @param {string} origen - Origin station slug
 * @param {string} destino - Destination station slug
 * @param {string} [ciudad] - Optional city hint
 * @returns {Object} Alternative route information (same format as findRoute)
 */
export function findAlternativeRoute(origen, destino, ciudad) {
  const activeGrafo = ciudad ? getGrafo(ciudad) : grafoCombinado;

  if (!origen || !destino || !activeGrafo[origen] || !activeGrafo[destino]) {
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
  const rutaPrimaria = findRoute(origen, destino, ciudad);
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
    const routeFromAlternative = findRoute(proximaEstacion, destino, ciudad);
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
