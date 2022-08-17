import React, { useEffect } from 'react'
import './styles/PromoCard.css'
import { Link } from 'react-router-dom'
import Plissage from '../assets/images/Plissage.webp'
import Aparato from '../assets/images/Puntadiamante.webp'
import { useState } from 'react'




const IndexCard = (props) => {
  
  let [photo, setPhoto] = useState('')
  
useEffect(() => {


  if(props.promo == 'Plissage'){
    setPhoto(Plissage)
  }
  if(props.promo == 'Punta de diamante'){
    setPhoto(Aparato)
  }
},[photo])
    


  return (
    <section className="promo__wrapper">
      <img alt={props.promo} src={photo} />
      <div className="promo__text">
        <h1 className="promo__titulo">{props.promo}</h1>
        <p>'What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ',</p>
        <Link to="/./">Click aqui para agendarte</Link>
      </div>
    </section>
  )
}





export default IndexCard