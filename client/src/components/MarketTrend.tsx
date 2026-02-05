import React from 'react'

interface MarketTrendItem {
  logo: string
  name: string
  company: string
  price: string
  change: string
  balance: string
  value: string
}

export default function MarketTrend() {
  const trends: MarketTrendItem[] = [
    { logo: '⭐', name: 'AAPL', company: 'Apple Inc', price: '$ 201.01', change: '- 201.01', balance: '$ 201.01', value: '🔖' },
    { logo: '❤️', name: 'AAPL', company: 'Apple Inc', price: '$ 201.01', change: '- 201.01', balance: '$ 201.01', value: '🔖' },
    { logo: '🎨', name: 'AAPL', company: 'Apple Inc', price: '$ 201.01', change: '- 201.01', balance: '$ 201.01', value: '🔖' },
    { logo: '🎨', name: 'AAPL', company: 'Apple Inc', price: '$ 201.01', change: '- 201.01', balance: '$ 201.01', value: '🔖' },
    { logo: '💙', name: 'AAPL', company: 'Apple Inc', price: '$ 201.01', change: '- 201.01', balance: '$ 201.01', value: '🔖' },
  ]

  return (
    <div className="market-trend-section">
      <div className="section-header">
        <h3>Market Trend</h3>
        <a href="#" className="see-all">See All</a>
      </div>

      <div className="market-table">
        <div className="table-header">
          <div className="col col-logo"></div>
          <div className="col col-name">Name</div>
          <div className="col col-price">Price</div>
          <div className="col col-balance">Balance</div>
          <div className="col col-value">Value</div>
          <div className="col col-action">Action</div>
        </div>

        {trends.map((trend, idx) => (
          <div key={idx} className="table-row">
            <div className="col col-logo">{trend.logo}</div>
            <div className="col col-name">
              <div className="name-badge">{trend.name}</div>
              <div className="company-text">{trend.company}</div>
            </div>
            <div className="col col-price">{trend.price}</div>
            <div className="col col-balance">
              <span className="change-negative">{trend.change}</span>
            </div>
            <div className="col col-value">{trend.balance}</div>
            <div className="col col-action">
              <button className="action-btn">Get Started</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
