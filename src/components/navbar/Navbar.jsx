import React from 'react'
import './navbar.css'
import { FaBriefcase, FaCircleUser, FaGraduationCap } from 'react-icons/fa6'
import { Link } from 'react-router'

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className='navbar-list'>
                <Link to="/perfil" className='miperfil'><FaCircleUser className='icon'/></Link>
                <Link to="/proyectos" className='proyectos'><FaBriefcase className='icon'/></Link>
                <Link to="/habilidades" className='habilidades'><FaGraduationCap className='icon'/></Link>
            </ul>
        </nav>
    )
}

export default Navbar