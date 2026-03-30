'use client'
import { useState, useRef, useEffect } from 'react'
import { searchEstaciones } from '@/lib/search'
import { findRoute, generateRouteSlug } from '@/lib/pathfinder'

import esT from '@/translations/es.json'
import enT from '@/translations/en.json'
import ptT from '@/translations/pt.json'
import frT from '@/translations/fr.json'
import deT from '@/translations/de.json'
import jaT from '@/translations/ja.json'
import koT from '@/translations/ko.json'

const allT = { es: esT, en: enT, pt: ptT, fr: frT, de: deT, ja: jaT, ko: koT }

export default function SearchBar({
  ciudad = 'cdmx',
  defaultDestino = '',
  onResult = null,
  lang = 'es',
}) {
  const t = allT[lang]?.searchBar || allT.es.searchBar
  const [origen, setOrigen] = useState('')
  const [destino, setDestino] = useState(defaultDestino)
  const [origenSlug, setOrigenSlug] = useState('')
  const [destinoSlug, setDestinoSlug] = useState('')
  const [origenSuggestions, setOrigenSuggestions] = useState([])
  const [destinoSuggestions, setDestinoSuggestions] = useState([])
  const [showOrigenDropdown, setShowOrigenDropdown] = useState(false)
  const [showDestinoDropdown, setShowDestinoDropdown] = useState(false)
  const origenRef = useRef(null)
  const destinoRef = useRef(null)

  const quickActionsByCity = {
    cdmx: [
      { label: `⚽ ${t.quickAzteca}`, value: 'Estadio Azteca' },
      { label: `✈️ ${t.quickAirport}`, value: 'Aeropuerto Internacional' },
      { label: `🏛️ ${t.quickDowntown}`, value: 'Centro Histórico' },
      { label: `🌸 ${t.quickCoyoacan}`, value: 'Coyoacán' },
    ],
    gdl: [
      { label: '⚽ Estadio Akron', value: 'Estadio Chivas' },
      { label: '⛪ Centro Histórico', value: 'Juárez' },
      { label: '🏛️ Plaza Universidad', value: 'Plaza Universidad' },
      { label: '🌳 Arcos de Zapopan', value: 'Arcos de Zapopan' },
    ],
    mty: [
      { label: '⚽ Estadio BBVA', value: 'Exposición' },
      { label: '🏭 Parque Fundidora', value: 'Parque Fundidora' },
      { label: '🏛️ Central', value: 'Central' },
      { label: '🎭 Cuauhtémoc', value: 'Cuauhtémoc' },
    ],
  }
  const quickActions = quickActionsByCity[ciudad] || quickActionsByCity.cdmx

  // Handle origen input with autocomplete
  const handleOrigenChange = (e) => {
    const value = e.target.value
    setOrigen(value)
    if (value.length > 0) {
      const results = searchEstaciones(value, { ciudad })
      setOrigenSuggestions(results)
      setShowOrigenDropdown(true)
    } else {
      setOrigenSuggestions([])
      setShowOrigenDropdown(false)
    }
  }

  // Handle destino input with autocomplete
  const handleDestinoChange = (e) => {
    const value = e.target.value
    setDestino(value)
    if (value.length > 0) {
      const results = searchEstaciones(value, { ciudad })
      setDestinoSuggestions(results)
      setShowDestinoDropdown(true)
    } else {
      setDestinoSuggestions([])
      setShowDestinoDropdown(false)
    }
  }

  // Select from dropdown
  const selectOrigen = (estacion) => {
    setOrigen(estacion.nombre || estacion)
    setOrigenSlug(estacion.slug || '')
    setShowOrigenDropdown(false)
    setOrigenSuggestions([])
  }

  const selectDestino = (estacion) => {
    setDestino(estacion.nombre || estacion)
    setDestinoSlug(estacion.slug || '')
    setShowDestinoDropdown(false)
    setDestinoSuggestions([])
  }

  // Quick action handler
  const handleQuickAction = (value) => {
    setDestino(value)
    setShowDestinoDropdown(false)
  }

  // Swap origen and destino
  const handleSwap = () => {
    const tempName = origen
    const tempSlug = origenSlug
    setOrigen(destino)
    setOrigenSlug(destinoSlug)
    setDestino(tempName)
    setDestinoSlug(tempSlug)
  }

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!origen.trim() || !destino.trim()) {
      return
    }

    // Use slugs for pathfinding, fall back to text input
    const origenKey = origenSlug || origen.toLowerCase().replace(/\s+/g, '-')
    const destinoKey = destinoSlug || destino.toLowerCase().replace(/\s+/g, '-')

    const route = findRoute(origenKey, destinoKey)
    if (onResult) {
      onResult(route)
    } else {
      const slug = generateRouteSlug(origenKey, destinoKey)
      const cityPrefix = ciudad === 'cdmx' ? '' : `/${ciudad}`
      window.location.href = `${cityPrefix}/ruta/${slug}`
    }
  }

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (origenRef.current && !origenRef.current.contains(e.target)) {
        setShowOrigenDropdown(false)
      }
      if (destinoRef.current && !destinoRef.current.contains(e.target)) {
        setShowDestinoDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '20px',
    backgroundColor: 'var(--surface)',
    borderRadius: '12px',
    border: '1px solid var(--border)',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
  }

  const inputRowStyle = {
    display: 'flex',
    gap: '12px',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
  }

  const inputGroupStyle = {
    flex: 1,
    minWidth: '200px',
    position: 'relative',
  }

  const labelStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '6px',
    fontSize: '12px',
    fontWeight: '600',
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
  }

  const dotStyle = {
    fontSize: '16px',
    lineHeight: '1',
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    backgroundColor: 'var(--bg)',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    color: 'var(--text)',
    fontSize: '14px',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s, box-shadow 0.2s',
    outline: 'none',
  }

  const inputStyleFocus = {
    ...inputStyle,
    borderColor: 'var(--primary)',
    boxShadow: '0 0 0 3px var(--primary-glow)',
  }

  const dropdownStyle = {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    marginTop: '4px',
    backgroundColor: 'var(--bg)',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    zIndex: 1000,
    maxHeight: '200px',
    overflowY: 'auto',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
  }

  const dropdownItemStyle = {
    padding: '12px 14px',
    color: 'var(--text)',
    cursor: 'pointer',
    borderBottom: '1px solid var(--border)',
    fontSize: '14px',
    transition: 'background-color 0.15s',
    minHeight: '44px',
    display: 'flex',
    alignItems: 'center',
  }

  const dropdownItemHoverStyle = {
    ...dropdownItemStyle,
    backgroundColor: 'var(--surface)',
    minHeight: '44px',
    display: 'flex',
    alignItems: 'center',
  }

  const swapButtonStyle = {
    padding: '10px 14px',
    minHeight: '44px',
    minWidth: '44px',
    backgroundColor: 'transparent',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    color: 'var(--primary)',
    cursor: 'pointer',
    fontSize: '18px',
    transition: 'border-color 0.2s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

  const quickActionsStyle = {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap',
  }

  const pillStyle = {
    padding: '8px 14px',
    backgroundColor: 'var(--bg)',
    border: '1px solid var(--border)',
    borderRadius: '20px',
    color: 'var(--text)',
    cursor: 'pointer',
    fontSize: '12px',
    transition: 'all 0.2s',
    whiteSpace: 'nowrap',
  }

  const pillHoverStyle = {
    ...pillStyle,
    borderColor: 'var(--primary)',
    color: 'var(--primary)',
    backgroundColor: 'var(--primary-glow)',
  }

  const submitButtonStyle = {
    padding: '12px 24px',
    backgroundColor: 'var(--primary)',
    border: 'none',
    borderRadius: '8px',
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s',
  }

  const submitButtonDisabledStyle = {
    ...submitButtonStyle,
    opacity: 0.4,
    cursor: 'not-allowed',
  }

  const [origenFocused, setOrigenFocused] = useState(false)
  const [destinoFocused, setDestinoFocused] = useState(false)
  const [hoveredPill, setHoveredPill] = useState(null)
  const [hoveredItem, setHoveredItem] = useState(null)

  return (
    <form onSubmit={handleSubmit} style={containerStyle}>
      <div style={inputRowStyle}>
        {/* Origen */}
        <div style={inputGroupStyle} ref={origenRef}>
          <label style={labelStyle}>
            <span style={{ ...dotStyle, color: '#16A34A' }}>●</span>
            {t.origin}
          </label>
          <input
            type="text"
            placeholder={t.originPlaceholder}
            value={origen}
            onChange={handleOrigenChange}
            onFocus={() => {
              setOrigenFocused(true)
              if (origen.length > 0) setShowOrigenDropdown(true)
            }}
            onBlur={() => setOrigenFocused(false)}
            style={origenFocused ? inputStyleFocus : inputStyle}
          />
          {showOrigenDropdown && origenSuggestions.length > 0 && (
            <div style={dropdownStyle}>
              {origenSuggestions.map((estacion, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredItem(`origen-${idx}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => selectOrigen(estacion)}
                  style={
                    hoveredItem === `origen-${idx}`
                      ? dropdownItemHoverStyle
                      : dropdownItemStyle
                  }
                >
                  {estacion.nombre || estacion}{estacion.ciudad && estacion.ciudad !== 'cdmx' ? ` (${estacion.ciudad.toUpperCase()})` : ''}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Destino */}
        <div style={inputGroupStyle} ref={destinoRef}>
          <label style={labelStyle}>
            <span style={{ ...dotStyle, color: 'var(--primary)' }}>●</span>
            {t.destination}
          </label>
          <input
            type="text"
            placeholder={t.destinationPlaceholder}
            value={destino}
            onChange={handleDestinoChange}
            onFocus={() => {
              setDestinoFocused(true)
              if (destino.length > 0) setShowDestinoDropdown(true)
            }}
            onBlur={() => setDestinoFocused(false)}
            style={destinoFocused ? inputStyleFocus : inputStyle}
          />
          {showDestinoDropdown && destinoSuggestions.length > 0 && (
            <div style={dropdownStyle}>
              {destinoSuggestions.map((estacion, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredItem(`destino-${idx}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => selectDestino(estacion)}
                  style={
                    hoveredItem === `destino-${idx}`
                      ? dropdownItemHoverStyle
                      : dropdownItemStyle
                  }
                >
                  {estacion.nombre || estacion}{estacion.ciudad && estacion.ciudad !== 'cdmx' ? ` (${estacion.ciudad.toUpperCase()})` : ''}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Swap Button */}
        <button
          type="button"
          onClick={handleSwap}
          style={swapButtonStyle}
          title={t.swapTitle}
        >
          ↕
        </button>
      </div>

      {/* Quick Actions */}
      <div style={quickActionsStyle}>
        {quickActions.map((action, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleQuickAction(action.value)}
            onMouseEnter={() => setHoveredPill(idx)}
            onMouseLeave={() => setHoveredPill(null)}
            style={hoveredPill === idx ? pillHoverStyle : pillStyle}
          >
            {action.label}
          </button>
        ))}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={!origen.trim() || !destino.trim()}
        style={
          !origen.trim() || !destino.trim()
            ? submitButtonDisabledStyle
            : submitButtonStyle
        }
      >
        {t.searchRoute}
      </button>
    </form>
  )
}