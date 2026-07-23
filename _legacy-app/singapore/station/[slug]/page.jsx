import { estacionesSingapore } from '@/data/singapore/estaciones';
import { lineasSingapore } from '@/data/singapore/lineas-detalle';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';

import { IntlStationSchema } from '@/app/components/IntlSchema';
export async function generateStaticParams() {
  return estacionesSingapore.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }) {
  const estacion = estacionesSingapore.find((e) => e.slug === params.slug);
  if (!estacion) return { title: 'Station not found' };
  return {
    title: estacion.seo_title,
    description: estacion.meta_description,
    openGraph: { title: estacion.seo_title, description: estacion.meta_description, url: `https://metroguia.mx/singapore/station/${estacion.slug}/` },
    alternates: { canonical: `https://metroguia.mx/singapore/station/${estacion.slug}/` },
  };
}

export default function SingaporeStation({ params }) {
  const estacion = estacionesSingapore.find((e) => e.slug === params.slug);
  if (!estacion) {
    return <main style={{ padding: '80px 24px', textAlign: 'center', backgroundColor: 'var(--bg)', color: 'var(--text)' }}><h1>Station not found</h1><Link href="/singapore">Back to Singapore</Link></main>;
  }
  const lineaArr = Array.isArray(estacion.linea) ? estacion.linea : [estacion.linea];
  const lineasEstacion = lineaArr.map(id => lineasSingapore.find(l => l.id === id)).filter(Boolean);
  const colorPrincipal = lineasEstacion.length > 0 ? lineasEstacion[0].color : '#D42E12';

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <IntlStationSchema station={(estacionesSingapore.find(s => s.slug === params.slug)) || null} city="Singapur" citySlug="singapore" stationPathPrefix="/singapore/station" linePathPrefix="/singapore/line" country="SG" systemName="SMRT" locale="es" />
      <section style={{ background: `linear-gradient(135deg, ${colorPrincipal} 0%, ${colorPrincipal}cc 100%)`, color: '#fff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <nav style={{ fontSize: '0.8rem', opacity: 0.85, marginBottom: 16 }}><Link href="/singapore/" style={{ color: '#fff', textDecoration: 'none' }}>Singapore MRT</Link> → {estacion.nombre}</nav>
          <h1 style={{ fontSize: 'clamp(1.75rem, 5vw, 3rem)', fontWeight: 800, margin: '0 0 12px', lineHeight: 1.1 }}>{estacion.nombre}</h1>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 12 }}>
            {lineasEstacion.map(l => <span key={l.id} style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.2)', borderRadius: 20, fontSize: '0.85rem', fontWeight: 700 }}>{l.colorNombre}</span>)}
          </div>
          <p style={{ fontSize: '1.05rem', opacity: 0.95, margin: 0, maxWidth: 600 }}>{estacion.intro}</p>
        </div>
      </section>
      <section style={{ maxWidth: 1000, margin: '0 auto', padding: '48px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr minmax(240px, 300px)', gap: 40 }}>
          <div>
            {estacion.descripcion_turistica && <div style={{ marginBottom: 32 }}><h2 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: 12 }}>About</h2><p style={{ lineHeight: 1.7, margin: 0 }}>{estacion.descripcion_turistica}</p></div>}
            {estacion.tips && estacion.tips.length > 0 && <div style={{ marginBottom: 32 }}><h2 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: 12 }}>Tips</h2><ul style={{ margin: 0, paddingLeft: 20 }}>{estacion.tips.map((t, i) => <li key={i} style={{ marginBottom: 8, lineHeight: 1.6 }}>{t}</li>)}</ul></div>}
            {estacion.lugares_cercanos && estacion.lugares_cercanos.length > 0 && <div><h2 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: 12 }}>Nearby</h2><div style={{ display: 'grid', gap: 10 }}>{estacion.lugares_cercanos.map((l, i) => <div key={i} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '0.875rem' }}><div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}><p style={{ fontWeight: 700, margin: 0, fontSize: '0.9rem' }}>{l.nombre}</p><span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{l.distancia}</span></div>{l.descripcion && <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>{l.descripcion}</p>}</div>)}</div></div>}
          </div>
          <div>
            <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.25rem', marginBottom: 16 }}>
              <h3 style={{ fontWeight: 700, fontSize: '0.95rem', margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Station Info</h3>
              <div style={{ display: 'grid', gap: 10 }}>
                <div><p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', margin: '0 0 2px', fontWeight: 600 }}>Area</p><p style={{ margin: 0, fontSize: '0.9rem' }}>{estacion.municipio}</p></div>
                {estacion.horarios && <div><p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', margin: '0 0 2px', fontWeight: 600 }}>Hours</p><p style={{ margin: 0, fontSize: '0.9rem' }}>{estacion.horarios.apertura} – {estacion.horarios.cierre}</p>{estacion.horarios.notas && <p style={{ margin: '4px 0 0', fontSize: '0.78rem', color: 'var(--text-muted)' }}>{estacion.horarios.notas}</p>}</div>}
              </div>
            </div>
            {estacion.transferencias && estacion.transferencias.length > 0 && <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.25rem' }}><h3 style={{ fontWeight: 700, fontSize: '0.95rem', margin: '0 0 12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Connections</h3><div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>{estacion.transferencias.map((t, i) => <span key={i} style={{ padding: '4px 10px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: 20, fontSize: '0.78rem' }}>{t}</span>)}</div></div>}
          </div>
        </div>
      </section>
      <section style={{ padding: '24px', maxWidth: 1000, margin: '0 auto' }}><Link href="/singapore/" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>← Back to Singapore MRT</Link></section>
      <AdBannerLazy />
    </main>
  );
}
