#!/usr/bin/env node
/**
 * inject-intl-schema.mjs
 *
 * One-shot patch: injects IntlStationSchema / IntlLineSchema into world-city
 * and US/CA station/line pages that currently render no JSON-LD.
 *
 * Strategy:
 *   - Read the page file as text.
 *   - Skip if already references IntlStationSchema/IntlLineSchema or any
 *     application/ld+json or LineSchema/StationSchema.
 *   - Insert an `import { IntlXSchema } from '@/app/components/IntlSchema'`
 *     after the last existing top-of-file `import …`.
 *   - Find the first `<main` element inside the default export's `return (`
 *     of the SUCCESS path (i.e., NOT the early-return 404 main) and inject
 *     a `<IntlXSchema … />` element as its first child.
 *
 * The "SUCCESS path" is identified by finding the last `<main` opening tag
 * in the file that is preceded by a JSX expression involving the resolved
 * entity (e.g. linea, estacion). Heuristic but it works for these pages.
 *
 * Idempotent: running twice is a no-op.
 */

import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(process.argv[2] || process.cwd());

// ─── Map: file path → { variant, citySlug, city, country, system, varName } ──
// variant: 'station' | 'line'
// varName: the variable holding the resolved entity (estacion/linea/etc.)
const cfg = {
  // World cities — station
  'app/barcelona/station/[slug]/page.jsx':   { variant: 'station', citySlug: 'barcelona',     city: 'Barcelona',     country: 'ES', system: 'TMB Metro',           data: 'estacionesBarcelona',    locale: 'es' },
  'app/berlin/station/[slug]/page.jsx':      { variant: 'station', citySlug: 'berlin',        city: 'Berlín',        country: 'DE', system: 'BVG U-Bahn',          data: 'estacionesBerlin',       locale: 'es' },
  'app/dubai/station/[slug]/page.jsx':       { variant: 'station', citySlug: 'dubai',         city: 'Dubái',         country: 'AE', system: 'Dubai Metro',         data: 'estacionesDubai',        locale: 'es' },
  'app/london/station/[slug]/page.jsx':      { variant: 'station', citySlug: 'london',        city: 'Londres',       country: 'GB', system: 'London Underground',  data: 'estacionesLondon',       locale: 'es' },
  'app/madrid/station/[slug]/page.jsx':      { variant: 'station', citySlug: 'madrid',        city: 'Madrid',        country: 'ES', system: 'Metro de Madrid',     data: 'estacionesMadrid',       locale: 'es' },
  'app/paris/station/[slug]/page.jsx':       { variant: 'station', citySlug: 'paris',         city: 'París',         country: 'FR', system: 'Paris Métro',         data: 'estacionesParis',        locale: 'es' },
  'app/santiago/station/[slug]/page.jsx':    { variant: 'station', citySlug: 'santiago',      city: 'Santiago',      country: 'CL', system: 'Metro de Santiago',   data: 'estacionesSantiago',     locale: 'es' },
  'app/sao-paulo/station/[slug]/page.jsx':   { variant: 'station', citySlug: 'sao-paulo',     city: 'São Paulo',     country: 'BR', system: 'Metrô de São Paulo',  data: 'estacionesSaoPaulo',     locale: 'es' },
  'app/seoul/station/[slug]/page.jsx':       { variant: 'station', citySlug: 'seoul',         city: 'Seúl',          country: 'KR', system: 'Seoul Metro',         data: 'estacionesSeoul',        locale: 'es' },
  'app/singapore/station/[slug]/page.jsx':   { variant: 'station', citySlug: 'singapore',     city: 'Singapur',      country: 'SG', system: 'SMRT',                data: 'estacionesSingapore',    locale: 'es' },
  'app/sydney/station/[slug]/page.jsx':      { variant: 'station', citySlug: 'sydney',        city: 'Sídney',        country: 'AU', system: 'Sydney Metro',        data: 'estacionesSydney',       locale: 'es' },

  // Lines — comprehensive coverage
  'app/austin/line/[id]/page.jsx':                  { variant: 'line', citySlug: 'austin',             city: 'Austin',             country: 'US', system: 'Capital MetroRail',      data: 'lineasAustin',                stationData: 'estacionesAustin',                locale: 'en' },
  'app/baltimore/line/[id]/page.jsx':               { variant: 'line', citySlug: 'baltimore',          city: 'Baltimore',          country: 'US', system: 'Baltimore Metro SubwayLink', data: 'lineasDetalleBaltimore',   stationData: 'estacionesBaltimore',             locale: 'en' },
  'app/barcelona/line/[id]/page.jsx':               { variant: 'line', citySlug: 'barcelona',          city: 'Barcelona',          country: 'ES', system: 'TMB Metro',              data: 'lineasBarcelona',             stationData: 'estacionesBarcelona',             locale: 'es' },
  'app/berlin/line/[id]/page.jsx':                  { variant: 'line', citySlug: 'berlin',             city: 'Berlín',             country: 'DE', system: 'BVG U-Bahn',             data: 'lineasBerlin',                stationData: 'estacionesBerlin',                locale: 'es' },
  'app/bogota/line/[id]/page.jsx':                  { variant: 'line', citySlug: 'bogota',             city: 'Bogotá',             country: 'CO', system: 'TransMilenio',           data: 'lineasBogota',                stationData: 'estacionesBogota',                locale: 'es' },
  'app/boston/line/[id]/page.jsx':                  { variant: 'line', citySlug: 'boston',             city: 'Boston',             country: 'US', system: 'MBTA',                   data: 'lineasBoston',                stationData: 'estacionesBoston',                locale: 'en' },
  'app/buenos-aires/line/[id]/page.jsx':            { variant: 'line', citySlug: 'buenos-aires',       city: 'Buenos Aires',       country: 'AR', system: 'Subte',                  data: 'lineasBuenosAires',           stationData: 'estacionesBuenosAires',           locale: 'es' },
  'app/buffalo/line/[id]/page.jsx':                 { variant: 'line', citySlug: 'buffalo',            city: 'Buffalo',            country: 'US', system: 'NFTA Metro Rail',        data: 'lineasBuffalo',               stationData: 'estacionesBuffalo',               locale: 'en' },
  'app/calgary/line/[id]/page.jsx':                 { variant: 'line', citySlug: 'calgary',            city: 'Calgary',            country: 'CA', system: 'Calgary Transit CTrain', data: 'lineasCalgary',               stationData: 'estacionesCalgary',               locale: 'en' },
  'app/charlotte/line/[id]/page.jsx':               { variant: 'line', citySlug: 'charlotte',          city: 'Charlotte',          country: 'US', system: 'CATS Lynx',              data: 'lineasDetalleCharlotte',      stationData: 'estacionesCharlotte',             locale: 'en' },
  'app/cincinnati/line/[id]/page.jsx':              { variant: 'line', citySlug: 'cincinnati',         city: 'Cincinnati',         country: 'US', system: 'Cincinnati Bell Connector', data: 'lineasCincinnati',          stationData: 'estacionesCincinnati',            locale: 'en' },
  'app/cleveland/line/[id]/page.jsx':               { variant: 'line', citySlug: 'cleveland',          city: 'Cleveland',          country: 'US', system: 'RTA Rapid Transit',      data: 'lineasCleveland',             stationData: 'estacionesCleveland',             locale: 'en' },
  'app/dallas/line/[id]/page.jsx':                  { variant: 'line', citySlug: 'dallas',             city: 'Dallas',             country: 'US', system: 'DART',                   data: 'lineasDallas',                stationData: 'estacionesDallas',                locale: 'en' },
  'app/detroit/line/[id]/page.jsx':                 { variant: 'line', citySlug: 'detroit',            city: 'Detroit',            country: 'US', system: 'QLINE',                  data: 'lineasDetroit',               stationData: 'estacionesDetroit',               locale: 'en' },
  'app/dubai/line/[id]/page.jsx':                   { variant: 'line', citySlug: 'dubai',              city: 'Dubái',              country: 'AE', system: 'Dubai Metro',            data: 'lineasDubai',                 stationData: 'estacionesDubai',                 locale: 'es' },
  'app/edmonton/line/[id]/page.jsx':                { variant: 'line', citySlug: 'edmonton',           city: 'Edmonton',           country: 'CA', system: 'ETS LRT',                data: 'lineasEdmonton',              stationData: 'estacionesEdmonton',              locale: 'en' },
  'app/el-paso/line/[id]/page.jsx':                 { variant: 'line', citySlug: 'el-paso',            city: 'El Paso',            country: 'US', system: 'El Paso Streetcar',      data: 'lineasElPaso',                stationData: 'estacionesElPaso',                locale: 'en' },
  'app/honolulu/line/[id]/page.jsx':                { variant: 'line', citySlug: 'honolulu',           city: 'Honolulu',           country: 'US', system: 'Skyline',                data: 'lineasHonolulu',              stationData: 'estacionesHonolulu',              locale: 'en' },
  'app/jacksonville/line/[id]/page.jsx':            { variant: 'line', citySlug: 'jacksonville',       city: 'Jacksonville',       country: 'US', system: 'JTA Skyway',             data: 'lineasJacksonville',          stationData: 'estacionesJacksonville',          locale: 'en' },
  'app/kansas-city/line/[id]/page.jsx':             { variant: 'line', citySlug: 'kansas-city',        city: 'Kansas City',        country: 'US', system: 'KC Streetcar',           data: 'lineasKansasCity',            stationData: 'estacionesKansasCity',            locale: 'en' },
  'app/kitchener-waterloo/line/[id]/page.jsx':      { variant: 'line', citySlug: 'kitchener-waterloo', city: 'Kitchener-Waterloo', country: 'CA', system: 'ION Light Rail',         data: 'lineasKitchenerWaterloo',     stationData: 'estacionesKitchenerWaterloo',     locale: 'en' },
  'app/las-vegas/line/[id]/page.jsx':               { variant: 'line', citySlug: 'las-vegas',          city: 'Las Vegas',          country: 'US', system: 'Las Vegas Monorail',     data: 'lineasLasVegas',              stationData: 'estacionesLasVegas',              locale: 'en' },
  'app/lima/line/[id]/page.jsx':                    { variant: 'line', citySlug: 'lima',               city: 'Lima',               country: 'PE', system: 'Metro de Lima',          data: 'lineasLima',                  stationData: 'estacionesLima',                  locale: 'es' },
  'app/london/line/[id]/page.jsx':                  { variant: 'line', citySlug: 'london',             city: 'Londres',            country: 'GB', system: 'London Underground',     data: 'lineasLondon',                stationData: 'estacionesLondon',                locale: 'es' },
  'app/madrid/line/[id]/page.jsx':                  { variant: 'line', citySlug: 'madrid',             city: 'Madrid',             country: 'ES', system: 'Metro de Madrid',        data: 'lineasMadrid',                stationData: 'estacionesMadrid',                locale: 'es' },
  'app/miami/line/[id]/page.jsx':                   { variant: 'line', citySlug: 'miami',              city: 'Miami',              country: 'US', system: 'Miami Metrorail',        data: 'lineasMiami',                 stationData: 'estacionesMiami',                 locale: 'en' },
  'app/milwaukee/line/[id]/page.jsx':               { variant: 'line', citySlug: 'milwaukee',          city: 'Milwaukee',          country: 'US', system: 'The Hop',                data: 'lineasMilwaukee',             stationData: 'estacionesMilwaukee',             locale: 'en' },
  'app/minneapolis/line/[id]/page.jsx':             { variant: 'line', citySlug: 'minneapolis',        city: 'Minneapolis',        country: 'US', system: 'Metro Transit',          data: 'lineasDetalleMinneapolis',    stationData: 'estacionesMinneapolis',           locale: 'en' },
  'app/mississauga/line/[id]/page.jsx':             { variant: 'line', citySlug: 'mississauga',        city: 'Mississauga',        country: 'CA', system: 'Hurontario LRT',         data: 'lineasMississauga',           stationData: 'estacionesMississauga',           locale: 'en' },
  'app/montreal/line/[id]/page.jsx':                { variant: 'line', citySlug: 'montreal',           city: 'Montreal',           country: 'CA', system: 'STM Métro',              data: 'lineasMontreal',              stationData: 'estacionesMontreal',              locale: 'en' },
  'app/nashville/line/[id]/page.jsx':               { variant: 'line', citySlug: 'nashville',          city: 'Nashville',          country: 'US', system: 'WeGo Star',              data: 'lineasNashville',             stationData: 'estacionesNashville',             locale: 'en' },
  'app/new-orleans/line/[id]/page.jsx':             { variant: 'line', citySlug: 'new-orleans',        city: 'New Orleans',        country: 'US', system: 'New Orleans Streetcar',  data: 'lineasNewOrleans',            stationData: 'estacionesNewOrleans',            locale: 'en' },
  'app/newark/line/[id]/page.jsx':                  { variant: 'line', citySlug: 'newark',             city: 'Newark',             country: 'US', system: 'Newark Light Rail',      data: 'lineasNewark',                stationData: 'estacionesNewark',                locale: 'en' },
  'app/norfolk/line/[id]/page.jsx':                 { variant: 'line', citySlug: 'norfolk',            city: 'Norfolk',            country: 'US', system: 'The Tide',               data: 'lineasNorfolk',               stationData: 'estacionesNorfolk',               locale: 'en' },
  'app/oklahoma-city/line/[id]/page.jsx':           { variant: 'line', citySlug: 'oklahoma-city',      city: 'Oklahoma City',      country: 'US', system: 'OKC Streetcar',          data: 'lineasOklahomaCity',          stationData: 'estacionesOklahomaCity',          locale: 'en' },
  'app/orlando/line/[id]/page.jsx':                 { variant: 'line', citySlug: 'orlando',            city: 'Orlando',            country: 'US', system: 'SunRail',                data: 'lineasOrlando',               stationData: 'estacionesOrlando',               locale: 'en' },
  'app/ottawa/line/[id]/page.jsx':                  { variant: 'line', citySlug: 'ottawa',             city: 'Ottawa',             country: 'CA', system: 'OC Transpo O-Train',     data: 'lineasOttawa',                stationData: 'estacionesOttawa',                locale: 'en' },
  'app/paris/line/[id]/page.jsx':                   { variant: 'line', citySlug: 'paris',              city: 'París',              country: 'FR', system: 'Paris Métro',            data: 'lineasParis',                 stationData: 'estacionesParis',                 locale: 'es' },
  'app/philadelphia/line/[id]/page.jsx':            { variant: 'line', citySlug: 'philadelphia',       city: 'Philadelphia',       country: 'US', system: 'SEPTA',                  data: 'lineasPhiladelphia',          stationData: 'estacionesPhiladelphia',          locale: 'en' },
  'app/phoenix/line/[id]/page.jsx':                 { variant: 'line', citySlug: 'phoenix',            city: 'Phoenix',            country: 'US', system: 'Valley Metro Rail',      data: 'lineasPhoenix',               stationData: 'estacionesPhoenix',               locale: 'en' },
  'app/pittsburgh/line/[id]/page.jsx':              { variant: 'line', citySlug: 'pittsburgh',         city: 'Pittsburgh',         country: 'US', system: 'Pittsburgh Light Rail',  data: 'lineasDetallePittsburgh',     stationData: 'estacionesPittsburgh',            locale: 'en' },
  'app/sacramento/line/[id]/page.jsx':              { variant: 'line', citySlug: 'sacramento',         city: 'Sacramento',         country: 'US', system: 'Sacramento RT Light Rail', data: 'lineasSacramento',          stationData: 'estacionesSacramento',            locale: 'en' },
  'app/salt-lake-city/line/[id]/page.jsx':          { variant: 'line', citySlug: 'salt-lake-city',     city: 'Salt Lake City',     country: 'US', system: 'UTA TRAX',               data: 'lineasSaltLakeCity',          stationData: 'estacionesSaltLakeCity',          locale: 'en' },
  'app/san-diego/line/[id]/page.jsx':               { variant: 'line', citySlug: 'san-diego',          city: 'San Diego',          country: 'US', system: 'San Diego Trolley',      data: 'lineasDetalleSanDiego',       stationData: 'estacionesSanDiego',              locale: 'en' },
  'app/san-francisco/line/[id]/page.jsx':           { variant: 'line', citySlug: 'san-francisco',      city: 'San Francisco',      country: 'US', system: 'BART',                   data: 'lineasSF',                    stationData: 'estacionesSF',                    locale: 'en' },
  'app/san-jose/line/[id]/page.jsx':                { variant: 'line', citySlug: 'san-jose',           city: 'San Jose',           country: 'US', system: 'VTA Light Rail',         data: 'lineasSanJose',               stationData: 'estacionesSanJose',               locale: 'en' },
  'app/san-juan/line/[id]/page.jsx':                { variant: 'line', citySlug: 'san-juan',           city: 'San Juan',           country: 'PR', system: 'Tren Urbano',            data: 'lineasSanJuan',               stationData: 'estacionesSanJuan',               locale: 'es' },
  'app/santiago/line/[id]/page.jsx':                { variant: 'line', citySlug: 'santiago',           city: 'Santiago',           country: 'CL', system: 'Metro de Santiago',      data: 'lineasSantiago',              stationData: 'estacionesSantiago',              locale: 'es' },
  'app/sao-paulo/line/[id]/page.jsx':               { variant: 'line', citySlug: 'sao-paulo',          city: 'São Paulo',          country: 'BR', system: 'Metrô de São Paulo',     data: 'lineasSaoPaulo',              stationData: 'estacionesSaoPaulo',              locale: 'es' },
  'app/seattle/line/[id]/page.jsx':                 { variant: 'line', citySlug: 'seattle',            city: 'Seattle',            country: 'US', system: 'Sound Transit Link',     data: 'lineasSeattle',               stationData: 'estacionesSeattle',               locale: 'en' },
  'app/seoul/line/[id]/page.jsx':                   { variant: 'line', citySlug: 'seoul',              city: 'Seúl',               country: 'KR', system: 'Seoul Metro',            data: 'lineasSeoul',                 stationData: 'estacionesSeoul',                 locale: 'es' },
  'app/singapore/line/[id]/page.jsx':               { variant: 'line', citySlug: 'singapore',          city: 'Singapur',           country: 'SG', system: 'SMRT',                   data: 'lineasSingapore',             stationData: 'estacionesSingapore',             locale: 'es' },
  'app/st-louis/line/[id]/page.jsx':                { variant: 'line', citySlug: 'st-louis',           city: 'St. Louis',          country: 'US', system: 'MetroLink',              data: 'lineasStLouis',               stationData: 'estacionesStLouis',               locale: 'en' },
  'app/sydney/line/[id]/page.jsx':                  { variant: 'line', citySlug: 'sydney',             city: 'Sídney',             country: 'AU', system: 'Sydney Metro',           data: 'lineasSydney',                stationData: 'estacionesSydney',                locale: 'es' },
  'app/tampa/line/[id]/page.jsx':                   { variant: 'line', citySlug: 'tampa',              city: 'Tampa',              country: 'US', system: 'TECO Line Streetcar',    data: 'lineasTampa',                 stationData: 'estacionesTampa',                 locale: 'en' },
  'app/tokyo/line/[id]/page.jsx':                   { variant: 'line', citySlug: 'tokyo',              city: 'Tokio',              country: 'JP', system: 'Tokyo Metro',            data: 'lineasTokyo',                 stationData: 'estacionesTokyo',                 locale: 'es' },
  'app/toronto/line/[id]/page.jsx':                 { variant: 'line', citySlug: 'toronto',            city: 'Toronto',            country: 'CA', system: 'TTC Subway',             data: 'lineasToronto',               stationData: 'estacionesToronto',               locale: 'en' },
  'app/tucson/line/[id]/page.jsx':                  { variant: 'line', citySlug: 'tucson',             city: 'Tucson',             country: 'US', system: 'Sun Link Streetcar',     data: 'lineasTucson',                stationData: 'estacionesTucson',                locale: 'en' },
  'app/vancouver/line/[id]/page.jsx':               { variant: 'line', citySlug: 'vancouver',          city: 'Vancouver',          country: 'CA', system: 'TransLink SkyTrain',     data: 'lineasVancouver',             stationData: 'estacionesVancouver',             locale: 'en' },
  'app/washington-dc/line/[id]/page.jsx':           { variant: 'line', citySlug: 'washington-dc',      city: 'Washington DC',      country: 'US', system: 'WMATA Metro',            data: 'lineasDetalleDC',             stationData: 'estacionesDC',                    locale: 'en' },
};

let edited = 0;
let skipped = 0;
let errors = [];

for (const [relPath, c] of Object.entries(cfg)) {
  const abs = path.join(ROOT, relPath);
  if (!fs.existsSync(abs)) {
    errors.push(`MISSING: ${relPath}`);
    continue;
  }
  let src = fs.readFileSync(abs, 'utf8');

  if (
    src.includes('IntlStationSchema') ||
    src.includes('IntlLineSchema') ||
    src.includes('application/ld+json') ||
    /from ['"]@\/app\/components\/(LineSchema|StationSchema)['"]/.test(src)
  ) {
    skipped++;
    continue;
  }

  // 1. Add import after last existing import line
  const importLines = [...src.matchAll(/^import .+;?\s*$/gm)];
  if (importLines.length === 0) {
    errors.push(`NO IMPORTS in ${relPath}`);
    continue;
  }
  const lastImport = importLines[importLines.length - 1];
  const insertAt = lastImport.index + lastImport[0].length;
  const importStmt =
    c.variant === 'station'
      ? `\nimport { IntlStationSchema } from '@/app/components/IntlSchema';`
      : `\nimport { IntlLineSchema } from '@/app/components/IntlSchema';`;
  src = src.slice(0, insertAt) + importStmt + src.slice(insertAt);

  // 2. Find the SUCCESS-path <main element. Strategy: find the LAST `<main`
  //    occurrence in the file, since the 404 fallback `<main>` is always
  //    rendered before in `if (!estacion) return …` and the success main
  //    appears later in the default export.
  const mainMatches = [...src.matchAll(/<main\b[^>]*>/g)];
  if (mainMatches.length === 0) {
    errors.push(`NO <main> in ${relPath}`);
    continue;
  }
  const lastMain = mainMatches[mainMatches.length - 1];
  const injectionPoint = lastMain.index + lastMain[0].length;

  let schemaJsx;
  if (c.variant === 'station') {
    // The page's local variable for the resolved station object varies.
    // We resolve it ourselves using the data array, by finding the
    // generateStaticParams style `find` line used in the function body.
    schemaJsx = `\n      <IntlStationSchema station={(${c.data}.find(s => s.slug === params.slug)) || null} city="${c.city}" citySlug="${c.citySlug}" stationPathPrefix="/${c.citySlug}/station" linePathPrefix="/${c.citySlug}/line" country="${c.country}" systemName="${c.system}" locale="${c.locale}" />`;
  } else {
    schemaJsx = `\n      <IntlLineSchema line={(${c.data}.find(l => l.id === params.id)) || null} stations={((${c.data}.find(l => l.id === params.id) || {}).estaciones || []).map(s => (typeof s === 'string' ? (${c.stationData}.find(x => x.slug === s) || { slug: s, nombre: s }) : s))} city="${c.city}" citySlug="${c.citySlug}" linePathPrefix="/${c.citySlug}/line" stationPathPrefix="/${c.citySlug}/station" country="${c.country}" systemName="${c.system}" locale="${c.locale}" />`;
  }

  src = src.slice(0, injectionPoint) + schemaJsx + src.slice(injectionPoint);

  // 3. Make sure the data import we reference is already imported in the file.
  //    All target pages already import `${data}` and `${stationData}` (we
  //    verified by hand). If a page doesn't import the station-data array
  //    (line variant), add it.
  if (c.variant === 'line') {
    const importStation = c.stationData;
    const hasStationImport = new RegExp(`\\b${importStation}\\b`).test(src.slice(0, src.indexOf('export ')));
    if (!hasStationImport) {
      // try inserting near the existing data import
      const dataImportRe = new RegExp(`(import\\s*\\{\\s*${c.data}\\s*\\}\\s*from\\s*['"][^'"]+['"];?)`);
      const m = src.match(dataImportRe);
      if (m) {
        const stationDataPath = `@/data/${c.citySlug}/estaciones`;
        const newImport = `import { ${importStation} } from '${stationDataPath}';\n`;
        src = src.replace(dataImportRe, `${m[1]}\n${newImport}`);
      }
    }
  }

  fs.writeFileSync(abs, src, 'utf8');
  edited++;
  console.log(`patched: ${relPath}`);
}

console.log(`\nDONE: ${edited} edited, ${skipped} skipped, ${errors.length} errors`);
if (errors.length) {
  console.log('errors:');
  errors.forEach((e) => console.log('  ' + e));
  process.exit(1);
}
