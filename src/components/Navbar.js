import React from 'react'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import "./styles/Navbar.css"


const Navbar = (props) => {

  if (props.dropdown === true) {
    return (
      <div className="navbarr">
        <Link to="/" id="inicio">Inicio</Link>
        <Link to="/Tratamientos">Tratamientos</Link>
        <Link to="/Equipo">Nuestro equipo</Link>
        <Link to="/Contacto" id="equipo">Agendá tu consulta</Link>
      </div>
    )
  } else {
    return (
      <>
        <div className="navbarr">
          <Link to="/" id="inicio">Inicio</Link>
          <Link to='/Tratamientos'>Tratamientos</Link>
          <Link to="/Equipo">Nuestro equipo</Link>
          <Link to="/Contacto" id="equipo">Agendá tu consulta</Link>
        </div>
        <div>
          <Dropdown className="dropdown" />
        </div>
      </>
    )
  }
}



export default Navbar





// if (props.dropdown === true) {
//   return (
//     <div className="navbarr">
//       <Link to="/" id="inicio">Inicio</Link>
//       <Dropdown dropdown={true} className="dropdown" />
//       <Link to="/Equipo">Nuestro equipo</Link>
//       <Link to="/Contacto" id="equipo">Agendá tu consulta</Link>
//     </div>
//   )
// } else {
//   return (
//     <div className="navbarr">
//       <Link to="/" id="inicio">Inicio</Link>
//       <Link to='/Tratamientos'>Tratamientos</Link>
//       <Dropdown dropdown={false} className="dropdown" />
//       <Link to="/Equipo">Nuestro equipo</Link>
//       <Link to="/Contacto" id="equipo">Agendá tu consulta</Link>
//     </div>
//   )
// }