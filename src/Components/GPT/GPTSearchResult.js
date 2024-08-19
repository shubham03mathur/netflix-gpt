import { useSelector } from "react-redux";
import MovieCard from "../UI/MovieCard";
import Shimmer from "../UI/Shimmer";

const GPTSearchResult = () => {
    const movieList = useSelector((store) => store?.gpt?.gptResults);
    const gptQuery = useSelector((store) => store?.gpt?.gptQuery);
    const isPending = useSelector((store) => store?.gpt?.isPending);
    if (isPending) return <Shimmer chunk={6} />;
    if (!movieList) return null;

    const movieTile = movieList?.map((movies) => {
        return movies.map((mv) => {
            if (!mv.backdrop_path) return null;
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
    });
    return (
        <>
            <h1 className="font-bold text-2xl text-white my-3 text-left">
                Showing Results for: {gptQuery}
            </h1>
            <div className="bg-slate-800 opacity-90 whitespace-break-spaces no-scrollbar p-4">
                {movieTile}
            </div>
        </>
    );
};

export default GPTSearchResult;
