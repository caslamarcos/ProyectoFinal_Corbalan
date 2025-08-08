import { createContext, useState } from "react";

//creamos el contexto al carrito
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addProductInCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id
      );

      if (existingProductIndex !== -1) {

        const updatedCart = [...prevCart];

        updatedCart[existingProductIndex].quantity += product.quantity;

        return updatedCart;

      } else {
        
        return [...prevCart, product];
      }
    });
  };

  const totalQuantity = () => {
    const total = cart.reduce((total, product) => total + product.quantity, 0);
    return total;
  };

  const totalPrice = () => {
    const total = cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    return total;
  };

  const deleteProductById = (id) => {
    const productsFilter = cart.filter((product) => product.id !== id);
    setCart(productsFilter);
  };

  const clearCart = () => {
  setCart([]);
};

  return (
    <CartContext.Provider
      value={{
        cart,
        addProductInCart,
        totalQuantity,
        totalPrice,
        deleteProductById,
        clearCart,
      }}>
    
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };