/**
 * GET /api/mundial/results.json — Proxy de resultados live de football-data.org.
 *
 * Devuelve array simplificado de matches con status, scores y minute. Cache 5 min.
 * Nunca expone la API key al frontend.
 */
module.exports = async (req, res) => {
  try {
    const apiKey = process.env.FOOTBALL_DATA_API_KEY;
    if (!apiKey) {
      res.status(500).json({ error: 'FOOTBALL_DATA_API_KEY not configured' });
      return;
    }
    const r = await fetch('https://api.football-data.org/v4/competitions/WC/matches?season=2026', {
      headers: { 'X-Auth-Token': apiKey },
    });
    if (!r.ok) {
      res.status(502).json({ error: 'upstream error', status: r.status });
      return;
    }
    const d = await r.json();
    const out = (d.matches || []).map((m) => ({
      id: m.id,
      utcDate: m.utcDate,
      status: m.status,
      stage: m.stage,
      group: m.group,
      matchday: m.matchday,
      homeTeam: m.homeTeam?.name,
      awayTeam: m.awayTeam?.name,
      homeScore: m.score?.fullTime?.home,
      awayScore: m.score?.fullTime?.away,
      minute: m.minute || null,
      lastUpdated: m.lastUpdated,
    }));
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).json({
      generated_at: new Date().toISOString(),
      count: out.length,
      results: out,
    });
  } catch (e) {
    res.status(500).json({ error: 'failed', detail: String(e.message || e) });
  }
};
