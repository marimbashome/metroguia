import { estaciones } from '@/data/estaciones';
import { lineasDetalle } from '@/data/lineas-detalle';
import { rutasPopulares, parseRutaSlug, buildRutaSlug, findRuta, getRelatedRoutes } from '@/data/rutas-populares';
import { buildGraph, buildEstacionesMap, findRoute, formatSegments, estimateTime, COSTO_METRO } from '@/lib/rutas';

// ISR: allow any curated route slug, not just pre-built ones
export const dynamicParams = true

// Cache pages forever (metro map is static)
export const revalidate = false

// Pre-build only top 50 routes at build time.
// The remaining ~4,830 curated routes are generated on first request (ISR).
// This keeps the Vercel Hobby build under the 45-minute limit.
const MAX_STATIC_ROUTES = 50

export function generateStaticParams() {
  return rutasPopulares.slice(0, MAX_STATIC_ROUTES).map(ruta => ({
    ruta: buildRutaSlug(ruta.origen, ruta.destino)
  }));
}

/**
 * generateMetadata: SEO para cada ruta
 */
export async function generateMetadata({ params }) {
  const { ruta } = params;
  const parsed = parseRutaSlug(ruta);
  if (!parsed) return {};

  const rutaData = findRuta(parsed.origen, parsed.destino);
  if (!rutaData) return {};

  const estacionesMap = buildEstacionesMap(estaciones);
  const origenNombre = estacionesMap[parsed.origen]?.nombre || parsed.origen;
  const destinoNombre = estacionesMap[parsed.destino]?.nombre || parsed.destino;

  // Calcula ruta para tiempo/transbordos
  const graph = buildGraph(lineasDetalle);
  const path = await findRoute(graph, parsed.origen, parsed.destino);
  const segments = formatSegments(path, estacionesMap, lineasDetalle);
  const { minutos, transbordos } = estimateTime(segments);

  const title = `Cómo ir de ${origenNombre} a ${destinoNombre} en metro — MetroGuia`;
  const description = `Ruta en metro de ${origenNombre} a ${destinoNombre}: ${minutos} min, ${transbordos} transbordos, $${COSTO_METRO} MXN. Guía paso a paso.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://metroguia.mx/rutas/${ruta}`,
    },
    alternates: {
      canonical: `https://metroguia.mx/rutas/${ruta}`,
    },
  };
}

export default async function RutaPage({ params }) {
  const { ruta } = params;
  const parsed = parseRutaSlug(ruta);

  if (!parsed) {
    return (
      <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1>Ruta no encontrada</h1>
        <p>La ruta solicitada no existe.</p>
      </div>
    );
  }

  const rutaData = findRuta(parsed.origen, parsed.destino);
  if (!rutaData) {
    return (
      <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1>Ruta no disponible</h1>
        <p>Esta ruta no está disponible en nuestro catálogo.</p>
      </div>
    );
  }

  // Construye el grafo y busca la ruta
  const estacionesMap = buildEstacionesMap(estaciones);
  const graph = buildGraph(lineasDetalle);
  const path = await findRoute(graph, parsed.origen, parsed.destino);

  if (!path) {
    return (
      <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1>Ruta no disponible</h1>
        <p>No se encontró una ruta de metro entre estas dos estaciones.</p>
      </div>
    );
  }

  const segments = formatSegments(path, estacionesMap, lineasDetalle);
  const { minutos, transbordos } = estimateTime(segments);

  const origenNombre = estacionesMap[parsed.origen]?.nombre || parsed.origen;
  const destinoNombre = estacionesMap[parsed.destino]?.nombre || parsed.destino;

  const relatedRoutes = getRelatedRoutes(parsed.origen, parsed.destino, 3);
  const esRutaAEstadio = parsed.destino === 'taxquena';

  return (
    <main style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* HERO SECTION */}
      <section style={{ marginBottom: '40px' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px', color: '#1f2937' }}>
          Cómo ir de {origenNombre} a {destinoNombre} en metro
        </h1>

        {/* SUMMARY BOX */}
        <div style={{
          backgroundColor: '#f3f4f6',
          borderLeft: '4px solid #f97316',
          padding: '20px',
          marginBottom: '30px',
          borderRadius: '6px',
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            <div>
              <div style={{ fontSize: '0.875rem', color: '#666', marginBottom: '4px' }}>Tiempo aproximado</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>⏱ {minutos} minutos</div>
            </div>
            <div>
              <div style={{ fontSize: '0.875rem', color: '#666', marginBottom: '4px' }}>Transbordos</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>🔄 {transbordos} transbordo{transbordos !== 1 ? 's' : ''}</div>
            </div>
            <div>
              <div style={{ fontSize: '0.875rem', color: '#666', marginBottom: '4px' }}>Costo</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>💰 ${COSTO_METRO} MXN</div>
            </div>
            <div>
              <div style={{ fontSize: '0.875rem', color: '#666', marginBottom: '4px' }}>Estaciones</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#1f2937' }}>🚇 {path.length} estaciones</div>
            </div>
          </div>
        </div>
      </section>

      {/* ROUTE SEGMENTS */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '20px', color: '#1f2937' }}>
          Ruta paso a paso
        </h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {segments.map((segment, idx) => (
            <div key={idx} style={{
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
              overflow: 'hidden',
            }}>
              {/* SEGMENT HEADER */}
              <div style={{
                backgroundColor: segment.lineColor,
                color: 'white',
                padding: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'rgba(255,255,255,0.2)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                }}>
                  {segment.linea}
                </div>
                <div>
                  <div style={{ fontSize: '1rem', fontWeight: '600' }}>Línea {segment.linea} ({segment.lineNombre})</div>
                  <div style={{ fontSize: '0.875rem', opacity: 0.9 }}>
                    De {segment.desde} a {segment.hasta}
                  </div>
                </div>
                <div style={{ marginLeft: 'auto', textAlign: 'right', fontSize: '0.875rem' }}>
                  {segment.numEstaciones} estación{segment.numEstaciones !== 1 ? 'es' : ''}
                </div>
              </div>

              {/* STATIONS LIST */}
              <div style={{ padding: '16px', backgroundColor: '#ffffff' }}>
                <div style={{ fontSize: '0.875rem', color: '#666', marginBottom: '12px' }}>
                  <strong>Estaciones:</strong>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '8px' }}>
                  {segment.estaciones.map((est, i) => (
                    <div
                      key={i}
                      style={{
                        padding: '8px 12px',
                        backgroundColor: '#f9fafb',
                        border: '1px solid #e5e7eb',
                        borderRadius: '4px',
                        fontSize: '0.875rem',
                      }}
                    >
                      {est}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TREN LIGERO NOTE */}
      {esRutaAEstadio && (
        <section style={{ marginBottom: '40px', backgroundColor: '#fef3c7', borderLeft: '4px solid #f59e0b', padding: '20px', borderRadius: '6px' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', marginBottom: '12px', color: '#92400e' }}>
            ⚠️ Nota importante: Tren Ligero a Estadio Azteca
          </h3>
          <p style={{ color: '#78350f', marginBottom: '12px' }}>
            Esta ruta termina en Tasqueña, donde debes cambiar al <strong>Tren Ligero</strong> para llegar al Estadio Azteca.
          </p>
          <ul style={{ marginLeft: '20px', color: '#78350f' }}>
            <li>La tarjeta de Metro CDMX <strong>NO funciona en Tren Ligero</strong> — debes comprar un boleto adicional ($10 MXN)</li>
            <li>Tiempo en Tren Ligero: ~15 minutos desde Tasqueña hasta Estadio Azteca</li>
            <li>Tiempo total (metro + Tren Ligero): ~{minutos + 15} minutos</li>
            <li>Costo total: ${COSTO_METRO + 10} MXN</li>
          </ul>
        </section>
      )}

      {/* FAQ */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '20px', color: '#1f2937' }}>
          Preguntas frecuentes
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div style={{ padding: '16px', border: '1px solid #e5e7eb', borderRadius: '6px' }}>
            <h4 style={{ fontWeight: '600', marginBottom: '8px', color: '#1f2937' }}>¿Cuánto tarda?</h4>
            <p style={{ fontSize: '0.875rem', color: '#666' }}>
              Aproximadamente <strong>{minutos} minutos</strong> en metro. Agregar ~5 min por cada transbordo si no llegas justo.
            </p>
          </div>
          <div style={{ padding: '16px', border: '1px solid #e5e7eb', borderRadius: '6px' }}>
            <h4 style={{ fontWeight: '600', marginBottom: '8px', color: '#1f2937' }}>¿Cuánto cuesta?</h4>
            <p style={{ fontSize: '0.875rem', color: '#666' }}>
              <strong>${COSTO_METRO} MXN</strong> por un viaje ilimitado en el Metro CDMX. {esRutaAEstadio && 'Más $10 MXN en Tren Ligero.'}
            </p>
          </div>
          <div style={{ padding: '16px', border: '1px solid #e5e7eb', borderRadius: '6px' }}>
            <h4 style={{ fontWeight: '600', marginBottom: '8px', color: '#1f2937' }}>¿Hay transbordos?</h4>
            <p style={{ fontSize: '0.875rem', color: '#666' }}>
              {transbordos === 0 ? (
                <>No hay transbordos — viajas directo en la misma línea.</>
              ) : (
                <>Sí, {transbordos} transbordo{transbordos !== 1 ? 's' : ''} necesario{transbordos !== 1 ? 's' : ''} en esta ruta.</>
              )}
            </p>
          </div>
          <div style={{ padding: '16px', border: '1px solid #e5e7eb', borderRadius: '6px' }}>
            <h4 style={{ fontWeight: '600', marginBottom: '8px', color: '#1f2937' }}>¿A qué hora salgo?</h4>
            <p style={{ fontSize: '0.875rem', color: '#666' }}>
              El Metro abre a las 5:00 AM y cierra a las 12:00 AM (media noche). Hora pico: 7-9 AM y 5-7 PM.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED ROUTES */}
      {relatedRoutes.length > 0 && (
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '20px', color: '#1f2937' }}>
            Rutas relacionadas
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
            {relatedRoutes.map((related) => (
              <a
                key={`${related.origen}_${related.destino}`}
                href={`/rutas/${buildRutaSlug(related.origen, related.destino)}`}
                style={{
                  display: 'block',
                  padding: '16px',
                  border: '1px solid #e5e7eb',
                  borderRadius: '6px',
                  backgroundColor: '#ffffff',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                }}

              >
                <h4 style={{ fontWeight: '600', color: '#f97316', marginBottom: '4px' }}>
                  {related.titulo}
                </h4>
                <p style={{ fontSize: '0.875rem', color: '#666' }}>
                  De {estacionesMap[related.origen]?.nombre || related.origen} a {estacionesMap[related.destino]?.nombre || related.destino}
                </p>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* CTA SECTION */}
      <section style={{
        backgroundColor: '#fef3c7',
        borderRadius: '8px',
        padding: '32px',
        textAlign: 'center',
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '16px', color: '#92400e' }}>
          Explora más estaciones
        </h2>
        <p style={{ color: '#78350f', marginBottom: '20px' }}>
          Descubre información detallada, POIs, tips y horarios de todas las estaciones.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={`/estacion/${parsed.origen}`}
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              backgroundColor: '#f97316',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: '600',
              transition: 'background-color 0.2s',
            }}
          >
            Ver {origenNombre}
          </a>
          <a
            href={`/estacion/${parsed.destino}`}
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              backgroundColor: '#f97316',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '6px',
              fontWeight: '600',
            }}
          >
            Ver {destinoNombre}
          </a>
        </div>
      </section>
    </main>
  );
}
