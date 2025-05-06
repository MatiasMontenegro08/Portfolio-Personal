import React from 'react'
import './proyectos.css'
import img from '../../../public/sinimagen.jpg'
import { FaCss3, FaEye, FaGithub, FaHtml5, FaJs } from 'react-icons/fa'
import { Link } from 'react-router'

const Proyectos = () => {
    return (
        <section className="proyectos-container">
            <h1>Proyectos</h1>
            <div className="tarjeta-proyecto">
                <img src={img} alt="Logo Proyecto" />
                <h2>Proyecto 1</h2>
                <p>Descripción del proyecto 1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus!</p>
                <div className='container-icons'>
                    <div className='tec-container'><FaHtml5 className='tec-icon'/><p>HTML</p></div>
                    <div className='tec-container'><FaCss3 className='tec-icon'/><p>CSS</p></div>
                    <div className='tec-container'><FaJs className='tec-icon'/><p>JavaScript</p></div>
                </div>
                <div className="container-links">
                    <div className='links-proyecto'>
                        <Link to="#"><FaEye className='icon-links'/></Link>
                    </div>
                    <div className='links-proyecto'>
                        <Link to="#"><FaGithub className='icon-links'/></Link>
                    </div>
                </div>
            </div>
            <div className="tarjeta-proyecto">
                <img src={img} alt="Logo Proyecto" />
                <h2>Proyecto 2</h2>
                <p>Descripción del proyecto 2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus!</p>
                <div className='container-icons'>
                    <div className='tec-container'><FaHtml5 className='tec-icon'/><p>HTML</p></div>
                    <div className='tec-container'><FaCss3 className='tec-icon'/><p>CSS</p></div>
                    <div className='tec-container'><FaJs className='tec-icon'/><p>JavaScript</p></div>
                </div>
                <div className="container-links">
                    <div className='links-proyecto'>
                        <Link to="#"><FaEye className='icon-links'/></Link>
                    </div>
                    <div className='links-proyecto'>
                        <Link to="#"><FaGithub className='icon-links'/></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Proyectos