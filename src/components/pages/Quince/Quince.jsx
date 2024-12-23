import React from 'react';
import './Quince.css';

const Quince = () => {
    const ninos = [
        {
            id: 1,
            img: '/quince/q1.jpg',
            descripcion: 'Hola, estoy interesado en este diseño para quinceañeras: "Diseño 1".'
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
                        <img src={nino.img} alt="quinceañera" className="categoria-imagen" />
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
                    onClick={() => handleWhatsApp('Hola, quiero diseñar un modelo personalizado para quinceañeras.')}
                >
                    Comunícate con nosotros
                </button>
            </div>
        </div>
    );
};

export default Quince;
