import { useDeferredValue, useEffect, useRef, useState } from "react";

const GPTSearchBar = ({ lang }) => {
    const [query, setQuery] = useState("");
    const deferredValue = useDeferredValue(query);
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div className="bg-black p-6 w-1/2 mx-auto align-middle">
            <form className="grid grid-flow-col grid-cols-12">
                <input
                    ref={inputRef}
                    className="p-2 col-span-9"
                    name="search"
                    placeholder="What's on your mind today?"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                />
                <button
                    className="col-span-3 p-1 mx-2 text-white bg-gradient-to-tl from-red-800 rounded-md px-2 cursor-pointer"
                    onClick={(event) => event.preventDefault()}
                >
                    <span className="flex flex-row justify-evenly items-center">
                        <img
                            src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg"
                            alt="AI icon"
                        />
                        Ask AI
                    </span>
                </button>
            </form>
        </div>
    );
};

export default GPTSearchBar;
