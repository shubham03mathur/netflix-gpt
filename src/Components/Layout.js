import { Outlet, useNavigate } from "react-router";
import AppLayout from "./AppLayout";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Layout = (props) => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    useEffect(() => {
        
        if (!user) {
            navigate("/login");
        }
    }, []);

    return (
        <AppLayout>
            <Outlet />
        </AppLayout>
    );
};

export default Layout;
