import { mundial2026 } from '@/data/mundial';
import BlogGuiasWidget from '@/app/components/BlogGuiasWidget'
import { blogLinks } from '@/data/blog-links'

export const metadata = {
  title: 'Calendario Completo de Partidos — Mundial 2026 | MetroGuia',
  description: 'Todos los 13 partidos del Mundial FIFA 2026 en México. Fechas, horarios, estadios y cómo llegar en transporte público desde cada ciudad.',
  keywords: ['mundial 2026', 'calendario partidos', 'estadio azteca', 'guadalajara', 'monterrey'],
};

function formatDate(dateStr) {
  const date = new Date(dateStr + 'T00:00:00');
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('es-MX', options).replace(/^\w/, c => c.toUpperCase());
}

function getMatchColor(city) {
  const colors = {
    cdmx: '#E91E8C',
    gdl: '#06B6D4',
    mty: '#EC4899'
  };
  return colors[city] || '#00D4FF';
}

export default function PartidosPage() {
  const { sedes } = mundial2026;
  
  // Aggregate all matches with city info
  const allMatches = [];
  
  Object.entries(sedes).forEach(([cityKey, sede]) => {
    const cityName = {
      cdmx: 'Ciudad de México',
      gdl: 'Guadalajara',
      mty: 'Monterrey'
    }[cityKey];
    
    const cityEmoji = {
      cdmx: '🏛️',
      gdl: '🍹',
      mty: '🏔️'
    }[cityKey];
    
    sede.partidos.forEach((partido, idx) => {
      allMatches.push({
        ciudad: cityName,
        ciudadKey: cityKey,
        estadio: sede.estadio,
        capacidad: sede.capacidad,
        fecha: partido.fecha,
        hora: partido.hora,
        fase: partido.fase,
        equipos: partido.equipos,
        jornada: partido.jornada,
        emoji: cityEmoji,
        slug: `${cityKey}-${partido.fecha}`
      });
    });
  });
  
  // Sort by date
  allMatches.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
  
  // Group by city
  const matchesByCity = {
    cdmx: allMatches.filter(m => m.ciudadKey === 'cdmx'),
    gdl: allMatches.filter(m => m.ciudadKey === 'gdl'),
    mty: allMatches.filter(m => m.ciudadKey === 'mty')
  };

  return (
    <div>
      <section style={{ backgroundColor: 'var(--bg)', padding: '3rem 1.25rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1 style={{ color: '#00D4FF', marginBottom: '1rem', fontSize: '2.5rem' }}>Calendario de Partidos</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', margin: '0' }}>
            Todos los {mundial2026.total_partidos_mexico} partidos del Mundial 2026 en México — Fechas, horarios y cómo llegar
          </p>
        </div>
      </section>

      <section style={{ padding: '3rem 1.25rem', backgroundColor: 'var(--bg)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* CDMX Section */}
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.75rem', color: '#E91E8C', margin: '0' }}>Ciudad de México</h2>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                {matchesByCity.cdmx.length} partidos • Estadio Azteca
              </span>
            </div>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {matchesByCity.cdmx.map((match) => (
                <a 
                  key={match.slug}
                  href={`/mundial-2026/partidos/${match.slug}/`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div style={{
                    backgroundColor: 'rgba(233, 30, 140, 0.05)',
                    border: '1px solid rgba(233, 30, 140, 0.3)',
                    padding: '1.5rem',
                    borderRadius: '0.5rem',
                    transition: 'all 0.3s',
                    cursor: 'pointer',
                    display: 'grid',
                    gridTemplateColumns: '150px 1fr 150px',
                    gap: '1.5rem',
                    alignItems: 'center'
                  }} className="hover-lift">
                    <div>
                      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', margin: '0 0 0.5rem 0' }}>
                        {formatDate(match.fecha)}
                      </p>
                      <p style={{ color: '#E91E8C', fontWeight: '600', margin: '0', fontSize: '0.95rem' }}>
                        {match.hora === 'TBD' ? 'Hora por confirmarse' : match.hora}
                      </p>
                    </div>
                    <div>
                      <p style={{ color: 'rgba(255,255,255,0.9)', fontWeight: '600', margin: '0 0 0.5rem 0' }}>
                        {match.equipos}
                      </p>
                      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', margin: '0' }}>
                        {match.fase}
                      </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', margin: '0 0 0.5rem 0' }}>
                        Ver detalles →
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* GDL Section */}
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.75rem', color: '#06B6D4', margin: '0' }}>Guadalajara</h2>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                {matchesByCity.gdl.length} partidos • Estadio Akron
              </span>
            </div>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {matchesByCity.gdl.map((match) => (
                <a 
                  key={match.slug}
                  href={`/mundial-2026/partidos/${match.slug}/`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div style={{
                    backgroundColor: 'rgba(6, 182, 212, 0.05)',
                    border: '1px solid rgba(6, 182, 212, 0.3)',
                    padding: '1.5rem',
                    borderRadius: '0.5rem',
                    transition: 'all 0.3s',
                    cursor: 'pointer',
                    display: 'grid',
                    gridTemplateColumns: '150px 1fr 150px',
                    gap: '1.5rem',
                    alignItems: 'center'
                  }} className="hover-lift">
                    <div>
                      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', margin: '0 0 0.5rem 0' }}>
                        {formatDate(match.fecha)}
                      </p>
                      <p style={{ color: '#06B6D4', fontWeight: '600', margin: '0', fontSize: '0.95rem' }}>
                        {match.hora === 'TBD' ? 'Hora por confirmarse' : match.hora}
                      </p>
                    </div>
                    <div>
                      <p style={{ color: 'rgba(255,255,255,0.9)', fontWeight: '600', margin: '0 0 0.5rem 0' }}>
                        {match.equipos}
                      </p>
                      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', margin: '0' }}>
                        {match.fase}
                      </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', margin: '0 0 0.5rem 0' }}>
                        Ver detalles →
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* MTY Section */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <h2 style={{ fontSize: '1.75rem', color: '#EC4899', margin: '0' }}>Monterrey</h2>
              <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                {matchesByCity.mty.length} partidos • Estadio BBVA
              </span>
            </div>
            <div style={{ display: 'grid', gap: '1rem' }}>
              {matchesByCity.mty.map((match) => (
                <a 
                  key={match.slug}
                  href={`/mundial-2026/partidos/${match.slug}/`}
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div style={{
                    backgroundColor: 'rgba(236, 72, 153, 0.05)',
                    border: '1px solid rgba(236, 72, 153, 0.3)',
                    padding: '1.5rem',
                    borderRadius: '0.5rem',
                    transition: 'all 0.3s',
                    cursor: 'pointer',
                    display: 'grid',
                    gridTemplateColumns: '150px 1fr 150px',
                    gap: '1.5rem',
                    alignItems: 'center'
                  }} className="hover-lift">
                    <div>
                      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', margin: '0 0 0.5rem 0' }}>
                        {formatDate(match.fecha)}
                      </p>
                      <p style={{ color: '#EC4899', fontWeight: '600', margin: '0', fontSize: '0.95rem' }}>
                        {match.hora === 'TBD' ? 'Hora por confirmarse' : match.hora}
                      </p>
                    </div>
                    <div>
                      <p style={{ color: 'rgba(255,255,255,0.9)', fontWeight: '600', margin: '0 0 0.5rem 0' }}>
                        {match.equipos}
                      </p>
                      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', margin: '0' }}>
                        {match.fase}
                      </p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', margin: '0 0 0.5rem 0' }}>
                        Ver detalles →
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '3rem 1.25rem' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <BlogGuiasWidget guides={blogLinks.mundial} context="Partidos FIFA 2026" />
        </div>
      </section>

      <section style={{ padding: '2rem 1.25rem', backgroundColor: 'rgba(0, 212, 255, 0.05)', borderTop: '1px solid rgba(0, 212, 255, 0.2)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', margin: '0' }}>
            Las fechas y horarios pueden cambiar. Verifica en fifa.com antes de tu viaje.
          </p>
        </div>
      </section>
    </div>
  );
}
