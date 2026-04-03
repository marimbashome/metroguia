import { lineasStLouis } from '@/data/st-louis/lineas-detalle';
import { estacionesStLouis } from '@/data/st-louis/estaciones';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import { LANGUAGES, buildMetadata, t, getDefaultLangForCity } from '@/lib/i18n';

export function generateStaticParams() {
  const defaultLang = getDefaultLangForCity('st-louis');
  return LANGUAGES.filter(l => l !== defaultLang).map(lang => ({ lang }));
}

export async function generateMetadata({ params }) {
  const translations = require(`@/translations/${params.lang}.json`);
  return buildMetadata({
    lang: params.lang,
    title: t(translations, 'st-louis.title', 'St. Louis Transit Guide') + ' — MetroGuia',
    description: t(translations, 'st-louis.heroDesc', 'St. Louis transit guide with 2 lines and 38 stations'),
    path: '/st-louis/',
    keywords: ['St. Louis', 'transit', 'metro', 'Missouri', 'public transport', 'transit guide'],
  });
}

export default function StLouisPageLang({ params }) {
  const lang = params.lang;
  const translations = require(`@/translations/${lang}.json`);

  const estaciones = estacionesStLouis;
  const lineas = lineasStLouis;
  const featuredSlugs = estaciones.slice(0, 5).map(e => e.slug);
  const estacionesDestacadas = estaciones.filter(e => featuredSlugs.includes(e.slug));

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'St. Louis', item: `https://metroguia.mx/${lang}/st-louis/` },
    ],
  };

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="hero" style={{ background: 'linear-gradient(135deg, #003DA5 0%, #003DA5cc 100%)', color: '#FFFFFF', padding: '80px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '800', margin: '0 0 16px 0', lineHeight: '1.2', letterSpacing: '-0.02em' }}>
            {t(translations, 'st-louis.title', 'St. Louis Transit Guide')}
          </h1>
          <p style={{ fontSize: '1.5rem', fontWeight: '500', margin: '0 0 24px 0', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', opacity: '0.95', lineHeight: '1.4' }}>
            {t(translations, 'st-louis.subtitle', 'Missouri, United States')}
          </p>
          <p style={{ fontSize: '1.125rem', fontWeight: '400', margin: '0', opacity: '0.9', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            {t(translations, 'st-louis.heroDesc', 'Complete transit guide for St. Louis')}
          </p>
        </div>
      </section>

      {/* STATS */}
      <section style={{ backgroundColor: 'var(--surface)', padding: '48px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', textAlign: 'center' }}>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#003DA5', margin: '0 0 8px 0' }}>{estaciones.length}</p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>{t(translations, 'st-louis.stations', t(translations, 'city.stations', 'Stations'))}</p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#003DA5', margin: '0 0 8px 0' }}>{lineas.length}</p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>{t(translations, 'st-louis.operativeLines', t(translations, 'city.lines', 'Lines'))}</p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#003DA5', margin: '0 0 8px 0' }}>~74 km</p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>{t(translations, 'st-louis.kilometers', t(translations, 'city.networkLength', 'Network'))}</p>
          </div>
        </div>
      </section>

      {/* TRIP PLANNER */}
      <section style={{ backgroundColor: 'var(--bg)', padding: '60px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '12px', textAlign: 'center', color: 'var(--text)' }}>
            {t(translations, 'st-louis.planRoute', t(translations, 'city.planRoute', 'Plan your Route'))}
          </h2>
          <p style={{ fontSize: '1rem', textAlign: 'center', marginBottom: '24px', color: 'var(--text-muted)' }}>
            {t(translations, 'st-louis.planRouteDesc', t(translations, 'city.planRouteDesc', 'Find the best route between stations'))}
          </p>
          <SearchBar ciudad="st-louis" lang={lang} />
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* LINES */}
      <section style={{ backgroundColor: 'var(--bg)', padding: '80px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '48px', textAlign: 'center', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            {t(translations, 'line.allLines', 'All Lines')}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {lineas.slice(0, 12).map((linea) => (
              <Link href={`/${lang}/st-louis/line/${linea.id}`} key={linea.id}>
                <div style={{ backgroundColor: 'var(--surface)', border: `2px solid ${linea.color || '#003DA5'}`, borderRadius: '10px', padding: '24px', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                  <div style={{ width: '48px', height: '48px', backgroundColor: linea.color || '#003DA5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontSize: '18px', fontWeight: '800', marginBottom: '16px' }}>{linea.id}</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 8px 0', color: linea.color || '#003DA5' }}>
                    {linea.nombre || linea.name || `Line ${linea.id}`}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: '0 0 12px 0' }}>{linea.inicio} → {linea.fin}</p>
                  <p style={{ fontSize: '0.875rem', fontWeight: '600', color: linea.color || '#003DA5', margin: '0' }}>{linea.total || linea.estaciones?.length || '—'} {t(translations, 'city.stations', 'stations').toLowerCase()}</p>
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
            <AffiliateTransportCard ciudad="St. Louis" estacion={null} fechas={null} />
          </div>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '48px', textAlign: 'center', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            {t(translations, 'st-louis.featuredStations', t(translations, 'city.featuredStations', 'Featured Stations'))}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {estacionesDestacadas.map((estacion) => (
              <Link href={`/${lang}/st-louis/station/${estacion.slug}`} key={estacion.slug}>
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
