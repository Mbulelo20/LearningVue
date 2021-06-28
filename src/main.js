import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueResource)
Vue.use(VueMaterial)
Vue.use(BootstrapVue)


new Vue({
  el: '#app',
  render: h => h(App)
})
