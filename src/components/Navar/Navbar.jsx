import React from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import "./Navbar.css";
/* Icono de usuario */
import { FaUser } from "react-icons/fa";
/* Icono de carrito */
import { IoCart } from "react-icons/io5";
import { useState } from "react";


export const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <>
      <nav className="navbar">
        {/* <h3 className="logo">"TORTAS YA"</h3> */}

        {/* Enlaces de navegación */}
        <ul
          className={mobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobile(false)}
        >
          <Link to="/">
            <li>Home</li>
          </Link>
        </ul>

        {/* Iconos de usuario y carrito */}
        {/* link para el usuario  */}
        <div className="icons">
             <Link to={"/login"}>
          <FaUser className="icon" />
        
        </Link>
          {/* link para el carrito  */}
        </div>

        {/* Botón del menú hamburguesa */}
        <button className="mobiles-menu" onClick={() => setMobile(!mobile)}>
          {mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  );
};
