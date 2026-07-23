import { estacionesSaoPaulo } from '@/data/sao-paulo/estaciones';
import { lineasSaoPaulo } from '@/data/sao-paulo/lineas-detalle';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';

export const metadata = {
  title: 'Metrô São Paulo — Guia Completo Linhas e Estações | MetroGuia',
  description: 'Guia completo do Metrô de São Paulo: 5 linhas, 68 estações. Liberdade, Paulista, MASP, Vila Madalena. Rotas, tarifas e horários 2025.',
  openGraph: {
    title: 'Metrô São Paulo — Guia de Metro',
    url: 'https://metroguia.mx/sao-paulo/',
  },
  alternates: { canonical: 'https://metroguia.mx/sao-paulo/' },
};

export default function SaoPauloPage() {
  const destacadas = estacionesSaoPaulo.filter(e =>
    ['sp-se-l1', 'sp-liberdade-l1', 'sp-trianon-masp-l1', 'sp-vila-madalena-l2', 'sp-luz-l4', 'sp-paulista-l4'].includes(e.slug)
  );

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #0052A5 0%, #007E5E 100%)', color: '#fff', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, opacity: 0.85, margin: '0 0 12px 0' }}>🇧🇷 Metrô · São Paulo</p>
          <h1 style={{ fontSize: 'clamp(2rem,5vw,3.5rem)', fontWeight: 900, margin: '0 0 12px 0' }}>Metrô de São Paulo</h1>
          <p style={{ fontSize: '1.15rem', opacity: 0.95, margin: '0 0 8px 0' }}>5 linhas · 68 estações · A maior metrópole da América do Sul</p>
          <p style={{ fontSize: '1rem', opacity: 0.85, maxWidth: 600, margin: '0 0 32px 0' }}>
            Navegue pelo Metrô paulistano com nossa guia completa: estações, linhas e dicas de cada bairro.
          </p>
          <SearchBar ciudad="sao-paulo" />
        </div>
      </section>

      {/* STATS */}
      <section style={{ backgroundColor: 'var(--surface)', padding: '48px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: 24 }}>
          {[
            { val: '5', label: 'Linhas' },
            { val: '68', label: 'Estações' },
            { val: '1974', label: 'Inauguração' },
            { val: 'R$ 5,00', label: 'Tarifa' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 'clamp(1.75rem,4vw,2.5rem)', fontWeight: 900, color: '#0052A5', margin: '0 0 6px 0' }}>{s.val}</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontWeight: 600, textTransform: 'uppercase', margin: 0 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* LINES */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0 0 32px 0' }}>Linhas do Metrô</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: 20 }}>
          {lineasSaoPaulo.map(l => (
            <Link key={l.id} href={`/sao-paulo/line/${l.id}/`} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'var(--surface)', border: `2px solid ${l.color}`, borderRadius: 'var(--radius)', padding: 24 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16 }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: l.color, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 900 }}>{l.id}</div>
                  <div>
                    <p style={{ fontWeight: 700, margin: '0 0 4px 0', color: 'var(--text)' }}>{l.colorNombre}</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', margin: 0 }}>{l.total} estações</p>
                  </div>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>{l.inicio} → {l.fin}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <AdBannerLazy slot="4434764790" />

      {/* FEATURED STATIONS */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px', borderTop: '1px solid var(--border)' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, margin: '0 0 32px 0' }}>Estações Principais</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: 16 }}>
          {destacadas.map(e => (
            <Link key={e.slug} href={`/sao-paulo/station/${e.slug}/`} style={{ textDecoration: 'none' }}>
              <div style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius)', padding: 20 }}>
                <p style={{ fontWeight: 700, margin: '0 0 4px 0', color: 'var(--text)' }}>{e.nombre}</p>
                <p style={{ fontSize: '0.78rem', color: '#0052A5', fontWeight: 600, margin: '0 0 8px 0' }}>
                  {Array.isArray(e.linea) ? e.linea.join(', ') : e.linea}
                </p>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>{e.intro}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* INFO */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ background: 'var(--surface)', borderRadius: 'var(--radius)', padding: 40 }}>
          <h2 style={{ fontWeight: 800, fontSize: '1.4rem', margin: '0 0 24px 0' }}>Tarifas e Horários</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 24 }}>
            {[
              { label: 'Tarifa única', val: 'R$ 5,00' },
              { label: 'Bilhete Único', val: 'Recomendado' },
              { label: 'Horário diário', val: '04:40 – 00:00' },
              { label: 'Domingos', val: '04:40 – 00:00' },
            ].map(i => (
              <div key={i.label}>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontWeight: 600, margin: '0 0 6px 0' }}>{i.label}</p>
                <p style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0052A5', margin: 0 }}>{i.val}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AdBannerLazyInArticle slot="1082410395" />
    </main>
  );
}
