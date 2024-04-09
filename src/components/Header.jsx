import logo from "../assets/logo.png";
import cart from "../assets/shopping-cart.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../App";

export default function Header() {
  const { cartItems } = useContext(ShopContext);

  return (
    <header>
      <Link to={"/"}>
        <img className="logo" src={logo} alt="stark industries" />
      </Link>
      <div className="navbar">
        <nav>
          <Link to={"about"}>About Us</Link>
          <Link to={"sale"}>Sale</Link>
          <Link to={"shop"}>Shop All</Link>
        </nav>
        <Link to={"cart"}>
          <div className="shopping-cart">
            <img src={cart} alt="shopping cart" />
            <h5>{cartItems.reduce((acc, curr) => acc + curr.quantity, 0)}</h5>
          </div>
        </Link>
      </div>
    </header>
  );
}
