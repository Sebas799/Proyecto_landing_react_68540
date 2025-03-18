import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar un producto al carrito
  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  // Eliminar un producto del carrito
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Limpiar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Calcula el total de unidades en el carrito
  const getTotalUnits = () => cart.reduce((acc, item) => acc + item.quantity, 0);

  // Calcula el total del carrito (suma de subtotales)
  const getTotalPrice = () => cart.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, getTotalUnits, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
