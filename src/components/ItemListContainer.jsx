import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { data } from "../mocks/DataBase"
import "../styles/ItemListContainer.css"
import { SpinnerCircularFixed } from "spinners-react";
import { useParams } from "react-router-dom"

function ItemListContainer({ greeting, title }) {
  const [listProducts, setListProducts] = useState([]);
  const [ loading, setLoading] = useState(true)
  const { categoriaId } = useParams()

  useEffect(() => {
    data
      .then((res) => {
        if (categoriaId) {
          setListProducts(res.filter((item) => item.categoria === categoriaId));
        } else {
          setListProducts(res);
        }
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [categoriaId]);

  // console.log(listProducts);

  return (
    <div className="contenedorItems">
      <h1>{greeting}</h1>
      <h2>{title}</h2>
      {loading ? (
        <SpinnerCircularFixed
          size={100}
          thickness={140}
          speed={80}
          color="rgba(25, 118, 210, 1)"
          secondaryColor="rgba(0, 0, 0, 0.44)"
        />
      ) : (
        <ItemList listProducts={listProducts} />
      )}
    </div>
  );
}

export default ItemListContainer;
