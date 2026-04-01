export default function NearbyStations({ currentSlug, lineasDetalle, grafo }) {
  // Get current station data from grafo
  const currentStationData = grafo[currentSlug]
  if (!currentStationData) {
    return null // Station not in grafo, skip component
  }

  // Get current station's line (assume first line is primary)
  const primaryLine = currentStationData.lineas[0]
  const lineDetail = lineasDetalle[primaryLine]
  if (!lineDetail) {
    return null
  }

  const lineColor = lineDetail.color
  const lineName = lineDetail.colorNombre

  // Separate adjacent stations by type
  const sameLineAdj = currentStationData.adyacentes.filter(
    (adj) => adj.tipo === 'linea'
  )
  const transferAdj = currentStationData.adyacentes.filter(
    (adj) => adj.tipo === 'transbordo'
  )

  // Get all stations on the same line for "También te puede interesar"
  const allStationsOnLine = lineDetail.estaciones.map((s) => s.slug)
  const immediateNeighbors = sameLineAdj.map((adj) => adj.slug)
  
  // Filter stations that are NOT immediate neighbors, randomize and take 3-4
  const otherStations = allStationsOnLine.filter(
    (s) => s !== currentSlug && !immediateNeighbors.includes(s)
  )
  const suggestedStations = otherStations
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)

  return (
    <section
      style={{
        padding: '3rem 1.25rem',
        backgroundColor: '#14141F',
        borderTop: '1px solid #2a2a3e',
        borderBottom: '1px solid #2a2a3e',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* SAME LINE STATIONS */}
        {sameLineAdj.length > 0 && (
          <div style={{ marginBottom: '3rem' }}>
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '1.5rem',
              }}
            >
              Estaciones vecinas en tu línea
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
              }}
            >
              {sameLineAdj.map((adj) => {
                const adjStation = lineDetail.estaciones.find(
                  (s) => s.slug === adj.slug
                )
                return (
                  <a
                    key={adj.slug}
                    href={`/estacion/${adj.slug}/`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem 1.25rem',
                      backgroundColor: '#1a1a2e',
                      borderLeft: `4px solid ${lineColor}`,
                      borderRadius: '0.5rem',
                      textDecoration: 'none',
                      transition: 'background-color 0.2s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#252538'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#1a1a2e'
                    }}
                  >
                    <div
                      style={{
                        width: '3rem',
                        height: '3rem',
                        borderRadius: '50%',
                        backgroundColor: lineColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        fontWeight: 700,
                        fontSize: '0.875rem',
                        flexShrink: 0,
                      }}
                    >
                      L{primaryLine}
                    </div>
                    <div>
                      <div style={{ color: '#FFFFFF', fontWeight: 600 }}>
                        {adjStation?.nombre || adj.slug}
                      </div>
                      <div style={{ color: '#A0A0B8', fontSize: '0.875rem' }}>
                        {adj.tiempo} min
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        )}

        {/* TRANSFER STATIONS */}
        {transferAdj.length > 0 && (
          <div style={{ marginBottom: '3rem' }}>
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '1.5rem',
              }}
            >
              Conexiones y transbordos
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
              }}
            >
              {transferAdj.map((adj) => {
                // Find the line of this transfer station
                const transferStationData = grafo[adj.slug]
                const transferLines = transferStationData?.lineas || []
                const transferLineColors = transferLines
                  .map((line) => lineasDetalle[line]?.color)
                  .filter(Boolean)

                return (
                  <a
                    key={adj.slug}
                    href={`/estacion/${adj.slug}/`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem 1.25rem',
                      backgroundColor: '#1a1a2e',
                      borderLeft: `4px solid #F5A623`,
                      borderRadius: '0.5rem',
                      textDecoration: 'none',
                      transition: 'background-color 0.2s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#252538'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#1a1a2e'
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        gap: '0.25rem',
                        flexShrink: 0,
                      }}
                    >
                      {transferLineColors.slice(0, 2).map((color, idx) => (
                        <div
                          key={idx}
                          style={{
                            width: '2rem',
                            height: '2rem',
                            borderRadius: '50%',
                            backgroundColor: color,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#FFFFFF',
                            fontWeight: 700,
                            fontSize: '0.75rem',
                          }}
                        >
                          L{transferLines[idx]}
                        </div>
                      ))}
                    </div>
                    <div>
                      <div style={{ color: '#FFFFFF', fontWeight: 600 }}>
                        {transferStationData?.nombre || adj.slug}
                      </div>
                      <div style={{ color: '#A0A0B8', fontSize: '0.875rem' }}>
                        Transbordo • {adj.tiempo} min
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        )}

        {/* ALSO INTERESTING */}
        {suggestedStations.length > 0 && (
          <div>
            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#FFFFFF',
                marginBottom: '1.5rem',
              }}
            >
              También te puede interesar
            </h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
              }}
            >
              {suggestedStations.map((slug) => {
                const station = lineDetail.estaciones.find((s) => s.slug === slug)
                return (
                  <a
                    key={slug}
                    href={`/estacion/${slug}/`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem 1.25rem',
                      backgroundColor: '#1a1a2e',
                      borderLeft: `4px solid ${lineColor}`,
                      borderRadius: '0.5rem',
                      textDecoration: 'none',
                      transition: 'background-color 0.2s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#252538'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#1a1a2e'
                    }}
                  >
                    <div
                      style={{
                        width: '3rem',
                        height: '3rem',
                        borderRadius: '50%',
                        backgroundColor: lineColor,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FFFFFF',
                        fontWeight: 700,
                        fontSize: '0.875rem',
                        flexShrink: 0,
                      }}
                    >
                      L{primaryLine}
                    </div>
                    <div>
                      <div style={{ color: '#FFFFFF', fontWeight: 600 }}>
                        {station?.nombre || slug}
                      </div>
                      <div style={{ color: '#A0A0B8', fontSize: '0.875rem' }}>
                        En tu línea
                      </div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
