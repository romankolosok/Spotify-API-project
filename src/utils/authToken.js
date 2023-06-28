const clientId = '29be6f36210b470786513c0db11ac395'

export function authorizeUser() {
    const scope = 'user-read-private user-read-email user-library-modify playlist-modify-private playlist-read-private playlist-read-collaborative playlist-modify-private playlist-modify-public';

    let url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(clientId);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURI('http://localhost:3000/home');
    return url
}

export function getAccessToken() {
    const queryString = window.location.hash
    const token = queryString.slice(queryString.indexOf("=") + 1, queryString.indexOf("&"))
    if(token){
        sessionStorage.setItem("token", token)
    }
    window.history.pushState("", "", 'http://localhost:3000/home')
    return token
}

