import Vue from 'vue'
import App from './App.vue'
import '@/plugins'
import vuetify from './plugins/vuetify'
import store from '@/core/store'
import router from './router'

Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
