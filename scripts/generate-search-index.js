#!/usr/bin/env node

/**
 * generate-search-index.js
 * Generates a minimal search index from all station data across 68+ cities
 * Output: data/search-index.js
 */

const fs = require('fs');
const path = require('path');
const { createRequire } = require('module');

// City metadata: displayName, path, stationPath (estacion vs station)
const CITIES_METADATA = {
  // MX cities
  cdmx: { displayName: 'CDMX', path: 'estaciones.js', stationPath: 'estacion', exportName: 'estaciones' },
  gdl: { displayName: 'GDL', path: 'gdl/estaciones.js', stationPath: 'estacion', exportName: 'estacionesGDL' },
  mty: { displayName: 'MTY', path: 'mty/estaciones.js', stationPath: 'estacion', exportName: 'estacionesMTY' },
  puebla: { displayName: 'Puebla', path: 'puebla/estaciones.js', stationPath: 'estacion', exportName: 'estacionesPUEBLA' },
  merida: { displayName: 'Mérida', path: 'merida/estaciones.js', stationPath: 'estacion', exportName: 'estacionesMERIDA' },
  leon: { displayName: 'León', path: 'leon/estaciones.js', stationPath: 'estacion', exportName: 'estacionesLEON' },
  chihuahua: { displayName: 'Chihuahua', path: 'chihuahua/estaciones.js', stationPath: 'estacion', exportName: 'estacionesCHIHUAHUA' },
  tijuana: { displayName: 'Tijuana', path: 'tijuana/estaciones.js', stationPath: 'estacion', exportName: 'estacionesTIJUANA' },
  queretaro: { displayName: 'Querétaro', path: 'queretaro/estaciones.js', stationPath: 'estacion', exportName: 'estacionesQUERETARO' },
  toluca: { displayName: 'Toluca', path: 'toluca/estaciones.js', stationPath: 'estacion', exportName: 'estacionesTOLUCA' },
  'tren-maya': { displayName: 'Tren Maya', path: 'tren-maya/estaciones.js', stationPath: 'estacion', exportName: 'estacionesTrenMaya' },
  oaxaca: { displayName: 'Oaxaca', path: 'oaxaca/estaciones.js', stationPath: 'estacion', exportName: 'estacionesOAXACA' },
  morelia: { displayName: 'Morelia', path: 'morelia/estaciones.js', stationPath: 'estacion', exportName: 'estacionesMORELIA' },
  veracruz: { displayName: 'Veracruz', path: 'veracruz/estaciones.js', stationPath: 'estacion', exportName: 'estacionesVERAC' },
  campeche: { displayName: 'Campeche', path: 'campeche/estaciones.js', stationPath: 'estacion', exportName: 'estacionesCAMPECHE' },
  villahermosa: { displayName: 'Villahermosa', path: 'villahermosa/estaciones.js', stationPath: 'estacion', exportName: 'estacionesVILLAHERMOSA' },

  // US/CA cities
  nyc: { displayName: 'New York City', path: 'nyc/estaciones.js', stationPath: 'station', exportName: 'estacionesNYC' },
  'los-angeles': { displayName: 'Los Angeles', path: 'los-angeles/estaciones.js', stationPath: 'station', exportName: 'estacionesLosAngeles' },
  houston: { displayName: 'Houston', path: 'houston/estaciones.js', stationPath: 'station', exportName: 'estacionesHOUSTON' },
  atlanta: { displayName: 'Atlanta', path: 'atlanta/estaciones.js', stationPath: 'station', exportName: 'estacionesATLANTA' },
  philadelphia: { displayName: 'Philadelphia', path: 'philadelphia/estaciones.js', stationPath: 'station', exportName: 'estacionesPHILADELPHIA' },
  seattle: { displayName: 'Seattle', path: 'seattle/estaciones.js', stationPath: 'station', exportName: 'estacionesSEATTLE' },
  'san-francisco': { displayName: 'San Francisco', path: 'san-francisco/estaciones.js', stationPath: 'station', exportName: 'estacionesSanFrancisco' },
  boston: { displayName: 'Boston', path: 'boston/estaciones.js', stationPath: 'station', exportName: 'estacionesBOSTON' },
  miami: { displayName: 'Miami', path: 'miami/estaciones.js', stationPath: 'station', exportName: 'estacionesMIAMI' },
  dallas: { displayName: 'Dallas', path: 'dallas/estaciones.js', stationPath: 'station', exportName: 'estacionesDALLAS' },
  'kansas-city': { displayName: 'Kansas City', path: 'kansas-city/estaciones.js', stationPath: 'station', exportName: 'estacionesKansasCity' },
  toronto: { displayName: 'Toronto', path: 'toronto/estaciones.js', stationPath: 'station', exportName: 'estacionesTORONTO' },
  vancouver: { displayName: 'Vancouver', path: 'vancouver/estaciones.js', stationPath: 'station', exportName: 'estacionesVANCOUVER' },
  portland: { displayName: 'Portland', path: 'portland/estaciones.js', stationPath: 'station', exportName: 'estacionesPORTLAND' },
  sacramento: { displayName: 'Sacramento', path: 'sacramento/estaciones.js', stationPath: 'station', exportName: 'estacionesSACRAMENTO' },
  denver: { displayName: 'Denver', path: 'denver/estaciones.js', stationPath: 'station', exportName: 'estacionesDENVER' },
  'salt-lake-city': { displayName: 'Salt Lake City', path: 'salt-lake-city/estaciones.js', stationPath: 'station', exportName: 'estacionesSaltLakeCity' },
  'washington-dc': { displayName: 'Washington D.C.', path: 'washington-dc/estaciones.js', stationPath: 'station', exportName: 'estacionesWashingtonDC' },
  chicago: { displayName: 'Chicago', path: 'chicago/estaciones.js', stationPath: 'station', exportName: 'estacionesCHICAGO' },
  'san-diego': { displayName: 'San Diego', path: 'san-diego/estaciones.js', stationPath: 'station', exportName: 'estacionesSanDiego' },
  minneapolis: { displayName: 'Minneapolis', path: 'minneapolis/estaciones.js', stationPath: 'station', exportName: 'estacionesMINNEAPOLIS' },
  pittsburgh: { displayName: 'Pittsburgh', path: 'pittsburgh/estaciones.js', stationPath: 'station', exportName: 'estacionesPITTSBURGH' },
  baltimore: { displayName: 'Baltimore', path: 'baltimore/estaciones.js', stationPath: 'station', exportName: 'estacionesBALTIMORE' },
  charlotte: { displayName: 'Charlotte', path: 'charlotte/estaciones.js', stationPath: 'station', exportName: 'estacionesCHARLOTTE' },
  phoenix: { displayName: 'Phoenix', path: 'phoenix/estaciones.js', stationPath: 'station', exportName: 'estacionesPHOENIX' },
  'st-louis': { displayName: 'St. Louis', path: 'st-louis/estaciones.js', stationPath: 'station', exportName: 'estacionesStLouis' },
  montreal: { displayName: 'Montreal', path: 'montreal/estaciones.js', stationPath: 'station', exportName: 'estacionesMONTREAL' },
  calgary: { displayName: 'Calgary', path: 'calgary/estaciones.js', stationPath: 'station', exportName: 'estacionesCALGARY' },
  edmonton: { displayName: 'Edmonton', path: 'edmonton/estaciones.js', stationPath: 'station', exportName: 'estacionesEDMONTON' },
  ottawa: { displayName: 'Ottawa', path: 'ottawa/estaciones.js', stationPath: 'station', exportName: 'estacionesOTTAWA' },
  detroit: { displayName: 'Detroit', path: 'detroit/estaciones.js', stationPath: 'station', exportName: 'estacionesDETROIT' },
  cleveland: { displayName: 'Cleveland', path: 'cleveland/estaciones.js', stationPath: 'station', exportName: 'estacionesCLEVELAND' },
  'las-vegas': { displayName: 'Las Vegas', path: 'las-vegas/estaciones.js', stationPath: 'station', exportName: 'estacionesLasVegas' },
  'san-jose': { displayName: 'San Jose', path: 'san-jose/estaciones.js', stationPath: 'station', exportName: 'estacionesSanJose' },
  'new-orleans': { displayName: 'New Orleans', path: 'new-orleans/estaciones.js', stationPath: 'station', exportName: 'estacionesNewOrleans' },
  buffalo: { displayName: 'Buffalo', path: 'buffalo/estaciones.js', stationPath: 'station', exportName: 'estacionesBUFFALO' },
  honolulu: { displayName: 'Honolulu', path: 'honolulu/estaciones.js', stationPath: 'station', exportName: 'estacionesHONOLULU' },
  norfolk: { displayName: 'Norfolk', path: 'norfolk/estaciones.js', stationPath: 'station', exportName: 'estacionesNORFOLK' },
  jacksonville: { displayName: 'Jacksonville', path: 'jacksonville/estaciones.js', stationPath: 'station', exportName: 'estacionesJACKSONVILLE' },
  austin: { displayName: 'Austin', path: 'austin/estaciones.js', stationPath: 'station', exportName: 'estacionesAUSTIN' },
  cincinnati: { displayName: 'Cincinnati', path: 'cincinnati/estaciones.js', stationPath: 'station', exportName: 'estacionesCINCINNATI' },
  'el-paso': { displayName: 'El Paso', path: 'el-paso/estaciones.js', stationPath: 'station', exportName: 'estacionesElPaso' },
  orlando: { displayName: 'Orlando', path: 'orlando/estaciones.js', stationPath: 'station', exportName: 'estacionesORLANDO' },
  'san-juan': { displayName: 'San Juan', path: 'san-juan/estaciones.js', stationPath: 'station', exportName: 'estacionesSanJuan' },
  tampa: { displayName: 'Tampa', path: 'tampa/estaciones.js', stationPath: 'station', exportName: 'estacionesTAMPA' },
  tucson: { displayName: 'Tucson', path: 'tucson/estaciones.js', stationPath: 'station', exportName: 'estacionesTUCSON' },
  'oklahoma-city': { displayName: 'Oklahoma City', path: 'oklahoma-city/estaciones.js', stationPath: 'station', exportName: 'estacionesOklahomaCiity' },
  nashville: { displayName: 'Nashville', path: 'nashville/estaciones.js', stationPath: 'station', exportName: 'estacionesNASHVILLE' },
  milwaukee: { displayName: 'Milwaukee', path: 'milwaukee/estaciones.js', stationPath: 'station', exportName: 'estacionesMILWAUKEE' },
  newark: { displayName: 'Newark', path: 'newark/estaciones.js', stationPath: 'station', exportName: 'estacionesNEWARK' },
  'kitchener-waterloo': { displayName: 'Kitchener-Waterloo', path: 'kitchener-waterloo/estaciones.js', stationPath: 'station', exportName: 'estacionesKitchenerWaterloo' },
  mississauga: { displayName: 'Mississauga', path: 'mississauga/estaciones.js', stationPath: 'station', exportName: 'estacionesMISSISSAUGA' },
};

const dataDir = path.join(__dirname, '../data');

/**
 * Extract minimal station data (slug, nombre, linea)
 */
function extractStationFields(station) {
  const minimalStation = {
    slug: station.slug,
    nombre: station.nombre,
  };

  // Extract linea: use string, or first element if array, or sistema, or empty
  let linea = '';
  if (station.linea) {
    linea = typeof station.linea === 'string' ? station.linea : (Array.isArray(station.linea) ? station.linea[0] : '');
  } else if (station.lineas && Array.isArray(station.lineas)) {
    linea = station.lineas[0] || '';
  } else if (station.sistema) {
    linea = station.sistema;
  }

  if (linea) minimalStation.linea = linea;

  return minimalStation;
}

/**
 * Load stations from a file using dynamic require
 */
function loadStationsFromFile(cityKey, filePath, exportName) {
  const fullPath = path.join(dataDir, filePath);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  try {
    // Use require to load the ES module (Node v12+)
    delete require.cache[require.resolve(fullPath)];
    const mod = require(fullPath);
    
    // Try to find the export
    let stations = null;
    
    // First try the specified exportName
    if (mod[exportName]) {
      stations = mod[exportName];
    } else {
      // Try common patterns
      const keys = Object.keys(mod);
      for (const key of keys) {
        if (Array.isArray(mod[key]) && mod[key].length > 0 && mod[key][0].slug) {
          stations = mod[key];
          break;
        }
      }
    }

    if (Array.isArray(stations) && stations.length > 0) {
      return stations;
    }

    return null;
  } catch (err) {
    return null;
  }
}

/**
 * Main generation function
 */
function generateSearchIndex() {
  console.log('Generating search index...\n');

  const searchIndex = {};
  let loadedCount = 0;

  // Load main cities
  console.log('Loading cities:');
  for (const [cityKey, metadata] of Object.entries(CITIES_METADATA)) {
    const stations = loadStationsFromFile(cityKey, metadata.path, metadata.exportName);
    
    if (stations && stations.length > 0) {
      searchIndex[cityKey] = {
        displayName: metadata.displayName,
        path: metadata.path.split('/')[0],
        stationPath: metadata.stationPath,
        stations: stations.map(extractStationFields),
      };
      console.log(`  ✓ ${cityKey}: ${stations.length} stations`);
      loadedCount++;
    } else {
      console.log(`  ⚠ ${cityKey}: not loaded`);
    }
  }

  console.log(`\n✓ Loaded ${loadedCount} cities`);

  // Write output
  const outputFile = path.join(dataDir, 'search-index.js');
  const output = `// Auto-generated search index
// DO NOT EDIT MANUALLY — regenerate with: node scripts/generate-search-index.js

export const searchIndex = ${JSON.stringify(searchIndex, null, 2)};
`;

  fs.writeFileSync(outputFile, output, 'utf-8');
  const fileSize = fs.statSync(outputFile).size;
  console.log(`\n✓ Wrote ${outputFile}`);
  console.log(`  File size: ${fileSize} bytes`);

  return fileSize;
}

const fileSize = generateSearchIndex();
process.exit(0);
