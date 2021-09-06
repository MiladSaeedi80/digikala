import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/font/font.css'
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')




// npm install --save fortawesome bootstrap @fortawesome/fontawesome-svg-core swiper @fortawesome/vue-fontawesome @popperjs/core @fortawesome/fontawesome-free