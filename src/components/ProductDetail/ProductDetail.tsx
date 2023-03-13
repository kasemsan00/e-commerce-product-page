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
      <input className={"add-to-cart"} type="button" value="Add to cart" onClick={handleAddToCart} />
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
