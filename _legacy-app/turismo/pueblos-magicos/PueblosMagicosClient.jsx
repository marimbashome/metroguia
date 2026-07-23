'use client';

import { useState, useMemo } from 'react';
import { pueblosMagicos } from '@/data/turismo/pueblos-magicos';

export default function PueblosMagicosClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStates, setSelectedStates] = useState([]);

  // Get unique states for filter
  const uniqueStates = [...new Set(pueblosMagicos.map((p) => p.estado))].sort();

  // Filter pueblos based on all criteria
  const filteredPueblos = useMemo(() => {
    return pueblosMagicos.filter((pueblo) => {
      const matchesSearch =
        pueblo.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pueblo.estado.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pueblo.descripcion.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesState = selectedStates.length === 0 || selectedStates.includes(pueblo.estado);

      return matchesSearch && matchesState;
    });
  }, [searchQuery, selectedStates]);

  // Toggle filter selections
  const toggleState = (state) => {
    setSelectedStates((prev) =>
      prev.includes(state) ? prev.filter((s) => s !== state) : [...prev, state]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedStates([]);
  };

  return (
    <main style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section
        style={{
          background: `linear-gradient(135deg, var(--primary) 0%, #8B5CF6 100%)`,
          color: 'white',
          padding: '4rem 2rem',
          textAlign: 'center',
          marginBottom: '3rem',
        }}
      >
        <div style={{ maxWidth: 'var(--maxWidth)', margin: '0 auto' }}>
          <h1
            style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              fontFamily: 'Inter, sans-serif',
            }}
          >
            177 Pueblos Mágicos de México
          </h1>
          <p
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.6',
              maxWidth: '700px',
              margin: '0 auto',
              opacity: 0.95,
            }}
          >
            Explora cada rincón mágico del país con historia, tradición y belleza única.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section style={{ padding: '3rem 2rem', maxWidth: 'var(--maxWidth)', margin: '0 auto' }}>
        {/* Search Bar */}
        <div style={{ marginBottom: '2.5rem' }}>
          <input
            type="text"
            placeholder="Buscar pueblos, estados, características..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              maxWidth: '600px',
              padding: '1rem',
              fontSize: '1rem',
              border: `2px solid var(--border)`,
              borderRadius: '8px',
              background: 'white',
              boxSizing: 'border-box',
              transition: 'border-color 0.3s ease',
              fontFamily: 'Inter, sans-serif',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--primary)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--border)';
            }}
          />
        </div>

        {/* Filters Container */}
        <div style={{ marginBottom: '3rem' }}>
          {/* States Filter */}
          <div style={{ marginBottom: '2rem' }}>
            <h3
              style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'var(--text)',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Estados
            </h3>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
              }}
            >
              {uniqueStates.map((state) => (
                <button
                  key={state}
                  onClick={() => toggleState(state)}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    border: selectedStates.includes(state)
                      ? `2px solid var(--primary)`
                      : `2px solid var(--border)`,
                    background: selectedStates.includes(state)
                      ? `var(--primary)20`
                      : 'white',
                    color: selectedStates.includes(state)
                      ? 'var(--primary)'
                      : 'var(--text-muted)',
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    fontWeight: selectedStates.includes(state) ? '600' : '500',
                    transition: 'all 0.3s ease',
                    fontFamily: 'Inter, sans-serif',
                  }}
                  onMouseEnter={(e) => {
                    if (!selectedStates.includes(state)) {
                      e.currentTarget.style.borderColor = 'var(--primary)';
                      e.currentTarget.style.background = 'var(--primary)10';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!selectedStates.includes(state)) {
                      e.currentTarget.style.borderColor = 'var(--border)';
                      e.currentTarget.style.background = 'white';
                    }
                  }}
                >
                  {state}
                </button>
              ))}
            </div>
          </div>

          {/* Clear Filters Button */}
          {(searchQuery || selectedStates.length > 0) && (
            <button
              onClick={clearFilters}
              style={{
                padding: '0.75rem 1.5rem',
                background: '#EF4444',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.95rem',
                transition: 'all 0.3s ease',
                fontFamily: 'Inter, sans-serif',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#DC2626';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#EF4444';
              }}
            >
              Limpiar filtros
            </button>
          )}
        </div>

        {/* Results Count */}
        <div
          style={{
            padding: '1.5rem',
            background: 'var(--surface)',
            borderRadius: '8px',
            marginBottom: '3rem',
            borderLeftWidth: '4px',
            borderLeftStyle: 'solid',
            borderLeftColor: 'var(--primary)',
          }}
        >
          <p
            style={{
              fontSize: '1.125rem',
              color: 'var(--text)',
              fontWeight: '500',
              margin: 0,
              fontFamily: 'Inter, sans-serif',
            }}
          >
            Mostrando <strong>{filteredPueblos.length}</strong> de <strong>{pueblosMagicos.length}</strong> pueblos
            mágicos
          </p>
        </div>

        {/* Pueblos Grid */}
        {filteredPueblos.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
              gap: '2rem',
            }}
          >
            {filteredPueblos.map((pueblo) => (
              <a
                key={pueblo.slug}
                href={`/turismo/pueblos-magicos/${pueblo.slug}/`}
                style={{
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'block',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    background: 'var(--surface)',
                    border: `1px solid var(--border)`,
                    borderRadius: '8px',
                    padding: '1.5rem',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  {/* Content */}
                  <h3
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: '600',
                      marginBottom: '0.5rem',
                      color: 'var(--text)',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {pueblo.nombre}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.95rem',
                      color: 'var(--text-muted)',
                      marginBottom: '1rem',
                      fontWeight: '500',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {pueblo.estado}
                  </p>

                  <p
                    style={{
                      fontSize: '1rem',
                      lineHeight: '1.6',
                      color: 'var(--text-muted)',
                      marginBottom: '1.5rem',
                      fontFamily: 'Inter, sans-serif',
                    }}
                  >
                    {pueblo.descripcion.substring(0, 120)}...
                  </p>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              background: 'var(--surface)',
              borderRadius: '8px',
            }}
          >
            <p
              style={{
                fontSize: '1.25rem',
                color: 'var(--text-muted)',
                fontWeight: '500',
                marginBottom: '1rem',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              No se encontraron pueblos que coincidan con tu búsqueda.
            </p>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-muted)',
                marginBottom: '1.5rem',
                fontFamily: 'Inter, sans-serif',
              }}
            >
              Intenta cambiar tus filtros o búsqueda.
            </p>
            <button
              onClick={clearFilters}
              style={{
                padding: '0.75rem 1.5rem',
                background: 'var(--primary)',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.95rem',
                transition: 'all 0.3s ease',
                fontFamily: 'Inter, sans-serif',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
              }}
            >
              Ver todos los pueblos
            </button>
          </div>
        )}
      </section>
    </main>
  );
}
