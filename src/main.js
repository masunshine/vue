import Vue from 'vue'
import App from './App.vue'
import Components from './components/common/index'
Vue.use(Components)

import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import '@/assets/sass/index.scss'
Vue.use(Mint)
// Vue.use(ElementUI)

import router from './components/router/index'
import store from './components/vuex/index'
import http from './components/js/http'
Vue.prototype.$http = http

Vue.config.productionTip = false
Vue.config.silent = true

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
