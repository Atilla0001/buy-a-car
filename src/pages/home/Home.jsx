import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2083&q=80',
      title: 'Bienvenue chez Buy A Car',
      description: 'Votre partenaire de confiance pour l\'achat et la vente de véhicules'
    },
    {
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Des Véhicules de Qualité',
      description: 'Découvrez notre sélection de véhicules premium'
    },
    {
      image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Service Premium',
      description: 'Une équipe d\'experts à votre service'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
        setIsVisible(true)
      }, 500)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const featuredCars = [
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

  return (
    <div className="home-container">
      {/* Hero Slider */}
      <div className="hero-slider">
        <div 
          className="slide"
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        >
          <div className={`slide-content ${isVisible ? 'visible' : ''}`}>
            <h1>{slides[currentSlide].title}</h1>
            <p>{slides[currentSlide].description}</p>
            <Link to="/arabalar" className="cta-button">
              Découvrir les Véhicules
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Cars */}
      <section className="featured-cars">
        <h2>Véhicules en Vedette</h2>
        <div className="cars-grid">
          {featuredCars.map(car => (
            <div key={car.id} className="car-card">
              <div 
                className="car-image"
                style={{ backgroundImage: `url(${car.image})` }}
              >
                <div className="car-price">{car.price}</div>
              </div>
              <div className="car-details">
                <h3>{car.brand} {car.model}</h3>
                <p className="car-year">Année: {car.year}</p>
                <div className="car-features">
                  {car.features.map((feature, index) => (
                    <span key={index} className="feature-tag">{feature}</span>
                  ))}
                </div>
                <Link to="/arabalar" className="view-details">
                  Voir les Détails
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link to="/arabalar" className="view-all-button">
            Voir Tous les Véhicules
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <h2>Nos Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🚗</div>
            <h3>Achat de Véhicules</h3>
            <p>Trouvez le véhicule de vos rêves parmi notre sélection premium</p>
          </div>
          <div className="service-card">
            <div className="service-icon">💰</div>
            <h3>Vente de Véhicules</h3>
            <p>Vendez votre véhicule rapidement et au meilleur prix</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🔍</div>
            <h3>Expertise</h3>
            <p>Bénéficiez d'une expertise professionnelle de votre véhicule</p>
          </div>
          <div className="service-card">
            <div className="service-icon">📋</div>
            <h3>Assurance</h3>
            <p>Protégez votre véhicule avec nos solutions d'assurance</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Pourquoi Nous Choisir</h2>
        <div className="reasons-grid">
          <div className="reason-card">
            <h3>Expertise</h3>
            <p>Notre équipe d'experts automobile vous garantit un service de qualité</p>
          </div>
          <div className="reason-card">
            <h3>Transparence</h3>
            <p>Nous vous fournissons toutes les informations nécessaires pour prendre une décision éclairée</p>
          </div>
          <div className="reason-card">
            <h3>Sécurité</h3>
            <p>Vos transactions sont sécurisées et protégées par nos systèmes avancés</p>
          </div>
          <div className="reason-card">
            <h3>Service Client</h3>
            <p>Notre équipe est disponible 7j/7 pour répondre à toutes vos questions</p>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <h2>Besoin d'Aide ?</h2>
        <p>Notre équipe est là pour vous accompagner dans l'achat ou la vente de votre véhicule</p>
        <Link to="/iletisim" className="cta-button">
          Nous Contacter
        </Link>
      </section>
    </div>
  )
}

export default Home 

