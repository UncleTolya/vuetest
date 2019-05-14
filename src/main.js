import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './routes'
import VueResource from 'vue-resource'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import Highcharts from "highcharts";
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsVue from "highcharts-vue";
import tl from 'highcharts/modules/timeline'

HighchartsMore(Highcharts);
tl(Highcharts);

Vue.use(HighchartsVue, {Highcharts});



Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(Vuetify);
Vue.http.options.root = 'http://localhost:3000/';

new Vue({
  el: '#app',
  render: h => h(App),
  router,
});


