import GPTSearchBar from "./GPTSearchBar";
import GPTSearchResult from "./GPTSearchResult";
import { GET_LANGUAGES } from "../../utility/constant";

const GPT = () => {
    return (
        <div className="flex flex-col justify-center items-center relative bg-cover-pic h-screen bg-cover">
            <GPTSearchBar lang={GET_LANGUAGES}/>
            <GPTSearchResult />
        </div>
    );
};

export default GPT;
