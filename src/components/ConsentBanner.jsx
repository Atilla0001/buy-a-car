import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ConsentBanner.css';

const ConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    localStorage.setItem('consentAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="consent-banner">
      <div className="consent-content">
        <p>
          Nous utilisons des cookies pour améliorer votre expérience sur notre site. 
          En continuant à naviguer, vous acceptez notre{' '}
          <Link to="/cookie-policy">politique de cookies</Link> et notre{' '}
          <Link to="/privacy">politique de confidentialité</Link>.
        </p>
        <div className="consent-buttons">
          <button onClick={handleAccept} className="accept-button">
            Accepter
          </button>
          <Link to="/cookie-policy" className="settings-button">
            Paramètres
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ConsentBanner; 