import React from 'react'

interface FavoriteItem {
  logo: string
  company: string
  price: string
  change: string
}

export default function MyFavorites() {
  const favorites: FavoriteItem[] = [
    { logo: '🎨', company: 'Adobe', price: '$201.01', change: '- 201.01' },
    { logo: '🎨', company: 'Adobe', price: '$201.01', change: '- 201.01' },
    { logo: '💙', company: 'Adobe', price: '$201.01', change: '- 201.01' },
    { logo: '❤️', company: 'Adobe', price: '$201.01', change: '- 201.01' },
    { logo: '🎨', company: 'Adobe', price: '$201.01', change: '- 201.01' },
  ]

  return (
    <div className="favorites-section">
      <div className="section-header">
        <h3>My Favorite</h3>
        <a href="#" className="see-all">See All</a>
      </div>
      <div className="favorites-list">
        {favorites.map((fav, idx) => (
          <div key={idx} className="favorite-item">
            <div className="favorite-left">
              <span className="fav-logo">{fav.logo}</span>
              <div className="fav-info">
                <div className="fav-company">{fav.company}</div>
                <div className="fav-company-sub">{fav.company}</div>
              </div>
            </div>
            <div className="favorite-right">
              <div className="fav-price">{fav.price}</div>
              <div className="fav-change">{fav.change}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
