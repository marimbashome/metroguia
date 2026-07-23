import { estacionesBerlin } from '@/data/berlin/estaciones';
import { lineasBerlin } from '@/data/berlin/lineas-detalle';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';

export const metadata = {
  title: 'Berlin U-Bahn — Underground Guide | MetroGuia',
  description: 'Complete guide to the Berlin U-Bahn: 9 lines, 175 stations. Alexanderplatz, Potsdamer Platz, Brandenburg Gate, East Side Gallery.',
  keywords: 'Berlin U-Bahn, Berlin underground, Berlin metro, U-Bahn guide, Berlin transport',
  openGraph: {
    title: 'Berlin U-Bahn — Complete Guide',
    description: 'Berlin U-Bahn: 9 lines, 175 stations. Tourist guide to Berlin underground.',
    url: 'https://metroguia.mx/berlin/',
    type: 'website',
  },
  alternates: { canonical: 'https://metroguia.mx/berlin/' },
};

export default function BerlinPage() {
  const estacionesDestacadas = estacionesBerlin.filter(e =>
    ['berlin-alexanderplatz', 'berlin-potsdamer-platz', 'berlin-brandenburger-tor', 'berlin-zoologischer-garten', 'berlin-hauptbahnhof', 'berlin-warschauer-strasse', 'berlin-unter-den-linden'].includes(e.slug)
  );

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <section style={{ background: 'linear-gradient(135deg, var(--surface) 0%, rgba(223,32,32,0.06) 100%)', padding: '5rem 1.5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>🇩🇪 Berlin U-Bahn · Germany</p>
          <h1 style={{ fontSize: 'clamp(1.75rem,5vw,2.75rem)', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.2 }}>Berlin U-Bahn</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>9 Linien · 175 Stationen · 155 km — The city that reinvented itself</p>
          <SearchBar />
        </div>
      </section>

      <section style={{ padding: '3rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontWeight: 700, marginBottom: '1.5rem', fontSize: '1.25rem' }}>U-Bahn Lines</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: '1rem' }}>
          {lineasBerlin.map(linea => (
            <Link key={linea.id} href={`/berlin/line/${linea.id}/`} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: 40, height: 40, borderRadius: 8, background: linea.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: '0.85rem', flexShrink: 0 }}>
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
        <h2 style={{ fontWeight: 700, marginBottom: '1.5rem', fontSize: '1.25rem' }}>Key Stations</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '1rem' }}>
          {estacionesDestacadas.map(e => {
            const lineaArr = Array.isArray(e.linea) ? e.linea : [e.linea];
            const linea = lineasBerlin.find(l => l.id === lineaArr[0]);
            return (
              <Link key={e.slug} href={`/berlin/station/${e.slug}/`} style={{ textDecoration: 'none' }}>
                <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem', borderLeft: `3px solid ${linea?.color || 'var(--primary)'}` }}>
                  <p style={{ fontWeight: 600, marginBottom: '0.25rem', color: 'var(--text)' }}>{e.nombre}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>{lineaArr.join(' / ')}</p>
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
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Mon–Fri: ~4am–1am<br />Fri–Sat nights: 24h service<br />Weekend nights: 24h on main lines</p>
          </div>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem' }}>
            <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>💶 Fares</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Single AB: €3.50<br />Day ticket: €9.20<br />7-day ticket: €36.00</p>
          </div>
          <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem' }}>
            <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>✈️ Airports</p>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>BER: S9/S45 ~35 min<br />Change at Ostbahnhof<br />No U-Bahn to airport</p>
          </div>
        </div>
      </section>
      <AdBannerLazy />
    </main>
  );
}
