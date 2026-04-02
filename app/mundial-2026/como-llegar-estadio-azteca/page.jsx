export const metadata = {
  title: 'Cómo llegar al Estadio Azteca en Metro para FIFA 2026 — Guía completa | MetroGuia',
  description: 'Guía paso a paso para llegar al Estadio Azteca en metro durante el Mundial 2026. Rutas, horarios, precios, consejos de seguridad y timing.',
  keywords: 'estadio azteca, como llegar, metro cdmx, mundial 2026, fifa, transporte público',
  openGraph: {
    title: 'Cómo llegar al Estadio Azteca en Metro',
    description: 'Guía completa de transporte para el Estadio Azteca en el Mundial 2026',
    type: 'article',
    url: 'https://metroguia.mx/mundial-2026/como-llegar-estadio-azteca/',
  },
}

export function generateStaticParams() {
  return []
}

export default function ComoLlegarAztecaPage() {
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

  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: 'FIFA World Cup 2026 — Estadio Azteca',
    description: 'Partidos de la Copa Mundial FIFA 2026 en el Estadio Azteca de Ciudad de México',
    image: 'https://www.metroguia.mx/og-mundial-2026.png',
    startDate: '2026-06-11',
    endDate: '2026-07-05',
    location: {
      '@type': 'Place',
      name: 'Estadio Azteca',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Calzada de Tlalpan 3465',
        addressLocality: 'Ciudad de México',
        addressRegion: 'Ciudad de México',
        postalCode: '04650',
        addressCountry: 'MX'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 19.302900,
        longitude: -99.150500
      }
    },
    performer: [
      {
        '@type': 'Organization',
        name: 'FIFA',
        url: 'https://www.fifa.com'
      }
    ],
    organizer: {
      '@type': 'Organization',
      name: 'FIFA',
      url: 'https://www.fifa.com'
    },
    offers: {
      '@type': 'Offer',
      url: 'https://www.fifa.com/tickets',
      priceCurrency: 'MXN',
      availability: 'https://schema.org/PreOrder',
      validFrom: '2026-06-11'
    }
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />

      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #1a472a 0%, rgba(233, 30, 140, 0.1) 100%)',
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
          <h1 style={{ marginBottom: '1rem', fontSize: '2.5rem', lineHeight: '1.2' }}>
            Cómo llegar al Estadio Azteca en Metro
          </h1>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--text-muted)',
            lineHeight: '1.6',
            marginBottom: '1.5rem',
            maxWidth: '700px',
          }}>
            Guía paso a paso para llegar desde cualquier punto de la CDMX durante el Mundial FIFA 2026. Incluye rutas, horarios, precios y consejos.
          </p>

          {/* Quick Stats */}
          <div style={{
            display: 'flex',
            gap: '2rem',
            flexWrap: 'wrap',
            marginTop: '2rem',
          }}>
            <div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Ubicación</p>
              <p style={{ color: 'var(--text)', fontWeight: 600, fontSize: '1rem' }}>Calzada de Tlalpan 3665</p>
            </div>
            <div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Acceso</p>
              <p style={{ color: 'var(--text)', fontWeight: 600, fontSize: '1rem' }}>Metro Línea 2 + Tren Ligero</p>
            </div>
            <div>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Tiempo total</p>
              <p style={{ color: 'var(--text)', fontWeight: 600, fontSize: '1rem' }}>60-90 minutos desde el Centro</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '4rem 1.5rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ marginBottom: '2rem', marginTop: '2rem' }}>Instrucciones paso a paso</h2>

          {[
            {
              paso: 1,
              titulo: 'Localiza la estación más cercana de la Línea 2',
              desc: 'La Línea 2 (azul) recorre todo el Centro. Estaciones principales: Zócalo, Bellas Artes, Allende, San Juan de Letrán, Chabacano.',
              detalles: [
                'Si estás en el Centro: camina a Zócalo (Plaza Mayor)',
                'Si estás en Polanco: ve a Auditorio o Constituyentes',
                'Si estás en Chapultepec: ve a Chapultepec o Juárez'
              ]
            },
            {
              paso: 2,
              titulo: 'Compra un boleto o recarga tu tarjeta Metro',
              desc: 'Costo: $8 MXN por viaje. Opción recomendada: compra una Tarjeta de Transporte recargable y reutilízala durante tu viaje.',
              detalles: [
                'Tarjeta de Transporte: $20 MXN (incluye $1 de saldo)',
                'Válida en Metro, Metrobús y Tren Ligero',
                'Durará para todo tu viaje al Estadio y de regreso'
              ]
            },
            {
              paso: 3,
              titulo: 'Sube el tren en dirección SUR (Tasqueña)',
              desc: 'Busca los letreros que dicen "TASQUEÑA" o "SUR". El tren azul tiene dos direcciones; te asegurarás de ir hacia el sur.',
              detalles: [
                'Tiempo desde Centro Histórico: 20-25 minutos',
                'En días de partido: espera aglomeración',
                'Viaja en horas pico (mañana): 7:00-10:00 AM'
              ]
            },
            {
              paso: 4,
              titulo: 'Desciende en la estación TASQUEÑA (terminus sur)',
              desc: 'Tasqueña es la última estación. Prácticamente todos los pasajeros bajarán aquí en días de partido.',
              detalles: [
                'Sigue a la multitud',
                'Guarda tu mochila cerca del cuerpo',
                'Busca carteles del Tren Ligero (color naranja)'
              ]
            },
            {
              paso: 5,
              titulo: 'IMPORTANTE: Compra un boleto separado para el Tren Ligero',
              desc: 'Tu tarjeta Metro NO funciona en el Tren Ligero. Debes comprar un boleto adicional (~$10 MXN).',
              detalles: [
                'Busca la taquilla del Tren Ligero en la estación',
                'Di: "Un boleto para Estadio Azteca"',
                'Guarda el comprobante para la salida'
              ],
              warn: true
            },
            {
              paso: 6,
              titulo: 'Sube al Tren Ligero rumbo al Estadio Azteca',
              desc: 'El Tren Ligero es un monorraíl moderno. Va directo desde Tasqueña al Estadio Azteca.',
              detalles: [
                'Tiempo: 10-15 minutos',
                'Ventanas con vista a la ciudad',
                'Muy concurrido en días de partido'
              ]
            },
            {
              paso: 7,
              titulo: 'Arriba al Estadio Azteca',
              desc: 'Final de la línea. Sigue la multitud hacia las taquillas de entrada.',
              detalles: [
                'Tiempo total desde Centro: 1 hora (sin congestión)',
                'Tiempo con congestión: 1.5 horas',
                'Llega 2-3 horas antes del partido'
              ]
            }
          ].map(({ paso, titulo, desc, detalles, warn }) => (
            <div key={paso} style={{
              backgroundColor: warn ? 'rgba(255, 193, 7, 0.1)' : 'rgba(0, 212, 255, 0.05)',
              borderLeft: `5px solid ${warn ? '#ff9800' : 'var(--primary)'}`,
              padding: '2rem',
              borderRadius: 'var(--radius)',
              marginBottom: '1.5rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '1rem', marginBottom: '0.75rem' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '2.5rem',
                  height: '2.5rem',
                  backgroundColor: warn ? '#ff9800' : 'var(--primary)',
                  color: '#fff',
                  fontWeight: 700,
                  borderRadius: 'var(--radius)',
                  fontSize: '1.25rem',
                  flexShrink: 0,
                }}>
                  {paso}
                </div>
                <h3 style={{ margin: '0', color: 'var(--text)', fontSize: '1.25rem' }}>{titulo}</h3>
              </div>
              <p style={{ marginBottom: '1rem', color: 'var(--text)', lineHeight: '1.6' }}>{desc}</p>
              {detalles && (
                <ul style={{ margin: '0', paddingLeft: '1.5rem', color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '0.95rem' }}>
                  {detalles.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Mapa Visualización */}
      <section style={{ padding: '4rem 1.5rem', borderBottom: '1px solid var(--border)', background: 'var(--surface-hover)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ marginBottom: '2rem' }}>Visualización de la ruta</h2>
          <div style={{
            backgroundColor: 'var(--surface)',
            padding: '2rem',
            borderRadius: 'var(--radius)',
            fontFamily: 'monospace',
            fontSize: '0.95rem',
            overflow: 'auto',
            border: '1px solid var(--border)',
            lineHeight: '2'
          }}>
{`Tu ubicación (Centro Histórico, Polanco, Chapultepec, etc.)
                    ↓
          LÍNEA 2 DEL METRO (Azul)
      Dirección: SUR (TASQUEÑA)
          20-25 minutos
                    ↓
          ESTACIÓN TASQUEÑA
    [⚠️  Compra boleto Tren Ligero aquí]
          Boleto: ~$10 MXN
                    ↓
           TREN LIGERO (Naranja)
      Ruta: Tasqueña → Estadio Azteca
          10-15 minutos
                    ↓
        ESTACIÓN ESTADIO AZTECA 🏟️
          ¡Bienvenido al Mundial 2026!`}
          </div>
        </div>
      </section>

      {/* Horarios y Frecuencia */}
      <section style={{ padding: '4rem 1.5rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ marginBottom: '2rem' }}>Horarios y frecuencia</h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
            {[
              { servicio: 'Metro Línea 2', apertura: '5:00 AM', cierre: '00:00 (medianoche)', frecuencia: 'Cada 2-3 min (horas pico)', detalles: 'Lunes-Domingo' },
              { servicio: 'Tren Ligero', apertura: '5:30 AM', cierre: '00:30 AM', frecuencia: 'Cada 8-10 min', detalles: 'Diario' }
            ].map((s, i) => (
              <div key={i} style={{
                backgroundColor: 'var(--surface-hover)',
                padding: '1.5rem',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
              }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{s.servicio}</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem' }}>
                  <div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', margin: '0 0 0.25rem 0', textTransform: 'uppercase' }}>Horario</p>
                    <p style={{ color: 'var(--text)', fontWeight: 600, margin: 0 }}>{s.apertura} - {s.cierre}</p>
                  </div>
                  <div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', margin: '0 0 0.25rem 0', textTransform: 'uppercase' }}>Frecuencia</p>
                    <p style={{ color: 'var(--text)', fontWeight: 600, margin: 0 }}>{s.frecuencia}</p>
                  </div>
                  <div>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', margin: '0 0 0.25rem 0', textTransform: 'uppercase' }}>Días</p>
                    <p style={{ color: 'var(--text)', fontWeight: 600, margin: 0 }}>{s.detalles}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            backgroundColor: 'rgba(255, 193, 7, 0.1)',
            border: '1px solid #ff9800',
            borderRadius: 'var(--radius)',
            padding: '1.5rem',
            marginTop: '2rem'
          }}>
            <p style={{ margin: '0', color: 'var(--text)', lineHeight: '1.6' }}>
              <strong>⏰ Timing crítico para partidos:</strong> Llega 2-3 horas antes del inicio. Las puertas abren 3 horas previas. En días de partido, la congestión es significativa desde 3 horas antes.
            </p>
          </div>
        </div>
      </section>

      {/* Costos */}
      <section style={{ padding: '4rem 1.5rem', borderBottom: '1px solid var(--border)', background: 'var(--surface-hover)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ marginBottom: '2rem' }}>Costos y presupuesto</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
          }}>
            {[
              { concepto: 'Tarjeta de Transporte', precio: '$20 MXN', desc: 'Costo inicial (válida todo tu viaje)' },
              { concepto: 'Metro: ida al Estadio', precio: '$8 MXN', desc: 'Cargado en tarjeta' },
              { concepto: 'Tren Ligero: ida', precio: '$10 MXN', desc: 'Boleto separado (no funciona tarjeta Metro)' },
              { concepto: 'Metro: regreso', precio: '$8 MXN', desc: 'Cargado en tarjeta' },
              { concepto: 'Tren Ligero: regreso', precio: '$10 MXN', desc: 'Boleto separado' },
              { concepto: 'TOTAL (ida y vuelta)', precio: '$56 MXN', desc: '~USD $3.50 por persona' },
            ].map((item, i) => (
              <div key={i} style={{
                backgroundColor: 'var(--surface)',
                padding: '1.25rem',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
              }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', margin: '0 0 0.5rem 0', textTransform: 'uppercase' }}>
                  {item.concepto}
                </p>
                <p style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.25rem', margin: '0.5rem 0' }}>
                  {item.precio}
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consejos de Seguridad */}
      <section style={{ padding: '4rem 1.5rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ marginBottom: '2rem' }}>Consejos de seguridad y comodidad</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
          }}>
            {[
              { emoji: '🎫', titulo: 'Compra entrada con anticipación', desc: 'Obtén tu boleto para el partido en FIFA.com semanas antes. Evita colas el día del evento.' },
              { emoji: '💰', titulo: 'Lleva dinero en efectivo', desc: 'Las maquinas ATM en la estación Tasqueña y alrededores tendrán largas colas. Retira antes.' },
              { emoji: '🎒', titulo: 'Mochila pequeña permitida', desc: 'Una mochila pequeña es permitida. Revisión de bolsas es obligatoria. Lleva lo mínimo.' },
              { emoji: '🚫', titulo: 'Prohibidos', desc: 'NO llevar: botellas de vidrio, latas de cerveza, cámaras profesionales, armas, cinturones con metal.' },
              { emoji: '📱', titulo: 'Batería del teléfono', desc: 'Carga tu teléfono. Necesitarás GPS, tickets digitales y comunicación con amigos.' },
              { emoji: '👥', titulo: 'Viaja en grupo', desc: 'Después del partido, las estaciones están abarrotadas. Es más seguro viajar acompañado.' },
              { emoji: '⏰', titulo: 'Espera post-partido', desc: 'Después del evento, espera 30-45 minutos antes de salir. Verás de nuevo la multitud fuerte.' },
              { emoji: '🚕', titulo: 'Alternativa: Uber', desc: 'Si la congestión es extrema, Uber desde el Estadio a tu hotel puede ser más rápido (~400 MXN).' },
            ].map((item, i) => (
              <div key={i} style={{
                backgroundColor: 'var(--surface-hover)',
                padding: '1.5rem',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
              }}>
                <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text)' }}>{item.emoji}</h4>
                <h5 style={{ color: 'var(--primary)', marginBottom: '0.5rem', fontSize: '0.95rem', fontWeight: 600 }}>{item.titulo}</h5>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0, lineHeight: '1.5' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alrededor del Estadio */}
      <section style={{ padding: '4rem 1.5rem', borderBottom: '1px solid var(--border)', background: 'var(--surface-hover)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 style={{ marginBottom: '2rem' }}>Alrededor del Estadio Azteca</h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
          }}>
            {[
              { nombre: 'Comida', desc: 'Vendedores de tacos, elotes, refrescos fuera. Dentro del estadio: hamburguesas y nachos. Dinero en efectivo.' },
              { nombre: 'Baños', desc: '⚠️ Baños públicos muy concurridos. Úsalos ANTES de la congestión. Hay baños en el segundo piso.' },
              { nombre: 'Servicios médicos', desc: 'Hay paramedicos en la entrada. Para emergencias: llama 911 desde tu celular.' },
              { nombre: 'Área de estacionamiento', desc: 'Lotes disponibles en Tlalpan (caro: $150-200 MXN). Mejor: Metro + Tren Ligero (más barato y seguro).' },
              { nombre: 'WiFi', desc: 'No hay WiFi gratis. Compra datos móviles para recargar transporte o coordinar salida.' },
              { nombre: 'Objetos perdidos', desc: 'Oficina de Información en Puerta 1. Revisa 24h después si pierdes algo.' },
            ].map((item, i) => (
              <div key={i} style={{
                backgroundColor: 'var(--surface)',
                padding: '1.5rem',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
              }}>
                <h4 style={{ color: 'var(--primary)', marginBottom: '0.75rem', fontSize: '1rem', fontWeight: 600 }}>
                  {item.nombre}
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0, lineHeight: '1.5' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '4rem 1.5rem' }}>
        <div className="container" style={{ maxWidth: '900px', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>¿Listos para el Mundial?</h2>
          <p style={{
            color: 'var(--text-muted)',
            marginBottom: '2rem',
            fontSize: '1rem',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Explora las otras sedes mexicanas del Mundial 2026 y planifica tu viaje completo.
          </p>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            <a href="/mundial-2026/" style={{
              display: 'inline-block',
              padding: '0.875rem 2rem',
              backgroundColor: 'var(--primary)',
              color: '#000',
              fontWeight: 600,
              borderRadius: 'var(--radius)',
              textDecoration: 'none',
              fontSize: '0.95rem',
            }}>
              ← Volver a Mundial 2026
            </a>
            <a href="/mundial-2026/transporte-publico-cdmx/" style={{
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
              Transporte público CDMX →
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
