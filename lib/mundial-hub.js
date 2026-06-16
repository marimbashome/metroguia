/**
 * lib/mundial-hub.js — Lógica pura del Centro del Mundial 2026 (sin React).
 *
 * Fuente de datos: openfootball/worldcup.json (dominio público) — 104 partidos con
 * scores, goleadores (goals1/goals2) y slots del bracket (team1:"1A", team2:"3A/B/C/D/F").
 * Resultados/tablas/bracket/goleadores se DERIVAN de ahí (nunca se hardcodean).
 */

export const FLAGS = {
  Algeria: '🇩🇿', Argentina: '🇦🇷', Australia: '🇦🇺', Austria: '🇦🇹', Belgium: '🇧🇪',
  'Bosnia and Herzegovina': '🇧🇦', 'Bosnia-Herzegovina': '🇧🇦', Brazil: '🇧🇷', Canada: '🇨🇦',
  'Cape Verde': '🇨🇻', 'Cape Verde Islands': '🇨🇻', Colombia: '🇨🇴', Croatia: '🇭🇷', 'Curaçao': '🇨🇼',
  'Czech Republic': '🇨🇿', Czechia: '🇨🇿', 'DR Congo': '🇨🇩', 'Congo DR': '🇨🇩', Ecuador: '🇪🇨',
  Egypt: '🇪🇬', England: '🏴\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}', France: '🇫🇷',
  Germany: '🇩🇪', Ghana: '🇬🇭', Haiti: '🇭🇹', Iran: '🇮🇷', Iraq: '🇮🇶', 'Ivory Coast': '🇨🇮',
  Japan: '🇯🇵', Jordan: '🇯🇴', Mexico: '🇲🇽', Morocco: '🇲🇦', Netherlands: '🇳🇱', 'New Zealand': '🇳🇿',
  Norway: '🇳🇴', Panama: '🇵🇦', Paraguay: '🇵🇾', Portugal: '🇵🇹', Qatar: '🇶🇦', 'Saudi Arabia': '🇸🇦',
  Scotland: '🏴\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}', Senegal: '🇸🇳',
  'South Africa': '🇿🇦', 'South Korea': '🇰🇷', Spain: '🇪🇸', Sweden: '🇸🇪', Switzerland: '🇨🇭',
  Tunisia: '🇹🇳', Turkey: '🇹🇷', 'United States': '🇺🇸', USA: '🇺🇸', Uruguay: '🇺🇾', Uzbekistan: '🇺🇿',
};

export function flagFor(name) {
  if (!name) return '🏳️';
  return FLAGS[name] || '🏳️';
}

const norm = (s) =>
  (s || '')
    .toString()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '');

const ALIAS = {
  czechrepublic: 'czechia', drcongo: 'congodr', capeverde: 'capeverdeislands',
  bosniaandherzegovina: 'bosniaherzegovina', korearepublic: 'southkorea',
  usa: 'unitedstates', us: 'unitedstates',
};
export const teamKey = (name) => {
  const n = norm(name);
  return ALIAS[n] || n;
};
/** Clave estable jugador = equipo|nombre-normalizado, para cruzar squad ↔ stats. */
export const playerKey = (team, name) => `${teamKey(team)}|${norm(name)}`;

/** Mapa playerKey → goles, derivado de los goleadores (openfootball, dominio público). */
export function goalsByPlayer(scorers) {
  const m = {};
  (scorers || []).forEach((s) => { m[playerKey(s.team, s.name)] = s.goals; });
  return m;
}

const SLOT_RE = /^[123][A-L](\/[A-L])*$/;
export const isSlot = (t) => typeof t === 'string' && SLOT_RE.test(t.trim());

export function isGroupMatch(m) {
  return typeof m.round === 'string' && /matchday/i.test(m.round);
}
export function groupLetter(m) {
  const g = m.group || '';
  const mm = g.match(/([A-L])\s*$/i);
  return mm ? mm[1].toUpperCase() : null;
}
export function hasFinalScore(m) {
  return m && m.score && Array.isArray(m.score.ft) &&
    typeof m.score.ft[0] === 'number' && typeof m.score.ft[1] === 'number';
}

/** Parte el dataset openfootball en partidos de grupo y de eliminatoria. */
export function parseWC(wc) {
  const matches = (wc && wc.matches) || [];
  const group = matches.filter(isGroupMatch);
  const knockout = matches.filter((m) => !isGroupMatch(m));
  return { matches, group, knockout };
}

const PHASE_ORDER = ['Round of 32', 'Round of 16', 'Quarter-final', 'Quarter-finals', 'Semi-final', 'Semi-finals', 'Match for third place', 'Match for Third Place', 'Third place', 'Third-place', 'Final'];
export function knockoutRounds(knockout) {
  const byRound = {};
  knockout.forEach((m) => {
    const r = m.round || 'Knockout';
    (byRound[r] = byRound[r] || []).push(m);
  });
  return Object.keys(byRound)
    .sort((a, b) => {
      const ia = PHASE_ORDER.findIndex((p) => a.toLowerCase().startsWith(p.toLowerCase()));
      const ib = PHASE_ORDER.findIndex((p) => b.toLowerCase().startsWith(p.toLowerCase()));
      return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
    })
    .map((r) => ({ round: r, matches: byRound[r].sort((x, y) => (x.num || 0) - (y.num || 0)) }));
}

/** Tabla de posiciones por grupo, derivada de los partidos de grupo terminados. */
export function computeStandings(groupMatches) {
  const groups = {};
  const ensure = (g, team) => {
    groups[g] = groups[g] || {};
    groups[g][team] = groups[g][team] || { team, P: 0, W: 0, D: 0, L: 0, GF: 0, GA: 0, GD: 0, Pts: 0 };
    return groups[g][team];
  };
  groupMatches.forEach((m) => {
    const g = groupLetter(m);
    if (!g || isSlot(m.team1) || isSlot(m.team2)) return;
    const home = ensure(g, m.team1);
    const away = ensure(g, m.team2);
    // registra equipos aunque no haya jugado (para mostrar la tabla completa)
    if (!hasFinalScore(m)) return;
    const [h, a] = m.score.ft;
    home.P++; away.P++;
    home.GF += h; home.GA += a; away.GF += a; away.GA += h;
    if (h > a) { home.W++; home.Pts += 3; away.L++; }
    else if (h < a) { away.W++; away.Pts += 3; home.L++; }
    else { home.D++; away.D++; home.Pts++; away.Pts++; }
  });
  const out = {};
  Object.keys(groups).sort().forEach((g) => {
    out[g] = Object.values(groups[g])
      .map((t) => ({ ...t, GD: t.GF - t.GA }))
      .sort((x, y) => y.Pts - x.Pts || y.GD - x.GD || y.GF - x.GF || x.team.localeCompare(y.team));
  });
  return out;
}

/** Ranking de los 12 terceros; los 8 mejores avanzan al Round of 32. */
export function rankThirds(standings) {
  const thirds = Object.keys(standings)
    .map((g) => (standings[g][2] ? { group: g, ...standings[g][2] } : null))
    .filter(Boolean)
    .filter((t) => t.P > 0)
    .sort((x, y) => y.Pts - x.Pts || y.GD - x.GD || y.GF - x.GF);
  return thirds.map((t, i) => ({ ...t, rank: i + 1, qualified: i < 8 }));
}

/** Top goleadores agregando goals1/goals2 de todos los partidos. */
export function topScorers(matches) {
  const tally = {};
  const add = (arr, team) => {
    (arr || []).forEach((g) => {
      const raw = (g.name || '').replace(/\s*\((pen\.?|o\.?g\.?|p)\)\s*/gi, '').trim();
      if (!raw) return;
      const key = raw + '|' + team;
      tally[key] = tally[key] || { name: raw, team, goals: 0 };
      tally[key].goals++;
    });
  };
  matches.forEach((m) => {
    if (isSlot(m.team1) || isSlot(m.team2)) return;
    add(m.goals1, m.team1);
    add(m.goals2, m.team2);
  });
  return Object.values(tally).sort((a, b) => b.goals - a.goals || a.name.localeCompare(b.name));
}

/**
 * Resuelve un slot del bracket ("1A","2B","3A/B/C/D/F") a un equipo (preview en vivo)
 * o a una etiqueta. Si openfootball ya puso un equipo real, se respeta.
 */
export function resolveSlot(token, standings) {
  if (!token) return { label: 'Por definir', team: null, provisional: false };
  const t = token.trim();
  if (!isSlot(t)) return { label: t, team: t, provisional: false }; // ya es equipo real
  const pos = Number(t[0]);
  if (pos === 3) {
    const groups = t.slice(1).split('/').join('/');
    return { label: `3º (${groups})`, team: null, provisional: true };
  }
  const g = t[1];
  const grp = standings && standings[g];
  const row = grp && grp[pos - 1];
  const decided = grp && grp.every((r) => r.P >= 3);
  if (row && row.P > 0) {
    return { label: `${pos === 1 ? '1º' : '2º'} ${g}`, team: row.team, provisional: !decided };
  }
  return { label: `${pos === 1 ? '1º' : '2º'} ${g}`, team: null, provisional: true };
}

/** True si hay algún partido en juego (para acelerar el polling). */
export function anyLive(liveByKey) {
  return Object.values(liveByKey || {}).some((v) => v.status === 'IN_PLAY' || v.status === 'PAUSED');
}

/** Mapa par-de-equipos → estado en vivo (de football-data.org). */
export function buildLiveMap(results) {
  const map = {};
  (results || []).forEach((r) => {
    if (!r.homeTeam || !r.awayTeam) return;
    const key = [teamKey(r.homeTeam), teamKey(r.awayTeam)].sort().join('|');
    map[key] = {
      status: r.status, minute: r.minute,
      homeTeam: r.homeTeam, awayTeam: r.awayTeam,
      homeScore: r.homeScore, awayScore: r.awayScore,
    };
  });
  return map;
}
export const pairKey = (a, b) => [teamKey(a), teamKey(b)].sort().join('|');

// ============================================================================
// ENRIQUECIMIENTO — todo DERIVADO de openfootball + squads (sin fuentes nuevas)
// ============================================================================

/** Edad a partir de "YYYY-MM-DD" (ref: inicio del Mundial). */
export function age(dob, ref = '2026-06-11') {
  if (!dob || dob.length < 10) return null;
  const [y, m, d] = dob.slice(0, 10).split('-').map(Number);
  const [ry, rm, rd] = ref.split('-').map(Number);
  let a = ry - y;
  if (rm < m || (rm === m && rd < d)) a--;
  return a;
}

function teamResult(m, team) {
  if (!hasFinalScore(m)) return null;
  const [h, a] = m.score.ft;
  const isHome = teamKey(m.team1) === teamKey(team);
  const gf = isHome ? h : a, ga = isHome ? a : h;
  return { result: gf > ga ? 'W' : gf < ga ? 'L' : 'D', gf, ga, opp: isHome ? m.team2 : m.team1, date: m.date };
}

/** Forma reciente por equipo (más reciente primero). */
export function teamForm(groupMatches) {
  const byTeam = {};
  groupMatches.forEach((m) => {
    if (isSlot(m.team1) || isSlot(m.team2) || !hasFinalScore(m)) return;
    [m.team1, m.team2].forEach((t) => {
      const r = teamResult(m, t);
      if (r) (byTeam[teamKey(t)] = byTeam[teamKey(t)] || []).push(r);
    });
  });
  Object.keys(byTeam).forEach((t) => byTeam[t].sort((a, b) => b.date.localeCompare(a.date)));
  return byTeam;
}

/** Mejores ataques / defensas (equipos con PJ>0). */
export function attackDefense(standings) {
  const rows = [];
  Object.keys(standings).forEach((g) => standings[g].forEach((r) => { if (r.P > 0) rows.push({ ...r, group: g }); }));
  return {
    attack: [...rows].sort((a, b) => b.GF - a.GF || b.GD - a.GD).slice(0, 5),
    defense: [...rows].sort((a, b) => a.GA - b.GA || b.GD - a.GD).slice(0, 5),
  };
}

/** Stats globales del torneo (partidos de grupo terminados). */
export function tournamentStats(matches) {
  const played = matches.filter((m) => isGroupMatch(m) && hasFinalScore(m) && !isSlot(m.team1));
  let goals = 0; const buckets = [0, 0, 0, 0, 0, 0];
  let biggest = null, mostGoals = null, comebacks = 0, cleanSheets = 0;
  played.forEach((m) => {
    const [h, a] = m.score.ft; const tot = h + a; goals += tot;
    if (a === 0 || h === 0) cleanSheets++;
    const diff = Math.abs(h - a);
    if (!biggest || diff > biggest.diff) biggest = { m, diff, score: `${h}-${a}` };
    if (!mostGoals || tot > mostGoals.tot) mostGoals = { m, tot, score: `${h}-${a}` };
    if (m.score.ht) {
      const [hh, ah] = m.score.ht;
      if ((hh > ah && h < a) || (ah > hh && a < h)) comebacks++;
    }
    [...(m.goals1 || []), ...(m.goals2 || [])].forEach((x) => {
      const mn = parseInt(String(x.minute || '').replace('+', ''), 10);
      if (!isNaN(mn)) buckets[Math.min(5, Math.max(0, Math.floor((mn - 1) / 15)))]++;
    });
  });
  return { played: played.length, goals, avg: played.length ? goals / played.length : 0, buckets, biggest, mostGoals, comebacks, cleanSheets };
}

/** Jugadores con 2+ goles en un mismo partido (dobletes/hat-tricks). */
export function multiGoalGames(matches) {
  const out = [];
  matches.forEach((m) => {
    if (isSlot(m.team1) || isSlot(m.team2)) return;
    [['goals1', m.team1], ['goals2', m.team2]].forEach(([key, team]) => {
      const c = {};
      (m[key] || []).forEach((x) => {
        const n = (x.name || '').replace(/\s*\((pen\.?|o\.?g\.?|p)\)\s*/gi, '').trim();
        if (n) c[n] = (c[n] || 0) + 1;
      });
      Object.entries(c).forEach(([name, goals]) => {
        if (goals >= 2) out.push({ name, team, goals, opp: team === m.team1 ? m.team2 : m.team1, date: m.date });
      });
    });
  });
  return out.sort((a, b) => b.goals - a.goals || b.date.localeCompare(a.date));
}

/** Próximo partido programado por equipo (clave = teamKey). */
export function nextMatchByTeam(matches) {
  const byTeam = {};
  matches.forEach((m) => {
    if (isSlot(m.team1) || isSlot(m.team2) || hasFinalScore(m)) return;
    [m.team1, m.team2].forEach((t) => {
      const k = teamKey(t);
      if (!byTeam[k] || m.date < byTeam[k].date) byTeam[k] = m;
    });
  });
  return byTeam;
}

function posGroup(pos) {
  const p = (pos || '').toUpperCase();
  if (p.startsWith('G')) return 'POR';
  if (p.startsWith('D') || p === 'CB' || p === 'LB' || p === 'RB' || p === 'WB') return 'DEF';
  if (p.startsWith('M') || p === 'DM' || p === 'AM') return 'MED';
  if (p.startsWith('F') || p === 'CF' || p === 'ST' || p === 'LW' || p === 'RW' || p === 'W') return 'DEL';
  return 'OTRO';
}

/** Agregados de un plantel: edad, posiciones, ligas/países de club. */
export function squadAggregate(team) {
  const players = team?.players || [];
  const ages = players.map((p) => age(p.date_of_birth)).filter((a) => a != null);
  const avgAge = ages.length ? ages.reduce((s, a) => s + a, 0) / ages.length : null;
  let youngest = null, oldest = null;
  players.forEach((p) => {
    const a = age(p.date_of_birth); if (a == null) return;
    if (!youngest || a < youngest.age) youngest = { ...p, age: a };
    if (!oldest || a > oldest.age) oldest = { ...p, age: a };
  });
  const byPos = {}; players.forEach((p) => { const g = posGroup(p.pos); byPos[g] = (byPos[g] || 0) + 1; });
  const byLeague = {}; players.forEach((p) => { const c = p.club?.country || '—'; byLeague[c] = (byLeague[c] || 0) + 1; });
  return { avgAge, youngest, oldest, byPos, leagues: Object.entries(byLeague).sort((a, b) => b[1] - a[1]), count: players.length };
}

/** Búsqueda de jugador cross-selección. */
export function searchSquads(squads, q) {
  const n = norm(q);
  if (n.length < 2) return [];
  const out = [];
  (squads || []).forEach((t) => (t.players || []).forEach((p) => {
    if (norm(p.name).includes(n)) out.push({ name: p.name, team: t.name, pos: p.pos, number: p.number, club: p.club?.name, group: t.group });
  }));
  return out.slice(0, 30);
}

// "Cómo llegar" — ciudad-sede (openfootball ground) → guía que YA existe en el sitio.
export const VENUE_GUIDE = {
  'Mexico City': { url: '/mundial-2026/como-llegar-estadio-azteca/', label: '🚇 Cómo llegar al Azteca', mx: true },
  'Guadalajara (Zapopan)': { url: '/gdl/mundial-2026/', label: '🚇 Cómo llegar al Akron', mx: true },
  'Monterrey (Guadalupe)': { url: '/mty/mundial-2026/', label: '🚇 Cómo llegar al BBVA', mx: true },
  Atlanta: { url: '/mundial-2026/mercedes-benz-stadium/', label: '📍 Guía del estadio' },
  'Boston (Foxborough)': { url: '/mundial-2026/gillette-stadium/', label: '📍 Guía del estadio' },
  'Dallas (Arlington)': { url: '/mundial-2026/att-stadium/', label: '📍 Guía del estadio' },
  Houston: { url: '/mundial-2026/nrg-stadium/', label: '📍 Guía del estadio' },
  'Kansas City': { url: '/mundial-2026/arrowhead-stadium/', label: '📍 Guía del estadio' },
  'Los Angeles (Inglewood)': { url: '/mundial-2026/sofi-stadium/', label: '📍 Guía del estadio' },
  'Miami (Miami Gardens)': { url: '/mundial-2026/hard-rock-stadium/', label: '📍 Guía del estadio' },
  'New York/New Jersey (East Rutherford)': { url: '/mundial-2026/metlife-stadium/', label: '📍 Guía del estadio' },
  'San Francisco Bay Area (Santa Clara)': { url: '/mundial-2026/levis-stadium/', label: '📍 Guía del estadio' },
};
export const guideFor = (ground) => VENUE_GUIDE[ground] || null;

// Coordenadas de las 16 sedes (para clima Open-Meteo, sin API key).
export const CITY_COORDS = {
  'Mexico City': [19.3, -99.15], 'Guadalajara (Zapopan)': [20.68, -103.46], 'Monterrey (Guadalupe)': [25.67, -100.24],
  Atlanta: [33.75, -84.4], 'Boston (Foxborough)': [42.09, -71.26], 'Dallas (Arlington)': [32.75, -97.09],
  Houston: [29.68, -95.41], 'Kansas City': [39.05, -94.48], 'Los Angeles (Inglewood)': [33.95, -118.34],
  'Miami (Miami Gardens)': [25.96, -80.24], 'New York/New Jersey (East Rutherford)': [40.81, -74.07],
  Philadelphia: [39.9, -75.17], 'San Francisco Bay Area (Santa Clara)': [37.4, -121.97],
  Seattle: [47.59, -122.33], Toronto: [43.64, -79.39], Vancouver: [49.28, -123.11],
};
/** WMO weather_code (Open-Meteo) → [emoji, texto]. */
export function wmo(code) {
  const m = {
    0: ['☀️', 'Despejado'], 1: ['🌤️', 'Despejado'], 2: ['⛅', 'Parcial nublado'], 3: ['☁️', 'Nublado'],
    45: ['🌫️', 'Niebla'], 48: ['🌫️', 'Niebla'], 51: ['🌦️', 'Llovizna'], 53: ['🌦️', 'Llovizna'], 55: ['🌦️', 'Llovizna'],
    61: ['🌧️', 'Lluvia'], 63: ['🌧️', 'Lluvia'], 65: ['🌧️', 'Lluvia fuerte'], 71: ['🌨️', 'Nieve'], 73: ['🌨️', 'Nieve'], 75: ['🌨️', 'Nieve'],
    80: ['🌦️', 'Chubascos'], 81: ['🌦️', 'Chubascos'], 82: ['⛈️', 'Chubascos'], 95: ['⛈️', 'Tormenta'], 96: ['⛈️', 'Tormenta'], 99: ['⛈️', 'Tormenta'],
  };
  return m[code] || ['', ''];
}
