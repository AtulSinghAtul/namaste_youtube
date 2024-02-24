import { createSlice } from "@reduxjs/toolkit";

const searchTextSlice = createSlice({
  name: "searchText",
  initialState: { text: null },
  reducers: {
    addSearchText: (state, action) => {
      state.text = action.payload;
    },
  },
});
export const { addSearchText } = searchTextSlice.actions;
export default searchTextSlice.reducer;
