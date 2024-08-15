import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
    POPULAR_MOVIES_ENDPOINT,
    TOP_RATED_MOVIES_ENDPOINT,
    UPCOMING_MOVIES_ENDPOINT,
} from "../utility/constant";

import MainContainer from "../Components/Browse/MainContainer";
import MovieTiles from "../Components/Browse/MovieTiles";
import { addNowPlayingMovies } from "../utility/moviesSlice";

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
        <div className="z-10 bg-black">
            <MainContainer />
            <div>
                <MovieTiles
                    apiEndpoint={POPULAR_MOVIES_ENDPOINT}
                    type="popularMovies"
                    title="Popular Movies"
                />
                <MovieTiles
                    apiEndpoint={TOP_RATED_MOVIES_ENDPOINT}
                    type="topRatedMovies"
                    title="Toprated Movies"
                />
                <MovieTiles
                    apiEndpoint={UPCOMING_MOVIES_ENDPOINT}
                    type="upcomingMovies"
                    title="Upcoming Movies"
                />
            </div>
        </div>
    );
};

export default Browse;
