import { lineasSydney } from '@/data/sydney/lineas-detalle';
import { estacionesSydney } from '@/data/sydney/estaciones';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';

import { IntlLineSchema } from '@/app/components/IntlSchema';
export async function generateStaticParams() { return lineasSydney.map((l) => ({ id: l.id })); }
export async function generateMetadata({ params }) {
  const l = lineasSydney.find((l) => l.id === params.id);
  if (!l) return { title: 'Line not found' };
  return { title: l.seo_title, description: l.meta_description, openGraph: { title: l.seo_title, url: `https://metroguia.mx/sydney/line/${l.id}/` }, alternates: { canonical: `https://metroguia.mx/sydney/line/${l.id}/` } };
}

export default function SydneyLine({ params }) {
  const linea = lineasSydney.find((l) => l.id === params.id);
  if (!linea) return <main style={{ padding: '80px 24px', textAlign: 'center' }}><h1>Line not found</h1><Link href="/sydney">Back</Link></main>;
  const estacionesLinea = linea.estaciones
    ? linea.estaciones.map(slug => estacionesSydney.find(e => e.slug === slug)).filter(Boolean)
    : estacionesSydney.filter(e => { const arr = Array.isArray(e.linea) ? e.linea : [e.linea]; return arr.includes(linea.id); });
  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <IntlLineSchema line={(lineasSydney.find(l => l.id === params.id)) || null} stations={((lineasSydney.find(l => l.id === params.id) || {}).estaciones || []).map(s => (typeof s === 'string' ? (estacionesSydney.find(x => x.slug === s) || { slug: s, nombre: s }) : s))} city="Sídney" citySlug="sydney" linePathPrefix="/sydney/line" stationPathPrefix="/sydney/station" country="AU" systemName="Sydney Metro" locale="es" />
      <section style={{ background: `linear-gradient(135deg, ${linea.color} 0%, ${linea.color}cc 100%)`, color: '#fff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <nav style={{ fontSize: '0.8rem', opacity: 0.85, marginBottom: 16 }}><Link href="/sydney/" style={{ color: '#fff', textDecoration: 'none' }}>Sydney Metro</Link> → {linea.colorNombre}</nav>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6rem', fontWeight: 800, padding: 4, textAlign: 'center', lineHeight: 1.3 }}>{linea.id.replace('Metro', '')}</div>
            <div><h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 800, margin: 0 }}>{linea.colorNombre}</h1><p style={{ margin: '6px 0 0', opacity: 0.9 }}>{linea.inicio} → {linea.fin} · {linea.total} stations</p></div>
          </div>
        </div>
      </section>
      <section style={{ maxWidth: 1000, margin: '0 auto', padding: '40px 24px' }}>
        <p style={{ lineHeight: 1.7, marginBottom: 32 }}>{linea.descripcion}</p>
        {linea.ruta_1_dia && (
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderLeft: `4px solid ${linea.color}`, borderRadius: 'var(--radius)', padding: '1.5rem', marginBottom: 32 }}>
            <h2 style={{ fontWeight: 700, fontSize: '1.1rem', margin: '0 0 16px' }}>Suggested Route: {linea.ruta_1_dia.titulo}</h2>
            <div style={{ display: 'grid', gap: 10 }}>{linea.ruta_1_dia.paradas.map((p, i) => <div key={i} style={{ display: 'flex', gap: 12 }}><div style={{ width: 24, height: 24, borderRadius: '50%', background: linea.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0 }}>{i+1}</div><div><Link href={`/sydney/station/${p.estacion}/`} style={{ fontWeight: 600, color: linea.color, textDecoration: 'none', fontSize: '0.9rem' }}>{p.estacion.replace('sydney-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</Link><p style={{ margin: '2px 0 0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{p.actividad}</p></div></div>)}</div>
          </div>
        )}
        {estacionesLinea.length > 0 && <div><h2 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: 16 }}>Stations</h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '0.75rem' }}>{estacionesLinea.map(e => <Link key={e.slug} href={`/sydney/station/${e.slug}/`} style={{ textDecoration: 'none' }}><div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: 8 }}><div style={{ width: 8, height: 8, borderRadius: '50%', background: linea.color, flexShrink: 0 }} /><p style={{ margin: 0, fontWeight: 600, fontSize: '0.9rem' }}>{e.nombre}</p></div></Link>)}</div></div>}
      </section>
      <section style={{ padding: '24px', maxWidth: 1000, margin: '0 auto' }}><Link href="/sydney/" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>← Back to Sydney Metro</Link></section>
      <AdBannerLazy />
    </main>
  );
}
