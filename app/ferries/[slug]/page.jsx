import { ferrys } from '@/data/ferrys'

export function generateStaticParams() {
  return ferrys.map(f => ({ slug: f.slug }))
}

export function generateMetadata({ params }) {
  const ferry = ferrys.find(f => f.slug === params.slug)
  if (!ferry) return { title: 'Ferry no encontrado' }
  return {
    title: ferry.seo_title,
    description: ferry.meta_description,
    openGraph: {
      title: ferry.seo_title,
      description: ferry.meta_description,
      url: `https://metroguia.mx/ferries/${ferry.slug}/`,
      siteName: 'MetroGuia',
      locale: 'es_MX',
      type: 'website',
    },
    alternates: { canonical: `https://metroguia.mx/ferries/${ferry.slug}/` },
  }
}

export default function FerryPage({ params }) {
  const ferry = ferrys.find(f => f.slug === params.slug)
  if (!ferry) return <div style={{ padding: '4rem 2rem', textAlign: 'center' }}><h1>Ferry no encontrado</h1></div>

  // Determine state(s) to display
  const estado = ferry.ruta.estado || ferry.ruta.estado_origen || 'México'
  
  // Handle origin terminal(s) - could be single object or array
  const originTerminals = Array.isArray(ferry.terminal.origen) 
    ? ferry.terminal.origen 
    : [ferry.terminal.origen]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BoatTrip',
    name: ferry.nombre,
    url: `https://metroguia.mx/ferries/${ferry.slug}/`,
    description: ferry.descripcion,
    departureBoatTerminal: {
      '@type': 'LocalBusiness',
      name: Array.isArray(ferry.terminal.origen) 
        ? ferry.terminal.origen[0].nombre 
        : ferry.terminal.origen.nombre,
    },
    arrivalBoatTerminal: {
      '@type': 'LocalBusiness',
      name: ferry.terminal.destino.nombre,
    },
  }

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Breadcrumb */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '1rem 1rem 0' }}>
        <nav style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
          <a href="/" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Inicio</a>
          {' → '}
          <a href="/ferries/" style={{ color: 'var(--text-dim)', textDecoration: 'none' }}>Ferries</a>
          {' → '}
          <span style={{ color: 'var(--text)' }}>{ferry.nombre}</span>
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
            }}>⛴️ {ferry.ruta.region ? ferry.ruta.region.charAt(0).toUpperCase() + ferry.ruta.region.slice(1) : 'Ferry'}</span>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{estado}</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 800, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
            {ferry.nombre}
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.6, maxWidth: '650px' }}>
            {ferry.descripcion}
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', marginTop: '1.25rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Distancia</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>{ferry.distancia}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Capacidad</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700 }}>{ferry.capacidad}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Operadores */}
      {ferry.operadores && ferry.operadores.length > 0 && (
        <section style={{ padding: '2.5rem 1rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>Operadores y horarios</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>
              Empresas que operan esta ruta
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {ferry.operadores.map((op, i) => (
                <div key={i} className="card" style={{ padding: '1.5rem' }}>
                  <div style={{ marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.25rem', color: 'var(--text)' }}>
                      {op.nombre}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: 0 }}>
                      {op.frecuencia}
                    </p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Horarios</div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text)' }}>
                        {typeof op.horarios === 'string' ? op.horarios : (op.horarios && op.horarios.salidas ? op.horarios.salidas : 'Consultar')}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Duración</div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text)' }}>
                        {op.duracion}
                      </div>
                    </div>
                  </div>

                  {/* Precios */}
                  {op.precio && (
                    <div style={{ marginBottom: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>Precios</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {op.precio.adulto && (
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                            <span>Adulto:</span>
                            <span style={{ fontWeight: 700, color: 'var(--primary)' }}>{op.precio.adulto}</span>
                          </div>
                        )}
                        {op.precio.nino && (
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                            <span>Niño:</span>
                            <span style={{ fontWeight: 700, color: 'var(--primary)' }}>{op.precio.nino}</span>
                          </div>
                        )}
                        {op.precio.autos && (
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem' }}>
                            <span>Auto:</span>
                            <span style={{ fontWeight: 700, color: 'var(--primary)' }}>{op.precio.autos}</span>
                          </div>
                        )}
                        {op.precio.nota && (
                          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', margin: '0.5rem 0 0' }}>
                            ℹ️ {op.precio.nota}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {op.sitio && (
                    <a href={`https://${op.sitio}`} target="_blank" rel="noopener noreferrer" style={{
                      display: 'inline-block', marginTop: '0.5rem',
                      padding: '0.5rem 1rem', borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--primary-glow)', border: '1px solid var(--primary-border)',
                      color: 'var(--primary)', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600,
                    }}>
                      Sitio oficial
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Servicios a bordo */}
      {ferry.servicios && ferry.servicios.length > 0 && (
        <section style={{ padding: '2.5rem 1rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.35rem', marginBottom: '2rem' }}>Servicios a bordo</h2>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {ferry.servicios.map((s, i) => (
                <div key={i} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                  padding: '0.5rem 0.875rem', borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--primary-glow)', border: '1px solid var(--primary-border)',
                  fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 500,
                }}>
                  ✓ {s}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Transporte de autos */}
      {ferry.transporte_autos && (
        <section style={{ padding: '2.5rem 1rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.35rem', marginBottom: '2rem' }}>Transporte de vehículos</h2>
            <div className="card" style={{ padding: '1.5rem', backgroundColor: 'var(--surface)', border: '1px solid var(--border)' }}>
              {ferry.transporte_autos.disponible && (
                <div style={{ marginBottom: '1rem' }}>
                  <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)' }}>✓ Disponible</span>
                </div>
              )}
              {ferry.transporte_autos.capacidad && (
                <div style={{ marginBottom: '0.75rem' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Capacidad</div>
                  <div style={{ fontSize: '0.95rem', color: 'var(--text)' }}>
                    {ferry.transporte_autos.capacidad}
                  </div>
                </div>
              )}
              {ferry.transporte_autos.precio && (
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>Precio</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--primary)' }}>
                    {ferry.transporte_autos.precio}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Documentación */}
      {ferry.documentacion && ferry.documentacion.length > 0 && (
        <section style={{ padding: '2.5rem 1rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '1.35rem', marginBottom: '2rem' }}>Requisitos de documentación</h2>
            <div style={{
              padding: '1.5rem', borderRadius: 'var(--radius)',
              backgroundColor: 'var(--primary-glow)', border: '1px solid var(--primary-border)',
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {ferry.documentacion.map((doc, i) => (
                  <div key={i} style={{ fontSize: '0.9rem', color: 'var(--text)', display: 'flex', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--primary)', fontWeight: 700, flexShrink: 0 }}>•</span>
                    <span>{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Terminales */}
      <section style={{ padding: '2.5rem 1rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.35rem', marginBottom: '2rem' }}>Terminales</h2>

          {/* Origin terminals */}
          <div style={{ marginBottom: '2.5rem' }}>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary)' }}>
              Origen{originTerminals.length > 1 ? ' (múltiples)' : ''}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {originTerminals.map((term, i) => (
                <div key={i} className="card" style={{ padding: '1.5rem' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text)' }}>
                    {term.nombre}
                  </h4>
                  {term.direccion && (
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0 0 0.75rem' }}>
                      📍 {term.direccion}
                    </p>
                  )}
                  {term.ciudad && (
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0 0 0.75rem' }}>
                      Ciudad: {term.ciudad}
                    </p>
                  )}
                  {term.lat && term.lng && (
                    <a href={`https://maps.google.com/?q=${term.lat},${term.lng}`} target="_blank" rel="noopener noreferrer" style={{
                      display: 'inline-block', marginTop: '0.5rem',
                      padding: '0.4rem 0.75rem', borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--surface)', border: '1px solid var(--border)',
                      color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 500,
                    }}>
                      Ver en Google Maps
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Destination terminal */}
          <div>
            <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--primary)' }}>
              Destino
            </h3>
            <div className="card" style={{ padding: '1.5rem' }}>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text)' }}>
                {ferry.terminal.destino.nombre}
              </h4>
              {ferry.terminal.destino.direccion && (
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0 0 0.75rem' }}>
                  📍 {ferry.terminal.destino.direccion}
                </p>
              )}
              {ferry.terminal.destino.ciudad && (
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0 0 0.75rem' }}>
                  Ciudad: {ferry.terminal.destino.ciudad}
                </p>
              )}
              {ferry.terminal.destino.lat && ferry.terminal.destino.lng && (
                <a href={`https://maps.google.com/?q=${ferry.terminal.destino.lat},${ferry.terminal.destino.lng}`} target="_blank" rel="noopener noreferrer" style={{
                  display: 'inline-block', marginTop: '0.5rem',
                  padding: '0.4rem 0.75rem', borderRadius: 'var(--radius-sm)',
                  backgroundColor: 'var(--surface)', border: '1px solid var(--border)',
                  color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.8rem', fontWeight: 500,
                }}>
                  Ver en Google Maps
                </a>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Otros ferries */}
      <section style={{ padding: '2.5rem 1rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Otras rutas de ferries</h2>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {ferrys.filter(f => f.slug !== ferry.slug).slice(0, 8).map(f => (
              <a key={f.slug} href={`/ferries/${f.slug}/`} style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.5rem 0.875rem', borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--surface)', border: '1px solid var(--border)',
                textDecoration: 'none', fontSize: '0.8rem', fontWeight: 500, color: 'var(--text-muted)',
              }}>
                <span style={{ fontWeight: 700 }}>⛴️</span> {f.nombre}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
