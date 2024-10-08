import { Outlet, useNavigate } from "react-router";
import AppLayout from "./AppLayout";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Layout = (props) => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    useEffect(() => {
        if (!user) {
            navigate("/login");
        } else {
            navigate("/browse");
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user?.uid]);

    return (
        <AppLayout>
            <Outlet />
        </AppLayout>
    );
};

export default Layout;
