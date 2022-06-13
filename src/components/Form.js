import React from 'react'
import Logo from './Logo'
import Navbar from './Navbar'
import Footer from './Footer'
import './styles/Form.css'




const Form = () => {
    return (
        <div className="body">
            <Logo />
            <Navbar />
            <div className="form">
                <div className="contact__form">
                    <form action="https://formsubmit.co/centromedicoesteticosb@gmail.com" method="POST">
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Nombre completo</label>
                            <input type="Nombre" className="form-control" name="name" id="exampleFormControlInput1"
                                placeholder="Nombre completo (obligatorio)" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email (obligatorio)</label>
                            <input type="Email" className="form-control" name="email" id="exampleFormControlInput2"
                                placeholder="email@gmail.com" />
                        </div>

                        <div className="form-floating">
                            <textarea className="form-control" name="Consulta" placeholder="Leave a comment here" id="floatingTextarea2"></textarea>
                            <label id="label" htmlFor="floatingTextarea2">Escribinos tu consulta...</label>
                        </div>

                        <div className="botones">
                            <button type="submit" id="enviar" className="btn-success btn-lg">Enviar</button>
                            <input type="reset" className="btn-dark btn-lg" value="Reiniciar formulario" />
                        </div>
                    </form>
                </div>
                <div className="contact__text">
                    <h2>Nuestros profesionales recomiendan una consulta diagnóstica (sin costo) previa a cualquier tratamiento </h2>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Form