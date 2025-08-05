import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from "./userFeed";
import connectionReducer from "./connectionSlice";

const appStore = configureStore({
      reducer:{
        user: userReducer,
        feed: feedReducer,
        connection: connectionReducer
      }
});

export default appStore;