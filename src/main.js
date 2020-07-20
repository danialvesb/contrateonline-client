import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBell, faSearch, faHome, faStar, faUsers, faRocket, faBusinessTime,
  faSign, faSignInAlt, faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';
import './axios/index';

library.add(faBell, faSearch, faHome,
  faStar, faUsers, faRocket, faBusinessTime, faSign, faSignInAlt, faSpinner);

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
