import MovieCard from "../UI/MovieCard";
import useGetMoviesByGenere from "../../hooks/useGetMoviesByGenre";
import { useSelector } from "react-redux";

const MovieTiles = ({ apiEndpoint, type, title }) => {
    useGetMoviesByGenere(apiEndpoint, type);
    const movies = useSelector((store) => store?.movies?.[type]);
    if (!movies) return null;
    const movieTile = movies?.results?.map((mv) => {
        return (
            <MovieCard
                key={mv.id}
                imgUrl={mv.backdrop_path}
                altText={mv.original_title}
                overview={mv.overview}
                title={mv.original_title}
            />
        );
    });
    return (
        <div>
            <h1 className="text-white">{title}</h1>
            <div className="whitespace-nowrap overflow-x-auto no-scrollbar p-4">
                {movieTile}
            </div>
        </div>
    );
};

export default MovieTiles;
