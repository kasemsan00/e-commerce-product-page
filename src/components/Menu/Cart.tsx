import InCart from "./InCart";
import React, { useState } from "react";

export default function Cart() {
  const [showInCart, setShowInCart] = useState(false);
  const handleShowInCart = (e: React.MouseEvent<HTMLDivElement>) => {
    setShowInCart(!showInCart);
  };

  return (
    <>
      <div className="cart" onClick={handleShowInCart}>
        <img src={"../../images/icon-cart.svg"} alt="Cart" width={30} height={30} />
      </div>
      <InCart show={showInCart} />
    </>
  );
}
