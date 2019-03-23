// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueNoiseGeneratorePlugin from './plugins/VueNoiseGeneratorPlugin'

Vue.use(VueNoiseGeneratorePlugin)

Vue.config.productionTip = false

Vue.filter('lowercase', (key) => {
  return key.toLowerCase()
})
Vue.filter('leftpad', (value) => {
  if (value >= 10) {
    return value
  }
  return '0' + value
})
Vue.filter('uppercase', (key) => {
  return key.toUpperCase()
})
Vue.filter('addspace', (value) => {
  return value + ' '
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
