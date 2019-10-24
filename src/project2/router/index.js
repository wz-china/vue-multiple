import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import products from '../components/products'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/project2',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/products',
      name: 'products',
      component: products
    }
  ]
})
