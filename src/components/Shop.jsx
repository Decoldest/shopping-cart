import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../App";
import "./Shop.css";

ItemCard.propTypes = {
  item: PropTypes.object,
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.node,
  setDisplayItem: PropTypes.func,
};

DisplayCard.propTypes = {
  item: PropTypes.object,
  setDisplayItem: PropTypes.func,
};

export default function Shop() {
  const { shopItems } = useContext(ShopContext);
  const [displayItem, setDisplayItem] = useState(null);
  return displayItem ? (
    <DisplayCard
      item={displayItem}
      setDisplayItem={setDisplayItem}
    ></DisplayCard>
  ) : (
    <div className="shop-container">
      {shopItems.map((item) => {
        return (
          <ItemCard
            key={item.name + "card"}
            item={item}
            setDisplayItem={setDisplayItem}
          ></ItemCard>
        );
      })}
    </div>
  );
}

function ItemCard({ item, setDisplayItem }) {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="item-card" onClick={() => setDisplayItem(item)}>
      <h1>{item.name}</h1>
      <img src={item.image} alt={item.name} />
      <h4>{item.price}</h4>

      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
}

function DisplayCard({ item, setDisplayItem }) {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="product-display">
      <img src={item.image} alt={item.name} />
      <div className="product-details">
        <h1>{item.name}</h1>
        <button onClick={() => setDisplayItem(null)}>Close</button>
        <h4>{item.price}</h4>
        <p>{item.description}</p>
        <button onClick={() => addToCart(item)}>Add to Cart</button>
      </div>
    </div>
  );
}
