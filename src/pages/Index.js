import React from 'react'
import Navbar from "../components/Navbar"
import Logo from '../components/Logo'
import "./styles/Index.css"
import News from "../components/News"
import Footer from '../components/Footer'
import PromoCard from "../components/PromoCard"



const Index = () => {
    return (
        <div className="body">
            <Logo />
            <Navbar dropdown={true} />
            <h1 className="landing__header">Centro Médico SB</h1>
            <News />
            <h2 className="landing__promoTitle">Recomendación del mes</h2>
            <PromoCard promo="Plissage" image="../assets/images/Plissage.webp" />
            <PromoCard promo="Punta de diamante" image="../assets/images/Puntadiamante.webp" />
            <Footer />
        </div>
    )
}

export default Index