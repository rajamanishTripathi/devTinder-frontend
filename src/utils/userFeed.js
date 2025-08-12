import { createSlice } from "@reduxjs/toolkit";

const userFeed = createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        addFeed: (state,action) => action.payload,
        removeUseFromFeed: (state,action) => {
            const newFeed = state.filter((user) => user._id !== action.payload);
            return newFeed;
        }
    }
});

export const {addFeed,removeUseFromFeed} = userFeed.actions;
export default userFeed.reducer;
