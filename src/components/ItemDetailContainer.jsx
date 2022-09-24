import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { SpinnerCircularFixed } from 'spinners-react'
import ItemDetail from './ItemDetail'
import "../styles/ItemDetailContainer.css";
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase'
// import { data } from "../mocks/DataBase"


const ItemDetailContainer = () => {
  const [ producto, setProducto] = useState({})
  const [loading, setLoading] = useState(true)
  const{ id } = useParams()

  useEffect(() => {
    const coleccionProductos = collection(db,"productos")
    const referenciaDoc = doc(coleccionProductos, id)

    getDoc(referenciaDoc)
    .then((result) =>{
      setProducto({
        id:result.id, 
        ...result.data()})
    })
    .catch((error)=> console.log(error))
    .finally(() => setLoading(false))
  },[id])

  
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
