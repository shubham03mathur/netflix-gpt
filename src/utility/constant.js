export const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}`,
    },
};

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

export const BROWSE_MOVIE_ENDPOINT =
    "https://api.themoviedb.org/3/movie/now_playing";

export const POPULAR_MOVIES_ENDPOINT =
    "https://api.themoviedb.org/3/movie/popular";
export const TOP_RATED_MOVIES_ENDPOINT =
    "https://api.themoviedb.org/3/movie/top_rated";
export const UPCOMING_MOVIES_ENDPOINT =
    "https://api.themoviedb.org/3/movie/upcoming";

export const GET_VIDEOS_BY_MOVIE_ID = (id) => {
    return `https://api.themoviedb.org/3/movie/${id}/videos`;
};

export const GET_LANGUAGES = [
    { identifier: "en", name: "English" },
    { identifier: "hindi", name: "हिंदी" },
    { identifier: "spanish", name: "Español" },
];
