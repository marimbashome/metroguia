// =============================================================
// MetroGuia.mx — lib/rutas.js
// Motor de rutas: BFS para encontrar caminos entre estaciones
// =============================================================

export const COSTO_METRO = 5; // MXN por viaje (2026)

/**
 * Construye grafo de adyacencia desde lineas-detalle.js
 * Retorna { [slug]: [{ estacion, linea, lineColor, lineNombre }] }
 */
export function buildGraph(lineasDetalle) {
  const graph = {};

  Object.values(lineasDetalle).forEach((linea) => {
    const { estaciones, id, color, colorNombre } = linea;

    for (let i = 0; i < estaciones.length - 1; i++) {
      const current = estaciones[i].slug;
      const next = estaciones[i + 1].slug;

      if (!graph[current]) graph[current] = [];
      if (!graph[next]) graph[next] = [];

      const alreadyCurrent = graph[current].some(e => e.estacion === next && e.linea === id);
      if (!alreadyCurrent) {
        graph[current].push({ estacion: next, linea: id, lineColor: color, lineNombre: colorNombre });
      }

      const alreadyNext = graph[next].some(e => e.estacion === current && e.linea === id);
      if (!alreadyNext) {
        graph[next].push({ estacion: current, linea: id, lineColor: color, lineNombre: colorNombre });
      }
    }
  });

  return graph;
}

/**
 * Mapa rápido { [slug]: { nombre, lineas[] } }
 */
export function buildEstacionesMap(estaciones) {
  const map = {};
  estaciones.forEach((est) => {
    if (!map[est.slug]) map[est.slug] = { nombre: est.nombre, lineas: [] };
    if (!map[est.slug].lineas.includes(est.linea)) map[est.slug].lineas.push(est.linea);
  });
  return map;
}

/**
 * BFS — ruta más corta entre dos slugs
 * Retorna array de slugs o null si no hay camino
 */
export function findRoute(graph, originSlug, destSlug) {
  if (!graph[originSlug] || !graph[destSlug]) return null;
  if (originSlug === destSlug) return null;

  const visited = new Set([originSlug]);
  const queue = [[originSlug]];

  while (queue.length > 0) {
    const path = queue.shift();
    const current = path[path.length - 1];
    if (current === destSlug) return path;

    for (const edge of (graph[current] || [])) {
      if (!visited.has(edge.estacion)) {
        visited.add(edge.estacion);
        queue.push([...path, edge.estacion]);
      }
    }
  }
  return null;
}

/**
 * Convierte el path de slugs en segmentos por línea
 * Cada segmento = tramo continuo en la misma línea
 */
export function formatSegments(path, estacionesMap, lineasDetalle) {
  if (!path || path.length < 2) return [];

  function findConnectingLine(slugA, slugB) {
    for (const linea of Object.values(lineasDetalle)) {
      const slugs = linea.estaciones.map((e) => e.slug);
      const idxA = slugs.indexOf(slugA);
      const idxB = slugs.indexOf(slugB);
      if (idxA !== -1 && idxB !== -1 && Math.abs(idxA - idxB) === 1) {
        return { linea: linea.id, lineColor: linea.color, lineNombre: linea.colorNombre };
      }
    }
    return null;
  }

  const segments = [];
  let current = null;

  for (let i = 0; i < path.length - 1; i++) {
    const from = path[i];
    const to = path[i + 1];
    const lineInfo = findConnectingLine(from, to);
    if (!lineInfo) continue;

    if (!current || current.linea !== lineInfo.linea) {
      if (current) segments.push(current);
      current = {
        linea: lineInfo.linea, lineColor: lineInfo.lineColor, lineNombre: lineInfo.lineNombre,
        desdeSlug: from, desde: estacionesMap[from]?.nombre || from,
        hastaSlug: to, hasta: estacionesMap[to]?.nombre || to,
        estaciones: [estacionesMap[from]?.nombre || from, estacionesMap[to]?.nombre || to],
        numEstaciones: 2,
      };
    } else {
      current.hastaSlug = to;
      current.hasta = estacionesMap[to]?.nombre || to;
      current.estaciones.push(estacionesMap[to]?.nombre || to);
      current.numEstaciones += 1;
    }
  }
  if (current) segments.push(current);
  return segments;
}

/**
 * Estima tiempo: ~2.5 min/estación + 5 min/transbordo
 */
export function estimateTime(segments) {
  if (!segments?.length) return { minutos: 0, transbordos: 0 };
  let minutos = segments.reduce((acc, seg) => acc + (seg.numEstaciones - 1) * 2.5, 0);
  const transbordos = segments.length - 1;
  minutos += transbordos * 5;
  return { minutos: Math.round(minutos), transbordos };
}
