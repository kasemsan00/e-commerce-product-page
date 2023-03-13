import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Item {
  id: number;
  title: string;
  detail: string;
  thumbnail: string;
  count: number;
  price: number;
  discount: number;
  discountPercent: string;
}
const initialState: Item[] = [];
const itemSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<Item>) {
      return {
        ...state,
        [action.payload.id]: {
          id: action.payload.id,
          title: action.payload.title,
          detail: action.payload.detail,
          thumbnail: action.payload.thumbnail,
          price: action.payload.price,
          discount: action.payload.discount,
          discountPercent: action.payload.discountPercent,
          count: action.payload.count,
        },
      };
    },
    resetLinkDetail() {
      return initialState;
    },
  },
});
export const { addItem, resetLinkDetail } = itemSlice.actions;
export default itemSlice.reducer;
