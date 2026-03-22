'use client';

import { useEffect } from 'react';

export default function AdBanner({ slot, format = 'auto', style = {} }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error('AdSense script error:', error);
    }
  }, [slot]);

  return (
    <div style={{ textAlign: 'center', margin: '2rem 0', minHeight: '90px', ...style }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}

export function AdBannerInArticle({ slot, style = {} }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error('AdSense script error:', error);
    }
  }, [slot]);

  return (
    <div style={{ textAlign: 'center', margin: '1.5rem 0', minHeight: '90px', ...style }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format="fluid"
        data-ad-layout="in-article"
      />
    </div>
  );
}
