/**
 * GET /api/mundial/calendar.ics
 *
 * Sirve el feed ICS completo del Mundial 2026 (104 partidos), enriquecido
 * con scores en vivo desde football-data.org si están disponibles.
 *
 * Cache Vercel Edge: 5 minutos.
 */
const fs = require('fs');
const path = require('path');

const FOOTBALL_DATA_API = 'https://api.football-data.org/v4/competitions/WC/matches?season=2026';

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

async function fetchLiveResults() {
  const apiKey = process.env.FOOTBALL_DATA_API_KEY;
  if (!apiKey) return {};
  try {
    const res = await fetch(FOOTBALL_DATA_API, { headers: { 'X-Auth-Token': apiKey } });
    if (!res.ok) return {};
    const data = await res.json();
    const out = {};
    for (const m of data.matches || []) {
      out[m.id] = {
        status: m.status,
        homeScore: m.score?.fullTime?.home,
        awayScore: m.score?.fullTime?.away,
      };
    }
    return out;
  } catch (e) {
    return {};
  }
}

function loadFixtures() {
  // Read the static fixtures bundled with deployment.
  const filePath = path.join(process.cwd(), 'data', 'mundial-fixtures.json');
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

function buildICS(matches, calname, description, liveResults) {
  const now = utc_to_ics(new Date().toISOString());
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//MetroGuia//Mundial 2026//ES',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    `X-WR-CALNAME:${ics_escape(calname)}`,
    `X-WR-CALDESC:${ics_escape(description)}`,
    'X-WR-TIMEZONE:America/Mexico_City',
  ];

  for (const f of matches) {
    const live = liveResults[f.id] || {};
    const start = utc_to_ics(f.date_utc);
    const end = utc_to_ics(new Date(new Date(f.date_utc).getTime() + 7200000).toISOString());

    let summary;
    const status = live.status || f.status;
    const home = live.homeScore ?? f.home_score;
    const away = live.awayScore ?? f.away_score;
    if (status === 'FINISHED' && home != null) {
      summary = `🏆 ${f.home_team} ${home}-${away} ${f.away_team} (FT)`;
    } else if (status === 'IN_PLAY' || status === 'PAUSED') {
      summary = `🔴 ${f.home_team} ${home ?? 0}-${away ?? 0} ${f.away_team} (LIVE)`;
    } else {
      summary = `${f.home_flag} ${f.home_team} vs ${f.away_team} ${f.away_flag}`;
    }

    const descParts = [
      f.phase_label,
      f.group ? `Grupo ${f.group}` : '',
      `Estadio: ${f.stadium}, ${f.city}`,
      `https://metroguia.mx/mundial-2026/partido/${f.slug}/`,
    ];
    if (f.is_azteca) {
      descParts.splice(2, 0, '🚇 Metro: L2 → Tasqueña → Tren Ligero → Estadio Azteca (~45 min, $10 MXN)');
    }
    const description_line = descParts.filter(Boolean).join(' | ');

    lines.push(
      'BEGIN:VEVENT',
      `UID:wc2026-${f.id}@metroguia.mx`,
      `DTSTAMP:${now}`,
      `DTSTART:${start}`,
      `DTEND:${end}`,
      `SUMMARY:${ics_escape(summary)}`,
      `DESCRIPTION:${ics_escape(description_line)}`,
      `LOCATION:${ics_escape(`${f.stadium}, ${f.city}, ${f.country}`)}`,
      `URL:https://metroguia.mx/mundial-2026/partido/${f.slug}/`,
      'STATUS:CONFIRMED',
      'TRANSP:OPAQUE',
      'END:VEVENT',
    );
  }
  lines.push('END:VCALENDAR');
  return lines.join('\r\n') + '\r\n';
}

module.exports = async (req, res) => {
  try {
    const data = loadFixtures();
    const liveResults = await fetchLiveResults();
    const ics = buildICS(
      data.matches,
      'Mundial 2026 · MetroGuia',
      'Calendario completo del Mundial FIFA 2026. 104 partidos. metroguia.mx/mundial-2026',
      liveResults
    );
    res.setHeader('Content-Type', 'text/calendar; charset=utf-8');
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    res.setHeader('Content-Disposition', 'inline; filename="mundial-2026.ics"');
    res.status(200).send(ics);
  } catch (e) {
    res.status(500).json({ error: 'failed to build calendar', detail: String(e.message || e) });
  }
};
