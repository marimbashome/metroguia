import { findRouteInGraph } from '../lib/pathfinder-core.js';

const PENAL_TRANSBORDO_MIN = 5;

function compareScores(a, b) {
  if (a.costo !== b.costo) {
    return a.costo - b.costo;
  }
  if (a.transbordos !== b.transbordos) {
    return a.transbordos - b.transbordos;
  }
  return a.tiempo - b.tiempo;
}

function pushQueue(queue, entry) {
  queue.push(entry);
  queue.sort(compareScores);
}

function makeStateKey(estacion, linea) {
  return `${estacion}::${linea === null ? '__START__' : linea}`;
}

function exactOracle(grafo, origen, destino) {
  if (!grafo[origen] || !grafo[destino]) {
    return { encontrada: false, costo: 0, tiempo: 0, transbordos: 0 };
  }

  if (origen === destino) {
    return { encontrada: true, costo: 0, tiempo: 0, transbordos: 0 };
  }

  const startKey = makeStateKey(origen, null);
  const queue = [{ estacion: origen, lineaActual: null, costo: 0, transbordos: 0, tiempo: 0, key: startKey }];
  const best = new Map([[startKey, { costo: 0, transbordos: 0, tiempo: 0 }]]);

  while (queue.length > 0) {
    const current = queue.shift();
    const known = best.get(current.key);
    if (
      !known ||
      known.costo !== current.costo ||
      known.transbordos !== current.transbordos ||
      known.tiempo !== current.tiempo
    ) {
      continue;
    }

    if (current.estacion === destino) {
      return {
        encontrada: true,
        costo: current.costo,
        tiempo: current.tiempo,
        transbordos: current.transbordos,
      };
    }

    const adyacentes = grafo[current.estacion]?.adyacentes || [];
    for (const conexion of adyacentes) {
      const isTransfer = current.lineaActual !== null && current.lineaActual !== conexion.linea;
      const nextTransfers = current.transbordos + (isTransfer ? 1 : 0);
      const nextTime = current.tiempo + conexion.tiempo;
      const nextCost = current.costo + conexion.tiempo + (isTransfer ? PENAL_TRANSBORDO_MIN : 0);
      const nextKey = makeStateKey(conexion.slug, conexion.linea);
      const nextScore = { costo: nextCost, transbordos: nextTransfers, tiempo: nextTime };
      const previous = best.get(nextKey);

      if (previous && compareScores(previous, nextScore) <= 0) {
        continue;
      }

      best.set(nextKey, nextScore);
      pushQueue(queue, {
        estacion: conexion.slug,
        lineaActual: conexion.linea,
        costo: nextCost,
        transbordos: nextTransfers,
        tiempo: nextTime,
        key: nextKey,
      });
    }
  }

  return { encontrada: false, costo: 0, tiempo: 0, transbordos: 0 };
}

async function loadNamedGraph(modulePath) {
  const mod = await import(modulePath);
  const exportName = Object.keys(mod)[0];
  return { exportName, grafo: mod[exportName] };
}

function buildPairs(slugs) {
  const total = Math.min(40, slugs.length);
  const pairs = [];

  for (let i = 0; i < total; i++) {
    const origen = slugs[i];
    let destino = slugs[(i * 7 + 13) % slugs.length];

    if (origen === destino) {
      destino = slugs[(i * 7 + 14) % slugs.length];
    }

    pairs.push([origen, destino]);
  }

  return pairs;
}

const cityModules = [
  ['cdmx', '../data/grafo.js'],
  ['gdl', '../data/gdl/grafo.js'],
  ['mty', '../data/mty/grafo.js'],
  ['nyc', '../data/nyc/grafo.js'],
  ['puebla', '../data/puebla/grafo.js'],
];

const cityGraphs = new Map();
for (const [city, modulePath] of cityModules) {
  const loaded = await loadNamedGraph(modulePath);
  cityGraphs.set(city, loaded.grafo);
}

const failures = [];
let totalCases = 0;
let passCases = 0;

function weightedCost(routeLike) {
  return routeLike.tiempo + PENAL_TRANSBORDO_MIN * routeLike.transbordos;
}

for (const [city, grafo] of cityGraphs.entries()) {
  const slugs = Object.keys(grafo).sort();
  const pairs = buildPairs(slugs);

  for (const [origen, destino] of pairs) {
    const oracle = exactOracle(grafo, origen, destino);
    const core = findRouteInGraph(grafo, origen, destino);

    if (!oracle.encontrada) {
      if (core.encontrada) {
        failures.push({
          city,
          origen,
          destino,
          core,
          oracle,
          reason: 'core encontro ruta y el oraculo no',
        });
      }
      continue;
    }

    totalCases += 1;

    const coreCost = core.encontrada ? weightedCost(core) : Infinity;
    const oracleCost = oracle.costo;

    if (core.encontrada && coreCost === oracleCost) {
      passCases += 1;
      continue;
    }

    failures.push({
      city,
      origen,
      destino,
      core,
      oracle,
      reason: 'mismatch costo ponderado',
    });
  }
}

const auditCases = [
  ['cdmx', 'observatorio', 'balderas'],
  ['gdl', 'gdl-auditorio', 'periferico-sur'],
  ['nyc', 'nyc-1-av', 'nyc-103-st'],
];

for (const [city, origen, destino] of auditCases) {
  const grafo = cityGraphs.get(city);
  if (!grafo?.[origen] || !grafo?.[destino]) {
    console.log(`AUDIT ${city} ${origen} -> ${destino}: slug no existe`);
    continue;
  }

  const core = findRouteInGraph(grafo, origen, destino);
  const oracle = exactOracle(grafo, origen, destino);
  console.log(
    `AUDIT ${city} ${origen} -> ${destino}: core=${core.tiempo} min, ${core.transbordos} transbordos; oraculo=${oracle.tiempo} min, ${oracle.transbordos} transbordos`
  );

  if (city === 'cdmx' && origen === 'observatorio' && destino === 'balderas' && core.tiempo > 40) {
    failures.push({
      city,
      origen,
      destino,
      core,
      oracle,
      reason: 'anti-regresion observatorio->balderas: tiempo > 40 min',
    });
  }
}

console.log(`TOTAL ${totalCases}`);
console.log(`PASS ${passCases}`);
console.log(`FAIL ${failures.length}`);

for (const failure of failures) {
  const coreText = failure.core.encontrada
    ? `${failure.core.tiempo} min, ${failure.core.transbordos} transbordos, costo=${weightedCost(failure.core)}`
    : 'sin ruta';
  const oracleText = failure.oracle.encontrada
    ? `${failure.oracle.tiempo} min, ${failure.oracle.transbordos} transbordos, costo=${failure.oracle.costo}`
    : 'sin ruta';

  console.log(
    `FAIL ${failure.city} ${failure.origen} -> ${failure.destino}: core=${coreText}; oraculo=${oracleText}; ${failure.reason}`
  );
}

if (failures.length > 0) {
  process.exit(1);
}
