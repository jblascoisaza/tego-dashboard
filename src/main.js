import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import 'nprogress/nprogress.css';
import NProgress from 'nprogress';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.use(BootstrapVue);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = store.getters['oAuth/isAuthenticated'];

  if (requiresAuth && !isAuthenticated) {
    next('/');
  } else {
    next();
  }
});

export const PBar = NProgress;
PBar.configure({ showSpinner: false });

library.add(faCoffee);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
