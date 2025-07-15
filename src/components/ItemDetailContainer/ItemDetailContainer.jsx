import useProduct from "../../hooks/useProduct.js"
import Loading from "../Loading/Loading";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const {product, loading} = useProduct ();


  return (
    <div>
        {
            loading ? <Loading /> : <ItemDetail product={product} />
        }
    </div>
  )
}

export default ItemDetailContainer