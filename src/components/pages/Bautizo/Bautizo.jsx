import React from 'react'
import './Bautizo.css'

const Bautizo = () => {
    const ninos = [
        {
            id: 1,
            img: '/bautizo/b1.jpg',
            descripcion: 'hola'
        },
        {
            id: 2,
            img: '/bautizo/b2.jpg',
            descripcion: 'hola'
        },
        {
            id: 3,
            img: '/bautizo/b3.jpg',
            descripcion: 'hola'
        },
        {
            id: 4,
            img: '/bautizo/b4.jpg',
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

export default Bautizo
