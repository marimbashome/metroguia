
import { lineasGDL } from '@/data/gdl/lineas-detalle';
import { estacionesGDL } from '@/data/gdl/estaciones';
import Link from 'next/link';

export const metadata = {
  title: 'Metro Guadalajara — Guía Turística FIFA 2026 | MetroGuia',
  description: 'Guía completa del Tren Ligero de Guadalajara (SITEUR). Líneas 1, 2 y 3. Cómo llegar al Estadio Akron para el Mundial 2026. Estaciones, horarios y puntos turísticos.',
  openGraph: {
    title: 'Metro Guadalajara — Guía Turística FIFA 2026',
    description: 'Explora Guadalajara con el Tren Ligero. Acceso a Centro Histórico, Basílica de Zapopan y Estadio Akron.',
    url: 'https://metroguia.mx/gdl',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const estacionesDestacadas = estacionesGDL.filter(e =>
  ['juarez', 'arcos-de-zapopan', 'estadio-chivas', 'plaza-universidad', 'san-juan-de-dios'].includes(e.slug)
);

export default function GDLPage() {
  return (
    <main style={{ backgroundColor: '#ffffff' }}>
      {/* HERO */}
      <section
        style={{
          background: `linear-gradient(135deg, #06B6D4 0%, #0891b2 100%)`,
          color: '#ffffff',
          padding: '80px 24px',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            fontSize: '56px',
            fontFamily: 'Syne, sans-serif',
            fontWeight: '800',
            margin: '0 0 16px 0',
            lineHeight: '1.2',
          }}
        >
          Metro Guadalajara
        </h1>
        <p
          style={{
            fontSize: '24px',
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: '500',
            margin: '0 0 24px 0',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Explora Guadalajara con el Tren Ligero
        </p>
        <p
          style={{
            fontSize: '18px',
            fontFamily: 'DM Sans, sans-serif',
            margin: '0',
            opacity: '0.95',
          }}
        >
          3 líneas | 48 estaciones | Acceso al Estadio Akron — FIFA World Cup 2026
        </p>
      </section>

      {/* LÍNEAS */}
      <section style={{ padding: '80px 24px', maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto' }}>
        <h2
          style={{
            fontSize: '40px',
            fontFamily: 'Syne, sans-serif',
            fontWeight: '700',
            marginBottom: '48px',
            textAlign: 'center',
            color: '#1f2937',
          }}
        >
          Las 3 Líneas del SITEUR
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
          }}
        >
          {lineasGDL.map((linea) => (
            <Link href={`/gdl/linea/${linea.id}`} key={linea.id}>
              <div
                style={{
                  border: `4px solid ${linea.color}`,
                  borderRadius: '8px',
                  padding: '32px',
                  backgroundColor: '#f9fafb',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  textDecoration: 'none',
                  color: 'inherit',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: linea.color,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontSize: '28px',
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: '700',
                    marginBottom: '16px',
                  }}
                >
                  {linea.id}
                </div>
                <h3
                  style={{
                    fontSize: '22px',
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: '700',
                    margin: '0 0 8px 0',
                    color: linea.color,
                  }}
                >
                  Línea {linea.id} — {linea.colorNombre}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#6b7280',
                    margin: '0 0 16px 0',
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                >
                  {linea.inicio} → {linea.fin}
                </p>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#374151',
                    margin: '0 0 16px 0',
                    fontFamily: 'DM Sans, sans-serif',
                    lineHeight: '1.6',
                  }}
                >
                  {linea.descripcion}
                </p>
                <p
                  style={{
                    fontSize: '13px',
                    fontWeight: '600',
                    color: linea.color,
                    margin: '0',
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                >
                  {linea.total} estaciones
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* MUNDIAL 2026 */}
      <section
        style={{
          background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
          color: '#ffffff',
          padding: '80px 24px',
          marginTop: '80px',
        }}
      >
        <div style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2
            style={{
              fontSize: '40px',
              fontFamily: 'Syne, sans-serif',
              fontWeight: '700',
              marginBottom: '16px',
              textAlign: 'center',
            }}
          >
            ⚽ FIFA World Cup 2026 en Guadalajara
          </h2>
          <p
            style={{
              fontSize: '18px',
              fontFamily: 'DM Sans, sans-serif',
              textAlign: 'center',
              marginBottom: '48px',
              opacity: '0.95',
            }}
          >
            4 partidos en el Estadio Akron — Acceso fácil por Tren Ligero
          </p>

          <div
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              padding: '32px',
              marginBottom: '32px',
            }}
          >
            <h3
              style={{
                fontSize: '24px',
                fontFamily: 'Syne, sans-serif',
                fontWeight: '700',
                margin: '0 0 24px 0',
                textAlign: 'center',
              }}
            >
              Partidos Confirmados
            </h3>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '16px',
              }}
            >
              {[
                { fecha: 'Junio 11', partido: 'Corea del Sur vs. Playoff UEFA Grupo A' },
                { fecha: 'Junio 18', partido: 'México vs. Corea del Sur — Grupo A' },
                { fecha: 'Junio 23', partido: 'Colombia vs. Playoff Intercontinental — Grupo K' },
                { fecha: 'Junio 26', partido: 'Uruguay vs. España — Grupo H' },
              ].map((match, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.15)',
                    padding: '16px',
                    borderRadius: '4px',
                    borderLeft: '4px solid #ffffff',
                  }}
                >
                  <p
                    style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      margin: '0 0 8px 0',
                      opacity: '0.9',
                    }}
                  >
                    {match.fecha}
                  </p>
                  <p
                    style={{
                      fontSize: '16px',
                      fontWeight: '700',
                      margin: '0',
                    }}
                  >
                    {match.partido}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Link href="/gdl/mundial-2026" style={{ textDecoration: 'none' }}>
            <button
              style={{
                backgroundColor: '#ffffff',
                color: '#f59e0b',
                border: 'none',
                padding: '14px 32px',
                fontSize: '16px',
                fontFamily: 'Syne, sans-serif',
                fontWeight: '700',
                borderRadius: '4px',
                cursor: 'pointer',
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                transition: 'background-color 0.2s',
              }}
            >
              Ver Guía Completa FIFA 2026 →
            </button>
          </Link>
        </div>
      </section>

      {/* ESTACIONES DESTACADAS */}
      <section style={{ padding: '80px 24px', maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto' }}>
        <h2
          style={{
            fontSize: '40px',
            fontFamily: 'Syne, sans-serif',
            fontWeight: '700',
            marginBottom: '48px',
            textAlign: 'center',
            color: '#1f2937',
          }}
        >
          Estaciones Destacadas
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
          }}
        >
          {estacionesDestacadas.map((estacion) => (
            <Link href={`/gdl/estacion/${estacion.slug}`} key={estacion.slug}>
              <div
                style={{
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  padding: '24px',
                  backgroundColor: '#f9fafb',
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  textDecoration: 'none',
                  color: 'inherit',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: '12px',
                    gap: '8px',
                  }}
                >
                  <span
                    style={{
                      width: '32px',
                      height: '32px',
                      backgroundColor: estacion.linea === '1' ? '#E63946' : estacion.linea === '2' ? '#06B6D4' : '#F97316',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontSize: '18px',
                      fontFamily: 'Syne, sans-serif',
                      fontWeight: '700',
                    }}
                  >
                    {estacion.linea}
                  </span>
                  <span
                    style={{
                      fontSize: '12px',
                      color: '#6b7280',
                      fontFamily: 'DM Sans, sans-serif',
                    }}
                  >
                    {estacion.municipio}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: '20px',
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: '700',
                    margin: '0 0 8px 0',
                    color: '#1f2937',
                  }}
                >
                  {estacion.nombre}
                </h3>
                <p
                  style={{
                    fontSize: '14px',
                    color: '#6b7280',
                    margin: '0 0 16px 0',
                    fontFamily: 'DM Sans, sans-serif',
                    lineHeight: '1.6',
                    flex: 1,
                  }}
                >
                  {estacion.intro}
                </p>
                <p
                  style={{
                    fontSize: '12px',
                    color: '#9ca3af',
                    margin: '0',
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                >
                  {estacion.pois.length} punto(s) de interés
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          backgroundColor: '#f3f4f6',
          padding: '80px 24px',
          marginTop: '80px',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '36px',
            fontFamily: 'Syne, sans-serif',
            fontWeight: '700',
            margin: '0 0 16px 0',
            color: '#1f2937',
          }}
        >
          Planifica tu viaje a Guadalajara
        </h2>
        <p
          style={{
            fontSize: '18px',
            color: '#6b7280',
            margin: '0 0 32px 0',
            fontFamily: 'DM Sans, sans-serif',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          Explora todas las líneas, estaciones y puntos turísticos. Descubre cómo llegar al Estadio Akron para los partidos del Mundial 2026.
        </p>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/gdl/linea/1">
            <button
              style={{
                backgroundColor: '#06B6D4',
                color: '#ffffff',
                border: 'none',
                padding: '12px 24px',
                fontSize: '14px',
                fontFamily: 'Syne, sans-serif',
                fontWeight: '700',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Explorar Línea 1
            </button>
          </Link>
          <Link href="/gdl/linea/2">
            <button
              style={{
                backgroundColor: '#F97316',
                color: '#ffffff',
                border: 'none',
                padding: '12px 24px',
                fontSize: '14px',
                fontFamily: 'Syne, sans-serif',
                fontWeight: '700',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Explorar Línea 2
            </button>
          </Link>
          <Link href="/gdl/linea/3">
            <button
              style={{
                backgroundColor: '#EC4899',
                color: '#ffffff',
                border: 'none',
                padding: '12px 24px',
                fontSize: '14px',
                fontFamily: 'Syne, sans-serif',
                fontWeight: '700',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Explorar Línea 3
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}