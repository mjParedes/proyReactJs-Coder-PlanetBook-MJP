import React from "react";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useCart } from "../context/CartContext";


function CartWidget() {
 
  const { cartQuantity } = useCart()
 
  return (
    <>
      <ShoppingBagIcon color="" align="center" sx={{ fontSize: 25 }} />
      <span>{cartQuantity() || ""}</span>
    </>
  );
}

export default CartWidget;

  


