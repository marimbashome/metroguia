#!/usr/bin/env node

/**
 * MetroGuia.mx — generate-pages.js
 * 
 * Script para enriquecer estaciones de las 3 ciudades (CDMX, GDL, MTY) con Claude API.
 * 
 * Features:
 * - Soporta múltiples ciudades: CDMX, Guadalajara (GDL), Monterrey (MTY)
 * - Rate limiting: max 10 requests/min (6 seg entre requests)
 * - Resume: salta estaciones que ya tienen descripción (resume en interrupciones)
 * - Enriquece con: descripción, tips, lugares cercanos, horarios, accesibilidad
 * 
 * Usage:
 *   node scripts/generate-pages.js [city]
 *   node scripts/generate-pages.js           # procesa todas las ciudades
 *   node scripts/generate-pages.js cdmx      # solo CDMX
 *   node scripts/generate-pages.js gdl       # solo GDL
 *   node scripts/generate-pages.js mty       # solo MTY
 */

const fs = require('fs');
const path = require('path');
const { Anthropic } = require('@anthropic-ai/sdk');

// ============================================================================
// CONFIG
// ============================================================================

const CITIES = {
  cdmx: {
    name: 'Ciudad de México',
    dataFile: 'data/estaciones.js',
    exportName: 'estaciones',
    field: 'alcaldia',
  },
  gdl: {
    name: 'Guadalajara',
    dataFile: 'data/gdl/estaciones.js',
    exportName: 'estacionesGDL',
    field: 'municipio',
  },
  mty: {
    name: 'Monterrey',
    dataFile: 'data/mty/estaciones.js',
    exportName: 'estacionesMTY',
    field: 'municipio',
  },
};

// Rate limiting: 10 requests/min = 1 request every 6 seconds
const RATE_LIMIT_MS = 6000;

// API config
const client = new Anthropic();
const MODEL = 'claude-3-5-sonnet-20241022';
const MAX_TOKENS = 500;

// ============================================================================
// HELPERS
// ============================================================================

/**
 * Sleep para rate limiting
 */
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Genera el prompt para enriquecer una estación
 */
function generatePrompt(estacion, city) {
  const campos_actuales = [];
  if (estacion.descripcion_turistica) campos_actuales.push('descripción turística');
  if (estacion.tips && estacion.tips.length > 0) campos_actuales.push('tips');
  if (estacion.lugares_cercanos) campos_actuales.push('lugares cercanos');
  if (estacion.horarios) campos_actuales.push('horarios');
  if (estacion.accesibilidad) campos_actuales.push('accesibilidad');

  const campos_para_generar = [];
  if (!estacion.descripcion_turistica) campos_para_generar.push('descripción');
  if (!estacion.lugares_cercanos) campos_para_generar.push('lugares cercanos');
  if (!estacion.horarios) campos_para_generar.push('horarios');
  if (!estacion.accesibilidad) campos_para_generar.push('info de accesibilidad');

  return `Eres un experto en movilidad y turismo en México. Enriquece la siguiente estación de metro con contenido valioso, turístico y práctico.

ESTACIÓN:
- Nombre: ${estacion.nombre}
- Ciudad: ${city.name}
- Línea: ${estacion.linea}
- Zona: ${estacion.tipo_zona}
- ${city.field}: ${estacion[city.field]}
- POIs actuales: ${estacion.pois?.map(p => p.nombre).join(', ') || 'ninguno'}

CAMPOS EXISTENTES: ${campos_actuales.length > 0 ? campos_actuales.join(', ') : 'ninguno'}
CAMPOS A GENERAR: ${campos_para_generar.length > 0 ? campos_para_generar.join(', ') : 'todos ya existen'}

Genera un JSON válido con estos campos (solo incluye los campos faltantes):
{
  "descripcion_turistica": "Descripción de 2-3 líneas sobre la estación, su importancia turística y qué encontrará el visitante",
  "lugares_cercanos": [
    { "nombre": "Nombre del lugar", "tipo": "tipo (parque/museo/comercio/restaurante/etc)", "distancia": "X min caminando", "descripcion": "breve descripción" }
  ],
  "horarios": {
    "lunes_viernes": "HH:MM - HH:MM",
    "sabado": "HH:MM - HH:MM",
    "domingo": "HH:MM - HH:MM",
    "notas": "información adicional sobre horarios especiales"
  },
  "accesibilidad": {
    "silla_ruedas": true/false,
    "elevadores": true/false,
    "rampas": true/false,
    "banos_accesibles": true/false,
    "notas": "detalles sobre accesibilidad"
  }
}

Sé específico, práctico y valioso. Incluye información real sobre transporte, servicios y atractivos turísticos de la zona.`;
}

/**
 * Enriquece una estación con Claude API
 */
async function enrichStation(estacion, city, index, total) {
  // Skip si ya tiene descripción (resume capability)
  if (estacion.descripcion_turistica) {
    console.log(`  [${index}/${total}] ⏭️  ${estacion.nombre} — ya enriquecido, saltando`);
    return false;
  }

  try {
    console.log(`  [${index}/${total}] 🤖 ${estacion.nombre} — enriqueciendo...`);
    
    const response = await client.messages.create({
      model: MODEL,
      max_tokens: MAX_TOKENS,
      messages: [
        {
          role: 'user',
          content: generatePrompt(estacion, city),
        },
      ],
    });

    // Extract JSON from response
    const content = response.content[0].text;
    let enrichedData;
    
    try {
      enrichedData = JSON.parse(content);
    } catch (e) {
      // Try to extract JSON from markdown code blocks
      const jsonMatch = content.match(/```(?:json)?\n?([\s\S]*?)\n?```/);
      if (jsonMatch) {
        enrichedData = JSON.parse(jsonMatch[1]);
      } else {
        throw new Error('No JSON found in response');
      }
    }

    // Merge enriched data into estación
    Object.assign(estacion, enrichedData);
    
    console.log(`  [${index}/${total}] ✅ ${estacion.nombre} — completado`);
    return true;

  } catch (error) {
    console.error(`  [${index}/${total}] ❌ ${estacion.nombre} — error: ${error.message}`);
    return false;
  }
}

/**
 * Procesa todas las estaciones de una ciudad
 */
async function processCity(cityKey) {
  const city = CITIES[cityKey];
  const dataPath = path.join(process.cwd(), city.dataFile);

  console.log(`\n📍 ${city.name.toUpperCase()}`);
  console.log(`   Leyendo: ${city.dataFile}`);

  // Read the data file
  let estaciones;
  try {
    const fileContent = fs.readFileSync(dataPath, 'utf8');
    // Extract the export
    const match = fileContent.match(new RegExp(`(?:export\\s+)?const\\s+${city.exportName}\\s*=\\s*\\[(\\s|\\S)*?\\];`));
    if (!match) {
      throw new Error(`No se encontró export ${city.exportName}`);
    }
    // Use eval to parse the array (safe aquí porque es nuestro archivo)
    const dataStr = match[0].replace(/^(?:export\s+)?const\s+\w+\s*=\s*/, 'return ');
    estaciones = new Function(dataStr)();
  } catch (error) {
    console.error(`   ❌ Error leyendo archivo: ${error.message}`);
    process.exit(1);
  }

  console.log(`   📊 Total estaciones: ${estaciones.length}`);
  
  // Count how many need enrichment
  const needsEnrichment = estaciones.filter(e => !e.descripcion_turistica).length;
  console.log(`   ⏳ Estaciones para enriquecer: ${needsEnrichment}`);

  if (needsEnrichment === 0) {
    console.log(`   ✅ Todas las estaciones ya están enriquecidas`);
    return;
  }

  // Process estaciones with rate limiting
  let processed = 0;
  for (let i = 0; i < estaciones.length; i++) {
    const estacion = estaciones[i];
    const enriched = await enrichStation(estacion, city, i + 1, estaciones.length);
    if (enriched) {
      processed++;
      // Rate limiting: wait between requests (except on the last one)
      if (i < estaciones.length - 1) {
        await sleep(RATE_LIMIT_MS);
      }
    }
  }

  // Write the enriched data back
  console.log(`\n   💾 Escribiendo ${processed} estaciones enriquecidas...`);
  
  try {
    const fileContent = fs.readFileSync(dataPath, 'utf8');
    
    // Build the new export
    let exportStatement;
    if (fileContent.includes('export const')) {
      exportStatement = `export const ${city.exportName} = `;
    } else {
      exportStatement = `const ${city.exportName} = `;
    }
    
    const newContent = fileContent.replace(
      new RegExp(`(?:export\\s+)?const\\s+${city.exportName}\\s*=\\s*\\[(\\s|\\S)*?\\];`),
      exportStatement + JSON.stringify(estaciones, null, 2) + ';'
    );
    
    fs.writeFileSync(dataPath, newContent, 'utf8');
    console.log(`   ✅ Guardado: ${dataPath}`);
    
  } catch (error) {
    console.error(`   ❌ Error escribiendo archivo: ${error.message}`);
    process.exit(1);
  }
}

/**
 * Main
 */
async function main() {
  const args = process.argv.slice(2);
  const requestedCities = args.length > 0 ? args : Object.keys(CITIES);
  
  console.log('═══════════════════════════════════════════════════════════');
  console.log('🚇 MetroGuia.mx — Enriquecimiento de estaciones con Claude');
  console.log('═══════════════════════════════════════════════════════════');
  console.log(`⚙️  Modelo: ${MODEL}`);
  console.log(`⏱️  Rate limit: ${RATE_LIMIT_MS / 1000}s entre requests (max 10 req/min)`);
  console.log(`🔄 Resume: salta estaciones ya enriquecidas`);
  console.log('');

  for (const cityKey of requestedCities) {
    if (!CITIES[cityKey]) {
      console.error(`❌ Ciudad desconocida: ${cityKey}`);
      console.error(`   Ciudades disponibles: ${Object.keys(CITIES).join(', ')}`);
      process.exit(1);
    }
    
    try {
      await processCity(cityKey);
    } catch (error) {
      console.error(`\n❌ Error procesando ${cityKey}: ${error.message}`);
      process.exit(1);
    }
  }

  console.log('\n═══════════════════════════════════════════════════════════');
  console.log('✅ Enriquecimiento completado');
  console.log('═══════════════════════════════════════════════════════════\n');
}

main().catch(error => {
  console.error('Error fatal:', error);
  process.exit(1);
});
