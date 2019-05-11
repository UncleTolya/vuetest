export default {
  state: {
    counter: 0
  },
  mutations: {
    changeCounter(state, val) {
      state.counter += val;
    }
  },
  actions: {
    asyncChangeCounter({commit}, val) {
      setTimeout(() => {
        commit('changeCounter', val)
      }, 100)
    }
  },
  getters: {
    computedCounter(state) {
      return state.counter * 10;
    }
  }

}
