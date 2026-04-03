import { estacionesMontreal } from '@/data/montreal/estaciones';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import { LANGUAGES, buildMetadata, t, getDefaultLangForCity } from '@/lib/i18n';

export function generateStaticParams() {
  const defaultLang = getDefaultLangForCity('montreal');
  const params = [];
  LANGUAGES.filter(l => l !== defaultLang).forEach(lang => {
    estacionesMontreal.forEach(estacion => {
      params.push({ lang, slug: estacion.slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }) {
  const estacion = estacionesMontreal.find(e => e.slug === params.slug);
  if (!estacion) return { title: 'Station not found — MetroGuia' };
  return buildMetadata({
    lang: params.lang,
    title: `${estacion.nombre} — Montreal Transit | MetroGuia`,
    description: estacion.meta_description || estacion.descripcion || estacion.intro || `${estacion.nombre} station in Montreal`,
    path: `/montreal/station/${estacion.slug}/`,
    keywords: ['Montreal', estacion.nombre, 'transit', 'station'],
  });
}

export default function StationMontrealPageLang({ params }) {
  const lang = params.lang;
  const translations = {}; // fallback: t() uses defaults
  const estacion = estacionesMontreal.find(e => e.slug === params.slug);

  if (!estacion) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--danger)' }}>{t(translations, 'station.notFound', 'Station not found')}</h1>
        <Link href={`/${lang}/montreal`}>
          <button style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: '#0072CE', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            ← Montreal
          </button>
        </Link>
      </main>
    );
  }

  const lineas = Array.isArray(estacion.linea) ? estacion.linea : (estacion.linea ? [estacion.linea] : []);
  const colorPrimaria = '#0072CE';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Montreal', item: `https://metroguia.mx/${lang}/montreal/` },
      { '@type': 'ListItem', position: 3, name: estacion.nombre, item: `https://metroguia.mx/${lang}/montreal/station/${estacion.slug}` },
    ],
  };

  const desc = estacion.descripcion_turistica || estacion.descripcion || estacion.intro || '';
  const lugaresArr = Array.isArray(estacion.lugares_cercanos) ? estacion.lugares_cercanos : (estacion.lugares_cercanos ? [estacion.lugares_cercanos] : []);
  const tipsArr = Array.isArray(estacion.tips) ? estacion.tips : (estacion.tips ? [estacion.tips] : []);
  const borough = estacion.borough || estacion.municipio || estacion.zona || 'Quebec';

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section style={{ background: `linear-gradient(135deg, ${colorPrimaria} 0%, ${colorPrimaria}cc 100%)`, color: '#fff', padding: '60px 24px' }}>
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
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text)', borderBottom: `3px solid ${colorPrimaria}`, paddingBottom: '12px' }}>
                  {t(translations, 'station.linesServing', 'Lines Serving This Station')}
                </h2>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {lineas.map((lineId, idx) => (
                    <Link href={`/${lang}/montreal/line/${lineId}`} key={idx} style={{ textDecoration: 'none' }}>
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
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text)', borderBottom: `3px solid ${colorPrimaria}`, paddingBottom: '12px' }}>
                  {t(translations, 'station.about', 'About This Station')}
                </h2>
                <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0', lineHeight: '1.8' }}>{desc}</p>
              </div>
            )}

            {/* Tips */}
            {tipsArr.length > 0 && (
              <div style={{ marginBottom: '48px' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px', color: 'var(--text)', borderBottom: `3px solid ${colorPrimaria}`, paddingBottom: '12px' }}>
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
                <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '24px', color: 'var(--text)', borderBottom: `3px solid ${colorPrimaria}`, paddingBottom: '12px' }}>
                  {t(translations, 'station.nearbyPlaces', 'Nearby Places')}
                </h2>
                <div style={{ display: 'grid', gap: '12px' }}>
                  {lugaresArr.map((lugar, idx) => {
                    const lugarName = typeof lugar === 'string' ? lugar : (lugar.nombre || lugar.name || '');
                    const lugarDetail = typeof lugar === 'string' ? null : [lugar.tipo, lugar.distancia].filter(Boolean).join(' · ');
                    return (
                      <div key={idx} style={{ padding: '16px', backgroundColor: 'var(--surface)', borderLeft: `4px solid ${colorPrimaria}`, borderRadius: 'var(--radius-sm)' }}>
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
            <div style={{ backgroundColor: 'var(--surface)', padding: '24px', borderRadius: 'var(--radius)', marginBottom: '32px', borderLeft: `4px solid ${colorPrimaria}` }}>
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
            <AffiliateTransportCard ciudad="Montreal" estacion={null} fechas={null} />
          </div>
        </div>
      </section>
    </main>
  );
}
