import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: boolean = false;
const showInCartSlice = createSlice({
  name: "showInCart",
  initialState,
  reducers: {
    setShowInCart(state, action) {
      return action.payload;
    },
  },
});
export const { setShowInCart } = showInCartSlice.actions;
export default showInCartSlice.reducer;
