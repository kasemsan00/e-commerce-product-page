import { useSelector } from "react-redux";

interface Props {
  show: boolean;
}

export default function InCart({ show }: Props) {
  return (
    <div className="in-cart" style={{ display: !show ? "none" : "" }}>
      <div className="in-cart-title">
        <label>Cart</label>
      </div>
      <hr />
      <div className="in-cart-items-list">
        <div className="in-cart-items">
          <div className="in-cart-thumbnail">
            <img alt="icon-thumbnails" src={"../images/image-product-1-thumbnail.jpg"} />
          </div>
          <div className="in-cart-item-detail">
            <label>Fall Limited Edition Sneaker</label>
            <div className="price">
              <div className={"item-count"}>$125.00 x 3</div>
              <div className={"price-sum"}>$375.00</div>
            </div>
          </div>
          <div className="in-cart-item-delete">
            <img alt="icon-delete" src={"../images/icon-delete.svg"} />
          </div>
        </div>
        <button className="in-cart-button-checkout">Checkout</button>
      </div>
    </div>
  );
}
