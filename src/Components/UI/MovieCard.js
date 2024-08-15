import { IMG_BASE_URL } from "../../utility/constant";

export default function MovieCard({ imgUrl, altText, overview, title }) {
    return (
        <div className="mr-4 inline-block relative w-40 h-40 bg-gray-800 overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
            <img
                className="w-full h-full object-cover"
                src={`${IMG_BASE_URL}${imgUrl}`}
                alt={altText}
            />
            <div className="absolute inset-0 bg-opacity-75 opacity-0 hover:opacity-100 transition duration-300 flex flex-col justify-end p-2">
                <h2 className="text-sm font-bold text-white">{title}</h2>
                <p className="text-white text-xs line-clamp-2">{overview}</p>
            </div>
        </div>
    );
}
