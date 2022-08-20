import React from 'react'

function ItemListContainer(props) {
  return (
    <div style={{textAlign:"center", padding:"20px"}}>
        <h2>{props.greeting}</h2>
    </div>
  )
}

export default ItemListContainer
