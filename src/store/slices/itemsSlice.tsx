import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface Item {
  id: number;
  thumbnail: string;
  detail: string;
  count: number;
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
          detail: action.payload.detail,
          thumbnail: action.payload.thumbnail,
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
