import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import vueui from 'vuetify'
import Header from '@/components/Header'
import About from '@/components/About'

Vue.use(vueui)
Vue.use(Router)

Vue.component('app-header',Header)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Index,
    },
    {
      path: '/info',
      name: 'info',
      component: About
    }
  ]
})
