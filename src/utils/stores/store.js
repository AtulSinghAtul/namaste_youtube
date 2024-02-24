import { configureStore } from "@reduxjs/toolkit";
import appSlice from "../slices/appSlice";
import cacheSearchSlices from "../slices/cacheSearchSlice";
import searchTextSlice from "../slices/searchTextSlice";
import chatSlice from "../slices/chatSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    cache: cacheSearchSlices,
    searchText: searchTextSlice,
    liveChat: chatSlice,
  },
});

export default store;
