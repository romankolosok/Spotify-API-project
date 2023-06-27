
import getAccessToken from "./authToken.js";

async function getUserProfile() {
    const token = await getAccessToken()
    try {
        const response = await fetch('https://api.spotify.com/v1/me', {headers: {
                Authorization:`Bearer undefined..undefined`
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
