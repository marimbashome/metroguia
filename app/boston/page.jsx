import { CITIES_CONFIG } from '@/data/cities-config';
import { lineasBoston } from '@/data/boston/lineas-detalle';
import { estacionesBoston } from '@/data/boston/estaciones';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import AffiliateMundial from '@/app/components/AffiliateMundial';

export const metadata = {
  title: 'MBTA Boston Subway & Commuter Rail Guide — Red Green Blue Orange Lines | MetroGuia',
  description: 'Boston MBTA guide: 4 subway lines, commuter rail to Gillette Stadium for FIFA 2026 matches. CharlieCard, Orange/Red/Green/Blue lines. Complete transit guide, schedules & fares.',
  keywords: 'MBTA, Boston transit, Red Line, Green Line, Blue Line, Orange Line, Gillette Stadium, FIFA 2026, CharlieCard, Massachusetts',
  openGraph: {
    title: 'Boston MBTA Subway & Commuter Rail',
    description: 'Discover Boston MBTA system. Direct access to Gillette Stadium and FIFA 2026 matches. CharlieCard payment options.',
    url: 'https://metroguia.mx/boston',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const estacionesDestacadas = estacionesBoston.filter(e =>
  ['boston-park-street', 'boston-harvard', 'boston-aquarium', 'boston-fenway', 'boston-foxboro', 'boston-airport', 'boston-copley', 'boston-north-station'].includes(e.slug)
);

export default function BostonPage() {
  const cityConfig = CITIES_CONFIG.boston;
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Boston', item: 'https://metroguia.mx/boston/' }
    ]
  }

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #C1121F 0%, #950B15 100%)',
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
            Boston MBTA Transit
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
            Red · Orange · Blue · Green (B/C/D/E) · Silver · Mattapan · Commuter Rail
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
            Boston's integrated transit system connecting downtown to Logan Airport and Gillette Stadium in Foxborough for FIFA 2026.
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
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#C1121F', margin: '0 0 8px 0' }}>
              159
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Total Stations
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#C1121F', margin: '0 0 8px 0' }}>
              11
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Transit Lines
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#C1121F', margin: '0 0 8px 0' }}>
              $2.40
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              CharlieCard Fare
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
            Plan Your Route in Boston
          </h2>
          <p style={{
            fontSize: '1rem',
            textAlign: 'center',
            marginBottom: '24px',
            color: 'var(--text-muted)',
          }}>
            Calculate the best route between MBTA subway and commuter rail lines
          </p>
          <SearchBar ciudad="boston" />
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
            🏟️ FIFA World Cup 2026 — Gillette Stadium
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
            Gillette Stadium in Foxborough will host World Cup matches. Commuter rail provides direct access from downtown Boston.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '48px' }}>
            <div style={{ backgroundColor: 'var(--surface)', padding: '32px', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--warning)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                🎫 Getting to Gillette Stadium
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', lineHeight: '1.6' }}>
                Take MBTA commuter rail from Boston's South Station to Foxborough, then shuttle bus to stadium. Free game day parking available.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--surface)', padding: '32px', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--warning)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                🎟️ Match Day Tips
              </h3>
              <ul style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', paddingLeft: '20px', lineHeight: '1.8' }}>
                <li>Arrive early — commuter rail fills up on match days</li>
                <li>Use CharlieCard for all MBTA transit</li>
                <li>Last train returns after final whistle</li>
              </ul>
            </div>
          </div>

          <AffiliateMundial city="Boston" stadium="Gillette Stadium" />
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
            🎫 CharlieCard
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <AffiliateTransportCard
              icon="🎫"
              titulo="CharlieCard"
              descripcion="Reloadable card for subway, bus, commuter rail, and ferry throughout Boston area."
              precio="$6 (card) + value"
              enlace="https://www.mbta.com/fares/"
            />

            <AffiliateTransportCard
              icon="📱"
              titulo="Mobile Pass"
              descripcion="Digital pass and single tickets via MBTA app and website."
              precio="$2.40–$10.50"
              enlace="https://www.mbta.com/"
            />

            <AffiliateTransportCard
              icon="🚌"
              titulo="Day Pass"
              descripcion="Unlimited subway and local bus for 24 hours. Perfect for visiting."
              precio="$13.50"
              enlace="https://www.mbta.com/fares/"
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
              <Link href={`/boston/station/${estacion.slug}`} key={idx} style={{ textDecoration: 'none' }}>
                <div style={{
                  padding: '28px',
                  backgroundColor: 'var(--surface)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--border)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 8px 0', color: '#C1121F' }}>
                    {estacion.nombre}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 8px 0' }}>
                    {estacion.linea}
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
            Boston MBTA Lines
          </h2>

          <div style={{ display: 'grid', gap: '20px' }}>
            {lineasBoston.map((linea, idx) => (
              <Link href={`/boston/line/${linea.id}`} key={idx} style={{ textDecoration: 'none' }}>
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
                        {linea.id} Line
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
