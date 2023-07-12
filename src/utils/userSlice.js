import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    selectedUser: ''
  },
  reducers: {
    selectedUser: (state, action) => {
      state.selectedUser = action.payload;
    }
  }
})

export const { selectedUser } = userSlice.actions;

export default userSlice.reducer;