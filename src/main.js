import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vueTips from 'vue-tips'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Scroll from 'vue-slim-better-scroll'
import Vuex from 'vuex'
import store from '../store/index.js'


import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);


Vue.use(Vuex)
Vue.use(VueAwesomeSwiper)
Vue.use(Scroll)
Vue.use(vueTips)
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
