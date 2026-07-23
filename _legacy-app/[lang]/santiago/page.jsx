import { lineasSantiago } from '@/data/santiago/lineas-detalle';
import { estacionesSantiago } from '@/data/santiago/estaciones';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';
import { LANGUAGES, buildMetadata } from '@/lib/i18n';

export function generateStaticParams() {
  return LANGUAGES.filter(l => l !== 'es').map(lang => ({ lang }));
}

export async function generateMetadata({ params }) {
  return buildMetadata({
    lang: params.lang,
    title: 'Santiago Metro Guide — Lines, Stations & Map | MetroGuia',
    description: 'Complete guide to Santiago de Chile Metro: 7 lines, 136 stations. Baquedano, Providencia, La Moneda. The most modern metro in Latin America.',
    path: '/santiago/',
    keywords: ['Santiago Metro', 'Santiago Chile subway', 'Metro Chile', 'Baquedano station', 'Santiago transit guide'],
  });
}

export default function SantiagoPageLang({ params }) {
  const lang = params.lang;
  const destacadas = estacionesSantiago.filter(e => ['stgo-baquedano-l1','stgo-la-moneda-l1','stgo-los-leones-l1','stgo-parque-ohiggins-l2'].includes(e.slug));

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <section style={{ background: 'linear-gradient(135deg, #EF3D33 0%, #1F5BA6 100%)', color: '#fff', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, opacity: 0.85, margin: '0 0 12px 0' }}>🇨🇱 Santiago · Chile</p>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 900, margin: '0 0 12px 0' }}>Santiago Metro Guide</h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.95, margin: '0 0 8px 0' }}>7 Lines · 136 Stations · Latin America's most modern metro</p>
          <p style={{ fontSize: '0.95rem', opacity: 0.8, margin: '0 0 32px 0', maxWidth: 580, marginLeft: 'auto', marginRight: 'auto' }}>Navigate Santiago with our complete metro guide covering all lines, stations, neighborhoods, and local tips.</p>
          <SearchBar ciudad="santiago" />
        </div>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0 0 24px 0' }}>Metro Lines</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 16 }}>
          {lineasSantiago.map(l => (
            <Link key={l.id} href={`/santiago/line/${l.id}/`} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'var(--surface)', border: `2px solid ${l.color}`, borderRadius: 'var(--radius)', padding: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <span style={{ width: 40, height: 40, borderRadius: '50%', background: l.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900 }}>{l.id}</span>
                  <div><p style={{ fontWeight: 700, margin: 0 }}>{l.colorNombre}</p><p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', margin: 0 }}>{l.total} stations</p></div>
                </div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>{l.inicio} → {l.fin}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px', borderTop: '1px solid var(--border)' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0 0 24px 0' }}>Key Stations</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 16 }}>
          {destacadas.map(e => (
            <Link key={e.slug} href={`/santiago/station/${e.slug}/`} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: 16 }}>
                <p style={{ fontWeight: 700, margin: '0 0 4px 0' }}>{e.nombre}</p>
                <p style={{ fontSize: '0.78rem', color: '#EF3D33', fontWeight: 600, margin: '0 0 8px 0' }}>Line {Array.isArray(e.linea)?e.linea.join(', '):e.linea}</p>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>{e.intro}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <AdBannerLazy slot="4434764790" />
    </main>
  );
}
