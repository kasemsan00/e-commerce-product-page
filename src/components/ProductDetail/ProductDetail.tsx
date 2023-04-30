import Price from "./Price";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/slices/itemsSlice";
const item = {
  id: 0,
  company: "SNEAKER COMPANY",
  title: "Fall Limited Edition Sneakers",
  thumbnail: "image-product-1-thumbnail.jpg",
  detail:
    "These low-profile sneakers are your prefect casual wear companion. Featuring a durable rubber outer sole, they'll\n        withstand everything the weather can offer.",
  price: 250.0,
  discount: 125.0,
  discountPercent: "50%",
};
const minValue = 1;
const maxValue = 100;

interface AddItemProps {
  item: typeof item;
}

const AddItem = ({ item }: AddItemProps) => {
  const dispatch = useDispatch();
  const [countItem, setCountItem] = useState(1);
  const handleIncreaseDecrease = (e: React.MouseEvent<HTMLSpanElement>) => {
    const indicator = (e.target as HTMLDivElement).textContent;
    if (indicator === "-") {
      let counter = countItem - 1;
      if (counter <= minValue) {
        counter = minValue;
      }
      setCountItem(counter);
    }
    if (indicator === "+") {
      let counter = countItem + 1;
      if (counter >= maxValue) {
        counter = maxValue;
      }
      setCountItem(counter);
    }
  };
  const handleAddToCart = () => {
    dispatch(
      addItem({
        id: item.id,
        title: item.title,
        thumbnail: item.thumbnail,
        detail: item.detail,
        price: item.price,
        discount: item.discount,
        discountPercent: item.discountPercent,
        count: countItem,
      })
    );
  };
  return (
    <div className={"add-item-section"}>
      <div className={"add-item"}>
        <span onClick={handleIncreaseDecrease}>-</span>
        <input type="number" min={minValue} max={maxValue} value={countItem} onChange={(e) => {}} />
        <span onClick={handleIncreaseDecrease}>+</span>
      </div>
      <div>
        <button className="add-to-cart" onClick={handleAddToCart}>
          <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="#FFFFFF"
              fillRule="nonzero"
            />
          </svg>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default function ProductDetail() {
  return (
    <div className="product-detail">
      <label>{item.company}</label>
      <h3>{item.title}</h3>
      <p>{item.detail}</p>
      <Price price={item.price} discount={item.discount} discountPercent={item.discountPercent} />
      <AddItem item={item} />
    </div>
  );
}
