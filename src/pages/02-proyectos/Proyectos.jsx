import imgProyecto from '../../assets/catalogopegaya.svg'
import { FaCss3, FaHtml5, FaJs } from 'react-icons/fa'
import { GrReactjs } from 'react-icons/gr'
import { TbBrandVite } from "react-icons/tb";
import { SiFirebase } from "react-icons/si";
import { RiBootstrapLine } from "react-icons/ri";
import Cardproyecto from '../../components/card-proyecto/Cardproyecto'
import './proyectos.css'

const Proyectos = () => {
    return (
        <section className="proyectos-container">
            <h1>Proyectos</h1>
            <Cardproyecto
                img={imgProyecto}
                titulo="Catálogo Pega-Ya"
                descripcion="Catálogo de stickers personalizado para un emprendimiento local. Permite a los usuarios explorar y seleccionar entre una variedad de stickers, agregarlos a su carrito, con la opción de poder copiar el pedido y enviarlo por Instagram."
                linkVer="https://catalogo-pega-ya.vercel.app/"
                linkRepo="https://github.com/MatiasMontenegro08/Catalogo-PegaYa.git"
            >
                <div className='tec-container'><GrReactjs className='tec-icon'/><p>Ract</p></div>
                <div className='tec-container'><FaHtml5 className='tec-icon'/><p>HTML</p></div>
                <div className='tec-container'><FaCss3 className='tec-icon'/><p>CSS</p></div>
                <div className='tec-container'><FaJs className='tec-icon'/><p>JavaScript</p></div>
                <div className='tec-container'><TbBrandVite className='tec-icon'/><p>Vite</p></div>
                <div className='tec-container'><SiFirebase className='tec-icon'/><p>Firebase</p></div>
                <div className='tec-container'><RiBootstrapLine className='tec-icon'/><p>Bootstrap</p></div>

            </Cardproyecto>
            {/* <Cardproyecto
                img={imgProyecto}
                titulo="Proyecto 2"
                descripcion="Descripción del proyecto 2 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus!"
                linkVer="#"
                linkRepo="#"
            >
                <div className='tec-container'><FaHtml5 className='tec-icon'/><p>HTML</p></div>
                <div className='tec-container'><FaCss3 className='tec-icon'/><p>CSS</p></div>
                <div className='tec-container'><FaJs className='tec-icon'/><p>JavaScript</p></div>
            </Cardproyecto> */}
        </section>
    )
}

export default Proyectos