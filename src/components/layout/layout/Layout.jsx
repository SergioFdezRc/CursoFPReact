import React from 'react';
import NavBar from "../header/NavBar";
import {Outlet} from "react-router-dom";
import "./Layout.css";
import Content from "../content/Content";
import CustomFooter from "../footer/CustomFooter";

function Layout() {
    return (
        <main id="main" className="main">
            <div className="container">
                <NavBar/>
                <Content/>
                <CustomFooter/>
            </div>
        </main>
    )
}

export default Layout;