import { estacionesAtlanta } from '@/data/atlanta/estaciones';
import { lineasAtlanta } from '@/data/atlanta/lineas-detalle';
import Link from 'next/link';
import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy';
import AffiliateTransportCard from '@/app/components/AffiliateTransportCard';
import SearchBar from '@/app/components/SearchBar';
import AffiliateMundial from '@/app/components/AffiliateMundial';

export const metadata = {
  title: 'Atlanta MARTA Guide | Stations, Lines & Routes',
  description: 'Explore Atlanta MARTA with interactive maps, real-time info, and travel guides. Find stations, lines, and connections across Metro Atlanta.',
  openGraph: {
    title: 'Atlanta MARTA Guide',
    description: 'Complete guide to Atlanta MARTA stations, lines, and routes',
    url: 'https://metroguia.mx/atlanta',
  },
};

export default function AtlantaPage() {
  const lineasOrdenadas = lineasAtlanta.sort((a, b) => a.colorNombre.localeCompare(b.colorNombre));

  return (
    <main style={{ backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      {/* HERO */}
      <section style={{ background: 'linear-gradient(135deg, #FDBF00 0%, #FDBF00cc 100%)', color: '#000', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: '900', margin: '0 0 16px 0', lineHeight: '1.1', color: '#000' }}>
            Atlanta MARTA
          </h1>
          <p style={{ fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)', margin: '0 0 24px 0', opacity: '0.9', fontWeight: '500', color: '#000' }}>
            4 Lines · 38 Stations · Connecting Metro Atlanta
          </p>
          <p style={{ fontSize: '1rem', margin: '0', opacity: '0.85', maxWidth: '600px', color: '#000' }}>
            Navigate Atlanta's MARTA system with real-time information, detailed maps, and travel guides for commuters and visitors.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section style={{ backgroundColor: 'var(--surface)', padding: '60px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '24px' }}>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '900', margin: '0 0 8px 0', color: '#FDBF00' }}>
                38
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-dim)', margin: '0', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Stations
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '900', margin: '0 0 8px 0', color: '#FDBF00' }}>
                4
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-dim)', margin: '0', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Lines
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '900', margin: '0 0 8px 0', color: '#FDBF00' }}>
                $2.50
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-dim)', margin: '0', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Base Fare
              </p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '900', margin: '0 0 8px 0', color: '#FDBF00' }}>
                24/7
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-dim)', margin: '0', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                24-Hour Service
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH */}
      <section style={{ maxWidth: '1200px', margin: '-40px auto 0', padding: '0 24px', position: 'relative', zIndex: 10 }}>
        <SearchBar ciudad="atlanta" />
      </section>

      {/* FIFA 2026 */}
      <section style={{ maxWidth: '1200px', margin: '60px auto', padding: '0 24px' }}>
        <div style={{ backgroundColor: 'linear-gradient(135deg, #1a472a 0%, #2d5a3d 100%)', backgroundImage: 'linear-gradient(135deg, #1a472a 0%, #2d5a3d 100%)', borderRadius: 'var(--radius)', padding: '40px 24px', color: '#fff' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '800', margin: '0 0 16px 0' }}>
            FIFA 2026 in Atlanta
          </h2>
          <p style={{ fontSize: '1rem', margin: '0 0 20px 0', opacity: '0.95', maxWidth: '600px', lineHeight: '1.6' }}>
            Atlanta will host group stage matches at Mercedes-Benz Stadium during the 2026 FIFA World Cup. Use MARTA to reach the venue easily from downtown.
          </p>
          <p style={{ fontSize: '0.9rem', color: '#FFD700', fontWeight: '700', margin: '0' }}>
            Mercedes-Benz Stadium: Downtown Atlanta via Georgia Dome/Philips Arena stations
          </p>
        </div>
      </section>

      {/* LINES */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: '800', margin: '0 0 32px 0', color: 'var(--text)' }}>
          All MARTA Lines
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
          {lineasOrdenadas.map((linea) => (
            <Link href={`/atlanta/line/${linea.id}`} key={linea.id}>
              <div style={{ backgroundColor: 'var(--surface)', border: `2px solid ${linea.color}`, borderRadius: 'var(--radius)', padding: '24px', cursor: 'pointer', transition: 'all 0.2s ease' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                  <span style={{ width: '50px', height: '50px', backgroundColor: linea.color, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '1.5rem', fontWeight: '900', flexShrink: 0 }}>
                    {linea.id.charAt(0)}
                  </span>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '800', margin: '0', color: 'var(--text)' }}>
                    {linea.colorNombre}
                  </h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-dim)', margin: '0 0 12px 0', fontWeight: '500' }}>
                  {linea.inicio} → {linea.fin}
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0 0 16px 0', lineHeight: '1.4' }}>
                  {linea.total} stations
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {linea.municipios.slice(0, 3).map((region, idx) => (
                    <span key={idx} style={{ padding: '2px 8px', backgroundColor: `${linea.color}20`, color: linea.color, borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: '600' }}>
                      {region}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <AdBannerLazy slot="4434764790" />

      {/* FEATURED STATIONS */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: '800', margin: '0 0 32px 0', color: 'var(--text)' }}>
          Popular Stations
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '16px' }}>
          {estacionesAtlanta.filter((_, i) => [0, 2, 5, 8, 10, 15].includes(i)).map((estacion) => (
            <Link href={`/atlanta/station/${estacion.slug}`} key={estacion.slug}>
              <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', padding: '20px', cursor: 'pointer', border: '1px solid var(--border)', transition: 'all 0.2s ease' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: '700', margin: '0 0 8px 0', color: 'var(--text)' }}>
                  {estacion.nombre}
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', margin: '0 0 8px 0', fontWeight: '500' }}>
                  {estacion.county}
                </p>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', margin: '0', lineHeight: '1.4' }}>
                  {estacion.intro}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* TRANSIT INFO */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', padding: '40px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '800', margin: '0 0 24px 0', color: 'var(--text)' }}>
            Fares & Payment
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            <div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 8px 0', fontWeight: '600', letterSpacing: '0.05em' }}>
                Single Ride
              </p>
              <p style={{ fontSize: '1.5rem', fontWeight: '800', color: '#FDBF00', margin: '0' }}>
                $2.50 USD
              </p>
            </div>
            <div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 8px 0', fontWeight: '600', letterSpacing: '0.05em' }}>
                Day Pass
              </p>
              <p style={{ fontSize: '1.5rem', fontWeight: '800', color: '#FDBF00', margin: '0' }}>
                $10 USD
              </p>
            </div>
            <div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 8px 0', fontWeight: '600', letterSpacing: '0.05em' }}>
                Accepted Payment
              </p>
              <p style={{ fontSize: '1rem', fontWeight: '600', margin: '0' }}>
                Breeze Card, Apple Pay
              </p>
            </div>
            <div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', margin: '0 0 8px 0', fontWeight: '600', letterSpacing: '0.05em' }}>
                Hours
              </p>
              <p style={{ fontSize: '1rem', fontWeight: '600', margin: '0' }}>
                24 Hours / 7 Days
              </p>
            </div>
          </div>
        </div>
      </section>

      <AdBannerLazyInArticle slot="1082410395" />

      {/* LODGING */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: '800', margin: '0 0 32px 0', color: 'var(--text)' }}>
          Where to Stay in Atlanta
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', padding: '24px', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
              Downtown Atlanta
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 12px 0', lineHeight: '1.5' }}>
              Business district, convention center, aquarium. Red, Gold, Green Lines access.
            </p>
            <p style={{ fontSize: '0.85rem', color: '#FDBF00', fontWeight: '700' }}>
              Hotels: $130–$280/night
            </p>
          </div>
          <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', padding: '24px', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
              Midtown
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 12px 0', lineHeight: '1.5' }}>
              Arts, culture, shopping, nightlife. Red and Blue Lines.
            </p>
            <p style={{ fontSize: '0.85rem', color: '#FDBF00', fontWeight: '700' }}>
              Hotels: $110–$240/night
            </p>
          </div>
          <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', padding: '24px', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
              Buckhead
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 12px 0', lineHeight: '1.5' }}>
              Upscale shopping, dining, luxury. Red Line and express service.
            </p>
            <p style={{ fontSize: '0.85rem', color: '#FDBF00', fontWeight: '700' }}>
              Hotels: $150–$320/night
            </p>
          </div>
          <div style={{ backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', padding: '24px', border: '1px solid var(--border)' }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: '700', margin: '0 0 12px 0', color: 'var(--text)' }}>
              East Atlanta
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: '0 0 12px 0', lineHeight: '1.5' }}>
              Vibrant neighborhoods, local dining. Gold and Blue Lines.
            </p>
            <p style={{ fontSize: '0.85rem', color: '#FDBF00', fontWeight: '700' }}>
              Hotels: $90–$160/night
            </p>
          </div>
        </div>
      </section>

      {/* AFFILIATE */}
      <section style={{ maxWidth: '800px', margin: '60px auto', padding: '0 24px' }}>
        <AffiliateTransportCard ciudad="Atlanta" estacion={null} fechas={null} />
      </section>

      {/* MUNDIAL */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 24px' }}>
        <AffiliateMundial />
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--surface)', padding: '60px 24px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', margin: '0 0 16px 0', color: 'var(--text)' }}>
          Ready to Explore?
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', margin: '0 0 24px 0', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto' }}>
          Plan your Atlanta MARTA journey today with our interactive maps and station guides.
        </p>
      </section>
    </main>
  );
}
