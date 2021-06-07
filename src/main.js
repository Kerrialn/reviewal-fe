import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '@mdi/font/css/materialdesignicons.css'
import VueAxios from 'vue-axios'
import VueSocialauth from 'vue-social-auth'

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(Buefy)

Vue.use(VueSocialauth, {

  providers: {
    facebook: {
      clientId: '486937362414266',
      redirectUri: 'https://reviewal.herokuapp.com/api/auth/facebook'
    }
  }
})

require('@/store/subscriber')

store.dispatch('auth/attempt', localStorage.getItem('token')).then(()=>{
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
});
