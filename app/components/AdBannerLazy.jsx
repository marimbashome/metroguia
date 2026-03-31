'use client';

import { useEffect, useRef, useState } from 'react';

export default function AdBannerLazy({ slot, format = 'auto', style = {} }) {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Wait 2 seconds after page load before initializing
    const loadTimer = setTimeout(() => {
      if (!containerRef.current) return;

      // Use IntersectionObserver to only load when in viewport
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isLoaded) {
              setIsLoaded(true);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '50px',
          threshold: 0.1,
        }
      );

      observer.observe(containerRef.current);

      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      };
    }, 2000);

    return () => clearTimeout(loadTimer);
  }, [isLoaded]);

  const insRef = useRef(null);
  const adPushed = useRef(false);

  useEffect(() => {
    if (isLoaded && insRef.current && !adPushed.current) {
      adPushed.current = true;
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        // Silently ignore duplicate push errors
      }
    }
  }, [isLoaded]);

  return (
    <div
      ref={containerRef}
      style={{
        textAlign: 'center',
        margin: '2rem 0',
        minHeight: '90px',
        ...style,
      }}
    >
      {isLoaded ? (
        <ins
          ref={insRef}
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-5779958677522085"
          data-ad-slot={slot}
          data-ad-format={format}
          data-full-width-responsive="true"
        />
      ) : (
        <div
          style={{
            height: '90px',
            backgroundColor: 'rgba(0, 212, 255, 0.05)',
            borderRadius: '0.375rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666',
            fontSize: '0.875rem',
          }}
        >
          Ad loading...
        </div>
      )}
    </div>
  );
}

export function AdBannerLazyInArticle({ slot, style = {} }) {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Wait 2 seconds after page load before initializing
    const loadTimer = setTimeout(() => {
      if (!containerRef.current) return;

      // Use IntersectionObserver to only load when in viewport
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isLoaded) {
              setIsLoaded(true);
              observer.unobserve(entry.target);
            }
          });
        },
        {
          rootMargin: '50px',
          threshold: 0.1,
        }
      );

      observer.observe(containerRef.current);

      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      };
    }, 2000);

    return () => clearTimeout(loadTimer);
  }, [isLoaded]);

  const insRef = useRef(null);
  const adPushed = useRef(false);

  useEffect(() => {
    if (isLoaded && insRef.current && !adPushed.current) {
      adPushed.current = true;
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        // Silently ignore duplicate push errors
      }
    }
  }, [isLoaded]);

  return (
    <div
      ref={containerRef}
      style={{
        textAlign: 'center',
        margin: '1.5rem 0',
        minHeight: '90px',
        ...style,
      }}
    >
      {isLoaded ? (
        <ins
          ref={insRef}
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-5779958677522085"
          data-ad-slot={slot}
          data-ad-format="fluid"
          data-ad-layout="in-article"
        />
      ) : (
        <div
          style={{
            height: '90px',
            backgroundColor: 'rgba(0, 212, 255, 0.05)',
            borderRadius: '0.375rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#666',
            fontSize: '0.875rem',
          }}
        >
          Ad loading...
        </div>
      )}
    </div>
  );
}
