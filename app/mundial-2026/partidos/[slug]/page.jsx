import { mundial2026 } from '@/data/mundial';

export const generateStaticParams = () => {
  const params = [];
  
  Object.entries(mundial2026.sedes).forEach(([cityKey, sede]) => {
    sede.partidos.forEach((partido) => {
      params.push({
        slug: `${cityKey}-${partido.fecha}`
      });
    });
  });
  
  return params;
};

export const generateMetadata = ({ params }) => {
  const [cityKey, fecha] = params.slug.split('-').length > 1 
    ? [params.slug.split('-')[0], params.slug.slice(params.slug.indexOf('-') + 1)]
    : [params.slug, ''];
  
  const sede = mundial2026.sedes[cityKey];
  if (!sede) return {};
  
  const partido = sede.partidos.find(p => p.fecha === fecha);
  if (!partido) return {};
  
  const titleCity = {
    cdmx: 'Ciudad de México',
    gdl: 'Guadalajara',
    mty: 'Monterrey'
  }[cityKey];
  
  return {
    title: `${partido.fase} - ${titleCity} | ${partido.fecha} | MetroGuia`,
    description: `${partido.equipos} en el ${sede.estadio} el ${partido.fecha}. Cómo llegar en transporte público.`,
    keywords: `mundial 2026, ${titleCity}, ${sede.estadio}, transporte público, metro`,
  };
};

function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00');
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('es-MX', options).replace(/^\w/, c => c.toUpperCase());
}

function getColorByCity(cityKey) {
  const colors = {
    cdmx: { primary: '#E91E8C', bg: 'rgba(233, 30, 140, 0.05)', border: 'rgba(233, 30, 140, 0.3)' },
    gdl: { primary: '#06B6D4', bg: 'rgba(6, 182, 212, 0.05)', border: 'rgba(6, 182, 212, 0.3)' },
    mty: { primary: '#EC4899', bg: 'rgba(236, 72, 153, 0.05)', border: 'rgba(236, 72, 153, 0.3)' }
  };
  return colors[cityKey] || { primary: '#00D4FF', bg: 'rgba(0, 212, 255, 0.05)', border: 'rgba(0, 212, 255, 0.3)' };
}

export default function MatchPage({ params }) {
  const [cityKey, fecha] = params.slug.split('-').length > 1 
    ? [params.slug.split('-')[0], params.slug.slice(params.slug.indexOf('-') + 1)]
    : [params.slug, ''];
  
  const sede = mundial2026.sedes[cityKey];
  if (!sede) return <div>Partido no encontrado</div>;
  
  const partido = sede.partidos.find(p => p.fecha === fecha);
  if (!partido) return <div>Partido no encontrado</div>;
  
  const titleCity = {
    cdmx: 'Ciudad de México',
    gdl: 'Guadalajara',
    mty: 'Monterrey'
  }[cityKey];
  
  const emoji = {
    cdmx: '🏛️',
    gdl: '🍹',
    mty: '🏔️'
  }[cityKey];
  
  const color = getColorByCity(cityKey);
  const ruta = sede.ruta_desde_centro;

  // JSON-LD SportsEvent schema
  const sportsEvent = {
    '@context': 'https://schema.org',
    '@type': 'SportsEvent',
    name: `${partido.fase} — ${partido.equipos}`,
    description: `Partido de la ${partido.fase} del Mundial FIFA 2026 en el ${sede.estadio}`,
    startDate: fecha,
    location: {
      '@type': 'Place',
      name: sede.estadio,
      address: {
        '@type': 'PostalAddress',
        addressLocality: titleCity,
        addressCountry: 'MX'
      }
    },
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    organizer: {
      '@type': 'Organization',
      name: 'FIFA'
    },
    offers: {
      '@type': 'Offer',
      url: 'https://www.fifa.com',
      priceCurrency: 'MXN',
      availability: 'https://schema.org/PreOrder'
    }
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sportsEvent) }}
      />
      
      <section style={{ backgroundColor: color.bg, borderBottom: `3px solid ${color.primary}`, padding: '3rem 1.25rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <span style={{ fontSize: '2rem' }}>{emoji}</span>
            <div>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', margin: '0' }}>
                {formatDate(fecha)}
              </p>
              <h1 style={{ color: color.primary, margin: '0.25rem 0 0 0', fontSize: '2rem' }}>
                {partido.equipos}
              </h1>
            </div>
          </div>
          <p style={{ color: 'rgba(255,255,255,0.8)', margin: '0', fontSize: '1rem' }}>
            {partido.fase} • {sede.estadio}, {titleCity}
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 1.25rem', backgroundColor: 'var(--bg)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Match Info Card */}
          <div style={{ backgroundColor: color.bg, border: `1px solid ${color.primary}`, padding: '2rem', borderRadius: '0.5rem', marginBottom: '3rem' }}>
            <h2 style={{ color: color.primary, marginBottom: '1.5rem', fontSize: '1.3rem' }}>Detalles del Partido</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
              <div>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', margin: '0 0 0.5rem 0' }}>FECHA</p>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontWeight: '600', margin: '0', fontSize: '1rem' }}>
                  {formatDate(fecha)}
                </p>
              </div>
              <div>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', margin: '0 0 0.5rem 0' }}>HORARIO</p>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontWeight: '600', margin: '0', fontSize: '1rem' }}>
                  {partido.hora === 'TBD' ? 'Por confirmarse' : partido.hora}
                </p>
              </div>
              <div>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', margin: '0 0 0.5rem 0' }}>FASE</p>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontWeight: '600', margin: '0', fontSize: '1rem' }}>
                  {partido.fase}
                </p>
              </div>
              <div>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', margin: '0 0 0.5rem 0' }}>CAPACIDAD</p>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontWeight: '600', margin: '0', fontSize: '1rem' }}>
                  {sede.capacidad.toLocaleString('es-MX')} lugares
                </p>
              </div>
            </div>
          </div>

          {/* How to Get There */}
          <h2 style={{ color: '#00D4FF', marginBottom: '2rem', fontSize: '1.5rem' }}>Cómo llegar en transporte público</h2>
          <div style={{ backgroundColor: 'rgba(0, 212, 255, 0.05)', border: '1px solid rgba(0, 212, 255, 0.2)', padding: '2rem', borderRadius: '0.5rem', marginBottom: '3rem' }}>
            <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '2rem' }}>
              <div>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', margin: '0 0 0.5rem 0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Ruta Recomendada</p>
                <p style={{ color: 'rgba(255,255,255,0.9)', fontWeight: '600', margin: '0', fontSize: '1rem' }}>
                  {ruta.descripcion}
                </p>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '0.35rem' }}>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', margin: '0 0 0.5rem 0' }}>TIEMPO TOTAL</p>
                  <p style={{ color: '#00D4FF', fontWeight: '700', fontSize: '1.25rem', margin: '0' }}>
                    ~{ruta.tiempo} min
                  </p>
                </div>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '0.35rem' }}>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', margin: '0 0 0.5rem 0' }}>COSTO</p>
                  <p style={{ color: '#00D4FF', fontWeight: '700', fontSize: '1.25rem', margin: '0' }}>
                    ${ruta.costo} MXN
                  </p>
                </div>
              </div>
            </div>

            {ruta.alertas && ruta.alertas.length > 0 && (
              <div style={{ backgroundColor: 'rgba(255, 193, 7, 0.1)', border: '1px solid rgba(255, 193, 7, 0.3)', padding: '1rem', borderRadius: '0.35rem' }}>
                <p style={{ color: 'rgba(255, 193, 7, 0.9)', fontWeight: '600', margin: '0 0 0.75rem 0', fontSize: '0.9rem' }}>
                  Alertas importantes
                </p>
                <ul style={{ margin: '0', paddingLeft: '1.5rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                  {ruta.alertas.map((alerta, idx) => (
                    <li key={idx} style={{ marginBottom: '0.5rem' }}>
                      {alerta}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Match Day Tips */}
          {(sede.tips || []).length > 0 && (
          <>
          <h2 style={{ color: '#00D4FF', marginBottom: '2rem', fontSize: '1.5rem' }}>Tips para el día del partido</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
            {(sede.tips || []).map((tip, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: 'var(--surface)',
                  border: '1px solid var(--border)',
                  padding: '1.5rem',
                  borderRadius: '0.5rem',
                  borderLeft: `3px solid ${color.primary}`
                }}
              >
                <p style={{ color: 'rgba(255,255,255,0.9)', margin: '0', fontSize: '0.95rem' }}>
                  {tip}
                </p>
              </div>
            ))}
          </div>
          </>
          )}

          {/* Back to Schedule */}
          <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid rgba(0, 212, 255, 0.2)' }}>
            <a 
              href="/mundial-2026/partidos/"
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'rgba(0, 212, 255, 0.1)',
                border: '1px solid #00D4FF',
                color: '#00D4FF',
                borderRadius: '0.35rem',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '0.9rem',
                transition: 'all 0.3s'
              }}
            >
              Volver al calendario
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
