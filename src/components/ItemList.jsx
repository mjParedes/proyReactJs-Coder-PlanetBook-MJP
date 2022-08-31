import Item from "./Item"
import "../styles/ItemList.css"

const ItemList = ({ listProducts }) => {
    return (
        <div className="cardContainer">
            {listProducts.map((product) => {
                return (
                <Item key={product.id} producto={product}/>
                )
            })}
        </div>
    );
};

export default ItemList
