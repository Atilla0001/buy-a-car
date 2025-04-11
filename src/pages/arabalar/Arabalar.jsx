import React from 'react'
import './Arabalar.css'

const Arabalar = () => {
  const arabalar = [
    {
      id: 1,
      marka: 'BMW',
      model: '320i',
      yil: 2022,
      kilometre: 15000,
      fiyat: 1250000,
      resim: 'https://example.com/bmw.jpg'
    },
    {
      id: 2,
      marka: 'Mercedes',
      model: 'C200',
      yil: 2021,
      kilometre: 25000,
      fiyat: 1150000,
      resim: 'https://example.com/mercedes.jpg'
    },
    {
      id: 3,
      marka: 'Audi',
      model: 'A4',
      yil: 2023,
      kilometre: 5000,
      fiyat: 1350000,
      resim: 'https://example.com/audi.jpg'
    }
  ]

  return (
    <div className="arabalar-container">
      <h1>Araç Listesi</h1>
      <div className="arabalar-grid">
        {arabalar.map(araba => (
          <div key={araba.id} className="araba-kart">
            <div className="araba-resim">
              <img src={araba.resim} alt={`${araba.marka} ${araba.model}`} />
            </div>
            <div className="araba-bilgi">
              <h2>{araba.marka} {araba.model}</h2>
              <p>Yıl: {araba.yil}</p>
              <p>Kilometre: {araba.kilometre}</p>
              <p className="fiyat">{araba.fiyat.toLocaleString('tr-TR')} TL</p>
              <button className="detay-btn">Detayları Gör</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Arabalar 