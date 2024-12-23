import React from 'react';
import './Otro.css';

const Otro = () => {
    const ninos = [
        {
            id: 1,
            img: '/ninos/n1.jpg',
            descripcion: 'Hola, estoy interesado en esta torta: "Torta para niños".'
        },
        {
            id: 2,
            img: '/otros/o2.jpg',
            descripcion: 'Hola, estoy interesado en esta torta: "Torta de diseño especial 2".'
        },
        {
            id: 3,
            img: '/otros/o3.jpg',
            descripcion: 'Hola, estoy interesado en esta torta: "Torta de diseño especial 3".'
        },
        {
            id: 4,
            img: '/otros/o4.jpg',
            descripcion: 'Hola, estoy interesado en esta torta: "Torta de diseño especial 4".'
        },
        {
            id: 5,
            img: '/otros/o5.jpg',
            descripcion: 'Hola, estoy interesado en esta torta: "Torta de diseño especial 5".'
        },
        {
            id: 6,
            img: '/otros/o6.jpg',
            descripcion: 'Hola, estoy interesado en esta torta: "Torta de diseño especial 6".'
        },
        {
            id: 7,
            img: '/otros/o7.jpg',
            descripcion: 'Hola, estoy interesado en esta torta: "Torta de diseño especial 7".'
        },
        {
            id: 8,
            img: '/otros/o8.jpg',
            descripcion: 'Hola, estoy interesado en esta torta: "Torta de diseño especial 8".'
        },
    ];

    const handleWhatsApp = (descripcion) => {
        const phone = "59173167138"; // Reemplaza con el número de WhatsApp (con código de país).
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
                        <img src={nino.img} alt="cumpleaños" className="categoria-imagen" />
                        <h2>{nino.descripcion}</h2>
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
                    onClick={() => handleWhatsApp('Hola, quiero diseñar una torta personalizada.')}
                >
                    Comunícate con nosotros
                </button>
            </div>
        </div>
    );
};

export default Otro;
