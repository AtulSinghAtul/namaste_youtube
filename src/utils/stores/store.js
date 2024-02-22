import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../slices/appSlice";
import cacheSearchSlices from "../slices/cacheSearchSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    cache: cacheSearchSlices,
  },
});

export default store;
