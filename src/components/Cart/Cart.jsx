import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const Cart = () => {
    const {cart, totalPrice, deleteProductById} = useContext(CartContext);
  return (
    <div>

        <h2>TU CARRITO DE COMPRAS:</h2>
        
        {
        cart.map((productCart) => (
            
            <div key={productCart.id} style={{display: "flex", justifyContent: "space-around", alignItems: "center", color: "white"}}>
                

                <img src={productCart.image} alt="" width={200} />
                <p>{productCart.name}</p>
                <p>c/u ${productCart.price}</p>
                <p>cantidad: {productCart.quantity}</p>
                <p>Precio Parcial: ${productCart.price * productCart.quantity} </p>
                <button onClick={ () => deleteProductById(productCart.id)}>Eliminar</button>

            </div>
        ))
        }
        <div>
        
        <Link to="/checkout">Continuar con mi compra</Link>
        <p>Total de compra: ${totalPrice()}</p>
        </div>
    </div>
  )
}

export default Cart