import React from 'react'
import { useState, useEffect } from 'react'
import "./styles/StaffCard.css"
import silvia from '../assets/images/silvia.png'
import karen from '../assets/images/karen.png'
import zaida from '../assets/images/zaida.png'
import logoo from '../assets/images/logoisis.png'



const StaffCard = (props) => {
    let [title, setTitle] = useState('')
    let [photo, setPhoto] = useState('')
    let [description, setDescription] = useState('')

    useEffect(() => {
        if (props.photo === 'silvia') {
            setTitle('Silvia Bentancor')
            setPhoto(silvia)
            setDescription("Médico Otorrinolaringóloga con mas de 20 años de experiencia (niños y adultos). Posgrado en medicina estética cursado en la Universidad de Buenos Aires(UBA) con multiples cursos de perfeccionamiento. Posee posgrado de Homeopatía en niños y adultos con mas de diez años de experiencia. Actualmente incursionando en la integración con la medicina holística.")
        }
        if (props.photo === 'karen') {
            setTitle('Karen Asanelli')
            setPhoto(karen)
            setDescription("Masoterapeuta e instructora, certificada en Masaje Neuromuscular: -tratamiento de la columna vertebral y la caja torácica. -Tratamiento de la columna cervical y el cráneo. -Tratamiento del complejo del hombro y extremidad superior.  -Tratamiento del complejo lumbo-pélvico y extremidad inferior. -Posturología: evaluación dinámica y estructural. -Masaje terapéutico y talasoterapia. Functional Training System - Entrenadora personal y clases grupales. -Quiropraxia china. -Instructora de Ejercicios Hipopresivos Estáticos. -Instructora de talleres de masajes.")
        }
        if (props.photo === 'zaida') {
            setTitle('Zaida Amaro')
            setPhoto(zaida)
            setDescription("descripcion zaida")
        }
    }, [photo])


    return (
        <div className="staffCard">
            <img className="avatar" alt={props.photo} src={photo} />
            <div className="staffText">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <img className="logoo" alt="logo" src={logoo} />
        </div>
    )
}

export default StaffCard