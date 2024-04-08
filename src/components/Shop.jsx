import { useContext } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../App";
import "./Shop.css";

ItemCard.propTypes = {
  item: PropTypes.object,
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.node,
};

export default function Shop() {
  const { shopItems } = useContext(ShopContext);
  return (
    <div className="shop-container">
      {shopItems.map((item) => {
        return (
          <ItemCard
            key={item.name + "card"}
            item={item}
          ></ItemCard>
        );
      })}
    </div>
  );
}

function ItemCard({ item}) {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="item-card">
      <h1>{item.name}</h1>
      <img src={item.image} alt={item.name} />
      <h4>{item.price}</h4>

      <button onClick={() => addToCart(item)}>Add to Cart</button>
    </div>
  );
}
