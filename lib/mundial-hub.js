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
