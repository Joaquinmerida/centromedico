import React from 'react'
import "./styles/StaffCard.css"

const StaffCard = () => {
    return (
        <div className="staffCard">
            <img className="avatar" alt="Silvia" src="../assets/images/asd.JPG" />
            <div className="staffText">
                <h2>Nombre Staff</h2>
                <p>'What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
            </div>
            <img className="logoo" alt="logo" src="../assets/images/logoisis.png" />
        </div>
    )
}

export default StaffCard