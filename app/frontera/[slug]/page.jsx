import { crucesFronterizos } from '@/data/cruces-fronterizos';
import Image from 'next/image';
import Link from 'next/link';

export const dynamicParams = false;

export async function generateStaticParams() {
  return crucesFronterizos.map((cruce) => ({
    slug: cruce.slug,
  }));
}

export async function generateMetadata({ params }) {
  const cruce = crucesFronterizos.find((c) => c.slug === params.slug);

  if (!cruce) {
    return {
      title: 'Cruce Fronterizo no encontrado',
      description: 'El cruce fronterizo que buscas no existe.',
    };
  }

  const baseUrl = 'https://metroguia.mx';
  const canonicalUrl = `${baseUrl}/frontera/${cruce.slug}`;

  return {
    title: cruce.seo_title || `${cruce.nombre} - MetroGuia.mx`,
    description: cruce.meta_description || `Información sobre ${cruce.nombre}: horarios, documentación, esperas típicas, y servicios.`,
    canonical: canonicalUrl,
    openGraph: {
      title: cruce.seo_title || cruce.nombre,
      description: cruce.meta_description || `Cruces y puentes en ${cruce.nombre}`,
      url: canonicalUrl,
      type: 'website',
      locale: 'es_MX',
      siteName: 'MetroGuia.mx',
    },
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

export default function FronteraCrucePage({ params }) {
  const cruce = crucesFronterizos.find((c) => c.slug === params.slug);

  if (!cruce) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center', color: 'var(--text)' }}>
        <h1>Cruce fronterizo no encontrado</h1>
        <Link href="/frontera">Volver a Cruces Fronterizos</Link>
      </div>
    );
  }

  const foreignCity = cruce.ciudad_usa || cruce.ciudad_guatemala || cruce.ciudad_belice;
  const crossing = cruce.puentes && cruce.puentes.length > 0 ? cruce.puentes : cruce.cruces_peatonales || [];
  const countryColor = {
    'Estados Unidos': '#1e90ff',
    'Guatemala': '#4ecdc4',
    'Belice': '#96ceb4',
  }[cruce.pais_destino] || 'var(--primary)';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://metroguia.mx',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Cruces Fronterizos',
        item: 'https://metroguia.mx/frontera',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: cruce.nombre,
        item: `https://metroguia.mx/frontera/${cruce.slug}`,
      },
    ],
  };

  const touristAttractionSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: cruce.nombre,
    description: `Cruce fronterizo entre ${cruce.estado || 'México'} (México) y ${cruce.pais_destino}`,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: cruce.lat,
      longitude: cruce.lng,
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'MX',
      addressRegion: cruce.estado,
      addressLocality: cruce.ciudad_mexico,
    },
    url: `https://metroguia.mx/frontera/${cruce.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionSchema) }}
      />

      <article style={{ color: 'var(--text)' }}>
        {/* Breadcrumb */}
        <nav
          style={{
            padding: '1rem 2rem',
            fontSize: '0.875rem',
            color: 'var(--text-muted)',
            borderBottom: '1px solid var(--border)',
            backgroundColor: 'var(--surface)',
          }}
        >
          <Link href="/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
            Inicio
          </Link>
          {' / '}
          <Link href="/frontera" style={{ color: 'var(--primary)', textDecoration: 'none' }}>
            Cruces Fronterizos
          </Link>
          {' / '}
          <span>{cruce.nombre}</span>
        </nav>

        {/* Hero Section */}
        <section
          style={{
            background: 'linear-gradient(135deg, var(--surface) 0%, var(--primary-border) 100%)',
            padding: '3rem 2rem',
            borderBottom: '2px solid var(--primary-border)',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '2.5rem' }}>🛂</span>
              <div
                style={{
                  display: 'inline-block',
                  padding: '0.5rem 1rem',
                  backgroundColor: countryColor,
                  color: 'white',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                }}
              >
                {cruce.pais_destino}
              </div>
              {cruce.clasificacion && (
                <div
                  style={{
                    display: 'inline-block',
                    padding: '0.5rem 1rem',
                    backgroundColor: 'var(--primary)',
                    color: 'white',
                    borderRadius: 'var(--radius-sm)',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                  }}
                >
                  {cruce.clasificacion}
                </div>
              )}
            </div>

            <h1
              style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                margin: '1rem 0',
                lineHeight: '1.2',
              }}
            >
              {cruce.nombre}
            </h1>

            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--text-muted)',
                margin: '0.5rem 0 0 0',
              }}
            >
              {cruce.ciudad_mexico}, {cruce.estado} (México) ↔ {foreignCity} ({cruce.pais_destino})
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.5rem',
                marginTop: '2rem',
              }}
            >
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: '0 0 0.5rem 0' }}>
                  Volumen Diario
                </p>
                <p
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: 'var(--primary)',
                  }}
                >
                  {cruce.volumen_diario ? cruce.volumen_diario.toLocaleString('es-MX') : 'N/A'}
                </p>
              </div>

              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: '0 0 0.5rem 0' }}>
                  Ubicación
                </p>
                <p style={{ fontSize: '0.95rem' }}>
                  {cruce.lat.toFixed(4)}°, {cruce.lng.toFixed(4)}°
                </p>
              </div>

              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: '0 0 0.5rem 0' }}>
                  País de Destino
                </p>
                <p style={{ fontSize: '0.95rem', fontWeight: '500' }}>{cruce.pais_destino}</p>
              </div>
            </div>
          </div>
        </section>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
          {/* Bridges / Pedestrian Crossings Section */}
          {crossing && crossing.length > 0 && (
            <section style={{ marginBottom: '3rem' }}>
              <h2
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: '2px solid var(--primary)',
                }}
              >
                {cruce.puentes ? 'Puentes Internacionales' : 'Cruces Peatonales'}
              </h2>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: '1.5rem',
                }}
              >
                {crossing.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
                      padding: '1.5rem',
                      backgroundColor: 'var(--surface)',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        marginBottom: '0.5rem',
                        color: 'var(--primary)',
                      }}
                    >
                      {item.nombre}
                    </h3>

                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-muted)',
                        marginBottom: '1rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-block',
                          width: '0.5rem',
                          height: '0.5rem',
                          borderRadius: '50%',
                          backgroundColor: 'var(--primary)',
                        }}
                      />
                      {item.tipo}
                    </p>

                    {item.horario && (
                      <p
                        style={{
                          fontSize: '0.9rem',
                          marginBottom: '0.5rem',
                          color: 'var(--text)',
                        }}
                      >
                        <strong>Horario:</strong> {item.horario}
                      </p>
                    )}

                    {item.horario_mexico && (
                      <p
                        style={{
                          fontSize: '0.9rem',
                          marginBottom: '0.5rem',
                          color: 'var(--text)',
                        }}
                      >
                        <strong>Horario México:</strong> {item.horario_mexico}
                      </p>
                    )}

                    {item.horario_belice && (
                      <p
                        style={{
                          fontSize: '0.9rem',
                          marginBottom: '0.5rem',
                          color: 'var(--text)',
                        }}
                      >
                        <strong>Horario Belice:</strong> {item.horario_belice}
                      </p>
                    )}

                    {item.carril_peatonal && (
                      <p
                        style={{
                          fontSize: '0.875rem',
                          color: 'var(--primary)',
                          marginBottom: '0.5rem',
                        }}
                      >
                        ✓ Carril peatonal disponible
                      </p>
                    )}

                    {item.ubicacion && (
                      <p
                        style={{
                          fontSize: '0.9rem',
                          marginBottom: '0.5rem',
                          color: 'var(--text-muted)',
                        }}
                      >
                        <strong>Ubicación:</strong> {item.ubicacion}
                      </p>
                    )}

                    {item.descripcion && (
                      <p
                        style={{
                          fontSize: '0.9rem',
                          color: 'var(--text-dim)',
                          lineHeight: '1.5',
                          marginTop: '1rem',
                        }}
                      >
                        {item.descripcion}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* CBX (Cross Border Xpress) Section */}
          {cruce.cbx && (
            <section style={{ marginBottom: '3rem' }}>
              <h2
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: '2px solid var(--primary)',
                }}
              >
                Cross Border Xpress (CBX)
              </h2>

              <div
                style={{
                  border: '2px solid var(--primary)',
                  borderRadius: 'var(--radius)',
                  padding: '2rem',
                  backgroundColor: 'rgba(30, 144, 255, 0.02)',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    color: 'var(--primary)',
                  }}
                >
                  {cruce.cbx.nombre}
                </h3>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '1.5rem',
                    marginTop: '1.5rem',
                  }}
                >
                  {cruce.cbx.tipo && (
                    <div>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: '0 0 0.5rem 0' }}>
                        Tipo
                      </p>
                      <p style={{ fontSize: '0.95rem', fontWeight: '500' }}>{cruce.cbx.tipo}</p>
                    </div>
                  )}

                  {cruce.cbx.proposito && (
                    <div>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: '0 0 0.5rem 0' }}>
                        Propósito
                      </p>
                      <p style={{ fontSize: '0.95rem' }}>{cruce.cbx.proposito}</p>
                    </div>
                  )}

                  {cruce.cbx.horario && (
                    <div>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: '0 0 0.5rem 0' }}>
                        Horario
                      </p>
                      <p style={{ fontSize: '0.95rem' }}>{cruce.cbx.horario}</p>
                    </div>
                  )}

                  {cruce.cbx.precio_peaje && (
                    <div>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: '0 0 0.5rem 0' }}>
                        Precio de Peaje
                      </p>
                      <p style={{ fontSize: '0.95rem', color: 'var(--primary)', fontWeight: '600' }}>
                        {cruce.cbx.precio_peaje}
                      </p>
                    </div>
                  )}

                  {cruce.cbx.duracion_cruce && (
                    <div>
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: '0 0 0.5rem 0' }}>
                        Duración del Cruce
                      </p>
                      <p style={{ fontSize: '0.95rem' }}>{cruce.cbx.duracion_cruce}</p>
                    </div>
                  )}
                </div>

                {cruce.cbx.ubicacion && (
                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--text-muted)',
                      marginTop: '1.5rem',
                      padding: '1rem',
                      backgroundColor: 'rgba(0,0,0,0.02)',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    <strong>Ubicación:</strong> {cruce.cbx.ubicacion}
                  </p>
                )}

                {cruce.cbx.nota && (
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-dim)',
                      marginTop: '1rem',
                      fontStyle: 'italic',
                    }}
                  >
                    {cruce.cbx.nota}
                  </p>
                )}
              </div>
            </section>
          )}

          {/* Wait Times Section */}
          {cruce.esperas_tipicas && (
            <section style={{ marginBottom: '3rem' }}>
              <h2
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: '2px solid var(--primary)',
                }}
              >
                Esperas Típicas
              </h2>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.5rem',
                }}
              >
                {cruce.esperas_tipicas.peatonal && (
                  <div
                    style={{
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
                      padding: '1.5rem',
                      backgroundColor: 'var(--surface)',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        marginBottom: '1rem',
                        color: 'var(--primary)',
                      }}
                    >
                      Peatonal
                    </h3>

                    <div style={{ display: 'grid', gap: '1rem' }}>
                      {cruce.esperas_tipicas.peatonal.normal && (
                        <div>
                          <p
                            style={{
                              fontSize: '0.875rem',
                              color: 'var(--text-muted)',
                              margin: '0 0 0.5rem 0',
                            }}
                          >
                            Espera Normal
                          </p>
                          <div
                            style={{
                              backgroundColor: '#e8f4f8',
                              padding: '1rem',
                              borderRadius: 'var(--radius-sm)',
                              fontSize: '1rem',
                              fontWeight: '500',
                              color: '#0066cc',
                            }}
                          >
                            {cruce.esperas_tipicas.peatonal.normal}
                          </div>
                        </div>
                      )}

                      {cruce.esperas_tipicas.peatonal.pico && (
                        <div>
                          <p
                            style={{
                              fontSize: '0.875rem',
                              color: 'var(--text-muted)',
                              margin: '0 0 0.5rem 0',
                            }}
                          >
                            Hora Pico
                          </p>
                          <div
                            style={{
                              backgroundColor: '#fff3cd',
                              padding: '1rem',
                              borderRadius: 'var(--radius-sm)',
                              fontSize: '1rem',
                              fontWeight: '500',
                              color: '#856404',
                            }}
                          >
                            {cruce.esperas_tipicas.peatonal.pico}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {cruce.esperas_tipicas.vehicular && (
                  <div
                    style={{
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
                      padding: '1.5rem',
                      backgroundColor: 'var(--surface)',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        marginBottom: '1rem',
                        color: 'var(--primary)',
                      }}
                    >
                      Vehicular
                    </h3>

                    <div style={{ display: 'grid', gap: '1rem' }}>
                      {cruce.esperas_tipicas.vehicular.normal && (
                        <div>
                          <p
                            style={{
                              fontSize: '0.875rem',
                              color: 'var(--text-muted)',
                              margin: '0 0 0.5rem 0',
                            }}
                          >
                            Espera Normal
                          </p>
                          <div
                            style={{
                              backgroundColor: '#e8f4f8',
                              padding: '1rem',
                              borderRadius: 'var(--radius-sm)',
                              fontSize: '1rem',
                              fontWeight: '500',
                              color: '#0066cc',
                            }}
                          >
                            {cruce.esperas_tipicas.vehicular.normal}
                          </div>
                        </div>
                      )}

                      {cruce.esperas_tipicas.vehicular.pico && (
                        <div>
                          <p
                            style={{
                              fontSize: '0.875rem',
                              color: 'var(--text-muted)',
                              margin: '0 0 0.5rem 0',
                            }}
                          >
                            Hora Pico
                          </p>
                          <div
                            style={{
                              backgroundColor: '#fff3cd',
                              padding: '1rem',
                              borderRadius: 'var(--radius-sm)',
                              fontSize: '1rem',
                              fontWeight: '500',
                              color: '#856404',
                            }}
                          >
                            {cruce.esperas_tipicas.vehicular.pico}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Express Lane Section */}
          {cruce.carril_express && (
            <section style={{ marginBottom: '3rem' }}>
              <h2
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: '2px solid var(--primary)',
                }}
              >
                Carril Express
              </h2>

              <div
                style={{
                  border: '2px solid var(--primary)',
                  borderRadius: 'var(--radius)',
                  padding: '2rem',
                  backgroundColor: 'rgba(30, 144, 255, 0.02)',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.3rem',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    color: 'var(--primary)',
                  }}
                >
                  {cruce.carril_express.nombre}
                </h3>

                {cruce.carril_express.descripcion && (
                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--text)',
                      lineHeight: '1.6',
                      marginBottom: '1.5rem',
                    }}
                  >
                    {cruce.carril_express.descripcion}
                  </p>
                )}

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1.5rem',
                  }}
                >
                  {cruce.carril_express.requisito && (
                    <div>
                      <p
                        style={{
                          color: 'var(--text-muted)',
                          fontSize: '0.875rem',
                          margin: '0 0 0.5rem 0',
                        }}
                      >
                        Requisito
                      </p>
                      <p style={{ fontSize: '0.95rem' }}>{cruce.carril_express.requisito}</p>
                    </div>
                  )}

                  {cruce.carril_express.tiempo_cruce && (
                    <div>
                      <p
                        style={{
                          color: 'var(--text-muted)',
                          fontSize: '0.875rem',
                          margin: '0 0 0.5rem 0',
                        }}
                      >
                        Tiempo de Cruce
                      </p>
                      <p style={{ fontSize: '0.95rem', color: 'var(--primary)', fontWeight: '600' }}>
                        {cruce.carril_express.tiempo_cruce}
                      </p>
                    </div>
                  )}

                  {cruce.carril_express.costo_annual && (
                    <div>
                      <p
                        style={{
                          color: 'var(--text-muted)',
                          fontSize: '0.875rem',
                          margin: '0 0 0.5rem 0',
                        }}
                      >
                        Costo Anual
                      </p>
                      <p style={{ fontSize: '0.95rem' }}>{cruce.carril_express.costo_annual}</p>
                    </div>
                  )}
                </div>

                {cruce.carril_express.nota && (
                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--text-dim)',
                      marginTop: '1.5rem',
                      padding: '1rem',
                      backgroundColor: 'rgba(0,0,0,0.02)',
                      borderRadius: 'var(--radius-sm)',
                      fontStyle: 'italic',
                    }}
                  >
                    {cruce.carril_express.nota}
                  </p>
                )}
              </div>
            </section>
          )}

          {/* Documentation Section */}
          {cruce.documentacion && cruce.documentacion.length > 0 && (
            <section style={{ marginBottom: '3rem' }}>
              <h2
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: '2px solid var(--primary)',
                }}
              >
                Documentación Requerida
              </h2>

              <div
                style={{
                  display: 'grid',
                  gap: '1rem',
                }}
              >
                {cruce.documentacion.map((doc, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '1rem',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--surface)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '1rem',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '1.5rem',
                        color: 'var(--primary)',
                        flexShrink: 0,
                      }}
                    >
                      📄
                    </span>
                    <div>
                      <p
                        style={{
                          margin: '0 0 0.25rem 0',
                          fontWeight: '600',
                          fontSize: '0.95rem',
                          color: 'var(--text)',
                        }}
                      >
                        {doc.tipo || 'Documento'}
                      </p>
                      {doc.descripcion && (
                        <p
                          style={{
                            margin: '0',
                            fontSize: '0.875rem',
                            color: 'var(--text-muted)',
                          }}
                        >
                          {doc.descripcion}
                        </p>
                      )}
                      {doc.notas && (
                        <p
                          style={{
                            margin: '0.5rem 0 0 0',
                            fontSize: '0.875rem',
                            color: 'var(--text-dim)',
                            fontStyle: 'italic',
                          }}
                        >
                          {doc.notas}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Services Section */}
          {cruce.servicios_frontera && cruce.servicios_frontera.length > 0 && (
            <section style={{ marginBottom: '3rem' }}>
              <h2
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: '2px solid var(--primary)',
                }}
              >
                Servicios en la Frontera
              </h2>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                  gap: '1rem',
                }}
              >
                {cruce.servicios_frontera.map((servicio, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '1.5rem',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
                      backgroundColor: 'var(--surface)',
                      textAlign: 'center',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '2rem',
                        margin: '0 0 0.5rem 0',
                      }}
                    >
                      {servicio.icono || '.'}
                    </p>
                    <p
                      style={{
                        margin: '0',
                        fontWeight: '600',
                        fontSize: '0.95rem',
                        color: 'var(--text)',
                      }}
                    >
                      {servicio.nombre}
                    </p>
                    {servicio.descripcion && (
                      <p
                        style={{
                          margin: '0.5rem 0 0 0',
                          fontSize: '0.85rem',
                          color: 'var(--text-muted)',
                        }}
                      >
                        {servicio.descripcion}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Time Zone Section */}
          {cruce.diferencia_horaria && (
            <section
              style={{
                marginBottom: '3rem',
                padding: '1.5rem',
                backgroundColor: '#f0f7ff',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: 'var(--primary)',
                }}
              >
                Diferencia Horaria
              </h3>
              <p
                style={{
                  margin: '0',
                  fontSize: '0.95rem',
                  color: 'var(--text)',
                  lineHeight: '1.6',
                }}
              >
                {cruce.diferencia_horaria}
              </p>
            </section>
          )}

          {/* Tips / Notes Section */}
          {cruce.notas && cruce.notas.length > 0 && (
            <section style={{ marginBottom: '3rem' }}>
              <h2
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: '2px solid var(--primary)',
                }}
              >
                Consejos y Recomendaciones
              </h2>

              <div
                style={{
                  display: 'grid',
                  gap: '1rem',
                }}
              >
                {cruce.notas.map((nota, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '1rem',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--surface)',
                      borderLeft: '4px solid var(--primary)',
                      display: 'flex',
                      gap: '1rem',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '1.5rem',
                        flexShrink: 0,
                      }}
                    >
                      💡
                    </span>
                    <p
                      style={{
                        margin: '0',
                        fontSize: '0.95rem',
                        color: 'var(--text)',
                        lineHeight: '1.6',
                      }}
                    >
                      {nota.contenido || nota}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* External Links */}
          {cruce.pais_destino === 'Estados Unidos' && (
            <section
              style={{
                marginBottom: '3rem',
                padding: '1.5rem',
                backgroundColor: '#f0f7ff',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--primary-border)',
              }}
            >
              <h3
                style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: 'var(--primary)',
                }}
              >
                Información Adicional
              </h3>
              <p
                style={{
                  margin: '0 0 1rem 0',
                  fontSize: '0.95rem',
                  color: 'var(--text)',
                }}
              >
                Para más información sobre cruces fronterizos hacia Estados Unidos:
              </p>
              <a
                href="https://bwt.cbp.gov/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'var(--primary)',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: 'var(--radius-sm)',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  transition: 'background-color 0.3s ease',
                }}
              >
                Visitar CBP Border Wait Times
              </a>
            </section>
          )}

          {/* Other Crossings */}
          {crucesFronterizos.length > 1 && (
            <section style={{ marginTop: '4rem' }}>
              <h2
                style={{
                  fontSize: '1.75rem',
                  fontWeight: 'bold',
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: '2px solid var(--primary)',
                }}
              >
                Otros Cruces Fronterizos
              </h2>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '1.5rem',
                }}
              >
                {crucesFronterizos
                  .filter((c) => c.slug !== params.slug)
                  .slice(0, 6)
                  .map((c) => (
                    <Link
                      key={c.slug}
                      href={`/frontera/${c.slug}`}
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      <div
                        style={{
                          padding: '1.5rem',
                          border: '1px solid var(--border)',
                          borderRadius: 'var(--radius)',
                          backgroundColor: 'var(--surface)',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          height: '100%',
                        }}
                      >
                        <p
                          style={{
                            fontSize: '0.875rem',
                            color: 'var(--text-muted)',
                            margin: '0 0 0.5rem 0',
                          }}
                        >
                          {c.pais_destino}
                        </p>
                        <h3
                          style={{
                            fontSize: '1.1rem',
                            fontWeight: '600',
                            margin: '0 0 0.5rem 0',
                            color: 'var(--primary)',
                          }}
                        >
                          {c.nombre}
                        </h3>
                        <p
                          style={{
                            fontSize: '0.85rem',
                            color: 'var(--text-dim)',
                            margin: '0',
                          }}
                        >
                          {c.ciudad_mexico}, {c.estado}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>

              <div
                style={{
                  marginTop: '2rem',
                  textAlign: 'center',
                }}
              >
                <Link
                  href="/frontera"
                  style={{
                    display: 'inline-block',
                    padding: '0.75rem 2rem',
                    border: '2px solid var(--primary)',
                    color: 'var(--primary)',
                    textDecoration: 'none',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                  }}
                >
                  Ver todos los cruces
                </Link>
              </div>
            </section>
          )}
        </div>
      </article>
    </>
  );
}
