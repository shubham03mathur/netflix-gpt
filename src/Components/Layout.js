import { RouterProvider } from "react-router";
import Router from "../Routes/Router";
import { useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utility/firebase";
import { useDispatch } from "react-redux";
import { removeUser } from "../utility/userSlice";

const Layout = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                dispatch(removeUser());
            }
        });
    }, []);

    return <RouterProvider router={Router} />;
};

export default Layout;
