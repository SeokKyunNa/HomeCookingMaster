import axios, { AxiosResponse } from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RegisterState {
    user_id: number;
    nickname: string;
    loading: boolean;
    error: string;
}

const initialState: RegisterState = {
    user_id: 0,
    nickname: "",
    loading: false,
    error: "",
};

/* 레시피 좋아요 */
export const sendRegister = createAsyncThunk(
    "RECIPE_LIKE",
    async (formData: any) => {
        /* 백엔드 [POST] /recipe/<recipe_id>/like 요청 */
        const response = await axios.post("/api/auth/signup", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });

        return null;
    }
);

export const registerInfoSlice = createSlice({
    name: "registerInfoSlice",
    initialState,
    reducers: {
        clearRegister(state) {
            state.loading = false;
            state.error = "";
        },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(
    //         sendRegister.rejected,
    //         (state, action: PayloadAction<any>) => {
    //             state.loading = false;
    //             state.error = action.payload;
    //         }
    //     );

    //     builder.addCase(
    //         sendRegister.pending,
    //         (state, action: PayloadAction<any>) => {
    //             state.loading = true;
    //             state.error = "";
    //         }
    //     );

    //     builder.addCase(
    //         sendRegister.fulfilled,
    //         (state, action: PayloadAction<any>) => {
    //             state.user_id = action.payload.user_id;
    //             state.nickname = action.payload.nickname;
    //         }
    //     );
    // },
});

export const { clearRegister } = registerInfoSlice.actions;
export default registerInfoSlice.reducer;