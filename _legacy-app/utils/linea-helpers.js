/**
 * Converts linea (string or array) to array format
 * Handles both "MAX Blue" strings and ["blue", "red"] arrays
 */
export const normalizeLinea = (linea) => {
  if (!linea) return [];
  if (Array.isArray(linea)) return linea;
  if (typeof linea === 'string') {
    // Handle formats like "MAX Blue" -> "blue" or "A-Loop" -> "a-loop"
    return [linea.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')];
  }
  return [];
};

/**
 * Get the first line color from a linea (string or array)
 */
export const getPrimaryLineColor = (linea, colorMap = {}) => {
  const lineaArr = normalizeLinea(linea);
  if (lineaArr.length === 0) return '#0054A4';
  return colorMap[lineaArr[0]] || '#0054A4';
};

/**
 * Slice linea to get first N items (handles string and array)
 */
export const sliceLinea = (linea, limit = 3) => {
  const lineaArr = normalizeLinea(linea);
  return lineaArr.slice(0, limit);
};

/**
 * Join linea with separator (handles string and array)
 */
export const joinLinea = (linea, separator = ', ') => {
  const lineaArr = normalizeLinea(linea);
  return lineaArr.join(separator);
};
