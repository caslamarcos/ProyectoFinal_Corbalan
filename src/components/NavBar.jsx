import "./navbar.css";
import dragonLogo from "../assets/dragon.png";
import CartWidget from "./CartWidget";

const Navbar = () => {
  return (
    <div className="navbar"> 
        <img className="logo" src={dragonLogo} alt="" />

        <ul>
            <li>Teclados</li>
            <li>Mouse</li>
            <li>Auriculares</li>

        </ul>

        <CartWidget />


    </div>
  )
}

export default Navbar;