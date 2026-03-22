import { lineasQueretaro } from '@/data/queretaro/lineas-detalle';
import { estacionesQueretaro } from '@/data/queretaro/estaciones';
import Link from 'next/link';

export const metadata = {
  title: 'Q-BUS Querétaro — Sistema de Transporte | MetroGuia',
  description: 'Q-BUS Querétaro: 3 corredores de transporte rápido conectando el Centro Histórico Patrimonio UNESCO, Acueducto y zonas de negocios.',
  openGraph: {
    title: 'Q-BUS Querétaro — Sistema de Transporte | MetroGuia',
    description: 'Q-BUS Querétaro: 3 corredores de transporte rápido conectando el Centro Histórico Patrimonio UNESCO, Acueducto y zonas de negocios.',
    url: 'https://metroguia.mx/queretaro',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function QueretatoPage() {
  const estacionesDestacadas = estacionesQueretaro.filter(e => 
    ['centro-historico-qro', 'jardin-zenea-qro', 'acueducto-qro', 'tec-monterrey-qro', 'alameda-qro', 'estadio-corregidora-qro'].includes(e.slug)
  );

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
  };

  const heroStyles = {
    background: 'linear-gradient(135deg, #EF4444 0%, #DC2626 100%)',
    color: '#ffffff',
    padding: '60px 20px',
    marginBottom: '40px',
  };

  const heroContentStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const statsRowStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '30px',
    marginTop: '30px',
  };

  const statItemStyles = {
    textAlign: 'center',
  };

  const statNumberStyles = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const statLabelStyles = {
    fontSize: '14px',
    opacity: '0.9',
  };

  const sectionTitleStyles = {
    fontSize: '32px',
    fontWeight: 'bold',
    color: '#1f2937',
    marginBottom: '30px',
    paddingBottom: '15px',
    borderBottom: '3px solid #EF4444',
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    marginBottom: '40px',
  };

  const cardStyles = {
    backgroundColor: '#f9fafb',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '20px',
  };

  const lineaCardStyles = {
    backgroundColor: '#ffffff',
    border: '2px solid',
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    cursor: 'pointer',
    transition: 'transform 0.2s, box-shadow 0.2s',
  };

  const colorIndicatorStyles = {
    display: 'inline-block',
    width: '16px',
    height: '16px',
    borderRadius: '50%',
    marginRight: '8px',
    verticalAlign: 'middle',
  };

  const estacionCardStyles = {
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '8px',
    padding: '15px',
    marginBottom: '15px',
  };

  const highlightBoxStyles = {
    backgroundColor: '#FEF3C7',
    borderLeft: '4px solid #F59E0B',
    padding: '20px',
    marginBottom: '30px',
    borderRadius: '4px',
  };

  const ctaButtonStyles = {
    display: 'inline-block',
    padding: '12px 24px',
    backgroundColor: '#EF4444',
    color: '#ffffff',
    textDecoration: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    marginRight: '15px',
    marginBottom: '15px',
    transition: 'background-color 0.2s',
  };

  const infoBoxStyles = {
    backgroundColor: '#ECFDF5',
    borderLeft: '4px solid #10B981',
    padding: '20px',
    marginBottom: '20px',
    borderRadius: '4px',
  };

  return (
    <main style={{ backgroundColor: '#ffffff' }}>
      {/* HERO */}
      <section style={heroStyles}>
        <div style={heroContentStyles}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '10px' }}>
            🏰 Q-BUS Querétaro
          </h1>
          <p style={{ fontSize: '20px', marginBottom: '10px', opacity: '0.95' }}>
            Sistema Rápido de Transporte Urbano
          </p>
          <p style={{ fontSize: '16px', opacity: '0.85', marginBottom: '20px' }}>
            Conecta el Centro Histórico Patrimonio UNESCO, el Acueducto y zonas de innovación
          </p>
          <div style={statsRowStyles}>
            <div style={statItemStyles}>
              <div style={statNumberStyles}>3</div>
              <div style={statLabelStyles}>Corredores</div>
            </div>
            <div style={statItemStyles}>
              <div style={statNumberStyles}>18</div>
              <div style={statLabelStyles}>Estaciones</div>
            </div>
            <div style={statItemStyles}>
              <div style={statNumberStyles}>Patrimonio</div>
              <div style={statLabelStyles}>UNESCO</div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section style={containerStyles}>
        {/* SOBRE QUERÉTARO */}
        <div style={{ marginBottom: '50px' }}>
          <h2 style={sectionTitleStyles}>Sobre Querétaro</h2>
          <p style={{ fontSize: '16px', color: '#374151', lineHeight: '1.8', marginBottom: '15px' }}>
            Querétaro es una ciudad de contrastes: patrimonio colonial del siglo XVI con innovación moderna. El Centro Histórico es Patrimonio de la Humanidad, mientras que la región se destaca por su industria aeroespacial de clase mundial, con presencia de empresas como Airbus y Bombardier.
          </p>
          <div style={{ marginTop: '20px', marginBottom: '20px' }}>
            <strong style={{ fontSize: '16px', color: '#1f2937' }}>Lo que debes saber:</strong>
            <ul style={{ fontSize: '15px', color: '#374151', lineHeight: '1.8', paddingLeft: '20px', marginTop: '10px' }}>
              <li>Centro Histórico declarado Patrimonio de la Humanidad en 1996</li>
              <li>Hogar del emblemático Acueducto (1726) — 74 arcos de piedra</li>
              <li>Hub aeroespacial con universidades de clase mundial (TEC, UAQ)</li>
              <li>Zona Piel y artesanías locales — Constelación de pueblos mágicos cerca</li>
              <li>Capital gastronómica con mercados tradicionales (Ezequiel Montes)</li>
            </ul>
          </div>
        </div>

        {/* DESTACA: PATRIMONIO Y MODERNIDAD */}
        <div style={highlightBoxStyles}>
          <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#B45309', marginBottom: '10px' }}>
            ✨ Patrimonio y Modernidad
          </h3>
          <p style={{ fontSize: '15px', color: '#374151', lineHeight: '1.7' }}>
            Q-BUS conecta lo mejor de Querétaro: desde el Centro Histórico Patrimonio UNESCO y sus iglesias barrocas, hasta el Acueducto de 300 años y modernos campus tecnológicos. El Q-BUS te lleva a través de los siglos en minutos.
          </p>
        </div>

        {/* LOS 3 CORREDORES */}
        <div style={{ marginBottom: '50px' }}>
          <h2 style={sectionTitleStyles}>Los 3 Corredores Q-BUS</h2>
          <div>
            {lineasQueretaro.map((linea) => (
              <Link
                key={linea.id}
                href={`/queretaro/linea/${linea.id}`}
                style={{ textDecoration: 'none' }}
              >
                <div style={{ ...lineaCardStyles, borderColor: linea.color }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ ...colorIndicatorStyles, backgroundColor: linea.color }}></span>
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', margin: '0' }}>
                      Corredor {linea.id} — {linea.colorNombre}
                    </h3>
                  </div>
                  <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '10px' }}>
                    {linea.inicio} → {linea.fin}
                  </p>
                  <p style={{ fontSize: '15px', color: '#374151', lineHeight: '1.6' }}>
                    {linea.descripcion}
                  </p>
                  <p style={{ fontSize: '13px', color: '#9ca3af', marginTop: '10px' }}>
                    {linea.total} estaciones • {linea.municipios.join(', ')}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ESTACIONES IMPRESCINDIBLES */}
        <div style={{ marginBottom: '50px' }}>
          <h2 style={sectionTitleStyles}>🌟 Estaciones Imprescindibles</h2>
          <div style={gridStyles}>
            {estacionesDestacadas.map((estacion) => (
              <Link
                key={estacion.slug}
                href={`/queretaro/estacion/${estacion.slug}`}
                style={{ textDecoration: 'none' }}
              >
                <div style={estacionCardStyles}>
                  <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#EF4444', marginBottom: '8px' }}>
                    {estacion.nombre}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#6b7280', marginBottom: '8px' }}>
                    Corredor {estacion.linea} • {estacion.tipo_zona}
                  </p>
                  <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.5' }}>
                    {estacion.intro.substring(0, 100)}...
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* QUÉ HACER EN QUERÉTARO */}
        <div style={{ marginBottom: '50px' }}>
          <h2 style={sectionTitleStyles}>🎭 Actividades y Atracciones</h2>
          <div style={gridStyles}>
            <div style={cardStyles}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#EF4444', marginBottom: '10px' }}>
                Centro Histórico
              </h3>
              <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
                Patrimonio UNESCO con iglesias barrocas, plazas coloniales, y galerías de arte. La Catedral Metropolitana es imprescindible.
              </p>
            </div>
            <div style={cardStyles}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#EF4444', marginBottom: '10px' }}>
                Acueducto
              </h3>
              <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
                Monumento del siglo XVIII con 74 arcos de cantera rosa. Icono arquitectónico y punto de encuentro de la ciudad.
              </p>
            </div>
            <div style={cardStyles}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#EF4444', marginBottom: '10px' }}>
                Estadio La Corregidora
              </h3>
              <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
                Casa del FC Querétaro. Experiencia futbolística mexicana con estadio moderno de 43,000 capacidad.
              </p>
            </div>
            <div style={cardStyles}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#EF4444', marginBottom: '10px' }}>
                Gastronomía
              </h3>
              <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
                Tlacoyos, enchiladas y quesadillas. Mercado Ezequiel Montes y restaurantes coloniales en el Centro.
              </p>
            </div>
            <div style={cardStyles}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#EF4444', marginBottom: '10px' }}>
                Vida Nocturna
              </h3>
              <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
                Bares y restaurantes en Barrio La Cruz. Ambiente bohemio con arte local y mezcal artesanal.
              </p>
            </div>
            <div style={cardStyles}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#EF4444', marginBottom: '10px' }}>
                Pueblos Mágicos
              </h3>
              <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6' }}>
                San Juan del Río, Tequisquiapan, y Cadereyta están a corta distancia. Excursiones de 1-2 horas.
              </p>
            </div>
          </div>
        </div>

        {/* TIPS PARA VIAJAR */}
        <div style={{ marginBottom: '50px' }}>
          <h2 style={sectionTitleStyles}>💡 Tips para Viajar en Q-BUS</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            <div style={infoBoxStyles}>
              <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#059669', marginBottom: '8px' }}>
                ⏰ Horarios
              </h4>
              <p style={{ fontSize: '14px', color: '#374151' }}>
                Q-BUS opera de 6:00 AM a 10:00 PM. Frecuencia: cada 10-15 minutos en horario pico.
              </p>
            </div>
            <div style={infoBoxStyles}>
              <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#059669', marginBottom: '8px' }}>
                💳 Pago
              </h4>
              <p style={{ fontSize: '14px', color: '#374151' }}>
                Tarjeta Inteligente Querétaro (TIQ) $40. Viajes a $9.50. Disponible en Terminal y estaciones.
              </p>
            </div>
            <div style={infoBoxStyles}>
              <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#059669', marginBottom: '8px' }}>
                🛡️ Seguridad
              </h4>
              <p style={{ fontSize: '14px', color: '#374151' }}>
                Q-BUS es seguro y monitorizado. Evita horas muy tardías. Centro es seguro de día.
              </p>
            </div>
            <div style={infoBoxStyles}>
              <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#059669', marginBottom: '8px' }}>
                🌡️ Mejor Época
              </h4>
              <p style={{ fontSize: '14px', color: '#374151' }}>
                Septiembre-mayo: clima perfecto 18-25°C. Evita calor de junio-agosto.
              </p>
            </div>
            <div style={infoBoxStyles}>
              <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#059669', marginBottom: '8px' }}>
                ♿ Accesibilidad
              </h4>
              <p style={{ fontSize: '14px', color: '#374151' }}>
                Todas las estaciones tienen rampas. Buses son accesibles para personas con movilidad reducida.
              </p>
            </div>
            <div style={infoBoxStyles}>
              <h4 style={{ fontSize: '15px', fontWeight: 'bold', color: '#059669', marginBottom: '8px' }}>
                🗣️ Idioma
              </h4>
              <p style={{ fontSize: '14px', color: '#374151' }}>
                Español. El Centro Histórico tiene señalización en inglés. Apps disponibles en inglés.
              </p>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid #e5e7eb' }}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1f2937', marginBottom: '30px' }}>
            Explora los Corredores
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
            {lineasQueretaro.map((linea) => (
              <Link
                key={linea.id}
                href={`/queretaro/linea/${linea.id}`}
                style={{ textDecoration: 'none' }}
              >
                <button
                  style={{
                    ...ctaButtonStyles,
                    backgroundColor: linea.color,
                    cursor: 'pointer',
                    border: 'none',
                    fontSize: '14px',
                  }}
                >
                  Ver Corredor {linea.id}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
