import React, { useState, useEffect } from 'react'
import { data } from "../mocks/DataBase"
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
  const [ producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
   data
    .then((res) => setProducto(res.find((item)=> item.id === "03")))
    .catch((err) => console.log(err))
    .finally(() => setLoading(false))
  }, [])
  
  console.log(producto)
  
  return (
    <div>
      {loading ? <h1 style={{textAlign:"center"}}>CARGANDO PRODUCTOS....</h1> : <ItemDetail producto={producto} />}
    </div>
  )
}

export default ItemDetailContainer
