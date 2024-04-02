import logo from "../assets/logo.png";
import cart from "../assets/shopping-cart.png";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <Link className="logo" to={"/"}>
        <img src={logo} alt="stark industries" />
      </Link>
      <nav>
        <Link to={"about"}>About Us</Link>
        <Link to={"sale"}>Sale</Link>
        <Link to={"shop"}>Shop All</Link>
      </nav>
      <Link className="shopping-cart" to={"cart"}>
        <img src={cart} alt="shopping cart" />
      </Link>
    </header>
  );
}
