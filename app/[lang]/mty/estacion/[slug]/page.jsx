import { estacionesMTY } from '@/data/mty/estaciones';
import { lineasMTY } from '@/data/mty/lineas-detalle';
import Link from 'next/link';
import { LANGUAGES, buildMetadata, t } from '@/lib/i18n';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';

export function generateStaticParams() {
  const params = [];
  LANGUAGES.filter(l => l !== 'es').forEach(lang => {
    estacionesMTY.forEach(e => {
      params.push({ lang, slug: e.slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }) {
  const { lang, slug } = params;
  const estacion = estacionesMTY.find((e) => e.slug === slug);

  if (!estacion) {
    return {
      title: 'Station not found',
      description: 'The requested station does not exist.',
    };
  }

  const translations = require(`@/translations/${lang}.json`);
  const lineLabel = t(translations, 'line.title', 'Line {id}').replace('{id}', estacion.linea);

  return buildMetadata({
    lang,
    title: `${estacion.nombre} — ${lineLabel} | MetroGuia`,
    description: estacion.meta_description || `${estacion.nombre} station on ${lineLabel} in ${estacion.municipio}, Monterrey.`,
    path: `/mty/estacion/${slug}`,
    keywords: [estacion.nombre, lineLabel, estacion.municipio, 'Metrorrey', 'Monterrey Metro'],
  });
}

export default function EstacionMTYLangPage({ params }) {
  const { lang, slug } = params;
  const estacion = estacionesMTY.find((e) => e.slug === slug);
  const translations = require(`@/translations/${lang}.json`);

  if (!estacion) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', minHeight: '100vh' }}>
        <h1 style={{ fontSize: '32px', color: '#ef4444', marginBottom: '24px' }}>
          {t(translations, 'error.notFound', 'Station not found')}
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--text-muted)', marginBottom: '24px' }}>
          {t(translations, 'error.description', 'The requested station does not exist.')}
        </p>
        <Link href={`/${lang}/mty`}>
          <button
            style={{
              padding: '12px 24px',
              backgroundColor: 'var(--mty)',
              color: '#ffffff',
              border: 'none',
              borderRadius: 'var(--radius)',
              fontSize: '16px',
              fontWeight: '700',
              cursor: 'pointer',
            }}
          >
            {t(translations, 'navigation.backToMty', 'Back to Monterrey')}
          </button>
        </Link>
      </main>
    );
  }

  // Get line info for colors and details
  const lineInfo = lineasMTY.find(l => l.id === estacion.linea);
  const colorLinea = lineInfo?.color || '#F97316';
  const lineLabel = t(translations, 'line.title', 'Line {id}').replace('{id}', estacion.linea);

  // Breadcrumb schema
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
        name: 'Monterrey',
        item: `https://metroguia.mx/${lang}/mty/`
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: lineLabel,
        item: `https://metroguia.mx/${lang}/mty/linea/${estacion.linea}/`
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: estacion.nombre,
        item: `https://metroguia.mx/${lang}/mty/estacion/${slug}`
      }
    ]
  };

  // Check if mundial relevante
  const isMundialRelevante = estacion.mundial_relevancia && !estacion.mundial_relevancia.includes('Sin relevancia');

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO SECTION */}
      <section
        style={{
          background: `linear-gradient(135deg, ${colorLinea} 0%, ${colorLinea}cc 100%)`,
          color: '#ffffff',
          padding: '60px 24px 40px 24px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto' }}>
          <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <span
              style={{
                width: '56px',
                height: '56px',
                backgroundColor: 'rgba(255, 255, 255, 0.25)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                fontWeight: '800',
                flexShrink: 0,
              }}
            >
              {estacion.linea}
            </span>
            <div>
              <p style={{ fontSize: '14px', fontWeight: '600', margin: '0', opacity: '0.9', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {lineLabel} • {t(translations, 'station.metroSystem', 'Transit System')}: Metrorrey
              </p>
              <p style={{ fontSize: '16px', fontWeight: '500', margin: '0', opacity: '0.95' }}>
                {estacion.municipio}
              </p>
            </div>
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 3.5rem)',
              fontWeight: '800',
              margin: '0 0 16px 0',
              lineHeight: '1.2',
              letterSpacing: '-0.02em',
            }}
          >
            {estacion.nombre}
          </h1>
          <p
            style={{
              fontSize: '1.125rem',
              margin: '0',
              opacity: '0.95',
              maxWidth: '600px',
              lineHeight: '1.5',
            }}
          >
            {estacion.intro}
          </p>
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* MAIN CONTENT GRID */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '32px', maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto', padding: '48px 24px', alignItems: 'start' }}>
        {/* MAIN CONTENT */}
        <div>
          {/* STATS ROW */}
          <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '16px', marginBottom: '48px' }}>
            <div className="card" style={{ padding: '20px', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.05em', margin: '0 0 8px 0' }}>
                {t(translations, 'station.line', 'Line')}
              </p>
              <p style={{ fontSize: '24px', fontWeight: '800', color: colorLinea, margin: '0' }}>
                {lineLabel}
              </p>
            </div>
            <div className="card" style={{ padding: '20px', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.05em', margin: '0 0 8px 0' }}>
                {t(translations, 'station.municipality', 'Municipality')}
              </p>
              <p style={{ fontSize: '18px', fontWeight: '700', margin: '0' }}>
                {estacion.municipio}
              </p>
            </div>
            <div className="card" style={{ padding: '20px', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.05em', margin: '0 0 8px 0' }}>
                {t(translations, 'station.zoneType', 'Zone')}
              </p>
              <p style={{ fontSize: '16px', fontWeight: '700', margin: '0' }}>
                {estacion.tipo_zona.replace(/-/g, ' ')}
              </p>
            </div>
            <div className="card" style={{ padding: '20px', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
              <p style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.05em', margin: '0 0 8px 0' }}>
                {t(translations, 'station.bestTime', 'Best Time')}
              </p>
              <p style={{ fontSize: '16px', fontWeight: '700', margin: '0' }}>
                {estacion.mejor_horario}
              </p>
            </div>
          </section>

          {/* PLACES OF INTEREST */}
          {estacion.pois && estacion.pois.length > 0 && (
            <section style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '24px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
                {t(translations, 'station.nearbyPlaces', 'Nearby Places')}
              </h2>
              <div style={{ display: 'grid', gap: '16px' }}>
                {estacion.pois.map((poi, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '16px',
                      backgroundColor: 'var(--surface)',
                      borderRadius: 'var(--radius)',
                      border: `1px solid var(--border)`,
                      borderLeftWidth: '4px',
                      borderLeftColor: colorLinea,
                    }}
                  >
                    <p style={{ fontSize: '16px', fontWeight: '700', margin: '0 0 4px 0', color: 'var(--text)' }}>
                      {poi.nombre}
                    </p>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: '0', display: 'flex', gap: '8px' }}>
                      <span style={{ textTransform: 'capitalize' }}>{poi.tipo}</span> • <span>{poi.distancia}</span>
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* NEAR PLACES (DETAILED) */}
          {estacion.lugares_cercanos && estacion.lugares_cercanos.length > 0 && (
            <section style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '24px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
                {t(translations, 'station.nearbyAttraction', 'Places Near You')}
              </h2>
              <div style={{ display: 'grid', gap: '16px' }}>
                {estacion.lugares_cercanos.map((lugar, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '16px',
                      backgroundColor: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
                    }}
                  >
                    <p style={{ fontSize: '16px', fontWeight: '700', margin: '0 0 4px 0', color: 'var(--text)' }}>
                      {lugar.nombre}
                    </p>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted)', margin: '0 0 8px 0' }}>
                      {lugar.tipo} • {lugar.distancia}
                    </p>
                    <p style={{ fontSize: '14px', color: 'var(--text)', margin: '0', lineHeight: '1.5' }}>
                      {lugar.descripcion}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          <AdBannerLazyInArticle slot="4434764790" format="auto" />

          {/* TOURIST DESCRIPTION */}
          {estacion.descripcion_turistica && (
            <section style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '16px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
                {t(translations, 'station.touristDescription', 'Tourist Information')}
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text)', lineHeight: '1.6', margin: '0' }}>
                {estacion.descripcion_turistica}
              </p>
            </section>
          )}

          {/* MUNDIAL 2026 SECTION */}
          {isMundialRelevante && (
            <section style={{ marginBottom: '48px', padding: '24px', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', borderLeft: '4px solid #FFD700' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '12px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
                ⚽ {t(translations, 'station.mundial2026', 'FIFA World Cup 2026')}
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text)', lineHeight: '1.6', margin: '0' }}>
                {estacion.mundial_relevancia}
              </p>
            </section>
          )}

          {/* TIPS FOR TOURISTS */}
          {estacion.tips && estacion.tips.length > 0 && (
            <section style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '24px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
                {t(translations, 'station.tips', 'Tips for Tourists')}
              </h2>
              <ul style={{ listStyle: 'none', padding: '0', margin: '0', display: 'grid', gap: '12px' }}>
                {estacion.tips.map((tip, idx) => (
                  <li
                    key={idx}
                    style={{
                      padding: '12px 16px',
                      backgroundColor: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'flex-start',
                      fontSize: '15px',
                    }}
                  >
                    <span style={{ color: colorLinea, fontWeight: '700', marginTop: '2px' }}>→</span>
                    <span style={{ color: 'var(--text)' }}>{tip}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* ACCESSIBILITY */}
          {estacion.accesibilidad && (
            <section style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '24px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
                {t(translations, 'station.accessibility', 'Accessibility')}
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '16px' }}>
                <div style={{ padding: '16px', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '600', margin: '0 0 8px 0' }}>
                    {t(translations, 'station.elevator', 'Elevator')}
                  </p>
                  <p style={{ fontSize: '16px', fontWeight: '700', color: estacion.accesibilidad.elevador ? '#10b981' : '#ef4444', margin: '0' }}>
                    {estacion.accesibilidad.elevador ? '✓' : '✗'}
                  </p>
                </div>
                <div style={{ padding: '16px', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '600', margin: '0 0 8px 0' }}>
                    {t(translations, 'station.ramp', 'Ramp')}
                  </p>
                  <p style={{ fontSize: '16px', fontWeight: '700', color: estacion.accesibilidad.rampa ? '#10b981' : '#ef4444', margin: '0' }}>
                    {estacion.accesibilidad.rampa ? '✓' : '✗'}
                  </p>
                </div>
                <div style={{ padding: '16px', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '600', margin: '0 0 8px 0' }}>
                    {t(translations, 'station.tactilFloor', 'Tactile Floor')}
                  </p>
                  <p style={{ fontSize: '16px', fontWeight: '700', color: estacion.accesibilidad.piso_tactil ? '#10b981' : '#ef4444', margin: '0' }}>
                    {estacion.accesibilidad.piso_tactil ? '✓' : '✗'}
                  </p>
                </div>
              </div>
              {estacion.accesibilidad.notas && (
                <div style={{ padding: '16px', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
                  <p style={{ fontSize: '14px', color: 'var(--text)', margin: '0', lineHeight: '1.5' }}>
                    {estacion.accesibilidad.notas}
                  </p>
                </div>
              )}
            </section>
          )}

          {/* SCHEDULE */}
          {estacion.horarios && (
            <section style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '24px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
                {t(translations, 'station.schedule', 'Schedule')}
              </h2>
              <div style={{ padding: '24px', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '16px', marginBottom: '16px' }}>
                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '600', margin: '0' }}>
                    {t(translations, 'station.opening', 'Opens')}
                  </p>
                  <p style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text)', margin: '0' }}>
                    {estacion.horarios.apertura}
                  </p>

                  <p style={{ fontSize: '12px', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: '600', margin: '0' }}>
                    {t(translations, 'station.closes', 'Closes')}
                  </p>
                  <p style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text)', margin: '0' }}>
                    {estacion.horarios.cierre}
                  </p>
                </div>
                {estacion.horarios.notas && (
                  <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
                    <p style={{ fontSize: '14px', color: 'var(--text-muted)', margin: '0', lineHeight: '1.5' }}>
                      {estacion.horarios.notas}
                    </p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* CONNECTIONS */}
          {estacion.transferencias && estacion.transferencias.length > 0 && (
            <section style={{ marginBottom: '48px' }}>
              <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '24px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
                {t(translations, 'station.connections', 'Connections')}
              </h2>
              <div style={{ display: 'grid', gap: '12px' }}>
                {estacion.transferencias.map((transf, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '12px 16px',
                      backgroundColor: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
                      fontSize: '15px',
                      color: 'var(--text)',
                    }}
                  >
                    {transf}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* AFFILIATE CARDS */}
          <section style={{ marginBottom: '48px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '24px', color: 'var(--text)', letterSpacing: '-0.01em' }}>
              {t(translations, 'station.relatedServices', 'Useful Services')}
            </h2>
            <AffiliateTransportCard />
          </section>
        </div>

        {/* SIDEBAR */}
        <aside style={{ position: 'sticky', top: '100px' }}>
          {/* QUICK INFO CARD */}
          <div style={{ padding: '24px', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', marginBottom: '24px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '700', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', margin: '0 0 16px 0' }}>
              {t(translations, 'station.quickInfo', 'Quick Info')}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: '0', fontWeight: '600' }}>
                  {t(translations, 'station.line', 'Line')}
                </p>
                <p style={{ fontSize: '16px', fontWeight: '700', color: colorLinea, margin: '0' }}>
                  {lineLabel}
                </p>
              </div>
              <div style={{ paddingTop: '12px', borderTop: '1px solid var(--border)' }}>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: '0', fontWeight: '600' }}>
                  {t(translations, 'station.municipality', 'Municipality')}
                </p>
                <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text)', margin: '0' }}>
                  {estacion.municipio}
                </p>
              </div>
              <div style={{ paddingTop: '12px', borderTop: '1px solid var(--border)' }}>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: '0', fontWeight: '600' }}>
                  {t(translations, 'station.zoneType', 'Zone Type')}
                </p>
                <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text)', margin: '0' }}>
                  {estacion.tipo_zona.replace(/-/g, ' ')}
                </p>
              </div>
            </div>
          </div>

          {/* NAVIGATION BUTTONS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Link href={`/${lang}/mty/linea/${estacion.linea}`}>
              <button
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: colorLinea,
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: 'var(--radius)',
                  fontSize: '14px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'opacity 0.2s',
                }}

              >
                {t(translations, 'navigation.viewLine', 'View Full Line')}
              </button>
            </Link>
            <Link href={`/${lang}/mty`}>
              <button
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  backgroundColor: 'var(--surface)',
                  color: 'var(--text)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  fontSize: '14px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                }}

              >
                {t(translations, 'navigation.backToMty', 'Back to Monterrey')}
              </button>
            </Link>
          </div>
        </aside>
      </div>

      <AdBannerLazy slot="4434764790" format="auto" />
    </main>
  );
}
