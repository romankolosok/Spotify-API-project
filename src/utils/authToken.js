
const clientId = '29be6f36210b470786513c0db11ac395'
const clientSecret = '5066adbf1259412ab377af458b380c56'

export function authorizeUser() {
    const scope = 'user-read-private user-read-email user-library-modify playlist-modify-private';

    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(clientId);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURI('http://localhost:3000/');
    return url
}

export function getCode() {
    const queryString = window.location.hash
    const token = queryString.slice(queryString.indexOf("=") + 1, queryString.indexOf("&"))
    window.localStorage.token = token
    return token
}

export function getToken(){
    const code = getCode()

    let body = "grant_type=authorization_code"
    body += "&code=" + code
    body += "&redirect_uri=" + encodeURI('http://localhost:3000/')
    body += "&client_id=" + clientId
    body += "&client_secret=" + clientSecret
    console.log({body})

    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://accounts.spotify.com/api/token', true)
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.setRequestHeader('Authorization', `Basic ${btoa(clientId + ":" + clientSecret)}`)
    xhr.send(body)
    xhr.onload = handleAuthResponse
    //     const response = await fetch(, {
    //         method: 'POST',
    //         headers: {
    //             'Authorization': 'Basic ' + (btoa(clientId + ':' + clientSecret)),
    //             'Contebt-Type': 'application/x-www-form-urlencoded'
    //         },
    //         body: `grant_type=authorization_code&code=${code}&redirect_uri=${encodeURI('http://localhost:3000/')}&client_id=${clientId}&client_secret=${clientSecret}`
    //     })
    // console.log(response)
    //     if(response.ok) {
    //         const jsonResponse = await response.json()
    //         return jsonResponse
    //     }

}

function handleAuthResponse() {

}



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