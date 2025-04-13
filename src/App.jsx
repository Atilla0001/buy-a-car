import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './assets/components/footer/Footer'
import ConsentBanner from './components/ConsentBanner'
import Home from './pages/home/Home'
import Arabalar from './pages/cars/Arabalar'
import Satis from './pages/sell/Satis'
import Hakkimizda from './pages/about/Hakkimizda'
import Iletisim from './pages/contact/Iletisim'
import GizlilikPolitikasi from './pages/privacy/Gizlilik'
import KullanimKosullari from './pages/terms-of-use/KullanimKosullari'
import CerezPolitikasi from './pages/cookie-policy/CerezPolitikasi'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div style={{ marginTop: '80px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Arabalar />} />
            <Route path="/sell" element={<Satis />} />
            <Route path="/about" element={<Hakkimizda />} />
            <Route path="/contact" element={<Iletisim />} />
            <Route path="/privacy" element={<GizlilikPolitikasi />} />
            <Route path="/terms-of-use" element={<KullanimKosullari />} />
            <Route path="/cookie-policy" element={<CerezPolitikasi />} />
          </Routes>
        </div>
        <Footer />
        <ConsentBanner />
      </div>
    </Router>
  )
}

export default App
