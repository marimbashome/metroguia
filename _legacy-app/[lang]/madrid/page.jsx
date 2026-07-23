import { estacionesMadrid } from '@/data/madrid/estaciones';
import { lineasMadrid } from '@/data/madrid/lineas-detalle';
import Link from 'next/link';
import { LANGUAGES, buildMetadata, getDefaultLangForCity } from '@/lib/i18n';
import SearchBar from '@/app/components/SearchBar';
import AdBannerLazy from '@/app/components/AdBannerLazy';

export function generateStaticParams() {
  const defaultLang = getDefaultLangForCity('madrid');
  return LANGUAGES.filter(l => l !== defaultLang).map(lang => ({ lang }));
}

export async function generateMetadata({ params }) {
  return buildMetadata({
    lang: params.lang,
    title: 'Madrid Metro — Transport Guide | MetroGuia',
    description: 'Madrid Metro guide: 13 lines, 302 stations. Sol, Gran Vía, Atocha, Retiro, Ópera. Tourist route planner.',
    path: '/madrid/',
    keywords: ['Metro Madrid', 'Madrid transport', 'Madrid subway', 'Madrid underground', 'Madrid tube']
  });
}

export default function MadridPageLang({ params }) {
  const lang = params.lang;
  const estacionesDestacadas = estacionesMadrid.filter(e =>
    ['madrid-sol', 'madrid-gran-via', 'madrid-atocha', 'madrid-opera', 'madrid-callao', 'madrid-retiro'].includes(e.slug)
  );

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, var(--surface) 0%, rgba(0,170,220,0.08) 100%)', padding: '5rem 1.5rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>🇪🇸 Madrid Metro · Spain</p>
          <h1 style={{ fontSize: 'clamp(1.75rem,5vw,2.75rem)', fontWeight: 800, marginBottom: '1rem' }}>Madrid Metro</h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>13 lines · 302 stations · 284 km — Spain's largest metro network</p>
          <SearchBar />
        </div>
      </section>

      {/* LINES */}
      <section style={{ padding: '3rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontWeight: 700, marginBottom: '1.5rem', fontSize: '1.25rem' }}>Metro Lines</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(200px,1fr))', gap: '1rem' }}>
          {lineasMadrid.map(linea => (
            <Link key={linea.id} href={`/${lang}/madrid/line/${linea.id}/`} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: linea.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700 }}>
                  {linea.id}
                </div>
                <div>
                  <p style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text)' }}>Line {linea.id}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{linea.total} stations</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* KEY STATIONS */}
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto', borderTop: '1px solid var(--border)' }}>
        <h2 style={{ fontWeight: 700, marginBottom: '1.5rem', fontSize: '1.25rem' }}>Key Stations</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '1rem' }}>
          {estacionesDestacadas.map(e => {
            const lineaArr = Array.isArray(e.linea) ? e.linea : [e.linea];
            const linea = lineasMadrid.find(l => l.id === lineaArr[0]);
            return (
              <Link key={e.slug} href={`/${lang}/madrid/station/${e.slug}/`} style={{ textDecoration: 'none' }}>
                <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem', borderLeft: `3px solid ${linea?.color || 'var(--primary)'}` }}>
                  <p style={{ fontWeight: 600, color: 'var(--text)' }}>{e.nombre}</p>
                  <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Line {lineaArr.join(', ')}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* LANG SWITCH */}
      <section style={{ padding: '1.5rem', maxWidth: 900, margin: '0 auto', borderTop: '1px solid var(--border)' }}>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          También disponible en: <Link href="/madrid/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Español</Link>
        </p>
      </section>

      <AdBannerLazy />
    </main>
  );
}
