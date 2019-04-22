import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://neopixel.ddns.net:4000',
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  callback(code, redirectUri) {
    return instance.post('/oauth/callback', { code: code, redirectUri: redirectUri });
  }
};
