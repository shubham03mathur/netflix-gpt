import { useEffect } from "react";
import  { useNavigate, useOutletContext } from "react-router-dom";
import Header from "./Header";

const AppLayout = ({ children }) => {

    const navigate = useNavigate();
    const context = useOutletContext();

    useEffect(() => {
        if (!(context && context.user)) {
            navigate("/");
        } else {
            navigate("/browse");
        }
    }, []);

    return (
        <>
            <Header userData={context?.user}/>
            <div>{children}</div>
        </>
    );
};

export default AppLayout;