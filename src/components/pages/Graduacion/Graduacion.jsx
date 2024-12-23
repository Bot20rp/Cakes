import React from 'react';
import './Graduacion.css';

const Graduacion = () => {
    const ninos = [
        {
            id: 1,
            img: '/graduacion/g1.jpg',
            descripcion: 'Hola, estoy interesado en esta torta para graduación: "Torta 1".'
        },
        {
            id: 2,
            img: '/graduacion/g2.jpg',
            descripcion: 'Hola, estoy interesado en esta torta para graduación: "Torta 2".'
        },
        {
            id: 3,
            img: '/graduacion/g3.jpg',
            descripcion: 'Hola, estoy interesado en esta torta para graduación: "Torta 3".'
        },
        {
            id: 4,
            img: '/graduacion/g4.jpg',
            descripcion: 'Hola, estoy interesado en esta torta para graduación: "Torta 4".'
        },
        {
            id: 5,
            img: '/graduacion/g5.jpg',
            descripcion: 'Hola, estoy interesado en esta torta para graduación: "Torta 5".'
        },
        {
            id: 6,
            img: '/graduacion/g6.jpg',
            descripcion: 'Hola, estoy interesado en esta torta para graduación: "Torta 6".'
        },
    ];

    const handleWhatsApp = (descripcion) => {
        const phone = "59173167138"; // Reemplaza con el número de WhatsApp (incluyendo el código de país).
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(descripcion)}`;
        window.open(url, '_blank');
    };

    return (
        <div className='ninos'>
            <div className='titulo'>
                <h1>Desliza para conocer más</h1>
            </div>
            <div className="comentarios-slider2">
                {ninos.map((nino) => (
                    <div key={nino.id} className="comentario-item2">
                        <img src={nino.img} alt="graduación" className="categoria-imagen" />
                        {/* <h2>{nino.descripcion}</h2> */}
                        <button 
                            className="categoria-boton" 
                            onClick={() => handleWhatsApp(nino.descripcion)}
                        >
                            Cotizar
                        </button>
                    </div>
                ))}
            </div>

            <div id='pedir'>
                <h3>Crea tu propio diseño haciendo click abajo</h3>
                <button 
                    onClick={() => handleWhatsApp('Hola, quiero diseñar una torta personalizada para graduación.')}
                >
                    Comunícate con nosotros
                </button>
            </div>
        </div>
    );
};

export default Graduacion;
