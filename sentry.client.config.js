const Sentry = require('@sentry/nextjs')
Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
  replaysSessionSampleRate: 0,
  replaysOnErrorSampleRate: 1.0,
  integrations: [Sentry.replayIntegration({ maskAllText: true, blockAllMedia: true })],
  environment: process.env.VERCEL_ENV || 'development',
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
