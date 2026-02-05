import React from 'react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <div className="footer-brand">
            <span className="brand-icon">⬢</span>
            <span className="brand-name">Agora</span>
          </div>
          <p className="footer-desc">
            Agora - Your premier stock trading platform. With powerful analytics and customizable tools, you can easily manage your portfolio and make informed investment decisions.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon">f</a>
            <a href="#" className="social-icon">📷</a>
            <a href="#" className="social-icon">in</a>
          </div>
          <div className="newsletter">
            <label>Subscribe to Newsletter</label>
            <div className="newsletter-input-group">
              <input type="email" placeholder="Enter Your Email Here" />
              <button>→</button>
            </div>
          </div>
        </div>

        <div className="footer-column">
          <h4>Get Started</h4>
          <ul>
            <li><a href="#">Service</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Affiliate Program</a></li>
            <li><a href="#">About Us</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Get Started</h4>
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Platform</a></li>
            <li><a href="#">Workout Library</a></li>
            <li><a href="#">App Design</a></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Get Started</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">2024 Agora Trading Platform</div>
        <div className="footer-social">
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
        </div>
      </div>
    </footer>
  )
}
