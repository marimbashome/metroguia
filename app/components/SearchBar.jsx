'use client'
import { useState, useRef, useEffect } from 'react'
import { searchEstaciones } from '@/lib/search'
import { findRoute, generateRouteSlug } from '@/lib/pathfinder'

export default function SearchBar({
  ciudad = 'cdmx',
  defaultDestino = '',
  onResult = null,
}) {
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

  const quickActions = [
    { label: '⚽ Estadio Azteca', value: 'Estadio Azteca' },
    { label: '✈️ Aeropuerto', value: 'Aeropuerto Internacional' },
    { label: '🏛️ Centro Histórico', value: 'Centro Histórico' },
    { label: '🌸 Coyoacán', value: 'Coyoacán' },
  ]

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
      window.location.href = `/ruta/${slug}`
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
    backgroundColor: '#14141F',
    borderRadius: '8px',
    border: '1px solid #2A2A3E',
  }

  const inputRowStyle = {
    display: 'flex',
    gap: '12px',
    alignItems: 'flex-start',
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
    color: '#A0A0B0',
    textTransform: 'uppercase',
  }

  const dotStyle = {
    fontSize: '16px',
    lineHeight: '1',
  }

  const inputStyle = {
    width: '100%',
    padding: '12px 14px',
    backgroundColor: '#1A1A27',
    border: '1px solid #2A2A3E',
    borderRadius: '6px',
    color: '#FFFFFF',
    fontSize: '14px',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s',
    outline: 'none',
  }

  const inputStyleFocus = {
    ...inputStyle,
    borderColor: '#FF8C00',
  }

  const dropdownStyle = {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    marginTop: '4px',
    backgroundColor: '#1A1A27',
    border: '1px solid #2A2A3E',
    borderRadius: '6px',
    zIndex: 1000,
    maxHeight: '250px',
    overflowY: 'auto',
  }

  const dropdownItemStyle = {
    padding: '12px 14px',
    color: '#E0E0E8',
    cursor: 'pointer',
    borderBottom: '1px solid #2A2A3E',
    fontSize: '14px',
    transition: 'background-color 0.2s',
  }

  const dropdownItemHoverStyle = {
    ...dropdownItemStyle,
    backgroundColor: '#252530',
  }

  const swapButtonStyle = {
    marginTop: '24px',
    padding: '10px 14px',
    backgroundColor: 'transparent',
    border: '1px solid #2A2A3E',
    borderRadius: '6px',
    color: '#FF8C00',
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
    backgroundColor: '#1A1A27',
    border: '1px solid #2A2A3E',
    borderRadius: '20px',
    color: '#E0E0E8',
    cursor: 'pointer',
    fontSize: '12px',
    transition: 'all 0.2s',
    whiteSpace: 'nowrap',
  }

  const pillHoverStyle = {
    ...pillStyle,
    borderColor: '#FF8C00',
    color: '#FF8C00',
  }

  const submitButtonStyle = {
    padding: '12px 24px',
    backgroundColor: '#FF8C00',
    border: 'none',
    borderRadius: '6px',
    color: '#FFFFFF',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'opacity 0.2s',
  }

  const submitButtonDisabledStyle = {
    ...submitButtonStyle,
    opacity: 0.5,
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
            <span style={{ ...dotStyle, color: '#00FF00' }}>●</span>
            Origen
          </label>
          <input
            type="text"
            placeholder="Estación de inicio..."
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
            <span style={{ ...dotStyle, color: '#FF8C00' }}>●</span>
            Destino
          </label>
          <input
            type="text"
            placeholder="Estación de destino..."
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
          title="Intercambiar origen y destino"
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
        Buscar Ruta
      </button>
    </form>
  )
}