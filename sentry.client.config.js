const Sentry = require('@sentry/nextjs')
Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
  // Session Replay APAGADO a proposito (2026-08-01). El plan gratuito de Sentry
  // trae 50 grabaciones al mes para TODA la organizacion, y metroguia se comia
  // el 68% de esa cuota: es un sitio publico de SEO donde el video de un
  // visitante anonimo no sirve para operar, y cada error de hidratacion
  // (que Sentry descarta del lado del servidor, sin costo) igual subia una
  // grabacion completa que si costaba. Al dejarlo en 0 la cuota queda libre
  // para las apps donde el video si vale: guest-app y el dashboard.
  // Los errores se siguen reportando normal; lo unico que se apaga es el video.
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 0,
  // `VERCEL_ENV` NO llega al navegador: Next solo inyecta al bundle del cliente
  // las variables con prefijo `NEXT_PUBLIC_`, asi que aqui valia siempre
  // undefined y TODO produccion se reportaba como "development". `NODE_ENV` si
  // se inyecta, y sirve de red de seguridad si Vercel no expone la primera.
  environment:
    process.env.NEXT_PUBLIC_VERCEL_ENV ||
    (process.env.NODE_ENV === 'production' ? 'production' : 'development'),
  initialScope: { tags: { app: 'metroguia', component: 'client' } },
  ignoreErrors: [
    'ResizeObserver loop limit exceeded',
    'ResizeObserver loop completed with undelivered notifications',
    'Non-Error promise rejection captured',
    /Loading chunk \d+ failed/,
  ],
  beforeSend(event) {
    if (event.request?.headers) {
      delete event.request.headers['authorization']
      delete event.request.headers['cookie']
    }
    return event
  },
})
