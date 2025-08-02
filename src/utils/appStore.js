import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./userFeed";

const appStore = configureStore({
      reducer:{
        user: userReducer,
        feed: feedReducer
      }
});

export default appStore;