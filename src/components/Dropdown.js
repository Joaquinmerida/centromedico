import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronUp } from 'react-icons/fi'
import "./styles/Navbar.css"


const Dropdown = (props) => {

    let drop = props.dropdown

    let handleReset = () =>{
        console.log(drop)
    }

    if (props.dropdown === true) {
        return (
            <>
                <div className="dropdown">
                    <div className="innerDropdown">
                        <h2>Cabeza</h2>
                        <ul>
                            <li><Link to="/Alopecia">Caida de cabello</Link></li>
                        </ul>
                    </div>
                    <div className="innerDropdown">
                        <h2>Cara</h2>
                        <ul>
                            <li><Link to='/Acne'>Acne</Link></li>
                            <li><Link to='/Arrugas'>Arrugas</Link></li>
                            <li><Link to='/Manchas'>Manchas(Sol/Embarazo)</Link></li>
                            <li><Link to='/Rosacea'>Rosácea</Link></li>
                            <li><Link to='/Vasculares'>Vasculares</Link></li>
                            <li><Link to='/Cicatrices'>Cicatrices</Link></li>
                            <li><Link to='/Flacidez'>Flacidez</Link></li>
                            <li><Link to='/Asimetrias'>Asimetrías</Link></li>
                            <li><Link to='/VolumenLabios'>Volumen de labios</Link></li>
                            <li><Link to='/VolumenPomulos'>Volumen de pómulos</Link></li>
                            <li><Link to='/Maxilar'>Definición de maxilar</Link></li>
                            <li><Link to='/Menton'>Mentón</Link></li>
                        </ul>
                    </div>
                    <div className="innerDropdown">
                        <h2>Cuello</h2>
                        <ul>
                            <li><Link to='/Papada'>Papada</Link></li>
                            <li><Link to='/Flacidez'>Flacidez</Link></li>
                            <li><Link to='/Cicatrices'>Cicatrices</Link></li>
                        </ul>
                    </div>
                    <div className="innerDropdown">
                        <h2>Abdomen</h2>
                        <ul>
                            <li><Link to='/Diastasis'>Diastasis de rectos</Link></li>
                            <li><Link to='/Pubalgia'>Pubalgia</Link></li>
                            <li><Link to='/Adiposidad'>Adiposidad localizada</Link></li>
                            <li><Link to='/Flacidez'>Flacidez</Link></li>
                            <li><Link to='/Cicatrices'>Cicatrices (cesárea/estrías)</Link></li>
                            <li><Link to='/OmbligoTriste'>Ombligo triste</Link></li>
                        </ul>
                    </div>
                    <div className="innerDropdown">
                        <h2>Glúteos</h2>
                        <ul>
                            <li><Link to='/Celulitis'>Celulitis</Link></li>
                            <li><Link to='/Flacidez'>Flacidez</Link></li>
                            <li><Link to='/Cicatrices'>Cicatrices</Link></li>
                            <li><Link to='/Volumen'>Volumen</Link></li>
                            <li><Link to='/Adiposidad'>Adiposidad</Link></li>
                        </ul>
                    </div>
                    <div className="innerDropdown">
                        <h2>Muslos y piernas</h2>
                        <ul>
                            <li><Link to='/Celulitis'>Celulitis</Link></li>
                            <li><Link to='/Adiposidad'>Adiposidad localizada</Link></li>
                            <li><Link to='/Varices'>Varices</Link></li>
                            <li><Link to='/RetencionLiquidos'>Retencion de líquidos</Link></li>
                            <li><Link to='/Tonificacion'>Tonificación</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="dropdownLink">
                    <Link className="dropdownLink" to="/Tratamientos">Ver tratamientos</Link>
                </div>
                <div className="dropdownButton">
                    <button onClick={handleReset}><FiChevronUp /></button>
                </div>
            </>
        )
    }else{
        return
    }
}


export default Dropdown