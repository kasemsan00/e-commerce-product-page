import Price from "./Price";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/slices/itemsSlice";
const minValue = 1;
const maxValue = 100;

const AddItem = () => {
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
                id: 0,
                thumbnail: "",
                detail: "",
                count: 10,
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
            <label>SNEAKER COMPANY</label>
            <h3>Fall Limited Edition Sneakers</h3>
            <p>
                These low-profile sneakers are your prefect casual wear companion. Featuring a durable rubber outer sole, they'll
                withstand everything the weather can offer.
            </p>
            <Price />
            <AddItem />
        </div>
    );
}
