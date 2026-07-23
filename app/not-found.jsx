export const metadata = {
  title: 'Página no encontrada',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <section className="section not-found">
      <div className="container-narrow not-found-inner">
        <p className="not-found-code">404</p>
        <h1>No encontramos esa página</h1>
        <p className="not-found-copy">
          La estación, línea o ruta que buscas no existe o cambió de dirección.
        </p>
        <div className="not-found-links">
          <a href="/" className="btn btn-primary">Ir al inicio</a>
          <a href="/rutas/" className="btn btn-ghost">Ver rutas</a>
          <a href="/lineas/" className="btn btn-ghost">Ver líneas</a>
        </div>
      </div>

      <style>{`
        .not-found { padding: var(--space-8) 0; }
        .not-found-inner { text-align: center; }
        .not-found-code {
          font-family: var(--font-display);
          font-size: 4rem;
          font-weight: 800;
          color: var(--amber);
          margin: 0;
          line-height: 1;
        }
        .not-found-copy { color: var(--text-muted); margin-bottom: var(--space-5); }
        .not-found-links { display: flex; gap: var(--space-3); justify-content: center; flex-wrap: wrap; }
      `}</style>
    </section>
  )
}
