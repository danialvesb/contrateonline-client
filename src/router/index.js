import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/dashboard/dashboard.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/inicio',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/*',
    redirect: { name: 'Dashboard' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
