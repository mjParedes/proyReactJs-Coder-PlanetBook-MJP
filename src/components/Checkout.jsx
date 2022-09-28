import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { db } from "../firebase/firebase";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import { SpinnerCircularFixed } from "spinners-react";
import { Button, Typography } from "@mui/material";

const Checkout = () => {
  const [comprador, setComprador] = useState({});
  const [orderId, setOrderId] = useState("");
  const [mensaje, setMensaje] = useState(false);
  const [loader, setLoader] = useState(false);
  const [ estado, setEstado] = useState("generada")
  const { cart, cartTotal, clear } = useCart();
  const navigate = useNavigate();
  
  const datosComprador = (e) => {
    setComprador({
      ...comprador,
      [e.target.name]: e.target.value,
    });
  };

  const finalizarCompra = (e) => {
    e.preventDefault();
    if ((Object.values(comprador).length !== 3)){
      setMensaje(true);
    } else {
      setMensaje(false);
      setLoader(true);
      const ventas = collection(db, "orders");
      addDoc(ventas, {
        comprador,
        items: cart,
        total: cartTotal(),
        date: serverTimestamp(),
        state: estado
      })
        .then((res) => {
          setOrderId(res.id);
          clear();
        })
        .catch((error) => console.log(error))
        .finally(() => setLoader(false));
    }
  };
  if (loader) {
    return (
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SpinnerCircularFixed
          size={70}
          thickness={100}
          speed={100}
          color="rgba(25, 118, 210, 1)"
          secondaryColor="rgba(0, 0, 0, 0.44)"
        />
      </div>
    );
  }
  return (
    <div style={{ textAlign: "center" }} >
      {!orderId ? (
        <div
          style={{
            margin: "20px",
            marginBottom:"240px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h3">CHECKOUT</Typography>
          <Typography variant="h5" sx={{ margin: "10px 0 5px 0" }}>
            COMPLETA TUS DATOS Y FINALIZA TU COMPRA
          </Typography>
          <form
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "5px",
            }}
            onSubmit={finalizarCompra}
          >
            <div>
              <label style={{ marginRight: "8px" }}>Nombre Completo</label>
              <input
                type="text"
                placeholder="Santiago Bernabeú"
                name="name"
                onChange={datosComprador}
              />
            </div>
            <div>
              <label style={{ marginRight: "8px" }}>Numero de telefono</label>
              <input
                type="number"
                placeholder="1109122018"
                name="phone"
                onChange={datosComprador}
              />
            </div>
            <div>
              <label style={{ marginRight: "8px" }}>E-mail</label>
              <input
                type="email"
                placeholder="yvaeltercero@gmail.com"
                name="email"
                onChange={datosComprador}
              />
            </div>
            <Button
              variant="contained"
              color="success"
              type="submit"
              sx={{ margin: "20px" }}
            >
              Finalizar Compra
            </Button>
            {mensaje && (
              <p style={{ color: "red" }}>
                {" "}
                Por favor complete todos los campos
              </p>
            )}
          </form>
        </div>
      ) : (
        <div
          style={{
            margin: "20px",
            marginBottom:"375px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>Muchas gracias por su compra!</h2>
          <h4>Su orden es: {orderId}</h4>
          <Button
            color="error"
            sx={{ margin: "20px" }}
            variant="contained"
            onClick={() => navigate("/")}
          >
            Volver
          </Button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
