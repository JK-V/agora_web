import React, { useState } from 'react'

export default function StockChart() {
  const [timeframe, setTimeframe] = useState('6M')
  const timeframes = ['1M', '3M', '6M', '1Y', '5Y', 'All']

  // Mock candlestick data
  const generateChartData = () => {
    const candles = []
    for (let i = 0; i < 20; i++) {
      const open = 3000 + Math.random() * 2000
      const close = open + (Math.random() - 0.5) * 1000
      const high = Math.max(open, close) + Math.random() * 500
      const low = Math.min(open, close) - Math.random() * 500
      candles.push({ open, close, high, low })
    }
    return candles
  }

  const candles = generateChartData()
  const maxHigh = Math.max(...candles.map(c => c.high))
  const minLow = Math.min(...candles.map(c => c.low))
  const range = maxHigh - minLow

  return (
    <div className="stock-chart-section">
      <div className="chart-header">
        <div className="chart-title-group">
          <h3>Amazon</h3>
          <span className="stock-price">$ 201.01</span>
          <button className="view-all">View all</button>
        </div>
        <div className="timeframe-buttons">
          {timeframes.map(tf => (
            <button
              key={tf}
              className={`timeframe-btn ${timeframe === tf ? 'active' : ''}`}
              onClick={() => setTimeframe(tf)}
            >
              {tf}
            </button>
          ))}
        </div>
      </div>

      <div className="chart-container">
        <svg viewBox="0 0 800 300" className="candlestick-chart">
          {/* Y-axis labels */}
          <g className="y-axis">
            {[0, 0.25, 0.5, 0.75, 1].map((level, i) => {
              const yVal = minLow + (range * level)
              const yPos = 250 - level * 250
              return (
                <g key={i}>
                  <line x1="40" y1={yPos} x2="780" y2={yPos} stroke="#e5e7eb" strokeWidth="1" strokeDasharray="5,5" />
                  <text x="20" y={yPos + 4} fontSize="12" fill="#6b7280" textAnchor="end">
                    ${Math.round(yVal)}
                  </text>
                </g>
              )
            })}
          </g>

          {/* X-axis labels */}
          <g className="x-axis">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, i) => (
              <text key={i} x={40 + (i * 58)} y="290" fontSize="12" fill="#6b7280" textAnchor="middle">
                {month}
              </text>
            ))}
          </g>

          {/* Candlesticks */}
          {candles.map((candle, i) => {
            const x = 60 + i * 35
            const yHigh = 250 - ((candle.high - minLow) / range) * 250
            const yLow = 250 - ((candle.low - minLow) / range) * 250
            const yOpen = 250 - ((candle.open - minLow) / range) * 250
            const yClose = 250 - ((candle.close - minLow) / range) * 250
            const isUp = candle.close >= candle.open
            const color = isUp ? '#10B981' : '#EF4444'
            const bodyTop = Math.min(yOpen, yClose)
            const bodyHeight = Math.abs(yClose - yOpen)

            return (
              <g key={i}>
                {/* Wick */}
                <line x1={x} y1={yHigh} x2={x} y2={yLow} stroke={color} strokeWidth="1" />
                {/* Body */}
                <rect x={x - 6} y={bodyTop} width="12" height={Math.max(bodyHeight, 2)} fill={color} />
              </g>
            )
          })}
        </svg>
      </div>
    </div>
  )
}
