import React, { useState } from 'react'
import './Satis.css'

const Satis = () => {
  const [formData, setFormData] = useState({
    marka: '',
    model: '',
    yil: '',
    kilometre: '',
    fiyat: '',
    aciklama: '',
    fotograflar: []
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files)
    setFormData(prevState => ({
      ...prevState,
      fotograflar: files
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage({ type: '', text: '' })

    // Form validation
    const requiredFields = ['marka', 'model', 'yil', 'kilometre', 'fiyat']
    const emptyFields = requiredFields.filter(field => !formData[field])

    if (emptyFields.length > 0) {
      setMessage({
        type: 'error',
        text: 'Lütfen tüm zorunlu alanları doldurun.'
      })
      setIsSubmitting(false)
      return
    }

    try {
      // API call would go here
      await new Promise(resolve => setTimeout(resolve, 1500)) // Simulated API call
      setMessage({
        type: 'success',
        text: 'İlanınız başarıyla yayınlandı!'
      })
      setFormData({
        marka: '',
        model: '',
        yil: '',
        kilometre: '',
        fiyat: '',
        aciklama: '',
        fotograflar: []
      })
    } catch (error) {
      setMessage({
        type: 'error',
        text: 'Bir hata oluştu. Lütfen tekrar deneyin.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="satis-container">
      <div className="satis-form-container">
        <h1>Vendre Votre Voiture</h1>
        <p>Remplissez le formulaire ci-dessous pour vendre votre voiture</p>

        {message.text && (
          <div className={`mesaj ${message.type}`}>
            {message.text}
          </div>
        )}

        <form className="satis-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="marka">Marque</label>
            <input
              type="text"
              id="marka"
              name="marka"
              value={formData.marka}
              onChange={handleChange}
              placeholder="Ex: BMW, Mercedes, Audi"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="model">Modèle</label>
            <input
              type="text"
              id="model"
              name="model"
              value={formData.model}
              onChange={handleChange}
              placeholder="Ex: 320i, C200, A4"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="yil">Année</label>
            <input
              type="number"
              id="yil"
              name="yil"
              value={formData.yil}
              onChange={handleChange}
              placeholder="Ex: 2020"
              min="1900"
              max={new Date().getFullYear()}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="kilometre">Kilométrage</label>
            <input
              type="number"
              id="kilometre"
              name="kilometre"
              value={formData.kilometre}
              onChange={handleChange}
              placeholder="Ex: 50000"
              min="0"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="fiyat">Prix (€)</label>
            <input
              type="number"
              id="fiyat"
              name="fiyat"
              value={formData.fiyat}
              onChange={handleChange}
              placeholder="Ex: 25000"
              min="0"
              required
            />
          </div>

          <div className="form-group full-width">
            <label htmlFor="aciklama">Description</label>
            <textarea
              id="aciklama"
              name="aciklama"
              value={formData.aciklama}
              onChange={handleChange}
              placeholder="Décrivez votre véhicule en détail..."
            />
          </div>

          <div className="form-group full-width">
            <label htmlFor="fotograflar">Photos</label>
            <div className="file-upload">
              <input
                type="file"
                id="fotograflar"
                name="fotograflar"
                onChange={handleFileChange}
                multiple
                accept="image/*"
              />
              <p>Glissez-déposez vos photos ici ou cliquez pour sélectionner</p>
            </div>
          </div>

          <button
            type="submit"
            className="submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Publication en cours...' : 'Publier l\'Annonce'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Satis 