import React from 'react'
import Navbar from './Navbar'
import "./styles/Footer.css"


const Footer = () => {
    return (
        <div className="footer">
            <Navbar />
            <img className="logo__footer" alt="logo" src="../../assets/images/LogoLineal.png" />
        </div>
    )
}

export default Footer