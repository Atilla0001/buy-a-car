import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import './Iletisim.css'

const Iletisim = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage('')

    try {
      await emailjs.send(
        'service_id',
        'template_id',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message
        },
        'public_key'
      )

      setMessage('Votre message a été envoyé avec succès !')
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      setMessage('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="iletisim-container">
      <div className="iletisim-header">
        <h1>Contactez-Nous</h1>
        <p>Nous sommes là pour répondre à toutes vos questions</p>
      </div>

      <div className="iletisim-content">
        <div className="contact-info">
          <h2>Nos Coordonnées</h2>
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <p>123 Avenue des Champs-Élysées<br />75008 Paris, France</p>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <p>+33 1 23 45 67 89</p>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <p>contact@buyacar.fr</p>
          </div>
          <div className="info-item">
            <i className="fas fa-clock"></i>
            <p>Lundi - Vendredi: 9h00 - 18h00<br />Samedi: 10h00 - 16h00</p>
          </div>
        </div>

        <div className="contact-form">
          <h2>Envoyez-nous un Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nom</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              />
            </div>

            {message && (
              <div className={`message ${message.includes('succès') ? 'success' : 'error'}`}>
                {message}
              </div>
            )}

            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Envoi en cours...' : 'Envoyer le Message'}
            </button>
          </form>
        </div>
      </div>

      <div className="map-container">
        <h2>Notre Localisation</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.873790979288475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc4f1b3c0a1%3A0x5f0d5b5b5b5b5b5b!2sChamps-%C3%89lys%C3%A9es!5e0!3m2!1sfr!2sfr!4v1647881234567!5m2!1sfr!2sfr"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}

export default Iletisim 