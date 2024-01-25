import {Outlet} from "react-router-dom";
import React from "react";


function Content() {
    console.log("Renderizando Contenido");
    return (<div id="content">
        <Outlet/>
    </div>)
}

export default Content;