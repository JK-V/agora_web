import React from 'react'

interface PortfolioCardProps {
  company: string
  logo: string
  trend: 'up' | 'down'
  totalShare: string
  totalReturn: string
}

export default function PortfolioCard({ company, logo, trend, totalShare, totalReturn }: PortfolioCardProps) {
  const trendColor = trend === 'up' ? '#10B981' : '#EF4444'
  const trendIcon = trend === 'up' ? '📈' : '📉'

  return (
    <div className="portfolio-card">
      <div className="card-header">
        <div className="logo-section">
          <div className="company-logo">{logo}</div>
          <span className="company-name">{company}</span>
        </div>
        <span className="trend-icon">{trendIcon}</span>
      </div>

      <div className="mini-chart">
        <svg viewBox="0 0 100 40" preserveAspectRatio="none">
          {trend === 'up' ? (
            <polyline points="0,35 25,20 50,28 75,10 100,5" fill="none" stroke={trendColor} strokeWidth="1.5" />
          ) : (
            <polyline points="0,10 25,25 50,18 75,30 100,35" fill="none" stroke={trendColor} strokeWidth="1.5" />
          )}
        </svg>
      </div>

      <div className="card-footer">
        <div className="stat">
          <div className="label">Total Share</div>
          <div className={`value ${trend}`}>+{totalShare}</div>
        </div>
        <div className="stat">
          <div className="label">Total Return</div>
          <div className="value">${totalReturn}</div>
        </div>
      </div>
    </div>
  )
}
