import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: r => require.ensure([], () => r(require('../pages/HelloWorld.vue')), 'hellowolrd')
    },
    {
      path: '/products',
      name: 'products',
      component: r => require.ensure([], () => r(require('../pages/products.vue')), 'products')
    }
  ]
})
