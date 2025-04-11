import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  // Slider için otomatik geçiş
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Animasyon için görünürlük kontrolü
  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Slider içeriği
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Trouvez la Voiture de Vos Rêves',
      description: 'Notre large gamme de véhicules vous aide à trouver la voiture qui vous convient.'
    },
    {
      image: 'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2083&q=80',
      title: 'Achat et Vente Fiables',
      description: 'Nous facilitons vos transactions automobiles avec des processus d\'achat et de vente sûrs et transparents.'
    },
    {
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Service Professionnel',
      description: 'Notre équipe d\'experts est à vos côtés tout au long de vos processus d\'achat et de vente de véhicules.'
    }
  ]

  // Öne çıkan araçlar
  const featuredCars = [
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

  return (
    <div className="home-container">
      {/* Hero Slider */}
      <section className="hero-slider">
        <div className="slider-container">
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-content">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                <Link to="/arabalar" className="cta-button">Explorer les Voitures</Link>
              </div>
            </div>
          ))}
          <div className="slider-controls">
            {slides.map((_, index) => (
              <button 
                key={index} 
                className={`slider-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Öne Çıkan Araçlar */}
      <section className={`featured-cars ${isVisible ? 'visible' : ''}`}>
        <div className="section-header">
          <h2>Voitures Vedettes</h2>
          <p>Découvrez nos véhicules les plus populaires</p>
        </div>
        <div className="cars-grid">
          {featuredCars.map(car => (
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
                <Link to={`/arabalar/${car.id}`} className="view-details">Voir les Détails</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-container">
          <Link to="/arabalar" className="view-all-button">Voir Toutes les Voitures</Link>
        </div>
      </section>

      {/* Hizmetlerimiz */}
      <section className={`services ${isVisible ? 'visible' : ''}`}>
        <div className="section-header">
          <h2>Nos Services</h2>
          <p>Services professionnels que nous vous offrons</p>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-car"></i>
            </div>
            <h3>Achat et Vente de Voitures</h3>
            <p>Nous facilitons vos transactions automobiles avec des processus d'achat et de vente sûrs et transparents.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-search"></i>
            </div>
            <h3>Recherche de Voitures</h3>
            <p>Nous vous aidons à trouver la voiture qui correspond à vos besoins.</p>
          </div>
          <div className="service-card">
            <div className="service-icon">
              <i className="fas fa-tools"></i>
            </div>
            <h3>Services de Maintenance</h3>
            <p>Nous effectuons l'entretien et la réparation de votre véhicule avec notre équipe d'experts.</p>
          </div>
        </div>
      </section>

      {/* Neden Biz */}
      <section className={`why-us ${isVisible ? 'visible' : ''}`}>
        <div className="section-header">
          <h2>Pourquoi Nous Choisir?</h2>
          <p>Les avantages que nous vous offrons</p>
        </div>
        <div className="advantages-grid">
          <div className="advantage-card">
            <div className="advantage-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Service Fiable</h3>
            <p>Nous sommes à vos côtés avec des années d'expérience et une approche de service fiable.</p>
          </div>
          <div className="advantage-card">
            <div className="advantage-icon">
              <i className="fas fa-hand-holding-usd"></i>
            </div>
            <h3>Prix Compétitifs</h3>
            <p>Nous vous proposons des véhicules adaptés à votre budget avec des prix compétitifs.</p>
          </div>
          <div className="advantage-card">
            <div className="advantage-icon">
              <i className="fas fa-clock"></i>
            </div>
            <h3>Processus Rapide</h3>
            <p>Nous finalisons vos processus d'achat et de vente dans un délai minimum.</p>
          </div>
          <div className="advantage-card">
            <div className="advantage-icon">
              <i className="fas fa-headset"></i>
            </div>
            <h3>Support 24/7</h3>
            <p>Notre service client est toujours à vos côtés pour répondre à vos questions.</p>
          </div>
        </div>
      </section>

      {/* İletişim CTA */}
      <section className={`contact-cta ${isVisible ? 'visible' : ''}`}>
        <div className="cta-content">
          <h2>Nous Sommes à Vos Côtés Dans Vos Processus d'Achat et de Vente de Voitures</h2>
          <p>Contactez-nous dès maintenant pour trouver la voiture de vos rêves ou vendre votre véhicule actuel.</p>
          <Link to="/iletisim" className="cta-button">Nous Contacter</Link>
        </div>
      </section>
    </div>
  )
}

export default Home 
