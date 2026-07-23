'use client'
import { useState, useEffect } from 'react'

export default function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(true)
  const [showReconnected, setShowReconnected] = useState(false)
  const [wasOffline, setWasOffline] = useState(false)

  useEffect(() => {
    setIsOnline(navigator.onLine)
    
    const handleOnline = () => {
      setIsOnline(true)
      if (wasOffline) {
        setShowReconnected(true)
        setTimeout(() => setShowReconnected(false), 3000)
      }
    }
    
    const handleOffline = () => {
      setIsOnline(false)
      setWasOffline(true)
      // Ask SW to trim caches to save space
      if (navigator.serviceWorker?.controller) {
        navigator.serviceWorker.controller.postMessage({ type: 'TRIM_CACHES' })
      }
    }
    
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)
    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [wasOffline])

  if (isOnline && !showReconnected) return null

  return (
    <div style={{
      position: 'fixed',
      top: '57px',
      left: 0,
      right: 0,
      zIndex: 99,
      padding: '8px 16px',
      backgroundColor: isOnline ? 'rgba(34, 197, 94, 0.15)' : 'var(--surface)',
      borderBottom: `2px solid ${isOnline ? '#22C55E' : 'var(--primary)'}`,
      textAlign: 'center',
      fontSize: '0.8rem',
      fontWeight: 600,
      color: isOnline ? '#22C55E' : 'var(--primary)',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(8px)',
    }}>
      {isOnline ? '✓ Conexión restaurada' : '⚡ Sin conexión — modo offline'}
    </div>
  )
}