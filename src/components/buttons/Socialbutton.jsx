import React from 'react';
import { Link } from 'react-router';
import './SocialButton.css';

const SocialButton = ({ url, Icon, text, copyText }) => {

    const handleClick = (e) => {
        if (copyText) {
            e.preventDefault(); // Evitar navegación si es copiar
            navigator.clipboard.writeText(copyText)
                .then(() => {
                    alert('¡Correo copiado al portapapeles!');
                })
                .catch(err => {
                    console.error('Error al copiar:', err);
                });
        }
    };

    return (
        <Link
            to={url || "#"}
            target={url ? "_blank" : undefined}
            rel={url ? "noopener noreferrer" : undefined}
            className="social-button"
            onClick={handleClick}
        >
            <Icon className="social-icon" />
            <span className="social-text">{text}</span>
        </Link>
    );
};

export default SocialButton;
