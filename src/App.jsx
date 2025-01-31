import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenido a nuestra tienda!" />
    </>
  )
}

export default App
