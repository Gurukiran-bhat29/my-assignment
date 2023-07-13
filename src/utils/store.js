import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./listSlice";
import userSlice from "./userSlice";
import popUpSlice from "./popUpSlice";

const store = configureStore({
  reducer: {
    lists: listSlice,
    user: userSlice,
    popUp: popUpSlice
  }
});

export default store;