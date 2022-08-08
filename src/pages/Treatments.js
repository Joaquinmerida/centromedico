import React from 'react'
import Logo from '../components/Logo'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TreatmentList from '../components/TreatmentList'
import './styles/Treatments.css'

const Treatments = () => {
    return (
        <div className="body">
            <Logo />
            <Navbar dropdown={false} />
            <h1 className="titulo">Nuestros tratamientos</h1>
            <TreatmentList />
            <Footer />
        </div>
    )
}

export default Treatments