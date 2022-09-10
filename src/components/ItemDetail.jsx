import React, { useState } from "react";
import ItemCount from "./ItemCount";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Button } from "@mui/material";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";

const ItemDetail = ({ producto }) => {
  const [count, setCount] = useState(1);
  const [compra, setCompra] = useState(false);
  const { titulo, id, detalle, precio, stock, img } = producto;
  const navegar = useNavigate();
  const { addItem } = useCart();

  const onAdd = () => {
    let purchase = {
      id,
      titulo,
      precio,
      stock,
      img,
      quantity: count,
    };
    setCompra(true);
    addItem(purchase);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <h1>Detalle de: {titulo}</h1>
      <img src={img} alt={titulo} style={{ width: "15rem", margin: "20px" }} />
      <h4 style={{ margin: "15px" }}>{detalle}</h4>
      <h3 style={{ margin: "15px" }}>${precio}</h3>
      {!compra ? (
        <ItemCount
          stock={stock}
          initial={1}
          onAdd={onAdd}
          count={count}
          setCount={setCount}
        />
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => navegar("/")}
            variant="contained"
            sx={{ mx: 2 }}
            endIcon=<LibraryAddIcon />
          >
            Seguir Comprando
          </Button>
          <Button
            onClick={() => navegar("/cart")}
            variant="contained"
            sx={{ mx: 2 }}
            endIcon=<MonetizationOnIcon />
          >
            Finalizar Compra
          </Button>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
