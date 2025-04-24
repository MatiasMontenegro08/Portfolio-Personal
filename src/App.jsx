import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Perfil from './pages/01-perfil/perfil'
import Contacto from './pages/04-Contacto/Contacto'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <Perfil />
      </main>
      <section>
        <Contacto />
      </section>
      <Footer />
    </>
  )
}

export default App
