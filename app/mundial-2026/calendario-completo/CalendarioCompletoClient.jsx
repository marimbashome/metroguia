'use client';

import { useState, useMemo } from 'react';
import MundialCalendarCTA from '@/app/components/MundialCalendarCTA';

const PHASES = [
  { value: 'all', label: 'Todas las fases' },
  { value: 'GROUP_STAGE', label: 'Fase de Grupos' },
  { value: 'LAST_32', label: 'Round of 32' },
  { value: 'LAST_16', label: 'Octavos de Final' },
  { value: 'QUARTER_FINALS', label: 'Cuartos de Final' },
  { value: 'SEMI_FINALS', label: 'Semifinal' },
  { value: 'THIRD_PLACE', label: 'Tercer Lugar' },
  { value: 'FINAL', label: 'Final' },
];

const PHASE_COLORS = {
  GROUP_STAGE: '#06B6D4',
  LAST_32: '#8B5CF6',
  LAST_16: '#A855F7',
  QUARTER_FINALS: '#EC4899',
  SEMI_FINALS: '#F59E0B',
  THIRD_PLACE: '#84CC16',
  FINAL: '#FBBF24',
};

function formatDate(dateCdmx) {
  // dateCdmx is "YYYY-MM-DD HH:MM"
  const [date, time] = dateCdmx.split(' ');
  const [y, m, d] = date.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  const dias = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  return `${dias[dt.getDay()]} ${d} ${meses[m - 1]} · ${time} CDMX`;
}

function MatchCard({ match }) {
  const phaseColor = PHASE_COLORS[match.phase] || '#00D4FF';
  const isLive = match.status === 'IN_PLAY' || match.status === 'PAUSED';
  const isFinished = match.status === 'FINISHED';

  return (
    <a
      href={`/mundial-2026/partido/${match.slug}/`}
      style={{
        display: 'block',
        padding: '1.25rem',
        background: 'var(--surface)',
        border: `1px solid ${match.is_azteca ? 'rgba(233,30,140,0.4)' : 'var(--border)'}`,
        borderLeft: `4px solid ${match.is_azteca ? '#E91E8C' : phaseColor}`,
        borderRadius: '0.5rem',
        textDecoration: 'none',
        color: 'inherit',
        transition: 'all 0.2s',
      }}
      className="hover-lift"
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
        <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>
          {formatDate(match.date_cdmx)}
        </span>
        <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {isLive && (
            <span style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem', borderRadius: '999px', background: '#dc2626', color: 'white', fontWeight: 700, animation: 'pulse 1.5s infinite' }}>
              🔴 EN VIVO
            </span>
          )}
          <span style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem', borderRadius: '999px', background: `${phaseColor}25`, color: phaseColor, fontWeight: 600 }}>
            {match.group ? `${match.phase_label} · ${match.group}` : match.phase_label}
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
        <span style={{ fontSize: '1.25rem' }}>{match.home_flag}</span>
        <strong style={{ color: 'rgba(255,255,255,0.92)', fontSize: '1.05rem', flex: 1 }}>{match.home_team}</strong>
        {isFinished ? (
          <strong style={{ color: '#fbbf24', fontSize: '1.1rem', minWidth: 28, textAlign: 'center' }}>{match.home_score ?? '-'}</strong>
        ) : (
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.85rem' }}>vs</span>
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
        <span style={{ fontSize: '1.25rem' }}>{match.away_flag}</span>
        <strong style={{ color: 'rgba(255,255,255,0.92)', fontSize: '1.05rem', flex: 1 }}>{match.away_team}</strong>
        {isFinished && (
          <strong style={{ color: '#fbbf24', fontSize: '1.1rem', minWidth: 28, textAlign: 'center' }}>{match.away_score ?? '-'}</strong>
        )}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)', borderTop: '1px solid var(--border)', paddingTop: '0.6rem' }}>
        <span>{match.is_azteca && '🏛️ '}{match.stadium}</span>
        <span>{match.city}</span>
      </div>
    </a>
  );
}

export default function CalendarioCompletoClient({ matches }) {
  const [phase, setPhase] = useState('all');
  const [city, setCity] = useState('all');
  const [search, setSearch] = useState('');

  const cities = useMemo(() => {
    const set = new Set();
    matches.forEach((m) => set.add(m.city));
    return ['all', ...Array.from(set).sort()];
  }, [matches]);

  const filtered = useMemo(() => {
    return matches
      .filter((m) => phase === 'all' || m.phase === phase)
      .filter((m) => city === 'all' || m.city === city)
      .filter((m) => {
        if (!search) return true;
        const s = search.toLowerCase();
        return (
          m.home_team.toLowerCase().includes(s) ||
          m.away_team.toLowerCase().includes(s) ||
          m.stadium.toLowerCase().includes(s) ||
          m.city.toLowerCase().includes(s)
        );
      });
  }, [matches, phase, city, search]);

  // Group by date for display
  const grouped = useMemo(() => {
    const map = {};
    filtered.forEach((m) => {
      const date = m.date_cdmx.slice(0, 10);
      if (!map[date]) map[date] = [];
      map[date].push(m);
    });
    return Object.entries(map).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  return (
    <>
      <section style={{
        background: 'linear-gradient(135deg, #0A0A0F 0%, #1a1a2e 50%, #16213e 100%)',
        padding: '4rem 1.25rem', textAlign: 'center', borderBottom: '3px solid #00D4FF',
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <p style={{ fontSize: '3rem', margin: 0 }}>📅</p>
          <h1 style={{ color: '#00D4FF', fontSize: '2.5rem', fontWeight: 800, margin: '0.5rem 0' }}>
            Mundial FIFA 2026 — 104 Partidos
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1.1rem', margin: '0.5rem 0' }}>
            48 equipos · 16 sedes · 11 Junio — 19 Julio 2026
          </p>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', margin: 0 }}>
            Horarios en hora de la Ciudad de México (UTC−6)
          </p>
        </div>
      </section>

      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '3rem 1.25rem' }}>
        <MundialCalendarCTA variant="full" />

        <section style={{ marginBottom: '2rem', padding: '1.5rem', background: 'var(--surface)', borderRadius: '0.75rem', border: '1px solid var(--border)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <label style={{ display: 'block' }}>
              <span style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', marginBottom: '0.35rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Fase</span>
              <select
                value={phase} onChange={(e) => setPhase(e.target.value)}
                style={{ width: '100%', padding: '0.6rem 0.75rem', borderRadius: '0.35rem', background: 'var(--bg)', color: 'white', border: '1px solid var(--border)', fontSize: '0.95rem' }}
              >
                {PHASES.map((p) => <option key={p.value} value={p.value}>{p.label}</option>)}
              </select>
            </label>
            <label style={{ display: 'block' }}>
              <span style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', marginBottom: '0.35rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Sede</span>
              <select
                value={city} onChange={(e) => setCity(e.target.value)}
                style={{ width: '100%', padding: '0.6rem 0.75rem', borderRadius: '0.35rem', background: 'var(--bg)', color: 'white', border: '1px solid var(--border)', fontSize: '0.95rem' }}
              >
                {cities.map((c) => <option key={c} value={c}>{c === 'all' ? 'Todas las sedes' : c}</option>)}
              </select>
            </label>
            <label style={{ display: 'block' }}>
              <span style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', marginBottom: '0.35rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Buscar equipo</span>
              <input
                value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Mexico, Brazil, Spain..."
                style={{ width: '100%', padding: '0.6rem 0.75rem', borderRadius: '0.35rem', background: 'var(--bg)', color: 'white', border: '1px solid var(--border)', fontSize: '0.95rem' }}
              />
            </label>
          </div>
          <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.55)', fontSize: '0.85rem' }}>
            Mostrando <strong style={{ color: '#00D4FF' }}>{filtered.length}</strong> de {matches.length} partidos
          </p>
        </section>

        {grouped.length === 0 ? (
          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.4)', padding: '3rem' }}>
            Sin partidos para esos filtros.
          </p>
        ) : (
          grouped.map(([date, dayMatches]) => {
            const [y, m, d] = date.split('-').map(Number);
            const dt = new Date(y, m - 1, d);
            const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
            const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
            return (
              <div key={date} style={{ marginBottom: '2.5rem' }}>
                <h2 style={{ color: '#00D4FF', fontSize: '1.25rem', marginBottom: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>
                  {dias[dt.getDay()]} {d} de {meses[m - 1]} · {dayMatches.length} {dayMatches.length === 1 ? 'partido' : 'partidos'}
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1rem' }}>
                  {dayMatches.map((m) => <MatchCard key={m.id} match={m} />)}
                </div>
              </div>
            );
          })
        )}
      </main>
    </>
  );
}
