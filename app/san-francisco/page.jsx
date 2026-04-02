import { lineasSF } from '@/data/san-francisco/lineas-detalle';
import { estacionesSF } from '@/data/san-francisco/estaciones';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import AffiliateMundial from '@/app/components/AffiliateMundial';

export const metadata = {
  title: 'San Francisco Bay Area Transit Guide — BART, Muni, Caltrain, Cable Cars | MetroGuia',
  description: 'Complete San Francisco transit guide: 50 BART stations, Muni Metro, Caltrain to Silicon Valley, iconic Cable Cars. 117 stations, 17 lines, 4 systems. Trip planner & Clipper Card info.',
  keywords: 'BART, San Francisco transit, Muni Metro, Caltrain, Cable Cars, Levi\'s Stadium, FIFA 2026, Clipper Card, Bay Area, Silicon Valley',
  openGraph: {
    title: 'San Francisco BART & Bay Area Transit',
    description: 'Discover Bay Area\'s integrated transit system: BART, Caltrain, VTA. Direct access to Levi\'s Stadium.',
    url: 'https://metroguia.mx/san-francisco',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const estacionesDestacadas = estacionesSF.filter(e =>
  ['bart-embarcadero', 'bart-powell', 'bart-civic-center', 'bart-sfo-airport', 'sf-muni-chinatown', 'cable-powell-market', 'caltrain-palo-alto'].includes(e.slug)
);

export default function SanFranciscoPage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'San Francisco', item: 'https://metroguia.mx/san-francisco/' }
    ]
  }

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #003C7F 0%, #0056BF 100%)',
        color: '#FFFFFF',
        padding: '80px 24px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '800',
            margin: '0 0 16px 0',
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
          }}>
            San Francisco Bay Area Transit
          </h1>
          <p style={{
            fontSize: '1.5rem',
            fontWeight: '500',
            margin: '0 0 24px 0',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
            opacity: '0.95',
            lineHeight: '1.4',
          }}>
            BART · Muni Metro · Caltrain · Cable Cars · 117 Stations
          </p>
          <p style={{
            fontSize: '1.125rem',
            fontWeight: '400',
            margin: '0',
            opacity: '0.9',
            maxWidth: '600px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            Integrated Bay Area transit system. Commuter rail to Levi's Stadium for FIFA 2026 in Santa Clara.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section style={{
        backgroundColor: 'var(--surface)',
        padding: '48px 24px',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{
          maxWidth: '1000px',
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '32px',
          textAlign: 'center',
        }}>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#003C7F', margin: '0 0 8px 0' }}>
              117
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Total Stations
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#003C7F', margin: '0 0 8px 0' }}>
              4
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Systems
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#003C7F', margin: '0 0 8px 0' }}>
              17
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Lines
            </p>
          </div>
        </div>
      </section>

      {/* TRIP PLANNER */}
      <section style={{
        backgroundColor: 'var(--bg)',
        padding: '60px 24px',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{
            fontSize: '1.75rem',
            fontWeight: '800',
            marginBottom: '12px',
            textAlign: 'center',
            color: 'var(--text)',
          }}>
            Plan Your Route in Bay Area
          </h2>
          <p style={{
            fontSize: '1rem',
            textAlign: 'center',
            marginBottom: '24px',
            color: 'var(--text-muted)',
          }}>
            Calculate the best route between BART, VTA, and Caltrain stations
          </p>
          <SearchBar ciudad="san-francisco" />
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* FIFA 2026 */}
      <section style={{
        backgroundColor: 'var(--bg)',
        padding: '80px 24px',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            margin: '0 0 16px 0',
            color: 'var(--text)',
            textAlign: 'center',
          }}>
            🏟️ FIFA World Cup 2026 — Levi's Stadium
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--text-muted)',
            textAlign: 'center',
            margin: '0 0 48px 0',
            maxWidth: '700px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            Levi's Stadium in Santa Clara will host World Cup matches. Caltrain provides direct rail service from downtown.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '48px' }}>
            <div style={{ backgroundColor: 'var(--surface)', padding: '32px', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--warning)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                🎫 Getting to Levi's Stadium
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', lineHeight: '1.6' }}>
                Take Caltrain from downtown San Francisco or BART to Diridon Station, then bus to stadium. Stadium parking available.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--surface)', padding: '32px', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--warning)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                🎟️ Match Day Tips
              </h3>
              <ul style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', paddingLeft: '20px', lineHeight: '1.8' }}>
                <li>Arrive early — Caltrain fills up on match days</li>
                <li>Use Clipper Card for all Bay Area transit</li>
                <li>Extended hours on event days</li>
              </ul>
            </div>
          </div>

          <AffiliateMundial city="San Francisco" stadium="Levi's Stadium" />
        </div>
      </section>

      {/* PAYMENT */}
      <section style={{
        backgroundColor: 'var(--bg)',
        padding: '80px 24px',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '800',
            margin: '0 0 48px 0',
            color: 'var(--text)',
            textAlign: 'center',
          }}>
            🎫 Clipper Card
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <AffiliateTransportCard
              icon="🎫"
              titulo="Clipper Card"
              descripcion="Universal transit card for BART, Caltrain, VTA, ferries, and buses."
              precio="$3–$2 (digital)"
              enlace="https://www.clippercard.com/"
            />

            <AffiliateTransportCard
              icon="🚀"
              titulo="Visitor Clipper"
              descripcion="7-day or 3-day passes for tourists. Unlimited rides."
              precio="$32/$20"
              enlace="https://www.clippercard.com/"
            />

            <AffiliateTransportCard
              icon="🚊"
              titulo="Caltrain Weekend Pass"
              descripcion="All-day travel on Caltrain network. Perfect for Levi's games."
              precio="$10"
              enlace="https://www.caltrain.com/"
            />
          </div>
        </div>
      </section>

      {/* FEATURED STATIONS */}
      <section style={{
        backgroundColor: 'var(--bg)',
        padding: '80px 24px',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '800',
            margin: '0 0 48px 0',
            color: 'var(--text)',
            textAlign: 'center',
          }}>
            ⭐ Featured Stations
          </h2>

          <div style={{ display: 'grid', gap: '24px' }}>
            {estacionesDestacadas.map((estacion, idx) => (
              <Link href={`/san-francisco/station/${estacion.slug}`} key={idx} style={{ textDecoration: 'none' }}>
                <div style={{
                  padding: '28px',
                  backgroundColor: 'var(--surface)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--border)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 8px 0', color: '#003C7F' }}>
                    {estacion.nombre}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 8px 0' }}>
                    {estacion.sistema.toUpperCase()} · {estacion.linea}
                  </p>
                  <p style={{ fontSize: '1rem', color: 'var(--text)', margin: '0', lineHeight: '1.6' }}>
                    {estacion.intro}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* LINES */}
      <section style={{
        backgroundColor: 'var(--bg)',
        padding: '80px 24px',
      }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '800',
            margin: '0 0 48px 0',
            color: 'var(--text)',
            textAlign: 'center',
          }}>
            Bay Area Transit Systems
          </h2>

          <div style={{ display: 'grid', gap: '20px' }}>
            {lineasSF.map((linea, idx) => (
              <Link href={`/san-francisco/line/${linea.id}`} key={idx} style={{ textDecoration: 'none' }}>
                <div style={{
                  padding: '24px',
                  backgroundColor: 'var(--surface)',
                  borderRadius: 'var(--radius)',
                  borderLeft: `5px solid ${linea.color}`,
                  border: `1px solid var(--border)`,
                  borderLeft: `5px solid ${linea.color}`,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: linea.color,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: '1.5rem',
                      fontWeight: '700',
                    }}>
                      {linea.id[0]}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 4px 0', color: 'var(--text)' }}>
                        {linea.id} — {linea.sistema.toUpperCase()}
                      </h3>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: '0' }}>
                        {linea.total} stations
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
