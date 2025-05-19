import imgProyecto from '../../assets/sinimagen.jpg'
import { FaCss3, FaHtml5, FaJs } from 'react-icons/fa'
import Cardproyecto from '../../components/card-proyecto/Cardproyecto'
import './proyectos.css'

const Proyectos = () => {
    return (
        <section className="proyectos-container">
            <h1>Proyectos</h1>
            <Cardproyecto
                img={imgProyecto}
                titulo="Proyecto 1"
                descripcion="Descripción del proyecto 1 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus!"
                linkVer="#"
                linkRepo="#"
            >
                <div className='tec-container'><FaHtml5 className='tec-icon'/><p>HTML</p></div>
                <div className='tec-container'><FaCss3 className='tec-icon'/><p>CSS</p></div>
                <div className='tec-container'><FaJs className='tec-icon'/><p>JavaScript</p></div>
            </Cardproyecto>
            <Cardproyecto
                img={imgProyecto}
                titulo="Proyecto 2"
                descripcion="Descripción del proyecto 2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus!"
                linkVer="#"
                linkRepo="#"
            >
                <div className='tec-container'><FaHtml5 className='tec-icon'/><p>HTML</p></div>
                <div className='tec-container'><FaCss3 className='tec-icon'/><p>CSS</p></div>
                <div className='tec-container'><FaJs className='tec-icon'/><p>JavaScript</p></div>
            </Cardproyecto>
        </section>
    )
}

export default Proyectos