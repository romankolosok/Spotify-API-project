import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";

function PageRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<SignInPage/>} path="/sign-in"/>
                <Route element={<HomePage/>} path="/"/>
            </Routes>
        </BrowserRouter>
    )
}

export default PageRouter;