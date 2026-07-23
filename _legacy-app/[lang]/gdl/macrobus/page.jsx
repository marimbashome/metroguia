import { lineasGDL } from '@/data/gdl/lineas-detalle';
import { estacionesGDL } from '@/data/gdl/estaciones';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';
import { LANGUAGES, buildMetadata, t } from '@/lib/i18n';

export function generateStaticParams() {
  return LANGUAGES.filter(l => l !== 'es').map(lang => ({ lang }));
}

export async function generateMetadata({ params }) {
  const translations = {}; // fallback: t() uses defaults
  return buildMetadata({
    lang: params.lang,
    title: t(translations, 'macrobus.title', 'Mi Macro Guadalajara') + ' — MetroGuia',
    description: t(translations, 'macrobus.heroDesc', 'Mi Macro Guadalajara: BRT system with 2 lines and 69 stations'),
    path: '/gdl/macrobus/',
    keywords: ['Mi Macro', 'Guadalajara', 'BRT', 'transporte rápido', 'macrobús'],
  });
}

export default function MacrobusPageLang({ params }) {
  const lang = params.lang;
  const translations = {}; // fallback: t() uses defaults

  const estacionesDestacadasMacro = estacionesGDL.filter(e =>
    ['estadio-chivas-mp'].includes(e.slug) && e.sistema === 'macrobus'
  );

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'MetroGuia',
        item: 'https://metroguia.mx'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t(translations, 'gdl.title', 'Guadalajara'),
        item: `https://metroguia.mx/${lang}/gdl/`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: t(translations, 'macrobus.title', 'Mi Macro'),
        item: `https://metroguia.mx/${lang}/gdl/macrobus/`
      }
    ]
  }

  const lineasMacro = lineasGDL.filter(l => ['MC', 'MP'].includes(l.id));
  const estacionesMacro = estacionesGDL.filter(e => e.sistema === 'macrobus');

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* HERO */}
      <section
        className="hero"
        style={{
          background: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
          color: '#FFFFFF',
          padding: '80px 24px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h1
            style={{
              fontSize: '3.5rem',
              fontWeight: '800',
              margin: '0 0 16px 0',
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
            }}
          >
            {t(translations, 'macrobus.title', 'Mi Macro Guadalajara')}
          </h1>
          <p
            style={{
              fontSize: '1.5rem',
              fontWeight: '500',
              margin: '0 0 24px 0',
              maxWidth: '700px',
              marginLeft: 'auto',
              marginRight: 'auto',
              opacity: '0.95',
              lineHeight: '1.4',
            }}
          >
            {t(translations, 'macrobus.lines', 'Mi Macro Calzada · Mi Macro Periférico · 69 Stations').replace('69 Stations', estacionesMacro.length)}
          </p>
          <p
            style={{
              fontSize: '1.125rem',
              fontWeight: '400',
              margin: '0',
              opacity: '0.9',
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {t(translations, 'macrobus.heroDesc', 'BRT rapid bus transit system with fast and efficient coverage in Guadalajara.')}
          </p>
        </div>
      </section>

      {/* ESTADÍSTICAS */}
      <section
        style={{
          backgroundColor: 'var(--surface)',
          padding: '48px 24px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div
          style={{
            maxWidth: '1000px',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px',
            textAlign: 'center',
          }}
        >
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#8B5CF6', margin: '0 0 8px 0' }}>
              {estacionesMacro.length}
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              {t(translations, 'city.stations', 'Stations')}
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#8B5CF6', margin: '0 0 8px 0' }}>
              2
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              {t(translations, 'macrobus.operativeLines', 'Operative Lines')}
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#8B5CF6', margin: '0 0 8px 0' }}>
              58
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              {t(translations, 'gdl.kilometers', 'Kilometers')}
            </p>
          </div>
        </div>
      </section>

      {/* TRIP PLANNER */}
      <section
        style={{
          backgroundColor: 'var(--bg)',
          padding: '60px 24px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={{ maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2
            style={{
              fontSize: '1.75rem',
              fontWeight: '800',
              marginBottom: '12px',
              textAlign: 'center',
              color: 'var(--text)',
            }}
          >
            {t(translations, 'macrobus.planRoute', '🚌 Plan Your Route on Mi Macro')}
          </h2>
          <p
            style={{
              fontSize: '1rem',
              textAlign: 'center',
              marginBottom: '24px',
              color: 'var(--text-muted)',
            }}
          >
            {t(translations, 'macrobus.planRouteDesc', 'Calculate the best route between BRT stations')}
          </p>
          <SearchBar ciudad="gdl" lang={lang} />
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* LÍNEAS */}
      <section
        style={{
          backgroundColor: 'var(--bg)',
          padding: '80px 24px',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2
            style={{
              fontSize: '2rem',
              fontWeight: '800',
              marginBottom: '48px',
              textAlign: 'center',
              color: 'var(--text)',
              letterSpacing: '-0.01em',
            }}
          >
            {t(translations, 'macrobus.linesTitle', 'The 2 Lines of Mi Macro')}
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {lineasMacro.map((linea) => (
              <Link href={`/${lang}/gdl/macrobus/linea/${linea.id}`} key={linea.id}>
                <div
                  style={{
                    backgroundColor: 'var(--surface)',
                    border: `2px solid ${linea.color}`,
                    borderRadius: '10px',
                    padding: '24px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'block',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: linea.color,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#FFFFFF',
                      fontSize: '24px',
                      fontWeight: '800',
                      marginBottom: '16px',
                    }}
                  >
                    {linea.id}
                  </div>
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: '700',
                      margin: '0 0 8px 0',
                      color: linea.color,
                    }}
                  >
                    {linea.id === 'MC' ? t(translations, 'macrobus.lineMC', 'Mi Macro Calzada') : t(translations, 'macrobus.lineMP', 'Mi Macro Periférico')}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-muted)',
                      margin: '0 0 12px 0',
                      fontWeight: '400',
                    }}
                  >
                    {linea.inicio} → {linea.fin}
                  </p>
                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--text)',
                      margin: '0 0 16px 0',
                      lineHeight: '1.5',
                      fontWeight: '400',
                    }}
                  >
                    {linea.descripcion}
                  </p>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: linea.color,
                      margin: '0',
                    }}
                  >
                    {linea.total} {t(translations, 'city.stations', 'stations').toLowerCase()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AdBannerLazyInArticle slot="1082410395" />
    </main>
  );
}