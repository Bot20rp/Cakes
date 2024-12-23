import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Principal from './components/pages/Principal';
import { Navbar } from './components/Navar/Navbar';
import "./App.css"

import Ninos from './components/pages/Niños/Ninos';
import Bautizo from './components/pages/Bautizo/Bautizo';
import Graduacion from './components/pages/Graduacion/Graduacion';
import Matrimonio from './components/pages/Matrimonio/Matrimonio';
import Otro from './components/pages/Otros/Otro';
import Quince from './components/pages/Quince/Quince';

function App() {
  const [entrada, setEntrada] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setEntrada(false), 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {
        entrada ? (
          <div className='contenedor' >
            <div className="video-container">
              <video autoPlay muted onEnded={() => setEntrada(false)} style={{ width: '50%' }}>
                <source src="/video/entrada.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

        ) : (
          <Main/>
        )
      }
    </BrowserRouter>
  )
}

function Main() {
  return (
    <div>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Principal/>} />
      <Route path="/niños" element={<Ninos/>} />
      <Route path="/matrimonio" element={<Matrimonio/>} />
      <Route path="/graduacion" element={<Graduacion/>} />
      <Route path="/otro" element={<Otro/>} />
      <Route path="/bautizo" element={<Bautizo/>} />
      <Route path="/quince" element={<Quince/>} />
      </Routes>
    </div>
  )
}

export default App
