'use client';

import { useState, useMemo } from 'react';
import pueblosData from '@/data/turismo/pueblos-magicos';

const regionColors = {
  'Norte': 'hsl(10, 100%, 45%)',
  'Noroeste': 'hsl(30, 100%, 45%)',
  'Noreste': 'hsl(50, 100%, 45%)',
  'Bajío': 'hsl(100, 60%, 45%)',
  'Occidente': 'hsl(140, 70%, 45%)',
  'Centro': 'hsl(180, 80%, 45%)',
  'Golfo': 'hsl(200, 100%, 45%)',
  'Pacífico Sur': 'hsl(260, 70%, 45%)',
  'Sureste': 'hsl(280, 70%, 45%)',
};

export default function PueblosMagicosClient() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);

  // Get unique values for filters
  const uniqueRegions = [...new Set(pueblosData.map((p) => p.region))].sort();
  const uniqueStates = [...new Set(pueblosData.map((p) => p.estado))].sort();
  const uniqueTags = [...new Set(pueblosData.flatMap((p) => p.tags))].sort();

  // Filter pueblos based on all criteria
  const filteredPueblos = useMemo(() => {
    return pueblosData.filter((pueblo) => {
      const matchesSearch =
        pueblo.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pueblo.estado.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pueblo.descripcion.toLowerCase().includes(searchQuery.toLowerCase()) ||
        pueblo.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesRegion = selectedRegions.length === 0 || selectedRegions.includes(pueblo.region);

      const matchesState = selectedStates.length === 0 || selectedStates.includes(pueblo.estado);

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => pueblo.tags.includes(tag));

      return matchesSearch && matchesRegion && matchesState && matchesTags;
    });
  }, [searchQuery, selectedRegions, selectedStates, selectedTags]);

  // Toggle filter selections
  const toggleRegion = (region) => {
    setSelectedRegions((prev) =>
      prev.includes(region) ? prev.filter((r) => r !== region) : [...prev, region]
    );
  };

  const toggleState = (state) => {
    setSelectedStates((prev) =>
      prev.includes(state) ? prev.filter((s) => s !== state) : [...prev, state]
    );
  };

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedRegions([]);
    setSelectedStates([]);
    setSelectedTags([]);
  };

  return (
    <main style={{ background: 'var(--background-light)', minHeight: '100vh' }}>
      {/* Hero Section */}
      <section
        style={{
          background: 'linear-gradient(135deg, hsl(200, 100%, 35%) 0%, hsl(280, 70%, 45%) 100%)',
          color: 'white',
          padding: '4rem 2rem',
          textAlign: 'center',
          marginBottom: '3rem',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h1
            style={{
              fontSize: '3rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              fontFamily: "'Poppins', sans-serif",
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
      <section style={{ padding: '3rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
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
              border: '2px solid var(--border-light)',
              borderRadius: '8px',
              background: 'white',
              boxSizing: 'border-box',
              transition: 'border-color 0.3s ease',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'hsl(200, 100%, 35%)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--border-light)';
            }}
          />
        </div>

        {/* Filters Container */}
        <div style={{ marginBottom: '3rem' }}>
          {/* Regions Filter */}
          <div style={{ marginBottom: '2rem' }}>
            <h3
              style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'var(--text-dark)',
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Regiones
            </h3>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
              }}
            >
              {uniqueRegions.map((region) => (
                <button
                  key={region}
                  onClick={() => toggleRegion(region)}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    border: selectedRegions.includes(region)
                      ? `2px solid ${regionColors[region]}`
                      : '2px solid var(--border-light)',
                    background: selectedRegions.includes(region)
                      ? `${regionColors[region]}20`
                      : 'white',
                    color: selectedRegions.includes(region)
                      ? regionColors[region]
                      : 'var(--text-medium)',
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    fontWeight: selectedRegions.includes(region) ? '600' : '500',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!selectedRegions.includes(region)) {
                      e.currentTarget.style.borderColor = regionColors[region];
                      e.currentTarget.style.background = `${regionColors[region]}10`;
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!selectedRegions.includes(region)) {
                      e.currentTarget.style.borderColor = 'var(--border-light)';
                      e.currentTarget.style.background = 'white';
                    }
                  }}
                >
                  {region}
                </button>
              ))}
            </div>
          </div>

          {/* States Filter */}
          <div style={{ marginBottom: '2rem' }}>
            <h3
              style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'var(--text-dark)',
                fontFamily: "'Poppins', sans-serif",
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
                      ? '2px solid hsl(200, 100%, 35%)'
                      : '2px solid var(--border-light)',
                    background: selectedStates.includes(state)
                      ? 'hsl(200, 100%, 35%)20'
                      : 'white',
                    color: selectedStates.includes(state)
                      ? 'hsl(200, 100%, 35%)'
                      : 'var(--text-medium)',
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    fontWeight: selectedStates.includes(state) ? '600' : '500',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!selectedStates.includes(state)) {
                      e.currentTarget.style.borderColor = 'hsl(200, 100%, 35%)';
                      e.currentTarget.style.background = 'hsl(200, 100%, 35%)10';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!selectedStates.includes(state)) {
                      e.currentTarget.style.borderColor = 'var(--border-light)';
                      e.currentTarget.style.background = 'white';
                    }
                  }}
                >
                  {state}
                </button>
              ))}
            </div>
          </div>

          {/* Tags Filter */}
          <div style={{ marginBottom: '2rem' }}>
            <h3
              style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'var(--text-dark)',
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Características
            </h3>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
              }}
            >
              {uniqueTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  style={{
                    padding: '0.5rem 1rem',
                    borderRadius: '6px',
                    border: selectedTags.includes(tag)
                      ? '2px solid hsl(100, 60%, 45%)'
                      : '2px solid var(--border-light)',
                    background: selectedTags.includes(tag)
                      ? 'hsl(100, 60%, 45%)20'
                      : 'white',
                    color: selectedTags.includes(tag)
                      ? 'hsl(100, 60%, 45%)'
                      : 'var(--text-medium)',
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    fontWeight: selectedTags.includes(tag) ? '600' : '500',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!selectedTags.includes(tag)) {
                      e.currentTarget.style.borderColor = 'hsl(100, 60%, 45%)';
                      e.currentTarget.style.background = 'hsl(100, 60%, 45%)10';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!selectedTags.includes(tag)) {
                      e.currentTarget.style.borderColor = 'var(--border-light)';
                      e.currentTarget.style.background = 'white';
                    }
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* Clear Filters Button */}
          {(searchQuery || selectedRegions.length > 0 || selectedStates.length > 0 || selectedTags.length > 0) && (
            <button
              onClick={clearFilters}
              style={{
                padding: '0.75rem 1.5rem',
                background: 'hsl(0, 100%, 50%)',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.95rem',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'hsl(0, 100%, 45%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'hsl(0, 100%, 50%)';
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
            background: 'hsl(200, 100%, 50%)20',
            borderRadius: '8px',
            marginBottom: '3rem',
            borderLeftWidth: '4px',
            borderLeftStyle: 'solid',
            borderLeftColor: 'hsl(200, 100%, 35%)',
          }}
        >
          <p
            style={{
              fontSize: '1.125rem',
              color: 'var(--text-dark)',
              fontWeight: '500',
              margin: 0,
            }}
          >
            Mostrando <strong>{filteredPueblos.length}</strong> de <strong>{pueblosData.length}</strong> pueblos mágicos
          </p>
        </div>

        {/* Pueblos Grid */}
        {filteredPueblos.length > 0 ? (
          <div className="grid-3" style={{ gap: '2rem' }}>
            {filteredPueblos.map((pueblo) => (
              <div
                key={pueblo.id}
                className="card"
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  borderTopWidth: '4px',
                  borderTopStyle: 'solid',
                  borderTopColor: regionColors[pueblo.region],
                  transition: 'all 0.3s ease',
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
                {/* Region Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: regionColors[pueblo.region],
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    fontSize: '0.8125rem',
                    fontWeight: '600',
                    zIndex: 10,
                  }}
                >
                  {pueblo.region}
                </div>

                {/* Content */}
                <h3
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    color: 'var(--text-dark)',
                    fontFamily: "'Poppins', sans-serif",
                    paddingRight: '9rem',
                  }}
                >
                  {pueblo.nombre}
                </h3>

                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--text-medium)',
                    marginBottom: '1rem',
                    fontWeight: '500',
                  }}
                >
                  {pueblo.estado}
                </p>

                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    color: 'var(--text-medium)',
                    marginBottom: '1.5rem',
                  }}
                >
                  {pueblo.descripcion}
                </p>

                {/* Tags */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  {pueblo.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        background: 'var(--bg-light)',
                        color: 'var(--text-medium)',
                        padding: '0.35rem 0.75rem',
                        borderRadius: '4px',
                        fontSize: '0.8125rem',
                        fontWeight: '500',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Info */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '1rem',
                    borderTopWidth: '1px',
                    borderTopStyle: 'solid',
                    borderTopColor: 'var(--border-light)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-light)',
                    }}
                  >
                    Población: {pueblo.poblacion}
                  </span>
                  <span
                    style={{
                      fontSize: '0.8125rem',
                      color: regionColors[pueblo.region],
                      fontWeight: '600',
                    }}
                  >
                    {pueblo.coordenadas.lat.toFixed(2)}°, {pueblo.coordenadas.lng.toFixed(2)}°
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: 'center',
              padding: '4rem 2rem',
              background: 'var(--bg-light)',
              borderRadius: '8px',
            }}
          >
            <p
              style={{
                fontSize: '1.25rem',
                color: 'var(--text-medium)',
                fontWeight: '500',
                marginBottom: '1rem',
              }}
            >
              No se encontraron pueblos que coincidan con tu búsqueda.
            </p>
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-light)',
                marginBottom: '1.5rem',
              }}
            >
              Intenta cambiar tus filtros o búsqueda.
            </p>
            <button
              onClick={clearFilters}
              style={{
                padding: '0.75rem 1.5rem',
                background: 'hsl(200, 100%, 35%)',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '0.95rem',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'hsl(200, 100%, 30%)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'hsl(200, 100%, 35%)';
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
