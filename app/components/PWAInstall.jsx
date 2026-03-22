'use client';

import { useEffect, useState } from 'react';

export default function PWAInstall() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later
      setDeferredPrompt(e);
      // Show the install banner
      setShowBanner(true);
    };

    const handleAppInstalled = () => {
      // Hide banner after successful installation
      setShowBanner(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) {
      return;
    }

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === 'accepted') {
      setShowBanner(false);
      setDeferredPrompt(null);
    }
  };

  const handleDismiss = () => {
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  const bannerStyles = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#14141F',
    borderTop: '2px solid #F5A623',
    padding: '16px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '12px',
    zIndex: 1000,
    boxShadow: '0 -4px 12px rgba(0, 0, 0, 0.3)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  };

  const contentStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    flex: 1,
  };

  const textStyles = {
    color: '#FFFFFF',
    fontSize: '14px',
    margin: 0,
    fontWeight: '500',
    letterSpacing: '0.3px',
  };

  const buttonGroupStyles = {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
  };

  const installButtonStyles = {
    backgroundColor: '#F5A623',
    color: '#0A0A0F',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'background-color 0.2s ease',
  };

  const dismissButtonStyles = {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    border: 'none',
    padding: '8px 12px',
    fontSize: '18px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'opacity 0.2s ease',
    opacity: 0.7,
  };

  return (
    <div style={bannerStyles}>
      <div style={contentStyles}>
        <p style={textStyles}>
          📱 Instala MetroGuia para usar sin internet
        </p>
      </div>
      <div style={buttonGroupStyles}>
        <button
          onClick={handleInstall}
          style={installButtonStyles}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#E59412';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#F5A623';
          }}
        >
          Instalar
        </button>
        <button
          onClick={handleDismiss}
          style={dismissButtonStyles}
          onMouseEnter={(e) => {
            e.target.style.opacity = '1';
          }}
          onMouseLeave={(e) => {
            e.target.style.opacity = '0.7';
          }}
          aria-label="Dismiss install banner"
        >
          ×
        </button>
      </div>
    </div>
  );
}
