import { lineasTokyo } from '@/data/tokyo/lineas-detalle';
import { estacionesTokyo } from '@/data/tokyo/estaciones';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';

import { IntlLineSchema } from '@/app/components/IntlSchema';
export async function generateStaticParams() {
  return lineasTokyo.map((l) => ({ id: l.id }));
}

export async function generateMetadata({ params }) {
  const linea = lineasTokyo.find((l) => l.id === params.id);
  if (!linea) return { title: 'Line not found' };
  return {
    title: linea.seo_title,
    description: linea.meta_description,
    openGraph: {
      title: linea.seo_title,
      description: linea.meta_description,
      url: `https://metroguia.mx/tokyo/line/${linea.id}/`,
    },
    alternates: { canonical: `https://metroguia.mx/tokyo/line/${linea.id}/` },
  };
}

export default function TokyoLine({ params }) {
  const linea = lineasTokyo.find((l) => l.id === params.id);

  if (!linea) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ fontSize: '2rem', color: 'var(--danger)' }}>Line not found</h1>
        <Link href="/tokyo" style={{ display: 'inline-block', marginTop: 24, padding: '12px 24px', background: '#F9A11B', color: '#fff', borderRadius: 'var(--radius)', textDecoration: 'none', fontWeight: 700 }}>Back to Tokyo</Link>
      </main>
    );
  }

  const estacionesLinea = linea.estaciones
    ? linea.estaciones.map(slug => estacionesTokyo.find(e => e.slug === slug)).filter(Boolean)
    : estacionesTokyo.filter(e => {
        const arr = Array.isArray(e.linea) ? e.linea : [e.linea];
        return arr.includes(linea.id);
      });

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <IntlLineSchema line={(lineasTokyo.find(l => l.id === params.id)) || null} stations={((lineasTokyo.find(l => l.id === params.id) || {}).estaciones || []).map(s => (typeof s === 'string' ? (estacionesTokyo.find(x => x.slug === s) || { slug: s, nombre: s }) : s))} city="Tokio" citySlug="tokyo" linePathPrefix="/tokyo/line" stationPathPrefix="/tokyo/station" country="JP" systemName="Tokyo Metro" locale="es" />
      {/* HERO */}
      <section style={{ background: `linear-gradient(135deg, ${linea.color} 0%, ${linea.color}cc 100%)`, color: '#fff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <nav style={{ fontSize: '0.8rem', opacity: 0.85, marginBottom: 16 }}>
            <Link href="/tokyo/" style={{ color: '#fff', textDecoration: 'none' }}>Tokyo Metro</Link> → {linea.colorNombre}
          </nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', fontWeight: 800 }}>{linea.id}</div>
            <div>
              <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 800, margin: 0, lineHeight: 1.1 }}>{linea.colorNombre}</h1>
              <p style={{ fontSize: '1rem', opacity: 0.9, margin: '6px 0 0' }}>{linea.inicio} → {linea.fin}</p>
            </div>
          </div>
          <p style={{ fontSize: '0.9rem', opacity: 0.85, margin: 0 }}>{linea.total} stations · {linea.municipios.join(', ')}</p>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section style={{ maxWidth: 1000, margin: '0 auto', padding: '40px 24px' }}>
        <p style={{ lineHeight: 1.7, fontSize: '1rem', color: 'var(--text)', marginBottom: 32 }}>{linea.descripcion}</p>

        {/* 1-day route */}
        {linea.ruta_1_dia && (
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderLeft: `4px solid ${linea.color}`, borderRadius: 'var(--radius)', padding: '1.5rem', marginBottom: 32 }}>
            <h2 style={{ fontWeight: 700, fontSize: '1.1rem', margin: '0 0 16px' }}>1-Day Itinerary: {linea.ruta_1_dia.titulo}</h2>
            <div style={{ display: 'grid', gap: 10 }}>
              {linea.ruta_1_dia.paradas.map((p, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: linea.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{i + 1}</div>
                  <div>
                    <Link href={`/tokyo/station/${p.estacion}/`} style={{ fontWeight: 600, color: linea.color, textDecoration: 'none', fontSize: '0.9rem' }}>{p.estacion.replace('tokyo-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</Link>
                    <p style={{ margin: '2px 0 0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{p.actividad}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STATIONS LIST */}
        <h2 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: 16 }}>Stations ({estacionesLinea.length})</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem' }}>
          {estacionesLinea.map(e => (
            <Link key={e.slug} href={`/tokyo/station/${e.slug}/`} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: linea.color, flexShrink: 0 }} />
                <p style={{ margin: 0, fontWeight: 600, fontSize: '0.9rem' }}>{e.nombre}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ padding: '24px', maxWidth: 1000, margin: '0 auto' }}>
        <Link href="/tokyo/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>← Back to Tokyo Metro</Link>
      </section>

      <AdBannerLazy />
    </main>
  );
}
