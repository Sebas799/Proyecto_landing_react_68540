import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

function CartWidget() {
  const { cart } = useCart();
  const navigate = useNavigate();

  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <div className="text-light p-3 fs-5" onClick={goToCart} style={{ cursor: "pointer" }}>
      🛒 <span>({cart.length})</span>
    </div>
  );
}

export default CartWidget;
