import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa6'
import Habilidad from '../../components/icono-habilidad/Habilidad'
import dataHabilidades from '../../data/habilidades.json'
import './habilidades.css'

// Mapa de nombres a componentes
const iconos = {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs,
}

const Habilidades = () => {
    return (
        <section className="habilidades-container">
            <h1>Habilidades</h1>
            <p>Cuento con experiencia en desarrollo frontend utilizando HTML, CSS, JavaScript y React, y continúo ampliando mis conocimientos en backend con Node.js</p>
            <div className="tecnologias-container">
                {dataHabilidades.map((habilidad) => (
                    <Habilidad
                        key={habilidad.id}
                        Icon={iconos[habilidad.icono]}
                        nombre={habilidad.nombre}
                    />
                ))}
            </div>
        </section>
    )
}

export default Habilidades