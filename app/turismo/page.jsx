import { pueblosMagicos } from '@/data/turismo/pueblos-magicos'
import { zonasArqueologicas } from '@/data/turismo/zonas-arqueologicas'
import { ciudadesPatrimonio } from '@/data/turismo/ciudades-patrimonio'
import { playas } from '@/data/turismo/playas'
import { barriosMagicos } from '@/data/turismo/barrios-magicos'
import { rutasGastronomicas } from '@/data/turismo/rutas-gastronomicas'
import { destinosPrioritarios } from '@/data/turismo/destinos-prioritarios'
import { naturaleza } from '@/data/turismo/naturaleza'

export const metadata = {
  title: 'Turismo en México — 8 programas turísticos completos | MetroGuia',
  description: 'Explora México: Pueblos Mágicos, Zonas Arqueológicas, Ciudades Patrimonio UNESCO, Playas, Barrios Mágicos, Rutas Gastronómicas, Destinos Prioritarios y Turismo de Naturaleza. Guía completa con transporte público.',
  openGraph: {
    title: 'Turismo en México — Guía completa | MetroGuia',
    description: 'Descubre 8 programas turísticos de México con rutas de transporte público',
    url: 'https://metroguia.mx/turismo/',
    siteName: 'MetroGuia',
    locale: 'es_MX',
    type: 'website',
  }
}

export default function TurismoHubPage() {
  const programas = [
    {
      slug: 'pueblos-magicos',
      nombre: 'Pueblos Mágicos',
      icon: '🏘️',
      color: '#E91E8C',
      count: pueblosMagicos.length,
      total: '177',
      descripcion: 'Pueblos con encanto colonial, tradiciones vivas y paisajes que México reconoce como tesoros culturales.',
    },
    {
      slug: 'zonas-arqueologicas',
      nombre: 'Zonas Arqueológicas',
      icon: '🏛️',
      color: '#D97706',
      count: zonasArqueologicas.length,
      total: '193',
      descripcion: 'Ciudades prehispánicas mayas, aztecas, zapotecas y más. Desde Teotihuacán hasta Chichén Itzá.',
    },
    {
      slug: 'ciudades-patrimonio',
      nombre: 'Ciudades Patrimonio UNESCO',
      icon: '🏰',
      color: '#0057A8',
      count: ciudadesPatrimonio.length,
      total: null,
      descripcion: 'Centros históricos declarados Patrimonio de la Humanidad por su valor arquitectónico y cultural.',
    },
    {
      slug: 'playas',
      nombre: 'Playas de México',
      icon: '🏖️',
      color: '#06B6D4',
      count: playas.length,
      total: null,
      descripcion: 'Del Caribe al Pacífico: playas certificadas Blue Flag, destinos de surf, snorkel y relax.',
    },
    {
      slug: 'barrios-magicos',
      nombre: 'Barrios Mágicos',
      icon: '🎭',
      color: '#7C3AED',
      count: barriosMagicos.length,
      total: null,
      descripcion: 'Barrios urbanos con identidad propia: gastronomía, arte, historia y vida nocturna.',
    },
    {
      slug: 'rutas-gastronomicas',
      nombre: 'Rutas Gastronómicas',
      icon: '🍽️',
      color: '#DC2626',
      count: rutasGastronomicas.length,
      total: '18',
      descripcion: 'Las 18 rutas gastronómicas oficiales: del tequila al mole, del cacao al mezcal.',
    },
    {
      slug: 'destinos-prioritarios',
      nombre: 'Destinos Prioritarios',
      icon: '📍',
      color: '#16A34A',
      count: destinosPrioritarios.length,
      total: '44',
      descripcion: 'Los destinos turísticos prioritarios designados por SECTUR para impulsar el turismo nacional.',
    },
    {
      slug: 'naturaleza',
      nombre: 'Turismo de Naturaleza',
      icon: '🌿',
      color: '#059669',
      count: naturaleza.length,
      total: null,
      descripcion: 'Cenotes, barrancas, volcanes, selvas, biósfera y aventura en los ecosistemas más diversos del mundo.',
    },
  ]

  const totalDestinos = programas.reduce((sum, p) => sum + p.count, 0)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Turismo en México',
    description: 'Guía completa de turismo en México: 8 programas turísticos con rutas de transporte público',
    url: 'https://metroguia.mx/turismo/',
    numberOfItems: totalDestinos,
  }

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, var(--primary) 0%, #D48A0C 100%)',
        padding: '4rem 1.25rem',
        textAlign: 'center',
        color: 'white',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '1rem' }}>
            Turismo en México
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '1.5rem', opacity: 0.95 }}>
            8 programas turísticos · {totalDestinos}+ destinos · Conectados al transporte público
          </p>
          <p style={{ fontSize: '1rem', opacity: 0.85, maxWidth: '600px', margin: '0 auto' }}>
            Explora lo mejor de México y planifica tu viaje con MetroGuia. Ideal para el Mundial FIFA 2026.
          </p>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{
        backgroundColor: 'var(--surface)',
        borderBottom: '1px solid var(--border)',
        padding: '1.5rem 1.25rem',
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          gap: '3rem',
          flexWrap: 'wrap',
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)' }}>8</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Programas</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)' }}>{totalDestinos}+</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Destinos</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)' }}>32</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Estados</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--primary)' }}>11</div>
            <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Ciudades con metro</div>
          </div>
        </div>
      </section>

      {/* GRID DE PROGRAMAS */}
      <section style={{ padding: '3rem 1.25rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2.5rem', fontSize: '1.75rem' }}>
            Explora por programa turístico
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}>
            {programas.map((prog) => (
              <a
                key={prog.slug}
                href={`/turismo/${prog.slug}/`}
                style={{
                  display: 'block',
                  textDecoration: 'none',
                  color: 'inherit',
                  backgroundColor: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderTop: `4px solid ${prog.color}`,
                  borderRadius: '8px',
                  padding: '1.5rem',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>
                  {prog.icon}
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text)' }}>
                  {prog.nombre}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1rem', lineHeight: 1.6 }}>
                  {prog.descripcion}
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{
                    backgroundColor: prog.color,
                    color: 'white',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '20px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                  }}>
                    {prog.count} destinos{prog.total ? ` de ${prog.total}` : ''}
                  </span>
                  <span style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.875rem' }}>
                    Explorar →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CROSS-LINKS: TRANSPORTE */}
      <section style={{
        padding: '3rem 1.25rem',
        backgroundColor: 'var(--surface)',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>Conecta con el transporte público</h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Muchos destinos turísticos están conectados al metro, metrobús y tren. Usa el trip planner de MetroGuia para planificar tu ruta.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/cdmx/" className="cta-btn" style={{ backgroundColor: '#E91E8C' }}>
              Metro CDMX
            </a>
            <a href="/gdl/" className="cta-btn" style={{ backgroundColor: '#06B6D4' }}>
              SITEUR GDL
            </a>
            <a href="/mty/" className="cta-btn" style={{ backgroundColor: '#EC4899' }}>
              Metrorrey MTY
            </a>
            <a href="/" className="cta-btn">
              Trip Planner
            </a>
          </div>
        </div>
      </section>

      {/* MUNDIAL 2026 CTA */}
      <section style={{
        padding: '3rem 1.25rem',
        background: 'linear-gradient(135deg, #1A1D2B 0%, #2D3148 100%)',
        color: 'white',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem', color: 'white' }}>
            ⚽ ¿Vienes al Mundial FIFA 2026?
          </h2>
          <p style={{ fontSize: '1.125rem', marginBottom: '2rem', opacity: 0.9 }}>
            México es sede en CDMX, Guadalajara y Monterrey. Aprovecha tu viaje para explorar los destinos turísticos más increíbles del país.
          </p>
          <a href="/mundial-2026/" className="cta-btn" style={{ backgroundColor: 'var(--primary)' }}>
            Ver guía del Mundial 2026 →
          </a>
        </div>
      </section>
    </div>
  )
}
