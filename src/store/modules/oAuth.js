import { BASE_WEB_URL, CLIENT_ID } from '../../../config.json';
import oAuthService from '../../services/oAuth';

const oauthURL = new URL('https://discordapp.com/oauth2/authorize');
oauthURL.search = new URLSearchParams([
  ['redirect_uri', BASE_WEB_URL],
  ['response_type', 'code'],
  ['scope', ['identify', 'guilds'].join(' ')],
  ['client_id', CLIENT_ID]
]);

const namespaced = true;

const state = {
  oauthURL: decodeURIComponent(oauthURL),
  token: ''
};

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  }
};

const actions = {
  fetchToken({ commit }, code) {
    oAuthService.callback(code, 'http://localhost:8080').then(res => {
      commit('SET_TOKEN', res.data.access_token);
    });
  }
};

const getters = {
  isAuthenticated: state => !!state.token
};

export default {
  namespaced,
  state,
  mutations,
  actions,
  getters
};
