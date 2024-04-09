import { useState, useContext, useEffect } from "react";
import { ShopContext } from "../App";
import { ItemCard, DisplayCard } from "./Shop";

export default function Sale() {
  const { shopItems } = useContext(ShopContext);
  const [saleItems, setSaleItems] = useState([]);

  useEffect(() => {
    setSaleItems(
      shopItems.filter((item) => {
        return item.salePrice !== undefined && item.salePrice !== null;
      }),
    );
  }, [shopItems]);

  const [displayItem, setDisplayItem] = useState(null);
  return displayItem ? (
    <DisplayCard
      item={displayItem}
      setDisplayItem={setDisplayItem}
    ></DisplayCard>
  ) : (
    <div className="shop-container">
      {saleItems.map((item) => {
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
