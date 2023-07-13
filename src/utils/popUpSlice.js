import { createSlice } from "@reduxjs/toolkit";

const popUpSlice = createSlice({
  name: 'header',
  initialState: {
    headerPopUp: false
  },
  reducers: {
    toggle: (state) => {
      state.headerPopUp = !state.headerPopUp;
    },
    show: (state) => {
      state.headerPopUp = true;
    },
    hide: (state) => {
      state.headerPopUp = false;
    },
  }
})

export const { toggle, hide, show } = popUpSlice.actions;

export default popUpSlice.reducer;