import React from 'react'
import './Otro.css'

const Otro = () => {
    const ninos = [
        {
            id: 1,
            img: '/ninos/n1.jpg',
            descripcion: 'hola'
        },
        {
            id: 2,
            img: '/otros/o2.jpg',
            descripcion: 'hola'
        },
        {
            id: 3,
            img: '/otros/o3.jpg',
            descripcion: 'hola'
        },
        {
            id: 4,
            img: '/otros/o4.jpg',
            descripcion: 'hola'
        },
        {
            id: 5,
            img: '/otros/o5.jpg',
            descripcion: 'hola'
        },
        {
            id: 6,
            img: '/otros/o6.jpg',
            descripcion: 'hola'
        },
        {
            id: 7,
            img: '/otros/o7.jpg',
            descripcion: 'hola'
        },
        {
            id: 8,
            img: '/otros/o8.jpg',
            descripcion: 'hola'
        },
    ]
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
                        <button className="categoria-boton">Cotizar</button>
                    </div>
                ))}
        </div>

       <div id='pedir'>
            <h3>Crea tu propio diseño haciendo click abajo</h3>
            <button>Comunicate con nosotros</button>
       </div>

    </div>
  )
}

export default Otro
