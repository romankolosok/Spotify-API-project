
import getAccessToken from "./authToken.js";

async function getUserProfile() {
    const token = window.localStorage.token
    try {
        const response = await fetch('https://api.spotify.com/v1/me', {headers: {
                Authorization:`Bearer ${token}`
            }})

        if(response.ok){
            const jsonResponse = await response.json()
            return jsonResponse
        }
    } catch(error) {
        console.log(error)
    }

}

export default getUserProfile;
