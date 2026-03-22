import { lineasToluca } from '@/data/toluca/lineas-detalle';
import { estacionesToluca } from '@/data/toluca/estaciones';
import Link from 'next/link';

export const metadata = {
  title: 'Toluca y Tren Interurbano México-Toluca — Guía Completa | MetroGuia',
  description: 'Guía completa de Toluca con Tren Interurbano México-Toluca + Mexibús. 65 minutos a CDMX FIFA 2026. Cosmovitral, Metepec artesanal, Nevado y Portales únicos.',
  openGraph: {
    title: 'Toluca y Tren Interurbano — Sistema de Transporte',
    description: 'Descubre Toluca con el Tren Interurbano y Mexibús. Viaja a CDMX sede FIFA 2026 en 65 minutos. Hospedaje más económico.',
    url: 'https://metroguia.mx/toluca',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TolucaPage() {
  const estacionesDestacadas = estacionesToluca.filter(e =>
    ['observatorio-cdmx', 'metepec', 'zinacantepec-terminal', 'cosmovitral', 'toluca-centro-bus'].includes(e.slug)
  );

  const heroStyles = {
    background: 'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)',
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

  const lineaCardStyles = {
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
    backgroundColor: '#7C3AED',
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
    backgroundColor: '#F3E8FF',
    borderLeft: '4px solid #7C3AED',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '4px',
  };

  const highlightBoxStyles = {
    backgroundColor: '#FEF3C7',
    border: '2px solid #F59E0B',
    padding: '20px',
    marginBottom: '30px',
    borderRadius: '8px',
    textAlign: 'center',
  };

  const fifaBoxStyles = {
    backgroundColor: '#DBEAFE',
    border: '2px solid #3B82F6',
    padding: '20px',
    marginBottom: '30px',
    borderRadius: '8px',
    textAlign: 'center',
  };

  return (
    <main style={{ backgroundColor: '#ffffff' }}>
      {/* HERO SECTION */}
      <section style={heroStyles}>
        <h1 style={{ fontSize: '48px', marginBottom: '10px', fontWeight: 'bold' }}>
          🚄 Toluca + Tren Interurbano
        </h1>
        <p style={{ fontSize: '20px', marginBottom: '20px' }}>
          Tren Interurbano México-Toluca + Mexibús. El tren más nuevo de México.
        </p>
        <p style={{ fontSize: '16px', opacity: '0.95' }}>
          57.7 km en 65 minutos • 3 líneas de transporte • Cosmovitral, Metepec, Nevado y Portales únicos
        </p>
      </section>

      {/* ABOUT TOLUCA */}
      <section style={containerStyles}>
        <h2 style={sectionTitleStyles}>Sobre Toluca</h2>
        <div style={infoBoxStyles}>
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#374151', marginBottom: '15px' }}>
            <strong>Toluca de Lerdo</strong> es la capital del Estado de México, ciudad de tradición artesanal, naturaleza y patrimonio cultural. Famosa por sus Portales únicos en México (arquitectura colonial del siglo XVIII), el Cosmovitral con el vitral más grande del mundo, las artesanías de Metepec, y acceso al Nevado de Toluca.
          </p>
          <ul style={{ fontSize: '16px', lineHeight: '1.8', color: '#374151', paddingLeft: '20px' }}>
            <li><strong>Tren Interurbano:</strong> Inaugurado diciembre 2023, 57.7 km en 65 minutos a CDMX</li>
            <li><strong>Portales de Toluca:</strong> Única arquitectura de portales en México, siglo XVIII</li>
            <li><strong>Cosmovitral:</strong> Vitral más grande del mundo como ventana, jardín botánico</li>
            <li><strong>Metepec Artesanal:</strong> Barro negro, Tonalámatl (calendario prehispánico), cerámica</li>
            <li><strong>Nevado de Toluca:</strong> Volcán activo con lagunas glaciares a 4,680 msnm</li>
            <li><strong>Gastronomía:</strong> Atole, tamales, pan de elote, comida típica mexiquense</li>
          </ul>
        </div>
      </section>

      {/* FIFA 2026 SECTION */}
      <section style={fifaBoxStyles}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '15px', color: '#1E40AF' }}>
          ⚽ FIFA 2026: Toluca como Base Económica
        </h2>
        <p style={{ fontSize: '16px', color: '#1f2937', marginBottom: '15px', lineHeight: '1.6' }}>
          <strong>Hospédate en Toluca (40% más económico que CDMX) y viaja en 65 minutos al Estadio Azteca</strong> para los partidos del FIFA 2026 en Ciudad de México. El Tren Interurbano conecta Observatorio CDMX (Línea 1 Metro) directamente con Terminal Zinacantepec.
        </p>
        <p style={{ fontSize: '14px', color: '#1f2937', fontWeight: 'bold' }}>
          ✓ Viaje directo CDMX-Toluca • ✓ Hotels más económicos • ✓ Tren moderno y cómodo • ✓ 65 minutos puerta a puerta
        </p>
      </section>

      {/* TREN INTERURBANO ESPECIAL */}
      <section style={highlightBoxStyles}>
        <h2 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '15px', color: '#B45309' }}>
          🚄 Tren Interurbano México-Toluca
        </h2>
        <p style={{ fontSize: '16px', color: '#374151', marginBottom: '15px', lineHeight: '1.6' }}>
          <strong>El tren más nuevo de México, inaugurado en diciembre 2023.</strong> Recorre 57.7 km en aproximadamente 65 minutos. Conecta Estación Observatorio (Metro CDMX Línea 1) con Terminal Zinacantepec. Trenes eléctricos de 6 vagones, operan de 5:00 AM a 10:00 PM.
        </p>
        <p style={{ fontSize: '14px', color: '#374151', marginBottom: '10px' }}>
          <strong>Tarifa:</strong> ~$93 MXN clase turista (varía) • <strong>Capacidad:</strong> 6 vagones • <strong>Estaciones:</strong> 5 paradas principales
        </p>
        <p style={{ fontSize: '14px', color: '#6b7280' }}>
          <strong>Datos:</strong> Salida desde Observatorio integrada con Metro CDMX. Paradas en Lerma, San Mateo Atenco, Metepec (artesanías) y Terminal Zinacantepec (conexión Mexibús).
        </p>
      </section>

      {/* LÍNEAS/TRANSPORTES */}
      <section style={containerStyles}>
        <h2 style={sectionTitleStyles}>Sistemas de Transporte</h2>
        <div style={gridStyles}>
          {lineasToluca.map((linea) => (
            <Link
              key={linea.id}
              href={`/toluca/linea/${linea.id}`}
              style={{ textDecoration: 'none' }}
            >
              <div style={lineaCardStyles}>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#1f2937' }}>
                  <span style={{ ...colorDotStyles, backgroundColor: linea.color }}></span>
                  {linea.id === 'TI' ? 'Tren Interurbano' : `Mexibús ${linea.id}`}
                </h3>
                <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '10px' }}>
                  {linea.inicio} — {linea.fin}
                </p>
                <p style={{ fontSize: '15px', color: '#374151', marginBottom: '10px' }}>
                  {linea.descripcion}
                </p>
                <p style={{ fontSize: '13px', color: '#7C3AED', fontWeight: 'bold' }}>
                  {linea.total} paradas • {linea.municipios.join(', ')}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ESTACIONES DESTACADAS */}
      <section style={{ ...containerStyles, backgroundColor: '#f9fafb', padding: '40px 20px', marginTop: '40px' }}>
        <h2 style={sectionTitleStyles}>Estaciones Imprescindibles</h2>
        <div style={gridStyles}>
          {estacionesDestacadas.map((estacion) => (
            <Link
              key={estacion.slug}
              href={`/toluca/estacion/${estacion.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <div style={estacionCardStyles}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#7C3AED', marginBottom: '8px' }}>
                  {estacion.nombre}
                </h3>
                <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '10px' }}>
                  {estacion.linea} • {estacion.municipio}
                </p>
                <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.5' }}>
                  {estacion.intro}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* INFORMACIÓN TURÍSTICA ADICIONAL */}
      <section style={containerStyles}>
        <h2 style={sectionTitleStyles}>Qué Hacer en Toluca</h2>
        <div style={gridStyles}>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#7C3AED', marginBottom: '10px' }}>
              🎨 Cosmovitral
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Vitral más grande del mundo como ventana (3,900 m²). Jardín botánico único con exposiciones de arte y naturaleza combinados.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#7C3AED', marginBottom: '10px' }}>
              🏛️ Portales
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Única arquitectura de portales en México. Siglo XVIII con soportales que albergan tiendas, cafés y comercios históricos.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#7C3AED', marginBottom: '10px' }}>
              🏺 Metepec Artesanal
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Barro negro, Tonalámatl (calendario prehispánico), cerámica policromada. Mercado artesanal con artículos únicos hechos a mano.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#7C3AED', marginBottom: '10px' }}>
              🏔️ Nevado de Toluca
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Volcán activo Xinantécatl con lagunas glaciares a 4,680 msnm. Caminatas, vistas espectaculares y aventura natural.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#7C3AED', marginBottom: '10px' }}>
              🍲 Gastronomía
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Atole, tamales, pan de elote, comida típica mexiquense. Mercado 16 de Septiembre ofrece lo más auténtico de la región.
            </p>
          </div>
          <div style={estacionCardStyles}>
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#7C3AED', marginBottom: '10px' }}>
              🌳 Naturaleza
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
              Parques y senderos ecológicos. Acceso a espacios verdes para recreación, caminatas y contacto con la naturaleza.
            </p>
          </div>
        </div>
      </section>

      {/* TIPS Y HORARIOS */}
      <section style={{ ...containerStyles, backgroundColor: '#f3f0ff', padding: '40px 20px', marginTop: '40px', borderRadius: '8px' }}>
        <h2 style={sectionTitleStyles}>Tips para el Tren Interurbano y Toluca</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#7C3AED', marginBottom: '10px' }}>Horarios Tren</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>Operan de 5:00 AM a 10:00 PM. Frecuencia cada 10-15 minutos en horarios pico. Salida desde Observatorio integrada con Metro.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#7C3AED', marginBottom: '10px' }}>Tarifa Tren</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>~$93 MXN clase turista. Tarjeta recargable. Tiempo: 65 minutos Observatorio-Zinacantepec.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#7C3AED', marginBottom: '10px' }}>Conexión Mexibús</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>Terminal Zinacantepec conecta con Mexibús Líneas 1 y 2. Acceso a Toluca Centro, Cosmovitral y Metepec.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#7C3AED', marginBottom: '10px' }}>Mejor Época</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>Octubre a mayo. Clima seco. Nevado de Toluca mejor en primavera. Evita julio-septiembre por lluvias.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#7C3AED', marginBottom: '10px' }}>FIFA 2026</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>Hospédate en Toluca (económico), viaja 65 minutos a CDMX para partidos. Observatorio conecta con Metro CDMX Línea 1.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#7C3AED', marginBottom: '10px' }}>Seguridad</h3>
            <p style={{ fontSize: '14px', color: '#374151' }}>Tren moderno, seguro. Estaciones monitoreadas. Viaja con pertenencias aseguradas, evita horas nocturnas.</p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ ...containerStyles, textAlign: 'center', paddingTop: '60px', paddingBottom: '60px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '20px', color: '#1f2937' }}>
          Explora Toluca con MetroGuia
        </h2>
        <p style={{ fontSize: '16px', color: '#6b7280', marginBottom: '30px' }}>
          Descubre Toluca y el Tren Interurbano a través de nuestras guías detalladas de estaciones y líneas de transporte.
        </p>
        <div style={{ marginBottom: '20px' }}>
          <Link href="/toluca/linea/TI" style={ctaButtonStyles}>
            Tren Interurbano
          </Link>
          <Link href="/toluca/linea/M1" style={ctaButtonStyles}>
            Mexibús Línea 1
          </Link>
          <Link href="/toluca/linea/M2" style={ctaButtonStyles}>
            Mexibús Línea 2
          </Link>
        </div>
      </section>
    </main>
  );
}
