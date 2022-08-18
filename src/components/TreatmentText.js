import React from 'react'
import './styles/TreatmentText.css'
import 'animate.css'
import { Link } from 'react-router-dom'

const TreatmentText = (props) => {
    return (
        <div className="treatment__text animate__fadeIn animate__delay-2s">
            <h1>{props.tratamiento.Nombre}</h1>
            <p>{props.tratamiento.Descripcion}</p>
            <p><strong>Tratamientos:</strong> {props.tratamiento.Tratamientos}</p>
            <Link to="/Tratamientos">Volver atrás</Link>
        </div>
    )

}



export default TreatmentText