import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({product}) => {
  return (
    <li className="item-card">
      <div className="img-item-container"> 
          <img className="img-item" src={product.image} alt=""/>
      </div>

      <div className="text-item">
              <p className="title-item">{product.name}</p>
              <p className="price-item">${product.price}</p>
              <p className="stock-item">Quedan: {product.stock}</p>
              <Link to={"/detail/" + product.id } className="Link-no-style">
                <p className="button-item"> MAS INFORMACION</p>
              </Link>
      </div>
            </li>
  )
}

export default Item