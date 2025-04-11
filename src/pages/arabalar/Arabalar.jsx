import React, { useState } from 'react'
import './Arabalar.css'

const Arabalar = () => {
  const [selectedBrand, setSelectedBrand] = useState('')
  const [selectedModel, setSelectedModel] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const [selectedPrice, setSelectedPrice] = useState('')

  // Örnek araç verileri
  const cars = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      brand: 'BMW',
      model: '320i',
      year: '2022',
      price: '1.250.000 TL',
      features: ['Automatique', 'Essence', 'Berline']
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      brand: 'Mercedes',
      model: 'C200',
      year: '2021',
      price: '1.350.000 TL',
      features: ['Automatique', 'Diesel', 'Berline']
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      brand: 'Audi',
      model: 'A4',
      year: '2023',
      price: '1.450.000 TL',
      features: ['Automatique', 'Essence', 'Berline']
    }
  ]

  // Filtreleme fonksiyonu
  const filteredCars = cars.filter(car => {
    return (
      (!selectedBrand || car.brand === selectedBrand) &&
      (!selectedModel || car.model === selectedModel) &&
      (!selectedYear || car.year === selectedYear) &&
      (!selectedPrice || car.price === selectedPrice)
    )
  })

  return (
    <div className="cars-container">
      <div className="cars-header">
        <h1>Nos Voitures</h1>
        <p>Découvrez notre sélection de véhicules de qualité</p>
      </div>

      <div className="filters-section">
        <div className="filter-group">
          <label htmlFor="brand">Marque</label>
          <select
            id="brand"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <option value="">Toutes les marques</option>
            <option value="BMW">BMW</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Audi">Audi</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="model">Modèle</label>
          <select
            id="model"
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
          >
            <option value="">Tous les modèles</option>
            <option value="320i">320i</option>
            <option value="C200">C200</option>
            <option value="A4">A4</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="year">Année</label>
          <select
            id="year"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option value="">Toutes les années</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>

        <div className="filter-group">
          <label htmlFor="price">Prix</label>
          <select
            id="price"
            value={selectedPrice}
            onChange={(e) => setSelectedPrice(e.target.value)}
          >
            <option value="">Tous les prix</option>
            <option value="1.250.000 TL">1.250.000 TL</option>
            <option value="1.350.000 TL">1.350.000 TL</option>
            <option value="1.450.000 TL">1.450.000 TL</option>
          </select>
        </div>
      </div>

      <div className="cars-grid">
        {filteredCars.map(car => (
          <div key={car.id} className="car-card">
            <div className="car-image" style={{ backgroundImage: `url(${car.image})` }}>
              <div className="car-price">{car.price}</div>
            </div>
            <div className="car-details">
              <h3>{car.brand} {car.model}</h3>
              <p className="car-year">{car.year}</p>
              <div className="car-features">
                {car.features.map((feature, index) => (
                  <span key={index} className="feature-tag">{feature}</span>
                ))}
              </div>
              <button className="view-details">Voir les Détails</button>
            </div>
          </div>
        ))}
      </div>

      {filteredCars.length === 0 && (
        <div className="no-results">
          <h2>Aucun véhicule trouvé</h2>
          <p>Veuillez ajuster vos critères de recherche</p>
        </div>
      )}
    </div>
  )
}

export default Arabalar 