import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Muban from './views/Muban.vue'
import WriteLitter from './views/WriteLitter.vue'
import Dispatch from './views/Dispatch.vue'
import Notice from './views/Notice.vue'
import DispatchView from './views/DispatchView.vue'
import About from './views/About.vue'
import Paixingbang from './views/Paixingbang.vue'
import Huifu from './views/Huifu.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
      {
          path: '/Muban',
          name: 'Muban',
          component: Muban
      },
      {
          path: '/WriteLitter',
          name: 'WriteLitter',
          component: WriteLitter
      },
      {
          path: '/Dispatch',
          name: 'Dispatch',
          component: Dispatch
      },
      {
          path: '/Notice',
          name: 'Notice',
          component: Notice
      },
      {
          path: '/DispatchView',
          name: 'DispatchView',
          component: DispatchView
      },
      {
          path: '/About',
          name: 'About',
          component: About
      },
      {
          path: '/Paixingbang',
          name: 'Paixingbang',
          component: Paixingbang
      },
      {
          path: '/Huifu',
          name: 'Huifu',
          component: Huifu
      },
  ]
})
