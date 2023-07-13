import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: 'list',
  initialState: {
    userList: []
  },
  reducers: {
    storeDetails: (state, action) => {
      state.userList = action.payload;
    },
    UpdateList: (state, action) => {
      state.userList.splice(action.payload, 1);
    }
  }
})

export const { storeDetails, UpdateList } = listSlice.actions;

export default listSlice.reducer;