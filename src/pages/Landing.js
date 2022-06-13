import React from 'react'
import "./styles/Landing.css"

const Landing = () => {
    return (
        <div className="landing">
            <div className="landing__text">
                <div className="centro"><h2>Centro</h2></div>
                <div className="medico"><h2>Médico</h2></div>
                <div className="estetico"><h2>Estético</h2></div>
                <div className="sb"><h2>SB</h2></div>
            </div>
            <div className="landing__image">
                <img alt="logo" src="../../assets/images/LogoBlanco.png" />
                <button>Ingresar</button>
            </div>
        </div>
    )
}

export default Landing