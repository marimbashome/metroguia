import { trenSuburbanoData } from '@/data/cdmx/tren-suburbano'

export function generateMetadata() {
  return {
    title: 'Tren Suburbano CDMX — Estaciones, Horarios, Ruta al AIFA | MetroGuia',
    description: 'Guía completa del Tren Suburbano CDMX: 8 estaciones de Buenavista a Cuautitlán + ramal al AIFA. Horarios, tarifas, conexiones con Metro y cómo usar la Tarjeta de Movilidad.',
    keywords: 'Tren Suburbano, CDMX, Buenavista, AIFA, Cuautitlán, transporte, MetroGuia',
  }
}

export default function TrenSuburbanoPage() {
  const data = trenSuburbanoData
  const lineasArray = Object.values(data.lineas)

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'CDMX', item: 'https://metroguia.mx/cdmx/' },
      { '@type': 'ListItem', position: 3, name: 'Tren Suburbano', item: 'https://metroguia.mx/cdmx/tren-suburbano/' }
    ]
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, var(--surface) 0%, rgba(0, 166, 81, 0.08) 100%)',
        paddingTop: '5rem',
        paddingBottom: '4rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container">
          <p style={{
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            marginBottom: '1rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}>
            <a href="/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>MetroGuia</a>
            {' '}→{' '}
            <a href="/cdmx/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>CDMX</a>
            {' '}→ Tren Suburbano
          </p>
          <h1 style={{
            color: 'var(--text)',
            marginBottom: '0.5rem',
            background: 'linear-gradient(135deg, var(--text) 0%, #00A651 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            {data.icono} Tren Suburbano CDMX
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
            {data.descripcion}
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(0, 166, 81, 0.15)', border: '1px solid rgba(0, 166, 81, 0.3)',
              borderRadius: 'var(--radius-full)', padding: '0.625rem 1.25rem',
              color: '#00A651', fontSize: '0.875rem', fontWeight: 600,
            }}>
              <span style={{ fontSize: '1.25rem' }}>8</span> Estaciones
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'var(--surface-hover)', border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-full)', padding: '0.625rem 1.25rem',
              color: 'var(--text)', fontSize: '0.875rem', fontWeight: 600,
            }}>
              ${data.costo.min}-${data.costo.max} MXN
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'var(--surface-hover)', border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-full)', padding: '0.625rem 1.25rem',
              color: 'var(--text)', fontSize: '0.875rem', fontWeight: 600,
            }}>
              {data.horario.apertura} - {data.horario.cierre}
            </div>
          </div>
        </div>
      </section>

      {/* Alert AIFA */}
      <section style={{ padding: '2rem 1rem' }}>
        <div className="container">
          <div className="alert alert-warning" style={{ marginBottom: '0' }}>
            <div style={{ width: '1.25rem', height: '1.25rem', flexShrink: 0, marginTop: '0.125rem' }}>✈️</div>
            <div className="alert-content">
              <div className="alert-title">Conexión al AIFA (Aeropuerto Felipe Ángeles)</div>
              <div className="alert-message">
                Desde Buenavista: toma el Tren Suburbano hasta Lechería, luego transbordo al Ramal AIFA. Tiempo total: ~1 hora. Costo: ~$35 MXN.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Líneas */}
      <section style={{ padding: '2rem 1rem 4rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <h2 style={{ marginBottom: '2rem' }}>Líneas del Tren Suburbano</h2>
          <div className="grid-3">
            {lineasArray.map((linea) => (
              <a key={linea.id} href={`/cdmx/tren-suburbano/linea/${linea.id}/`} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      backgroundColor: linea.color,
                      width: '2.5rem', height: '2.5rem', borderRadius: 'var(--radius)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontWeight: 700, fontSize: '0.75rem', color: 'white', flexShrink: 0,
                    }}>
                      {linea.id}
                    </div>
                    <div>
                      <h4 style={{ marginBottom: '0.25rem', color: 'var(--text)' }}>{linea.nombre}</h4>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        {linea.inicio} → {linea.fin}
                      </p>
                    </div>
                  </div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', borderTop: '1px solid var(--border)', paddingTop: '0.75rem' }}>
                    {linea.total} estaciones
                  </div>
                  <div style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.875rem', marginTop: 'auto' }}>
                    Ver recorrido →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* All Stations */}
      <section style={{ padding: '4rem 1rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <h2 style={{ marginBottom: '2rem' }}>Todas las Estaciones</h2>
          <div className="grid-3">
            {data.estaciones.map((est) => (
              <a key={est.slug} href={`/cdmx/tren-suburbano/estacion/${est.slug}/`} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      backgroundColor: '#00A651', width: '2rem', height: '2rem', borderRadius: 'var(--radius)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.7rem', color: 'white', fontWeight: 700,
                    }}>
                      {est.linea}
                    </div>
                    <div>
                      <h4 style={{ color: 'var(--text)', fontSize: '1rem' }}>{est.nombre}</h4>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{est.alcaldia}</p>
                    </div>
                  </div>
                  {est.conexiones_metro.length > 0 && (
                    <p style={{ fontSize: '0.8rem', color: 'var(--primary)' }}>
                      Conexión Metro: {est.conexiones_metro.join(', ')}
                    </p>
                  )}
                  <div style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.875rem', marginTop: 'auto', paddingTop: '0.5rem', borderTop: '1px solid var(--border)' }}>
                    Ver estación →
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Tips */}
      <section style={{ padding: '4rem 1rem' }}>
        <div className="container">
          <h2 style={{ marginBottom: '2rem' }}>Tips para Turistas</h2>
          <div className="grid-3">
            <div className="card">
              <h4 style={{ marginBottom: '0.75rem', color: '#00A651' }}>💳 Tarjeta de Movilidad</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                Necesitas la Tarjeta de Movilidad Integrada para abordar. Se puede comprar y recargar en las estaciones. No acepta efectivo directamente.
              </p>
            </div>
            <div className="card">
              <h4 style={{ marginBottom: '0.75rem', color: '#00A651' }}>🕐 Horario Pico</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                Evita las horas pico (7-9 AM y 6-8 PM) si viajas con equipaje. Los vagones se llenan considerablemente en estas horas.
              </p>
            </div>
            <div className="card">
              <h4 style={{ marginBottom: '0.75rem', color: '#00A651' }}>✈️ Al AIFA</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                Para ir al Aeropuerto Felipe Ángeles desde CDMX: Metro → Buenavista → Tren Suburbano → Lechería → Ramal AIFA. Total ~1h, ~$35 MXN.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
