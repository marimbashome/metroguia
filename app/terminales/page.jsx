import { terminales } from '@/data/terminales'

export const metadata = {
  title: 'Terminales de Autobuses de México — Cómo llegar en transporte público | MetroGuia',
  description: 'Guía de las principales terminales de autobuses de México. TAPO, Central del Norte, Observatorio, Taxqueña y más. Conexiones de metro, destinos y líneas de autobús.',
  alternates: { canonical: 'https://metroguia.mx/terminales/' },
}

export default function TerminalesPage() {
  // Group by city
  const ciudades = {}
  terminales.forEach(t => {
    if (!ciudades[t.ciudad]) ciudades[t.ciudad] = []
    ciudades[t.ciudad].push(t)
  })

  return (
    <div>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Terminales de Autobuses de México',
        numberOfItems: terminales.length,
        itemListElement: terminales.map((t, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: { '@type': 'BusStation', name: t.nombre, url: `https://metroguia.mx/terminales/${t.slug}/` },
        })),
      })}} />

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, var(--surface) 100%)',
        padding: '3rem 1rem 2.5rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            padding: '0.375rem 1rem', borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--primary-glow)', border: '1px solid var(--primary-border)',
            fontSize: '0.8rem', fontWeight: 600, color: 'var(--primary)', marginBottom: '1.5rem',
          }}>
            🚌 {terminales.length} terminales
          </div>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            Terminales de Autobuses
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.6 }}>
            Cómo llegar a las principales terminales en metro y transporte público. Destinos, líneas de autobús y conexiones.
          </p>
        </div>
      </section>

      {/* Quick stats */}
      <section style={{ padding: '2rem 1rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1.5rem', textAlign: 'center' }}>
          {[
            { val: terminales.length, label: 'Terminales' },
            { val: Object.keys(ciudades).length, label: 'Ciudades' },
            { val: terminales.filter(t => t.conexionMetro).length, label: 'Con conexión metro' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>{s.val}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Group by city */}
      {Object.entries(ciudades).map(([ciudad, terms]) => (
        <section key={ciudad} style={{ padding: '2.5rem 1rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>{ciudad}</h2>
            <div className="grid-3">
              {terms.map(t => (
                <a key={t.slug} href={`/terminales/${t.slug}/`} className="card" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)' }}>{t.nombreCorto || t.nombre}</div>
                  {t.conexionMetro && (
                    <div style={{
                      fontSize: '0.7rem', padding: '0.25rem 0.5rem', borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--primary-glow)', border: '1px solid var(--primary-border)',
                      color: 'var(--primary)', fontWeight: 600, alignSelf: 'flex-start',
                    }}>
                      🚇 Metro {t.conexionMetro.nombre}
                    </div>
                  )}
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                    {t.destinos.slice(0, 4).join(', ')}{t.destinos.length > 4 ? '...' : ''}
                  </div>
                  <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
                    {t.lineasBus.slice(0, 3).map(l => (
                      <span key={l} style={{
                        fontSize: '0.65rem', padding: '0.125rem 0.375rem', borderRadius: 'var(--radius-sm)',
                        backgroundColor: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text-dim)',
                      }}>{l}</span>
                    ))}
                  </div>
                  <span style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.8rem', marginTop: 'auto' }}>
                    Ver guía →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}