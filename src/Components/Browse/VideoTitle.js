const VideoTitle = ({ title, overview}) => {
    return (
        <div className="px-8 pt-36 aspect-video py-36 text-white absolute">
            <h1 className="font-bold text-4xl py-5">{title}</h1>
            <p className="w-1/4 text-xs">{overview}</p>
            <div className="my-2">
                <button className="px-8 py-2 bg-slate-400 rounded-md bg-opacity-25"> ▶ Play</button>
                <button className="mx-2 px-8 py-2 bg-slate-400 rounded-md bg-opacity-25">Info</button>
            </div>
        </div>
    )
}

export default VideoTitle;