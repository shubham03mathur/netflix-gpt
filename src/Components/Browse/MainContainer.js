import VideoTitle from "./VideoTitle";
import BackgroundVideo from "./BackgroundVideo";
import { useSelector } from "react-redux";

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    if (!movies) return;
    const mainMovie = movies.results;
    const { title, overview } = mainMovie[0];
    return (
        <div>
            <VideoTitle title={title} overview={overview}/>
            <BackgroundVideo />
        </div>
    )
}

export default MainContainer;