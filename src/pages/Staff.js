import React from 'react'
import Navbar from '../components/Navbar'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import "./styles/Staff.css"
import StaffCard from '../components/StaffCard'

const Staff = () => {
  return (
    <div className="body">
      <Logo />
      <Navbar dropdown={true} />
      <h1 className="StaffTitle">Nuestro Staff</h1>
      <StaffCard photo='silvia' />
      <StaffCard photo='karen' />
      <StaffCard photo='zaida' />
      <Footer />
    </div>
  )
}

export default Staff