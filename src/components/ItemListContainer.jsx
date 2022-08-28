import React from 'react'
import ItemCount from "./ItemCount"
// import ItemList from './ItemList'

function ItemListContainer( { greeting, title } ) {
  const stock = 10;
  const valorInicial = 1;


  const onAdd = (resultado) => {
    console.log(`Se han comprado ${resultado} unidades `)
  }

    return (
      <div style={{textAlign:"center", padding:"20px"}}>
          <h2>{ greeting }</h2>
          <h3 style={{margin:"10px"}}>{title}</h3>

          <ItemCount stock={stock} valorInicial={valorInicial} onAdd={onAdd}  />

          {/* <ItemList /> */}
      </div>
      
  )
}

export default ItemListContainer
