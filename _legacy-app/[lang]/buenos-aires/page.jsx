import { estacionesBuenosAires } from '@/data/buenos-aires/estaciones';
import { lineasBuenosAires } from '@/data/buenos-aires/lineas-detalle';
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
    title: 'Buenos Aires Subte Guide — Lines, Stations & Map | MetroGuia',
    description: 'Complete guide to Buenos Aires Subte: 6 lines, 90 stations. Oldest metro network in Latin America (1913). Plaza de Mayo, Palermo, Recoleta.',
    path: '/buenos-aires/',
    keywords: ['Buenos Aires Subte', 'Buenos Aires metro', 'Argentina subway', 'Subte map', 'Buenos Aires transit'],
  });
}

export default function BuenosAiresPageLang({ params }) {
  const lang = params.lang;
  const destacadas = estacionesBuenosAires.filter(e =>
    ['baires-catedral-d', 'baires-9-de-julio-d', 'baires-retiro-c', 'baires-plaza-italia-b'].includes(e.slug)
  );

  const breadcrumb = {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Buenos Aires Subte', item: `https://metroguia.mx/${lang}/buenos-aires/` },
    ],
  };

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section style={{ background: 'linear-gradient(135deg, #1E5FA6 0%, #7AC5E5 100%)', color: '#fff', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, opacity: 0.85, margin: '0 0 12px 0' }}>🇦🇷 Buenos Aires · Argentina</p>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3rem)', fontWeight: 900, margin: '0 0 16px 0' }}>Buenos Aires Subte</h1>
          <p style={{ fontSize: '1.1rem', opacity: 0.95, margin: '0 0 8px 0' }}>6 Lines · 90 Stations · Latin America's oldest metro (1913)</p>
          <p style={{ fontSize: '0.95rem', opacity: 0.8, margin: '0 0 32px 0', maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
            Navigate Buenos Aires with our complete Subte guide: station details, line maps, and local tips for every neighborhood.
          </p>
          <SearchBar ciudad="buenos-aires" />
        </div>
      </section>

      <section style={{ backgroundColor: 'var(--surface)', padding: '40px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 20 }}>
          {[
            { val: '6', label: 'Lines' },
            { val: '~90', label: 'Stations' },
            { val: '1913', label: 'Since' },
            { val: 'ARS $270', label: 'Base Fare' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 'clamp(1.5rem,3vw,2rem)', fontWeight: 900, color: '#1E5FA6', margin: '0 0 4px 0' }}>{s.val}</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontWeight: 600, textTransform: 'uppercase', margin: 0 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0 0 24px 0' }}>Subte Lines</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: 16 }}>
          {lineasBuenosAires.map(l => (
            <Link key={l.id} href={`/buenos-aires/line/${l.id}/`} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'var(--surface)', border: `2px solid ${l.color}`, borderRadius: 'var(--radius)', padding: 20, cursor: 'pointer' }}>
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
            <Link key={e.slug} href={`/buenos-aires/station/${e.slug}/`} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: 16 }}>
                <p style={{ fontWeight: 700, margin: '0 0 4px 0', color: 'var(--text)' }}>{e.nombre}</p>
                <p style={{ fontSize: '0.78rem', color: '#1E5FA6', fontWeight: 600, margin: '0 0 8px 0' }}>Line {Array.isArray(e.linea) ? e.linea.join(', ') : e.linea}</p>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>{e.intro}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <AdBannerLazy slot="4434764790" />

      <section style={{ backgroundColor: 'var(--surface)', padding: '48px 24px', textAlign: 'center' }}>
        <Link href="/buenos-aires/">
          <span style={{ display: 'inline-block', padding: '14px 32px', background: '#1E5FA6', color: '#fff', borderRadius: 'var(--radius)', fontWeight: 700, cursor: 'pointer', textDecoration: 'none' }}>
            Ver guía en español →
          </span>
        </Link>
      </section>
    </main>
  );
}
