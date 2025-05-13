import './cardperfil.css'
import { FaFileArrowDown } from 'react-icons/fa6'

const Cardperfil = ({img, nombre, descripcion, linkcv}) => {
    return (
        <div className='perfil-container'>
            <div className="foto-perfil">
                <img src={img} alt="Foto de perfil" />
            </div>
            <h1>{nombre}</h1>
            <p>{descripcion}</p>
            <div className="btn-container">
                <div className="btn-cv">
                    <a href={linkcv} target="_blank" rel="noopener noreferrer">Descargar CV <FaFileArrowDown/></a>
                </div>
            </div>
        </div>
    )
}

export default Cardperfil