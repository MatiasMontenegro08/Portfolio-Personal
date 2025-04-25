import React from 'react'
import './perfil.css'

const Perfil = () => {
    return (
        <section className="perfil-container">
            <div className='foto-perfil'><img src="#" alt="" /></div>
            <h1>Montenegro Matias</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero assumenda ipsum necessitatibus laborum blanditiis, dolor quae doloribus iste tempora dolorum.</p>
            <div className="btn-container">
                <div className="redes">Iconos redes</div>
                <div className="btn-cv"><p>Descargar CV</p></div>
            </div>
        </section>
    )
}

export default Perfil
