import React from "react";
import { useCart } from "../context/CartContext";
import CartItem from "./CartItem"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navegar = useNavigate()
  const { cart, clear, cartTotal } = useCart();


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        padding: "3rem",
      }}
    >
      {!cart.length ? (
        <div>
          <h1>TU CARRITO ESTA VACIO</h1>
          <h2>Visita nuestro catalogo de productos</h2>
          <Button onClick={() => navegar("/")}>Ver productos</Button>
        </div>
      ) : (
        <div>
          <h1>CART-PLANET BOOK</h1>
          {cart.map((articulo) => (
            <CartItem key={articulo.id} articulo={articulo} />
          ))}
          <h3 style={{ marginBottom: "1.5rem" }}>
            TOTAL A PAGAR:  $ {cartTotal().toLocaleString()}
          </h3>
          <div>
            <Button variant="contained" color="success" onClick={() => navegar("/checkout")}>
              Finalizar compra
            </Button>
            <Button variant="contained" color="error" onClick={clear}>
              Vaciar carrito
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
