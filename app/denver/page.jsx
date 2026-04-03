import AdBannerLazy from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';
import { estacionesDenver } from '@/data/denver/estaciones';
import { lineasDenver } from '@/data/denver/lineas-detalle';
import Link from 'next/link';

export const metadata = {
  title: 'Denver RTD Rail Transit System — A, B, D, E, G, W Lines | MetroGuia',
  description: 'Navigate Denver RTD light rail and commuter rail. 46 stations, 6 major lines. Real-time routes, fares, accessibility info, and transit planner for A Line airport express.',
};

const FEATURED_STATIONS = ['denver-union-station', 'denver-airport', 'denver-theatre-district', 'denver-university-of-denver'];
const FEATURED_LINES = ['A', 'D', 'E', 'W'];

export default function DenverPage() {
  const featuredStations = estacionesDenver.filter(s => FEATURED_STATIONS.includes(s.slug));
  const featuredLines = lineasDenver.filter(l => FEATURED_LINES.includes(l.id));

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #003DA5 0%, #002266 100%)',
        color: '#fff',
        padding: '80px 24px',
      }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '800',
            margin: '0 0 16px 0',
            lineHeight: '1.2',
            letterSpacing: '-0.02em',
          }}>
            Denver RTD Rail
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
            A · B · D · E · G · W Lines
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
            Denver's modern transit system connecting downtown to the airport, surrounding suburbs, and the Rocky Mountain foothills.
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
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#003DA5', margin: '0 0 8px 0' }}>
              46
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Total Stations
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#003DA5', margin: '0 0 8px 0' }}>
              6
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Rail Lines
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#003DA5', margin: '0 0 8px 0' }}>
              $3.00
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Local Fare
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#003DA5', margin: '0 0 8px 0' }}>
              37 min
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              To Airport
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
            Plan Your Route in Denver
          </h2>
          <p style={{
            fontSize: '1rem',
            textAlign: 'center',
            marginBottom: '24px',
            color: 'var(--text-muted)',
          }}>
            Calculate the best route between RTD rail lines
          </p>
          <SearchBar ciudad="denver" />
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* FEATURED STATIONS */}
      <section style={{
        backgroundColor: 'var(--bg)',
        padding: '80px 24px',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            margin: '0 0 48px 0',
            color: 'var(--text)',
            textAlign: 'center',
          }}>
            Featured Stations
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {featuredStations.map((station) => (
              <Link key={station.slug} href={`/denver/station/${station.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{
                  backgroundColor: 'var(--surface)',
                  padding: '32px',
                  borderRadius: 'var(--radius)',
                  borderLeft: `4px solid #003DA5`,
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  ':hover': { transform: 'translateY(-4px)', boxShadow: '0 8px 16px rgba(0,0,0,0.1)' },
                }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                    {station.nombre}
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: '0 0 8px 0' }}>
                    {station.municipio}
                  </p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text)', margin: '0', lineHeight: '1.5' }}>
                    {station.intro}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* LINES GRID */}
      <section style={{
        backgroundColor: 'var(--bg)',
        padding: '80px 24px',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            margin: '0 0 48px 0',
            color: 'var(--text)',
            textAlign: 'center',
          }}>
            RTD Lines
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {lineasDenver.map((line) => (
              <Link key={line.id} href={`/denver/line/${line.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{
                  backgroundColor: 'var(--surface)',
                  padding: '32px',
                  borderRadius: 'var(--radius)',
                  borderTop: `4px solid ${line.color}`,
                  cursor: 'pointer',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                    <div style={{
                      width: '56px',
                      height: '56px',
                      backgroundColor: line.color,
                      borderRadius: '4px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontSize: '28px',
                      fontWeight: '700',
                    }}>
                      {line.id}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 4px 0', color: 'var(--text)' }}>
                        {line.colorNombre} Line
                      </h3>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0' }}>
                        {line.total} stations
                      </p>
                    </div>
                  </div>
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: '0 0 12px 0' }}>
                    {line.inicio} → {line.fin}
                  </p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text)', margin: '0', lineHeight: '1.5' }}>
                    {line.descripcion.substring(0, 120)}...
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FARES & PAYMENT */}
      <section style={{
        backgroundColor: 'var(--surface)',
        padding: '80px 24px',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ maxWidth: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{
            fontSize: '2rem',
            fontWeight: '800',
            margin: '0 0 48px 0',
            textAlign: 'center',
            color: 'var(--text)',
          }}>
            Fares & Payment
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ backgroundColor: 'var(--bg)', padding: '32px', borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
                Local Fare
              </h3>
              <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#003DA5', margin: '0 0 12px 0' }}>
                $3.00
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: '0' }}>
                Single trip within Denver metro area
              </p>
            </div>
            <div style={{ backgroundColor: 'var(--bg)', padding: '32px', borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
                Airport Fare
              </h3>
              <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#003DA5', margin: '0 0 12px 0' }}>
                $10.50
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: '0' }}>
                Union Station to Denver International Airport
              </p>
            </div>
            <div style={{ backgroundColor: 'var(--bg)', padding: '32px', borderRadius: 'var(--radius)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
                MyRide Card
              </h3>
              <p style={{ fontSize: '1.25rem', fontWeight: '700', color: '#003DA5', margin: '0 0 12px 0' }}>
                Fast, Contactless
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: '0' }}>
                Reloadable transit card with discounts
              </p>
            </div>
          </div>
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* ACCESSIBILITY */}
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
            textAlign: 'center',
            color: 'var(--text)',
          }}>
            Accessibility
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <div style={{ backgroundColor: 'var(--surface)', padding: '32px', borderRadius: 'var(--radius)', borderLeft: '4px solid #003DA5' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                Wheelchair Access
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: '0', lineHeight: '1.6' }}>
                All stations feature elevators, ramps, and accessible platforms.
              </p>
            </div>
            <div style={{ backgroundColor: 'var(--surface)', padding: '32px', borderRadius: 'var(--radius)', borderLeft: '4px solid #003DA5' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                Audio & Visual
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: '0', lineHeight: '1.6' }}>
                Real-time announcements and visual displays at all stations.
              </p>
            </div>
            <div style={{ backgroundColor: 'var(--surface)', padding: '32px', borderRadius: 'var(--radius)', borderLeft: '4px solid #003DA5' }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                Tactile Guide Paths
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: '0', lineHeight: '1.6' }}>
                All platforms have tactile paving and guide rails for visually impaired passengers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        backgroundColor: 'linear-gradient(135deg, #003DA5 0%, #002266 100%)',
        color: '#fff',
        padding: '60px 24px',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '800', margin: '0 0 16px 0' }}>
            Ready to Ride?
          </h2>
          <p style={{ fontSize: '1.125rem', margin: '0 0 32px 0', opacity: '0.95' }}>
            Use the trip planner above to find the best route for your journey.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="https://www.rtd-denver.com" target="_blank" rel="noopener">
              <button style={{
                padding: '12px 32px',
                backgroundColor: '#fff',
                color: '#003DA5',
                border: 'none',
                borderRadius: 'var(--radius)',
                fontSize: '1rem',
                fontWeight: '700',
                cursor: 'pointer',
              }}>
                Official RTD Website
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
