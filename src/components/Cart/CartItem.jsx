import { useState } from "react";
import { FaTrash } from "react-icons/fa";

function CartItem({ item, removeFromCart }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="card mb-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        transition: "0.3s ease",
        borderRadius: "8px",
      }}
    >
      <div className="card-body d-flex align-items-center">
        <img
          src={item.image}
          className="me-3"
          alt={item.name}
          style={{ width: "150px", height: "150px", objectFit: "contain" }}
        />

        <div className="flex-grow-1 text-start">
          <h5>{item.name}</h5>
          <p>Cantidad: {item.quantity}</p>
        </div>

        <div className="text-end">
          <p>Subtotal: ${item.quantity * item.price}</p>
        </div>

        {/* Icono de eliminar del carrito */}
        {hovered && (
          <FaTrash
            onClick={() => removeFromCart(item.id)}
            style={{
              cursor: "pointer",
              color: "black",
              fontSize: "1.2rem",
              position: "absolute",
              right: "10px",
              top: "10px",
            }}
          />
        )}
      </div>
    </div>
  );
}

export default CartItem;
