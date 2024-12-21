import React from 'react';
import './Comentarios.css'; // Asegúrate de tener un archivo CSS para estilizar

const Comentarios = () => {
    const comentarios = [
        {
            id: 1,
            nombre: 'María Fernández',
            comentario: '¡Los pasteles más deliciosos que he probado! Muy recomendados.',
            imagen: '/img/maria.jpg'
        },
        {
            id: 2,
            nombre: 'Carlos López',
            comentario: 'Excelente atención al cliente y los precios son muy buenos.',
            imagen: '/img/carlos.jpg'
        },
        {
            id: 3,
            nombre: 'Ana Torres',
            comentario: 'La decoración de los pasteles es simplemente perfecta. Me encantaron.',
            imagen: '/img/ana.jpg'
        },
        {
            id: 4,
            nombre: 'Jorge Gómez',
            comentario: 'Un lugar único para comprar pasteles. 100% recomendado.',
            imagen: '/img/jorge.jpg'
        },
        {
            id: 5,
            nombre: 'Luisa Ramírez',
            comentario: 'Mis hijos adoran sus pasteles, siempre volvemos por más.',
            imagen: '/img/luisa.jpg'
        }
    ];

    return (
        <div className="comentarios-slider">
            {comentarios.map((comentario) => (
                <div key={comentario.id} className="comentario-item">
                    <img src={comentario.imagen} alt={comentario.nombre} className="comentario-imagen" />
                    <h3 className="comentario-nombre">{comentario.nombre}</h3>
                    <p className="comentario-texto">"{comentario.comentario}"</p>
                </div>
            ))}
        </div>
    );
};

export default Comentarios;
