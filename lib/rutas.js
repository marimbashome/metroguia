// =============================================================
// MetroGuia.mx — lib/rutas.js
// Route-finding algorithms and utilities for metro navigation
// Uses BFS to find shortest paths between stations
// =============================================================

export const COSTO_METRO = 5; // MXN per journey

/**
 * Build an adjacency graph from lineas-detalle data
 * Returns { [estacionSlug]: [{ estacion, linea, lineColor, lineNombre }] }
 */
export function buildGraph(lineasDetalle) {
  const graph = {};

  Object.values(lineasDetalle).forEach((linea) => {
    const { estaciones, id, color, colorNombre } = linea;

    // Connect consecutive stations on this line
    for (let i = 0; i < estaciones.length - 1; i++) {
      const current = estaciones[i].slug;
      const next = estaciones[i + 1].slug;

      if (!graph[current]) graph[current] = [];
      if (!graph[next]) graph[next] = [];

      // Avoid duplicate edges
      const alreadyCurrent = graph[current].some(e => e.estacion === next && e.linea === id);
      if (!alreadyCurrent) {
        graph[current].push({
          estacion: next,
          linea: id,
          lineColor: color,
          lineNombre: colorNombre,
        });
      }

      const alreadyNext = graph[next].some(e => e.estacion === current && e.linea === id);
      if (!alreadyNext) {
        graph[next].push({
          estacion: current,
          linea: id,
          lineColor: color,
          lineNombre: colorNombre,
        });
      }
    }
  });

  return graph;
}

/**
 * Build a map of { [estacionSlug]: { nombre, lineas: [...] } }
 * for quick lookups
 */
export function buildEstacionesMap(estaciones) {
  const map = {};
  estaciones.forEach((est) => {
    if (!map[est.slug]) {
      map[est.slug] = { nombre: est.nombre, lineas: [] };
    }
    if (!map[est.slug].lineas.includes(est.linea)) {
      map[est.slug].lineas.push(est.linea);
    }
  });
  return map;
}

/**
 * Find shortest path using BFS
 * Returns array of slugs: [originSlug, ..., destSlug] or null if no path
 */
export function findRoute(graph, originSlug, destSlug) {
  if (!graph[originSlug] || !graph[destSlug]) return null;
  if (originSlug === destSlug) return null;

  const visited = new Set();
  const queue = [[originSlug]];
  visited.add(originSlug);

  while (queue.length > 0) {
    const path = queue.shift();
    const current = path[path.length - 1];

    if (current === destSlug) {
      return path;
    }

    if (graph[current]) {
      const neighbors = graph[current].map((edge) => edge.estacion);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push([...path, neighbor]);
        }
      }
    }
  }

  return null;
}

/**
 * Convert a path (array of slugs) into segments with line info
 * Each segment is one continuous ride on the same line
 */
export function formatSegments(path, estacionesMap, lineasDetalle) {
  if (!path || path.length < 2) return [];

  const segments = [];
  let currentSegment = null;

  // Helper to find which line connects two consecutive stations
  function findConnectingLine(slugA, slugB) {
    for (const linea of Object.values(lineasDetalle)) {
      const slugs = linea.estaciones.map((e) => e.slug);
      const idxA = slugs.indexOf(slugA);
      const idxB = slugs.indexOf(slugB);
      if (idxA !== -1 && idxB !== -1 && Math.abs(idxA - idxB) === 1) {
        return {
          linea: linea.id,
          lineColor: linea.color,
          lineNombre: linea.colorNombre,
        };
      }
    }
    return null;
  }

  // Build segments by detecting line changes
  for (let i = 0; i < path.length - 1; i++) {
    const from = path[i];
    const to = path[i + 1];
    const lineInfo = findConnectingLine(from, to);

    if (!lineInfo) continue;

    // Start new segment if this is the first or line changed
    if (!currentSegment || currentSegment.linea !== lineInfo.linea) {
      if (currentSegment) {
        segments.push(currentSegment);
      }
      currentSegment = {
        linea: lineInfo.linea,
        lineColor: lineInfo.lineColor,
        lineNombre: lineInfo.lineNombre,
        desdeSlug: from,
        desde: estacionesMap[from]?.nombre || from,
        hastaSlug: to,
        hasta: estacionesMap[to]?.nombre || to,
        estaciones: [
          estacionesMap[from]?.nombre || from,
          estacionesMap[to]?.nombre || to,
        ],
        numEstaciones: 2,
      };
    } else {
      // Continue on same line
      currentSegment.hastaSlug = to;
      currentSegment.hasta = estacionesMap[to]?.nombre || to;
      currentSegment.estaciones.push(estacionesMap[to]?.nombre || to);
      currentSegment.numEstaciones += 1;
    }
  }

  if (currentSegment) {
    segments.push(currentSegment);
  }

  return segments;
}

/**
 * Estimate time based on segments
 * ~2.5 min per station + 5 min per transfer
 */
export function estimateTime(segments) {
  if (!segments || segments.length === 0) {
    return { minutos: 0, transbordos: 0 };
  }

  let minutos = 0;
  segments.forEach((seg) => {
    minutos += (seg.numEstaciones - 1) * 2.5;
  });

  const transbordos = segments.length - 1;
  minutos += transbordos * 5;

  return {
    minutos: Math.round(minutos),
    transbordos,
  };
}
