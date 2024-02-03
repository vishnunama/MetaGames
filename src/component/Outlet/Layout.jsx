import React from "react";
// import ResponsiveDrawer from "../Sidebar";
import { Outlet } from "react-router-dom";
import Header from "../Header";

const Layout = () => {
    return <>
        <Header outlet={ <Outlet/> } />
    </>;
};

export default Layout;
