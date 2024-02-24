import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "liveChat",
  initialState: {
    name: [],
  },
  reducers: {
    addChaterName: (state, action) => {
      state.name.splice(20, 1);
      state.name.unshift(action.payload);
    },
  },
});

export const { addChaterName, addMessagerName } = chatSlice.actions;
export default chatSlice.reducer;
