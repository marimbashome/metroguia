import { lineasLondon } from '@/data/london/lineas-detalle';
import { estacionesLondon } from '@/data/london/estaciones';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';

export async function generateStaticParams() {
  return lineasLondon.map(l => ({ id: l.id }));
}

export async function generateMetadata({ params }) {
  const l = lineasLondon.find(l => l.id === params.id);
  if (!l) return { title: 'Line not found | MetroGuia' };
  return {
    title: l.seo_title,
    description: l.meta_description,
    alternates: { canonical: `https://metroguia.mx/london/line/${params.id}/` },
  };
}

export default function LondonLine({ params }) {
  const linea = lineasLondon.find(l => l.id === params.id);
  if (!linea) {
    return (
      <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
        <h1 style={{ marginBottom: '1rem' }}>Line not found</h1>
        <Link href="/london/" style={{ color: 'var(--primary)' }}>← London</Link>
      </main>
    );
  }

  const estacionesData = (linea.estaciones || []).map(slug => estacionesLondon.find(e => e.slug === slug)).filter(Boolean);

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)', padding: '5rem 1.5rem 3rem', maxWidth: 800, margin: '0 auto' }}>
      {/* BREADCRUMB */}
      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
        <Link href="/london/" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>London</Link>
        {' '} › Line {linea.id}
      </p>

      {/* HEADER */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ width: 52, height: 52, borderRadius: '50%', background: linea.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '1.2rem', flexShrink: 0 }}>
          {linea.id}
        </div>
        <div>
          <h1 style={{ fontSize: 'clamp(1.25rem,4vw,1.75rem)', fontWeight: 800, marginBottom: '0.25rem' }}>{linea.h1}</h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            {linea.inicio} → {linea.fin} · {linea.total} estaciones
          </p>
        </div>
      </div>

      {/* DESCRIPTION */}
      <p style={{ lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '0.97rem' }}>{linea.descripcion}</p>

      {/* 1-DAY ROUTE */}
      {linea.ruta_1_dia && (
        <div style={{ background: 'var(--surface)', border: `2px solid ${linea.color}`, borderRadius: 'var(--radius)', padding: '1.25rem', marginBottom: '1.5rem' }}>
          <h2 style={{ fontWeight: 700, marginBottom: '1rem', fontSize: '1rem' }}>🗺️ {linea.ruta_1_dia.titulo}</h2>
          {linea.ruta_1_dia.paradas.map((parada, i) => {
            const est = estacionesLondon.find(e => e.slug === parada.estacion);
            return (
              <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <div style={{ width: 24, height: 24, borderRadius: '50%', background: linea.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '0.7rem', flexShrink: 0 }}>
                  {i + 1}
                </div>
                <div>
                  {est ? (
                    <Link href={`/london/station/${parada.estacion}/`} style={{ fontWeight: 600, color: 'var(--primary)', textDecoration: 'none', fontSize: '0.9rem' }}>
                      {est.nombre}
                    </Link>
                  ) : (
                    <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{parada.estacion}</span>
                  )}
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.1rem' }}>{parada.actividad}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* STATIONS GRID */}
      <h2 style={{ fontWeight: 700, marginBottom: '1rem', fontSize: '1.1rem' }}>All stations ({linea.total})</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(180px,1fr))', gap: '0.5rem', marginBottom: '2rem' }}>
        {estacionesData.length > 0 ? estacionesData.map(e => (
          <Link key={e.slug} href={`/london/station/${e.slug}/`} style={{ textDecoration: 'none', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '0.5rem 0.75rem', fontSize: '0.85rem', fontWeight: 500, color: 'var(--text)', display: 'block' }}>
            {e.nombre}
          </Link>
        )) : (linea.estaciones || []).map((slug, i) => (
          <div key={i} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '0.5rem 0.75rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            {slug.replace('london-', '').replace(/-/g, ' ')}
          </div>
        ))}
      </div>

      <AdBannerLazy />
      <Link href="/london/" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>← Volver a London</Link>
    </main>
  );
}
