'use client';

const BOOKING_AFFILIATE_ID = '2397601';

const cityBookingData = {
  // US Cities
  'nyc': { destId: '20088325', destType: 'city', name: 'New York City', currency: 'USD' },
  'chicago': { destId: '20033173', destType: 'city', name: 'Chicago', currency: 'USD' },
  'los-angeles': { destId: '20014181', destType: 'city', name: 'Los Angeles', currency: 'USD' },
  'san-francisco': { destId: '20015732', destType: 'city', name: 'San Francisco', currency: 'USD' },
  'washington-dc': { destId: '20088386', destType: 'city', name: 'Washington DC', currency: 'USD' },
  'boston': { destId: '20061717', destType: 'city', name: 'Boston', currency: 'USD' },
  'miami': { destId: '20023181', destType: 'city', name: 'Miami', currency: 'USD' },
  'seattle': { destId: '20144883', destType: 'city', name: 'Seattle', currency: 'USD' },
  'philadelphia': { destId: '20091534', destType: 'city', name: 'Philadelphia', currency: 'USD' },
  'atlanta': { destId: '20023488', destType: 'city', name: 'Atlanta', currency: 'USD' },
  'houston': { destId: '20061451', destType: 'city', name: 'Houston', currency: 'USD' },
  'dallas': { destId: '20127761', destType: 'city', name: 'Dallas', currency: 'USD' },
  'denver': { destId: '20020593', destType: 'city', name: 'Denver', currency: 'USD' },
  'portland': { destId: '20020924', destType: 'city', name: 'Portland', currency: 'USD' },
  'san-diego': { destId: '20015399', destType: 'city', name: 'San Diego', currency: 'USD' },
  'minneapolis': { destId: '20028301', destType: 'city', name: 'Minneapolis', currency: 'USD' },
  'las-vegas': { destId: '20079110', destType: 'city', name: 'Las Vegas', currency: 'USD' },
  'new-orleans': { destId: '20085335', destType: 'city', name: 'New Orleans', currency: 'USD' },
  'salt-lake-city': { destId: '20127293', destType: 'city', name: 'Salt Lake City', currency: 'USD' },
  'detroit': { destId: '20020175', destType: 'city', name: 'Detroit', currency: 'USD' },
  'pittsburgh': { destId: '20091633', destType: 'city', name: 'Pittsburgh', currency: 'USD' },
  'charlotte': { destId: '20075917', destType: 'city', name: 'Charlotte', currency: 'USD' },
  'baltimore': { destId: '20023437', destType: 'city', name: 'Baltimore', currency: 'USD' },
  'sacramento': { destId: '20015563', destType: 'city', name: 'Sacramento', currency: 'USD' },
  'phoenix': { destId: '20023027', destType: 'city', name: 'Phoenix', currency: 'USD' },
  'st-louis': { destId: '20036005', destType: 'city', name: 'St. Louis', currency: 'USD' },
  'cleveland': { destId: '20088191', destType: 'city', name: 'Cleveland', currency: 'USD' },
  'kansas-city': { destId: '20036171', destType: 'city', name: 'Kansas City', currency: 'USD' },
  'san-jose': { destId: '20015742', destType: 'city', name: 'San Jose', currency: 'USD' },
  'nashville': { destId: '20020613', destType: 'city', name: 'Nashville', currency: 'USD' },
  'orlando': { destId: '20023499', destType: 'city', name: 'Orlando', currency: 'USD' },
  'austin': { destId: '20124070', destType: 'city', name: 'Austin', currency: 'USD' },
  'honolulu': { destId: '20020468', destType: 'city', name: 'Honolulu', currency: 'USD' },
  'tampa': { destId: '20023604', destType: 'city', name: 'Tampa', currency: 'USD' },
  'buffalo': { destId: '20088167', destType: 'city', name: 'Buffalo', currency: 'USD' },
  'milwaukee': { destId: '20088270', destType: 'city', name: 'Milwaukee', currency: 'USD' },
  'cincinnati': { destId: '20020104', destType: 'city', name: 'Cincinnati', currency: 'USD' },
  'tucson': { destId: '20023685', destType: 'city', name: 'Tucson', currency: 'USD' },
  'el-paso': { destId: '20088208', destType: 'city', name: 'El Paso', currency: 'USD' },
  'norfolk': { destId: '20020782', destType: 'city', name: 'Norfolk', currency: 'USD' },
  'oklahoma-city': { destId: '20088327', destType: 'city', name: 'Oklahoma City', currency: 'USD' },
  'jacksonville': { destId: '20023316', destType: 'city', name: 'Jacksonville', currency: 'USD' },
  'san-juan': { destId: '20023562', destType: 'city', name: 'San Juan', currency: 'USD' },
  'newark': { destId: '20088315', destType: 'city', name: 'Newark', currency: 'USD' },
  // Canada
  'toronto': { destId: '20070602', destType: 'city', name: 'Toronto', currency: 'CAD' },
  'vancouver': { destId: '20069097', destType: 'city', name: 'Vancouver', currency: 'CAD' },
  'montreal': { destId: '20069735', destType: 'city', name: 'Montreal', currency: 'CAD' },
  'calgary': { destId: '20069265', destType: 'city', name: 'Calgary', currency: 'CAD' },
  'edmonton': { destId: '20069398', destType: 'city', name: 'Edmonton', currency: 'CAD' },
  'ottawa': { destId: '20069861', destType: 'city', name: 'Ottawa', currency: 'CAD' },
  // Mexico
  'cdmx': { destId: '-1658079', destType: 'city', name: 'Ciudad de México', currency: 'MXN' },
  'gdl': { destId: '-1670770', destType: 'city', name: 'Guadalajara', currency: 'MXN' },
  'mty': { destId: '-1674889', destType: 'city', name: 'Monterrey', currency: 'MXN' },
};

function buildBookingUrl(citySlug) {
  const city = cityBookingData[citySlug];
  if (!city) return `https://www.booking.com/?aid=${BOOKING_AFFILIATE_ID}`;
  return `https://www.booking.com/searchresults.html?aid=${BOOKING_AFFILIATE_ID}&ss=${encodeURIComponent(city.name)}&dest_id=${city.destId}&dest_type=${city.destType}&nflt=distance%3D1000`;
}

function buildHostelworldUrl(cityName) {
  const slug = cityName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
  return `https://www.hostelworld.com/st/hostels/${slug}/`;
}

export default function AffiliateBookingCard({ citySlug = 'cdmx', variant = 'full' }) {
  const city = cityBookingData[citySlug];
  const cityName = city ? city.name : citySlug;
  const bookingUrl = buildBookingUrl(citySlug);
  const hostelworldUrl = buildHostelworldUrl(cityName);

  if (variant === 'compact') {
    return (
      <div style={{
        backgroundColor: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        padding: '1.25rem',
        margin: '1.5rem 0',
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        flexWrap: 'wrap',
      }}>
        <div style={{ flex: 1, minWidth: '200px' }}>
          <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text)', margin: 0 }}>
            🏨 Stay near transit in {cityName}
          </h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', margin: '0.25rem 0 0' }}>
            Hotels & hostels near metro stations
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          <a href={bookingUrl} target="_blank" rel="noopener noreferrer sponsored" style={{
            padding: '0.5rem 1rem',
            backgroundColor: '#003580',
            color: '#fff',
            borderRadius: 'var(--radius)',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.8rem',
            whiteSpace: 'nowrap',
          }}>
            Booking.com
          </a>
          <a href={hostelworldUrl} target="_blank" rel="noopener noreferrer sponsored" style={{
            padding: '0.5rem 1rem',
            backgroundColor: 'var(--surface)',
            color: 'var(--primary)',
            border: '1px solid var(--primary-border)',
            borderRadius: 'var(--radius)',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '0.8rem',
            whiteSpace: 'nowrap',
          }}>
            Hostelworld
          </a>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      background: 'linear-gradient(135deg, rgba(0, 53, 128, 0.08) 0%, rgba(245, 166, 35, 0.05) 100%)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: '1.5rem',
      margin: '2rem 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        top: '-15px',
        right: '-15px',
        fontSize: '4rem',
        opacity: 0.05,
        lineHeight: 1,
      }}>
        🏨
      </div>

      <h3 style={{
        fontSize: '1.1rem',
        fontWeight: 700,
        color: 'var(--text)',
        marginBottom: '0.5rem',
      }}>
        Where to stay in {cityName}
      </h3>

      <p style={{
        fontSize: '0.875rem',
        color: 'var(--text-muted)',
        marginBottom: '1.25rem',
        lineHeight: 1.6,
      }}>
        Find hotels and hostels near transit stations. Book early for the best rates — especially during FIFA World Cup 2026.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '0.75rem',
        marginBottom: '1rem',
      }}>
        <a href={bookingUrl} target="_blank" rel="noopener noreferrer sponsored" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '1rem',
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          textDecoration: 'none',
          transition: 'border-color 0.2s',
        }}>
          <div style={{
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: 'var(--radius)',
            backgroundColor: '#003580',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 700,
            fontSize: '0.7rem',
            flexShrink: 0,
          }}>
            B.
          </div>
          <div>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)' }}>
              Booking.com
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
              Hotels near {cityName} metro
            </div>
          </div>
          <span style={{ marginLeft: 'auto', color: 'var(--text-dim)', fontSize: '0.75rem' }}>↗</span>
        </a>

        <a href={hostelworldUrl} target="_blank" rel="noopener noreferrer sponsored" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          padding: '1rem',
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius)',
          textDecoration: 'none',
          transition: 'border-color 0.2s',
        }}>
          <div style={{
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: 'var(--radius)',
            backgroundColor: '#F47521',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 700,
            fontSize: '0.7rem',
            flexShrink: 0,
          }}>
            HW
          </div>
          <div>
            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text)' }}>
              Hostelworld
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)' }}>
              Budget stays in {cityName}
            </div>
          </div>
          <span style={{ marginLeft: 'auto', color: 'var(--text-dim)', fontSize: '0.75rem' }}>↗</span>
        </a>
      </div>

      {citySlug === 'cdmx' || citySlug === 'gdl' || citySlug === 'mty' ? (
        <a href="/hospedaje/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.6rem 1rem',
          backgroundColor: 'var(--primary)',
          color: '#000',
          borderRadius: 'var(--radius)',
          textDecoration: 'none',
          fontWeight: 700,
          fontSize: '0.85rem',
        }}>
          🏠 Marimbas Home apartments →
        </a>
      ) : null}

      <p style={{
        fontSize: '0.7rem',
        color: 'var(--text-dim)',
        marginTop: '0.75rem',
        marginBottom: 0,
        opacity: 0.7,
      }}>
        Affiliate links help support MetroGuia.mx at no extra cost to you.
      </p>
    </div>
  );
}

export { cityBookingData, buildBookingUrl };
