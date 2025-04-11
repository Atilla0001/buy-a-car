import React from 'react'
import './Gizlilik.css'

const Gizlilik = () => {
  return (
    <div className="policy-container">
      <div className="policy-content">
        <h1>Gizlilik Politikası</h1>
        <p className="last-updated">Son Güncelleme: 1 Mart 2024</p>

        <section className="policy-section">
          <h2>1. Giriş</h2>
          <p>
            Buy A Car olarak, gizliliğinize saygı duyuyor ve kişisel verilerinizin güvenliğini sağlamak için gerekli tüm önlemleri alıyoruz. 
            Bu gizlilik politikası, web sitemizi kullanırken kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. Toplanan Bilgiler</h2>
          <p>Web sitemizi kullanırken aşağıdaki bilgileri toplayabiliriz:</p>
          <ul>
            <li>Ad, soyad, e-posta adresi, telefon numarası gibi iletişim bilgileri</li>
            <li>Araç alım-satım işlemleri için gerekli bilgiler</li>
            <li>IP adresi, tarayıcı türü, işletim sistemi gibi teknik bilgiler</li>
            <li>Çerezler aracılığıyla toplanan bilgiler</li>
            <li>Web sitemizi nasıl kullandığınıza dair bilgiler</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. Bilgilerin Kullanımı</h2>
          <p>Topladığımız bilgileri aşağıdaki amaçlarla kullanabiliriz:</p>
          <ul>
            <li>Size hizmet sağlamak ve hizmetlerimizi geliştirmek</li>
            <li>İletişim taleplerinize yanıt vermek</li>
            <li>Araç alım-satım süreçlerinizi yönetmek</li>
            <li>Yasal yükümlülüklerimizi yerine getirmek</li>
            <li>Güvenlik ve dolandırıcılık önleme</li>
            <li>Size özel teklifler ve promosyonlar sunmak (izin verirseniz)</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>4. Bilgilerin Paylaşımı</h2>
          <p>
            Kişisel verilerinizi, yasal zorunluluklar dışında, sizin açık izniniz olmadan üçüncü taraflarla paylaşmayız. 
            Verilerinizi aşağıdaki durumlarda paylaşabiliriz:
          </p>
          <ul>
            <li>Yasal bir zorunluluk olduğunda</li>
            <li>Hizmet sağlayıcılarımızla (örneğin, araç değerleme, sigorta şirketleri)</li>
            <li>İş ortaklarımızla (sizin izninizle)</li>
            <li>Şirket birleşmesi veya satın alınması durumunda</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>5. Veri Güvenliği</h2>
          <p>
            Kişisel verilerinizin güvenliğini sağlamak için uygun teknik ve organizasyonel önlemler alıyoruz. 
            Ancak, internet üzerinden hiçbir veri iletiminin %100 güvenli olmadığını unutmayın.
          </p>
        </section>

        <section className="policy-section">
          <h2>6. Çerezler</h2>
          <p>
            Web sitemiz, deneyiminizi geliştirmek için çerezler kullanmaktadır. 
            Çerezler hakkında daha fazla bilgi için <a href="/cerez-politikasi">Çerez Politikamızı</a> inceleyebilirsiniz.
          </p>
        </section>

        <section className="policy-section">
          <h2>7. Haklarınız</h2>
          <p>Kişisel verilerinizle ilgili olarak aşağıdaki haklara sahipsiniz:</p>
          <ul>
            <li>Verilerinize erişim hakkı</li>
            <li>Verilerinizin düzeltilmesini talep etme hakkı</li>
            <li>Verilerinizin silinmesini talep etme hakkı</li>
            <li>Veri işlemeye itiraz etme hakkı</li>
            <li>Veri taşınabilirliği hakkı</li>
            <li>İşleme kısıtlama hakkı</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>8. Çocukların Gizliliği</h2>
          <p>
            Web sitemiz 18 yaşın altındaki kişilere yönelik değildir ve bilerek 18 yaşın altındaki kişilerden kişisel veri toplamayız.
          </p>
        </section>

        <section className="policy-section">
          <h2>9. Politika Değişiklikleri</h2>
          <p>
            Bu gizlilik politikasını zaman zaman güncelleyebiliriz. Önemli değişiklikler olması durumunda, 
            web sitemizde bir bildirim yayınlayacağız ve güncellenmiş politikayı burada paylaşacağız.
          </p>
        </section>

        <section className="policy-section">
          <h2>10. İletişim</h2>
          <p>
            Gizlilik politikamız hakkında sorularınız veya endişeleriniz varsa, lütfen aşağıdaki iletişim bilgilerini kullanarak bizimle iletişime geçin:
          </p>
          <div className="contact-details">
            <p><strong>E-posta:</strong> gizlilik@buyacar.com</p>
            <p><strong>Telefon:</strong> +90 (555) 123 45 67</p>
            <p><strong>Adres:</strong> İstanbul, Türkiye</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Gizlilik 