import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NotFound from './components/NotFound/NotFound';
import './App.css';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer mensaje="¡Bienvenido a nuestra tienda!" />}
        />
        <Route
          path="/category/:categoryId"
          element={<ItemListContainer mensaje="Catálogo de productos" />}
        />
        <Route path="/detail/:productId" element={<ItemDetailContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

