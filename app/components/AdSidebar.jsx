'use client';

import { useEffect, useRef, useState } from 'react';

/**
 * AdSidebar — Desktop-only sticky sidebar ad unit
 * Uses IntersectionObserver for lazy loading
 * Only renders on screens >= 1024px via CSS
 */
export default function AdSidebar({ slot, style = {} }) {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const insRef = useRef(null);
  const adPushed = useRef(false);

  useEffect(() => {
    // Only load on desktop
    if (typeof window !== 'undefined' && window.innerWidth < 1024) return;

    const loadTimer = setTimeout(() => {
      if (!containerRef.current) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isLoaded) {
              setIsLoaded(true);
              observer.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '100px', threshold: 0.1 }
      );

      observer.observe(containerRef.current);

      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      };
    }, 2500);

    return () => clearTimeout(loadTimer);
  }, [isLoaded]);

  useEffect(() => {
    if (isLoaded && insRef.current && !adPushed.current) {
      adPushed.current = true;
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        // Silently ignore
      }
    }
  }, [isLoaded]);

  return (
    <div
      ref={containerRef}
      style={{
        display: 'none',
        position: 'sticky',
        top: '5rem',
        minWidth: '160px',
        maxWidth: '300px',
        minHeight: '250px',
        ...style,
      }}
      className="ad-sidebar"
    >
      {isLoaded ? (
        <ins
          ref={insRef}
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-5779958677522085"
          data-ad-slot={slot}
          data-ad-format="vertical"
          data-full-width-responsive="false"
        />
      ) : (
        <div style={{
          height: '250px',
          backgroundColor: 'rgba(0, 212, 255, 0.03)',
          borderRadius: 'var(--radius)',
          border: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-dim)',
          fontSize: '0.75rem',
        }}>
          Ad
        </div>
      )}

      {/* CSS to show only on desktop */}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (min-width: 1024px) {
          .ad-sidebar { display: block !important; }
        }
      `}} />
    </div>
  );
}
