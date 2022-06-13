import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/TreatmentList.css'
import { tratamientos } from './DB/Db'
import TreatmentDetail from './TreatmentDetail'
import { useParams } from 'react-router'
import Logo from './Logo'
import Footer from './Footer'
import Navbar from './Navbar'



console.log(tratamientos)

const TreatmentList = () => {

    const { Nombre } = useParams()

    console.log(Nombre)

    const filter = tratamientos.filter(tratamiento => tratamiento.Nombre == Nombre)

    console.log(filter)


    return (
        <div className="body">
            <Logo />
            <Navbar />
            <TreatmentDetail tratamiento={filter} />
            <Footer />
        </div>
    )
}

export default TreatmentList