import React from "react";
import "./css/user.css";
import Cover from "./components/Cover";
import MainNav from "./components/MainNav";
import Userdetails from "./components/Userdetails";
import Tabs from "./components/Tabs";
import Userfooter from "./components/Userfooter";

function Userproflie() {
    return (
        <>
            <MainNav />
            <Cover />
            <Userdetails />
            <Tabs />
            <Userfooter />
        </>
    );
}

export default Userproflie;
