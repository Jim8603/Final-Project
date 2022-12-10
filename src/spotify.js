import axios from "axios";

const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize?";
const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirectURI = "http://localhost:3000";
const SCOPES = ["user-library-read", "playlist-read-private"];
const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/", 
  });

export const loginEndpoint = `${AUTH_ENDPOINT}client_id=${CLIENT_ID}&redirect_uri=${redirectURI}&scope=${SCOPES.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export default apiClient;