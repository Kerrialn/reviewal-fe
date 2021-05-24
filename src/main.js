import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '@mdi/font/css/materialdesignicons.css'

axios.defaults.baseURL = process.env.BE_URL
Vue.config.productionTip = false
Vue.use(axios)
Vue.use(Buefy)

require('@/store/subscriber')

store.dispatch('auth/attempt', localStorage.getItem('token')).then(()=>{
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
});
