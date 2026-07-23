import { terminales } from '@/data/terminales'

export function generateStaticParams() {
  return terminales.map(t => ({ slug: t.slug }))
}

export function generateMetadata({ params }) {
  const terminal = terminales.find(t => t.slug === params.slug)
  if (!terminal) return { title: 'Terminal no encontrada' }
  return {
    title: terminal.seo_title,
    description: terminal.meta_description,
    openGraph: {
      title: terminal.seo_title,
      description: terminal.meta_description,
      url: `https://metroguia.mx/terminales/${terminal.slug}/`,
      siteName: 'MetroGuia', locale: 'es_MX', type: 'website',
    },
    alternates: { canonical: `https://metroguia.mx/terminales/${terminal.slug}/` },
  }
}

export default function TerminalPage({ params }) {
  const terminal = terminales.find(t => t.slug === params.slug)
  if (!terminal) return <div style={{ padding: '4rem 2rem', textAlign: 'center' }}><h1>Terminal no encontrada</h1></div>

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BusStation',
    name: terminal.nombre,
    url: `https://metroguia.mx/terminales/${terminal.slug}/`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: terminal.ciudad,
      addressRegion: terminal.estado,
      addressCountry: 'MX',
    },
    geo: { '@type': 'GeoCoordinates', latitude: terminal.lat, longitude: terminal.lng },
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '1rem 1rem 0' }}>
        <nav style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
          <a href="/" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Inicio</a>
          {' → '}
          <a href="/terminales/" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Terminales</a>
          {' → '}
          <span style={{ color: 'var(--text)' }}>{terminal.nombreCorto || terminal.nombre}</span>
        </nav>
      </div>

      {/* Hero */}
      <section style={{ padding: '2rem 1rem 2.5rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{
              fontSize: '0.85rem', fontWeight: 700, padding: '0.3rem 0.75rem',
              borderRadius: 'var(--radius-sm)', backgroundColor: 'var(--primary-glow)',
              border: '1px solid var(--primary-border)', color: 'var(--primary)',
            }}>🚌 Terminal</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{terminal.ciudad}, {terminal.estado}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
            {terminal.nombre}
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '650px' }}>
            {terminal.descripcion}
          </p>
        </div>
      </section>

      {/* Cómo llegar */}
      <section style={{ padding: '2.5rem 1rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.35rem', marginBottom: '1.5rem' }}>Cómo llegar</h2>

          {terminal.conexionMetro && (
            <a href={terminal.conexionMetro.slug ? `/estacion/${terminal.conexionMetro.slug}/` : '#'} className="card" style={{
              textDecoration: 'none', padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem',
              backgroundColor: 'var(--primary-glow)', border: '1px solid var(--primary-border)',
            }}>
              <div style={{
                width: '3rem', height: '3rem', borderRadius: 'var(--radius)',
                backgroundColor: '#fff', border: '1px solid var(--primary-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.25rem',
              }}>🚇</div>
              <div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)' }}>Metro {terminal.conexionMetro.nombre}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Línea {terminal.conexionMetro.linea} — Conexión directa</div>
              </div>
            </a>
          )}

          {terminal.comoLlegar.transporte.map((t, i) => (
            <div key={i} className="card" style={{ padding: '1rem', marginBottom: '0.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 700, fontSize: '0.9rem' }}>{t.tipo}</span>
                {t.tiempo && <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: 600 }}>{t.tiempo}</span>}
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>{t.detalle}</p>
            </div>
          ))}

          <div className="grid-3" style={{ marginTop: '1rem' }}>
            <div className="card" style={{ padding: '1rem' }}>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>🚕 Taxi</div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.25rem' }}>{terminal.comoLlegar.taxi.estimado}</div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: 0 }}>{terminal.comoLlegar.taxi.nota}</p>
            </div>
            <div className="card" style={{ padding: '1rem' }}>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.5rem' }}>📱 Uber / DiDi</div>
              <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.25rem' }}>{terminal.comoLlegar.uber.estimado}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Destinos */}
      <section style={{ padding: '2.5rem 1rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Destinos principales</h2>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {terminal.destinos.map(d => (
              <span key={d} style={{
                display: 'inline-flex', padding: '0.5rem 0.875rem', borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--surface)', border: '1px solid var(--border)',
                fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-muted)',
              }}>{d}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Líneas de autobús */}
      <section style={{ padding: '2.5rem 1rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Líneas de autobús</h2>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {terminal.lineasBus.map(l => (
              <span key={l} style={{
                display: 'inline-flex', padding: '0.375rem 0.75rem', borderRadius: 'var(--radius-sm)',
                backgroundColor: 'var(--primary-glow)', border: '1px solid var(--primary-border)',
                fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary)',
              }}>{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Other terminals */}
      <section style={{ padding: '2.5rem 1rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Otras terminales</h2>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {terminales.filter(t => t.slug !== terminal.slug).slice(0, 8).map(t => (
              <a key={t.slug} href={`/terminales/${t.slug}/`} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.5rem 0.875rem', borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--surface)', border: '1px solid var(--border)',
                textDecoration: 'none', fontSize: '0.8rem', fontWeight: 500, color: 'var(--text-muted)',
              }}>
                {t.nombreCorto || t.nombre}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}