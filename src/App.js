import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { swalMsg } from "../src/swal/swal"


function App() {
  const greeting = "BIENVENIDOS A PLANET BOOK";
  const title = " LISTADO DE PRODUCTOS ";
  swalMsg();
  
  
  return (
    <CartProvider>
      <div className="appContainer">
        <BrowserRouter>
          <NavBar />
         
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting={greeting} title={title} />}
            ></Route>
            <Route
              path="categoria/:categoriaId"
              element={<ItemListContainer greeting={greeting} title={title} />}
            ></Route>
            <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
