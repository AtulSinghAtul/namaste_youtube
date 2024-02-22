import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
  name: "cacheSearch",
  initialState: {},
  reducers: {
    cacheSearchSuggestions: (state, action) => {
      // coping  object to inside another object
      // Object.assign(targetObject, newObj);
      state = Object.assign(state, action.payload);
      console.log(action.payload);
    },
  },
});
export const { cacheSearchSuggestions } = cacheSlice.actions;
export default cacheSlice.reducer;
