import React from 'react'
import Navbar from '../components/Navbar'
import Logo from '../components/Logo'
import Footer from '../components/Footer'
import tratamientos from '../components/DB/Db'
import "./styles/Treatments.css"
import MonthlyReco from '../components/MonthlyReco'
import TreatmentList from '../components/TreatmentList'

const Treatments = () => {
  return (
    <div className="body">
      <Logo />
      <Navbar />
      <MonthlyReco />
      <TreatmentList />
      <Footer />
    </div>
  )
}

export default Treatments