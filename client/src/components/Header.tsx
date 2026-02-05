import React from 'react'

interface HeaderProps {
  userName: string
}

export default function Header({ userName }: HeaderProps) {
  return (
    <div className="header">
      <div className="header-search">
        <input type="text" placeholder="Enter your Email here" className="search-input" />
      </div>

      <div className="header-actions">
        <button className="icon-btn">📧</button>
        <button className="icon-btn">🔔</button>
        <div className="user-profile">
          <div className="user-avatar">JM</div>
          <span className="user-name">{userName} UI</span>
        </div>
      </div>
    </div>
  )
}
