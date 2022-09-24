import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  const greeting = "Bienvenidos a PLANET BOOK";
  const title = " 📚 Listado de productos 📚 ";

  return (
    <CartProvider>
      <div className="appContainer">
        <BrowserRouter>
          <NavBar />
          <Header />
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
