import './App.css';
import React from "react";
import {RouterProvider} from "react-router-dom";
import {myRoutes} from "./Routes/Routes";

function App() {
    return (
        <div className="App">
            <RouterProvider router={myRoutes}/>
        </div>
    );
}

export default App;
