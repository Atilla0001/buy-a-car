import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Buy A Car</h3>
            <p>Votre partenaire de confiance pour l'achat et la vente de véhicules.</p>
          </div>
          
          <div className="footer-section">
            <h3>Liens Rapides</h3>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/cars">Voitures</Link></li>
              <li><Link to="/about">À propos</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h3>Contact</h3>
            <ul>
              <li>Email: info@buyacar.com</li>
              <li>Téléphone: +90 555 123 45 67</li>
              <li>Adresse: Istanbul, Turquie</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="footer-bottom">
          <div className="footer-links">
            <Link to="/privacy">Politique de Confidentialité</Link>
            <Link to="/terms-of-use">Conditions d'Utilisation</Link>
            <Link to="/cookie-policy">Politique des Cookies</Link>
          </div>
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} Buy A Car. Tous droits réservés.</p>
          </div>
        </div>
        <p className="developer-credit">Créé par Atilla Arslan</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
