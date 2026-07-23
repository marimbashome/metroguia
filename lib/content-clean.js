/**
 * lib/content-clean.js — Filtro de contenido Mundial/FIFA para copy heredado.
 *
 * `data/estaciones.js`, `data/lineas-detalle.js` y `data/cdmx/*.js` vienen del
 * proyecto anterior (enfoque turismo + Mundial FIFA 2026) y tienen frases
 * sueltas insertadas tipo "Para turistas del Mundial 2026, esta estación..."
 * mezcladas dentro de párrafos que por lo demás son datos reales y útiles
 * (alcaldía, POIs, tips, historia). REBUILD_SPEC.md exige un sitio SIN
 * contenido de Mundial/FIFA — pero tirar el párrafo completo sería inventar
 * menos densidad de la que el dato real permite.
 *
 * Estrategia: quitar SOLO la oración/frase que menciona el torneo, nunca
 * añadir texto nuevo. Es puramente sustractivo — no fabrica nada.
 *
 * Cuidado deliberado: "clase mundial", "fama mundial", "Segunda Guerra
 * Mundial", "categoría mundial" son español idiomático (= "world-class"/
 * "world war") y NO deben filtrarse. El regex exige que "mundial" aparezca
 * como referencia al torneo (junto a "FIFA", "2026", "World Cup", o como
 * sustantivo con artículo: "del/al/el/para Mundial").
 */

const TOURNAMENT_RE =
  /\bfifa\b|\bworld\s*cup\b|\b(del|al|el|para)\s+mundial\b|\bmundial\s*2026\b|\bmundial\s+fifa\b/i

/** @returns {boolean} true si el texto hace referencia al torneo (no a "world-class"). */
export function isTournamentTainted(text) {
  return !!text && TOURNAMENT_RE.test(text)
}

/**
 * Quita paréntesis tipo "(Mundial 2026)" / "(sede del Mundial FIFA 2026)"
 * de una frase corta, sin tocar el resto.
 */
function stripTaintedParens(text) {
  return text.replace(/\s*\([^)]*\b(mundial|fifa|world\s*cup)\b[^)]*\)/gi, '').trim()
}

/**
 * Limpia un párrafo largo: separa por oraciones y descarta solo las que
 * mencionan el torneo. Si TODAS las oraciones quedan marcadas, regresa ''.
 */
export function cleanParagraph(text) {
  if (!text) return ''
  const sentences = text.split(/(?<=[.!?])\s+/)
  const kept = sentences.filter((s) => !isTournamentTainted(s))
  return kept.join(' ').trim()
}

/**
 * Limpia una frase corta (tip, actividad de itinerario, label de
 * transferencia): primero quita paréntesis contaminados; si lo que queda
 * sigue mencionando el torneo, descarta la frase completa (regresa null).
 */
export function cleanPhrase(text) {
  if (!text) return null
  const stripped = stripTaintedParens(text)
  if (isTournamentTainted(stripped)) return null
  return stripped
}

/** Filtra un array de frases cortas (tips, etc.), quitando las contaminadas. */
export function cleanList(arr) {
  if (!Array.isArray(arr)) return []
  return arr.map(cleanPhrase).filter(Boolean)
}
