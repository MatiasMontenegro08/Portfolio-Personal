import './habilidad.css'

const Habilidad = ({Icon, nombre}) => {
    return (
        <div className="tarjeta-tecnologia">
            <div className="tecnologia"><Icon className='tecnologia-icon' /></div>
            <p>{nombre}</p>
        </div>
    )
}

export default Habilidad