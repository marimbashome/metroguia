'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import LanguageSwitcher from '@/app/components/LanguageSwitcher'

// Import translations
import es from '@/translations/es.json'
import en from '@/translations/en.json'
import pt from '@/translations/pt.json'
import fr from '@/translations/fr.json'
import de from '@/translations/de.json'
import ja from '@/translations/ja.json'
import ko from '@/translations/ko.json'

const allTranslations = { es, en, pt, fr, de, ja, ko }

// Mega-menu data
const megaMenuData = {
  ciudades: {
    label: 'Ciudades',
    sections: [
      {
        title: 'Sedes FIFA 2026',
        links: [
          { label: 'CDMX — Metro · Tren Ligero · BRT', href: '/cdmx/', badge: '⚽', color: '#F5A623' },
          { label: 'Guadalajara — Mi Tren · Macrobús', href: '/gdl/', badge: '⚽', color: '#06B6D4' },
          { label: 'Monterrey — Metrorrey · Ecovía', href: '/mty/', badge: '⚽', color: '#EC4899' },
        ],
      },
      {
        title: 'Más ciudades',
        links: [
          { label: 'Puebla — RUTA BRT', href: '/puebla/', color: '#8B5CF6' },
          { label: 'Mérida — Va y Ven', href: '/merida/', color: '#F59E0B' },
          { label: 'León — SIT León', href: '/leon/', color: '#10B981' },
          { label: 'Querétaro — QroBús', href: '/queretaro/', color: '#EF4444' },
          { label: 'Chihuahua — Chepe', href: '/chihuahua/', color: '#D97706' },
          { label: 'Tijuana — SITT', href: '/tijuana/', color: '#6B7280' },
          { label: 'Toluca — Tren Interurbano', href: '/toluca/', color: '#7C3AED' },
          { label: 'Tren Maya — 7 tramos', href: '/tren-maya/', color: '#0EA5E9' },
        ],
      },
      {
        title: 'Nuevas ciudades',
        links: [
          { label: 'Oaxaca', href: '/oaxaca/', color: '#D97706' },
          { label: 'Morelia', href: '/morelia/', color: '#6366F1' },
          { label: 'Veracruz', href: '/veracruz/', color: '#0EA5E9' },
          { label: 'Campeche', href: '/campeche/', color: '#F59E0B' },
          { label: 'Villahermosa', href: '/villahermosa/', color: '#10B981' },
        ],
      },
    ],
  },
  transporte: {
    label: 'Transporte',
    sections: [
      {
        title: 'Aéreo y terrestre',
        links: [
          { label: '✈️ Aeropuertos', href: '/aeropuertos/', desc: 'Del aeropuerto al centro' },
          { label: '🚌 Terminales de Autobús', href: '/terminales/', desc: 'TAPO, Central Norte y más' },
          { label: '⛴️ Ferries', href: '/ferries/', desc: 'Islas y conexiones costeras' },
          { label: '🛂 Cruces Fronterizos', href: '/frontera/', desc: 'USA, Guatemala y Belice' },
        ],
      },
      {
        title: 'Sistemas CDMX',
        links: [
          { label: 'Metro CDMX — 12 líneas', href: '/cdmx/', desc: '195 estaciones' },
          { label: 'Metrobús — 7 líneas', href: '/cdmx/metrobus/', desc: 'BRT CDMX' },
          { label: 'Cablebús', href: '/cdmx/cablebus/', desc: 'L1 y L2' },
          { label: 'Tren Ligero', href: '/cdmx/tren-ligero/', desc: 'Tasqueña → Xochimilco' },
          { label: 'Tren Suburbano', href: '/cdmx/tren-suburbano/', desc: 'Buenavista → AIFA' },
          { label: 'Trolebús', href: '/cdmx/trolebus/', desc: '12 líneas' },
          { label: 'Mexicable', href: '/cdmx/mexicable/', desc: 'Cablebús Norte' },
        ],
      },
    ],
  },
  turismo: {
    label: 'Turismo',
    sections: [
      {
        title: 'Programas SECTUR',
        links: [
          { label: '🏘️ 177 Pueblos Mágicos', href: '/turismo/pueblos-magicos/', color: '#E91E8C' },
          { label: '🏛️ Zonas Arqueológicas', href: '/turismo/zonas-arqueologicas/', color: '#D97706' },
          { label: '🌊 Playas', href: '/turismo/playas/', color: '#0EA5E9' },
          { label: '🏙️ Barrios Mágicos', href: '/turismo/barrios-magicos/', color: '#8B5CF6' },
          { label: '🍽️ Rutas Gastronómicas', href: '/turismo/rutas-gastronomicas/', color: '#10B981' },
          { label: '🌿 Naturaleza', href: '/turismo/naturaleza/', color: '#22C55E' },
          { label: '🏛️ Ciudades Patrimonio', href: '/turismo/ciudades-patrimonio/', color: '#6366F1' },
          { label: '⭐ Destinos Prioritarios', href: '/turismo/destinos-prioritarios/', color: '#F59E0B' },
        ],
      },
      {
        title: 'Explora',
        links: [
          { label: '🗺️ Explorar todo', href: '/turismo/', desc: 'Todos los destinos' },
          { label: '🏨 Hospedaje STR', href: '/hospedaje/', desc: 'Cerca del transporte' },
          { label: '🗺️ Zonas CDMX', href: '/zona/roma-condesa/', desc: 'Barrios y colonias' },
        ],
      },
    ],
  },
  mundial: {
    label: '⚽ Mundial 2026',
    href: '/mundial-2026/',
    highlight: true,
    sections: [
      {
        title: 'Sedes',
        links: [
          { label: 'CDMX — Estadio Azteca', href: '/mundial-2026/', desc: '11, 17, 24 jun · 30 jun · 5 jul' },
          { label: 'Guadalajara — Estadio Akron', href: '/gdl/mundial-2026/', desc: '11, 18, 23, 26 jun' },
          { label: 'Monterrey — Estadio BBVA', href: '/mty/mundial-2026/', desc: '14, 20, 24, 29 jun' },
        ],
      },
      {
        title: 'Guías',
        links: [
          { label: 'Cómo llegar al Azteca', href: '/mundial-2026/como-llegar-estadio-azteca/' },
          { label: 'Transporte público CDMX', href: '/mundial-2026/transporte-publico-cdmx/' },
          { label: 'Todos los partidos', href: '/mundial-2026/partidos/' },
        ],
      },
    ],
  },
}

function MegaMenuDropdown({ menu, prefix }) {
  return (
    <div style={{
      position: 'absolute',
      top: 'calc(100% + 1px)',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundColor: 'rgba(255, 255, 255, 0.98)',
      backdropFilter: 'blur(20px)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
      padding: '1.25rem',
      display: 'flex',
      gap: '2rem',
      minWidth: '480px',
      maxWidth: '680px',
      zIndex: 200,
    }}>
      {menu.sections.map((section) => (
        <div key={section.title} style={{ flex: 1, minWidth: 0 }}>
          <div style={{
            fontSize: '0.65rem',
            fontWeight: 700,
            color: 'var(--text-dim)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '0.625rem',
            paddingBottom: '0.375rem',
            borderBottom: '1px solid var(--border)',
          }}>{section.title}</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.125rem' }}>
            {section.links.map((link) => (
              <a
                key={link.href}
                href={`${prefix}${link.href}`}
                style={{
                  display: 'block',
                  padding: '0.375rem 0.5rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: link.color || 'var(--text-muted)',
                  transition: 'background-color 0.15s',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--surface)' }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent' }}
              >
                {link.label}
                {link.desc && (
                  <span style={{ display: 'block', fontSize: '0.7rem', color: 'var(--text-dim)', fontWeight: 400 }}>
                    {link.desc}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function MegaMenuItem({ menuKey, menu, prefix }) {
  const [open, setOpen] = useState(false)

  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {menu.href ? (
        <a
          href={`${prefix}${menu.href}`}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            color: menu.highlight ? 'var(--primary)' : 'var(--text-muted)',
            fontSize: '0.875rem',
            fontWeight: menu.highlight ? 700 : 500,
            textDecoration: 'none',
            padding: '0.375rem 0',
            whiteSpace: 'nowrap',
          }}
        >
          {menu.label}
          {menu.sections && (
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ opacity: 0.5, transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </a>
      ) : (
        <button
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-muted)',
            fontSize: '0.875rem',
            fontWeight: 500,
            padding: '0.375rem 0',
            whiteSpace: 'nowrap',
          }}
        >
          {menu.label}
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ opacity: 0.5, transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}>
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
      {open && menu.sections && (
        <MegaMenuDropdown menu={menu} prefix={prefix} />
      )}
    </div>
  )
}

export default function NavBar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  // Detect language from URL
  const segments = pathname.split('/').filter(Boolean)
  const lang = segments[0] && ['en', 'pt', 'fr', 'de', 'ja', 'ko'].includes(segments[0])
    ? segments[0]
    : 'es'

  const t = allTranslations[lang] || allTranslations.es
  const prefix = lang === 'es' ? '' : `/${lang}`

  return (
    <header style={{
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem',
        height: '56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
      }}>
        {/* Logo */}
        <a href={`${prefix}/`} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.625rem',
          textDecoration: 'none',
          flexShrink: 0,
        }}>
          <img
            src="/logo.png"
            alt="MetroGuia"
            width={32}
            height={32}
            style={{ height: '32px', width: '32px', borderRadius: '6px' }}
          />
          <span style={{
            fontSize: '1.125rem',
            fontWeight: 800,
            color: 'var(--primary)',
            letterSpacing: '-0.02em',
          }}>
            MetroGuia
          </span>
        </a>

        {/* Desktop Mega-Menu Nav */}
        <nav suppressHydrationWarning style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem',
          flex: 1,
          justifyContent: 'center',
        }}
          className="nav-desktop"
        >
          {Object.entries(megaMenuData).map(([key, menu]) => (
            <MegaMenuItem key={key} menuKey={key} menu={menu} prefix={prefix} />
          ))}
        </nav>

        {/* Right side: City pills + Language */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.375rem',
          flexShrink: 0,
        }}>
          {/* City pills */}
          <a href={`${prefix}/cdmx/`} style={{
            fontSize: '0.7rem',
            fontWeight: 700,
            padding: '0.2rem 0.5rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--primary-glow)',
            border: '1px solid var(--primary-border)',
            color: 'var(--primary)',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}>CDMX</a>
          <a href={`${prefix}/gdl/`} style={{
            fontSize: '0.7rem',
            fontWeight: 700,
            padding: '0.2rem 0.5rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'rgba(6,182,212,0.1)',
            border: '1px solid rgba(6,182,212,0.3)',
            color: '#06B6D4',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}>GDL</a>
          <a href={`${prefix}/mty/`} style={{
            fontSize: '0.7rem',
            fontWeight: 700,
            padding: '0.2rem 0.5rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'rgba(236,72,153,0.1)',
            border: '1px solid rgba(236,72,153,0.3)',
            color: '#EC4899',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
          }}>MTY</a>

          {/* Divider */}
          <div style={{ width: '1px', height: '20px', backgroundColor: 'var(--border)', margin: '0 0.25rem' }} />

          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.25rem',
              color: 'var(--text-muted)',
            }}
            className="nav-hamburger"
            aria-label="Menu"
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {mobileOpen ? (
                <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              ) : (
                <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          borderTop: '1px solid var(--border)',
          backgroundColor: 'rgba(255,255,255,0.98)',
          padding: '1rem',
          maxHeight: '70vh',
          overflowY: 'auto',
        }} className="nav-mobile">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {/* Cities */}
            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.5rem 0.25rem 0.25rem' }}>Ciudades FIFA 2026</div>
            {[
              { label: 'Ciudad de México (CDMX)', href: `${prefix}/cdmx/`, color: '#F5A623' },
              { label: 'Guadalajara (GDL)', href: `${prefix}/gdl/`, color: '#06B6D4' },
              { label: 'Monterrey (MTY)', href: `${prefix}/mty/`, color: '#EC4899' },
            ].map(l => (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} style={{ padding: '0.625rem 0.5rem', color: l.color, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', borderRadius: '6px' }}>
                {l.label}
              </a>
            ))}

            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.75rem 0.25rem 0.25rem' }}>Transporte</div>
            {[
              { label: '✈️ Aeropuertos', href: `${prefix}/aeropuertos/` },
              { label: '🚌 Terminales', href: `${prefix}/terminales/` },
              { label: '⛴️ Ferries', href: `${prefix}/ferries/` },
              { label: '🛂 Cruces Fronterizos', href: `${prefix}/frontera/` },
              { label: '🚇 Líneas de Metro', href: `${prefix}/lineas/` },
            ].map(l => (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} style={{ padding: '0.625rem 0.5rem', color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none', borderRadius: '6px' }}>
                {l.label}
              </a>
            ))}

            <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '0.75rem 0.25rem 0.25rem' }}>Turismo</div>
            {[
              { label: '🏘️ Pueblos Mágicos', href: `${prefix}/turismo/pueblos-magicos/` },
              { label: '🏛️ Zonas Arqueológicas', href: `${prefix}/turismo/zonas-arqueologicas/` },
              { label: '🌊 Playas', href: `${prefix}/turismo/playas/` },
              { label: '🍽️ Rutas Gastronómicas', href: `${prefix}/turismo/rutas-gastronomicas/` },
              { label: '🌿 Naturaleza', href: `${prefix}/turismo/naturaleza/` },
              { label: 'Ver todo →', href: `${prefix}/turismo/` },
            ].map(l => (
              <a key={l.href} href={l.href} onClick={() => setMobileOpen(false)} style={{ padding: '0.625rem 0.5rem', color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none', borderRadius: '6px' }}>
                {l.label}
              </a>
            ))}

            <div style={{ borderTop: '1px solid var(--border)', marginTop: '0.5rem', paddingTop: '0.75rem' }}>
              <a href={`${prefix}/mundial-2026/`} onClick={() => setMobileOpen(false)} style={{ padding: '0.625rem 0.5rem', color: 'var(--primary)', fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', display: 'block', borderRadius: '6px' }}>
                ⚽ Mundial FIFA 2026
              </a>
              <a href={`${prefix}/hospedaje/`} onClick={() => setMobileOpen(false)} style={{ padding: '0.625rem 0.5rem', color: 'var(--text-muted)', fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none', display: 'block', borderRadius: '6px' }}>
                🏨 Hospedaje
              </a>
            </div>
          </div>
        </div>
      )}

      {/* CSS for responsive nav */}
      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
        @media (min-width: 901px) {
          .nav-mobile { display: none !important; }
          .nav-hamburger { display: none !important; }
        }
      `}</style>
    </header>
  )
}
