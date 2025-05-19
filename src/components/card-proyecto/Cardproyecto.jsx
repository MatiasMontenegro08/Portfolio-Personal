import { FaEye, FaGithub} from 'react-icons/fa'
import { Link } from 'react-router'
import './cardproyecto.css'
const Cardproyecto = ({img, titulo, descripcion, children, linkVer, linkRepo}) => {
    return (
        <div className="tarjeta-proyecto">
            <img src={img} alt="Logo Proyecto" />
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            <div className='container-icons'>
                {children}
            </div>
            <div className="container-links">
                <div className='links-proyecto'>
                    <Link to={linkVer}><FaEye className='icon-links' /></Link>
                </div>
                <div className='links-proyecto'>
                    <Link to={linkRepo}><FaGithub className='icon-links' /></Link>
                </div>
            </div>
        </div>
    )
}

export default Cardproyecto