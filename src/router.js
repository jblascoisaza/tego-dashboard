import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Guilds from './views/Guilds.vue';
import Manage from './views/Manage.vue';
import Premium from './views/Pricing.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/premium',
      name: 'premium',
      component: Premium
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/guilds',
      name: 'guilds',
      component: Guilds,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/guild/:id',
      name: 'manage',
      component: Manage
    }
  ]
});
