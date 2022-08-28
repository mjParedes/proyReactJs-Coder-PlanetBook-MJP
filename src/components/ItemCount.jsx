import React, { useState } from "react";
import { Button } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const ItemCount = ({ stock, valorInicial, onAdd }) => {
  const [contador, setContador] = useState(valorInicial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <Button variant="outlined" onClick={sumar} size="small">
        +
      </Button>
      <span style={{ padding: "20px" }}>{contador}</span>
      <Button variant="outlined" onClick={restar} size="small">
        -
      </Button>
      <br />
      <br />
      <Button
        variant="contained"
        size="medium"
        endIcon={<ShoppingBagIcon variant="contained" />}
        onClick={() => {
          if (contador > 0) {
            onAdd(contador);
          }
        }}
      >
        AGREGAR AL CARRITO
      </Button>
    </div>
  );
};

export default ItemCount;
