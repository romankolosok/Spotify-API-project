
async function getTracksList(inputString) {
    const url = 'https://api.spotify.com/v1/search'
    const searchParams = `?type=track&q=${inputString.replace(/\s/g,"+")}`
    const urlToFetch = url + searchParams
    const token = sessionStorage.token
    console.log({token: token})

    try{
        const response = await fetch(urlToFetch, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        if(response.ok) {
            const jsonResponse = await response.json()
            const {items} = jsonResponse.tracks
            return items
        }
    } catch(error) {
        console.log(error)
    }
}

export default getTracksList;