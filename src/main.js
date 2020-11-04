import Vue from 'vue'
import VueAxios from "vue-axios"
import VueLazyload from 'vue-lazyload'
import VueCookies from 'vue-cookies'

import router from './router'
import store from './store'
import axios from 'axios'

import env from './env'

import App from './App.vue'

import './assets/styles/reset.scss'
import 'element-ui/lib/theme-chalk/index.css'

axios.defaults.baseURL = env.baseURL
axios.defaults.timeout = 8000
axios.interceptors.response.use(response => {
  let res = response.data
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10 && window.location.pathname !== '/login') {
    window.location.href = '/login'
  } else {
    Message({
      type: 'error',
      message: res.msg
    })
  }
})

const mock = false
if (mock) {
  require('./mock/api')
}

Vue.use(VueAxios, axios);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: './assets/imgs/loading-svg/loading-bar.svg',
  attempt: 1
});
Vue.use(VueCookies)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
