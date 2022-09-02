import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Footer from './components/Footer';

function App() {
  const greeting= "Bienvenidos a PLANET BOOK"
  const title = " 📚 Listado de productos 📚 ";
   
  return (
    <div className="appContainer">
      <NavBar />
      
      <Header />

      <ItemListContainer greeting={ greeting } title= { title } />

      <ItemDetailContainer />

      <Footer />
      
    </div>
  );
}

export default App;
