// ============================================================================
// LINE LABELS — human-readable names for raw line identifiers from the graph
// ============================================================================
// The graph data uses compact internal IDs (e.g. "1", "A", "CB-1", "MB-L5").
// UI surfaces need clean labels like "Línea 1", "Cablebús L1", "Metrobús L5".
// Internal/noise values like "transfer" or "walk" should render as blank or
// as a neutral "Transbordo" label so they don't leak to users.
// ============================================================================

/**
 * Normalise a raw linea identifier to a user-facing label.
 * Returns "" for internal non-displayable values so callers can conditionally
 * render badges only when a real label exists.
 */
export function formatLineLabel(linea) {
  if (!linea) return ''
  const raw = String(linea).trim()

  // Noise / internal edge types — do not display
  if (raw === 'transfer' || raw === 'walk' || raw === 'caminata') return ''

  // Metro CDMX Líneas 1-12 (numeric)
  if (/^(1[0-2]|[1-9])$/.test(raw)) return `Línea ${raw}`

  // Metro CDMX Líneas A, B
  if (raw === 'A' || raw === 'B') return `Línea ${raw}`

  // Tren Ligero CDMX
  if (raw === 'TL') return 'Tren Ligero'

  // Cablebús CDMX (CB-1, CB-2, CB-3)
  const cbMatch = raw.match(/^CB-?(\d+)$/i)
  if (cbMatch) return `Cablebús L${cbMatch[1]}`

  // Metrobús CDMX (MB-1 .. MB-7, MB-L1 .. MB-L7)
  const mbMatch = raw.match(/^MB-?L?(\d+)$/i)
  if (mbMatch) return `Metrobús L${mbMatch[1]}`

  // Trolebús CDMX (TB-11 = L11 elevado)
  const tbMatch = raw.match(/^TB-?L?(\d+)$/i)
  if (tbMatch) return `Trolebús L${tbMatch[1]}`

  // Mexicable (MCR = Rosario/Tlalnepantla, MCV = Indios Verdes/Ecatepec)
  if (raw === 'MCR') return 'Mexicable L1'
  if (raw === 'MCV') return 'Mexicable L2'

  // Tren Suburbano
  if (raw === 'TS') return 'Tren Suburbano'
  if (raw === 'TS-AIFA') return 'Tren Suburbano AIFA'

  // GDL — Mi Tren / Mi Macro
  const gdlMatch = raw.match(/^L(\d+)$/)
  if (gdlMatch) return `Línea ${gdlMatch[1]}`
  if (raw === 'MC' || raw === 'MP') return 'Mi Macro'

  // Monterrey Metrorrey
  const mrMatch = raw.match(/^MR-?(\d+)$/i)
  if (mrMatch) return `Línea ${mrMatch[1]}`
  if (raw === 'ecovia') return 'Ecovía'

  // Data bug fallback: a raw internal slug leaked through (e.g. "metro-1")
  // Render it as a generic "Transbordo" so it does not look like a typo.
  if (/^metro-/i.test(raw)) return 'Transbordo'

  // Unknown — fall back to the raw value (better than swallowing it silently)
  return raw
}

/**
 * Return the brand colour for a raw linea identifier. Used for badge
 * backgrounds. Unknown identifiers fall through to a neutral grey.
 */
export function getLineColor(linea) {
  if (!linea) return '#5A5A6A'
  const raw = String(linea).trim()

  const MAP = {
    // Metro CDMX
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
    // Tren Ligero
    'TL': '#E74C3C',
    // Cablebús
    'CB-1': '#E91E63',
    'CB-2': '#9C27B0',
    'CB-3': '#673AB7',
    // Mexicable
    'MCR': '#FF5722',
    'MCV': '#795548',
    // Tren Suburbano
    'TS': '#1976D2',
    'TS-AIFA': '#0D47A1',
    // Trolebús elevado
    'TB-11': '#FF9800',
    // Metrobús (single colour for all lines — Metrobús brand red)
    'MB-1': '#D32F2F',
    'MB-L1': '#D32F2F',
    'MB-2': '#D32F2F',
    'MB-L2': '#D32F2F',
    'MB-3': '#D32F2F',
    'MB-L3': '#D32F2F',
    'MB-4': '#D32F2F',
    'MB-L4': '#D32F2F',
    'MB-5': '#D32F2F',
    'MB-L5': '#D32F2F',
    'MB-6': '#D32F2F',
    'MB-L6': '#D32F2F',
    'MB-7': '#D32F2F',
    'MB-L7': '#D32F2F',
  }
  return MAP[raw] || '#5A5A6A'
}

/**
 * Return a sensible label for `lineas_usadas` arrays — skips noise entries.
 */
export function formatLineasUsadas(lineas) {
  if (!Array.isArray(lineas)) return ''
  const labels = lineas
    .map(formatLineLabel)
    .filter(l => l && l !== 'Transbordo')
  // Deduplicate while preserving order
  const seen = new Set()
  const unique = []
  for (const l of labels) {
    if (!seen.has(l)) {
      seen.add(l)
      unique.push(l)
    }
  }
  return unique.join(', ')
}
