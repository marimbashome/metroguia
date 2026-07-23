import { estacionesMadrid } from '@/data/madrid/estaciones';
import { lineasMadrid } from '@/data/madrid/lineas-detalle';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';

export const metadata = {
  title: 'Metro de Madrid — Guía de Transporte | MetroGuia',
  description: 'Guía completa del Metro de Madrid: 13 líneas, 302 estaciones. Sol, Gran Vía, Atocha, Retiro, Ópera. Trip planner y rutas turísticas.',
  keywords: 'Metro Madrid, transporte Madrid, líneas metro Madrid, estaciones metro Madrid, guía metro',
  openGraph: {
    title: 'Metro de Madrid — Guía Completa',
    description: 'Metro de Madrid: 13 líneas, 302 estaciones. Guía de transporte para turistas.',
    url: 'https://metroguia.mx/madrid/',
    type: 'website',
  },
  alternates: { canonical: 'https://metroguia.mx/madrid/' },
};

export default function MadridPage() {
  const estacionesDestacadas = estacionesMadrid.filter(e =>
    ['madrid-sol', 'madrid-gran-via', 'madrid-atocha', 'madrid-opera', 'madrid-callao', 'madrid-retiro', 'madrid-banco-de-espana'].includes(e.slug)
  );

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, var(--surface) 0%, rgba(0,170,220,0.08) 100%)', padding: '5rem 1.5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>🇪🇸 Metro de Madrid · España</p>
          <h1 style={{ fontSize: 'clamp(1.75rem,5vw,2.75rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>Metro de Madrid</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>13 líneas · 302 estaciones · 284 km — La red de metro más grande de España</p>
          <SearchBar />
        </div>
      </section>

      {/* LINES */}
      <section style={{ padding: '3rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontWeight: 700, marginBottom: '1.5rem', fontSize: '1.25rem' }}>Líneas del Metro</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: '1rem' }}>
          {lineasMadrid.map(linea => (
            <Link key={linea.id} href={`/madrid/line/${linea.id}/`} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', transition: 'border-color 0.2s' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: linea.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '0.85rem', flexShrink: 0 }}>
                  {linea.id}
                </div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.15rem', color: 'var(--text)' }}>{linea.colorNombre}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{linea.total} estaciones</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* KEY STATIONS */}
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto', borderTop: '1px solid var(--border)' }}>
        <h2 style={{ fontWeight: 700, marginBottom: '1.5rem', fontSize: '1.25rem' }}>Estaciones Principales</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '1rem' }}>
          {estacionesDestacadas.map(e => {
            const lineaArr = Array.isArray(e.linea) ? e.linea : [e.linea];
            const linea = lineasMadrid.find(l => l.id === lineaArr[0]);
            return (
              <Link key={e.slug} href={`/madrid/station/${e.slug}/`} style={{ textDecoration: 'none' }}>
                <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem', borderLeft: `3px solid ${linea?.color || 'var(--primary)'}` }}>
                  <p style={{ fontWeight: 600, marginBottom: '0.25rem', color: 'var(--text)' }}>{e.nombre}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Línea {lineaArr.join(', ')}</p>
                  {e.pois && e.pois[0] && <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>📍 {e.pois[0].nombre}</p>}
                </div>
              </Link>
            );
          })}
        </div>
        <Link href="/madrid/station/madrid-sol/" style={{ display: 'inline-block', marginTop: '1.5rem', color: 'var(--primary)', fontWeight: 600, textDecoration: 'none' }}>
          Ver todas las estaciones →
        </Link>
      </section>

      {/* INFO BOX */}
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto', borderTop: '1px solid var(--border)' }}>
        <h2 style={{ fontWeight: 700, marginBottom: '1rem', fontSize: '1.25rem' }}>Información Esencial</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: '1rem' }}>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem' }}>
            <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>🕐 Horarios</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Lun–Jue y Dom: 6:00–1:30<br />Vie–Sáb: 6:00–2:30</p>
          </div>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem' }}>
            <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>💶 Tarifas</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Billete sencillo: €1.50–€3<br />Abono 10 viajes desde €12.20</p>
          </div>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem' }}>
            <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>✈️ Aeropuerto</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Línea 8 desde Nuevos Ministerios<br />~15 min, suplemento €3</p>
          </div>
        </div>
      </section>

      <AdBannerLazy />
    </main>
  );
}
