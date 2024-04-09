import { ShopContext } from "../App";
import { useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

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

export default function Cart() {
  const { cartItems } = useContext(ShopContext);
  const [displayItem, setDisplayItem] = useState(null);
  const total = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  }, [cartItems]);

  return (
    <>
      <div className="cart-container">
        <h1>Cart Items</h1>
        <h5>Free shipping on all items</h5>
        {!cartItems.length && <h2 className="no-items">No items in cart</h2>}
        {displayItem ? (
          <DisplayCard
            item={displayItem}
            setDisplayItem={setDisplayItem}
          ></DisplayCard>
        ) : (
          <div>
            {cartItems.map((item) => {
              return (
                <ItemCard
                  key={item.name + "card"}
                  item={item}
                  setDisplayItem={setDisplayItem}
                ></ItemCard>
              );
            })}
          </div>
        )}
      </div>
      {total > 0 && (
        <div className="total">
          <h1>Total</h1>
          <h3>$ {total}</h3>
        </div>
      )}
    </>
  );
}

function ItemCard({ item, setDisplayItem }) {
  return (
    <div className="cart-card">
      <img
        src={item.image}
        alt={item.name}
        onClick={() => setDisplayItem(item)}
      />
      <h1 style={{ flexBasis: "30%" }}>{item.name}</h1>
      <h4>qty: {item.quantity}</h4>
      <h4>${item.price}</h4>
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
