'use client'

import AdBannerLazy, { AdBannerLazyInArticle } from '@/app/components/AdBannerLazy'
import AffiliateHospedaje from '@/app/components/AffiliateHospedaje'
import BookingWidget from '@/app/components/BookingWidget'
import ViatorToursWidget from '@/app/components/ViatorToursWidget'
import MarimbasCondesa from '@/app/components/MarimbasCondesa'

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
          <h2 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '1.5rem' }}>Cómo llegar a cada estadio</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <a href="/mundial-2026/como-llegar-estadio-azteca/" style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}>
                <div style={{ background: 'linear-gradient(135deg, #E91E8C 0%, #c71585 100%)', color: 'white', padding: '2rem', minHeight: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', fontWeight: '700' }}>🏛️ Estadio Azteca</h3>
                  <p style={{ margin: '0', fontSize: '0.875rem', opacity: 0.9 }}>Ciudad de México</p>
                  <p style={{ margin: '0.75rem 0 0 0', fontSize: '0.9rem', opacity: 0.8 }}>45 minutos en Metro L2 + Tren Ligero</p>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <p style={{ margin: '0', color: 'var(--primary)', fontWeight: '600' }}>Ver ruta completa →</p>
                </div>
              </a>
            </div>

            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <a href="/gdl/mundial-2026/como-llegar-estadio-akron/" style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}>
                <div style={{ background: 'linear-gradient(135deg, #06B6D4 0%, #0891b2 100%)', color: 'white', padding: '2rem', minHeight: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', fontWeight: '700' }}>🌺 Estadio Akron</h3>
                  <p style={{ margin: '0', fontSize: '0.875rem', opacity: 0.9 }}>Guadalajara</p>
                  <p style={{ margin: '0.75rem 0 0 0', fontSize: '0.9rem', opacity: 0.8 }}>40 minutos en Línea 3 SITEUR</p>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <p style={{ margin: '0', color: 'var(--primary)', fontWeight: '600' }}>Ver ruta completa →</p>
                </div>
              </a>
            </div>

            <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--surface)', border: '1px solid var(--border)' }}>
              <a href="/mty/mundial-2026/como-llegar-estadio-bbva/" style={{ display: 'block', color: 'inherit', textDecoration: 'none' }}>
                <div style={{ background: 'linear-gradient(135deg, #EC4899 0%, #db2777 100%)', color: 'white', padding: '2rem', minHeight: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.25rem', fontWeight: '700' }}>🏔️ Estadio BBVA</h3>
                  <p style={{ margin: '0', fontSize: '0.875rem', opacity: 0.9 }}>Monterrey</p>
                  <p style={{ margin: '0.75rem 0 0 0', fontSize: '0.9rem', opacity: 0.8 }}>35 minutos en Metro L1/L2</p>
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <p style={{ margin: '0', color: 'var(--primary)', fontWeight: '600' }}>Ver ruta completa →</p>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '1.5rem' }}>Información de los partidos</h2>
          <a href="/mundial-2026/calendario/" style={{ display: 'inline-block', background: 'var(--primary)', color: 'white', padding: '1rem 2rem', borderRadius: 'var(--radius)', textDecoration: 'none', fontWeight: '600' }}>
            Ver calendario de 13 partidos →
          </a>
        </section>

        <AffiliateHospedaje />
      </div>
    </>
  );
}
