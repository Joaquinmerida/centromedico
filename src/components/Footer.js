import React from 'react'
import Navbar from './Navbar'
import "./styles/Footer.css"
import logo from '../assets/images/LogoLineal-Blanco.png'


const Footer = () => {
    return (
        <div className="footer">
            <Navbar dropdown={false} />
            <img className="logo__footer" alt="logo" src={logo} />
            <p>Pagina web realizada por Joaquin Merida</p>
        </div>
    )
}

export default Footer