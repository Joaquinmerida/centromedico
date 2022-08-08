import React, { useEffect, useState } from 'react'
import TreatmentText from '../components/TreatmentText'
import { tratamientos } from '../components/DB/Db.js'
import { useParams } from 'react-router'
import Alopecia from '../assets/videos/Mesoterapia.mp4'
import Acne from '../assets/videos/Acne.mp4'
import Arrugas from '../assets/videos/Botox.mp4'
import Depilacion from '../assets/videos/Depilacion.mp4'
import Adiposidad from '../assets/videos/Adiposidad.mp4'
import Carboxiterapia from '../assets/videos/Carboxiterapia.mp4'
import Dermapen from '../assets/videos/Dermapen.mp4'
import Emsculpt from '../assets/videos/Emsculpt.mp4'
import Lipolaser from '../assets/videos/Lipolaser.mp4'
import Mesoterapia from '../assets/videos/Mesoterapia.mp4'
import Peeling from '../assets/videos/Peeling.mp4'
import Presoterapia from '../assets/videos/Presoterapia.mp4'
import './styles/SelectedTreatment.css'


const SelectedTreatment = () => {
    const { Nombre } = useParams()

    const filter = tratamientos.find(tratamiento => tratamiento.Id === Nombre)

    let [video, setVideo] = useState('')

    useEffect(() => {
        if (filter.Id === 'Acne') {
            setVideo(Acne)
        }
        if (filter.Id === 'Alopecia'){
            setVideo(Alopecia)
        }
        if(filter.Id === 'Arrugas' ){
            setVideo(Arrugas)
        }
        if(filter.Id === 'Asimetrias' ){
            setVideo(Arrugas)
        }
        if(filter.Id === 'VolumenLabios' ){
            setVideo(Arrugas)
        }
        if(filter.Id === 'VolumenPomulos' ){
            setVideo(Arrugas)
        }
        if(filter.Id === 'Maxilar' ){
            setVideo(Arrugas)
        }
        if(filter.Id === 'Menton' ){
            setVideo(Arrugas)
        }
        if(filter.Id === 'Depilacion'){
            setVideo(Depilacion)
        } 
        if(filter.Id === 'Adiposidad'){
            setVideo(Adiposidad)
        }
        if(filter.Id === 'Cicatrices'){
            setVideo(Carboxiterapia)
        }
        if(filter.Id === 'Dermapen'){
            setVideo(Dermapen)
        }
        if(filter.Id === 'Emsculpt'){
            setVideo(Emsculpt)
        }
        if(filter.Id === 'Flacidez'){
            setVideo(Lipolaser)
        }
        if(filter.Id === 'Mesoterapia'){
            setVideo(Mesoterapia)
        }
        if(filter.Id === 'Manchas'){
            setVideo(Peeling)
        }
        if (filter.Id === 'Rosacea') {
            setVideo(Peeling)
        }
        if (filter.Id === 'Vasculares') {
            setVideo(Peeling)
        }
        if(filter.Id === 'Presoterapia'){
            setVideo(Presoterapia)
        }
        
    },[video, filter.Id])
    
        return (
            <div className="video-wrapper">
                <video src={video} autoPlay loop muted />
                <TreatmentText className="text" tratamiento={filter} />
            </div>
        )

}

export default SelectedTreatment