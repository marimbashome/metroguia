import { lineasDetalle } from '@/data/lineas-detalle'
import { estaciones } from '@/data/estaciones'

export const metadata = {
  title: 'MetroGuia.mx — Guía de transporte CDMX',
  description: 'Guía completa del Metro CDMX para turistas. 12 líneas, 195 estaciones. Cómo llegar a eventos del Mundial FIFA 2026.',
}

export default function HomePage() {
  const estacionesTuristicas = estaciones.filter(e => e.tipo_zona === 'turistico').slice(0, 6)
  const lineasArray = Object.values(lineasDetalle).slice(0, 12)

  return (
    <div>
      <section className="hero">
        <div className="container">
          <h1>Muévete en el Metro de la Ciudad de México</h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '2rem' }}>
            Guía completa de transporte para el Mundial FIFA 2026
          </p>
          <a href="/mundial-2026/" className="cta-btn">
            Cómo llegar al Estadio Azteca →
          </a>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem' }}>
        <div className="container">
          <h2 style={{ marginBottom: '3rem', textAlign: 'center' }}>12 Líneas del Metro CDMX</h2>
          <div className="grid grid-3">
            {lineasArray.map((linea) => (
              <a key={linea.id} href={`/linea/${linea.id}/`} style={{ textDecoration: 'none' }}>
                <div className="lugar-card" style={{ textAlign: 'center' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: linea.color, margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '2rem', fontWeight: 700, fontFamily: 'Syne, sans-serif' }}>
                    {linea.id}
                  </div>
                  <h3 style={{ color: linea.color, marginBottom: '0.5rem' }}>Línea {linea.id}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.5rem' }}>{linea.inicio} → {linea.fin}</p>
                  <p style={{ fontSize: '0.875rem', fontWeight: 600 }}>{linea.total} estaciones</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {estacionesTuristicas.length > 0 && (
        <section className="section-tips">
          <div className="container">
            <h2 style={{ marginBottom: '3rem', textAlign: 'center' }}>Estaciones Turísticas Destacadas</h2>
            <div className="grid grid-2">
              {estacionesTuristicas.map((estacion) => (
                <a key={estacion.slug} href={`/estacion/${estacion.slug}/`} style={{ textDecoration: 'none' }}>
                  <div className="lugar-card">
                    <h3 style={{ marginBottom: '0.5rem', color: 'var(--text)' }}>{estacion.nombre}</h3>
                    <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '1rem' }}>Línea {estacion.linea}</p>
                    <p>{estacion.intro}</p>
                    <span style={{ color: 'var(--metro-orange)', fontWeight: 600, marginTop: '1rem', display: 'inline-block' }}>Ver detalles →</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--metro-dark)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Mundial FIFA 2026 en CDMX</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: 0.9 }}>El Estadio Azteca acogerá partidos del Mundial 2026. Te mostramos cómo llegar en metro.</p>
          <a href="/mundial-2026/" className="cta-btn">Ver guía completa del Mundial →</a>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--metro-gray)' }}>
        <div className="container">
          <div className="grid grid-3" style={{ textAlign: 'center' }}>
            <div>
              <h3 style={{ color: 'var(--metro-orange)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>195</h3>
              <p>Estaciones en CDMX</p>
            </div>
            <div>
              <h3 style={{ color: 'var(--metro-orange)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>12</h3>
              <p>Líneas principales</p>
            </div>
            <div>
              <h3 style={{ color: 'var(--metro-orange)', fontSize: '2.5rem', marginBottom: '0.5rem' }}>226 km</h3>
              <p>Extensión total</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
