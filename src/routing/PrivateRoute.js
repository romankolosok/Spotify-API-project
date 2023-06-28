import {Navigate, Outlet} from "react-router-dom";
import React from "react";

function PrivateRoute() {
    return window.localStorage.token ? <Outlet/> : <Navigate to="/login"/>
}

export default PrivateRoute;