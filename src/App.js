import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  const greeting= "Bienvenidos a PLANET BOOK"
  const title = " 📚 Listado de productos 📚 ";
   
  return (
    <div className="appContainer">
      <NavBar />
      
      <Header />

      <ItemListContainer greeting={ greeting } title= { title } />
      
    </div>
  );
}

export default App;
