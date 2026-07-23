import { estacionesLondon } from '@/data/london/estaciones';
import { lineasLondon } from '@/data/london/lineas-detalle';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';

export const metadata = {
  title: 'London Underground — Tube Guide | MetroGuia',
  description: 'Complete guide to the London Underground (Tube): 11 lines, 272 stations. King\'s Cross, Oxford Circus, Waterloo, Heathrow. Tourist travel guide.',
  keywords: 'London Underground, London tube, London metro, tube guide, London transport',
  openGraph: {
    title: 'London Underground — Complete Tube Guide',
    description: 'London Underground: 11 lines, 272 stations. Travel guide for tourists.',
    url: 'https://metroguia.mx/london/',
    type: 'website',
  },
  alternates: { canonical: 'https://metroguia.mx/london/' },
};

export default function LondonPage() {
  const estacionesDestacadas = estacionesLondon.filter(e =>
    ['london-kings-cross-st-pancras', 'london-oxford-circus', 'london-waterloo', 'london-westminster', 'london-heathrow-terminals', 'london-london-bridge', 'london-south-kensington'].includes(e.slug)
  );

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <section style={{ background: 'linear-gradient(135deg, var(--surface) 0%, rgba(227,32,23,0.08) 100%)', padding: '5rem 1.5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>🇬🇧 London Underground · United Kingdom</p>
          <h1 style={{ fontSize: 'clamp(1.75rem,5vw,2.75rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>London Underground</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>11 lines · 272 stations · 402 km — The world's oldest metro system (1863)</p>
          <SearchBar />
        </div>
      </section>

      <section style={{ padding: '3rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontWeight: 700, marginBottom: '1.5rem', fontSize: '1.25rem' }}>Tube Lines</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '1rem' }}>
          {lineasLondon.map(linea => (
            <Link key={linea.id} href={`/london/line/${linea.id}/`} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: 40, height: 10, borderRadius: 5, background: linea.color, flexShrink: 0 }} />
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
        <h2 style={{ fontWeight: 700, marginBottom: '1.5rem', fontSize: '1.25rem' }}>Key Stations</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '1rem' }}>
          {estacionesDestacadas.map(e => {
            const lineaArr = Array.isArray(e.linea) ? e.linea : [e.linea];
            return (
              <Link key={e.slug} href={`/london/station/${e.slug}/`} style={{ textDecoration: 'none' }}>
                <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem' }}>
                  <p style={{ fontWeight: 600, marginBottom: '0.25rem', color: 'var(--text)' }}>{e.nombre}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>{lineaArr.slice(0,2).join(', ')}{lineaArr.length > 2 ? ` +${lineaArr.length-2}` : ''}</p>
                  {e.pois && e.pois[0] && <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>📍 {e.pois[0].nombre}</p>}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto', borderTop: '1px solid var(--border)' }}>
        <h2 style={{ fontWeight: 700, marginBottom: '1rem', fontSize: '1.25rem' }}>Essential Information</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(240px,1fr))', gap: '1rem' }}>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem' }}>
            <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>🕐 Hours</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Mon–Sat ~5am–1am<br />Sun ~6:30am–midnight<br />Fri–Sat 24h on some lines</p>
          </div>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem' }}>
            <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>💷 Fares</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Zone 1 single: ~£2.80<br />Daily cap: ~£7.70 (Z1-2)<br />Use Oyster or contactless</p>
          </div>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem' }}>
            <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>✈️ Heathrow</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Piccadilly Line: 45 min<br />Elizabeth Line: 37 min<br />Heathrow Express: 15 min (premium)</p>
          </div>
        </div>
      </section>
      <AdBannerLazy />
    </main>
  );
}
