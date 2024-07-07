import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Browse from "../Pages/Browse";
import Layout from "../Components/Layout";

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
                element: <Browse />
            }
        ],
    },
]);

export default Router;