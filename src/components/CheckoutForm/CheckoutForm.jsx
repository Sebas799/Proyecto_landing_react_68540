import { useState, useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase/config";
import Swal from "sweetalert2";

function CheckoutForm() {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: "", email: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      buyer,
      items: cart,
      total: getTotalPrice(),
      date: new Date(),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      clearCart();

      Swal.fire({
        title: "¡Compra confirmada!",
        text: `Tu ID de orden es: ${docRef.id}`,
        icon: "success",
        confirmButtonText: "Aceptar",
      }).then(() => {
        window.location.href = "/"; // Despues de la alerta volver al Home.
      });

    } catch (error) {
      console.error("Error al generar la orden:", error);

      Swal.fire({
        title: "Error",
        text: "Hubo un problema al procesar la orden. Inténtalo nuevamente.",
        icon: "error",
        confirmButtonText: "Cerrar",
      });
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center flex-column mt-5 w-25 bg-dark p-3 rounded-4">
      <h2 className="p-3 text-center text-light">💸 Check-Out</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="text-light">Nombre</label>
          <input
            type="text"
            className="form-control"
            value={buyer.name}
            onChange={(e) => setBuyer({ ...buyer, name: e.target.value })}
            required
          />
        </div>
        <div className="mb-3">
          <label className="text-light">Email</label>
          <input
            type="email"
            className="form-control"
            value={buyer.email}
            onChange={(e) => setBuyer({ ...buyer, email: e.target.value })}
            required
          />
        </div>
        <div className="d-flex justify-content-center p-3">
          <button type="submit" className="btn btn-success fw-bold">
            Confirmar Compra
          </button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutForm;
