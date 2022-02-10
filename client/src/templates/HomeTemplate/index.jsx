import React from "react";
import { Route } from "react-router";
import Topbar from "../../components/Topbar";

const LayoutHome = (props) => {
    return (
        <>
            <Topbar />
            {props?.children}
        </>
    );
};

const HomeTemplate = (props) => {
    return <LayoutHome>{props?.children}</LayoutHome>;
};

export default HomeTemplate;
