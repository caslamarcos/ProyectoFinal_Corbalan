import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const ItemDetail = ({ product = {} }) => {
  const { addProductInCart } = useContext (CartContext);

  const addProduct = ( quantity ) => {
    const productCart = { ...product, quantity}
    //AÑADIR ESE PROCUTO AL CARRITO PENDIENTE DE HACER
    addProductInCart(productCart);


  }

  return (
    <div className="item-detail-container">
      <div className="img-detail-container">
        <img src={product.image} alt={product.name} className="img-detail" />
      </div>

      <div className="details-container">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="price">$ {product.price}</p>
        <ItemCount stock={product.stock} addProduct={addProduct}/>

        <p>Stock disponible: {product.stock}</p>


        {/* Acá iría el contador y el botón para agregar al carrito (si lo vas a hacer después) */}
        {/* <ItemCount /> */}
        {/* <button className="add-to-cart-btn">Agregar al carrito</button> */}
      </div>
    </div>
  );
};

export default ItemDetail;