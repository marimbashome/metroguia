'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'

const regionLabels = {
  norte: 'Norte',
  sureste: 'Sureste',
  centro: 'Centro',
  occidente: 'Occidente',
  bajio: 'Bajío',
  sur: 'Sur',
  golfo: 'Golfo'
}

const regionColors = {
  norte: '#FF6B6B',
  sureste: '#4ECDC4',
  centro: '#F5A623',
  occidente: '#A8E6CF',
  bajio: '#FFD93D',
  sur: '#6BCB77',
  golfo: '#4D96FF'
}

const costColors = {
  free: '#6BCB77',
  low: '#4D96FF',
  medium: '#F5A623',
  high: '#FFD700'
}

function getCostBadgeColor(costo) {
  if (!costo || !costo.nacional) return costColors.medium
  const nacional = parseInt(costo.nacional)
  if (nacional === 0) return costColors.free
  if (nacional <= 65) return costColors.low
  if (nacional <= 85) return costColors.medium
  return costColors.high
}

export default function ZonasArqueologicasContent({ zonas, unescoCount, statesCount }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedEstado, setSelectedEstado] = useState('')
  const [selectedRegion, setSelectedRegion] = useState('')
  const [selectedCivilizacion, setSelectedCivilizacion] = useState('')
  const [showUnesco, setShowUnesco] = useState(false)
  const [showImperdibles, setShowImperdibles] = useState(false)

  const estados = useMemo(() => {
    const unique = new Set(zonas.map(z => z.estado))
    return Array.from(unique).sort()
  }, [zonas])

  const civilizaciones = useMemo(() => {
    const unique = new Set(zonas.map(z => z.civilizacion))
    return Array.from(unique).sort()
  }, [zonas])

  const regions = Object.keys(regionLabels)

  const filteredZonas = useMemo(() => {
    return zonas.filter(zona => {
      const matchesSearch = zona.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           zona.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesEstado = !selectedEstado || zona.estado === selectedEstado
      const matchesRegion = !selectedRegion || zona.region === selectedRegion
      const matchesCivilizacion = !selectedCivilizacion || zona.civilizacion === selectedCivilizacion
      const matchesUnesco = !showUnesco || zona.unesco
      const matchesImperdibles = !showImperdibles || zona.imperdible

      return matchesSearch && matchesEstado && matchesRegion && matchesCivilizacion && matchesUnesco && matchesImperdibles
    })
  }, [zonas, searchTerm, selectedEstado, selectedRegion, selectedCivilizacion, showUnesco, showImperdibles])

  const formatCost = (costo) => {
    if (!costo || !costo.nacional) return 'Consultar'
    const nacional = parseInt(costo.nacional)
    if (nacional === 0) return 'Gratis'
    return `$${nacional}`
  }

  return (
    <div style={{ backgroundColor: 'var(--bg)', color: 'var(--text)', minHeight: '100vh', paddingBottom: '3rem' }}>
      {/* Hero Section */}
      <section style={{
        backgroundColor: 'var(--surface)',
        borderBottom: '1px solid var(--border)',
        padding: '3rem 1rem',
        marginBottom: '2rem'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
            <h1 style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              margin: 0
            }}>
              Zonas Arqueológicas
            </h1>
            <div style={{
              backgroundColor: 'var(--primary)',
              color: '#000',
              borderRadius: 'var(--radius-full)',
              padding: '0.5rem 1rem',
              fontSize: '0.875rem',
              fontWeight: 600
            }}>
              {zonas.length} zonas
            </div>
          </div>

          {/* Stats Row */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '1rem',
            fontSize: '0.875rem'
          }}>
            <div style={{ backgroundColor: 'var(--bg)', padding: '1rem', borderRadius: 'var(--radius)' }}>
              <div style={{ color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Zonas</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>{zonas.length}</div>
            </div>
            <div style={{ backgroundColor: 'var(--bg)', padding: '1rem', borderRadius: 'var(--radius)' }}>
              <div style={{ color: 'var(--text-muted)', marginBottom: '0.25rem' }}>UNESCO</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: costColors.high }}>{unescoCount}</div>
            </div>
            <div style={{ backgroundColor: 'var(--bg)', padding: '1rem', borderRadius: 'var(--radius)' }}>
              <div style={{ color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Estados</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary-glow)' }}>{statesCount}</div>
            </div>
            <div style={{ backgroundColor: 'var(--bg)', padding: '1rem', borderRadius: 'var(--radius)' }}>
              <div style={{ color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Domingos</div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: costColors.free }}>Gratis</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div style={{
        position: 'sticky',
        top: 0,
        backgroundColor: 'var(--bg)',
        borderBottom: '1px solid var(--border)',
        padding: '1rem',
        zIndex: 10,
        marginBottom: '1.5rem'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input
            type="text"
            placeholder="Buscar zona arqueológica..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              backgroundColor: 'var(--surface)',
              border: '1px solid var(--border)',
              borderRadius: 'var(--radius)',
              color: 'var(--text)',
              fontSize: '0.875rem',
              fontFamily: 'inherit'
            }}
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 600 }}>Estado</label>
              <select
                value={selectedEstado}
                onChange={(e) => setSelectedEstado(e.target.value)}
                style={{ width: '100%', padding: '0.5rem 0.75rem', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', color: 'var(--text)', fontSize: '0.875rem', fontFamily: 'inherit' }}
              >
                <option value="">Todos los estados</option>
                {estados.map(estado => <option key={estado} value={estado}>{estado}</option>)}
              </select>
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 600 }}>Civilización</label>
              <select
                value={selectedCivilizacion}
                onChange={(e) => setSelectedCivilizacion(e.target.value)}
                style={{ width: '100%', padding: '0.5rem 0.75rem', backgroundColor: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', color: 'var(--text)', fontSize: '0.875rem', fontFamily: 'inherit' }}
              >
                <option value="">Todas las civilizaciones</option>
                {civilizaciones.map(civ => <option key={civ} value={civ}>{civ}</option>)}
              </select>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 600 }}>Región</div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button
                onClick={() => setSelectedRegion('')}
                style={{ padding: '0.5rem 0.75rem', backgroundColor: selectedRegion === '' ? 'var(--primary)' : 'var(--surface)', color: selectedRegion === '' ? '#000' : 'var(--text)', border: selectedRegion === '' ? 'none' : '1px solid var(--border)', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s' }}
              >Todas</button>
              {regions.map(region => (
                <button
                  key={region}
                  onClick={() => setSelectedRegion(region)}
                  style={{ padding: '0.5rem 0.75rem', backgroundColor: selectedRegion === region ? regionColors[region] : 'var(--surface)', color: selectedRegion === region ? '#000' : 'var(--text)', border: selectedRegion === region ? 'none' : '1px solid var(--border)', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', transition: 'all 0.2s' }}
                >{regionLabels[region]}</button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.875rem' }}>
              <input type="checkbox" checked={showUnesco} onChange={(e) => setShowUnesco(e.target.checked)} style={{ cursor: 'pointer' }} />
              <span>UNESCO ({unescoCount})</span>
            </label>
            <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.875rem' }}>
              <input type="checkbox" checked={showImperdibles} onChange={(e) => setShowImperdibles(e.target.checked)} style={{ cursor: 'pointer' }} />
              <span>Imperdibles</span>
            </label>
          </div>
        </div>
      </div>

      {/* Results */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          Mostrando <strong>{filteredZonas.length}</strong> de {zonas.length} zonas arqueológicas
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          {filteredZonas.map(zona => (
            <Link key={zona.slug} href={`/turismo/zonas-arqueologicas/${zona.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="card" style={{ padding: '1rem', backgroundColor: 'var(--surface)', borderRadius: 'var(--radius)', border: '1px solid var(--border)', cursor: 'pointer', transition: 'all 0.2s', height: '100%', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div>
                  <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1rem', fontWeight: 700, color: 'var(--text)' }}>{zona.nombre}</h3>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    <span style={{ backgroundColor: regionColors[zona.region], color: '#000', borderRadius: 'var(--radius-full)', padding: '0.3rem 0.75rem', fontSize: '0.75rem', fontWeight: 600 }}>{regionLabels[zona.region]}</span>
                    <span style={{ backgroundColor: 'var(--bg)', color: 'var(--text-dim)', borderRadius: 'var(--radius-full)', padding: '0.3rem 0.75rem', fontSize: '0.75rem', fontWeight: 600 }}>{zona.estado}</span>
                  </div>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{zona.municipio}, {zona.estado}</div>
                <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>
                  <div style={{ color: 'var(--primary)', marginBottom: '0.25rem' }}>{zona.civilizacion}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{zona.periodo}</div>
                </div>
                <p style={{ margin: '0.5rem 0 0.75rem 0', fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.4', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {zona.descripcion.substring(0, 120)}...
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: 'auto' }}>
                  <span style={{ backgroundColor: getCostBadgeColor(zona.costo), color: '#000', borderRadius: 'var(--radius-full)', padding: '0.3rem 0.75rem', fontSize: '0.75rem', fontWeight: 600 }}>{formatCost(zona.costo)}</span>
                  {zona.unesco && <span style={{ backgroundColor: costColors.high, color: '#000', borderRadius: 'var(--radius-full)', padding: '0.3rem 0.75rem', fontSize: '0.75rem', fontWeight: 600 }}>UNESCO</span>}
                  {zona.imperdible && <span style={{ backgroundColor: 'var(--primary)', color: '#000', borderRadius: 'var(--radius-full)', padding: '0.3rem 0.75rem', fontSize: '0.75rem', fontWeight: 600 }}>Imperdible</span>}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredZonas.length === 0 && (
          <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
            <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>No se encontraron zonas arqueológicas con esos criterios</p>
            <p style={{ fontSize: '0.875rem' }}>Intenta cambiar los filtros o la búsqueda</p>
          </div>
        )}
      </div>
    </div>
  )
}
