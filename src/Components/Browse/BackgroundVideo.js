import useGetVideoById from "../../hooks/useGetVideoById";
import { useSelector } from "react-redux";

const BackgroundVideo = ({ movieId }) => {
    useGetVideoById(movieId);

    const titleVideos = useSelector((store) => store?.movies?.titleVideo);
    const titleVideoList = titleVideos?.results;

    if (!titleVideoList) return null;
    const trailer = titleVideoList.find((v) => v.type === "Trailer");
    const backGroundVideo = trailer.length > 0 ? trailer[0] : titleVideoList[0];

    return (
        backGroundVideo && (
            <div className="backGroundVideo h-full w-full pointer-events-none">
                <iframe
                    className="w-full aspect-video"
                    src={`https://www.youtube.com/embed/${backGroundVideo.key}?si=gUwt7UnWbW1XnAxJ&amp;controls=0&autoplay=1&rel=0&loop=1&controls=0&mute=1&showinfo=0&fullScreen=1&playlist=${backGroundVideo.key}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
            </div>
        )
    );
};

export default BackgroundVideo;
