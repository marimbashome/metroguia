/**
 * POST /api/mundial/subscribe
 *
 * Body: { email: string, team_filter?: 'mexico'|'all'|'azteca' }
 * Inserta en la tabla Supabase `mundial_subscribers`.
 *
 * Crea la tabla en Supabase con:
 *   CREATE TABLE mundial_subscribers (
 *     id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
 *     email TEXT UNIQUE NOT NULL,
 *     team_filter TEXT DEFAULT 'mexico',
 *     created_at TIMESTAMPTZ DEFAULT NOW()
 *   );
 *   ALTER TABLE mundial_subscribers ENABLE ROW LEVEL SECURITY;
 *   CREATE POLICY "Anon insert" ON mundial_subscribers FOR INSERT WITH CHECK (true);
 *
 * Variables de entorno necesarias en Vercel:
 *   - SUPABASE_URL  (ej: https://xqjjdopwinljrnxexpwd.supabase.co)
 *   - SUPABASE_ANON_KEY  (anon public key)
 */
module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'POST only' });
    return;
  }

  try {
    const SUPABASE_URL = process.env.SUPABASE_URL || 'https://xqjjdopwinljrnxexpwd.supabase.co';
    const SUPABASE_ANON = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!SUPABASE_ANON) {
      res.status(500).json({ error: 'SUPABASE_ANON_KEY not configured' });
      return;
    }

    const body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
    const email = (body.email || '').trim().toLowerCase();
    const team_filter = (body.team_filter || 'mexico').toLowerCase();

    if (!email || !email.includes('@') || email.length > 200) {
      res.status(400).json({ error: 'invalid email' });
      return;
    }
    if (!['mexico', 'all', 'azteca'].includes(team_filter)) {
      res.status(400).json({ error: 'invalid team_filter (use mexico|all|azteca)' });
      return;
    }

    const r = await fetch(`${SUPABASE_URL}/rest/v1/mundial_subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: SUPABASE_ANON,
        Authorization: `Bearer ${SUPABASE_ANON}`,
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({ email, team_filter }),
    });

    if (r.status === 409) {
      res.status(200).json({ ok: true, already_registered: true });
      return;
    }
    if (!r.ok && r.status !== 201 && r.status !== 204) {
      const text = await r.text();
      res.status(502).json({ error: 'supabase error', status: r.status, detail: text.slice(0, 300) });
      return;
    }

    res.status(200).json({ ok: true, email, team_filter });
  } catch (e) {
    res.status(500).json({ error: 'failed', detail: String(e.message || e) });
  }
};
