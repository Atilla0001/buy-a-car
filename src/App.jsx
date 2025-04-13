import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/home/Home'
import Cars from './pages/cars/Cars'
import Sell from './pages/sell/Sell'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import CookiePolicy from './pages/cookie-policy/CookiePolicy'
import TermsOfUse from './pages/terms-of-use/TermsOfUse'
import Privacy from './pages/privacy/Privacy'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/sell" element={<Sell />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
