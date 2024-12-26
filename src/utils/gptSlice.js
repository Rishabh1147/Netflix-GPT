import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        showGPT: false,
    },

    reducers: {
        toggelGPT : (state, action) => {
            state.showGPT = !state.showGPT;
        }
    }
});

export const { toggelGPT } = gptSlice.actions;

export default gptSlice.reducer;