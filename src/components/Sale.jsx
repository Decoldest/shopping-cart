import { useState, useContext, useEffect } from "react";
import { ShopContext } from "../App";
import { ItemCard, DisplayCard } from "./Shop";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Sale() {
  const { shopItems } = useContext(ShopContext);
  const [saleItems, setSaleItems] = useState([]);
  const notify = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  useEffect(() => {
    setSaleItems(
      shopItems.filter((item) => {
        return item.salePrice !== undefined && item.salePrice !== null;
      }),
    );
  }, [shopItems]);

  const [displayItem, setDisplayItem] = useState(null);
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
          {saleItems.map((item) => {
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
      <ToastContainer />
    </>
  );
}
