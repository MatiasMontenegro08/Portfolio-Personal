import React from 'react'
import { FaEnvelope, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa'
import SocialButton from '../../components/buttons/Socialbutton'
import './contacto.css'

const Contacto = () => {
    return (
        <div className="contacto">
            <div className="container-texto">
                <h2>¡Contactame!</h2>
                <p>¡Estoy listo para sumarme a nuevos desafíos y proyectos! Si querés colaborar o trabajar juntos, podés contactarme a través de las siguientes redes:</p>
            </div>
            <section className="contacto-container">
                <div className='contacto-tarjeta'>
                    <SocialButton
                        url="https://www.linkedin.com/in/matias-montenegro08/"
                        Icon={FaLinkedin}
                        text="Linkedin: Montenegro Matias"
                    />
                    <SocialButton
                        Icon={FaEnvelope}
                        copyText="matiasmontenegro0810@gmail.com"
                        text="Email: Montenegro Matias"
                    />
                    <SocialButton
                        url="https://wa.me/qr/IAHHQ57BCZWPK1"
                        Icon={FaWhatsapp}
                        text="Whatsapp: Montenegro Matias"
                    />
                    <SocialButton
                        url="https://github.com/MatiasMontenegro08"
                        Icon={FaGithub}
                        text="GitHub: Montenegro Matias"
                    />
                </div>
            </section>
        </div>
    )
}

export default Contacto
