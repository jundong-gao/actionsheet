import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import actionSheet from './actionsheet/index.js'
Vue.use(actionSheet)


new Vue({
  render: h => h(App),
}).$mount('#app')
