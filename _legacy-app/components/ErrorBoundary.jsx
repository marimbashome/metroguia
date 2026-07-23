'use client';

import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    });
    
    // Log to console for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px',
            backgroundColor: 'var(--bg)',
            color: '#E0E0E0',
            fontFamily: 'Inter, sans-serif',
            padding: '2rem',
          }}
        >
          <div
            style={{
              maxWidth: '500px',
              textAlign: 'center',
              padding: '2rem',
              backgroundColor: 'rgba(0, 212, 255, 0.05)',
              border: '1px solid #00D4FF',
              borderRadius: '0.5rem',
            }}
          >
            <h1
              style={{
                fontSize: '1.875rem',
                fontWeight: '700',
                color: '#00D4FF',
                margin: '0 0 1rem 0',
              }}
            >
              Algo salió mal
            </h1>

            <p
              style={{
                fontSize: '1rem',
                lineHeight: '1.5',
                color: '#A0A0A0',
                margin: '0 0 1.5rem 0',
              }}
            >
              Lo sentimos, encontramos un error inesperado. Estamos trabajando para solucionarlo.
            </p>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  padding: '1rem',
                  borderRadius: '0.375rem',
                  marginBottom: '1.5rem',
                  textAlign: 'left',
                  fontSize: '0.75rem',
                  color: '#FF6B6B',
                  fontFamily: 'monospace',
                  overflowX: 'auto',
                  maxHeight: '200px',
                  overflowY: 'auto',
                }}
              >
                <p style={{ margin: '0 0 0.5rem 0', fontWeight: 'bold' }}>Error:</p>
                <p style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                  {this.state.error.toString()}
                </p>
              </div>
            )}

            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}
            >
              <button
                onClick={this.handleReset}
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#00D4FF',
                  color: 'var(--bg)',
                  border: 'none',
                  borderRadius: '0.375rem',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#00B8D4';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#00D4FF';
                }}
              >
                Intentar de nuevo
              </button>

              <a
                href="/"
                style={{
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'transparent',
                  color: '#00D4FF',
                  border: '1px solid #00D4FF',
                  borderRadius: '0.375rem',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  display: 'inline-block',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(0, 212, 255, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                Volver al inicio
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
