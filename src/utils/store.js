import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./listSlice";
import userSlice from "./userSlice";
import popUpSlice from "./popUpSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    lists: listSlice,
    user: userSlice,
    popUp: popUpSlice,
    chat: chatSlice
  }
});

export default store;