import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    commentsData: null,
  },
  reducers: {
    toggleMenu: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    hideSideMenu: (state) => {
      state.isMenuOpen = false;
    },
    getCommentsData: (state, action) => {
      console.log(action.payload);
      state.commentsData = action.payload;
    },
  },
});

export const {
  toggleMenu,
  hideSideMenu,
  getCommentsData,
  addSearchSuggestions,
} = appSlice.actions;
export default appSlice.reducer;
