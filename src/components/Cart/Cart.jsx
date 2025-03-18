import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import CartItem from "../Cart/CartItem";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, getTotalPrice, clearCart, removeFromCart } = useContext(CartContext);

  if (cart.length === 0)
    return (
      <div className="d-flex flex-column container mt-4 text-center justify-content-center align-items-center">
        <h2 className="p-5">El carrito está vacío</h2>
        <img className="w-25 h-50" src="https://img.freepik.com/vector-gratis/ilustracion-caja-carton-abierta_1308-178353.jpg?t=st=1742096528~exp=1742100128~hmac=dae931b096b1c408e0a2d3811b87b73a915ee30ddf418fe93663ff78a242f44f&w=740" alt="caja vacia" />
        <Link to="/"><button className="m-4 p-3 rounded-2 fw-bold">Volver al catálogo</button></Link>
      </div>
    );

  return (
    <div className="container mt-2 p-5 text-end">
      <h2 className="text-center p-4">Carrito de Compras</h2>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}
      <h3 className="p-3">Total: ${getTotalPrice()}</h3>
      <button className="btn btn-danger" onClick={clearCart}>
        Vaciar Carrito
      </button>
      <Link to="/checkout" className="btn btn-success ms-3">
        Finalizar Compra
      </Link>
    </div>
  );
}

export default Cart;
