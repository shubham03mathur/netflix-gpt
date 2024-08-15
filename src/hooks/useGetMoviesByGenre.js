/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BrowseMovies from "../service/browse-movies";
import {
    addPopularMovies,
    addTopRatedMovies,
    addUpcomingMovies,
} from "../utility/moviesSlice";

const useGetMoviesByGenere = (apiEndpoint, type) => {
    
    const dispatch = useDispatch();
    const isMovieListExist = useSelector((store) => store.movies?.[type]);
    const getDataByGenere = async () => {
        if (isMovieListExist) return isMovieListExist;
        const res = await new BrowseMovies(apiEndpoint).getMovieListByGenre();
        return await res.json();
    };

    useEffect(() => {

        const fetchData = async () => {
            const movieList = await getDataByGenere();
            if (movieList && movieList?.results?.length) {
                if (type === 'popularMovies') dispatch(addPopularMovies(movieList));
                if (type === 'topRatedMovies') dispatch(addTopRatedMovies(movieList));
                if (type === 'upcomingMovies') dispatch(addUpcomingMovies(movieList));
            }
        }
        fetchData();
    }, []);
};

export default useGetMoviesByGenere;
