import { CITIES_CONFIG } from '@/data/cities-config';
import { lineasDetalleDC } from '@/data/washington-dc/lineas-detalle';
import { estacionesDC } from '@/data/washington-dc/estaciones';
import Link from 'next/link';
import AdBannerLazy from '@/app/components/AdBannerLazy';
import SearchBar from '@/app/components/SearchBar';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';

export const metadata = {
  title: 'WMATA Metro Guide — Washington DC Rail Transit | MetroGuia',
  description: 'WMATA Metro guide: 91 stations, 6 lines in Washington DC metro. Direct access to National Mall, museums, Pentagon. SmarTrip card. Complete trip planner, schedule & fares.',
  keywords: 'WMATA, Metro, Washington DC transit, DC Metro, SmarTrip, National Mall, Pentagon',
  openGraph: {
    title: 'WMATA Metro — Washington DC Transit',
    description: 'Discover Washington DC\'s Metro system. Direct access to National Mall, Smithsonian museums, and Pentagon.',
    url: 'https://metroguia.mx/washington-dc',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const estacionesDestacadas = estacionesDC.filter(e =>
  ['dc-gallery', 'dc-smithsonian', 'dc-capitol', 'dc-pentagon', 'dc-union'].includes(e.slug)
);

export default function WashingtonDCPage() {
  const cityConfig = CITIES_CONFIG['washington-dc'];
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'MetroGuia', item: 'https://metroguia.mx' },
      { '@type': 'ListItem', position: 2, name: 'Washington DC', item: 'https://metroguia.mx/washington-dc/' }
    ]
  }

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* HERO */}
      <section style={{
        background: 'linear-gradient(135deg, #004A99 0%, #003366 100%)',
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
            Washington Metro
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
            Rapid Transit · 6 Lines · 91 Stations
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
            Washington DC's comprehensive Metro system connecting the National Mall, Smithsonian museums, Capitol Hill, Pentagon, and the entire DC metro area.
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
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#004A99', margin: '0 0 8px 0' }}>
              91
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Stations
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#004A99', margin: '0 0 8px 0' }}>
              6
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Active Lines
            </p>
          </div>
          <div>
            <p style={{ fontSize: '2.5rem', fontWeight: '800', color: '#004A99', margin: '0 0 8px 0' }}>
              5 AM–12 AM
            </p>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', fontWeight: '500' }}>
              Daily Service
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
            Plan Your Route in Washington DC
          </h2>
          <p style={{
            fontSize: '1rem',
            textAlign: 'center',
            marginBottom: '24px',
            color: 'var(--text-muted)',
          }}>
            Calculate the best route between WMATA Metro stations
          </p>
          <SearchBar ciudad="washington-dc" />
        </div>
      </section>

      <AdBannerLazy slot="4434764790" format="auto" />

      {/* TRANSIT INFO */}
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
            Washington DC Transportation
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
            The WMATA Metro is Washington DC's primary rapid transit system, providing convenient access to government offices, cultural institutions, and neighborhoods throughout the region.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '48px' }}>
            <div style={{ backgroundColor: 'var(--surface)', padding: '32px', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--warning)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                National Mall & Museums
              </h3>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', lineHeight: '1.6' }}>
                Gallery Place and Smithsonian stations provide direct access to major museums and the National Mall.
              </p>
            </div>

            <div style={{ backgroundColor: 'var(--surface)', padding: '32px', borderRadius: 'var(--radius)', borderLeft: '4px solid var(--warning)' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
                Government & Culture
              </h3>
              <ul style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0', paddingLeft: '20px', lineHeight: '1.8' }}>
                <li>Capitol Hill and Congressional stations</li>
                <li>Pentagon and Defense connections</li>
                <li>Comprehensive historical sites access</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PAYMENT & CARDS */}
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
            SmarTrip Card
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            <AffiliateTransportCard
              icon="💳"
              titulo="SmarTrip Card"
              descripcion="Reloadable card for WMATA Metro and bus. Works throughout DC region."
              precio="$10 (includes $5 value)"
              enlace="https://www.wmata.com/service/fares/smartrip/"
            />

            <AffiliateTransportCard
              icon="📱"
              titulo="Mobile Ticket"
              descripcion="Buy single rides via WMATA app."
              precio="$2.25"
              enlace="https://www.wmata.com/"
            />

            <AffiliateTransportCard
              icon="🎫"
              titulo="Day Pass"
              descripcion="Unlimited Metro travel for 24 hours."
              precio="$9"
              enlace="https://www.wmata.com/"
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
            Featured Stations
          </h2>

          <div style={{ display: 'grid', gap: '24px' }}>
            {estacionesDestacadas.map((estacion, idx) => (
              <Link href={`/washington-dc/station/${estacion.slug}`} key={idx} style={{ textDecoration: 'none' }}>
                <div style={{
                  padding: '28px',
                  backgroundColor: 'var(--surface)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid var(--border)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 8px 0', color: '#004A99' }}>
                    {estacion.nombre}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 8px 0' }}>
                    {Array.isArray(estacion.linea) ? estacion.linea.join(', ') : estacion.linea} Line
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
            Metro Lines
          </h2>

          <div style={{ display: 'grid', gap: '20px' }}>
            {lineasDetalleDC.map((linea, idx) => {
              const lineId = linea.id || linea.slug || 'unknown';
              const lineName = linea.colorNombre || linea.nombre || lineId;
              const stationCount = linea.total || linea.numeroEstaciones || 0;
              const startStation = linea.inicio || (linea.estacionesTerminales && linea.estacionesTerminales[0]) || '';
              const endStation = linea.fin || (linea.estacionesTerminales && linea.estacionesTerminales[1]) || '';
              return (
              <Link href={`/washington-dc/line/${lineId}`} key={idx} style={{ textDecoration: 'none' }}>
                <div style={{
                  padding: '24px',
                  backgroundColor: 'var(--surface)',
                  borderRadius: 'var(--radius)',
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
                      {lineId[0].toUpperCase()}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: '700', margin: '0 0 4px 0', color: 'var(--text)' }}>
                        {lineName}
                      </h3>
                      <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', margin: '0' }}>
                        {stationCount} stations · {startStation} to {endStation}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
