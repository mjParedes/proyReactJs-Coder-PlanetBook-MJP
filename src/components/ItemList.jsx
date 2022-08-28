import React from 'react'

function ItemList() {

    const productos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{id:"001", name:"Harry Potter", origen:"UK"}])
        }, 3000);
            reject("No se encuentra disponible")
    })
    productos.then((prods) => {
        console.log(prods)
    })
  
    return (
    <div>
      
    </div>
  )
}

export default ItemList
