/**
 * GET /api/mundial/standings.js?group=A
 *
 * Devuelve la tabla de posiciones del grupo solicitado (A-L) o todos.
 * Cache 10 minutos.
 */
module.exports = async (req, res) => {
  try {
    const apiKey = process.env.FOOTBALL_DATA_API_KEY;
    if (!apiKey) {
      res.status(500).json({ error: 'FOOTBALL_DATA_API_KEY not configured' });
      return;
    }
    const group = (req.query.group || '').toUpperCase();

    const r = await fetch('https://api.football-data.org/v4/competitions/WC/standings?season=2026', {
      headers: { 'X-Auth-Token': apiKey },
    });

    let d = {};
    let standings = [];
    let upstream_status = r.status;
    if (r.ok) {
      d = await r.json();
      standings = d.standings || [];
      if (group) {
        standings = standings.filter((s) => (s.group || '').toUpperCase().includes(group));
      }
    }
    // Pre-tournament (no matches played yet) the API returns 404 / "resource does not exist".
    // We respond 200 with an empty standings array + a hint, so frontend can render gracefully.
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Cache-Control', 's-maxage=600, stale-while-revalidate=1200');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({
      generated_at: new Date().toISOString(),
      group: group || 'all',
      tournament_started: standings.length > 0,
      upstream_status,
      hint: standings.length === 0 ? 'Standings will populate once the tournament begins (Jun 11 2026).' : undefined,
      standings,
    });
  } catch (e) {
    res.status(500).json({ error: 'failed', detail: String(e.message || e) });
  }
};
