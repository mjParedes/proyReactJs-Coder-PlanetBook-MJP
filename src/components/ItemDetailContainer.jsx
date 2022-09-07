import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { SpinnerCircularFixed } from 'spinners-react'
import { data } from "../mocks/DataBase"
import ItemDetail from './ItemDetail'
import "../styles/ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [ producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)
  const{ id } = useParams()

  useEffect(() => {
   data
    .then((res) => setProducto(res.find((item)=> item.id === id)))
    .catch((err) => console.log(err))
    .finally(() => setLoading(false))
  }, [id])
  
  // console.log(producto)
  
  return (
    <div className="detailContainer">
     
      {loading ? (
        <SpinnerCircularFixed
          size={70}
          thickness={100}
          speed={100}
          color="rgba(25, 118, 210, 1)"
          secondaryColor="rgba(0, 0, 0, 0.44)"
        />
      ) : (
        <ItemDetail producto={producto} />
      )}
    </div>
  );
}

export default ItemDetailContainer
