import { lineasGDL } from '@/data/gdl/lineas-detalle';
import { estacionesGDL } from '@/data/gdl/estaciones';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import { LANGUAGES, buildMetadata, t } from '@/lib/i18n';

export function generateStaticParams() {
  const params = [];
  LANGUAGES.filter(l => l !== 'es').forEach(lang => {
    lineasGDL.forEach(linea => {
      params.push({ lang, id: linea.id });
    });
  });
  return params;
}

export async function generateMetadata({ params }) {
  const linea = lineasGDL.find(l => l.id === params.id);
  if (!linea) {
    return { title: 'Line not found — MetroGuia' };
  }
  return buildMetadata({
    lang: params.lang,
    title: linea.seo_title || `Line ${linea.id} ${linea.colorNombre} — SITEUR Guadalajara | MetroGuia`,
    description: linea.meta_description || linea.descripcion,
    path: `/gdl/linea/${linea.id}/`,
    keywords: ['SITEUR', 'Guadalajara', `Línea ${linea.id}`, linea.colorNombre, 'FIFA 2026'],
  });
}

export default function LineaGDLPageLang({ params }) {
  const lang = params.lang;
  const translations = {}; // fallback: t() uses defaults
  const linea = lineasGDL.find(l => l.id === params.id);

  if (!linea) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--danger)' }}>
          {t(translations, 'line.title', 'Line not found')}
        </h1>
        <Link href={`/${lang}/gdl`}>
          <button style={{ marginTop: '24px', padding: '12px 24px', backgroundColor: 'var(--gdl)', color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            ← Guadalajara
          </button>
        </Link>
      </main>
    );
  }

  // Get stations for this line
  const isMacrobus = linea.id === 'MC' || linea.id === 'MP';
  const estacionesLinea = isMacrobus
    ? estacionesGDL.filter(e => linea.estaciones.includes(e.slug))
    : estacionesGDL.filter(e => e.linea === linea.id);

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Guadalajara', item: `https://metroguia.mx/${lang}/gdl/` },
      { '@type': 'ListItem', position: 3, name: `${t(translations, 'line.title', 'Line').replace('{id}', linea.id)} — ${linea.colorNombre}`, item: `https://metroguia.mx/${lang}/gdl/linea/${linea.id}/` },
    ],
  };

  const transitRouteSchema = {
    '@context': 'https://schema.org',
    '@type': 'TransitRoute',
    name: `Línea ${linea.id} — ${linea.colorNombre}`,
    description: linea.descripcion,
    provider: { '@type': 'Organization', name: 'SITEUR Guadalajara' },
  };

  const stationBasePath = isMacrobus ? `/${lang}/gdl/macrobus/estacion` : `/${lang}/gdl/estacion`;

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(transitRouteSchema) }} />

      {/* HERO */}
      <section style={{ background: `linear-gradient(135deg, ${linea.color} 0%, ${linea.color}cc 100%)`, color: '#fff', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ width: '60px', height: '60px', backgroundColor: 'rgba(255,255,255,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: '800' }}>
              {linea.id}
            </span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', margin: '0 0 16px 0', lineHeight: '1.2' }}>
            {t(translations, 'line.title', 'Line {id}').replace('{id}', linea.id)} — {linea.colorNombre}
          </h1>
          <p style={{ fontSize: '1.25rem', margin: '0 0 16px 0', opacity: '0.95' }}>
            {linea.inicio} → {linea.fin}
          </p>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', opacity: '0.9' }}>
            <span style={{ fontSize: '1rem' }}>{linea.total} {t(translations, 'city.stations', 'stations').toLowerCase()}</span>
            <span style={{ fontSize: '1rem' }}>{linea.municipios.length} municipios</span>
            <span style={{ fontSize: '1rem' }}>{isMacrobus ? 'Mi Macro BRT' : 'SITEUR Tren Ligero'}</span>
          </div>
        </div>
      </section>

      {/* STATS + DESCRIPTION */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        {/* Info cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '48px' }}>
          <div className="card" style={{ padding: '20px' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600, letterSpacing: '0.1em' }}>
              {t(translations, 'line.terminals', 'Terminals')}
            </p>
            <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0', color: linea.color }}>{linea.inicio} → {linea.fin}</p>
          </div>
          <div className="card" style={{ padding: '20px' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600, letterSpacing: '0.1em' }}>
              {t(translations, 'line.stations', 'Stations')}
            </p>
            <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0' }}>{linea.total}</p>
          </div>
          <div className="card" style={{ padding: '20px' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600, letterSpacing: '0.1em' }}>
              {t(translations, 'line.schedule', 'Schedule')}
            </p>
            <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0' }}>05:00–23:00</p>
          </div>
          <div className="card" style={{ padding: '20px' }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 6px 0', fontWeight: 600, letterSpacing: '0.1em' }}>
              Costo
            </p>
            <p style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0', color: 'var(--success)' }}>{isMacrobus ? '$12.00' : '$9.50'} MXN</p>
          </div>
        </div>

        {/* Description */}
        <div style={{ backgroundColor: 'var(--surface)', padding: '32px', borderLeft: `4px solid ${linea.color}`, borderRadius: 'var(--radius)', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
            {t(translations, 'city.touristGuide', 'About this Line')}
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0 0 16px 0', lineHeight: '1.8' }}>
            {linea.descripcion}
          </p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {linea.municipios.map((mun, idx) => (
              <span key={idx} style={{ padding: '4px 12px', backgroundColor: `${linea.color}15`, color: linea.color, borderRadius: 'var(--radius-full)', fontSize: '0.85rem', fontWeight: '600' }}>
                {mun}
              </span>
            ))}
          </div>
        </div>

        <AdBannerLazy slot="4434764790" />

        {/* RUTA DE 1 DIA */}
        {linea.ruta_1_dia && (
          <div style={{ marginBottom: '60px', marginTop: '40px' }}>
            <h2 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '32px', color: 'var(--text)', borderBottom: `3px solid ${linea.color}`, paddingBottom: '16px' }}>
              {linea.ruta_1_dia.titulo}
            </h2>
            <div style={{ display: 'grid', gap: '24px' }}>
              {linea.ruta_1_dia.paradas.map((parada, idx) => {
                const estacion = estacionesLinea.find(e => e.slug === parada.estacion);
                return (
                  <div key={idx} style={{ display: 'grid', gridTemplateColumns: '60px 1fr', gap: '24px', alignItems: 'start' }}>
                    <div style={{ position: 'relative' }}>
                      <div style={{ width: '60px', height: '60px', backgroundColor: linea.color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.5rem', fontWeight: '700' }}>
                        {idx + 1}
                      </div>
                      {idx < linea.ruta_1_dia.paradas.length - 1 && (
                        <div style={{ position: 'absolute', left: '29px', top: '60px', width: '2px', height: '100px', backgroundColor: linea.color, opacity: '0.3' }} />
                      )}
                    </div>
                    <div>
                      <Link href={`${stationBasePath}/${parada.estacion}`}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 8px 0', color: linea.color, cursor: 'pointer' }}>
                          {estacion?.nombre || parada.estacion}
                        </h3>
                      </Link>
                      <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0', lineHeight: '1.6' }}>
                        {parada.actividad}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ALL STATIONS */}
        <div style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '32px', color: 'var(--text)', borderBottom: `3px solid ${linea.color}`, paddingBottom: '16px' }}>
            {t(translations, 'line.stationCount', '{count} Stations').replace('{count}', linea.total)}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            {estacionesLinea.map((estacion, idx) => (
              <Link href={`${stationBasePath}/${estacion.slug}`} key={estacion.slug}>
                <div style={{ padding: '20px', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', cursor: 'pointer', transition: 'all 0.2s ease' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                    <span style={{ width: '36px', height: '36px', backgroundColor: linea.color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '0.9rem', fontWeight: '700', flexShrink: 0 }}>
                      {idx + 1}
                    </span>
                    <h3 style={{ fontSize: '1rem', fontWeight: '700', margin: '0', color: 'var(--text)' }}>
                      {estacion.nombre}
                    </h3>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', margin: '0 0 8px 0', fontWeight: '500' }}>
                    {estacion.municipio}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0', lineHeight: '1.4' }}>
                    {estacion.intro}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <AdBannerLazyInArticle slot="1082410395" />

        {/* AFFILIATE */}
        <div style={{ maxWidth: '800px', margin: '40px auto' }}>
          <AffiliateTransportCard ciudad="GDL" estacion={null} fechas={null} />
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--surface)', padding: '60px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
          {t(translations, 'gdl.title', 'SITEUR Guadalajara')}
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0 0 24px 0', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
          {t(translations, 'gdl.heroDesc', 'Fast and efficient transit system in Guadalajara.')}
        </p>
        <Link href={`/${lang}/gdl`}>
          <button style={{ padding: '14px 32px', backgroundColor: linea.color, color: '#fff', border: 'none', borderRadius: 'var(--radius)', fontSize: '1rem', fontWeight: '700', cursor: 'pointer' }}>
            ← {t(translations, 'gdl.title', 'Guadalajara')}
          </button>
        </Link>
      </section>
    </main>
  );
}
