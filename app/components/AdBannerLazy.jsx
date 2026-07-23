'use client';

// Neutralizado 2026-07-22: AdSense rechazado ("contenido de bajo valor") + slot roto
// ("Ad loading..." perpetuo visible al usuario, ~220 errores en Sentry).
// Los componentes quedan como no-op para no romper los 500+ imports existentes;
// se retiran por completo en el rebuild-v2 (Planes/MetroGuia_Rebuild_Transporte_2026-07-22.md).
export default function AdBannerLazy() {
  return null;
}

export function AdBannerLazyInArticle() {
  return null;
}
