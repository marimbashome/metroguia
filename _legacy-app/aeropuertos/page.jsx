import { aeropuertos } from '@/data/aeropuertos'
import AdBannerLazy from '@/app/components/AdBannerLazy';

export const metadata = {
  title: 'Aeropuertos de México — Cómo llegar al centro en transporte público | MetroGuia',
  description: 'Guía de los 22+ aeropuertos principales de México. Cómo llegar al centro de cada ciudad en metro, bus, taxi y Uber. Precios y tiempos actualizados 2026.',
  alternates: { canonical: 'https://metroguia.mx/aeropuertos/' },
}

export default function AeropuertosPage() {
  // Group by region
  const regiones = { centro: [], norte: [], occidente: [], sureste: [], bajio: [], pacifico: [] }
  aeropuertos.forEach(a => { if (regiones[a.region]) regiones[a.region].push(a) })
  
  // Region labels
  const regionLabels = {
    centro: 'Centro',
    bajio: 'Bajío',
    occidente: 'Occidente',
    norte: 'Norte',
    sureste: 'Sureste',
    pacifico: 'Pacífico',
  }
  const regionColors = {
    centro: '#F5A623',
    bajio: '#10B981',
    occidente: '#06B6D4',
    norte: '#EC4899',
    sureste: '#8B5CF6',
    pacifico: '#0EA5E9',
  }

  return (
    <div>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Aeropuertos de México',
        description: 'Lista de los principales aeropuertos de México con guía de transporte',
        numberOfItems: aeropuertos.length,
        itemListElement: aeropuertos.map((a, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'Airport',
            name: a.nombre,
            iataCode: a.iata,
            url: `https://metroguia.mx/aeropuertos/${a.slug}/`,
          },
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
            ✈️ {aeropuertos.length} aeropuertos
          </div>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            Aeropuertos de México
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.6 }}>
            Cómo llegar del aeropuerto al centro de cada ciudad en transporte público, taxi y Uber
          </p>
        </div>
      </section>

      {/* Quick stats */}
      <section style={{ padding: '2rem 1rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1.5rem', textAlign: 'center' }}>
          {[
            { val: aeropuertos.length + '+', label: 'Aeropuertos' },
            { val: '6', label: 'Regiones' },
            { val: aeropuertos.filter(a => a.conexiones.length > 0).length, label: 'Con conexión metro' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>{s.val}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* Regions */}
      {Object.entries(regiones).filter(([, airports]) => airports.length > 0).map(([region, airports]) => (
        <section key={region} style={{ padding: '2.5rem 1rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '10px', height: '10px', borderRadius: '50%',
                backgroundColor: regionColors[region],
              }} />
              <h2 style={{ fontSize: '1.25rem', margin: 0 }}>{regionLabels[region]}</h2>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>{airports.length} aeropuertos</span>
            </div>
            <div className="grid-3">
              {airports.map(a => (
                <a key={a.slug} href={`/aeropuertos/${a.slug}/`} className="card" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{
                      fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.5rem',
                      borderRadius: 'var(--radius-sm)', backgroundColor: `${regionColors[region]}15`,
                      border: `1px solid ${regionColors[region]}30`, color: regionColors[region],
                    }}>{a.iata}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{a.distanciaCentro}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.125rem' }}>{a.ciudad}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{a.nombre}</div>
                  </div>
                  {a.conexiones.length > 0 && (
                    <div style={{
                      fontSize: '0.7rem', padding: '0.25rem 0.5rem', borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--primary-glow)', border: '1px solid var(--primary-border)',
                      color: 'var(--primary)', fontWeight: 600,
                    }}>
                      🚇 Conexión {a.conexiones[0].tipo}
                    </div>
                  )}
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', lineHeight: 1.5 }}>
                    {a.comoLlegar.transporte.length > 0 
                      ? a.comoLlegar.transporte[0].detalle.slice(0, 60) + '...'
                      : `Taxi ${a.comoLlegar.taxi.estimado}`
                    }
                  </div>
                  <span style={{ color: regionColors[region], fontWeight: 600, fontSize: '0.8rem', marginTop: 'auto' }}>
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
