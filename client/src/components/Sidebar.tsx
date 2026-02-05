import React from 'react'

interface SidebarProps {
  activeMenu: string
  onMenuChange: (menu: string) => void
}

export default function Sidebar({ activeMenu, onMenuChange }: SidebarProps) {
  const mainMenu = ['Dashboard', 'Stock', 'Favorit', 'Wallet']
  const secondaryMenu = ['Profile', 'Contact Us', 'Logout']

  return (
    <div className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-icon">⬢</div>
        <div className="brand-text">Agora</div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          {mainMenu.map(item => (
            <div
              key={item}
              className={`nav-item ${activeMenu === item ? 'active' : ''}`}
              onClick={() => onMenuChange(item)}
            >
              <span className="nav-icon">
                {item === 'Dashboard' && '📊'}
                {item === 'Stock' && '📈'}
                {item === 'Favorit' && '⭐'}
                {item === 'Wallet' && '💼'}
              </span>
              <span className="nav-label">{item}</span>
            </div>
          ))}
        </div>

        <div className="nav-divider"></div>

        <div className="nav-section-header">Our community</div>

        <div className="nav-section">
          {secondaryMenu.map(item => (
            <div
              key={item}
              className={`nav-item ${activeMenu === item ? 'active' : ''}`}
              onClick={() => onMenuChange(item)}
            >
              <span className="nav-icon">
                {item === 'Profile' && '👤'}
                {item === 'Contact Us' && '💬'}
                {item === 'Logout' && '🚪'}
              </span>
              <span className="nav-label">{item}</span>
            </div>
          ))}
        </div>
      </nav>
    </div>
  )
}
