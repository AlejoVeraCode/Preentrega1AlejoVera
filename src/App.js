
import './App.css';
import Navbar from './Components/Navbar/Navbar.js';
import ItemListContainer from './Components/ContenedorItems/ItemListContainer';
import Categories from './Components/Categories/Categories';



function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Categories/>
      <ItemListContainer greeting={"Bienvenidos"}/>
      
      
    </div>
  );
}

export default App;
