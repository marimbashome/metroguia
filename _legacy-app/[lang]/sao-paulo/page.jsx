import { lineasSaoPaulo } from '@/data/sao-paulo/lineas-detalle';
import { estacionesSaoPaulo } from '@/data/sao-paulo/estaciones';
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
    title: 'São Paulo Metro Guide — Lines, Stations & Map | MetroGuia',
    description: 'Complete guide to São Paulo Metrô: 5 lines, 68 stations. Liberdade, Paulista, MASP, Vila Madalena. Latin America\'s largest city metro network.',
    path: '/sao-paulo/',
    keywords: ['São Paulo Metro', 'São Paulo Metrô', 'Brazil subway', 'Paulista', 'Vila Madalena transit'],
  });
}

export default function SaoPauloPageLang({ params }) {
  const lang = params.lang;
  const destacadas = estacionesSaoPaulo.filter(e => ['sp-se-l1','sp-liberdade-l1','sp-trianon-masp-l1','sp-luz-l4'].includes(e.slug));

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <section style={{ background: 'linear-gradient(135deg, #0052A5 0%, #007E5E 100%)', color: '#fff', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, opacity: 0.85, margin: '0 0 12px 0' }}>🇧🇷 São Paulo · Brazil</p>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 900, margin: '0 0 12px 0' }}>São Paulo Metrô Guide</h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.95, margin: '0 0 8px 0' }}>5 Lines · 68 Stations · South America's largest city</p>
          <p style={{ fontSize: '0.95rem', opacity: 0.8, margin: '0 0 32px 0', maxWidth: 580, marginLeft: 'auto', marginRight: 'auto' }}>Navigate São Paulo's metro with our complete guide covering all lines, stations, and the city's best neighborhoods.</p>
          <SearchBar ciudad="sao-paulo" />
        </div>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0 0 24px 0' }}>Metro Lines</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 16 }}>
          {lineasSaoPaulo.map(l => (
            <Link key={l.id} href={`/sao-paulo/line/${l.id}/`} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'var(--surface)', border: `2px solid ${l.color}`, borderRadius: 'var(--radius)', padding: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <span style={{ width: 40, height: 40, borderRadius: '50%', background: l.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900 }}>{l.id}</span>
                  <div>
                    <p style={{ fontWeight: 700, margin: 0, color: 'var(--text)' }}>{l.colorNombre}</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', margin: 0 }}>{l.total} stations</p>
                  </div>
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
            <Link key={e.slug} href={`/sao-paulo/station/${e.slug}/`} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: 16 }}>
                <p style={{ fontWeight: 700, margin: '0 0 4px 0' }}>{e.nombre}</p>
                <p style={{ fontSize: '0.78rem', color: '#0052A5', fontWeight: 600, margin: '0 0 8px 0' }}>{Array.isArray(e.linea) ? e.linea.join(', ') : e.linea}</p>
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
