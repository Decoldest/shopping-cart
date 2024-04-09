import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../App";
import "./Shop.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ItemCard.propTypes = {
  item: PropTypes.object,
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.node,
  setDisplayItem: PropTypes.func,
  notify: PropTypes.func,
};

DisplayCard.propTypes = {
  item: PropTypes.object,
  setDisplayItem: PropTypes.func,
  notify: PropTypes.func,
};

export default function Shop() {
  const { shopItems } = useContext(ShopContext);
  const [displayItem, setDisplayItem] = useState(null);

  const notify = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <>
      {displayItem ? (
        <DisplayCard
          item={displayItem}
          setDisplayItem={setDisplayItem}
          notify={notify}
        ></DisplayCard>
      ) : (
        <div className="shop-container">
          {shopItems.map((item) => {
            return (
              <ItemCard
                key={item.name + "card"}
                item={item}
                setDisplayItem={setDisplayItem}
                notify={notify}
              ></ItemCard>
            );
          })}
        </div>
      )}
      <ToastContainer pauseOnFocusLoss={false} />
    </>
  );
}

export function ItemCard({ item, setDisplayItem, notify }) {
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
          notify("Added to cart");
          addToCart(item);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}

export function DisplayCard({ item, setDisplayItem, notify }) {
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
            notify("Added to cart");
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
