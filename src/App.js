import './App.css';
import React, {useEffect} from "react";
import PageRouter from "./Routing";
import {getAccessToken} from "./utils/authToken";

function App() {
    useEffect(() => {
        localStorage.setItem("token", "")
    }, [])

    return (
        <PageRouter/>
    )
}

export default App;
