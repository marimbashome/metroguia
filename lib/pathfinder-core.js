const PENAL_TRANSBORDO_MIN = 5; // Ajustable; estandar transit ~5-10 min.

function compareScores(a, b) {
  if (a.costo !== b.costo) {
    return a.costo - b.costo;
  }
  if (a.transbordos !== b.transbordos) {
    return a.transbordos - b.transbordos;
  }
  return a.tiempo - b.tiempo;
}

function makeStateKey(estacion, lineaActual) {
  return `${estacion}::${lineaActual === null ? '__START__' : lineaActual}`;
}

function pushHeap(heap, entry) {
  heap.push(entry);
  let index = heap.length - 1;

  while (index > 0) {
    const parentIndex = Math.floor((index - 1) / 2);
    if (compareScores(heap[parentIndex], heap[index]) <= 0) {
      break;
    }
    [heap[parentIndex], heap[index]] = [heap[index], heap[parentIndex]];
    index = parentIndex;
  }
}

function popHeap(heap) {
  if (heap.length === 0) return null;
  if (heap.length === 1) return heap.pop();

  const top = heap[0];
  heap[0] = heap.pop();

  let index = 0;
  while (true) {
    const left = index * 2 + 1;
    const right = left + 1;
    let smallest = index;

    if (left < heap.length && compareScores(heap[left], heap[smallest]) < 0) {
      smallest = left;
    }
    if (right < heap.length && compareScores(heap[right], heap[smallest]) < 0) {
      smallest = right;
    }
    if (smallest === index) {
      break;
    }

    [heap[index], heap[smallest]] = [heap[smallest], heap[index]];
    index = smallest;
  }

  return top;
}

function reconstructRoute(grafo, origen, destino, finalStateKey, parents, stateInfo) {
  const ruta = [];
  const lineas = [];
  let currentKey = finalStateKey;

  while (currentKey) {
    const currentState = stateInfo.get(currentKey);
    if (!currentState) break;

    ruta.push(currentState.estacion);
    lineas.push(currentState.lineaActual);
    currentKey = parents.get(currentKey) || null;
  }

  ruta.reverse();
  lineas.reverse();

  if (lineas.length === 0) {
    lineas.push(grafo[origen]?.lineas?.[0] || '1');
  } else if (lineas[0] === null) {
    lineas[0] = lineas[1] || grafo[origen]?.lineas?.[0] || '1';
  }

  return {
    encontrada: true,
    ruta,
    lineas,
    tiempo: stateInfo.get(finalStateKey).tiempo,
    transbordos: stateInfo.get(finalStateKey).transbordos,
  };
}

export function findRouteInGraph(grafo, origen, destino) {
  if (!grafo || !origen || !destino || !grafo[origen] || !grafo[destino]) {
    return {
      encontrada: false,
      ruta: [],
      lineas: [],
      tiempo: 0,
      transbordos: 0,
    };
  }

  if (origen === destino) {
    return {
      encontrada: true,
      ruta: [origen],
      lineas: [grafo[origen].lineas?.[0] || '1'],
      tiempo: 0,
      transbordos: 0,
    };
  }

  const startKey = makeStateKey(origen, null);
  const heap = [];
  const bestWeightedScores = new Map([[startKey, { costo: 0, transbordos: 0, tiempo: 0 }]]);
  const parents = new Map([[startKey, null]]);
  const stateInfo = new Map([[
    startKey,
    { estacion: origen, lineaActual: null, costo: 0, transbordos: 0, tiempo: 0 },
  ]]);

  pushHeap(heap, {
    key: startKey,
    estacion: origen,
    lineaActual: null,
    costo: 0,
    transbordos: 0,
    tiempo: 0,
  });

  while (heap.length > 0) {
    const current = popHeap(heap);
    const bestForCurrent = bestWeightedScores.get(current.key);

    if (
      !bestForCurrent ||
      bestForCurrent.costo !== current.costo ||
      bestForCurrent.transbordos !== current.transbordos ||
      bestForCurrent.tiempo !== current.tiempo
    ) {
      continue;
    }

    if (current.estacion === destino) {
      return reconstructRoute(grafo, origen, destino, current.key, parents, stateInfo);
    }

    const adyacentes = grafo[current.estacion]?.adyacentes || [];
    for (const conexion of adyacentes) {
      const isTransfer = current.lineaActual !== null && current.lineaActual !== conexion.linea;
      const nextLine = conexion.linea;
      const nextStation = conexion.slug;
      const nextTransfers = current.transbordos + (isTransfer ? 1 : 0);
      const nextTime = current.tiempo + conexion.tiempo;
      const nextCost = current.costo + conexion.tiempo + (isTransfer ? PENAL_TRANSBORDO_MIN : 0);
      const nextKey = makeStateKey(nextStation, nextLine);
      const nextScore = { costo: nextCost, transbordos: nextTransfers, tiempo: nextTime };
      const previousBest = bestWeightedScores.get(nextKey);

      if (previousBest && compareScores(previousBest, nextScore) <= 0) {
        continue;
      }

      bestWeightedScores.set(nextKey, nextScore);
      parents.set(nextKey, current.key);
      stateInfo.set(nextKey, {
        estacion: nextStation,
        lineaActual: nextLine,
        costo: nextCost,
        transbordos: nextTransfers,
        tiempo: nextTime,
      });

      pushHeap(heap, {
        key: nextKey,
        estacion: nextStation,
        lineaActual: nextLine,
        costo: nextCost,
        transbordos: nextTransfers,
        tiempo: nextTime,
      });
    }
  }

  return {
    encontrada: false,
    ruta: [],
    lineas: [],
    tiempo: 0,
    transbordos: 0,
  };
}
