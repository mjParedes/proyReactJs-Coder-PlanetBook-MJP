import React, { useState } from "react";
import { Button } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const ItemCount = () => {
  
  const [contador, setContador] = useState(1);

  const increase = () => {
    if(contador < 10){
      setContador(contador + 1)
    }
  };

  const decrease = () => {
    if(contador > 1 ){
      setContador(contador - 1)
    }
  };

  const onAdd = () => {
    console.log(`Ha agregado ${contador} articulos al carro`);
  };

  return (
    <div>
      <Button variant="contained" onClick={increase} size="small">
        +
      </Button>
      <span style={{ padding: "15px" }}>{contador}</span>
      <Button variant="contained" onClick={decrease} size="small">
        -
      </Button>
      <br /> <br />
      <Button
        variant="contained"
        size="medium"
        endIcon={<ShoppingBagIcon variant="contained" />}
        onClick={() => {
          if (contador > 0) {
            onAdd();
          }
        }}
      >
        AGREGAR AL CARRITO
      </Button>
    </div>
  );
};

export default ItemCount;
