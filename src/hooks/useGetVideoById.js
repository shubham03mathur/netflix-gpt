import { useEffect } from "react";
import { GET_VIDEOS_BY_MOVIE_ID, API_OPTIONS } from "../utility/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTitleVideo } from "../utility/moviesSlice";

const useGetVideoById = (movieId) => {
    const dispatch = useDispatch();
    const isTitleVideoExists = useSelector(store => store?.movies?.titleVideo);
    const movieVideoEndpoint = GET_VIDEOS_BY_MOVIE_ID(movieId);
    const fetchVideosById = async () => {
        if (isTitleVideoExists) return isTitleVideoExists
        const response = await fetch(movieVideoEndpoint, API_OPTIONS);
        const videos = await response.json();
        dispatch(addTitleVideo(videos));
    };
    useEffect(() => {
        fetchVideosById();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movieId]);
};

export default useGetVideoById;
