import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import "../styles/ItemListContainer.css";
import { SpinnerCircularFixed } from "spinners-react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase";

function ItemListContainer({ greeting, title }) {
  const [listProducts, setListProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    const productos = categoriaId
      ? query(
          collection(db, "productos"),
          where("categoria", "==", categoriaId)
        )
      : collection(db, "productos");
    getDocs(productos)
      .then((result) => {
        const lista = result.docs.map((producto) => {
          return {
            id: producto.id,
            ...producto.data(),
          };
        });
        setListProducts(lista);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoriaId]);

  return (
    <div className="contenedorItems">
      <h1 style={{ fontSize: "50px", marginBottom: "20px" }}>{greeting}</h1>
      <h2 style={{ fontSize: "30px", marginBottom: "20px" }}>{title}</h2>
      {loading ? (
        <div style={{ marginBottom: "300px" }}>
          <SpinnerCircularFixed
            size={120}
            thickness={140}
            speed={100}
            color="rgba(25, 118, 210, 1)"
            secondaryColor="rgba(0, 0, 0, 0.44)"
          />
        </div>
      ) : (
        <ItemList listProducts={listProducts} />
      )}
    </div>
  );
}

export default ItemListContainer;
