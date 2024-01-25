import React from "react";
import {Link} from "react-router-dom";
import {HOME_PATH, USERS_PATH} from "../../../constants/paths";
import "./NavBar.css";

function NavBar() {
    console.log("Renderizando NavBar");
    return (
        <nav className="nav-bar-container">
            <div className="nav-bar-content">
                <div className="nav-bar">
                    <Link to={HOME_PATH}>Home</Link>
                    <Link to={USERS_PATH}>Users</Link>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;