import "./Item.css";

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
              <p className="button-item"> MAS INFORMACION</p>
      </div>
            </li>
  )
}

export default Item