import GPTSearchBar from "./GPTSearchBar";
import GPTSearchResult from "./GPTSearchResult";

const GPT = () => {
    return (
        <div className="flex flex-col items-center relative bg-cover-pic h-full bg-cover">
            <GPTSearchBar />
            <GPTSearchResult />
        </div>
    );
};

export default GPT;
