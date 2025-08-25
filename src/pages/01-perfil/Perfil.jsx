import imgPerfil from '../../assets/fotoperfil.jpg'
import Cardperfil from '../../components/card-perfil/Cardperfil'
import './perfil.css'

const Perfil = () => {
    return (
        <section className="perfil-section">
            <Cardperfil
                img={imgPerfil}
                nombre={"Montenegro Matias"}
                descripcion={"Soy una persona proactiva, organizada y responsable, con capacidad para trabajar en equipo. Me gusta aprender, asumir nuevos desafíos y busco incorporarme a un equipo donde pueda aportar mis habilidades y seguir creciendo profesionalmente."}
                linkcv={"/CV-MontenegroMatias.pdf"}
            />
        </section>
    )
}

export default Perfil