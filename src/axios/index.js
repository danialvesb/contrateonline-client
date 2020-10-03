import Vue from 'vue';
import axios from 'axios';

import { getCookie } from '@/helpers';

Vue.use({
  // eslint-disable-next-line no-shadow
  install(Vue) {
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$http = axios.create({
      baseURL: 'http://34.236.96.150/api/',
    });
    Vue.prototype.$http.interceptors.request.use(async (config) => {
      if (!config.url.endsWith('login') || !config.url.endsWith('refresh')) {
        const userToken = await getCookie('access_token');
        // eslint-disable-next-line no-param-reassign
        config.headers.Authorization = `${userToken}`;
      }
      return config;
    }, (error) => Promise.reject(error));
  },
});
