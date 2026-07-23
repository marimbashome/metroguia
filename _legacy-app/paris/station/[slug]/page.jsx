import { estacionesParis } from '@/data/paris/estaciones';
import { lineasParis } from '@/data/paris/lineas-detalle';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';

import { IntlStationSchema } from '@/app/components/IntlSchema';
export async function generateStaticParams() {
  return estacionesParis.map(e => ({ slug: e.slug }));
}

export async function generateMetadata({ params }) {
  const e = estacionesParis.find(e => e.slug === params.slug);
  if (!e) return { title: 'Station not found | MetroGuia' };
  return {
    title: e.seo_title,
    description: e.meta_description,
    openGraph: {
      title: e.seo_title,
      description: e.meta_description,
      url: `https://metroguia.mx/paris/station/${e.slug}/`,
    },
    alternates: { canonical: `https://metroguia.mx/paris/station/${e.slug}/` },
  };
}

export default function ParisStation({ params }) {
  const e = estacionesParis.find(s => s.slug === params.slug);
  if (!e) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ marginBottom: '1rem' }}>Station not found</h1>
        <Link href="/paris/" style={{ color: 'var(--primary)' }}>← Back to Paris</Link>
      </main>
    );
  }
  const lineaArr = Array.isArray(e.linea) ? e.linea : [e.linea];

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)', padding: '5rem 1.5rem 3rem', maxWidth: 800, margin: '0 auto' }}>
      <IntlStationSchema station={(estacionesParis.find(s => s.slug === params.slug)) || null} city="París" citySlug="paris" stationPathPrefix="/paris/station" linePathPrefix="/paris/line" country="FR" systemName="Paris Métro" locale="es" />
      {/* BREADCRUMB */}
      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
        <Link href="/paris/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Paris</Link>
        {' '} › {' '}
        <Link href="/paris/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Estaciones</Link>
        {' '} › {e.nombre}
      </p>

      {/* TITLE */}
      <h1 style={{ fontSize: 'clamp(1.5rem,4vw,2rem)', fontWeight: 800, marginBottom: '0.5rem' }}>{e.h1}</h1>

      {/* LINE BADGES */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
        {lineaArr.map(l => {
          const linea = lineasParis.find(x => x.id === l);
          return (
            <Link key={l} href={`/paris/line/${l}/`} style={{ background: linea?.color || 'var(--primary)', color: '#fff', padding: '0.3rem 0.8rem', borderRadius: 999, fontWeight: 700, fontSize: '0.85rem', textDecoration: 'none' }}>
              L{l}
            </Link>
          );
        })}
      </div>

      {/* INTRO */}
      {e.intro && (
        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '1.5rem', fontStyle: 'italic', borderLeft: '3px solid var(--primary)', paddingLeft: '1rem' }}>
          {e.intro}
        </p>
      )}

      {/* DESCRIPTION */}
      <p style={{ lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.97rem' }}>{e.descripcion_turistica}</p>

      {/* TIPS */}
      {e.tips && e.tips.length > 0 && (
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem', marginBottom: '1.5rem' }}>
          <h2 style={{ fontWeight: 700, marginBottom: '0.75rem', fontSize: '1rem' }}>💡 Travel Tips</h2>
          {e.tips.map((tip, i) => (
            <p key={i} style={{ marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>• {tip}</p>
          ))}
        </div>
      )}

      {/* POIS */}
      {e.pois && e.pois.length > 0 && (
        <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem', marginBottom: '1.5rem' }}>
          <h2 style={{ fontWeight: 700, marginBottom: '0.75rem', fontSize: '1rem' }}>📍 Puntos de interés</h2>
          {e.pois.map((p, i) => (
            <p key={i} style={{ marginBottom: '0.5rem', fontSize: '0.9rem' }}>
              <strong>{p.nombre}</strong>
              <span style={{ color: 'var(--text-muted)' }}> — {p.distancia}</span>
            </p>
          ))}
        </div>
      )}

      {/* NEARBY */}
      {e.lugares_cercanos && e.lugares_cercanos.length > 0 && (
        <div style={{ marginBottom: '1.5rem' }}>
          <h2 style={{ fontWeight: 700, marginBottom: '1rem', fontSize: '1rem' }}>Cerca de esta estación</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '0.75rem' }}>
            {e.lugares_cercanos.map((lugar, i) => (
              <div key={i} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '0.75rem' }}>
                <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.25rem' }}>{lugar.nombre}</p>
                <p style={{ fontSize: '0.75rem', color: 'var(--primary)', marginBottom: '0.25rem' }}>{lugar.tipo} · {lugar.distancia}</p>
                {lugar.descripcion && <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{lugar.descripcion}</p>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* HOURS & ACCESSIBILITY */}
      {e.horarios && (
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
          🕐 <strong>{e.horarios.apertura}–{e.horarios.cierre}</strong> · {e.horarios.notas}
        </p>
      )}
      {e.accesibilidad && (
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          ♿ {e.accesibilidad.notas}
        </p>
      )}

      <AdBannerLazy />
      <div style={{ marginTop: '2rem' }}>
        <Link href="/paris/" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>← Volver a Paris</Link>
      </div>
    </main>
  );
}
