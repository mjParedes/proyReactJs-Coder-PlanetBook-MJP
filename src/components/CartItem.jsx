import React from 'react'
import { Button } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { useCart } from "../context/CartContext";
import "../styles/CartItem.css"

const CartItem = ({ articulo }) => {
  const { removeItem } = useCart()

  return (
    <div className="cardItem">
      <img src={articulo.img} alt={articulo.titulo} />
      <p>{articulo.titulo}</p>
      <p>{articulo.quantity}</p>
      <p>$ {articulo.precio.toLocaleString()}</p>
      <Button onClick={() => removeItem(articulo.id)} endIcon={<CancelIcon />} size="Medium"></Button>
    </div>
  );
}

export default CartItem