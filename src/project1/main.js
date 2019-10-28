import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router/index'
import '../common/plugins/message'
import '../common/plugins/axios'
import Mock from './mock/index'
import storeModules from "./store/index"

import flexible from "flexible.js"

flexible(640,750)

Vue.use(Mock)

Vue.use(Vuex)

let store = new Vuex.Store({
  modules:storeModules
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
