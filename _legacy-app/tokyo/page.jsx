import { estacionesTokyo } from '@/data/tokyo/estaciones';
import { lineasTokyo } from '@/data/tokyo/lineas-detalle';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';

export const metadata = {
  title: 'Tokyo Metro Guide — 9 Lines & 180 Stations | MetroGuia',
  description: 'Complete guide to Tokyo Metro and Toei Subway. Shibuya, Shinjuku, Ginza, Asakusa, Ueno. Navigate Tokyo with ease for tourism and daily commutes.',
  openGraph: {
    title: 'Tokyo Metro Guide',
    description: 'Complete guide to Tokyo Metro: 9 lines, 180 stations. Ginza Line, Hibiya, Marunouchi, Chiyoda, Tozai, Oedo.',
    url: 'https://metroguia.mx/tokyo/',
  },
  alternates: {
    canonical: 'https://metroguia.mx/tokyo/',
  },
};

export default function TokyoPage() {
  const destacadas = estacionesTokyo.filter(e =>
    ['tokyo-shibuya', 'tokyo-shinjuku', 'tokyo-asakusa', 'tokyo-ginza', 'tokyo-ueno', 'tokyo-roppongi', 'tokyo-akihabara', 'tokyo-meiji-jingumae'].includes(e.slug)
  );

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #F9A11B 0%, #c97d0e 100%)', color: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.85)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>
            Japan · Tokyo Metro
          </p>
          <h1 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 900, margin: '0 0 16px 0', lineHeight: 1.1 }}>
            Tokyo Metro
          </h1>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', margin: '0 0 24px 0', opacity: 0.95, fontWeight: 500, maxWidth: 600 }}>
            9 lines · 180 stations — World's most efficient metro system
          </p>
          <SearchBar />
        </div>
      </section>

      {/* STATS */}
      <section style={{ backgroundColor: 'var(--surface)', padding: '40px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 24 }}>
          {[
            { val: '9 + Toei', label: 'Operators' },
            { val: '180+', label: 'Stations' },
            { val: '¥170~', label: 'Base Fare' },
            { val: '5:00 AM', label: 'First Train' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 900, margin: '0 0 6px 0', color: '#F9A11B' }}>{s.val}</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LINES */}
      <section style={{ padding: '48px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', marginBottom: '1.5rem' }}>Metro Lines</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
          {lineasTokyo.map(linea => (
            <Link key={linea.id} href={`/tokyo/line/${linea.id}/`} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', transition: 'border-color 0.2s', borderLeft: `4px solid ${linea.color}` }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: linea.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '0.8rem', flexShrink: 0 }}>{linea.id}</div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '0.9rem', margin: 0 }}>{linea.colorNombre}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '2px 0 0' }}>{linea.total} stations · {linea.inicio} → {linea.fin.split(' ')[0]}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* KEY STATIONS */}
      <section style={{ padding: '48px 24px', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid var(--border)' }}>
        <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', marginBottom: '1.5rem' }}>Key Stations</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
          {destacadas.map(e => {
            const firstLine = Array.isArray(e.linea) ? e.linea[0] : e.linea;
            const lineObj = lineasTokyo.find(l => l.id === firstLine);
            const color = lineObj ? lineObj.color : '#F9A11B';
            return (
              <Link key={e.slug} href={`/tokyo/station/${e.slug}/`} style={{ textDecoration: 'none' }}>
                <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem', borderTop: `3px solid ${color}` }}>
                  <p style={{ fontWeight: 700, marginBottom: '0.25rem', margin: '0 0 4px' }}>{e.nombre}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0 0 6px' }}>Line {Array.isArray(e.linea) ? e.linea.join(', ') : e.linea}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.4 }}>{e.intro}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* TRAVEL TIPS */}
      <section style={{ padding: '48px 24px', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid var(--border)' }}>
        <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', marginBottom: '1.5rem' }}>Tokyo Metro Tips</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {[
            { icon: '🎫', title: 'IC Card (Suica/Pasmo)', body: 'Buy a Suica or Pasmo IC card at any station. Works on all Tokyo Metro, Toei, JR, and most buses. Tap on/off — the system calculates the fare automatically.' },
            { icon: '🕐', title: 'Rush Hour', body: 'Avoid 7:30–9:00 AM and 5:30–7:30 PM. The Tozai Line is the world\'s most crowded — professional "pushers" pack passengers in during peak hour.' },
            { icon: '🗺️', title: 'Navigation App', body: 'Google Maps works perfectly for Tokyo Metro navigation. Japan Official Travel App (JNTO) also has offline metro maps in English, Chinese, Korean.' },
            { icon: '💴', title: 'Fares', body: 'Tokyo Metro fares range from ¥170 to ¥320 per trip. Day passes (¥600 Metro-only, ¥900 Metro + Toei) are cost-effective for heavy tourism days.' },
          ].map(tip => (
            <div key={tip.title} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.25rem' }}>
              <p style={{ fontSize: '1.5rem', margin: '0 0 8px' }}>{tip.icon}</p>
              <p style={{ fontWeight: 700, fontSize: '0.95rem', margin: '0 0 8px' }}>{tip.title}</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>{tip.body}</p>
            </div>
          ))}
        </div>
      </section>

      <AdBannerLazy />
    </main>
  );
}
