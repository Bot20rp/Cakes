import React from 'react';
import './Bautizo.css';

const Bautizo = () => {
    const ninos = [
        {
            id: 1,
            img: '/bautizo/b1.jpg',
            descripcion: 'Hola, estoy interesado en esta torta para bautizo: "Torta 1".'
        },
        {
            id: 2,
            img: '/bautizo/b2.jpg',
            descripcion: 'Hola, estoy interesado en esta torta para bautizo: "Torta 2".'
        },
        {
            id: 3,
            img: '/bautizo/b3.jpg',
            descripcion: 'Hola, estoy interesado en esta torta para bautizo: "Torta 3".'
        },
        {
            id: 4,
            img: '/bautizo/b4.jpg',
            descripcion: 'Hola, estoy interesado en esta torta para bautizo: "Torta 4".'
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
                        <img src={nino.img} alt="bautizo" className="categoria-imagen" />
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
                    onClick={() => handleWhatsApp('Hola, quiero diseñar una torta personalizada para bautizo.')}
                >
                    Comunícate con nosotros
                </button>
            </div>
        </div>
    );
};

export default Bautizo;
