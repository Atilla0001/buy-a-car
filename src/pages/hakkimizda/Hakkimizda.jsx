import React from 'react'
import './Hakkimizda.css'

const Hakkimizda = () => {
  return (
    <div className="hakkimizda-container">
      <div className="hakkimizda-content">
        <h1>Hakkımızda</h1>
        
        <section className="hakkimizda-section">
          <h2>Biz Kimiz?</h2>
          <p>
            2024 yılında kurulan Araba Alım Satım platformu olarak, müşterilerimize en iyi hizmeti sunmayı hedefliyoruz. 
            Amacımız, araç alım satım süreçlerini güvenli, şeffaf ve kolay hale getirmektir.
          </p>
        </section>

        <section className="hakkimizda-section">
          <h2>Misyonumuz</h2>
          <p>
            Araç alım satım süreçlerini dijitalleştirerek, müşterilerimize zaman ve maddi kazanç sağlamak. 
            Güvenilir ve şeffaf bir platform sunarak, sektörde öncü olmak.
          </p>
        </section>

        <section className="hakkimizda-section">
          <h2>Vizyonumuz</h2>
          <p>
            Türkiye'nin en büyük ve güvenilir araç alım satım platformu olmak. 
            Teknolojik yeniliklerle sektöre yön vermek ve müşteri memnuniyetini en üst seviyede tutmak.
          </p>
        </section>

        <section className="hakkimizda-section">
          <h2>Neden Biz?</h2>
          <ul className="ozellikler-listesi">
            <li>Güvenli ve şeffaf alım satım süreci</li>
            <li>7/24 müşteri desteği</li>
            <li>Detaylı araç bilgileri ve fotoğraflar</li>
            <li>Ücretsiz ilan yayınlama</li>
            <li>Kolay kullanımlı arayüz</li>
            <li>Mobil uyumlu platform</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Hakkimizda 