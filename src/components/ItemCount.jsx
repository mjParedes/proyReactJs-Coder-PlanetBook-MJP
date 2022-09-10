import React, { useState } from "react";
import { Button } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const ItemCount = ({ stock, initial, onAdd, count,setCount }) => {
  
  const incrementar = () => {
    if(count < stock){
      setCount(count + 1)
    }
  };

  const decrementar = () => {
    if(count > initial ){
      setCount(count - 1)
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={incrementar} size="small">
        +
      </Button>
      <span style={{ padding: "15px" }}>{count}</span>
      <Button variant="contained" onClick={decrementar} size="small">
        -
      </Button>
      <br /> <br />
      <Button
        color="success"
        variant="contained"
        size="large"
        endIcon={<ShoppingBagIcon variant="contained" />}
        onClick={onAdd}
      >
        COMPRAR
      </Button>
    </div>
  );
};

export default ItemCount;
