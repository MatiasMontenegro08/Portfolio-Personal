import React from 'react'
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa6'
import './habilidades.css'

const Habilidades = () => {
    return (
        <section className="habilidades-container">
            <h1>Habilidades</h1>
            <p>Cuento con experiencia en desarrollo frontend utilizando HTML, CSS, JavaScript y React, y continúo ampliando mis conocimientos en backend con Node.js</p>
            <div className="tecnologias-container">
                <div className="tarjeta-tecnologia">
                    <div className="tecnologia"><FaHtml5 className='tecnologia-icon' /></div>
                    <p>HTML</p>
                </div>
                <div className="tarjeta-tecnologia">
                    <div className="tecnologia"><FaCss3 className='tecnologia-icon' /></div>
                    <p>CSS</p>
                </div>
                <div className="tarjeta-tecnologia">
                    <div className="tecnologia"><FaJs className='tecnologia-icon' /></div>
                    <p>JavaScript</p>
                </div>
                <div className="tarjeta-tecnologia">
                    <div className="tecnologia"><FaReact className='tecnologia-icon' /></div>
                    <p>React</p>
                </div>
                <div className="tarjeta-tecnologia">
                    <div className="tecnologia"><FaNodeJs className='tecnologia-icon' /></div>
                    <p>NodeJS</p>
                </div>
            </div>
        </section>
    )
}

export default Habilidades