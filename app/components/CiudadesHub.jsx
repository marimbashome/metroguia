// ============================================================================
// CiudadesHub — Selector de ciudades para homepage
// Muestra las 3 ciudades sede del Mundial FIFA 2026 en México
// También disponible: ciudades en USA y Canadá
// ============================================================================

'use client';

import { useState } from 'react';

export default function CiudadesHub() {
  const [activeTab, setActiveTab] = useState('mexico');
  // Mexico FIFA 2026 cities
  const ciudadesMexico = [
    {
      id: 'cdmx',
      nombre: 'Ciudad de México',
      abbr: 'CDMX',
      color: '#F5A623',
      descripcion: 'Metro con 195 estaciones en 12 líneas. La red más grande de México.',
      estadio: 'Estadio Azteca',
      lineas: 12,
      estaciones: 195,
      partidos: 5,
      url: 'https://metroguia.mx',
      transportLabel: 'Metro CDMX',
      emoji: '🏛️',
    },
    {
      id: 'gdl',
      nombre: 'Guadalajara',
      abbr: 'GDL',
      color: '#06B6D4',
      descripcion: 'SITEUR con 3 líneas y 48 estaciones. Tren Ligero hasta el Estadio Akron.',
      estadio: 'Estadio Akron',
      lineas: 3,
      estaciones: 48,
      partidos: 4,
      url: 'https://gdl.metroguia.mx',
      transportLabel: 'SITEUR GDL',
      emoji: '🏟️',
    },
    {
      id: 'mty',
      nombre: 'Monterrey',
      abbr: 'MTY',
      color: '#EC4899',
      descripcion: 'Metrorrey con 2 líneas y 32 estaciones. Acceso al Estadio BBVA.',
      estadio: 'Estadio BBVA',
      lineas: 2,
      estaciones: 32,
      partidos: 4,
      url: 'https://mty.metroguia.mx',
      transportLabel: 'Metrorrey',
      emoji: '⛰️',
    },
  ];

  // US Cities (major transit systems)
  const ciudadesUS = [
    {
      id: 'nyc',
      nombre: 'New York City',
      abbr: 'NYC',
      color: '#EF4444',
      descripcion: 'MTA Subway con 472 estaciones. El metro más grande del mundo.',
      lineas: 24,
      estaciones: 472,
      url: 'https://nyc.metroguia.mx',
      transportLabel: 'MTA Subway',
      emoji: '🗽',
    },
    {
      id: 'los-angeles',
      nombre: 'Los Angeles',
      abbr: 'LA',
      color: '#8B5CF6',
      descripcion: 'LA Metro con 106 estaciones. Red moderna en expansión.',
      lineas: 4,
      estaciones: 106,
      url: 'https://la.metroguia.mx',
      transportLabel: 'LA Metro',
      emoji: '🌴',
    },
    {
      id: 'san-francisco',
      nombre: 'San Francisco',
      abbr: 'SF',
      color: '#3B82F6',
      descripcion: 'BART conecta San Francisco con el área de la bahía.',
      lineas: 5,
      estaciones: 50,
      url: 'https://sf.metroguia.mx',
      transportLabel: 'BART',
      emoji: '🌉',
    },
    {
      id: 'chicago',
      nombre: 'Chicago',
      abbr: 'CHI',
      color: '#DC2626',
      descripcion: 'CTA L con 306 estaciones. Icónica red elevada.',
      lineas: 8,
      estaciones: 306,
      url: 'https://chicago.metroguia.mx',
      transportLabel: 'CTA L',
      emoji: '🏢',
    },
    {
      id: 'boston',
      nombre: 'Boston',
      abbr: 'BOS',
      color: '#059669',
      descripcion: 'MBTA T con 142 estaciones. La segunda red más antigua de USA.',
      lineas: 5,
      estaciones: 142,
      url: 'https://boston.metroguia.mx',
      transportLabel: 'MBTA',
      emoji: '🍂',
    },
    {
      id: 'washington-dc',
      nombre: 'Washington DC',
      abbr: 'DC',
      color: '#DC143C',
      descripcion: 'WMATA Metro con 98 estaciones. Arquitectura subterránea única.',
      lineas: 6,
      estaciones: 98,
      url: 'https://dc.metroguia.mx',
      transportLabel: 'WMATA',
      emoji: '⚪',
    },
    {
      id: 'philadelphia',
      nombre: 'Philadelphia',
      abbr: 'PHL',
      color: '#FF6B6B',
      descripcion: 'SEPTA con 75 estaciones. Red histórica del este.',
      lineas: 4,
      estaciones: 75,
      url: 'https://philadelphia.metroguia.mx',
      transportLabel: 'SEPTA',
      emoji: '📜',
    },
    {
      id: 'atlanta',
      nombre: 'Atlanta',
      abbr: 'ATL',
      color: '#FCD34D',
      descripcion: 'MARTA con 38 estaciones. Hub de transporte del sur.',
      lineas: 3,
      estaciones: 38,
      url: 'https://atlanta.metroguia.mx',
      transportLabel: 'MARTA',
      emoji: '✈️',
    },
    {
      id: 'seattle',
      nombre: 'Seattle',
      abbr: 'SEA',
      color: '#10B981',
      descripcion: 'Light Rail moderno con 35 estaciones en rápida expansión.',
      lineas: 3,
      estaciones: 35,
      url: 'https://seattle.metroguia.mx',
      transportLabel: 'Sound Transit',
      emoji: '⛰️',
    },
    {
      id: 'miami',
      nombre: 'Miami',
      abbr: 'MIA',
      color: '#F59E0B',
      descripcion: 'Metromover urbano y Tri-Rail regional. Transporte tropical.',
      lineas: 3,
      estaciones: 22,
      url: 'https://miami.metroguia.mx',
      transportLabel: 'Metromover',
      emoji: '☀️',
    },
    {
      id: 'houston',
      nombre: 'Houston',
      abbr: 'HOU',
      color: '#9F1239',
      descripcion: 'METRO Houston con 23 estaciones. Red emergente.',
      lineas: 2,
      estaciones: 23,
      url: 'https://houston.metroguia.mx',
      transportLabel: 'METRO',
      emoji: '🤠',
    },
    {
      id: 'dallas',
      nombre: 'Dallas',
      abbr: 'DAL',
      color: '#7C3AED',
      descripcion: 'DART Rail con 67 estaciones. Red rápida de Texas.',
      lineas: 5,
      estaciones: 67,
      url: 'https://dallas.metroguia.mx',
      transportLabel: 'DART',
      emoji: '⭐',
    },
    {
      id: 'kansas-city',
      nombre: 'Kansas City',
      abbr: 'KC',
      color: '#1E40AF',
      descripcion: 'KC Streetcar y KC Metro. Transporte de las llanuras.',
      lineas: 2,
      estaciones: 18,
      url: 'https://kansascity.metroguia.mx',
      transportLabel: 'KC Metro',
      emoji: '🌾',
    },
  ];

  // Canada Cities
  const ciudadesCanada = [
    {
      id: 'toronto',
      nombre: 'Toronto',
      abbr: 'YYZ',
      color: '#DB2777',
      descripcion: 'TTC Subway con 75 estaciones. La red más grande de Canadá.',
      lineas: 4,
      estaciones: 75,
      url: 'https://toronto.metroguia.mx',
      transportLabel: 'TTC',
      emoji: '🍁',
    },
    {
      id: 'vancouver',
      nombre: 'Vancouver',
      abbr: 'YVR',
      color: '#0891B2',
      descripcion: 'SkyTrain con 79 estaciones. Tren completamente automatizado.',
      lineas: 3,
      estaciones: 79,
      url: 'https://vancouver.metroguia.mx',
      transportLabel: 'SkyTrain',
      emoji: '🏔️',
    },
  ];

  const renderCiudades = (ciudades) => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '1.5rem',
    }}>
      {ciudades.map((ciudad) => (
        <a
          key={ciudad.id}
          href={ciudad.url}
          style={{
            display: 'block',
            background: 'white',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
            textDecoration: 'none',
            color: 'inherit',
            transition: 'transform 0.2s, box-shadow 0.2s',
            border: '2px solid transparent',
          }}
        >
          {/* Card header */}
          <div style={{ background: ciudad.color, padding: '1.5rem', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <span style={{
                  fontFamily: "'Syne', sans-serif",
                  fontSize: '2rem',
                  fontWeight: 800,
                  color: 'white',
                  display: 'block',
                }}>
                  {ciudad.abbr}
                </span>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.85)',
                  fontWeight: 500,
                }}>
                  {ciudad.nombre}
                </span>
              </div>
              <span style={{ fontSize: '2.5rem' }}>{ciudad.emoji}</span>
            </div>
            {ciudad.partidos && (
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.25)' }}>
                {[
                  { value: ciudad.lineas, label: 'líneas' },
                  { value: ciudad.estaciones, label: 'estaciones' },
                  { value: ciudad.partidos, label: 'partidos' },
                ].map(stat => (
                  <div key={stat.label} style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.3rem', fontWeight: 800, color: 'white' }}>
                      {stat.value}
                    </div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
            {!ciudad.partidos && (
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.25)' }}>
                {[
                  { value: ciudad.lineas, label: 'líneas' },
                  { value: ciudad.estaciones, label: 'estaciones' },
                ].map(stat => (
                  <div key={stat.label} style={{ textAlign: 'center' }}>
                    <div style={{ fontFamily: "'Syne', sans-serif", fontSize: '1.3rem', fontWeight: 800, color: 'white' }}>
                      {stat.value}
                    </div>
                    <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.72rem', color: 'rgba(255,255,255,0.8)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Card body */}
          <div style={{ padding: '1.25rem 1.5rem' }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', color: '#444', lineHeight: 1.6, margin: '0 0 1rem 0' }}>
              {ciudad.descripcion}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{
                background: `${ciudad.color}18`,
                color: ciudad.color,
                fontFamily: "'Syne', sans-serif",
                fontSize: '0.78rem',
                fontWeight: 700,
                padding: '0.3rem 0.75rem',
                borderRadius: '999px',
                border: `1px solid ${ciudad.color}40`,
              }}>
                {ciudad.estadio ? `⚽ ${ciudad.estadio}` : `🚇 ${ciudad.transportLabel}`}
              </span>
              <span style={{ fontFamily: "'Syne', sans-serif", fontSize: '0.82rem', fontWeight: 700, color: ciudad.color }}>
                Ver guía →
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );

  return (
    <section style={{ padding: '4rem 1.5rem', background: '#F4F4F4' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{
            display: 'inline-block',
            background: '#111111',
            color: '#F5A623',
            fontSize: '0.75rem',
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '0.35rem 1rem',
            borderRadius: '999px',
            marginBottom: '1rem',
          }}>
            🌍 Guías de Transporte Público
          </span>
          <h2 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
            fontWeight: 800,
            color: '#1A1A1A',
            margin: '0 0 0.75rem 0',
          }}>
            Explora ciudades en 3 países
          </h2>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '1.05rem',
            color: '#555',
            maxWidth: '580px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Rutas, horarios y guías de transporte público en México, Estados Unidos y Canadá
          </p>
        </div>

        {/* Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          marginBottom: '2.5rem',
          flexWrap: 'wrap',
        }}>
          {[
            { id: 'mexico', label: '🇲🇽 México', count: ciudadesMexico.length },
            { id: 'usa', label: '🇺🇸 Estados Unidos', count: ciudadesUS.length },
            { id: 'canada', label: '🇨🇦 Canadá', count: ciudadesCanada.length },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: activeTab === tab.id ? '#111111' : '#FFF',
                color: activeTab === tab.id ? '#F5A623' : '#555',
                border: activeTab === tab.id ? '2px solid #111111' : '2px solid #DDD',
                padding: '0.75rem 1.25rem',
                borderRadius: '8px',
                fontFamily: "'Syne', sans-serif",
                fontSize: '0.95rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s',
                whiteSpace: 'nowrap',
              }}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Cards grid based on active tab */}
        {activeTab === 'mexico' && renderCiudades(ciudadesMexico)}
        {activeTab === 'usa' && renderCiudades(ciudadesUS)}
        {activeTab === 'canada' && renderCiudades(ciudadesCanada)}
      </div>
    </section>
  );
}
