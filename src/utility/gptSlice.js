import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        isGPTVisible: false,
    },
    reducers: {
        toggleIsGPTVisible: (state) => {
            state.isGPTVisible = !state.isGPTVisible;
        },
    },
});

export const { toggleIsGPTVisible } = gptSlice.actions;

export default gptSlice.reducer;
