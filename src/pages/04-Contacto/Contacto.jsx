import React from 'react'
import { FaEnvelope, FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa'
import SocialButton from '../../components/buttons/Socialbutton'
import './contacto.css'

const Contacto = () => {
    return (
        <>
            <div className="container-texto">
                <h2>¡Contactame!</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae, dolores!</p>
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
                        url="https://wa.me/message/TUJQJOZMYYCZG1"
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
        </>
    )
}

export default Contacto
