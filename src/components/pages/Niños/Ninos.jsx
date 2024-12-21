import React from 'react'
import './Ninos.css'

const Ninos = () => {

    const ninos = [
        {
            id: 1,
            img: '/ninos/n1.jpg',
            descripcion: 'hola'
        },
        {
            id: 2,
            img: '/ninos/n2.jpg',
            descripcion: 'hola'
        },
        {
            id: 3,
            img: '/ninos/n4.jpg',
            descripcion: 'hola'
        },
        {
            id: 4,
            img: '/ninos/n4.jpg',
            descripcion: 'hola'
        },
        {
            id: 5,
            img: '/ninos/n5.jpg',
            descripcion: 'hola'
        },
        {
            id: 6,
            img: '/ninos/n6.jpg',
            descripcion: 'hola'
        },
        {
            id: 7,
            img: '/ninos/n7.jpg',
            descripcion: 'hola'
        },
        {
            id: 8,
            img: '/ninos/n8.jpg',
            descripcion: 'hola'
        },
        {
            id: 9,
            img: '/ninos/n9.jpg',
            descripcion: 'hola'
        },
    ]


  return (
    <div className='ninos'>
        <div>
            <h2>Desliza para conocer más</h2>
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

export default Ninos
