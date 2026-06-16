'use client';

import { useEffect, useMemo, useState, useCallback } from 'react';
import {
  parseWC, computeStandings, rankThirds, topScorers, knockoutRounds,
  resolveSlot, flagFor, hasFinalScore, isSlot, buildLiveMap, anyLive, pairKey,
  playerKey, goalsByPlayer, teamKey,
  teamForm, attackDefense, tournamentStats, multiGoalGames, squadAggregate, searchSquads,
  guideFor, CITY_COORDS, wmo,
} from '@/lib/mundial-hub';

const C = {
  bg: 'var(--bg)', surface: 'var(--surface)', linen: 'var(--linen)', border: 'var(--border)',
  text: 'var(--text)', muted: 'var(--text-muted)', dim: 'var(--text-dim)',
  forest: 'var(--forest)', amber: 'var(--amber)', terracotta: 'var(--terracotta)',
  green: '#2A7D4F', live: '#dc2626', third: '#E89B2C',
};
const serif = "'Playfair Display', Georgia, serif";

const DIAS = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
const MESES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

/** Convierte "13:00 UTC-7" + fecha local a hora CDMX (UTC-6). */
function toCDMX(dateStr, timeStr) {
  const mt = (timeStr || '').match(/(\d{1,2}):(\d{2})\s*UTC([+-]\d{1,2})/);
  if (!dateStr || !mt) return { date: dateStr, time: (timeStr || '').replace(/\s*UTC.*/, '') || 'TBD' };
  const [y, mo, d] = dateStr.split('-').map(Number);
  const h = Number(mt[1]); const mi = Number(mt[2]); const off = Number(mt[3]);
  const utcMs = Date.UTC(y, mo - 1, d, h - off, mi);
  const cdmx = new Date(utcMs - 6 * 3600 * 1000);
  const pad = (n) => String(n).padStart(2, '0');
  return {
    date: `${cdmx.getUTCFullYear()}-${pad(cdmx.getUTCMonth() + 1)}-${pad(cdmx.getUTCDate())}`,
    time: `${pad(cdmx.getUTCHours())}:${pad(cdmx.getUTCMinutes())}`,
    dow: cdmx.getUTCDay(), dnum: cdmx.getUTCDate(), month: cdmx.getUTCMonth(),
  };
}

function liveState(m, liveMap) {
  if (isSlot(m.team1) || isSlot(m.team2)) {
    return { kind: hasFinalScore(m) ? 'finished' : 'scheduled', score: m.score?.ft || null };
  }
  const lv = liveMap[pairKey(m.team1, m.team2)];
  if (lv && (lv.status === 'IN_PLAY' || lv.status === 'PAUSED')) {
    const oriented = pairKey(lv.homeTeam, m.team1) && lv.homeTeam && (lv.homeTeam.replace(/\W/g, '').toLowerCase().includes(m.team1.replace(/\W/g, '').toLowerCase().slice(0, 5)));
    const score = oriented ? [lv.homeScore, lv.awayScore] : [lv.awayScore, lv.homeScore];
    return { kind: 'live', minute: lv.minute, score };
  }
  if (hasFinalScore(m)) return { kind: 'finished', score: m.score.ft };
  if (lv && lv.status === 'FINISHED' && lv.homeScore != null) return { kind: 'finished', score: [lv.homeScore, lv.awayScore] };
  return { kind: 'scheduled', score: null };
}

function Badge({ children, bg, color }) {
  return <span style={{ fontSize: '0.68rem', padding: '0.15rem 0.5rem', borderRadius: 999, background: bg, color, fontWeight: 700, whiteSpace: 'nowrap' }}>{children}</span>;
}

function MatchRow({ m, liveMap, standings, weather }) {
  const t = toCDMX(m.date, m.time);
  const st = liveState(m, liveMap);
  const s = st.score;
  const a = resolveSlot(m.team1, standings); const b = resolveSlot(m.team2, standings);
  const nameA = a.team || a.label; const nameB = b.team || b.label;
  const scoreCol = st.kind === 'live' ? C.live : C.amber;
  const ht = st.kind === 'finished' && Array.isArray(m.score?.ht) ? m.score.ht : null;
  const guide = guideFor(m.ground);
  const wx = st.kind === 'scheduled' && weather && weather[m.ground] && weather[m.ground][m.date];
  return (
    <div style={{
      padding: '0.7rem 0.9rem', background: C.bg, border: `1px solid ${C.border}`,
      borderLeft: `3px solid ${st.kind === 'live' ? C.live : st.kind === 'finished' ? C.green : C.border}`,
      borderRadius: 8,
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.5rem', alignItems: 'center' }}>
        <div style={{ minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', marginBottom: 2 }}>
            <span style={{ fontSize: '1.1rem' }}>{flagFor(a.team)}</span>
            <span style={{ color: C.text, fontWeight: a.team ? 600 : 400, fontSize: '0.95rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{nameA}</span>
            {s && <strong style={{ marginLeft: 'auto', color: scoreCol, fontSize: '1.05rem', minWidth: 18, textAlign: 'right' }}>{s[0]}</strong>}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <span style={{ fontSize: '1.1rem' }}>{flagFor(b.team)}</span>
            <span style={{ color: C.text, fontWeight: b.team ? 600 : 400, fontSize: '0.95rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{nameB}</span>
            {s && <strong style={{ marginLeft: 'auto', color: scoreCol, fontSize: '1.05rem', minWidth: 18, textAlign: 'right' }}>{s[1]}</strong>}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.25rem' }}>
          {st.kind === 'live' && <Badge bg={C.live} color="#fff">🔴 {st.minute ? `${st.minute}'` : 'EN VIVO'}</Badge>}
          {st.kind === 'finished' && <Badge bg={`${C.green}1a`} color={C.green}>FINAL</Badge>}
          {st.kind === 'scheduled' && <span style={{ fontSize: '0.8rem', color: C.muted, fontWeight: 600 }}>{t.time}</span>}
          {ht && <span style={{ fontSize: '0.62rem', color: C.dim }}>MT {ht[0]}-{ht[1]}</span>}
          <span style={{ fontSize: '0.66rem', color: C.dim }}>{m.ground || ''}</span>
        </div>
      </div>
      {(guide || wx) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8, marginTop: '0.55rem', paddingTop: '0.5rem', borderTop: `1px dashed ${C.border}`, fontSize: '0.72rem' }}>
          {guide
            ? <a href={guide.url} style={{ color: guide.mx ? C.forest : C.terracotta, fontWeight: 700, textDecoration: 'none' }}>{guide.label} →</a>
            : <span />}
          {wx ? <span style={{ color: C.muted, whiteSpace: 'nowrap' }} title={wmo(wx.code)[1]}>{wmo(wx.code)[0]} {Math.round(wx.tmax)}°</span> : null}
        </div>
      )}
    </div>
  );
}

function LiveTab({ matches, liveMap, standings, weather }) {
  const withCdmx = matches.map((m) => ({ m, t: toCDMX(m.date, m.time) }));
  // ordena por fecha; el día de hoy y los partidos en vivo primero
  const live = withCdmx.filter(({ m }) => liveState(m, liveMap).kind === 'live');
  const byDay = {};
  withCdmx.forEach(({ m, t }) => { (byDay[t.date] = byDay[t.date] || []).push(m); });
  const days = Object.keys(byDay).sort();
  return (
    <div>
      {live.length > 0 && (
        <div style={{ marginBottom: '1.75rem' }}>
          <h2 style={{ ...h2style, color: C.live }}>🔴 En juego ahora</h2>
          <div style={grid}>{live.map((x, i) => <MatchRow key={'L' + i} m={x.m} liveMap={liveMap} standings={standings} weather={weather} />)}</div>
        </div>
      )}
      {days.map((d) => {
        const [y, mo, dd] = d.split('-').map(Number);
        const dt = new Date(Date.UTC(y, mo - 1, dd));
        const ms = byDay[d];
        return (
          <div key={d} style={{ marginBottom: '2rem' }}>
            <h2 style={h2style}>{DIAS[dt.getUTCDay()]} {dd} de {MESES[mo - 1]} <span style={{ color: C.dim, fontWeight: 400, fontSize: '0.9rem' }}>· {ms.length} {ms.length === 1 ? 'partido' : 'partidos'}</span></h2>
            <div style={grid}>{ms.map((m, i) => <MatchRow key={d + i} m={m} liveMap={liveMap} standings={standings} weather={weather} />)}</div>
          </div>
        );
      })}
    </div>
  );
}

function FormDots({ results }) {
  const col = { W: C.green, D: C.dim, L: C.live };
  return (
    <span style={{ display: 'inline-flex', gap: 3 }}>
      {(results || []).slice(0, 3).map((r, i) => (
        <span key={i} title={`${r.result} vs ${r.opp} ${r.gf}-${r.ga}`} style={{ width: 7, height: 7, borderRadius: 999, background: col[r.result] || C.dim, display: 'inline-block' }} />
      ))}
    </span>
  );
}

function StandingsTable({ g, rows, form }) {
  return (
    <div style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 10, overflow: 'hidden' }}>
      <div style={{ background: C.forest, color: '#fff', padding: '0.55rem 0.85rem', fontWeight: 700, fontFamily: serif, fontSize: '1.05rem' }}>Grupo {g}</div>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem' }}>
        <thead>
          <tr style={{ color: C.muted, textAlign: 'right' }}>
            <th style={{ ...th, textAlign: 'left' }}>#</th><th style={{ ...th, textAlign: 'left' }}>Equipo</th>
            <th style={th}>PJ</th><th style={th}>DG</th><th style={{ ...th, color: C.text }}>Pts</th><th style={{ ...th, textAlign: 'center' }}>Forma</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => {
            const bg = i < 2 ? `${C.green}14` : i === 2 ? `${C.third}18` : 'transparent';
            return (
              <tr key={r.team} style={{ background: bg, borderTop: `1px solid ${C.border}` }}>
                <td style={{ ...td, textAlign: 'left', color: i < 2 ? C.green : i === 2 ? C.third : C.dim, fontWeight: 700 }}>{i + 1}</td>
                <td style={{ ...td, textAlign: 'left', color: C.text }}><span style={{ marginRight: 5 }}>{flagFor(r.team)}</span>{r.team}</td>
                <td style={tdr}>{r.P}</td>
                <td style={tdr}>{r.GD > 0 ? '+' + r.GD : r.GD}</td>
                <td style={{ ...tdr, fontWeight: 800, color: C.forest }}>{r.Pts}</td>
                <td style={{ ...td, textAlign: 'center' }}><FormDots results={form && form[teamKey(r.team)]} /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function GroupsTab({ standings, thirds, form }) {
  const groups = Object.keys(standings).sort();
  const started = groups.some((g) => standings[g].some((r) => r.P > 0));
  return (
    <div>
      {!started && <p style={emptyStyle}>Las tablas se llenan solas conforme se juegan los partidos. El Mundial arranca el 11 de junio.</p>}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1rem' }}>
        {groups.map((g) => <StandingsTable key={g} g={g} rows={standings[g]} form={form} />)}
      </div>
      {thirds.length > 0 && (
        <div style={{ marginTop: '2rem', background: C.linen, border: `1px solid ${C.border}`, borderRadius: 10, padding: '1.1rem 1.25rem' }}>
          <h2 style={{ ...h2style, marginTop: 0 }}>Mejores terceros <span style={{ color: C.dim, fontWeight: 400, fontSize: '0.85rem' }}>· los 8 mejores avanzan</span></h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {thirds.map((t) => (
              <span key={t.group} style={{
                display: 'inline-flex', alignItems: 'center', gap: 6, padding: '0.35rem 0.7rem', borderRadius: 999,
                background: t.qualified ? `${C.green}1a` : C.surface, color: t.qualified ? C.green : C.muted,
                border: `1px solid ${t.qualified ? C.green : C.border}`, fontWeight: 600, fontSize: '0.85rem',
              }}>{flagFor(t.team)} {t.team} <small style={{ opacity: 0.7 }}>({t.group} · {t.Pts}pts)</small></span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function BracketTab({ rounds, standings }) {
  if (!rounds.length) return <p style={emptyStyle}>El bracket aparece cuando arranca la fase eliminatoria.</p>;
  const roundLabel = { 'Round of 32': 'Round of 32', 'Round of 16': 'Octavos', 'Quarter-final': 'Cuartos', 'Quarter-finals': 'Cuartos', 'Semi-final': 'Semis', 'Semi-finals': 'Semis', 'Third place': '3er lugar', 'Match for third place': '3er lugar', 'Final': 'Final' };
  return (
    <div>
      <p style={{ color: C.muted, fontSize: '0.85rem', marginTop: 0, marginBottom: '1rem' }}>
        Los cruces se llenan automáticamente: 1º/2º de cada grupo en cuanto se definen (provisional mientras el grupo sigue abierto), y los terceros cuando se confirman los 8 mejores.
      </p>
      <div style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '0.75rem' }}>
        {rounds.map(({ round, matches }) => (
          <div key={round} style={{ minWidth: 230, flex: '0 0 auto' }}>
            <h3 style={{ fontFamily: serif, color: C.forest, fontSize: '1rem', margin: '0 0 0.6rem', textAlign: 'center', borderBottom: `2px solid ${C.amber}`, paddingBottom: 4 }}>{roundLabel[round] || round}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {matches.map((m, i) => {
                const a = resolveSlot(m.team1, standings); const b = resolveSlot(m.team2, standings);
                const fin = hasFinalScore(m);
                const row = (x, sc) => (
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.82rem' }}>
                    <span>{flagFor(x.team)}</span>
                    <span style={{ color: x.team ? C.text : C.dim, fontStyle: x.provisional && x.team ? 'italic' : 'normal', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{x.team || x.label}</span>
                    {sc != null && <strong style={{ marginLeft: 'auto', color: C.amber }}>{sc}</strong>}
                  </div>
                );
                const t = toCDMX(m.date, m.time);
                return (
                  <div key={i} style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 8, padding: '0.55rem 0.7rem' }}>
                    {row(a, fin ? m.score.ft[0] : null)}
                    <div style={{ borderTop: `1px solid ${C.border}`, margin: '0.4rem 0' }} />
                    {row(b, fin ? m.score.ft[1] : null)}
                    <div style={{ fontSize: '0.64rem', color: C.dim, marginTop: 5, display: 'flex', justifyContent: 'space-between' }}>
                      <span>{t.dnum ? `${t.dnum} ${MESES[t.month].slice(0, 3)}` : ''}</span><span>{m.ground || ''}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScorersTab({ scorers, multiGoals }) {
  if (!scorers.length) return <p style={emptyStyle}>La tabla de goleadores se llena conforme caen los goles.</p>;
  const max = scorers[0].goals;
  return (
    <div style={{ maxWidth: 620 }}>
      {multiGoals && multiGoals.length > 0 && (
        <div style={{ marginBottom: '1.5rem', background: C.linen, border: `1px solid ${C.border}`, borderRadius: 10, padding: '0.9rem 1.1rem' }}>
          <h3 style={{ ...h2style, fontSize: '1rem', margin: '0 0 0.6rem' }}>🎩 Dobletes y hat-tricks</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {multiGoals.map((x, i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '0.3rem 0.65rem', borderRadius: 999, background: C.bg, border: `1px solid ${C.border}`, fontSize: '0.8rem', color: C.text, fontWeight: 600 }}>
                {flagFor(x.team)} {x.name} <strong style={{ color: C.amber }}>{x.goals === 3 ? '🎩 hat-trick' : `×${x.goals}`}</strong> <small style={{ color: C.dim, fontWeight: 400 }}>vs {x.opp}</small>
              </span>
            ))}
          </div>
        </div>
      )}
      {scorers.slice(0, 40).map((s, i) => (
        <div key={s.name + s.team} style={{ display: 'grid', gridTemplateColumns: '24px 1fr auto', gap: '0.6rem', alignItems: 'center', padding: '0.55rem 0.25rem', borderBottom: `1px solid ${C.border}` }}>
          <span style={{ color: i < 3 ? C.amber : C.dim, fontWeight: 700, textAlign: 'center' }}>{i + 1}</span>
          <div style={{ minWidth: 0 }}>
            <div style={{ color: C.text, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{flagFor(s.team)} {s.name}</div>
            <div style={{ color: C.muted, fontSize: '0.75rem' }}>{s.team}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 60, height: 6, background: C.surface, borderRadius: 999, overflow: 'hidden' }}>
              <div style={{ width: `${(s.goals / max) * 100}%`, height: '100%', background: C.amber }} />
            </div>
            <strong style={{ color: C.forest, minWidth: 18, textAlign: 'right' }}>{s.goals}</strong>
          </div>
        </div>
      ))}
    </div>
  );
}

function SquadsTab({ goalMap }) {
  const [squads, setSquads] = useState(null);
  const [sel, setSel] = useState(null);
  const [err, setErr] = useState(false);
  const [pstats, setPstats] = useState(null); // playerKey → {assists, yellow, red, minutes, apps}
  const [statsAt, setStatsAt] = useState(null);
  const [q, setQ] = useState('');

  useEffect(() => {
    let ok = true;
    fetch('/data/mundial-squads.json').then((r) => r.json()).then((d) => {
      if (!ok) return;
      const teams = Array.isArray(d) ? d : d.teams || [];
      teams.sort((a, b) => (a.group || '').localeCompare(b.group || '') || a.name.localeCompare(b.name));
      setSquads(teams); setSel(teams[0]);
    }).catch(() => ok && setErr(true));
    // Stats avanzadas (asistencias/tarjetas/minutos) — las produce el cron de API-Football.
    // Si el archivo aún no existe, el squad muestra solo goles (openfootball). Graceful.
    fetch('/data/mundial-player-stats.json').then((r) => (r.ok ? r.json() : null)).then((d) => {
      if (!ok || !d) return;
      setPstats(d.players || d); setStatsAt(d.updated || null);
    }).catch(() => {});
    return () => { ok = false; };
  }, []);

  if (err) return <p style={emptyStyle}>No se pudieron cargar las plantillas.</p>;
  if (!squads) return <p style={emptyStyle}>Cargando plantillas…</p>;
  const hasAdv = pstats && Object.keys(pstats).length > 0;
  const players = (sel?.players || []).slice().sort((a, b) => (a.number || 99) - (b.number || 99));
  const agg = sel ? squadAggregate(sel) : null;
  const results = q.trim().length >= 2 ? searchSquads(squads, q) : [];
  const stat = (icon, n, color, title) => (
    <span title={title} style={{ display: 'inline-flex', alignItems: 'center', gap: 2, color: n ? (color || C.text) : C.dim, fontWeight: n ? 700 : 400, fontVariantNumeric: 'tabular-nums' }}>{icon}{n || 0}</span>
  );
  return (
    <div>
      <div style={{ position: 'relative', marginBottom: '1.1rem' }}>
        <input
          type="search" value={q} onChange={(e) => setQ(e.target.value)}
          placeholder="🔎 Buscar jugador en cualquier selección…" aria-label="Buscar jugador"
          style={{ width: '100%', maxWidth: 460, padding: '0.6rem 0.85rem', borderRadius: 8, background: C.bg, color: C.text, border: `1px solid ${C.border}`, fontSize: '0.95rem' }}
        />
        {results.length > 0 && (
          <div style={{ marginTop: 6, maxWidth: 460, background: C.bg, border: `1px solid ${C.border}`, borderRadius: 8, overflow: 'hidden' }}>
            {results.map((p, i) => (
              <button key={i} onClick={() => { setSel(squads.find((t) => t.name === p.team)); setQ(''); }}
                style={{ display: 'flex', width: '100%', textAlign: 'left', gap: 8, alignItems: 'center', padding: '0.5rem 0.75rem', background: 'none', border: 'none', borderTop: i ? `1px solid ${C.border}` : 'none', cursor: 'pointer', fontSize: '0.85rem', color: C.text }}>
                <span>{flagFor(p.team)}</span>
                <span style={{ fontWeight: 600 }}>{p.name}</span>
                <span style={{ color: C.muted, fontSize: '0.78rem' }}>· {p.team} · {p.pos || ''} {p.club ? `· ${p.club}` : ''}</span>
              </button>
            ))}
          </div>
        )}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', marginBottom: '1.1rem' }}>
        <select
          aria-label="Selecciona una selección" value={sel?.name || ''}
          onChange={(e) => setSel(squads.find((t) => t.name === e.target.value))}
          style={{ flex: '1 1 260px', maxWidth: 360, padding: '0.6rem 0.75rem', borderRadius: 8, background: C.bg, color: C.text, border: `1px solid ${C.border}`, fontSize: '0.95rem' }}
        >
          {squads.map((t) => <option key={t.name} value={t.name}>{flagFor(t.name)} {t.name} (Grupo {t.group})</option>)}
        </select>
        <span style={{ color: C.dim, fontSize: '0.72rem' }}>
          ⚽ goles en vivo{hasAdv ? ` · 🅰️ asist · 🟨🟥 tarjetas${statsAt ? ` (act. ${String(statsAt).slice(0, 10)})` : ''}` : ' · asistencias/tarjetas próximamente'}
        </span>
      </div>
      {sel && (
        <div style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 10, overflow: 'hidden' }}>
          <div style={{ background: C.forest, color: '#fff', padding: '0.6rem 0.9rem', fontFamily: serif, fontSize: '1.1rem', fontWeight: 700 }}>{flagFor(sel.name)} {sel.name} <span style={{ opacity: 0.7, fontSize: '0.8rem' }}>· {players.length} jugadores</span></div>
          {agg && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem 1.2rem', padding: '0.6rem 0.9rem', background: C.linen, borderBottom: `1px solid ${C.border}`, fontSize: '0.78rem', color: C.muted }}>
              {agg.avgAge != null && <span>Edad media <strong style={{ color: C.text }}>{agg.avgAge.toFixed(1)}</strong></span>}
              {agg.youngest && <span>+ joven <strong style={{ color: C.text }}>{agg.youngest.name}</strong> ({agg.youngest.age})</span>}
              {agg.oldest && <span>+ veterano <strong style={{ color: C.text }}>{agg.oldest.name}</strong> ({agg.oldest.age})</span>}
              <span>{['POR', 'DEF', 'MED', 'DEL'].map((k) => `${agg.byPos[k] || 0}${k[0]}`).join(' · ')}</span>
              {agg.leagues[0] && <span>Mayoría en <strong style={{ color: C.text }}>{agg.leagues[0][0]}</strong> ({agg.leagues[0][1]})</span>}
            </div>
          )}
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <tbody>
              {players.map((p) => {
                const k = playerKey(sel.name, p.name);
                const goals = goalMap[k] || 0;
                const st = hasAdv ? pstats[k] : null;
                return (
                  <tr key={(p.number || '') + p.name} style={{ borderTop: `1px solid ${C.border}` }}>
                    <td style={{ ...td, width: 30, color: C.amber, fontWeight: 700 }}>{p.number || '–'}</td>
                    <td style={{ ...td, width: 40, color: C.muted }}>{p.pos || ''}</td>
                    <td style={{ ...td, color: C.text, fontWeight: 600, minWidth: 90 }}>{p.name}</td>
                    <td style={{ ...td, whiteSpace: 'nowrap' }}>
                      <span style={{ display: 'inline-flex', gap: 9, fontSize: '0.82rem' }}>
                        {stat('⚽', goals, C.amber, 'goles')}
                        {st && stat('🅰️', st.assists, C.forest, 'asistencias')}
                        {st && stat('🟨', st.yellow, '#b58900', 'amarillas')}
                        {st && stat('🟥', st.red, C.live, 'rojas')}
                      </span>
                    </td>
                    <td style={{ ...td, color: C.muted, textAlign: 'right', fontSize: '0.78rem' }}>{p.club?.name || ''}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 10, padding: '0.9rem 1rem', textAlign: 'center' }}>
      <div style={{ fontFamily: serif, fontSize: '1.7rem', fontWeight: 800, color: C.forest, lineHeight: 1 }}>{value}</div>
      <div style={{ fontSize: '0.68rem', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: 4 }}>{label}</div>
    </div>
  );
}

function DatosTab({ stats, ad }) {
  if (!stats.played) return <p style={emptyStyle}>Las estadísticas del torneo aparecen cuando se juegan los primeros partidos.</p>;
  const buckets = stats.buckets; const maxB = Math.max(1, ...buckets);
  const labels = ['1-15', '16-30', '31-45', '46-60', '61-75', '76+'];
  const list = (title, rows, val, color) => (
    <div style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 10, overflow: 'hidden' }}>
      <div style={{ background: C.forest, color: '#fff', padding: '0.5rem 0.85rem', fontFamily: serif, fontWeight: 700 }}>{title}</div>
      {rows.map((r, i) => (
        <div key={r.team} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '0.45rem 0.85rem', borderTop: i ? `1px solid ${C.border}` : 'none' }}>
          <span style={{ color: C.dim, width: 14 }}>{i + 1}</span>
          <span>{flagFor(r.team)}</span><span style={{ flex: 1, color: C.text, fontSize: '0.88rem' }}>{r.team}</span>
          <strong style={{ color }}>{val(r)}</strong>
        </div>
      ))}
    </div>
  );
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))', gap: '0.75rem', marginBottom: '1.75rem' }}>
        <StatCard label="Partidos" value={stats.played} />
        <StatCard label="Goles" value={stats.goals} />
        <StatCard label="Goles/partido" value={stats.avg.toFixed(2)} />
        <StatCard label="Vallas invictas" value={stats.cleanSheets} />
        <StatCard label="Remontadas" value={stats.comebacks} />
      </div>
      <h2 style={h2style}>¿A qué minuto caen los goles?</h2>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.6rem', height: 150, marginBottom: '2rem', padding: '0 0.5rem' }}>
        {buckets.map((b, i) => (
          <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, height: '100%', justifyContent: 'flex-end' }}>
            <strong style={{ fontSize: '0.8rem', color: C.forest }}>{b}</strong>
            <div style={{ width: '100%', height: `${(b / maxB) * 100}%`, minHeight: 3, background: C.amber, borderRadius: '4px 4px 0 0' }} />
            <span style={{ fontSize: '0.66rem', color: C.muted }}>{labels[i]}&apos;</span>
          </div>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '1.75rem' }}>
        {list('⚔️ Mejores ataques', ad.attack, (r) => r.GF, C.amber)}
        {list('🛡️ Mejores defensas', ad.defense, (r) => r.GA, C.forest)}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
        {stats.biggest && <div style={factStyle}>🥅 Goleada máxima: <strong style={{ color: C.text }}>{stats.biggest.m.team1} {stats.biggest.score} {stats.biggest.m.team2}</strong></div>}
        {stats.mostGoals && <div style={factStyle}>🎢 Más goles: <strong style={{ color: C.text }}>{stats.mostGoals.m.team1} {stats.mostGoals.score} {stats.mostGoals.m.team2}</strong></div>}
      </div>
    </div>
  );
}

const TABS = [
  { id: 'live', label: 'En vivo', icon: '🔴' },
  { id: 'groups', label: 'Grupos', icon: '📊' },
  { id: 'bracket', label: 'Bracket', icon: '🏆' },
  { id: 'scorers', label: 'Goleadores', icon: '⚽' },
  { id: 'datos', label: 'Datos', icon: '📈' },
  { id: 'squads', label: 'Plantillas', icon: '👕' },
];

function useWeather(cities) {
  const [weather, setWeather] = useState({});
  const key = cities.join('|');
  useEffect(() => {
    if (!cities.length) return undefined;
    let ok = true;
    Promise.all(cities.map((ground) => {
      const co = CITY_COORDS[ground];
      if (!co) return Promise.resolve(null);
      const [lat, lon] = co;
      return fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto&forecast_days=16`)
        .then((r) => (r.ok ? r.json() : null))
        .then((d) => {
          if (!d || !d.daily || !d.daily.time) return null;
          const byDate = {};
          d.daily.time.forEach((dt, i) => {
            byDate[dt] = { tmax: d.daily.temperature_2m_max[i], tmin: d.daily.temperature_2m_min[i], code: d.daily.weather_code[i] };
          });
          return [ground, byDate];
        })
        .catch(() => null);
    })).then((res) => {
      if (!ok) return;
      const w = {};
      res.filter(Boolean).forEach(([g, byDate]) => { w[g] = byDate; });
      setWeather(w);
    });
    return () => { ok = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);
  return weather;
}

export default function EnVivoClient({ initialWc }) {
  const [wc, setWc] = useState(initialWc);
  const [liveMap, setLiveMap] = useState({});
  const [tab, setTab] = useState('live');
  const [updatedAt, setUpdatedAt] = useState(null);
  const [ago, setAgo] = useState(0);

  const refresh = useCallback(async () => {
    try {
      const [wcR, resR] = await Promise.allSettled([
        fetch('/api/mundial/wc.js', { cache: 'no-store' }),
        fetch('/api/mundial/results.json', { cache: 'no-store' }),
      ]);
      if (wcR.status === 'fulfilled' && wcR.value.ok) {
        const d = await wcR.value.json();
        if (d && Array.isArray(d.matches)) setWc(d);
      }
      if (resR.status === 'fulfilled' && resR.value.ok) {
        const d = await resR.value.json();
        if (d && Array.isArray(d.results)) setLiveMap(buildLiveMap(d.results));
      }
      setUpdatedAt(Date.now());
    } catch (_) { /* mantiene datos previos */ }
  }, []);

  useEffect(() => {
    refresh();
    let id;
    const tick = () => { refresh(); id = setTimeout(tick, anyLive(liveMap) ? 45000 : 120000); };
    id = setTimeout(tick, anyLive(liveMap) ? 45000 : 120000);
    const onVis = () => { if (document.visibilityState === 'visible') refresh(); };
    document.addEventListener('visibilitychange', onVis);
    return () => { clearTimeout(id); document.removeEventListener('visibilitychange', onVis); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  useEffect(() => {
    if (!updatedAt) return;
    const i = setInterval(() => setAgo(Math.floor((Date.now() - updatedAt) / 1000)), 1000);
    return () => clearInterval(i);
  }, [updatedAt]);

  const parsed = useMemo(() => parseWC(wc), [wc]);
  const standings = useMemo(() => computeStandings(parsed.group), [parsed]);
  const thirds = useMemo(() => rankThirds(standings), [standings]);
  const scorers = useMemo(() => topScorers(parsed.matches), [parsed]);
  const rounds = useMemo(() => knockoutRounds(parsed.knockout), [parsed]);
  const goalMap = useMemo(() => goalsByPlayer(scorers), [scorers]);
  const form = useMemo(() => teamForm(parsed.group), [parsed]);
  const ad = useMemo(() => attackDefense(standings), [standings]);
  const tstats = useMemo(() => tournamentStats(parsed.matches), [parsed]);
  const multiGoals = useMemo(() => multiGoalGames(parsed.matches), [parsed]);
  const upcomingCities = useMemo(() => {
    const s = new Set();
    parsed.matches.forEach((m) => { if (!hasFinalScore(m) && !isSlot(m.team1) && CITY_COORDS[m.ground]) s.add(m.ground); });
    return Array.from(s).sort();
  }, [parsed]);
  const weather = useWeather(upcomingCities);

  return (
    <main style={{ maxWidth: 1180, margin: '0 auto', padding: '0 1.1rem 4rem' }}>
      <div style={{ position: 'sticky', top: 0, zIndex: 20, background: C.bg, paddingTop: '0.75rem', borderBottom: `1px solid ${C.border}` }}>
        <div style={{ display: 'flex', gap: '0.4rem', overflowX: 'auto', paddingBottom: '0.6rem' }}>
          {TABS.map((t) => (
            <button key={t.id} onClick={() => setTab(t.id)} style={{
              flex: '0 0 auto', padding: '0.55rem 0.95rem', borderRadius: 999, cursor: 'pointer',
              border: `1px solid ${tab === t.id ? C.forest : C.border}`,
              background: tab === t.id ? C.forest : C.bg, color: tab === t.id ? '#fff' : C.text,
              fontWeight: 600, fontSize: '0.9rem', whiteSpace: 'nowrap', transition: 'all .15s',
            }}>{t.icon} {t.label}</button>
          ))}
          <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6, color: C.dim, fontSize: '0.72rem', whiteSpace: 'nowrap', paddingLeft: 8 }}>
            <span style={{ width: 7, height: 7, borderRadius: 999, background: C.green, display: 'inline-block' }} />
            {updatedAt ? `actualizado hace ${ago}s` : 'conectando…'}
          </span>
        </div>
      </div>

      <div style={{ paddingTop: '1.5rem' }}>
        {tab === 'live' && <LiveTab matches={parsed.matches} liveMap={liveMap} standings={standings} weather={weather} />}
        {tab === 'groups' && <GroupsTab standings={standings} thirds={thirds} form={form} />}
        {tab === 'bracket' && <BracketTab rounds={rounds} standings={standings} />}
        {tab === 'scorers' && <ScorersTab scorers={scorers} multiGoals={multiGoals} />}
        {tab === 'datos' && <DatosTab stats={tstats} ad={ad} />}
        {tab === 'squads' && <SquadsTab goalMap={goalMap} />}
      </div>

      <p style={{ marginTop: '2.5rem', color: C.dim, fontSize: '0.72rem', textAlign: 'center', borderTop: `1px solid ${C.border}`, paddingTop: '1rem' }}>
        Datos: <a href="https://github.com/openfootball/worldcup.json" style={{ color: C.terracotta }} rel="noopener noreferrer" target="_blank">openfootball</a> (dominio público) + football-data.org · clima por <a href="https://open-meteo.com" style={{ color: C.terracotta }} rel="noopener noreferrer" target="_blank">Open-Meteo</a> · resultados con posible retraso · horarios en hora CDMX (UTC−6)
      </p>
    </main>
  );
}

const h2style = { fontFamily: serif, color: C.forest, fontSize: '1.2rem', margin: '0 0 0.85rem' };
const grid = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '0.7rem' };
const th = { padding: '0.45rem 0.6rem', fontWeight: 600, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.03em' };
const td = { padding: '0.45rem 0.6rem' };
const tdr = { padding: '0.45rem 0.6rem', textAlign: 'right', color: C.muted };
const emptyStyle = { color: C.muted, padding: '2.5rem 1rem', textAlign: 'center', background: C.surface, borderRadius: 10, border: `1px dashed ${C.border}` };
const factStyle = { background: C.linen, border: `1px solid ${C.border}`, borderRadius: 8, padding: '0.6rem 0.9rem', fontSize: '0.85rem', color: C.muted };
