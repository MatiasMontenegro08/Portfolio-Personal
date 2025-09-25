import { FaEye, FaGithub} from 'react-icons/fa'
import { Link } from 'react-router'
import './cardproyecto.css'
const Cardproyecto = ({img, titulo, descripcion, children, linkVer, linkRepo}) => {
    return (
        <div className="tarjeta-proyecto">
            <Link to={linkVer} target='_blank' rel="noopener noreferrer"><img src={img} alt="Logo Proyecto" /></Link>
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <div className='container-icons'>
                {children}
            </div>
            <div className="container-links">
                <div className='links-proyecto'>
                    <Link to={linkVer} target='_blank' rel="noopener noreferrer"><FaEye className='icon-links' /></Link>
                </div>
                <div className='links-proyecto'>
                    <Link to={linkRepo} target='_blank' rel="noopener noreferrer"><FaGithub className='icon-links' /></Link>
                </div>
            </div>
        </div>
    )
}

export default Cardproyecto