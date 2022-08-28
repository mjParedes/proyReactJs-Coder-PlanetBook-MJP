import React from 'react'
import "../styles/Header.css"
import imagen from "../assets/womanTree.jpg";

const Header = () => {
  
  return (
    <div className="headerContainer">
      <div className="titleHeader">
        <h1>PLANET BOOK</h1>
        <h3>Lee y conduciras,</h3>
        <h3>no leas y seras conducido.</h3>
      </div>

      <div className="imgHeader">
        <img src={imagen} alt="imagen header" />
      </div>
    </div>
  );
};


export default Header



