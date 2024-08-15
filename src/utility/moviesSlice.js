import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        titleVideo: null,
        popularMovies: null,
        topRatedMovies: null,
        upComingMovies: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTitleVideo: (state, action) => {
            state.titleVideo = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upComingMovies = action.payload;
        }

    }
});

export const { addNowPlayingMovies, addTitleVideo, addPopularMovies, addTopRatedMovies, addUpcomingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;