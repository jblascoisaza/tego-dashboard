import { BASE_WEB_URL, CLIENT_ID } from '../../../config.json';

const oauthURL = new URL('https://discordapp.com/oauth2/authorize');
oauthURL.search = new URLSearchParams([
  ['redirect_uri', BASE_WEB_URL],
  ['response_type', 'code'],
  ['scope', ['identify', 'guilds'].join(' ')],
  ['client_id', CLIENT_ID]
]);

const namespaced = true;

const state = {
  oauthURL: decodeURIComponent(oauthURL)
};

export default {
  namespaced,
  state
};
