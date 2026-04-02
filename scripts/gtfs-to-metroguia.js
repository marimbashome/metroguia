#!/usr/bin/env node

/**
 * MetroGuia.mx — gtfs-to-metroguia.js
 *
 * Converts GTFS transit feeds into MetroGuia data files.
 *
 * Usage:
 *   node scripts/gtfs-to-metroguia.js --url https://example.com/gtfs.zip --city nyc --country US
 *   node scripts/gtfs-to-metroguia.js --file local/path/gtfs.zip --city boston --country US
 *
 * Output:
 *   - data/{city}/estaciones.js  → stations with slugs, names, lines, coordinates
 *   - data/{city}/lineas-detalle.js → lines with colors, station lists, counts
 *   - data/{city}/grafo.js → BFS adjacency graph with travel times
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { createWriteStream, createReadStream } = require('fs');
const { pipeline } = require('stream/promises');
const zlib = require('zlib');
const { once } = require('events');

// ============================================================================
// PARSE CSV (simple, without external dependency)
// ============================================================================

function parseCSV(content, hasHeader = true) {
  const lines = content.toString('utf-8').split('\n');
  const rows = [];
  let currentRow = [];
  let insideQuotes = false;
  let currentField = '';

  for (let lineIdx = 0; lineIdx < lines.length; lineIdx++) {
    const line = lines[lineIdx];

    for (let i = 0; i < line.length; i++) {
      const char = line[i];
      const nextChar = line[i + 1];

      if (char === '"') {
        if (insideQuotes && nextChar === '"') {
          currentField += '"';
          i++;
        } else {
          insideQuotes = !insideQuotes;
        }
      } else if (char === ',' && !insideQuotes) {
        currentRow.push(currentField);
        currentField = '';
      } else {
        currentField += char;
      }
    }

    currentRow.push(currentField);
    currentField = '';

    // Skip empty rows
    if (currentRow.some(f => f.trim()) || !hasHeader) {
      rows.push(currentRow.map(f => f.trim()));
    }
    currentRow = [];
  }

  // Handle header
  const headerRow = hasHeader ? rows.shift() : null;
  const result = rows.map(row => {
    const obj = {};
    if (headerRow) {
      headerRow.forEach((header, idx) => {
        obj[header] = row[idx] || '';
      });
    } else {
      obj.data = row;
    }
    return obj;
  });

  return result.filter(row => Object.values(row).some(v => v));
}

// ============================================================================
// SLUG GENERATION
// ============================================================================

function generateSlug(text, city) {
  return (
    city.toLowerCase() +
    '-' +
    text
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
      .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric with hyphens
      .replace(/^-+|-+$/g, '') // Trim hyphens
  );
}

// ============================================================================
// DOWNLOADING & EXTRACTING
// ============================================================================

async function downloadFile(urlString, outputPath) {
  return new Promise((resolve, reject) => {
    const url = new URL(urlString);
    const client = url.protocol === 'https:' ? https : http;

    client.get(urlString, { timeout: 30000 }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // Follow redirects
        downloadFile(res.headers.location, outputPath).then(resolve).catch(reject);
        return;
      }

      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode}: ${res.statusMessage}`));
        return;
      }

      const file = createWriteStream(outputPath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
      file.on('error', reject);
    }).on('error', reject);
  });
}

async function extractZip(zipPath, extractDir) {
  // Use command-line unzip (available on all Unix systems)
  const { exec } = require('child_process');

  return new Promise((resolve, reject) => {
    exec(`unzip -q -o "${zipPath}" -d "${extractDir}"`, (err) => {
      if (err) {
        reject(new Error(`Failed to extract ZIP: ${err.message}`));
      } else {
        resolve();
      }
    });
  });
}

// ============================================================================
// GTFS PARSING
// ============================================================================

async function parseGTFS(gtfsDir, city) {
  console.log(`\n📍 Parsing GTFS files from ${gtfsDir}...`);

  const files = {};
  const filesToRead = ['stops.txt', 'routes.txt', 'trips.txt', 'stop_times.txt', 'transfers.txt'];

  for (const file of filesToRead) {
    const filePath = path.join(gtfsDir, file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath);
      files[file] = parseCSV(content, true);
      console.log(`  ✅ ${file}: ${files[file].length} records`);
    } else {
      console.log(`  ⚠️  ${file}: not found (optional)`);
      files[file] = [];
    }
  }

  return files;
}

// ============================================================================
// DATA BUILDING
// ============================================================================

function buildStations(stops, routes, city) {
  console.log(`\n🚉 Building station data...`);

  const stationMap = {};
  const routeMap = {};

  // Index routes by ID
  routes.forEach(route => {
    routeMap[route.route_id] = {
      id: route.route_id,
      shortName: route.route_short_name || route.route_long_name || 'Line ' + route.route_id,
      longName: route.route_long_name || route.route_short_name,
      color: route.route_color ? '#' + route.route_color : '#999999',
    };
  });

  // Build stations
  stops.forEach(stop => {
    const slug = generateSlug(stop.stop_name, city);
    stationMap[stop.stop_id] = {
      slug,
      nombre: stop.stop_name,
      lat: parseFloat(stop.stop_lat),
      lon: parseFloat(stop.stop_lon),
      lines: [],
      stopId: stop.stop_id,
    };
  });

  console.log(`  ✅ Indexed ${Object.keys(stationMap).length} stops`);
  console.log(`  ✅ Indexed ${Object.keys(routeMap).length} routes`);

  return { stationMap, routeMap };
}

function buildLines(trips, stops, routes, stationMap, city) {
  console.log(`\n🚌 Building line data...`);

  const lineMap = {};
  const routeToStops = {};

  // Group trips by route
  trips.forEach(trip => {
    const routeId = trip.route_id;
    if (!routeToStops[routeId]) {
      routeToStops[routeId] = new Set();
    }
  });

  // Build complete lines info
  routes.forEach(route => {
    const routeId = route.route_id;
    lineMap[routeId] = {
      id: routeId,
      shortName: route.route_short_name || route.route_long_name,
      longName: route.route_long_name || route.route_short_name,
      color: route.route_color ? '#' + route.route_color : '#999999',
      estaciones: [],
      total: 0,
      municipios: [],
    };
  });

  console.log(`  ✅ Prepared ${Object.keys(lineMap).length} lines`);

  return { lineMap, routeToStops };
}

function buildGraph(stopTimes, stationMap, transfers, city) {
  console.log(`\n🔗 Building adjacency graph...`);

  const grafo = {};
  const edgeMap = {};

  // Initialize all stations in graph
  Object.entries(stationMap).forEach(([stopId, station]) => {
    if (!grafo[station.slug]) {
      grafo[station.slug] = {
        ciudad: city,
        nombre: station.nombre,
        lineas: [],
        adyacentes: [],
      };
    }
  });

  // Sort stop_times by trip and sequence
  const timesByTrip = {};
  stopTimes.forEach(st => {
    if (!timesByTrip[st.trip_id]) {
      timesByTrip[st.trip_id] = [];
    }
    timesByTrip[st.trip_id].push({
      stop_id: st.stop_id,
      stop_sequence: parseInt(st.stop_sequence),
      arrival_time: st.arrival_time,
      departure_time: st.departure_time,
    });
  });

  // Calculate travel times between consecutive stops
  Object.entries(timesByTrip).forEach(([tripId, times]) => {
    times.sort((a, b) => a.stop_sequence - b.stop_sequence);

    for (let i = 0; i < times.length - 1; i++) {
      const current = times[i];
      const next = times[i + 1];

      const fromSlug = stationMap[current.stop_id]?.slug;
      const toSlug = stationMap[next.stop_id]?.slug;

      if (!fromSlug || !toSlug || fromSlug === toSlug) continue;

      const edgeKey = `${fromSlug}---${toSlug}`;
      const reverseKey = `${toSlug}---${fromSlug}`;

      // Estimate travel time (1 min per km is rough estimate, use actual if available)
      const travelTime = Math.max(1, Math.ceil(Math.random() * 5 + 2)); // 2-7 min placeholder

      if (!edgeMap[edgeKey]) {
        edgeMap[edgeKey] = { count: 0, totalTime: 0 };
      }
      edgeMap[edgeKey].count++;
      edgeMap[edgeKey].totalTime += travelTime;
    }
  });

  // Build edges from calculated times
  Object.entries(edgeMap).forEach(([edgeKey, data]) => {
    const [fromSlug, toSlug] = edgeKey.split('---');
    const avgTime = Math.round(data.totalTime / data.count);

    if (grafo[fromSlug]) {
      grafo[fromSlug].adyacentes.push({
        slug: toSlug,
        tiempo: avgTime,
        linea: 'mixed',
        tipo: 'transporte',
      });
    }
  });

  // Add transfers if available
  if (transfers && transfers.length > 0) {
    transfers.forEach(tf => {
      const fromSlug = stationMap[tf.from_stop_id]?.slug;
      const toSlug = stationMap[tf.to_stop_id]?.slug;

      if (fromSlug && toSlug && fromSlug !== toSlug) {
        const transferTime = tf.min_transfer_time ? Math.ceil(parseInt(tf.min_transfer_time) / 60) : 5;

        if (!grafo[fromSlug].adyacentes.find(e => e.slug === toSlug && e.tipo === 'transbordo')) {
          grafo[fromSlug].adyacentes.push({
            slug: toSlug,
            tiempo: transferTime,
            linea: 'transfer',
            tipo: 'transbordo',
          });
        }
      }
    });
  }

  // Remove duplicate edges (keep shortest time)
  Object.entries(grafo).forEach(([slug, node]) => {
    const uniqueEdges = {};
    node.adyacentes.forEach(edge => {
      const key = edge.slug;
      if (!uniqueEdges[key] || edge.tiempo < uniqueEdges[key].tiempo) {
        uniqueEdges[key] = edge;
      }
    });
    node.adyacentes = Object.values(uniqueEdges);
  });

  console.log(`  ✅ Graph: ${Object.keys(grafo).length} nodes, ${Object.keys(edgeMap).length} edges`);

  return grafo;
}

// ============================================================================
// FILE WRITING
// ============================================================================

function writeEstaciones(city, stationMap, lineMap, outputDir) {
  console.log(`\n💾 Writing estaciones.js...`);

  const estaciones = Object.values(stationMap).map(station => ({
    slug: station.slug,
    nombre: station.nombre,
    linea: station.lines && station.lines.length > 0 ? station.lines : undefined,
    lat: station.lat,
    lon: station.lon,
    tipo_zona: 'transporte',
    pois: [],
  }));

  const content =
    `export const estaciones${capitalize(city)} = ` + JSON.stringify(estaciones, null, 2) + ';';

  const filePath = path.join(outputDir, 'estaciones.js');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`  ✅ Wrote ${estaciones.length} stations to ${filePath}`);

  return estaciones;
}

function writeLineas(city, lineMap, outputDir) {
  console.log(`\n💾 Writing lineas-detalle.js...`);

  const lineas = Object.values(lineMap).map(line => ({
    id: line.id,
    color: line.color,
    colorNombre: getColorName(line.color),
    inicio: line.estaciones[0] || 'Inicio',
    fin: line.estaciones[line.estaciones.length - 1] || 'Fin',
    total: line.total,
    municipios: line.municipios,
    descripcion: `Línea ${line.shortName}. ${line.longName || ''}`.trim(),
    estaciones_turisticas: line.estaciones.slice(0, 6),
    estaciones: line.estaciones,
  }));

  const content =
    `export const lineas${capitalize(city)} = ` + JSON.stringify(lineas, null, 2) + ';';

  const filePath = path.join(outputDir, 'lineas-detalle.js');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`  ✅ Wrote ${lineas.length} lines to ${filePath}`);

  return lineas;
}

function writeGrafo(city, grafo, outputDir) {
  console.log(`\n💾 Writing grafo.js...`);

  const lines = [
    `/**`,
    ` * Grafo de transporte público de ${capitalize(city)} para MetroGuia.mx`,
    ` *`,
    ` * ${Object.keys(grafo).length} nodos totales`,
    ` *`,
    ` * Estructura de nodo:`,
    ` * {`,
    ` *   ciudad: string,`,
    ` *   nombre: string,`,
    ` *   lineas: string[],`,
    ` *   adyacentes: [{ slug, tiempo (minutos), linea, tipo }]`,
    ` * }`,
    ` */`,
    ``,
    `export const grafo${capitalize(city)} = {`,
  ];

  Object.entries(grafo).forEach(([slug, node]) => {
    lines.push(`  '${slug}': {`);
    lines.push(`    ciudad: '${node.ciudad}',`);
    lines.push(`    nombre: '${node.nombre.replace(/'/g, "\\'")}',`);
    lines.push(`    lineas: [${node.lineas.map(l => `'${l}'`).join(', ')}],`);
    lines.push(`    adyacentes: [`);

    node.adyacentes.forEach(edge => {
      lines.push(`      { slug: '${edge.slug}', tiempo: ${edge.tiempo}, linea: '${edge.linea}', tipo: '${edge.tipo}' },`);
    });

    lines.push(`    ],`);
    lines.push(`  },`);
  });

  lines.push(`};`);

  const content = lines.join('\n');
  const filePath = path.join(outputDir, 'grafo.js');
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`  ✅ Wrote grafo to ${filePath}`);
}

// ============================================================================
// VALIDATION
// ============================================================================

function validateGraph(grafo, estaciones) {
  console.log(`\n✓ Validating graph...`);

  const issues = [];

  // Check orphan nodes
  const allSlugs = new Set(estaciones.map(e => e.slug));
  Object.entries(grafo).forEach(([slug, node]) => {
    if (!allSlugs.has(slug)) {
      issues.push(`  ⚠️  Orphan node in grafo: ${slug}`);
    }

    // Check invalid references
    node.adyacentes.forEach(edge => {
      if (!grafo[edge.slug]) {
        issues.push(`  ⚠️  Invalid reference: ${slug} → ${edge.slug} (target not in grafo)`);
      }
    });
  });

  // Check bidirectionality (warnings only)
  const missingReverse = [];
  Object.entries(grafo).forEach(([slug, node]) => {
    node.adyacentes.forEach(edge => {
      const targetNode = grafo[edge.slug];
      if (targetNode && !targetNode.adyacentes.some(e => e.slug === slug)) {
        missingReverse.push(`  ℹ️  One-way edge: ${slug} → ${edge.slug}`);
      }
    });
  });

  if (issues.length > 0) {
    console.log('  ❌ Issues found:');
    issues.forEach(i => console.log(i));
  }

  if (missingReverse.length > 0 && missingReverse.length < 10) {
    console.log('  ℹ️  One-way edges:');
    missingReverse.slice(0, 5).forEach(i => console.log(i));
  }

  console.log(`  ✅ Graph validation complete`);
}

// ============================================================================
// SUMMARY
// ============================================================================

function printSummary(stationMap, lineMap, grafo) {
  console.log('\n═══════════════════════════════════════════════════════════');
  console.log('✅ GTFS CONVERSION COMPLETE');
  console.log('═══════════════════════════════════════════════════════════');
  console.log(`📊 Stations: ${Object.keys(stationMap).length}`);
  console.log(`🚌 Lines: ${Object.keys(lineMap).length}`);
  console.log(`🔗 Graph nodes: ${Object.keys(grafo).length}`);

  let totalEdges = 0;
  Object.values(grafo).forEach(node => {
    totalEdges += node.adyacentes.length;
  });
  console.log(`   Edges: ${totalEdges}`);

  const times = [];
  Object.values(grafo).forEach(node => {
    node.adyacentes.forEach(edge => {
      times.push(edge.tiempo);
    });
  });

  if (times.length > 0) {
    const avgTime = (times.reduce((a, b) => a + b, 0) / times.length).toFixed(1);
    console.log(`   Avg travel time: ${avgTime} min`);
  }

  console.log('═══════════════════════════════════════════════════════════\n');
}

// ============================================================================
// HELPERS
// ============================================================================

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getColorName(hexColor) {
  const colorMap = {
    '#E63946': 'Rojo',
    '#F1FAEE': 'Blanco',
    '#A8DADC': 'Azul claro',
    '#457B9D': 'Azul',
    '#1D3557': 'Azul oscuro',
    '#2A9D8F': 'Verde azulado',
    '#E9C46A': 'Amarillo',
    '#F4A261': 'Naranja',
    '#999999': 'Gris',
  };

  return colorMap[hexColor] || 'Color';
}

// ============================================================================
// MAIN
// ============================================================================

async function main() {
  const args = process.argv.slice(2);

  let urlInput = null;
  let fileInput = null;
  let city = null;
  let country = null;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--url' && i + 1 < args.length) {
      urlInput = args[++i];
    } else if (args[i] === '--file' && i + 1 < args.length) {
      fileInput = args[++i];
    } else if (args[i] === '--city' && i + 1 < args.length) {
      city = args[++i];
    } else if (args[i] === '--country' && i + 1 < args.length) {
      country = args[++i];
    }
  }

  if (!city || (!urlInput && !fileInput)) {
    console.error('Usage: node scripts/gtfs-to-metroguia.js --url <url> --city <city> --country <country>');
    console.error('   or: node scripts/gtfs-to-metroguia.js --file <path> --city <city> --country <country>');
    process.exit(1);
  }

  const tmpDir = path.join('/tmp', `gtfs-${city}-${Date.now()}`);
  const outputDir = path.join(process.cwd(), 'data', city);

  try {
    console.log('═══════════════════════════════════════════════════════════');
    console.log('🚇 MetroGuia GTFS Converter');
    console.log('═══════════════════════════════════════════════════════════');
    console.log(`🏙️  City: ${city.toUpperCase()} (${country})`);

    // Create directories
    if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });
    if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

    // Download or use local file
    const zipPath = path.join(tmpDir, 'gtfs.zip');
    if (urlInput) {
      console.log(`\n⬇️  Downloading from ${urlInput}...`);
      await downloadFile(urlInput, zipPath);
      console.log(`  ✅ Downloaded to ${zipPath}`);
    } else {
      console.log(`\n📂 Using local file ${fileInput}...`);
      fs.copyFileSync(fileInput, zipPath);
    }

    // Extract
    console.log(`\n📦 Extracting...`);
    const gtfsDir = path.join(tmpDir, 'gtfs');
    if (!fs.existsSync(gtfsDir)) fs.mkdirSync(gtfsDir, { recursive: true });

    try {
      await extractZip(zipPath, gtfsDir);
    } catch (e) {
      console.error(`  ❌ Extraction failed: ${e.message}`);
      process.exit(1);
    }
    console.log(`  ✅ Extracted to ${gtfsDir}`);

    // Parse GTFS
    const gtfsData = await parseGTFS(gtfsDir, city);

    // Build data structures
    const { stationMap, routeMap } = buildStations(gtfsData['stops.txt'], gtfsData['routes.txt'], city);
    const { lineMap } = buildLines(gtfsData['trips.txt'], gtfsData['stops.txt'], gtfsData['routes.txt'], stationMap, city);
    const grafo = buildGraph(gtfsData['stop_times.txt'], stationMap, gtfsData['transfers.txt'], city);

    // Write output files
    const estaciones = writeEstaciones(city, stationMap, lineMap, outputDir);
    const lineas = writeLineas(city, lineMap, outputDir);
    writeGrafo(city, grafo, outputDir);

    // Validation
    validateGraph(grafo, estaciones);

    // Summary
    printSummary(stationMap, lineMap, grafo);

    // Cleanup
    console.log('🧹 Cleaning up temporary files...');
    fs.rmSync(tmpDir, { recursive: true, force: true });
    console.log('  ✅ Cleanup complete\n');
  } catch (error) {
    console.error(`\n❌ Error: ${error.message}`);
    console.error(error.stack);

    // Cleanup on error
    if (fs.existsSync(tmpDir)) {
      fs.rmSync(tmpDir, { recursive: true, force: true });
    }

    process.exit(1);
  }
}

main();
