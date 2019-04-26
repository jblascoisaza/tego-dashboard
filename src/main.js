import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

Vue.use(BootstrapVue);
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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
