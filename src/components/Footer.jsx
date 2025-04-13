import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Buy A Car</h3>
          <p>Your trusted partner for buying and selling cars</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/cars">Cars</Link>
          <Link to="/sell">Sell</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-section">
          <h3>Legal</h3>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms-of-use">Terms of Use</Link>
          <Link to="/cookie-policy">Cookie Policy</Link>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@buyacar.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Car Street, Auto City</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Buy A Car. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer 