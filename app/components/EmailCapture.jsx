'use client';

import { useState } from 'react';

/**
 * EmailCapture — Notification list signup
 *
 * Posts to Supabase `metroguia_leads` via REST (anon key).
 * Used for cities not yet live ("Coming Soon") and Mundial 2026 countdown
 * pre-launch alerts.
 *
 * Props:
 *   source     — tag saved to row (e.g., 'coming-soon-cities', 'mundial-countdown')
 *   title      — optional heading
 *   subtitle   — optional description
 *   cta        — button label (default 'Avisarme')
 *   compact    — bool, use horizontal inline form instead of stacked
 *   tone       — 'light' (default) | 'forest' (on dark hero backgrounds)
 *
 * Supabase table `metroguia_leads` (assumed):
 *   id uuid default gen_random_uuid() primary key,
 *   email text not null,
 *   source text,
 *   context jsonb,
 *   created_at timestamptz default now()
 */

const SUPABASE_URL = 'https://xqjjdopwinljrnxexpwd.supabase.co';
const SUPABASE_ANON =
  // Public anon key — safe to ship in client bundle (RLS protects the table).
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhxampkb3B3aW5sanJueGV4cHdkIiwicm9sZSI6ImFub24ifQ.PLACEHOLDER';

export default function EmailCapture({
  source = 'general',
  title = '¿Quieres avisarnos cuando abra esta ciudad?',
  subtitle = 'Te escribimos una sola vez cuando el trip planner esté disponible.',
  cta = 'Avisarme',
  compact = false,
  tone = 'light',
  context = null,
}) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [message, setMessage] = useState('');

  const isForest = tone === 'forest';

  async function submit(e) {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Escribe un email válido');
      return;
    }
    setStatus('sending');
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/metroguia_leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          apikey: SUPABASE_ANON,
          Authorization: `Bearer ${SUPABASE_ANON}`,
          Prefer: 'return=minimal',
        },
        body: JSON.stringify({ email, source, context }),
      });
      if (!res.ok && res.status !== 201 && res.status !== 204) {
        throw new Error(`HTTP ${res.status}`);
      }
      setStatus('success');
      setMessage('¡Listo! Te avisamos cuando abra.');
      setEmail('');
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'lead_capture', { source });
      }
    } catch (err) {
      setStatus('error');
      setMessage('No pudimos guardar tu email. Intenta de nuevo.');
    }
  }

  const labelColor = isForest ? 'rgba(255,255,255,0.9)' : 'var(--text)';
  const subColor = isForest ? 'rgba(255,255,255,0.72)' : 'var(--text-muted)';
  const bg = isForest ? 'rgba(255,255,255,0.08)' : 'var(--linen)';
  const inputBg = isForest ? 'rgba(255,255,255,0.92)' : '#FFFFFF';
  const borderColor = isForest
    ? 'rgba(255,255,255,0.2)'
    : 'rgba(31, 58, 46, 0.15)';

  return (
    <div
      style={{
        background: bg,
        border: `1px solid ${borderColor}`,
        borderRadius: 'var(--radius-lg)',
        padding: compact ? '1rem 1.25rem' : '1.5rem 1.75rem',
      }}
    >
      {title && (
        <div
          style={{
            fontSize: compact ? '0.95rem' : '1.1rem',
            fontWeight: 700,
            color: labelColor,
            marginBottom: '0.35rem',
            lineHeight: 1.3,
          }}
        >
          {title}
        </div>
      )}
      {subtitle && (
        <div
          style={{
            fontSize: '0.85rem',
            color: subColor,
            marginBottom: '1rem',
            lineHeight: 1.5,
          }}
        >
          {subtitle}
        </div>
      )}
      <form
        onSubmit={submit}
        style={{
          display: 'flex',
          gap: '0.5rem',
          flexWrap: compact ? 'nowrap' : 'wrap',
        }}
      >
        <input
          type="email"
          required
          placeholder="tu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === 'sending' || status === 'success'}
          style={{
            flex: 1,
            minWidth: compact ? '0' : '200px',
            padding: '0.75rem 1rem',
            borderRadius: 'var(--radius)',
            border: `1px solid ${borderColor}`,
            background: inputBg,
            color: 'var(--text)',
            fontSize: '0.95rem',
            fontFamily: 'inherit',
            outline: 'none',
          }}
        />
        <button
          type="submit"
          disabled={status === 'sending' || status === 'success'}
          style={{
            padding: '0.75rem 1.25rem',
            borderRadius: 'var(--radius)',
            border: 'none',
            background: isForest ? 'var(--amber)' : 'var(--forest)',
            color: isForest ? '#1F3A2E' : '#FFFFFF',
            fontWeight: 700,
            fontSize: '0.9rem',
            cursor: status === 'sending' ? 'wait' : 'pointer',
            fontFamily: 'inherit',
            whiteSpace: 'nowrap',
            opacity: status === 'sending' || status === 'success' ? 0.6 : 1,
          }}
        >
          {status === 'sending' ? 'Enviando…' : status === 'success' ? '✓ Listo' : cta}
        </button>
      </form>
      {message && (
        <div
          role="status"
          style={{
            marginTop: '0.6rem',
            fontSize: '0.8rem',
            color:
              status === 'error'
                ? 'var(--terracotta)'
                : status === 'success'
                ? isForest
                  ? 'var(--amber)'
                  : 'var(--chiapas)'
                : subColor,
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
}
