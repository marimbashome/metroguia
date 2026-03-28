import { hospedaje } from '@/data/hospedaje'

export function generateMetadata() {
  return {
    title: 'Hospedaje cerca del Metro — Alojamiento para FIFA 2026 | MetroGuia',
    description: 'Alojamiento en CDMX, GDL y MTY cerca de estaciones de metro y estadios del Mundial 2026. Departamentos, casas y hoteles con acceso directo a transporte público y sedes del torneo.',
    keywords: 'hospedaje, alojamiento, hotel, apartamento, Airbnb, metro, mundial 2026, CDMX, Guadalajara, Monterrey, estadios',
    openGraph: {
      title: 'Hospedaje — Alojamiento cerca del Metro para FIFA 2026',
      description: 'Encuentra alojamiento con acceso al metro en las 3 sedes mexicanas del Mundial',
      type: 'website',
      url: 'https://metroguia.mx/hospedaje/',
    },
  }
}

export default function HospedajePage() {
  // Group by city
  const ciudades = {
    cdmx: hospedaje.filter(h => h.ciudad === 'cdmx'),
    gdl: hospedaje.filter(h => h.ciudad === 'gdl'),
    mty: hospedaje.filter(h => h.ciudad === 'mty'),
  }

  const cityColors = {
    cdmx: {
      bg: 'rgba(233, 30, 140, 0.05)',
      border: 'rgba(233, 30, 140, 0.3)',
      text: 'var(--cdmx)',
      label: 'Ciudad de México',
    },
    gdl: {
      bg: 'rgba(6, 182, 212, 0.05)',
      border: 'rgba(6, 182, 212, 0.3)',
      text: 'var(--gdl)',
      label: 'Guadalajara',
    },
    mty: {
      bg: 'rgba(236, 72, 153, 0.05)',
      border: 'rgba(236, 72, 153, 0.3)',
      text: 'var(--mty)',
      label: 'Monterrey',
    },
  }

  const tipoIcono = {
    'departamento': '🏢',
    'casa': '🏠',
    'habitacion': '🛏️',
    'hotel-boutique': '⭐',
    'estudio': '🛏️',
    'loft': '🏢',
    'zona-recomendada': '📍',
  }

  const tipoLabel = {
    'departamento': 'Departamento',
    'casa': 'Casa',
    'habitacion': 'Habitación',
    'hotel-boutique': 'Boutique',
    'estudio': 'Estudio',
    'loft': 'Loft',
    'zona-recomendada': 'Zona',
  }

  const renderListingCard = (listing) => (
    <div key={listing.id} className="card" style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      borderLeft: `4px solid ${cityColors[listing.ciudad].text}`,
      position: 'relative',
    }}>
      {/* Marimbas Home Badge */}
      {listing.es_marimbas && (
        <div style={{
          position: 'absolute',
          top: '-0.5rem',
          right: '1rem',
          backgroundColor: 'var(--primary)',
          color: '#000',
          fontSize: '0.625rem',
          fontWeight: 700,
          padding: '0.25rem 0.75rem',
          borderRadius: 'var(--radius-full)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        }}>
          Marimbas Home
        </div>
      )}

      {/* Header: Nombre + Tipo */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '1rem',
        justifyContent: 'space-between',
      }}>
        <div style={{ flex: 1 }}>
          <h4 style={{
            color: 'var(--text)',
            marginBottom: '0.25rem',
            fontSize: '1.125rem',
          }}>
            {listing.nombre}
          </h4>
          <p style={{
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            {listing.zona}
          </p>
        </div>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.25rem',
          backgroundColor: cityColors[listing.ciudad].bg,
          border: `1px solid ${cityColors[listing.ciudad].border}`,
          borderRadius: 'var(--radius)',
          padding: '0.5rem 0.75rem',
          fontSize: '0.75rem',
          color: cityColors[listing.ciudad].text,
          fontWeight: 600,
          whiteSpace: 'nowrap',
        }}>
          <span>{tipoIcono[listing.tipo] || '🏠'}</span>
          {tipoLabel[listing.tipo] || listing.tipo}
        </div>
      </div>

      {/* Metro + Distance */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '0.75rem',
        backgroundColor: 'var(--surface-hover)',
        borderRadius: 'var(--radius-sm)',
        fontSize: '0.875rem',
      }}>
        <div style={{ flex: 1 }}>
          <p style={{
            color: 'var(--text-muted)',
            marginBottom: '0.25rem',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            Estación cercana
          </p>
          <p style={{
            color: 'var(--primary)',
            fontWeight: 600,
          }}>
            {listing.estacion_cercana.replace(/-/g, ' ')}
          </p>
        </div>
        <div style={{
          textAlign: 'right',
          color: 'var(--text)',
          fontWeight: 600,
        }}>
          {listing.distancia_metro}
        </div>
      </div>

      {/* Amenidades */}
      <div>
        <p style={{
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          marginBottom: '0.5rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>
          Amenidades
        </p>
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap',
        }}>
          {listing.amenidades.slice(0, 3).map((amenidad, idx) => (
            <span key={idx} style={{
              fontSize: '0.75rem',
              backgroundColor: 'var(--surface-hover)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius-full)',
              padding: '0.375rem 0.75rem',
              color: 'var(--text-muted)',
            }}>
              {amenidad}
            </span>
          ))}
          {listing.amenidades.length > 3 && (
            <span style={{
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              padding: '0.375rem 0.75rem',
            }}>
              +{listing.amenidades.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Precio, Huéspedes, Recámaras */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: listing.recamaras ? '1fr 1fr 1fr' : '1fr 1fr',
        gap: '1rem',
        paddingTop: '0.75rem',
        borderTop: '1px solid var(--border)',
      }}>
        <div>
          <p style={{
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            marginBottom: '0.25rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            Precio/noche
          </p>
          <p style={{
            color: 'var(--primary)',
            fontWeight: 700,
            fontSize: '1.25rem',
          }}>
            ${listing.precio_noche.toLocaleString('es-MX')}
          </p>
        </div>
        <div>
          <p style={{
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            marginBottom: '0.25rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}>
            Huéspedes
          </p>
          <p style={{
            color: 'var(--text)',
            fontWeight: 700,
            fontSize: '1.25rem',
          }}>
            {listing.huespedes}
          </p>
        </div>
        {listing.recamaras && (
          <div>
            <p style={{
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              marginBottom: '0.25rem',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}>
              Recámaras
            </p>
            <p style={{
              color: 'var(--text)',
              fontWeight: 700,
              fontSize: '1.25rem',
            }}>
              {listing.recamaras}
            </p>
          </div>
        )}
      </div>

      {/* Mundial Relevancia */}
      <div style={{
        padding: '0.75rem',
        backgroundColor: 'var(--primary-glow)',
        border: '1px solid var(--primary-border)',
        borderRadius: 'var(--radius-sm)',
        fontSize: '0.875rem',
        color: 'var(--primary)',
      }}>
        <p style={{
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          marginBottom: '0.25rem',
          fontWeight: 600,
        }}>
          ⚽ Al Estadio del Mundial
        </p>
        {listing.mundial_relevancia}
      </div>

      {/* CTA Button */}
      <a href={listing.url_reserva} style={{
        display: 'inline-block',
        marginTop: 'auto',
        padding: '0.75rem 1.5rem',
        backgroundColor: 'var(--primary)',
        color: '#000',
        fontWeight: 600,
        borderRadius: 'var(--radius)',
        textDecoration: 'none',
        textAlign: 'center',
        fontSize: '0.875rem',
        transition: 'background-color 0.2s',
      }}
      >
        Reservar →
      </a>
    </div>
  )

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, var(--surface) 0%, rgba(245,166,35,0.05) 100%)',
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
            {' '}→ Hospedaje
          </p>
          <h1 style={{
            marginBottom: '0.5rem',
            background: 'linear-gradient(135deg, var(--text) 0%, var(--primary) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Hospedaje cerca del Metro
          </h1>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--text-muted)',
            marginBottom: '2rem',
            lineHeight: '1.6',
          }}>
            Encuentra alojamiento a pasos del transporte público en las sedes del Mundial FIFA 2026
          </p>

          {/* Stats */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
          }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--primary-glow)',
              border: '1px solid var(--primary-border)',
              borderRadius: 'var(--radius-full)',
              padding: '0.625rem 1.25rem',
              color: 'var(--primary)',
              fontSize: '0.875rem',
              fontWeight: 600,
            }}>
              <span style={{ fontSize: '1.25rem' }}>{hospedaje.length}</span> Alojamientos
            </div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(233, 30, 140, 0.15)',
              border: '1px solid rgba(233, 30, 140, 0.3)',
              borderRadius: 'var(--radius-full)',
              padding: '0.625rem 1.25rem',
              color: 'var(--cdmx)',
              fontSize: '0.875rem',
              fontWeight: 600,
            }}>
              <span style={{ fontSize: '1.25rem' }}>3</span> Ciudades
            </div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'var(--surface-hover)',
              border: '1px solid var(--border-light)',
              borderRadius: 'var(--radius-full)',
              padding: '0.625rem 1.25rem',
              color: 'var(--text)',
              fontSize: '0.875rem',
              fontWeight: 600,
            }}>
              <span style={{ fontSize: '1.25rem' }}>⭐</span> Verificados
            </div>
          </div>
        </div>
      </section>

      {/* Listings by City */}
      {Object.entries(ciudades).map(([ciudad, listings]) => (
        listings.length > 0 && (
          <section key={ciudad} style={{
            padding: '4rem 1rem',
            borderBottom: '1px solid var(--border)',
            background: ciudad === 'cdmx' ? 'rgba(233, 30, 140, 0.02)' : 
                        ciudad === 'gdl' ? 'rgba(6, 182, 212, 0.02)' :
                        'rgba(236, 72, 153, 0.02)',
          }}>
            <div className="container">
              {/* City Header */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '0.5rem',
              }}>
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  borderRadius: 'var(--radius)',
                  background: cityColors[ciudad].bg,
                  border: `2px solid ${cityColors[ciudad].text}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.75rem',
                }}>
                  {ciudad === 'cdmx' ? '🏛️' : ciudad === 'gdl' ? '🎭' : '🌟'}
                </div>
                <div>
                  <h2 style={{ color: cityColors[ciudad].text, marginBottom: '0.25rem' }}>
                    {cityColors[ciudad].label}
                  </h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                    {listings.length} alojamientos disponibles
                  </p>
                </div>
              </div>

              {/* Listings Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
                gap: '1.5rem',
                marginTop: '2rem',
              }}>
                {listings.map((listing) => renderListingCard(listing))}
              </div>
            </div>
          </section>
        )
      ))}

      {/* Benefits Section */}
      <section style={{
        padding: '4rem 1rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container">
          <h2 style={{ marginBottom: '0.5rem', textAlign: 'center' }}>
            ¿Por qué hospedarte cerca del metro?
          </h2>
          <p style={{
            color: 'var(--text-muted)',
            marginBottom: '2rem',
            fontSize: '0.95rem',
            textAlign: 'center',
          }}>
            Acceso fácil, rápido y seguro durante el Mundial FIFA 2026
          </p>

          <div className="grid-3">
            {/* Card 1: Ahorro */}
            <div className="card">
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '3rem',
                height: '3rem',
                backgroundColor: 'var(--primary-glow)',
                borderRadius: 'var(--radius)',
                marginBottom: '1rem',
                fontSize: '1.5rem',
              }}>
                💰
              </div>
              <h4 style={{ marginBottom: '0.75rem' }}>Ahorro en transporte</h4>
              <p style={{
                fontSize: '0.875rem',
                color: 'var(--text-muted)',
                lineHeight: '1.5',
              }}>
                Tarjeta de Metro única: acceso ilimitado a CDMX, GDL y MTY. Desde $8 MXN por viaje.
              </p>
            </div>

            {/* Card 2: Tiempo */}
            <div className="card">
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '3rem',
                height: '3rem',
                backgroundColor: 'rgba(233, 30, 140, 0.15)',
                borderRadius: 'var(--radius)',
                marginBottom: '1rem',
                fontSize: '1.5rem',
              }}>
                ⏱️
              </div>
              <h4 style={{ marginBottom: '0.75rem' }}>30-50 min a los estadios</h4>
              <p style={{
                fontSize: '0.875rem',
                color: 'var(--text-muted)',
                lineHeight: '1.5',
              }}>
                Conexión directa desde el centro histórico a Azteca, Akron y BBVA. Sin tráfico, sin estrés.
              </p>
            </div>

            {/* Card 3: Seguridad */}
            <div className="card">
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '3rem',
                height: '3rem',
                backgroundColor: 'var(--surface-hover)',
                borderRadius: 'var(--radius)',
                marginBottom: '1rem',
                fontSize: '1.5rem',
              }}>
                🛡️
              </div>
              <h4 style={{ marginBottom: '0.75rem' }}>Transporte seguro</h4>
              <p style={{
                fontSize: '0.875rem',
                color: 'var(--text-muted)',
                lineHeight: '1.5',
              }}>
                Metros con cámaras, vigilancia 24/7. Ideal para viajeros sin necesidad de Uber/taxi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section — Booking */}
      <section style={{
        padding: '4rem 1rem',
        background: 'linear-gradient(135deg, rgba(245,166,35,0.05) 0%, var(--surface) 100%)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container">
          <div style={{
            textAlign: 'center',
            maxWidth: '600px',
            margin: '0 auto',
          }}>
            <h2 style={{ marginBottom: '1rem' }}>Listo para viajar al Mundial?</h2>
            <p style={{
              color: 'var(--text-muted)',
              marginBottom: '2rem',
              lineHeight: '1.6',
            }}>
              Reserva tu alojamiento hoy y asegura tu lugar en las sedes del Mundial FIFA 2026. Todas las opciones ofrecen acceso garantizado al transporte público.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}>
              <a href="/mundial-2026/" className="btn-primary" style={{
                display: 'inline-block',
                padding: '0.875rem 2rem',
              }}>
                Ver fechas del Mundial →
              </a>
              <a href="/cdmx/" className="btn-secondary" style={{
                display: 'inline-block',
                padding: '0.875rem 2rem',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                color: 'var(--text)',
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'all 0.2s',
              }}
              >
                Explorar Metro CDMX →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Hospedaje cerca del Metro — MetroGuia',
            description: 'Alojamiento en CDMX, GDL y MTY cerca de estaciones de metro para el Mundial FIFA 2026',
            url: 'https://metroguia.mx/hospedaje',
            provider: {
              '@type': 'Organization',
              name: 'MetroGuia',
              url: 'https://metroguia.mx',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'STR Listings',
              itemListElement: hospedaje.map((h) => ({
                '@type': 'LodgingBusiness',
                name: h.nombre,
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: h.zona,
                  addressLocality: h.ciudad.toUpperCase(),
                  addressCountry: 'MX',
                },
                priceRange: `MXN ${h.precio_noche}`,
              })),
            },
          }),
        }}
      />
    </div>
  )
}
