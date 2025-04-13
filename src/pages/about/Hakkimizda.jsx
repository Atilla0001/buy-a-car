import React from 'react'
import { Link } from 'react-router-dom'
import './Hakkimizda.css'

const Hakkimizda = () => {
  const stats = [
    { number: '10K+', label: 'Clients Satisfaits' },
    { number: '5K+', label: 'Véhicules Vendus' },
    { number: '15+', label: 'Années d\'Expérience' },
    { number: '24/7', label: 'Support Client' }
  ]

  const team = [
    {
      name: 'Jean Dupont',
      role: 'Fondateur & CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
      description: 'Expert en automobile avec plus de 20 ans d\'expérience dans le secteur.'
    },
    {
      name: 'Marie Laurent',
      role: 'Directrice des Opérations',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80',
      description: 'Spécialiste en gestion d\'entreprise et en développement commercial.'
    },
    {
      name: 'Pierre Martin',
      role: 'Directeur Technique',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      description: 'Expert en diagnostic automobile et en évaluation des véhicules.'
    }
  ]

  const values = [
    {
      icon: '🎯',
      title: 'Transparence',
      description: 'Nous croyons en la transparence totale dans toutes nos transactions.'
    },
    {
      icon: '🤝',
      title: 'Intégrité',
      description: 'L\'honnêteté et l\'éthique sont au cœur de notre entreprise.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'Nous cherchons constamment à améliorer nos services.'
    },
    {
      icon: '🌟',
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque aspect de notre travail.'
    }
  ]

  return (
    <div className="hakkimizda-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>À Propos de Buy A Car</h1>
          <p>Votre partenaire de confiance pour l'achat et la vente de voitures depuis 2020</p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="mission-content">
          <h2>Notre Mission</h2>
          <p>Chez Buy A Car, notre mission est de révolutionner l'expérience d'achat et de vente de véhicules en France. Nous nous engageons à fournir une plateforme transparente, sécurisée et conviviale qui connecte les acheteurs et les vendeurs de manière efficace.</p>
          <div className="mission-values">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <span className="value-icon">{value.icon}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Notre Équipe</h2>
        <div className="team-grid">
          {team.map((member, index) => (
            <div key={index} className="team-card">
              <div className="member-image" style={{ backgroundImage: `url(${member.image})` }}></div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-description">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <h2>Nos Partenaires</h2>
        <div className="partners-grid">
          <div className="partner-logo">BMW</div>
          <div className="partner-logo">Mercedes-Benz</div>
          <div className="partner-logo">Audi</div>
          <div className="partner-logo">Volkswagen</div>
          <div className="partner-logo">Toyota</div>
          <div className="partner-logo">Honda</div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <h2>En Savoir Plus</h2>
        <p>Découvrez comment nous pouvons vous aider à trouver ou vendre votre prochain véhicule</p>
        <Link to="/iletisim" className="cta-button">
          Nous Contacter
        </Link>
      </section>
    </div>
  )
}

export default Hakkimizda 