import { lineasDetalle } from '@/data/lineas-detalle'
import { estaciones } from '@/data/estaciones'
import BuscadorRutas from '@/app/components/BuscadorRutas'

export const metadata = {
  title: 'Metro CDMX — Guía turística completa | MetroGuia',
  description: 'Guía completa del Metro Ciudad de México para turistas. 12 líneas, 195 estaciones, rutas al Estadio Azteca. Planea tu visita al Mundial FIFA 2026.',
}

export default function CDMXPage() {
  const estacionesTuristicas = estaciones.filter(e => e.tipo_zona === 'turistico').slice(0, 6)
  const lineasArray = Object.values(lineasDetalle).slice(0, 12)

  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <p style={{ fontSize: '0.875rem', opacity: 0.7, marginBottom: '0.5rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            <a href="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>MetroGuia</a>
            {' '}→ Ciudad de México
          </p>
          <h1>Metro Ciudad de México</h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '2rem' }}>
            195 estaciones · 12 líneas · Guía para el Mundial FIFA 2026
          </p>
          <a href="/mundial-2026/" className="cta-btn" style={{ marginBottom: '2rem', display: 'inline-block' }}>
            Cómo llegar al Estadio Azteca →
          </a>
          <BuscadorRutas />
        </div>
      </section>

      {/* Stats CDMX */}
      <section style={{ padding: '3rem 2rem', backgroundColor: 'var(--metro-gray)' }}>
        <div className="container">
          <div className="grid grid-3" style={{ textAlign: 'center' }}>
            <div>
              <h3 style={{ color: 'var(--metro-orange)', fontSize: '2.5rem', marginBottom: '0.5rem', fontFamily: 'Syne, sans-serif' }}>195</h3>
              <p style={{ color: '#555' }}>Estaciones</p>
            </div>
            <div>
              <h3 style={{ color: 'var(--metro-orange)', fontSize: '2.5rem', marginBottom: '0.5rem', fontFamily: 'Syne, sans-serif' }}>12</h3>
              <p style={{ color: '#555' }}>Líneas</p>
            </div>
            <div>
              <h3 style={{ color: 'var(--metro-orange)', fontSize: '2.5rem', marginBottom: '0.5rem', fontFamily: 'Syne, sans-serif' }}>226 km</h3>
              <p style={{ color: '#555' }}>Red total</p>
            </div>
          </div>
        </div>
      </section>

      {/* 12 Líneas */}
      <section style={{ padding: '4rem 2rem' }}>
        <div className="container">
          <h2 style={{ marginBottom: '0.75rem', textAlign: 'center' }}>12 Líneas del Metro CDMX</h2>
          <p style={{ textAlign: 'center', color: '#666', marginBottom: '3rem' }}>
            Haz clic en una línea para ver su recorrido completo, estaciones y consejos turísticos.
          </p>
          <div className="grid grid-3">
            {lineasArray.map((linea) => (
              <a key={linea.id} href={`/linea/${linea.id}/`} style={{ textDecoration: 'none' }}>
                <div className="lugar-card" style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '80px', height: '80px', borderRadius: '50%',
                    backgroundColor: linea.color, margin: '0 auto 1rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'white', fontSize: '2rem', fontWeight: 700, fontFamily: 'Syne, sans-serif'
                  }}>
                    {linea.id}
                  </div>
                  <h3 style={{ color: linea.color, marginBottom: '0.5rem' }}>Línea {linea.id}</h3>
                  <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.5rem' }}>{linea.inicio} → {linea.fin}</p>
                  <p style={{ fontSize: '0.875rem', fontWeight: 600 }}>{linea.total} estaciones</p>
                </div>
              </a>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <a href="/lineas/" style={{ color: 'var(--metro-orange)', fontWeight: 600 }}>Ver todas las líneas →</a>
          </div>
        </div>
      </section>

      {/* Estaciones turísticas */}
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

      {/* FIFA 2026 CTA */}
      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--metro-dark)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>Mundial FIFA 2026 en CDMX</h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '0.75rem', opacity: 0.9 }}>
            11, 17, 24 jun · 30 jun · 5 jul 2026 — Estadio Azteca
          </p>
          <p style={{ marginBottom: '2rem', opacity: 0.8 }}>
            No hay metro directo al Azteca. La ruta es Metro L2 → Tasqueña → Tren Ligero ($15 MXN).
          </p>
          <a href="/mundial-2026/" className="cta-btn">Ver guía completa del Mundial →</a>
        </div>
      </section>
    </div>
  )
}
