import {createBrowserRouter} from "react-router-dom";
import Users from "../scenes/Users/Users";
import Home2 from "../scenes/home/Home2";
import {BASE_PATH, HOME_PATH, USERS_PATH} from "../constants/paths";
import _404 from "../components/errrorpages/404";
import Layout from "../components/layout/layout/Layout";

export const myRoutes = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: BASE_PATH,
                element: <Home2/>
            },
            {
                path: HOME_PATH,
                element: <Home2/>
            },
            {
                path: USERS_PATH,
                element: <Users/>
            },
            {
                path: "*",
                element: <_404/>
            }
        ]
    }
]);
