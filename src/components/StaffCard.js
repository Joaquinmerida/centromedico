import React from 'react'
import { useState, useEffect } from 'react'
import "./styles/StaffCard.css"
import silvia from '../assets/images/silvia.png'
import karen from '../assets/images/karen.png'
import zaida from '../assets/images/zaida.png'
import logoo from '../assets/images/logoisis.png'



const StaffCard = (props) => {

    let [photo, setPhoto] = useState('')

    useEffect(() => {
        if (props.photo === 'silvia') {
            setPhoto(silvia)
        }
        if (props.photo === 'karen') {
            setPhoto(karen)
        }
        if (props.photo === 'zaida') {
            setPhoto(zaida)
        }
    }, [photo])


    return (
        <div className="staffCard">
            <img className="avatar" alt={props.photo} src={photo} />
            <div className="staffText">
                <h2>Nombre Staff</h2>
                <p>'What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <img className="logoo" alt="logo" src={logoo} />
        </div>
    )
}

export default StaffCard