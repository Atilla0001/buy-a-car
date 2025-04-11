import React, { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import './Iletisim.css'

const Iletisim = () => {
  const form = useRef()
  const [gonderildi, setGonderildi] = useState(false)
  const [hata, setHata] = useState(null)
  const [yukleniyor, setYukleniyor] = useState(false)

  // EmailJS'i başlat
  useEffect(() => {
    // EmailJS'i başlatmadan önce bir süre bekleyelim
    const timer = setTimeout(() => {
      emailjs.init("tPxxxxxxxxxxxxxx")
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    setGonderildi(false)
    setHata(null)
    setYukleniyor(true)

    // Form verilerini al
    const formData = new FormData(form.current)
    const data = {
      user_name: formData.get('user_name'),
      user_email: formData.get('user_email'),
      subject: formData.get('subject'),
      message: formData.get('message')
    }

    // Email gönderme işlemi - alternatif yaklaşım
    try {
      emailjs.send(
        'servicexxxxxxxxxxxx',
        'templatexxxxxxxxxxxxx',
        data,
        'tPxxxxxxxxxxxxxxxx'
      )
        .then((result) => {
          console.log('SUCCESS!', result.text)
          setGonderildi(true)
          form.current.reset()
          setYukleniyor(false)
        })
        .catch((error) => {
          console.log('FAILED...', error.text)
          
          // Hata detaylarını kontrol et
          if (error.text && error.text.includes('insufficient authentication scopes')) {
            setHata('Gmail API yetkilendirme hatası. Lütfen EmailJS hesabınızda Gmail servisini yeniden yapılandırın.')
          } else {
            setHata(`Mesajınız gönderilirken bir hata oluştu: ${error.text || 'Bilinmeyen hata'}`)
          }
          
          setYukleniyor(false)
        })
    } catch (error) {
      console.error('Beklenmeyen hata:', error)
      setHata('Beklenmeyen bir hata oluştu. Lütfen daha sonra tekrar deneyin.')
      setYukleniyor(false)
    }
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
            <p>toulouse663831@gmail.com</p>
            <p>destek@arabaalimsatim.com</p>
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="iletisim-form">
          <div className="form-group">
            <label htmlFor="user_name">Adınız Soyadınız</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="user_email">E-posta Adresiniz</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Konu</label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mesajınız</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
            />
          </div>

          {gonderildi && (
            <div className="success-message">
              Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.
            </div>
          )}

          {hata && (
            <div className="error-message">
              {hata}
            </div>
          )}

          <button type="submit" className="submit-btn" disabled={yukleniyor}>
            {yukleniyor ? 'Gönderiliyor...' : 'Gönder'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Iletisim 