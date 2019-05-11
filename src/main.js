import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './routes'
import VueResource from 'vue-resource'
import store from './store'

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000/';

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
});


