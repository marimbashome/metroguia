import { hospedaje, marimbasListings, totalReviews, avgRating, precioDesde, maxHuespedes } from '@/data/hospedaje'
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';
import BookingWidget from '@/app/components/BookingWidget';
import ViatorToursWidget from '@/app/components/ViatorToursWidget';

export function generateMetadata() {
  return {
    title: 'Hospedaje en La Condesa cerca del Metro — FIFA 2026 | MetroGuia',
    description: `7 departamentos verificados en La Condesa, CDMX. Desde $${precioDesde} MXN/noche, ${totalReviews}+ reseñas, ${avgRating}★ promedio. A 5 min del Metro Chilpancingo (L9) y 50 min del Estadio Azteca.`,
    keywords: 'hospedaje condesa, airbnb condesa cdmx, departamento mundial 2026, hospedaje cerca metro, alojamiento FIFA 2026 CDMX, estadio azteca hospedaje',
    openGraph: {
      title: 'Hospedaje en La Condesa — 7 Departamentos cerca del Metro',
      description: `Desde $${precioDesde} MXN/noche. ${avgRating}★ promedio en Airbnb. 5 min Metro Chilpancingo, 50 min Estadio Azteca.`,
      type: 'website',
      url: 'https://metroguia.mx/hospedaje/',
    },
  }
}

export default function HospedajePage() {
  const ciudades = {
    cdmx: hospedaje.filter(h => h.ciudad === 'cdmx'),
    gdl: hospedaje.filter(h => h.ciudad === 'gdl'),
    mty: hospedaje.filter(h => h.ciudad === 'mty'),
  }

  const cityColors = {
    cdmx: { bg: 'rgba(233, 30, 140, 0.05)', border: 'rgba(233, 30, 140, 0.3)', text: 'var(--cdmx)', label: 'Ciudad de México' },
    gdl: { bg: 'rgba(6, 182, 212, 0.05)', border: 'rgba(6, 182, 212, 0.3)', text: 'var(--gdl)', label: 'Guadalajara' },
    mty: { bg: 'rgba(236, 72, 153, 0.05)', border: 'rgba(236, 72, 153, 0.3)', text: 'var(--mty)', label: 'Monterrey' },
  }

  const tipoIcono = { 'departamento': '🏢', 'casa': '🏠', 'habitacion': '🛏️', 'hotel-boutique': '⭐', 'estudio': '🛏️', 'loft': '🏢', 'zona-recomendada': '📍' }
  const tipoLabel = { 'departamento': 'Depto', 'casa': 'Casa', 'habitacion': 'Habitación', 'hotel-boutique': 'Boutique', 'estudio': 'Estudio', 'loft': 'Loft', 'zona-recomendada': 'Zona' }

  // Sort: cheapest first for Marimbas, then zones
  const cdmxSorted = [...ciudades.cdmx].sort((a, b) => {
    if (a.es_marimbas && !b.es_marimbas) return -1
    if (!a.es_marimbas && b.es_marimbas) return 1
    return a.precio_noche - b.precio_noche
  })

  const renderStars = (rating) => {
    if (!rating) return null
    const full = Math.floor(rating)
    const half = rating % 1 >= 0.5
    return (
      <span style={{ color: '#FBBF24', fontSize: '0.875rem', letterSpacing: '0.05em' }}>
        {'★'.repeat(full)}{half ? '½' : ''}
      </span>
    )
  }

  const renderListingCard = (listing) => (
    <div key={listing.id} className="card" style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.875rem',
      borderLeft: listing.es_marimbas ? '4px solid var(--primary)' : `4px solid ${cityColors[listing.ciudad].text}`,
      position: 'relative',
      transition: 'transform 0.2s, box-shadow 0.2s',
    }}>
      {/* Marimbas Badge */}
      {listing.es_marimbas && (
        <div style={{
          position: 'absolute',
          top: '-0.5rem',
          right: '1rem',
          backgroundColor: 'var(--primary)',
          color: '#000',
          fontSize: '0.6rem',
          fontWeight: 700,
          padding: '0.2rem 0.625rem',
          borderRadius: 'var(--radius-full)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
        }}>
          Marimbas Home
        </div>
      )}

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', justifyContent: 'space-between' }}>
        <div style={{ flex: 1 }}>
          <h4 style={{ color: 'var(--text)', marginBottom: '0.25rem', fontSize: '1.05rem', lineHeight: 1.3 }}>
            {listing.nombre}
          </h4>
          <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {listing.zona}
          </p>
        </div>
        <div style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem',
          backgroundColor: listing.es_marimbas ? 'var(--primary-glow)' : cityColors[listing.ciudad].bg,
          border: `1px solid ${listing.es_marimbas ? 'var(--primary-border)' : cityColors[listing.ciudad].border}`,
          borderRadius: 'var(--radius)', padding: '0.4rem 0.625rem', fontSize: '0.7rem',
          color: listing.es_marimbas ? 'var(--primary)' : cityColors[listing.ciudad].text,
          fontWeight: 600, whiteSpace: 'nowrap',
        }}>
          <span>{tipoIcono[listing.tipo] || '🏠'}</span>
          {tipoLabel[listing.tipo] || listing.tipo}
        </div>
      </div>

      {/* Rating + Reviews — social proof */}
      {listing.rating && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.75rem',
          padding: '0.5rem 0.75rem',
          background: 'linear-gradient(135deg, rgba(251,191,36,0.08) 0%, rgba(251,191,36,0.02) 100%)',
          borderRadius: 'var(--radius-sm)',
          border: '1px solid rgba(251,191,36,0.15)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
            {renderStars(listing.rating)}
            <span style={{ color: 'var(--text)', fontWeight: 700, fontSize: '1rem' }}>{listing.rating}</span>
          </div>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            {listing.reviews} reseñas en Airbnb
          </span>
          {listing.rating >= 4.9 && (
            <span style={{
              marginLeft: 'auto', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase',
              color: '#22C55E', letterSpacing: '0.05em',
            }}>
              Top Rated
            </span>
          )}
        </div>
      )}

      {/* Quick specs */}
      {listing.es_marimbas && (
        <div style={{
          display: 'flex', gap: '0.5rem', flexWrap: 'wrap',
        }}>
          {listing.metros_cuadrados && (
            <span style={{
              fontSize: '0.7rem', backgroundColor: 'var(--surface-hover)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-full)', padding: '0.3rem 0.6rem', color: 'var(--text-muted)',
            }}>
              {listing.metros_cuadrados} m²
            </span>
          )}
          <span style={{
            fontSize: '0.7rem', backgroundColor: 'var(--surface-hover)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius-full)', padding: '0.3rem 0.6rem', color: 'var(--text-muted)',
          }}>
            {listing.recamaras} rec · {listing.banos} baño{listing.banos > 1 ? 's' : ''}
          </span>
          <span style={{
            fontSize: '0.7rem', backgroundColor: 'var(--surface-hover)', border: '1px solid var(--border)',
            borderRadius: 'var(--radius-full)', padding: '0.3rem 0.6rem', color: 'var(--text-muted)',
          }}>
            Hasta {listing.huespedes} huéspedes
          </span>
        </div>
      )}

      {/* Description */}
      {listing.es_marimbas && listing.descripcion && (
        <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
          {listing.descripcion}
        </p>
      )}

      {/* Metro + Stadium */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem',
      }}>
        <div style={{
          padding: '0.625rem', backgroundColor: 'var(--surface-hover)', borderRadius: 'var(--radius-sm)',
        }}>
          <p style={{ fontSize: '0.6rem', color: 'var(--text-muted)', marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Metro cercano
          </p>
          <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.825rem' }}>
            {listing.estacion_cercana.replace(/-/g, ' ')}
            <span style={{ color: 'var(--text-muted)', fontWeight: 400, fontSize: '0.7rem' }}> · L{listing.linea_metro}</span>
          </p>
          <p style={{ color: 'var(--text-dim)', fontSize: '0.7rem' }}>{listing.distancia_metro}</p>
        </div>
        <div style={{
          padding: '0.625rem', backgroundColor: 'var(--primary-glow)', borderRadius: 'var(--radius-sm)',
          border: '1px solid var(--primary-border)',
        }}>
          <p style={{ fontSize: '0.6rem', color: 'var(--primary)', marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600 }}>
            ⚽ Al Estadio
          </p>
          <p style={{ color: 'var(--primary)', fontSize: '0.8rem', lineHeight: 1.4 }}>
            {listing.mundial_relevancia}
          </p>
        </div>
      </div>

      {/* Amenidades */}
      {listing.es_marimbas && (
        <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
          {listing.amenidades.slice(0, 5).map((amenidad, idx) => (
            <span key={idx} style={{
              fontSize: '0.65rem', backgroundColor: 'var(--surface-hover)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-full)', padding: '0.25rem 0.5rem', color: 'var(--text-muted)',
            }}>
              {amenidad}
            </span>
          ))}
          {listing.amenidades.length > 5 && (
            <span style={{ fontSize: '0.65rem', color: 'var(--text-dim)', padding: '0.25rem 0.375rem' }}>
              +{listing.amenidades.length - 5} más
            </span>
          )}
        </div>
      )}

      {/* Price + CTA */}
      <div style={{
        display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1rem',
        paddingTop: '0.75rem', borderTop: '1px solid var(--border)', marginTop: 'auto',
      }}>
        <div>
          <p style={{ fontSize: '0.6rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.125rem' }}>
            {listing.es_marimbas ? 'Desde' : 'Precio promedio'}
          </p>
          <p style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '1.5rem', lineHeight: 1 }}>
            ${listing.precio_noche.toLocaleString('es-MX')}
            <span style={{ fontSize: '0.75rem', fontWeight: 400, color: 'var(--text-muted)' }}> MXN/noche</span>
          </p>
          {listing.es_marimbas && listing.limpieza && (
            <p style={{ fontSize: '0.65rem', color: 'var(--text-dim)', marginTop: '0.125rem' }}>
              + ${listing.limpieza.toLocaleString('es-MX')} limpieza
            </p>
          )}
        </div>
        <a href={listing.url_reserva} target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.375rem',
          padding: '0.625rem 1.25rem',
          backgroundColor: listing.es_marimbas ? 'var(--primary)' : 'var(--surface-hover)',
          color: listing.es_marimbas ? '#000' : 'var(--text)',
          fontWeight: 600, borderRadius: 'var(--radius)', textDecoration: 'none',
          fontSize: '0.8rem', transition: 'all 0.2s',
          border: listing.es_marimbas ? 'none' : '1px solid var(--border)',
          whiteSpace: 'nowrap',
        }}>
          {listing.es_marimbas ? 'Reservar' : 'Ver opciones'} →
        </a>
      </div>
    </div>
  )

  return (
    <div>
      {/* Hero — Conversion focused */}
      <section style={{
        background: 'linear-gradient(135deg, var(--surface) 0%, rgba(245,166,35,0.08) 50%, var(--surface) 100%)',
        paddingTop: '5rem', paddingBottom: '3.5rem',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container">
          <p style={{
            fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '1rem',
            letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600,
          }}>
            <a href="/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>MetroGuia</a> → Hospedaje
          </p>

          <h1 style={{
            marginBottom: '0.75rem', fontSize: '2.25rem',
            background: 'linear-gradient(135deg, var(--text) 0%, var(--primary) 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Hospedaje en La Condesa
          </h1>
          <p style={{
            fontSize: '1.125rem', color: 'var(--text)', marginBottom: '0.5rem', lineHeight: 1.5, fontWeight: 500,
          }}>
            A 5 min del Metro y 50 min del Estadio Azteca
          </p>
          <p style={{
            fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.6, maxWidth: '600px',
          }}>
            7 departamentos verificados en el barrio más vibrante de CDMX. WiFi 800 Mbps, cocina completa, y acceso directo al transporte público para el Mundial FIFA 2026.
          </p>

          {/* Trust badges — social proof row */}
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(251,191,36,0.1)', border: '1px solid rgba(251,191,36,0.25)',
              borderRadius: 'var(--radius-full)', padding: '0.5rem 1rem',
              color: '#FBBF24', fontSize: '0.8rem', fontWeight: 600,
            }}>
              ★ {avgRating} promedio
              <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>· {totalReviews} reseñas</span>
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'var(--primary-glow)', border: '1px solid var(--primary-border)',
              borderRadius: 'var(--radius-full)', padding: '0.5rem 1rem',
              color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 600,
            }}>
              Desde ${precioDesde.toLocaleString('es-MX')} MXN/noche
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.25)',
              borderRadius: 'var(--radius-full)', padding: '0.5rem 1rem',
              color: '#22C55E', fontSize: '0.8rem', fontWeight: 600,
            }}>
              Hasta {maxHuespedes} huéspedes
            </div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: 'var(--surface-hover)', border: '1px solid var(--border)',
              borderRadius: 'var(--radius-full)', padding: '0.5rem 1rem',
              color: 'var(--text)', fontSize: '0.8rem', fontWeight: 600,
            }}>
              🏟️ 50 min al Azteca
            </div>
          </div>

          {/* Urgency — Mundial countdown */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
            padding: '0.75rem 1.25rem',
            background: 'linear-gradient(135deg, rgba(239,68,68,0.08) 0%, rgba(245,166,35,0.08) 100%)',
            border: '1px solid rgba(239,68,68,0.2)',
            borderRadius: 'var(--radius)',
            fontSize: '0.8rem',
          }}>
            <span style={{ fontSize: '1.25rem' }}>⚽</span>
            <span style={{ color: 'var(--text)' }}>
              <strong style={{ color: '#EF4444' }}>Mundial FIFA 2026 en CDMX:</strong>{' '}
              11 jun — 5 jul. Los mejores departamentos se reservan primero.
            </span>
          </div>
        </div>
      </section>

      {/* CDMX Marimbas — Primary conversion section */}
      <section style={{
        padding: '3.5rem 1rem',
        borderBottom: '1px solid var(--border)',
        background: 'rgba(245,166,35,0.02)',
      }}>
        <div className="container">
          <div style={{
            display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem',
          }}>
            <div style={{
              width: '3.5rem', height: '3.5rem', borderRadius: 'var(--radius)',
              background: 'var(--primary-glow)', border: '2px solid var(--primary)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem',
            }}>
              🏛️
            </div>
            <div>
              <h2 style={{ color: 'var(--text)', marginBottom: '0.125rem', fontSize: '1.5rem' }}>
                La Condesa, Ciudad de México
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.825rem' }}>
                7 departamentos verificados · Metro Chilpancingo L9 · Barrio más seguro y vibrante
              </p>
            </div>
          </div>

          {/* Value prop strip */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '0.75rem',
            margin: '1.5rem 0 2rem',
          }}>
            {[
              { icon: '🚇', label: 'Metro L9', detail: '4-6 min caminando' },
              { icon: '⚽', label: 'Estadio Azteca', detail: '50 min en metro' },
              { icon: '📶', label: 'WiFi', detail: '800 Mbps simétrico' },
              { icon: '🍳', label: 'Cocina completa', detail: 'Ahorra en comida' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: '0.625rem',
                padding: '0.75rem', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--border)',
              }}>
                <span style={{ fontSize: '1.25rem' }}>{item.icon}</span>
                <div>
                  <p style={{ color: 'var(--text)', fontSize: '0.8rem', fontWeight: 600 }}>{item.label}</p>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.7rem' }}>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Listings Grid */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem',
          }}>
            {cdmxSorted.map((listing) => renderListingCard(listing))}
          </div>
        </div>
      </section>

      {/* GDL + MTY — Secondary sections */}
      {['gdl', 'mty'].map(ciudad => {
        const listings = ciudades[ciudad]
        if (!listings || listings.length === 0) return null
        return (
          <section key={ciudad} style={{
            padding: '3rem 1rem', borderBottom: '1px solid var(--border)',
            background: ciudad === 'gdl' ? 'rgba(6, 182, 212, 0.02)' : 'rgba(236, 72, 153, 0.02)',
          }}>
            <div className="container">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '3.5rem', height: '3.5rem', borderRadius: 'var(--radius)',
                  background: cityColors[ciudad].bg, border: `2px solid ${cityColors[ciudad].text}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem',
                }}>
                  {ciudad === 'gdl' ? '🎭' : '🌟'}
                </div>
                <div>
                  <h2 style={{ color: cityColors[ciudad].text, marginBottom: '0.125rem', fontSize: '1.5rem' }}>
                    {cityColors[ciudad].label}
                  </h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.825rem' }}>
                    {listings.length} zonas recomendadas cerca del {ciudad === 'gdl' ? 'Estadio Akron' : 'Estadio BBVA'}
                  </p>
                </div>
              </div>

              <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem',
              }}>
                {listings.map((listing) => renderListingCard(listing))}
              </div>
            </div>
          </section>
        )
      })}

      {/* Benefits — Why stay near the Metro */}
      <section style={{ padding: '3.5rem 1rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <h2 style={{ marginBottom: '0.5rem', textAlign: 'center', fontSize: '1.5rem' }}>
            ¿Por qué hospedarte cerca del Metro?
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.9rem', textAlign: 'center' }}>
            Acceso fácil, rápido y seguro durante el Mundial FIFA 2026
          </p>

          <div className="grid-3">
            <div className="card">
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '3rem', height: '3rem', backgroundColor: 'var(--primary-glow)',
                borderRadius: 'var(--radius)', marginBottom: '1rem', fontSize: '1.5rem',
              }}>💰</div>
              <h4 style={{ marginBottom: '0.5rem' }}>Ahorro real</h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                Tarjeta Metro: $8 MXN por viaje vs $200+ en Uber/taxi al estadio. En 5 días de Mundial ahorras $2,000+ MXN.
              </p>
            </div>
            <div className="card">
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '3rem', height: '3rem', backgroundColor: 'rgba(233, 30, 140, 0.15)',
                borderRadius: 'var(--radius)', marginBottom: '1rem', fontSize: '1.5rem',
              }}>⏱️</div>
              <h4 style={{ marginBottom: '0.5rem' }}>50 min al Azteca</h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                Metro L9 → L2 Tasqueña → Tren Ligero al Estadio. Sin tráfico, sin surge pricing. Ruta directa desde La Condesa.
              </p>
            </div>
            <div className="card">
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '3rem', height: '3rem', backgroundColor: 'var(--surface-hover)',
                borderRadius: 'var(--radius)', marginBottom: '1rem', fontSize: '1.5rem',
              }}>🛡️</div>
              <h4 style={{ marginBottom: '0.5rem' }}>Barrio seguro</h4>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                La Condesa es consistentemente uno de los barrios más seguros de CDMX. Caminable 24/7, lleno de restaurantes, cafés y parques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Widgets — Tours & Alternative Booking */}
      <section style={{ padding: '3rem 1rem', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}>
            <BookingWidget ciudad="CDMX" estacion="Chilpancingo" />
            <ViatorToursWidget ciudad="CDMX" zona="La Condesa" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        padding: '4rem 1rem',
        background: 'linear-gradient(135deg, rgba(245,166,35,0.06) 0%, var(--surface) 100%)',
        borderBottom: '1px solid var(--border)',
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '0.75rem', fontSize: '1.75rem' }}>
              Asegura tu lugar para el Mundial
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6, fontSize: '0.95rem' }}>
              {totalReviews}+ reseñas verificadas, {avgRating}★ promedio. Departamentos desde ${precioDesde.toLocaleString('es-MX')} MXN/noche en el mejor barrio de CDMX, a minutos del Metro.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/mundial-2026/" style={{
                display: 'inline-block', padding: '0.875rem 2rem',
                backgroundColor: 'var(--primary)', color: '#000', fontWeight: 600,
                borderRadius: 'var(--radius)', textDecoration: 'none', fontSize: '0.875rem',
              }}>
                Ver fechas del Mundial →
              </a>
              <a href="/ruta/condesa-a-estadio-azteca" style={{
                display: 'inline-block', padding: '0.875rem 2rem',
                border: '1px solid var(--border)', borderRadius: 'var(--radius)',
                color: 'var(--text)', textDecoration: 'none', fontWeight: 600, fontSize: '0.875rem',
              }}>
                Ruta al Estadio Azteca →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Schema.org — LodgingBusiness for each Marimbas listing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Hospedaje en La Condesa cerca del Metro — MetroGuia',
            description: `7 departamentos verificados en La Condesa, CDMX. ${avgRating}★ promedio, ${totalReviews}+ reseñas. A 5 min del Metro Chilpancingo.`,
            url: 'https://metroguia.mx/hospedaje',
            provider: {
              '@type': 'Organization',
              name: 'Marimbas Home',
              url: 'https://marimbashome.com',
            },
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Departamentos en La Condesa',
              itemListElement: marimbasListings.map((h) => ({
                '@type': 'LodgingBusiness',
                name: h.nombre,
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: h.direccion || h.zona,
                  addressLocality: 'Ciudad de México',
                  addressRegion: 'CDMX',
                  addressCountry: 'MX',
                },
                geo: h.coordenadas ? {
                  '@type': 'GeoCoordinates',
                  latitude: h.coordenadas.lat,
                  longitude: h.coordenadas.lng,
                } : undefined,
                priceRange: `MXN ${h.precio_noche}`,
                aggregateRating: h.rating ? {
                  '@type': 'AggregateRating',
                  ratingValue: h.rating,
                  reviewCount: h.reviews,
                  bestRating: 5,
                } : undefined,
                numberOfRooms: h.recamaras,
                amenityFeature: h.amenidades.map(a => ({
                  '@type': 'LocationFeatureSpecification',
                  name: a,
                  value: true,
                })),
              })),
            },
          }),
        }}
      />
    </div>
  )
}
