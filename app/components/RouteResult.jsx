'use client'

export default function RouteResult({ ruta, isAlternative = false }) {
  if (!ruta) {
    return null
  }

  const containerStyle = {
    padding: '18px',
    backgroundColor: isAlternative ? 'var(--surface-hover)' : 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    opacity: isAlternative ? 0.85 : 1,
    transition: 'opacity 0.2s',
  }

  const headerRowStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '16px',
    gap: '12px',
  }

  const summaryStyle = {
    display: 'flex',
    gap: '20px',
    flex: 1,
    flexWrap: 'wrap',
  }

  const summaryItemStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  }

  const summaryLabelStyle = {
    fontSize: '11px',
    color: 'var(--text-muted)',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  }

  const summaryValueStyle = {
    fontSize: '20px',
    fontWeight: '700',
    color: 'var(--text)',
  }

  const badgeStyle = {
    padding: '6px 12px',
    backgroundColor: 'var(--primary)',
    color: '#FFFFFF',
    fontSize: '11px',
    fontWeight: '600',
    borderRadius: '4px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  }

  const alternativeBadgeStyle = {
    ...badgeStyle,
    backgroundColor: 'var(--text-muted)',
  }

  const routeStripContainerStyle = {
    marginBottom: '20px',
    paddingBottom: '20px',
    borderBottom: '1px solid var(--border)',
  }

  const stripLabelStyle = {
    fontSize: '11px',
    color: 'var(--text-muted)',
    fontWeight: '600',
    marginBottom: '12px',
    textTransform: 'uppercase',
    display: 'block',
  }

  const stripStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    overflowX: 'auto',
    paddingBottom: '8px',
  }

  const lineBadgeStyle = {
    padding: '6px 12px',
    borderRadius: '4px',
    fontSize: '12px',
    fontWeight: '600',
    color: '#FFFFFF',
    whiteSpace: 'nowrap',
    flexShrink: 0,
  }

  const dotConnectorStyle = {
    width: '4px',
    height: '4px',
    borderRadius: '50%',
    backgroundColor: 'var(--border-light)',
    flexShrink: 0,
  }

  const stepsContainerStyle = {
    marginBottom: '16px',
  }

  const stepLabelStyle = {
    fontSize: '11px',
    color: 'var(--text-muted)',
    fontWeight: '600',
    marginBottom: '12px',
    textTransform: 'uppercase',
    display: 'block',
  }

  const stepStyle = {
    display: 'flex',
    gap: '12px',
    marginBottom: '12px',
    paddingBottom: '12px',
    borderBottom: '1px solid var(--border)',
  }

  const stepStyle_last = {
    ...stepStyle,
    borderBottom: 'none',
    marginBottom: 0,
    paddingBottom: 0,
  }

  const stepIconStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: 'var(--surface-active)',
    flexShrink: 0,
    fontSize: '14px',
    color: 'var(--text)',
  }

  const stepContentStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  }

  const stationNameStyle = {
    fontSize: '14px',
    fontWeight: '600',
    color: 'var(--text)',
  }

  const actionTextStyle = {
    fontSize: '12px',
    color: 'var(--text-muted)',
  }

  const lineBadgeSmallStyle = {
    display: 'inline-block',
    padding: '3px 8px',
    borderRadius: '3px',
    fontSize: '10px',
    fontWeight: '600',
    color: '#FFFFFF',
    marginRight: '6px',
  }

  const alertStyle = {
    padding: '12px 14px',
    backgroundColor: 'rgba(220, 38, 38, 0.06)',
    border: '1px solid rgba(220, 38, 38, 0.2)',
    borderRadius: '6px',
    color: 'var(--danger)',
    fontSize: '13px',
    marginTop: '16px',
    display: 'flex',
    gap: '8px',
  }

  const alertIconStyle = {
    fontSize: '14px',
    flexShrink: 0,
    marginTop: '1px',
  }

  // Helper function to get line color
  const getLineColor = (linea) => {
    const lineColorMap = {
      '1': '#E41C38',
      '2': '#00A64E',
      '3': '#FFB91B',
      '4': '#003DA5',
      '5': '#FFD700',
      '6': '#E74C3C',
      '7': '#F39C12',
      '8': '#27AE60',
      '9': '#8E44AD',
      '10': '#2980B9',
      '11': '#D35400',
      '12': '#C0392B',
      'A': '#00A64E',
      'B': '#003DA5',
      'TL': '#E74C3C',
    }
    return lineColorMap[linea] || '#5A5A6A'
  }

  // Helper function to get action icon
  const getActionIcon = (action) => {
    const iconMap = {
      subir: '↑',
      bajar: '↓',
      transbordo: '→',
      caminata: '🚶',
    }
    return iconMap[action] || '●'
  }

  // Format time display
  const formatTime = (minutes) => {
    if (minutes < 60) {
      return `${minutes} min`
    }
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`
  }

  // Build line badges for route strip
  const uniqueLineas = ruta.lineas ? [...new Set(ruta.lineas)] : []

  return (
    <div style={containerStyle}>
      {/* Header with Summary and Badge */}
      <div style={headerRowStyle}>
        <div style={summaryStyle}>
          <div style={summaryItemStyle}>
            <span style={summaryLabelStyle}>Tiempo Total</span>
            <span style={summaryValueStyle}>
              {formatTime(ruta.duracion || 45)}
            </span>
          </div>
          <div style={summaryItemStyle}>
            <span style={summaryLabelStyle}>Costo</span>
            <span style={summaryValueStyle}>
              ${ruta.costo || 15} MXN
            </span>
          </div>
          <div style={summaryItemStyle}>
            <span style={summaryLabelStyle}>Transbordos</span>
            <span style={summaryValueStyle}>
              {ruta.transbordos || 0}
            </span>
          </div>
        </div>
        <div
          style={isAlternative ? alternativeBadgeStyle : badgeStyle}
        >
          {isAlternative ? 'ALTERNATIVA' : 'RECOMENDADA'}
        </div>
      </div>

      {/* Route Strip */}
      {uniqueLineas.length > 0 && (
        <div style={routeStripContainerStyle}>
          <span style={stripLabelStyle}>Líneas</span>
          <div style={stripStyle}>
            {uniqueLineas.map((linea, idx) => (
              <div key={idx}>
                {idx > 0 && <div style={dotConnectorStyle}></div>}
                <div
                  style={{
                    ...lineBadgeStyle,
                    backgroundColor: getLineColor(linea),
                  }}
                >
                  Línea {linea}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Steps */}
      {ruta.pasos && ruta.pasos.length > 0 && (
        <div style={stepsContainerStyle}>
          <span style={stepLabelStyle}>Pasos</span>
          {ruta.pasos.map((paso, idx) => {
            const isLast = idx === ruta.pasos.length - 1
            return (
              <div key={idx} style={isLast ? stepStyle_last : stepStyle}>
                <div style={stepIconStyle}>
                  {getActionIcon(paso.accion)}
                </div>
                <div style={stepContentStyle}>
                  <div style={stationNameStyle}>{paso.estacion}</div>
                  {paso.linea && (
                    <div style={actionTextStyle}>
                      <span
                        style={{
                          ...lineBadgeSmallStyle,
                          backgroundColor: getLineColor(paso.linea),
                        }}
                      >
                        {paso.linea}
                      </span>
                      {paso.detalles && (
                        <span>{paso.detalles}</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Alerts */}
      {ruta.alertas && ruta.alertas.length > 0 && (
        <div>
          {ruta.alertas.map((alerta, idx) => (
            <div key={idx} style={alertStyle}>
              <span style={alertIconStyle}>⚠️</span>
              <span>{alerta}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}