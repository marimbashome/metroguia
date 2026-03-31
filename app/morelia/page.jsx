import { lineasMorelia } from '@/data/morelia/lineas-detalle';
import { estacionesMorelia } from '@/data/morelia/estaciones';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';

export const metadata = {
  title: 'Morelia - Teleférico Sustentable | MetroGuia',
  description: 'Descubre el Teleférico de Morelia, sistema aéreo innovador de 5.6 km. Conecta el centro histórico UNESCO con zonas residenciales y naturales. Opening Fall 2026.',
  openGraph: {
    title: 'Morelia - Teleférico Sustentable | MetroGuia',
    description: 'El Teleférico de Morelia: transporte aéreo sustentable conectando historia, innovación y naturaleza.',
    url: 'https://metroguia.mx/morelia/',
    type: 'website',
  },
};

export default function MoreliaPage() {
  const linea = lineasMorelia[0];
  const estacionesTuristicas = estacionesMorelia.filter((e) => linea.estaciones_turisticas.includes(e.slug));

  const containerStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
  };

  const heroStyles = {
    background: `linear-gradient(135deg, #059669 0%, #047857 100%)`,
    color: '#ffffff',
    padding: '60px 20px',
    textAlign: 'center',
  };

  const announcementStyles = {
    backgroundColor: '#d1fae5',
    borderLeft: '4px solid #059669',
    padding: '20px',
    borderRadius: '4px',
    marginBottom: '30px',
    color: '#065f46',
  };

  const sectionStyles = {
    padding: '40px 0',
    borderBottom: '1px solid #e5e7eb',
  };

  const sectionTitleStyles = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#1f2937',
  };

  const cardStyles = {
    backgroundColor: '#ffffff',
    border: '1px solid #e5e7eb',
    borderRadius: '6px',
    padding: '20px',
    marginBottom: '15px',
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    marginBottom: '20px',
  };

  const lineaCardStyles = {
    backgroundColor: '#f0fdf4',
    border: '2px solid #059669',
    borderRadius: '8px',
    padding: '25px',
    textAlign: 'center',
    marginBottom: '20px',
  };

  const estacionCardStyles = {
    backgroundColor: '#ffffff',
    border: '2px solid #059669',
    borderRadius: '8px',
    padding: '20px',
    height: '100%',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  const buttonStyles = {
    display: 'inline-block',
    backgroundColor: '#059669',
    color: '#ffffff',
    padding: '12px 24px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginRight: '10px',
    marginBottom: '10px',
    transition: 'opacity 0.3s ease',
  };

  const tipStyles = {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '15px',
  };

  const tipNumberStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30px',
    height: '30px',
    minWidth: '30px',
    backgroundColor: '#059669',
    color: '#ffffff',
    borderRadius: '50%',
    fontWeight: 'bold',
    marginRight: '15px',
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'MetroGuia',
        item: 'https://metroguia.mx'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Morelia',
        item: 'https://metroguia.mx/morelia/'
      }
    ]
  };

  const tips = [
    "Compra tu tarjeta recargable en las estaciones principales. El transbordo es gratuito dentro de 30 minutos.",
    "Viaja en las primeras horas de la mañana para disfrutar de vistas panorámicas sin niebla desde el teleférico.",
    "Descarga la app MetroGuia para recibir alertas en tiempo real sobre el estado del servicio.",
    "Visita el Centro Histórico UNESCO por la mañana, sube en teleférico a mediodía, y disfruta de la naturaleza por la tarde.",
    "Los fines de semana hay líneas especiales hacia el Acueducto Colonial. Consulta horarios en las estaciones.",
    "Come en los restaurantes cercanos a cada estación. La gastronomía moreliana es reconocida a nivel nacional."
  ];

  const attractions = [
    { title: "Centro Histórico UNESCO", description: "Patrimonio mundial con arquitectura colonial de los siglos XVI-XVIII. Plazas, templos y museos en el corazón de Morelia." },
    { title: "Teleférico Innovación", description: "Sistema aéreo sustentable de 5.6 km. Primera línea de teleférico del estado con vistas panorámicas únicas." },
    { title: "Acueducto Colonial", description: "Obra maestra del siglo XVIII con 253 arcos de cantera. Acceso directo desde el teleférico." },
    { title: "Santuario Cibernético", description: "Centro de educación tecnológica y emprendimiento. Símbolo de la Morelia del siglo XXI." },
    { title: "Naturaleza Urbana", description: "Parques y miradores con vistas a la sierra. Ecosistema urbano integrado con el entorno natural." },
    { title: "Gastronomía Moreliana", description: "Corundas, enchiladas moreliana y carnitas. Tradición culinaria en mercados y restaurantes auténticos." }
  ];

  return (
    <main style={{ backgroundColor: '#ffffff' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* HERO */}
      <section style={heroStyles}>
        <div style={containerStyles}>
          <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '15px' }}>
            El Teleférico de Morelia
          </h1>
          <p style={{ fontSize: '20px', opacity: '0.95', marginBottom: '10px' }}>
            Transporte aéreo sustentable que conecta historia, innovación y naturaleza
          </p>
          <p style={{ fontSize: '16px', opacity: '0.9' }}>
            5.6 km de recorrido • 6 estaciones • Inauguración Fall 2026
          </p>
        </div>
      </section>

      {/* CONTENIDO PRINCIPAL */}
      <section style={{ ...containerStyles, ...sectionStyles, paddingTop: '40px' }}>
        <AdBannerLazy adSlot="4434764790" format="auto" />
        
        {/* ANUNCIO */}
        <div style={announcementStyles}>
          <p style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '8px' }}>
            Inauguración programada para Fall 2026
          </p>
          <p style={{ fontSize: '14px', margin: 0 }}>
            El Teleférico de Morelia está en fase final de construcción. Será el sistema de transporte aéreo más moderno de México.
          </p>
        </div>

        {/* TELEFÉRICO */}
        <div style={lineaCardStyles}>
          <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#059669', marginBottom: '15px' }}>
            {linea.nombre}
          </h2>
          <p style={{ fontSize: '16px', color: '#374151', lineHeight: '1.7', marginBottom: '15px' }}>
            {linea.descripcion}
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '20px', fontSize: '14px', color: '#6b7280' }}>
            <div><strong>Recorrido:</strong> {linea.inicio} → {linea.fin}</div>
            <div><strong>Longitud:</strong> 5.6 km</div>
            <div><strong>Estaciones:</strong> {linea.total}</div>
          </div>
          <Link href="/morelia/linea/1" style={buttonStyles}>
            Ver Teleférico Completo
          </Link>
        </div>
      </section>

      {/* ESTACIONES TURÍSTICAS */}
      <section style={{ ...containerStyles, ...sectionStyles, paddingTop: '40px' }}>
        <h2 style={sectionTitleStyles}>Estaciones Turísticas Imprescindibles</h2>
        <div style={gridStyles}>
          {estacionesTuristicas.map((estacion) => (
            <Link
              key={estacion.slug}
              href={`/morelia/estacion/${estacion.slug}`}
              style={{ textDecoration: 'none' }}
            >
              <div style={estacionCardStyles}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#059669', marginBottom: '10px' }}>
                  {estacion.nombre}
                </h3>
                <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '10px' }}>
                  {estacion.tipo_zona}
                </p>
                <p style={{ fontSize: '15px', color: '#374151', lineHeight: '1.5' }}>
                  {estacion.intro}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ATRACCIONES PRINCIPALES */}
      <section style={{ ...containerStyles, ...sectionStyles, paddingTop: '40px' }}>
        <AdBannerLazyInArticle adSlot="1082410395" />
        <h2 style={sectionTitleStyles}>Atracciones Principales</h2>
        <div style={gridStyles}>
          {attractions.map((attraction, idx) => (
            <div key={idx} style={cardStyles}>
              <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#059669', marginBottom: '10px' }}>
                {attraction.title}
              </h3>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.6', margin: 0 }}>
                {attraction.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* TIPS */}
      <section style={{ ...containerStyles, ...sectionStyles, paddingTop: '40px' }}>
        <h2 style={sectionTitleStyles}>Tips para Visitar Morelia</h2>
        <div style={cardStyles}>
          {tips.map((tip, idx) => (
            <div key={idx} style={tipStyles}>
              <div style={tipNumberStyles}>{idx + 1}</div>
              <p style={{ fontSize: '15px', color: '#374151', lineHeight: '1.6', margin: 0 }}>
                {tip}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INFORMACIÓN ÚTIL */}
      <section style={{ ...containerStyles, ...sectionStyles, paddingTop: '40px' }}>
        <h2 style={sectionTitleStyles}>Información Útil</h2>
        <div style={gridStyles}>
          <div style={cardStyles}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#059669', marginBottom: '10px' }}>
              Horarios (cuando inicie operaciones)
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6', margin: 0 }}>
              De 6:00 AM a 10:00 PM. Frecuencia cada 3-5 minutos en horario pico.
            </p>
          </div>
          <div style={cardStyles}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#059669', marginBottom: '10px' }}>
              Tarifa
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6', margin: 0 }}>
              Tarjeta recargable RUTA Verde. Transbordo gratuito dentro de 30 minutos.
            </p>
          </div>
          <div style={cardStyles}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: '#059669', marginBottom: '10px' }}>
              Accesibilidad
            </h3>
            <p style={{ fontSize: '14px', color: '#374151', lineHeight: '1.6', margin: 0 }}>
              Cabinas adaptadas para sillas de ruedas. Asistencia en todas las estaciones.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ ...containerStyles, paddingTop: '40px', paddingBottom: '40px', textAlign: 'center' }}>
        <h2 style={sectionTitleStyles}>Continúa Explorando</h2>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/morelia/linea/1" style={buttonStyles}>
            Ver Teleférico Completo
          </Link>
          <Link href="/" style={buttonStyles}>
            Volver a MetroGuia
          </Link>
        </div>
      </section>
    </main>
  );
}
