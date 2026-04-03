#!/usr/bin/env node
/**
 * generate-i18n-usca.js
 * Generates i18n pages under app/[lang]/ for ALL US/CA cities
 * Creates: hub page.jsx, station/[slug]/page.jsx, line/[id]/page.jsx
 * Also updates translation files with missing city keys
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const APP_LANG = path.join(ROOT, 'app', '[lang]');
const TRANSLATIONS_DIR = path.join(ROOT, 'translations');

// All US/CA cities with their import/export mappings
const CITIES = [
  // ===== EXISTING in [lang] (need station + line sub-routes) =====
  { slug: 'nyc', name: 'New York City', state: 'New York', country: 'US', estExport: 'estacionesNYC', linExport: 'lineasNYC', color: '#FF4F5E', stationCount: 472, lineCount: 24, distance: '~1,300 km', hasLangHub: true, fifa: true },
  { slug: 'los-angeles', name: 'Los Angeles', state: 'California', country: 'US', estExport: 'estacionesLA', linExport: 'lineasLA', color: '#E84855', stationCount: 106, lineCount: 21, distance: '~170 km', hasLangHub: true, fifa: true },
  { slug: 'houston', name: 'Houston', state: 'Texas', country: 'US', estExport: 'estacionesHOU', linExport: 'lineasHOU', color: '#8A2BE2', stationCount: 39, lineCount: 3, distance: '~36 km', hasLangHub: true, fifa: true },
  { slug: 'atlanta', name: 'Atlanta', state: 'Georgia', country: 'US', estExport: 'estacionesAtlanta', linExport: 'lineasAtlanta', color: '#E5A100', stationCount: 38, lineCount: 4, distance: '~77 km', hasLangHub: true, fifa: true },
  { slug: 'philadelphia', name: 'Philadelphia', state: 'Pennsylvania', country: 'US', estExport: 'estacionesPhiladelphia', linExport: 'bslDetalle', color: '#0066CC', stationCount: 156, lineCount: 8, distance: '~100 km', hasLangHub: true, fifa: true },
  { slug: 'seattle', name: 'Seattle', state: 'Washington', country: 'US', estExport: 'estacionesSeattle', linExport: 'lineasSeattle', color: '#00A651', stationCount: 25, lineCount: 3, distance: '~50 km', hasLangHub: true, fifa: true },
  { slug: 'san-francisco', name: 'San Francisco', state: 'California', country: 'US', estExport: 'estacionesSF', linExport: 'lineasSF', color: '#0099CC', stationCount: 147, lineCount: 15, distance: '~180 km', hasLangHub: true, fifa: true },
  { slug: 'boston', name: 'Boston', state: 'Massachusetts', country: 'US', estExport: 'estacionesBoston', linExport: 'lineasBoston', color: '#DA291C', stationCount: 155, lineCount: 7, distance: '~130 km', hasLangHub: true, fifa: true },
  { slug: 'miami', name: 'Miami', state: 'Florida', country: 'US', estExport: 'estacionesMiami', linExport: 'lineasMiami', color: '#FF6F00', stationCount: 45, lineCount: 5, distance: '~40 km', hasLangHub: true, fifa: true },
  { slug: 'dallas', name: 'Dallas', state: 'Texas', country: 'US', estExport: 'estacionesDallas', linExport: 'lineasDallas', color: '#CC0000', stationCount: 64, lineCount: 6, distance: '~150 km', hasLangHub: true, fifa: true },
  { slug: 'kansas-city', name: 'Kansas City', state: 'Missouri', country: 'US', estExport: 'estacionesKansasCity', linExport: 'lineasKansasCity', color: '#CE1141', stationCount: 16, lineCount: 2, distance: '~6 km', hasLangHub: true, fifa: true },
  { slug: 'toronto', name: 'Toronto', state: 'Ontario', country: 'CA', estExport: 'estacionesTORONTO', linExport: 'lineasTORONTO', color: '#D4261D', stationCount: 75, lineCount: 6, distance: '~77 km', hasLangHub: true, fifa: true },
  { slug: 'vancouver', name: 'Vancouver', state: 'British Columbia', country: 'CA', estExport: 'estacionesVANCOUVER', linExport: 'lineasVANCOUVER', color: '#0061A8', stationCount: 53, lineCount: 5, distance: '~80 km', hasLangHub: true, fifa: false },

  // ===== MISSING from [lang] entirely =====
  { slug: 'chicago', name: 'Chicago', state: 'Illinois', country: 'US', estExport: 'estacionesChicago', linExport: 'lineasDetalleChicago', color: '#00A1DE', stationCount: 145, lineCount: 8, distance: '~165 km', hasLangHub: false, fifa: false },
  { slug: 'washington-dc', name: 'Washington D.C.', state: 'District of Columbia', country: 'US', estExport: 'estacionesDC', linExport: 'lineasDetalleDC', color: '#004B87', stationCount: 97, lineCount: 6, distance: '~190 km', hasLangHub: false, fifa: false },
  { slug: 'portland', name: 'Portland', state: 'Oregon', country: 'US', estExport: 'estacionesPortland', linExport: 'lineasPortland', color: '#D15F27', stationCount: 97, lineCount: 6, distance: '~97 km', hasLangHub: false, fifa: false },
  { slug: 'denver', name: 'Denver', state: 'Colorado', country: 'US', estExport: 'estacionesDenver', linExport: 'lineasDenver', color: '#6D2077', stationCount: 53, lineCount: 7, distance: '~72 km', hasLangHub: false, fifa: false },
  { slug: 'salt-lake-city', name: 'Salt Lake City', state: 'Utah', country: 'US', estExport: 'estacionesSaltLakeCity', linExport: 'lineasSaltLakeCity', color: '#0072CE', stationCount: 50, lineCount: 5, distance: '~72 km', hasLangHub: false, fifa: false },
  { slug: 'sacramento', name: 'Sacramento', state: 'California', country: 'US', estExport: 'estacionesSacramento', linExport: 'lineasSacramento', color: '#0068B3', stationCount: 52, lineCount: 3, distance: '~69 km', hasLangHub: false, fifa: false },
  { slug: 'san-diego', name: 'San Diego', state: 'California', country: 'US', estExport: 'estacionesSanDiego', linExport: 'lineasDetalleSanDiego', color: '#E31837', stationCount: 54, lineCount: 4, distance: '~86 km', hasLangHub: false, fifa: false },
  { slug: 'minneapolis', name: 'Minneapolis', state: 'Minnesota', country: 'US', estExport: 'estacionesMinneapolis', linExport: 'lineasDetalleMinneapolis', color: '#003DA5', stationCount: 38, lineCount: 3, distance: '~37 km', hasLangHub: false, fifa: false },
  { slug: 'charlotte', name: 'Charlotte', state: 'North Carolina', country: 'US', estExport: 'estacionesCharlotte', linExport: 'lineasDetalleCharlotte', color: '#1A8FDB', stationCount: 26, lineCount: 2, distance: '~31 km', hasLangHub: false, fifa: false },
  { slug: 'phoenix', name: 'Phoenix', state: 'Arizona', country: 'US', estExport: 'estacionesPhoenix', linExport: 'lineasPhoenix', color: '#8B4513', stationCount: 35, lineCount: 2, distance: '~42 km', hasLangHub: false, fifa: false },
  { slug: 'baltimore', name: 'Baltimore', state: 'Maryland', country: 'US', estExport: 'estacionesBaltimore', linExport: 'lineasDetalleBaltimore', color: '#6F2C91', stationCount: 44, lineCount: 3, distance: '~48 km', hasLangHub: false, fifa: false },
  { slug: 'cleveland', name: 'Cleveland', state: 'Ohio', country: 'US', estExport: 'estacionesCleveland', linExport: 'lineasCleveland', color: '#BA0C2F', stationCount: 52, lineCount: 4, distance: '~50 km', hasLangHub: false, fifa: false },
  { slug: 'buffalo', name: 'Buffalo', state: 'New York', country: 'US', estExport: 'estacionesBuffalo', linExport: 'lineasBuffalo', color: '#003DA5', stationCount: 14, lineCount: 1, distance: '~10 km', hasLangHub: false, fifa: false },
  { slug: 'new-orleans', name: 'New Orleans', state: 'Louisiana', country: 'US', estExport: 'estacionesNewOrleans', linExport: 'lineasNewOrleans', color: '#8B7355', stationCount: 50, lineCount: 5, distance: '~33 km', hasLangHub: false, fifa: false },
  { slug: 'st-louis', name: 'St. Louis', state: 'Missouri', country: 'US', estExport: 'estacionesStLouis', linExport: 'lineasStLouis', color: '#003DA5', stationCount: 38, lineCount: 2, distance: '~74 km', hasLangHub: false, fifa: false },
  { slug: 'pittsburgh', name: 'Pittsburgh', state: 'Pennsylvania', country: 'US', estExport: 'estacionesPittsburgh', linExport: 'lineasDetallePittsburgh', color: '#EEB211', stationCount: 53, lineCount: 4, distance: '~42 km', hasLangHub: false, fifa: false },
  { slug: 'detroit', name: 'Detroit', state: 'Michigan', country: 'US', estExport: 'estacionesDetroit', linExport: 'lineasDetroit', color: '#00274C', stationCount: 20, lineCount: 2, distance: '~6 km', hasLangHub: false, fifa: false },
  { slug: 'san-jose', name: 'San Jose', state: 'California', country: 'US', estExport: 'estacionesSanJose', linExport: 'lineasSanJose', color: '#0070C0', stationCount: 62, lineCount: 4, distance: '~67 km', hasLangHub: false, fifa: false },
  { slug: 'newark', name: 'Newark', state: 'New Jersey', country: 'US', estExport: 'estacionesNewark', linExport: 'lineasNewark', color: '#E76F51', stationCount: 21, lineCount: 3, distance: '~17 km', hasLangHub: false, fifa: false },
  { slug: 'honolulu', name: 'Honolulu', state: 'Hawaii', country: 'US', estExport: 'estacionesHonolulu', linExport: 'lineasHonolulu', color: '#0077BE', stationCount: 21, lineCount: 1, distance: '~32 km', hasLangHub: false, fifa: false },
  { slug: 'las-vegas', name: 'Las Vegas', state: 'Nevada', country: 'US', estExport: 'estacionesLasVegas', linExport: 'lineasLasVegas', color: '#C5B358', stationCount: 7, lineCount: 1, distance: '~6 km', hasLangHub: false, fifa: false },
  { slug: 'norfolk', name: 'Norfolk', state: 'Virginia', country: 'US', estExport: 'estacionesNorfolk', linExport: 'lineasNorfolk', color: '#003087', stationCount: 11, lineCount: 1, distance: '~12 km', hasLangHub: false, fifa: false },
  { slug: 'tampa', name: 'Tampa', state: 'Florida', country: 'US', estExport: 'estacionesTampa', linExport: 'lineasTampa', color: '#005C5C', stationCount: 11, lineCount: 1, distance: '~4 km', hasLangHub: false, fifa: false },
  { slug: 'austin', name: 'Austin', state: 'Texas', country: 'US', estExport: 'estacionesAustin', linExport: 'lineasAustin', color: '#BF5700', stationCount: 9, lineCount: 1, distance: '~51 km', hasLangHub: false, fifa: false },
  { slug: 'cincinnati', name: 'Cincinnati', state: 'Ohio', country: 'US', estExport: 'estacionesCincinnati', linExport: 'lineasCincinnati', color: '#FB4D42', stationCount: 8, lineCount: 1, distance: '~6 km', hasLangHub: false, fifa: false },
  { slug: 'el-paso', name: 'El Paso', state: 'Texas', country: 'US', estExport: 'estacionesElPaso', linExport: 'lineasElPaso', color: '#800020', stationCount: 10, lineCount: 2, distance: '~8 km', hasLangHub: false, fifa: false },
  { slug: 'jacksonville', name: 'Jacksonville', state: 'Florida', country: 'US', estExport: 'estacionesJacksonville', linExport: 'lineasJacksonville', color: '#00687F', stationCount: 8, lineCount: 1, distance: '~4 km', hasLangHub: false, fifa: false },
  { slug: 'milwaukee', name: 'Milwaukee', state: 'Wisconsin', country: 'US', estExport: 'estacionesMilwaukee', linExport: 'lineasMilwaukee', color: '#0A3161', stationCount: 8, lineCount: 1, distance: '~4 km', hasLangHub: false, fifa: false },
  { slug: 'nashville', name: 'Nashville', state: 'Tennessee', country: 'US', estExport: 'estacionesNashville', linExport: 'lineasNashville', color: '#C8102E', stationCount: 7, lineCount: 1, distance: '~51 km', hasLangHub: false, fifa: false },
  { slug: 'oklahoma-city', name: 'Oklahoma City', state: 'Oklahoma', country: 'US', estExport: 'estacionesOklahomaCity', linExport: 'lineasOklahomaCity', color: '#DC143C', stationCount: 8, lineCount: 1, distance: '~9 km', hasLangHub: false, fifa: false },
  { slug: 'orlando', name: 'Orlando', state: 'Florida', country: 'US', estExport: 'estacionesOrlando', linExport: 'lineasOrlando', color: '#0057B7', stationCount: 16, lineCount: 1, distance: '~100 km', hasLangHub: false, fifa: false },
  { slug: 'san-juan', name: 'San Juan', state: 'Puerto Rico', country: 'US', estExport: 'estacionesSanJuan', linExport: 'lineasSanJuan', color: '#E2231A', stationCount: 16, lineCount: 1, distance: '~17 km', hasLangHub: false, fifa: false },
  { slug: 'tucson', name: 'Tucson', state: 'Arizona', country: 'US', estExport: 'estacionesTucson', linExport: 'lineasTucson', color: '#CC0033', stationCount: 14, lineCount: 1, distance: '~6 km', hasLangHub: false, fifa: false },
  { slug: 'montreal', name: 'Montreal', state: 'Quebec', country: 'CA', estExport: 'estacionesMontreal', linExport: 'lineasMontreal', color: '#0072CE', stationCount: 68, lineCount: 5, distance: '~71 km', hasLangHub: false, fifa: false },
  { slug: 'calgary', name: 'Calgary', state: 'Alberta', country: 'CA', estExport: 'estacionesCalgary', linExport: 'lineasCalgary', color: '#D93F3C', stationCount: 45, lineCount: 3, distance: '~62 km', hasLangHub: false, fifa: false },
  { slug: 'edmonton', name: 'Edmonton', state: 'Alberta', country: 'CA', estExport: 'estacionesEdmonton', linExport: 'lineasEdmonton', color: '#003087', stationCount: 18, lineCount: 2, distance: '~25 km', hasLangHub: false, fifa: false },
  { slug: 'ottawa', name: 'Ottawa', state: 'Ontario', country: 'CA', estExport: 'estacionesOttawa', linExport: 'lineasOttawa', color: '#CF202F', stationCount: 25, lineCount: 2, distance: '~31 km', hasLangHub: false, fifa: false },
  { slug: 'kitchener-waterloo', name: 'Kitchener-Waterloo', state: 'Ontario', country: 'CA', estExport: 'estacionesKitchenerWaterloo', linExport: 'lineasKitchenerWaterloo', color: '#0066CC', stationCount: 19, lineCount: 1, distance: '~19 km', hasLangHub: false, fifa: false },
  { slug: 'mississauga', name: 'Mississauga', state: 'Ontario', country: 'CA', estExport: 'estacionesMississauga', linExport: 'lineasMississauga', color: '#00A5E3', stationCount: 17, lineCount: 1, distance: '~18 km', hasLangHub: false, fifa: false },
];

function mkdirp(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

// ============================================================================
// HUB PAGE TEMPLATE
// ============================================================================
function generateHubPage(city) {
  const countryName = city.country === 'US' ? 'United States' : 'Canada';
  return `import { ${city.linExport} } from '@/data/${city.slug}/lineas-detalle';
import { ${city.estExport} } from '@/data/${city.slug}/estaciones';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';${city.fifa ? "\nimport AffiliateMundial from '@/app/components/AffiliateMundial';" : ''}
import { LANGUAGES, buildMetadata, t, getDefaultLangForCity } from '@/lib/i18n';

export function generateStaticParams() {
  const defaultLang = getDefaultLangForCity('${city.slug}');
  return LANGUAGES.filter(l => l !== defaultLang).map(lang => ({ lang }));
}

export async function generateMetadata({ params }) {
  const translations = require(\`@/translations/\${params.lang}.json\`);
  return buildMetadata({
    lang: params.lang,
    title: t(translations, '${city.slug}.title', '${city.name} Transit Guide') + ' — MetroGuia',
    description: t(translations, '${city.slug}.heroDesc', '${city.name} transit guide with ${city.lineCount} lines and ${city.stationCount} stations'),
    path: '/${city.slug}/',
    keywords: ['${city.name}', 'transit', 'metro', '${city.state}', 'public transport', 'transit guide'],
  });
}

export default function ${slugToComponent(city.slug)}PageLang({ params }) {
  const lang = params.lang;
  const translations = require(\`@/translations/\${lang}.json\`);

  const estaciones = ${city.estExport};
  const lineas = ${city.linExport};
  const featuredSlugs = estaciones.slice(0, 5).map(e => e.slug);
  const estacionesDestacadas = estaciones.filter(e => featuredSlugs.includes(e.slug));

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: '${city.name}', item: \`https://metroguia.mx/\${lang}/${city.slug}/\` },
    ],
  };

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="hero" style={{ background: 'linear-gradient(135deg, ${city.color} 0%, ${city.color}cc 100%)', color: '#FFFFFF', padding: '80px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '800', margin: '0 0 16px 0', lineHeight: '1.2', letterSpacing: '-0.02em' }}>
            {t(translations, '${city.slug}.title', '${city.name} Transit Guide')}
          </h1>
          <p style={{ fontSize: '1.5rem', fontWeight: '500', margin: '0 0 24px 0', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', opacity: '0.95', lineHeight: '1.4' }}>
            {t(translations, '${city.slug}.subtitle', '${city.state}, ${countryName}')}
          </p>
          <p style={{ fontSize: '1.125rem', fontWeight: '400', margin: '0', opacity: '0.9', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            {t(translations, '${city.slug}.heroDesc', 'Complete transit guide for ${city.name}')}
          </p>
        </div>
      </section>

      {/* STATS */}
      <section style={{ backgroundColor: 'var(--surface)', padding: '48px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', textAlign: 'center' }}>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '${city.color}', margin: '0 0 8px 0' }}>{estaciones.length}</p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>{t(translations, '${city.slug}.stations', t(translations, 'city.stations', 'Stations'))}</p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '${city.color}', margin: '0 0 8px 0' }}>{lineas.length}</p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>{t(translations, '${city.slug}.operativeLines', t(translations, 'city.lines', 'Lines'))}</p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '${city.color}', margin: '0 0 8px 0' }}>${city.distance}</p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>{t(translations, '${city.slug}.kilometers', t(translations, 'city.networkLength', 'Network'))}</p>
          </div>
        </div>
      </section>

      {/* TRIP PLANNER */}
      <section style={{ backgroundColor: 'var(--bg)', padding: '60px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '12px', textAlign: 'center', color: 'var(--text)' }}>
            {t(translations, '${city.slug}.planRoute', t(translations, 'city.planRoute', 'Plan your Route'))}
          </h2>
          <p style={{ fontSize: '1rem', textAlign: 'center', marginBottom: '24px', color: 'var(--text-muted)' }}>
            {t(translations, '${city.slug}.planRouteDesc', t(translations, 'city.planRouteDesc', 'Find the best route between stations'))}
          </p>
          <SearchBar ciudad="${city.slug}" lang={lang} />
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />
${city.fifa ? `
      {/* WORLD CUP 2026 */}
      <section style={{ backgroundColor: 'var(--bg)', padding: '80px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '16px', textAlign: 'center', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            {t(translations, '${city.slug}.worldCupTitle', 'FIFA World Cup 2026')}
          </h2>
          <p style={{ fontSize: '1.125rem', textAlign: 'center', marginBottom: '48px', color: 'var(--text-muted)', fontWeight: '400', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            {t(translations, '${city.slug}.worldCupDesc', 'Transit guide for World Cup 2026 venues')}
          </p>
          <AffiliateMundial ciudad="${city.name}" estadio="" estacion="" />
        </div>
      </section>
` : ''}
      {/* LINES */}
      <section style={{ backgroundColor: 'var(--bg)', padding: '80px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '48px', textAlign: 'center', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            {t(translations, 'line.allLines', 'All Lines')}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {lineas.slice(0, 12).map((linea) => (
              <Link href={\`/\${lang}/${city.slug}/line/\${linea.id}\`} key={linea.id}>
                <div style={{ backgroundColor: 'var(--surface)', border: \`2px solid \${linea.color || '${city.color}'}\`, borderRadius: '10px', padding: '24px', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                  <div style={{ width: '48px', height: '48px', backgroundColor: linea.color || '${city.color}', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontSize: '18px', fontWeight: '800', marginBottom: '16px' }}>{linea.id}</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 8px 0', color: linea.color || '${city.color}' }}>
                    {linea.nombre || linea.name || \`Line \${linea.id}\`}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: '0 0 12px 0' }}>{linea.inicio} → {linea.fin}</p>
                  <p style={{ fontSize: '0.875rem', fontWeight: '600', color: linea.color || '${city.color}', margin: '0' }}>{linea.total || linea.estaciones?.length || '—'} {t(translations, 'city.stations', 'stations').toLowerCase()}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AdBannerLazyInArticle slot="1082410395" />

      {/* FEATURED STATIONS */}
      <section style={{ backgroundColor: 'var(--bg)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ maxWidth: '1000px', margin: 'auto', padding: '0 1rem', marginBottom: '2rem' }}>
            <AffiliateTransportCard ciudad="${city.name}" estacion={null} fechas={null} />
          </div>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '48px', textAlign: 'center', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            {t(translations, '${city.slug}.featuredStations', t(translations, 'city.featuredStations', 'Featured Stations'))}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {estacionesDestacadas.map((estacion) => (
              <Link href={\`/\${lang}/${city.slug}/station/\${estacion.slug}\`} key={estacion.slug}>
                <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '10px', padding: '24px', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 8px 0', color: 'var(--text)' }}>{estacion.nombre}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: '0 0 12px 0', fontWeight: '500' }}>{estacion.borough || estacion.municipio || estacion.zona || ''}</p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text)', margin: '0', lineHeight: '1.6' }}>{estacion.intro || estacion.descripcion || ''}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
`;
}

// ============================================================================
// STATION PAGE TEMPLATE
// ============================================================================
function generateStationPage(city) {
  return `import { ${city.estExport} } from '@/data/${city.slug}/estaciones';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import { LANGUAGES, buildMetadata, t, getDefaultLangForCity } from '@/lib/i18n';

export function generateStaticParams() {
  const defaultLang = getDefaultLangForCity('${city.slug}');
  const params = [];
  LANGUAGES.filter(l => l !== defaultLang).forEach(lang => {
    ${city.estExport}.forEach(estacion => {
      params.push({ lang, slug: estacion.slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }) {
  const estacion = ${city.estExport}.find(e => e.slug === params.slug);
  if (!estacion) return { title: 'Station not found — MetroGuia' };
  return buildMetadata({
    lang: params.lang,
    title: \`\${estacion.nombre} — ${city.name} Transit | MetroGuia\`,
    description: estacion.meta_description || estacion.descripcion || estacion.intro || \`\${estacion.nombre} station in ${city.name}\`,
    path: \`/${city.slug}/station/\${estacion.slug}/\`,
    keywords: ['${city.name}', estacion.nombre, 'transit', 'station'],
  });
}

export default function Station${slugToComponent(city.slug)}PageLang({ params }) {
  const lang = params.lang;
  const translations = require(\`@/translations/\${lang}.json\`);
  const estacion = ${city.estExport}.find(e => e.slug === params.slug);

  if (!estacion) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--danger)' }}>{t(translations, 'station.notFound', 'Station not found')}</h1>
        <Link href={\`/\${lang}/${city.slug}\`}>
          <button style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: '${city.color}', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            ← ${city.name}
          </button>
        </Link>
      </main>
    );
  }

  const lineas = Array.isArray(estacion.linea) ? estacion.linea : (estacion.linea ? [estacion.linea] : []);
  const colorPrimaria = '${city.color}';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: '${city.name}', item: \`https://metroguia.mx/\${lang}/${city.slug}/\` },
      { '@type': 'ListItem', position: 3, name: estacion.nombre, item: \`https://metroguia.mx/\${lang}/${city.slug}/station/\${estacion.slug}\` },
    ],
  };

  const desc = estacion.descripcion_turistica || estacion.descripcion || estacion.intro || '';
  const lugaresArr = estacion.lugares_cercanos || [];
  const tipsArr = estacion.tips || [];
  const borough = estacion.borough || estacion.municipio || estacion.zona || '${city.state}';

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section style={{ background: \`linear-gradient(135deg, \${colorPrimaria} 0%, \${colorPrimaria}cc 100%)\`, color: '#fff', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            {lineas.length > 0 && (
              <span style={{ width: '48px', height: '48px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', fontWeight: '700' }}>
                {String(lineas[0]).substring(0, 3)}
              </span>
            )}
            <span style={{ fontSize: '1rem', fontWeight: '500' }}>{borough}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', margin: '0 0 16px 0', lineHeight: '1.2' }}>
            {estacion.nombre}
          </h1>
          <p style={{ fontSize: '1.125rem', margin: '0', opacity: '0.95', maxWidth: '700px', lineHeight: '1.6' }}>
            {desc}
          </p>
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* MAIN CONTENT */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '48px' }}>
          {/* LEFT */}
          <div>
            {/* Lines */}
            {lineas.length > 0 && (
              <div style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text)', borderBottom: \`3px solid \${colorPrimaria}\`, paddingBottom: '12px' }}>
                  {t(translations, 'station.linesServing', 'Lines Serving This Station')}
                </h2>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {lineas.map((lineId, idx) => (
                    <Link href={\`/\${lang}/${city.slug}/line/\${lineId}\`} key={idx} style={{ textDecoration: 'none' }}>
                      <button style={{ padding: '8px 16px', backgroundColor: colorPrimaria, color: '#fff', border: 'none', borderRadius: '4px', fontWeight: '700', fontSize: '0.9rem', cursor: 'pointer' }}>
                        {String(lineId).toUpperCase()}
                      </button>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* About */}
            {desc && (
              <div style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text)', borderBottom: \`3px solid \${colorPrimaria}\`, paddingBottom: '12px' }}>
                  {t(translations, 'station.about', 'About This Station')}
                </h2>
                <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0', lineHeight: '1.8' }}>{desc}</p>
              </div>
            )}

            {/* Tips */}
            {tipsArr.length > 0 && (
              <div style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text)', borderBottom: \`3px solid \${colorPrimaria}\`, paddingBottom: '12px' }}>
                  {t(translations, 'station.tips', 'Useful Tips')}
                </h2>
                <ul style={{ fontSize: '1rem', color: 'var(--text)', margin: '0', paddingLeft: '20px', lineHeight: '1.8' }}>
                  {tipsArr.map((tip, idx) => <li key={idx}>{tip}</li>)}
                </ul>
              </div>
            )}

            {/* Nearby */}
            {lugaresArr.length > 0 && (
              <div style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '24px', color: 'var(--text)', borderBottom: \`3px solid \${colorPrimaria}\`, paddingBottom: '12px' }}>
                  {t(translations, 'station.nearbyPlaces', 'Nearby Places')}
                </h2>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {lugaresArr.map((lugar, idx) => {
                    const lugarName = typeof lugar === 'string' ? lugar : (lugar.nombre || lugar.name || '');
                    const lugarDetail = typeof lugar === 'string' ? null : [lugar.tipo, lugar.distancia].filter(Boolean).join(' · ');
                    return (
                      <div key={idx} style={{ padding: '16px', backgroundColor: 'var(--surface)', borderLeft: \`4px solid \${colorPrimaria}\`, borderRadius: 'var(--radius-sm)' }}>
                        <h3 style={{ fontSize: '1rem', fontWeight: '700', margin: '0 0 4px 0', color: 'var(--text)' }}>{lugarName}</h3>
                        {lugarDetail && <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0' }}>{lugarDetail}</p>}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* RIGHT SIDEBAR */}
          <div>
            <div style={{ backgroundColor: 'var(--surface)', padding: '24px', borderRadius: 'var(--radius)', marginBottom: '32px', borderLeft: \`4px solid \${colorPrimaria}\` }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
                {t(translations, 'station.quickInfo', 'Quick Info')}
              </h3>
              <div style={{ display: 'grid', gap: '12px', fontSize: '0.9rem' }}>
                {lineas.length > 0 && (
                  <div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', margin: '0 0 4px 0', fontWeight: '600' }}>Lines</p>
                    <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0', color: colorPrimaria }}>{lineas.join(', ')}</p>
                  </div>
                )}
                <div>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', margin: '0 0 4px 0', fontWeight: '600' }}>Area</p>
                  <p style={{ fontSize: '1rem', fontWeight: '700', margin: '0', color: 'var(--text)' }}>{borough}</p>
                </div>
              </div>
            </div>
            <AffiliateTransportCard ciudad="${city.name}" estacion={null} fechas={null} />
          </div>
        </div>
      </section>
    </main>
  );
}
`;
}

// ============================================================================
// LINE PAGE TEMPLATE
// ============================================================================
function generateLinePage(city) {
  return `import { ${city.linExport} } from '@/data/${city.slug}/lineas-detalle';
import { ${city.estExport} } from '@/data/${city.slug}/estaciones';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import { LANGUAGES, buildMetadata, t, getDefaultLangForCity } from '@/lib/i18n';

export function generateStaticParams() {
  const defaultLang = getDefaultLangForCity('${city.slug}');
  const params = [];
  LANGUAGES.filter(l => l !== defaultLang).forEach(lang => {
    ${city.linExport}.forEach(linea => {
      params.push({ lang, id: linea.id });
    });
  });
  return params;
}

export async function generateMetadata({ params }) {
  const linea = ${city.linExport}.find(l => l.id === params.id);
  if (!linea) return { title: 'Line not found — MetroGuia' };
  return buildMetadata({
    lang: params.lang,
    title: \`\${linea.nombre || linea.name || 'Line ' + linea.id} — ${city.name} Transit | MetroGuia\`,
    description: linea.meta_description || linea.descripcion || \`\${linea.nombre || linea.name || 'Line ' + linea.id} in ${city.name}\`,
    path: \`/${city.slug}/line/\${linea.id}/\`,
    keywords: ['${city.name}', linea.nombre || linea.name || linea.id, 'transit line'],
  });
}

export default function Line${slugToComponent(city.slug)}PageLang({ params }) {
  const lang = params.lang;
  const translations = require(\`@/translations/\${lang}.json\`);
  const linea = ${city.linExport}.find(l => l.id === params.id);

  if (!linea) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--danger)' }}>{t(translations, 'line.notFound', 'Line not found')}</h1>
        <Link href={\`/\${lang}/${city.slug}\`}>
          <button style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: '${city.color}', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            ← ${city.name}
          </button>
        </Link>
      </main>
    );
  }

  const lineColor = linea.color || '${city.color}';
  const lineName = linea.nombre || linea.name || \`Line \${linea.id}\`;
  const estacionesLinea = ${city.estExport}.filter(e => {
    const lineasEst = Array.isArray(e.linea) ? e.linea : (e.linea ? [e.linea] : []);
    return lineasEst.includes(linea.id) || (linea.estaciones && linea.estaciones.includes(e.slug));
  });

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: '${city.name}', item: \`https://metroguia.mx/\${lang}/${city.slug}/\` },
      { '@type': 'ListItem', position: 3, name: lineName, item: \`https://metroguia.mx/\${lang}/${city.slug}/line/\${linea.id}\` },
    ],
  };

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section style={{ background: \`linear-gradient(135deg, \${lineColor} 0%, \${lineColor}cc 100%)\`, color: '#fff', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '60px', height: '60px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: '800' }}>
              {linea.id.substring(0, 3)}
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', margin: '0 0 16px 0', lineHeight: '1.2' }}>
            {lineName}
          </h1>
          <p style={{ fontSize: '1.25rem', margin: '0 0 16px 0', opacity: '0.95' }}>
            {linea.inicio} → {linea.fin}
          </p>
          <p style={{ fontSize: '1rem', margin: '0', opacity: '0.9' }}>
            {estacionesLinea.length} {t(translations, 'city.stations', 'stations').toLowerCase()}
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        {/* Info Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '48px' }}>
          <div style={{ padding: '20px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600 }}>{t(translations, 'line.terminals', 'Terminals')}</p>
            <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0', color: lineColor }}>{linea.inicio} → {linea.fin}</p>
          </div>
          <div style={{ padding: '20px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600 }}>{t(translations, 'city.stations', 'Stations')}</p>
            <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0' }}>{estacionesLinea.length}</p>
          </div>
          {linea.frecuencia && (
            <div style={{ padding: '20px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600 }}>{t(translations, 'line.frequency', 'Frequency')}</p>
              <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0' }}>{linea.frecuencia}</p>
            </div>
          )}
          {linea.tarifa && (
            <div style={{ padding: '20px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)' }}>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600 }}>{t(translations, 'line.cost', 'Cost')}</p>
              <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0', color: 'var(--success)' }}>{linea.tarifa}</p>
            </div>
          )}
        </div>

        {/* Description */}
        {linea.descripcion && (
          <div style={{ backgroundColor: 'var(--surface)', padding: '32px', borderLeft: \`4px solid \${lineColor}\`, borderRadius: 'var(--radius)', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
              {t(translations, 'line.about', 'About This Line')}
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0', lineHeight: '1.8' }}>{linea.descripcion}</p>
          </div>
        )}

        <AdBannerLazy slot="4434764790" format="auto" />

        {/* Stations */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '700', margin: '0 0 32px 0', color: 'var(--text)' }}>
            {t(translations, 'line.stationsOn', 'Stations')}
          </h2>
          <div style={{ display: 'grid', gap: '16px' }}>
            {estacionesLinea.map((estacion, idx) => (
              <Link href={\`/\${lang}/${city.slug}/station/\${estacion.slug}\`} key={idx} style={{ textDecoration: 'none' }}>
                <div style={{ padding: '20px', backgroundColor: 'var(--surface)', borderLeft: \`4px solid \${lineColor}\`, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700', margin: '0 0 4px 0', color: 'var(--text)' }}>
                    {idx + 1}. {estacion.nombre}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0' }}>
                    {estacion.descripcion || estacion.intro || ''}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Payment */}
        <div style={{ marginBottom: '60px' }}>
          <AffiliateTransportCard ciudad="${city.name}" estacion={null} fechas={null} />
        </div>
      </section>
    </main>
  );
}
`;
}

// ============================================================================
// HELPERS
// ============================================================================
function slugToComponent(slug) {
  return slug
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

// ============================================================================
// MAIN EXECUTION
// ============================================================================
let filesCreated = 0;
let dirsCreated = 0;

CITIES.forEach(city => {
  const cityDir = path.join(APP_LANG, city.slug);

  // 1. Hub page (only for cities missing from [lang])
  if (!city.hasLangHub) {
    mkdirp(cityDir);
    dirsCreated++;
    const hubPath = path.join(cityDir, 'page.jsx');
    fs.writeFileSync(hubPath, generateHubPage(city));
    filesCreated++;
  }

  // 2. Station page (for ALL cities)
  const stationDir = path.join(cityDir, 'station', '[slug]');
  mkdirp(stationDir);
  dirsCreated++;
  fs.writeFileSync(path.join(stationDir, 'page.jsx'), generateStationPage(city));
  filesCreated++;

  // 3. Line page (for ALL cities)
  const lineDir = path.join(cityDir, 'line', '[id]');
  mkdirp(lineDir);
  dirsCreated++;
  fs.writeFileSync(path.join(lineDir, 'page.jsx'), generateLinePage(city));
  filesCreated++;
});

console.log(`\n✅ i18n generation complete!`);
console.log(`   Files created: ${filesCreated}`);
console.log(`   Directories created: ${dirsCreated}`);
console.log(`   Cities processed: ${CITIES.length}`);
console.log(`   Hub pages: ${CITIES.filter(c => !c.hasLangHub).length}`);
console.log(`   Station pages: ${CITIES.length}`);
console.log(`   Line pages: ${CITIES.length}`);

// ============================================================================
// UPDATE TRANSLATION FILES
// ============================================================================
console.log('\n📝 Updating translation files...');

const TRANSLATIONS_TEMPLATE = {
  en: (city) => ({
    title: `${city.name} Transit Guide`,
    subtitle: `${city.state} · ${city.lineCount} Lines · ${city.stationCount} Stations`,
    heroDesc: `Complete transit guide for ${city.name}, ${city.state}. ${city.lineCount} lines, ${city.stationCount} stations.`,
    planRoute: `Plan your Route in ${city.name}`,
    planRouteDesc: `Find the best route between transit stations in ${city.name}`,
    stations: 'Stations',
    operativeLines: 'Lines',
    kilometers: 'Network',
    featuredStations: 'Featured Stations',
    worldCupTitle: `World Cup 2026 in ${city.name}`,
    worldCupDesc: `Transit guide for FIFA World Cup 2026 venues in ${city.name}`,
  }),
  es: (city) => ({
    title: `Guía de Transporte ${city.name}`,
    subtitle: `${city.state} · ${city.lineCount} Líneas · ${city.stationCount} Estaciones`,
    heroDesc: `Guía completa de transporte en ${city.name}, ${city.state}. ${city.lineCount} líneas, ${city.stationCount} estaciones.`,
    planRoute: `Planifica tu Ruta en ${city.name}`,
    planRouteDesc: `Encuentra la mejor ruta entre estaciones de transporte en ${city.name}`,
    stations: 'Estaciones',
    operativeLines: 'Líneas',
    kilometers: 'Red',
    featuredStations: 'Estaciones Destacadas',
    worldCupTitle: `Mundial 2026 en ${city.name}`,
    worldCupDesc: `Guía de transporte para las sedes del Mundial FIFA 2026 en ${city.name}`,
  }),
  pt: (city) => ({
    title: `Guia de Transporte ${city.name}`,
    subtitle: `${city.state} · ${city.lineCount} Linhas · ${city.stationCount} Estações`,
    heroDesc: `Guia completo de transporte em ${city.name}, ${city.state}. ${city.lineCount} linhas, ${city.stationCount} estações.`,
    planRoute: `Planeje sua Rota em ${city.name}`,
    planRouteDesc: `Encontre a melhor rota entre estações em ${city.name}`,
    stations: 'Estações',
    operativeLines: 'Linhas',
    kilometers: 'Rede',
    featuredStations: 'Estações em Destaque',
  }),
  fr: (city) => ({
    title: `Guide Transport ${city.name}`,
    subtitle: `${city.state} · ${city.lineCount} Lignes · ${city.stationCount} Stations`,
    heroDesc: `Guide complet du transport en commun à ${city.name}, ${city.state}. ${city.lineCount} lignes, ${city.stationCount} stations.`,
    planRoute: `Planifiez votre Itinéraire à ${city.name}`,
    planRouteDesc: `Trouvez le meilleur itinéraire entre les stations de ${city.name}`,
    stations: 'Stations',
    operativeLines: 'Lignes',
    kilometers: 'Réseau',
    featuredStations: 'Stations en Vedette',
  }),
  de: (city) => ({
    title: `${city.name} Nahverkehrsführer`,
    subtitle: `${city.state} · ${city.lineCount} Linien · ${city.stationCount} Stationen`,
    heroDesc: `Vollständiger Nahverkehrsführer für ${city.name}, ${city.state}. ${city.lineCount} Linien, ${city.stationCount} Stationen.`,
    planRoute: `Planen Sie Ihre Route in ${city.name}`,
    planRouteDesc: `Finden Sie die beste Route zwischen Stationen in ${city.name}`,
    stations: 'Stationen',
    operativeLines: 'Linien',
    kilometers: 'Netz',
    featuredStations: 'Ausgewählte Stationen',
  }),
  ja: (city) => ({
    title: `${city.name}交通ガイド`,
    subtitle: `${city.state} · ${city.lineCount}路線 · ${city.stationCount}駅`,
    heroDesc: `${city.name}（${city.state}）の完全な交通ガイド。${city.lineCount}路線、${city.stationCount}駅。`,
    planRoute: `${city.name}でルートを計画`,
    planRouteDesc: `${city.name}の駅間の最適ルートを検索`,
    stations: '駅',
    operativeLines: '路線',
    kilometers: 'ネットワーク',
    featuredStations: '注目の駅',
  }),
  ko: (city) => ({
    title: `${city.name} 교통 가이드`,
    subtitle: `${city.state} · ${city.lineCount}개 노선 · ${city.stationCount}개 역`,
    heroDesc: `${city.name}(${city.state}) 완전한 대중교통 가이드. ${city.lineCount}개 노선, ${city.stationCount}개 역.`,
    planRoute: `${city.name}에서 경로 계획`,
    planRouteDesc: `${city.name}의 역 간 최적 경로 찾기`,
    stations: '역',
    operativeLines: '노선',
    kilometers: '네트워크',
    featuredStations: '주요 역',
  }),
};

// Update each language file
['en', 'es', 'pt', 'fr', 'de', 'ja', 'ko'].forEach(lang => {
  const filePath = path.join(TRANSLATIONS_DIR, `${lang}.json`);
  let data = {};
  try {
    data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (e) {
    console.warn(`  ⚠️  Could not read ${lang}.json, creating new`);
  }

  let added = 0;
  CITIES.forEach(city => {
    if (!data[city.slug]) {
      const template = TRANSLATIONS_TEMPLATE[lang];
      if (template) {
        data[city.slug] = template(city);
        added++;
      }
    }
  });

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
  console.log(`   ${lang}.json — ${added} city keys added`);
});

console.log('\n🎉 All done!');
