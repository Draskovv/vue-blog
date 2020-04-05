import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1',
    headers: { 'Content-Type': 'application/json' }
});

instance.interceptors.request.use((config) => {
    config.url = `${config.url}?key=AIzaSyDbUK9mZLLcGkgb0afsh9Ji4eN-YtdEK0Y`

    return config;
});

export default instance;