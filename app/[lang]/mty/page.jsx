import { lineasMTY } from '@/data/mty/lineas-detalle';
import { estacionesMTY } from '@/data/mty/estaciones';
import { estacionesEcovia } from '@/data/mty/ecovia';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import AffiliateMundial from '@/app/components/AffiliateMundial';
import { LANGUAGES, buildMetadata, t } from '@/lib/i18n';

export function generateStaticParams() {
  return LANGUAGES.filter(l => l !== 'es').map(lang => ({ lang }));
}

export async function generateMetadata({ params }) {
  const translations = {}; // fallback: t() uses defaults
  return buildMetadata({
    lang: params.lang,
    title: t(translations, 'mty.title', 'Metrorrey Monterrey') + ' — MetroGuia',
    description: t(translations, 'mty.heroDesc', 'Metrorrey Monterrey transit guide'),
    path: '/mty/',
    keywords: ['Metrorrey', 'Monterrey', 'Ecovía', 'FIFA 2026', 'Estadio BBVA'],
  });
}

export default function MTYPageLang({ params }) {
  const lang = params.lang;
  const translations = {}; // fallback: t() uses defaults

  const estacionesDestacadas = estacionesMTY.filter(e =>
    ['parque-fundidora', 'exposicion', 'central', 'cuauhtemoc'].includes(e.slug)
  );

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Monterrey', item: `https://metroguia.mx/${lang}/mty/` },
    ],
  };

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      {/* HERO */}
      <section className="hero" style={{ background: 'linear-gradient(135deg, #EC4899 0%, #BE185D 100%)', color: '#FFFFFF', padding: '80px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: '800', margin: '0 0 16px 0', lineHeight: '1.2', letterSpacing: '-0.02em' }}>
            {t(translations, 'mty.title')}
          </h1>
          <p style={{ fontSize: '1.5rem', fontWeight: '500', margin: '0 0 24px 0', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', opacity: '0.95', lineHeight: '1.4' }}>
            {t(translations, 'mty.subtitle')}
          </p>
          <p style={{ fontSize: '1.125rem', fontWeight: '400', margin: '0', opacity: '0.9', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            {t(translations, 'mty.heroDesc')}
          </p>
        </div>
      </section>

      {/* STATS */}
      <section style={{ backgroundColor: 'var(--surface)', padding: '48px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', textAlign: 'center' }}>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#EC4899', margin: '0 0 8px 0' }}>83</p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>{t(translations, 'mty.stations')}</p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#EC4899', margin: '0 0 8px 0' }}>3</p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>{t(translations, 'mty.linesPlusBRT')}</p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#EC4899', margin: '0 0 8px 0' }}>56</p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>{t(translations, 'mty.kilometers')}</p>
          </div>
        </div>
      </section>

      {/* TRIP PLANNER */}
      <section style={{ backgroundColor: 'var(--bg)', padding: '60px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '800', marginBottom: '12px', textAlign: 'center', color: 'var(--text)' }}>
            {t(translations, 'mty.planRoute')}
          </h2>
          <p style={{ fontSize: '1rem', textAlign: 'center', marginBottom: '24px', color: 'var(--text-muted)' }}>
            {t(translations, 'mty.planRouteDesc')}
          </p>
          <SearchBar ciudad="mty" lang={lang} />
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* MUNDIAL 2026 */}
      <section style={{ backgroundColor: 'var(--bg)', padding: '80px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '16px', textAlign: 'center', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            {t(translations, 'mty.worldCupTitle')}
          </h2>
          <p style={{ fontSize: '1.125rem', textAlign: 'center', marginBottom: '48px', color: 'var(--text-muted)', fontWeight: '400', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
            {t(translations, 'mty.worldCupDesc')}
          </p>
          <AffiliateMundial ciudad="MTY" />
        </div>
      </section>

      {/* LINES */}
      <section style={{ backgroundColor: 'var(--bg)', padding: '80px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '48px', textAlign: 'center', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            {t(translations, 'mty.metroLines')}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {lineasMTY.map((linea) => (
              <Link href={`/${lang}/mty/linea/${linea.id}`} key={linea.id}>
                <div style={{ backgroundColor: 'var(--surface)', border: `2px solid ${linea.color}`, borderRadius: '10px', padding: '24px', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                  <div style={{ width: '48px', height: '48px', backgroundColor: linea.color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--bg)', fontSize: '24px', fontWeight: '800', marginBottom: '16px' }}>{linea.id}</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 8px 0', color: linea.color }}>
                    {t(translations, 'line.title', 'Línea').replace('{id}', linea.id)} — {linea.colorNombre}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: '0 0 12px 0' }}>{linea.inicio} → {linea.fin}</p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text)', margin: '0 0 16px 0', lineHeight: '1.5' }}>{linea.descripcion}</p>
                  <p style={{ fontSize: '0.875rem', fontWeight: '600', color: linea.color, margin: '0' }}>{linea.total} {t(translations, 'city.stations', 'estaciones').toLowerCase()}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ECOVÍA BRT */}
      <section style={{ backgroundColor: 'var(--surface)', padding: '80px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '48px', textAlign: 'center', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            {t(translations, 'mty.ecoviaTitle')}
          </h2>
          <Link href={`/${lang}/mty/ecovia`}>
            <div style={{ backgroundColor: 'var(--bg)', border: '2px solid #10B981', borderRadius: '10px', padding: '32px', cursor: 'pointer', transition: 'all 0.3s ease', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
              <div style={{ width: '56px', height: '56px', backgroundColor: '#10B981', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontSize: '24px', fontWeight: '800', marginBottom: '16px' }}>BRT</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0 0 8px 0', color: '#10B981' }}>Ecovía TransMetro</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: '0 0 12px 0' }}>Lincoln → Valle Soleado</p>
              <p style={{ fontSize: '0.875rem', fontWeight: '600', color: '#10B981', margin: '0' }}>42 {t(translations, 'mty.stations').toLowerCase()} · 30 km</p>
            </div>
          </Link>
        </div>
      </section>

      <AdBannerLazyInArticle slot="1082410395" />

      {/* FEATURED STATIONS */}
      <section style={{ backgroundColor: 'var(--bg)', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ maxWidth: '1000px', margin: 'auto', padding: '0 1rem', marginBottom: '2rem' }}>
            <AffiliateTransportCard ciudad="MTY" estacion={null} fechas={null} />
          </div>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '48px', textAlign: 'center', color: 'var(--text)', letterSpacing: '-0.01em' }}>
            {t(translations, 'mty.featuredStations')}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
            {estacionesDestacadas.map((estacion) => (
              <Link href={`/${lang}/mty/estacion/${estacion.slug}`} key={estacion.slug}>
                <div style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '10px', padding: '24px', cursor: 'pointer', transition: 'all 0.3s ease' }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <div style={{ width: '32px', height: '32px', backgroundColor: '#EC4899', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontSize: '14px', fontWeight: '700', marginRight: '12px' }}>L{estacion.linea}</div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0', color: 'var(--text)' }}>{estacion.nombre}</h3>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', margin: '0 0 12px 0' }}>{estacion.municipio} · {estacion.tipo_zona}</p>
                  {estacion.pois && estacion.pois.length > 0 && (
                    <div>
                      {estacion.pois.slice(0, 2).map((poi, idx) => (
                        <p key={idx} style={{ fontSize: '0.875rem', color: 'var(--text)', margin: '0 0 4px 0', lineHeight: '1.3' }}>• {poi.nombre}</p>
                      ))}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AffiliateMundial ciudad="MTY" />
    </main>
  );
}