/**
 * GET /api/mundial/wc.js — Proxy de openfootball/worldcup.json (dominio público).
 *
 * Devuelve el dataset completo del Mundial 2026 (104 partidos con scores, goleadores
 * y slots del bracket). Cache 2 min en el Edge → el sitio estático lo consume en vivo
 * sin tocar límites de rate. Fallback: el cliente usa el JSON horneado si esto falla.
 */
module.exports = async (req, res) => {
  try {
    const r = await fetch(
      'https://raw.githubusercontent.com/openfootball/worldcup.json/master/2026/worldcup.json',
      { headers: { 'User-Agent': 'metroguia.mx' } }
    );
    if (!r.ok) {
      res.status(502).json({ error: 'upstream error', status: r.status });
      return;
    }
    const data = await r.json();
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Cache-Control', 's-maxage=120, stale-while-revalidate=300');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({ generated_at: new Date().toISOString(), ...data });
  } catch (e) {
    res.status(500).json({ error: 'failed', detail: String(e.message || e) });
  }
};
