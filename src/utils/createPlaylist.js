
async function createPlaylist(userId, name, trackURIList){
    const body = {
        "name": name
    }
    const token = sessionStorage.token
    const urlToFetch = `https://api.spotify.com/v1/users/${userId}/playlists`

    try{
        const response = await fetch(urlToFetch, {method: 'POST', headers: {
                'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        if(response.ok){
            const jsonResponse = await response.json()
            const {id} = jsonResponse
            const result = await addItemsToPlaylist(id, trackURIList)
            return result
        }
    } catch(error) {
        console.log(error)
    }
}

async function addItemsToPlaylist(playlistId, trackURIList) {
    const urlToFetch = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`
    const body = {
        "uris": trackURIList
    }

    const token = sessionStorage.token
    try {
        const response = await fetch(urlToFetch, {method: 'POST', headers: {
                'Authorization':`Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        const jsonResponse = await response.json()
        return jsonResponse
    } catch(error) {
        console.log(error)
    }
}

export default createPlaylist;