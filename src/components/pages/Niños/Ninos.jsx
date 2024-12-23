import React from 'react';
import './Ninos.css';

const Ninos = () => {
    const ninos = [
        {
            id: 1,
            img: '/ninos/n1.jpg',
            descripcion: 'Hola, estoy interesado en este diseño para niños: "Diseño 1".'
        },
        {
            id: 2,
            img: '/ninos/n2.jpg',
            descripcion: 'Hola, estoy interesado en este diseño para niños: "Diseño 2".'
        },
        {
            id: 3,
            img: '/ninos/n3.jpg',
            descripcion: 'Hola, estoy interesado en este diseño para niños: "Diseño 3".'
        },
        {
            id: 4,
            img: '/ninos/n4.jpg',
            descripcion: 'Hola, estoy interesado en este diseño para niños: "Diseño 4".'
        },
        {
            id: 5,
            img: '/ninos/n5.jpg',
            descripcion: 'Hola, estoy interesado en este diseño para niños: "Diseño 5".'
        },
        {
            id: 6,
            img: '/ninos/n6.jpg',
            descripcion: 'Hola, estoy interesado en este diseño para niños: "Diseño 6".'
        },
        {
            id: 7,
            img: '/ninos/n7.jpg',
            descripcion: 'Hola, estoy interesado en este diseño para niños: "Diseño 7".'
        },
        {
            id: 8,
            img: '/ninos/n8.jpg',
            descripcion: 'Hola, estoy interesado en este diseño para niños: "Diseño 8".'
        },
        {
            id: 9,
            img: '/ninos/n9.jpg',
            descripcion: 'Hola, estoy interesado en este diseño para niños: "Diseño 9".'
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
                        <img src={nino.img} alt="diseño para niños" className="categoria-imagen" />
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
                    onClick={() => handleWhatsApp('Hola, quiero diseñar un modelo personalizado para niños.')}
                >
                    Comunícate con nosotros
                </button>
            </div>
        </div>
    );
};

export default Ninos;
