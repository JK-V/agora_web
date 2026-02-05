import React, { useState } from 'react'

const FILTER_OPTIONS = ['Frontend', 'Technology', 'Consumer Staples', 'Media', 'Inflation', 'Healthcare']

interface StockFiltersProps {
  selectedFilters: string[]
  onFilterChange: (filters: string[]) => void
}

export default function StockFilters({ selectedFilters, onFilterChange }: StockFiltersProps) {
  const handleFilterClick = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      onFilterChange(selectedFilters.filter(f => f !== filter))
    } else {
      onFilterChange([...selectedFilters, filter])
    }
  }

  return (
    <div className="stock-filters">
      <div className="filters-container">
        {FILTER_OPTIONS.map(filter => (
          <button
            key={filter}
            className={`filter-pill ${selectedFilters.includes(filter) ? 'active' : ''}`}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  )
}
