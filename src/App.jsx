import './App.css';
import Navbar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';

//logica
function App() {
  
  const saludo = "hola mundo"

  //todo lo que es visual
  
  return (
      <div className = "app-container">
        <NavBar />
        <ItemListContainer saludo={ "Bienvenidos a mi ecomerce" } numero={ 5 } />
       
      </div>
  ) 
}

export default App
