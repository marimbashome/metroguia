import { lineasTrenMaya } from '@/data/tren-maya/lineas-detalle';
import { estacionesTrenMaya } from '@/data/tren-maya/estaciones';
import Link from 'next/link';

export const metadata = {
  title: 'Tren Maya — Conecta el Caribe Mexicano | MetroGuia',
  description: 'Guía completa del Tren Maya. 1554 km de ferrocarril turístico conectando Cancún, Riviera Maya, Chichén Itzá y Mérida. Perfecto para fans del FIFA 2026.',
  openGraph: {
    title: 'Tren Maya — Conecta el Caribe Mexicano',
    description: 'Descubre el Tren Maya con MetroGuia. Cancún, Riviera Maya, Chichén Itzá, Mérida y más. Destino turístico masivo.',
    url: 'https://metroguia.mx/tren-maya',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TrenMayaPage() {
  const estacionesDestacadas = estacionesTrenMaya.filter(e =>
    ['cancun', 'playa-del-carmen', 'tulum', 'bacalar', 'palenque', 'izamal', 'chichen-itza', 'valladolid'].includes(e.slug)
  );

  const heroStyles = {
    background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 100%)',
    color: '#ffffff',
    padding: '60px 20px',
    textAlign: 'center',
  };

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
  };

  const sectionTitleStyles = {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '30px',
    color: '#1f2937',
    textAlign: 'center',
  };

  const tramoCardStyles = {
    backgroundColor: '#f9fafb',
    border: '2px solid #e5e7eb',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const colorDotStyles = {
    display: 'inline-block',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    marginRight: '10px',
    verticalAlign: 'middle',
  };

  const estacionCardStyles = {
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '15px',
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginBottom: '40px',
  };

  const ctaButtonStyles = {
    display: 'inline-block',
    backgroundColor: '#0EA5E9',
    color: '#ffffff',
    padding: '14px 28px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginRight: '10px',
    marginBottom: '10px',
    transition: 'background-color 0.3s ease',
    border: 'none',
    cursor: 'pointer',
  };

  const infoBoxStyles = {
    backgroundColor: '#f0f9ff',
    borderLeft: '4px solid #0EA5E9',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '4px',
  };

  const fifaBoxStyles = {
    backgroundColor: '#fee2e2',
    borderLeft: '4px solid #ef4444',
    padding: '25px',
    marginBottom: '20px',
    borderRadius: '4px',
    borderTop: '3px solid #ef4444',
  };

  return (
    <main style={{ backgroundColor: '#ffffff' }}>
      {/* HERO SECTION */}
      <section style={heroStyles}>
        <h1 style={{ fontSize: '48px', marginBottom: '10px', fontWeight: 'bold' }}>
          🌊 Tren Maya
        </h1>
        <p style={{ fontSize: '20px', marginBottom: '20px' }}>
          Ferrocarril turístico conectando el Caribe mexicano a través de 1554 km de vías
        </p>
        <p style={{ fontSize: '16px', opacity: '0.95' }}>
          7 tramos • 16 estaciones principales • Cancún a Chichén Itzá pasando por Riviera Maya
        </p>
      </section>

      {/* SOBRE TREN MAYA */}
      <section style={containerStyles}>
        <h2 style={sectionTitleStyles}>Sobre el Tren Maya</h2>
        <div style={infoBoxStyles}>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#374151', marginBottom: '15px' }}>
            <strong>El Tren Maya</strong> es un tren turístico de pasajeros inaugurado en 2023 que recorre 1,554 kilómetros en forma de circuito por la Península de Yucatán. Conecta directamente los principales destinos turísticos del sureste de México: desde las playas de Cancún y Riviera Maya hasta las zonas arqueológicas de Chichén Itzá, Palenque y Uxmal.
          </p>
          <ul style={{ fontSize: '16px', lineHeight: '1.8', color: '#374151', paddingLeft: '20px' }}>
            <li><strong>Inaugurado:</strong> 2023, ferrocarril turístico moderno</li>
            <li><strong>Recorrido:</strong> 1554 km en forma de circuito cerrado</li>
            <li><strong>Velocidad máxima:</strong> 160 km/h</li>
            <li><strong>Estaciones principales:</strong> Cancún, Playa del Carmen, Tulum, Bacalar, Palenque, Mérida, Chichén Itzá</li>
            <li><strong>Precio típico:</strong> Desde $480 MXN (clase turista) hasta $1500+ (clases premium)</li>
            <li><strong>Duración de viajes:</strong> 1-3 horas entre estaciones principales</li>
            <li><strong>Destino turístico:</strong> Maravillas del mundo maya, cenotes, playas y gastronomía yucateca</li>
          </ul>
        </div>
      </section>

      {/* ESPECIAL PARA FIFA 2026 */}
      <section style={containerStyles}>
        <h2 style={sectionTitleStyles}>🏆 Para Fans del FIFA 2026</h2>
        <div style={fifaBoxStyles}>
          <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#dc2626', marginBottom: '15px' }}>
            Itinerario Turístico: Desde Cancún al Caribe Mexicano
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#374151', marginBottom: '15px' }}>
            Si llegas a Cancún para ver un partido en el Estadio Azteca u otros eventos del FIFA 2026, el Tren Maya es tu mejor opción para explorar el Caribe mexicano sin renta de auto.
          </p>
          <div style={{ backgroundColor: '#fff7ed', padding: '15px', borderRadius: '4px', marginBottom: '15px', borderLeft: '3px solid #f59e0b' }}>
            <h4 style={{ fontSize: '16px', fontWeight: 'bold', color: '#92400e', marginBottom: '10px' }}>Ejemplo de 3 días</h4>
            <p style={{ fontSize: '15px', color: '#78350f', marginBottom: '8px' }}>
              <strong>Día 1:</strong> Llega a Cancún (vuelo) → Toma el Tren Maya a Playa del Carmen (45 min)
            </p>
            <p style={{ fontSize: '15px', color: '#78350f', marginBottom: '8px' }}>
              <strong>Día 2:</strong> Playa del Carmen → Xcaret (parque acuático) → Tulum (ruinas mayas)
            </p>
            <p style={{ fontSize: '15px', color: '#78350f', marginBottom: '0px' }}>
              <strong>Día 3:</strong> Regresa a Cancún para vuelo hacia CDMX (vía Tren Maya + conexiones)
            </p>
          </div>
          <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#374151' }}>
            El Tren Maya te permite ver Chichén Itzá (una de las 7 Maravillas del Mundo) en una excursión de un día desde Cancún. También acceso fácil a cenotes, Riviera Maya, Bacalar y arqueología espectacular.
          </p>
        </div>
      </section>

      {/* TRAMOS/LINEAS */}
      <section style={containerStyles}>
        <h2 style={sectionTitleStyles}>Los 6 Tramos Principales del Tren Maya</h2>
        <div style={gridStyles}>
          {lineasTrenMaya.map((tramo) => (
            <Link
              key={tramo.id}
              href={`/tren-maya/linea/${tramo.id}`}
              style={{ textDecoration: 'none' }}
            >
              <div style={tramoCardStyles}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#1f2937' }}>
                  <span style={{ ...colorDotStyles, backgroundColor: tramo.color }}></span>
                  {tramo.id} — {tramo.colorNombre}
                </h3>
                <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '10px' }}>
                  {tramo.inicio} — {tramo.fin}
                </p>
                <p style={{ fontSize: '15px', color: '#374151', marginBottom: '10px' }}>
                  {tramo.descripcion}
                </p>
                <p style={{ fontSize: '13px', color: tramo.color, fontWeight: 'bold' }}>
                  {tramo.total} estaciones • {tramo.municipios.join(', ')}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ESTACIONES DESTACADAS */}
      <section style={{ ...containerStyles, backgroundColor: '#f9fafb', padding: '40px 20px', marginTop: '40px' }}>
        <h2 style={sectionTitleStyles}>Estaciones Turísticas Imprescindibles</h2>
        <div style={gridStyles}>
          {estacionesDestacadas.map((estacion) => (
            <Link
              key={estacion.slug}
              href={`/tren-maya/estacion/${estacion.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <div style={estacionCardStyles}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0EA5E9', marginBottom: '8px' }}>
                  {estacion.nombre}
                </h3>
                <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '10px' }}>
                  Tramo {estacion.linea} • {estacion.municipio}
                </p>
                <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.5' }}>
                  {estacion.intro}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* INFORMACIÓN TURÍSTICA */}
      <section style={containerStyles}>
        <h2 style={sectionTitleStyles}>Destinos Destacados del Tren Maya</h2>
        <div style={gridStyles}>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0EA5E9', marginBottom: '10px' }}>
              Riviera Maya (Cancún - Tulum)
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Playas paradisiacas, parques temáticos como Xcaret, vida nocturna en Playa del Carmen, y ruinas mayas de Tulum frente al mar.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0EA5E9', marginBottom: '10px' }}>
              Chichén Itzá — 7ª Maravilla del Mundo
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Una de las 7 Maravillas del Mundo Antiguo. El Castillo es la estructura más icónica de la civilización maya.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0EA5E9', marginBottom: '10px' }}>
              Laguna de los 7 Colores (Bacalar)
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Piscina natural de agua turquesa cristalina única. Cenotes subterráneos y atmósfera tranquila.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0EA5E9', marginBottom: '10px' }}>
              Palenque — Patrimonio UNESCO
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Joya arqueológica en la selva tropical de Chiapas. Arquitectura maya excepcional rodeada de naturaleza.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0EA5E9', marginBottom: '10px' }}>
              Cascadas de Agua Azul
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Cascadas con agua turquesa cristalina. Piscinas naturales y senderismo en la selva de Chiapas.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0EA5E9', marginBottom: '10px' }}>
              Mérida — La Ciudad Blanca
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Centro histórico, Paseo de Montejo, Gran Museo del Mundo Maya, y conexión con el SIT Mérida.
            </p>
          </div>
        </div>
      </section>

      {/* INFORMACIÓN PRÁCTICA */}
      <section style={{ ...containerStyles, backgroundColor: '#f0f9ff', padding: '40px 20px', marginTop: '40px', borderRadius: '8px' }}>
        <h2 style={sectionTitleStyles}>Información Práctica del Tren Maya</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#0EA5E9', marginBottom: '10px' }}>Horarios</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>Operación diaria. Horarios varían por tramo. Algunos tramos cierran temporalmente por mantenimiento.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#0EA5E9', marginBottom: '10px' }}>Clases de Servicio</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>Turista, Premium, Primera Clase. Diferentes precios y comodidades según clase elegida.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#0EA5E9', marginBottom: '10px' }}>Duración de Viajes</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>Cancún-Tulum: 1h • Cancún-Mérida: 4-5h • Tramo completo: hasta 15 horas</p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#0EA5E9', marginBottom: '10px' }}>Reservas</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>Se recomiendan reservas con anticipación, especialmente en temporada de vacaciones.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#0EA5E9', marginBottom: '10px' }}>Mejor Época</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>Diciembre a abril. Evita junio-septiembre (lluvia y calor extremo).</p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#0EA5E9', marginBottom: '10px' }}>Servicios a Bordo</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>Restaurante, WiFi, sanitarios limpios. Vistas panorámicas del Caribe.</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ ...containerStyles, textAlign: 'center', paddingTop: '60px', paddingBottom: '60px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', color: '#1f2937' }}>
          Explora el Caribe Mexicano en Tren Maya
        </h2>
        <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '30px' }}>
          Descubre cada tramo y estación del ferrocarril turístico más importante del Caribe mexicano.
        </p>
        <div style={{ marginBottom: '20px' }}>
          <Link href="/tren-maya/linea/T1" style={ctaButtonStyles}>
            Explorar Tramo 1: Riviera Maya
          </Link>
          <Link href="/tren-maya/linea/T7" style={ctaButtonStyles}>
            Explorar Tramo 7: Maravilla del Mundo
          </Link>
          <Link href="/tren-maya/linea/T6" style={ctaButtonStyles}>
            Explorar Tramo 6: Mérida
          </Link>
        </div>
      </section>
    </main>
  );
}
