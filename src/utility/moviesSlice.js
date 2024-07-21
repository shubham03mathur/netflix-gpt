import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        titleVideo: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTitleVideo: (state, action) => {
            state.titleVideo = action.payload;
        }
    }
});

export const { addNowPlayingMovies, addTitleVideo } = moviesSlice.actions;
export default moviesSlice.reducer;