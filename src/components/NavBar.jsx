import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../styles/NavBar.css"
import CartWidget from "./CartWidget";
import logo from "../assets/logoProyReact.png"




const NavBar = () => {
  
   
  return (
    <nav className="navMenu">
      <Link className="brand" to="/">
        <img src={logo} alt="logo Brand" width={280} height={60}/>
      </Link>
      <ul>
        <li>
          <NavLink className="navLink" to="/categoria/nuevos">
            nuevos
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/categoria/oferta">
            ofertas
          </NavLink>
        </li>
        <li>
          <NavLink className="navLink" to="/categoria/vendidos">
            mas vendidos
          </NavLink>
        </li>
      </ul>
      <i>
        <NavLink className="cart" to="/cart">
          <CartWidget />
        </NavLink>
      </i>
    </nav>
  );
}

export default NavBar