import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './routes.js'
import store from './store/index.js'
import { BootstrapVue } from 'bootstrap-vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

Vue.use(BootstrapVue)

export const bus = new Vue();

/* eslint-disable */
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
