export default {
  state: {
    isActive: false,
  },
  mutations: {
    setToggleSideBar(state, data) {
      state.isActive = data;
    },
  },
  getters: {
    isActiveSideBar(state) {
      return state.isActive;
    },
  },
  actions: {
    toggleSideBar({ commit }) {
      commit('setToggleSideBar', this.state.isActive = !this.state.isActive);
    },
  },
};
