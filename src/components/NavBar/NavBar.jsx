import "./navbar.css";
import dragonLogo from "../../assets/dragon.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar"> 
        <Link to="/">
        <img className="logo" src={dragonLogo} alt="" />
        </Link>
        <ul className="categories">
            <li> 
              <Link to ="/category/teclados" className="category">Teclado</Link>
            </li>
            <li> 
              <Link to ="/category/mouses" className="category">Mouses</Link> 
            </li>
            <li> 
              <Link to ="/category/auriculares" className="category">Auriculares</Link>
            </li>

        </ul>

        <CartWidget />


    </div>
  )
}

export default Navbar;