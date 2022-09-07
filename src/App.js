import "./App.css";
import Header from "./components/Header";
// import NavBar from './components/NavBar';
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  const greeting = "Bienvenidos a PLANET BOOK";
  const title = " 📚 Listado de productos 📚 ";

  return (
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
