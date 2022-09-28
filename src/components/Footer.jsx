import { Typography } from "@mui/material";
import React from "react";


function Footer() {
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, #e41e58, #e20078, #cf00a0, #a400cb, #313af4)",
        color: "#ffffff",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <Typography variant="body1">
        Desarrollado & diseñado por MatuDevs __ Todos los derechos reservados
        2022
      </Typography>

    </div>
  );
}

export default Footer;
