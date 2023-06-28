import React from "react";
import {authorizeUser, getAccessToken} from "../utils/authToken";

function SignInForm ({signUser}){
    const handleSignIn = () => {
        window.location.href = authorizeUser()
        getAccessToken()
    }

    return (
        <form action="" onSubmit={(event) => {event.preventDefault()}}>
            <button onClick={handleSignIn}>LOG IN WITH SPOTIFY</button>
        </form>
    )
}

export default SignInForm;