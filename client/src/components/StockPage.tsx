import React, { useState } from 'react'
import StockFilters from './StockFilters'
import StockTable from './StockTable'
import StockTrends from './StockTrends'

const MOCK_STOCKS = [
  { id: '1', logo: '⭐', ticker: 'AAPL', company: 'Apple Inc', price: '$ 201.01', change: '- 201.01', balance: '$ 201.01' },
  { id: '2', logo: '🎨', ticker: 'AAPL', company: 'Apple Inc', price: '$ 201.01', change: '- 201.01', balance: '$ 201.01' },
  { id: '3', logo: '🎨', ticker: 'AAPL', company: 'Apple Inc', price: '$ 201.01', change: '- 201.01', balance: '$ 201.01' },
  { id: '4', logo: '🎨', ticker: 'AAPL', company: 'Apple Inc', price: '$ 201.01', change: '- 201.01', balance: '$ 201.01' },
  { id: '5', logo: '💙', ticker: 'AAPL', company: 'Apple Inc', price: '$ 201.01', change: '- 201.01', balance: '$ 201.01' },
  { id: '6', logo: '🎨', ticker: 'AAPL', company: 'Apple Inc', price: '$ 201.01', change: '- 201.01', balance: '$ 201.01' },
  { id: '7', logo: '❤️', ticker: 'AAPL', company: 'Apple Inc', price: '$ 201.01', change: '- 201.01', balance: '$ 201.01' },
  { id: '8', logo: '🎨', ticker: 'AAPL', company: 'Apple Inc', price: '$ 201.01', change: '- 201.01', balance: '$ 201.01' },
  { id: '9', logo: '🎨', ticker: 'AAPL', company: 'Apple Inc', price: '$ 201.01', change: '- 201.01', balance: '$ 201.01' },
]

export default function StockPage() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  return (
    <div className="stock-page">
      <div className="stock-page-header">
        <h1>Stock</h1>
      </div>

      <StockFilters selectedFilters={selectedFilters} onFilterChange={setSelectedFilters} />

      <div className="stock-content-grid">
        <div className="stock-main">
          <StockTable stocks={MOCK_STOCKS} />
        </div>
        <div className="stock-sidebar">
          <StockTrends />
        </div>
      </div>
    </div>
  )
}
