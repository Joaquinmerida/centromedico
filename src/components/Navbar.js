import React from 'react'
import DropdownContent from './DropdownContent'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import "./styles/Navbar.css"


const Navbar = (props) => {

  let [Dropdown, setDropdown] = useState(false)

  let handleDropdown = () => {
    if (Dropdown === false) {
      setDropdown(true)
    } else {
      setDropdown(false)
    }
  }


  if (window.innerWidth <= 1900) {
    return (
      <div className="navbarr">
        <Link to="/" id="inicio">Inicio</Link>
        <Link to="/Tratamientos">Tratamientos</Link>
        <Link to="/Equipo">Nuestro equipo</Link>
        <Link to="/Contacto" id="equipo">Agendá tu consulta</Link>
      </div>
    )
  } else if (props.dropdown === true) {
    if (Dropdown === false) {
      return (
        <>
          <div className="navbarr">
            <Link to="/" id="inicio">Inicio</Link>
            <button onClick={handleDropdown}>Tratamientos</button>
            <Link to="/Equipo">Nuestro equipo</Link>
            <Link to="/Contacto" id="equipo">Agendá tu consulta</Link>
          </div>
        </>
      )
    } else if (Dropdown === true) {
      return (
        <>
          <div className="navbarr">
            <Link to="/" id="inicio">Inicio</Link>
            <button onClick={handleDropdown}>Tratamientos</button>
            <Link to="/Equipo">Nuestro equipo</Link>
            <Link to="/Contacto" id="equipo">Agendá tu consulta</Link>
          </div>
          <DropdownContent handleDropdown={handleDropdown} />
        </>
      )
    }
  } else {
    return (
      <div className="navbarr">
        <Link to="/" id="inicio">Inicio</Link>
        <Link to="/Tratamientos">Tratamientos</Link>
        <Link to="/Equipo">Nuestro equipo</Link>
        <Link to="/Contacto" id="equipo">Agendá tu consulta</Link>
      </div>
    )
  }
}

export default Navbar
