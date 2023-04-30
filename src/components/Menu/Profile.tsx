import { useDispatch, useSelector } from "react-redux";
import { setShowInCart } from "../../store/slices/showInCartSlice";

export default function Profile() {
  const show = useSelector((state: any) => state.showInCart);
  const dispatch = useDispatch();
  return (
    <img
      className="avatar"
      src={"../../images/image-avatar.png"}
      alt={"Avatar"}
      onClick={() => {
        dispatch(setShowInCart(!show));
      }}
    />
  );
}
