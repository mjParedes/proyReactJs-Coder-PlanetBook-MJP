import React from 'react'
import "../styles/Header.css"
import Typography from '@mui/material/Typography'
import imagen from "../assets/womanTree.jpg";

const Header = () => {
  
  return (
    <div className="headerContainer">
      <div className="titleHeader">
        <Typography variant="h2" color="primary">
          PLANET BOOK
        </Typography>

        <Typography variant="h4" color="inherit">
          Lee y <strong>conducirás</strong>,
        </Typography>

        <Typography variant="h4" color="inherit">
          no leas y serás <strong>conducido</strong>.
        </Typography>
      </div>
      <div className="imgHeader">
        <img src={imagen} alt="imagen header" />
      </div>
    </div>
  );
};


export default Header
