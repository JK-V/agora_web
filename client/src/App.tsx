import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import MyPortfolio from './components/MyPortfolio'
import StockChart from './components/StockChart'
import MyFavorites from './components/MyFavorites'
import MarketTrend from './components/MarketTrend'
import Footer from './components/Footer'
import StockPage from './components/StockPage'

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function isValidPhone(phone: string) {
  return /^\+?\d{7,15}$/.test(phone)
}

export default function App() {
  const [identifier, setIdentifier] = useState('')
  const [step, setStep] = useState<'idle'|'otp'|'verified'|'dashboard'>('idle')
  const [error, setError] = useState<string | null>(null)
  const [otp, setOtp] = useState('')
  const [loading, setLoading] = useState(false)
  const [activeMenu, setActiveMenu] = useState('Dashboard')
  async function requestOtp() {
    setError(null)
    if (!identifier.trim()) return setError('Please enter email or mobile')
    const isEmail = identifier.includes('@')
    if (isEmail) {
      if (!isValidEmail(identifier)) return setError('Invalid email')
    } else {
      if (!isValidPhone(identifier)) return setError('Invalid phone (digits only, optional +)')
    }

    setLoading(true)
    try {
      const res = await fetch('/api/request-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Request failed')
      console.log('Demo OTP:', data.otp)
      setStep('otp')
    } catch (e: any) {
      setError(e.message || 'Failed')
    } finally {
      setLoading(false)
    }
  }

  async function verifyOtp() {
    setError(null)
    if (!otp.trim()) return setError('Enter OTP')
    setLoading(true)
    try {
      const res = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, otp })
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Verification failed')
      setStep('verified')
    } catch (e: any) {
      setError(e.message || 'Failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {step === 'dashboard' ? (
        <div className="dashboard-layout">
          <Sidebar activeMenu={activeMenu} onMenuChange={setActiveMenu} />
          <div className="dashboard-main">
            <Header userName="John Marker" />
            <div className="dashboard-content">
              {activeMenu === 'Dashboard' && (
                <>
                  <div className="content-grid">
                    <div className="left-column">
                      <MyPortfolio />
                      <StockChart />
                    </div>
                    <div className="right-column">
                      <MyFavorites />
                    </div>
                  </div>
                  <MarketTrend />
                </>
              )}
              {activeMenu === 'Stock' && <StockPage />}
            </div>
            <Footer />
          </div>
        </div>
      ) : (
        <div className="wrap">
          <div className="card">
            <div className="brand">
              <div className="logo">LP</div>
              <div>
                <h3 className="title">Login Portal</h3>
                <div className="subtitle">Sign in using email or mobile number</div>
              </div>
            </div>

            {step === 'idle' && (
              <div>
                <div className="field">
                  <label>Email or Mobile</label>
                  <input
                    value={identifier}
                    onChange={e => setIdentifier(e.target.value)}
                    placeholder="you@example.com or +1234567890"
                    type="text"
                  />
                </div>

                {error && <div className="error">{error}</div>}

                <div className="actions">
                  <button className="btn btn-primary" onClick={requestOtp} disabled={loading}>Request OTP</button>
                  <button className="btn btn-ghost" onClick={() => { setIdentifier(''); setError(null) }}>Clear</button>
                </div>

                <div className="note">We will send a one-time code. This demo logs the OTP to the console.</div>
              </div>
            )}

            {step === 'otp' && (
              <div>
                <div className="field">
                  <label>Enter OTP</label>
                  <input
                    value={otp}
                    onChange={e => setOtp(e.target.value)}
                    placeholder="6-digit code"
                    type="text"
                  />
                </div>

                {error && <div className="error">{error}</div>}

                <div className="actions">
                  <button className="btn btn-primary" onClick={verifyOtp} disabled={loading}>Verify OTP</button>
                  <button className="btn btn-ghost" onClick={() => { setStep('idle'); setOtp(''); setError(null) }}>Back</button>
                </div>
              </div>
            )}

            {step === 'verified' && (
              <div className="success">Success — verified! <button onClick={() => setStep('dashboard')} className="btn btn-primary">Go to Dashboard</button></div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
