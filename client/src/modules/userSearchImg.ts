import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const name = 'userSearchImg';

type stateType = {
    searchImg : any
}

const initialState : stateType = {
    searchImg : ""
}

export const userSearchImg = createSlice({
    name,
    initialState,
    reducers: {
        setSearchImg(state, action: PayloadAction<Boolean>) {
            state.searchImg = action.payload;
        },
    },
});

export const { setSearchImg } = userSearchImg.actions;
export default userSearchImg.reducer;

