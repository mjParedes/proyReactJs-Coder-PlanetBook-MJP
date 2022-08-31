import React, { useState, useEffect } from "react";
import { fetchData } from "../js/fetchData";
import ItemList from "./ItemList";
import productos from "../js/productos";
import "../styles/ItemListContainer.css"

function ItemListContainer({ greeting, title }) {
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
    fetchData(productos)
      .then((data) => setListProducts(data));
  }, []);

  console.log(listProducts);

  return (
    <div className="contenedorItems">
      <h1>{greeting}</h1>
      <h2>{title}</h2>
        
      <ItemList listProducts={listProducts} />
    </div>
  );
}

export default ItemListContainer;
