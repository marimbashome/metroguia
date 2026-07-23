import { formatLineLabel, getLineColor } from '@/lib/lineLabels'

/**
 * LineaBadge — pill de color con el nombre de una línea/sistema
 * (ej. "Línea 2", "Metrobús L5", "Cablebús L1").
 *
 * @param {string}  linea  - id crudo de la línea (viene del grafo, ej. "2", "MB-5", "CB-1")
 * @param {string}  [size] - 'sm' | 'md' (default 'md')
 */
export default function LineaBadge({ linea, size = 'md' }) {
  const label = formatLineLabel(linea)
  if (!label) return null

  const color = getLineColor(linea)
  const small = size === 'sm'

  return (
    <span
      className="badge"
      style={{
        background: color,
        fontSize: small ? '0.65rem' : '0.72rem',
        padding: small ? '0.1rem 0.5rem' : '0.15rem 0.6rem',
      }}
    >
      {label}
    </span>
  )
}
