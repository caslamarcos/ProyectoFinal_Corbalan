import { createContext, useState } from "react";

//creamo el contexto al carrito
const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    
    //tarea para casa agregar mediante condicional, sumarle el producto agregado al que ya esta en el carrito
    const addProductInCart = (product) => {
        setCart( [...cart, product] );
    };
 
    const totalQuantity = () => {
      const total = cart.reduce((total, product) => total + product.quantity, 0 );
      return total;
    };

    const totalPrice = () => {
      const total = cart.reduce ((total, product) => total + (product.price * product.quantity), 0);
      return total;  
    }

    const deleteProductById = (id) => {
       const productsFilter = cart.filter((product)=> product.id !== id );
       setCart(productsFilter);
    }

    //abajo de precio total eliminar todos los productos de una con boton


    return (
        <CartContext.Provider value={{ cart, addProductInCart, totalQuantity, totalPrice, deleteProductById }}>
            {children}
        </CartContext.Provider>
    )
};

export {CartContext, CartProvider}; 