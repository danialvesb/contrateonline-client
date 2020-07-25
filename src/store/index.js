import Vue from 'vue';
import Vuex from 'vuex';
import uiToggleSideBar from '@/store/modules/components/buttons/uiToggleSideBar';
import offers from '@/store/modules/components/offers';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    uiToggleSideBar,
    offers,
  },
});
