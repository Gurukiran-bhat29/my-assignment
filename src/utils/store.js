import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./listSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: {
    lists: listSlice,
    user: userSlice
  }
});

export default store;