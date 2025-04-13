import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Buy A Car
        </Link>

        <div className={`navbar-menu ${isOpen ? 'active' : ''}`}>
          <Link to="/" className="navbar-link" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/cars" className="navbar-link" onClick={toggleMenu}>
            Cars
          </Link>
          <Link to="/sell" className="navbar-link" onClick={toggleMenu}>
            Sell
          </Link>
          <Link to="/about" className="navbar-link" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/contact" className="navbar-link" onClick={toggleMenu}>
            Contact
          </Link>
        </div>

        <div className="navbar-burger" onClick={toggleMenu}>
          <span className={`burger-line ${isOpen ? 'active' : ''}`}></span>
          <span className={`burger-line ${isOpen ? 'active' : ''}`}></span>
          <span className={`burger-line ${isOpen ? 'active' : ''}`}></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 