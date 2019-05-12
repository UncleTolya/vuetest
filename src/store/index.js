import Vue from 'vue'
import Vuex from 'vuex'
import counter from './counter'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: null
  },
  getters: {
    USERS: state => {
      this.$resource('users').get()
        .then(resp => resp.json())
        .then(users => state.users = users);
    }
  }
})
