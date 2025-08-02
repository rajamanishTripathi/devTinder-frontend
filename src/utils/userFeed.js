import { createSlice } from "@reduxjs/toolkit";

const userFeed = createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        addFeed: (state,action) => action.payload,
        removeFeed: (state,action) => null
    }
});

export const {addFeed,removeFeed} = userFeed.actions;
export default userFeed.reducer;
