import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Footer from './assets/components/footer/Footer'
import Home from './pages/home/Home'
import Arabalar from './pages/arabalar/Arabalar'
import Satis from './pages/satis/Satis'
import Hakkimizda from './pages/hakkimizda/Hakkimizda'
import Iletisim from './pages/iletisim/Iletisim'
import GizlilikPolitikasi from './pages/gizlilik/Gizlilik'
import KullanimKosullari from './pages/kullanim-kosullari/KullanimKosullari'
import CerezPolitikasi from './pages/cerez-politikasi/CerezPolitikasi'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div style={{ marginTop: '80px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/arabalar" element={<Arabalar />} />
            <Route path="/satis" element={<Satis />} />
            <Route path="/hakkimizda" element={<Hakkimizda />} />
            <Route path="/iletisim" element={<Iletisim />} />
            <Route path="/gizlilik-politikasi" element={<GizlilikPolitikasi />} />
            <Route path="/kullanim-kosullari" element={<KullanimKosullari />} />
            <Route path="/cerez-politikasi" element={<CerezPolitikasi />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
