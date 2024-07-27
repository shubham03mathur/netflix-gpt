import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Browse from "../Pages/Browse";
import Layout from "../Components/Layout";
import BrowseMovies from "../service/browse-movies.js";
import { BROWSE_MOVIE_ENDPOINT } from "../utility/constant";

const fetchMovieList = async () => {
    const response = await new BrowseMovies(
        BROWSE_MOVIE_ENDPOINT
    ).getAllNewMovieList();

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
        ],
    },
]);

export default Router;
