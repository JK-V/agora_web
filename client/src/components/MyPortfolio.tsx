import React from 'react'
import PortfolioCard from './PortfolioCard'

export default function MyPortfolio() {
  const portfolios = [
    { company: 'Adobe', logo: '🎨', trend: 'up', totalShare: '201.01', totalReturn: '201.01' },
    { company: 'Adobe', logo: '🎨', trend: 'down', totalShare: '201.01', totalReturn: '201.01' },
    { company: 'Adobe', logo: '💙', trend: 'up', totalShare: '201.01', totalReturn: '201.01' },
    { company: 'Adobe', logo: '❤️', trend: 'down', totalShare: '201.01', totalReturn: '201.01' },
  ]

  return (
    <div className="portfolio-section">
      <div className="section-header">
        <h2>My Portfolio</h2>
      </div>
      <div className="portfolio-grid">
        {portfolios.map((p, idx) => (
          <PortfolioCard key={idx} {...p} />
        ))}
      </div>
    </div>
  )
}
