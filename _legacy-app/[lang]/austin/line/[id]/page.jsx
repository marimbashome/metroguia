import { lineasAustin } from '@/data/austin/lineas-detalle';
import { estacionesAustin } from '@/data/austin/estaciones';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import { LANGUAGES, buildMetadata, t, getDefaultLangForCity } from '@/lib/i18n';

export function generateStaticParams() {
  const defaultLang = getDefaultLangForCity('austin');
  const params = [];
  LANGUAGES.filter(l => l !== defaultLang).forEach(lang => {
    lineasAustin.forEach(linea => {
      params.push({ lang, id: linea.id });
    });
  });
  return params;
}

export async function generateMetadata({ params }) {
  const linea = lineasAustin.find(l => l.id === params.id);
  if (!linea) return { title: 'Line not found — MetroGuia' };
  return buildMetadata({
    lang: params.lang,
    title: `${linea.nombre || linea.name || 'Line ' + linea.id} — Austin Transit | MetroGuia`,
    description: linea.meta_description || linea.descripcion || `${linea.nombre || linea.name || 'Line ' + linea.id} in Austin`,
    path: `/austin/line/${linea.id}/`,
    keywords: ['Austin', linea.nombre || linea.name || linea.id, 'transit line'],
  });
}

export default function LineAustinPageLang({ params }) {
  const lang = params.lang;
  const translations = {}; // fallback: t() uses defaults
  const linea = lineasAustin.find(l => l.id === params.id);

  if (!linea) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--danger)' }}>{t(translations, 'line.notFound', 'Line not found')}</h1>
        <Link href={`/${lang}/austin`}>
          <button style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: '#BF5700', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            ← Austin
          </button>
        </Link>
      </main>
    );
  }

  const lineColor = linea.color || '#BF5700';
  const lineName = linea.nombre || linea.name || `Line ${linea.id}`;
  const estacionesLinea = estacionesAustin.filter(e => {
    const lineasEst = Array.isArray(e.linea) ? e.linea : (e.linea ? [e.linea] : []);
    return lineasEst.includes(linea.id) || (linea.estaciones && linea.estaciones.includes(e.slug));
  });

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Austin', item: `https://metroguia.mx/${lang}/austin/` },
      { '@type': 'ListItem', position: 3, name: lineName, item: `https://metroguia.mx/${lang}/austin/line/${linea.id}` },
    ],
  };

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section style={{ background: `linear-gradient(135deg, ${lineColor} 0%, ${lineColor}cc 100%)`, color: '#fff', padding: '60px 24px' }}>
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
          <div style={{ backgroundColor: 'var(--surface)', padding: '32px', borderLeft: `4px solid ${lineColor}`, borderRadius: 'var(--radius)', marginBottom: '60px' }}>
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
              <Link href={`/${lang}/austin/station/${estacion.slug}`} key={idx} style={{ textDecoration: 'none' }}>
                <div style={{ padding: '20px', backgroundColor: 'var(--surface)', borderLeft: `4px solid ${lineColor}`, borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)', cursor: 'pointer', transition: 'all 0.3s ease' }}>
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
          <AffiliateTransportCard ciudad="Austin" estacion={null} fechas={null} />
        </div>
      </section>
    </main>
  );
}
