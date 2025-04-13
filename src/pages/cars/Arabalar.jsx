import React, { useState } from 'react'
import './Arabalar.css'

const Arabalar = () => {
  const [selectedBrand, setSelectedBrand] = useState('')
  const [selectedModel, setSelectedModel] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const [selectedPrice, setSelectedPrice] = useState('')

  const cars = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      brand: 'BMW',
      model: '320i',
      year: '2022',
      price: '39.063 €',
      features: ['Automatique', 'Essence', 'Berline']
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      brand: 'Mercedes',
      model: 'C200',
      year: '2021',
      price: '42.188 €',
      features: ['Automatique', 'Diesel', 'Berline']
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      brand: 'Audi',
      model: 'A4',
      year: '2023',
      price: '45.313 €',
      features: ['Automatique', 'Essence', 'Berline']
    }
  ]

  const brands = ['BMW', 'Mercedes', 'Audi', 'Volkswagen', 'Renault', 'Peugeot']
  const years = ['2023', '2022', '2021', '2020', '2019']
  const priceRanges = [
    '0 - 20.000 €',
    '20.000 € - 40.000 €',
    '40.000 € - 60.000 €',
    '60.000 € et plus'
  ]

  const filteredCars = cars.filter(car => {
    return (
      (!selectedBrand || car.brand === selectedBrand) &&
      (!selectedYear || car.year === selectedYear) &&
      (!selectedPrice || car.price <= parseInt(selectedPrice))
    )
  })

  return (
    <div className="arabalar-container">
      <h1>Nos Voitures</h1>
      <p>Découvrez notre sélection de véhicules de qualité</p>

      <div className="filters">
        <div className="filter-group">
          <label>Marque</label>
          <select value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
            <option value="">Toutes les marques</option>
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Modèle</label>
          <select value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)}>
            <option value="">Tous les modèles</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Année</label>
          <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
            <option value="">Toutes les années</option>
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Prix</label>
          <select value={selectedPrice} onChange={(e) => setSelectedPrice(e.target.value)}>
            <option value="">Tous les prix</option>
            {priceRanges.map(range => (
              <option key={range} value={range}>{range}</option>
            ))}
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
          <p>Aucun véhicule ne correspond à vos critères de recherche.</p>
        </div>
      )}
    </div>
  )
}

export default Arabalar 