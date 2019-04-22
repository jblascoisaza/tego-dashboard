import { BASE_WEB_URL, CLIENT_ID } from '../../../config.json';
import oAuthService from '../../services/oAuth';
import { PBar } from '../../main';

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
  token: '',
  userData: '',
  loading: false
};

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },
  SET_USER_DATA(state, user) {
    state.userData = user;
  },
  SET_LOADING(state, status) {
    state.loading = status;
  }
};

const actions = {
  fetchToken({ commit }, code) {
    PBar.start();
    commit('SET_LOADING', true);

    oAuthService.callback(code, 'http://localhost:8080').then(res => {
      commit('SET_TOKEN', res.data.access_token);
      commit('SET_USER_DATA', res.data.user);

      PBar.done();
      commit('SET_LOADING', false);
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
