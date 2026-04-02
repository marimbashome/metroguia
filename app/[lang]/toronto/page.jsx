import { lineasToronto } from '@/data/toronto/lineas-detalle';
import { estacionesToronto } from '@/data/toronto/estaciones';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import AffiliateMundial from '@/app/components/AffiliateMundial';
import { LANGUAGES, buildMetadata, t, getDefaultLangForCity } from '@/lib/i18n';

export function generateStaticParams() {
  const defaultLang = getDefaultLangForCity('toronto');
  return LANGUAGES.filter(l => l !== defaultLang).map(lang => ({ lang }));
}

export async function generateMetadata({ params }) {
  const translations = require(`@/translations/${params.lang}.json`);
  return buildMetadata({
    lang: params.lang,
    title: t(translations, 'toronto.title', 'TTC Toronto Transit Guide') + ' — MetroGuia',
    description: t(translations, 'toronto.heroDesc', 'Toronto TTC Subway system guide with 4 lines and 78 stations'),
    path: '/toronto/',
    keywords: ['TTC', 'Toronto Subway', 'GO Transit', 'Canadian transit', 'Toronto metro'],
  });
}

export default function TorontoPageLang({ params }) {
  const lang = params.lang;
  const translations = require(`@/translations/${lang}.json`);

  const estacionesDestacadas = estacionesToronto.filter(e =>
    ['toronto-union', 'toronto-bloor', 'toronto-dundas', 'toronto-downtown'].includes(e.slug)
  );

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Toronto', item: `https://metroguia.mx/${lang}/toronto/` },
    ],
  };

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section className="hero" style={{ background: 'linear-gradient(135deg, #DC143C 0%, #C91020 100%)', color: '#FFFFFF', padding: '80px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '800', margin: '0 0 16px 0', lineHeight: '1.2', letterSpacing: '-0.02em' }}>
            {t(translations, 'toronto.title')}
          </h1>
          <p style={{ fontSize: '1.5rem', fontWeight: '500', margin: '0 0 24px 0', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', opacity: '0.95', lineHeight: '1.4' }}>
            {t(translations, 'toronto.subtitle')}
          </p>
          <p style={{ fontSize: '1.125rem', fontWeight: '400', margin: '0', opacity: '0.9', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            {t(translations, 'toronto.heroDesc')}
          </p>
        </div>
      </section>

      {/* STATS */}
      <section style={{ backgroundColor: 'var(--surface)', padding: '48px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', textAlign: 'center' }}>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#DC143C', margin: '0 0 8px 0' }}>78</p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>{t(translations, 'toronto.stations')}</p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#DC143C', margin: '0 0 8px 0' }}>4</p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>{t(translations, 'toronto.operativeLines')}</p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#DC143C', margin: '0 0 8px 0' }}>~77</p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>{t(translations, 'toronto.kilometers')}</p>
          </div>
        </div>
      </section>

      {/* TRIP PLANNER */}
      <section style={{ backgroundColor: 'var(--bg)', padding: '60px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '12px', textAlign: 'center', color: 'var(--text)' }}>
            {t(translations, 'toronto.planRoute')}
          </h2>
          <p style={{ fontSize: '1rem', textAlign: 'center', marginBottom: '24px', color: 'var(--text-muted)' }}>
            {t(translations, 'toronto.planRouteDesc')}
          </p>
          <SearchBar ciudad="toronto" lang={lang} />
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* WORLD CUP 2026 */}
      <section style={{ backgroundColor: 'var(--bg)', padding: '80px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '16px', textAlign: 'center', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            {t(translations, 'toronto.worldCupTitle')}
          </h2>
          <p style={{ fontSize: '1.125rem', textAlign: 'center', marginBottom: '48px', color: 'var(--text-muted)', fontWeight: '400', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            {t(translations, 'toronto.worldCupDesc')}
          </p>
          <AffiliateMundial ciudad="Toronto" estadio="BMO Field" estacion="toronto-union" />
        </div>
      </section>

      {/* LINES */}
      <section style={{ backgroundColor: 'var(--bg)', padding: '80px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '48px', textAlign: 'center', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            {t(translations, 'line.allLines')}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {lineasToronto.map((linea) => (
              <Link href={`/${lang}/toronto/line/${linea.id}`} key={linea.id}>
                <div style={{ backgroundColor: 'var(--surface)', border: `2px solid ${linea.color}`, borderRadius: '10px', padding: '24px', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                  <div style={{ width: '48px', height: '48px', backgroundColor: linea.color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontSize: '24px', fontWeight: '800', marginBottom: '16px' }}>{linea.id}</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 8px 0', color: linea.color }}>
                    {t(translations, 'line.title', 'Line').replace('{id}', linea.id)} {linea.name}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: '0 0 12px 0' }}>{linea.inicio} → {linea.fin}</p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text)', margin: '0 0 16px 0', lineHeight: '1.5' }}>{linea.descripcion}</p>
                  <p style={{ fontSize: '0.875rem', fontWeight: '600', color: linea.color, margin: '0' }}>{linea.total} {t(translations, 'city.stations', 'stations').toLowerCase()}</p>
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
            <AffiliateTransportCard ciudad="Toronto" estacion={null} fechas={null} />
          </div>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '48px', textAlign: 'center', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            {t(translations, 'toronto.featuredStations')}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {estacionesDestacadas.map((estacion) => (
              <Link href={`/${lang}/toronto/station/${estacion.slug}`} key={estacion.slug}>
                <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '10px', padding: '24px', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 8px 0', color: 'var(--text)' }}>{estacion.nombre}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: '0 0 12px 0', fontWeight: '500' }}>{estacion.municipio}</p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text)', margin: '0', lineHeight: '1.6' }}>{estacion.intro}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}