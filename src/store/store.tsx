import { configureStore } from "@reduxjs/toolkit";
import reduxThunk from "redux-thunk";
import itemsSlice from "./slices/itemsSlice";
const middleware = [reduxThunk];

const store = configureStore({
    reducer: {
        items: itemsSlice,
    },
    middleware,
});

export default store;
