import Vue from 'vue'
import App from './App.vue'


import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false
library.add(faHeart)

Vue.component('font-awesome-icon', FontAwesomeIcon)

export const eventBus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
