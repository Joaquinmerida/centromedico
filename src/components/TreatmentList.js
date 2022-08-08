import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/TreatmentList.css'
import { tratamientos } from './DB/Db'
import cabeza from '../assets/images/cabeza.png'
import cara from '../assets/images/cara.png'
import cuello from '../assets/images/cuello.png'
import abdomen from '../assets/images/abdomen.png'
import gluteos from '../assets/images/gluteos.png'
import piernas from '../assets/images/piernas.png'
import { Link } from 'react-router-dom'



const TreatmentList = () => {

    return (
        <div className="treatmentWrapper">
            <div className='treatmentCard'>
                <div className="treatment__image">
                    <img src={cabeza} className='treatmentImage' alt="Imagen sobre tratamientos" />
                </div>
                <div className="treatment__links">
                    <h2 className="title">Cabeza</h2>
                    <Link to="/Alopecia">Caida de cabello</Link>
                </div>
            </div>
            <div className='treatmentCard1'>
                <div className="treatment__image">
                    <img src={cara} className='treatmentImage' alt="Imagen sobre tratamientos" />
                </div>
                <div className="treatment__links">
                    <h2 className="title">Cara</h2>
                    <Link to='/Acne'>Acne</Link>
                    <Link to='/Arrugas'>Arrugas</Link>
                    <Link to='/Manchas'>Manchas(Sol/Embarazo)</Link>
                    <Link to='/Rosacea'>Rosácea</Link>
                    <Link to='/Vasculares'>Vasculares</Link>
                    <Link to='/Cicatrices'>Cicatrices</Link>
                    <Link to='/Flacidez'>Flacidez</Link>
                    <Link to='/Asimetrias'>Asimetrías</Link>
                    <Link to='/VolumenLabios'>Volumen de labios</Link>
                    <Link to='/VolumenPomulos'>Volumen de pómulos</Link>
                    <Link to='/Maxilar'>Definición de maxilar</Link>
                    <Link to='/Menton'>Mentón</Link>
                </div>
            </div>
            <div className='treatmentCard'>
                <div className="treatment__image">
                    <img src={cuello} className='treatmentImage' alt="Imagen sobre tratamientos" />
                </div>
                <div className="treatment__links">
                    <h2 className="title">Cuello</h2>
                    <Link to='/Papada'>Papada</Link>
                    <Link to='/Flacidez'>Flacidez</Link>
                    <Link to='/Cicatrices'>Cicatrices</Link>
                </div>
            </div>
            <div className='treatmentCard1'>
                <div className="treatment__image">
                    <img src={abdomen} className='treatmentImage' alt="Imagen sobre tratamientos" />
                </div>
                <div className="treatment__links">
                    <h2 className="title">Abdomen</h2>
                    <Link to='/Diastasis'>Diastasis de rectos</Link>
                    <Link to='/Pubalgia'>Pubalgia</Link>
                    <Link to='/Adiposidad'>Adiposidad localizada</Link>
                    <Link to='/Flacidez'>Flacidez</Link>
                    <Link to='/Cicatrices'>Cicatrices (cesárea/estrías)</Link>
                    <Link to='/OmbligoTriste'>Ombligo triste</Link>
                </div>
            </div>
            <div className='treatmentCard'>
                <div className="treatment__image">
                    <img src={gluteos} className='treatmentImage' alt="Imagen sobre tratamientos" />
                </div>
                <div className="treatment__links">
                    <h2 className="title">Gluteos</h2>
                    <Link to='/Celulitis'>Celulitis</Link>
                    <Link to='/Flacidez'>Flacidez</Link>
                    <Link to='/Cicatrices'>Cicatrices</Link>
                    <Link to='/Volumen'>Volumen</Link>
                    <Link to='/Adiposidad'>Adiposidad</Link>
                </div>
            </div>
            <div className='treatmentCard1'>
                <div className="treatment__image">
                    <img src={piernas} className='treatmentImage' alt="Imagen sobre tratamientos" />
                </div>
                <div className="treatment__links">
                    <h2 className="title">Muslos y piernas</h2>
                    <Link to='/Celulitis'>Celulitis</Link>
                    <Link to='/Adiposidad'>Adiposidad localizada</Link>
                    <Link to='/Varices'>Varices</Link>
                    <Link to='/RetencionLiquidos'>Retencion de líquidos</Link>
                    <Link to='/Tonificacion'>Tonificación</Link>
                </div>
            </div>
        </div>
    )
}

export default TreatmentList