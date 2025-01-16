import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

import Logo from '@/imgs/logo.png'

export default function Header() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      // Agregar el listener de resize
      window.addEventListener('resize', handleResize);
  
      // Limpieza del listener al desmontar el componente
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

  return (
    <>
      <header>
        <a href="#inicio" className="icon">
          <img src={Logo} alt="Logotipo" />
        </a>
        <a href="#inicio" className="titulo">
          <h1>Acea {(windowWidth < 640) || (<>Restauraciones</>)}</h1>
        </a>
        <nav>
            {(windowWidth < 1015) || (<>
                <a href="#info" class="btn">Info</a>
                <hr />
                <a href="#precios" class="btn">Precios</a>
                <hr />
                <a href="#preguntasfrecuentes" class="btn">Preguntas frecuentes</a>
                <hr />
            </>)}
            {/* <Link to="Presupuesto">Pedir presupuesto</Link> */}
        </nav>
      </header>
      <div className="separadorHeader"/>
    </>
  )
}
