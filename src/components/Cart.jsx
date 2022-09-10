import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart } = useCart();
  console.log("carrito", cart);
  return <div>Cart</div>;
};

export default Cart;
