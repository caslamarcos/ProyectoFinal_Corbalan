import useProducts from "../../hooks/useProducts.js";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    const {category} = useParams();
    const { products, loading } = useProducts(category);

 
  return (
    <div className="itemlistcontainer">
        <h2>BIENVENIDOS A MI ECOMMERCE</h2>
        {
          loading ? < Loading /> : <ItemList products={products}/>

        }
        
        
    </div>
  )
}

export default ItemListContainer