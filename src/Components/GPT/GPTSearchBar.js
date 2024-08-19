import { useEffect, useRef, useState } from "react";
import openAPIService from "../../service/openAPI-service";
import { GET_SEARCH_MOVIES_ENDPOINT } from "../../utility/constant";
import BrowseMovies from "../../service/browse-movies";
import SnackbarAlert from "../UI/SnackbarAlert";
import { useDispatch } from "react-redux";

import {
    addGPTQuery,
    addGPTResults,
    updateIsPending,
} from "../../utility/gptSlice";

const GPTSearchBar = () => {
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const queryTmdb = async (token) => {
        const queryEndpoint = GET_SEARCH_MOVIES_ENDPOINT(token);
        const res = await new BrowseMovies(
            queryEndpoint
        ).searchMoviesWithQuery();
        const resJson = await res.json();
        return resJson.results;
    };

    const handleSubmit = async (e) => {
        const gptQuery = `Act as a Movie Recommendation system and suggest some movies for the query : ${inputRef.current.value}
      . only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya`;

        if (inputRef.current.value) {
            dispatch(updateIsPending(true));
            try {
                const gptResults = await new openAPIService().getChatCompletion(
                    gptQuery
                );

                dispatch(addGPTQuery(inputRef.current.value));
                const gptMovies = gptResults.split(",");
                const asyncCollection = gptMovies.map((m) => queryTmdb(m));
                const moviesCollection = await Promise.all(asyncCollection);
                dispatch(addGPTResults(moviesCollection));
                dispatch(updateIsPending(false));
            } catch (error) {
                setOpen(true);
            }
        }
    };

    return (
        <>
            <div className="bg-black p-2 mt-[40%] md:mt-[12%] md:p-6 w-full md:w-1/2 mx-auto">
                <form
                    onSubmit={(event) => event.preventDefault()}
                    className="flex flex-col flex-grow justify-center md:grid md:grid-flow-col md:grid-cols-12"
                >
                    <input
                        ref={inputRef}
                        required
                        className="p-2 md:col-span-9"
                        name="search"
                        placeholder="What's on your mind today?"
                    />
                    <button
                        className="w-1/2 md:w-full mt-4 md:mt-1 self-center md:col-span-3 p-1 mx-2 text-white bg-gradient-to-tl from-red-800 rounded-md px-2 cursor-pointer"
                        onClick={handleSubmit}
                    >
                        <span className="flex flex-row justify-center md:justify-evenly items-center">
                            <img
                                src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
                                alt="AI icon"
                            />
                            Ask AI
                        </span>
                    </button>
                </form>
            </div>
            {open && (
                <SnackbarAlert
                    open={open}
                    handleClose={() => setOpen(false)}
                    message={{
                        text: "Something went wrong! Couldn'\t connect to service.",
                        severity: "error",
                    }}
                />
            )}
        </>
    );
};

export default GPTSearchBar;
