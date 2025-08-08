import "./cartwidget.css"
import { GiShoppingCart } from "react-icons/gi";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {
  const {totalQuantity} = useContext(CartContext); 
  

  return (
    <Link to="/cart" className="cartwidget"> 
    
    <GiShoppingCart className="logo-cartwidget"/>
   
    <h2>{totalQuantity()}</h2>
    
    
    
    </Link>
  )
}

export default CartWidget