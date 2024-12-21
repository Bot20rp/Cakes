import React from 'react'
import './Principal.css';
import { Informacion } from '../Informacion/Informacion'
import Comentarios from './Comentarios';
import { useNavigate } from 'react-router-dom';

const Principal = () => {

    const navigate = useNavigate();

    const cumpleaños = [
        {
            id: 1,
            imagen: '/img/c1.jpg',
            descripcion: 'Tortas para niños'
        },
        {
            id: 2,
            imagen: '/img/c2.jpg',
            descripcion: 'Tortas para 15 años'
        },
        {
            id: 3,
            imagen: '/img/c3.jpg',
            descripcion: 'Tortas para Matrimonio'
        },
        {
            id: 4,
            imagen: '/img/c4.jpg',
            descripcion: 'Tortas para Graduacion'
        },
        {
            id: 5,
            imagen: '/img/c5.jpg',
            descripcion: 'Tortas para Bautizo'
        },
        {
            id: 6,
            imagen: '/img/c6.jpg',
            descripcion: 'Tortas para Otros'
        },
    ]

    return (
        <div>
            <div className="div-contenedor">
                <h1>Vanillas y Cakes Marcy</h1>
            </div>
            <div className="div-contenedor">
                <h2>"En nuestra repostería transformamos tus ideas en deliciosas obras de arte. Ofrecemos diseños personalizados que se adaptan a tus gustos, con precios accesibles y una calidad que sorprende en cada bocado. ¡Hacemos realidad el dulce de tus sueños!" 🍰✨</h2>
            </div>
            <div className="categorias">
                {cumpleaños.map((cumpleaño) => (
                    <div key={cumpleaño.id} className="categoria-item">
                        <img src={cumpleaño.imagen} alt="cumpleaños" className="categoria-imagen" />
                        <button className="categoria-boton" onClick={navigate('/niños')}>{cumpleaño.descripcion}</button>
                    </div>
                ))}
            </div>

            <div style={{
                display:"flex",
                flexDirection:"column",
            }}>
                <div style={{textAlign:"center"}}>
                    <h2>Conoce a nuestro clientes y sus comentarios</h2>
                </div>
                <Comentarios />
            </div>
            <div >
                <Informacion />
            </div>

        </div>
    )
}

export default Principal
