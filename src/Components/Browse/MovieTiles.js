import MovieCard from "../UI/MovieCard";
import useGetMoviesByGenere from "../../hooks/useGetMoviesByGenre";
import { useSelector } from "react-redux";
import { useRef } from "react";

const MovieTiles = ({ apiEndpoint, type, title }) => {
    let scrollSpeed = 2;

    useGetMoviesByGenere(apiEndpoint, type);
    const refCrousel = useRef(null);
    let scrolling;

    const startScrollingRight = () => {
        if (refCrousel.current) {
            console.log("mouseenter right");
            scrolling = setInterval(() => {
                refCrousel.current.scrollBy({
                    left: -scrollSpeed,
                    behavior: "smooth",
                });
            }, 10);
        }
    };

    const startScrollingLeft = () => {
        if (refCrousel.current) {
            console.log("mouseenter left");
            scrolling = setInterval(() => {
                refCrousel.current.scrollBy({
                    left: scrollSpeed,
                    behavior: "smooth",
                });
            }, 10);
        }
    };

    const stopScrolling = () => {
        clearInterval(scrolling);
    };

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
        <div className="relative w-full md:p-2 p-4 overflow-x-auto">
            <div className="clear-both">
                <div
                    onMouseEnter={startScrollingLeft}
                    onMouseLeave={stopScrolling}
                    id="scroll-left"
                    className="float-left left-0 w-10 cursor-pointer transition duration-300"
                ></div>

                <div
                    onMouseEnter={startScrollingRight}
                    onMouseLeave={stopScrolling}
                    id="scroll-right"
                    className="float-right right-0 w-10 cursor-pointer transition duration-300"
                ></div>
            </div>

            <h1 className="text-white">{title}</h1>
            <div
                ref={refCrousel}
                className="whitespace-nowrap overflow-x-auto no-scrollbar p-4"
            >
                {movieTile}
            </div>
        </div>
    );
};

export default MovieTiles;
