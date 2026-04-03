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

// Static styles - moved outside component to prevent recreation on every render
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
    // === US FIFA 2026 Host Cities ===
    nyc: [
      { label: '⚽ MetLife Stadium', value: 'Times Sq-42 St' },
      { label: '✈️ JFK Airport', value: 'JFK Airport' },
      { label: '🗽 Times Square', value: 'Times Sq-42 St' },
      { label: '🌳 Central Park', value: 'Central Park' },
    ],
    'los-angeles': [
      { label: '⚽ SoFi Stadium', value: 'Inglewood' },
      { label: '✈️ LAX Airport', value: 'Aviation/LAX' },
      { label: '🎬 Hollywood', value: 'Hollywood/Highland' },
      { label: '🏛️ Union Station', value: 'Union Station' },
    ],
    houston: [
      { label: '⚽ NRG Stadium', value: 'NRG Park' },
      { label: '✈️ IAH Airport', value: 'Bush Airport' },
      { label: '🏛️ Downtown', value: 'Main Street Square' },
      { label: '🚀 Museum District', value: 'Museum District' },
    ],
    atlanta: [
      { label: '⚽ Mercedes-Benz', value: 'Vine City' },
      { label: '✈️ ATL Airport', value: 'Airport' },
      { label: '🏛️ Five Points', value: 'Five Points' },
      { label: '🌳 Midtown', value: 'Midtown' },
    ],
    philadelphia: [
      { label: '⚽ Lincoln Financial', value: 'AT&T Station' },
      { label: '🏛️ City Hall', value: 'City Hall' },
      { label: '🔔 Old City', value: '5th Street' },
      { label: '🎓 University City', value: 'University City' },
    ],
    seattle: [
      { label: '⚽ Lumen Field', value: 'Stadium' },
      { label: '✈️ Sea-Tac', value: 'SeaTac Airport' },
      { label: '🏛️ Westlake', value: 'Westlake' },
      { label: '🎡 Pike Place', value: 'University Street' },
    ],
    'san-francisco': [
      { label: '⚽ Levi\'s Stadium', value: 'Santa Clara' },
      { label: '🌉 Embarcadero', value: 'Embarcadero' },
      { label: '🏛️ Powell St', value: 'Powell St' },
      { label: '🌳 Golden Gate Park', value: 'Judah & 9th' },
    ],
    boston: [
      { label: '⚽ Gillette Stadium', value: 'South Station' },
      { label: '✈️ Logan Airport', value: 'Airport' },
      { label: '🏛️ Park Street', value: 'Park Street' },
      { label: '🎓 Harvard', value: 'Harvard' },
    ],
    miami: [
      { label: '⚽ Hard Rock Stadium', value: 'Government Center' },
      { label: '✈️ MIA Airport', value: 'Miami Airport' },
      { label: '🏖️ Brickell', value: 'Brickell' },
      { label: '🏛️ Downtown', value: 'Government Center' },
    ],
    dallas: [
      { label: '⚽ AT&T Stadium', value: 'CentrePort/DFW Airport' },
      { label: '✈️ DFW Airport', value: 'CentrePort/DFW Airport' },
      { label: '🏛️ Akard', value: 'Akard' },
      { label: '🎭 Arts District', value: 'Pearl/Arts District' },
    ],
    'kansas-city': [
      { label: '⚽ Arrowhead', value: 'Union Station' },
      { label: '🏛️ Union Station', value: 'Union Station' },
      { label: '🏙️ Power & Light', value: 'Power & Light' },
      { label: '🌳 Country Club Plaza', value: 'Country Club Plaza' },
    ],
    toronto: [
      { label: '⚽ BMO Field', value: 'Exhibition' },
      { label: '✈️ Pearson Airport', value: 'Pearson Airport' },
      { label: '🏛️ Union Station', value: 'Union' },
      { label: '🗼 CN Tower', value: 'Union' },
    ],
    vancouver: [
      { label: '⚽ BC Place', value: 'Stadium-Chinatown' },
      { label: '✈️ YVR Airport', value: 'YVR-Airport' },
      { label: '🏛️ Waterfront', value: 'Waterfront' },
      { label: '🌲 Stanley Park', value: 'Burrard' },
    ],
    // === US Non-FIFA Cities ===
    chicago: [
      { label: '🏙️ The Loop', value: 'Clark/Lake' },
      { label: '✈️ O\'Hare', value: 'O\'Hare' },
      { label: '🏛️ Millennium Park', value: 'Monroe' },
      { label: '🏟️ Wrigley Field', value: 'Addison' },
    ],
    'washington-dc': [
      { label: '🏛️ National Mall', value: 'Smithsonian' },
      { label: '✈️ Reagan Airport', value: 'Ronald Reagan Airport' },
      { label: '🏛️ Capitol', value: 'Capitol South' },
      { label: '🌸 Smithsonian', value: 'Smithsonian' },
    ],
    portland: [
      { label: '🌹 Pioneer Square', value: 'Pioneer Square' },
      { label: '✈️ PDX Airport', value: 'PDX Airport' },
      { label: '🌳 Washington Park', value: 'Washington Park' },
      { label: '🍺 Pearl District', value: 'NW 5th & Couch' },
    ],
    denver: [
      { label: '🏔️ Union Station', value: 'Union Station' },
      { label: '✈️ DIA Airport', value: 'Denver Airport' },
      { label: '🏛️ Capitol', value: 'Civic Center' },
      { label: '🏟️ Empower Field', value: 'Decatur-Federal' },
    ],
    montreal: [
      { label: '🏛️ Place des Arts', value: 'Place-des-Arts' },
      { label: '🏰 Old Montreal', value: 'Place-d\'Armes' },
      { label: '🌳 Mont Royal', value: 'Mont-Royal' },
      { label: '🎓 McGill', value: 'McGill' },
    ],
    calgary: [
      { label: '🏛️ City Hall', value: 'City Hall' },
      { label: '✈️ Airport', value: 'Airport' },
      { label: '🎪 Stampede Park', value: 'Victoria Park/Stampede' },
      { label: '🏔️ Downtown', value: 'Centre Street' },
    ],
    edmonton: [
      { label: '🏛️ Downtown', value: 'Churchill' },
      { label: '🏟️ Rogers Place', value: 'MacEwan' },
      { label: '🎓 University', value: 'University' },
      { label: '🌳 Whyte Ave', value: 'Whyte Avenue' },
    ],
    ottawa: [
      { label: '🏛️ Parliament', value: 'Parliament' },
      { label: '🎓 uOttawa', value: 'uOttawa' },
      { label: '🏛️ Rideau', value: 'Rideau' },
      { label: '🌳 Confederation', value: 'Pimisi' },
    ],
    sacramento: [
      { label: '🏛️ Capitol', value: 'Capitol' },
      { label: '🏟️ Golden 1 Center', value: '7th & Capitol' },
      { label: '🌳 Old Sacramento', value: 'Sacramento Valley Station' },
      { label: '🎓 CSUS', value: 'CSUS/65th Street' },
    ],
    'salt-lake-city': [
      { label: '🏛️ Temple Square', value: 'Temple Square' },
      { label: '✈️ Airport', value: 'Salt Lake City Airport' },
      { label: '🏟️ Vivint Arena', value: 'Vivint Arena' },
      { label: '🎓 University', value: 'University of Utah' },
    ],
    'san-diego': [
      { label: '🏛️ Downtown', value: 'America Plaza' },
      { label: '🏖️ Old Town', value: 'Old Town' },
      { label: '⚾ Petco Park', value: 'Gaslamp Quarter' },
      { label: '🌊 Convention Center', value: 'Convention Center' },
    ],
    minneapolis: [
      { label: '🏛️ Downtown', value: 'Nicollet Mall' },
      { label: '✈️ MSP Airport', value: 'Terminal 1' },
      { label: '🏟️ US Bank Stadium', value: 'US Bank Stadium' },
      { label: '🎓 University', value: 'East Bank' },
    ],
    pittsburgh: [
      { label: '🏛️ Downtown', value: 'Steel Plaza' },
      { label: '🏟️ North Shore', value: 'North Side' },
      { label: '🎓 University', value: 'University of Pittsburgh' },
      { label: '🏛️ Gateway', value: 'Gateway Center' },
    ],
    baltimore: [
      { label: '🏛️ Inner Harbor', value: 'Charles Center' },
      { label: '✈️ BWI Airport', value: 'BWI Airport' },
      { label: '⚾ Camden Yards', value: 'Camden Yards' },
      { label: '🏛️ Penn Station', value: 'Penn Station' },
    ],
    charlotte: [
      { label: '🏛️ Uptown', value: 'CTC/Arena' },
      { label: '🏟️ Bank of America', value: 'CTC/Arena' },
      { label: '✈️ Airport', value: 'Charlotte Airport' },
      { label: '🎓 UNC Charlotte', value: 'UNC Charlotte Main' },
    ],
    phoenix: [
      { label: '🏛️ Downtown', value: 'Roosevelt/Central Ave' },
      { label: '✈️ Sky Harbor', value: '44th St/Washington' },
      { label: '🏟️ Chase Field', value: 'Jefferson/1st Ave' },
      { label: '🎓 ASU', value: 'University Dr/Rural Rd' },
    ],
    'st-louis': [
      { label: '🏛️ Gateway Arch', value: 'Convention Center' },
      { label: '✈️ Airport', value: 'Lambert Airport Terminal 1' },
      { label: '⚾ Busch Stadium', value: 'Stadium' },
      { label: '🎓 UMSL', value: 'UMSL South' },
    ],
    detroit: [
      { label: '🏛️ Downtown', value: 'Campus Martius' },
      { label: '🏟️ Comerica Park', value: 'Grand Circus Park' },
      { label: '🎭 Fox Theatre', value: 'Foxtown' },
      { label: '🏛️ Renaissance Center', value: 'Renaissance Center' },
    ],
    cleveland: [
      { label: '🏛️ Downtown', value: 'Tower City' },
      { label: '✈️ Hopkins Airport', value: 'Cleveland Hopkins Airport' },
      { label: '🏟️ Progressive Field', value: 'East 9th' },
      { label: '🎭 Playhouse Square', value: 'Playhouse Square' },
    ],
    'las-vegas': [
      { label: '🎰 Las Vegas Strip', value: 'Las Vegas Convention Center' },
      { label: '🏟️ MSG Sphere', value: 'Westgate Las Vegas' },
      { label: '🎭 Encore', value: 'Encore' },
      { label: '🏛️ Convention', value: 'Las Vegas Convention Center' },
    ],
    'san-jose': [
      { label: '🏛️ Downtown', value: 'Convention Center' },
      { label: '🏟️ SAP Center', value: 'Diridon' },
      { label: '🎓 SJSU', value: 'San Jose State' },
      { label: '✈️ Airport', value: 'Metro/Airport' },
    ],
    'new-orleans': [
      { label: '🎺 French Quarter', value: 'Canal Street' },
      { label: '🏟️ Superdome', value: 'Union Passenger Terminal' },
      { label: '🌳 Garden District', value: 'St. Charles/Jackson' },
      { label: '🎭 Arts District', value: 'Lee Circle' },
    ],
    buffalo: [
      { label: '🏛️ Downtown', value: 'Fountain Plaza' },
      { label: '🏟️ KeyBank Center', value: 'Canalside' },
      { label: '🎓 UB South', value: 'University' },
      { label: '🏛️ City Hall', value: 'Church Street' },
    ],
    honolulu: [
      { label: '🏖️ Ala Moana', value: 'Ala Moana Center' },
      { label: '✈️ Airport', value: 'Daniel K. Inouye Airport' },
      { label: '🌺 Pearl Harbor', value: 'Pearl Highlands' },
      { label: '🏛️ Downtown', value: 'Civic Center' },
    ],
    norfolk: [
      { label: '🏛️ Downtown', value: 'MacArthur Square' },
      { label: '⚓ Naval Station', value: 'NSU' },
      { label: '🏖️ Waterside', value: 'Monticello' },
      { label: '🎓 ODU', value: 'Ballentine Blvd' },
    ],
    // === New Wave Cities ===
    jacksonville: [
      { label: '🏛️ Convention Center', value: 'Convention Center' },
      { label: '🏙️ Central Station', value: 'Central Station' },
    ],
    austin: [
      { label: '🏛️ Downtown', value: 'Downtown Austin' },
      { label: '🎓 Highland', value: 'Highland' },
    ],
    orlando: [
      { label: '🏰 Downtown', value: 'Church Street' },
      { label: '🏖️ Sand Lake Road', value: 'Sand Lake Road' },
    ],
    'san-juan': [
      { label: '🏛️ Sagrado Corazón', value: 'Sagrado Corazón' },
      { label: '🏙️ Hato Rey', value: 'Hato Rey Centro' },
    ],
    milwaukee: [
      { label: '🏛️ Intermodal', value: 'Intermodal Station' },
      { label: '🍺 3rd St Market', value: '3rd Street Market Hall' },
    ],
    tucson: [
      { label: '🌵 Downtown', value: 'Congress/Granada' },
      { label: '🎓 University', value: 'University of Arizona' },
    ],
    tampa: [
      { label: '🏛️ Ybor City', value: 'Ybor City' },
      { label: '🏙️ Centro Ybor', value: 'Centro Ybor' },
    ],
    'oklahoma-city': [
      { label: '🏛️ Convention Center', value: 'Convention Center' },
      { label: '🏙️ Bricktown', value: 'Bricktown East' },
    ],
    'el-paso': [
      { label: '🏛️ Downtown', value: 'Downtown Transfer Center' },
      { label: '🎓 UTEP', value: 'UTEP' },
    ],
    cincinnati: [
      { label: '🏛️ Government Square', value: 'Government Square' },
      { label: '🛒 Findlay Market', value: 'Findlay Market' },
    ],
    nashville: [
      { label: '🎵 Downtown', value: 'Riverfront' },
      { label: '🏟️ Nissan Stadium', value: 'Donelson' },
    ],
    newark: [
      { label: '🏛️ Penn Station', value: 'Penn Station' },
      { label: '🏙️ Broad Street', value: 'Broad Street' },
    ],
    'kitchener-waterloo': [
      { label: '🏛️ Central Station', value: 'Central Station' },
      { label: '🎓 University', value: 'University of Waterloo' },
    ],
    mississauga: [
      { label: '🏛️ City Centre', value: 'City Centre' },
      { label: '🏥 Cooksville', value: 'Cooksville' },
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

  return (
    <form onSubmit={handleSubmit} style={containerStyle}>
      <style>{`
        #searchbar-origen-input:focus,
        #searchbar-destino-input:focus {
          border-color: var(--primary);
          box-shadow: 0 0 0 3px var(--primary-glow);
        }

        .searchbar-dropdown-item:hover {
          background-color: var(--surface);
        }

        .searchbar-quick-action:hover {
          border-color: var(--primary);
          color: var(--primary);
          background-color: var(--primary-glow);
        }
      `}</style>

      <div style={inputRowStyle}>
        {/* Origen */}
        <div style={inputGroupStyle} ref={origenRef}>
          <label style={labelStyle}>
            <span style={{ ...dotStyle, color: '#16A34A' }}>●</span>
            {t.origin}
          </label>
          <input
            id="searchbar-origen-input"
            type="text"
            placeholder={t.originPlaceholder}
            value={origen}
            onChange={handleOrigenChange}
            onFocus={() => {
              if (origen.length > 0) setShowOrigenDropdown(true)
            }}
            style={inputStyle}
          />
          {showOrigenDropdown && origenSuggestions.length > 0 && (
            <div style={dropdownStyle}>
              {origenSuggestions.map((estacion, idx) => (
                <div
                  key={idx}
                  className="searchbar-dropdown-item"
                  onClick={() => selectOrigen(estacion)}
                  style={dropdownItemStyle}
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
            id="searchbar-destino-input"
            type="text"
            placeholder={t.destinationPlaceholder}
            value={destino}
            onChange={handleDestinoChange}
            onFocus={() => {
              if (destino.length > 0) setShowDestinoDropdown(true)
            }}
            style={inputStyle}
          />
          {showDestinoDropdown && destinoSuggestions.length > 0 && (
            <div style={dropdownStyle}>
              {destinoSuggestions.map((estacion, idx) => (
                <div
                  key={idx}
                  className="searchbar-dropdown-item"
                  onClick={() => selectDestino(estacion)}
                  style={dropdownItemStyle}
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
            className="searchbar-quick-action"
            onClick={() => handleQuickAction(action.value)}
            style={pillStyle}
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
