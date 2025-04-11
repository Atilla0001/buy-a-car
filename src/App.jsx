import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Arabalar from './pages/arabalar/Arabalar'
import Satis from './pages/satis/Satis'
import Hakkimizda from './pages/hakkimizda/Hakkimizda'
import Iletisim from './pages/iletisim/Iletisim'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ marginTop: '80px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/arabalar" element={<Arabalar />} />
          <Route path="/satis" element={<Satis />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/iletisim" element={<Iletisim />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
