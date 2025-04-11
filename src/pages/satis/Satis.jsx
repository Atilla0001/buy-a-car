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

  const [yukleniyor, setYukleniyor] = useState(false)
  const [mesaj, setMesaj] = useState({ tip: '', icerik: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e) => {
    setFormData(prev => ({
      ...prev,
      fotograflar: Array.from(e.target.files)
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setYukleniyor(true)
    setMesaj({ tip: '', icerik: '' })

    try {
      // Form verilerini kontrol et
      if (!formData.marka || !formData.model || !formData.yil || !formData.kilometre || !formData.fiyat || !formData.aciklama) {
        throw new Error('Lütfen tüm alanları doldurun')
      }

      // API'ye gönderme işlemi burada yapılacak
      // Örnek: await axios.post('/api/satis', formData)

      setMesaj({
        tip: 'success',
        icerik: 'İlanınız başarıyla yayınlandı!'
      })

      // Formu temizle
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
      setMesaj({
        tip: 'error',
        icerik: error.message || 'Bir hata oluştu. Lütfen tekrar deneyin.'
      })
    } finally {
      setYukleniyor(false)
    }
  }

  return (
    <div className="satis-container">
      <h1>Araç Satış İlanı Oluştur</h1>
      <form className="satis-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="marka">Marka</label>
          <input
            type="text"
            id="marka"
            name="marka"
            value={formData.marka}
            onChange={handleChange}
            placeholder="Örn: BMW, Mercedes, Audi"
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
            placeholder="Örn: 320i, C200, A4"
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
            placeholder="Örn: 2020"
            min="1900"
            max={new Date().getFullYear()}
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
            placeholder="Örn: 50000"
            min="0"
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
            placeholder="Örn: 1500000"
            min="0"
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
            placeholder="Aracınız hakkında detaylı bilgi verin"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="fotograflar">Fotoğraflar</label>
          <div className="file-upload">
            <input
              type="file"
              id="fotograflar"
              name="fotograflar"
              onChange={handleFileChange}
              multiple
              accept="image/*"
            />
            <label htmlFor="fotograflar" className="file-upload-label">
              Fotoğraf Seçin veya Sürükleyin
            </label>
          </div>
        </div>

        {mesaj.icerik && (
          <div className={`mesaj ${mesaj.tip}`}>
            {mesaj.icerik}
          </div>
        )}

        <button type="submit" className="submit-btn" disabled={yukleniyor}>
          {yukleniyor ? 'Yayınlanıyor...' : 'İlanı Yayınla'}
        </button>
      </form>
    </div>
  )
}

export default Satis 