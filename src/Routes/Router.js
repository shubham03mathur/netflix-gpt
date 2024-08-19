import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Browse from "../Pages/Browse";
import Layout from "../Components/Layout";
import BrowseMovies from "../service/browse-movies.js";
import { BROWSE_MOVIE_ENDPOINT } from "../utility/constant";
import MyAccount from "../Pages/MyAccount.js";
import GPT from "../Components/GPT/GPT.js";

const fetchMovieList = async () => {
    const response = await new BrowseMovies(
        BROWSE_MOVIE_ENDPOINT
    ).getMovieListByGenre();

    return await response.json();
};
const Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/browse",
                loader: fetchMovieList,
                element: <Browse />,
            },
            {
                path: "/gpt",
                element: <GPT />,
            },
            {
                path: "/account",
                element: <MyAccount />,
            },
        ],
    },
]);

export default Router;
