import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Browse from "../Pages/Browse";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "browse",
        element: <Browse />
    }
]);

export default Router;