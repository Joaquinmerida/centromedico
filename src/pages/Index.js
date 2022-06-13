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
            <Navbar />
            <h1 className="landing__header">Centro Médico SB</h1>
            <News />
            <h2 className="landing__promoTitle">Promoción del mes</h2>
            <PromoCard promo="Peeling" image="../assets/images/asd.JPG"/>
            <PromoCard promo="Aparatologia" image="../assets/images/asd.JPG"/>
            <Footer />
        </div>
    )
}

export default Index