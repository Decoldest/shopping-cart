import { useContext } from "react";
import PropTypes from "prop-types";
import { ShopContext } from "../App";

ItemCard.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  image: PropTypes.node,
};

export default function Shop() {
  const { shopItems } = useContext(ShopContext);
  return shopItems.map((item) => {
    return (
      <ItemCard
        key={item.name + "card"}
        name={item.name}
        price={item.price}
        description={item.description}
        image={item.image}
      ></ItemCard>
    );
  });
}

function ItemCard({ name, price, description, image }) {
  return (
    <div>
      <h1>{name}</h1>
      <h4>{price}</h4>
      <h2>{description}</h2>
      <img src={image} alt="" />
    </div>
  );
}
