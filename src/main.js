import Vue from 'vue'
import router from './router'
import axios from 'axios';
import VueAxios from "vue-axios";

import env from './env';

import App from './App.vue';

import './assets/styles/reset.scss';

axios.defaults.baseURL = env.baseURL
axios.defaults.timeout = 8000
axios.interceptors.response.use(response => {
  let res = response.data
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    window.location.href = '/login'
  } else {
    alert(res.msg)
  }
})

const mock = false
if (mock) {
  require('./mock/api')
}

Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
