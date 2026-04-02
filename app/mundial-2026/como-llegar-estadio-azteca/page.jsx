
import { mundial2026 } from '@/data/mundial'

export const metadata = {
  title: 'Cómo llegar al Estadio Azteca en Metro — Ruta paso a paso | MetroGuia',
  description: 'Guía completa para llegar al Estadio Azteca durante el Mundial 2026. Ruta Metro L2 + Tren Ligero, horarios, costos, alternativas y tips de seguridad.',
  keywords: ['como llegar estadio azteca en metro', 'ruta metro estadio azteca mundial 2026', 'transporte estadio azteca', 'mundial fifa 2026 cdmx'],
  openGraph: {
    title: 'Cómo llegar al Estadio Azteca en Metro para el Mundial 2026',
    description: 'Ruta paso a paso: Metro L2 → Tasqueña → Tren Ligero → Estadio Azteca. 45-60 minutos, $15 MXN total.',
    url: 'https://metroguia.mx/mundial-2026/como-llegar-estadio-azteca/',
    siteName: 'MetroGuia',
  },
}

function StepIcon({ tipo }) {
  const icons = {
    'metro': '🚇',
    'transbordo': '🔄',
    'caminata': '🚶',
    'compra': '🎟️',
    'tren-ligero': '🚃',
    'llegada': '📍'
  }
  return icons[tipo] || '→'
}

function RouteCard({ step, index }) {
  const baseStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1.5rem',
    padding: '1.5rem',
    backgroundColor: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: 'var(--radius)',
    marginBottom: '1rem'
  }

  return (
    <div style={baseStyle}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <div style={{
          width: '3rem',
          height: '3rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--primary)',
          borderRadius: '50%',
          color: '#000',
          fontWeight: 700,
          fontSize: '1.25rem',
          flexShrink: 0
        }}>
          {StepIcon({ tipo: step.tipo })}
        </div>
        {index < 6 && (
          <div style={{
            width: '2px',
            height: '2rem',
            backgroundColor: 'var(--primary)',
            opacity: 0.4
          }} />
        )}
      </div>
      <div style={{ flex: 1 }}>
        <p style={{
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          margin: '0 0 0.5rem 0',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          fontWeight: 600
        }}>
          Paso {index + 1}
          {step.linea && ` • Línea ${step.linea}`}
          {step.tiempo > 0 && ` • ${step.tiempo} min`}
        </p>
        <p style={{ color: 'var(--text)', margin: '0', lineHeight: '1.6', fontWeight: 500 }}>
          {step.instruccion}
        </p>
      </div>
    </div>
  )
}

export default function ComoLlegarAztecaPage() {
  const sede = mundial2026.sedes.cdmx
  const ruta = sede.ruta_desde_centro
  const totalTiempo = ruta.pasos.reduce((sum, p) => sum + p.tiempo, 0)
  const noPasos = ruta.pasos.filter(p => p.tipo !== 'transbordo').length

  // JSON-LD schemas
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'MetroGuia',
        item: 'https://metroguia.mx'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Mundial 2026',
        item: 'https://metroguia.mx/mundial-2026/'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Cómo llegar al Estadio Azteca',
        item: 'https://metroguia.mx/mundial-2026/como-llegar-estadio-azteca/'
      }
    ]
  }

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Cómo llegar al Estadio Azteca en Metro',
    description: 'Guía paso a paso para llegar al Estadio Azteca durante el Mundial FIFA 2026',
    step: ruta.pasos.map((p, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: p.instruccion,
      text: p.instruccion,
      duration: `PT${p.tiempo}M`
    }))
  }

  const placeSchema = {
    '@context': 'https://schema.org',
    '@type': 'Place',
    name: 'Estadio Azteca',
    address: {
      '@type': 'PostalAddress',
      streetAddress: sede.direccion.split(',')[0],
      addressLocality: 'Ciudad de México',
      addressRegion: 'Ciudad de México',
      postalCode: '04650',
      addressCountry: 'MX'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: sede.coordenadas.lat,
      longitude: sede.coordenadas.lng
    },
    capacity: sede.capacidad
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }} />

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #1a472a 0%, rgba(0, 212, 255, 0.1) 100%)',
        padding: '5rem 1.5rem 4rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <p style={{
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            marginBottom: '1rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontWeight: 600,
          }}>
            <a href="/mundial-2026/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>Mundial 2026</a>
            {' '} → Estadio Azteca
          </p>
          <h1 style={{ marginBottom: '1rem', fontSize: '2.75rem', lineHeight: '1.1', fontWeight: 700 }}>
            🏟️ Cómo llegar al Estadio Azteca en Metro
          </h1>
          <p style={{
            fontSize: '1.125rem',
            color: 'rgba(255,255,255,0.8)',
            lineHeight: '1.6',
            marginBottom: '1.5rem',
            maxWidth: '700px',
          }}>
            Guía paso a paso desde cualquier punto de la CDMX. Ruta, horarios, precios y tips para días de partido.
          </p>

          {/* Quick Stats */}
          <div style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
            marginTop: '2rem',
          }}>
            <div>
              <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tiempo total</p>
              <p style={{ color: '#fff', fontWeight: 700, fontSize: '1.5rem' }}>{totalTiempo} min</p>
            </div>
            <div>
              <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Costo</p>
              <p style={{ color: '#fff', fontWeight: 700, fontSize: '1.5rem' }}>${ruta.costo} MXN</p>
            </div>
            <div>
              <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Pasos</p>
              <p style={{ color: '#fff', fontWeight: 700, fontSize: '1.5rem' }}>{noPasos}</p>
            </div>
            <div>
              <p style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Capacidad</p>
              <p style={{ color: '#fff', fontWeight: 700, fontSize: '1.5rem' }}>{(sede.capacidad / 1000).toFixed(0)}k</p>
            </div>
          </div>
        </div>
      </section>

      {/* Route Summary Card */}
      <section style={{ padding: '3rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{
            backgroundColor: 'rgba(0, 212, 255, 0.08)',
            border: '2px solid var(--primary)',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            marginBottom: '3rem'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2rem' }}>
              <div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0 0 0.5rem 0', textTransform: 'uppercase', fontWeight: 600 }}>Ruta completa</p>
                <p style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.1rem', margin: 0 }}>
                  {ruta.descripcion}
                </p>
              </div>
              <div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0 0 0.5rem 0', textTransform: 'uppercase', fontWeight: 600 }}>Origen</p>
                <p style={{ color: 'var(--text)', fontWeight: 600, margin: 0 }}>Zócalo o cualquier estación L2</p>
              </div>
              <div>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', margin: '0 0 0.5rem 0', textTransform: 'uppercase', fontWeight: 600 }}>Transferencias</p>
                <p style={{ color: 'var(--text)', fontWeight: 600, margin: 0 }}>1 (Metro → Tren Ligero)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-step timeline */}
      <section style={{ padding: '3rem 1.5rem', borderBottom: '1px solid var(--border)', background: 'var(--surface-hover)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ marginBottom: '2.5rem', fontSize: '2rem', fontWeight: 700 }}>Ruta paso a paso</h2>
          {ruta.pasos.map((paso, idx) => (
            <RouteCard key={idx} step={paso} index={idx} />
          ))}
        </div>
      </section>

      {/* Warning box */}
      <section style={{ padding: '3rem 1.5rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{
            backgroundColor: 'rgba(255, 152, 0, 0.12)',
            border: '2px solid #ff9800',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            marginBottom: '3rem'
          }}>
            <h3 style={{ margin: '0 0 1rem 0', color: '#ff9800', fontSize: '1.25rem' }}>⚠️ Advertencia importante</h3>
            {ruta.alertas.map((alerta, i) => (
              <p key={i} style={{ color: 'var(--text)', margin: '0.5rem 0', lineHeight: '1.6' }}>
                • {alerta}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ASCII Route Map */}
      <section style={{ padding: '3rem 1.5rem', borderBottom: '1px solid var(--border)', background: 'var(--surface-hover)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ marginBottom: '2rem', fontSize: '2rem', fontWeight: 700 }}>Visualización de la ruta</h2>
          <div style={{
            backgroundColor: 'var(--surface)',
            padding: '2rem',
            borderRadius: 'var(--radius)',
            fontFamily: 'monospace',
            fontSize: '0.9rem',
            overflow: 'auto',
            border: '1px solid var(--border)',
            lineHeight: '1.8'
          }}>
            {`Tu ubicación (Zócalo, Polanco, Chapultepec, etc.)
                    ↓
          LÍNEA 2 DEL METRO (Azul)
      Dirección: SUR (TASQUEÑA)
          25 minutos
                    ↓
          ESTACIÓN TASQUEÑA
    [⚠️  COMPRA BOLETO TREN LIGERO AQUÍ]
          Boleto: $10 MXN
                    ↓
           TREN LIGERO (Naranja)
      Ruta: Tasqueña → Estadio Azteca
          10-15 minutos
                    ↓
        ESTACIÓN ESTADIO AZTECA 🏟️
          ¡Bienvenido al Mundial 2026!
                    ↓
          Camina 5 min al estadio`}
          </div>
        </div>
      </section>

      {/* Alternative Routes */}
      <section style={{ padding: '3rem 1.5rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ marginBottom: '2.5rem', fontSize: '2rem', fontWeight: 700 }}>Rutas alternativas</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {sede.rutas_alternativas.map((ruta, idx) => (
              <div key={idx} style={{
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '1.5rem'
              }}>
                <h4 style={{ color: 'var(--primary)', margin: '0 0 0.75rem 0', fontSize: '1.05rem', fontWeight: 600 }}>
                  {ruta.nombre}
                </h4>
                <p style={{ color: 'var(--text)', margin: '0.75rem 0', lineHeight: '1.5', fontSize: '0.95rem' }}>
                  {ruta.descripcion}
                </p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', fontSize: '0.9rem' }}>
                  <div>
                    <p style={{ color: 'var(--text-muted)', margin: '0 0 0.25rem 0', fontSize: '0.75rem', textTransform: 'uppercase' }}>Tiempo</p>
                    <p style={{ color: 'var(--text)', margin: 0, fontWeight: 600 }}>{ruta.tiempo} min</p>
                  </div>
                  <div>
                    <p style={{ color: 'var(--text-muted)', margin: '0 0 0.25rem 0', fontSize: '0.75rem', textTransform: 'uppercase' }}>Costo</p>
                    <p style={{ color: 'var(--text)', margin: 0, fontWeight: 600 }}>${ruta.costo} MXN</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POIs */}
      <section style={{ padding: '3rem 1.5rem', borderBottom: '1px solid var(--border)', background: 'var(--surface-hover)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ marginBottom: '2.5rem', fontSize: '2rem', fontWeight: 700 }}>Servicios cerca del estadio</h2>
          
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '1.5rem', fontWeight: 600 }}>Restaurantes y comida</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              {sede.pois.restaurantes.map((r, i) => (
                <div key={i} style={{
                  backgroundColor: 'var(--surface)',
                  padding: '1rem',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--border)'
                }}>
                  <p style={{ color: 'var(--text)', fontWeight: 600, margin: '0 0 0.25rem 0' }}>{r.nombre}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: '0.25rem 0' }}>📍 {r.distancia}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>{r.tipo} • {r.precio}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '1.5rem', fontWeight: 600 }}>Servicios</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              {sede.pois.servicios.map((s, i) => (
                <div key={i} style={{
                  backgroundColor: 'var(--surface)',
                  padding: '1rem',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--border)'
                }}>
                  <p style={{ color: 'var(--text)', fontWeight: 600, margin: '0 0 0.25rem 0' }}>{s.nombre}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: '0.25rem 0' }}>📍 {s.distancia}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>{s.tipo}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--primary)', marginBottom: '1.5rem', fontWeight: 600 }}>Hospedaje</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
              {sede.pois.hospedaje.map((h, i) => (
                <div key={i} style={{
                  backgroundColor: 'var(--surface)',
                  padding: '1rem',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--border)'
                }}>
                  <p style={{ color: 'var(--text)', fontWeight: 600, margin: '0 0 0.25rem 0' }}>{h.nombre}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: '0.25rem 0' }}>{h.tipo}</p>
                  <p style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: 600, margin: 0 }}>{h.rango_precio}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tips section */}
      <section style={{ padding: '3rem 1.5rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ marginBottom: '2.5rem', fontSize: '2rem', fontWeight: 700 }}>Tips para días de partido</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {sede.tips.map((tip, i) => (
              <div key={i} style={{
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '1.5rem',
                borderLeft: '4px solid var(--primary)'
              }}>
                <p style={{ color: 'var(--text)', margin: 0, lineHeight: '1.6', fontSize: '0.95rem' }}>
                  {tip}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming matches */}
      <section style={{ padding: '3rem 1.5rem', borderBottom: '1px solid var(--border)', background: 'var(--surface-hover)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ marginBottom: '2.5rem', fontSize: '2rem', fontWeight: 700 }}>Partidos en el Estadio Azteca</h2>
          <div style={{ display: 'grid', gap: '1rem' }}>
            {sede.partidos.map((p, i) => (
              <div key={i} style={{
                backgroundColor: 'var(--surface)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '1.5rem',
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: '1.5rem',
                alignItems: 'center'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <p style={{ color: 'var(--primary)', fontSize: '0.75rem', margin: '0 0 0.25rem 0', textTransform: 'uppercase', fontWeight: 600 }}>
                    {new Date(p.fecha).toLocaleDateString('es-MX', { month: 'short', day: 'numeric' })}
                  </p>
                  <p style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1.25rem', margin: 0 }}>
                    {new Date(p.fecha).toLocaleDateString('es-MX', { weekday: 'short' })}
                  </p>
                </div>
                <div>
                  <p style={{ color: 'var(--text)', fontWeight: 600, margin: '0 0 0.5rem 0' }}>
                    {p.equipos} • {p.fase}
                  </p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0, lineHeight: '1.5' }}>
                    {p.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem', fontSize: '2rem', fontWeight: 700 }}>¿Listo para el Mundial?</h2>
          <p style={{
            color: 'var(--text-muted)',
            marginBottom: '2rem',
            fontSize: '1rem',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Revisa el calendario completo de partidos y explora las otras sedes mexicanas del Mundial 2026.
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <a href="/mundial-2026/partidos/" style={{
              display: 'inline-block',
              padding: '0.875rem 2rem',
              backgroundColor: 'var(--primary)',
              color: '#000',
              fontWeight: 600,
              borderRadius: 'var(--radius)',
              textDecoration: 'none',
              fontSize: '0.95rem',
            }}>
              Ver calendario de partidos →
            </a>
            <a href="/mundial-2026/" style={{
              display: 'inline-block',
              padding: '0.875rem 2rem',
              backgroundColor: 'var(--surface-hover)',
              color: 'var(--text)',
              fontWeight: 600,
              borderRadius: 'var(--radius)',
              textDecoration: 'none',
              fontSize: '0.95rem',
              border: '1px solid var(--border)',
            }}>
              ← Volver al hub Mundial 2026
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
