import { estacionesSydney } from '@/data/sydney/estaciones';
import { lineasSydney } from '@/data/sydney/lineas-detalle';
import { LANGUAGES, buildMetadata, getDefaultLangForCity } from '@/lib/i18n';
import Link from 'next/link';
import SearchBar from '@/app/components/SearchBar';

export function generateStaticParams() {
  const defaultLang = getDefaultLangForCity('sydney') || 'en';
  return LANGUAGES.filter(l => l !== defaultLang).map(lang => ({ lang }));
}

export async function generateMetadata({ params }) {
  return buildMetadata({
    lang: params.lang,
    title: 'Sydney Metro Guide | MetroGuia',
    description: 'Australia · 2 lines · 31 stations. Complete metro guide for tourists and commuters.',
    path: '/sydney/',
    keywords: ['sydney metro', 'sydney transit', 'sydney subway'],
  });
}

export default function SydneyPageLang({ params }) {
  const lang = params.lang;
  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <section style={{ background: 'linear-gradient(135deg, #009B77 0%, #009B77cc 100%)', color: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.85)', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.75rem' }}>🇦🇺 Sydney Metro · Australia</p>
          <h1 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)', fontWeight: 800, marginBottom: '1rem' }}>Sydney Metro</h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)', marginBottom: '2rem' }}>2 lines · 31 stations</p>
          <SearchBar />
        </div>
      </section>
      <section style={{ padding: '3rem 1.5rem', maxWidth: 900, margin: '0 auto' }}>
        <h2 style={{ fontWeight: 700, marginBottom: '1.5rem' }}>Metro Lines</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
          {lineasSydney.map(linea => (
            <Link key={linea.id} href={`/${lang}/sydney/line/${linea.id}/`} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: '1rem', display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: linea.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 700, fontSize: '0.75rem', flexShrink: 0 }}>{linea.id}</div>
                <div><p style={{ fontWeight: 600, fontSize: '0.9rem', margin: 0 }}>{linea.colorNombre}</p><p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '2px 0 0' }}>{linea.total} stations</p></div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section style={{ padding: '2rem 1.5rem', maxWidth: 900, margin: '0 auto', borderTop: '1px solid var(--border)' }}>
        <Link href="/sydney/" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>View in English →</Link>
      </section>
    </main>
  );
}
