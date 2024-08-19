import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        isPending: false,
        isGPTVisible: false,
        gptQuery: null,
        gptResults: null,
    },
    reducers: {
        toggleIsGPTVisible: (state) => {
            state.isGPTVisible = !state.isGPTVisible;
        },
        addGPTQuery: (state, action) => {
            state.gptQuery = action.payload;
        },
        addGPTResults: (state, action) => {
            state.gptResults = action.payload;
        },
        updateIsPending: (state, action) => {
            state.isPending = action.payload;
        }
    },
});

export const { toggleIsGPTVisible, addGPTQuery, addGPTResults, updateIsPending } = gptSlice.actions;

export default gptSlice.reducer;
