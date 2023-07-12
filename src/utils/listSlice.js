import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: 'list',
  initialState: {
    userList: []
  },
  reducers: {
    storeDetails: (state, action) => {
      state.userList = action.payload;
    }
  }
})

export const { storeDetails } = listSlice.actions;

export default listSlice.reducer;