/**
 * GET /api/mundial/mexico.ics — Solo partidos de la Selección Mexicana.
 */
const fs = require('fs');
const path = require('path');

function ics_escape(text) {
  if (!text) return '';
  return String(text)
    .replace(/\\/g, '\\\\')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;')
    .replace(/\n/g, '\\n');
}

function utc_to_ics(iso) {
  const dt = new Date(iso);
  const pad = (n) => String(n).padStart(2, '0');
  return (
    dt.getUTCFullYear() +
    pad(dt.getUTCMonth() + 1) +
    pad(dt.getUTCDate()) +
    'T' +
    pad(dt.getUTCHours()) +
    pad(dt.getUTCMinutes()) +
    pad(dt.getUTCSeconds()) +
    'Z'
  );
}

async function fetchLive() {
  const apiKey = process.env.FOOTBALL_DATA_API_KEY;
  if (!apiKey) return {};
  try {
    const r = await fetch('https://api.football-data.org/v4/competitions/WC/matches?season=2026', {
      headers: { 'X-Auth-Token': apiKey },
    });
    if (!r.ok) return {};
    const d = await r.json();
    const out = {};
    for (const m of d.matches || []) {
      out[m.id] = { status: m.status, hs: m.score?.fullTime?.home, as: m.score?.fullTime?.away };
    }
    return out;
  } catch { return {}; }
}

module.exports = async (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data', 'mundial-fixtures.json'), 'utf-8'));
    const matches = data.matches.filter((m) => m.is_mexico_team);
    const live = await fetchLive();
    const now = utc_to_ics(new Date().toISOString());
    const lines = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//MetroGuia//Mundial 2026 Mexico//ES',
      'CALSCALE:GREGORIAN',
      'METHOD:PUBLISH',
      'X-WR-CALNAME:Selección Mexicana · Mundial 2026',
      'X-WR-CALDESC:Partidos del Tri en el Mundial FIFA 2026. metroguia.mx/mundial-2026/mexico',
      'X-WR-TIMEZONE:America/Mexico_City',
    ];
    for (const f of matches) {
      const lr = live[f.id] || {};
      const start = utc_to_ics(f.date_utc);
      const end = utc_to_ics(new Date(new Date(f.date_utc).getTime() + 7200000).toISOString());
      const home = lr.hs ?? f.home_score;
      const away = lr.as ?? f.away_score;
      const status = lr.status || f.status;
      let summary;
      if (status === 'FINISHED' && home != null) {
        summary = `🏆 ${f.home_team} ${home}-${away} ${f.away_team} (FT)`;
      } else if (status === 'IN_PLAY' || status === 'PAUSED') {
        summary = `🔴 ${f.home_team} ${home ?? 0}-${away ?? 0} ${f.away_team} (LIVE)`;
      } else {
        summary = `🇲🇽 ${f.home_team} vs ${f.away_team}`;
      }
      const desc = [
        f.phase_label,
        f.group ? `Grupo ${f.group}` : '',
        f.is_azteca ? '🚇 Metro: L2 → Tasqueña → Tren Ligero (~45 min)' : '',
        `Estadio: ${f.stadium}, ${f.city}`,
        `https://metroguia.mx/mundial-2026/partido/${f.slug}/`,
      ].filter(Boolean).join(' | ');
      lines.push(
        'BEGIN:VEVENT',
        `UID:wc2026-mex-${f.id}@metroguia.mx`,
        `DTSTAMP:${now}`,
        `DTSTART:${start}`,
        `DTEND:${end}`,
        `SUMMARY:${ics_escape(summary)}`,
        `DESCRIPTION:${ics_escape(desc)}`,
        `LOCATION:${ics_escape(`${f.stadium}, ${f.city}, ${f.country}`)}`,
        `URL:https://metroguia.mx/mundial-2026/partido/${f.slug}/`,
        'STATUS:CONFIRMED',
        'TRANSP:OPAQUE',
        'END:VEVENT',
      );
    }
    lines.push('END:VCALENDAR');
    res.setHeader('Content-Type', 'text/calendar; charset=utf-8');
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    res.setHeader('Content-Disposition', 'inline; filename="mexico-mundial-2026.ics"');
    res.status(200).send(lines.join('\r\n') + '\r\n');
  } catch (e) {
    res.status(500).json({ error: 'failed', detail: String(e.message || e) });
  }
};
