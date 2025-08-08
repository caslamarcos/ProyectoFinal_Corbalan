import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, totalPrice, deleteProductById, clearCart } = useContext(CartContext);

  return (
    <div className="cart-container">
      <h2>Productos en el carrito</h2>

      {cart.length === 0 ? (
        <p>No hay productos en el carrito  </p>
      ) : (
        cart.map((productCart) => (
          <div key={productCart.id} className="cart-item">
            <img src={productCart.image} alt={productCart.name} />

            <div className="cart-item-info">
              <span>{productCart.name}</span>
              <span>precio c/u: ${productCart.price}</span>
              <span>cantidad: {productCart.quantity}</span>
              <span>
                precio parcial: ${productCart.price * productCart.quantity}
              </span>
            </div>

            <button onClick={() => deleteProductById(productCart.id)}>
              🗑️
            </button>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <>
          <div className="cart-total">
            Precio total: ${totalPrice()} 
          </div>
          <div className="cart-buttons">
          <button className="clear-cart-btn" onClick={clearCart}>
          Vaciar carrito
          </button>

          <Link to="/checkout">
            <button className="clear-cart-btn">Continuar con mi compra</button>
          </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;