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
            <div className="top-0 left-0 right-0 ">
                <iframe
                    className="w-full aspect-video"
                    src={`https://www.youtube.com/embed/${backGroundVideo.key}?si=gUwt7UnWbW1XnAxJ&amp;controls=0`}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                ></iframe>
            </div>
        )
    );
};

export default BackgroundVideo;
