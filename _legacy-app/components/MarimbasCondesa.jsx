'use client';

import { marimbasListings, totalReviews, avgRating, precioDesde } from '@/data/hospedaje';

/**
 * MarimbasCondesa — CTA for Marimbas Home properties in La Condesa
 * Highlights proximity to Chilpancingo L9 metro station
 * Direct link to /hospedaje/ and book.marimbashome.com
 */
export default function MarimbasCondesa({ compact = false }) {
  if (compact) {
    return (
      <a
        href="/hospedaje/"
        style={{
          display: 'block',
          background: 'linear-gradient(135deg, rgba(245, 166, 35, 0.1) 0%, rgba(245, 166, 35, 0.03) 100%)',
          border: '1px solid var(--primary-border)',
          borderRadius: 'var(--radius-lg)',
          padding: '1rem 1.25rem',
          margin: '1.5rem 0',
          textDecoration: 'none',
          transition: 'border-color 0.2s',
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
        }}>
          <div style={{
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: 'var(--radius)',
            backgroundColor: 'rgba(245, 166, 35, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.1rem',
            flexShrink: 0,
          }}>
            🏠
          </div>
          <div style={{ flex: 1 }}>
            <div style={{
              fontSize: '0.875rem',
              fontWeight: 700,
              color: 'var(--text)',
              lineHeight: 1.3,
            }}>
              Departamentos en La Condesa
            </div>
            <div style={{
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              marginTop: '0.15rem',
            }}>
              5 min de Chilpancingo (L9) · Desde ${precioDesde} MXN/noche
            </div>
          </div>
          <span style={{
            color: 'var(--primary)',
            fontWeight: 700,
            fontSize: '0.85rem',
          }}>→</span>
        </div>
      </a>
    );
  }

  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(245, 166, 35, 0.08) 0%, rgba(201, 169, 110, 0.04) 100%)',
      border: '1px solid var(--primary-border)',
      borderRadius: 'var(--radius-lg)',
      padding: '1.5rem',
      margin: '2rem 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '-15px',
        right: '-15px',
        fontSize: '4rem',
        opacity: 0.05,
        lineHeight: 1,
      }}>🏠</div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginBottom: '0.75rem',
        flexWrap: 'wrap',
      }}>
        <span style={{
          fontSize: '0.7rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          color: 'var(--primary)',
          backgroundColor: 'rgba(245, 166, 35, 0.12)',
          padding: '0.2rem 0.5rem',
          borderRadius: '4px',
        }}>
          Marimbas Home
        </span>
        <span style={{
          fontSize: '0.7rem',
          fontWeight: 700,
          color: '#6B4EA8',
          backgroundColor: 'rgba(107, 78, 168, 0.08)',
          padding: '0.2rem 0.5rem',
          borderRadius: '4px',
        }}>
          Línea 9
        </span>
      </div>

      <h3 style={{
        fontSize: '1.15rem',
        fontWeight: 700,
        color: 'var(--text)',
        marginBottom: '0.5rem',
        lineHeight: 1.3,
      }}>
        Departamentos en La Condesa, a 5 min del metro
      </h3>

      <p style={{
        fontSize: '0.875rem',
        color: 'var(--text-muted)',
        marginBottom: '1rem',
        lineHeight: 1.6,
      }}>
        {marimbasListings.length} departamentos verificados a pasos de la estación
        Chilpancingo (L9). WiFi 800 Mbps, cocina completa y check-in flexible.
        A 50 min del Estadio Azteca por metro.
      </p>

      {/* Stats row */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '1.25rem',
        flexWrap: 'wrap',
      }}>
        <div style={{
          padding: '0.5rem 0.75rem',
          backgroundColor: 'var(--bg)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          fontSize: '0.8rem',
        }}>
          <span style={{ fontWeight: 700, color: 'var(--primary)' }}>★ {typeof avgRating === 'number' ? avgRating.toFixed(1) : avgRating}</span>
          <span style={{ color: 'var(--text-dim)', marginLeft: '0.3rem' }}>({totalReviews} reseñas)</span>
        </div>
        <div style={{
          padding: '0.5rem 0.75rem',
          backgroundColor: 'var(--bg)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
        }}>
          Desde <strong style={{ color: 'var(--text)' }}>${precioDesde} MXN</strong>/noche
        </div>
        <div style={{
          padding: '0.5rem 0.75rem',
          backgroundColor: 'var(--bg)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
        }}>
          🚇 5 min → Chilpancingo (L9)
        </div>
      </div>

      <div style={{
        display: 'flex',
        gap: '0.75rem',
        flexWrap: 'wrap',
      }}>
        <a
          href="/hospedaje/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.25rem',
            backgroundColor: 'var(--primary)',
            color: '#000',
            borderRadius: 'var(--radius)',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '0.875rem',
          }}
        >
          Ver departamentos →
        </a>
        <a
          href="https://book.marimbashome.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.75rem 1.25rem',
            backgroundColor: 'var(--surface)',
            color: 'var(--primary)',
            border: '1px solid var(--primary-border)',
            borderRadius: 'var(--radius)',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '0.875rem',
          }}
        >
          Reservar directo →
        </a>
      </div>
    </div>
  );
}
