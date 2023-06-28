import {BrowserRouter, Route, Routes} from "react-router-dom"
import React from "react";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import PrivateRoute from "./routing/PrivateRoute";

function PageRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<SignInPage/>} path="/login"/>
                <Route element={<HomePage/>} path="/home"/>
                <Route element={<SignInPage/>} path="*"/>
            </Routes>
        </BrowserRouter>
    )
}

export default PageRouter;