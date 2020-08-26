let accessToken;
const clientId = 'cbc3bcfb07794267bca5b92e5c9546b1';
const redirectURI = 'http://localhost:3000/';
const authorizationUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectURI}&scope=${scope}&response_type=token`
const endpoints = '';
const url = 'https://api.spotify.com/v1/me'
const scope = 'playlist-modify-public'

let Spotify = {};


Spotify.getAccessToken = (accessToken) => {
    let tokenRe = '/access_token=([^&]*)/';
    let expirationRe = '/expires_in=([^&]*)/';
    let expiration = '';

    if (!accessToken) {
        accessToken = window.location.href.match(tokenRe)[1];
        expiration = window.location.href.match(expirationRe)[1];

        window.setTimeout(() => accessToken = '', expiresIn * expiration);
        window.history.pushState('Access Token', null, '/');

        return accessToken;
    } else if (!window.location.href(tokenRe)) {
        window.location[authorizationUrl];

    } else {
        return;
    }
}