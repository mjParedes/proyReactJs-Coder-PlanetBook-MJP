import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { data } from "../mocks/DataBase"
import "../styles/ItemListContainer.css"

function ItemListContainer({ greeting, title }) {
  const [listProducts, setListProducts] = useState([]);

  useEffect(() => {
   data
    .then((res) => setListProducts(res))
    .catch((err) => console.log(err))
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
