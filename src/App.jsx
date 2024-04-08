import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes.jsx";
import { useState, useEffect, createContext } from "react";

const router = createBrowserRouter(routes);

const items = [
  {
    name: "Arc Reactor",
    price: 1200000,
    description:
      "Tony Stark was able to buld this in a cave! With a box of scraps!",
    image: "./arc-reactor.png",
  },
  {
    name: "Edith",
    price: 5000000,
    description:
      "Edith (Even Dead, I'm The Hero) is an artificial intelligence system created by Tony Stark. It stands for 'Even Dead, I'm The Hero.' Edith gives its user access to a network of weaponized drones and has vast surveillance capabilities.",
    image: "./edith.png",
    salePrice: 2500000,
  },
  {
    name: "Hulkbuster",
    price: 10000000,
    description:
      "The Hulkbuster is a large suit of armor specifically designed by Tony Stark to combat the Hulk. It is equipped with heavy-duty armor and powerful weaponry, making it capable of withstanding and fighting against the Hulk's immense strength.",
    image: "./hulkbuster.png",
  },
  {
    name: "Iron Spider",
    price: 20000000,
    description:
      "The Iron Spider suit is a high-tech suit of armor designed by Tony Stark for Spider-Man (Peter Parker). It features advanced technology, including extra limbs for increased mobility, enhanced strength, and various web-shooting capabilities.",
    image: "./iron-spider.png",
  },
  {
    name: "Mark 1",
    price: 10000000,
    description:
      "The Mark 1 is the first Iron Man suit built by Tony Stark while held captive by terrorists. It is a crude but functional suit made from scrap materials and serves as the prototype for his future suits of armor.",
    image: "./mark-1.png",
  },
  {
    name: "Mark 2",
    price: 25000000,
    description:
      "The Mark 2 is one of the early Iron Man suits developed by Tony Stark. It is the first suit to feature the iconic red and gold color scheme and improved flight capabilities compared to the Mark 1.",
    image: "./mark-2.png",
    salePrice: 21000000,
  },
  {
    name: "Mark 3",
    price: 27500000,
    description:
      "The Mark 3 is an advanced version of the Iron Man suit developed by Tony Stark. It features significant improvements in technology, including enhanced strength, flight stability, and weapons systems.",
    image: "./mark-3.png",
  },
  {
    name: "Mark 50",
    price: 80000000,
    description:
      "The Mark 50, also known as the Bleeding Edge armor, is one of the most advanced Iron Man suits developed by Tony Stark. It features nanotechnology that allows it to materialize from the arc reactor and form around Tony Stark's body instantly.",
    image: "./mark-50.png",
  },
  {
    name: "Rescue",
    price: 20000000,
    description:
      "The Rescue armor is a specialized Iron Man suit designed by Tony Stark for Pepper Potts. It features advanced technology and is equipped with various medical and defensive capabilities to assist in rescue missions.",
    image: "./rescue.png",
  },
  {
    name: "Suitcase Armor",
    price: 15000000,
    description:
      "The Suitcase Armor, also known as the Mark V, is a compact Iron Man suit designed for portability. It is stored in a suitcase and can be quickly assembled into a full suit of armor for emergencies.",
    image: "./suitcase-armour.png",
    salePrice: 12000000,
  },
  {
    name: "War Machine",
    price: 22500000,
    description:
      "War Machine, also known as the Iron Patriot, is a heavily armored suit of armor developed by Tony Stark for his friend James Rhodes. It features advanced weaponry and is designed for combat missions.",
    image: "./war-machine.png",
  },
  {
    name: "Infinity Gauntlet",
    price: 10000000,
    description:
      "The Infinity Gauntlet is a powerful artifact designed to harness the power of the Infinity Stones. It grants its wielder control over all aspects of reality, making them nearly omnipotent.",
    image: "./nano-gauntlet.png",
  },
];

export const ShopContext = createContext({
  shopItems: [],
  cartItems: [],
  addToCart: () => {},
});

function App() {
  const [shopItems, setShopItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  const addToCart = (item) => {
    const index = cartItems.findIndex(
      (cartItem) => cartItem.name === item.name,
    );
    if (index > 0) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[index].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  useEffect(() => {
    setShopItems(items);
  }, []);

  return (
    <>
      <ShopContext.Provider value={{ cartItems, shopItems, addToCart }}>
        <RouterProvider router={router} />
      </ShopContext.Provider>
    </>
  );
}

export default App;
