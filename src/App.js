import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  const greeting= "Bienvenidos a PLANET BOOK"
  
  return (
    <div className="appContainer">
      <NavBar />

      <ItemListContainer greeting={greeting} />

      <Header />

      
    </div>
  );
}

export default App;
