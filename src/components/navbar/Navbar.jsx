import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        Buy A Car
      </Link>
      
      <button className="mobile-menu-btn" onClick={toggleMenu}>
        ☰
      </button>

      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Accueil</Link></li>
        <li><Link to="/cars" onClick={() => setIsMenuOpen(false)}>Voitures</Link></li>
        <li><Link to="/sell" onClick={() => setIsMenuOpen(false)}>Vendre</Link></li>
        <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>À propos</Link></li>
        <li><Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar 