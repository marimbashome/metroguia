'use client'

import { useState } from 'react'
import Image from 'next/image'
import { getAllCities } from '@/data/cities-config'

const cities = getAllCities()

export default function NavBar() {
  const [ciudadesOpen, setCiudadesOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <a href="/" className="navbar-logo">
          <Image src="/logo.png" alt="MetroGuia" width={30} height={30} priority />
          <span>MetroGuia</span>
        </a>

        <nav className="navbar-desktop" aria-label="Principal">
          <div
            className="navbar-dropdown-wrap"
            onMouseEnter={() => setCiudadesOpen(true)}
            onMouseLeave={() => setCiudadesOpen(false)}
          >
            <button className="navbar-link navbar-link-btn" aria-expanded={ciudadesOpen}>
              Ciudades <Chevron open={ciudadesOpen} />
            </button>
            {ciudadesOpen && (
              <div className="navbar-dropdown">
                {cities.map((c) => (
                  <a key={c.slug} href={`/${c.slug}/`} className="navbar-dropdown-item">
                    {c.name}
                    <span className="navbar-dropdown-state">{c.state}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="/lineas/" className="navbar-link">Líneas</a>
          <a href="/rutas/" className="navbar-link">Rutas</a>
          <a href="/aeropuertos/" className="navbar-link">Aeropuertos</a>
        </nav>

        <button
          className="navbar-hamburger"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menú"
          aria-expanded={mobileOpen}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            {mobileOpen ? (
              <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div className="navbar-mobile">
          <div className="navbar-mobile-section-title">Ciudades</div>
          <div className="navbar-mobile-cities">
            {cities.map((c) => (
              <a key={c.slug} href={`/${c.slug}/`} onClick={() => setMobileOpen(false)}>
                {c.name}
              </a>
            ))}
          </div>
          <a href="/lineas/" onClick={() => setMobileOpen(false)}>Líneas</a>
          <a href="/rutas/" onClick={() => setMobileOpen(false)}>Rutas</a>
          <a href="/aeropuertos/" onClick={() => setMobileOpen(false)}>Aeropuertos</a>
        </div>
      )}

      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(255,255,255,0.96);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--border);
        }
        .navbar-inner {
          height: var(--nav-height);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-4);
        }
        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
          flex-shrink: 0;
        }
        .navbar-logo img { border-radius: 6px; }
        .navbar-logo span {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 1.1rem;
          color: var(--forest);
        }
        .navbar-desktop { display: flex; align-items: center; gap: var(--space-5); }
        .navbar-link {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-muted);
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0;
        }
        .navbar-link:hover { color: var(--forest); }
        .navbar-dropdown-wrap { position: relative; }
        .navbar-dropdown {
          position: absolute;
          top: calc(100% + 0.5rem);
          left: 0;
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          box-shadow: var(--shadow-lg);
          padding: var(--space-2);
          display: grid;
          grid-template-columns: repeat(2, minmax(160px, 1fr));
          gap: 0.1rem;
          min-width: 340px;
          max-height: 70vh;
          overflow-y: auto;
        }
        .navbar-dropdown-item {
          display: flex;
          flex-direction: column;
          padding: 0.5rem 0.6rem;
          border-radius: var(--radius-sm);
          text-decoration: none;
          color: var(--text);
          font-size: 0.85rem;
          font-weight: 600;
        }
        .navbar-dropdown-item:hover { background: var(--surface); }
        .navbar-dropdown-state { font-size: 0.7rem; font-weight: 400; color: var(--text-dim); }
        .navbar-hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--forest);
          padding: 0.25rem;
        }
        .navbar-mobile {
          display: none;
          border-top: 1px solid var(--border);
          padding: var(--space-3) var(--space-4) var(--space-4);
          background: var(--bg);
        }
        .navbar-mobile a {
          display: block;
          padding: 0.6rem 0.25rem;
          text-decoration: none;
          color: var(--text);
          font-weight: 500;
          font-size: 0.92rem;
        }
        .navbar-mobile-section-title {
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--text-dim);
          padding: 0.5rem 0.25rem 0.25rem;
        }
        .navbar-mobile-cities {
          display: grid;
          grid-template-columns: 1fr 1fr;
        }
        @media (max-width: 860px) {
          .navbar-desktop { display: none; }
          .navbar-hamburger { display: flex; }
          .navbar-mobile { display: block; }
        }
      `}</style>
    </header>
  )
}

function Chevron({ open }) {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ transition: 'transform 0.15s', transform: open ? 'rotate(180deg)' : 'none' }}>
      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
