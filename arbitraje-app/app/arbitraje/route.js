import { html } from "./dashboard-html";

// El índice de arbitraje es un HTML autocontenido generado por el pipeline
// en MarimbasHome/Datos/arbitraje-nomada/ (ver su README). Para actualizarlo:
// re-correr el pipeline y regenerar dashboard-html.js con inject-metroguia.py.
// El acceso lo protege middleware.js (solo cuentas autorizadas).
export async function GET() {
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "private, no-store",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
