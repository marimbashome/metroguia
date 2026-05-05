import { estacionesParis } from '@/data/paris/estaciones';
import { lineasParis } from '@/data/paris/lineas-detalle';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';

export const metadata = {
  title: 'Métro de Paris — Guide du Transport | MetroGuia',
  description: 'Guide complet du Métro de Paris: 16 lignes, 302 stations. Châtelet, Étoile, Notre-Dame, Tour Eiffel, Louvre. Carte et itinéraires touristiques.',
  keywords: 'Métro Paris, transport Paris, plan métro, stations metro Paris, guide touriste',
  openGraph: {
    title: 'Métro de Paris — Guide Complet',
    description: 'Métro de Paris: 16 lignes, 302 stations. Guide de transport pour touristes.',
    url: 'https://metroguia.mx/paris/',
    type: 'website',
  },
  alternates: { canonical: 'https://metroguia.mx/paris/' },
};

export default function ParisPage() {
  const estacionesDestacadas = estacionesParis.filter(e =>
    ['paris-chatelet', 'paris-charles-de-gaulle-etoile', 'paris-palais-royal-louvre', 'paris-trocadero', 'paris-notre-dame-cite', 'paris-abbesses', 'paris-bir-hakeim'].includes(e.slug)
  );

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <section style={{ background: 'linear-gradient(135deg, var(--surface) 0%, rgba(207,0,158,0.06) 100%)', padding: '5rem 1.5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>🇫🇷 Métro de Paris · France</p>
          <h1 style={{ fontSize: 'clamp(1.75rem,5vw,2.75rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>Métro de Paris</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>16 lignes · 302 stations · 225 km — Le réseau métropolitain le plus dense d'Europe</p>
          <SearchBar />
        </div>
      </section>

      <section style={{ padding: '3rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontWeight: 700, marginBottom: '1.5rem', fontSize: '1.25rem' }}>Lignes du Métro</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: '1rem' }}>
          {lineasParis.map(linea => (
            <Link key={linea.id} href={`/paris/line/${linea.id}/`} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: linea.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '0.9rem', flexShrink: 0 }}>
                  {linea.id}
                </div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.15rem', color: 'var(--text)' }}>{linea.colorNombre}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{linea.total} stations</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto', borderTop: '1px solid var(--border)' }}>
        <h2 style={{ fontWeight: 700, marginBottom: '1.5rem', fontSize: '1.25rem' }}>Stations Principales</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '1rem' }}>
          {estacionesDestacadas.map(e => {
            const lineaArr = Array.isArray(e.linea) ? e.linea : [e.linea];
            const linea = lineasParis.find(l => l.id === lineaArr[0]);
            return (
              <Link key={e.slug} href={`/paris/station/${e.slug}/`} style={{ textDecoration: 'none' }}>
                <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem', borderLeft: `3px solid ${linea?.color || 'var(--primary)'}` }}>
                  <p style={{ fontWeight: 600, marginBottom: '0.25rem', color: 'var(--text)' }}>{e.nombre}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>M{lineaArr.join(', M')}</p>
                  {e.pois && e.pois[0] && <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>📍 {e.pois[0].nombre}</p>}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto', borderTop: '1px solid var(--border)' }}>
        <h2 style={{ fontWeight: 700, marginBottom: '1rem', fontSize: '1.25rem' }}>Informations Essentielles</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: '1rem' }}>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem' }}>
            <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>🕐 Horaires</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Lun–Jeu & Dim: 5:30–1:15<br />Ven–Sam: 5:30–2:15</p>
          </div>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem' }}>
            <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>💶 Tarifs</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Ticket T+: €1.90<br />Carnet 10 tickets: €16.90<br />Paris Visite 1-5 jours</p>
          </div>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem' }}>
            <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>✈️ Aéroports</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>CDG: RER B ~35 min<br />Orly: M14 depuis 2024<br />Beauvais: bus navette</p>
          </div>
        </div>
      </section>
      <AdBannerLazy />
    </main>
  );
}
