import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify/lib/framework'
import '@mdi/font/css/materialdesignicons.css'
Vue.config.productionTip = false
Vue.use(Vuetify)

const vuetify = new Vuetify({
})

new Vue({
    vuetify,
    render: h => h(App)
}).$mount('#app')
