import { grafo } from '@/data/grafo';

/**
 * Find the optimal metro route between two stations using BFS
 * Minimizes transfers first, then total time
 * @param {string} origen - Origin station slug
 * @param {string} destino - Destination station slug
 * @returns {Object} Route information including path, time, transfers, cost, etc.
 */
export function findRoute(origen, destino) {
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

  // Check if stations exist in the graph
  if (!grafo[origen] || !grafo[destino]) {
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
  const origenCiudad = grafo[origen]?.ciudad;
  const destinoCiudad = grafo[destino]?.ciudad;
  
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
      lineas: [grafo[origen].lineas ? grafo[origen].lineas[0] : '1'],
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
    const estacionData = grafo[actual.estacion];
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
    const estacionData = grafo[estacionSlug];
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

  // Calculate cost
  let costo = 5; // Base metro fare
  if (lineasUsadas.has('TL')) {
    costo += 10;
  } else if (lineasUsadas.size > 1) {
    costo += (lineasUsadas.size - 1) * 3;
  }

  // Check for alerts
  const alertas = [];
  if (lineasUsadas.has('TL')) {
    alertas.push('La tarjeta Metro NO funciona en el Tren Ligero. Compra un boleto separado.');
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
 * @returns {Object} Alternative route information (same format as findRoute)
 */
export function findAlternativeRoute(origen, destino) {
  if (!origen || !destino || !grafo[origen] || !grafo[destino]) {
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
  const rutaPrimaria = findRoute(origen, destino);
  if (!rutaPrimaria.encontrada) {
    return rutaPrimaria;
  }

  const estacionOrigen = grafo[origen];
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
    const routeFromAlternative = findRoute(proximaEstacion, destino);
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
export function generateRouteSlug(origen, destino) {
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

  return `${origenSlug}-a-${destinoSlug}`;
}