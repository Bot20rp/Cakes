import React from 'react'
import './Graduacion.css'

const Graduacion = () => {

    const ninos = [
        {
            id: 1,
            img: '/graduacion/g1.jpg',
            descripcion: 'hola'
        },
        {
            id: 2,
            img: '/graduacion/g2.jpg',
            descripcion: 'hola'
        },
        {
            id: 3,
            img: '/graduacion/g3.jpg',
            descripcion: 'hola'
        },
        {
            id: 4,
            img: '/graduacion/g4.jpg',
            descripcion: 'hola'
        },
        {
            id: 5,
            img: '/graduacion/g5.jpg',
            descripcion: 'hola'
        },
        {
            id: 6,
            img: '/graduacion/g6.jpg',
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

export default Graduacion
