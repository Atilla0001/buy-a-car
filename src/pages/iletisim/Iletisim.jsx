import React, { useState } from 'react'
import './Iletisim.css'

const Iletisim = () => {
  const [formData, setFormData] = useState({
    ad: '',
    email: '',
    konu: '',
    mesaj: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form gönderme işlemi burada yapılacak
    console.log('Form verileri:', formData)
  }

  return (
    <div className="iletisim-container">
      <div className="iletisim-content">
        <h1>İletişim</h1>
        
        <div className="iletisim-bilgileri">
          <div className="iletisim-bilgi">
            <h3>Adres</h3>
            <p>Örnek Mahallesi, Örnek Sokak No:123</p>
            <p>İstanbul, Türkiye</p>
          </div>
          
          <div className="iletisim-bilgi">
            <h3>Telefon</h3>
            <p>+90 (212) 123 45 67</p>
            <p>+90 (532) 123 45 67</p>
          </div>
          
          <div className="iletisim-bilgi">
            <h3>E-posta</h3>
            <p>info@arabaalimsatim.com</p>
            <p>destek@arabaalimsatim.com</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="iletisim-form">
          <div className="form-group">
            <label htmlFor="ad">Adınız Soyadınız</label>
            <input
              type="text"
              id="ad"
              name="ad"
              value={formData.ad}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-posta Adresiniz</label>
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
            <label htmlFor="konu">Konu</label>
            <input
              type="text"
              id="konu"
              name="konu"
              value={formData.konu}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="mesaj">Mesajınız</label>
            <textarea
              id="mesaj"
              name="mesaj"
              value={formData.mesaj}
              onChange={handleChange}
              rows="4"
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Gönder
          </button>
        </form>
      </div>
    </div>
  )
}

export default Iletisim 