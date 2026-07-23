import { estacionesSeoul } from '@/data/seoul/estaciones';
import { lineasSeoul } from '@/data/seoul/lineas-detalle';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';

export const metadata = {
  title: 'Seoul Metro Guide — 9 Lines & 300+ Stations | MetroGuia',
  description: 'Complete guide to Seoul Metropolitan Subway. Gangnam, Hongdae, Myeongdong, Gyeongbokgung Palace. Navigate Seoul for K-pop, K-beauty, and history.',
  openGraph: {
    title: 'Seoul Metro Guide',
    description: 'Seoul Metropolitan Subway: 9 lines, 300+ stations. Gangnam, Myeongdong, Gyeongbokgung, Hongdae.',
    url: 'https://metroguia.mx/seoul/',
  },
  alternates: { canonical: 'https://metroguia.mx/seoul/' },
};

export default function SeoulPage() {
  const destacadas = estacionesSeoul.filter(e =>
    ['seoul-gangnam', 'seoul-myeongdong', 'seoul-gyeongbokgung', 'seoul-hongik-university', 'seoul-gwanghwamun', 'seoul-city-hall'].includes(e.slug)
  );

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <section style={{ background: 'linear-gradient(135deg, #00A84D 0%, #006b30 100%)', color: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.85)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>South Korea · Seoul Metropolitan Subway</p>
          <h1 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 900, margin: '0 0 16px 0', lineHeight: 1.1 }}>Seoul Metro</h1>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', margin: '0 0 24px 0', opacity: 0.95, fontWeight: 500, maxWidth: 600 }}>9 lines · 300+ stations — K-pop, palaces, and street food at every stop</p>
          <SearchBar />
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--surface)', padding: '40px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 24 }}>
          {[{ val: '9', label: 'Lines' }, { val: '300+', label: 'Stations' }, { val: '₩1,400', label: 'Base Fare' }, { val: '24h Fri-Sat', label: 'Weekend hours' }].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 900, margin: '0 0 6px 0', color: '#00A84D' }}>{s.val}</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '48px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', marginBottom: '1.5rem' }}>Metro Lines</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1rem' }}>
          {lineasSeoul.map(linea => (
            <Link key={linea.id} href={`/seoul/line/${linea.id}/`} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem', borderLeft: `4px solid ${linea.color}` }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: linea.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '0.75rem', flexShrink: 0 }}>{linea.id}</div>
                <div>
                  <p style={{ fontWeight: 700, fontSize: '0.9rem', margin: 0 }}>{linea.colorNombre}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '2px 0 0' }}>{linea.total} stations</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ padding: '48px 24px', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid var(--border)' }}>
        <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', marginBottom: '1.5rem' }}>Key Stations</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '1rem' }}>
          {destacadas.map(e => {
            const firstLine = Array.isArray(e.linea) ? e.linea[0] : e.linea;
            const lineObj = lineasSeoul.find(l => l.id === firstLine);
            const color = lineObj ? lineObj.color : '#00A84D';
            return (
              <Link key={e.slug} href={`/seoul/station/${e.slug}/`} style={{ textDecoration: 'none' }}>
                <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem', borderTop: `3px solid ${color}` }}>
                  <p style={{ fontWeight: 700, marginBottom: '0.25rem', margin: '0 0 4px' }}>{e.nombre}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0 0 6px' }}>{Array.isArray(e.linea) ? e.linea.join(', ') : e.linea}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.4 }}>{e.intro}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <AdBannerLazy />
    </main>
  );
}
