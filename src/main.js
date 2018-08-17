import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

/*Vue.use(router)*/



new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
