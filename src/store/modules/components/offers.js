export default {
  state: {
    offers: [],
  },
  mutations: {
    setOffers(state, data) {
      state.offers = data;
    },
  },
  getters: {
    getOffers(state) {
      return state.offers;
    },
  },
  actions: {
    loadOffers({ commit }, payload) {
      commit('setOffers', payload);
    },
  },
};
