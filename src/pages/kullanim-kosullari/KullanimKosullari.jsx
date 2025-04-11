import React from 'react'
import './KullanimKosullari.css'

const KullanimKosullari = () => {
  return (
    <div className="policy-container">
      <div className="policy-content">
        <h1>Kullanım Koşulları</h1>
        <p className="last-updated">Son Güncelleme: 1 Mart 2024</p>

        <section className="policy-section">
          <h2>1. Giriş</h2>
          <p>
            Buy A Car web sitesini kullanarak aşağıdaki kullanım koşullarını kabul etmiş olursunuz. 
            Bu koşulları kabul etmiyorsanız, lütfen web sitemizi kullanmayınız.
          </p>
        </section>

        <section className="policy-section">
          <h2>2. Hizmet Kullanımı</h2>
          <p>
            Buy A Car, araç alım-satım hizmetleri sunan bir platformdur. Web sitemizi kullanarak:
          </p>
          <ul>
            <li>Araç ilanlarını görüntüleyebilirsiniz</li>
            <li>Araç alım-satım taleplerinde bulunabilirsiniz</li>
            <li>İletişim formunu kullanarak bizimle iletişime geçebilirsiniz</li>
            <li>Hizmetlerimiz hakkında bilgi alabilirsiniz</li>
          </ul>
          <p>
            Web sitemizi yalnızca yasal amaçlar için kullanmanız gerekmektedir. 
            Aşağıdaki faaliyetler kesinlikle yasaktır:
          </p>
          <ul>
            <li>Yanlış veya yanıltıcı bilgi sağlamak</li>
            <li>Başkalarının haklarını ihlal etmek</li>
            <li>Zararlı yazılım veya virüs yaymak</li>
            <li>Web sitemizin güvenliğini tehlikeye atmak</li>
            <li>Web sitemizi kötüye kullanmak</li>
          </ul>
        </section>

        <section className="policy-section">
          <h2>3. Hesap Oluşturma</h2>
          <p>
            Bazı hizmetlerimizi kullanmak için hesap oluşturmanız gerekebilir. 
            Hesap oluştururken doğru ve güncel bilgiler sağlamanız gerekmektedir. 
            Hesap bilgilerinizin güvenliğinden siz sorumlusunuz.
          </p>
        </section>

        <section className="policy-section">
          <h2>4. Fikri Mülkiyet</h2>
          <p>
            Web sitemizdeki tüm içerik (metin, grafik, logo, düğme simgeleri, görseller, ses klipleri, 
            dijital indirmeler, veri derlemeleri ve yazılım dahil) Buy A Car'ın mülkiyetindedir ve 
            telif hakkı ve diğer fikri mülkiyet yasaları tarafından korunmaktadır.
          </p>
          <p>
            Web sitemizin içeriğini, önceden yazılı izin almadan kopyalayamaz, değiştiremez, 
            dağıtamaz, satamaz, lisanslayamaz veya türev çalışmalar oluşturamazsınız.
          </p>
        </section>

        <section className="policy-section">
          <h2>5. Üçüncü Taraf Bağlantıları</h2>
          <p>
            Web sitemiz, üçüncü taraf web sitelerine bağlantılar içerebilir. Bu bağlantılar yalnızca 
            bilgi amaçlıdır ve bu web sitelerinin içeriği üzerinde hiçbir kontrolümüz yoktur. 
            Bu web sitelerinin kullanımı kendi kullanım koşullarına tabidir.
          </p>
        </section>

        <section className="policy-section">
          <h2>6. Sorumluluk Reddi</h2>
          <p>
            Web sitemiz "olduğu gibi" sunulmaktadır. Web sitemizin kullanımından kaynaklanan 
            herhangi bir doğrudan, dolaylı, arızi, özel veya sonuç olarak ortaya çıkan zararlardan 
            sorumlu değiliz.
          </p>
          <p>
            Web sitemizdeki bilgilerin doğruluğunu, eksiksizliğini veya güncelliğini garanti etmiyoruz. 
            Web sitemizi kullanarak elde edilen bilgilere güvenmek kendi sorumluluğunuzdadır.
          </p>
        </section>

        <section className="policy-section">
          <h2>7. Tazminat</h2>
          <p>
            Web sitemizi kullanımınızdan kaynaklanan herhangi bir iddia, dava, yükümlülük, 
            zarar veya giderden Buy A Car'ı ve yöneticilerini, çalışanlarını ve temsilcilerini 
            tazmin etmeyi kabul edersiniz.
          </p>
        </section>

        <section className="policy-section">
          <h2>8. Koşullarda Değişiklik</h2>
          <p>
            Bu kullanım koşullarını herhangi bir zamanda değiştirme hakkını saklı tutarız. 
            Değişiklikler, web sitemizde yayınlandıktan sonra geçerli olacaktır. 
            Web sitemizi kullanmaya devam ederek güncellenmiş koşulları kabul etmiş olursunuz.
          </p>
        </section>

        <section className="policy-section">
          <h2>9. Uygulanacak Hukuk</h2>
          <p>
            Bu kullanım koşulları, Türkiye Cumhuriyeti yasalarına tabidir ve bu yasalara göre 
            yorumlanacaktır. Bu koşullarla ilgili herhangi bir anlaşmazlık, İstanbul mahkemelerinin 
            münhasır yargı yetkisine tabi olacaktır.
          </p>
        </section>

        <section className="policy-section">
          <h2>10. İletişim</h2>
          <p>
            Kullanım koşullarımız hakkında sorularınız veya endişeleriniz varsa, lütfen aşağıdaki 
            iletişim bilgilerini kullanarak bizimle iletişime geçin:
          </p>
          <div className="contact-details">
            <p><strong>E-posta:</strong> kosullar@buyacar.com</p>
            <p><strong>Telefon:</strong> +90 (555) 123 45 67</p>
            <p><strong>Adres:</strong> İstanbul, Türkiye</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default KullanimKosullari 