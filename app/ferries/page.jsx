import { ferrys } from '@/data/ferrys'

export const metadata = {
  title: 'Ferries y Transbordadores de México — Rutas marítimas, horarios y precios | MetroGuia',
  description: 'Guía de los 6+ ferries y transbordadores principales de México. Rutas en el Caribe, Baja California y costas del Pacífico. Horarios, precios, operadores y documentación 2026.',
  alternates: { canonical: 'https://metroguia.mx/ferries/' },
}

export default function FerriesPage() {
  // Group by region
  const regiones = { sureste: [], noroeste: [] }
  ferrys.forEach(f => { if (regiones[f.ruta.region]) regiones[f.ruta.region].push(f) })
  
  // Region labels and colors
  const regionLabels = {
    sureste: 'Sureste / Caribe',
    noroeste: 'Noroeste / Pacífico',
  }
  const regionColors = {
    sureste: '#8B5CF6',
    noroeste: '#0EA5E9',
  }

  // Count international routes
  const internationalCount = ferrys.filter(f => f.ruta.pais_destino).length

  return (
    <div>
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Ferries y Transbordadores de México',
        description: 'Lista de las principales rutas marítimas y ferries de México',
        numberOfItems: ferrys.length,
        itemListElement: ferrys.map((f, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          item: {
            '@type': 'BoatTrip',
            name: f.nombre,
            departureLocation: f.ruta.origen,
            arrivalLocation: f.ruta.destino,
            url: `https://metroguia.mx/ferries/${f.slug}/`,
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
            ⛴️ {ferrys.length} ferries
          </div>
          <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
            Ferries y Transbordadores de México
          </h1>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.6 }}>
            Rutas marítimas, horarios, precios y operadores para viajes entre islas y costas de México
          </p>
        </div>
      </section>

      {/* Quick stats */}
      <section style={{ padding: '2rem 1rem', borderBottom: '1px solid var(--border)', backgroundColor: 'var(--surface)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '1.5rem', textAlign: 'center' }}>
          {[
            { val: ferrys.length + '+', label: 'Rutas marítimas' },
            { val: '2', label: 'Regiones' },
            { val: internationalCount, label: 'Rutas internacionales' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>{s.val}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Regions */}
      {Object.entries(regiones).filter(([, ferries]) => ferries.length > 0).map(([region, ferries]) => (
        <section key={region} style={{ padding: '2.5rem 1rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{
                width: '10px', height: '10px', borderRadius: '50%',
                backgroundColor: regionColors[region],
              }} />
              <h2 style={{ fontSize: '1.25rem', margin: 0 }}>{regionLabels[region]}</h2>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>{ferries.length} {ferries.length === 1 ? 'ruta' : 'rutas'}</span>
            </div>
            <div className="grid-3">
              {ferries.map(f => (
                <a key={f.slug} href={`/ferries/${f.slug}/`} className="card" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{
                      fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.5rem',
                      borderRadius: 'var(--radius-sm)', backgroundColor: `${regionColors[region]}15`,
                      border: `1px solid ${regionColors[region]}30`, color: regionColors[region],
                    }}>{region === 'sureste' ? 'Caribe' : 'Pacífico'}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>{f.distancia}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.125rem' }}>{f.ruta.origen} → {f.ruta.destino}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.4 }}>{f.nombre}</div>
                  </div>
                  {f.operadores.length > 0 && (
                    <div style={{
                      fontSize: '0.7rem', padding: '0.25rem 0.5rem', borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--primary-glow)', border: '1px solid var(--primary-border)',
                      color: 'var(--primary)', fontWeight: 600,
                    }}>
                      💵 {f.operadores[0].precio?.adulto || 'Consultar'}
                    </div>
                  )}
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', lineHeight: 1.5 }}>
                    {f.operadores[0]?.duracion ? `⏱️ ${f.operadores[0].duracion}` : 'Horarios disponibles'}
                  </div>
                  <span style={{ color: regionColors[region], fontWeight: 600, fontSize: '0.8rem', marginTop: 'auto' }}>
                    Ver detalles →
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
