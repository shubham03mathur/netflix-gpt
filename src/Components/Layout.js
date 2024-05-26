import { RouterProvider } from "react-router";
import Router from "../Routes/Router";

const Layout = (props) => {
    return <RouterProvider router={Router} />;
}
export default Layout;