'use client';

// Track route calculation
export function trackRouteCalculation(origin, destination, city) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'route_calculated', {
      event_category: 'Trip Planner',
      origin_station: origin,
      destination_station: destination,
      city: city,
    });
  }
}

// Track station view
export function trackStationView(stationName, line, city) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'station_viewed', {
      event_category: 'Content',
      station_name: stationName,
      line: line,
      city: city,
    });
  }
}

// Track FIFA page view
export function trackFIFAPageView(page, city) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'fifa_page_viewed', {
      event_category: 'FIFA 2026',
      page_name: page,
      host_city: city,
    });
  }
}

// Track language switch
export function trackLanguageSwitch(fromLang, toLang) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'language_switched', {
      event_category: 'i18n',
      from_language: fromLang,
      to_language: toLang,
    });
  }
}

// Track PWA install
export function trackPWAInstall() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'pwa_installed', {
      event_category: 'PWA',
    });
  }
}

// Track accommodation click
export function trackAccommodationClick(propertyName, station) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'accommodation_clicked', {
      event_category: 'Monetization',
      property_name: propertyName,
      near_station: station,
    });
  }
}
