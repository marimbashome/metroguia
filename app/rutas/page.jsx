'use client';

import { estaciones } from '@/data/estaciones';
import { rutasPopulares, buildRutaSlug, getRutasAEstadio, getRutasTuristicas } from '@/data/rutas-populares';

export const metadata = {
  title: 'Rutas de Metro CDMX — Planificador de Viajes | MetroGuia',
  description: 'Planificador de rutas en metro: encuentra cómo ir entre estaciones del Metro CDMX. Tiempo, costo, transbordos y guías paso a paso.',
  openGraph: {
    title: 'Rutas de Metro CDMX — Planificador de Viajes | MetroGuia',
    description: 'Planificador de rutas en metro: encuentra cómo ir entre estaciones del Metro CDMX. Tiempo, costo, transbordos y guías paso a paso.',
    type: 'website',
    url: 'https://metroguia.mx/rutas',
  },
  alternates: {
    canonical: 'https://metroguia.mx/rutas',
  },
};

function RouteCard({ origen, destino, titulo }) {
  const slug = buildRutaSlug(origen, destino);
  const estacionesMap = {};
  estaciones.forEach((est) => {
    if (!estacionesMap[est.slug]) {
      estacionesMap[est.slug] = est.nombre;
    }
  });

  const origenNombre = estacionesMap[origen] || origen;
  const destinoNombre = estacionesMap[destino] || destino;

  return (
    <a
      href={`/rutas/${slug}`}
      style={{
        display: 'block',
        padding: '20px',
        border: '1px solid #e5e7eb',
        borderRadius: '8px',
        backgroundColor: '#ffffff',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = '#f97316';
        e.currentTarget.style.backgroundColor = '#fff7ed';
        e.currentTarget.style.boxShadow = '0 4px 6px rgba(249, 115, 22, 0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = '#e5e7eb';
        e.currentTarget.style.backgroundColor = '#ffffff';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <h3 style={{ fontWeight: '600', color: '#f97316', marginBottom: '8px', fontSize: '1.125rem' }}>
        {titulo}
      </h3>
      <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '12px' }}>
        De <strong>{origenNombre}</strong> a <strong>{destinoNombre}</strong>
      </p>
      <div style={{ fontSize: '0.75rem', color: '#999' }}>
        Ver detalles →
      </div>
    </a>
  );
}

function RouteSection({ titulo, subtitle, rutas }) {
  return (
    <section style={{ marginBottom: '60px' }}>
      <div style={{ marginBottom: '24px' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '8px', color: '#1f2937' }}>
          {titulo}
        </h2>
        {subtitle && (
          <p style={{ fontSize: '1rem', color: '#666', maxWidth: '800px' }}>
            {subtitle}
          </p>
        )}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '16px',
      }}>
        {rutas.map((ruta) => (
          <RouteCard
            key={`${ruta.origen}_${ruta.destino}`}
            origen={ruta.origen}
            destino={ruta.destino}
            titulo={ruta.titulo}
          />
        ))}
      </div>
    </section>
  );
}

export default function RutasPage() {
  const rutasAEstadio = getRutasAEstadio();
  const rutasTuristicas = getRutasTuristicas();

  // Organiza rutas turísticas por categoría
  const rutasDesdeAeropuerto = rutasTuristicas.filter(r => r.origen === 'aeropuerto');
  const rutasCentro = rutasTuristicas.filter(r =>
    (r.origen === 'bellas-artes' || r.origen === 'zocalo') &&
    r.destino !== 'aeropuerto'
  );
  const rutasDesdeChapultepec = rutasTuristicas.filter(r => r.origen === 'chapultepec');
  const rutasDesdeInsurgentes = rutasTuristicas.filter(r => r.origen === 'insurgentes');
  const rutasDesdePolanco = rutasTuristicas.filter(r => r.origen === 'polanco');
  const rutasSur = rutasTuristicas.filter(r =>
    (r.origen === 'coyoacan' || r.origen === 'xochimilco') ||
    (r.destino === 'coyoacan' && r.origen !== 'bellas-artes' && r.origen !== 'zocalo')
  );
  const rutasDelNorte = rutasTuristicas.filter(r =>
    r.origen === 'indios-verdes' || r.origen === 'cuatro-caminos' || r.origen === 'el-rosario'
  );

  return (
    <main style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      {/* HERO */}
      <section style={{ marginBottom: '60px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>
          Planificador de Rutas Metro CDMX
        </h1>
        <p style={{ fontSize: '1.125rem', color: '#666', maxWidth: '800px', margin: '0 auto 24px' }}>
          Encuentra la mejor ruta entre cualquier par de estaciones. Tiempo, costo, transbordos y guías paso a paso.
        </p>
        <div style={{
          backgroundColor: '#fef3c7',
          borderLeft: '4px solid #f59e0b',
          padding: '20px',
          borderRadius: '6px',
          maxWidth: '600px',
          margin: '0 auto',
        }}>
          <p style={{ fontSize: '0.875rem', color: '#78350f', margin: 0 }}>
            <strong>💡 Tip:</strong> Las rutas se calculan en tiempo real usando el algoritmo BFS para encontrar el camino más corto en el Metro CDMX.
          </p>
        </div>
      </section>

      {/* FIFA 2026 - ESTADIO AZTECA */}
      <RouteSection
        titulo="🏆 Rutas al Estadio Azteca (Mundial FIFA 2026)"
        subtitle="Todas las rutas principales llegan a Tasqueña, donde cambias al Tren Ligero para el Estadio. Nota: el boleto del Tren Ligero es separado ($10 MXN)."
        rutas={rutasAEstadio}
      />

      {/* DESDE AEROPUERTO */}
      {rutasDesdeAeropuerto.length > 0 && (
        <RouteSection
          titulo="✈️ Desde el Aeropuerto Internacional"
          subtitle="Conexiones desde Benito Juárez (Aeropuerto) hacia los principales destinos turísticos."
          rutas={rutasDesdeAeropuerto}
        />
      )}

      {/* CENTRO HISTÓRICO */}
      {rutasCentro.length > 0 && (
        <RouteSection
          titulo="🏛️ Centro Histórico (Bellas Artes & Zócalo)"
          subtitle="Rutas entre los dos principales hubs culturales de la CDMX."
          rutas={rutasCentro}
        />
      )}

      {/* CHAPULTEPEC */}
      {rutasDesdeChapultepec.length > 0 && (
        <RouteSection
          titulo="🌲 Desde Chapultepec"
          subtitle="Bosque de Chapultepec, Castillo y Museo Antropológico hacia principales destinos."
          rutas={rutasDesdeChapultepec}
        />
      )}

      {/* INSURGENTES */}
      {rutasDesdeInsurgentes.length > 0 && (
        <RouteSection
          titulo="🛍️ Desde Insurgentes"
          subtitle="Zona Rosa, comercios y vida nocturna hacia centros turísticos."
          rutas={rutasDesdeInsurgentes}
        />
      )}

      {/* POLANCO */}
      {rutasDesdePolanco.length > 0 && (
        <RouteSection
          titulo="💎 Desde Polanco"
          subtitle="Zona de lujo, gastronomía y cultura hacia principales destinos."
          rutas={rutasDesdePolanco}
        />
      )}

      {/* SUR: COYOACÁN Y XOCHIMILCO */}
      {rutasSur.length > 0 && (
        <RouteSection
          titulo="🦆 Sur: Coyoacán & Xochimilco"
          subtitle="Barrios coloridos y auténticos del sur de la CDMX. Xochimilco requiere cambio a Tren Ligero."
          rutas={rutasSur}
        />
      )}

      {/* NORTE */}
      {rutasDelNorte.length > 0 && (
        <RouteSection
          titulo="⬆️ Desde el Norte"
          subtitle="Indios Verdes, Cuatro Caminos y El Rosario hacia el centro y sur."
          rutas={rutasDelNorte}
        />
      )}

      {/* FAQ */}
      <section style={{ marginBottom: '60px' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 'bold', marginBottom: '20px', color: '#1f2937' }}>
          Preguntas frecuentes
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div style={{ padding: '20px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
            <h4 style={{ fontWeight: '600', marginBottom: '8px', color: '#1f2937' }}>
              ¿Cuánto cuesta el metro?
            </h4>
            <p style={{ fontSize: '0.875rem', color: '#666', margin: 0 }}>
              $5 MXN por un viaje ilimitado. Puedes cambiar de líneas sin pagar extra. El Tren Ligero es $10 MXN adicionales.
            </p>
          </div>

          <div style={{ padding: '20px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
            <h4 style={{ fontWeight: '600', marginBottom: '8px', color: '#1f2937' }}>
              ¿Cómo calculo un transbordo?
            </h4>
            <p style={{ fontSize: '0.875rem', color: '#666', margin: 0 }}>
              Un transbordo es cambiar de línea. Si hay 1 transbordo, significa que viajarás en 2 líneas diferentes.
            </p>
          </div>

          <div style={{ padding: '20px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
            <h4 style={{ fontWeight: '600', marginBottom: '8px', color: '#1f2937' }}>
              ¿A qué hora abre el metro?
            </h4>
            <p style={{ fontSize: '0.875rem', color: '#666', margin: 0 }}>
              El metro abre a las 5:00 AM y cierra a las 12:00 AM (media noche). Horas pico: 7-9 AM y 5-7 PM.
            </p>
          </div>

          <div style={{ padding: '20px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
            <h4 style={{ fontWeight: '600', marginBottom: '8px', color: '#1f2937' }}>
              ¿Es seguro el metro?
            </h4>
            <p style={{ fontSize: '0.875rem', color: '#666', margin: 0 }}>
              Sí, es muy seguro durante el día. Viaja con cuidado en horas nocturnas. Mujeres tienen carros exclusivos.
            </p>
          </div>

          <div style={{ padding: '20px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
            <h4 style={{ fontWeight: '600', marginBottom: '8px', color: '#1f2937' }}>
              ¿Cómo compro boleto?
            </h4>
            <p style={{ fontSize: '0.875rem', color: '#666', margin: 0 }}>
              En taquillas o máquinas de venta automática. Usa la Tarjeta de Metro recargable (reutilizable) o compra sencilla.
            </p>
          </div>

          <div style={{ padding: '20px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
            <h4 style={{ fontWeight: '600', marginBottom: '8px', color: '#1f2937' }}>
              ¿Es realmente $5 MXN?
            </h4>
            <p style={{ fontSize: '0.875rem', color: '#666', margin: 0 }}>
              Sí, en 2026. Válido para un viaje de duración ilimitada con cambios de línea incluidos.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT ALGORITHM */}
      <section style={{
        backgroundColor: '#f3f4f6',
        borderRadius: '8px',
        padding: '32px',
        marginBottom: '40px',
      }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>
          ¿Cómo funciona el planificador?
        </h2>
        <p style={{ color: '#666', marginBottom: '12px' }}>
          MetroGuia utiliza un algoritmo <strong>BFS (Breadth-First Search)</strong> para encontrar el camino más corto entre dos estaciones.
          Esto significa que siempre obtendrás la ruta con el menor número de cambios de línea.
        </p>
        <p style={{ color: '#666', marginBottom: '12px' }}>
          Los tiempos estimados se calculan como:
        </p>
        <ul style={{ color: '#666', marginLeft: '20px', marginBottom: '12px' }}>
          <li>~2.5 minutos por estación</li>
          <li>~5 minutos adicionales por cada transbordo</li>
        </ul>
        <p style={{ color: '#666', margin: 0 }}>
          Estos son tiempos promedio — en horas pico puede tardar más.
        </p>
      </section>

      {/* CALL TO ACTION */}
      <section style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '16px', color: '#1f2937' }}>
          ¿No encontraste la ruta?
        </h2>
        <p style={{ fontSize: '1rem', color: '#666', marginBottom: '20px' }}>
          Explora todas las 195 estaciones del Metro CDMX y sus detalles.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '12px 32px',
            backgroundColor: '#f97316',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: '600',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ea580c'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f97316'}
        >
          Ver todas las estaciones
        </a>
      </section>
    </main>
  );
}
