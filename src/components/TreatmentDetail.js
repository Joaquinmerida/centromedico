import React from 'react'
import './styles/TreatmentDetail.css'

const TreatmentDetail = (props) => {

  return (
    <div className="treatment__detail">
        <img alt={props.tratamiento[0].Nombre} src={props.tratamiento[0].Imagen}/>
        <div className="treatment__inner">
        <h1>{props.tratamiento[0].Nombre}</h1>
        <p>{props.tratamiento[0].Descripcion}</p>
        </div>
    </div>
  )
}

export default TreatmentDetail