import { BrowserRouter, Routes, Route } from 'react-router'
import Navbar from './components/navbar/Navbar'
import Perfil from './pages/01-perfil/Perfil'
import Contacto from './pages/04-Contacto/Contacto'
import Proyectos from './pages/02-proyectos/Proyectos'
import Habilidades from './pages/03-habilidades/Habilidades'
import Footer from './components/footer/Footer'
import './App.css'

function App() {
  return (
    <div className="App-grid">
      <BrowserRouter>
        <div className="contenido">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Perfil />} />
              <Route path="/perfil" element={<Perfil />} />
              <Route path="/proyectos" element={<Proyectos />} />
              <Route path="/habilidades" element={<Habilidades />} />
            </Routes>
          </main>
          <section className="contacto-section">
            <Contacto />
          </section>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App