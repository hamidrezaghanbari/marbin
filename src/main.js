import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

import router from './services/routing/Router';

import JwPagination from 'jw-vue-pagination';
Vue.component('jw-pagination', JwPagination);


import VueCookie from 'vue-cookies'
Vue.use(VueCookie);

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate);

import { store } from './store/store';

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
