import { useLoaderData } from "react-router-dom";
import { addNowPlayingMovies } from "../utility/moviesSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import MainContainer from "../Components/Browse/MainContainer";
import MovieTiles from "../Components/Browse/MovieTiles";

const Browse = () => {
    const dispatch = useDispatch();
    const moviesList = useLoaderData();

    useEffect(() => {
        if (moviesList) {
            dispatch(addNowPlayingMovies(moviesList));
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [moviesList]);

    if (!moviesList) return <div>Loading...</div>;
    return (
        <div>
            <MainContainer />
            <MovieTiles />
        </div>
    );
};

export default Browse;
