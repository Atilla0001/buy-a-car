import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Hakkımızda</h3>
          <p>Buy A Car olarak, araç alım satım süreçlerinizi güvenli ve şeffaf bir şekilde yönetiyoruz. Müşteri memnuniyeti odaklı hizmet anlayışımızla yanınızdayız.</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3>Hızlı Bağlantılar</h3>
          <ul>
            <li><Link to="/">Ana Sayfa</Link></li>
            <li><Link to="/arabalar">Araçlar</Link></li>
            <li><Link to="/hizmetler">Hizmetler</Link></li>
            <li><Link to="/iletisim">İletişim</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Hizmetlerimiz</h3>
          <ul>
            <li>Araç Alım Satım</li>
            <li>Araç Değerleme</li>
            <li>Ekspertiz</li>
            <li>Sigorta Hizmetleri</li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>İletişim</h3>
          <ul className="contact-info">
            <li>
              <i className="fas fa-map-marker-alt"></i>
              İstanbul, Türkiye
            </li>
            <li>
              <i className="fas fa-phone"></i>
              +90 (555) 123 45 67
            </li>
            <li>
              <i className="fas fa-envelope"></i>
              info@buyacar.com
            </li>
            <li>
              <i className="fas fa-clock"></i>
              Pazartesi - Cumartesi: 09:00 - 18:00
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Buy A Car. Tüm hakları saklıdır.</p>
        <div className="footer-bottom-links">
          <Link to="/gizlilik">Gizlilik Politikası</Link>
          <Link to="/kullanim-kosullari">Kullanım Koşulları</Link>
          <Link to="/cerez-politikasi">Çerez Politikası</Link>
        </div>
        <p className="creator-credit">Created by Atilla Arslan</p>
      </div>
    </footer>
  )
}

export default Footer 