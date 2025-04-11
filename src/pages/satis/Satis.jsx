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
    resimler: []
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
    <div className="satis-container">
      <h1>Aracınızı Satışa Çıkarın</h1>
      <form onSubmit={handleSubmit} className="satis-form">
        <div className="form-group">
          <label htmlFor="marka">Marka</label>
          <input
            type="text"
            id="marka"
            name="marka"
            value={formData.marka}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="model">Model</label>
          <input
            type="text"
            id="model"
            name="model"
            value={formData.model}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="yil">Yıl</label>
          <input
            type="number"
            id="yil"
            name="yil"
            value={formData.yil}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="kilometre">Kilometre</label>
          <input
            type="number"
            id="kilometre"
            name="kilometre"
            value={formData.kilometre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="fiyat">Fiyat (TL)</label>
          <input
            type="number"
            id="fiyat"
            name="fiyat"
            value={formData.fiyat}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="aciklama">Açıklama</label>
          <textarea
            id="aciklama"
            name="aciklama"
            value={formData.aciklama}
            onChange={handleChange}
            rows="4"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="resimler">Araç Fotoğrafları</label>
          <input
            type="file"
            id="resimler"
            name="resimler"
            multiple
            accept="image/*"
          />
        </div>

        <button type="submit" className="submit-btn">
          İlanı Yayınla
        </button>
      </form>
    </div>
  )
}

export default Satis 