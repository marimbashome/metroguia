import { estacionesDubai } from '@/data/dubai/estaciones';
import { lineasDubai } from '@/data/dubai/lineas-detalle';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';

export const metadata = {
  title: 'Dubai Metro Guide — 2 Lines & 53 Stations | MetroGuia',
  description: 'Complete guide to Dubai Metro. Burj Khalifa, Mall of the Emirates, Gold Souk, Airport. Navigate Dubai with Red and Green Lines.',
  openGraph: { title: 'Dubai Metro Guide', url: 'https://metroguia.mx/dubai/' },
  alternates: { canonical: 'https://metroguia.mx/dubai/' },
};

export default function DubaiPage() {
  const destacadas = estacionesDubai.filter(e =>
    ['dubai-burj-khalifa-dubai-mall', 'dubai-mall-of-the-emirates', 'dubai-union', 'dubai-burjuman', 'dubai-al-fahidi', 'dubai-airport-terminal-3'].includes(e.slug)
  );
  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <section style={{ background: 'linear-gradient(135deg, #EF3D33 0%, #9a1a16 100%)', color: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.85)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>United Arab Emirates · Dubai Metro</p>
          <h1 style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', fontWeight: 900, margin: '0 0 16px 0', lineHeight: 1.1 }}>Dubai Metro</h1>
          <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.4rem)', margin: '0 0 24px 0', opacity: 0.95, fontWeight: 500, maxWidth: 600 }}>2 lines · 53 stations — World's longest driverless metro network</p>
          <SearchBar />
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--surface)', padding: '40px 24px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: 24 }}>
          {[{ val: '2', label: 'Lines' }, { val: '53', label: 'Stations' }, { val: 'AED 2~', label: 'Base Fare' }, { val: '100%', label: 'Driverless' }].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: 900, margin: '0 0 6px 0', color: '#EF3D33' }}>{s.val}</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '48px 24px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontWeight: 800, fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', marginBottom: '1.5rem' }}>Metro Lines</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {lineasDubai.map(linea => (
            <Link key={linea.id} href={`/dubai/line/${linea.id}/`} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1.25rem', borderLeft: `4px solid ${linea.color}` }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: 8 }}>
                  <div style={{ width: 40, height: 40, borderRadius: '50%', background: linea.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '0.75rem', flexShrink: 0 }}>{linea.id}</div>
                  <div><p style={{ fontWeight: 700, fontSize: '0.95rem', margin: 0 }}>{linea.colorNombre}</p><p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '2px 0 0' }}>{linea.total} stations · {linea.inicio} → {linea.fin}</p></div>
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
            const lineObj = lineasDubai.find(l => l.id === firstLine);
            const color = lineObj ? lineObj.color : '#EF3D33';
            return (
              <Link key={e.slug} href={`/dubai/station/${e.slug}/`} style={{ textDecoration: 'none' }}>
                <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem', borderTop: `3px solid ${color}` }}>
                  <p style={{ fontWeight: 700, margin: '0 0 4px' }}>{e.nombre}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0 0 6px' }}>{Array.isArray(e.linea) ? e.linea.join(' + ') : e.linea} Line</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.4 }}>{e.intro}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section style={{ padding: '48px 24px', maxWidth: '1200px', margin: '0 auto', borderTop: '1px solid var(--border)' }}>
        <h2 style={{ fontWeight: 800, fontSize: '1.3rem', marginBottom: 16 }}>Dubai Metro Tips</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {[
            { icon: '🎫', title: 'Nol Card', body: 'The Nol card works on Metro, bus, tram, and water bus. Buy at any station. 4 types: Silver, Gold, Blue (bank-card style), and Red (single trip).' },
            { icon: '👑', title: 'Gold Class', body: 'First and last cars of each train are Gold Class (double the fare) and Women & Children Only car. Fines for violations are steep — check before boarding.' },
            { icon: '👗', title: 'Dress Code', body: 'Dubai Metro is air-conditioned to around 20°C. Dress modestly — shorts and sleeveless tops are technically discouraged though rarely enforced on tourists.' },
            { icon: '🕌', title: 'Friday Hours', body: 'Metro opens at 10 AM on Fridays (prayer day) rather than 5 AM. Plan accordingly if traveling on Friday mornings.' },
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
