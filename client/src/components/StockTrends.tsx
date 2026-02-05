import React from 'react'

interface TrendItem {
  logo: string
  ticker: string
  company: string
  trendLine: string
}

export default function StockTrends() {
  const trends: TrendItem[] = [
    { logo: '⭐', ticker: 'AAPL', company: 'Apple Inc', trendLine: '📈' },
    { logo: '🎨', ticker: 'AAPL', company: 'Apple Inc', trendLine: '📈' },
    { logo: '💙', ticker: 'AAPL', company: 'Apple Inc', trendLine: '📈' },
    { logo: '❤️', ticker: 'AAPL', company: 'Apple Inc', trendLine: '📈' },
    { logo: '🎨', ticker: 'AAPL', company: 'Apple Inc', trendLine: '📈' },
    { logo: '🎯', ticker: 'AAPL', company: 'Apple Inc', trendLine: '📈' },
  ]

  return (
    <div className="stock-trends-section">
      <div className="section-header">
        <h3>Stock Market</h3>
        <a href="#" className="see-all">See All</a>
      </div>

      <div className="trends-grid">
        {trends.map((trend, idx) => (
          <div key={idx} className="trend-card">
            <div className="trend-logo">{trend.logo}</div>
            <div className="trend-info">
              <div className="trend-ticker">{trend.ticker}</div>
              <div className="trend-company">{trend.company}</div>
            </div>
            <div className="trend-chart">
              <svg viewBox="0 0 60 30" preserveAspectRatio="none">
                <polyline
                  points="0,25 10,15 20,20 30,8 40,12 50,5 60,2"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
