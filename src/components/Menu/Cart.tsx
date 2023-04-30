import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setShowInCart } from "../../store/slices/showInCartSlice";

export default function Cart() {
  const show = useSelector((state: any) => state.showInCart);
  const dispatch = useDispatch();
  return (
    <div
      className="cart"
      onClick={() => {
        dispatch(setShowInCart(!show));
      }}
    >
      <img src={"../../images/icon-cart.svg"} alt="Cart" width={30} height={30} />
    </div>
  );
}
