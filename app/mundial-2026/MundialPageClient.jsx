'use client'

import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy'
import AffiliateHospedaje from '@/app/components/AffiliateHospedaje'
import BookingWidget from '@/app/components/BookingWidget'
import ViatorToursWidget from '@/app/components/ViatorToursWidget'
import MarimbasCondesa from '@/app/components/MarimbasCondesa'
import BlogGuiasWidget from '@/app/components/BlogGuiasWidget'
import { blogLinks } from '@/data/blog-links'

function Countdown() {
  const today = new Date();
  const inaugural = new Date('2026-06-11T00:00:00-06:00');
  const daysLeft = Math.floor((inaugural - today) / (1000 * 60 * 60 * 24));

  return (
    <div style={{
      background: 'linear-gradient(135deg, var(--primary) 0%, var(--cdmx) 100%)',
      padding: '3rem 2rem',
      borderRadius: 'var(--radius-lg)',
      textAlign: 'center',
      marginBottom: '3rem'
    }}>
      <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)', margin: '0 0 0.5rem 0' }}>El Mundial comienza en</p>
      <h2 style={{ color: '#fff', margin: '0.5rem 0', fontSize: '3rem', fontWeight: '800' }}>{daysLeft} días</h2>
      <p style={{ color: 'rgba(255,255,255,0.9)', margin: '0.5rem 0', fontSize: '0.95rem' }}>Jueves, 11 de junio de 2026 — Inauguración en el Estadio Azteca</p>
    </div>
  );
}

export default function MundialPageContent() {
  return (
    <>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
        <Countdown />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '4rem' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>Hospedaje para el Mundial</h2>
            <BookingWidget ciudad="CDMX" />
          </div>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem' }}>Tours y Actividades</h2>
            <ViatorToursWidget ciudad="CDMX" zona="Ciudad de México" />
          </div>
        </div>

        <MarimbasCondesa compact={false} />

        <AdBannerLazy slot="div-gpt-ad-1" />

        <section style={{ marginTop: '3rem', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '0.5rem' }}>Cómo llegar a cada estadio</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>16 sedes en 3 países — guías de transporte público paso a paso</p>

          {/* MEXICO */}
          <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>🇲🇽 México</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '2.5rem' }}>
            {[
              { href: '/mundial-2026/como-llegar-estadio-azteca/', emoji: '🏛️', name: 'Estadio Azteca', city: 'Ciudad de México', transit: '45 min — Metro L2 + Tren Ligero', gradient: 'linear-gradient(135deg, #E91E8C 0%, #c71585 100%)' },
              { href: '/gdl/mundial-2026/como-llegar-estadio-akron/', emoji: '🌺', name: 'Estadio Akron', city: 'Guadalajara', transit: '40 min — Línea 3 SITEUR', gradient: 'linear-gradient(135deg, #06B6D4 0%, #0891b2 100%)' },
              { href: '/mty/mundial-2026/como-llegar-estadio-bbva/', emoji: '🏔️', name: 'Estadio BBVA', city: 'Monterrey', transit: '35 min — Metro L1/L2', gradient: 'linear-gradient(135deg, #EC4899 0%, #db2777 100%)' },
            ].map((s) => (
              <div key={s.href} style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <a href={s.href} style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}>
                  <div style={{ background: s.gradient, color: 'white', padding: '2rem', minHeight: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', fontWeight: '700' }}>{s.emoji} {s.name}</h3>
                    <p style={{ margin: '0', fontSize: '0.875rem', opacity: 0.9 }}>{s.city}</p>
                    <p style={{ margin: '0.75rem 0 0 0', fontSize: '0.9rem', opacity: 0.8 }}>{s.transit}</p>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <p style={{ margin: '0', color: 'var(--primary)', fontWeight: '600' }}>Ver ruta completa →</p>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* USA */}
          <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>🇺🇸 United States</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '2.5rem' }}>
            {[
              { href: '/mundial-2026/metlife-stadium/', emoji: '🗽', name: 'MetLife Stadium', city: 'New York / New Jersey', transit: '50 min — NJ Transit Bus 380', gradient: 'linear-gradient(135deg, #1E3A5F 0%, #0F2440 100%)', badge: '⭐ FINAL' },
              { href: '/mundial-2026/sofi-stadium/', emoji: '🎬', name: 'SoFi Stadium', city: 'Los Angeles', transit: '45 min — Metro K Line', gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)', badge: 'Semifinal' },
              { href: '/mundial-2026/nrg-stadium/', emoji: '🤠', name: 'NRG Stadium', city: 'Houston', transit: '40 min — METRO Red Line', gradient: 'linear-gradient(135deg, #DC2626 0%, #B91C1C 100%)' },
              { href: '/mundial-2026/mercedes-benz-stadium/', emoji: '🍑', name: 'Mercedes-Benz Stadium', city: 'Atlanta', transit: '25 min — MARTA Direct', gradient: 'linear-gradient(135deg, #7C3AED 0%, #6D28D9 100%)' },
              { href: '/mundial-2026/lincoln-financial-field/', emoji: '🔔', name: 'Lincoln Financial Field', city: 'Philadelphia', transit: '20 min — SEPTA Broad St', gradient: 'linear-gradient(135deg, #059669 0%, #047857 100%)' },
              { href: '/mundial-2026/lumen-field/', emoji: '☕', name: 'Lumen Field', city: 'Seattle', transit: '15 min — Sound Transit Direct', gradient: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)' },
              { href: '/mundial-2026/levis-stadium/', emoji: '💻', name: "Levi's Stadium", city: 'San Francisco / Santa Clara', transit: '50 min — BART + Caltrain', gradient: 'linear-gradient(135deg, #EA580C 0%, #C2410C 100%)' },
              { href: '/mundial-2026/gillette-stadium/', emoji: '🦞', name: 'Gillette Stadium', city: 'Boston / Foxborough', transit: '60 min — MBTA + Shuttle', gradient: 'linear-gradient(135deg, #0369A1 0%, #075985 100%)' },
              { href: '/mundial-2026/hard-rock-stadium/', emoji: '🌴', name: 'Hard Rock Stadium', city: 'Miami', transit: '50 min — Metrorail + Tri-Rail', gradient: 'linear-gradient(135deg, #0891B2 0%, #0E7490 100%)' },
              { href: '/mundial-2026/att-stadium/', emoji: '⛳', name: 'AT&T Stadium', city: 'Dallas / Arlington', transit: '45 min — DART + Uber', gradient: 'linear-gradient(135deg, #4338CA 0%, #3730A3 100%)' },
              { href: '/mundial-2026/arrowhead-stadium/', emoji: '🏈', name: 'Arrowhead Stadium', city: 'Kansas City', transit: '20 min — Uber/Taxi', gradient: 'linear-gradient(135deg, #BE123C 0%, #9F1239 100%)' },
            ].map((s) => (
              <div key={s.href} style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <a href={s.href} style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}>
                  <div style={{ background: s.gradient, color: 'white', padding: '2rem', minHeight: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
                    {s.badge && <span style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: '700' }}>{s.badge}</span>}
                    <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', fontWeight: '700' }}>{s.emoji} {s.name}</h3>
                    <p style={{ margin: '0', fontSize: '0.875rem', opacity: 0.9 }}>{s.city}</p>
                    <p style={{ margin: '0.75rem 0 0 0', fontSize: '0.9rem', opacity: 0.8 }}>{s.transit}</p>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <p style={{ margin: '0', color: 'var(--primary)', fontWeight: '600' }}>View transit guide →</p>
                  </div>
                </a>
              </div>
            ))}
          </div>

          {/* CANADA */}
          <h3 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>🇨🇦 Canada</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '2.5rem' }}>
            {[
              { href: '/mundial-2026/bmo-field/', emoji: '🍁', name: 'BMO Field', city: 'Toronto', transit: '25 min — TTC Streetcar', gradient: 'linear-gradient(135deg, #DC2626 0%, #991B1B 100%)' },
              { href: '/mundial-2026/bc-place/', emoji: '🏔️', name: 'BC Place', city: 'Vancouver', transit: '5 min — SkyTrain Direct', gradient: 'linear-gradient(135deg, #1D4ED8 0%, #1E40AF 100%)' },
            ].map((s) => (
              <div key={s.href} style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--surface)', border: '1px solid var(--border)' }}>
                <a href={s.href} style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}>
                  <div style={{ background: s.gradient, color: 'white', padding: '2rem', minHeight: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', fontWeight: '700' }}>{s.emoji} {s.name}</h3>
                    <p style={{ margin: '0', fontSize: '0.875rem', opacity: 0.9 }}>{s.city}</p>
                    <p style={{ margin: '0.75rem 0 0 0', fontSize: '0.9rem', opacity: 0.8 }}>{s.transit}</p>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <p style={{ margin: '0', color: 'var(--primary)', fontWeight: '600' }}>View transit guide →</p>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '1.5rem' }}>Información de los partidos</h2>
          <a href="/mundial-2026/calendario/" style={{ display: 'inline-block', background: 'var(--primary)', color: 'white', padding: '1rem 2rem', borderRadius: 'var(--radius)', textDecoration: 'none', fontWeight: '600' }}>
            Ver calendario de 13 partidos →
          </a>
        </section>

        <AffiliateHospedaje />

        {/* Blog Guides — Travel guides for World Cup visitors */}
        <BlogGuiasWidget guides={blogLinks.mundial} context="Mundial FIFA 2026" />
      </div>
    </>
  );
}
