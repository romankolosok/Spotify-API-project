const clientId = '29be6f36210b470786513c0db11ac395'
const clientSecret = '5066adbf1259412ab377af458b380c56'


async function getAccessToken() {
    const url = 'https://accounts.spotify.com/api/token'
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })

        if(response.ok) {
            const {access_token} = await response.json()
            return access_token
        }
    } catch(error) {
        console.log(error)
    }
}

export default getAccessToken;