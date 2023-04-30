import { configureStore } from "@reduxjs/toolkit";
import reduxThunk from "redux-thunk";
import itemsSlice from "./slices/itemsSlice";
import showInCartSlice from "./slices/showInCartSlice";
const middleware = [reduxThunk];

const store = configureStore({
  reducer: {
    showInCart: showInCartSlice,
    items: itemsSlice,
  },
  middleware,
});

export default store;
