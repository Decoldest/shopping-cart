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

export function ItemCard({ item, setDisplayItem }) {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="item-card" onClick={() => setDisplayItem(item)}>
      <h1>{item.name}</h1>
      <img src={item.image} alt={item.name} />
      {item.salePrice ? (
        <>
          <h4 className="sale-price">$ {item.salePrice}</h4>
          <h5 className="sale-price">Sale</h5>
        </>
      ) : (
        <h4 className="pricetag">$ {item.price}</h4>
      )}

      <button
        onClick={(e) => {
          e.stopPropagation();
          addToCart(item);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export function DisplayCard({ item, setDisplayItem }) {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="product-display">
      <div className="cart-img">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="product-details">
        <button
          className="product-display-close"
          onClick={() => setDisplayItem(null)}
        >
          Close
        </button>

        <h1>{item.name}</h1>

        {item.salePrice ? (
          <h4 style={{ color: "red" }}>$ {item.salePrice}</h4>
        ) : (
          <h4>$ {item.price}</h4>
        )}
        <p>{item.description}</p>
        <button
          onClick={() => {
            addToCart(item);
            setDisplayItem(null);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
