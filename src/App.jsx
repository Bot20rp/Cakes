import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Principal from './components/pages/Principal';
import { Navbar } from './components/Navar/Navbar';
import "./App.css"

import Ninos from './components/pages/Niños/Ninos';

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
      </Routes>
    </div>
  )
}

export default App
