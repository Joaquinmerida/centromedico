import React from 'react'
import { FaInstagram, FaFacebookF, FaWhatsapp, FaMailBulk } from 'react-icons/fa'
import "./styles/Socials.css"
import { Link } from 'react-router-dom'


const Socials = () => {
    return (
        <div className="contact">
            <h1>
                Recomendamos realizar una consulta diagnóstica
            </h1>
            <h2>Contáctenos</h2>
            <div className="Links"> 
            <a target="_blank" href="https://www.instagram.com/centromedicosb/?hl=es">
                <FaInstagram />
            </a>
            <a target="_blank"  href="https://www.facebook.com/CentroMedicoEsteticoSB/">
                <FaFacebookF />
            </a>
            <a target="_blank"  href="https://wa.me/59891384068">
                <FaWhatsapp />
            </a>
            <Link target="_blank" to="/Mail">
                <FaMailBulk />
            </Link>
            </div>
            <iframe className="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.1935259839347!2d-56.28333564892768!3d-34.52332458038462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a1b5ce86dc71c5%3A0x8d3a1b76da059387!2sCentro%20M%C3%A9dico%20Est%C3%A9tico%20SB!5e0!3m2!1ses-419!2suy!4v1652188044071!5m2!1ses-419!2suy" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}

export default Socials