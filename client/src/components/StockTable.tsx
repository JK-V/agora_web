import React from 'react'

interface StockRow {
  id: string
  logo: string
  ticker: string
  company: string
  price: string
  change: string
  balance: string
}

interface StockTableProps {
  stocks: StockRow[]
}

export default function StockTable({ stocks }: StockTableProps) {
  return (
    <div className="stock-market-section">
      <div className="section-header">
        <h3>Stock Market</h3>
      </div>

      <div className="stock-table">
        <div className="table-header">
          <div className="col col-logo"></div>
          <div className="col col-name">Name</div>
          <div className="col col-price">Price</div>
          <div className="col col-change">Change</div>
          <div className="col col-balance">Balance</div>
          <div className="col col-watchlist"></div>
          <div className="col col-action">Action</div>
        </div>

        {stocks.map(stock => (
          <div key={stock.id} className="table-row">
            <div className="col col-logo">{stock.logo}</div>
            <div className="col col-name">
              <div className="stock-ticker">{stock.ticker}</div>
              <div className="stock-company">{stock.company}</div>
            </div>
            <div className="col col-price">{stock.price}</div>
            <div className="col col-change">
              <span className="change-negative">{stock.change}</span>
            </div>
            <div className="col col-balance">{stock.balance}</div>
            <div className="col col-watchlist">
              <button className="watchlist-btn">🔖</button>
            </div>
            <div className="col col-action">
              <button className="action-btn">Get Started</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
