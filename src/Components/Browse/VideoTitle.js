const VideoTitle = ({ title, overview}) => {
    return (
        <div className="mx-4 md:px-8 md:pt-36 pt-28 aspect-video md:py-36 py-3 text-white absolute">
            <h1 className="md:font-bold md:text-4xl py-1 md:py-5">{title}</h1>
            <section className="w-3/5 md:w-1/4 md:text-xs text-xs">{overview}</section>
            <div className="my-0.5 md:my-2">
                <button className="p-[0.5rem] mx-2 md:px-8 md:py-2 bg-white rounded-md text-black"> ▶ Play</button>
                <button className="p-[0.5rem] md:mx-2 md:px-8 md:py-2 bg-slate-600 rounded-md bg-opacity-80 text-white">More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;