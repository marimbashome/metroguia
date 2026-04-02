import { lineasSeattle } from '@/data/seattle/lineas-detalle';
import { estacionesSeattle } from '@/data/seattle/estaciones';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import AffiliateMundial from '@/app/components/AffiliateMundial';

export const metadata = {
  title: 'Sound Transit Link Light Rail Guide — Seattle Express Transit | MetroGuia',
  description: 'Sound Transit Link Light Rail guide: 3 lines, 50+ stations in Seattle metro. Red Line to Lumen Field for FIFA 2026 matches. ORCA card. Complete trip planner, schedule & fares.',
  keywords: 'Sound Transit, Link Light Rail, Seattle transit, Lumen Field, FIFA 2026, ORCA card, Washington',
  openGraph: {
    title: 'Sound Transit Link — Seattle Express Transit',
    description: 'Discover Seattle\'s Link Light Rail system. Direct access to Lumen Field, SeaTac Airport, and downtown.',
    url: 'https://metroguia.mx/seattle',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const estacionesDestacadas = estacionesSeattle.filter(e =>
  ['sea-stadium', 'sea-pioneer-square', 'sea-airport', 'sea-university', 'sea-westlake'].includes(e.slug)
);

export default function SeattlePage() {
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Seattle', item: 'https://metroguia.mx/seattle/' }
    ]
  }

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #0066CC 0%, #0052A3 100%)',
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
            Sound Transit Link
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
            Light Rail · 3 Lines · 50+ Stations
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
            Seattle's modern light rail network connecting downtown to SeaTac Airport and Lumen Field (home of the Seahawks). Direct access for FIFA 2026.
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
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0066CC', margin: '0 0 8px 0' }}>
              50+
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Stations
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0066CC', margin: '0 0 8px 0' }}>
              3
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Active Lines
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0066CC', margin: '0 0 8px 0' }}>
              5–10 min
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Frequency
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
            Plan Your Route in Seattle
          </h2>
          <p style={{
            fontSize: '1rem',
            textAlign: 'center',
            marginBottom: '24px',
            color: 'var(--text-muted)',
          }}>
            Calculate the best route between Link stations
          </p>
          <SearchBar ciudad="seattle" />
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
            🏟️ FIFA World Cup 2026 — Seattle
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
            Lumen Field will host World Cup matches. The Link Red Line offers direct access from downtown and SeaTac Airport.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '48px' }}>
            <div style={{ backgroundColor: 'var(--surface)', padding: '32px', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--warning)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                🎫 Getting to Lumen Field
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', lineHeight: '1.6' }}>
                Take the Link Red Line south to Stadium Station. Trains run every 5–10 minutes. The station is steps away from Lumen Field.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--surface)', padding: '32px', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--warning)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                🎟️ Match Day Tips
              </h3>
              <ul style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', paddingLeft: '20px', lineHeight: '1.8' }}>
                <li>Arrive 1-2 hours early — trains may be crowded</li>
                <li>Use ORCA card for fast boarding</li>
                <li>Service until midnight on match days</li>
              </ul>
            </div>
          </div>

          <AffiliateMundial city="Seattle" stadium="Lumen Field" />
        </div>
      </section>

      {/* TRANSIT CARDS */}
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
            🎫 ORCA Card
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <AffiliateTransportCard
              icon="🎫"
              titulo="ORCA Card"
              descripcion="Reloadable card for all Puget Sound transit. Works on Link, bus, ferry."
              precio="$5 (card) + value"
              enlace="https://www.orca.cards/"
            />

            <AffiliateTransportCard
              icon="📱"
              titulo="Mobile Ticket"
              descripcion="Buy single rides or day passes via Sound Transit app."
              precio="$2.75–$3.25"
              enlace="https://www.soundtransit.org/"
            />

            <AffiliateTransportCard
              icon="🚊"
              titulo="Link Red Line"
              descripcion="Airport Link + Stadium Station + downtown connections."
              precio="$2.75–$3.25"
              enlace="https://www.soundtransit.org/ride-link"
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
              <Link href={`/seattle/station/${estacion.slug}`} key={idx} style={{ textDecoration: 'none' }}>
                <div style={{
                  padding: '28px',
                  backgroundColor: 'var(--surface)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--border)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.12)';
                  e.currentTarget.style.borderColor = '#0066CC';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--border)';
                }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 8px 0', color: '#0066CC' }}>
                    {estacion.nombre}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 8px 0' }}>
                    Line {estacion.linea}
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
            Link Lines
          </h2>

          <div style={{ display: 'grid', gap: '20px' }}>
            {lineasSeattle.map((linea, idx) => (
              <Link href={`/seattle/line/${linea.id}`} key={idx} style={{ textDecoration: 'none' }}>
                <div style={{
                  padding: '24px',
                  backgroundColor: 'var(--surface)',
                  borderRadius: 'var(--radius)',
                  borderLeft: `5px solid ${linea.color}`,
                  border: `1px solid var(--border)`,
                  borderLeft: `5px solid ${linea.color}`,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }} onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                }} onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
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
                      {linea.id}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 4px 0', color: 'var(--text)' }}>
                        {linea.inicio} → {linea.fin}
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
