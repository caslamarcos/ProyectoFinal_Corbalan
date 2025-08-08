import { useState } from "react"
import "./ItemCount.css";

const ItemCount = ({stock, addProduct}) => {
    const [count, setCount] = useState(1);

    const handleClickDecrement = ( ) => {
       if ( count > 1){
        setCount (count - 1); 
        }
    };

    const handleClickIncrement = () => {
        if ( count < stock){
        setCount ( count + 1);
        }
    };

  return (
     <div className="container">
      <div className="buttons-row">
        <button className="count-button" onClick={handleClickDecrement}>-</button>
        <p className="count-display">{count}</p>
        <button className="count-button" onClick={handleClickIncrement}>+</button>
      </div>
      <button className="count-button" onClick={() => addProduct(count)}>Añadir al carrito</button>
    </div>
  )
}

export default ItemCount