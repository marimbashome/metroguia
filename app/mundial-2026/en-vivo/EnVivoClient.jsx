'use client';

import { useEffect, useMemo, useState, useCallback } from 'react';
import {
  parseWC, computeStandings, rankThirds, topScorers, knockoutRounds,
  resolveSlot, flagFor, hasFinalScore, isSlot, buildLiveMap, anyLive, pairKey,
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

function MatchRow({ m, liveMap, standings }) {
  const t = toCDMX(m.date, m.time);
  const st = liveState(m, liveMap);
  const s = st.score;
  const a = resolveSlot(m.team1, standings); const b = resolveSlot(m.team2, standings);
  const nameA = a.team || a.label; const nameB = b.team || b.label;
  const scoreCol = st.kind === 'live' ? C.live : C.amber;
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '1fr auto', gap: '0.5rem', alignItems: 'center',
      padding: '0.7rem 0.9rem', background: C.bg, border: `1px solid ${C.border}`,
      borderLeft: `3px solid ${st.kind === 'live' ? C.live : st.kind === 'finished' ? C.green : C.border}`,
      borderRadius: 8,
    }}>
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
        <span style={{ fontSize: '0.66rem', color: C.dim }}>{m.ground || ''}</span>
      </div>
    </div>
  );
}

function LiveTab({ matches, liveMap, standings }) {
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
          <div style={grid}>{live.map((x, i) => <MatchRow key={'L' + i} m={x.m} liveMap={liveMap} standings={standings} />)}</div>
        </div>
      )}
      {days.map((d) => {
        const [y, mo, dd] = d.split('-').map(Number);
        const dt = new Date(Date.UTC(y, mo - 1, dd));
        const ms = byDay[d];
        return (
          <div key={d} style={{ marginBottom: '2rem' }}>
            <h2 style={h2style}>{DIAS[dt.getUTCDay()]} {dd} de {MESES[mo - 1]} <span style={{ color: C.dim, fontWeight: 400, fontSize: '0.9rem' }}>· {ms.length} {ms.length === 1 ? 'partido' : 'partidos'}</span></h2>
            <div style={grid}>{ms.map((m, i) => <MatchRow key={d + i} m={m} liveMap={liveMap} standings={standings} />)}</div>
          </div>
        );
      })}
    </div>
  );
}

function StandingsTable({ g, rows }) {
  return (
    <div style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 10, overflow: 'hidden' }}>
      <div style={{ background: C.forest, color: '#fff', padding: '0.55rem 0.85rem', fontWeight: 700, fontFamily: serif, fontSize: '1.05rem' }}>Grupo {g}</div>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem' }}>
        <thead>
          <tr style={{ color: C.muted, textAlign: 'right' }}>
            <th style={{ ...th, textAlign: 'left' }}>#</th><th style={{ ...th, textAlign: 'left' }}>Equipo</th>
            <th style={th}>PJ</th><th style={th}>DG</th><th style={{ ...th, color: C.text }}>Pts</th>
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function GroupsTab({ standings, thirds }) {
  const groups = Object.keys(standings).sort();
  const started = groups.some((g) => standings[g].some((r) => r.P > 0));
  return (
    <div>
      {!started && <p style={emptyStyle}>Las tablas se llenan solas conforme se juegan los partidos. El Mundial arranca el 11 de junio.</p>}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
        {groups.map((g) => <StandingsTable key={g} g={g} rows={standings[g]} />)}
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

function ScorersTab({ scorers }) {
  if (!scorers.length) return <p style={emptyStyle}>La tabla de goleadores se llena conforme caen los goles.</p>;
  const max = scorers[0].goals;
  return (
    <div style={{ maxWidth: 620 }}>
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

function SquadsTab() {
  const [squads, setSquads] = useState(null);
  const [sel, setSel] = useState(null);
  const [err, setErr] = useState(false);
  useEffect(() => {
    let ok = true;
    fetch('/data/mundial-squads.json').then((r) => r.json()).then((d) => {
      if (!ok) return;
      const teams = Array.isArray(d) ? d : d.teams || [];
      teams.sort((a, b) => (a.group || '').localeCompare(b.group || '') || a.name.localeCompare(b.name));
      setSquads(teams); setSel(teams[0]);
    }).catch(() => ok && setErr(true));
    return () => { ok = false; };
  }, []);
  if (err) return <p style={emptyStyle}>No se pudieron cargar las plantillas.</p>;
  if (!squads) return <p style={emptyStyle}>Cargando plantillas…</p>;
  const players = (sel?.players || []).slice().sort((a, b) => (a.number || 99) - (b.number || 99));
  return (
    <div>
      <select
        aria-label="Selecciona una selección" value={sel?.name || ''}
        onChange={(e) => setSel(squads.find((t) => t.name === e.target.value))}
        style={{ width: '100%', maxWidth: 360, padding: '0.6rem 0.75rem', borderRadius: 8, background: C.bg, color: C.text, border: `1px solid ${C.border}`, fontSize: '0.95rem', marginBottom: '1.25rem' }}
      >
        {squads.map((t) => <option key={t.name} value={t.name}>{flagFor(t.name)} {t.name} (Grupo {t.group})</option>)}
      </select>
      {sel && (
        <div style={{ background: C.bg, border: `1px solid ${C.border}`, borderRadius: 10, overflow: 'hidden' }}>
          <div style={{ background: C.forest, color: '#fff', padding: '0.6rem 0.9rem', fontFamily: serif, fontSize: '1.1rem', fontWeight: 700 }}>{flagFor(sel.name)} {sel.name} <span style={{ opacity: 0.7, fontSize: '0.8rem' }}>· {players.length} jugadores</span></div>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
            <tbody>
              {players.map((p) => (
                <tr key={(p.number || '') + p.name} style={{ borderTop: `1px solid ${C.border}` }}>
                  <td style={{ ...td, width: 34, color: C.amber, fontWeight: 700 }}>{p.number || '–'}</td>
                  <td style={{ ...td, width: 44, color: C.muted }}>{p.pos || ''}</td>
                  <td style={{ ...td, color: C.text, fontWeight: 600 }}>{p.name}</td>
                  <td style={{ ...td, color: C.muted, textAlign: 'right' }}>{p.club?.name || ''}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

const TABS = [
  { id: 'live', label: 'En vivo', icon: '🔴' },
  { id: 'groups', label: 'Grupos', icon: '📊' },
  { id: 'bracket', label: 'Bracket', icon: '🏆' },
  { id: 'scorers', label: 'Goleadores', icon: '⚽' },
  { id: 'squads', label: 'Plantillas', icon: '👕' },
];

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
        {tab === 'live' && <LiveTab matches={parsed.matches} liveMap={liveMap} standings={standings} />}
        {tab === 'groups' && <GroupsTab standings={standings} thirds={thirds} />}
        {tab === 'bracket' && <BracketTab rounds={rounds} standings={standings} />}
        {tab === 'scorers' && <ScorersTab scorers={scorers} />}
        {tab === 'squads' && <SquadsTab />}
      </div>

      <p style={{ marginTop: '2.5rem', color: C.dim, fontSize: '0.72rem', textAlign: 'center', borderTop: `1px solid ${C.border}`, paddingTop: '1rem' }}>
        Datos: <a href="https://github.com/openfootball/worldcup.json" style={{ color: C.terracotta }} rel="noopener noreferrer" target="_blank">openfootball</a> (dominio público) + football-data.org · resultados con posible retraso · horarios en hora CDMX (UTC−6)
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
