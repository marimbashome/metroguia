import { estacionesBarcelona } from '@/data/barcelona/estaciones';
import { lineasBarcelona } from '@/data/barcelona/lineas-detalle';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';

export const metadata = {
  title: 'Metro de Barcelona — Guía de Transporte | MetroGuia',
  description: 'Guía completa del Metro de Barcelona: 11 líneas, 181 estaciones. Sagrada Família, Passeig de Gràcia, Las Ramblas, Barceloneta.',
  keywords: 'Metro Barcelona, transporte Barcelona, líneas metro Barcelona, Sagrada Família metro',
  openGraph: {
    title: 'Metro de Barcelona — Guía Completa',
    description: 'Metro de Barcelona: 11 líneas, 181 estaciones. Gaudí, Ramblas, playa.',
    url: 'https://metroguia.mx/barcelona/',
    type: 'website',
  },
  alternates: { canonical: 'https://metroguia.mx/barcelona/' },
};

export default function BarcelonaPage() {
  const estacionesDestacadas = estacionesBarcelona.filter(e =>
    ['barcelona-sagrada-familia', 'barcelona-passeig-de-gracia', 'barcelona-catalunya', 'barcelona-barceloneta', 'barcelona-liceu', 'barcelona-espanya'].includes(e.slug)
  );

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <section style={{ background: 'linear-gradient(135deg, var(--surface) 0%, rgba(62,172,52,0.08) 100%)', padding: '5rem 1.5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>🇪🇸 Metro de Barcelona · España</p>
          <h1 style={{ fontSize: 'clamp(1.75rem,5vw,2.75rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>Metro de Barcelona</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>11 líneas · 181 estaciones · 120 km — La red de metro más usada de España</p>
          <SearchBar />
        </div>
      </section>

      <section style={{ padding: '3rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontWeight: 700, marginBottom: '1.5rem', fontSize: '1.25rem' }}>Líneas del Metro</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: '1rem' }}>
          {lineasBarcelona.map(linea => (
            <Link key={linea.id} href={`/barcelona/line/${linea.id}/`} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: linea.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '0.85rem', flexShrink: 0 }}>
                  L{linea.id}
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

      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto', borderTop: '1px solid var(--border)' }}>
        <h2 style={{ fontWeight: 700, marginBottom: '1.5rem', fontSize: '1.25rem' }}>Estaciones Principales</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '1rem' }}>
          {estacionesDestacadas.map(e => {
            const lineaArr = Array.isArray(e.linea) ? e.linea : [e.linea];
            const linea = lineasBarcelona.find(l => l.id === lineaArr[0]);
            return (
              <Link key={e.slug} href={`/barcelona/station/${e.slug}/`} style={{ textDecoration: 'none' }}>
                <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem', borderLeft: `3px solid ${linea?.color || 'var(--primary)'}` }}>
                  <p style={{ fontWeight: 600, marginBottom: '0.25rem', color: 'var(--text)' }}>{e.nombre}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>L{lineaArr.join(', L')}</p>
                  {e.pois && e.pois[0] && <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>📍 {e.pois[0].nombre}</p>}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto', borderTop: '1px solid var(--border)' }}>
        <h2 style={{ fontWeight: 700, marginBottom: '1rem', fontSize: '1.25rem' }}>Información Esencial</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: '1rem' }}>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem' }}>
            <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>🕐 Horarios</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Lun–Jue y Dom: 5:00–00:00<br />Vie–Sáb: 24 horas</p>
          </div>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem' }}>
            <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>💶 Tarifas</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Billete sencillo: €2.55<br />T-Casual 10 viajes: €12.15</p>
          </div>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem' }}>
            <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>✈️ Aeropuerto</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Aerobús o L9 Sud<br />desde El Prat (~35 min)</p>
          </div>
        </div>
      </section>
      <AdBannerLazy />
    </main>
  );
}
