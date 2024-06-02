import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utility/firebase";
import { removeUser } from "../utility/userSlice";
import { useDispatch } from "react-redux";
import  { useNavigate } from "react-router-dom";

import Header from "./Header";

const AppLayout = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/browse');
            } else {
                dispatch(removeUser());
                navigate('/');
            }
        });
    }, []);

    return (
        <>
            <Header />
            <div>{props.children}</div>
        </>
    );
};

export default AppLayout;