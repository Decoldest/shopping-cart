import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes.jsx";
import { useState, useEffect, createContext } from "react";

const router = createBrowserRouter(routes);

const items = [
  {
    name: "Arc Reactor",
    price: "4000",
    description: "clean energy",
    image: "./arc-reactor.png",
  },
];

export const ShopContext = createContext({
  shopItems: [],
  cartItems: [],
  // addToCart: () => {},
});

function App() {
  const [shopItems, setShopItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setShopItems(items);
    setCartItems([]);
  }, []);

  return (
    <>
      <ShopContext.Provider value={{ cartItems, shopItems }}>
        <RouterProvider router={router} />
      </ShopContext.Provider>
    </>
  );
}

export default App;
