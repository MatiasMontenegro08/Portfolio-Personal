import React from 'react'
import imgPerfil from '../../assets/fotoperfil.jpg'
import './perfil.css'
import { FaEnvelope, FaFileArrowDown, FaGithub, FaLinkedin } from 'react-icons/fa6'

const Perfil = () => {
    return (
        <section className="perfil-container">
            <div className='foto-perfil'><img src={imgPerfil} alt="Foto de perfil" /></div>
            <h1>Montenegro Matias</h1>
            <p>Soy una persona proactiva, organizada y responsable, con capacidad para trabajar en equipo. Me gusta aprender, asumir nuevos desafíos y busco incorporarme a un equipo donde pueda aportar mis habilidades y seguir creciendo profesionalmente.</p>
            <div className="btn-container">
                <div className="btn-cv">
                    <a href="/CV_matias-nicolas-montenegro.pdf" target="_blank" rel="noopener noreferrer">Descargar CV <FaFileArrowDown /></a>
                </div>
            </div>
        </section>
    )
}

export default Perfil