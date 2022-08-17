import React from 'react'
import Logo from '../components/Logo'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Socials from '../components/Socials'

const Contact = () => {
  return (
    <div className="body">
      <Logo />
      <Navbar dropdown={true} />
      <Socials />
      <Footer />
    </div>
  )
}

export default Contact